!function(c){function e(e){for(var t,r,n=e[0],a=e[1],o=e[2],u=0,i=[];u<n.length;u++)r=n[u],f[r]&&i.push(f[r][0]),f[r]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(c[t]=a[t]);for(p&&p(e);i.length;)i.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==f[o]&&(n=!1)}n&&(l.splice(t--,1),e=h(h.s=r[0]))}return e}var r={},m={1:0},f={1:0},l=[];function h(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(l){var e=[];m[l]?e.push(m[l]):0!==m[l]&&{0:1}[l]&&e.push(m[l]=new Promise(function(e,n){for(var t=({}[l]||l)+"."+{0:"3eed1466"}[l]+".css",a=h.p+t,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=(c=r[o]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===t||u===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var c;if((u=(c=i[o]).getAttribute("data-href"))===t||u===a)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var t=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+l+" failed.\n("+t+")");r.request=t,delete m[l],s.parentNode.removeChild(s),n(r)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){m[l]=0}));var t,r=f[l];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,t){r=f[l]=[e,t]});e.push(r[2]=n);var a,o=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,h.nc&&u.setAttribute("nonce",h.nc),u.src=h.p+""+({}[t=l]||t)+"."+{0:"3eed1466"}[t]+".js",a=function(e){u.onerror=u.onload=null,clearTimeout(i);var t=f[l];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,a=new Error("Loading chunk "+l+" failed.\n("+r+": "+n+")");a.type=r,a.request=n,t[1](a)}f[l]=void 0}};var i=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,o.appendChild(u)}return Promise.all(e)},h.m=c,h.c=r,h.d=function(e,t,r){h.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},h.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(t,e){if(1&e&&(t=h(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(h.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)h.d(r,n,function(e){return t[e]}.bind(null,n));return r},h.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return h.d(t,"a",t),t},h.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},h.p="./",h.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var p=n;l.push([5,2]),s()}([function(e,t,r){},,,,,function(e,t,r){e.exports=r(10)},,,,function(e,t,r){"use strict";var n=r(0);r.n(n).a},function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(3),o={data:function(){return{query:"",routes:[]}}},u=(r(9),r(4)),i=Object(u.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"},{name:"smart-routes",rawName:"v-smart-routes",value:t.routes,expression:"routes"}],attrs:{placeholder:"search or run something...",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),r("nav",[t.routes.length?r("ul",t._l(t.routes,function(e){return r("li",{key:e.name+Math.random(),domProps:{innerHTML:t._s(e.title)},on:{click:e.handler}})})):r("div",[t._v("\n      ...\n    ")])]),t._v(" "),r("main",[r("router-view")],1)])},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("You can write "),r("b",[e._v("about")]),e._v(", "),r("b",[e._v("search: {query}")]),e._v(", "),r("b",[e._v("user {username}")]),e._v(", "),r("b",[e._v("user {id}")]),e._v(", "),r("b",[e._v("user {username} {id}")]),e._v(" or "),r("b",[e._v("a mail address and the subject")])])}],!1,null,null,null);i.options.__file="App.vue";var c=i.exports;function s(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(e){m(t,e,r[e])})}return t}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(t,i){var e,r=function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;if(Array.isArray(e))return e.reduce(function(e,t){var r=t.name,n=t.path,a=t.smart,o=t.children,u=void 0===o?[]:o;return e.push({name:r,path:n,smart:a,children:u,level:c}),u.length&&(e=e.concat(i(u,c+1))),e},[])}(i.$router.options.routes).filter(function(e){return e.smart}).map(function(e){return{name:e.name,path:e.path,smart:e.smart}}).map(function(e){var n=e.name,a=e.path,o=e.smart;if(!o.matcher)throw new Error("Smart routes must have matchers!");var u=function(e){return i.$router.push(e)};return o.handler||(o.handler=u),("function"==typeof o.matcher.search?o.matcher.search(i):o.matcher.search).map(function(e){return t.toString().match(e)}).filter(Boolean).map(function(e){if(e){var t=e.groups?e.groups:e,r=l({name:n,path:a},function(e,t){var r=e.match(/(:[0-9a-z_\-]+)/gi);if(!r)return{query:t};var n=r.map(function(e){return e.slice(1).trim()}),a={query:{},params:{}};return Object.keys(t).forEach(function(e){a[n.includes(e)?"params":"query"][e]=t[e]}),a}(a,e.groups));return l({title:o.matcher.title(t,i).replace(/\*([^*]+)\*/g,"<mark>$1</mark>")},r,{handler:function(){return o.handler(r,u,i)}})}}).filter(Boolean)});return(e=[]).concat.apply(e,s(r))}var h={install:function(e){e.directive("smart-routes",{bind:function(e,t,r){var n=r.data.directives.filter(function(e){return"model"===e.name});if(!n.length)throw new Error("An input with v-smart-routes directive must have v-model.");r.context.$watch(n[0].expression,function(e){this[t.expression]=f(e,this)})}})}};n.a.use(a.a),n.a.use(h);var p=new a.a({mode:"hash",routes:[{name:"users",path:"/users",component:function(){return r.e(0).then(r.bind(null,13))},smart:{matcher:{search:[/user/],title:function(){return"Go to users"}}},children:[{name:"newUser",path:"new",component:function(){return r.e(0).then(r.bind(null,13))},smart:{matcher:{search:[/user/,/new\suser(\s+(?<name>.*))?/],title:function(e){var t=e.name;return t?"Create user with name *".concat(t,"*"):"Create new user"}}}},{name:"goToUser",path:"/user/:id",component:function(){return r.e(0).then(r.bind(null,13))}},{name:"viewUser",path:"view/:username",component:function(){return r.e(0).then(r.bind(null,13))},smart:{matcher:{search:[/user\s*(?<id>\d+)/,/user\s*(?<username>[^\d\s]*)(\s(?<id>\d+))?/],title:function(e){var t=e.username,r=e.id;return!t&&r?"View user with ID *".concat(r,"*"):t&&r?"View user with username *".concat(t,"* and ID *").concat(r,"*"):t?"View user with username *".concat(t,"*"):"View all users"}},handler:function(e,t){e.params.username||!e.query.id?e.params.username||e.query.id?t(e):t({name:"users"}):t(function(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,r,n;t=a,n=o[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n})}return a}({},e,{name:"goToUser"}))}}}]},{name:"home",path:"/",component:function(){return r.e(0).then(r.bind(null,13))},smart:{matcher:{search:[/home/],title:function(){return"Go to homepage"}}}},{name:"about",path:"/about",component:function(){return r.e(0).then(r.bind(null,13))},smart:{matcher:{search:[/about/],title:function(){return"About us"}}}},{name:"search",path:"/search",component:function(){return r.e(0).then(r.bind(null,13))},smart:{matcher:{search:[/^(search|q)\:?\s+(?<query>.+)/i],title:function(e){var t=e.query;return"Search about *".concat(t,"*")}}}},{name:"sendMail",path:"/mail",component:function(){return r.e(0).then(r.bind(null,13))},smart:{matcher:{search:[/(?<email>[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)/i,/(?<email>[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)\s+(?<subject>\w+)/i],title:function(e){var t=e.email,r=e.subject;return r?"Send email to *".concat(t,"* with subject *").concat(r,"*"):"Send email to *".concat(t,"*")}}}}]});new n.a({el:"#app",router:p,render:function(e){return e(c)}})}]);
//# sourceMappingURL=main.7e14ad87.js.map