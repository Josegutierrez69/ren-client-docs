(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(485)),d=n(486),m={id:"integrator",title:"Integrator"},o={unversionedId:"subgraph/objects/integrator",id:"subgraph/objects/integrator",isDocsHomePage:!1,title:"Integrator",description:"<span",source:"@site/subgraph/subgraph/objects/integrator.mdx",slug:"/subgraph/objects/integrator",permalink:"/subgraph/subgraph/objects/integrator",version:"current",sidebar:"subgraph",previous:{title:"Epoch",permalink:"/subgraph/subgraph/objects/epoch"},next:{title:"IntegratorContract",permalink:"/subgraph/subgraph/objects/integrator-contract"}},c=[{value:"Fields",id:"fields",children:[]}],b=function(e){var t=e.children,n=e.color;return Object(i.mdx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:c,Tag:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(d.DocTag,{type:d.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("p",null,"No description"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Integrator {\n  id: ID!\n  date: Int!\n  contractAddress: Bytes!\n  txCount(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: ValueWithAsset_orderBy\n    orderDirection: OrderDirection\n    where: ValueWithAsset_filter\n  ): [ValueWithAsset!]!\n  locked(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  volume(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  fees(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: AssetAmount_orderBy\n    orderDirection: OrderDirection\n    where: AssetAmount_filter\n  ): [AssetAmount!]!\n  txCountTotal: BigInt!\n  volumeTotalUSD: BigDecimal!\n  feesTotalUSD: BigDecimal!\n  txCountBTC: BigInt!\n  lockedBTC: BigInt!\n  volumeBTC: BigInt!\n  txCountZEC: BigInt!\n  lockedZEC: BigInt!\n  volumeZEC: BigInt!\n  txCountBCH: BigInt!\n  lockedBCH: BigInt!\n  volumeBCH: BigInt!\n}\n")),Object(i.mdx)("h3",{id:"fields"},"Fields"),Object(i.mdx)("h4",{id:"id-id"},Object(i.mdx)("inlineCode",{parentName:"h4"},"id")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/id"},Object(i.mdx)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.mdx)("h4",{id:"date-int"},Object(i.mdx)("inlineCode",{parentName:"h4"},"date")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int!")),")"),Object(i.mdx)("h4",{id:"contractaddress-bytes"},Object(i.mdx)("inlineCode",{parentName:"h4"},"contractAddress")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/bytes"},Object(i.mdx)("inlineCode",{parentName:"a"},"Bytes!")),")"),Object(i.mdx)("h4",{id:"txcount-valuewithasset"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCount")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/value-with-asset"},Object(i.mdx)("inlineCode",{parentName:"a"},"[ValueWithAsset!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-valuewithasset_orderby"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/value-with-asset-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"ValueWithAsset_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-valuewithasset_filter"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/inputs/value-with-asset-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"ValueWithAsset_filter")),")"))),Object(i.mdx)("h4",{id:"locked-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"locked")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"volume-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volume")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter-1"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"fees-assetamount"},Object(i.mdx)("inlineCode",{parentName:"h4"},"fees")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/objects/asset-amount"},Object(i.mdx)("inlineCode",{parentName:"a"},"[AssetAmount!]!")),")"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"skip-int-3"},Object(i.mdx)("inlineCode",{parentName:"h5"},"skip")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"first-int-3"},Object(i.mdx)("inlineCode",{parentName:"h5"},"first")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/scalars/int"},Object(i.mdx)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderby-assetamount_orderby-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderBy")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/asset-amount-order-by"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_orderBy")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"orderdirection-orderdirection-3"},Object(i.mdx)("inlineCode",{parentName:"h5"},"orderDirection")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/enums/order-direction"},Object(i.mdx)("inlineCode",{parentName:"a"},"OrderDirection")),")")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("h5",{parentName:"li",id:"where-assetamount_filter-2"},Object(i.mdx)("inlineCode",{parentName:"h5"},"where")," (",Object(i.mdx)("a",{parentName:"h5",href:"/subgraph/subgraph/inputs/asset-amount-filter"},Object(i.mdx)("inlineCode",{parentName:"a"},"AssetAmount_filter")),")"))),Object(i.mdx)("h4",{id:"txcounttotal-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCountTotal")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"volumetotalusd-bigdecimal"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volumeTotalUSD")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-decimal"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigDecimal!")),")"),Object(i.mdx)("h4",{id:"feestotalusd-bigdecimal"},Object(i.mdx)("inlineCode",{parentName:"h4"},"feesTotalUSD")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-decimal"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigDecimal!")),")"),Object(i.mdx)("h4",{id:"txcountbtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCountBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"lockedbtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"lockedBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"volumebtc-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volumeBTC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"txcountzec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCountZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"lockedzec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"lockedZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"volumezec-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volumeZEC")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"txcountbch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"txCountBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"lockedbch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"lockedBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"),Object(i.mdx)("h4",{id:"volumebch-bigint"},Object(i.mdx)("inlineCode",{parentName:"h4"},"volumeBCH")," (",Object(i.mdx)("a",{parentName:"h4",href:"/subgraph/subgraph/scalars/big-int"},Object(i.mdx)("inlineCode",{parentName:"a"},"BigInt!")),")"))}p.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return b})),n.d(t,"MDXProvider",(function(){return l})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){return function(t){var n=p(t.components);return r.a.createElement(e,d({},t,{components:n}))}},p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=a,l=b["".concat(d,".").concat(s)]||b[s]||u[s]||i;return n?r.a.createElement(l,o(o({ref:t},m),{},{components:n})):r.a.createElement(l,o({ref:t},m))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=h;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:a,d[1]=m;for(var c=2;c<i;c++)d[c]=n[c];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r=a(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const d={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:{border:"2px solid "+d[e]||!1,borderRadius:"5px",color:d[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);