(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"Item",(function(){return d})),n.d(t,"links",(function(){return u})),n.d(t,"Networks",(function(){return m})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(9),a=n(0),i=n.n(a),c=n(410),s={title:"RenVM Networks",slug:"/"},p={unversionedId:"networks",id:"networks",isDocsHomePage:!1,title:"RenVM Networks",description:"RenVM has two networks available to developers - Mainnet and Testnet.",source:"@site/general/networks.mdx",slug:"/",permalink:"/ren-client-docs/general/",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/general/networks.mdx",version:"current",sidebar:"general"},l=[],d=function(e){var t=e.name,n=e.link,r=e.description;return Object(c.mdx)("li",{style:{padding:0,margin:0}},Object(c.mdx)("div",{style:{border:"1px solid #eee",padding:10,marginBottom:2}},Object(c.mdx)("b",null,t)," - ",Object(c.mdx)("span",null,r),Object(c.mdx)("br",null),Object(c.mdx)("a",{target:"_blank",rel:"noopener noreferrer",href:n},n)))},u={commandCenter:{Mainnet:"https://mainnet.renproject.io",Testnet:"https://testnet.renproject.io"},renBridge:{Mainnet:"https://bridge.renproject.io",Testnet:"https://bridge.renproject.io/mint?network=testnet"},explorer:{Mainnet:"https://explorer.renproject.io/",Testnet:"https://explorer-testnet.renproject.io/"},rpc:{Mainnet:"https://rpc.renproject.io/",Testnet:"https://rpc-testnet.renproject.io/"},graphql:{Mainnet:"https://stats.renproject.io/",Testnet:"https://stats-testnet.renproject.io/"}},m=function(){var e=Object(a.useState)("Mainnet"),t=e[0],n=e[1];return Object(c.mdx)(i.a.Fragment,null,Object(c.mdx)("div",{style:{border:"1px solid #eee",padding:10,marginBottom:20}},Object(c.mdx)("div",{className:"select"},Object(c.mdx)("select",{value:t,onChange:function(e){n(e.target.value)}},Object(c.mdx)("option",null,"Mainnet"),Object(c.mdx)("option",null,"Testnet")),Object(c.mdx)("div",{className:"select_arrow"})),Object(c.mdx)("ul",{style:{listStyleType:"none",padding:0,margin:0}},Object(c.mdx)(d,{name:"Command Center",link:u.commandCenter[t],description:"for RenVM stats and for managing darknode",mdxType:"Item"}),Object(c.mdx)(d,{name:"RenBridge",link:u.renBridge[t],description:"the official interface for minting and burning ren-assets",mdxType:"Item"}),Object(c.mdx)(d,{name:"Dev Tools / Explorer",link:u.explorer[t],description:"for looking up RenVM transactions",mdxType:"Item"}),Object(c.mdx)(d,{name:"RPC",link:u.rpc[t],description:"JSON-RPC endpoint - see the JSON-RPC tab",mdxType:"Item"}),Object(c.mdx)(d,{name:"Stats",link:u.graphql[t],description:"GraphQL endpoint for querying RenVM stats - see the Stats APIs tab",mdxType:"Item"}))))},f={toc:l,Item:d,links:u,Networks:m};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.mdx)("wrapper",Object(r.default)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"RenVM has two networks available to developers - Mainnet and Testnet."),Object(c.mdx)("p",null,"Testnet RenVM can be used to develop and test using testnet funds. Any chains supported by RenVM Testnet are also testnet chains, e.g. Bitcoin Testnet, and multiple Ethereum testnets (Kovan and G\xf6rli). Each of these testnet chains have their own docs and faucets available online."),Object(c.mdx)("p",null,"Testnet RenVM has its own REN token (see ",Object(c.mdx)("a",{parentName:"p",href:"/contracts/deployments"},"contract deployments")," for the address). If you require testnet REN for testing registering darknodes on testnet, please contract the Ren team."),Object(c.mdx)("p",null,"A list of links and resources for each of RenVM's networks can be found below:"),Object(c.mdx)(m,{mdxType:"Networks"}))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){return function(t){var n=u(t.components);return o.a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||f[d]||a;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);