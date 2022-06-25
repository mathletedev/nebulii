const Se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};Se();const _={};function Le(e){_.context=e}const _e=(e,t)=>e===t,Ne=Symbol("solid-track"),K={equals:_e};let be=pe;const H={},T=1,W=2,he={owned:null,cleanups:null,context:null,owner:null};var C=null;let Z=null,p=null,I=null,k=null,L=null,te=0;function F(e,t){const r=p,n=C,i=e.length===0,o=i?he:{owned:null,cleanups:null,context:null,owner:t||n},l=i?e:()=>e(()=>oe(o));C=o,p=null;try{return ie(l,!0)}finally{p=r,C=n}}function S(e,t){t=t?Object.assign({},K,t):K;const r={value:e,observers:null,observerSlots:null,pending:H,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(r.pending!==H?r.pending:r.value)),re(r,i));return[me.bind(r),n]}function $(e,t,r){const n=ne(e,t,!1,T);j(n)}function Ae(e,t,r){be=Oe;const n=ne(e,t,!1,T);n.user=!0,L?L.push(n):j(n)}function q(e,t,r){r=r?Object.assign({},K,r):K;const n=ne(e,t,!0,0);return n.pending=H,n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,j(n),me.bind(n)}function Ee(e){if(I)return e();let t;const r=I=[];try{t=e()}finally{I=null}return ie(()=>{for(let n=0;n<r.length;n+=1){const i=r[n];if(i.pending!==H){const o=i.pending;i.pending=H,re(i,o)}}},!1),t}function G(e){let t,r=p;return p=null,t=e(),p=r,t}function ze(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function me(){const e=Z;if(this.sources&&(this.state||e)){const t=k;k=null,this.state===T||e?j(this):J(this),k=t}if(p){const t=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(t)):(p.sources=[this],p.sourceSlots=[t]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function re(e,t,r){if(I)return e.pending===H&&I.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let n=!1;return e.value=t,e.observers&&e.observers.length&&ie(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];n&&Z.disposed.has(o),(n&&!o.tState||!n&&!o.state)&&(o.pure?k.push(o):L.push(o),o.observers&&ye(o)),n||(o.state=T)}if(k.length>1e6)throw k=[],new Error},!1),t}function j(e){if(!e.fn)return;oe(e);const t=C,r=p,n=te;p=C=e,Me(e,e.value,n),p=r,C=t}function Me(e,t,r){let n;try{n=e.fn(t)}catch(i){xe(i)}(!e.updatedAt||e.updatedAt<=r)&&(e.observers&&e.observers.length?re(e,n):e.value=n,e.updatedAt=r)}function ne(e,t,r,n=T,i){const o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:C,context:null,pure:r};return C===null||C!==he&&(C.owned?C.owned.push(o):C.owned=[o]),o}function P(e){const t=Z;if(e.state===0||t)return;if(e.state===W||t)return J(e);if(e.suspense&&G(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<te);)(e.state||t)&&r.push(e);for(let n=r.length-1;n>=0;n--)if(e=r[n],e.state===T||t)j(e);else if(e.state===W||t){const i=k;k=null,J(e,r[0]),k=i}}function ie(e,t){if(k)return e();let r=!1;t||(k=[]),L?r=!0:L=[],te++;try{const n=e();return Te(r),n}catch(n){xe(n)}finally{k=null,r||(L=null)}}function Te(e){k&&(pe(k),k=null),!e&&(L.length?Ee(()=>{be(L),L=null}):L=null)}function pe(e){for(let t=0;t<e.length;t++)P(e[t])}function Oe(e){let t,r=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[r++]=i:P(i)}_.context&&Le();const n=e.length;for(t=0;t<r;t++)P(e[t]);for(t=n;t<e.length;t++)P(e[t])}function J(e,t){const r=Z;e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];i.sources&&(i.state===T||r?i!==t&&P(i):(i.state===W||r)&&J(i,t))}}function ye(e){const t=Z;for(let r=0;r<e.observers.length;r+=1){const n=e.observers[r];(!n.state||t)&&(n.state=W,n.pure?k.push(n):L.push(n),n.observers&&ye(n))}}function oe(e){let t;if(e.sources)for(;e.sources.length;){const r=e.sources.pop(),n=e.sourceSlots.pop(),i=r.observers;if(i&&i.length){const o=i.pop(),l=r.observerSlots.pop();n<i.length&&(o.sourceSlots[l]=n,i[n]=o,r.observerSlots[n]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)oe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function xe(e){throw e}const He=Symbol("fallback");function se(e){for(let t=0;t<e.length;t++)e[t]()}function De(e,t,r={}){let n=[],i=[],o=[],l=0,s=t.length>1?[]:null;return ze(()=>se(o)),()=>{let d=e()||[],c,a;return d[Ne],G(()=>{let u=d.length,y,w,N,E,z,v,m,g,b;if(u===0)l!==0&&(se(o),o=[],n=[],i=[],l=0,s&&(s=[])),r.fallback&&(n=[He],i[0]=F(M=>(o[0]=M,r.fallback())),l=1);else if(l===0){for(i=new Array(u),a=0;a<u;a++)n[a]=d[a],i[a]=F(f);l=u}else{for(N=new Array(u),E=new Array(u),s&&(z=new Array(u)),v=0,m=Math.min(l,u);v<m&&n[v]===d[v];v++);for(m=l-1,g=u-1;m>=v&&g>=v&&n[m]===d[g];m--,g--)N[g]=i[m],E[g]=o[m],s&&(z[g]=s[m]);for(y=new Map,w=new Array(g+1),a=g;a>=v;a--)b=d[a],c=y.get(b),w[a]=c===void 0?-1:c,y.set(b,a);for(c=v;c<=m;c++)b=n[c],a=y.get(b),a!==void 0&&a!==-1?(N[a]=i[c],E[a]=o[c],s&&(z[a]=s[c]),a=w[a],y.set(b,a)):o[c]();for(a=v;a<u;a++)a in N?(i[a]=N[a],o[a]=E[a],s&&(s[a]=z[a],s[a](a))):i[a]=F(f);i=i.slice(0,l=u),n=d.slice(0)}return i});function f(u){if(o[a]=u,s){const[y,w]=S(a);return s[a]=w,t(d[a],y)}return t(d[a])}}}function x(e,t){return G(()=>e(t||{}))}function ve(e){const t="fallback"in e&&{fallback:()=>e.fallback};return q(De(()=>e.each,e.children,t||void 0))}function V(e){let t=!1;const r=q(()=>e.when,void 0,{equals:(n,i)=>t?n===i:!n==!i});return q(()=>{const n=r();if(n){const i=e.children;return(t=typeof i=="function"&&i.length>0)?G(()=>i(n)):i}return e.fallback})}const Be=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ie=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Be]),Pe=new Set(["innerHTML","textContent","innerText","children"]),Ze={className:"class",htmlFor:"for"},ae={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},je=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Re={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ve(e,t){return q(e,void 0,t?void 0:{equals:t})}function Fe(e,t,r){let n=r.length,i=t.length,o=n,l=0,s=0,d=t[i-1].nextSibling,c=null;for(;l<i||s<o;){if(t[l]===r[s]){l++,s++;continue}for(;t[i-1]===r[o-1];)i--,o--;if(i===l){const a=o<n?s?r[s-1].nextSibling:r[o-s]:d;for(;s<o;)e.insertBefore(r[s++],a)}else if(o===s)for(;l<i;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===r[o-1]&&r[s]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(r[s++],t[l++].nextSibling),e.insertBefore(r[--o],a),t[i]=r[o]}else{if(!c){c=new Map;let f=s;for(;f<o;)c.set(r[f],f++)}const a=c.get(t[l]);if(a!=null)if(s<a&&a<o){let f=l,u=1,y;for(;++f<i&&f<o&&!((y=c.get(t[f]))==null||y!==a+u);)u++;if(u>a-s){const w=t[l];for(;s<a;)e.insertBefore(r[s++],w)}else e.replaceChild(r[s++],t[l++])}else l++;else t[l++].remove()}}}const ce="_$DX_DELEGATE";function Ue(e,t,r){let n;return F(i=>{n=i,t===document?e():h(t,e(),t.firstChild?null:void 0,r)}),()=>{n(),t.textContent=""}}function A(e,t,r){const n=document.createElement("template");n.innerHTML=e;let i=n.content.firstChild;return r&&(i=i.firstChild),i}function R(e,t=window.document){const r=t[ce]||(t[ce]=new Set);for(let n=0,i=e.length;n<i;n++){const o=e[n];r.has(o)||(r.add(o),t.addEventListener(o,Ge))}}function U(e,t,r){r==null?e.removeAttribute(t):e.setAttribute(t,r)}function Ke(e,t,r,n){n==null?e.removeAttributeNS(t,r):e.setAttributeNS(t,r,n)}function X(e,t){t==null?e.removeAttribute("class"):e.className=t}function We(e,t,r,n){if(n)Array.isArray(r)?(e[`$$${t}`]=r[0],e[`$$${t}Data`]=r[1]):e[`$$${t}`]=r;else if(Array.isArray(r)){const i=r[0];e.addEventListener(t,r[0]=o=>i.call(e,r[1],o))}else e.addEventListener(t,r)}function qe(e,t,r={}){const n=Object.keys(t||{}),i=Object.keys(r);let o,l;for(o=0,l=i.length;o<l;o++){const s=i[o];!s||s==="undefined"||t[s]||(ue(e,s,!1),delete r[s])}for(o=0,l=n.length;o<l;o++){const s=n[o],d=!!t[s];!s||s==="undefined"||r[s]===d||!d||(ue(e,s,!0),r[s]=d)}return r}function Ce(e,t,r={}){const n=e.style,i=typeof r=="string";if(t==null&&i||typeof t=="string")return n.cssText=t;i&&(n.cssText=void 0,r={}),t||(t={});let o,l;for(l in r)t[l]==null&&n.removeProperty(l),delete r[l];for(l in t)o=t[l],o!==r[l]&&(n.setProperty(l,o),r[l]=o);return r}function de(e,t,r,n){typeof t=="function"?$(i=>ge(e,t(),i,r,n)):ge(e,t,void 0,r,n)}function h(e,t,r,n){if(r!==void 0&&!n&&(n=[]),typeof t!="function")return D(e,t,n,r);$(i=>D(e,t(),i,r),n)}function Je(e,t,r,n,i={},o=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;fe(e,l,null,i[l],r,o)}for(const l in t){if(l==="children"){n||D(e,t.children);continue}const s=t[l];i[l]=fe(e,l,s,i[l],r,o)}}function Xe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,r)=>r.toUpperCase())}function ue(e,t,r){const n=t.trim().split(/\s+/);for(let i=0,o=n.length;i<o;i++)e.classList.toggle(n[i],r)}function fe(e,t,r,n,i,o){let l,s,d;if(t==="style")return Ce(e,r,n);if(t==="classList")return qe(e,r,n);if(r===n)return n;if(t==="ref")o||r(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);n&&e.removeEventListener(c,n),r&&e.addEventListener(c,r)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);n&&e.removeEventListener(c,n,!0),r&&e.addEventListener(c,r,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),a=je.has(c);if(!a&&n){const f=Array.isArray(n)?n[0]:n;e.removeEventListener(c,f)}(a||r)&&(We(e,c,r,a),a&&R([c]))}else if((d=Pe.has(t))||!i&&(ae[t]||(s=Ie.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?X(e,r):l&&!s&&!d?e[Xe(t)]=r:e[ae[t]||t]=r;else{const c=i&&t.indexOf(":")>-1&&Re[t.split(":")[0]];c?Ke(e,c,t,r):U(e,Ze[t]||t,r)}return r}function Ge(e){const t=`$$${e.type}`;let r=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==r&&Object.defineProperty(e,"target",{configurable:!0,value:r}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return r||document}}),_.registry&&!_.done&&(_.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));r!==null;){const n=r[t];if(n&&!r.disabled){const i=r[`${t}Data`];if(i!==void 0?n.call(r,i,e):n.call(r,e),e.cancelBubble)return}r=r.host&&r.host!==r&&r.host instanceof Node?r.host:r.parentNode}}function ge(e,t,r={},n,i){return t||(t={}),!i&&"children"in t&&$(()=>r.children=D(e,t.children,r.children)),t.ref&&t.ref(e),$(()=>Je(e,t,n,!0,r,!0)),r}function D(e,t,r,n,i){for(_.context&&!r&&(r=[...e.childNodes]);typeof r=="function";)r=r();if(t===r)return r;const o=typeof t,l=n!==void 0;if(e=l&&r[0]&&r[0].parentNode||e,o==="string"||o==="number"){if(_.context)return r;if(o==="number"&&(t=t.toString()),l){let s=r[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),r=O(e,r,n,s)}else r!==""&&typeof r=="string"?r=e.firstChild.data=t:r=e.textContent=t}else if(t==null||o==="boolean"){if(_.context)return r;r=O(e,r,n)}else{if(o==="function")return $(()=>{let s=t();for(;typeof s=="function";)s=s();r=D(e,s,r,n)}),()=>r;if(Array.isArray(t)){const s=[];if(Y(s,t,i))return $(()=>r=D(e,s,r,n,!0)),()=>r;if(_.context){for(let d=0;d<s.length;d++)if(s[d].parentNode)return r=s}if(s.length===0){if(r=O(e,r,n),l)return r}else Array.isArray(r)?r.length===0?we(e,s,n):Fe(e,r,s):(r&&O(e),we(e,s));r=s}else if(t instanceof Node){if(_.context&&t.parentNode)return r=l?[t]:t;if(Array.isArray(r)){if(l)return r=O(e,r,n,t);O(e,r,null,t)}else r==null||r===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);r=t}}return r}function Y(e,t,r){let n=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],s;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))n=Y(e,l)||n;else if((s=typeof l)=="string")e.push(document.createTextNode(l));else if(s==="function")if(r){for(;typeof l=="function";)l=l();n=Y(e,Array.isArray(l)?l:[l])||n}else e.push(l),n=!0;else e.push(document.createTextNode(l.toString()))}return n}function we(e,t,r){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],r)}function O(e,t,r,n){if(r===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(i!==s){const d=s.parentNode===e;!o&&!l?d?e.replaceChild(i,s):e.insertBefore(i,r):d&&s.remove()}else o=!0}}else e.insertBefore(i,r);return[i]}const Qe=A('<svg fill="currentColor" strokeWidth="0" xmlns="http://www.w3.org/2000/svg"></svg>'),Ye=A("<title></title>");function B(e,t){return(()=>{const r=Qe.cloneNode(!0);return de(r,()=>e.a,!0,!0),de(r,t,!0,!0),h(r,(()=>{const n=Ve(()=>!!t.title,!0);return()=>n()&&(()=>{const i=Ye.cloneNode(!0);return h(i,()=>t.title),i})()})()),$(n=>{const i=e.a.stroke,o={...t.style,overflow:"visible",color:t.color},l=t.size||"1em",s=t.size||"1em",d=e.c;return i!==n._v$&&U(r,"stroke",n._v$=i),n._v$2=Ce(r,o,n._v$2),l!==n._v$3&&U(r,"height",n._v$3=l),s!==n._v$4&&U(r,"width",n._v$4=s),d!==n._v$5&&(r.innerHTML=n._v$5=d),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),r})()}function et(e){return B({a:{stroke:"none",viewBox:"0 0 20 20",fill:"none"},c:'<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071ZM9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289L8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289C10.0976 4.68342 10.0976 5.31658 9.70711 5.70711L5.41421 10L9.70711 14.2929C10.0976 14.6834 10.0976 15.3166 9.70711 15.7071Z" fill="currentColor"></path>'},e)}function tt(e){return B({a:{stroke:"none",viewBox:"0 0 20 20",fill:"none"},c:'<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 15.7071C9.90237 15.3166 9.90237 14.6834 10.2929 14.2929L14.5858 10L10.2929 5.70711C9.90237 5.31658 9.90237 4.68342 10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289L16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10.7071 9.29289C11.0976 9.68342 11.0976 10.3166 10.7071 10.7071L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071Z" fill="currentColor"></path>'},e)}function rt(e){return B({a:{stroke:"none",viewBox:"0 0 20 20",fill:"none"},c:'<path fill-rule="evenodd" clip-rule="evenodd" d="M4.08296 9H6.02863C6.11783 7.45361 6.41228 6.02907 6.86644 4.88228C5.41752 5.77135 4.37513 7.25848 4.08296 9ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 4C9.92395 4 9.76787 4.03173 9.5347 4.26184C9.29723 4.4962 9.03751 4.8849 8.79782 5.44417C8.40914 6.3511 8.12491 7.58559 8.03237 9H11.9676C11.8751 7.58559 11.5909 6.3511 11.2022 5.44417C10.9625 4.8849 10.7028 4.4962 10.4653 4.26184C10.2321 4.03173 10.076 4 10 4ZM13.9714 9C13.8822 7.45361 13.5877 6.02907 13.1336 4.88228C14.5825 5.77135 15.6249 7.25848 15.917 9H13.9714ZM11.9676 11H8.03237C8.12491 12.4144 8.40914 13.6489 8.79782 14.5558C9.03751 15.1151 9.29723 15.5038 9.5347 15.7382C9.76787 15.9683 9.92395 16 10 16C10.076 16 10.2321 15.9683 10.4653 15.7382C10.7028 15.5038 10.9625 15.1151 11.2022 14.5558C11.5909 13.6489 11.8751 12.4144 11.9676 11ZM13.1336 15.1177C13.5877 13.9709 13.8822 12.5464 13.9714 11H15.917C15.6249 12.7415 14.5825 14.2287 13.1336 15.1177ZM6.86644 15.1177C6.41228 13.9709 6.11783 12.5464 6.02863 11H4.08296C4.37513 12.7415 5.41752 14.2287 6.86644 15.1177Z" fill="currentColor"></path>'},e)}function nt(e){return B({a:{stroke:"none",viewBox:"0 0 20 20",fill:"none"},c:'<path d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z" fill="currentColor"></path>'},e)}function it(e){return B({a:{stroke:"none",viewBox:"0 0 20 20",fill:"none"},c:'<path d="M10.8944 2.55279C10.725 2.214 10.3788 2 10 2C9.62124 2 9.27498 2.214 9.10558 2.55279L2.10558 16.5528C1.92823 16.9075 1.97724 17.3335 2.2305 17.6386C2.48376 17.9438 2.89342 18.0705 3.27473 17.9615L8.27472 16.533C8.70402 16.4103 9 16.0179 9 15.5714V11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V15.5714C11 16.0179 11.296 16.4103 11.7253 16.533L16.7253 17.9615C17.1066 18.0705 17.5163 17.9438 17.7695 17.6386C18.0228 17.3335 18.0718 16.9075 17.8944 16.5528L10.8944 2.55279Z" fill="currentColor"></path>'},e)}function ot(e){return B({a:{stroke:"none",viewBox:"0 0 20 20",fill:"none"},c:'<path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="currentColor"></path>'},e)}var ee=new WebSocket("wss://nebulii.herokuapp.com");const lt=A('<div class="max-w-full mb-4 break-all"><span class="mr-2 px-2 py-1 rounded bg-gray-800"></span></div>'),st=e=>(()=>{const t=lt.cloneNode(!0),r=t.firstChild;return h(r,()=>e.data.author),h(t,()=>e.data.content,null),t})(),at=A('<div class="w-full flex flex-col"><div class="w-full h-12 flex border-b-4 border-gray-800"><div class="m-auto text-2xl font-cursive"></div></div><div class="w-full p-4 flex-grow overflow-y-scroll"></div><form class="w-full p-4 flex gap-4"><div class="h-10 px-3 flex rounded-lg bg-sky-900"><div class="m-auto"></div></div><input class="h-10 min-w-0 p-3 flex-grow" placeholder="say something..."><button class="w-10 h-10 flex bg-blue-900"></button></form></div>'),ct=e=>{const[t,r]=S("");let n;return document.onkeydown=()=>{document.activeElement?.tagName!=="INPUT"&&n.focus()},(()=>{const i=at.cloneNode(!0),o=i.firstChild,l=o.firstChild,s=o.nextSibling,d=s.nextSibling,c=d.firstChild,a=c.firstChild,f=c.nextSibling,u=f.nextSibling;h(l,()=>e.currentSpace),h(s,x(ve,{get each(){return e.messages},children:w=>x(st,{data:w})})),d.addEventListener("submit",w=>{w.preventDefault(),t()!==""&&(ee.send(JSON.stringify({action:"send-message",author:e.name,content:t()})),r(""))}),h(a,()=>e.name);const y=n;return typeof y=="function"?y(f):n=f,f.$$input=w=>r(w.currentTarget.value),h(u,x(it,{class:"m-auto"})),$(()=>f.value=t()),i})()};R(["input"]);const dt=A('<div class="h-full flex"><div class="m-auto"><div class="w-full text-center text-6xl font-cursive">nebulii</div><div class="h-8"></div><form><input class="h-12 p-4 text-center" placeholder="name"><div class="h-4"></div><button class="w-full h-10 text-center bg-blue-900">enter</button></form></div></div>'),ut=e=>(()=>{const t=dt.cloneNode(!0),r=t.firstChild,n=r.firstChild,i=n.nextSibling,o=i.nextSibling,l=o.firstChild;return o.addEventListener("submit",s=>{s.preventDefault(),e.name!==""&&e.setEntered(!0)}),l.$$input=s=>e.setName(s.currentTarget.value),$(()=>l.value=e.name),t})();R(["input"]);const ft=A('<aside class="absolute md:static w-64 md:w-80 h-full flex flex-col border-r-4 border-gray-800 bg-gray-900"><div><button class="w-full p-2 text-4xl font-cursive">nebulii</button></div><div class="w-full h-1 m-auto mb-4 bg-gray-800"></div><div class="flex-grow overflow-y-scroll"></div><form><div class="mx-4"><input class="w-full h-10 mt-4 p-3 rounded-b-none text-center" placeholder="space id" maxlength="8"></div><div class="mx-4 rounded-b-lg bg-emerald-800"><button class="w-full">enter</button></div></form><div class="mx-4 mt-4 rounded-t-lg text-center bg-gray-800">online</div><div class="h-8 mx-4 mb-4 flex"><div class="w-1/2 rounded-bl-lg bg-blue-900"><div class="absolute w-8 h-8 flex"></div><div class="h-full flex"><div class="m-auto"></div></div></div><div class="w-1/2 rounded-br-lg text-center bg-sky-900"><div class="absolute w-8 h-8 flex"></div><div class="h-full flex"><div class="m-auto"></div></div></div></div></aside>'),gt=A('<div><button class="absolute w-10 h-10 flex rounded-r-none"></button><button class="w-full h-full"></button></div>'),wt=e=>{const[t,r]=S("");return(()=>{const n=ft.cloneNode(!0),i=n.firstChild,o=i.firstChild,l=i.nextSibling,s=l.nextSibling,d=s.nextSibling,c=d.firstChild,a=c.firstChild,f=d.nextSibling,u=f.nextSibling,y=u.firstChild,w=y.firstChild,N=w.nextSibling,E=N.firstChild,z=y.nextSibling,v=z.firstChild,m=v.nextSibling,g=m.firstChild;return o.$$click=()=>e.setCurrentSpace("core"),h(s,x(ve,{get each(){return e.spaces},children:b=>(()=>{const M=gt.cloneNode(!0),Q=M.firstChild,le=Q.nextSibling;return Q.$$click=()=>{e.setSpaces(ke=>ke.filter($e=>$e!==b)),b===e.currentSpace&&e.setCurrentSpace("core")},h(Q,x(ot,{class:"m-auto"})),le.$$click=()=>e.setCurrentSpace(b),h(le,b),$(()=>X(M,`h-10 mx-4 mb-4 rounded-lg ${b===e.currentSpace?"bg-indigo-900":"bg-gray-800"}`)),M})()})),d.addEventListener("submit",b=>{b.preventDefault(),t()!==""&&(!e.spaces.includes(t())&&t()!=="core"&&e.setSpaces(M=>[...M,t()]),e.setCurrentSpace(t()),r(""))}),a.$$input=b=>r(b.currentTarget.value),h(w,x(rt,{class:"m-auto"})),h(E,()=>e.serverOnlineCount),h(v,x(nt,{class:"m-auto"})),h(g,()=>e.roomOnlineCount),$(()=>X(i,`m-4 rounded-lg ${e.currentSpace==="core"?"bg-indigo-900":"bg-gray-800"}`)),$(()=>a.value=t()),n})()};R(["click","input"]);const bt=A("<button></button>"),ht=A('<div class="h-full flex"></div>'),mt=()=>{const[e,t]=S(""),[r,n]=S(!1),[i,o]=S([]),[l,s]=S([]),[d,c]=S("core"),[a,f]=S(0),[u,y]=S(0),[w,N]=S(!1),[E,z]=S(document.body.clientWidth);ee.onmessage=m=>{const g=JSON.parse(m.data);switch(g.action){case"send-message":o(b=>[...b,g]);break;case"server-update-count":f(parseInt(g.content));break;case"room-update-count":y(parseInt(g.content));break}},window.onresize=()=>z(document.body.clientWidth),Ae(()=>{ee.send(JSON.stringify({action:"join-room",author:"",content:d()})),o([])});const v=()=>E()>768;return x(V,{get when(){return r()},get fallback(){return x(ut,{get name(){return e()},setName:t,setEntered:n})},get children(){const m=ht.cloneNode(!0);return h(m,x(V,{get when(){return w()||v()},get children(){return x(wt,{get spaces(){return l()},setSpaces:s,get currentSpace(){return d()},setCurrentSpace:c,get serverOnlineCount(){return a()},get roomOnlineCount(){return u()}})}}),null),h(m,x(ct,{get name(){return e()},get messages(){return i()},get currentSpace(){return d()}}),null),h(m,x(V,{get when(){return!v()},get children(){const g=bt.cloneNode(!0);return g.$$click=()=>N(b=>!b),h(g,x(V,{get when(){return w()},get fallback(){return x(tt,{class:"m-auto"})},get children(){return x(et,{class:"m-auto"})}})),$(()=>X(g,`absolute ${w()?"left-64":"left-0"} top-0 w-12 h-12 flex rounded-l-none rounded-t-none border-r-4 border-b-4 border-gray-800 bg-blue-900`)),g}}),null),m}})};R(["click"]);Ue(()=>x(mt,{}),document.getElementById("root"));