var mfe0TestApp1_0_11;(()=>{"use strict";var e={538:(e,r,t)=>{var n={".":()=>t.e(705).then(()=>()=>t(705))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then(()=>{throw Error('Module "'+e+'" does not exist in container.')}),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})},175:e=>{e.exports=new Promise((e,r)=>{(function(){if(window["mfe0-test-home"])return Promise.resolve(window["mfe0-test-home"]);if(window.sessionStorage.getItem("manifest")){let e=JSON.parse(window.sessionStorage.getItem("manifest"));return"object"==typeof e["mfe0-test-app"]&&e["mfe0-test-app"]["mfe0-test-home"]?Promise.resolve(e["mfe0-test-app"]["mfe0-test-home"]):Promise.resolve(e["mfe0-test-home"].version)}return window.manifest?"object"==typeof window.manifest["mfe0-test-app"]&&window.manifest["mfe0-test-app"]["mfe0-test-home"]?Promise.resolve(window.manifest["mfe0-test-app"]["mfe0-test-home"]):Promise.resolve(window.manifest["mfe0-test-home"].version):Promise.resolve("1.0.5")})().then(function(n){var o="mfe0TestHome"+(n.includes("http")?"":n).replaceAll(".","_"),i=n.includes("http")?n:"http://localhost:3020/mfe0-test-home/"+n+"/remoteEntry.js";console.log({name:o,url:i}),new Promise(function(e,r){var n=Error();if(void 0!==window[o])return e();t.l(i,function(t){if(void 0!==window[o])return e();var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+i+": "+a+")",n.name="ScriptExternalLoadError",n.type=i,n.request=a,r(n)},o)}).then(function(){e(window[o])}).catch(r)})})}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,t.c=r,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((r,n)=>(t.f[n](e,r),r),[])),t.u=e=>""+e+"."+({294:"fc3f8316cad525dea674",705:"3e7af7a43ece31268bf1",935:"a5999d81bdd2886396a1"})[e]+".chunk.js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="v1698878057709:";t.l=(n,o,i,a)=>{if(e[n]){e[n].push(o);return}if(void 0!==i)for(var s,f,u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+i){s=d;break}}s||(f=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+i),s.src=n),e[n]=[o];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach(e=>e(t)),r)return r(t)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),f&&document.head.appendChild(s)}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={705:[510]},r={510:["default",".",175]};t.f.remotes=(n,o)=>{t.o(e,n)&&e[n].forEach(e=>{var n=t.R;n||(n=[]);var i=r[e];if(!(n.indexOf(i)>=0)){if(n.push(i),i.p)return o.push(i.p);var a=r=>{r||(r=Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+i[1]+'" from '+i[2]),t.m[e]=()=>{throw r},i.p=0},s=(e,r,t,n,s,f)=>{try{var u=e(r,t);if(!u||!u.then)return s(u,n,f);var l=u.then(e=>s(e,n),a);if(!f)return l;o.push(i.p=l)}catch(e){a(e)}},f=(e,r,t)=>s(r.get,i[1],n,0,u,t),u=r=>{i.p=1,t.m[e]=e=>{e.exports=r()}};s(t,i[2],0,0,(e,r,n)=>e?s(t.I,i[0],0,e,f,n):a(),1)}})}})(),(()=>{t.S={};var e={},r={};t.I=(n,o)=>{o||(o=[]);var i=r[n];if(i||(i=r[n]={}),!(o.indexOf(i)>=0)){if(o.push(i),e[n])return e[n];t.o(t.S,n)||(t.S[n]={});var a=t.S[n],s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f="v1698878057709",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];if(window.__sharedModules__&&window.__sharedModules__[e]){let a=window.__sharedModules__[e];if(console.log(f,a,"uniqueNameasdasd"),a===f){o[r]={get:t,from:f,eager:!!n,runtimeShared:!0};return}if(i&&!0===i.runtimeShared)return}(!i||!i.loaded&&(!n!=!i.eager?n:f>i.from))&&(o[r]={get:t,from:f,eager:!!n})},l=[];return"default"===n&&(u("react-dom","18.2.0",()=>t.e(935).then(()=>()=>t(935))),u("react","18.2.0",()=>t.e(294).then(()=>()=>t(294))),(e=>{var r=e=>s("Initialization of sharing external failed: "+e);try{var i=t(175);if(!i)return;var a=e=>e&&e.init&&e.init(t.S[n],o);if(i.then)return l.push(i.then(a,r));var f=a(i);if(f&&f.then)return l.push(f.catch(r))}catch(e){r(e)}})(0)),l.length?e[n]=Promise.all(l).then(()=>e[n]=1):e[n]=1}}})(),(()=>{t.g.importScripts&&(e=t.g.location+"");var e,r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map(e=>+e==e?+e:e),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],i=(typeof o)[0];if(n>=t.length)return"u"==i;var a=t[n],s=(typeof a)[0];if(i!=s)return"o"==i&&"n"==s||"s"==s||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,i=1;i<e.length;i++)o--,t+="u"==(typeof(s=e[i]))[0]?"-":(o>0?".":"")+(o=2,s);return t}var a=[];for(i=1;i<e.length;i++){var s=e[i];a.push(0===s?"not("+f()+")":1===s?"("+f()+" || "+f()+")":2===s?a.pop()+" "+a.pop():n(s))}return f();function f(){return a.pop().replace(/^\((.+)\)$/,"$1")}},o=(r,t)=>{if(0 in r){t=e(t);var n=r[0],i=n<0;i&&(n=-n-1);for(var a=0,s=1,f=!0;;s++,a++){var u,l,d=s<r.length?(typeof r[s])[0]:"";if(a>=t.length||"o"==(l=(typeof(u=t[a]))[0]))return!f||("u"==d?s>n&&!i:""==d!=i);if("u"==l){if(!f||"u"!=d)return!1}else if(f){if(d==l){if(s<=n){if(u!=r[s])return!1}else{if(i?u>r[s]:u<r[s])return!1;u!=r[s]&&(f=!1)}}else if("s"!=d&&"n"!=d){if(i||s<=n)return!1;f=!1,s--}else{if(s<=n||l<d!=i)return!1;f=!1}}else"s"!=d&&"n"!=d&&(f=!1,s--)}}var p=[],h=p.pop.bind(p);for(a=1;a<r.length;a++){var c=r[a];p.push(1==c?h()|h():2==c?h()&h():c?o(c,t):!h())}return!!h()},i=(e,t)=>{var n=e[t];let o=window.__sharedModules__&&window.__sharedModules__[t];return Object.keys(n).reduce((e,r)=>n[r].from===o?r:e,0)||Object.keys(n).reduce((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e,0)},a=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",s=(e,r,t,n)=>{var o=i(e,t);return l(e[t][o])},f=(e,r,t,n)=>{var s=i(e,t);return o(n,s)||u(a(e,t,s,n)),l(e[t][s])},u=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},l=e=>(e.loaded=1,e.get()),d=e=>function(r,n,o,i){var a=t.I(r);return a&&a.then?a.then(e.bind(e,r,t.S[r],n,o,i)):e(r,t.S[r],n,o,i)},p=d((e,r,n,o)=>r&&t.o(r,n)?s(r,e,n):o()),h=d((e,r,n,o,i)=>r&&t.o(r,n)?f(r,e,n,o):i()),c={},m={416:()=>h("default","react",[1,18,2,0],()=>t.e(294).then(()=>()=>t(294))),82:()=>p("default","react",()=>t.e(294).then(()=>()=>t(294)))},v={705:[82],935:[416]};t.f.consumes=(e,r)=>{t.o(v,e)&&v[e].forEach(e=>{if(t.o(c,e))return r.push(c[e]);var n=r=>{c[e]=0,t.m[e]=n=>{delete t.c[e],n.exports=r()}},o=r=>{delete c[e],t.m[e]=n=>{throw delete t.c[e],r}};try{var i=m[e]();i.then?r.push(c[e]=i.then(n).catch(o)):n(i)}catch(e){o(e)}})}})(),(()=>{var e={927:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o){if(o)n.push(o[2]);else{var i=new Promise((t,n)=>o=e[r]=[t,n]);n.push(o[2]=i);var a=t.p+t.u(r),s=Error();t.l(a,n=>{if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}},"chunk-"+r,r)}}};var r=(r,n)=>{var o,i,[a,s,f]=n,u=0;if(a.some(r=>0!==e[r])){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);f&&f(t)}for(r&&r(n);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=globalThis.webpackChunkv1698878057709=globalThis.webpackChunkv1698878057709||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),mfe0TestApp1_0_11=t(538)})();