(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{326:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"Tag",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=(t(0),t(487)),o=t(488);const i={id:"ren-vm",title:"renVM"},c={unversionedId:"subgraph/queries/ren-vm",id:"subgraph/queries/ren-vm",isDocsHomePage:!1,title:"renVM",description:"<span",source:"@site/subgraph/subgraph/queries/ren-vm.mdx",slug:"/subgraph/queries/ren-vm",permalink:"/ren-client-docs/subgraph/subgraph/queries/ren-vm",version:"current",sidebar:"subgraph",previous:{title:"renVMs",permalink:"/ren-client-docs/subgraph/subgraph/queries/ren-v-ms"},next:{title:"transaction",permalink:"/ren-client-docs/subgraph/subgraph/queries/transaction"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:e,color:n})=>Object(a.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:u,Tag:p};function s({components:e,...n}){return Object(a.mdx)("wrapper",Object(r.default)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("p",null,"No description"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},"renVM(\n  id: ID!\n  block: Block_height\n): RenVM\n\n")),Object(a.mdx)("h3",{id:"arguments"},"Arguments"),Object(a.mdx)("h4",{id:"id-id"},Object(a.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(a.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.mdx)("h4",{id:"block-block_height"},Object(a.mdx)("inlineCode",{parentName:"h4"},"block")," (",Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/inputs/block-height"},Object(a.mdx)("inlineCode",{parentName:"a"},"Block_height")),")"),Object(a.mdx)("p",null,"The block at which the query should be executed. Can either be an ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",Object(a.mdx)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),Object(a.mdx)("h3",{id:"type"},"Type"),Object(a.mdx)("h4",{id:"renvm"},Object(a.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/ren-vm"},Object(a.mdx)("inlineCode",{parentName:"a"},"RenVM"))),Object(a.mdx)("p",null,"The RenVM entity contains all the information about the current state of RenVM's\non-chain information."))}s.isMDXComponent=!0},487:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return l})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return h})),t.d(n,"useMDXComponents",(function(){return d})),t.d(n,"withMDXComponents",(function(){return s}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){return function(n){var t=d(n.components);return a.a.createElement(e,i({},n,{components:t}))}},d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(t),s=r,m=l["".concat(i,".").concat(s)]||l[s]||b[s]||o;return t?a.a.createElement(m,u(u({ref:n},c),{},{components:t})):a.a.createElement(m,u({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},488:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var a=r(t(0));let o;n.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(n.DocType=o={}));const i={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+i[e]||!1,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);