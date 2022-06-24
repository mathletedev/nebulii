const fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};fe();const k={};function ge(e){k.context=e}const we=(e,t)=>e===t,be=Symbol("solid-track"),R={equals:we};let ne=se;const T={},_=1,U=2,ie={owned:null,cleanups:null,context:null,owner:null};var b=null;let D=null,w=null,M=null,p=null,m=null,J=0;function j(e,t){const r=w,n=b,i=e.length===0,o=i?ie:{owned:null,cleanups:null,context:null,owner:t||n},s=i?e:()=>e(()=>X(o));b=o,w=null;try{return Q(s,!0)}finally{w=r,b=n}}function $(e,t){t=t?Object.assign({},R,t):R;const r={value:e,observers:null,observerSlots:null,pending:T,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(r.pending!==T?r.pending:r.value)),V(r,i));return[oe.bind(r),n]}function z(e,t,r){const n=W(e,t,!1,_);I(n)}function pe(e,t,r){ne=ve;const n=W(e,t,!1,_);n.user=!0,m?m.push(n):I(n)}function H(e,t,r){r=r?Object.assign({},R,r):R;const n=W(e,t,!0,0);return n.pending=T,n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,I(n),oe.bind(n)}function he(e){if(M)return e();let t;const r=M=[];try{t=e()}finally{M=null}return Q(()=>{for(let n=0;n<r.length;n+=1){const i=r[n];if(i.pending!==T){const o=i.pending;i.pending=T,V(i,o)}}},!1),t}function G(e){let t,r=w;return w=null,t=e(),w=r,t}function me(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function oe(){const e=D;if(this.sources&&(this.state||e)){const t=p;p=null,this.state===_||e?I(this):F(this),p=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function V(e,t,r){if(M)return e.pending===T&&M.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let n=!1;return e.value=t,e.observers&&e.observers.length&&Q(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];n&&D.disposed.has(o),(n&&!o.tState||!n&&!o.state)&&(o.pure?p.push(o):m.push(o),o.observers&&le(o)),n||(o.state=_)}if(p.length>1e6)throw p=[],new Error},!1),t}function I(e){if(!e.fn)return;X(e);const t=b,r=w,n=J;w=b=e,ye(e,e.value,n),w=r,b=t}function ye(e,t,r){let n;try{n=e.fn(t)}catch(i){ae(i)}(!e.updatedAt||e.updatedAt<=r)&&(e.observers&&e.observers.length?V(e,n):e.value=n,e.updatedAt=r)}function W(e,t,r,n=_,i){const o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:r};return b===null||b!==ie&&(b.owned?b.owned.push(o):b.owned=[o]),o}function O(e){const t=D;if(e.state===0||t)return;if(e.state===U||t)return F(e);if(e.suspense&&G(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||t)&&r.push(e);for(let n=r.length-1;n>=0;n--)if(e=r[n],e.state===_||t)I(e);else if(e.state===U||t){const i=p;p=null,F(e,r[0]),p=i}}function Q(e,t){if(p)return e();let r=!1;t||(p=[]),m?r=!0:m=[],J++;try{const n=e();return xe(r),n}catch(n){ae(n)}finally{p=null,r||(m=null)}}function xe(e){p&&(se(p),p=null),!e&&(m.length?he(()=>{ne(m),m=null}):m=null)}function se(e){for(let t=0;t<e.length;t++)O(e[t])}function ve(e){let t,r=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[r++]=i:O(i)}k.context&&ge();const n=e.length;for(t=0;t<r;t++)O(e[t]);for(t=n;t<e.length;t++)O(e[t])}function F(e,t){const r=D;e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];i.sources&&(i.state===_||r?i!==t&&O(i):(i.state===U||r)&&F(i,t))}}function le(e){const t=D;for(let r=0;r<e.observers.length;r+=1){const n=e.observers[r];(!n.state||t)&&(n.state=U,n.pure?p.push(n):m.push(n),n.observers&&le(n))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const r=e.sources.pop(),n=e.sourceSlots.pop(),i=r.observers;if(i&&i.length){const o=i.pop(),s=r.observerSlots.pop();n<i.length&&(o.sourceSlots[s]=n,i[n]=o,r.observerSlots[n]=s)}}if(e.owned){for(t=0;t<e.owned.length;t++)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ae(e){throw e}const ke=Symbol("fallback");function Z(e){for(let t=0;t<e.length;t++)e[t]()}function Se(e,t,r={}){let n=[],i=[],o=[],s=0,l=t.length>1?[]:null;return me(()=>Z(o)),()=>{let d=e()||[],u,a;return d[be],G(()=>{let c=d.length,f,h,C,P,B,x,v,S,E;if(c===0)s!==0&&(Z(o),o=[],n=[],i=[],s=0,l&&(l=[])),r.fallback&&(n=[ke],i[0]=j(ue=>(o[0]=ue,r.fallback())),s=1);else if(s===0){for(i=new Array(c),a=0;a<c;a++)n[a]=d[a],i[a]=j(g);s=c}else{for(C=new Array(c),P=new Array(c),l&&(B=new Array(c)),x=0,v=Math.min(s,c);x<v&&n[x]===d[x];x++);for(v=s-1,S=c-1;v>=x&&S>=x&&n[v]===d[S];v--,S--)C[S]=i[v],P[S]=o[v],l&&(B[S]=l[v]);for(f=new Map,h=new Array(S+1),a=S;a>=x;a--)E=d[a],u=f.get(E),h[a]=u===void 0?-1:u,f.set(E,a);for(u=x;u<=v;u++)E=n[u],a=f.get(E),a!==void 0&&a!==-1?(C[a]=i[u],P[a]=o[u],l&&(B[a]=l[u]),a=h[a],f.set(E,a)):o[u]();for(a=x;a<c;a++)a in C?(i[a]=C[a],o[a]=P[a],l&&(l[a]=B[a],l[a](a))):i[a]=j(g);i=i.slice(0,s=c),n=d.slice(0)}return i});function g(c){if(o[a]=c,l){const[f,h]=$(a);return l[a]=h,t(d[a],f)}return t(d[a])}}}function N(e,t){return G(()=>e(t||{}))}function ce(e){const t="fallback"in e&&{fallback:()=>e.fallback};return H(Se(()=>e.each,e.children,t||void 0))}function $e(e){let t=!1;const r=H(()=>e.when,void 0,{equals:(n,i)=>t?n===i:!n==!i});return H(()=>{const n=r();if(n){const i=e.children;return(t=typeof i=="function"&&i.length>0)?G(()=>i(n)):i}return e.fallback})}function Ce(e,t,r){let n=r.length,i=t.length,o=n,s=0,l=0,d=t[i-1].nextSibling,u=null;for(;s<i||l<o;){if(t[s]===r[l]){s++,l++;continue}for(;t[i-1]===r[o-1];)i--,o--;if(i===s){const a=o<n?l?r[l-1].nextSibling:r[o-l]:d;for(;l<o;)e.insertBefore(r[l++],a)}else if(o===l)for(;s<i;)(!u||!u.has(t[s]))&&t[s].remove(),s++;else if(t[s]===r[o-1]&&r[l]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(r[l++],t[s++].nextSibling),e.insertBefore(r[--o],a),t[i]=r[o]}else{if(!u){u=new Map;let g=l;for(;g<o;)u.set(r[g],g++)}const a=u.get(t[s]);if(a!=null)if(l<a&&a<o){let g=s,c=1,f;for(;++g<i&&g<o&&!((f=u.get(t[g]))==null||f!==a+c);)c++;if(c>a-l){const h=t[s];for(;l<a;)e.insertBefore(r[l++],h)}else e.replaceChild(r[l++],t[s++])}else s++;else t[s++].remove()}}}const ee="_$DX_DELEGATE";function Ne(e,t,r){let n;return j(i=>{n=i,t===document?e():y(t,e(),t.firstChild?null:void 0,r)}),()=>{n(),t.textContent=""}}function L(e,t,r){const n=document.createElement("template");n.innerHTML=e;let i=n.content.firstChild;return r&&(i=i.firstChild),i}function Y(e,t=window.document){const r=t[ee]||(t[ee]=new Set);for(let n=0,i=e.length;n<i;n++){const o=e[n];r.has(o)||(r.add(o),t.addEventListener(o,ze))}}function te(e,t){t==null?e.removeAttribute("class"):e.className=t}function y(e,t,r,n){if(r!==void 0&&!n&&(n=[]),typeof t!="function")return q(e,t,n,r);z(i=>q(e,t(),i,r),n)}function ze(e){const t=`$$${e.type}`;let r=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==r&&Object.defineProperty(e,"target",{configurable:!0,value:r}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return r||document}}),k.registry&&!k.done&&(k.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));r!==null;){const n=r[t];if(n&&!r.disabled){const i=r[`${t}Data`];if(i!==void 0?n.call(r,i,e):n.call(r,e),e.cancelBubble)return}r=r.host&&r.host!==r&&r.host instanceof Node?r.host:r.parentNode}}function q(e,t,r,n,i){for(k.context&&!r&&(r=[...e.childNodes]);typeof r=="function";)r=r();if(t===r)return r;const o=typeof t,s=n!==void 0;if(e=s&&r[0]&&r[0].parentNode||e,o==="string"||o==="number"){if(k.context)return r;if(o==="number"&&(t=t.toString()),s){let l=r[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),r=A(e,r,n,l)}else r!==""&&typeof r=="string"?r=e.firstChild.data=t:r=e.textContent=t}else if(t==null||o==="boolean"){if(k.context)return r;r=A(e,r,n)}else{if(o==="function")return z(()=>{let l=t();for(;typeof l=="function";)l=l();r=q(e,l,r,n)}),()=>r;if(Array.isArray(t)){const l=[];if(K(l,t,i))return z(()=>r=q(e,l,r,n,!0)),()=>r;if(k.context){for(let d=0;d<l.length;d++)if(l[d].parentNode)return r=l}if(l.length===0){if(r=A(e,r,n),s)return r}else Array.isArray(r)?r.length===0?re(e,l,n):Ce(e,r,l):(r&&A(e),re(e,l));r=l}else if(t instanceof Node){if(k.context&&t.parentNode)return r=s?[t]:t;if(Array.isArray(r)){if(s)return r=A(e,r,n,t);A(e,r,null,t)}else r==null||r===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);r=t}}return r}function K(e,t,r){let n=!1;for(let i=0,o=t.length;i<o;i++){let s=t[i],l;if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))n=K(e,s)||n;else if((l=typeof s)=="string")e.push(document.createTextNode(s));else if(l==="function")if(r){for(;typeof s=="function";)s=s();n=K(e,Array.isArray(s)?s:[s])||n}else e.push(s),n=!0;else e.push(document.createTextNode(s.toString()))}return n}function re(e,t,r){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],r)}function A(e,t,r,n){if(r===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(i!==l){const d=l.parentNode===e;!o&&!s?d?e.replaceChild(i,l):e.insertBefore(i,r):d&&l.remove()}else o=!0}}else e.insertBefore(i,r);return[i]}var de=new WebSocket("ws://localhost:8080");const _e=L('<div class="max-w-full mb-4 break-all"><span class="mr-2 px-2 py-1 rounded bg-gray-800"></span></div>'),Ee=e=>(()=>{const t=_e.cloneNode(!0),r=t.firstChild;return y(r,()=>e.data.author),y(t,()=>e.data.content,null),t})(),Ae=L('<div class="w-full flex flex-col"><div class="w-full h-12 flex border-b-4 border-gray-800"><div class="m-auto text-2xl font-cursive"></div></div><div class="w-full p-4 flex-grow overflow-y-scroll"></div><form class="w-full p-4 flex gap-4"><div class="h-10 px-3 flex rounded-lg bg-sky-900"><div class="m-auto"></div></div><input class="h-10 p-3 flex-grow" placeholder="say something..."><button class="w-10 h-10 bg-blue-900">\u2708\uFE0F</button></form></div>'),Te=e=>{const[t,r]=$("");let n;return document.onkeydown=()=>{document.activeElement?.tagName!=="INPUT"&&n.focus()},(()=>{const i=Ae.cloneNode(!0),o=i.firstChild,s=o.firstChild,l=o.nextSibling,d=l.nextSibling,u=d.firstChild,a=u.firstChild,g=u.nextSibling;y(s,()=>e.currentSpace),y(l,N(ce,{get each(){return e.messages},children:f=>N(Ee,{data:f})})),d.addEventListener("submit",f=>{f.preventDefault(),t()!==""&&(de.send(JSON.stringify({author:e.name,content:t()})),r(""))}),y(a,()=>e.name);const c=n;return typeof c=="function"?c(g):n=g,g.$$input=f=>r(f.currentTarget.value),z(()=>g.value=t()),i})()};Y(["input"]);const Le=L('<div class="h-full flex"><div class="m-auto"><div class="w-full text-center text-6xl font-cursive">nebulii</div><div class="h-8"></div><form><input class="h-12 p-4 text-center" placeholder="name"><div class="h-4"></div><button class="w-full h-10 text-center bg-blue-900">enter</button></form></div></div>'),Me=e=>(()=>{const t=Le.cloneNode(!0),r=t.firstChild,n=r.firstChild,i=n.nextSibling,o=i.nextSibling,s=o.firstChild;return o.addEventListener("submit",l=>{l.preventDefault(),e.name!==""&&e.setEntered(!0)}),s.$$input=l=>e.setName(l.currentTarget.value),z(()=>s.value=e.name),t})();Y(["input"]);const Oe=L('<aside class="w-64 h-full flex flex-col border-r-4 border-gray-800"><div><button class="w-full p-2 text-4xl font-cursive">nebulii</button></div><div class="w-full h-1 m-auto mb-4 bg-gray-800"></div><div class="flex-grow overflow-y-scroll"></div><form><input class="h-10 mx-4 mt-4 p-3 rounded-b-none text-center" placeholder="space id" maxlength="8"><div class="mx-4 rounded-b-lg bg-emerald-800"><button class="w-full">enter</button></div></form><div class="m-4 rounded-lg bg-cyan-900"><div class="p-2 text-center"> online</div></div></aside>'),De=L('<div><button class="w-full p-2"></button></div>'),Ie=e=>{const[t,r]=$("");return(()=>{const n=Oe.cloneNode(!0),i=n.firstChild,o=i.firstChild,s=i.nextSibling,l=s.nextSibling,d=l.nextSibling,u=d.firstChild,a=d.nextSibling,g=a.firstChild,c=g.firstChild;return o.$$click=()=>e.setCurrentSpace("core"),y(l,N(ce,{get each(){return e.spaces},children:f=>(()=>{const h=De.cloneNode(!0),C=h.firstChild;return C.$$click=()=>e.setCurrentSpace(f),y(C,f),z(()=>te(h,`mx-4 mb-4 rounded-lg ${f===e.currentSpace?"bg-indigo-900":"bg-gray-800"}`)),h})()})),d.addEventListener("submit",f=>{f.preventDefault(),t()!==""&&(!e.spaces.includes(t())&&t()!=="core"&&e.setSpaces(h=>[...h,t()]),e.setCurrentSpace(t()),r(""))}),u.$$input=f=>r(f.currentTarget.value),y(g,()=>e.onlineCount,c),z(()=>te(i,`m-4 rounded-lg ${e.currentSpace==="core"?"bg-indigo-900":"bg-gray-800"}`)),z(()=>u.value=t()),n})()};Y(["click","input"]);const Pe=L('<div class="h-full flex"></div>'),Be=()=>{const[e,t]=$(""),[r,n]=$(!1),[i,o]=$([]),[s,l]=$([]),[d,u]=$("core"),[a,g]=$(0);return de.onmessage=c=>{Number.isNaN(Number(c.data))?o(f=>[...f,...c.data.split(`
`).map(h=>JSON.parse(h))]):g(parseInt(c.data))},pe(()=>{d(),o([])}),N($e,{get when(){return r()},get fallback(){return N(Me,{get name(){return e()},setName:t,setEntered:n})},get children(){const c=Pe.cloneNode(!0);return y(c,N(Ie,{get spaces(){return s()},setSpaces:l,get currentSpace(){return d()},setCurrentSpace:u,get onlineCount(){return a()}}),null),y(c,N(Te,{get name(){return e()},get messages(){return i()},get currentSpace(){return d()}}),null),c}})};Ne(()=>N(Be,{}),document.getElementById("root"));
