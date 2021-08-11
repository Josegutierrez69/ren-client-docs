(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=(n(0),n(415)),a=n(416);const i={title:"Overview",slug:"overview"},c={unversionedId:"tutorial/0-overview",id:"tutorial/0-overview",isDocsHomePage:!1,title:"Overview",description:"This tutorial will walk you through writing a basic front-end app that uses RenVM to mint BTC to an Ethereum smart contract. It is designed to be a quick introduction to RenVM and should be read together with the other examples, which provide more in-depth explanations.",source:"@site/ren-js/tutorial/0-overview.mdx",slug:"/tutorial/overview",permalink:"/ren-client-docs/ren-js/tutorial/overview",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/tutorial/0-overview.mdx",version:"current",sidebar:"docs",previous:{title:"Quick Start",permalink:"/ren-client-docs/ren-js/quick-start"},next:{title:"1. Smart Contract",permalink:"/ren-client-docs/ren-js/tutorial/smart-contract"}},u=[],l={toc:u};function s({components:e,...t}){return Object(o.mdx)("wrapper",Object(r.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(a.DocTag,{type:a.DocType.Tutorial,mdxType:"DocTag"}),Object(o.mdx)("p",null,"This tutorial will walk you through writing a basic front-end app that uses RenVM to mint BTC to an Ethereum smart contract. It is designed to be a quick introduction to RenVM and should be read together with the other examples, which provide more in-depth explanations."),Object(o.mdx)("p",null,"You'll get started by writing and deploying a smart contract to Ethereum Kovan, and then you'll use RenJS to build a simple user interface that can communicate with the smart contract. You'll end up with a website that you can use to deposit/withdraw testnet BTC to/from Kovan Ethereum using RenVM."),Object(o.mdx)("p",null,"It will look like this:"),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Final outcome screenshot",src:n(690).default})),Object(o.mdx)("p",null,"You can try a deployed version here: ",Object(o.mdx)("a",{parentName:"p",href:"https://renproject.github.io/renjs-tutorial"},"https://renproject.github.io/renjs-tutorial"),"."),Object(o.mdx)("p",null,"Continue to the next section to begin setting up the smart contract."))}s.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.a.createElement(e,i({},t,{components:n}))}},d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||f[p]||a;return n?o.a.createElement(m,u(u({ref:t},c),{},{components:n})):o.a.createElement(m,u({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var o=r(n(0));let a;t.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(t.DocType=a={}));const i={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},690:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tutorial-balance-0b361cba8b503205142db0769203c839.png"}}]);