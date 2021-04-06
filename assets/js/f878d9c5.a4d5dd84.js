(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{393:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return d})),r.d(n,"toc",(function(){return l})),r.d(n,"Tag",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(3),a=r(8),o=(r(0),r(485)),c=r(486),i={id:"darknode-order-by",title:"Darknode_orderBy"},d={unversionedId:"subgraph/enums/darknode-order-by",id:"subgraph/enums/darknode-order-by",isDocsHomePage:!1,title:"Darknode_orderBy",description:"<span",source:"@site/subgraph/subgraph/enums/darknode-order-by.mdx",slug:"/subgraph/enums/darknode-order-by",permalink:"/subgraph/subgraph/enums/darknode-order-by",version:"current",sidebar:"subgraph",previous:{title:"Asset_orderBy",permalink:"/subgraph/subgraph/enums/asset-order-by"},next:{title:"Epoch_orderBy",permalink:"/subgraph/subgraph/enums/epoch-order-by"}},l=[{value:"Values",id:"values",children:[]}],p=function(e){var n=e.children,r=e.color;return Object(o.mdx)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:l,Tag:p};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(t.default)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"enum Darknode_orderBy {\n  id\n  operator\n  bond\n  publicKey\n  registeredAt\n  deregisteredAt\n  lastClaimedEpoch\n  previousLastClaimedEpoch\n  balances\n  balanceBTC\n  balanceZEC\n  balanceBCH\n}\n")),Object(o.mdx)("h3",{id:"values"},"Values"),Object(o.mdx)("h4",{id:"id"},Object(o.mdx)("inlineCode",{parentName:"h4"},"id")),Object(o.mdx)("h4",{id:"operator"},Object(o.mdx)("inlineCode",{parentName:"h4"},"operator")),Object(o.mdx)("h4",{id:"bond"},Object(o.mdx)("inlineCode",{parentName:"h4"},"bond")),Object(o.mdx)("h4",{id:"publickey"},Object(o.mdx)("inlineCode",{parentName:"h4"},"publicKey")),Object(o.mdx)("h4",{id:"registeredat"},Object(o.mdx)("inlineCode",{parentName:"h4"},"registeredAt")),Object(o.mdx)("h4",{id:"deregisteredat"},Object(o.mdx)("inlineCode",{parentName:"h4"},"deregisteredAt")),Object(o.mdx)("h4",{id:"lastclaimedepoch"},Object(o.mdx)("inlineCode",{parentName:"h4"},"lastClaimedEpoch")),Object(o.mdx)("h4",{id:"previouslastclaimedepoch"},Object(o.mdx)("inlineCode",{parentName:"h4"},"previousLastClaimedEpoch")),Object(o.mdx)("h4",{id:"balances"},Object(o.mdx)("inlineCode",{parentName:"h4"},"balances")),Object(o.mdx)("h4",{id:"balancebtc"},Object(o.mdx)("inlineCode",{parentName:"h4"},"balanceBTC")),Object(o.mdx)("h4",{id:"balancezec"},Object(o.mdx)("inlineCode",{parentName:"h4"},"balanceZEC")),Object(o.mdx)("h4",{id:"balancebch"},Object(o.mdx)("inlineCode",{parentName:"h4"},"balanceBCH")))}s.isMDXComponent=!0},485:function(e,n,r){"use strict";r.r(n),r.d(n,"MDXContext",(function(){return p})),r.d(n,"MDXProvider",(function(){return m})),r.d(n,"mdx",(function(){return y})),r.d(n,"useMDXComponents",(function(){return s})),r.d(n,"withMDXComponents",(function(){return u}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){return function(n){var r=s(n.components);return a.a.createElement(e,c({},n,{components:r}))}},s=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},m=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=t,m=p["".concat(c,".").concat(u)]||p[u]||b[u]||o;return r?a.a.createElement(m,d(d({ref:n},i),{},{components:r})):a.a.createElement(m,d({ref:n},i))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},486:function(e,n,r){"use strict";var t=r(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var a=t(r(0));let o;n.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(n.DocType=o={}));const c={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);