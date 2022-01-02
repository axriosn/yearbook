function ta(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Jg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zg=ta(Jg);function Iu(t){return!!t||t===""}function na(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=De(r)?ny(r):na(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(De(t))return t;if(Te(t))return t}}const ey=/;(?![^(]*\))/g,ty=/:(.+)/;function ny(t){const e={};return t.split(ey).forEach(n=>{if(n){const r=n.split(ty);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ra(t){let e="";if(De(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=ra(t[n]);r&&(e+=r+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ry(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ts(t[r],e[r]);return n}function ts(t,e){if(t===e)return!0;let n=Su(t),r=Su(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=z(t),r=z(e),n||r)return n&&r?ry(t,e):!1;if(n=Te(t),r=Te(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ts(t[o],e[o]))return!1}}return String(t)===String(e)}function iy(t,e){return t.findIndex(n=>ts(n,e))}const dS=t=>t==null?"":z(t)||Te(t)&&(t.toString===ku||!X(t.toString))?JSON.stringify(t,Au,2):String(t),Au=(t,e)=>e&&e.__v_isRef?Au(t,e.value):Qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:rs(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!z(e)&&!Ru(e)?String(e):e,de={},Xn=[],mt=()=>{},sy=()=>!1,oy=/^on[^a-z]/,ns=t=>oy.test(t),ia=t=>t.startsWith("onUpdate:"),We=Object.assign,sa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ay=Object.prototype.hasOwnProperty,ne=(t,e)=>ay.call(t,e),z=Array.isArray,Qn=t=>is(t)==="[object Map]",rs=t=>is(t)==="[object Set]",Su=t=>t instanceof Date,X=t=>typeof t=="function",De=t=>typeof t=="string",oa=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Cu=t=>Te(t)&&X(t.then)&&X(t.catch),ku=Object.prototype.toString,is=t=>ku.call(t),cy=t=>is(t).slice(8,-1),Ru=t=>is(t)==="[object Object]",aa=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ss=ta(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),os=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ly=/-(\w)/g,Tt=os(t=>t.replace(ly,(e,n)=>n?n.toUpperCase():"")),uy=/\B([A-Z])/g,Jn=os(t=>t.replace(uy,"-$1").toLowerCase()),as=os(t=>t.charAt(0).toUpperCase()+t.slice(1)),ca=os(t=>t?`on${as(t)}`:""),Lr=(t,e)=>!Object.is(t,e),cs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ls=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},us=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nu;const hy=()=>Nu||(Nu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let mn;const hs=[];class fy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&mn&&(this.parent=mn,this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(hs.push(this),mn=this)}off(){this.active&&(hs.pop(),mn=hs[hs.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function dy(t,e){e=e||mn,e&&e.active&&e.effects.push(t)}const la=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ou=t=>(t.w&Kt)>0,xu=t=>(t.n&Kt)>0,py=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kt},my=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Ou(i)&&!xu(i)?i.delete(t):e[n++]=i,i.w&=~Kt,i.n&=~Kt}e.length=n}},ua=new WeakMap;let Ur=0,Kt=1;const ha=30,Fr=[];let gn;const yn=Symbol(""),fa=Symbol("");class da{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],dy(this,r)}run(){if(!this.active)return this.fn();if(!Fr.includes(this))try{return Fr.push(gn=this),gy(),Kt=1<<++Ur,Ur<=ha?py(this):Pu(this),this.fn()}finally{Ur<=ha&&my(this),Kt=1<<--Ur,vn(),Fr.pop();const e=Fr.length;gn=e>0?Fr[e-1]:void 0}}stop(){this.active&&(Pu(this),this.onStop&&this.onStop(),this.active=!1)}}function Pu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Zn=!0;const pa=[];function er(){pa.push(Zn),Zn=!1}function gy(){pa.push(Zn),Zn=!0}function vn(){const t=pa.pop();Zn=t===void 0?!0:t}function ct(t,e,n){if(!Du())return;let r=ua.get(t);r||ua.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=la()),Mu(i)}function Du(){return Zn&&gn!==void 0}function Mu(t,e){let n=!1;Ur<=ha?xu(t)||(t.n|=Kt,n=!Ou(t)):n=!t.has(gn),n&&(t.add(gn),gn.deps.push(t))}function Dt(t,e,n,r,i,s){const o=ua.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?aa(n)&&a.push(o.get("length")):(a.push(o.get(yn)),Qn(t)&&a.push(o.get(fa)));break;case"delete":z(t)||(a.push(o.get(yn)),Qn(t)&&a.push(o.get(fa)));break;case"set":Qn(t)&&a.push(o.get(yn));break}if(a.length===1)a[0]&&ma(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ma(la(c))}}function ma(t,e){for(const n of z(t)?t:[...t])(n!==gn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const yy=ta("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(oa)),vy=ga(),wy=ga(!1,!0),Ey=ga(!0),Uu=_y();function _y(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let s=0,o=this.length;s<o;s++)ct(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){er();const r=ce(this)[e].apply(this,n);return vn(),r}}),t}function ga(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&s===(t?e?Uy:Ku:e?Hu:qu).get(r))return r;const o=z(r);if(!t&&o&&ne(Uu,i))return Reflect.get(Uu,i,s);const a=Reflect.get(r,i,s);return(oa(i)?Lu.has(i):yy(i))||(t||ct(r,"get",i),e)?a:Ge(a)?!o||!aa(i)?a.value:a:Te(a)?t?Wu(a):Vr(a):a}}const by=Fu(),Ty=Fu(!0);function Fu(t=!1){return function(n,r,i,s){let o=n[r];if(!t&&!Ea(i)&&(i=ce(i),o=ce(o),!z(n)&&Ge(o)&&!Ge(i)))return o.value=i,!0;const a=z(n)&&aa(r)?Number(r)<n.length:ne(n,r),c=Reflect.set(n,r,i,s);return n===ce(s)&&(a?Lr(i,o)&&Dt(n,"set",r,i):Dt(n,"add",r,i)),c}}function Iy(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Dt(t,"delete",e,void 0),r}function Ay(t,e){const n=Reflect.has(t,e);return(!oa(e)||!Lu.has(e))&&ct(t,"has",e),n}function Sy(t){return ct(t,"iterate",z(t)?"length":yn),Reflect.ownKeys(t)}const Vu={get:vy,set:by,deleteProperty:Iy,has:Ay,ownKeys:Sy},Cy={get:Ey,set(t,e){return!0},deleteProperty(t,e){return!0}},ky=We({},Vu,{get:wy,set:Ty}),ya=t=>t,fs=t=>Reflect.getPrototypeOf(t);function ds(t,e,n=!1,r=!1){t=t.__v_raw;const i=ce(t),s=ce(e);e!==s&&!n&&ct(i,"get",e),!n&&ct(i,"get",s);const{has:o}=fs(i),a=r?ya:n?_a:$r;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ps(t,e=!1){const n=this.__v_raw,r=ce(n),i=ce(t);return t!==i&&!e&&ct(r,"has",t),!e&&ct(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function ms(t,e=!1){return t=t.__v_raw,!e&&ct(ce(t),"iterate",yn),Reflect.get(t,"size",t)}function $u(t){t=ce(t);const e=ce(this);return fs(e).has.call(e,t)||(e.add(t),Dt(e,"add",t,t)),this}function ju(t,e){e=ce(e);const n=ce(this),{has:r,get:i}=fs(n);let s=r.call(n,t);s||(t=ce(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Lr(e,o)&&Dt(n,"set",t,e):Dt(n,"add",t,e),this}function Bu(t){const e=ce(this),{has:n,get:r}=fs(e);let i=n.call(e,t);i||(t=ce(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Dt(e,"delete",t,void 0),s}function zu(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&Dt(t,"clear",void 0,void 0),n}function gs(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ce(o),c=e?ya:t?_a:$r;return!t&&ct(a,"iterate",yn),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function ys(t,e,n){return function(...r){const i=this.__v_raw,s=ce(i),o=Qn(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?ya:e?_a:$r;return!e&&ct(s,"iterate",c?fa:yn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:this}}function Ry(){const t={get(s){return ds(this,s)},get size(){return ms(this)},has:ps,add:$u,set:ju,delete:Bu,clear:zu,forEach:gs(!1,!1)},e={get(s){return ds(this,s,!1,!0)},get size(){return ms(this)},has:ps,add:$u,set:ju,delete:Bu,clear:zu,forEach:gs(!1,!0)},n={get(s){return ds(this,s,!0)},get size(){return ms(this,!0)},has(s){return ps.call(this,s,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:gs(!0,!1)},r={get(s){return ds(this,s,!0,!0)},get size(){return ms(this,!0)},has(s){return ps.call(this,s,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ys(s,!1,!1),n[s]=ys(s,!0,!1),e[s]=ys(s,!1,!0),r[s]=ys(s,!0,!0)}),[t,n,e,r]}const[Ny,Oy,xy,Py]=Ry();function va(t,e){const n=e?t?Py:xy:t?Oy:Ny;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ne(n,i)&&i in r?n:r,i,s)}const Dy={get:va(!1,!1)},My={get:va(!1,!0)},Ly={get:va(!0,!1)},qu=new WeakMap,Hu=new WeakMap,Ku=new WeakMap,Uy=new WeakMap;function Fy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vy(t){return t.__v_skip||!Object.isExtensible(t)?0:Fy(cy(t))}function Vr(t){return t&&t.__v_isReadonly?t:wa(t,!1,Vu,Dy,qu)}function $y(t){return wa(t,!1,ky,My,Hu)}function Wu(t){return wa(t,!0,Cy,Ly,Ku)}function wa(t,e,n,r,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Vy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function tr(t){return Ea(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ea(t){return!!(t&&t.__v_isReadonly)}function Gu(t){return tr(t)||Ea(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Yu(t){return ls(t,"__v_skip",!0),t}const $r=t=>Te(t)?Vr(t):t,_a=t=>Te(t)?Wu(t):t;function Xu(t){Du()&&(t=ce(t),t.dep||(t.dep=la()),Mu(t.dep))}function Qu(t,e){t=ce(t),t.dep&&ma(t.dep)}function Ge(t){return Boolean(t&&t.__v_isRef===!0)}function vs(t){return Ju(t,!1)}function jy(t){return Ju(t,!0)}function Ju(t,e){return Ge(t)?t:new By(t,e)}class By{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:$r(e)}get value(){return Xu(this),this._value}set value(e){e=this._shallow?e:ce(e),Lr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:$r(e),Qu(this))}}function jr(t){return Ge(t)?t.value:t}const zy={get:(t,e,n)=>jr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ge(i)&&!Ge(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Zu(t){return tr(t)?t:new Proxy(t,zy)}class qy{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new da(e,()=>{this._dirty||(this._dirty=!0,Qu(this))}),this.__v_isReadonly=r}get value(){const e=ce(this);return Xu(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ie(t,e){let n,r;const i=X(t);return i?(n=t,r=mt):(n=t.get,r=t.set),new qy(n,r,i||!r)}Promise.resolve();function Hy(t,e,...n){const r=t.vnode.props||de;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||de;f?i=n.map(m=>m.trim()):h&&(i=n.map(us))}let a,c=r[a=ca(e)]||r[a=ca(Tt(e))];!c&&s&&(c=r[a=ca(Jn(e))]),c&&yt(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yt(l,t,6,i)}}function eh(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=eh(l,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(z(s)?s.forEach(c=>o[c]=null):We(o,s),r.set(t,o),o)}function ba(t,e){return!t||!ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Jn(e))||ne(t,e))}let gt=null,th=null;function ws(t){const e=gt;return gt=t,th=t&&t.type.__scopeId||null,e}function Ky(t,e=gt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&bh(-1);const s=ws(e),o=t(...i);return ws(s),r._d&&bh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ta(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:S}=t;let E,v;const w=ws(t);try{if(n.shapeFlag&4){const V=i||r;E=It(u.call(V,V,h,s,m,f,g)),v=c}else{const V=e;E=It(V.length>1?V(s,{attrs:c,slots:a,emit:l}):V(s,null)),v=e.props?c:Wy(c)}}catch(V){zr.length=0,Wr(V,t,1),E=je(Br)}let L=E;if(v&&S!==!1){const V=Object.keys(v),{shapeFlag:ae}=L;V.length&&ae&(1|6)&&(o&&V.some(ia)&&(v=Gy(v,o)),L=Hr(L,v))}return n.dirs&&(L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),E=L,ws(w),E}const Wy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ns(n))&&((e||(e={}))[n]=t[n]);return e},Gy=(t,e)=>{const n={};for(const r in t)(!ia(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yy(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ba(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nh(r,o,l):!0:!!o;return!1}function nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ba(n,s))return!0}return!1}function Xy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qy=t=>t.__isSuspense;function Jy(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Gv(t)}function Es(t,e){if(Re){let n=Re.provides;const r=Re.parent&&Re.parent.provides;r===n&&(n=Re.provides=Object.create(r)),n[t]=e}}function Gt(t,e,n=!1){const r=Re||gt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(r.proxy):e}}function nr(t){return X(t)?{setup:t,name:t.name}:t}const Ia=t=>!!t.type.__asyncLoader;function pS(t){X(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let m;return c||(m=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((S,E)=>{a(g,()=>S(h()),()=>E(g),u+1)});throw g}).then(g=>m!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),l=g,g)))};return nr({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const m=Re;if(l)return()=>Aa(l,m);const g=w=>{c=null,Wr(w,m,13,!r)};if(o&&m.suspense||Kr)return f().then(w=>()=>Aa(w,m)).catch(w=>(g(w),()=>r?je(r,{error:w}):null));const S=vs(!1),E=vs(),v=vs(!!i);return i&&setTimeout(()=>{v.value=!1},i),s!=null&&setTimeout(()=>{if(!S.value&&!E.value){const w=new Error(`Async component timed out after ${s}ms.`);g(w),E.value=w}},s),f().then(()=>{S.value=!0,m.parent&&Sa(m.parent.vnode)&&ja(m.parent.update)}).catch(w=>{g(w),E.value=w}),()=>{if(S.value&&l)return Aa(l,m);if(E.value&&r)return je(r,{error:E.value});if(n&&!v.value)return je(n)}}})}function Aa(t,{vnode:{ref:e,props:n,children:r}}){const i=je(t,n,r);return i.ref=e,i}const Sa=t=>t.type.__isKeepAlive;function Zy(t,e){rh(t,"a",e)}function ev(t,e){rh(t,"da",e)}function rh(t,e,n=Re){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(_s(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Sa(i.parent.vnode)&&tv(r,e,n,i),i=i.parent}}function tv(t,e,n,r){const i=_s(e,t,r,!0);ih(()=>{sa(r[e],i)},n)}function _s(t,e,n=Re,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;er(),rr(n);const a=yt(e,n,t,o);return Tn(),vn(),a});return r?i.unshift(s):i.push(s),s}}const Mt=t=>(e,n=Re)=>(!Kr||t==="sp")&&_s(t,e,n),nv=Mt("bm"),rv=Mt("m"),iv=Mt("bu"),sv=Mt("u"),ov=Mt("bum"),ih=Mt("um"),av=Mt("sp"),cv=Mt("rtg"),lv=Mt("rtc");function uv(t,e=Re){_s("ec",t,e)}let Ca=!0;function hv(t){const e=ah(t),n=t.proxy,r=t.ctx;Ca=!1,e.beforeCreate&&sh(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:S,deactivated:E,beforeDestroy:v,beforeUnmount:w,destroyed:L,unmounted:V,render:ae,renderTracked:ie,renderTriggered:be,errorCaptured:Et,serverPrefetch:$e,expose:Ke,inheritAttrs:Ot,components:xt,directives:Hn,filters:Kn}=e;if(l&&fv(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const ue=o[me];X(ue)&&(r[me]=ue.bind(n))}if(i){const me=i.call(n,n);Te(me)&&(t.data=Vr(me))}if(Ca=!0,s)for(const me in s){const ue=s[me],ft=X(ue)?ue.bind(n,n):X(ue.get)?ue.get.bind(n,n):mt,Gn=!X(ue)&&X(ue.set)?ue.set.bind(n):mt,Pt=Ie({get:ft,set:Gn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:_t=>Pt.value=_t})}if(a)for(const me in a)oh(a[me],r,n,me);if(c){const me=X(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ue=>{Es(ue,me[ue])})}u&&sh(u,t,"c");function ke(me,ue){z(ue)?ue.forEach(ft=>me(ft.bind(n))):ue&&me(ue.bind(n))}if(ke(nv,h),ke(rv,f),ke(iv,m),ke(sv,g),ke(Zy,S),ke(ev,E),ke(uv,Et),ke(lv,ie),ke(cv,be),ke(ov,w),ke(ih,V),ke(av,$e),z(Ke))if(Ke.length){const me=t.exposed||(t.exposed={});Ke.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:ft=>n[ue]=ft})})}else t.exposed||(t.exposed={});ae&&t.render===mt&&(t.render=ae),Ot!=null&&(t.inheritAttrs=Ot),xt&&(t.components=xt),Hn&&(t.directives=Hn)}function fv(t,e,n=mt,r=!1){z(t)&&(t=ka(t));for(const i in t){const s=t[i];let o;Te(s)?"default"in s?o=Gt(s.from||i,s.default,!0):o=Gt(s.from||i):o=Gt(s),Ge(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function sh(t,e,n){yt(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function oh(t,e,n,r){const i=r.includes(".")?Fh(n,r):()=>n[r];if(De(t)){const s=e[t];X(s)&&Jr(i,s)}else if(X(t))Jr(i,t.bind(n));else if(Te(t))if(z(t))t.forEach(s=>oh(s,e,n,r));else{const s=X(t.handler)?t.handler.bind(n):e[t.handler];X(s)&&Jr(i,s,t)}}function ah(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>bs(c,l,o,!0)),bs(c,e,o)),s.set(e,c),c}function bs(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&bs(t,s,n,!0),i&&i.forEach(o=>bs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=dv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const dv={data:ch,props:wn,emits:wn,methods:wn,computed:wn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:wn,directives:wn,watch:mv,provide:ch,inject:pv};function ch(t,e){return e?t?function(){return We(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function pv(t,e){return wn(ka(t),ka(e))}function ka(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?We(We(Object.create(null),t),e):e}function mv(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=Ye(t[r],e[r]);return n}function gv(t,e,n,r=!1){const i={},s={};ls(s,Is,1),t.propsDefaults=Object.create(null),lh(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:$y(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function yv(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ce(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const m=e[f];if(c)if(ne(s,f))m!==s[f]&&(s[f]=m,l=!0);else{const g=Tt(f);i[g]=Ra(c,a,g,m,t,!1)}else m!==s[f]&&(s[f]=m,l=!0)}}}else{lh(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Jn(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ra(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ne(e,h))&&(delete s[h],l=!0)}l&&Dt(t,"set","$attrs")}function lh(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ss(c))continue;const l=e[c];let u;i&&ne(i,u=Tt(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:ba(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=ce(n),l=a||de;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ra(i,c,h,l[h],t,!ne(l,h))}}return o}function Ra(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(rr(i),r=l[n]=c.call(null,e),Tn())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Jn(n))&&(r=!0))}return r}function uh(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,m]=uh(h,e,!0);We(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,Xn),Xn;if(z(s))for(let u=0;u<s.length;u++){const h=Tt(s[u]);hh(h)&&(o[h]=de)}else if(s)for(const u in s){const h=Tt(u);if(hh(h)){const f=s[u],m=o[h]=z(f)||X(f)?{type:f}:f;if(m){const g=ph(Boolean,m.type),S=ph(String,m.type);m[0]=g>-1,m[1]=S<0||g<S,(g>-1||ne(m,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function hh(t){return t[0]!=="$"}function fh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function dh(t,e){return fh(t)===fh(e)}function ph(t,e){return z(e)?e.findIndex(n=>dh(n,t)):X(e)&&dh(e,t)?0:-1}const mh=t=>t[0]==="_"||t==="$stable",Na=t=>z(t)?t.map(It):[It(t)],vv=(t,e,n)=>{const r=Ky((...i)=>Na(e(...i)),n);return r._c=!1,r},gh=(t,e,n)=>{const r=t._ctx;for(const i in t){if(mh(i))continue;const s=t[i];if(X(s))e[i]=vv(i,s,r);else if(s!=null){const o=Na(s);e[i]=()=>o}}},yh=(t,e)=>{const n=Na(e);t.slots.default=()=>n},wv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),ls(e,"_",n)):gh(e,t.slots={})}else t.slots={},e&&yh(t,e);ls(t.slots,Is,1)},Ev=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(We(i,e),!n&&a===1&&delete i._):(s=!e.$stable,gh(e,i)),o=e}else e&&(yh(t,e),o={default:1});if(s)for(const a in i)!mh(a)&&!(a in o)&&delete i[a]};function mS(t,e){const n=gt;if(n===null)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=de]=e[s];X(o)&&(o={mounted:o,updated:o}),o.deep&&In(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function En(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(er(),yt(c,n,8,[t.el,a,t,e]),vn())}}function vh(){return{app:null,config:{isNativeTag:sy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _v=0;function bv(t,e){return function(r,i=null){i!=null&&!Te(i)&&(i=null);const s=vh(),o=new Set;let a=!1;const c=s.app={_uid:_v++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Xv,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const f=je(r,i);return f.appContext=s,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ua(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Oa(t,e,n,r,i=!1){if(z(t)){t.forEach((f,m)=>Oa(f,e&&(z(e)?e[m]:e),n,r,i));return}if(Ia(r)&&!i)return;const s=r.shapeFlag&4?Ua(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):Ge(l)&&(l.value=null)),X(c))Xt(c,a,12,[o,u]);else{const f=De(c),m=Ge(c);if(f||m){const g=()=>{if(t.f){const S=f?u[c]:c.value;i?z(S)&&sa(S,s):z(S)?S.includes(s)||S.push(s):f?u[c]=[s]:(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ne(h,c)&&(h[c]=o)):Ge(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,tt(g,n)):g()}}}const tt=Jy;function Tv(t){return Iv(t)}function Iv(t,e){const n=hy();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=mt,cloneNode:g,insertStaticContent:S}=t,E=(d,p,y,T=null,b=null,k=null,O=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!qr(d,p)&&(T=U(d),dt(d,b,k,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:A,ref:$,shapeFlag:D}=p;switch(A){case xa:v(d,p,y,T);break;case Br:w(d,p,y,T);break;case Pa:d==null&&L(p,y,T,O);break;case Lt:Hn(d,p,y,T,b,k,O,C,R);break;default:D&1?ie(d,p,y,T,b,k,O,C,R):D&6?Kn(d,p,y,T,b,k,O,C,R):(D&64||D&128)&&A.process(d,p,y,T,b,k,O,C,R,ge)}$!=null&&b&&Oa($,d&&d.ref,k,p||d,!p)},v=(d,p,y,T)=>{if(d==null)r(p.el=a(p.children),y,T);else{const b=p.el=d.el;p.children!==d.children&&l(b,p.children)}},w=(d,p,y,T)=>{d==null?r(p.el=c(p.children||""),y,T):p.el=d.el},L=(d,p,y,T)=>{[d.el,d.anchor]=S(d.children,p,y,T)},V=({el:d,anchor:p},y,T)=>{let b;for(;d&&d!==p;)b=f(d),r(d,y,T),d=b;r(p,y,T)},ae=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),i(d),d=y;i(p)},ie=(d,p,y,T,b,k,O,C,R)=>{O=O||p.type==="svg",d==null?be(p,y,T,b,k,O,C,R):Ke(d,p,b,k,O,C,R)},be=(d,p,y,T,b,k,O,C)=>{let R,A;const{type:$,props:D,shapeFlag:j,transition:W,patchFlag:te,dirs:we}=d;if(d.el&&g!==void 0&&te===-1)R=d.el=g(d.el);else{if(R=d.el=o(d.type,k,D&&D.is,D),j&8?u(R,d.children):j&16&&$e(d.children,R,null,T,b,k&&$!=="foreignObject",O,C),we&&En(d,null,T,"created"),D){for(const ye in D)ye!=="value"&&!ss(ye)&&s(R,ye,null,D[ye],k,d.children,T,b,N);"value"in D&&s(R,"value",null,D.value),(A=D.onVnodeBeforeMount)&&At(A,T,d)}Et(R,d,d.scopeId,O,T)}we&&En(d,null,T,"beforeMount");const fe=(!b||b&&!b.pendingBranch)&&W&&!W.persisted;fe&&W.beforeEnter(R),r(R,p,y),((A=D&&D.onVnodeMounted)||fe||we)&&tt(()=>{A&&At(A,T,d),fe&&W.enter(R),we&&En(d,null,T,"mounted")},b)},Et=(d,p,y,T,b)=>{if(y&&m(d,y),T)for(let k=0;k<T.length;k++)m(d,T[k]);if(b){let k=b.subTree;if(p===k){const O=b.vnode;Et(d,O,O.scopeId,O.slotScopeIds,b.parent)}}},$e=(d,p,y,T,b,k,O,C,R=0)=>{for(let A=R;A<d.length;A++){const $=d[A]=C?Yt(d[A]):It(d[A]);E(null,$,p,y,T,b,k,O,C)}},Ke=(d,p,y,T,b,k,O)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:A,dirs:$}=p;R|=d.patchFlag&16;const D=d.props||de,j=p.props||de;let W;y&&_n(y,!1),(W=j.onVnodeBeforeUpdate)&&At(W,y,p,d),$&&En(p,d,y,"beforeUpdate"),y&&_n(y,!0);const te=b&&p.type!=="foreignObject";if(A?Ot(d.dynamicChildren,A,C,y,T,te,k):O||ft(d,p,C,null,y,T,te,k,!1),R>0){if(R&16)xt(C,p,D,j,y,T,b);else if(R&2&&D.class!==j.class&&s(C,"class",null,j.class,b),R&4&&s(C,"style",D.style,j.style,b),R&8){const we=p.dynamicProps;for(let fe=0;fe<we.length;fe++){const ye=we[fe],pt=D[ye],Yn=j[ye];(Yn!==pt||ye==="value")&&s(C,ye,pt,Yn,b,d.children,y,T,N)}}R&1&&d.children!==p.children&&u(C,p.children)}else!O&&A==null&&xt(C,p,D,j,y,T,b);((W=j.onVnodeUpdated)||$)&&tt(()=>{W&&At(W,y,p,d),$&&En(p,d,y,"updated")},T)},Ot=(d,p,y,T,b,k,O)=>{for(let C=0;C<p.length;C++){const R=d[C],A=p[C],$=R.el&&(R.type===Lt||!qr(R,A)||R.shapeFlag&(6|64))?h(R.el):y;E(R,A,$,null,T,b,k,O,!0)}},xt=(d,p,y,T,b,k,O)=>{if(y!==T){for(const C in T){if(ss(C))continue;const R=T[C],A=y[C];R!==A&&C!=="value"&&s(d,C,A,R,O,p.children,b,k,N)}if(y!==de)for(const C in y)!ss(C)&&!(C in T)&&s(d,C,y[C],null,O,p.children,b,k,N);"value"in T&&s(d,"value",y.value,T.value)}},Hn=(d,p,y,T,b,k,O,C,R)=>{const A=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:j,slotScopeIds:W}=p;W&&(C=C?C.concat(W):W),d==null?(r(A,y,T),r($,y,T),$e(p.children,y,$,b,k,O,C,R)):D>0&&D&64&&j&&d.dynamicChildren?(Ot(d.dynamicChildren,j,y,b,k,O,C),(p.key!=null||b&&p===b.subTree)&&wh(d,p,!0)):ft(d,p,y,$,b,k,O,C,R)},Kn=(d,p,y,T,b,k,O,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?b.ctx.activate(p,y,T,O,R):Wn(p,y,T,b,k,O,R):ke(d,p,R)},Wn=(d,p,y,T,b,k,O)=>{const C=d.component=Uv(d,T,b);if(Sa(d)&&(C.ctx.renderer=ge),Fv(C),C.asyncDep){if(b&&b.registerDep(C,me),!d.el){const R=C.subTree=je(Br);w(null,R,p,y)}return}me(C,d,p,y,b,k,O)},ke=(d,p,y)=>{const T=p.component=d.component;if(Yy(d,p,y))if(T.asyncDep&&!T.asyncResolved){ue(T,p,y);return}else T.next=p,Kv(T.update),T.update();else p.component=d.component,p.el=d.el,T.vnode=p},me=(d,p,y,T,b,k,O)=>{const C=()=>{if(d.isMounted){let{next:$,bu:D,u:j,parent:W,vnode:te}=d,we=$,fe;_n(d,!1),$?($.el=te.el,ue(d,$,O)):$=te,D&&cs(D),(fe=$.props&&$.props.onVnodeBeforeUpdate)&&At(fe,W,$,te),_n(d,!0);const ye=Ta(d),pt=d.subTree;d.subTree=ye,E(pt,ye,h(pt.el),U(pt),d,b,k),$.el=ye.el,we===null&&Xy(d,ye.el),j&&tt(j,b),(fe=$.props&&$.props.onVnodeUpdated)&&tt(()=>At(fe,W,$,te),b)}else{let $;const{el:D,props:j}=p,{bm:W,m:te,parent:we}=d,fe=Ia(p);if(_n(d,!1),W&&cs(W),!fe&&($=j&&j.onVnodeBeforeMount)&&At($,we,p),_n(d,!0),D&&Q){const ye=()=>{d.subTree=Ta(d),Q(D,d.subTree,d,b,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=Ta(d);E(null,ye,y,T,d,b,k),p.el=ye.el}if(te&&tt(te,b),!fe&&($=j&&j.onVnodeMounted)){const ye=p;tt(()=>At($,we,ye),b)}p.shapeFlag&256&&d.a&&tt(d.a,b),d.isMounted=!0,p=y=T=null}},R=d.effect=new da(C,()=>ja(d.update),d.scope),A=d.update=R.run.bind(R);A.id=d.uid,_n(d,!0),A()},ue=(d,p,y)=>{p.component=d;const T=d.vnode.props;d.vnode=p,d.next=null,yv(d,p.props,T,y),Ev(d,p.children,y),er(),Ba(void 0,d.update),vn()},ft=(d,p,y,T,b,k,O,C,R=!1)=>{const A=d&&d.children,$=d?d.shapeFlag:0,D=p.children,{patchFlag:j,shapeFlag:W}=p;if(j>0){if(j&128){Pt(A,D,y,T,b,k,O,C,R);return}else if(j&256){Gn(A,D,y,T,b,k,O,C,R);return}}W&8?($&16&&N(A,b,k),D!==A&&u(y,D)):$&16?W&16?Pt(A,D,y,T,b,k,O,C,R):N(A,b,k,!0):($&8&&u(y,""),W&16&&$e(D,y,T,b,k,O,C,R))},Gn=(d,p,y,T,b,k,O,C,R)=>{d=d||Xn,p=p||Xn;const A=d.length,$=p.length,D=Math.min(A,$);let j;for(j=0;j<D;j++){const W=p[j]=R?Yt(p[j]):It(p[j]);E(d[j],W,y,null,b,k,O,C,R)}A>$?N(d,b,k,!0,!1,D):$e(p,y,T,b,k,O,C,R,D)},Pt=(d,p,y,T,b,k,O,C,R)=>{let A=0;const $=p.length;let D=d.length-1,j=$-1;for(;A<=D&&A<=j;){const W=d[A],te=p[A]=R?Yt(p[A]):It(p[A]);if(qr(W,te))E(W,te,y,null,b,k,O,C,R);else break;A++}for(;A<=D&&A<=j;){const W=d[D],te=p[j]=R?Yt(p[j]):It(p[j]);if(qr(W,te))E(W,te,y,null,b,k,O,C,R);else break;D--,j--}if(A>D){if(A<=j){const W=j+1,te=W<$?p[W].el:T;for(;A<=j;)E(null,p[A]=R?Yt(p[A]):It(p[A]),y,te,b,k,O,C,R),A++}}else if(A>j)for(;A<=D;)dt(d[A],b,k,!0),A++;else{const W=A,te=A,we=new Map;for(A=te;A<=j;A++){const at=p[A]=R?Yt(p[A]):It(p[A]);at.key!=null&&we.set(at.key,A)}let fe,ye=0;const pt=j-te+1;let Yn=!1,_u=0;const Mr=new Array(pt);for(A=0;A<pt;A++)Mr[A]=0;for(A=W;A<=D;A++){const at=d[A];if(ye>=pt){dt(at,b,k,!0);continue}let bt;if(at.key!=null)bt=we.get(at.key);else for(fe=te;fe<=j;fe++)if(Mr[fe-te]===0&&qr(at,p[fe])){bt=fe;break}bt===void 0?dt(at,b,k,!0):(Mr[bt-te]=A+1,bt>=_u?_u=bt:Yn=!0,E(at,p[bt],y,null,b,k,O,C,R),ye++)}const bu=Yn?Av(Mr):Xn;for(fe=bu.length-1,A=pt-1;A>=0;A--){const at=te+A,bt=p[at],Tu=at+1<$?p[at+1].el:T;Mr[A]===0?E(null,bt,y,Tu,b,k,O,C,R):Yn&&(fe<0||A!==bu[fe]?_t(bt,y,Tu,2):fe--)}}},_t=(d,p,y,T,b=null)=>{const{el:k,type:O,transition:C,children:R,shapeFlag:A}=d;if(A&6){_t(d.component.subTree,p,y,T);return}if(A&128){d.suspense.move(p,y,T);return}if(A&64){O.move(d,p,y,ge);return}if(O===Lt){r(k,p,y);for(let D=0;D<R.length;D++)_t(R[D],p,y,T);r(d.anchor,p,y);return}if(O===Pa){V(d,p,y);return}if(T!==2&&A&1&&C)if(T===0)C.beforeEnter(k),r(k,p,y),tt(()=>C.enter(k),b);else{const{leave:D,delayLeave:j,afterLeave:W}=C,te=()=>r(k,p,y),we=()=>{D(k,()=>{te(),W&&W()})};j?j(k,te,we):we()}else r(k,p,y)},dt=(d,p,y,T=!1,b=!1)=>{const{type:k,props:O,ref:C,children:R,dynamicChildren:A,shapeFlag:$,patchFlag:D,dirs:j}=d;if(C!=null&&Oa(C,null,y,d,!0),$&256){p.ctx.deactivate(d);return}const W=$&1&&j,te=!Ia(d);let we;if(te&&(we=O&&O.onVnodeBeforeUnmount)&&At(we,p,d),$&6)M(d.component,y,T);else{if($&128){d.suspense.unmount(y,T);return}W&&En(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,y,b,ge,T):A&&(k!==Lt||D>0&&D&64)?N(A,p,y,!1,!0):(k===Lt&&D&(128|256)||!b&&$&16)&&N(R,p,y),T&&ea(d)}(te&&(we=O&&O.onVnodeUnmounted)||W)&&tt(()=>{we&&At(we,p,d),W&&En(d,null,p,"unmounted")},y)},ea=d=>{const{type:p,el:y,anchor:T,transition:b}=d;if(p===Lt){_(y,T);return}if(p===Pa){ae(d);return}const k=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:O,delayLeave:C}=b,R=()=>O(y,k);C?C(d.el,k,R):R()}else k()},_=(d,p)=>{let y;for(;d!==p;)y=f(d),i(d),d=y;i(p)},M=(d,p,y)=>{const{bum:T,scope:b,update:k,subTree:O,um:C}=d;T&&cs(T),b.stop(),k&&(k.active=!1,dt(O,d,p,y)),C&&tt(C,p),tt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,y,T=!1,b=!1,k=0)=>{for(let O=k;O<d.length;O++)dt(d[O],p,y,T,b)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,p,y)=>{d==null?p._vnode&&dt(p._vnode,null,null,!0):E(p._vnode||null,d,p,null,null,null,y),Dh(),p._vnode=d},ge={p:E,um:dt,m:_t,r:ea,mt:Wn,mc:$e,pc:ft,pbc:Ot,n:U,o:t};let J,Q;return e&&([J,Q]=e(ge)),{render:he,hydrate:J,createApp:bv(he,J)}}function _n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wh(t,e,n=!1){const r=t.children,i=e.children;if(z(r)&&z(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Yt(i[s]),a.el=o.el),n||wh(o,a))}}function Av(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Sv=t=>t.__isTeleport,Eh="components";function gS(t,e){return kv(Eh,t,!0,e)||t}const Cv=Symbol();function kv(t,e,n=!0,r=!1){const i=gt||Re;if(i){const s=i.type;if(t===Eh){const a=Bv(s);if(a&&(a===e||a===Tt(e)||a===as(Tt(e))))return s}const o=_h(i[t]||s[t],e)||_h(i.appContext[t],e);return!o&&r?s:o}}function _h(t,e){return t&&(t[e]||t[Tt(e)]||t[as(Tt(e))])}const Lt=Symbol(void 0),xa=Symbol(void 0),Br=Symbol(void 0),Pa=Symbol(void 0),zr=[];let bn=null;function yS(t=!1){zr.push(bn=t?null:[])}function Rv(){zr.pop(),bn=zr[zr.length-1]||null}let Ts=1;function bh(t){Ts+=t}function Th(t){return t.dynamicChildren=Ts>0?bn||Xn:null,Rv(),Ts>0&&bn&&bn.push(t),t}function vS(t,e,n,r,i,s){return Th(Ah(t,e,n,r,i,s,!0))}function wS(t,e,n,r,i){return Th(je(t,e,n,r,i,!0))}function Da(t){return t?t.__v_isVNode===!0:!1}function qr(t,e){return t.type===e.type&&t.key===e.key}const Is="__vInternal",Ih=({key:t})=>t!=null?t:null,As=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Ge(t)||X(t)?{i:gt,r:t,k:e,f:!!n}:t:null;function Ah(t,e=null,n=null,r=0,i=null,s=t===Lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ih(e),ref:e&&As(e),scopeId:th,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Ma(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),Ts>0&&!o&&bn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&bn.push(c),c}const je=Nv;function Nv(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Cv)&&(t=Br),Da(t)){const a=Hr(t,e,!0);return n&&Ma(a,n),a}if(zv(t)&&(t=t.__vccOpts),e){e=Ov(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=ra(a)),Te(c)&&(Gu(c)&&!z(c)&&(c=We({},c)),e.style=na(c))}const o=De(t)?1:Qy(t)?128:Sv(t)?64:Te(t)?4:X(t)?2:0;return Ah(t,e,n,r,i,o,s,!0)}function Ov(t){return t?Gu(t)||Is in t?We({},t):t:null}function Hr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Pv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ih(a),ref:e&&e.ref?n&&i?z(i)?i.concat(As(e)):[i,As(e)]:As(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),el:t.el,anchor:t.anchor}}function xv(t=" ",e=0){return je(xa,null,t,e)}function It(t){return t==null||typeof t=="boolean"?je(Br):z(t)?je(Lt,null,t.slice()):typeof t=="object"?Yt(t):je(xa,null,String(t))}function Yt(t){return t.el===null||t.memo?t:Hr(t)}function Ma(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),Ma(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Is in e)?e._ctx=gt:i===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),r&64?(n=16,e=[xv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ra([e.class,r.class]));else if(i==="style")e.style=na([e.style,r.style]);else if(ns(i)){const s=e[i],o=r[i];s!==o&&!(z(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function At(t,e,n,r=null){yt(t,e,7,[n,r])}function ES(t,e,n,r){let i;const s=n&&n[r];if(z(t)||De(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const La=t=>t?Sh(t)?Ua(t)||t.proxy:La(t.parent):null,Ss=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>La(t.parent),$root:t=>La(t.root),$emit:t=>t.emit,$options:t=>ah(t),$forceUpdate:t=>()=>ja(t.update),$nextTick:t=>Oh.bind(t.proxy),$watch:t=>Yv.bind(t)}),Dv={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==de&&ne(r,e))return o[e]=1,r[e];if(i!==de&&ne(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,s[e];if(n!==de&&ne(n,e))return o[e]=4,n[e];Ca&&(o[e]=0)}}const u=Ss[e];let h,f;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&ne(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;if(i!==de&&ne(i,e))i[e]=n;else if(r!==de&&ne(r,e))r[e]=n;else if(ne(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==de&&ne(t,o)||e!==de&&ne(e,o)||(a=s[0])&&ne(a,o)||ne(r,o)||ne(Ss,o)||ne(i.config.globalProperties,o)}},Mv=vh();let Lv=0;function Uv(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Mv,s={uid:Lv++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uh(r,i),emitsOptions:eh(r,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hy.bind(null,s),t.ce&&t.ce(s),s}let Re=null;const rr=t=>{Re=t,t.scope.on()},Tn=()=>{Re&&Re.scope.off(),Re=null};function Sh(t){return t.vnode.shapeFlag&4}let Kr=!1;function Fv(t,e=!1){Kr=e;const{props:n,children:r}=t.vnode,i=Sh(t);gv(t,n,i,e),wv(t,r);const s=i?Vv(t,e):void 0;return Kr=!1,s}function Vv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yu(new Proxy(t.ctx,Dv));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?jv(t):null;rr(t),er();const s=Xt(r,t,0,[t.props,i]);if(vn(),Tn(),Cu(s)){if(s.then(Tn,Tn),e)return s.then(o=>{Ch(t,o,e)}).catch(o=>{Wr(o,t,0)});t.asyncDep=s}else Ch(t,s,e)}else Rh(t,e)}function Ch(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=Zu(e)),Rh(t,n)}let kh;function Rh(t,e,n){const r=t.type;if(!t.render){if(!e&&kh&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=We(We({isCustomElement:s,delimiters:a},o),c);r.render=kh(i,l)}}t.render=r.render||mt}rr(t),er(),hv(t),vn(),Tn()}function $v(t){return new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}})}function jv(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=$v(t))},slots:t.slots,emit:t.emit,expose:e}}function Ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zu(Yu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ss)return Ss[n](t)}}))}function Bv(t){return X(t)&&t.displayName||t.name}function zv(t){return X(t)&&"__vccOpts"in t}function Xt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Wr(s,e,n)}return i}function yt(t,e,n,r){if(X(t)){const s=Xt(t,e,n,r);return s&&Cu(s)&&s.catch(o=>{Wr(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(yt(t[s],e,n,r));return i}function Wr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Xt(c,null,10,[t,o,a]);return}}qv(t,n,i,r)}function qv(t,e,n,r=!0){console.error(t)}let Cs=!1,Fa=!1;const lt=[];let Ut=0;const Gr=[];let Yr=null,ir=0;const Xr=[];let Qt=null,sr=0;const Nh=Promise.resolve();let Va=null,$a=null;function Oh(t){const e=Va||Nh;return t?e.then(this?t.bind(this):t):e}function Hv(t){let e=Ut+1,n=lt.length;for(;e<n;){const r=e+n>>>1;Qr(lt[r])<t?e=r+1:n=r}return e}function ja(t){(!lt.length||!lt.includes(t,Cs&&t.allowRecurse?Ut+1:Ut))&&t!==$a&&(t.id==null?lt.push(t):lt.splice(Hv(t.id),0,t),xh())}function xh(){!Cs&&!Fa&&(Fa=!0,Va=Nh.then(Mh))}function Kv(t){const e=lt.indexOf(t);e>Ut&&lt.splice(e,1)}function Ph(t,e,n,r){z(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),xh()}function Wv(t){Ph(t,Yr,Gr,ir)}function Gv(t){Ph(t,Qt,Xr,sr)}function Ba(t,e=null){if(Gr.length){for($a=e,Yr=[...new Set(Gr)],Gr.length=0,ir=0;ir<Yr.length;ir++)Yr[ir]();Yr=null,ir=0,$a=null,Ba(t,e)}}function Dh(t){if(Xr.length){const e=[...new Set(Xr)];if(Xr.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,r)=>Qr(n)-Qr(r)),sr=0;sr<Qt.length;sr++)Qt[sr]();Qt=null,sr=0}}const Qr=t=>t.id==null?1/0:t.id;function Mh(t){Fa=!1,Cs=!0,Ba(t),lt.sort((n,r)=>Qr(n)-Qr(r));const e=mt;try{for(Ut=0;Ut<lt.length;Ut++){const n=lt[Ut];n&&n.active!==!1&&Xt(n,null,14)}}finally{Ut=0,lt.length=0,Dh(),Cs=!1,Va=null,(lt.length||Gr.length||Xr.length)&&Mh(t)}}const Lh={};function Jr(t,e,n){return Uh(t,e,n)}function Uh(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=de){const a=Re;let c,l=!1,u=!1;if(Ge(t)?(c=()=>t.value,l=!!t._shallow):tr(t)?(c=()=>t,r=!0):z(t)?(u=!0,l=t.some(tr),c=()=>t.map(v=>{if(Ge(v))return v.value;if(tr(v))return In(v);if(X(v))return Xt(v,a,2)})):X(t)?e?c=()=>Xt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),yt(t,a,3,[f])}:c=mt,e&&r){const v=c;c=()=>In(v())}let h,f=v=>{h=E.onStop=()=>{Xt(v,a,4)}};if(Kr)return f=mt,e?n&&yt(e,a,3,[c(),u?[]:void 0,f]):c(),mt;let m=u?[]:Lh;const g=()=>{if(!!E.active)if(e){const v=E.run();(r||l||(u?v.some((w,L)=>Lr(w,m[L])):Lr(v,m)))&&(h&&h(),yt(e,a,3,[v,m===Lh?void 0:m,f]),m=v)}else E.run()};g.allowRecurse=!!e;let S;i==="sync"?S=g:i==="post"?S=()=>tt(g,a&&a.suspense):S=()=>{!a||a.isMounted?Wv(g):g()};const E=new da(c,S);return e?n?g():m=E.run():i==="post"?tt(E.run.bind(E),a&&a.suspense):E.run(),()=>{E.stop(),a&&a.scope&&sa(a.scope.effects,E)}}function Yv(t,e,n){const r=this.proxy,i=De(t)?t.includes(".")?Fh(r,t):()=>r[t]:t.bind(r,r);let s;X(e)?s=e:(s=e.handler,n=e);const o=Re;rr(this);const a=Uh(i,s.bind(r),n);return o?rr(o):Tn(),a}function Fh(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function In(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))In(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)In(t[n],e);else if(rs(t)||Qn(t))t.forEach(n=>{In(n,e)});else if(Ru(t))for(const n in t)In(t[n],e);return t}function ks(t,e,n){const r=arguments.length;return r===2?Te(e)&&!z(e)?Da(e)?je(t,null,[e]):je(t,e):je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Da(n)&&(n=[n]),je(t,e,n))}const Xv="3.2.26",Qv="http://www.w3.org/2000/svg",or=typeof document!="undefined"?document:null,Vh=new Map,Jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?or.createElementNS(Qv,t):or.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>or.createTextNode(t),createComment:t=>or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=Vh.get(t);if(!s){const o=or.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,s=o.content,r){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}Vh.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Zv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ew(t,e,n){const r=t.style,i=De(n);if(n&&!i){for(const s in n)za(r,s,n[s]);if(e&&!De(e))for(const s in e)n[s]==null&&za(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const $h=/\s*!important$/;function za(t,e,n){if(z(n))n.forEach(r=>za(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=tw(t,e);$h.test(n)?t.setProperty(Jn(r),n.replace($h,""),"important"):t[r]=n}}const jh=["Webkit","Moz","ms"],qa={};function tw(t,e){const n=qa[e];if(n)return n;let r=Tt(e);if(r!=="filter"&&r in t)return qa[e]=r;r=as(r);for(let i=0;i<jh.length;i++){const s=jh[i]+r;if(s in t)return qa[e]=s}return e}const Bh="http://www.w3.org/1999/xlink";function nw(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bh,e.slice(6,e.length)):t.setAttributeNS(Bh,e,n);else{const s=Zg(e);n==null||s&&!Iu(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function rw(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Iu(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Rs=Date.now,zh=!1;if(typeof window!="undefined"){Rs()>document.createEvent("Event").timeStamp&&(Rs=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);zh=!!(t&&Number(t[1])<=53)}let Ha=0;const iw=Promise.resolve(),sw=()=>{Ha=0},ow=()=>Ha||(iw.then(sw),Ha=Rs());function An(t,e,n,r){t.addEventListener(e,n,r)}function aw(t,e,n,r){t.removeEventListener(e,n,r)}function cw(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=lw(e);if(r){const l=s[e]=uw(r,i);An(t,a,l,c)}else o&&(aw(t,a,o,c),s[e]=void 0)}}const qh=/(?:Once|Passive|Capture)$/;function lw(t){let e;if(qh.test(t)){e={};let n;for(;n=t.match(qh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Jn(t.slice(2)),e]}function uw(t,e){const n=r=>{const i=r.timeStamp||Rs();(zh||i>=n.attached-1)&&yt(hw(r,n.value),e,5,[r])};return n.value=t,n.attached=ow(),n}function hw(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r(i))}else return e}const Hh=/^on[a-z]/,fw=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?Zv(t,r,i):e==="style"?ew(t,n,r):ns(e)?ia(e)||cw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dw(t,e,r,i))?rw(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),nw(t,e,r,i))};function dw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Hh.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hh.test(e)&&De(n)?!1:e in t}const Ns=t=>{const e=t.props["onUpdate:modelValue"];return z(e)?n=>cs(e,n):e};function pw(t){t.target.composing=!0}function Kh(t){const e=t.target;e.composing&&(e.composing=!1,mw(e,"input"))}function mw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const _S={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Ns(i);const s=r||i.props&&i.props.type==="number";An(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=us(a)),t._assign(a)}),n&&An(t,"change",()=>{t.value=t.value.trim()}),e||(An(t,"compositionstart",pw),An(t,"compositionend",Kh),An(t,"change",Kh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Ns(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&us(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},bS={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=rs(e);An(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?us(Os(o)):Os(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=Ns(r)},mounted(t,{value:e}){Wh(t,e)},beforeUpdate(t,e,n){t._assign=Ns(n)},updated(t,{value:e}){Wh(t,e)}};function Wh(t,e){const n=t.multiple;if(!(n&&!z(e)&&!rs(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=Os(s);if(n)z(e)?s.selected=iy(e,o)>-1:s.selected=e.has(o);else if(ts(Os(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Os(t){return"_value"in t?t._value:t.value}const gw=["ctrl","shift","alt","meta"],yw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gw.some(n=>t[`${n}Key`]&&!e.includes(n))},TS=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=yw[e[i]];if(s&&s(n,e))return}return t(n,...r)},vw=We({patchProp:fw},Jv);let Gh;function ww(){return Gh||(Gh=Tv(vw))}const IS=(...t)=>{const e=ww().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Ew(r);if(!i)return;const s=e._component;!X(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ew(t){return De(t)?document.querySelector(t):t}/**
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
 */const _w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Iw=function(t){try{return Tw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Aw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Xh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sw(){return Ne().indexOf("Electron/")>=0}function Jh(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cw(){return Ne().indexOf("MSAppHost/")>=0}/**
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
 */const kw="FirebaseError";class ar extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=kw,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Rw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ar(i,a,r)}}function Rw(t,e){return t.replace(Nw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nw=/\{\$([^}]+)}/g;function Ow(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zh(s)&&Zh(o)){if(!xs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zh(t){return t!==null&&typeof t=="object"}/**
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
 */function ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xw(t,e){const n=new Pw(t,e);return n.subscribe.bind(n)}class Pw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ka),i.error===void 0&&(i.error=Ka),i.complete===void 0&&(i.complete=Ka);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ka(){}/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class Mw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Aw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uw(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lw(t){return t===Sn?void 0:t}function Uw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Vw={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},$w=se.INFO,jw={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Bw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=$w,this._logHandler=Bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}/**
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
 */class zw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ga="@firebase/app",ef="0.7.11";/**
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
 */const Ya=new Wa("@firebase/app"),Hw="@firebase/app-compat",Kw="@firebase/analytics-compat",Ww="@firebase/analytics",Gw="@firebase/app-check-compat",Yw="@firebase/app-check",Xw="@firebase/auth",Qw="@firebase/auth-compat",Jw="@firebase/database",Zw="@firebase/database-compat",e0="@firebase/functions",t0="@firebase/functions-compat",n0="@firebase/installations",r0="@firebase/installations-compat",i0="@firebase/messaging",s0="@firebase/messaging-compat",o0="@firebase/performance",a0="@firebase/performance-compat",c0="@firebase/remote-config",l0="@firebase/remote-config-compat",u0="@firebase/storage",h0="@firebase/storage-compat",f0="@firebase/firestore",d0="@firebase/firestore-compat",p0="firebase",m0="9.6.1";/**
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
 */const tf="[DEFAULT]",g0={[Ga]:"fire-core",[Hw]:"fire-core-compat",[Ww]:"fire-analytics",[Kw]:"fire-analytics-compat",[Yw]:"fire-app-check",[Gw]:"fire-app-check-compat",[Xw]:"fire-auth",[Qw]:"fire-auth-compat",[Jw]:"fire-rtdb",[Zw]:"fire-rtdb-compat",[e0]:"fire-fn",[t0]:"fire-fn-compat",[n0]:"fire-iid",[r0]:"fire-iid-compat",[i0]:"fire-fcm",[s0]:"fire-fcm-compat",[o0]:"fire-perf",[a0]:"fire-perf-compat",[c0]:"fire-rc",[l0]:"fire-rc-compat",[u0]:"fire-gcs",[h0]:"fire-gcs-compat",[f0]:"fire-fst",[d0]:"fire-fst-compat","fire-js":"fire-js",[p0]:"fire-js-all"};/**
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
 */const Ps=new Map,Xa=new Map;function y0(t,e){try{t.container.addComponent(e)}catch(n){Ya.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Xa.has(e))return Ya.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,t);for(const n of Ps.values())y0(n,t);return!0}function Qa(t,e){return t.container.getProvider(e)}/**
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
 */const v0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ds=new Zr("app","Firebase",v0);/**
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
 */class w0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ds.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=m0;function AS(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:tf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ds.create("bad-app-name",{appName:String(r)});const i=Ps.get(r);if(i){if(xs(t,i.options)&&xs(n,i.config))return i;throw Ds.create("duplicate-app",{appName:r})}const s=new Fw(r);for(const a of Xa.values())s.addComponent(a);const o=new w0(t,n,s);return Ps.set(r,o),o}function nf(t=tf){const e=Ps.get(t);if(!e)throw Ds.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let i=(r=g0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ya.warn(a.join(" "));return}ti(new cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */function E0(t){ti(new cr("platform-logger",e=>new zw(e),"PRIVATE")),Jt(Ga,ef,t),Jt(Ga,ef,"esm2017"),Jt("fire-js","")}E0("");var _0="firebase",b0="9.6.1";/**
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
 */Jt(_0,b0,"app");/*! *****************************************************************************
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
***************************************************************************** */function Ja(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T0=rf,sf=new Zr("auth","Firebase",rf());/**
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
 */const of=new Wa("@firebase/auth");function Ms(t,...e){of.logLevel<=se.ERROR&&of.error(`Auth (${ni}): ${t}`,...e)}/**
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
 */function St(t,...e){throw Za(t,...e)}function Ct(t,...e){return Za(t,...e)}function af(t,e,n){const r=Object.assign(Object.assign({},T0()),{[e]:n});return new Zr("auth","Firebase",r).create(e,{appName:t.name})}function I0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),af(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Za(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sf.create(t,...e)}function Y(t,e,...n){if(!t)throw Za(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ms(e),new Error(e)}function Vt(t,e){t||Ft(e)}/**
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
 */const cf=new Map;function $t(t){Vt(t instanceof Function,"Expected a class definition");let e=cf.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cf.set(t,e),e)}/**
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
 */function A0(t,e){const n=Qa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xs(s,e!=null?e:{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function S0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ec(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function C0(){return lf()==="http:"||lf()==="https:"}function lf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function k0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C0()||Xh()||"connection"in navigator)?navigator.onLine:!0}function R0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=Yh()||Qh()}get(){return k0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tc(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const N0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const O0=new ri(3e4,6e4);function x0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,r,i={}){return hf(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ei(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),uf.fetch()(ff(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function hf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},N0),e);try{const i=new D0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw nc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw nc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw af(t,u,l);St(t,u)}}catch(i){if(i instanceof ar)throw i;St(t,"network-request-failed")}}async function P0(t,e,n,r,i={}){const s=await Ls(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ff(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tc(t.config,i):`${t.config.apiScheme}://${i}`}class D0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"timeout")),O0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function M0(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function L0(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ii(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U0(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=ic(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ii(rc(i.auth_time)),issuedAtTime:ii(rc(i.iat)),expirationTime:ii(rc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rc(t){return Number(t)*1e3}function ic(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ms("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iw(n);return i?JSON.parse(i):(Ms("Failed to decode base64 JWT payload"),null)}catch(i){return Ms("Caught error parsing JWT payload as JSON",i),null}}function F0(t){const e=ic(t);return Y(e,"internal-error"),Y(typeof e.exp!="undefined","internal-error"),Y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ar&&V0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class df{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Us(t){var e;const n=t.auth,r=await t.getIdToken(),i=await si(t,L0(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?z0(s.providerUserInfo):[],a=B0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new df(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function j0(t){const e=Xe(t);await Us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function z0(t){return t.map(e=>{var{providerId:n}=e,r=Ja(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function q0(t,e){const n=await hf(t,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ff(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken!="undefined","internal-error"),Y(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):F0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await q0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new oi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function Zt(t,e){Y(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ja(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new $0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new df(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return U0(this,e)}reload(){return j0(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Us(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await si(this,M0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:V,isAnonymous:ae,providerData:ie,stsTokenManager:be}=n;Y(L&&be,e,"internal-error");const Et=oi.fromJSON(this.name,be);Y(typeof L=="string",e,"internal-error"),Zt(h,e.name),Zt(f,e.name),Y(typeof V=="boolean",e,"internal-error"),Y(typeof ae=="boolean",e,"internal-error"),Zt(m,e.name),Zt(g,e.name),Zt(S,e.name),Zt(E,e.name),Zt(v,e.name),Zt(w,e.name);const $e=new Cn({uid:L,auth:e,email:f,emailVerified:V,displayName:h,isAnonymous:ae,photoURL:g,phoneNumber:m,tenantId:S,stsTokenManager:Et,createdAt:v,lastLoginAt:w});return ie&&Array.isArray(ie)&&($e.providerData=ie.map(Ke=>Object.assign({},Ke))),E&&($e._redirectEventId=E),$e}static async _fromIdTokenResponse(e,n,r=!1){const i=new oi;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Us(s),s}}/**
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
 */class pf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pf.type="NONE";const mf=pf;/**
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
 */function Fs(t,e,n){return`firebase:${t}:${e}:${n}`}class lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new lr($t(mf),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||$t(mf);const o=Fs(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cn._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new lr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new lr(s,e,r))}}/**
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
 */function gf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_f(e))return"Blackberry";if(bf(e))return"Webos";if(sc(e))return"Safari";if((e.includes("chrome/")||vf(e))&&!e.includes("edge/"))return"Chrome";if(Ef(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yf(t=Ne()){return/firefox\//i.test(t)}function sc(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vf(t=Ne()){return/crios\//i.test(t)}function wf(t=Ne()){return/iemobile/i.test(t)}function Ef(t=Ne()){return/android/i.test(t)}function _f(t=Ne()){return/blackberry/i.test(t)}function bf(t=Ne()){return/webos/i.test(t)}function Vs(t=Ne()){return/iphone|ipad|ipod/i.test(t)}function H0(t=Ne()){var e;return Vs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function K0(){return Jh()&&document.documentMode===10}function Tf(t=Ne()){return Vs(t)||Ef(t)||bf(t)||_f(t)||/windows phone/i.test(t)||wf(t)}function W0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function If(t,e=[]){let n;switch(t){case"Browser":n=gf(Ne());break;case"Worker":n=`${gf(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
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
 */class G0{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Us(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=If(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function oc(t){return Xe(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=xw(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Sf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}/**
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
 */async function ur(t,e){return P0(t,"POST","/v1/accounts:signInWithIdp",x0(t,e))}/**
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
 */const Y0="http://localhost";class kn extends Sf{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ja(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ur(e,n)}buildRequest(){const e={requestUri:Y0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ei(n)}return e}}/**
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
 */class ac{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends ac{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends ai{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class tn extends ai{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return kn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
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
 */class nn extends ai{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
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
 */class rn extends ai{constructor(){super("twitter.com")}static credential(e,n){return kn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=Cf(r);return new hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Cf(r);return new hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Cf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $s extends ar{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,$s.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $s(e,n,r,i)}}function kf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$s._fromErrorAndOperation(t,s,e,r):s})}async function X0(t,e,n=!1){const r=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",r)}/**
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
 */async function Q0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await si(t,kf(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=ic(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
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
 */async function J0(t,e,n=!1){const r="signIn",i=await kf(t,r,e),s=await hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function SS(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function CS(t){return Xe(t).signOut()}const js="__sak";/**
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
 */class Rf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(js,"1"),this.storage.removeItem(js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Z0(){const t=Ne();return sc(t)||Vs(t)}const eE=1e3,tE=10;class Nf extends Rf{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Z0()&&W0(),this.fallbackToPolling=Tf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);K0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nf.type="LOCAL";const nE=Nf;/**
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
 */class Of extends Rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Of.type="SESSION";const xf=Of;/**
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
 */function rE(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await rE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
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
 */function cc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=cc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function sE(t){kt().location.href=t}/**
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
 */function Pf(){return typeof kt().WorkerGlobalScope!="undefined"&&typeof kt().importScripts=="function"}async function oE(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cE(){return Pf()?self:null}/**
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
 */const Df="firebaseLocalStorageDb",lE=1,zs="firebaseLocalStorage",Mf="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qs(t,e){return t.transaction([zs],e?"readwrite":"readonly").objectStore(zs)}function uE(){const t=indexedDB.deleteDatabase(Df);return new ci(t).toPromise()}function lc(){const t=indexedDB.open(Df,lE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zs,{keyPath:Mf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zs)?e(r):(r.close(),await uE(),e(await lc()))})})}async function Lf(t,e,n){const r=qs(t,!0).put({[Mf]:e,value:n});return new ci(r).toPromise()}async function hE(t,e){const n=qs(t,!1).get(e),r=await new ci(n).toPromise();return r===void 0?null:r.value}function Uf(t,e){const n=qs(t,!0).delete(e);return new ci(n).toPromise()}const fE=800,dE=3;class Ff{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(cE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oE(),!this.activeServiceWorker)return;this.sender=new iE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lc();return await Lf(e,js,"1"),await Uf(e,js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qs(i,!1).getAll();return new ci(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ff.type="LOCAL";const pE=Ff;/**
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
 */function mE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mE().appendChild(r)})}function yE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ri(3e4,6e4);/**
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
 */function Vf(t,e){return e?$t(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uc extends Sf{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vE(t){return J0(t.auth,new uc(t),t.bypassAuthState)}function wE(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Q0(n,new uc(t),t.bypassAuthState)}async function EE(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),X0(n,new uc(t),t.bypassAuthState)}/**
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
 */class $f{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vE;case"linkViaPopup":case"linkViaRedirect":return EE;case"reauthViaPopup":case"reauthViaRedirect":return wE;default:St(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _E=new ri(2e3,1e4);class fr extends $f{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,_E.get())};e()}}fr.currentPopupAction=null;/**
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
 */const bE="pendingRedirect",hc=new Map;class TE extends $f{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const r=await IE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IE(t,e){const n=Bf(e),r=jf(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function AE(t,e){return jf(t)._set(Bf(e),"true")}function jf(t){return $t(t._redirectPersistence)}function Bf(t){return Fs(bE,t.config.apiKey,t.name)}/**
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
 */function kS(t,e,n){return SE(t,e,n)}async function SE(t,e,n){const r=oc(t);I0(t,e,ac);const i=Vf(r,n);return await AE(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function CE(t,e,n=!1){const r=oc(t),i=Vf(r,e),o=await new TE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kE=10*60*1e3;class RE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kE&&this.cachedEventUids.clear(),this.cachedEventUids.has(zf(e))}saveEventToCache(e){this.cachedEventUids.add(zf(e)),this.lastProcessedEventTime=Date.now()}}function zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qf(t);default:return!1}}/**
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
 */async function OE(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
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
 */const xE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PE=/^https?/;async function DE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OE(t);for(const n of e)try{if(ME(n))return}catch{}St(t,"unauthorized-domain")}function ME(t){const e=ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PE.test(n))return!1;if(xE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LE=new ri(3e4,6e4);function Hf(){const t=kt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UE(t){return new Promise((e,n)=>{var r,i,s;function o(){Hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hf(),n(Ct(t,"network-request-failed"))},timeout:LE.get()})}if((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=kt().gapi)===null||s===void 0?void 0:s.load)o();else{const a=yE("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},gE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Hs=null,e})}let Hs=null;function FE(t){return Hs=Hs||UE(t),Hs}/**
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
 */const VE=new ri(5e3,15e3),$E="__/auth/iframe",jE="emulator/auth/iframe",BE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qE(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tc(e,jE):`https://${t.config.authDomain}/${$E}`,r={apiKey:e.apiKey,appName:t.name,v:ni},i=zE.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ei(r).slice(1)}`}async function HE(t){const e=await FE(t),n=kt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:qE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=kt().setTimeout(()=>{s(o)},VE.get());function c(){kt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const KE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WE=500,GE=600,YE="_blank",XE="http://localhost";class Kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QE(t,e,n,r=WE,i=GE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},KE),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ne().toLowerCase();n&&(a=vf(l)?YE:n),yf(l)&&(e=e||XE,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(H0(l)&&a!=="_self")return JE(e||"",a),new Kf(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new Kf(h)}function JE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZE="__/auth/handler",e_="emulator/auth/handler";function Wf(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(e instanceof ac){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ow(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof ai){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${t_(t)}?${ei(a).slice(1)}`}function t_({config:t}){return t.emulator?tc(t,e_):`https://${t.authDomain}/${ZE}`}/**
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
 */const fc="webStorageSupport";class n_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xf,this._completeRedirectFn=CE}async _openPopup(e,n,r,i){var s;Vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Wf(e,n,r,ec(),i);return QE(e,o,cc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),sE(Wf(e,n,r,ec(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HE(e),r=new RE(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fc,{type:fc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fc];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tf()||sc()||Vs()}}const r_=n_;var Gf="@firebase/auth",Yf="0.19.4";/**
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
 */class i_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function s_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function o_(t){ti(new cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{Y(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),Y(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:If(t)},c=new G0(o,a);return S0(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new cr("auth-internal",e=>{const n=oc(e.getProvider("auth").getImmediate());return(r=>new i_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Gf,Yf,s_(t)),Jt(Gf,Yf,"esm2017")}/**
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
 */function RS(t=nf()){const e=Qa(t,"auth");return e.isInitialized()?e.getImmediate():A0(t,{popupRedirectResolver:r_,persistence:[pE,nE,xf]})}o_("Browser");var a_=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},P,dc=dc||{},H=a_||self;function Ks(){}function pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function li(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function c_(t){return Object.prototype.hasOwnProperty.call(t,mc)&&t[mc]||(t[mc]=++l_)}var mc="closure_uid_"+(1e9*Math.random()>>>0),l_=0;function u_(t,e,n){return t.call.apply(t.bind,arguments)}function h_(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=u_:Me=h_,Me.apply(null,arguments)}function Ws(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function sn(){this.s=this.s,this.o=this.o}var f_=0,d_={};sn.prototype.s=!1;sn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),f_!=0)){var t=c_(this);delete d_[t]}};sn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Qf=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function p_(t){e:{var e=sb;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Jf(t){return Array.prototype.concat.apply([],arguments)}function gc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gs(t){return/^[\s\xa0]*$/.test(t)}var Zf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Qe(t,e){return t.indexOf(e)!=-1}function yc(t,e){return t<e?-1:t>e?1:0}var Je;e:{var ed=H.navigator;if(ed){var td=ed.userAgent;if(td){Je=td;break e}}Je=""}function vc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nd(t){const e={};for(const n in t)e[n]=t[n];return e}var rd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function id(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<rd.length;s++)n=rd[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wc(t){return wc[" "](t),t}wc[" "]=Ks;function m_(t){var e=v_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var g_=Qe(Je,"Opera"),dr=Qe(Je,"Trident")||Qe(Je,"MSIE"),sd=Qe(Je,"Edge"),Ec=sd||dr,od=Qe(Je,"Gecko")&&!(Qe(Je.toLowerCase(),"webkit")&&!Qe(Je,"Edge"))&&!(Qe(Je,"Trident")||Qe(Je,"MSIE"))&&!Qe(Je,"Edge"),y_=Qe(Je.toLowerCase(),"webkit")&&!Qe(Je,"Edge");function ad(){var t=H.document;return t?t.documentMode:void 0}var Ys;e:{var _c="",bc=function(){var t=Je;if(od)return/rv:([^\);]+)(\)|;)/.exec(t);if(sd)return/Edge\/([\d\.]+)/.exec(t);if(dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(y_)return/WebKit\/(\S+)/.exec(t);if(g_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bc&&(_c=bc?bc[1]:""),dr){var Tc=ad();if(Tc!=null&&Tc>parseFloat(_c)){Ys=String(Tc);break e}}Ys=_c}var v_={};function w_(){return m_(function(){let t=0;const e=Zf(String(Ys)).split("."),n=Zf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=yc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||yc(i[2].length==0,s[2].length==0)||yc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ic;if(H.document&&dr){var cd=ad();Ic=cd||parseInt(Ys,10)||void 0}else Ic=void 0;var E_=Ic,__=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Ks,e),H.removeEventListener("test",Ks,e)}catch{}return t}();function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};function ui(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(od){e:{try{wc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:b_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ui.Z.h.call(this)}}Le(ui,Be);var b_={2:"touch",3:"pen",4:"mouse"};ui.prototype.h=function(){ui.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hi="closure_listenable_"+(1e6*Math.random()|0),T_=0;function I_(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++T_,this.ca=this.fa=!1}function Xs(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Qs(t){this.src=t,this.g={},this.h=0}Qs.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Sc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new I_(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Ac(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Xf(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Cc="closure_lm_"+(1e6*Math.random()|0),kc={};function ld(t,e,n,r,i){if(r&&r.once)return hd(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ld(t,e[s],n,r,i);return null}return n=xc(n),t&&t[hi]?t.N(e,n,li(r)?!!r.capture:!!r,i):ud(t,e,n,!1,r,i)}function ud(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=li(i)?!!i.capture:!!i,a=Nc(t);if(a||(t[Cc]=a=new Qs(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=A_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)__||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(dd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function A_(){function t(n){return e.call(t.src,t.listener,n)}var e=S_;return t}function hd(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)hd(t,e[s],n,r,i);return null}return n=xc(n),t&&t[hi]?t.O(e,n,li(r)?!!r.capture:!!r,i):ud(t,e,n,!0,r,i)}function fd(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)fd(t,e[s],n,r,i);else r=li(r)?!!r.capture:!!r,n=xc(n),t&&t[hi]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Sc(s,n,r,i),-1<n&&(Xs(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sc(e,n,r,i)),(n=-1<t?e[t]:null)&&Rc(n))}function Rc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[hi])Ac(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(dd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Nc(e))?(Ac(n,t),n.h==0&&(n.src=null,e[Cc]=null)):Xs(t)}}}function dd(t){return t in kc?kc[t]:kc[t]="on"+t}function S_(t,e){if(t.ca)t=!0;else{e=new ui(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Rc(t),t=n.call(r,e)}return t}function Nc(t){return t=t[Cc],t instanceof Qs?t:null}var Oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(t){return typeof t=="function"?t:(t[Oc]||(t[Oc]=function(e){return t.handleEvent(e)}),t[Oc])}function Oe(){sn.call(this),this.i=new Qs(this),this.P=this,this.I=null}Le(Oe,sn);Oe.prototype[hi]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){fd(this,t,e,n,r)};function Ue(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),id(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Js(o,r,!0,e)&&i}if(o=e.g=t,i=Js(o,r,!0,e)&&i,i=Js(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Js(o,r,!1,e)&&i}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xs(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Js(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ac(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Pc=H.JSON.stringify;function C_(){var t=md;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class k_{constructor(){this.h=this.g=null}add(e,n){const r=pd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new R_,t=>t.reset());class R_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function N_(t){H.setTimeout(()=>{throw t},0)}function Dc(t,e){Mc||O_(),Lc||(Mc(),Lc=!0),md.add(t,e)}var Mc;function O_(){var t=H.Promise.resolve(void 0);Mc=function(){t.then(x_)}}var Lc=!1,md=new k_;function x_(){for(var t;t=C_();){try{t.h.call(t.g)}catch(n){N_(n)}var e=pd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lc=!1}function Zs(t,e){Oe.call(this),this.h=t||1,this.g=e||H,this.j=Me(this.kb,this),this.l=Date.now()}Le(Zs,Oe);P=Zs.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ue(this,"tick"),this.da&&(Uc(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){Zs.Z.M.call(this),Uc(this),delete this.g};function Fc(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function gd(t){t.g=Fc(()=>{t.g=null,t.i&&(t.i=!1,gd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class P_ extends sn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gd(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(t){sn.call(this),this.h=t,this.g={}}Le(fi,sn);var yd=[];function vd(t,e,n,r){Array.isArray(n)||(n&&(yd[0]=n.toString()),n=yd);for(var i=0;i<n.length;i++){var s=ld(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function wd(t){vc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rc(e)},t),t.g={}}fi.prototype.M=function(){fi.Z.M.call(this),wd(this)};fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function eo(){this.g=!0}eo.prototype.Aa=function(){this.g=!1};function D_(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function M_(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function pr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+U_(t,n)+(r?" "+r:"")})}function L_(t,e){t.info(function(){return"TIMEOUT: "+e})}eo.prototype.info=function(){};function U_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pc(n)}catch{return e}}var Rn={},Ed=null;function to(){return Ed=Ed||new Oe}Rn.Ma="serverreachability";function _d(t){Be.call(this,Rn.Ma,t)}Le(_d,Be);function di(t){const e=to();Ue(e,new _d(e,t))}Rn.STAT_EVENT="statevent";function bd(t,e){Be.call(this,Rn.STAT_EVENT,t),this.stat=e}Le(bd,Be);function Ze(t){const e=to();Ue(e,new bd(e,t))}Rn.Na="timingevent";function Td(t,e){Be.call(this,Rn.Na,t),this.size=e}Le(Td,Be);function pi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var no={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Id={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vc(){}Vc.prototype.h=null;function Ad(t){return t.h||(t.h=t.i())}function Sd(){}var mi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function $c(){Be.call(this,"d")}Le($c,Be);function jc(){Be.call(this,"c")}Le(jc,Be);var Bc;function ro(){}Le(ro,Vc);ro.prototype.g=function(){return new XMLHttpRequest};ro.prototype.i=function(){return{}};Bc=new ro;function gi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new fi(this),this.P=F_,t=Ec?125:void 0,this.W=new Zs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Cd}function Cd(){this.i=null,this.g="",this.h=!1}var F_=45e3,zc={},io={};P=gi.prototype;P.setTimeout=function(t){this.P=t};function qc(t,e,n){t.K=1,t.v=lo(jt(e)),t.s=n,t.U=!0,kd(t,null)}function kd(t,e){t.F=Date.now(),yi(t),t.A=jt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ud(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Cd,t.g=op(t.l,n?e:null,!t.s),0<t.O&&(t.L=new P_(Me(t.Ia,t,t.g),t.O)),vd(t.V,t.g,"readystatechange",t.gb),e=t.H?nd(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),di(1),D_(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const u=Bt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Ec||this.g&&(this.h.h||this.g.ga()||Yd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?di(3):di(2)),so(this);var n=this.g.ba();this.N=n;t:if(Rd(this)){var r=Yd(this.g);t="";var i=r.length,s=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Nn(this),vi(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,M_(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gs(a)){var l=a;break t}}l=null}if(n=l)pr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hc(this,n);else{this.i=!1,this.o=3,Ze(12),Nn(this),vi(this);break e}}this.U?(Nd(this,u,o),Ec&&this.i&&u==3&&(vd(this.V,this.W,"tick",this.fb),this.W.start())):(pr(this.j,this.m,o,null),Hc(this,o)),u==4&&Nn(this),this.i&&!this.I&&(u==4?np(this.l,this):(this.i=!1,yi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Nn(this),vi(this)}}}catch{}finally{}};function Rd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Nd(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=V_(t,n),i==io){e==4&&(t.o=4,Ze(14),r=!1),pr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zc){t.o=4,Ze(15),pr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else pr(t.j,t.m,i,null),Hc(t,i);Rd(t)&&i!=io&&i!=zc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),nl(e),e.L=!0,Ze(11))):(pr(t.j,t.m,n,"[Invalid Chunked Response]"),Nn(t),vi(t))}P.fb=function(){if(this.g){var t=Bt(this.g),e=this.g.ga();this.C<e.length&&(so(this),Nd(this,t,e),this.i&&t!=4&&yi(this))}};function V_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?io:(n=Number(e.substring(n,r)),isNaN(n)?zc:(r+=1,r+n>e.length?io:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,Nn(this)};function yi(t){t.Y=Date.now()+t.P,Od(t,t.P)}function Od(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pi(Me(t.eb,t),e)}function so(t){t.B&&(H.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(L_(this.j,this.A),this.K!=2&&(di(3),Ze(17)),Nn(this),this.o=2,vi(this)):Od(this,this.Y-t)};function vi(t){t.l.G==0||t.I||np(t.l,t)}function Nn(t){so(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uc(t.W),wd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Gc(n.i,t))){if(n.I=t.N,!t.J&&Gc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)go(n),po(n);else break e;tl(n),Ze(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=pi(Me(n.ab,n),6e3));if(1>=$d(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pn(n,11)}else if((t.J||n.g==t)&&go(n),!Gs(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(Qe(g,"spdy")||Qe(g,"quic")||Qe(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Yc(s,s.h),s.h=null))}if(r.D){const S=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.sa=S,Ee(r.F,r.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=sp(r,r.H?r.la:null,r.W),o.J){jd(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(so(a),yi(a)),r.g=o}else ep(r);0<n.l.length&&mo(n)}else l[0]!="stop"&&l[0]!="close"||Pn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Pn(n,7):Zc(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}di(4)}catch{}}function $_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(pc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Kc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pc(t)||typeof t=="string")Qf(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(pc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=$_(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function mr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof mr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}P=mr.prototype;P.R=function(){Wc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return Wc(this),this.g.concat()};function Wc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];On(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],On(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}P.get=function(t,e){return On(this.h,t)?this.h[t]:e};P.set=function(t,e){On(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function On(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var xd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function j_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof xn){this.g=e!==void 0?e:t.g,oo(this,t.j),this.s=t.s,ao(this,t.i),co(this,t.m),this.l=t.l,e=t.h;var n=new _i;n.i=e.i,e.g&&(n.g=new mr(e.g),n.h=e.h),Pd(this,n),this.o=t.o}else t&&(n=String(t).match(xd))?(this.g=!!e,oo(this,n[1]||"",!0),this.s=wi(n[2]||""),ao(this,n[3]||"",!0),co(this,n[4]),this.l=wi(n[5]||"",!0),Pd(this,n[6]||"",!0),this.o=wi(n[7]||"")):(this.g=!!e,this.h=new _i(null,this.g))}xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ei(e,Dd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ei(e,Dd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ei(n,n.charAt(0)=="/"?K_:H_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ei(n,G_)),t.join("")};function jt(t){return new xn(t)}function oo(t,e,n){t.j=n?wi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ao(t,e,n){t.i=n?wi(e,!0):e}function co(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pd(t,e,n){e instanceof _i?(t.h=e,Y_(t.h,t.g)):(n||(e=Ei(e,W_)),t.h=new _i(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function lo(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function B_(t){return t instanceof xn?jt(t):new xn(t,void 0)}function z_(t,e,n,r){var i=new xn(null,void 0);return t&&oo(i,t),e&&ao(i,e),n&&co(i,n),r&&(i.l=r),i}function wi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ei(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,q_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function q_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Dd=/[#\/\?@]/g,H_=/[#\?:]/g,K_=/[#\?]/g,W_=/[#\?@]/g,G_=/#/g;function _i(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function on(t){t.g||(t.g=new mr,t.h=0,t.i&&j_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=_i.prototype;P.add=function(t,e){on(this),this.i=null,t=gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Md(t,e){on(t),e=gr(t,e),On(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,On(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Wc(t)))}function Ld(t,e){return on(t),e=gr(t,e),On(t.g.h,e)}P.forEach=function(t,e){on(this),this.g.forEach(function(n,r){Qf(n,function(i){t.call(e,i,r,this)},this)},this)};P.T=function(){on(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};P.R=function(t){on(this);var e=[];if(typeof t=="string")Ld(this,t)&&(e=Jf(e,this.g.get(gr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Jf(e,t[n])}return e};P.set=function(t,e){return on(this),this.i=null,t=gr(this,t),Ld(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Ud(t,e,n){Md(t,e),0<n.length&&(t.i=null,t.g.set(gr(t,e),gc(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Y_(t,e){e&&!t.j&&(on(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Md(this,r),Ud(this,i,n))},t)),t.j=e}var X_=class{constructor(t,e){this.h=t,this.g=e}};function Fd(t){this.l=t||Q_,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Q_=10;function Vd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $d(t){return t.h?1:t.g?t.g.size:0}function Gc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yc(t,e){t.g?t.g.add(e):t.h=e}function jd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fd.prototype.cancel=function(){if(this.i=Bd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gc(t.i)}function Xc(){}Xc.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Xc.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function J_(){this.g=new Xc}function Z_(t,e,n){const r=n||"";try{Kc(t,function(i,s){let o=i;li(i)&&(o=Pc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function eb(t,e){const n=new eo;if(H.Image){const r=new Image;r.onload=Ws(uo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ws(uo,n,r,"TestLoadImage: error",!1,e),r.onabort=Ws(uo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ws(uo,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function uo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function bi(t){this.l=t.$b||null,this.j=t.ib||!1}Le(bi,Vc);bi.prototype.g=function(){return new ho(this.l,this.j)};bi.prototype.i=function(t){return function(){return t}}({});function ho(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Qc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(ho,Oe);var Qc=0;P=ho.prototype;P.open=function(t,e){if(this.readyState!=Qc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ii(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=Qc};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ii(this)),this.g&&(this.readyState=3,Ii(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zd(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function zd(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ti(this):Ii(this),this.readyState==3&&zd(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,Ti(this))};P.Ta=function(t){this.g&&(this.response=t,Ti(this))};P.ha=function(){this.g&&Ti(this)};function Ti(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ii(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ii(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var tb=H.JSON.parse;function Ae(t){Oe.call(this),this.headers=new mr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qd,this.K=this.L=!1}Le(Ae,Oe);var qd="",nb=/^https?$/i,rb=["POST","PUT"];P=Ae.prototype;P.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bc.g(),this.C=this.u?Ad(this.u):Ad(Bc),this.g.onreadystatechange=Me(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Hd(this,s);return}t=n||"";const i=new mr(this.headers);r&&Kc(r,function(s,o){i.set(o,s)}),r=p_(i.T()),n=H.FormData&&t instanceof H.FormData,!(0<=Xf(rb,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gd(this),0<this.B&&((this.K=ib(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.pa,this)):this.A=Fc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Hd(this,s)}};function ib(t){return dr&&w_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function sb(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof dc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function Hd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kd(t),fo(t)}function Kd(t){t.D||(t.D=!0,Ue(t,"complete"),Ue(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),fo(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fo(this,!0)),Ae.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?Wd(this):this.cb())};P.cb=function(){Wd(this)};function Wd(t){if(t.h&&typeof dc!="undefined"&&(!t.C[1]||Bt(t)!=4||t.ba()!=2)){if(t.v&&Bt(t)==4)Fc(t.Fa,0,t);else if(Ue(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(xd)[1]||null;if(!i&&H.self&&H.self.location){var s=H.self.location.protocol;i=s.substr(0,s.length-1)}r=!nb.test(i?i.toLowerCase():"")}n=r}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Kd(t)}}finally{fo(t)}}}}function fo(t,e){if(t.g){Gd(t);const n=t.g,r=t.C[0]?Ks:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=r}catch{}}}function Gd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),tb(e)}};function Yd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function ob(t){let e="";return vc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Jc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ob(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Ai(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xd(t){this.za=0,this.l=[],this.h=new eo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ai("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ai("baseRetryDelayMs",5e3,t),this.$a=Ai("retryDelaySeedMs",1e4,t),this.Ya=Ai("forwardChannelMaxRetries",2,t),this.ra=Ai("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Fd(t&&t.concurrentRequestLimit),this.Ca=new J_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=Xd.prototype;P.ma=8;P.G=1;function Zc(t){if(Qd(t),t.G==3){var e=t.V++,n=jt(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Si(t,n),e=new gi(t,t.h,e,void 0),e.K=2,e.v=lo(jt(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=op(e.l,null),e.g.ea(e.v)),e.F=Date.now(),yi(e)}ip(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function po(t){t.g&&(nl(t),t.g.cancel(),t.g=null)}function Qd(t){po(t),t.u&&(H.clearTimeout(t.u),t.u=null),go(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function el(t,e){t.l.push(new X_(t.Za++,e)),t.G==3&&mo(t)}function mo(t){Vd(t.i)||t.m||(t.m=!0,Dc(t.Ha,t),t.C=0)}function ab(t,e){return $d(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=pi(Me(t.Ha,t,e),rp(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new gi(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=nd(s),id(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zd(this,i,e),n=jt(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),Si(this,n),this.o&&s&&Jc(n,this.o,s),Yc(this.i,i),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),i.$=!0,qc(i,n,null)):qc(i,n,e),this.G=2}}else this.G==3&&(t?Jd(this,t):this.l.length==0||Vd(this.i)||Jd(this))};function Jd(t,e){var n;e?n=e.m:n=t.V++;const r=jt(t.F);Ee(r,"SID",t.J),Ee(r,"RID",n),Ee(r,"AID",t.U),Si(t,r),t.o&&t.s&&Jc(r,t.o,t.s),n=new gi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Zd(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Yc(t.i,n),qc(n,r,e)}function Si(t,e){t.j&&Kc({},function(n,r){Ee(e,r,n)})}function Zd(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Me(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{Z_(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function ep(t){t.g||t.u||(t.Y=1,Dc(t.Ga,t),t.A=0)}function tl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=pi(Me(t.Ga,t),rp(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,tp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pi(Me(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),po(this),tp(this))};function nl(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function tp(t){t.g=new gi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=jt(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),Si(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&Jc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=lo(jt(e)),n.s=null,n.U=!0,kd(n,t)}P.ab=function(){this.v!=null&&(this.v=null,po(this),tl(this),Ze(19))};function go(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function np(t,e){var n=null;if(t.g==e){go(t),nl(t),t.g=null;var r=2}else if(Gc(t.i,e))n=e.D,jd(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=to(),Ue(r,new Td(r,n,e,i)),mo(t)}else ep(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&ab(t,e)||r==2&&tl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Pn(t,5);break;case 4:Pn(t,10);break;case 3:Pn(t,6);break;default:Pn(t,2)}}}function rp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Pn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Me(t.jb,t);n||(n=new xn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||oo(n,"https"),lo(n)),eb(n.toString(),r)}else Ze(2);t.G=0,t.j&&t.j.va(e),ip(t),Qd(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function ip(t){t.G=0,t.I=-1,t.j&&((Bd(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,gc(t.l),t.l.length=0),t.j.ua())}function sp(t,e,n){let r=B_(n);if(r.i!="")e&&ao(r,e+"."+r.i),co(r,r.m);else{const i=H.location;r=z_(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&vc(t.aa,function(i,s){Ee(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ee(r,e,n),Ee(r,"VER",t.ma),Si(t,r),r}function op(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ae(new bi({ib:!0})):new Ae(t.qa),e.L=t.H,e}function ap(){}P=ap.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function yo(){if(dr&&!(10<=Number(E_)))throw Error("Environmental error: no available transport.")}yo.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Oe.call(this),this.g=new Xd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Gs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yr(this)}Le(ut,Oe);ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Dc(Me(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=sp(t,null,t.W),mo(t)};ut.prototype.close=function(){Zc(this.g)};ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,el(this.g,e)}else this.v?(e={},e.__data__=Pc(t),el(this.g,e)):el(this.g,t)};ut.prototype.M=function(){this.g.j=null,delete this.j,Zc(this.g),delete this.g,ut.Z.M.call(this)};function cp(t){$c.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(cp,$c);function lp(){jc.call(this),this.status=1}Le(lp,jc);function yr(t){this.g=t}Le(yr,ap);yr.prototype.xa=function(){Ue(this.g,"a")};yr.prototype.wa=function(t){Ue(this.g,new cp(t))};yr.prototype.va=function(t){Ue(this.g,new lp(t))};yr.prototype.ua=function(){Ue(this.g,"b")};yo.prototype.createWebChannel=yo.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;no.NO_ERROR=0;no.TIMEOUT=8;no.HTTP_ERROR=6;Id.COMPLETE="complete";Sd.EventType=mi;mi.OPEN="a";mi.CLOSE="b";mi.ERROR="c";mi.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.La;Ae.prototype.getLastErrorCode=Ae.prototype.Da;Ae.prototype.getStatus=Ae.prototype.ba;Ae.prototype.getResponseJson=Ae.prototype.Qa;Ae.prototype.getResponseText=Ae.prototype.ga;Ae.prototype.send=Ae.prototype.ea;var cb=function(){return new yo},lb=function(){return to()},rl=no,ub=Id,hb=Rn,up={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fb=bi,vo=Sd,db=Ae;const hp="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let vr="9.6.1";/**
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
 */const Dn=new Wa("@firebase/firestore");function fp(){return Dn.logLevel}function F(t,...e){if(Dn.logLevel<=se.DEBUG){const n=e.map(il);Dn.debug(`Firestore (${vr}): ${t}`,...n)}}function an(t,...e){if(Dn.logLevel<=se.ERROR){const n=e.map(il);Dn.error(`Firestore (${vr}): ${t}`,...n)}}function dp(t,...e){if(Dn.logLevel<=se.WARN){const n=e.map(il);Dn.warn(`Firestore (${vr}): ${t}`,...n)}}function il(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function oe(t,e){t||K()}function G(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class pb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class gb{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new pb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new nt(e)}}class yb{constructor(e,n,r){this.type="FirstParty",this.user=nt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class vb{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new yb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eb{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),new wb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function _b(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */sl.I=-1;class pp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_b(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function wr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new ht(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function mp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ci{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Ci{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const bb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Ci{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return bb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class ki{constructor(e){this.fields=e,e.sort(rt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ze(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ze(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const Tb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cn(t){if(oe(!!t),typeof t=="string"){let e=0;const n=Tb.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
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
 */function yp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vp(t){const e=t.mapValue.fields.__previous_value__;return yp(e)?vp(e):e}function Ri(t){const e=cn(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
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
 */function Ln(t){return t==null}function wo(t){return t===0&&1/t==-1/0}function Ib(t){return typeof t=="number"&&Number.isInteger(t)&&!wo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yp(t)?4:10:K()}function Rt(t,e){const n=Un(t);if(n!==Un(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=cn(r.timestampValue),o=cn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Er(r.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Se(r.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(r.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Se(r.integerValue)===Se(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Se(r.doubleValue),o=Se(i.doubleValue);return s===o?wo(s)===wo(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return wr(t.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(mp(s)!==mp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rt(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Ni(t,e){return(t.values||[]).find(n=>Rt(n,e))!==void 0}function _r(t,e){const n=Un(t),r=Un(e);if(n!==r)return le(n,r);switch(n){case 0:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Se(i.integerValue||i.doubleValue),a=Se(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return wp(t.timestampValue,e.timestampValue);case 4:return wp(Ri(t),Ri(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Er(i),a=Er(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=le(Se(i.latitude),Se(s.latitude));return o!==0?o:le(Se(i.longitude),Se(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=_r(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const f=_r(o[a[u]],c[l[u]]);if(f!==0)return f}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function wp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=cn(t),r=cn(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function ol(t){return al(t)}function al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=cn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Er(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=al(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${al(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function cl(t){return!!t&&"integerValue"in t}function ll(t){return!!t&&"arrayValue"in t}function Ep(t){return!!t&&"nullValue"in t}function _p(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eo(t){return!!t&&"mapValue"in t}function Oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(n)}setAll(e){let n=rt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Oi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Eo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Eo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Mn(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new it(Oi(this.value))}}function bp(t){const e=[];return Mn(t.fields,(n,r)=>{const i=new rt([n]);if(Eo(r)){const s=bp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ki(e)}/**
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
 */class xe{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new xe(e,0,re.min(),it.empty(),0)}static newFoundDocument(e,n,r){return new xe(e,1,n,r,0)}static newNoDocument(e,n){return new xe(e,2,n,it.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,it.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new xe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ab{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function Tp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ab(t,e,n,r,i,s,o)}function ul(t){const e=G(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cb(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ln(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=_o(e.startAt)),e.endAt&&(n+="|ub:",n+=_o(e.endAt)),e.R=n}return e.R}function Sb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ol(r.value)}`;var r}).join(", ")}]`),Ln(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+_o(t.startAt)),t.endAt&&(e+=", endAt: "+_o(t.endAt)),`Target(${e})`}function hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Mb(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Rt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sp(t.startAt,e.startAt)&&Sp(t.endAt,e.endAt)}function fl(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class st extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new kb(e,n,r):n==="array-contains"?new Ob(e,r):n==="in"?new xb(e,r):n==="not-in"?new Pb(e,r):n==="array-contains-any"?new Db(e,r):new st(e,n,r)}static P(e,n,r){return n==="in"?new Rb(e,r):new Nb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(_r(n,this.value)):n!==null&&Un(this.value)===Un(n)&&this.v(_r(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Cb(t){return t.field.canonicalString()+t.op.toString()+ol(t.value)}class kb extends st{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.v(n)}}class Rb extends st{constructor(e,n){super(e,"in",n),this.keys=Ip("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nb extends st{constructor(e,n){super(e,"not-in",n),this.keys=Ip("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ip(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class Ob extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ll(n)&&Ni(n.arrayValue,this.value)}}class xb extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class Pb extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class Db extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ll(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}class dl{constructor(e,n){this.position=e,this.before=n}}function _o(t){return`${t.before?"b":"a"}:${t.position.map(e=>ol(e)).join(",")}`}class xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ap(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=_r(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function Sp(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function Lb(t,e,n,r,i,s,o,a){return new bo(t,e,n,r,i,s,o,a)}function pl(t){return new bo(t)}function To(t){return!Ln(t.limit)&&t.limitType==="F"}function ml(t){return!Ln(t.limit)&&t.limitType==="L"}function Ub(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fb(t){for(const e of t.filters)if(e.V())return e.field;return null}function Vb(t){return t.collectionGroup!==null}function Pi(t){const e=G(t);if(e.S===null){e.S=[];const n=Fb(e),r=Ub(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new xi(n)),e.S.push(new xi(rt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new xi(rt.keyField(),s))}}}return e.S}function Fn(t){const e=G(t);if(!e.D)if(e.limitType==="F")e.D=Tp(e.path,e.collectionGroup,Pi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Pi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new xi(s.field,o))}const r=e.endAt?new dl(e.endAt.position,!e.endAt.before):null,i=e.startAt?new dl(e.startAt.position,!e.startAt.before):null;e.D=Tp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function $b(t,e,n){return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Io(t,e){return hl(Fn(t),Fn(e))&&t.limitType===e.limitType}function Cp(t){return`${ul(Fn(t))}|lt:${t.limitType}`}function gl(t){return`Query(target=${Sb(Fn(t))}; limitType=${t.limitType})`}function Ao(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!Ap(n.startAt,Pi(n),r)||n.endAt&&Ap(n.endAt,Pi(n),r))}(t,e)}function kp(t){return(e,n)=>{let r=!1;for(const i of Pi(t)){const s=jb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jb(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?_r(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */function Rp(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wo(e)?"-0":e}}function Np(t){return{integerValue:""+t}}function Bb(t,e){return Ib(e)?Np(e):Rp(t,e)}/**
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
 */class So{constructor(){this._=void 0}}function zb(t,e,n){return t instanceof Co?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Di?xp(t,e):t instanceof Mi?Pp(t,e):function(r,i){const s=Op(r,i),o=Dp(s)+Dp(r.N);return cl(s)&&cl(r.N)?Np(o):Rp(r.k,o)}(t,e)}function qb(t,e,n){return t instanceof Di?xp(t,e):t instanceof Mi?Pp(t,e):n}function Op(t,e){return t instanceof ko?cl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Co extends So{}class Di extends So{constructor(e){super(),this.elements=e}}function xp(t,e){const n=Mp(e);for(const r of t.elements)n.some(i=>Rt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Mi extends So{constructor(e){super(),this.elements=e}}function Pp(t,e){let n=Mp(e);for(const r of t.elements)n=n.filter(i=>!Rt(i,r));return{arrayValue:{values:n}}}class ko extends So{constructor(e,n){super(),this.k=e,this.N=n}}function Dp(t){return Se(t.integerValue||t.doubleValue)}function Mp(t){return ll(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Hb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Di&&r instanceof Di||n instanceof Mi&&r instanceof Mi?wr(n.elements,r.elements,Rt):n instanceof ko&&r instanceof ko?Rt(n.N,r.N):n instanceof Co&&r instanceof Co}(t.transform,e.transform)}class Kb{constructor(e,n){this.version=e,this.transformResults=n}}class vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class No{}function Wb(t,e,n){t instanceof Oo?function(r,i,s){const o=r.value.clone(),a=Vp(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vn?function(r,i,s){if(!Ro(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Vp(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Fp(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function yl(t,e,n){t instanceof Oo?function(r,i,s){if(!Ro(r.precondition,i))return;const o=r.value.clone(),a=$p(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(Up(i),o).setHasLocalMutations()}(t,e,n):t instanceof Vn?function(r,i,s){if(!Ro(r.precondition,i))return;const o=$p(r.fieldTransforms,s,i),a=i.data;a.setAll(Fp(r)),a.setAll(o),i.convertToFoundDocument(Up(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Ro(r.precondition,i)&&i.convertToNoDocument(re.min())}(t,e)}function Gb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Op(r.transform,i||null);s!=null&&(n==null&&(n=it.empty()),n.set(r.field,s))}return n||null}function Lp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&wr(n,r,(i,s)=>Hb(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Up(t){return t.isFoundDocument()?t.version:re.min()}class Oo extends No{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Vn extends No{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Fp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vp(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qb(o,a,n[i]))}return r}function $p(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,zb(s,o,e))}return r}class jp extends No{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Bp extends No{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Yb{constructor(e){this.count=e}}/**
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
 */var Ce,Z;function zp(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function qp(t){if(t===void 0)return an("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ce.OK:return I.OK;case Ce.CANCELLED:return I.CANCELLED;case Ce.UNKNOWN:return I.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return I.INTERNAL;case Ce.UNAVAILABLE:return I.UNAVAILABLE;case Ce.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ce.NOT_FOUND:return I.NOT_FOUND;case Ce.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ce.ABORTED:return I.ABORTED;case Ce.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ce.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(Z=Ce||(Ce={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Fe.RED,this.left=i!=null?i:Fe.EMPTY,this.right=s!=null?s:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hp(this.data.getIterator())}getIteratorFrom(e){return new Hp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Hp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Xb=new qe(q.comparator);function $n(){return Xb}const Qb=new qe(q.comparator);function vl(){return Qb}const Jb=new qe(q.comparator);function Zb(){return Jb}const eT=new Ve(q.comparator);function ve(...t){let e=eT;for(const n of t)e=e.add(n);return e}const tT=new Ve(le);function Kp(){return tT}/**
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
 */class Po{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Li.createSynthesizedTargetChangeForCurrentChange(e,n)),new Po(re.min(),r,Kp(),$n(),ve())}}class Li{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Li(ze.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
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
 */class Do{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.F=i}}class Wp{constructor(e,n){this.targetId=e,this.O=n}}class Gp{constructor(e,n,r=ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Yp{constructor(){this.M=0,this.L=Qp(),this.B=ze.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.M!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=ve(),n=ve(),r=ve();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Li(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=Qp()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class nT{constructor(e){this.et=e,this.nt=new Map,this.st=$n(),this.it=Xp(),this.rt=new Ve(le)}ot(e){for(const n of e.$)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.O.count,i=this.wt(n);if(i){const s=i.target;if(fl(s))if(r===0){const o=new q(s.path);this.ct(n,o,xe.newNoDocument(o,re.min()))}else oe(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&fl(a.target)){const c=new q(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.ct(o,c,xe.newNoDocument(c,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=ve();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Po(e,n,this.rt,this.st,r);return this.st=$n(),this.it=Xp(),this.rt=new Ve(le),i}at(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Yp,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new Ve(le),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Yp),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Xp(){return new qe(q.comparator)}function Qp(){return new qe(q.comparator)}/**
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
 */const rT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class sT{constructor(e,n){this.databaseId=e,this.C=n}}function Mo(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jp(t,e){return t.C?e.toBase64():e.toUint8Array()}function oT(t,e){return Mo(t,e.toTimestamp())}function wt(t){return oe(!!t),re.fromTimestamp(function(e){const n=cn(e);return new ht(n.seconds,n.nanos)}(t))}function wl(t,e){return function(n){return new _e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Zp(t){const e=_e.fromString(t);return oe(om(e)),e}function Lo(t,e){return wl(t.databaseId,e.path)}function Ui(t,e){const n=Zp(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(em(n))}function El(t,e){return wl(t.databaseId,e)}function aT(t){const e=Zp(t);return e.length===4?_e.emptyPath():em(e)}function Fi(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function em(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tm(t,e,n){return{name:Lo(t,e),fields:n.value.mapValue.fields}}function cT(t,e){return"found"in e?function(n,r){oe(!!r.found),r.found.name,r.found.updateTime;const i=Ui(n,r.found.name),s=wt(r.found.updateTime),o=new it({mapValue:{fields:r.found.fields}});return xe.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){oe(!!r.missing),oe(!!r.readTime);const i=Ui(n,r.missing),s=wt(r.readTime);return xe.newNoDocument(i,s)}(t,e):K()}function lT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.C?(oe(l===void 0||typeof l=="string"),ze.fromBase64String(l||"")):(oe(l===void 0||l instanceof Uint8Array),ze.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:qp(c.code);return new B(l,c.message||"")}(o);n=new Gp(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ui(t,r.document.name),s=wt(r.document.updateTime),o=new it({mapValue:{fields:r.document.fields}}),a=xe.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Do(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ui(t,r.document),s=r.readTime?wt(r.readTime):re.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Do([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ui(t,r.document),s=r.removedTargetIds||[];n=new Do([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Yb(i),o=r.targetId;n=new Wp(o,s)}}return n}function nm(t,e){let n;if(e instanceof Oo)n={update:tm(t,e.key,e.value)};else if(e instanceof jp)n={delete:Lo(t,e.key)};else if(e instanceof Vn)n={update:tm(t,e.key,e.data),updateMask:wT(e.fieldMask)};else{if(!(e instanceof Bp))return K();n={verify:Lo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Co)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Di)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ko)return{fieldPath:s.field.canonicalString(),increment:o.N};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:oT(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function uT(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?wt(r.updateTime):wt(i);return s.isEqual(re.min())&&(s=wt(i)),new Kb(s,r.transformResults||[])}(n,e))):[]}function hT(t,e){return{documents:[El(t,e.path)]}}function fT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=El(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=El(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(_p(u.value))return{unaryFilter:{field:br(u.field),op:"IS_NAN"}};if(Ep(u.value))return{unaryFilter:{field:br(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(_p(u.value))return{unaryFilter:{field:br(u.field),op:"IS_NOT_NAN"}};if(Ep(u.value))return{unaryFilter:{field:br(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(u.field),op:gT(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:br(l.field),direction:mT(l.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,c){return a.C||Ln(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=im(e.startAt)),e.endAt&&(n.structuredQuery.endAt=im(e.endAt)),n}function dT(t){let e=aT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=rm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new xi(Tr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ln(h)?null:h}(n.limit));let c=null;n.startAt&&(c=sm(n.startAt));let l=null;return n.endAt&&(l=sm(n.endAt)),Lb(e,i,o,s,a,"F",c,l)}function pT(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function rm(t){return t?t.unaryFilter!==void 0?[vT(t)]:t.fieldFilter!==void 0?[yT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>rm(e)).reduce((e,n)=>e.concat(n)):K():[]}function im(t){return{before:t.before,values:t.position}}function sm(t){const e=!!t.before,n=t.values||[];return new dl(n,e)}function mT(t){return rT[t]}function gT(t){return iT[t]}function br(t){return{fieldPath:t.canonicalString()}}function Tr(t){return rt.fromServerFormat(t.fieldPath)}function yT(t){return st.create(Tr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}function vT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Tr(t.unaryFilter.field);return st.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Tr(t.unaryFilter.field);return st.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Tr(t.unaryFilter.field);return st.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Tr(t.unaryFilter.field);return st.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}function wT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function om(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const ET="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _T{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bT{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Wb(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&yl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&yl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(re.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,(n,r)=>Lp(n,r))&&wr(this.baseMutations,e.baseMutations,(n,r)=>Lp(n,r))}}class _l{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=Zb();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _l(e,n,r,i)}}/**
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
 */class jn{constructor(e,n,r,i,s=re.min(),o=re.min(),a=ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class TT{constructor(e){this.Gt=e}}function IT(t){const e=dT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$b(e,e.limit,"L"):e}/**
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
 */class AT{constructor(){this.zt=new ST}addToCollectionParentIndex(e,n){return this.zt.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.zt.getEntries(n))}}class ST{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(_e.comparator)).toArray()}}/**
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
 */class Ir{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Ir(0)}static re(){return new Ir(-1)}}/**
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
 */async function $i(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==ET)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Mn(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gp(this.inner)}}/**
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
 */class CT{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:re.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:xe.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class am{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Pn(e,n,r))}Pn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):Vb(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new q(n)).next(r=>{let i=vl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=vl();return this.Jt.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const c=function(l,u){return new bo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Cn(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const c of s)for(const l of c.mutations){const u=l.key;let h=i.get(u);h==null&&(h=xe.newInvalidDocument(u),i=i.insert(u,h)),yl(l,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(u))}}))).next(()=>(i.forEach((o,a)=>{Ao(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=ve();for(const o of n)for(const a of o.mutations)a instanceof Vn&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
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
 */class bl{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new bl(e,n.fromCache,r,i)}}/**
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
 */class kT{Fn(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(re.min())?this.Mn(e,n):this.On.vn(e,i).next(s=>{const o=this.Ln(n,s);return(To(n)||ml(n))&&this.Bn(n.limitType,o,i,r)?this.Mn(e,n):(fp()<=se.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),gl(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let r=new Ve(kp(e));return n.forEach((i,s)=>{Ao(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mn(e,n){return fp()<=se.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",gl(n)),this.On.getDocumentsMatchingQuery(e,n,re.min())}}/**
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
 */class RT{constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new qe(le),this.Kn=new ji(s=>ul(s),hl),this.jn=re.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new am(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function NT(t,e,n,r){return new RT(t,e,n,r)}async function cm(t,e){const n=G(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),i=new am(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=ve();for(const f of a){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of c){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return i.vn(o,h).next(f=>({Gn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function OT(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=x.resolve();return h.forEach(m=>{f=f.next(()=>l.getEntry(a,m)).next(g=>{const S=c.docVersions.get(m);oe(S!==null),g.version.compareTo(S)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&l.addEntry(g,c.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function lm(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function xT(t,e){const n=G(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((l,u)=>{const h=i.get(u);if(!h)return;a.push(n.He.removeMatchingKeys(s,l.removedDocuments,u).next(()=>n.He.addMatchingKeys(s,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const m=h.withResumeToken(f,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(u,m),function(g,S,E){return oe(S.resumeToken.approximateByteSize()>0),g.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,m,l)&&a.push(n.He.updateTargetData(s,m))}});let c=$n();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(PT(s,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(re.min())){const l=n.He.getLastRemoteSnapshotVersion(s).next(u=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,c)).next(()=>c)}).then(s=>(n.qn=i,s))}function PT(t,e,n,r,i){let s=ve();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=$n();return n.forEach((c,l)=>{const u=o.get(c),h=(i==null?void 0:i.get(c))||r;l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function DT(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function MT(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new jn(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function Tl(t,e,n){const r=G(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vi(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function um(t,e,n){const r=G(t);let i=re.min(),s=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.Kn.get(l);return h!==void 0?x.resolve(u.qn.get(h)):u.He.getTargetData(c,l)}(r,o,Fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ve())).next(a=>({documents:a,zn:s})))}/**
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
 */class LT{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return x.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:wt(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:IT(r.bundledQuery),readTime:wt(r.readTime)}}(n)),x.resolve()}}/**
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
 */class Il{constructor(){this.ts=new Ve(Pe.es),this.ns=new Ve(Pe.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Pe(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new q(new _e([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new q(new _e([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=ve();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return q.comparator(e.key,n.key)||le(e.fs,n.fs)}static ss(e,n){return le(e.fs,n.fs)||q.comparator(e.key,n.key)}}/**
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
 */class UT{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Ve(Pe.es)}checkEmpty(e){return x.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new bT(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new Pe(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return x.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return x.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(le);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),x.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new q(s),0);let a=new Ve(le);return this.ws.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.fs)),!0)},o),x.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return x.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Pe(n,0),i=this.ws.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,x.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
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
 */class FT{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new qe(q.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.clone():xe.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():xe.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=$n();const s=new q(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Ao(n,c)&&(i=i.insert(c.key,c.clone()))}return x.resolve(i)}Es(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VT(this)}getSize(e){return x.resolve(this.size)}}class VT extends CT{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
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
 */class $T{constructor(e){this.persistence=e,this.Is=new ji(n=>ul(n),hl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.As=0,this.Rs=new Il,this.targetCount=0,this.Ps=Ir.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),x.resolve()}ce(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ps=new Ir(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.ce(n),x.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Rs.containsKey(n))}}/**
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
 */class jT{constructor(e,n){this.bs={},this.Be=new sl(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new $T(this),this.Jt=new AT,this.Je=function(r,i){return new FT(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new TT(n),this.Ye=new LT(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new UT(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new BT(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return x.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class BT extends _T{constructor(e){super(),this.currentSequenceNumber=e}}class Al{constructor(e){this.persistence=e,this.Cs=new Il,this.Ns=null}static ks(e){return new Al(e)}get xs(){if(this.Ns)return this.Ns;throw K()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),x.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.xs,r=>{const i=q.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return x.or([()=>x.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class hm{constructor(){this.activeTargetIds=Kp()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zT{constructor(){this.pi=new hm,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class qT{Ei(e){}shutdown(){}}/**
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
 */class fm{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const HT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class KT{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}/**
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
 */class WT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Mi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw dp("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=HT[e];return`${this.Mi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new db;a.listenOnce(ub.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case rl.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),s(l);break;case rl.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case rl.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(h.status);o(new B(f,h.message))}else o(new B(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}Qi(e,n,r){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=cb(),o=lb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fb({})),this.qi(a.initMessageHeaders,n,r),Yh()||Qh()||Sw()||Jh()||Cw()||Xh()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");F("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const f=new KT({Vi:g=>{h?F("Connection","Not sending because WebChannel is closed:",g):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",g),l.send(g))},Si:()=>l.close()}),m=(g,S,E)=>{g.listen(S,v=>{try{E(v)}catch(w){setTimeout(()=>{throw w},0)}})};return m(l,vo.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),m(l,vo.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.Fi())}),m(l,vo.EventType.ERROR,g=>{h||(h=!0,dp("Connection","WebChannel transport errored:",g),f.Fi(new B(I.UNAVAILABLE,"The operation could not be completed")))}),m(l,vo.EventType.MESSAGE,g=>{var S;if(!h){const E=g.data[0];oe(!!E);const v=E,w=v.error||((S=v[0])===null||S===void 0?void 0:S.error);if(w){F("Connection","WebChannel received error:",w);const L=w.status;let V=function(ie){const be=Ce[ie];if(be!==void 0)return qp(be)}(L),ae=w.message;V===void 0&&(V=I.INTERNAL,ae="Unknown error status: "+L+" with message "+w.message),h=!0,f.Fi(new B(V,ae)),l.close()}else F("Connection","WebChannel received:",E),f.Oi(E)}}),m(o,hb.STAT_EVENT,g=>{g.stat===up.PROXY?F("Connection","Detected buffering proxy"):g.stat===up.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function Sl(){return typeof document!="undefined"?document:null}/**
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
 */function Uo(t){return new sT(t,!0)}class Cl{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
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
 */class dm{constructor(e,n,r,i,s,o,a,c){this.Oe=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Cl(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.ar===null&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new B(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Oe.enqueueAndForget(()=>this.rr===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GT extends dm{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=lT(this.k,e),r=function(i){if(!("targetChange"in i))return re.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?wt(s.readTime):re.min()}(e);return this.listener.Pr(n,r)}br(e){const n={};n.database=Fi(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=fl(a)?{documents:hT(i,a)}:{query:fT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Jp(i,s.resumeToken):s.snapshotVersion.compareTo(re.min())>0&&(o.readTime=Mo(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=pT(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Fi(this.k),n.removeTarget=e,this.gr(n)}}class YT extends dm{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=uT(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.Cr(r,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Fi(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nm(this.k,r))};this.gr(n)}}/**
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
 */class XT extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}ji(e,n,r){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class QT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){this.Or===0&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(an(n),this.Lr=!1):F("OnlineStateTracker",n)}jr(){this.Mr!==null&&(this.Mr.cancel(),this.Mr=null)}}/**
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
 */class JT{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{Bn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.Gr.add(4),await Bi(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Fo(c)}(this))})}),this.Jr=new QT(r,i)}}async function Fo(t){if(Bn(t))for(const e of t.zr)await e(!0)}async function Bi(t){for(const e of t.zr)await e(!1)}function pm(t,e){const n=G(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Nl(n)?Rl(n):Ar(n).lr()&&kl(n,e))}function mm(t,e){const n=G(t),r=Ar(n);n.Wr.delete(e),r.lr()&&gm(n,e),n.Wr.size===0&&(r.lr()?r._r():Bn(n)&&n.Jr.set("Unknown"))}function kl(t,e){t.Yr.X(e.targetId),Ar(t).br(e)}function gm(t,e){t.Yr.X(e),Ar(t).vr(e)}function Rl(t){t.Yr=new nT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Ar(t).start(),t.Jr.Br()}function Nl(t){return Bn(t)&&!Ar(t).hr()&&t.Wr.size>0}function Bn(t){return G(t).Gr.size===0}function ym(t){t.Yr=void 0}async function ZT(t){t.Wr.forEach((e,n)=>{kl(t,e)})}async function eI(t,e){ym(t),Nl(t)?(t.Jr.Kr(e),Rl(t)):t.Jr.set("Unknown")}async function tI(t,e,n){if(t.Jr.set("Online"),e instanceof Gp&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vo(t,r)}else if(e instanceof Do?t.Yr.ot(e):e instanceof Wp?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(re.min()))try{const r=await lm(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Wr.get(c);l&&i.Wr.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.Wr.get(a);if(!c)return;i.Wr.set(a,c.withResumeToken(ze.EMPTY_BYTE_STRING,c.snapshotVersion)),gm(i,a);const l=new jn(c.target,a,1,c.sequenceNumber);kl(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Vo(t,r)}}async function Vo(t,e,n){if(!Vi(e))throw e;t.Gr.add(1),await Bi(t),t.Jr.set("Offline"),n||(n=()=>lm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Fo(t)})}function vm(t,e){return e().catch(n=>Vo(t,n,e))}async function $o(t){const e=G(t),n=ln(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;nI(e);)try{const i=await DT(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,rI(e,i)}catch(i){await Vo(e,i)}wm(e)&&Em(e)}function nI(t){return Bn(t)&&t.Qr.length<10}function rI(t,e){t.Qr.push(e);const n=ln(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function wm(t){return Bn(t)&&!ln(t).hr()&&t.Qr.length>0}function Em(t){ln(t).start()}async function iI(t){ln(t).kr()}async function sI(t){const e=ln(t);for(const n of t.Qr)e.Dr(n.mutations)}async function oI(t,e,n){const r=t.Qr.shift(),i=_l.from(r,e,n);await vm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $o(t)}async function aI(t,e){e&&ln(t).Sr&&await async function(n,r){if(i=r.code,zp(i)&&i!==I.ABORTED){const s=n.Qr.shift();ln(n).wr(),await vm(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $o(n)}var i}(t,e),wm(t)&&Em(t)}async function cI(t,e){const n=G(t);e?(n.Gr.delete(2),await Fo(n)):e||(n.Gr.add(2),await Bi(n),n.Jr.set("Unknown"))}function Ar(t){return t.Xr||(t.Xr=function(e,n,r){const i=G(e);return i.Fr(),new GT(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:ZT.bind(null,t),Ni:eI.bind(null,t),Pr:tI.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Nl(t)?Rl(t):t.Jr.set("Unknown")):(await t.Xr.stop(),ym(t))})),t.Xr}function ln(t){return t.Zr||(t.Zr=function(e,n,r){const i=G(e);return i.Fr(),new YT(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:iI.bind(null,t),Ni:aI.bind(null,t),Nr:sI.bind(null,t),Cr:oI.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await $o(t)):(await t.Zr.stop(),t.Qr.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
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
 */class Ol{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ol(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xl(t,e){if(an("AsyncQueue",`${e}: ${t}`),Vi(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Sr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=vl(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Sr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class _m{constructor(){this.eo=new qe(q.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):K():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cr{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Cr(e,n,Sr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Io(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class lI{constructor(){this.so=void 0,this.listeners=[]}}class uI{constructor(){this.queries=new ji(e=>Cp(e),Io),this.onlineState="Unknown",this.io=new Set}}async function hI(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new lI),i)try{s.so=await n.onListen(r)}catch(o){const a=xl(o,`Initialization of query '${gl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&Pl(n)}async function fI(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function dI(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&Pl(n)}function pI(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Pl(t){t.io.forEach(e=>{e.next()})}class mI{constructor(e,n,r){this.query=e,this.ao=n,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.ho(e)&&(this.ao.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}/**
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
 */class bm{constructor(e){this.key=e}}class Tm{constructor(e){this.key=e}}class gI{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=ve(),this.mutatedKeys=ve(),this.Ao=kp(e),this.Ro=new Sr(this.Ao)}get Po(){return this.To}bo(e,n){const r=n?n.vo:new _m,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=To(this.query)&&i.size===this.query.limit?i.last():null,l=ml(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),m=Ao(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;f&&m?f.data.isEqual(m.data)?g!==S&&(r.track({type:3,doc:m}),E=!0):this.Vo(f,m)||(r.track({type:2,doc:m}),E=!0,(c&&this.Ao(m,c)>0||l&&this.Ao(m,l)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),E=!0):f&&!m&&(r.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(m?(o=o.add(m),s=S?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),To(this.query)||ml(this.query))for(;o.size>this.query.limit;){const u=To(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((l,u)=>function(h,f){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return m(h)-m(f)}(l.type,u.type)||this.Ao(l.doc,u.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,s.length!==0||c?{snapshot:new Cr(this.query,e.Ro,i,s,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new _m,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=ve(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new Tm(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new bm(r))}),n}ko(e){this.To=e.zn,this.Io=ve();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Cr.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class yI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vI{constructor(e){this.key=e,this.$o=!1}}class wI{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Fo={},this.Oo=new ji(a=>Cp(a),Io),this.Mo=new Map,this.Lo=new Set,this.Bo=new qe(q.comparator),this.Uo=new Map,this.qo=new Il,this.Ko={},this.jo=new Map,this.Qo=Ir.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function EI(t,e){const n=NI(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await MT(n.localStore,Fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await _I(n,e,r,a==="current"),n.isPrimaryClient&&pm(n.remoteStore,o)}return i}async function _I(t,e,n,r){t.Go=(u,h,f)=>async function(m,g,S,E){let v=g.view.bo(S);v.Bn&&(v=await um(m.localStore,g.query,!1).then(({documents:V})=>g.view.bo(V,v)));const w=E&&E.targetChanges.get(g.targetId),L=g.view.applyChanges(v,m.isPrimaryClient,w);return Rm(m,g.targetId,L.Co),L.snapshot}(t,u,h,f);const i=await um(t.localStore,e,!0),s=new gI(e,i.zn),o=s.bo(i.documents),a=Li.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);Rm(t,n,c.Co);const l=new yI(e,n,s);return t.Oo.set(e,l),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function bI(t,e){const n=G(t),r=n.Oo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(s=>!Io(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Tl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mm(n.remoteStore,r.targetId),Dl(n,r.targetId)}).catch($i)):(Dl(n,r.targetId),await Tl(n.localStore,r.targetId,!0))}async function TI(t,e,n){const r=OI(t);try{const i=await function(s,o){const a=G(s),c=ht.now(),l=o.reduce((h,f)=>h.add(f.key),ve());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(f=>{u=f;const m=[];for(const g of o){const S=Gb(g,u.get(g.key));S!=null&&m.push(new Vn(g.key,S,bp(S.value.mapValue),vt.exists(!0)))}return a.An.addMutationBatch(h,c,m,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Ko[s.currentUser.toKey()];c||(c=new qe(le)),c=c.insert(o,a),s.Ko[s.currentUser.toKey()]=c}(r,i.batchId,n),await zi(r,i.changes),await $o(r.remoteStore)}catch(i){const s=xl(i,"Failed to persist write");n.reject(s)}}async function Im(t,e){const n=G(t);try{const r=await xT(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?oe(o.$o):i.removedDocuments.size>0&&(oe(o.$o),o.$o=!1))}),await zi(n,r,e)}catch(r){await $i(r)}}function Am(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Oo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ro(o)&&(c=!0)}),c&&Pl(a)}(r.eventManager,e),i.length&&r.Fo.Pr(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function II(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new qe(q.comparator);o=o.insert(s,xe.newNoDocument(s,re.min()));const a=ve().add(s),c=new Po(re.min(),new Map,new Ve(le),o,a);await Im(r,c),r.Bo=r.Bo.remove(s),r.Uo.delete(e),Ml(r)}else await Tl(r.localStore,e,!1).then(()=>Dl(r,e,n)).catch($i)}async function AI(t,e){const n=G(t),r=e.batch.batchId;try{const i=await OT(n.localStore,e);Cm(n,r,null),Sm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zi(n,i)}catch(i){await $i(i)}}async function SI(t,e,n){const r=G(t);try{const i=await function(s,o){const a=G(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.An.lookupMutationBatch(c,o).next(u=>(oe(u!==null),l=u.keys(),a.An.removeMutationBatch(c,u))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,l))})}(r.localStore,e);Cm(r,e,n),Sm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zi(r,i)}catch(i){await $i(i)}}function Sm(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Cm(t,e,n){const r=G(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function Dl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||km(t,r)})}function km(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(mm(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Ml(t))}function Rm(t,e,n){for(const r of n)r instanceof bm?(t.qo.addReference(r.key,e),CI(t,r)):r instanceof Tm?(F("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||km(t,r.key)):K()}function CI(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Ml(t))}function Ml(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new q(_e.fromString(e)),r=t.Qo.next();t.Uo.set(r,new vI(n)),t.Bo=t.Bo.insert(n,r),pm(t.remoteStore,new jn(Fn(pl(n.path)),r,2,sl.I))}}async function zi(t,e,n){const r=G(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Go(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=bl.$n(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>x.forEach(c,h=>x.forEach(h.kn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>x.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Vi(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qn.get(h),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);l.qn=l.qn.insert(h,g)}}}(r.localStore,s))}async function kI(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await cm(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new B(I.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zi(n,r.Gn)}}function RI(t,e){const n=G(t),r=n.Uo.get(e);if(r&&r.$o)return ve().add(r.key);{let i=ve();const s=n.Mo.get(e);if(!s)return i;for(const o of s){const a=n.Oo.get(o);i=i.unionWith(a.view.Po)}return i}}function NI(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Im.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=II.bind(null,e),e.Fo.Pr=dI.bind(null,e.eventManager),e.Fo.zo=pI.bind(null,e.eventManager),e}function OI(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SI.bind(null,e),e}class xI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Uo(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return NT(this.persistence,new kT,e.initialUser,this.k)}Yo(e){return new jT(Al.ks,this.k)}Jo(e){return new zT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Am(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kI.bind(null,this.syncEngine),await cI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uI}createDatastore(e){const n=Uo(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new WT(i));var i;return function(s,o,a,c){return new XT(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Am(this.syncEngine,a,0),o=fm.bt()?new fm:new qT,new JT(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new wI(r,i,s,o,a,c);return l&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);F("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Bi(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
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
 */class DI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class MI{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new B(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=G(r),o=Fi(s.k)+"/documents",a={documents:i.map(h=>Lo(s.k,h))},c=await s.ji("BatchGetDocuments",o,a),l=new Map;c.forEach(h=>{const f=cT(s.k,h);l.set(f.key.toString(),f)});const u=[];return i.forEach(h=>{const f=l.get(h.toString());oe(!!f),u.push(f)}),u}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new jp(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=q.fromPath(r);this.mutations.push(new Bp(i,this.precondition(i)))}),await async function(n,r){const i=G(n),s=Fi(i.k)+"/documents",o={writes:r.map(a=>nm(i.k,a))};await i.Bi("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=re.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new B(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?vt.updateTime(n):vt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(re.min()))throw new B(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return vt.updateTime(n)}return vt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class LI{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.la=5,this.ur=new Cl(this.asyncQueue,"transaction_retry")}run(){this.la-=1,this.fa()}fa(){this.ur.Zi(async()=>{const e=new MI(this.datastore),n=this.da(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.wa(i)}))}).catch(r=>{this.wa(r)})})}da(e){try{const n=this.updateFunction(e);return!Ln(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}wa(e){this.la>0&&this._a(e)?(this.la-=1,this.asyncQueue.enqueueAndForget(()=>(this.fa(),Promise.resolve()))):this.deferred.reject(e)}_a(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!zp(n)}return!1}}/**
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
 */class UI{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=pp.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function FI(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function VI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $I(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=G(s);a.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const c=Bn(a);a.Gr.add(3),await Bi(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Fo(a)}(e.remoteStore,i)),t.onlineComponents=e}async function $I(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await FI(t,new xI)),t.offlineComponents}async function Ll(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await VI(t,new PI)),t.onlineComponents}function jI(t){return Ll(t).then(e=>e.syncEngine)}async function BI(t){const e=await Ll(t),n=e.eventManager;return n.onListen=EI.bind(null,e.syncEngine),n.onUnlisten=bI.bind(null,e.syncEngine),n}function zI(t,e,n={}){const r=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new DI({next:h=>{s.enqueueAndForget(()=>fI(i,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new B(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new mI(pl(o.path),l,{includeMetadataChanges:!0,wo:!0});return hI(i,u)}(await BI(t),t.asyncQueue,e,n,r)),r.promise}function qI(t,e){const n=new zt;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return Ll(i).then(s=>s.datastore)}(t);new LI(t.asyncQueue,r,e,n).run()}),n.promise}class HI{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class qi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Nm=new Map;/**
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
 */function Om(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KI(t,e,n,r){if(e===!0&&r===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!q.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pm(t){if(q.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ul(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ul(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Dm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fl{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dm({}),this._settingsFrozen=!1,e instanceof qi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(i.options.projectId)}(e))}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mb;switch(n.type){case"gapi":const r=n.client;return oe(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new vb(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Nm.get(e);n&&(F("ComponentProvider","Removing Datastore"),Nm.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Vl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vl(this.firestore,e,this._query)}}class un extends Vl{constructor(e,n,r){super(e,n,pl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new q(e))}withConverter(e){return new un(this.firestore,e,this._path)}}function NS(t,e,...n){if(t=Xe(t),Om("collection","path",e),t instanceof Fl){const r=_e.fromString(e,...n);return Pm(r),new un(t,null,r)}{if(!(t instanceof ot||t instanceof un))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Pm(r),new un(t.firestore,null,r)}}function WI(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=pp.A()),Om("doc","path",e),t instanceof Fl){const r=_e.fromString(e,...n);return xm(r),new ot(t,null,new q(r))}{if(!(t instanceof ot||t instanceof un))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return xm(r),new ot(t.firestore,t instanceof un?t.converter:null,new q(r))}}/**
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
 */class GI{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Cl(this,"async_queue_retry"),this.Ra=()=>{const n=Sl();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Sl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const n=Sl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const n=new zt;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(this.ga.length!==0){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Vi(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const n=this.ma.then(()=>(this.Ea=!0,e().catch(r=>{this.Ta=r,this.Ea=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw an("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ea=!1,r))));return this.ma=n,n}enqueueAfterDelay(e,n,r){this.Pa(),this.Aa.indexOf(e)>-1&&(n=0);const i=Ol.createAndSchedule(this,e,n,r,s=>this.Va(s));return this.pa.push(i),i}Pa(){this.Ta&&K()}verifyOperationInProgress(){}async Sa(){let e;do e=this.ma,await e;while(e!==this.ma)}Da(e){for(const n of this.pa)if(n.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.pa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const n=this.pa.indexOf(e);this.pa.splice(n,1)}}class Hi extends Fl{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new GI,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Mm(this),this._firestoreClient.terminate()}}function OS(t=nf()){return Qa(t,"firestore").getImmediate()}function $l(t){return t._firestoreClient||Mm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mm(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new HI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new UI(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class jo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(ze.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zn(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jl{constructor(e){this._methodName=e}}/**
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
 */class Bl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const YI=/^__.*__$/;class XI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}class Lm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Um(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class zl{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ka(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new zl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$a({path:r,Oa:!1});return i.Ma(e),i}La(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$a({path:r,Oa:!1});return i.ka(),i}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return qo(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(e.length===0)throw this.Ua("Document fields must not be empty");if(Um(this.xa)&&YI.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class QI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Uo(e)}ja(e,n,r,i=!1){return new zl({xa:e,methodName:n,Ka:r,path:rt.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function ql(t){const e=t._freezeSettings(),n=Uo(t._databaseId);return new QI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hl(t,e,n,r,i,s={}){const o=t.ja(s.merge||s.mergeFields?2:0,e,n,i);Kl("Data must be an object, but it was:",o,r);const a=Fm(r,o);let c,l;if(s.merge)c=new ki(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=Wl(e,h,n);if(!o.contains(f))throw new B(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$m(u,f)||u.push(f)}c=new ki(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new XI(new it(a),c,l)}class Bo extends jl{_toFieldTransform(e){if(e.xa!==2)throw e.xa===1?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bo}}function JI(t,e,n,r){const i=t.ja(1,e,n);Kl("Data must be an object, but it was:",i,r);const s=[],o=it.empty();Mn(r,(c,l)=>{const u=Gl(e,c,n);l=Xe(l);const h=i.La(u);if(l instanceof Bo)s.push(u);else{const f=zo(l,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new ki(s);return new Lm(o,a,i.fieldTransforms)}function ZI(t,e,n,r,i,s){const o=t.ja(1,e,n),a=[Wl(e,r,n)],c=[i];if(s.length%2!=0)throw new B(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Wl(e,s[f])),c.push(s[f+1]);const l=[],u=it.empty();for(let f=a.length-1;f>=0;--f)if(!$m(l,a[f])){const m=a[f];let g=c[f];g=Xe(g);const S=o.La(m);if(g instanceof Bo)l.push(m);else{const E=zo(g,S);E!=null&&(l.push(m),u.set(m,E))}}const h=new ki(l);return new Lm(u,h,o.fieldTransforms)}function zo(t,e){if(Vm(t=Xe(t)))return Kl("Unsupported field value:",e,t),Fm(t,e);if(t instanceof jl)return function(n,r){if(!Um(r.xa))throw r.Ua(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Ua(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&e.xa!==4)throw e.Ua("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=zo(o,r.Ba(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bb(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ht.fromDate(n);return{timestampValue:Mo(r.k,i)}}if(n instanceof ht){const i=new ht(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mo(r.k,i)}}if(n instanceof Bl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zn)return{bytesValue:Jp(r.k,n._byteString)};if(n instanceof ot){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Ua(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Ua(`Unsupported field value: ${Ul(n)}`)}(t,e)}function Fm(t,e){const n={};return gp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mn(t,(r,i)=>{const s=zo(i,e.Fa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Vm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof Bl||t instanceof zn||t instanceof ot||t instanceof jl)}function Kl(t,e,n){if(!Vm(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ul(n);throw r==="an object"?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}function Wl(t,e,n){if((e=Xe(e))instanceof jo)return e._internalPath;if(typeof e=="string")return Gl(t,e);throw qo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const e1=new RegExp("[~\\*/\\[\\]]");function Gl(t,e,n){if(e.search(e1)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jo(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new B(I.INVALID_ARGUMENT,a+t+c)}function $m(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ho{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class t1 extends Ho{data(){return super.data()}}function jm(t,e){return typeof e=="string"?Gl(t,e):e instanceof jo?e._internalPath:e._delegate._internalPath}/**
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
 */class Bm{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yl extends Ho{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new n1(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class n1 extends Yl{data(e={}){return super.data(e)}}/**
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
 */class zm{convertValue(e,n="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const r={};return Mn(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Bl(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){const n=cn(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);oe(om(r));const i=new qi(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Xl(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class r1 extends zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Ki(t,e){if((t=Xe(t)).firestore!==e)throw new B(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function xS(t){t=kr(t,ot);const e=kr(t.firestore,Hi);return zI($l(e),t._key).then(n=>i1(e,t,n))}class qm extends zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function PS(t,e,n){t=kr(t,ot);const r=kr(t.firestore,Hi),i=Xl(t.converter,e,n);return Hm(r,[Hl(ql(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,vt.none())])}function DS(t,e){const n=kr(t.firestore,Hi),r=WI(t),i=Xl(t.converter,e);return Hm(n,[Hl(ql(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,vt.exists(!1))]).then(()=>r)}function Hm(t,e){return function(n,r){const i=new zt;return n.asyncQueue.enqueueAndForget(async()=>TI(await jI(n),r,i)),i.promise}($l(t),e)}function i1(t,e,n){const r=n.docs.get(e._key),i=new qm(t);return new Yl(t,i,e._key,r,new Bm(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class s1 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ql(e)}get(e){const n=Ki(e,this._firestore),r=new r1(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return K();const s=i[0];if(s.isFoundDocument())return new Ho(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Ho(this._firestore,r,n._key,null,n.converter);throw K()})}set(e,n,r){const i=Ki(e,this._firestore),s=Xl(i.converter,n,r),o=Hl(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Ki(e,this._firestore);let o;return o=typeof(n=Xe(n))=="string"||n instanceof jo?ZI(this._dataReader,"Transaction.update",s._key,n,r,i):JI(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Ki(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ki(e,this._firestore),r=new qm(this._firestore);return super.get(e).then(i=>new Yl(this._firestore,r,n._key,i._document,new Bm(!1,!1),n.converter))}}function MS(t,e){return qI($l(t=kr(t,Hi)),n=>e(new s1(t,n)))}(function(t,e=!0){(function(n){vr=n})(ni),ti(new cr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Hi(i,new gb(n.getProvider("auth-internal")),new Eb(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Jt(hp,"3.4.1",t),Jt(hp,"3.4.1","esm2017")})();/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Km=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Rr=t=>Km?Symbol(t):"_vr_"+t,o1=Rr("rvlm"),Wm=Rr("rvd"),Ql=Rr("r"),Gm=Rr("rl"),Jl=Rr("rvl"),Nr=typeof window!="undefined";function a1(t){return t.__esModule||Km&&t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Zl(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const Wi=()=>{},c1=/\/$/,l1=t=>t.replace(c1,"");function eu(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=d1(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function u1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ym(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function h1(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Or(e.matched[r],n.matched[i])&&Xm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Or(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!f1(t[n],e[n]))return!1;return!0}function f1(t,e){return Array.isArray(t)?Qm(t,e):Array.isArray(e)?Qm(e,t):t===e}function Qm(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function d1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Gi;(function(t){t.pop="pop",t.push="push"})(Gi||(Gi={}));var Yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yi||(Yi={}));function p1(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),l1(t)}const m1=/^[^#]+#/;function g1(t,e){return t.replace(m1,"#")+e}function y1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ko=()=>({left:window.pageXOffset,top:window.pageYOffset});function v1(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=y1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jm(t,e){return(history.state?history.state.position-e:-1)+t}const tu=new Map;function w1(t,e){tu.set(t,e)}function E1(t){const e=tu.get(t);return tu.delete(t),e}let _1=()=>location.protocol+"//"+location.host;function Zm(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ym(c,"")}return Ym(n,t)+r+i}function b1(t,e,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const m=Zm(t,location),g=n.value,S=e.value;let E=0;if(f){if(n.value=m,e.value=f,o&&o===g){o=null;return}E=S?f.position-S.position:0}else r(m);i.forEach(v=>{v(n.value,g,{delta:E,type:Gi.pop,direction:E?E>0?Yi.forward:Yi.back:Yi.unknown})})};function c(){o=n.value}function l(f){i.push(f);const m=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return s.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(pe({},f.state,{scroll:Ko()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function eg(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Ko():null}}function T1(t){const{history:e,location:n}=window,r={value:Zm(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:_1()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,eg(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=pe({},i.value,e.state,{forward:c,scroll:Ko()});s(u.current,u,!0);const h=pe({},eg(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function LS(t){t=p1(t);const e=T1(t),n=b1(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=pe({location:"",base:t,go:r,createHref:g1.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function I1(t){return typeof t=="string"||t&&typeof t=="object"}function tg(t){return typeof t=="string"||typeof t=="symbol"}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ng=Rr("nf");var rg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rg||(rg={}));function xr(t,e){return pe(new Error,{type:t,[ng]:!0},e)}function qn(t,e){return t instanceof Error&&ng in t&&(e==null||!!(t.type&e))}const ig="[^/]+?",A1={sensitive:!1,strict:!1,start:!0,end:!0},S1=/[.+*?^${}()[\]/\\]/g;function C1(t,e){const n=pe({},A1,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(S1,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:S,optional:E,regexp:v}=f;s.push({name:g,repeatable:S,optional:E});const w=v||ig;if(w!==ig){m+=10;try{new RegExp(`(${w})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+V.message)}}let L=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(L=E&&l.length<2?`(?:/${L})`:"/"+L),E&&(L+="?"),i+=L,m+=20,E&&(m+=-8),S&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=s[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:S,optional:E}=m,v=g in l?l[g]:"";if(Array.isArray(v)&&!S)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(v)?v.join("/"):v;if(!w)if(E)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u}return{re:o,score:r,keys:s,parse:a,stringify:c}}function k1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function R1(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=k1(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const N1={type:0,value:""},O1=/[a-zA-Z0-9_]/;function x1(t){if(!t)return[[]];if(t==="/")return[[N1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:O1.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function P1(t,e,n){const r=C1(x1(t.path),n),i=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function D1(t,e){const n=[],r=new Map;e=og({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,f){const m=!f,g=L1(u);g.aliasOf=f&&f.record;const S=og(e,u),E=[g];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of L)E.push(pe({},g,{components:f?f.record.components:g.components,path:V,aliasOf:f?f.record:g}))}let v,w;for(const L of E){const{path:V}=L;if(h&&V[0]!=="/"){const ae=h.record.path,ie=ae[ae.length-1]==="/"?"":"/";L.path=h.record.path+(V&&ie+V)}if(v=P1(L,h,S),f?f.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),m&&u.name&&!sg(v)&&o(u.name)),"children"in g){const ae=g.children;for(let ie=0;ie<ae.length;ie++)s(ae[ie],v,f&&f.children[ie])}f=f||v,c(v)}return w?()=>{o(w)}:Wi}function o(u){if(tg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&R1(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!sg(u)&&r.set(u.record.name,u)}function l(u,h){let f,m={},g,S;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw xr(1,{location:u});S=f.record.name,m=pe(M1(h.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),g=f.stringify(m)}else if("path"in u)g=u.path,f=n.find(w=>w.re.test(g)),f&&(m=f.parse(g),S=f.record.name);else{if(f=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!f)throw xr(1,{location:u,currentLocation:h});S=f.record.name,m=pe({},h.params,u.params),g=f.stringify(m)}const E=[];let v=f;for(;v;)E.unshift(v.record),v=v.parent;return{name:S,path:g,params:m,matched:E,meta:F1(E)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function M1(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function L1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:U1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function U1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function sg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function F1(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function og(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const ag=/#/g,V1=/&/g,$1=/\//g,j1=/=/g,B1=/\?/g,cg=/\+/g,z1=/%5B/g,q1=/%5D/g,lg=/%5E/g,H1=/%60/g,ug=/%7B/g,K1=/%7C/g,hg=/%7D/g,W1=/%20/g;function nu(t){return encodeURI(""+t).replace(K1,"|").replace(z1,"[").replace(q1,"]")}function G1(t){return nu(t).replace(ug,"{").replace(hg,"}").replace(lg,"^")}function ru(t){return nu(t).replace(cg,"%2B").replace(W1,"+").replace(ag,"%23").replace(V1,"%26").replace(H1,"`").replace(ug,"{").replace(hg,"}").replace(lg,"^")}function Y1(t){return ru(t).replace(j1,"%3D")}function X1(t){return nu(t).replace(ag,"%23").replace(B1,"%3F")}function Q1(t){return t==null?"":X1(t).replace($1,"%2F")}function Wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function J1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(cg," "),o=s.indexOf("="),a=Wo(o<0?s:s.slice(0,o)),c=o<0?null:Wo(s.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function fg(t){let e="";for(let n in t){const r=t[n];if(n=Y1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&ru(s)):[r&&ru(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Z1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function Xi(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function fn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(xr(4,{from:n,to:e})):h instanceof Error?a(h):I1(h)?a(xr(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function iu(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(eA(a)){const l=(a.__vccOpts||a)[e];l&&i.push(fn(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=a1(l)?l.default:l;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&fn(f,n,r,s,o)()}))}}return i}function eA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function dg(t){const e=Gt(Ql),n=Gt(Gm),r=Ie(()=>e.resolve(jr(t.to))),i=Ie(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Or.bind(null,u));if(f>-1)return f;const m=pg(c[l-2]);return l>1&&pg(u)===m&&h[h.length-1].path!==m?h.findIndex(Or.bind(null,c[l-2])):f}),s=Ie(()=>i.value>-1&&iA(n.params,r.value.params)),o=Ie(()=>i.value>-1&&i.value===n.matched.length-1&&Xm(n.params,r.value.params));function a(c={}){return rA(c)?e[jr(t.replace)?"replace":"push"](jr(t.to)).catch(Wi):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const tA=nr({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dg,setup(t,{slots:e}){const n=Vr(dg(t)),{options:r}=Gt(Ql),i=Ie(()=>({[mg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ks("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),nA=tA;function rA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iA(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function pg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mg=(t,e,n)=>t!=null?t:e!=null?e:n,sA=nr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Gt(Jl),i=Ie(()=>t.route||r.value),s=Gt(Wm,0),o=Ie(()=>i.value.matched[s]);Es(Wm,s+1),Es(o1,o),Es(Jl,i);const a=vs();return Jr(()=>[a.value,o.value,t.name],([c,l,u],[h,f,m])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Or(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return gg(n.default,{Component:u,route:c});const f=l.props[t.name],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,S=ks(u,pe({},m,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return gg(n.default,{Component:S,route:c})||S}}});function gg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oA=sA;function US(t){const e=D1(t.routes,t),n=t.parseQuery||J1,r=t.stringifyQuery||fg,i=t.history,s=Xi(),o=Xi(),a=Xi(),c=jy(hn);let l=hn;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zl.bind(null,_=>""+_),h=Zl.bind(null,Q1),f=Zl.bind(null,Wo);function m(_,M){let N,U;return tg(_)?(N=e.getRecordMatcher(_),U=M):U=_,e.addRoute(U,N)}function g(_){const M=e.getRecordMatcher(_);M&&e.removeRoute(M)}function S(){return e.getRoutes().map(_=>_.record)}function E(_){return!!e.getRecordMatcher(_)}function v(_,M){if(M=pe({},M||c.value),typeof _=="string"){const Q=eu(n,_,M.path),d=e.resolve({path:Q.path},M),p=i.createHref(Q.fullPath);return pe(Q,d,{params:f(d.params),hash:Wo(Q.hash),redirectedFrom:void 0,href:p})}let N;if("path"in _)N=pe({},_,{path:eu(n,_.path,M.path).path});else{const Q=pe({},_.params);for(const d in Q)Q[d]==null&&delete Q[d];N=pe({},_,{params:h(_.params)}),M.params=h(M.params)}const U=e.resolve(N,M),he=_.hash||"";U.params=u(f(U.params));const ge=u1(r,pe({},_,{hash:G1(he),path:U.path})),J=i.createHref(ge);return pe({fullPath:ge,hash:he,query:r===fg?Z1(_.query):_.query||{}},U,{redirectedFrom:void 0,href:J})}function w(_){return typeof _=="string"?eu(n,_,c.value.path):pe({},_)}function L(_,M){if(l!==_)return xr(8,{from:M,to:_})}function V(_){return be(_)}function ae(_){return V(pe(w(_),{replace:!0}))}function ie(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let U=typeof N=="function"?N(_):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=w(U):{path:U},U.params={}),pe({query:_.query,hash:_.hash,params:_.params},U)}}function be(_,M){const N=l=v(_),U=c.value,he=_.state,ge=_.force,J=_.replace===!0,Q=ie(N);if(Q)return be(pe(w(Q),{state:he,force:ge,replace:J}),M||N);const d=N;d.redirectedFrom=M;let p;return!ge&&h1(r,U,N)&&(p=xr(16,{to:d,from:U}),Gn(U,U,!0,!1)),(p?Promise.resolve(p):$e(d,U)).catch(y=>qn(y)?y:me(y,d,U)).then(y=>{if(y){if(qn(y,2))return be(pe(w(y.to),{state:he,force:ge,replace:J}),M||d)}else y=Ot(d,U,!0,J,he);return Ke(d,U,y),y})}function Et(_,M){const N=L(_,M);return N?Promise.reject(N):Promise.resolve()}function $e(_,M){let N;const[U,he,ge]=aA(_,M);N=iu(U.reverse(),"beforeRouteLeave",_,M);for(const Q of U)Q.leaveGuards.forEach(d=>{N.push(fn(d,_,M))});const J=Et.bind(null,_,M);return N.push(J),Pr(N).then(()=>{N=[];for(const Q of s.list())N.push(fn(Q,_,M));return N.push(J),Pr(N)}).then(()=>{N=iu(he,"beforeRouteUpdate",_,M);for(const Q of he)Q.updateGuards.forEach(d=>{N.push(fn(d,_,M))});return N.push(J),Pr(N)}).then(()=>{N=[];for(const Q of _.matched)if(Q.beforeEnter&&!M.matched.includes(Q))if(Array.isArray(Q.beforeEnter))for(const d of Q.beforeEnter)N.push(fn(d,_,M));else N.push(fn(Q.beforeEnter,_,M));return N.push(J),Pr(N)}).then(()=>(_.matched.forEach(Q=>Q.enterCallbacks={}),N=iu(ge,"beforeRouteEnter",_,M),N.push(J),Pr(N))).then(()=>{N=[];for(const Q of o.list())N.push(fn(Q,_,M));return N.push(J),Pr(N)}).catch(Q=>qn(Q,8)?Q:Promise.reject(Q))}function Ke(_,M,N){for(const U of a.list())U(_,M,N)}function Ot(_,M,N,U,he){const ge=L(_,M);if(ge)return ge;const J=M===hn,Q=Nr?history.state:{};N&&(U||J?i.replace(_.fullPath,pe({scroll:J&&Q&&Q.scroll},he)):i.push(_.fullPath,he)),c.value=_,Gn(_,M,N,J),ft()}let xt;function Hn(){xt=i.listen((_,M,N)=>{const U=v(_),he=ie(U);if(he){be(pe(he,{replace:!0}),U).catch(Wi);return}l=U;const ge=c.value;Nr&&w1(Jm(ge.fullPath,N.delta),Ko()),$e(U,ge).catch(J=>qn(J,4|8)?J:qn(J,2)?(be(J.to,U).then(Q=>{qn(Q,4|16)&&!N.delta&&N.type===Gi.pop&&i.go(-1,!1)}).catch(Wi),Promise.reject()):(N.delta&&i.go(-N.delta,!1),me(J,U,ge))).then(J=>{J=J||Ot(U,ge,!1),J&&(N.delta?i.go(-N.delta,!1):N.type===Gi.pop&&qn(J,4|16)&&i.go(-1,!1)),Ke(U,ge,J)}).catch(Wi)})}let Kn=Xi(),Wn=Xi(),ke;function me(_,M,N){ft(_);const U=Wn.list();return U.length?U.forEach(he=>he(_,M,N)):console.error(_),Promise.reject(_)}function ue(){return ke&&c.value!==hn?Promise.resolve():new Promise((_,M)=>{Kn.add([_,M])})}function ft(_){ke||(ke=!0,Hn(),Kn.list().forEach(([M,N])=>_?N(_):M()),Kn.reset())}function Gn(_,M,N,U){const{scrollBehavior:he}=t;if(!Nr||!he)return Promise.resolve();const ge=!N&&E1(Jm(_.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return Oh().then(()=>he(_,M,ge)).then(J=>J&&v1(J)).catch(J=>me(J,_,M))}const Pt=_=>i.go(_);let _t;const dt=new Set;return{currentRoute:c,addRoute:m,removeRoute:g,hasRoute:E,getRoutes:S,resolve:v,options:t,push:V,replace:ae,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Wn.add,isReady:ue,install(_){const M=this;_.component("RouterLink",nA),_.component("RouterView",oA),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>jr(c)}),Nr&&!_t&&c.value===hn&&(_t=!0,V(i.location).catch(he=>{}));const N={};for(const he in hn)N[he]=Ie(()=>c.value[he]);_.provide(Ql,M),_.provide(Gm,Vr(N)),_.provide(Jl,c);const U=_.unmount;dt.add(_),_.unmount=function(){dt.delete(_),dt.size<1&&(l=hn,xt&&xt(),c.value=hn,_t=!1,ke=!1),U()}}}}function Pr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function aA(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Or(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Or(l,c))||i.push(c))}return[n,r,i]}/*!
 * bulma-toast 2.4.1 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */function yg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function su(t){for(var e,n=1;n<arguments.length;n++)e=arguments[n]==null?{}:arguments[n],n%2?yg(Object(e),!0).forEach(function(r){cA(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):yg(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))});return t}function vg(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wg(t,e){for(var n,r=0;r<e.length;r++)n=e[r],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function Eg(t,e,n){return e&&wg(t.prototype,e),n&&wg(t,n),t}function cA(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var lA={duration:2e3,position:"top-right",closeOnClick:!0,opacity:1,single:!1,offsetTop:0,offsetBottom:0,offsetLeft:0,offsetRight:0,extraClasses:""},Dr=su({},lA),Qi={},uA=null,hA="width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;",fA=function(t,e,n,r,i){return t==="top-left"?"left:".concat(r,";top:").concat(e,";text-align:left;align-items:flex-start;"):t==="top-right"?"right:".concat(i,";top:").concat(e,";text-align:right;align-items:flex-end;"):t==="top-center"?"top:".concat(e,";left:0;right:0;text-align:center;align-items:center;"):t==="bottom-left"?"left:".concat(r,";bottom:").concat(n,";text-align:left;align-items:flex-start;"):t==="bottom-right"?"right:".concat(i,";bottom:").concat(n,";text-align:right;align-items:flex-end;"):t==="bottom-center"?"bottom:".concat(n,";left:0;right:0;text-align:center;align-items:center;"):t==="center"?"top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;":void 0};function Go(){var t;return(t=uA)!==null&&t!==void 0?t:document}function dA(t,e,n,r,i,s){if(Qi.position)return Qi.position;var o=Go().createElement("div");return o.setAttribute("style",hA+fA(e,n,r,i,s)),t.appendChild(o),Qi.position=o,o}function FS(t){if(!t.message)throw new Error("message is required");var e=su(su({},Dr),t),n=new pA(e),r=dA(e.appendTo||Go().body,e.position||Dr.position,e.offsetTop||Dr.offsetTop,e.offsetBottom||Dr.offsetBottom,e.offsetLeft||Dr.offsetLeft,e.offsetRight||Dr.offsetRight);if(e.single)for(var i=r.lastElementChild;i;)r.removeChild(i),i=r.lastElementChild;r.appendChild(n.element)}var pA=function(){function t(e){var n=this;vg(this,t),this.element=Go().createElement("div"),this.opacity=e.opacity,this.type=e.type,this.animate=e.animate,this.dismissible=e.dismissible,this.closeOnClick=e.closeOnClick,this.message=e.message,this.duration=e.duration,this.pauseOnHover=e.pauseOnHover,this.offsetTop=e.offsetTop,this.offsetBottom=e.offsetBottom,this.offsetLeft=e.offsetLeft,this.offsetRight=e.offsetRight,this.extraClasses=e.extraClasses;var r="width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity,";"),i=["notification",this.extraClasses];if(this.type&&i.push(this.type),this.animate&&this.animate.in){var s="animate__".concat(this.animate.in),o=this.animate.speed?"animate__".concat(this.animate.speed):"animate__faster";i.push("animate__animated ".concat(s," ").concat(o)),this.onAnimationEnd(function(){return n.element.classList.remove(s)})}if(this.element.className=i.join(" "),this.dismissible){var a=Go().createElement("button");a.className="delete",a.addEventListener("click",function(){n.destroy()}),this.element.insertAdjacentElement("afterbegin",a)}else r+="padding: 1.25rem 1.5rem";this.closeOnClick&&this.element.addEventListener("click",function(){n.destroy()}),this.element.setAttribute("style",r),typeof this.message=="string"?this.element.insertAdjacentHTML("beforeend",this.message):this.element.appendChild(this.message);var c=new mA(function(){n.destroy()},this.duration);this.pauseOnHover&&(this.element.addEventListener("mouseover",function(){c.pause()}),this.element.addEventListener("mouseout",function(){c.resume()}))}return Eg(t,[{key:"destroy",value:function(){var e=this;this.animate&&this.animate.out?(this.element.classList.add("animate__".concat(this.animate.out)),this.onAnimationEnd(function(){e.removeParent(e.element.parentNode),e.element.remove(),delete Qi.position})):(this.removeParent(this.element.parentNode),this.element.remove(),delete Qi.position)}},{key:"removeParent",value:function(e){e&&1>=e.children.length&&e.remove()}},{key:"onAnimationEnd",value:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:function(){},n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(var r in n)if(this.element.style[r]!==void 0){this.element.addEventListener(n[r],function(){return e()});break}}}]),t}(),mA=function(){function t(e,n){vg(this,t),this.timer,this.start,this.remaining=n,this.callback=e,this.resume()}return Eg(t,[{key:"pause",value:function(){typeof document=="undefined"||(window.clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"resume",value:function(){typeof document=="undefined"||(this.start=new Date,window.clearTimeout(this.timer),this.timer=window.setTimeout(this.callback,this.remaining))}}]),t}(),gA=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},ou;typeof window!="undefined"&&(typeof Promise!="undefined"?ou=new Promise(function(t){return window.addEventListener("load",t)}):ou={then:function(t){return window.addEventListener("load",t)}});function VS(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var r=function(i){for(var s=[],o=arguments.length-1;o-- >0;)s[o]=arguments[o+1];e&&e[i]&&e[i].apply(e,s)};"serviceWorker"in navigator&&ou.then(function(){gA()?(yA(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Ji(r,i)})):(_g(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Ji(r,i)}))})}function Ji(t,e){navigator.onLine||t("offline"),t("error",e)}function _g(t,e,n){navigator.serviceWorker.register(t,n).then(function(r){if(e("registered",r),r.waiting){e("updated",r);return}r.onupdatefound=function(){e("updatefound",r);var i=r.installing;i.onstatechange=function(){i.state==="installed"&&(navigator.serviceWorker.controller?e("updated",r):e("cached",r))}}}).catch(function(r){return Ji(e,r)})}function yA(t,e,n){fetch(t).then(function(r){r.status===404?(e("error",new Error("Service worker not found at "+t)),bg()):r.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),bg()):_g(t,e,n)}).catch(function(r){return Ji(e,r)})}function bg(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Ji(emit,t)})}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function vA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Tg(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function wA(t,e,n){return e&&Tg(t.prototype,e),n&&Tg(t,n),t}function EA(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){EA(t,i,n[i])})}return t}function Ig(t,e){return TA(t)||AA(t,e)||CA()}function _A(t){return bA(t)||IA(t)||SA()}function bA(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function TA(t){if(Array.isArray(t))return t}function IA(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function AA(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o=t[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}function SA(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function CA(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var Ag=function(){},au={},Sg={},kA=null,Cg={mark:Ag,measure:Ag};try{typeof window!="undefined"&&(au=window),typeof document!="undefined"&&(Sg=document),typeof MutationObserver!="undefined"&&(kA=MutationObserver),typeof performance!="undefined"&&(Cg=performance)}catch{}var RA=au.navigator||{},kg=RA.userAgent,Rg=kg===void 0?"":kg,Yo=au,et=Sg,Xo=Cg;Yo.document;var cu=!!et.documentElement&&!!et.head&&typeof et.addEventListener=="function"&&typeof et.createElement=="function",NA=~Rg.indexOf("MSIE")||~Rg.indexOf("Trident/"),qt="___FONT_AWESOME___",lu=16,Ng="fa",Og="svg-inline--fa",xg="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var uu={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pg=Yo.FontAwesomeConfig||{};function OA(t){var e=et.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xA(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(et&&typeof et.querySelector=="function"){var PA=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];PA.forEach(function(t){var e=Ig(t,2),n=e[0],r=e[1],i=xA(OA(n));i!=null&&(Pg[r]=i)})}var DA={familyPrefix:Ng,replacementClass:Og,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},hu=ee({},DA,Pg);hu.autoReplaceSvg||(hu.observeMutations=!1);var He=ee({},hu);Yo.FontAwesomeConfig=He;var Ht=Yo||{};Ht[qt]||(Ht[qt]={});Ht[qt].styles||(Ht[qt].styles={});Ht[qt].hooks||(Ht[qt].hooks={});Ht[qt].shims||(Ht[qt].shims=[]);var Nt=Ht[qt],MA=[],LA=function t(){et.removeEventListener("DOMContentLoaded",t),fu=1,MA.map(function(e){return e()})},fu=!1;cu&&(fu=(et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(et.readyState),fu||et.addEventListener("DOMContentLoaded",LA));typeof global!="undefined"&&typeof global.process!="undefined"&&global.process.emit;var dn=lu,pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function UA(t){if(!(!t||!cu)){var e=et.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=et.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return et.head.insertBefore(e,r),t}}var FA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qo(){for(var t=12,e="";t-- >0;)e+=FA[Math.random()*62|0];return e}function Dg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function VA(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Dg(t[n]),'" ')},"").trim()}function du(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function pu(t){return t.size!==pn.size||t.x!==pn.x||t.y!==pn.y||t.rotate!==pn.rotate||t.flipX||t.flipY}function Mg(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function $A(t){var e=t.transform,n=t.width,r=n===void 0?lu:n,i=t.height,s=i===void 0?lu:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&NA?c+="translate(".concat(e.x/dn-r/2,"em, ").concat(e.y/dn-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/dn,"em), calc(-50% + ").concat(e.y/dn,"em)) "):c+="translate(".concat(e.x/dn,"em, ").concat(e.y/dn,"em) "),c+="scale(".concat(e.size/dn*(e.flipX?-1:1),", ").concat(e.size/dn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var mu={x:0,y:0,width:"100%",height:"100%"};function Lg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jA(t){return t.tag==="g"?t.children:[t]}function BA(t){var e=t.children,n=t.attributes,r=t.main,i=t.mask,s=t.maskId,o=t.transform,a=r.width,c=r.icon,l=i.width,u=i.icon,h=Mg({transform:o,containerWidth:l,iconWidth:a}),f={tag:"rect",attributes:ee({},mu,{fill:"white"})},m=c.children?{children:c.children.map(Lg)}:{},g={tag:"g",attributes:ee({},h.inner),children:[Lg(ee({tag:c.tag,attributes:ee({},c.attributes,h.path)},m))]},S={tag:"g",attributes:ee({},h.outer),children:[g]},E="mask-".concat(s||Qo()),v="clip-".concat(s||Qo()),w={tag:"mask",attributes:ee({},mu,{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,S]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:jA(u)},w]};return e.push(L,{tag:"rect",attributes:ee({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(E,")")},mu)}),{children:e,attributes:n}}function zA(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,s=t.styles,o=du(s);if(o.length>0&&(n.style=o),pu(i)){var a=Mg({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:ee({},a.outer),children:[{tag:"g",attributes:ee({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:ee({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}function qA(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(pu(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=du(ee({},s,{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function HA(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(He.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ee({},i,{id:o}),children:r}]}]}function KA(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,m=f===void 0?!1:f,g=r.found?r:n,S=g.width,E=g.height,v=i==="fak",w=v?"":"fa-w-".concat(Math.ceil(S/E*16)),L=[He.replacementClass,s?"".concat(He.familyPrefix,"-").concat(s):"",w].filter(function(Ke){return h.classes.indexOf(Ke)===-1}).filter(function(Ke){return Ke!==""||!!Ke}).concat(h.classes).join(" "),V={children:[],attributes:ee({},h.attributes,{"data-prefix":i,"data-icon":s,class:L,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(E)})},ae=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(S/E*16*.0625,"em")}:{};m&&(V.attributes[xg]=""),c&&V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(u||Qo())},children:[c]});var ie=ee({},V,{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:ee({},ae,h.styles)}),be=r.found&&n.found?BA(ie):zA(ie),Et=be.children,$e=be.attributes;return ie.children=Et,ie.attributes=$e,a?HA(ie):qA(ie)}function WA(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=ee({},o.attributes,s?{title:s}:{},{class:o.classes.join(" ")});c&&(l[xg]="");var u=ee({},o.styles);pu(i)&&(u.transform=$A({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=du(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}var Ug=function(){};He.measurePerformance&&Xo&&Xo.mark&&Xo.measure;var GA=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},gu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?GA(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function Fg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Object.keys(e).reduce(function(o,a){var c=e[a],l=!!c.icon;return l?o[c.iconName]=c.icon:o[a]=c,o},{});typeof Nt.hooks.addPack=="function"&&!i?Nt.hooks.addPack(t,s):Nt.styles[t]=ee({},Nt.styles[t]||{},s),t==="fas"&&Fg("fa",e)}var Vg=Nt.styles,YA=Nt.shims,$g=function(){var e=function(i){return gu(Vg,function(s,o,a){return s[a]=gu(o,i,{}),s},{})};e(function(r,i,s){return i[3]&&(r[i[3]]=s),r}),e(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(a){r[a]=s}),r});var n="far"in Vg;gu(YA,function(r,i){var s=i[0],o=i[1],a=i[2];return o==="far"&&!n&&(o="fas"),r[s]={prefix:o,iconName:a},r},{})};$g();Nt.styles;function jg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Bg(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Dg(t):"<".concat(e," ").concat(VA(r),">").concat(s.map(Bg).join(""),"</").concat(e,">")}var XA=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n):n};function yu(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}yu.prototype=Object.create(Error.prototype);yu.prototype.constructor=yu;var Jo={fill:"currentColor"},zg={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};ee({},Jo,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var vu=ee({},zg,{attributeName:"opacity"});ee({},Jo,{cx:"256",cy:"364",r:"28"}),ee({},zg,{attributeName:"r",values:"28;14;28;28;14;28;"}),ee({},vu,{values:"1;0;1;1;0;1;"});ee({},Jo,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),ee({},vu,{values:"1;0;0;0;0;1;"});ee({},Jo,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),ee({},vu,{values:"0;0;1;1;0;0;"});Nt.styles;function qg(t){var e=t[0],n=t[1],r=t.slice(4),i=Ig(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(He.familyPrefix,"-").concat(uu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(He.familyPrefix,"-").concat(uu.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(He.familyPrefix,"-").concat(uu.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}Nt.styles;var QA=`svg:not(:root).svg-inline--fa {
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
}`;function JA(){var t=Ng,e=Og,n=He.familyPrefix,r=He.replacementClass,i=QA;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var ZA=function(){function t(){vA(this,t),this.definitions={}}return wA(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=ee({},n.definitions[a]||{},o[a]),Fg(a,o[a]),$g()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon;n[a]||(n[a]={}),n[a][c]=l}),n}}]),t}();function Hg(){He.autoAddCss&&!Gg&&(UA(JA()),Gg=!0)}function Kg(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Bg(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!cu){var r=et.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Wg(t){var e=t.prefix,n=e===void 0?"fa":e,r=t.iconName;if(!!r)return jg(tS.definitions,n,r)||jg(Nt.styles,n,r)}function eS(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Wg(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Wg(i||{})),t(r,ee({},n,{mask:i}))}}var tS=new ZA,Gg=!1,Yg={transform:function(e){return XA(e)}},nS=eS(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?pn:n,i=e.symbol,s=i===void 0?!1:i,o=e.mask,a=o===void 0?null:o,c=e.maskId,l=c===void 0?null:c,u=e.title,h=u===void 0?null:u,f=e.titleId,m=f===void 0?null:f,g=e.classes,S=g===void 0?[]:g,E=e.attributes,v=E===void 0?{}:E,w=e.styles,L=w===void 0?{}:w;if(!!t){var V=t.prefix,ae=t.iconName,ie=t.icon;return Kg(ee({type:"icon"},t),function(){return Hg(),He.autoA11y&&(h?v["aria-labelledby"]="".concat(He.replacementClass,"-title-").concat(m||Qo()):(v["aria-hidden"]="true",v.focusable="false")),KA({icons:{main:qg(ie),mask:a?qg(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:ae,transform:ee({},pn,r),symbol:s,title:h,maskId:l,titleId:m,extra:{attributes:v,styles:L,classes:S}})})}}),rS=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?pn:r,s=n.title,o=s===void 0?null:s,a=n.classes,c=a===void 0?[]:a,l=n.attributes,u=l===void 0?{}:l,h=n.styles,f=h===void 0?{}:h;return Kg({type:"text",content:e},function(){return Hg(),WA({content:e,transform:ee({},pn,i),title:o,extra:{attributes:u,styles:f,classes:["".concat(He.familyPrefix,"-layers-text")].concat(_A(c))}})})};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var $S={prefix:"fab",iconName:"facebook",icon:[512,512,[],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},jS={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},BS={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},iS=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function sS(t,e){return e={exports:{}},t(e,e.exports),e.exports}var oS=sS(function(t){(function(e){var n=function(v,w,L){if(!l(w)||h(w)||f(w)||m(w)||c(w))return w;var V,ae=0,ie=0;if(u(w))for(V=[],ie=w.length;ae<ie;ae++)V.push(n(v,w[ae],L));else{V={};for(var be in w)Object.prototype.hasOwnProperty.call(w,be)&&(V[v(be,L)]=n(v,w[be],L))}return V},r=function(v,w){w=w||{};var L=w.separator||"_",V=w.split||/(?=[A-Z])/;return v.split(V).join(L)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var w=i(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},f=function(v){return a.call(v)=="[object RegExp]"},m=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},S=function(v,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?v:function(V,ae){return L(V,v,ae)}},E={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,w){return n(S(i,w),v)},decamelizeKeys:function(v,w){return n(S(o,w),v,w)},pascalizeKeys:function(v,w){return n(S(s,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:e.humps=E})(iS)}),aS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zi=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Zo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cS=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},wu=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)};function lS(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=oS.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function uS(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Eu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Eu(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=uS(u);break;case"style":c.style=lS(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=cS(n,["class","style"]);return ks(t.tag,Zo({},e,{class:i.class,style:Zo({},i.style,o)},i.attrs,a),r)}var Xg=!1;try{Xg=!0}catch{}function hS(){if(!Xg&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function es(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Zi({},t,e):{}}function fS(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Zi(e,"fa-"+t.size,t.size!==null),Zi(e,"fa-rotate-"+t.rotation,t.rotation!==null),Zi(e,"fa-pull-"+t.pull,t.pull!==null),Zi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Qg(t){if(t===null)return null;if((typeof t=="undefined"?"undefined":aS(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var zS=nr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Ie(function(){return Qg(e.icon)}),s=Ie(function(){return es("classes",fS(e))}),o=Ie(function(){return es("transform",typeof e.transform=="string"?Yg.transform(e.transform):e.transform)}),a=Ie(function(){return es("mask",Qg(e.mask))}),c=Ie(function(){return nS(i.value,Zo({},s.value,o.value,a.value,{symbol:e.symbol,title:e.title}))});Jr(c,function(u){if(!u)return hS("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=Ie(function(){return c.value?Eu(c.value.abstract[0],{},r):null});return function(){return l.value}}});nr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=He.familyPrefix,s=Ie(function(){return[i+"-layers"].concat(wu(e.fixedWidth?[i+"-fw"]:[]))});return function(){return ks("div",{class:s.value},r.default?r.default():[])}}});nr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=He.familyPrefix,s=Ie(function(){return es("classes",[].concat(wu(e.counter?[i+"-layers-counter"]:[]),wu(e.position?[i+"-layers-"+e.position]:[])))}),o=Ie(function(){return es("transform",typeof e.transform=="string"?Yg.transform(e.transform):e.transform)}),a=Ie(function(){var l=rS(e.value.toString(),Zo({},o.value,s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Ie(function(){return Eu(a.value,{},r)});return function(){return c.value}}});export{IS as A,zS as B,pS as C,WI as D,xS as E,Lt as F,tn as G,PS as H,vs as I,rv as J,mS as K,OS as L,bS as M,MS as N,TS as O,_S as P,DS as T,NS as V,Ah as a,US as b,vS as c,nr as d,LS as e,SS as f,RS as g,CS as h,AS as i,gS as j,ES as k,dS as l,je as m,ra as n,yS as o,xv as p,wS as q,Vr as r,kS as s,FS as t,VS as u,tS as v,Ky as w,BS as x,jS as y,$S as z};
