(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{41:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),o=(t(0),t(413)),i=t(414),c={title:"Claimable"},l={unversionedId:"gateway-sol/Governance/Claimable",id:"gateway-sol/Governance/Claimable",isDocsHomePage:!1,title:"Claimable",description:"Contract: Claimable",source:"@site/contracts/gateway-sol/Governance/Claimable.mdx",slug:"/gateway-sol/Governance/Claimable",permalink:"/ren-client-docs/contracts/gateway-sol/Governance/Claimable",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/gateway-sol/Governance/Claimable.mdx",version:"current"},d=[{value:"Contract: <code>Claimable</code>",id:"contract-claimable",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>pendingOwner</code></strong>: <em><code>address</code></em>",id:"pendingowner-address",children:[]}]},{value:"Modifiers",id:"modifiers",children:[{value:"<code>onlyPendingOwner()</code>",id:"onlypendingowner",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>initialize</code></strong> <em><code>(address _nextOwner)</code></em> (public)",id:"initialize-address-_nextowner-public",children:[]},{value:"<strong><code>transferOwnership</code></strong> <em><code>(address newOwner)</code></em> (public)",id:"transferownership-address-newowner-public",children:[]},{value:"<strong><code>claimOwnership</code></strong> <em><code>()</code></em> (public)",id:"claimownership--public",children:[]}]}],m={toc:d};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-claimable"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"Claimable")),Object(o.mdx)("p",null,"Extension for the Ownable contract, where the ownership needs to be claimed.\nThis allows the new owner to accept the transfer."),Object(o.mdx)("p",null,"Inherits from:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Context")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"variables"},"Variables"),Object(o.mdx)("h3",{id:"pendingowner-address"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"pendingOwner")),": ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"address"))),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"modifiers"},"Modifiers"),Object(o.mdx)("h3",{id:"onlypendingowner"},Object(o.mdx)("inlineCode",{parentName:"h3"},"onlyPendingOwner()")),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"functions"},"Functions"),Object(o.mdx)("h3",{id:"initialize-address-_nextowner-public"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"initialize"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _nextOwner)"))," (public)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"transferownership-address-newowner-public"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"transferOwnership"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address newOwner)"))," (public)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"claimownership--public"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"claimOwnership"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"()"))," (public)"),Object(o.mdx)("hr",null))}s.isMDXComponent=!0},413:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return m})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return f})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return s}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=a.a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=a.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(m.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},O=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(t),s=r,u=m["".concat(i,".").concat(s)]||m[s]||b[s]||o;return t?a.a.createElement(u,l(l({ref:n},c),{},{components:t})):a.a.createElement(u,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=O;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},414:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var a=r(t(0));let o;n.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(n.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);