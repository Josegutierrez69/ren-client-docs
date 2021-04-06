(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{364:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(485)),i={title:"Welcome"},c={type:"mdx",permalink:"/",source:"@site/src/pages/index.mdx"},l=[],m={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"}},Object(o.mdx)("img",{src:"/img/logo.svg",style:{width:"3rem"}}),Object(o.mdx)("h1",{style:{margin:"0"}},"Ren Client Docs")),Object(o.mdx)("p",null,"Welcome to the Ren Client Docs. This website contains information for interacting with Ren and RenVM."),Object(o.mdx)("p",null,"It documents to tools that have been used to build the Ren Bridge (",Object(o.mdx)("a",{parentName:"p",href:"https://bridge.renproject.io"},"bridge.renproject.io"),"), the Command Center (",Object(o.mdx)("a",{parentName:"p",href:"https://mainnet.renproject.io"},"mainnet.renproject.io"),") and other tools and sites."),Object(o.mdx)("p",null,"Start by chosing one of the main categories:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"/ren-js"},Object(o.mdx)("strong",{parentName:"a"},"RenJS"))," - an SDK for integrating with RenVM to mint and burn ren-assets"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"/contracts"},Object(o.mdx)("strong",{parentName:"a"},"Contracts"))," - for learning about RenVM's on-chain smart contracts"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"/subgraph"},Object(o.mdx)("strong",{parentName:"a"},"Subgraph"))," - for querying stats of RenVM's on-chain usage/activity"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"/api"},Object(o.mdx)("strong",{parentName:"a"},"JSON-RPC"))," - for interacting directly with RenVM's nodes")),Object(o.mdx)("p",null,"More links:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://mainnet.renproject.io"},"Command Center")," - for RenVM stats and for managing darknode"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://bridge.renproject.io"},"Bridge")," - the official interface for minting and burning ren-assets"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://renproject.github.io/dev-tools"},"Dev Tools v0.2")," - for looking up RenVM hashes for BTC/ZEC/BCH minting on ETH"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://renproject.github.io/dev-tools-v0.3/"},"Dev Tools v0.3")," (in development) - for looking up RenVM hashes for all other asset/chain combinations")))}p.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,d=p["".concat(i,".").concat(s)]||p[s]||f[s]||o;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);