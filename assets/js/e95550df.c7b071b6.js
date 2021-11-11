(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{304:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(9),o=(r(0),r(414)),i={title:"Build your first Dapp with RenJS",description:"Building a simple marketplace on Ethereum",slug:"build-a-dapp-with-renjs",author:"Tejas",author_title:"Developer Relations at Ren",author_url:"https://github.com/terrafirmatrekker",author_image_url:"https://avatars.githubusercontent.com/u/11544711?s=60&v=4",tags:["RenVM","RenJS","dapp","tutorial"],image:"https://avatars.githubusercontent.com/u/11544711?s=60&v=4",hide_table_of_contents:!1},c={permalink:"/ren-client-docs/blog/build-a-dapp-with-renjs",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/blog/2021-09-08-build-a-dapp-with-renjs.md",source:"@site/blog/2021-09-08-build-a-dapp-with-renjs.md",description:"Building a simple marketplace on Ethereum",date:"2021-09-08T00:00:00.000Z",formattedDate:"September 8, 2021",tags:[{label:"RenVM",permalink:"/ren-client-docs/blog/tags/ren-vm"},{label:"RenJS",permalink:"/ren-client-docs/blog/tags/ren-js"},{label:"dapp",permalink:"/ren-client-docs/blog/tags/dapp"},{label:"tutorial",permalink:"/ren-client-docs/blog/tags/tutorial"}],title:"Build your first Dapp with RenJS",readingTime:21.495,truncated:!0},u=[],l={toc:u};function p(e){var t=e.components,r=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(n.default)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Our dapp will be powered by a smart contract that will track the ownership of products and instantly transfer ownership after a product is purchased by another user. One feature that will be unique is that users will be able to bridge Bitcoin in so our users can participate in the Ethereum ecosystem, this will be achieved by utilizing RenJS in our dapp."))}p.isMDXComponent=!0},414:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return p})),r.d(t,"MDXProvider",(function(){return f})),r.d(t,"mdx",(function(){return h})),r.d(t,"useMDXComponents",(function(){return d})),r.d(t,"withMDXComponents",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){return function(t){var r=d(t.components);return a.a.createElement(e,i({},t,{components:r}))}},d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),s=n,f=p["".concat(i,".").concat(s)]||p[s]||m[s]||o;return r?a.a.createElement(f,u(u({ref:t},c),{},{components:r})):a.a.createElement(f,u({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);