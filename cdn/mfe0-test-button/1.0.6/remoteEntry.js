var mfe0TestButton1_0_6;(()=>{"use strict";var e={538:(e,r,t)=>{var n={".":()=>t.e(833).then(()=>()=>t(833))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then(()=>{throw Error('Module "'+e+'" does not exist in container.')}),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,t.c=r,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((r,n)=>(t.f[n](e,r),r),[])),t.u=e=>""+e+"."+({294:"1d88283c97fb3f4e90e9",833:"9b99da3e7d5a82b387e0",935:"ec23c2275708dde12518"})[e]+".chunk.js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="v1698878068328:";t.l=(n,o,a,i)=>{if(e[n]){e[n].push(o);return}if(void 0!==a)for(var u,s,l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+a){u=d;break}}u||(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",r+a),u.src=n),e[n]=[o];var c=(r,t)=>{u.onerror=u.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(e=>e(t)),r)return r(t)},h=setTimeout(c.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=c.bind(null,u.onerror),u.onload=c.bind(null,u.onload),s&&document.head.appendChild(u)}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={},r={};t.f.remotes=(n,o)=>{t.o(e,n)&&e[n].forEach(e=>{var n=t.R;n||(n=[]);var a=r[e];if(!(n.indexOf(a)>=0)){if(n.push(a),a.p)return o.push(a.p);var i=r=>{r||(r=Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),t.m[e]=()=>{throw r},a.p=0},u=(e,r,t,n,u,s)=>{try{var l=e(r,t);if(!l||!l.then)return u(l,n,s);var f=l.then(e=>u(e,n),i);if(!s)return f;o.push(a.p=f)}catch(e){i(e)}},s=(e,r,t)=>u(r.get,a[1],n,0,l,t),l=r=>{a.p=1,t.m[e]=e=>{e.exports=r()}};u(t,a[2],0,0,(e,r,n)=>e?u(t.I,a[0],0,e,s,n):i(),1)}})}})(),(()=>{t.S={};var e={},r={};t.I=(n,o)=>{o||(o=[]);var a=r[n];if(a||(a=r[n]={}),!(o.indexOf(a)>=0)){if(o.push(a),e[n])return e[n];t.o(t.S,n)||(t.S[n]={});var i=t.S[n],u="v1698878068328",s=(e,r,t,n)=>{var o=i[e]=i[e]||{},a=o[r];if(window.__sharedModules__&&window.__sharedModules__[e]){let i=window.__sharedModules__[e];if(console.log(u,i,"uniqueNameasdasd"),i===u){o[r]={get:t,from:u,eager:!!n,runtimeShared:!0};return}if(a&&!0===a.runtimeShared)return}(!a||!a.loaded&&(!n!=!a.eager?n:u>a.from))&&(o[r]={get:t,from:u,eager:!!n})},l=[];return"default"===n&&(s("react-dom","18.2.0",()=>t.e(935).then(()=>()=>t(935))),s("react","18.2.0",()=>t.e(294).then(()=>()=>t(294)))),l.length?e[n]=Promise.all(l).then(()=>e[n]=1):e[n]=1}}})(),(()=>{t.g.importScripts&&(e=t.g.location+"");var e,r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map(e=>+e==e?+e:e),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+s()+")":1===u?"("+s()+" || "+s()+")":2===u?i.pop()+" "+i.pop():n(u))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(r,t)=>{if(0 in r){t=e(t);var n=r[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,s=!0;;u++,i++){var l,f,d=u<r.length?(typeof r[u])[0]:"";if(i>=t.length||"o"==(f=(typeof(l=t[i]))[0]))return!s||("u"==d?u>n&&!a:""==d!=a);if("u"==f){if(!s||"u"!=d)return!1}else if(s){if(d==f){if(u<=n){if(l!=r[u])return!1}else{if(a?l>r[u]:l<r[u])return!1;l!=r[u]&&(s=!1)}}else if("s"!=d&&"n"!=d){if(a||u<=n)return!1;s=!1,u--}else{if(u<=n||f<d!=a)return!1;s=!1}}else"s"!=d&&"n"!=d&&(s=!1,u--)}}var c=[],h=c.pop.bind(c);for(i=1;i<r.length;i++){var p=r[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,t):!h())}return!!h()},a=(e,t)=>{var n=e[t];let o=window.__sharedModules__&&window.__sharedModules__[t],a=Object.keys(n).reduce((e,r)=>n[r].from===o?r:e,0);return a||Object.keys(n).reduce((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e,0)},i=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",u=(e,r,t,n)=>{var o=a(e,t);return c(e[t][o])},s=(e,r,t,n)=>{var u=a(e,t);return o(n,u)||d(i(e,t,u,n)),c(e[t][u])},l=(e,t,n)=>{var a=e[t],t=Object.keys(a).reduce((e,t)=>o(n,t)&&(!e||r(e,t))?t:e,0);return t&&a[t]},f=(e,r,t,o)=>{var a=e[t];return"No satisfying version ("+n(o)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(a).map(e=>e+" from "+a[e].from).join(", ")},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},c=e=>(e.loaded=1,e.get()),h=e=>function(r,n,o,a){var i=t.I(r);return i&&i.then?i.then(e.bind(e,r,t.S[r],n,o,a)):e(r,t.S[r],n,o,a)},p=h((e,r,n,o)=>r&&t.o(r,n)?u(r,e,n):o()),v=h((e,r,n,o,a)=>r&&t.o(r,n)?s(r,e,n,o):a()),m={},g={416:()=>v("default","react",[1,18,2,0],()=>t.e(294).then(()=>()=>t(294))),82:()=>p("default","react",()=>t.e(294).then(()=>()=>t(294))),113:()=>v("default","react",[0,16,8,0],()=>t.e(294).then(()=>()=>t(294)))},b={833:[82,113],935:[416]};t.f.consumes=(e,r)=>{t.o(b,e)&&b[e].forEach(e=>{if(t.o(m,e))return r.push(m[e]);var n=r=>{m[e]=0,t.m[e]=n=>{delete t.c[e],n.exports=r()}},o=r=>{delete m[e],t.m[e]=n=>{throw delete t.c[e],r}};try{var a=g[e]();a.then?r.push(m[e]=a.then(n).catch(o)):n(a)}catch(e){o(e)}})}})(),(()=>{var e={544:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o){if(o)n.push(o[2]);else{var a=new Promise((t,n)=>o=e[r]=[t,n]);n.push(o[2]=a);var i=t.p+t.u(r),u=Error();t.l(i,n=>{if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}},"chunk-"+r,r)}}};var r=(r,n)=>{var o,a,[i,u,s]=n,l=0;if(i.some(r=>0!==e[r])){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);s&&s(t)}for(r&&r(n);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=globalThis.webpackChunkv1698878068328=globalThis.webpackChunkv1698878068328||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t.nc=void 0,mfe0TestButton1_0_6=t(538)})();
//# sourceMappingURL=remoteEntry.js.map