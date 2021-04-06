(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(485)),i=n(486),c={id:"transactions",title:"transactions"},s={unversionedId:"subgraph/queries/transactions",id:"subgraph/queries/transactions",isDocsHomePage:!1,title:"transactions",description:"<span",source:"@site/subgraph/subgraph/queries/transactions.mdx",slug:"/subgraph/queries/transactions",permalink:"/subgraph/subgraph/queries/transactions",version:"current",sidebar:"subgraph",previous:{title:"transaction",permalink:"/subgraph/subgraph/queries/transaction"},next:{title:"valueWithAsset",permalink:"/subgraph/subgraph/queries/value-with-asset"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(o.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:u,Tag:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"transactions(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: Transaction_orderBy\n  orderDirection: OrderDirection\n  where: Transaction_filter\n  block: Block_height\n): [Transaction!]!\n\n")),Object(o.mdx)("h3",{id:"arguments"},"Arguments"),Object(o.mdx)("h4",{id:"skip-int"},Object(o.mdx)("inlineCode",{parentName:"h4"},"skip")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(o.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.mdx)("h4",{id:"first-int"},Object(o.mdx)("inlineCode",{parentName:"h4"},"first")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(o.mdx)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.mdx)("h4",{id:"orderby-transaction_orderby"},Object(o.mdx)("inlineCode",{parentName:"h4"},"orderBy")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/transaction-order-by"},Object(o.mdx)("inlineCode",{parentName:"a"},"Transaction_orderBy")),")"),Object(o.mdx)("h4",{id:"orderdirection-orderdirection"},Object(o.mdx)("inlineCode",{parentName:"h4"},"orderDirection")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/order-direction"},Object(o.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")"),Object(o.mdx)("h4",{id:"where-transaction_filter"},Object(o.mdx)("inlineCode",{parentName:"h4"},"where")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/transaction-filter"},Object(o.mdx)("inlineCode",{parentName:"a"},"Transaction_filter")),")"),Object(o.mdx)("h4",{id:"block-block_height"},Object(o.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(o.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(o.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(o.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(o.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(o.mdx)("h3",{id:"type"},"Type"),Object(o.mdx)("h4",{id:"transaction"},Object(o.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/transaction"},Object(o.mdx)("inlineCode",{parentName:"a"},"Transaction"))))}l.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return l})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){return function(t){var n=l(t.components);return a.a.createElement(e,i({},t,{components:n}))}},l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);