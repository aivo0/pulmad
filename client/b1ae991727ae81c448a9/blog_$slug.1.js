(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5:function(t,e,n){"use strict";n.r(e),n.d(e,"preload",(function(){return o}));var c=n(0);function s(t){let e,n,s,o,a,l,r=t[0].title+"",i=t[0].html+"";return document.title=e=t[0].title,{c(){n=Object(c.H)(),s=Object(c.r)("h1"),o=Object(c.J)(r),a=Object(c.H)(),l=Object(c.r)("div"),this.h()},l(t){Object(c.C)('[data-svelte="svelte-1uty71u"]',document.head).forEach(c.q),n=Object(c.j)(t),s=Object(c.i)(t,"H1",{});var e=Object(c.g)(s);o=Object(c.k)(e,r),e.forEach(c.q),a=Object(c.j)(t),l=Object(c.i)(t,"DIV",{class:!0}),Object(c.g)(l).forEach(c.q),this.h()},h(){Object(c.e)(l,"class","content svelte-gnxal1")},m(t,e){Object(c.y)(t,n,e),Object(c.y)(t,s,e),Object(c.c)(s,o),Object(c.y)(t,a,e),Object(c.y)(t,l,e),l.innerHTML=i},p(t,[n]){1&n&&e!==(e=t[0].title)&&(document.title=e),1&n&&r!==(r=t[0].title+"")&&Object(c.G)(o,r),1&n&&i!==(i=t[0].html+"")&&(l.innerHTML=i)},i:c.B,o:c.B,d(t){t&&Object(c.q)(n),t&&Object(c.q)(s),t&&Object(c.q)(a),t&&Object(c.q)(l)}}}async function o({params:t,query:e}){const n=await this.fetch(`blog/${t.slug}.json`),c=await n.json();if(200===n.status)return{post:c};this.error(n.status,c.message)}function a(t,e,n){let{post:c}=e;return t.$set=t=>{"post"in t&&n(0,c=t.post)},[c]}class l extends c.a{constructor(t){var e;super(),document.getElementById("svelte-gnxal1-style")||((e=Object(c.r)("style")).id="svelte-gnxal1-style",e.textContent=".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",Object(c.c)(document.head,e)),Object(c.x)(this,t,a,s,c.E,{post:0})}}e.default=l}}]);