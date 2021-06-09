(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"Link",(function(){return m})),n.d(t,"default",(function(){return f}));var r=n(3),a=(n(0),n(487)),o=n(526),l=n.n(o),c=n(527),i=n.n(c),u=n(488);const s={title:"Subgraph",slug:"/"},d={unversionedId:"subgraph",id:"subgraph",isDocsHomePage:!1,title:"Subgraph",description:"The RenVM Subgraph provides a way to query Ren's on-chain activity in a more efficient manner than making direct contract calls. It provides a GraphQL interface that can be used to lookup information about darknodes, assets and mints/burns.",source:"@site/subgraph/subgraph.mdx",slug:"/",permalink:"/ren-client-docs/subgraph/",version:"current",sidebar:"subgraph",next:{title:"Playground",permalink:"/ren-client-docs/subgraph/playground"}},p=[{value:"Networks",id:"networks",children:[]},{value:"Querying",id:"querying",children:[]}],m=({children:e})=>Object(a.mdx)("a",{target:"_blank",rel:"noopener noreferrer",href:e},e),b={toc:p,Link:m};function f({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(u.DocTag,{type:u.DocType.Explanation,mdxType:"DocTag"}),Object(a.mdx)("p",null,"The RenVM Subgraph provides a way to query Ren's on-chain activity in a more efficient manner than making direct contract calls. It provides a GraphQL interface that can be used to lookup information about darknodes, assets and mints/burns."),Object(a.mdx)("h2",{id:"networks"},"Networks"),Object(a.mdx)("p",null,"The RenVM Subgraph is available on the following networks:"),Object(a.mdx)(l.a,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},Object(a.mdx)(i.a,{value:"mainnet",mdxType:"TabItem"},Object(a.mdx)("b",null,"Ethereum"),Object(a.mdx)("br",null),"API: ",Object(a.mdx)(m,{mdxType:"Link"},"https://api.thegraph.com/subgraphs/name/renproject/renvm"),Object(a.mdx)("br",null),"Web: ",Object(a.mdx)(m,{mdxType:"Link"},"https://thegraph.com/explorer/subgraph/renproject/renvm"),Object(a.mdx)("br",null),Object(a.mdx)("br",null),Object(a.mdx)("b",null,"Binance Smart Chain"),Object(a.mdx)("br",null),"API: ",Object(a.mdx)(m,{mdxType:"Link"},"https://bsc-graph.renproject.io/subgraphs/name/renproject/renvm")),Object(a.mdx)(i.a,{value:"testnet",mdxType:"TabItem"},Object(a.mdx)("b",null,"Ethereum (Kovan)"),Object(a.mdx)("br",null),"API:"," ",Object(a.mdx)(m,{mdxType:"Link"},"https://api.thegraph.com/subgraphs/name/renproject/renvm-testnet"),Object(a.mdx)("br",null),"Web:"," ",Object(a.mdx)(m,{mdxType:"Link"},"https://thegraph.com/explorer/subgraph/renproject/renvm-testnet"),Object(a.mdx)("br",null),Object(a.mdx)("br",null),Object(a.mdx)("b",null,"Binance Smart Chain (Testnet)"),Object(a.mdx)("br",null),"API: ",Object(a.mdx)(m,{mdxType:"Link"},"https://bsc-graph-testnet.renproject.io/subgraphs/name/renproject/renvm-testnet"))),Object(a.mdx)("h2",{id:"querying"},"Querying"),Object(a.mdx)("p",null,"The ",Object(a.mdx)("a",{parentName:"p",href:"playground"},"playground")," tab and the ",Object(a.mdx)("a",{parentName:"p",href:"examples/fees"},"examples")," provide a quick way to try out queries."),Object(a.mdx)("p",null,"You can also use any GraphQL library (e.g. ",Object(a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/apollo"},"Apollo"),") or client (e.g. ",Object(a.mdx)("a",{parentName:"p",href:"https://insomnia.rest/products/insomnia"},"Insomnia")," or Postman). See ",Object(a.mdx)("a",{parentName:"p",href:"https://graphql.org/graphql-js/graphql-clients/"},"GraphQL Clients")," for more information."),Object(a.mdx)("p",null,"The subgraphs expose a single POST endpoint that allows you to specify what data to query. A query looks like this:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  # Get the darknode with the highest BTC balance.\n  darknodes(first: 1, orderBy: balanceBTC, orderDirection: desc) {\n    id\n    operator\n    registeredAt\n    balances(where: { symbol: "renBTC" }) {\n      symbol\n      amountInUsd\n    }\n  }\n}\n')),Object(a.mdx)("p",null,"Posting this to the Ethereum Mainnet API url returns:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "darknodes": [\n      {\n        "balances": [\n          {\n            "amountInUsd": "7264.59",\n            "symbol": "renBTC"\n          }\n        ],\n        "id": "0x9fec6514e6a83fa21f5da810ff45dc04dda40670",\n        "operator": "0xd8a0bc22290c42f35dfa010f4233b81a3ae3dd2c",\n        "registeredAt": "1590525958"\n      }\n    ]\n  }\n}\n')))}f.isMDXComponent=!0},487:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,l({},t,{components:n}))}},p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(l,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},488:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const l={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+l[e]||!1,borderRadius:"5px",color:l[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},490:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}n.r(t),t.default=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},508:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(0),o=r(n(511));var l=function(){const e=(0,a.useContext)(o.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=l},511:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(0).createContext)(void 0);t.default=r},526:function(e,t,n){"use strict";var r=n(4).default,a=n(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),l=r(n(508)),c=r(n(490)),i=r(n(446));const u=37,s=39;var d=function(e){const{lazy:t,block:n,defaultValue:r,values:a,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:b}=(0,l.default)(),[f,h]=(0,o.useState)(r),g=o.Children.toArray(e.children),y=[];if(null!=d){const e=m[d];null!=e&&e!==f&&a.some((t=>t.value===e))&&h(e)}const v=e=>{const t=e.target,n=y.indexOf(t),r=g[n].props.value;h(r),null!=d&&(b(d,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:l}=window;return t>=0&&a<=l&&r<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i.default.tabItemActive),setTimeout((()=>t.classList.remove(i.default.tabItemActive)),2e3))}),150))},x=e=>{var t;let n;switch(e.keyCode){case s:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case u:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null===(t=n)||void 0===t||t.focus()};return o.default.createElement("div",{className:"tabs-container"},o.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":n},p)},a.map((({value:e,label:t})=>o.default.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,c.default)("tabs__item",i.default.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:x,onFocus:v,onClick:v},t)))),t?(0,o.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):o.default.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))};t.default=d},527:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0));var o=function({children:e,hidden:t,className:n}){return a.default.createElement("div",{role:"tabpanel",hidden:t,className:n},e)};t.default=o}}]);