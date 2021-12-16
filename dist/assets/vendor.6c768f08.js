function Vo(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const kg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rg=Vo(kg);function ru(t){return!!t||t===""}function $o(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=xe(r)?Pg(r):$o(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(xe(t))return t;if(ke(t))return t}}const Ng=/;(?![^(]*\))/g,Og=/:(.+)/;function Pg(t){const e={};return t.split(Ng).forEach(n=>{if(n){const r=n.split(Og);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Bo(t){let e="";if(xe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=Bo(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const HA=t=>t==null?"":W(t)||ke(t)&&(t.toString===au||!J(t.toString))?JSON.stringify(t,iu,2):String(t),iu=(t,e)=>e&&e.__v_isRef?iu(t,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:su(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!W(e)&&!cu(e)?String(e):e,ge={},zn=[],dt=()=>{},xg=()=>!1,Dg=/^on[^a-z]/,Gi=t=>Dg.test(t),jo=t=>t.startsWith("onUpdate:"),We=Object.assign,zo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mg=Object.prototype.hasOwnProperty,ne=(t,e)=>Mg.call(t,e),W=Array.isArray,qn=t=>Yi(t)==="[object Map]",su=t=>Yi(t)==="[object Set]",J=t=>typeof t=="function",xe=t=>typeof t=="string",qo=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",ou=t=>ke(t)&&J(t.then)&&J(t.catch),au=Object.prototype.toString,Yi=t=>au.call(t),Lg=t=>Yi(t).slice(8,-1),cu=t=>Yi(t)==="[object Object]",Ho=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xi=Vo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ji=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ug=/-(\w)/g,Et=Ji(t=>t.replace(Ug,(e,n)=>n?n.toUpperCase():"")),Fg=/\B([A-Z])/g,Hn=Ji(t=>t.replace(Fg,"-$1").toLowerCase()),Qi=Ji(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ko=Ji(t=>t?`on${Qi(t)}`:""),Dr=(t,e)=>!Object.is(t,e),Wo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lu;const $g=()=>lu||(lu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let pn;const es=[];class Bg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&pn&&(this.parent=pn,this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(es.push(this),pn=this)}off(){this.active&&(es.pop(),pn=es[es.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function jg(t,e){e=e||pn,e&&e.active&&e.effects.push(t)}const Go=t=>{const e=new Set(t);return e.w=0,e.n=0,e},uu=t=>(t.w&qt)>0,hu=t=>(t.n&qt)>0,zg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qt},qg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];uu(i)&&!hu(i)?i.delete(t):e[n++]=i,i.w&=~qt,i.n&=~qt}e.length=n}},Yo=new WeakMap;let Mr=0,qt=1;const Xo=30,Lr=[];let mn;const gn=Symbol(""),Jo=Symbol("");class Qo{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],jg(this,r)}run(){if(!this.active)return this.fn();if(!Lr.includes(this))try{return Lr.push(mn=this),Hg(),qt=1<<++Mr,Mr<=Xo?zg(this):fu(this),this.fn()}finally{Mr<=Xo&&qg(this),qt=1<<--Mr,yn(),Lr.pop();const e=Lr.length;mn=e>0?Lr[e-1]:void 0}}stop(){this.active&&(fu(this),this.onStop&&this.onStop(),this.active=!1)}}function fu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kn=!0;const Zo=[];function Wn(){Zo.push(Kn),Kn=!1}function Hg(){Zo.push(Kn),Kn=!0}function yn(){const t=Zo.pop();Kn=t===void 0?!0:t}function st(t,e,n){if(!du())return;let r=Yo.get(t);r||Yo.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Go()),pu(i)}function du(){return Kn&&mn!==void 0}function pu(t,e){let n=!1;Mr<=Xo?hu(t)||(t.n|=qt,n=!uu(t)):n=!t.has(mn),n&&(t.add(mn),mn.deps.push(t))}function Pt(t,e,n,r,i,s){const o=Yo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Ho(n)&&a.push(o.get("length")):(a.push(o.get(gn)),qn(t)&&a.push(o.get(Jo)));break;case"delete":W(t)||(a.push(o.get(gn)),qn(t)&&a.push(o.get(Jo)));break;case"set":qn(t)&&a.push(o.get(gn));break}if(a.length===1)a[0]&&ea(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ea(Go(c))}}function ea(t,e){for(const n of W(t)?t:[...t])(n!==mn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Kg=Vo("__proto__,__v_isRef,__isVue"),mu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(qo)),Wg=ta(),Gg=ta(!1,!0),Yg=ta(!0),gu=Xg();function Xg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=oe(this);for(let s=0,o=this.length;s<o;s++)st(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(oe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wn();const r=oe(this)[e].apply(this,n);return yn(),r}}),t}function ta(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&s===(t?e?fy:Au:e?Iu:Tu).get(r))return r;const o=W(r);if(!t&&o&&ne(gu,i))return Reflect.get(gu,i,s);const a=Reflect.get(r,i,s);return(qo(i)?mu.has(i):Kg(i))||(t||st(r,"get",i),e)?a:Ge(a)?!o||!Ho(i)?a.value:a:ke(a)?t?Su(a):Ur(a):a}}const Jg=yu(),Qg=yu(!0);function yu(t=!1){return function(n,r,i,s){let o=n[r];if(!t&&!sa(i)&&(i=oe(i),o=oe(o),!W(n)&&Ge(o)&&!Ge(i)))return o.value=i,!0;const a=W(n)&&Ho(r)?Number(r)<n.length:ne(n,r),c=Reflect.set(n,r,i,s);return n===oe(s)&&(a?Dr(i,o)&&Pt(n,"set",r,i):Pt(n,"add",r,i)),c}}function Zg(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Pt(t,"delete",e,void 0),r}function ey(t,e){const n=Reflect.has(t,e);return(!qo(e)||!mu.has(e))&&st(t,"has",e),n}function ty(t){return st(t,"iterate",W(t)?"length":gn),Reflect.ownKeys(t)}const vu={get:Wg,set:Jg,deleteProperty:Zg,has:ey,ownKeys:ty},ny={get:Yg,set(t,e){return!0},deleteProperty(t,e){return!0}},ry=We({},vu,{get:Gg,set:Qg}),na=t=>t,ts=t=>Reflect.getPrototypeOf(t);function ns(t,e,n=!1,r=!1){t=t.__v_raw;const i=oe(t),s=oe(e);e!==s&&!n&&st(i,"get",e),!n&&st(i,"get",s);const{has:o}=ts(i),a=r?na:n?oa:Fr;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function rs(t,e=!1){const n=this.__v_raw,r=oe(n),i=oe(t);return t!==i&&!e&&st(r,"has",t),!e&&st(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function is(t,e=!1){return t=t.__v_raw,!e&&st(oe(t),"iterate",gn),Reflect.get(t,"size",t)}function wu(t){t=oe(t);const e=oe(this);return ts(e).has.call(e,t)||(e.add(t),Pt(e,"add",t,t)),this}function Eu(t,e){e=oe(e);const n=oe(this),{has:r,get:i}=ts(n);let s=r.call(n,t);s||(t=oe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Dr(e,o)&&Pt(n,"set",t,e):Pt(n,"add",t,e),this}function _u(t){const e=oe(this),{has:n,get:r}=ts(e);let i=n.call(e,t);i||(t=oe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Pt(e,"delete",t,void 0),s}function bu(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Pt(t,"clear",void 0,void 0),n}function ss(t,e){return function(r,i){const s=this,o=s.__v_raw,a=oe(o),c=e?na:t?oa:Fr;return!t&&st(a,"iterate",gn),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function os(t,e,n){return function(...r){const i=this.__v_raw,s=oe(i),o=qn(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?na:e?oa:Fr;return!e&&st(s,"iterate",c?Jo:gn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ht(t){return function(...e){return t==="delete"?!1:this}}function iy(){const t={get(s){return ns(this,s)},get size(){return is(this)},has:rs,add:wu,set:Eu,delete:_u,clear:bu,forEach:ss(!1,!1)},e={get(s){return ns(this,s,!1,!0)},get size(){return is(this)},has:rs,add:wu,set:Eu,delete:_u,clear:bu,forEach:ss(!1,!0)},n={get(s){return ns(this,s,!0)},get size(){return is(this,!0)},has(s){return rs.call(this,s,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:ss(!0,!1)},r={get(s){return ns(this,s,!0,!0)},get size(){return is(this,!0)},has(s){return rs.call(this,s,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=os(s,!1,!1),n[s]=os(s,!0,!1),e[s]=os(s,!1,!0),r[s]=os(s,!0,!0)}),[t,n,e,r]}const[sy,oy,ay,cy]=iy();function ra(t,e){const n=e?t?cy:ay:t?oy:sy;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ne(n,i)&&i in r?n:r,i,s)}const ly={get:ra(!1,!1)},uy={get:ra(!1,!0)},hy={get:ra(!0,!1)},Tu=new WeakMap,Iu=new WeakMap,Au=new WeakMap,fy=new WeakMap;function dy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function py(t){return t.__v_skip||!Object.isExtensible(t)?0:dy(Lg(t))}function Ur(t){return t&&t.__v_isReadonly?t:ia(t,!1,vu,ly,Tu)}function my(t){return ia(t,!1,ry,uy,Iu)}function Su(t){return ia(t,!0,ny,hy,Au)}function ia(t,e,n,r,i){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=py(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Gn(t){return sa(t)?Gn(t.__v_raw):!!(t&&t.__v_isReactive)}function sa(t){return!!(t&&t.__v_isReadonly)}function Cu(t){return Gn(t)||sa(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function ku(t){return Zi(t,"__v_skip",!0),t}const Fr=t=>ke(t)?Ur(t):t,oa=t=>ke(t)?Su(t):t;function Ru(t){du()&&(t=oe(t),t.dep||(t.dep=Go()),pu(t.dep))}function Nu(t,e){t=oe(t),t.dep&&ea(t.dep)}function Ge(t){return Boolean(t&&t.__v_isRef===!0)}function as(t){return Ou(t,!1)}function gy(t){return Ou(t,!0)}function Ou(t,e){return Ge(t)?t:new yy(t,e)}class yy{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:Fr(e)}get value(){return Ru(this),this._value}set value(e){e=this._shallow?e:oe(e),Dr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Fr(e),Nu(this))}}function Vr(t){return Ge(t)?t.value:t}const vy={get:(t,e,n)=>Vr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ge(i)&&!Ge(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Pu(t){return Gn(t)?t:new Proxy(t,vy)}class wy{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Qo(e,()=>{this._dirty||(this._dirty=!0,Nu(this))}),this.__v_isReadonly=r}get value(){const e=oe(this);return Ru(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Te(t,e){let n,r;const i=J(t);return i?(n=t,r=dt):(n=t.get,r=t.set),new wy(n,r,i||!r)}Promise.resolve();function Ey(t,e,...n){const r=t.vnode.props||ge;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ge;f?i=n.map(m=>m.trim()):h&&(i=n.map(Vg))}let a,c=r[a=Ko(e)]||r[a=Ko(Et(e))];!c&&s&&(c=r[a=Ko(Hn(e))]),c&&pt(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(l,t,6,i)}}function xu(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=xu(l,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(W(s)?s.forEach(c=>o[c]=null):We(o,s),r.set(t,o),o)}function aa(t,e){return!t||!Gi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Hn(e))||ne(t,e))}let _t=null,Du=null;function cs(t){const e=_t;return _t=t,Du=t&&t.type.__scopeId||null,e}function _y(t,e=_t,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&th(-1);const s=cs(e),o=t(...i);return cs(s),r._d&&th(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ca(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:S}=t;let b,v;const w=cs(t);try{if(n.shapeFlag&4){const V=i||r;b=bt(u.call(V,V,h,s,m,f,g)),v=c}else{const V=e;b=bt(V.length>1?V(s,{attrs:c,slots:a,emit:l}):V(s,null)),v=e.props?c:by(c)}}catch(V){Br.length=0,Hr(V,t,1),b=De($r)}let L=b;if(v&&S!==!1){const V=Object.keys(v),{shapeFlag:se}=L;V.length&&se&(1|6)&&(o&&V.some(jo)&&(v=Ty(v,o)),L=zr(L,v))}return n.dirs&&(L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),b=L,cs(w),b}const by=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gi(n))&&((e||(e={}))[n]=t[n]);return e},Ty=(t,e)=>{const n={};for(const r in t)(!jo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iy(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mu(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!aa(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Mu(r,o,l):!0:!!o;return!1}function Mu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!aa(n,s))return!0}return!1}function Ay({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sy=t=>t.__isSuspense;function Cy(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Tv(t)}function ls(t,e){if(Re){let n=Re.provides;const r=Re.parent&&Re.parent.provides;r===n&&(n=Re.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=Re||_t;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&J(e)?e.call(r.proxy):e}}function Yn(t){return J(t)?{setup:t,name:t.name}:t}const la=t=>!!t.type.__asyncLoader;function KA(t){J(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let m;return c||(m=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((S,b)=>{a(g,()=>S(h()),()=>b(g),u+1)});throw g}).then(g=>m!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),l=g,g)))};return Yn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const m=Re;if(l)return()=>ua(l,m);const g=w=>{c=null,Hr(w,m,13,!r)};if(o&&m.suspense||qr)return f().then(w=>()=>ua(w,m)).catch(w=>(g(w),()=>r?De(r,{error:w}):null));const S=as(!1),b=as(),v=as(!!i);return i&&setTimeout(()=>{v.value=!1},i),s!=null&&setTimeout(()=>{if(!S.value&&!b.value){const w=new Error(`Async component timed out after ${s}ms.`);g(w),b.value=w}},s),f().then(()=>{S.value=!0,m.parent&&ha(m.parent.vnode)&&Aa(m.parent.update)}).catch(w=>{g(w),b.value=w}),()=>{if(S.value&&l)return ua(l,m);if(b.value&&r)return De(r,{error:b.value});if(n&&!v.value)return De(n)}}})}function ua(t,{vnode:{ref:e,props:n,children:r}}){const i=De(t,n,r);return i.ref=e,i}const ha=t=>t.type.__isKeepAlive;function ky(t,e){Lu(t,"a",e)}function Ry(t,e){Lu(t,"da",e)}function Lu(t,e,n=Re){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(us(e,r,n),n){let i=n.parent;for(;i&&i.parent;)ha(i.parent.vnode)&&Ny(r,e,n,i),i=i.parent}}function Ny(t,e,n,r){const i=us(e,t,r,!0);Uu(()=>{zo(r[e],i)},n)}function us(t,e,n=Re,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Wn(),Xn(n);const a=pt(e,n,t,o);return bn(),yn(),a});return r?i.unshift(s):i.push(s),s}}const xt=t=>(e,n=Re)=>(!qr||t==="sp")&&us(t,e,n),Oy=xt("bm"),Py=xt("m"),xy=xt("bu"),Dy=xt("u"),My=xt("bum"),Uu=xt("um"),Ly=xt("sp"),Uy=xt("rtg"),Fy=xt("rtc");function Vy(t,e=Re){us("ec",t,e)}let fa=!0;function $y(t){const e=$u(t),n=t.proxy,r=t.ctx;fa=!1,e.beforeCreate&&Fu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:S,deactivated:b,beforeDestroy:v,beforeUnmount:w,destroyed:L,unmounted:V,render:se,renderTracked:re,renderTriggered:be,errorCaptured:yt,serverPrefetch:$e,expose:Ke,inheritAttrs:Rt,components:Nt,directives:Fn,filters:Vn}=e;if(l&&By(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const le=o[pe];J(le)&&(r[pe]=le.bind(n))}if(i){const pe=i.call(n,n);ke(pe)&&(t.data=Ur(pe))}if(fa=!0,s)for(const pe in s){const le=s[pe],ut=J(le)?le.bind(n,n):J(le.get)?le.get.bind(n,n):dt,Bn=!J(le)&&J(le.set)?le.set.bind(n):dt,Ot=Te({get:ut,set:Bn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:vt=>Ot.value=vt})}if(a)for(const pe in a)Vu(a[pe],r,n,pe);if(c){const pe=J(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(le=>{ls(le,pe[le])})}u&&Fu(u,t,"c");function Ce(pe,le){W(le)?le.forEach(ut=>pe(ut.bind(n))):le&&pe(le.bind(n))}if(Ce(Oy,h),Ce(Py,f),Ce(xy,m),Ce(Dy,g),Ce(ky,S),Ce(Ry,b),Ce(Vy,yt),Ce(Fy,re),Ce(Uy,be),Ce(My,w),Ce(Uu,V),Ce(Ly,$e),W(Ke))if(Ke.length){const pe=t.exposed||(t.exposed={});Ke.forEach(le=>{Object.defineProperty(pe,le,{get:()=>n[le],set:ut=>n[le]=ut})})}else t.exposed||(t.exposed={});se&&t.render===dt&&(t.render=se),Rt!=null&&(t.inheritAttrs=Rt),Nt&&(t.components=Nt),Fn&&(t.directives=Fn)}function By(t,e,n=dt,r=!1){W(t)&&(t=da(t));for(const i in t){const s=t[i];let o;ke(s)?"default"in s?o=Kt(s.from||i,s.default,!0):o=Kt(s.from||i):o=Kt(s),Ge(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Fu(t,e,n){pt(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vu(t,e,n,r){const i=r.includes(".")?yh(n,r):()=>n[r];if(xe(t)){const s=e[t];J(s)&&Xr(i,s)}else if(J(t))Xr(i,t.bind(n));else if(ke(t))if(W(t))t.forEach(s=>Vu(s,e,n,r));else{const s=J(t.handler)?t.handler.bind(n):e[t.handler];J(s)&&Xr(i,s,t)}}function $u(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>hs(c,l,o,!0)),hs(c,e,o)),s.set(e,c),c}function hs(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&hs(t,s,n,!0),i&&i.forEach(o=>hs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=jy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jy={data:Bu,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:vn,directives:vn,watch:qy,provide:Bu,inject:zy};function Bu(t,e){return e?t?function(){return We(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function zy(t,e){return vn(da(t),da(e))}function da(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?We(We(Object.create(null),t),e):e}function qy(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=Ye(t[r],e[r]);return n}function Hy(t,e,n,r=!1){const i={},s={};Zi(s,ps,1),t.propsDefaults=Object.create(null),ju(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:my(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Ky(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=oe(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const m=e[f];if(c)if(ne(s,f))m!==s[f]&&(s[f]=m,l=!0);else{const g=Et(f);i[g]=pa(c,a,g,m,t,!1)}else m!==s[f]&&(s[f]=m,l=!0)}}}else{ju(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Hn(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=pa(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ne(e,h))&&(delete s[h],l=!0)}l&&Pt(t,"set","$attrs")}function ju(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xi(c))continue;const l=e[c];let u;i&&ne(i,u=Et(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:aa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=oe(n),l=a||ge;for(let u=0;u<s.length;u++){const h=s[u];n[h]=pa(i,c,h,l[h],t,!ne(l,h))}}return o}function pa(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Xn(i),r=l[n]=c.call(null,e),bn())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Hn(n))&&(r=!0))}return r}function zu(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,m]=zu(h,e,!0);We(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,zn),zn;if(W(s))for(let u=0;u<s.length;u++){const h=Et(s[u]);qu(h)&&(o[h]=ge)}else if(s)for(const u in s){const h=Et(u);if(qu(h)){const f=s[u],m=o[h]=W(f)||J(f)?{type:f}:f;if(m){const g=Wu(Boolean,m.type),S=Wu(String,m.type);m[0]=g>-1,m[1]=S<0||g<S,(g>-1||ne(m,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function qu(t){return t[0]!=="$"}function Hu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ku(t,e){return Hu(t)===Hu(e)}function Wu(t,e){return W(e)?e.findIndex(n=>Ku(n,t)):J(e)&&Ku(e,t)?0:-1}const Gu=t=>t[0]==="_"||t==="$stable",ma=t=>W(t)?t.map(bt):[bt(t)],Wy=(t,e,n)=>{const r=_y((...i)=>ma(e(...i)),n);return r._c=!1,r},Yu=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Gu(i))continue;const s=t[i];if(J(s))e[i]=Wy(i,s,r);else if(s!=null){const o=ma(s);e[i]=()=>o}}},Xu=(t,e)=>{const n=ma(e);t.slots.default=()=>n},Gy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Zi(e,"_",n)):Yu(e,t.slots={})}else t.slots={},e&&Xu(t,e);Zi(t.slots,ps,1)},Yy=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ge;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(We(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Yu(e,i)),o=e}else e&&(Xu(t,e),o={default:1});if(s)for(const a in i)!Gu(a)&&!(a in o)&&delete i[a]};function wn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Wn(),pt(c,n,8,[t.el,a,t,e]),yn())}}function Ju(){return{app:null,config:{isNativeTag:xg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xy=0;function Jy(t,e){return function(r,i=null){i!=null&&!ke(i)&&(i=null);const s=Ju(),o=new Set;let a=!1;const c=s.app={_uid:Xy++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Av,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const f=De(r,i);return f.appContext=s,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,_a(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function ga(t,e,n,r,i=!1){if(W(t)){t.forEach((f,m)=>ga(f,e&&(W(e)?e[m]:e),n,r,i));return}if(la(r)&&!i)return;const s=r.shapeFlag&4?_a(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(xe(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):Ge(l)&&(l.value=null)),J(c))Gt(c,a,12,[o,u]);else{const f=xe(c),m=Ge(c);if(f||m){const g=()=>{if(t.f){const S=f?u[c]:c.value;i?W(S)&&zo(S,s):W(S)?S.includes(s)||S.push(s):f?u[c]=[s]:(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ne(h,c)&&(h[c]=o)):Ge(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,et(g,n)):g()}}}const et=Cy;function Qy(t){return Zy(t)}function Zy(t,e){const n=$g();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=dt,cloneNode:g,insertStaticContent:S}=t,b=(d,p,y,T=null,_=null,k=null,O=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!jr(d,p)&&(T=U(d),ht(d,_,k,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:$,shapeFlag:D}=p;switch(I){case ya:v(d,p,y,T);break;case $r:w(d,p,y,T);break;case fs:d==null&&L(p,y,T,O);break;case Dt:Fn(d,p,y,T,_,k,O,C,R);break;default:D&1?re(d,p,y,T,_,k,O,C,R):D&6?Vn(d,p,y,T,_,k,O,C,R):(D&64||D&128)&&I.process(d,p,y,T,_,k,O,C,R,me)}$!=null&&_&&ga($,d&&d.ref,k,p||d,!p)},v=(d,p,y,T)=>{if(d==null)r(p.el=a(p.children),y,T);else{const _=p.el=d.el;p.children!==d.children&&l(_,p.children)}},w=(d,p,y,T)=>{d==null?r(p.el=c(p.children||""),y,T):p.el=d.el},L=(d,p,y,T)=>{[d.el,d.anchor]=S(d.children,p,y,T)},V=({el:d,anchor:p},y,T)=>{let _;for(;d&&d!==p;)_=f(d),r(d,y,T),d=_;r(p,y,T)},se=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),i(d),d=y;i(p)},re=(d,p,y,T,_,k,O,C,R)=>{O=O||p.type==="svg",d==null?be(p,y,T,_,k,O,C,R):Ke(d,p,_,k,O,C,R)},be=(d,p,y,T,_,k,O,C)=>{let R,I;const{type:$,props:D,shapeFlag:B,transition:H,patchFlag:te,dirs:we}=d;if(d.el&&g!==void 0&&te===-1)R=d.el=g(d.el);else{if(R=d.el=o(d.type,k,D&&D.is,D),B&8?u(R,d.children):B&16&&$e(d.children,R,null,T,_,k&&$!=="foreignObject",O,C),we&&wn(d,null,T,"created"),D){for(const ye in D)ye!=="value"&&!Xi(ye)&&s(R,ye,null,D[ye],k,d.children,T,_,N);"value"in D&&s(R,"value",null,D.value),(I=D.onVnodeBeforeMount)&&Tt(I,T,d)}yt(R,d,d.scopeId,O,T)}we&&wn(d,null,T,"beforeMount");const he=(!_||_&&!_.pendingBranch)&&H&&!H.persisted;he&&H.beforeEnter(R),r(R,p,y),((I=D&&D.onVnodeMounted)||he||we)&&et(()=>{I&&Tt(I,T,d),he&&H.enter(R),we&&wn(d,null,T,"mounted")},_)},yt=(d,p,y,T,_)=>{if(y&&m(d,y),T)for(let k=0;k<T.length;k++)m(d,T[k]);if(_){let k=_.subTree;if(p===k){const O=_.vnode;yt(d,O,O.scopeId,O.slotScopeIds,_.parent)}}},$e=(d,p,y,T,_,k,O,C,R=0)=>{for(let I=R;I<d.length;I++){const $=d[I]=C?Wt(d[I]):bt(d[I]);b(null,$,p,y,T,_,k,O,C)}},Ke=(d,p,y,T,_,k,O)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:I,dirs:$}=p;R|=d.patchFlag&16;const D=d.props||ge,B=p.props||ge;let H;y&&En(y,!1),(H=B.onVnodeBeforeUpdate)&&Tt(H,y,p,d),$&&wn(p,d,y,"beforeUpdate"),y&&En(y,!0);const te=_&&p.type!=="foreignObject";if(I?Rt(d.dynamicChildren,I,C,y,T,te,k):O||ut(d,p,C,null,y,T,te,k,!1),R>0){if(R&16)Nt(C,p,D,B,y,T,_);else if(R&2&&D.class!==B.class&&s(C,"class",null,B.class,_),R&4&&s(C,"style",D.style,B.style,_),R&8){const we=p.dynamicProps;for(let he=0;he<we.length;he++){const ye=we[he],ft=D[ye],jn=B[ye];(jn!==ft||ye==="value")&&s(C,ye,ft,jn,_,d.children,y,T,N)}}R&1&&d.children!==p.children&&u(C,p.children)}else!O&&I==null&&Nt(C,p,D,B,y,T,_);((H=B.onVnodeUpdated)||$)&&et(()=>{H&&Tt(H,y,p,d),$&&wn(p,d,y,"updated")},T)},Rt=(d,p,y,T,_,k,O)=>{for(let C=0;C<p.length;C++){const R=d[C],I=p[C],$=R.el&&(R.type===Dt||!jr(R,I)||R.shapeFlag&(6|64))?h(R.el):y;b(R,I,$,null,T,_,k,O,!0)}},Nt=(d,p,y,T,_,k,O)=>{if(y!==T){for(const C in T){if(Xi(C))continue;const R=T[C],I=y[C];R!==I&&C!=="value"&&s(d,C,I,R,O,p.children,_,k,N)}if(y!==ge)for(const C in y)!Xi(C)&&!(C in T)&&s(d,C,y[C],null,O,p.children,_,k,N);"value"in T&&s(d,"value",y.value,T.value)}},Fn=(d,p,y,T,_,k,O,C,R)=>{const I=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:B,slotScopeIds:H}=p;H&&(C=C?C.concat(H):H),d==null?(r(I,y,T),r($,y,T),$e(p.children,y,$,_,k,O,C,R)):D>0&&D&64&&B&&d.dynamicChildren?(Rt(d.dynamicChildren,B,y,_,k,O,C),(p.key!=null||_&&p===_.subTree)&&Qu(d,p,!0)):ut(d,p,y,$,_,k,O,C,R)},Vn=(d,p,y,T,_,k,O,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?_.ctx.activate(p,y,T,O,R):$n(p,y,T,_,k,O,R):Ce(d,p,R)},$n=(d,p,y,T,_,k,O)=>{const C=d.component=fv(d,T,_);if(ha(d)&&(C.ctx.renderer=me),dv(C),C.asyncDep){if(_&&_.registerDep(C,pe),!d.el){const R=C.subTree=De($r);w(null,R,p,y)}return}pe(C,d,p,y,_,k,O)},Ce=(d,p,y)=>{const T=p.component=d.component;if(Iy(d,p,y))if(T.asyncDep&&!T.asyncResolved){le(T,p,y);return}else T.next=p,_v(T.update),T.update();else p.component=d.component,p.el=d.el,T.vnode=p},pe=(d,p,y,T,_,k,O)=>{const C=()=>{if(d.isMounted){let{next:$,bu:D,u:B,parent:H,vnode:te}=d,we=$,he;En(d,!1),$?($.el=te.el,le(d,$,O)):$=te,D&&Wo(D),(he=$.props&&$.props.onVnodeBeforeUpdate)&&Tt(he,H,$,te),En(d,!0);const ye=ca(d),ft=d.subTree;d.subTree=ye,b(ft,ye,h(ft.el),U(ft),d,_,k),$.el=ye.el,we===null&&Ay(d,ye.el),B&&et(B,_),(he=$.props&&$.props.onVnodeUpdated)&&et(()=>Tt(he,H,$,te),_)}else{let $;const{el:D,props:B}=p,{bm:H,m:te,parent:we}=d,he=la(p);if(En(d,!1),H&&Wo(H),!he&&($=B&&B.onVnodeBeforeMount)&&Tt($,we,p),En(d,!0),D&&X){const ye=()=>{d.subTree=ca(d),X(D,d.subTree,d,_,null)};he?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=ca(d);b(null,ye,y,T,d,_,k),p.el=ye.el}if(te&&et(te,_),!he&&($=B&&B.onVnodeMounted)){const ye=p;et(()=>Tt($,we,ye),_)}p.shapeFlag&256&&d.a&&et(d.a,_),d.isMounted=!0,p=y=T=null}},R=d.effect=new Qo(C,()=>Aa(d.update),d.scope),I=d.update=R.run.bind(R);I.id=d.uid,En(d,!0),I()},le=(d,p,y)=>{p.component=d;const T=d.vnode.props;d.vnode=p,d.next=null,Ky(d,p.props,T,y),Yy(d,p.children,y),Wn(),Sa(void 0,d.update),yn()},ut=(d,p,y,T,_,k,O,C,R=!1)=>{const I=d&&d.children,$=d?d.shapeFlag:0,D=p.children,{patchFlag:B,shapeFlag:H}=p;if(B>0){if(B&128){Ot(I,D,y,T,_,k,O,C,R);return}else if(B&256){Bn(I,D,y,T,_,k,O,C,R);return}}H&8?($&16&&N(I,_,k),D!==I&&u(y,D)):$&16?H&16?Ot(I,D,y,T,_,k,O,C,R):N(I,_,k,!0):($&8&&u(y,""),H&16&&$e(D,y,T,_,k,O,C,R))},Bn=(d,p,y,T,_,k,O,C,R)=>{d=d||zn,p=p||zn;const I=d.length,$=p.length,D=Math.min(I,$);let B;for(B=0;B<D;B++){const H=p[B]=R?Wt(p[B]):bt(p[B]);b(d[B],H,y,null,_,k,O,C,R)}I>$?N(d,_,k,!0,!1,D):$e(p,y,T,_,k,O,C,R,D)},Ot=(d,p,y,T,_,k,O,C,R)=>{let I=0;const $=p.length;let D=d.length-1,B=$-1;for(;I<=D&&I<=B;){const H=d[I],te=p[I]=R?Wt(p[I]):bt(p[I]);if(jr(H,te))b(H,te,y,null,_,k,O,C,R);else break;I++}for(;I<=D&&I<=B;){const H=d[D],te=p[B]=R?Wt(p[B]):bt(p[B]);if(jr(H,te))b(H,te,y,null,_,k,O,C,R);else break;D--,B--}if(I>D){if(I<=B){const H=B+1,te=H<$?p[H].el:T;for(;I<=B;)b(null,p[I]=R?Wt(p[I]):bt(p[I]),y,te,_,k,O,C,R),I++}}else if(I>B)for(;I<=D;)ht(d[I],_,k,!0),I++;else{const H=I,te=I,we=new Map;for(I=te;I<=B;I++){const it=p[I]=R?Wt(p[I]):bt(p[I]);it.key!=null&&we.set(it.key,I)}let he,ye=0;const ft=B-te+1;let jn=!1,eu=0;const xr=new Array(ft);for(I=0;I<ft;I++)xr[I]=0;for(I=H;I<=D;I++){const it=d[I];if(ye>=ft){ht(it,_,k,!0);continue}let wt;if(it.key!=null)wt=we.get(it.key);else for(he=te;he<=B;he++)if(xr[he-te]===0&&jr(it,p[he])){wt=he;break}wt===void 0?ht(it,_,k,!0):(xr[wt-te]=I+1,wt>=eu?eu=wt:jn=!0,b(it,p[wt],y,null,_,k,O,C,R),ye++)}const tu=jn?ev(xr):zn;for(he=tu.length-1,I=ft-1;I>=0;I--){const it=te+I,wt=p[it],nu=it+1<$?p[it+1].el:T;xr[I]===0?b(null,wt,y,nu,_,k,O,C,R):jn&&(he<0||I!==tu[he]?vt(wt,y,nu,2):he--)}}},vt=(d,p,y,T,_=null)=>{const{el:k,type:O,transition:C,children:R,shapeFlag:I}=d;if(I&6){vt(d.component.subTree,p,y,T);return}if(I&128){d.suspense.move(p,y,T);return}if(I&64){O.move(d,p,y,me);return}if(O===Dt){r(k,p,y);for(let D=0;D<R.length;D++)vt(R[D],p,y,T);r(d.anchor,p,y);return}if(O===fs){V(d,p,y);return}if(T!==2&&I&1&&C)if(T===0)C.beforeEnter(k),r(k,p,y),et(()=>C.enter(k),_);else{const{leave:D,delayLeave:B,afterLeave:H}=C,te=()=>r(k,p,y),we=()=>{D(k,()=>{te(),H&&H()})};B?B(k,te,we):we()}else r(k,p,y)},ht=(d,p,y,T=!1,_=!1)=>{const{type:k,props:O,ref:C,children:R,dynamicChildren:I,shapeFlag:$,patchFlag:D,dirs:B}=d;if(C!=null&&ga(C,null,y,d,!0),$&256){p.ctx.deactivate(d);return}const H=$&1&&B,te=!la(d);let we;if(te&&(we=O&&O.onVnodeBeforeUnmount)&&Tt(we,p,d),$&6)M(d.component,y,T);else{if($&128){d.suspense.unmount(y,T);return}H&&wn(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,y,_,me,T):I&&(k!==Dt||D>0&&D&64)?N(I,p,y,!1,!0):(k===Dt&&D&(128|256)||!_&&$&16)&&N(R,p,y),T&&Fo(d)}(te&&(we=O&&O.onVnodeUnmounted)||H)&&et(()=>{we&&Tt(we,p,d),H&&wn(d,null,p,"unmounted")},y)},Fo=d=>{const{type:p,el:y,anchor:T,transition:_}=d;if(p===Dt){E(y,T);return}if(p===fs){se(d);return}const k=()=>{i(y),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:O,delayLeave:C}=_,R=()=>O(y,k);C?C(d.el,k,R):R()}else k()},E=(d,p)=>{let y;for(;d!==p;)y=f(d),i(d),d=y;i(p)},M=(d,p,y)=>{const{bum:T,scope:_,update:k,subTree:O,um:C}=d;T&&Wo(T),_.stop(),k&&(k.active=!1,ht(O,d,p,y)),C&&et(C,p),et(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,y,T=!1,_=!1,k=0)=>{for(let O=k;O<d.length;O++)ht(d[O],p,y,T,_)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ue=(d,p,y)=>{d==null?p._vnode&&ht(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,y),dh(),p._vnode=d},me={p:b,um:ht,m:vt,r:Fo,mt:$n,mc:$e,pc:ut,pbc:Rt,n:U,o:t};let Q,X;return e&&([Q,X]=e(me)),{render:ue,hydrate:Q,createApp:Jy(ue,Q)}}function En({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qu(t,e,n=!1){const r=t.children,i=e.children;if(W(r)&&W(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Wt(i[s]),a.el=o.el),n||Qu(o,a))}}function ev(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const tv=t=>t.__isTeleport,Zu="components";function WA(t,e){return rv(Zu,t,!0,e)||t}const nv=Symbol();function rv(t,e,n=!0,r=!1){const i=_t||Re;if(i){const s=i.type;if(t===Zu){const a=yv(s);if(a&&(a===e||a===Et(e)||a===Qi(Et(e))))return s}const o=eh(i[t]||s[t],e)||eh(i.appContext[t],e);return!o&&r?s:o}}function eh(t,e){return t&&(t[e]||t[Et(e)]||t[Qi(Et(e))])}const Dt=Symbol(void 0),ya=Symbol(void 0),$r=Symbol(void 0),fs=Symbol(void 0),Br=[];let _n=null;function GA(t=!1){Br.push(_n=t?null:[])}function iv(){Br.pop(),_n=Br[Br.length-1]||null}let ds=1;function th(t){ds+=t}function nh(t){return t.dynamicChildren=ds>0?_n||zn:null,iv(),ds>0&&_n&&_n.push(t),t}function YA(t,e,n,r,i,s){return nh(ih(t,e,n,r,i,s,!0))}function XA(t,e,n,r,i){return nh(De(t,e,n,r,i,!0))}function va(t){return t?t.__v_isVNode===!0:!1}function jr(t,e){return t.type===e.type&&t.key===e.key}const ps="__vInternal",rh=({key:t})=>t!=null?t:null,ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||Ge(t)||J(t)?{i:_t,r:t,k:e,f:!!n}:t:null;function ih(t,e=null,n=null,r=0,i=null,s=t===Dt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rh(e),ref:e&&ms(e),scopeId:Du,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(wa(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),ds>0&&!o&&_n&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&_n.push(c),c}const De=sv;function sv(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===nv)&&(t=$r),va(t)){const a=zr(t,e,!0);return n&&wa(a,n),a}if(vv(t)&&(t=t.__vccOpts),e){e=ov(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=Bo(a)),ke(c)&&(Cu(c)&&!W(c)&&(c=We({},c)),e.style=$o(c))}const o=xe(t)?1:Sy(t)?128:tv(t)?64:ke(t)?4:J(t)?2:0;return ih(t,e,n,r,i,o,s,!0)}function ov(t){return t?Cu(t)||ps in t?We({},t):t:null}function zr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?cv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rh(a),ref:e&&e.ref?n&&i?W(i)?i.concat(ms(e)):[i,ms(e)]:ms(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor}}function av(t=" ",e=0){return De(ya,null,t,e)}function JA(t,e){const n=De(fs,null,t);return n.staticCount=e,n}function bt(t){return t==null||typeof t=="boolean"?De($r):W(t)?De(Dt,null,t.slice()):typeof t=="object"?Wt(t):De(ya,null,String(t))}function Wt(t){return t.el===null||t.memo?t:zr(t)}function wa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),wa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ps in e)?e._ctx=_t:i===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),r&64?(n=16,e=[av(e)]):n=8);t.children=e,t.shapeFlag|=n}function cv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Bo([e.class,r.class]));else if(i==="style")e.style=$o([e.style,r.style]);else if(Gi(i)){const s=e[i],o=r[i];s!==o&&!(W(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Tt(t,e,n,r=null){pt(t,e,7,[n,r])}function QA(t,e,n,r){let i;const s=n&&n[r];if(W(t)||xe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ke(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Ea=t=>t?sh(t)?_a(t)||t.proxy:Ea(t.parent):null,gs=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ea(t.parent),$root:t=>Ea(t.root),$emit:t=>t.emit,$options:t=>$u(t),$forceUpdate:t=>()=>Aa(t.update),$nextTick:t=>uh.bind(t.proxy),$watch:t=>Iv.bind(t)}),lv={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ge&&ne(r,e))return o[e]=1,r[e];if(i!==ge&&ne(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,s[e];if(n!==ge&&ne(n,e))return o[e]=4,n[e];fa&&(o[e]=0)}}const u=gs[e];let h,f;if(u)return e==="$attrs"&&st(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&ne(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;if(i!==ge&&ne(i,e))i[e]=n;else if(r!==ge&&ne(r,e))r[e]=n;else if(ne(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ge&&ne(t,o)||e!==ge&&ne(e,o)||(a=s[0])&&ne(a,o)||ne(r,o)||ne(gs,o)||ne(i.config.globalProperties,o)}},uv=Ju();let hv=0;function fv(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||uv,s={uid:hv++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zu(r,i),emitsOptions:xu(r,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ey.bind(null,s),t.ce&&t.ce(s),s}let Re=null;const Xn=t=>{Re=t,t.scope.on()},bn=()=>{Re&&Re.scope.off(),Re=null};function sh(t){return t.vnode.shapeFlag&4}let qr=!1;function dv(t,e=!1){qr=e;const{props:n,children:r}=t.vnode,i=sh(t);Hy(t,n,i,e),Gy(t,r);const s=i?pv(t,e):void 0;return qr=!1,s}function pv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ku(new Proxy(t.ctx,lv));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?gv(t):null;Xn(t),Wn();const s=Gt(r,t,0,[t.props,i]);if(yn(),bn(),ou(s)){if(s.then(bn,bn),e)return s.then(o=>{oh(t,o,e)}).catch(o=>{Hr(o,t,0)});t.asyncDep=s}else oh(t,s,e)}else ch(t,e)}function oh(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Pu(e)),ch(t,n)}let ah;function ch(t,e,n){const r=t.type;if(!t.render){if(!e&&ah&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=We(We({isCustomElement:s,delimiters:a},o),c);r.render=ah(i,l)}}t.render=r.render||dt}Xn(t),Wn(),$y(t),yn(),bn()}function mv(t){return new Proxy(t.attrs,{get(e,n){return st(t,"get","$attrs"),e[n]}})}function gv(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=mv(t))},slots:t.slots,emit:t.emit,expose:e}}function _a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Pu(ku(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)}}))}function yv(t){return J(t)&&t.displayName||t.name}function vv(t){return J(t)&&"__vccOpts"in t}function Gt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Hr(s,e,n)}return i}function pt(t,e,n,r){if(J(t)){const s=Gt(t,e,n,r);return s&&ou(s)&&s.catch(o=>{Hr(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(pt(t[s],e,n,r));return i}function Hr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Gt(c,null,10,[t,o,a]);return}}wv(t,n,i,r)}function wv(t,e,n,r=!0){console.error(t)}let ys=!1,ba=!1;const ot=[];let Mt=0;const Kr=[];let Wr=null,Jn=0;const Gr=[];let Yt=null,Qn=0;const lh=Promise.resolve();let Ta=null,Ia=null;function uh(t){const e=Ta||lh;return t?e.then(this?t.bind(this):t):e}function Ev(t){let e=Mt+1,n=ot.length;for(;e<n;){const r=e+n>>>1;Yr(ot[r])<t?e=r+1:n=r}return e}function Aa(t){(!ot.length||!ot.includes(t,ys&&t.allowRecurse?Mt+1:Mt))&&t!==Ia&&(t.id==null?ot.push(t):ot.splice(Ev(t.id),0,t),hh())}function hh(){!ys&&!ba&&(ba=!0,Ta=lh.then(ph))}function _v(t){const e=ot.indexOf(t);e>Mt&&ot.splice(e,1)}function fh(t,e,n,r){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),hh()}function bv(t){fh(t,Wr,Kr,Jn)}function Tv(t){fh(t,Yt,Gr,Qn)}function Sa(t,e=null){if(Kr.length){for(Ia=e,Wr=[...new Set(Kr)],Kr.length=0,Jn=0;Jn<Wr.length;Jn++)Wr[Jn]();Wr=null,Jn=0,Ia=null,Sa(t,e)}}function dh(t){if(Gr.length){const e=[...new Set(Gr)];if(Gr.length=0,Yt){Yt.push(...e);return}for(Yt=e,Yt.sort((n,r)=>Yr(n)-Yr(r)),Qn=0;Qn<Yt.length;Qn++)Yt[Qn]();Yt=null,Qn=0}}const Yr=t=>t.id==null?1/0:t.id;function ph(t){ba=!1,ys=!0,Sa(t),ot.sort((n,r)=>Yr(n)-Yr(r));const e=dt;try{for(Mt=0;Mt<ot.length;Mt++){const n=ot[Mt];n&&n.active!==!1&&Gt(n,null,14)}}finally{Mt=0,ot.length=0,dh(),ys=!1,Ta=null,(ot.length||Kr.length||Gr.length)&&ph(t)}}const mh={};function Xr(t,e,n){return gh(t,e,n)}function gh(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ge){const a=Re;let c,l=!1,u=!1;if(Ge(t)?(c=()=>t.value,l=!!t._shallow):Gn(t)?(c=()=>t,r=!0):W(t)?(u=!0,l=t.some(Gn),c=()=>t.map(v=>{if(Ge(v))return v.value;if(Gn(v))return Zn(v);if(J(v))return Gt(v,a,2)})):J(t)?e?c=()=>Gt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),pt(t,a,3,[f])}:c=dt,e&&r){const v=c;c=()=>Zn(v())}let h,f=v=>{h=b.onStop=()=>{Gt(v,a,4)}};if(qr)return f=dt,e?n&&pt(e,a,3,[c(),u?[]:void 0,f]):c(),dt;let m=u?[]:mh;const g=()=>{if(!!b.active)if(e){const v=b.run();(r||l||(u?v.some((w,L)=>Dr(w,m[L])):Dr(v,m)))&&(h&&h(),pt(e,a,3,[v,m===mh?void 0:m,f]),m=v)}else b.run()};g.allowRecurse=!!e;let S;i==="sync"?S=g:i==="post"?S=()=>et(g,a&&a.suspense):S=()=>{!a||a.isMounted?bv(g):g()};const b=new Qo(c,S);return e?n?g():m=b.run():i==="post"?et(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&zo(a.scope.effects,b)}}function Iv(t,e,n){const r=this.proxy,i=xe(t)?t.includes(".")?yh(r,t):()=>r[t]:t.bind(r,r);let s;J(e)?s=e:(s=e.handler,n=e);const o=Re;Xn(this);const a=gh(i,s.bind(r),n);return o?Xn(o):bn(),a}function yh(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Zn(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Zn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Zn(t[n],e);else if(su(t)||qn(t))t.forEach(n=>{Zn(n,e)});else if(cu(t))for(const n in t)Zn(t[n],e);return t}function vs(t,e,n){const r=arguments.length;return r===2?ke(e)&&!W(e)?va(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&va(n)&&(n=[n]),De(t,e,n))}const Av="3.2.26",Sv="http://www.w3.org/2000/svg",er=typeof document!="undefined"?document:null,vh=new Map,Cv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?er.createElementNS(Sv,t):er.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>er.createTextNode(t),createComment:t=>er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=vh.get(t);if(!s){const o=er.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,s=o.content,r){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}vh.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rv(t,e,n){const r=t.style,i=xe(n);if(n&&!i){for(const s in n)Ca(r,s,n[s]);if(e&&!xe(e))for(const s in e)n[s]==null&&Ca(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const wh=/\s*!important$/;function Ca(t,e,n){if(W(n))n.forEach(r=>Ca(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Nv(t,e);wh.test(n)?t.setProperty(Hn(r),n.replace(wh,""),"important"):t[r]=n}}const Eh=["Webkit","Moz","ms"],ka={};function Nv(t,e){const n=ka[e];if(n)return n;let r=Et(e);if(r!=="filter"&&r in t)return ka[e]=r;r=Qi(r);for(let i=0;i<Eh.length;i++){const s=Eh[i]+r;if(s in t)return ka[e]=s}return e}const _h="http://www.w3.org/1999/xlink";function Ov(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_h,e.slice(6,e.length)):t.setAttributeNS(_h,e,n);else{const s=Rg(e);n==null||s&&!ru(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Pv(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=ru(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let ws=Date.now,bh=!1;if(typeof window!="undefined"){ws()>document.createEvent("Event").timeStamp&&(ws=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);bh=!!(t&&Number(t[1])<=53)}let Ra=0;const xv=Promise.resolve(),Dv=()=>{Ra=0},Mv=()=>Ra||(xv.then(Dv),Ra=ws());function Lv(t,e,n,r){t.addEventListener(e,n,r)}function Uv(t,e,n,r){t.removeEventListener(e,n,r)}function Fv(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=Vv(e);if(r){const l=s[e]=$v(r,i);Lv(t,a,l,c)}else o&&(Uv(t,a,o,c),s[e]=void 0)}}const Th=/(?:Once|Passive|Capture)$/;function Vv(t){let e;if(Th.test(t)){e={};let n;for(;n=t.match(Th);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Hn(t.slice(2)),e]}function $v(t,e){const n=r=>{const i=r.timeStamp||ws();(bh||i>=n.attached-1)&&pt(Bv(r,n.value),e,5,[r])};return n.value=t,n.attached=Mv(),n}function Bv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r(i))}else return e}const Ih=/^on[a-z]/,jv=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?kv(t,r,i):e==="style"?Rv(t,n,r):Gi(e)?jo(e)||Fv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zv(t,e,r,i))?Pv(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ov(t,e,r,i))};function zv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ih.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ih.test(e)&&xe(n)?!1:e in t}const qv=["ctrl","shift","alt","meta"],Hv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qv.some(n=>t[`${n}Key`]&&!e.includes(n))},ZA=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Hv[e[i]];if(s&&s(n,e))return}return t(n,...r)},Kv=We({patchProp:jv},Cv);let Ah;function Wv(){return Ah||(Ah=Qy(Kv))}const eS=(...t)=>{const e=Wv().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Gv(r);if(!i)return;const s=e._component;!J(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Gv(t){return xe(t)?document.querySelector(t):t}/**
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
 */const Yv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qv=function(t){try{return Jv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Zv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Ch(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ew(){return Ne().indexOf("Electron/")>=0}function Rh(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tw(){return Ne().indexOf("MSAppHost/")>=0}/**
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
 */const nw="FirebaseError";class tr extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=nw,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tr(i,a,r)}}function rw(t,e){return t.replace(iw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iw=/\{\$([^}]+)}/g;function sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nh(s)&&Nh(o)){if(!Es(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nh(t){return t!==null&&typeof t=="object"}/**
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
 */function Qr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ow(t,e){const n=new aw(t,e);return n.subscribe.bind(n)}class aw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Na),i.error===void 0&&(i.error=Na),i.complete===void 0&&(i.complete=Na);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hw(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uw(t){return t===Tn?void 0:t}function hw(t){return t.instantiationMode==="EAGER"}/**
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
 */class fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const dw={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},pw=ie.INFO,mw={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},gw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=pw,this._logHandler=gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}/**
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
 */class yw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pa="@firebase/app",Oh="0.7.11";/**
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
 */const xa=new Oa("@firebase/app"),ww="@firebase/app-compat",Ew="@firebase/analytics-compat",_w="@firebase/analytics",bw="@firebase/app-check-compat",Tw="@firebase/app-check",Iw="@firebase/auth",Aw="@firebase/auth-compat",Sw="@firebase/database",Cw="@firebase/database-compat",kw="@firebase/functions",Rw="@firebase/functions-compat",Nw="@firebase/installations",Ow="@firebase/installations-compat",Pw="@firebase/messaging",xw="@firebase/messaging-compat",Dw="@firebase/performance",Mw="@firebase/performance-compat",Lw="@firebase/remote-config",Uw="@firebase/remote-config-compat",Fw="@firebase/storage",Vw="@firebase/storage-compat",$w="@firebase/firestore",Bw="@firebase/firestore-compat",jw="firebase",zw="9.6.1";/**
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
 */const Ph="[DEFAULT]",qw={[Pa]:"fire-core",[ww]:"fire-core-compat",[_w]:"fire-analytics",[Ew]:"fire-analytics-compat",[Tw]:"fire-app-check",[bw]:"fire-app-check-compat",[Iw]:"fire-auth",[Aw]:"fire-auth-compat",[Sw]:"fire-rtdb",[Cw]:"fire-rtdb-compat",[kw]:"fire-fn",[Rw]:"fire-fn-compat",[Nw]:"fire-iid",[Ow]:"fire-iid-compat",[Pw]:"fire-fcm",[xw]:"fire-fcm-compat",[Dw]:"fire-perf",[Mw]:"fire-perf-compat",[Lw]:"fire-rc",[Uw]:"fire-rc-compat",[Fw]:"fire-gcs",[Vw]:"fire-gcs-compat",[$w]:"fire-fst",[Bw]:"fire-fst-compat","fire-js":"fire-js",[jw]:"fire-js-all"};/**
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
 */const _s=new Map,Da=new Map;function Hw(t,e){try{t.container.addComponent(e)}catch(n){xa.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Da.has(e))return xa.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,t);for(const n of _s.values())Hw(n,t);return!0}function Ma(t,e){return t.container.getProvider(e)}/**
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
 */const Kw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},bs=new Jr("app","Firebase",Kw);/**
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
 */class Ww{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
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
 */const ei=zw;function tS(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw bs.create("bad-app-name",{appName:String(r)});const i=_s.get(r);if(i){if(Es(t,i.options)&&Es(n,i.config))return i;throw bs.create("duplicate-app",{appName:r})}const s=new fw(r);for(const a of Da.values())s.addComponent(a);const o=new Ww(t,n,s);return _s.set(r,o),o}function xh(t=Ph){const e=_s.get(t);if(!e)throw bs.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let i=(r=qw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xa.warn(a.join(" "));return}Zr(new nr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */function Gw(t){Zr(new nr("platform-logger",e=>new yw(e),"PRIVATE")),Xt(Pa,Oh,t),Xt(Pa,Oh,"esm2017"),Xt("fire-js","")}Gw("");var Yw="firebase",Xw="9.6.1";/**
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
 */Xt(Yw,Xw,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function La(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Dh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jw=Dh,Mh=new Jr("auth","Firebase",Dh());/**
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
 */const Lh=new Oa("@firebase/auth");function Ts(t,...e){Lh.logLevel<=ie.ERROR&&Lh.error(`Auth (${ei}): ${t}`,...e)}/**
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
 */function It(t,...e){throw Ua(t,...e)}function At(t,...e){return Ua(t,...e)}function Uh(t,e,n){const r=Object.assign(Object.assign({},Jw()),{[e]:n});return new Jr("auth","Firebase",r).create(e,{appName:t.name})}function Qw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(t,"argument-error"),Uh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ua(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mh.create(t,...e)}function K(t,e,...n){if(!t)throw Ua(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ts(e),new Error(e)}function Ut(t,e){t||Lt(e)}/**
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
 */const Fh=new Map;function Ft(t){Ut(t instanceof Function,"Expected a class definition");let e=Fh.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fh.set(t,e),e)}/**
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
 */function Zw(t,e){const n=Ma(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Es(s,e!=null?e:{}))return i;It(i,"already-initialized")}return n.initialize({options:e})}function e0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Fa(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function t0(){return Vh()==="http:"||Vh()==="https:"}function Vh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function n0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t0()||Ch()||"connection"in navigator)?navigator.onLine:!0}function r0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Sh()||kh()}get(){return n0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Va(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $h{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const i0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const s0=new ti(3e4,6e4);function o0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Is(t,e,n,r,i={}){return Bh(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$h.fetch()(jh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Bh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},i0),e);try{const i=new c0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $a(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $a(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Uh(t,u,l);It(t,u)}}catch(i){if(i instanceof tr)throw i;It(t,"network-request-failed")}}async function a0(t,e,n,r,i={}){const s=await Is(t,e,n,r,i);return"mfaPendingCredential"in s&&It(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jh(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Va(t.config,i):`${t.config.apiScheme}://${i}`}class c0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"timeout")),s0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function l0(t,e){return Is(t,"POST","/v1/accounts:delete",e)}async function u0(t,e){return Is(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ni(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function h0(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=ja(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ni(Ba(i.auth_time)),issuedAtTime:ni(Ba(i.iat)),expirationTime:ni(Ba(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ba(t){return Number(t)*1e3}function ja(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qv(n);return i?JSON.parse(i):(Ts("Failed to decode base64 JWT payload"),null)}catch(i){return Ts("Caught error parsing JWT payload as JSON",i),null}}function f0(t){const e=ja(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&d0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function d0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class p0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function As(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ri(t,u0(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?y0(s.providerUserInfo):[],a=g0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function m0(t){const e=mt(t);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function y0(t){return t.map(e=>{var{providerId:n}=e,r=La(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function v0(t,e){const n=await Bh(t,{},async()=>{const r=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jh(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$h.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):f0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await v0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ii;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function Jt(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=La(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new p0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new zh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return h0(this,e)}reload(){return m0(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await As(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,l0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:V,isAnonymous:se,providerData:re,stsTokenManager:be}=n;K(L&&be,e,"internal-error");const yt=ii.fromJSON(this.name,be);K(typeof L=="string",e,"internal-error"),Jt(h,e.name),Jt(f,e.name),K(typeof V=="boolean",e,"internal-error"),K(typeof se=="boolean",e,"internal-error"),Jt(m,e.name),Jt(g,e.name),Jt(S,e.name),Jt(b,e.name),Jt(v,e.name),Jt(w,e.name);const $e=new In({uid:L,auth:e,email:f,emailVerified:V,displayName:h,isAnonymous:se,photoURL:g,phoneNumber:m,tenantId:S,stsTokenManager:yt,createdAt:v,lastLoginAt:w});return re&&Array.isArray(re)&&($e.providerData=re.map(Ke=>Object.assign({},Ke))),b&&($e._redirectEventId=b),$e}static async _fromIdTokenResponse(e,n,r=!1){const i=new ii;i.updateFromServerResponse(n);const s=new In({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await As(s),s}}/**
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
 */class qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qh.type="NONE";const Hh=qh;/**
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
 */function Ss(t,e,n){return`firebase:${t}:${e}:${n}`}class rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ss("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rr(Ft(Hh),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ft(Hh);const o=Ss(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=In._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new rr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new rr(s,e,r))}}/**
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
 */function Kh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jh(e))return"Blackberry";if(Qh(e))return"Webos";if(za(e))return"Safari";if((e.includes("chrome/")||Gh(e))&&!e.includes("edge/"))return"Chrome";if(Xh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wh(t=Ne()){return/firefox\//i.test(t)}function za(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gh(t=Ne()){return/crios\//i.test(t)}function Yh(t=Ne()){return/iemobile/i.test(t)}function Xh(t=Ne()){return/android/i.test(t)}function Jh(t=Ne()){return/blackberry/i.test(t)}function Qh(t=Ne()){return/webos/i.test(t)}function Cs(t=Ne()){return/iphone|ipad|ipod/i.test(t)}function w0(t=Ne()){var e;return Cs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function E0(){return Rh()&&document.documentMode===10}function Zh(t=Ne()){return Cs(t)||Xh(t)||Qh(t)||Jh(t)||/windows phone/i.test(t)||Yh(t)}function _0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ef(t,e=[]){let n;switch(t){case"Browser":n=Kh(Ne());break;case"Worker":n=`${Kh(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${r}`}/**
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
 */class b0{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rr.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=r0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await rr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ef(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function qa(t){return mt(t)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=ow(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class nf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}/**
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
 */async function ir(t,e){return a0(t,"POST","/v1/accounts:signInWithIdp",o0(t,e))}/**
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
 */const T0="http://localhost";class An extends nf{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=La(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new An(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ir(e,n)}buildRequest(){const e={requestUri:T0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qr(n)}return e}}/**
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
 */class Ha{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class si extends Ha{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends si{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class Zt extends si{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return An._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
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
 */class en extends si{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
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
 */class tn extends si{constructor(){super("twitter.com")}static credential(e,n){return An._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
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
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await In._fromIdTokenResponse(e,r,i),o=rf(r);return new sr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rf(r);return new sr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ks extends tr{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ks(e,n,r,i)}}function sf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,s,e,r):s})}async function I0(t,e,n=!1){const r=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sr._forOperation(t,"link",r)}/**
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
 */async function A0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ri(t,sf(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=ja(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),sr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&It(r,"user-mismatch"),s}}/**
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
 */async function S0(t,e,n=!1){const r="signIn",i=await sf(t,r,e),s=await sr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function nS(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function rS(t){return mt(t).signOut()}const Rs="__sak";/**
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
 */class of{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rs,"1"),this.storage.removeItem(Rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function C0(){const t=Ne();return za(t)||Cs(t)}const k0=1e3,R0=10;class af extends of{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=C0()&&_0(),this.fallbackToPolling=Zh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);E0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,R0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},k0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}af.type="LOCAL";const N0=af;/**
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
 */class cf extends of{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cf.type="SESSION";const lf=cf;/**
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
 */function O0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await O0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ns.receivers=[];/**
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
 */function Ka(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class P0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Ka("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function St(){return window}function x0(t){St().location.href=t}/**
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
 */function uf(){return typeof St().WorkerGlobalScope!="undefined"&&typeof St().importScripts=="function"}async function D0(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function L0(){return uf()?self:null}/**
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
 */const hf="firebaseLocalStorageDb",U0=1,Os="firebaseLocalStorage",ff="fbase_key";class oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ps(t,e){return t.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function F0(){const t=indexedDB.deleteDatabase(hf);return new oi(t).toPromise()}function Wa(){const t=indexedDB.open(hf,U0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Os,{keyPath:ff})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Os)?e(r):(r.close(),await F0(),e(await Wa()))})})}async function df(t,e,n){const r=Ps(t,!0).put({[ff]:e,value:n});return new oi(r).toPromise()}async function V0(t,e){const n=Ps(t,!1).get(e),r=await new oi(n).toPromise();return r===void 0?null:r.value}function pf(t,e){const n=Ps(t,!0).delete(e);return new oi(n).toPromise()}const $0=800,B0=3;class mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>B0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ns._getInstance(L0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await D0(),!this.activeServiceWorker)return;this.sender=new P0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wa();return await df(e,Rs,"1"),await pf(e,Rs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>V0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ps(i,!1).getAll();return new oi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mf.type="LOCAL";const j0=mf;/**
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
 */function z0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function q0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",z0().appendChild(r)})}function H0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ti(3e4,6e4);/**
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
 */function gf(t,e){return e?Ft(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ga extends nf{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function K0(t){return S0(t.auth,new Ga(t),t.bypassAuthState)}function W0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),A0(n,new Ga(t),t.bypassAuthState)}async function G0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),I0(n,new Ga(t),t.bypassAuthState)}/**
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
 */class yf{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return K0;case"linkViaPopup":case"linkViaRedirect":return G0;case"reauthViaPopup":case"reauthViaRedirect":return W0;default:It(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y0=new ti(2e3,1e4);class or extends yf{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Y0.get())};e()}}or.currentPopupAction=null;/**
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
 */const X0="pendingRedirect",Ya=new Map;class J0 extends yf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Ya.get(this.auth._key());if(!e){try{const r=await Q0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ya.set(this.auth._key(),e)}return this.bypassAuthState||Ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q0(t,e){const n=wf(e),r=vf(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Z0(t,e){return vf(t)._set(wf(e),"true")}function vf(t){return Ft(t._redirectPersistence)}function wf(t){return Ss(X0,t.config.apiKey,t.name)}/**
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
 */function iS(t,e,n){return eE(t,e,n)}async function eE(t,e,n){const r=qa(t);Qw(t,e,Ha);const i=gf(r,n);return await Z0(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function tE(t,e,n=!1){const r=qa(t),i=gf(r,e),o=await new J0(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nE=10*60*1e3;class rE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_f(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ef(e))}saveEventToCache(e){this.cachedEventUids.add(Ef(e)),this.lastProcessedEventTime=Date.now()}}function Ef(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _f({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _f(t);default:return!1}}/**
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
 */async function sE(t,e={}){return Is(t,"GET","/v1/projects",e)}/**
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
 */const oE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aE=/^https?/;async function cE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sE(t);for(const n of e)try{if(lE(n))return}catch{}It(t,"unauthorized-domain")}function lE(t){const e=Fa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aE.test(n))return!1;if(oE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const uE=new ti(3e4,6e4);function bf(){const t=St().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hE(t){return new Promise((e,n)=>{var r,i,s;function o(){bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bf(),n(At(t,"network-request-failed"))},timeout:uE.get()})}if((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=St().gapi)===null||s===void 0?void 0:s.load)o();else{const a=H0("iframefcb");return St()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},q0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw xs=null,e})}let xs=null;function fE(t){return xs=xs||hE(t),xs}/**
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
 */const dE=new ti(5e3,15e3),pE="__/auth/iframe",mE="emulator/auth/iframe",gE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vE(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Va(e,mE):`https://${t.config.authDomain}/${pE}`,r={apiKey:e.apiKey,appName:t.name,v:ei},i=yE.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qr(r).slice(1)}`}async function wE(t){const e=await fE(t),n=St().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:vE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=St().setTimeout(()=>{s(o)},dE.get());function c(){St().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const EE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_E=500,bE=600,TE="_blank",IE="http://localhost";class Tf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AE(t,e,n,r=_E,i=bE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},EE),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ne().toLowerCase();n&&(a=Gh(l)?TE:n),Wh(l)&&(e=e||IE,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(w0(l)&&a!=="_self")return SE(e||"",a),new Tf(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Tf(h)}function SE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CE="__/auth/handler",kE="emulator/auth/handler";function If(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ei,eventId:i};if(e instanceof Ha){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof si){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${RE(t)}?${Qr(a).slice(1)}`}function RE({config:t}){return t.emulator?Va(t,kE):`https://${t.authDomain}/${CE}`}/**
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
 */const Xa="webStorageSupport";class NE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lf,this._completeRedirectFn=tE}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=If(e,n,r,Fa(),i);return AE(e,o,Ka())}async _openRedirect(e,n,r,i){return await this._originValidation(e),x0(If(e,n,r,Fa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wE(e),r=new rE(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xa];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zh()||za()||Cs()}}const OE=NE;var Af="@firebase/auth",Sf="0.19.4";/**
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
 */class PE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DE(t){Zr(new nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),K(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ef(t)},c=new b0(o,a);return e0(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new nr("auth-internal",e=>{const n=qa(e.getProvider("auth").getImmediate());return(r=>new PE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Af,Sf,xE(t)),Xt(Af,Sf,"esm2017")}/**
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
 */function sS(t=xh()){const e=Ma(t,"auth");return e.isInitialized()?e.getImmediate():Zw(t,{popupRedirectResolver:OE,persistence:[j0,N0,lf]})}DE("Browser");var ME=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,Ja=Ja||{},z=ME||self;function Ds(){}function Qa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ai(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LE(t){return Object.prototype.hasOwnProperty.call(t,Za)&&t[Za]||(t[Za]=++UE)}var Za="closure_uid_"+(1e9*Math.random()>>>0),UE=0;function FE(t,e,n){return t.call.apply(t.bind,arguments)}function VE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=FE:Me=VE,Me.apply(null,arguments)}function Ms(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function nn(){this.s=this.s,this.o=this.o}var $E=0,BE={};nn.prototype.s=!1;nn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),$E!=0)){var t=LE(this);delete BE[t]}};nn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},kf=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function jE(t){e:{var e=x_;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rf(t){return Array.prototype.concat.apply([],arguments)}function ec(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ls(t){return/^[\s\xa0]*$/.test(t)}var Nf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function tc(t,e){return t<e?-1:t>e?1:0}var Je;e:{var Of=z.navigator;if(Of){var Pf=Of.userAgent;if(Pf){Je=Pf;break e}}Je=""}function nc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xf(t){const e={};for(const n in t)e[n]=t[n];return e}var Df="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mf(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Df.length;s++)n=Df[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function rc(t){return rc[" "](t),t}rc[" "]=Ds;function zE(t){var e=KE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var qE=Xe(Je,"Opera"),ar=Xe(Je,"Trident")||Xe(Je,"MSIE"),Lf=Xe(Je,"Edge"),ic=Lf||ar,Uf=Xe(Je,"Gecko")&&!(Xe(Je.toLowerCase(),"webkit")&&!Xe(Je,"Edge"))&&!(Xe(Je,"Trident")||Xe(Je,"MSIE"))&&!Xe(Je,"Edge"),HE=Xe(Je.toLowerCase(),"webkit")&&!Xe(Je,"Edge");function Ff(){var t=z.document;return t?t.documentMode:void 0}var Us;e:{var sc="",oc=function(){var t=Je;if(Uf)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lf)return/Edge\/([\d\.]+)/.exec(t);if(ar)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(HE)return/WebKit\/(\S+)/.exec(t);if(qE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(oc&&(sc=oc?oc[1]:""),ar){var ac=Ff();if(ac!=null&&ac>parseFloat(sc)){Us=String(ac);break e}}Us=sc}var KE={};function WE(){return zE(function(){let t=0;const e=Nf(String(Us)).split("."),n=Nf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=tc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||tc(i[2].length==0,s[2].length==0)||tc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var cc;if(z.document&&ar){var Vf=Ff();cc=Vf||parseInt(Us,10)||void 0}else cc=void 0;var GE=cc,YE=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Ds,e),z.removeEventListener("test",Ds,e)}catch{}return t}();function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};function ci(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Uf){e:{try{rc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ci.Z.h.call(this)}}Le(ci,Be);var XE={2:"touch",3:"pen",4:"mouse"};ci.prototype.h=function(){ci.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var li="closure_listenable_"+(1e6*Math.random()|0),JE=0;function QE(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++JE,this.ca=this.fa=!1}function Fs(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Vs(t){this.src=t,this.g={},this.h=0}Vs.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=uc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new QE(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function lc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Cf(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Fs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function uc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var hc="closure_lm_"+(1e6*Math.random()|0),fc={};function $f(t,e,n,r,i){if(r&&r.once)return jf(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$f(t,e[s],n,r,i);return null}return n=gc(n),t&&t[li]?t.N(e,n,ai(r)?!!r.capture:!!r,i):Bf(t,e,n,!1,r,i)}function Bf(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ai(i)?!!i.capture:!!i,a=pc(t);if(a||(t[hc]=a=new Vs(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ZE(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)YE||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(qf(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZE(){function t(n){return e.call(t.src,t.listener,n)}var e=e_;return t}function jf(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)jf(t,e[s],n,r,i);return null}return n=gc(n),t&&t[li]?t.O(e,n,ai(r)?!!r.capture:!!r,i):Bf(t,e,n,!0,r,i)}function zf(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)zf(t,e[s],n,r,i);else r=ai(r)?!!r.capture:!!r,n=gc(n),t&&t[li]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=uc(s,n,r,i),-1<n&&(Fs(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=pc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=uc(e,n,r,i)),(n=-1<t?e[t]:null)&&dc(n))}function dc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[li])lc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(qf(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pc(e))?(lc(n,t),n.h==0&&(n.src=null,e[hc]=null)):Fs(t)}}}function qf(t){return t in fc?fc[t]:fc[t]="on"+t}function e_(t,e){if(t.ca)t=!0;else{e=new ci(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&dc(t),t=n.call(r,e)}return t}function pc(t){return t=t[hc],t instanceof Vs?t:null}var mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function gc(t){return typeof t=="function"?t:(t[mc]||(t[mc]=function(e){return t.handleEvent(e)}),t[mc])}function Oe(){nn.call(this),this.i=new Vs(this),this.P=this,this.I=null}Le(Oe,nn);Oe.prototype[li]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){zf(this,t,e,n,r)};function Ue(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),Mf(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=$s(o,r,!0,e)&&i}if(o=e.g=t,i=$s(o,r,!0,e)&&i,i=$s(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=$s(o,r,!1,e)&&i}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fs(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function $s(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lc(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var yc=z.JSON.stringify;function t_(){var t=Kf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class n_{constructor(){this.h=this.g=null}add(e,n){const r=Hf.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Hf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new r_,t=>t.reset());class r_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function i_(t){z.setTimeout(()=>{throw t},0)}function vc(t,e){wc||s_(),Ec||(wc(),Ec=!0),Kf.add(t,e)}var wc;function s_(){var t=z.Promise.resolve(void 0);wc=function(){t.then(o_)}}var Ec=!1,Kf=new n_;function o_(){for(var t;t=t_();){try{t.h.call(t.g)}catch(n){i_(n)}var e=Hf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ec=!1}function Bs(t,e){Oe.call(this),this.h=t||1,this.g=e||z,this.j=Me(this.kb,this),this.l=Date.now()}Le(Bs,Oe);x=Bs.prototype;x.da=!1;x.S=null;x.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ue(this,"tick"),this.da&&(_c(this),this.start()))}};x.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _c(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}x.M=function(){Bs.Z.M.call(this),_c(this),delete this.g};function bc(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Wf(t){t.g=bc(()=>{t.g=null,t.i&&(t.i=!1,Wf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class a_ extends nn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wf(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(t){nn.call(this),this.h=t,this.g={}}Le(ui,nn);var Gf=[];function Yf(t,e,n,r){Array.isArray(n)||(n&&(Gf[0]=n.toString()),n=Gf);for(var i=0;i<n.length;i++){var s=$f(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xf(t){nc(t.g,function(e,n){this.g.hasOwnProperty(n)&&dc(e)},t),t.g={}}ui.prototype.M=function(){ui.Z.M.call(this),Xf(this)};ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function js(){this.g=!0}js.prototype.Aa=function(){this.g=!1};function c_(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function l_(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function cr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+h_(t,n)+(r?" "+r:"")})}function u_(t,e){t.info(function(){return"TIMEOUT: "+e})}js.prototype.info=function(){};function h_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return yc(n)}catch{return e}}var Sn={},Jf=null;function zs(){return Jf=Jf||new Oe}Sn.Ma="serverreachability";function Qf(t){Be.call(this,Sn.Ma,t)}Le(Qf,Be);function hi(t){const e=zs();Ue(e,new Qf(e,t))}Sn.STAT_EVENT="statevent";function Zf(t,e){Be.call(this,Sn.STAT_EVENT,t),this.stat=e}Le(Zf,Be);function Qe(t){const e=zs();Ue(e,new Zf(e,t))}Sn.Na="timingevent";function ed(t,e){Be.call(this,Sn.Na,t),this.size=e}Le(ed,Be);function fi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var qs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},td={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tc(){}Tc.prototype.h=null;function nd(t){return t.h||(t.h=t.i())}function rd(){}var di={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ic(){Be.call(this,"d")}Le(Ic,Be);function Ac(){Be.call(this,"c")}Le(Ac,Be);var Sc;function Hs(){}Le(Hs,Tc);Hs.prototype.g=function(){return new XMLHttpRequest};Hs.prototype.i=function(){return{}};Sc=new Hs;function pi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ui(this),this.P=f_,t=ic?125:void 0,this.W=new Bs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new id}function id(){this.i=null,this.g="",this.h=!1}var f_=45e3,Cc={},Ks={};x=pi.prototype;x.setTimeout=function(t){this.P=t};function kc(t,e,n){t.K=1,t.v=Js(Vt(e)),t.s=n,t.U=!0,sd(t,null)}function sd(t,e){t.F=Date.now(),mi(t),t.A=Vt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),pd(n.h,"t",r),t.C=0,n=t.l.H,t.h=new id,t.g=Ud(t.l,n?e:null,!t.s),0<t.O&&(t.L=new a_(Me(t.Ia,t,t.g),t.O)),Yf(t.V,t.g,"readystatechange",t.gb),e=t.H?xf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),hi(1),c_(t.j,t.u,t.A,t.m,t.X,t.s)}x.gb=function(t){t=t.target;const e=this.L;e&&$t(t)==3?e.l():this.Ia(t)};x.Ia=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||ic||this.g&&(this.h.h||this.g.ga()||Sd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?hi(3):hi(2)),Ws(this);var n=this.g.ba();this.N=n;t:if(od(this)){var r=Sd(this.g);t="";var i=r.length,s=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Cn(this),gi(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,l_(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ls(a)){var l=a;break t}}l=null}if(n=l)cr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rc(this,n);else{this.i=!1,this.o=3,Qe(12),Cn(this),gi(this);break e}}this.U?(ad(this,u,o),ic&&this.i&&u==3&&(Yf(this.V,this.W,"tick",this.fb),this.W.start())):(cr(this.j,this.m,o,null),Rc(this,o)),u==4&&Cn(this),this.i&&!this.I&&(u==4?xd(this.l,this):(this.i=!1,mi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),Cn(this),gi(this)}}}catch{}finally{}};function od(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ad(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=d_(t,n),i==Ks){e==4&&(t.o=4,Qe(14),r=!1),cr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Cc){t.o=4,Qe(15),cr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else cr(t.j,t.m,i,null),Rc(t,i);od(t)&&i!=Ks&&i!=Cc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),$c(e),e.L=!0,Qe(11))):(cr(t.j,t.m,n,"[Invalid Chunked Response]"),Cn(t),gi(t))}x.fb=function(){if(this.g){var t=$t(this.g),e=this.g.ga();this.C<e.length&&(Ws(this),ad(this,t,e),this.i&&t!=4&&mi(this))}};function d_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ks:(n=Number(e.substring(n,r)),isNaN(n)?Cc:(r+=1,r+n>e.length?Ks:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.I=!0,Cn(this)};function mi(t){t.Y=Date.now()+t.P,cd(t,t.P)}function cd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fi(Me(t.eb,t),e)}function Ws(t){t.B&&(z.clearTimeout(t.B),t.B=null)}x.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(u_(this.j,this.A),this.K!=2&&(hi(3),Qe(17)),Cn(this),this.o=2,gi(this)):cd(this,this.Y-t)};function gi(t){t.l.G==0||t.I||xd(t.l,t)}function Cn(t){Ws(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_c(t.W),Xf(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Rc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pc(n.i,t))){if(n.I=t.N,!t.J&&Pc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ro(n),to(n);else break e;Vc(n),Qe(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=fi(Me(n.ab,n),6e3));if(1>=yd(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Nn(n,11)}else if((t.J||n.g==t)&&ro(n),!Ls(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(Xe(g,"spdy")||Xe(g,"quic")||Xe(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xc(s,s.h),s.h=null))}if(r.D){const S=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.sa=S,Ee(r.F,r.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Ld(r,r.H?r.la:null,r.W),o.J){vd(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ws(a),mi(a)),r.g=o}else Od(r);0<n.l.length&&no(n)}else l[0]!="stop"&&l[0]!="close"||Nn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Nn(n,7):Uc(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}hi(4)}catch{}}function p_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Qa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Nc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Qa(t)||typeof t=="string")kf(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Qa(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=p_(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function lr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof lr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}x=lr.prototype;x.R=function(){Oc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};x.T=function(){return Oc(this),this.g.concat()};function Oc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];kn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],kn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}x.get=function(t,e){return kn(this.h,t)?this.h[t]:e};x.set=function(t,e){kn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};x.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ld=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function m_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Rn){this.g=e!==void 0?e:t.g,Gs(this,t.j),this.s=t.s,Ys(this,t.i),Xs(this,t.m),this.l=t.l,e=t.h;var n=new wi;n.i=e.i,e.g&&(n.g=new lr(e.g),n.h=e.h),ud(this,n),this.o=t.o}else t&&(n=String(t).match(ld))?(this.g=!!e,Gs(this,n[1]||"",!0),this.s=yi(n[2]||""),Ys(this,n[3]||"",!0),Xs(this,n[4]),this.l=yi(n[5]||"",!0),ud(this,n[6]||"",!0),this.o=yi(n[7]||"")):(this.g=!!e,this.h=new wi(null,this.g))}Rn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vi(e,hd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vi(e,hd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(vi(n,n.charAt(0)=="/"?E_:w_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vi(n,b_)),t.join("")};function Vt(t){return new Rn(t)}function Gs(t,e,n){t.j=n?yi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ys(t,e,n){t.i=n?yi(e,!0):e}function Xs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ud(t,e,n){e instanceof wi?(t.h=e,T_(t.h,t.g)):(n||(e=vi(e,__)),t.h=new wi(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function Js(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function g_(t){return t instanceof Rn?Vt(t):new Rn(t,void 0)}function y_(t,e,n,r){var i=new Rn(null,void 0);return t&&Gs(i,t),e&&Ys(i,e),n&&Xs(i,n),r&&(i.l=r),i}function yi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,v_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function v_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hd=/[#\/\?@]/g,w_=/[#\?:]/g,E_=/[#\?]/g,__=/[#\?@]/g,b_=/#/g;function wi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new lr,t.h=0,t.i&&m_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=wi.prototype;x.add=function(t,e){rn(this),this.i=null,t=ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fd(t,e){rn(t),e=ur(t,e),kn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,kn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Oc(t)))}function dd(t,e){return rn(t),e=ur(t,e),kn(t.g.h,e)}x.forEach=function(t,e){rn(this),this.g.forEach(function(n,r){kf(n,function(i){t.call(e,i,r,this)},this)},this)};x.T=function(){rn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};x.R=function(t){rn(this);var e=[];if(typeof t=="string")dd(this,t)&&(e=Rf(e,this.g.get(ur(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rf(e,t[n])}return e};x.set=function(t,e){return rn(this),this.i=null,t=ur(this,t),dd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function pd(t,e,n){fd(t,e),0<n.length&&(t.i=null,t.g.set(ur(t,e),ec(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function T_(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(fd(this,r),pd(this,i,n))},t)),t.j=e}var I_=class{constructor(t,e){this.h=t,this.g=e}};function md(t){this.l=t||A_,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var A_=10;function gd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yd(t){return t.h?1:t.g?t.g.size:0}function Pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xc(t,e){t.g?t.g.add(e):t.h=e}function vd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}md.prototype.cancel=function(){if(this.i=wd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ec(t.i)}function Dc(){}Dc.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Dc.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function S_(){this.g=new Dc}function C_(t,e,n){const r=n||"";try{Nc(t,function(i,s){let o=i;ai(i)&&(o=yc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function k_(t,e){const n=new js;if(z.Image){const r=new Image;r.onload=Ms(Qs,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ms(Qs,n,r,"TestLoadImage: error",!1,e),r.onabort=Ms(Qs,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ms(Qs,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Qs(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ei(t){this.l=t.$b||null,this.j=t.ib||!1}Le(Ei,Tc);Ei.prototype.g=function(){return new Zs(this.l,this.j)};Ei.prototype.i=function(t){return function(){return t}}({});function Zs(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Zs,Oe);var Mc=0;x=Zs.prototype;x.open=function(t,e){if(this.readyState!=Mc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=Mc};x.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ed(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ed(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}x.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_i(this):bi(this),this.readyState==3&&Ed(this)}};x.Ua=function(t){this.g&&(this.response=this.responseText=t,_i(this))};x.Ta=function(t){this.g&&(this.response=t,_i(this))};x.ha=function(){this.g&&_i(this)};function _i(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var R_=z.JSON.parse;function Ie(t){Oe.call(this),this.headers=new lr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_d,this.K=this.L=!1}Le(Ie,Oe);var _d="",N_=/^https?$/i,O_=["POST","PUT"];x=Ie.prototype;x.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Sc.g(),this.C=this.u?nd(this.u):nd(Sc),this.g.onreadystatechange=Me(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){bd(this,s);return}t=n||"";const i=new lr(this.headers);r&&Nc(r,function(s,o){i.set(o,s)}),r=jE(i.T()),n=z.FormData&&t instanceof z.FormData,!(0<=Cf(O_,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ad(this),0<this.B&&((this.K=P_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.pa,this)):this.A=bc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){bd(this,s)}};function P_(t){return ar&&WE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function x_(t){return t.toLowerCase()=="content-type"}x.pa=function(){typeof Ja!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function bd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Td(t),eo(t)}function Td(t){t.D||(t.D=!0,Ue(t,"complete"),Ue(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),eo(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),eo(this,!0)),Ie.Z.M.call(this)};x.Fa=function(){this.s||(this.F||this.v||this.l?Id(this):this.cb())};x.cb=function(){Id(this)};function Id(t){if(t.h&&typeof Ja!="undefined"&&(!t.C[1]||$t(t)!=4||t.ba()!=2)){if(t.v&&$t(t)==4)bc(t.Fa,0,t);else if(Ue(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(ld)[1]||null;if(!i&&z.self&&z.self.location){var s=z.self.location.protocol;i=s.substr(0,s.length-1)}r=!N_.test(i?i.toLowerCase():"")}n=r}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var o=2<$t(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Td(t)}}finally{eo(t)}}}}function eo(t,e){if(t.g){Ad(t);const n=t.g,r=t.C[0]?Ds:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ad(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function $t(t){return t.g?t.g.readyState:0}x.ba=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};x.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),R_(e)}};function Sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _d:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Da=function(){return this.m};x.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function D_(t){let e="";return nc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Lc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=D_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cd(t){this.za=0,this.l=[],this.h=new js,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ti("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ti("baseRetryDelayMs",5e3,t),this.$a=Ti("retryDelaySeedMs",1e4,t),this.Ya=Ti("forwardChannelMaxRetries",2,t),this.ra=Ti("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new md(t&&t.concurrentRequestLimit),this.Ca=new S_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}x=Cd.prototype;x.ma=8;x.G=1;function Uc(t){if(kd(t),t.G==3){var e=t.V++,n=Vt(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Ii(t,n),e=new pi(t,t.h,e,void 0),e.K=2,e.v=Js(Vt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ud(e.l,null),e.g.ea(e.v)),e.F=Date.now(),mi(e)}Md(t)}x.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function to(t){t.g&&($c(t),t.g.cancel(),t.g=null)}function kd(t){to(t),t.u&&(z.clearTimeout(t.u),t.u=null),ro(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Fc(t,e){t.l.push(new I_(t.Za++,e)),t.G==3&&no(t)}function no(t){gd(t.i)||t.m||(t.m=!0,vc(t.Ha,t),t.C=0)}function M_(t,e){return yd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=fi(Me(t.Ha,t,e),Dd(t,t.C)),t.C++,!0)}x.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new pi(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=xf(s),Mf(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nd(this,i,e),n=Vt(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),Ii(this,n),this.o&&s&&Lc(n,this.o,s),xc(this.i,i),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),i.$=!0,kc(i,n,null)):kc(i,n,e),this.G=2}}else this.G==3&&(t?Rd(this,t):this.l.length==0||gd(this.i)||Rd(this))};function Rd(t,e){var n;e?n=e.m:n=t.V++;const r=Vt(t.F);Ee(r,"SID",t.J),Ee(r,"RID",n),Ee(r,"AID",t.U),Ii(t,r),t.o&&t.s&&Lc(r,t.o,t.s),n=new pi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Nd(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xc(t.i,n),kc(n,r,e)}function Ii(t,e){t.j&&Nc({},function(n,r){Ee(e,r,n)})}function Nd(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Me(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{C_(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Od(t){t.g||t.u||(t.Y=1,vc(t.Ga,t),t.A=0)}function Vc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=fi(Me(t.Ga,t),Dd(t,t.A)),t.A++,!0)}x.Ga=function(){if(this.u=null,Pd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fi(Me(this.bb,this),t)}};x.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Qe(10),to(this),Pd(this))};function $c(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Pd(t){t.g=new pi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Vt(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),Ii(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&Lc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Js(Vt(e)),n.s=null,n.U=!0,sd(n,t)}x.ab=function(){this.v!=null&&(this.v=null,to(this),Vc(this),Qe(19))};function ro(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function xd(t,e){var n=null;if(t.g==e){ro(t),$c(t),t.g=null;var r=2}else if(Pc(t.i,e))n=e.D,vd(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=zs(),Ue(r,new ed(r,n,e,i)),no(t)}else Od(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&M_(t,e)||r==2&&Vc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Nn(t,5);break;case 4:Nn(t,10);break;case 3:Nn(t,6);break;default:Nn(t,2)}}}function Dd(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Nn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Me(t.jb,t);n||(n=new Rn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Gs(n,"https"),Js(n)),k_(n.toString(),r)}else Qe(2);t.G=0,t.j&&t.j.va(e),Md(t),kd(t)}x.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Qe(2)):(this.h.info("Failed to ping google.com"),Qe(1))};function Md(t){t.G=0,t.I=-1,t.j&&((wd(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ec(t.l),t.l.length=0),t.j.ua())}function Ld(t,e,n){let r=g_(n);if(r.i!="")e&&Ys(r,e+"."+r.i),Xs(r,r.m);else{const i=z.location;r=y_(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&nc(t.aa,function(i,s){Ee(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ee(r,e,n),Ee(r,"VER",t.ma),Ii(t,r),r}function Ud(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ie(new Ei({ib:!0})):new Ie(t.qa),e.L=t.H,e}function Fd(){}x=Fd.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Oa=function(){};function io(){if(ar&&!(10<=Number(GE)))throw Error("Environmental error: no available transport.")}io.prototype.g=function(t,e){return new at(t,e)};function at(t,e){Oe.call(this),this.g=new Cd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ls(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ls(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hr(this)}Le(at,Oe);at.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),vc(Me(t.hb,t,e))),Qe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ld(t,null,t.W),no(t)};at.prototype.close=function(){Uc(this.g)};at.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Fc(this.g,e)}else this.v?(e={},e.__data__=yc(t),Fc(this.g,e)):Fc(this.g,t)};at.prototype.M=function(){this.g.j=null,delete this.j,Uc(this.g),delete this.g,at.Z.M.call(this)};function Vd(t){Ic.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(Vd,Ic);function $d(){Ac.call(this),this.status=1}Le($d,Ac);function hr(t){this.g=t}Le(hr,Fd);hr.prototype.xa=function(){Ue(this.g,"a")};hr.prototype.wa=function(t){Ue(this.g,new Vd(t))};hr.prototype.va=function(t){Ue(this.g,new $d(t))};hr.prototype.ua=function(){Ue(this.g,"b")};io.prototype.createWebChannel=io.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;qs.NO_ERROR=0;qs.TIMEOUT=8;qs.HTTP_ERROR=6;td.COMPLETE="complete";rd.EventType=di;di.OPEN="a";di.CLOSE="b";di.ERROR="c";di.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.La;Ie.prototype.getLastErrorCode=Ie.prototype.Da;Ie.prototype.getStatus=Ie.prototype.ba;Ie.prototype.getResponseJson=Ie.prototype.Qa;Ie.prototype.getResponseText=Ie.prototype.ga;Ie.prototype.send=Ie.prototype.ea;var L_=function(){return new io},U_=function(){return zs()},Bc=qs,F_=td,V_=Sn,Bd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},$_=Ei,so=rd,B_=Ie;const jd="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let fr="9.6.1";/**
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
 */const On=new Oa("@firebase/firestore");function zd(){return On.logLevel}function F(t,...e){if(On.logLevel<=ie.DEBUG){const n=e.map(jc);On.debug(`Firestore (${fr}): ${t}`,...n)}}function sn(t,...e){if(On.logLevel<=ie.ERROR){const n=e.map(jc);On.error(`Firestore (${fr}): ${t}`,...n)}}function qd(t,...e){if(On.logLevel<=ie.WARN){const n=e.map(jc);On.warn(`Firestore (${fr}): ${t}`,...n)}}function jc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: `+t;throw sn(e),new Error(e)}function fe(t,e){t||Y()}function G(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class on{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class j_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class q_{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new on;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new on,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new on)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new j_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new tt(e)}}class H_{constructor(e,n,r){this.type="FirstParty",this.user=tt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class K_{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new H_(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G_{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),new W_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class zc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function Y_(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */zc.I=-1;class Hd{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Y_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function dr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new ct(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Kd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ai{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Ai{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const X_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Ai{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return X_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class qc{constructor(e){this.fields=e,e.sort(nt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new je(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const J_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function an(t){if(fe(!!t),typeof t=="string"){let e=0;const n=J_.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
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
 */function Gd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yd(t){const e=t.mapValue.fields.__previous_value__;return Gd(e)?Yd(e):e}function Si(t){const e=an(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */function gr(t){return t==null}function oo(t){return t===0&&1/t==-1/0}function Q_(t){return typeof t=="number"&&Number.isInteger(t)&&!oo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(_e.fromString(e))}static fromName(e){return new q(_e.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new _e(e.slice()))}}/**
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
 */function Pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gd(t)?4:10:Y()}function Ct(t,e){const n=Pn(t);if(n!==Pn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Si(t).isEqual(Si(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=an(r.timestampValue),o=an(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return mr(r.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ae(r.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(r.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ae(r.integerValue)===Ae(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ae(r.doubleValue),o=Ae(i.doubleValue);return s===o?oo(s)===oo(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return dr(t.arrayValue.values||[],e.arrayValue.values||[],Ct);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Kd(s)!==Kd(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ct(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Ci(t,e){return(t.values||[]).find(n=>Ct(n,e))!==void 0}function yr(t,e){const n=Pn(t),r=Pn(e);if(n!==r)return ce(n,r);switch(n){case 0:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ae(i.integerValue||i.doubleValue),a=Ae(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xd(t.timestampValue,e.timestampValue);case 4:return Xd(Si(t),Si(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,s){const o=mr(i),a=mr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ce(o[c],a[c]);if(l!==0)return l}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ce(Ae(i.latitude),Ae(s.latitude));return o!==0?o:ce(Ae(i.longitude),Ae(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=yr(o[c],a[c]);if(l)return l}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ce(a[u],l[u]);if(h!==0)return h;const f=yr(o[a[u]],c[l[u]]);if(f!==0)return f}return ce(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=an(t),r=an(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Hc(t){return Kc(t)}function Kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=an(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Kc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Kc(r.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Wc(t){return!!t&&"integerValue"in t}function Gc(t){return!!t&&"arrayValue"in t}function Jd(t){return!!t&&"nullValue"in t}function Qd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function ki(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ki(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ki(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ki(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ki(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ct(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ao(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){pr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(ki(this.value))}}function Zd(t){const e=[];return pr(t.fields,(n,r)=>{const i=new nt([n]);if(ao(r)){const s=Zd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qc(e)}/**
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
 */class ze{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new ze(e,0,ae.min(),gt.empty(),0)}static newFoundDocument(e,n,r){return new ze(e,1,n,r,0)}static newNoDocument(e,n){return new ze(e,2,n,gt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,gt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ze(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Z_{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function ep(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Z_(t,e,n,r,i,s,o)}function Yc(t){const e=G(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tb(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=co(e.startAt)),e.endAt&&(n+="|ub:",n+=co(e.endAt)),e.R=n}return e.R}function eb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Hc(r.value)}`;var r}).join(", ")}]`),gr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+co(t.startAt)),t.endAt&&(e+=", endAt: "+co(t.endAt)),`Target(${e})`}function Xc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!lb(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ct(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rp(t.startAt,e.startAt)&&rp(t.endAt,e.endAt)}function Jc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new nb(e,n,r):n==="array-contains"?new sb(e,r):n==="in"?new ob(e,r):n==="not-in"?new ab(e,r):n==="array-contains-any"?new cb(e,r):new rt(e,n,r)}static P(e,n,r){return n==="in"?new rb(e,r):new ib(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(yr(n,this.value)):n!==null&&Pn(this.value)===Pn(n)&&this.v(yr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function tb(t){return t.field.canonicalString()+t.op.toString()+Hc(t.value)}class nb extends rt{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.v(n)}}class rb extends rt{constructor(e,n){super(e,"in",n),this.keys=tp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ib extends rt{constructor(e,n){super(e,"not-in",n),this.keys=tp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class sb extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gc(n)&&Ci(n.arrayValue,this.value)}}class ob extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ci(this.value.arrayValue,n)}}class ab extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ci(this.value.arrayValue,n)}}class cb extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}}class Qc{constructor(e,n){this.position=e,this.before=n}}function co(t){return`${t.before?"b":"a"}:${t.position.map(e=>Hc(e)).join(",")}`}class Ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function lb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function np(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=yr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function rp(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ct(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function ub(t,e,n,r,i,s,o,a){return new lo(t,e,n,r,i,s,o,a)}function Zc(t){return new lo(t)}function uo(t){return!gr(t.limit)&&t.limitType==="F"}function el(t){return!gr(t.limit)&&t.limitType==="L"}function hb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fb(t){for(const e of t.filters)if(e.V())return e.field;return null}function db(t){return t.collectionGroup!==null}function Ni(t){const e=G(t);if(e.S===null){e.S=[];const n=fb(e),r=hb(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new Ri(n)),e.S.push(new Ri(nt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Ri(nt.keyField(),s))}}}return e.S}function xn(t){const e=G(t);if(!e.D)if(e.limitType==="F")e.D=ep(e.path,e.collectionGroup,Ni(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ni(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ri(s.field,o))}const r=e.endAt?new Qc(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Qc(e.startAt.position,!e.startAt.before):null;e.D=ep(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function pb(t,e,n){return new lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ho(t,e){return Xc(xn(t),xn(e))&&t.limitType===e.limitType}function ip(t){return`${Yc(xn(t))}|lt:${t.limitType}`}function tl(t){return`Query(target=${eb(xn(t))}; limitType=${t.limitType})`}function fo(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!np(n.startAt,Ni(n),r)||n.endAt&&np(n.endAt,Ni(n),r))}(t,e)}function sp(t){return(e,n)=>{let r=!1;for(const i of Ni(t)){const s=mb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mb(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?yr(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */function op(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oo(e)?"-0":e}}function ap(t){return{integerValue:""+t}}function gb(t,e){return Q_(e)?ap(e):op(t,e)}/**
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
 */class po{constructor(){this._=void 0}}function yb(t,e,n){return t instanceof mo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Oi?lp(t,e):t instanceof Pi?up(t,e):function(r,i){const s=cp(r,i),o=hp(s)+hp(r.N);return Wc(s)&&Wc(r.N)?ap(o):op(r.k,o)}(t,e)}function vb(t,e,n){return t instanceof Oi?lp(t,e):t instanceof Pi?up(t,e):n}function cp(t,e){return t instanceof go?Wc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class mo extends po{}class Oi extends po{constructor(e){super(),this.elements=e}}function lp(t,e){const n=fp(e);for(const r of t.elements)n.some(i=>Ct(i,r))||n.push(r);return{arrayValue:{values:n}}}class Pi extends po{constructor(e){super(),this.elements=e}}function up(t,e){let n=fp(e);for(const r of t.elements)n=n.filter(i=>!Ct(i,r));return{arrayValue:{values:n}}}class go extends po{constructor(e,n){super(),this.k=e,this.N=n}}function hp(t){return Ae(t.integerValue||t.doubleValue)}function fp(t){return Gc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Oi&&r instanceof Oi||n instanceof Pi&&r instanceof Pi?dr(n.elements,r.elements,Ct):n instanceof go&&r instanceof go?Ct(n.N,r.N):n instanceof mo&&r instanceof mo}(t.transform,e.transform)}class Eb{constructor(e,n){this.version=e,this.transformResults=n}}class vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vo{}function _b(t,e,n){t instanceof wo?function(r,i,s){const o=r.value.clone(),a=gp(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(r,i,s){if(!yo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=gp(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(mp(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function nl(t,e,n){t instanceof wo?function(r,i,s){if(!yo(r.precondition,i))return;const o=r.value.clone(),a=yp(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(pp(i),o).setHasLocalMutations()}(t,e,n):t instanceof wr?function(r,i,s){if(!yo(r.precondition,i))return;const o=yp(r.fieldTransforms,s,i),a=i.data;a.setAll(mp(r)),a.setAll(o),i.convertToFoundDocument(pp(i),a).setHasLocalMutations()}(t,e,n):function(r,i){yo(r.precondition,i)&&i.convertToNoDocument(ae.min())}(t,e)}function bb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cp(r.transform,i||null);s!=null&&(n==null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function dp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&dr(n,r,(i,s)=>wb(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function pp(t){return t.isFoundDocument()?t.version:ae.min()}class wo extends vo{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class wr extends vo{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function mp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gp(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vb(o,a,n[i]))}return r}function yp(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yb(s,o,e))}return r}class Tb extends vo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Ib extends vo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Ab{constructor(e){this.count=e}}/**
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
 */var Se,Z;function Sb(t){switch(t){default:return Y();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function vp(t){if(t===void 0)return sn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Se.OK:return A.OK;case Se.CANCELLED:return A.CANCELLED;case Se.UNKNOWN:return A.UNKNOWN;case Se.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Se.INTERNAL:return A.INTERNAL;case Se.UNAVAILABLE:return A.UNAVAILABLE;case Se.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Se.NOT_FOUND:return A.NOT_FOUND;case Se.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Se.ABORTED:return A.ABORTED;case Se.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Se.DATA_LOSS:return A.DATA_LOSS;default:return Y()}}(Z=Se||(Se={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eo(this.root,e,this.comparator,!0)}}class Eo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Fe.RED,this.left=i!=null?i:Fe.EMPTY,this.right=s!=null?s:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wp(this.data.getIterator())}getIteratorFrom(e){return new wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Cb=new qe(q.comparator);function Dn(){return Cb}const kb=new qe(q.comparator);function rl(){return kb}const Rb=new qe(q.comparator);function Nb(){return Rb}const Ob=new Ve(q.comparator);function ve(...t){let e=Ob;for(const n of t)e=e.add(n);return e}const Pb=new Ve(ce);function Ep(){return Pb}/**
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
 */class _o{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,xi.createSynthesizedTargetChangeForCurrentChange(e,n)),new _o(ae.min(),r,Ep(),Dn(),ve())}}class xi{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new xi(je.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
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
 */class bo{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.F=i}}class _p{constructor(e,n){this.targetId=e,this.O=n}}class bp{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Tp{constructor(){this.M=0,this.L=Ap(),this.B=je.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.M!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=ve(),n=ve(),r=ve();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new xi(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=Ap()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class xb{constructor(e){this.et=e,this.nt=new Map,this.st=Dn(),this.it=Ip(),this.rt=new Ve(ce)}ot(e){for(const n of e.$)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.O.count,i=this.wt(n);if(i){const s=i.target;if(Jc(s))if(r===0){const o=new q(s.path);this.ct(n,o,ze.newNoDocument(o,ae.min()))}else fe(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Jc(a.target)){const c=new q(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.ct(o,c,ze.newNoDocument(c,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=ve();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new _o(e,n,this.rt,this.st,r);return this.st=Dn(),this.it=Ip(),this.rt=new Ve(ce),i}at(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Tp,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new Ve(ce),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Tp),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Ip(){return new qe(q.comparator)}function Ap(){return new qe(q.comparator)}/**
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
 */const Db=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Lb{constructor(e,n){this.databaseId=e,this.C=n}}function To(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sp(t,e){return t.C?e.toBase64():e.toUint8Array()}function Ub(t,e){return To(t,e.toTimestamp())}function Bt(t){return fe(!!t),ae.fromTimestamp(function(e){const n=an(e);return new ct(n.seconds,n.nanos)}(t))}function il(t,e){return function(n){return new _e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cp(t){const e=_e.fromString(t);return fe(xp(e)),e}function sl(t,e){return il(t.databaseId,e.path)}function ol(t,e){const n=Cp(e);if(n.get(1)!==t.databaseId.projectId)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(kp(n))}function al(t,e){return il(t.databaseId,e)}function Fb(t){const e=Cp(t);return e.length===4?_e.emptyPath():kp(e)}function cl(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kp(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rp(t,e,n){return{name:sl(t,e),fields:n.value.mapValue.fields}}function Vb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.C?(fe(l===void 0||typeof l=="string"),je.fromBase64String(l||"")):(fe(l===void 0||l instanceof Uint8Array),je.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:vp(c.code);return new j(l,c.message||"")}(o);n=new bp(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ol(t,r.document.name),s=Bt(r.document.updateTime),o=new gt({mapValue:{fields:r.document.fields}}),a=ze.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new bo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ol(t,r.document),s=r.readTime?Bt(r.readTime):ae.min(),o=ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ol(t,r.document),s=r.removedTargetIds||[];n=new bo([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Ab(i),o=r.targetId;n=new _p(o,s)}}return n}function $b(t,e){let n;if(e instanceof wo)n={update:Rp(t,e.key,e.value)};else if(e instanceof Tb)n={delete:sl(t,e.key)};else if(e instanceof wr)n={update:Rp(t,e.key,e.data),updateMask:Xb(e.fieldMask)};else{if(!(e instanceof Ib))return Y();n={verify:sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof mo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Oi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Pi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof go)return{fieldPath:s.field.canonicalString(),increment:o.N};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Ub(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function Bb(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Bt(r.updateTime):Bt(i);return s.isEqual(ae.min())&&(s=Bt(i)),new Eb(s,r.transformResults||[])}(n,e))):[]}function jb(t,e){return{documents:[al(t,e.path)]}}function zb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=al(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=al(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(Qd(u.value))return{unaryFilter:{field:Er(u.field),op:"IS_NAN"}};if(Jd(u.value))return{unaryFilter:{field:Er(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Qd(u.value))return{unaryFilter:{field:Er(u.field),op:"IS_NOT_NAN"}};if(Jd(u.value))return{unaryFilter:{field:Er(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(u.field),op:Wb(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Er(l.field),direction:Kb(l.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,c){return a.C||gr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Op(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Op(e.endAt)),n}function qb(t){let e=Fb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=Np(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ri(_r(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,gr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Pp(n.startAt));let l=null;return n.endAt&&(l=Pp(n.endAt)),ub(e,i,o,s,a,"F",c,l)}function Hb(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Np(t){return t?t.unaryFilter!==void 0?[Yb(t)]:t.fieldFilter!==void 0?[Gb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Np(e)).reduce((e,n)=>e.concat(n)):Y():[]}function Op(t){return{before:t.before,values:t.position}}function Pp(t){const e=!!t.before,n=t.values||[];return new Qc(n,e)}function Kb(t){return Db[t]}function Wb(t){return Mb[t]}function Er(t){return{fieldPath:t.canonicalString()}}function _r(t){return nt.fromServerFormat(t.fieldPath)}function Gb(t){return rt.create(_r(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_r(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_r(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_r(t.unaryFilter.field);return rt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_r(t.unaryFilter.field);return rt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function Xb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const Jb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function Di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_b(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&nl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&nl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(ae.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(n,r)=>dp(n,r))&&dr(this.baseMutations,e.baseMutations,(n,r)=>dp(n,r))}}class ll{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=Nb();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ll(e,n,r,i)}}/**
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
 */class Mn{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class eT{constructor(e){this.Gt=e}}function tT(t){const e=qb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pb(e,e.limit,"L"):e}/**
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
 */class nT{constructor(){this.zt=new rT}addToCollectionParentIndex(e,n){return this.zt.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.zt.getEntries(n))}}class rT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(_e.comparator)).toArray()}}/**
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
 */class br{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new br(0)}static re(){return new br(-1)}}/**
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
 */async function Mi(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Jb)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){pr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Wd(this.inner)}}/**
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
 */class iT{constructor(){this.changes=new Li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ae.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:ze.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Dp{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Pn(e,n,r))}Pn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):db(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new q(n)).next(r=>{let i=rl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=rl();return this.Jt.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const c=function(l,u){return new lo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Cn(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const c of s)for(const l of c.mutations){const u=l.key;let h=i.get(u);h==null&&(h=ze.newInvalidDocument(u),i=i.insert(u,h)),nl(l,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(u))}}))).next(()=>(i.forEach((o,a)=>{fo(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=ve();for(const o of n)for(const a of o.mutations)a instanceof wr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
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
 */class ul{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ul(e,n.fromCache,r,i)}}/**
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
 */class sT{Fn(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ae.min())?this.Mn(e,n):this.On.vn(e,i).next(s=>{const o=this.Ln(n,s);return(uo(n)||el(n))&&this.Bn(n.limitType,o,i,r)?this.Mn(e,n):(zd()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tl(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let r=new Ve(sp(e));return n.forEach((i,s)=>{fo(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mn(e,n){return zd()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",tl(n)),this.On.getDocumentsMatchingQuery(e,n,ae.min())}}/**
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
 */class oT{constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new qe(ce),this.Kn=new Li(s=>Yc(s),Xc),this.jn=ae.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Dp(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function aT(t,e,n,r){return new oT(t,e,n,r)}async function Mp(t,e){const n=G(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),i=new Dp(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=ve();for(const f of a){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of c){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return i.vn(o,h).next(f=>({Gn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function cT(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=P.resolve();return h.forEach(m=>{f=f.next(()=>l.getEntry(a,m)).next(g=>{const S=c.docVersions.get(m);fe(S!==null),g.version.compareTo(S)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&l.addEntry(g,c.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function Lp(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function lT(t,e){const n=G(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((l,u)=>{const h=i.get(u);if(!h)return;a.push(n.He.removeMatchingKeys(s,l.removedDocuments,u).next(()=>n.He.addMatchingKeys(s,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const m=h.withResumeToken(f,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(u,m),function(g,S,b){return fe(S.resumeToken.approximateByteSize()>0),g.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,m,l)&&a.push(n.He.updateTargetData(s,m))}});let c=Dn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(uT(s,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(ae.min())){const l=n.He.getLastRemoteSnapshotVersion(s).next(u=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,c)).next(()=>c)}).then(s=>(n.qn=i,s))}function uT(t,e,n,r,i){let s=ve();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=Dn();return n.forEach((c,l)=>{const u=o.get(c),h=(i==null?void 0:i.get(c))||r;l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function hT(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function fT(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new Mn(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function hl(t,e,n){const r=G(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Di(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function Up(t,e,n){const r=G(t);let i=ae.min(),s=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.Kn.get(l);return h!==void 0?P.resolve(u.qn.get(h)):u.He.getTargetData(c,l)}(r,o,xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:ve())).next(a=>({documents:a,zn:s})))}/**
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
 */class dT{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return P.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Bt(r.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:tT(r.bundledQuery),readTime:Bt(r.readTime)}}(n)),P.resolve()}}/**
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
 */class fl{constructor(){this.ts=new Ve(Pe.es),this.ns=new Ve(Pe.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Pe(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new q(new _e([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new q(new _e([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=ve();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return q.comparator(e.key,n.key)||ce(e.fs,n.fs)}static ss(e,n){return ce(e.fs,n.fs)||q.comparator(e.key,n.key)}}/**
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
 */class pT{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Ve(Pe.es)}checkEmpty(e){return P.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new Zb(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new Pe(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return P.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return P.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(ce);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),P.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new q(s),0);let a=new Ve(ce);return this.ws.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.fs)),!0)},o),P.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return P.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Pe(n,0),i=this.ws.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,P.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
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
 */class mT{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new qe(q.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.clone():ze.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():ze.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=Dn();const s=new q(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||fo(n,c)&&(i=i.insert(c.key,c.clone()))}return P.resolve(i)}Es(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gT(this)}getSize(e){return P.resolve(this.size)}}class gT extends iT{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
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
 */class yT{constructor(e){this.persistence=e,this.Is=new Li(n=>Yc(n),Xc),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.As=0,this.Rs=new fl,this.targetCount=0,this.Ps=br.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),P.resolve()}ce(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ps=new br(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.ce(n),P.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Rs.containsKey(n))}}/**
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
 */class vT{constructor(e,n){this.bs={},this.Be=new zc(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new yT(this),this.Jt=new nT,this.Je=function(r,i){return new mT(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new eT(n),this.Ye=new dT(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new pT(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new wT(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return P.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class wT extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class dl{constructor(e){this.persistence=e,this.Cs=new fl,this.Ns=null}static ks(e){return new dl(e)}get xs(){if(this.Ns)return this.Ns;throw Y()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),P.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.xs,r=>{const i=q.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return P.or([()=>P.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class Fp{constructor(){this.activeTargetIds=Ep()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ET{constructor(){this.pi=new Fp,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Fp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class _T{Ei(e){}shutdown(){}}/**
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
 */class Vp{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const bT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class TT{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}/**
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
 */class IT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Mi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw qd("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+fr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=bT[e];return`${this.Mi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new B_;a.listenOnce(F_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bc.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Bc.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new j(A.DEADLINE_EXCEEDED,"Request time out"));break;case Bc.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(h.status);o(new j(f,h.message))}else o(new j(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(A.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}Qi(e,n,r){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=L_(),o=U_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $_({})),this.qi(a.initMessageHeaders,n,r),Sh()||kh()||ew()||Rh()||tw()||Ch()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");F("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const f=new TT({Vi:g=>{h?F("Connection","Not sending because WebChannel is closed:",g):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",g),l.send(g))},Si:()=>l.close()}),m=(g,S,b)=>{g.listen(S,v=>{try{b(v)}catch(w){setTimeout(()=>{throw w},0)}})};return m(l,so.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),m(l,so.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.Fi())}),m(l,so.EventType.ERROR,g=>{h||(h=!0,qd("Connection","WebChannel transport errored:",g),f.Fi(new j(A.UNAVAILABLE,"The operation could not be completed")))}),m(l,so.EventType.MESSAGE,g=>{var S;if(!h){const b=g.data[0];fe(!!b);const v=b,w=v.error||((S=v[0])===null||S===void 0?void 0:S.error);if(w){F("Connection","WebChannel received error:",w);const L=w.status;let V=function(re){const be=Se[re];if(be!==void 0)return vp(be)}(L),se=w.message;V===void 0&&(V=A.INTERNAL,se="Unknown error status: "+L+" with message "+w.message),h=!0,f.Fi(new j(V,se)),l.close()}else F("Connection","WebChannel received:",b),f.Oi(b)}}),m(o,V_.STAT_EVENT,g=>{g.stat===Bd.PROXY?F("Connection","Detected buffering proxy"):g.stat===Bd.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function pl(){return typeof document!="undefined"?document:null}/**
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
 */function Io(t){return new Lb(t,!0)}class $p{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
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
 */class Bp{constructor(e,n,r,i,s,o,a,c){this.Oe=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new $p(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.ar===null&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(sn(n.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new j(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Oe.enqueueAndForget(()=>this.rr===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AT extends Bp{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=Vb(this.k,e),r=function(i){if(!("targetChange"in i))return ae.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ae.min():s.readTime?Bt(s.readTime):ae.min()}(e);return this.listener.Pr(n,r)}br(e){const n={};n.database=cl(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=Jc(a)?{documents:jb(i,a)}:{query:zb(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Sp(i,s.resumeToken):s.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=To(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=Hb(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=cl(this.k),n.removeTarget=e,this.gr(n)}}class ST extends Bp{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=Bb(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.Cr(r,n)}return fe(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=cl(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$b(this.k,r))};this.gr(n)}}/**
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
 */class CT extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(A.UNKNOWN,i.toString())})}ji(e,n,r){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(A.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class kT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){this.Or===0&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(sn(n),this.Lr=!1):F("OnlineStateTracker",n)}jr(){this.Mr!==null&&(this.Mr.cancel(),this.Mr=null)}}/**
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
 */class RT{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{Ln(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.Gr.add(4),await Ui(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Ao(c)}(this))})}),this.Jr=new kT(r,i)}}async function Ao(t){if(Ln(t))for(const e of t.zr)await e(!0)}async function Ui(t){for(const e of t.zr)await e(!1)}function jp(t,e){const n=G(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),yl(n)?gl(n):Tr(n).lr()&&ml(n,e))}function zp(t,e){const n=G(t),r=Tr(n);n.Wr.delete(e),r.lr()&&qp(n,e),n.Wr.size===0&&(r.lr()?r._r():Ln(n)&&n.Jr.set("Unknown"))}function ml(t,e){t.Yr.X(e.targetId),Tr(t).br(e)}function qp(t,e){t.Yr.X(e),Tr(t).vr(e)}function gl(t){t.Yr=new xb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Tr(t).start(),t.Jr.Br()}function yl(t){return Ln(t)&&!Tr(t).hr()&&t.Wr.size>0}function Ln(t){return G(t).Gr.size===0}function Hp(t){t.Yr=void 0}async function NT(t){t.Wr.forEach((e,n)=>{ml(t,e)})}async function OT(t,e){Hp(t),yl(t)?(t.Jr.Kr(e),gl(t)):t.Jr.set("Unknown")}async function PT(t,e,n){if(t.Jr.set("Online"),e instanceof bp&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await So(t,r)}else if(e instanceof bo?t.Yr.ot(e):e instanceof _p?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(ae.min()))try{const r=await Lp(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Wr.get(c);l&&i.Wr.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.Wr.get(a);if(!c)return;i.Wr.set(a,c.withResumeToken(je.EMPTY_BYTE_STRING,c.snapshotVersion)),qp(i,a);const l=new Mn(c.target,a,1,c.sequenceNumber);ml(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await So(t,r)}}async function So(t,e,n){if(!Di(e))throw e;t.Gr.add(1),await Ui(t),t.Jr.set("Offline"),n||(n=()=>Lp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Ao(t)})}function Kp(t,e){return e().catch(n=>So(t,n,e))}async function Co(t){const e=G(t),n=cn(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;xT(e);)try{const i=await hT(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,DT(e,i)}catch(i){await So(e,i)}Wp(e)&&Gp(e)}function xT(t){return Ln(t)&&t.Qr.length<10}function DT(t,e){t.Qr.push(e);const n=cn(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Wp(t){return Ln(t)&&!cn(t).hr()&&t.Qr.length>0}function Gp(t){cn(t).start()}async function MT(t){cn(t).kr()}async function LT(t){const e=cn(t);for(const n of t.Qr)e.Dr(n.mutations)}async function UT(t,e,n){const r=t.Qr.shift(),i=ll.from(r,e,n);await Kp(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Co(t)}async function FT(t,e){e&&cn(t).Sr&&await async function(n,r){if(i=r.code,Sb(i)&&i!==A.ABORTED){const s=n.Qr.shift();cn(n).wr(),await Kp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Co(n)}var i}(t,e),Wp(t)&&Gp(t)}async function VT(t,e){const n=G(t);e?(n.Gr.delete(2),await Ao(n)):e||(n.Gr.add(2),await Ui(n),n.Jr.set("Unknown"))}function Tr(t){return t.Xr||(t.Xr=function(e,n,r){const i=G(e);return i.Fr(),new AT(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:NT.bind(null,t),Ni:OT.bind(null,t),Pr:PT.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),yl(t)?gl(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Hp(t))})),t.Xr}function cn(t){return t.Zr||(t.Zr=function(e,n,r){const i=G(e);return i.Fr(),new ST(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:MT.bind(null,t),Ni:FT.bind(null,t),Nr:LT.bind(null,t),Cr:UT.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Co(t)):(await t.Zr.stop(),t.Qr.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
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
 */class vl{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new on,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vl(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wl(t,e){if(sn("AsyncQueue",`${e}: ${t}`),Di(t))return new j(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ir{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=rl(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Ir(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ir)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ir;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Yp{constructor(){this.eo=new qe(q.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):Y():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ar{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Ar(e,n,Ir.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class $T{constructor(){this.so=void 0,this.listeners=[]}}class BT{constructor(){this.queries=new Li(e=>ip(e),ho),this.onlineState="Unknown",this.io=new Set}}async function jT(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new $T),i)try{s.so=await n.onListen(r)}catch(o){const a=wl(o,`Initialization of query '${tl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&El(n)}async function zT(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qT(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&El(n)}function HT(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function El(t){t.io.forEach(e=>{e.next()})}class KT{constructor(e,n,r){this.query=e,this.ao=n,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ar(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.ho(e)&&(this.ao.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}/**
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
 */class Xp{constructor(e){this.key=e}}class Jp{constructor(e){this.key=e}}class WT{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=ve(),this.mutatedKeys=ve(),this.Ao=sp(e),this.Ro=new Ir(this.Ao)}get Po(){return this.To}bo(e,n){const r=n?n.vo:new Yp,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=uo(this.query)&&i.size===this.query.limit?i.last():null,l=el(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),m=fo(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;f&&m?f.data.isEqual(m.data)?g!==S&&(r.track({type:3,doc:m}),b=!0):this.Vo(f,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.Ao(m,c)>0||l&&this.Ao(m,l)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),b=!0):f&&!m&&(r.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),s=S?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),uo(this.query)||el(this.query))for(;o.size>this.query.limit;){const u=uo(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((l,u)=>function(h,f){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return m(h)-m(f)}(l.type,u.type)||this.Ao(l.doc,u.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,s.length!==0||c?{snapshot:new Ar(this.query,e.Ro,i,s,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Yp,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=ve(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new Jp(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new Xp(r))}),n}ko(e){this.To=e.zn,this.Io=ve();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Ar.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class GT{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YT{constructor(e){this.key=e,this.$o=!1}}class XT{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Fo={},this.Oo=new Li(a=>ip(a),ho),this.Mo=new Map,this.Lo=new Set,this.Bo=new qe(q.comparator),this.Uo=new Map,this.qo=new fl,this.Ko={},this.jo=new Map,this.Qo=br.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function JT(t,e){const n=aI(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await fT(n.localStore,xn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await QT(n,e,r,a==="current"),n.isPrimaryClient&&jp(n.remoteStore,o)}return i}async function QT(t,e,n,r){t.Go=(u,h,f)=>async function(m,g,S,b){let v=g.view.bo(S);v.Bn&&(v=await Up(m.localStore,g.query,!1).then(({documents:V})=>g.view.bo(V,v)));const w=b&&b.targetChanges.get(g.targetId),L=g.view.applyChanges(v,m.isPrimaryClient,w);return rm(m,g.targetId,L.Co),L.snapshot}(t,u,h,f);const i=await Up(t.localStore,e,!0),s=new WT(e,i.zn),o=s.bo(i.documents),a=xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);rm(t,n,c.Co);const l=new GT(e,n,s);return t.Oo.set(e,l),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function ZT(t,e){const n=G(t),r=n.Oo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(s=>!ho(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zp(n.remoteStore,r.targetId),_l(n,r.targetId)}).catch(Mi)):(_l(n,r.targetId),await hl(n.localStore,r.targetId,!0))}async function eI(t,e,n){const r=cI(t);try{const i=await function(s,o){const a=G(s),c=ct.now(),l=o.reduce((h,f)=>h.add(f.key),ve());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(f=>{u=f;const m=[];for(const g of o){const S=bb(g,u.get(g.key));S!=null&&m.push(new wr(g.key,S,Zd(S.value.mapValue),vr.exists(!0)))}return a.An.addMutationBatch(h,c,m,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Ko[s.currentUser.toKey()];c||(c=new qe(ce)),c=c.insert(o,a),s.Ko[s.currentUser.toKey()]=c}(r,i.batchId,n),await Fi(r,i.changes),await Co(r.remoteStore)}catch(i){const s=wl(i,"Failed to persist write");n.reject(s)}}async function Qp(t,e){const n=G(t);try{const r=await lT(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?fe(o.$o):i.removedDocuments.size>0&&(fe(o.$o),o.$o=!1))}),await Fi(n,r,e)}catch(r){await Mi(r)}}function Zp(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Oo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ro(o)&&(c=!0)}),c&&El(a)}(r.eventManager,e),i.length&&r.Fo.Pr(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tI(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new qe(q.comparator);o=o.insert(s,ze.newNoDocument(s,ae.min()));const a=ve().add(s),c=new _o(ae.min(),new Map,new Ve(ce),o,a);await Qp(r,c),r.Bo=r.Bo.remove(s),r.Uo.delete(e),bl(r)}else await hl(r.localStore,e,!1).then(()=>_l(r,e,n)).catch(Mi)}async function nI(t,e){const n=G(t),r=e.batch.batchId;try{const i=await cT(n.localStore,e);tm(n,r,null),em(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fi(n,i)}catch(i){await Mi(i)}}async function rI(t,e,n){const r=G(t);try{const i=await function(s,o){const a=G(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.An.lookupMutationBatch(c,o).next(u=>(fe(u!==null),l=u.keys(),a.An.removeMutationBatch(c,u))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,l))})}(r.localStore,e);tm(r,e,n),em(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fi(r,i)}catch(i){await Mi(i)}}function em(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function tm(t,e,n){const r=G(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function _l(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||nm(t,r)})}function nm(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(zp(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),bl(t))}function rm(t,e,n){for(const r of n)r instanceof Xp?(t.qo.addReference(r.key,e),iI(t,r)):r instanceof Jp?(F("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||nm(t,r.key)):Y()}function iI(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Lo.add(r),bl(t))}function bl(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new q(_e.fromString(e)),r=t.Qo.next();t.Uo.set(r,new YT(n)),t.Bo=t.Bo.insert(n,r),jp(t.remoteStore,new Mn(xn(Zc(n.path)),r,2,zc.I))}}async function Fi(t,e,n){const r=G(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Go(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=ul.$n(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(c,h=>P.forEach(h.kn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>P.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Di(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qn.get(h),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);l.qn=l.qn.insert(h,g)}}}(r.localStore,s))}async function sI(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Mp(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new j(A.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fi(n,r.Gn)}}function oI(t,e){const n=G(t),r=n.Uo.get(e);if(r&&r.$o)return ve().add(r.key);{let i=ve();const s=n.Mo.get(e);if(!s)return i;for(const o of s){const a=n.Oo.get(o);i=i.unionWith(a.view.Po)}return i}}function aI(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tI.bind(null,e),e.Fo.Pr=qT.bind(null,e.eventManager),e.Fo.zo=HT.bind(null,e.eventManager),e}function cI(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rI.bind(null,e),e}class lI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Io(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return aT(this.persistence,new sT,e.initialUser,this.k)}Yo(e){return new vT(dl.ks,this.k)}Jo(e){return new ET}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sI.bind(null,this.syncEngine),await VT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BT}createDatastore(e){const n=Io(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new IT(i));var i;return function(s,o,a,c){return new CT(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Zp(this.syncEngine,a,0),o=Vp.bt()?new Vp:new _T,new RT(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new XT(r,i,s,o,a,c);return l&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);F("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Ui(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
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
 */class hI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class fI{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=Hd.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new on;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dI(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function pI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mI(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=G(s);a.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const c=Ln(a);a.Gr.add(3),await Ui(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Ao(a)}(e.remoteStore,i)),t.onlineComponents=e}async function mI(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await dI(t,new lI)),t.offlineComponents}async function im(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await pI(t,new uI)),t.onlineComponents}function gI(t){return im(t).then(e=>e.syncEngine)}async function yI(t){const e=await im(t),n=e.eventManager;return n.onListen=JT.bind(null,e.syncEngine),n.onUnlisten=ZT.bind(null,e.syncEngine),n}function vI(t,e,n={}){const r=new on;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new hI({next:h=>{s.enqueueAndForget(()=>zT(i,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new j(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new j(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new KT(Zc(o.path),l,{includeMetadataChanges:!0,wo:!0});return jT(i,u)}(await yI(t),t.asyncQueue,e,n,r)),r.promise}class wI{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sm=new Map;/**
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
 */function om(t,e,n){if(!n)throw new j(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EI(t,e,n,r){if(e===!0&&r===!0)throw new j(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function am(t){if(!q.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cm(t){if(q.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ko(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tl(t);throw new j(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class lm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,EI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Il{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lm({}),this._settingsFrozen=!1,e instanceof Vi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vi(i.options.projectId)}(e))}get app(){if(!this._app)throw new j(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new z_;switch(n.type){case"gapi":const r=n.client;return fe(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new K_(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sm.get(e);n&&(F("ComponentProvider","Removing Datastore"),sm.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Al{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Al(this.firestore,e,this._query)}}class ln extends Al{constructor(e,n,r){super(e,n,Zc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new q(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function oS(t,e,...n){if(t=mt(t),om("collection","path",e),t instanceof Il){const r=_e.fromString(e,...n);return cm(r),new ln(t,null,r)}{if(!(t instanceof lt||t instanceof ln))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return cm(r),new ln(t.firestore,null,r)}}function aS(t,e,...n){if(t=mt(t),arguments.length===1&&(e=Hd.A()),om("doc","path",e),t instanceof Il){const r=_e.fromString(e,...n);return am(r),new lt(t,null,new q(r))}{if(!(t instanceof lt||t instanceof ln))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return am(r),new lt(t.firestore,t instanceof ln?t.converter:null,new q(r))}}/**
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
 */class _I{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new $p(this,"async_queue_retry"),this.Ra=()=>{const n=pl();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=pl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const n=pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const n=new on;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(this.ga.length!==0){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Di(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const n=this.ma.then(()=>(this.Ea=!0,e().catch(r=>{this.Ta=r,this.Ea=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw sn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ea=!1,r))));return this.ma=n,n}enqueueAfterDelay(e,n,r){this.Pa(),this.Aa.indexOf(e)>-1&&(n=0);const i=vl.createAndSchedule(this,e,n,r,s=>this.Va(s));return this.pa.push(i),i}Pa(){this.Ta&&Y()}verifyOperationInProgress(){}async Sa(){let e;do e=this.ma,await e;while(e!==this.ma)}Da(e){for(const n of this.pa)if(n.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.pa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const n=this.pa.indexOf(e);this.pa.splice(n,1)}}class Sl extends Il{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new _I,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||hm(this),this._firestoreClient.terminate()}}function cS(t=xh()){return Ma(t,"firestore").getImmediate()}function um(t){return t._firestoreClient||hm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hm(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new wI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new fI(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Cl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(je.fromBase64String(e))}catch(n){throw new j(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sr(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fm{constructor(e){this._methodName=e}}/**
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
 */class kl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const bI=/^__.*__$/;class TI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wo(e,this.data,n,this.fieldTransforms)}}function dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Rl{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ka(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Rl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$a({path:r,Oa:!1});return i.Ma(e),i}La(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$a({path:r,Oa:!1});return i.ka(),i}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Ro(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(e.length===0)throw this.Ua("Document fields must not be empty");if(dm(this.xa)&&bI.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class II{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Io(e)}ja(e,n,r,i=!1){return new Rl({xa:e,methodName:n,Ka:r,path:nt.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function AI(t){const e=t._freezeSettings(),n=Io(t._databaseId);return new II(t._databaseId,!!e.ignoreUndefinedProperties,n)}function SI(t,e,n,r,i,s={}){const o=t.ja(s.merge||s.mergeFields?2:0,e,n,i);ym("Data must be an object, but it was:",o,r);const a=mm(r,o);let c,l;if(s.merge)c=new qc(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=CI(e,h,n);if(!o.contains(f))throw new j(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);RI(u,f)||u.push(f)}c=new qc(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new TI(new gt(a),c,l)}function pm(t,e){if(gm(t=mt(t)))return ym("Unsupported field value:",e,t),mm(t,e);if(t instanceof fm)return function(n,r){if(!dm(r.xa))throw r.Ua(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Ua(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&e.xa!==4)throw e.Ua("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=pm(o,r.Ba(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gb(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ct.fromDate(n);return{timestampValue:To(r.k,i)}}if(n instanceof ct){const i=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:To(r.k,i)}}if(n instanceof kl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sr)return{bytesValue:Sp(r.k,n._byteString)};if(n instanceof lt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Ua(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:il(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Ua(`Unsupported field value: ${Tl(n)}`)}(t,e)}function mm(t,e){const n={};return Wd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(t,(r,i)=>{const s=pm(i,e.Fa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function gm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof kl||t instanceof Sr||t instanceof lt||t instanceof fm)}function ym(t,e,n){if(!gm(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Tl(n);throw r==="an object"?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}function CI(t,e,n){if((e=mt(e))instanceof Cl)return e._internalPath;if(typeof e=="string")return vm(t,e);throw Ro("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const kI=new RegExp("[~\\*/\\[\\]]");function vm(t,e,n){if(e.search(kI)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cl(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new j(A.INVALID_ARGUMENT,a+t+c)}function RI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wm{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Em("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NI extends wm{data(){return super.data()}}function Em(t,e){return typeof e=="string"?vm(t,e):e instanceof Cl?e._internalPath:e._delegate._internalPath}/**
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
 */class OI{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _m extends wm{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new PI(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Em("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class PI extends _m{data(e={}){return super.data(e)}}/**
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
 */class xI{convertValue(e,n="none"){switch(Pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const r={};return pr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new kl(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Si(e));default:return null}}convertTimestamp(e){const n=an(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);fe(xp(r));const i=new Vi(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function DI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */function lS(t){t=ko(t,lt);const e=ko(t.firestore,Sl);return vI(um(e),t._key).then(n=>UI(e,t,n))}class MI extends xI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function uS(t,e,n){t=ko(t,lt);const r=ko(t.firestore,Sl),i=DI(t.converter,e,n);return LI(r,[SI(AI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,vr.none())])}function LI(t,e){return function(n,r){const i=new on;return n.asyncQueue.enqueueAndForget(async()=>eI(await gI(n),r,i)),i.promise}(um(t),e)}function UI(t,e,n){const r=n.docs.get(e._key),i=new MI(t);return new _m(t,i,e._key,r,new OI(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){fr=n})(ei),Zr(new nr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Sl(i,new q_(n.getProvider("auth-internal")),new G_(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Xt(jd,"3.4.1",t),Xt(jd,"3.4.1","esm2017")})();/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const bm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Cr=t=>bm?Symbol(t):"_vr_"+t,FI=Cr("rvlm"),Tm=Cr("rvd"),Nl=Cr("r"),Im=Cr("rl"),Ol=Cr("rvl"),kr=typeof window!="undefined";function VI(t){return t.__esModule||bm&&t[Symbol.toStringTag]==="Module"}const de=Object.assign;function Pl(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const $i=()=>{},$I=/\/$/,BI=t=>t.replace($I,"");function xl(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=HI(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function jI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Am(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zI(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Rr(e.matched[r],n.matched[i])&&Sm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qI(t[n],e[n]))return!1;return!0}function qI(t,e){return Array.isArray(t)?Cm(t,e):Array.isArray(e)?Cm(e,t):t===e}function Cm(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function HI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var ji;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ji||(ji={}));function KI(t){if(!t)if(kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),BI(t)}const WI=/^[^#]+#/;function GI(t,e){return t.replace(WI,"#")+e}function YI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const No=()=>({left:window.pageXOffset,top:window.pageYOffset});function XI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=YI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function km(t,e){return(history.state?history.state.position-e:-1)+t}const Dl=new Map;function JI(t,e){Dl.set(t,e)}function QI(t){const e=Dl.get(t);return Dl.delete(t),e}let ZI=()=>location.protocol+"//"+location.host;function Rm(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Am(c,"")}return Am(n,t)+r+i}function e1(t,e,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const m=Rm(t,location),g=n.value,S=e.value;let b=0;if(f){if(n.value=m,e.value=f,o&&o===g){o=null;return}b=S?f.position-S.position:0}else r(m);i.forEach(v=>{v(n.value,g,{delta:b,type:Bi.pop,direction:b?b>0?ji.forward:ji.back:ji.unknown})})};function c(){o=n.value}function l(f){i.push(f);const m=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return s.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(de({},f.state,{scroll:No()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Nm(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?No():null}}function t1(t){const{history:e,location:n}=window,r={value:Rm(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ZI()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(c,l){const u=de({},e.state,Nm(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=de({},i.value,e.state,{forward:c,scroll:No()});s(u.current,u,!0);const h=de({},Nm(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function hS(t){t=KI(t);const e=t1(t),n=e1(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=de({location:"",base:t,go:r,createHref:GI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function n1(t){return typeof t=="string"||t&&typeof t=="object"}function Om(t){return typeof t=="string"||typeof t=="symbol"}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pm=Cr("nf");var xm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xm||(xm={}));function Nr(t,e){return de(new Error,{type:t,[Pm]:!0},e)}function Un(t,e){return t instanceof Error&&Pm in t&&(e==null||!!(t.type&e))}const Dm="[^/]+?",r1={sensitive:!1,strict:!1,start:!0,end:!0},i1=/[.+*?^${}()[\]/\\]/g;function s1(t,e){const n=de({},r1,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(i1,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:S,optional:b,regexp:v}=f;s.push({name:g,repeatable:S,optional:b});const w=v||Dm;if(w!==Dm){m+=10;try{new RegExp(`(${w})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+V.message)}}let L=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(L=b&&l.length<2?`(?:/${L})`:"/"+L),b&&(L+="?"),i+=L,m+=20,b&&(m+=-8),S&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=s[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:S,optional:b}=m,v=g in l?l[g]:"";if(Array.isArray(v)&&!S)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(v)?v.join("/"):v;if(!w)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u}return{re:o,score:r,keys:s,parse:a,stringify:c}}function o1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function a1(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=o1(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const c1={type:0,value:""},l1=/[a-zA-Z0-9_]/;function u1(t){if(!t)return[[]];if(t==="/")return[[c1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:l1.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function h1(t,e,n){const r=s1(u1(t.path),n),i=de(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function f1(t,e){const n=[],r=new Map;e=Lm({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,f){const m=!f,g=p1(u);g.aliasOf=f&&f.record;const S=Lm(e,u),b=[g];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of L)b.push(de({},g,{components:f?f.record.components:g.components,path:V,aliasOf:f?f.record:g}))}let v,w;for(const L of b){const{path:V}=L;if(h&&V[0]!=="/"){const se=h.record.path,re=se[se.length-1]==="/"?"":"/";L.path=h.record.path+(V&&re+V)}if(v=h1(L,h,S),f?f.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),m&&u.name&&!Mm(v)&&o(u.name)),"children"in g){const se=g.children;for(let re=0;re<se.length;re++)s(se[re],v,f&&f.children[re])}f=f||v,c(v)}return w?()=>{o(w)}:$i}function o(u){if(Om(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&a1(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!Mm(u)&&r.set(u.record.name,u)}function l(u,h){let f,m={},g,S;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Nr(1,{location:u});S=f.record.name,m=de(d1(h.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),g=f.stringify(m)}else if("path"in u)g=u.path,f=n.find(w=>w.re.test(g)),f&&(m=f.parse(g),S=f.record.name);else{if(f=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!f)throw Nr(1,{location:u,currentLocation:h});S=f.record.name,m=de({},h.params,u.params),g=f.stringify(m)}const b=[];let v=f;for(;v;)b.unshift(v.record),v=v.parent;return{name:S,path:g,params:m,matched:b,meta:g1(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function d1(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function p1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:m1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function m1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Mm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function g1(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Lm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Um=/#/g,y1=/&/g,v1=/\//g,w1=/=/g,E1=/\?/g,Fm=/\+/g,_1=/%5B/g,b1=/%5D/g,Vm=/%5E/g,T1=/%60/g,$m=/%7B/g,I1=/%7C/g,Bm=/%7D/g,A1=/%20/g;function Ml(t){return encodeURI(""+t).replace(I1,"|").replace(_1,"[").replace(b1,"]")}function S1(t){return Ml(t).replace($m,"{").replace(Bm,"}").replace(Vm,"^")}function Ll(t){return Ml(t).replace(Fm,"%2B").replace(A1,"+").replace(Um,"%23").replace(y1,"%26").replace(T1,"`").replace($m,"{").replace(Bm,"}").replace(Vm,"^")}function C1(t){return Ll(t).replace(w1,"%3D")}function k1(t){return Ml(t).replace(Um,"%23").replace(E1,"%3F")}function R1(t){return t==null?"":k1(t).replace(v1,"%2F")}function Oo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function N1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Fm," "),o=s.indexOf("="),a=Oo(o<0?s:s.slice(0,o)),c=o<0?null:Oo(s.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function jm(t){let e="";for(let n in t){const r=t[n];if(n=C1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&Ll(s)):[r&&Ll(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function O1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function zi(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Nr(4,{from:n,to:e})):h instanceof Error?a(h):n1(h)?a(Nr(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ul(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(P1(a)){const l=(a.__vccOpts||a)[e];l&&i.push(hn(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=VI(l)?l.default:l;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hn(f,n,r,s,o)()}))}}return i}function P1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zm(t){const e=Kt(Nl),n=Kt(Im),r=Te(()=>e.resolve(Vr(t.to))),i=Te(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Rr.bind(null,u));if(f>-1)return f;const m=qm(c[l-2]);return l>1&&qm(u)===m&&h[h.length-1].path!==m?h.findIndex(Rr.bind(null,c[l-2])):f}),s=Te(()=>i.value>-1&&L1(n.params,r.value.params)),o=Te(()=>i.value>-1&&i.value===n.matched.length-1&&Sm(n.params,r.value.params));function a(c={}){return M1(c)?e[Vr(t.replace)?"replace":"push"](Vr(t.to)).catch($i):Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const x1=Yn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zm,setup(t,{slots:e}){const n=Ur(zm(t)),{options:r}=Kt(Nl),i=Te(()=>({[Hm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:vs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),D1=x1;function M1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function L1(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function qm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hm=(t,e,n)=>t!=null?t:e!=null?e:n,U1=Yn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Kt(Ol),i=Te(()=>t.route||r.value),s=Kt(Tm,0),o=Te(()=>i.value.matched[s]);ls(Tm,s+1),ls(FI,o),ls(Ol,i);const a=as();return Xr(()=>[a.value,o.value,t.name],([c,l,u],[h,f,m])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Rr(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Km(n.default,{Component:u,route:c});const f=l.props[t.name],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,S=vs(u,de({},m,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Km(n.default,{Component:S,route:c})||S}}});function Km(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const F1=U1;function fS(t){const e=f1(t.routes,t),n=t.parseQuery||N1,r=t.stringifyQuery||jm,i=t.history,s=zi(),o=zi(),a=zi(),c=gy(un);let l=un;kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pl.bind(null,E=>""+E),h=Pl.bind(null,R1),f=Pl.bind(null,Oo);function m(E,M){let N,U;return Om(E)?(N=e.getRecordMatcher(E),U=M):U=E,e.addRoute(U,N)}function g(E){const M=e.getRecordMatcher(E);M&&e.removeRoute(M)}function S(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function v(E,M){if(M=de({},M||c.value),typeof E=="string"){const X=xl(n,E,M.path),d=e.resolve({path:X.path},M),p=i.createHref(X.fullPath);return de(X,d,{params:f(d.params),hash:Oo(X.hash),redirectedFrom:void 0,href:p})}let N;if("path"in E)N=de({},E,{path:xl(n,E.path,M.path).path});else{const X=de({},E.params);for(const d in X)X[d]==null&&delete X[d];N=de({},E,{params:h(E.params)}),M.params=h(M.params)}const U=e.resolve(N,M),ue=E.hash||"";U.params=u(f(U.params));const me=jI(r,de({},E,{hash:S1(ue),path:U.path})),Q=i.createHref(me);return de({fullPath:me,hash:ue,query:r===jm?O1(E.query):E.query||{}},U,{redirectedFrom:void 0,href:Q})}function w(E){return typeof E=="string"?xl(n,E,c.value.path):de({},E)}function L(E,M){if(l!==E)return Nr(8,{from:M,to:E})}function V(E){return be(E)}function se(E){return V(de(w(E),{replace:!0}))}function re(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let U=typeof N=="function"?N(E):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=w(U):{path:U},U.params={}),de({query:E.query,hash:E.hash,params:E.params},U)}}function be(E,M){const N=l=v(E),U=c.value,ue=E.state,me=E.force,Q=E.replace===!0,X=re(N);if(X)return be(de(w(X),{state:ue,force:me,replace:Q}),M||N);const d=N;d.redirectedFrom=M;let p;return!me&&zI(r,U,N)&&(p=Nr(16,{to:d,from:U}),Bn(U,U,!0,!1)),(p?Promise.resolve(p):$e(d,U)).catch(y=>Un(y)?y:pe(y,d,U)).then(y=>{if(y){if(Un(y,2))return be(de(w(y.to),{state:ue,force:me,replace:Q}),M||d)}else y=Rt(d,U,!0,Q,ue);return Ke(d,U,y),y})}function yt(E,M){const N=L(E,M);return N?Promise.reject(N):Promise.resolve()}function $e(E,M){let N;const[U,ue,me]=V1(E,M);N=Ul(U.reverse(),"beforeRouteLeave",E,M);for(const X of U)X.leaveGuards.forEach(d=>{N.push(hn(d,E,M))});const Q=yt.bind(null,E,M);return N.push(Q),Or(N).then(()=>{N=[];for(const X of s.list())N.push(hn(X,E,M));return N.push(Q),Or(N)}).then(()=>{N=Ul(ue,"beforeRouteUpdate",E,M);for(const X of ue)X.updateGuards.forEach(d=>{N.push(hn(d,E,M))});return N.push(Q),Or(N)}).then(()=>{N=[];for(const X of E.matched)if(X.beforeEnter&&!M.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const d of X.beforeEnter)N.push(hn(d,E,M));else N.push(hn(X.beforeEnter,E,M));return N.push(Q),Or(N)}).then(()=>(E.matched.forEach(X=>X.enterCallbacks={}),N=Ul(me,"beforeRouteEnter",E,M),N.push(Q),Or(N))).then(()=>{N=[];for(const X of o.list())N.push(hn(X,E,M));return N.push(Q),Or(N)}).catch(X=>Un(X,8)?X:Promise.reject(X))}function Ke(E,M,N){for(const U of a.list())U(E,M,N)}function Rt(E,M,N,U,ue){const me=L(E,M);if(me)return me;const Q=M===un,X=kr?history.state:{};N&&(U||Q?i.replace(E.fullPath,de({scroll:Q&&X&&X.scroll},ue)):i.push(E.fullPath,ue)),c.value=E,Bn(E,M,N,Q),ut()}let Nt;function Fn(){Nt=i.listen((E,M,N)=>{const U=v(E),ue=re(U);if(ue){be(de(ue,{replace:!0}),U).catch($i);return}l=U;const me=c.value;kr&&JI(km(me.fullPath,N.delta),No()),$e(U,me).catch(Q=>Un(Q,4|8)?Q:Un(Q,2)?(be(Q.to,U).then(X=>{Un(X,4|16)&&!N.delta&&N.type===Bi.pop&&i.go(-1,!1)}).catch($i),Promise.reject()):(N.delta&&i.go(-N.delta,!1),pe(Q,U,me))).then(Q=>{Q=Q||Rt(U,me,!1),Q&&(N.delta?i.go(-N.delta,!1):N.type===Bi.pop&&Un(Q,4|16)&&i.go(-1,!1)),Ke(U,me,Q)}).catch($i)})}let Vn=zi(),$n=zi(),Ce;function pe(E,M,N){ut(E);const U=$n.list();return U.length?U.forEach(ue=>ue(E,M,N)):console.error(E),Promise.reject(E)}function le(){return Ce&&c.value!==un?Promise.resolve():new Promise((E,M)=>{Vn.add([E,M])})}function ut(E){Ce||(Ce=!0,Fn(),Vn.list().forEach(([M,N])=>E?N(E):M()),Vn.reset())}function Bn(E,M,N,U){const{scrollBehavior:ue}=t;if(!kr||!ue)return Promise.resolve();const me=!N&&QI(km(E.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return uh().then(()=>ue(E,M,me)).then(Q=>Q&&XI(Q)).catch(Q=>pe(Q,E,M))}const Ot=E=>i.go(E);let vt;const ht=new Set;return{currentRoute:c,addRoute:m,removeRoute:g,hasRoute:b,getRoutes:S,resolve:v,options:t,push:V,replace:se,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$n.add,isReady:le,install(E){const M=this;E.component("RouterLink",D1),E.component("RouterView",F1),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Vr(c)}),kr&&!vt&&c.value===un&&(vt=!0,V(i.location).catch(ue=>{}));const N={};for(const ue in un)N[ue]=Te(()=>c.value[ue]);E.provide(Nl,M),E.provide(Im,Ur(N)),E.provide(Ol,c);const U=E.unmount;ht.add(E),E.unmount=function(){ht.delete(E),ht.size<1&&(l=un,Nt&&Nt(),c.value=un,vt=!1,Ce=!1),U()}}}}function Or(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function V1(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Rr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Rr(l,c))||i.push(c))}return[n,r,i]}/*!
 * bulma-toast 2.4.1 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */function Wm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Fl(t){for(var e,n=1;n<arguments.length;n++)e=arguments[n]==null?{}:arguments[n],n%2?Wm(Object(e),!0).forEach(function(r){$1(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Wm(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))});return t}function Gm(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ym(t,e){for(var n,r=0;r<e.length;r++)n=e[r],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function Xm(t,e,n){return e&&Ym(t.prototype,e),n&&Ym(t,n),t}function $1(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B1={duration:2e3,position:"top-right",closeOnClick:!0,opacity:1,single:!1,offsetTop:0,offsetBottom:0,offsetLeft:0,offsetRight:0,extraClasses:""},Pr=Fl({},B1),qi={},j1=null,z1="width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;",q1=function(t,e,n,r,i){return t==="top-left"?"left:".concat(r,";top:").concat(e,";text-align:left;align-items:flex-start;"):t==="top-right"?"right:".concat(i,";top:").concat(e,";text-align:right;align-items:flex-end;"):t==="top-center"?"top:".concat(e,";left:0;right:0;text-align:center;align-items:center;"):t==="bottom-left"?"left:".concat(r,";bottom:").concat(n,";text-align:left;align-items:flex-start;"):t==="bottom-right"?"right:".concat(i,";bottom:").concat(n,";text-align:right;align-items:flex-end;"):t==="bottom-center"?"bottom:".concat(n,";left:0;right:0;text-align:center;align-items:center;"):t==="center"?"top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;":void 0};function Po(){var t;return(t=j1)!==null&&t!==void 0?t:document}function H1(t,e,n,r,i,s){if(qi.position)return qi.position;var o=Po().createElement("div");return o.setAttribute("style",z1+q1(e,n,r,i,s)),t.appendChild(o),qi.position=o,o}function dS(t){if(!t.message)throw new Error("message is required");var e=Fl(Fl({},Pr),t),n=new K1(e),r=H1(e.appendTo||Po().body,e.position||Pr.position,e.offsetTop||Pr.offsetTop,e.offsetBottom||Pr.offsetBottom,e.offsetLeft||Pr.offsetLeft,e.offsetRight||Pr.offsetRight);if(e.single)for(var i=r.lastElementChild;i;)r.removeChild(i),i=r.lastElementChild;r.appendChild(n.element)}var K1=function(){function t(e){var n=this;Gm(this,t),this.element=Po().createElement("div"),this.opacity=e.opacity,this.type=e.type,this.animate=e.animate,this.dismissible=e.dismissible,this.closeOnClick=e.closeOnClick,this.message=e.message,this.duration=e.duration,this.pauseOnHover=e.pauseOnHover,this.offsetTop=e.offsetTop,this.offsetBottom=e.offsetBottom,this.offsetLeft=e.offsetLeft,this.offsetRight=e.offsetRight,this.extraClasses=e.extraClasses;var r="width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity,";"),i=["notification",this.extraClasses];if(this.type&&i.push(this.type),this.animate&&this.animate.in){var s="animate__".concat(this.animate.in),o=this.animate.speed?"animate__".concat(this.animate.speed):"animate__faster";i.push("animate__animated ".concat(s," ").concat(o)),this.onAnimationEnd(function(){return n.element.classList.remove(s)})}if(this.element.className=i.join(" "),this.dismissible){var a=Po().createElement("button");a.className="delete",a.addEventListener("click",function(){n.destroy()}),this.element.insertAdjacentElement("afterbegin",a)}else r+="padding: 1.25rem 1.5rem";this.closeOnClick&&this.element.addEventListener("click",function(){n.destroy()}),this.element.setAttribute("style",r),typeof this.message=="string"?this.element.insertAdjacentHTML("beforeend",this.message):this.element.appendChild(this.message);var c=new W1(function(){n.destroy()},this.duration);this.pauseOnHover&&(this.element.addEventListener("mouseover",function(){c.pause()}),this.element.addEventListener("mouseout",function(){c.resume()}))}return Xm(t,[{key:"destroy",value:function(){var e=this;this.animate&&this.animate.out?(this.element.classList.add("animate__".concat(this.animate.out)),this.onAnimationEnd(function(){e.removeParent(e.element.parentNode),e.element.remove(),delete qi.position})):(this.removeParent(this.element.parentNode),this.element.remove(),delete qi.position)}},{key:"removeParent",value:function(e){e&&1>=e.children.length&&e.remove()}},{key:"onAnimationEnd",value:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:function(){},n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(var r in n)if(this.element.style[r]!==void 0){this.element.addEventListener(n[r],function(){return e()});break}}}]),t}(),W1=function(){function t(e,n){Gm(this,t),this.timer,this.start,this.remaining=n,this.callback=e,this.resume()}return Xm(t,[{key:"pause",value:function(){typeof document=="undefined"||(window.clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"resume",value:function(){typeof document=="undefined"||(this.start=new Date,window.clearTimeout(this.timer),this.timer=window.setTimeout(this.callback,this.remaining))}}]),t}(),G1=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},Vl;typeof window!="undefined"&&(typeof Promise!="undefined"?Vl=new Promise(function(t){return window.addEventListener("load",t)}):Vl={then:function(t){return window.addEventListener("load",t)}});function pS(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var r=function(i){for(var s=[],o=arguments.length-1;o-- >0;)s[o]=arguments[o+1];e&&e[i]&&e[i].apply(e,s)};"serviceWorker"in navigator&&Vl.then(function(){G1()?(Y1(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Hi(r,i)})):(Jm(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Hi(r,i)}))})}function Hi(t,e){navigator.onLine||t("offline"),t("error",e)}function Jm(t,e,n){navigator.serviceWorker.register(t,n).then(function(r){if(e("registered",r),r.waiting){e("updated",r);return}r.onupdatefound=function(){e("updatefound",r);var i=r.installing;i.onstatechange=function(){i.state==="installed"&&(navigator.serviceWorker.controller?e("updated",r):e("cached",r))}}}).catch(function(r){return Hi(e,r)})}function Y1(t,e,n){fetch(t).then(function(r){r.status===404?(e("error",new Error("Service worker not found at "+t)),Qm()):r.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),Qm()):Jm(t,e,n)}).catch(function(r){return Hi(e,r)})}function Qm(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Hi(emit,t)})}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function X1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J1(t,e,n){return e&&Zm(t.prototype,e),n&&Zm(t,n),t}function Q1(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){Q1(t,i,n[i])})}return t}function eg(t,e){return tA(t)||rA(t,e)||sA()}function Z1(t){return eA(t)||nA(t)||iA()}function eA(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function tA(t){if(Array.isArray(t))return t}function nA(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function rA(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o=t[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}function iA(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function sA(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var tg=function(){},$l={},ng={},oA=null,rg={mark:tg,measure:tg};try{typeof window!="undefined"&&($l=window),typeof document!="undefined"&&(ng=document),typeof MutationObserver!="undefined"&&(oA=MutationObserver),typeof performance!="undefined"&&(rg=performance)}catch{}var aA=$l.navigator||{},ig=aA.userAgent,sg=ig===void 0?"":ig,xo=$l,Ze=ng,Do=rg;xo.document;var Bl=!!Ze.documentElement&&!!Ze.head&&typeof Ze.addEventListener=="function"&&typeof Ze.createElement=="function",cA=~sg.indexOf("MSIE")||~sg.indexOf("Trident/"),jt="___FONT_AWESOME___",jl=16,og="fa",ag="svg-inline--fa",cg="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var zl={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lg=xo.FontAwesomeConfig||{};function lA(t){var e=Ze.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uA(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ze&&typeof Ze.querySelector=="function"){var hA=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hA.forEach(function(t){var e=eg(t,2),n=e[0],r=e[1],i=uA(lA(n));i!=null&&(lg[r]=i)})}var fA={familyPrefix:og,replacementClass:ag,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ql=ee({},fA,lg);ql.autoReplaceSvg||(ql.observeMutations=!1);var He=ee({},ql);xo.FontAwesomeConfig=He;var zt=xo||{};zt[jt]||(zt[jt]={});zt[jt].styles||(zt[jt].styles={});zt[jt].hooks||(zt[jt].hooks={});zt[jt].shims||(zt[jt].shims=[]);var kt=zt[jt],dA=[],pA=function t(){Ze.removeEventListener("DOMContentLoaded",t),Hl=1,dA.map(function(e){return e()})},Hl=!1;Bl&&(Hl=(Ze.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ze.readyState),Hl||Ze.addEventListener("DOMContentLoaded",pA));typeof global!="undefined"&&typeof global.process!="undefined"&&global.process.emit;var fn=jl,dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mA(t){if(!(!t||!Bl)){var e=Ze.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ze.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ze.head.insertBefore(e,r),t}}var gA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Mo(){for(var t=12,e="";t-- >0;)e+=gA[Math.random()*62|0];return e}function ug(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yA(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ug(t[n]),'" ')},"").trim()}function Kl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function Wl(t){return t.size!==dn.size||t.x!==dn.x||t.y!==dn.y||t.rotate!==dn.rotate||t.flipX||t.flipY}function hg(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function vA(t){var e=t.transform,n=t.width,r=n===void 0?jl:n,i=t.height,s=i===void 0?jl:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&cA?c+="translate(".concat(e.x/fn-r/2,"em, ").concat(e.y/fn-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/fn,"em), calc(-50% + ").concat(e.y/fn,"em)) "):c+="translate(".concat(e.x/fn,"em, ").concat(e.y/fn,"em) "),c+="scale(".concat(e.size/fn*(e.flipX?-1:1),", ").concat(e.size/fn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var Gl={x:0,y:0,width:"100%",height:"100%"};function fg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function wA(t){return t.tag==="g"?t.children:[t]}function EA(t){var e=t.children,n=t.attributes,r=t.main,i=t.mask,s=t.maskId,o=t.transform,a=r.width,c=r.icon,l=i.width,u=i.icon,h=hg({transform:o,containerWidth:l,iconWidth:a}),f={tag:"rect",attributes:ee({},Gl,{fill:"white"})},m=c.children?{children:c.children.map(fg)}:{},g={tag:"g",attributes:ee({},h.inner),children:[fg(ee({tag:c.tag,attributes:ee({},c.attributes,h.path)},m))]},S={tag:"g",attributes:ee({},h.outer),children:[g]},b="mask-".concat(s||Mo()),v="clip-".concat(s||Mo()),w={tag:"mask",attributes:ee({},Gl,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,S]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:wA(u)},w]};return e.push(L,{tag:"rect",attributes:ee({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},Gl)}),{children:e,attributes:n}}function _A(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,s=t.styles,o=Kl(s);if(o.length>0&&(n.style=o),Wl(i)){var a=hg({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:ee({},a.outer),children:[{tag:"g",attributes:ee({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:ee({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}function bA(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Wl(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=Kl(ee({},s,{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function TA(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(He.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ee({},i,{id:o}),children:r}]}]}function IA(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,m=f===void 0?!1:f,g=r.found?r:n,S=g.width,b=g.height,v=i==="fak",w=v?"":"fa-w-".concat(Math.ceil(S/b*16)),L=[He.replacementClass,s?"".concat(He.familyPrefix,"-").concat(s):"",w].filter(function(Ke){return h.classes.indexOf(Ke)===-1}).filter(function(Ke){return Ke!==""||!!Ke}).concat(h.classes).join(" "),V={children:[],attributes:ee({},h.attributes,{"data-prefix":i,"data-icon":s,class:L,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(b)})},se=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(S/b*16*.0625,"em")}:{};m&&(V.attributes[cg]=""),c&&V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(u||Mo())},children:[c]});var re=ee({},V,{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:ee({},se,h.styles)}),be=r.found&&n.found?EA(re):_A(re),yt=be.children,$e=be.attributes;return re.children=yt,re.attributes=$e,a?TA(re):bA(re)}function AA(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=ee({},o.attributes,s?{title:s}:{},{class:o.classes.join(" ")});c&&(l[cg]="");var u=ee({},o.styles);Wl(i)&&(u.transform=vA({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Kl(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}var dg=function(){};He.measurePerformance&&Do&&Do.mark&&Do.measure;var SA=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Yl=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?SA(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function pg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Object.keys(e).reduce(function(o,a){var c=e[a],l=!!c.icon;return l?o[c.iconName]=c.icon:o[a]=c,o},{});typeof kt.hooks.addPack=="function"&&!i?kt.hooks.addPack(t,s):kt.styles[t]=ee({},kt.styles[t]||{},s),t==="fas"&&pg("fa",e)}var mg=kt.styles,CA=kt.shims,gg=function(){var e=function(i){return Yl(mg,function(s,o,a){return s[a]=Yl(o,i,{}),s},{})};e(function(r,i,s){return i[3]&&(r[i[3]]=s),r}),e(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(a){r[a]=s}),r});var n="far"in mg;Yl(CA,function(r,i){var s=i[0],o=i[1],a=i[2];return o==="far"&&!n&&(o="fas"),r[s]={prefix:o,iconName:a},r},{})};gg();kt.styles;function yg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function vg(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?ug(t):"<".concat(e," ").concat(yA(r),">").concat(s.map(vg).join(""),"</").concat(e,">")}var kA=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n):n};function Xl(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}Xl.prototype=Object.create(Error.prototype);Xl.prototype.constructor=Xl;var Lo={fill:"currentColor"},wg={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};ee({},Lo,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var Jl=ee({},wg,{attributeName:"opacity"});ee({},Lo,{cx:"256",cy:"364",r:"28"}),ee({},wg,{attributeName:"r",values:"28;14;28;28;14;28;"}),ee({},Jl,{values:"1;0;1;1;0;1;"});ee({},Lo,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),ee({},Jl,{values:"1;0;0;0;0;1;"});ee({},Lo,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),ee({},Jl,{values:"0;0;1;1;0;0;"});kt.styles;function Eg(t){var e=t[0],n=t[1],r=t.slice(4),i=eg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(He.familyPrefix,"-").concat(zl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(He.familyPrefix,"-").concat(zl.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(He.familyPrefix,"-").concat(zl.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}kt.styles;var RA=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
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
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
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

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
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
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
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
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function NA(){var t=og,e=ag,n=He.familyPrefix,r=He.replacementClass,i=RA;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var OA=function(){function t(){X1(this,t),this.definitions={}}return J1(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=ee({},n.definitions[a]||{},o[a]),pg(a,o[a]),gg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon;n[a]||(n[a]={}),n[a][c]=l}),n}}]),t}();function _g(){He.autoAddCss&&!Ig&&(mA(NA()),Ig=!0)}function bg(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return vg(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Bl){var r=Ze.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Tg(t){var e=t.prefix,n=e===void 0?"fa":e,r=t.iconName;if(!!r)return yg(xA.definitions,n,r)||yg(kt.styles,n,r)}function PA(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Tg(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Tg(i||{})),t(r,ee({},n,{mask:i}))}}var xA=new OA,Ig=!1,Ag={transform:function(e){return kA(e)}},DA=PA(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?dn:n,i=e.symbol,s=i===void 0?!1:i,o=e.mask,a=o===void 0?null:o,c=e.maskId,l=c===void 0?null:c,u=e.title,h=u===void 0?null:u,f=e.titleId,m=f===void 0?null:f,g=e.classes,S=g===void 0?[]:g,b=e.attributes,v=b===void 0?{}:b,w=e.styles,L=w===void 0?{}:w;if(!!t){var V=t.prefix,se=t.iconName,re=t.icon;return bg(ee({type:"icon"},t),function(){return _g(),He.autoA11y&&(h?v["aria-labelledby"]="".concat(He.replacementClass,"-title-").concat(m||Mo()):(v["aria-hidden"]="true",v.focusable="false")),IA({icons:{main:Eg(re),mask:a?Eg(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:se,transform:ee({},dn,r),symbol:s,title:h,maskId:l,titleId:m,extra:{attributes:v,styles:L,classes:S}})})}}),MA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?dn:r,s=n.title,o=s===void 0?null:s,a=n.classes,c=a===void 0?[]:a,l=n.attributes,u=l===void 0?{}:l,h=n.styles,f=h===void 0?{}:h;return bg({type:"text",content:e},function(){return _g(),AA({content:e,transform:ee({},dn,i),title:o,extra:{attributes:u,styles:f,classes:["".concat(He.familyPrefix,"-layers-text")].concat(Z1(c))}})})};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var mS={prefix:"fab",iconName:"facebook",icon:[512,512,[],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},gS={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},yS={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},LA=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function UA(t,e){return e={exports:{}},t(e,e.exports),e.exports}var FA=UA(function(t){(function(e){var n=function(v,w,L){if(!l(w)||h(w)||f(w)||m(w)||c(w))return w;var V,se=0,re=0;if(u(w))for(V=[],re=w.length;se<re;se++)V.push(n(v,w[se],L));else{V={};for(var be in w)Object.prototype.hasOwnProperty.call(w,be)&&(V[v(be,L)]=n(v,w[be],L))}return V},r=function(v,w){w=w||{};var L=w.separator||"_",V=w.split||/(?=[A-Z])/;return v.split(V).join(L)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var w=i(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},f=function(v){return a.call(v)=="[object RegExp]"},m=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},S=function(v,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?v:function(V,se){return L(V,v,se)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,w){return n(S(i,w),v)},decamelizeKeys:function(v,w){return n(S(o,w),v,w)},pascalizeKeys:function(v,w){return n(S(s,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(LA)}),VA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ki=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Uo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$A=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},Ql=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)};function BA(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=FA.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function jA(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Zl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Zl(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=jA(u);break;case"style":c.style=BA(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=$A(n,["class","style"]);return vs(t.tag,Uo({},e,{class:i.class,style:Uo({},i.style,o)},i.attrs,a),r)}var Sg=!1;try{Sg=!0}catch{}function zA(){if(!Sg&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Wi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ki({},t,e):{}}function qA(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ki(e,"fa-"+t.size,t.size!==null),Ki(e,"fa-rotate-"+t.rotation,t.rotation!==null),Ki(e,"fa-pull-"+t.pull,t.pull!==null),Ki(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Cg(t){if(t===null)return null;if((typeof t=="undefined"?"undefined":VA(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var vS=Yn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Te(function(){return Cg(e.icon)}),s=Te(function(){return Wi("classes",qA(e))}),o=Te(function(){return Wi("transform",typeof e.transform=="string"?Ag.transform(e.transform):e.transform)}),a=Te(function(){return Wi("mask",Cg(e.mask))}),c=Te(function(){return DA(i.value,Uo({},s.value,o.value,a.value,{symbol:e.symbol,title:e.title}))});Xr(c,function(u){if(!u)return zA("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=Te(function(){return c.value?Zl(c.value.abstract[0],{},r):null});return function(){return l.value}}});Yn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=He.familyPrefix,s=Te(function(){return[i+"-layers"].concat(Ql(e.fixedWidth?[i+"-fw"]:[]))});return function(){return vs("div",{class:s.value},r.default?r.default():[])}}});Yn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=He.familyPrefix,s=Te(function(){return Wi("classes",[].concat(Ql(e.counter?[i+"-layers-counter"]:[]),Ql(e.position?[i+"-layers-"+e.position]:[])))}),o=Te(function(){return Wi("transform",typeof e.transform=="string"?Ag.transform(e.transform):e.transform)}),a=Te(function(){var l=MA(e.value.toString(),Uo({},o.value,s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Te(function(){return Zl(a.value,{},r)});return function(){return c.value}}});export{eS as A,vS as B,KA as C,as as D,aS as E,Dt as F,Zt as G,lS as H,uS as I,Py as J,ZA as K,cS as L,JA as M,oS as V,ih as a,fS as b,YA as c,Yn as d,hS as e,nS as f,sS as g,rS as h,tS as i,WA as j,QA as k,HA as l,De as m,Bo as n,GA as o,av as p,XA as q,Ur as r,iS as s,dS as t,pS as u,xA as v,_y as w,yS as x,gS as y,mS as z};
