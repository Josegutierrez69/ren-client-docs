(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.a.createElement(e,i({},t,{components:n}))}},d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||f[p]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a,o,i=r(n(0));t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));var c=((a={})[o.Tutorial]="#b16bfc",a[o.HowTo]="#EC0088",a[o.Reference]="#ff823a",a[o.Explanation]="#29C0AF",a);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:{border:"2px solid "+c[t]||!1,borderRadius:"5px",color:c[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(9),o=(n(0),n(415)),i=n(416),c={title:"About",slug:"/"},l={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"About",description:"Stats",source:"@site/stats/about.mdx",slug:"/",permalink:"/ren-client-docs/stats/",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/stats/about.mdx",version:"current",sidebar:"subgraph",next:{title:"RenVM Stats",permalink:"/ren-client-docs/stats/renvm-stats"}},s=[{value:"Stats",id:"stats",children:[]},{value:"APIs",id:"apis",children:[]},{value:"3rd Party Statistics",id:"3rd-party-statistics",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.DocTag,{type:i.DocType.Explanation,mdxType:"DocTag"}),Object(o.mdx)("h3",{id:"stats"},"Stats"),Object(o.mdx)("p",null,"Statistics about RenVM's volume and locked values can be found on the Command Center:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Mainnet: ",Object(o.mdx)("a",{parentName:"li",href:"https://mainnet.renproject.io"},"mainnet.renproject.io")),Object(o.mdx)("li",{parentName:"ul"},"Testnet: ",Object(o.mdx)("a",{parentName:"li",href:"https://testnet.renproject.io"},"testnet.renproject.io"))),Object(o.mdx)("h3",{id:"apis"},"APIs"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"./renvm-stats"},"RenVM Stats")," - query current and historic information about RenVM volume and locked value"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"./darknode-stats"},"Darknode Stats")," - query current and historic information about darknode registrations")),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"3rd-party-statistics"},"3rd Party Statistics"),Object(o.mdx)("p",null,"There are several 3rd party websites or feeds that also provide stats about RenVM:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://darknodes.online/"},"https://darknodes.online/")," - stats about darknodes"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://duneanalytics.com/jonto/renvm-activity"},"https://duneanalytics.com/jonto/renvm-activity")," - stats about renBTC on Ethereum"),Object(o.mdx)("li",{parentName:"ul"},"renLargeAssetBot - ",Object(o.mdx)("a",{parentName:"li",href:"https://twitter.com/RenAssetsBot"},"Twitter"),", ",Object(o.mdx)("a",{parentName:"li",href:"https://t.me/renLargeAssetsBot"},"Telegram")," - feed for mints and burns over $100k."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://defipulse.com/renvm"},"https://defipulse.com/renvm")," - RenVM total-value-locked (TVL) on Ethereum (includes REN bonded)"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://btconethereum.com/"},"https://btconethereum.com/")," - compare renBTC on Ethereum with WBTC, HBTC, sBTC, etc."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://cryptofees.info/"},"https://cryptofees.info/")," (RenVM temporarily unavailable) - compare RenVM 24h fees with other crypto projects")),Object(o.mdx)("p",null,"Add more to this list by clicking the edit button below (GitHub account required)."))}p.isMDXComponent=!0}}]);