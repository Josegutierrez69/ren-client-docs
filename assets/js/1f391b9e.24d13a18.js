(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{569:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(490)),c=a(n(570)),o=a(n(450));const d="table-of-contents__link";function s({toc:e,isChild:t}){return e.length?l.default.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.default.createElement("li",{key:e.id},l.default.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),l.default.createElement(s,{isChild:!0,toc:e.children}))))):null}var i=function({toc:e}){return(0,c.default)(d,"table-of-contents__link--active",100),l.default.createElement("div",{className:(0,r.default)(o.default.tableOfContents,"thin-scrollbar")},l.default.createElement(s,{toc:e}))};t.default=i},570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(0);var l=function(e,t,n){const[l,r]=(0,a.useState)(void 0);(0,a.useEffect)((()=>{function a(){const a=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(a){let n=0,c=!1;const o=document.getElementsByClassName(e);for(;n<o.length&&!c;){const e=o[n],{href:d}=e,s=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),c=!0),n+=1}}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))};t.default=l},78:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(528)),c=n(487),o=a(n(551)),d=a(n(569));var s=function(e){const{content:t}=e,{frontMatter:n,metadata:a}=t,{title:s,description:i,wrapperClassName:u,hide_table_of_contents:f}=n,{permalink:m}=a;return l.default.createElement(r.default,{title:s,description:i,permalink:m,wrapperClassName:u},l.default.createElement("main",null,l.default.createElement("div",{className:"container container--fluid"},l.default.createElement("div",{className:"margin-vert--lg padding-vert--lg"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col col--8 col--offset-2"},l.default.createElement("div",{className:"container"},l.default.createElement(c.MDXProvider,{components:o.default},l.default.createElement(t,null)))),!f&&t.toc&&l.default.createElement("div",{className:"col col--2"},l.default.createElement(d.default,{toc:t.toc})))))))};t.default=s}}]);