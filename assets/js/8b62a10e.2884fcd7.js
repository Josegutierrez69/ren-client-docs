(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return d})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(8),i=(n(0),n(485)),o=n(486),c={id:"transaction",title:"Transaction"},s={unversionedId:"subgraph/objects/transaction",id:"subgraph/objects/transaction",isDocsHomePage:!1,title:"Transaction",description:"<span",source:"@site/subgraph/subgraph/objects/transaction.mdx",slug:"/subgraph/objects/transaction",permalink:"/subgraph/subgraph/objects/transaction",version:"current",sidebar:"subgraph",previous:{title:"RenVM",permalink:"/subgraph/subgraph/objects/ren-vm"},next:{title:"ValueWithAsset",permalink:"/subgraph/subgraph/objects/value-with-asset"}},p=[{value:"Fields",id:"fields",children:[]}],d=function(e){var t=e.children,n=e.color;return Object(i.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:d};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("p",null,"No description"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Transaction {\n  id: ID!\n  timestamp: BigInt\n  asset: String!\n  type: TransactionType!\n  amount: BigInt!\n  feeRate: BigInt!\n  integrator: Bytes\n  transactionTo: Bytes\n  burnRecipient: Bytes\n  destination: Bytes\n}\n")),Object(i.mdx)("h3",{id:"fields"},"Fields"),Object(i.mdx)("h4",{id:"id-id"},Object(i.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(i.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.mdx)("h4",{id:"timestamp-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"timestamp")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt")),")"),Object(i.mdx)("h4",{id:"asset-string"},Object(i.mdx)("inlineCode",{parentName:"h4"},"asset")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/string"},Object(i.mdx)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.mdx)("h4",{id:"type-transactiontype"},Object(i.mdx)("inlineCode",{parentName:"h4"},"type")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/enums/transaction-type"},Object(i.mdx)("inlineCode",{parentName:"a"},"TransactionType!")),")"),Object(i.mdx)("h4",{id:"amount-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"amount")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"feerate-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"feeRate")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"integrator-bytes"},Object(i.mdx)("inlineCode",{parentName:"h4"},"integrator")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/bytes"},Object(i.mdx)("inlineCode",{parentName:"a"},"Bytes")),")"),Object(i.mdx)("h4",{id:"transactionto-bytes"},Object(i.mdx)("inlineCode",{parentName:"h4"},"transactionTo")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/bytes"},Object(i.mdx)("inlineCode",{parentName:"a"},"Bytes")),")"),Object(i.mdx)("h4",{id:"burnrecipient-bytes"},Object(i.mdx)("inlineCode",{parentName:"h4"},"burnRecipient")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/bytes"},Object(i.mdx)("inlineCode",{parentName:"a"},"Bytes")),")"),Object(i.mdx)("h4",{id:"destination-bytes"},Object(i.mdx)("inlineCode",{parentName:"h4"},"destination")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/bytes"},Object(i.mdx)("inlineCode",{parentName:"a"},"Bytes")),")"))}m.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return b})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){return function(t){var n=m(t.components);return a.a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=m(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,b=d["".concat(o,".").concat(u)]||d[u]||l[u]||i;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const o={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);