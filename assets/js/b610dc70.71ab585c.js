(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{302:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(3),a=(r(0),r(487)),o=r(488);const c={id:"integrator-contract",title:"integratorContract"},i={unversionedId:"subgraph/queries/integrator-contract",id:"subgraph/queries/integrator-contract",isDocsHomePage:!1,title:"integratorContract",description:"<span",source:"@site/subgraph/subgraph/queries/integrator-contract.mdx",slug:"/subgraph/queries/integrator-contract",permalink:"/ren-client-docs/subgraph/subgraph/queries/integrator-contract",version:"current",sidebar:"subgraph",previous:{title:"integrator",permalink:"/ren-client-docs/subgraph/subgraph/queries/integrator"},next:{title:"integratorContracts",permalink:"/ren-client-docs/subgraph/subgraph/queries/integrator-contracts"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:e,color:t})=>Object(a.mdx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:u,Tag:p};function d({components:e,...t}){return Object(a.mdx)("wrapper",Object(n.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"integratorContract(\n  id: ID!\n  block: Block_height\n): IntegratorContract\n\n")),Object(a.mdx)("h3",{id:"arguments"},"Arguments"),Object(a.mdx)("h4",{id:"id-id"},Object(a.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(a.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.mdx)("h4",{id:"block-block_height"},Object(a.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(a.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(a.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(a.mdx)("h3",{id:"type"},"Type"),Object(a.mdx)("h4",{id:"integratorcontract"},Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/integrator-contract"},Object(a.mdx)("inlineCode",{parentName:"a"},"IntegratorContract"))))}d.isMDXComponent=!0},487:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return l})),r.d(t,"MDXProvider",(function(){return m})),r.d(t,"mdx",(function(){return f})),r.d(t,"useMDXComponents",(function(){return s})),r.d(t,"withMDXComponents",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){return function(t){var r=s(t.components);return a.a.createElement(e,c({},t,{components:r}))}},s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(m,u(u({ref:t},i),{},{components:r})):a.a.createElement(m,u({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},488:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=n(r(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const c={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);