(()=>{var e={120:(e,r,t)=>{t.e(230).then(t.bind(t,230))},399:e=>{"use strict";e.exports=new Promise((e,r)=>{(function(){if(window.sessionStorage.getItem("manifest")){let e=JSON.parse(window.sessionStorage.getItem("manifest"));return"object"==typeof e["mfe0-test-app"]&&e["mfe0-test-app"]["mfe0-test-home"]?Promise.resolve(e["mfe0-test-app"]["mfe0-test-home"]):Promise.resolve(e["mfe0-test-home"])}return window.manifest?"object"==typeof window.manifest["mfe0-test-app"]&&window.manifest["mfe0-test-app"]["mfe0-test-home"]?Promise.resolve(window.manifest["mfe0-test-app"]["mfe0-test-home"]):Promise.resolve(window.manifest["mfe0-test-home"]):Promise.resolve("1.0.3")})().then(function(n){n.includes("http");var o="mfe0TestHome"+n.replaceAll(".","_"),a=n.includes("http")?n:"http://localhost:3020/mfe0-test-home/"+n+"/remoteEntry.js";console.log({name:o,url:a}),new Promise(function(e,r){var n=Error();if(void 0!==window[o])return e();t.l(a,function(t){if(void 0!==window[o])return e();var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+i+")",n.name="ScriptExternalLoadError",n.type=a,n.request=i,r(n)},o)}).then(function(){e(window[o])}).catch(r)})})}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,t.c=r,t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((r,n)=>(t.f[n](e,r),r),[])),t.u=e=>""+e+"."+({230:"20978aa2a0215f0a51cf",294:"e114114b5d5085215bc3",935:"234be87343c805ec31d2"})[e]+".chunk.js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="v1698864044375:";t.l=(n,o,a,i)=>{if(e[n]){e[n].push(o);return}if(void 0!==a)for(var s,u,f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+a){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=n),e[n]=[o];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(c);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach(e=>e(t)),r)return r(t)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={230:[510]},r={510:["default",".",399]};t.f.remotes=(n,o)=>{t.o(e,n)&&e[n].forEach(e=>{var n=t.R;n||(n=[]);var a=r[e];if(!(n.indexOf(a)>=0)){if(n.push(a),a.p)return o.push(a.p);var i=r=>{r||(r=Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),t.m[e]=()=>{throw r},a.p=0},s=(e,r,t,n,s,u)=>{try{var f=e(r,t);if(!f||!f.then)return s(f,n,u);var l=f.then(e=>s(e,n),i);if(!u)return l;o.push(a.p=l)}catch(e){i(e)}},u=(e,r,t)=>s(r.get,a[1],n,0,f,t),f=r=>{a.p=1,t.m[e]=e=>{e.exports=r()}};s(t,a[2],0,0,(e,r,n)=>e?s(t.I,a[0],0,e,u,n):i(),1)}})}})(),(()=>{t.S={};var e={},r={};t.I=(n,o)=>{o||(o=[]);var a=r[n];if(a||(a=r[n]={}),!(o.indexOf(a)>=0)){if(o.push(a),e[n])return e[n];t.o(t.S,n)||(t.S[n]={});var i=t.S[n],s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},u="v1698864044375",f=(e,r,t,n)=>{var o=i[e]=i[e]||{},a=o[r];if(window.__sharedModules__&&window.__sharedModules__[e]){let i=window.__sharedModules__[e];if(console.log(u,i,"uniqueNameasdasd"),i===u){o[r]={get:t,from:u,eager:!!n,runtimeShared:!0};return}if(a&&!0===a.runtimeShared)return}(!a||!a.loaded&&(!n!=!a.eager?n:u>a.from))&&(o[r]={get:t,from:u,eager:!!n})},l=[];return"default"===n&&(f("react-dom","18.2.0",()=>t.e(935).then(()=>()=>t(935))),f("react","18.2.0",()=>t.e(294).then(()=>()=>t(294))),(e=>{var r=e=>s("Initialization of sharing external failed: "+e);try{var a=t(399);if(!a)return;var i=e=>e&&e.init&&e.init(t.S[n],o);if(a.then)return l.push(a.then(i,r));var u=i(a);if(u&&u.then)return l.push(u.catch(r))}catch(e){r(e)}})(0)),l.length?e[n]=Promise.all(l).then(()=>e[n]=1):e[n]=1}}})(),(()=>{t.g.importScripts&&(e=t.g.location+"");var e,r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map(e=>+e==e?+e:e),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(s=e[a]))[0]?"-":(o>0?".":"")+(o=2,s);return t}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+u()+")":1===s?"("+u()+" || "+u()+")":2===s?i.pop()+" "+i.pop():n(s))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(r,t)=>{if(0 in r){t=e(t);var n=r[0],a=n<0;a&&(n=-n-1);for(var i=0,s=1,u=!0;;s++,i++){var f,l,d=s<r.length?(typeof r[s])[0]:"";if(i>=t.length||"o"==(l=(typeof(f=t[i]))[0]))return!u||("u"==d?s>n&&!a:""==d!=a);if("u"==l){if(!u||"u"!=d)return!1}else if(u){if(d==l){if(s<=n){if(f!=r[s])return!1}else{if(a?f>r[s]:f<r[s])return!1;f!=r[s]&&(u=!1)}}else if("s"!=d&&"n"!=d){if(a||s<=n)return!1;u=!1,s--}else{if(s<=n||l<d!=a)return!1;u=!1}}else"s"!=d&&"n"!=d&&(u=!1,s--)}}var p=[],c=p.pop.bind(p);for(i=1;i<r.length;i++){var h=r[i];p.push(1==h?c()|c():2==h?c()&c():h?o(h,t):!c())}return!!c()},a=(e,t)=>{var n=e[t];let o=window.__sharedModules__&&window.__sharedModules__[t],a=Object.keys(n).reduce((e,r)=>n[r].from===o?r:e,0);return a||Object.keys(n).reduce((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e,0)},i=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",s=(e,r,t,n)=>{var o=a(e,t);return p(e[t][o])},u=(e,r,t,n)=>{var s=a(e,t);return o(n,s)||d(i(e,t,s,n)),p(e[t][s])},f=(e,t,n)=>{var a=e[t],t=Object.keys(a).reduce((e,t)=>o(n,t)&&(!e||r(e,t))?t:e,0);return t&&a[t]},l=(e,r,t,o)=>{var a=e[t];return"No satisfying version ("+n(o)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(a).map(e=>e+" from "+a[e].from).join(", ")},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),c=e=>function(r,n,o,a){var i=t.I(r);return i&&i.then?i.then(e.bind(e,r,t.S[r],n,o,a)):e(r,t.S[r],n,o,a)},h=c((e,r,n,o)=>r&&t.o(r,n)?s(r,e,n):o()),m=c((e,r,n,o,a)=>r&&t.o(r,n)?u(r,e,n,o):a()),v={},g={556:()=>h("default","react-dom",()=>t.e(935).then(()=>()=>t(935))),82:()=>h("default","react",()=>t.e(294).then(()=>()=>t(294))),416:()=>m("default","react",[1,18,2,0],()=>t.e(294).then(()=>()=>t(294)))},w={230:[556,82],935:[416]};t.f.consumes=(e,r)=>{t.o(w,e)&&w[e].forEach(e=>{if(t.o(v,e))return r.push(v[e]);var n=r=>{v[e]=0,t.m[e]=n=>{delete t.c[e],n.exports=r()}},o=r=>{delete v[e],t.m[e]=n=>{throw delete t.c[e],r}};try{var a=g[e]();a.then?r.push(v[e]=a.then(n).catch(o)):n(a)}catch(e){o(e)}})}})(),(()=>{var e={143:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o){if(o)n.push(o[2]);else{var a=new Promise((t,n)=>o=e[r]=[t,n]);n.push(o[2]=a);var i=t.p+t.u(r),s=Error();t.l(i,n=>{if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}},"chunk-"+r,r)}}};var r=(r,n)=>{var o,a,[i,s,u]=n,f=0;if(i.some(r=>0!==e[r])){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);u&&u(t)}for(r&&r(n);f<i.length;f++)a=i[f],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=globalThis.webpackChunkv1698864044375=globalThis.webpackChunkv1698864044375||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t(120)})();
//# sourceMappingURL=app.e914d1b373ad2d2170a1.js.map