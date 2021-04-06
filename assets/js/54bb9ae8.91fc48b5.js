(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(8),o=(n(0),n(485)),c=n(486),i={title:"BasicAdapter"},d={unversionedId:"darknode-sol/Gateway/adapters/BasicAdapter",id:"darknode-sol/Gateway/adapters/BasicAdapter",isDocsHomePage:!1,title:"BasicAdapter",description:"Contract: BasicAdapter",source:"@site/contracts/darknode-sol/Gateway/adapters/BasicAdapter.mdx",slug:"/darknode-sol/Gateway/adapters/BasicAdapter",permalink:"/contracts/darknode-sol/Gateway/adapters/BasicAdapter",version:"current"},l=[{value:"Contract: <code>BasicAdapter</code>",id:"contract-basicadapter",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>registry</code></strong>: <em><code>contract IGatewayRegistry</code></em>",id:"registry-contract-igatewayregistry",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>constructor</code></strong> <em><code>(contract IGatewayRegistry _registry)</code></em> (public)",id:"constructor-contract-igatewayregistry-_registry-public",children:[]},{value:"<strong><code>mint</code></strong> <em><code>(string _symbol, address _recipient, uint256 _amount, bytes32 _nHash, bytes _sig)</code></em> (external)",id:"mint-string-_symbol-address-_recipient-uint256-_amount-bytes32-_nhash-bytes-_sig-external",children:[]},{value:"<strong><code>burn</code></strong> <em><code>(string _symbol, bytes _to, uint256 _amount)</code></em> (external)",id:"burn-string-_symbol-bytes-_to-uint256-_amount-external",children:[]},{value:"<strong><code>acceptRelayedCall</code></strong> <em><code>(address relay, address from, bytes encodedFunction, uint256 transactionFee, uint256 gasPrice, uint256 gasLimit, uint256 nonce, bytes approvalData, uint256 maxPossibleCharge) \u2192 uint256, bytes</code></em> (external)",id:"acceptrelayedcall-address-relay-address-from-bytes-encodedfunction-uint256-transactionfee-uint256-gasprice-uint256-gaslimit-uint256-nonce-bytes-approvaldata-uint256-maxpossiblecharge-\u2192-uint256-bytes-external",children:[]},{value:"<strong><code>_preRelayedCall</code></strong> <em><code>(bytes context) \u2192 bytes32</code></em> (internal)",id:"_prerelayedcall-bytes-context-\u2192-bytes32-internal",children:[]},{value:"<strong><code>_postRelayedCall</code></strong> <em><code>(bytes context, bool, uint256 actualCharge, bytes32)</code></em> (internal)",id:"_postrelayedcall-bytes-context-bool-uint256-actualcharge-bytes32-internal",children:[]}]}],s={toc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-basicadapter"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"BasicAdapter")),Object(o.mdx)("p",null,"Inherits from:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"GSNRecipient")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Context")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"IRelayRecipient")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"variables"},"Variables"),Object(o.mdx)("h3",{id:"registry-contract-igatewayregistry"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"registry")),": ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"contract IGatewayRegistry"))),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"functions"},"Functions"),Object(o.mdx)("h3",{id:"constructor-contract-igatewayregistry-_registry-public"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"constructor"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(contract IGatewayRegistry _registry)"))," (public)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"mint-string-_symbol-address-_recipient-uint256-_amount-bytes32-_nhash-bytes-_sig-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"mint"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _symbol, address _recipient, uint256 _amount, bytes32 _nHash, bytes _sig)"))," (external)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"burn-string-_symbol-bytes-_to-uint256-_amount-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"burn"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _symbol, bytes _to, uint256 _amount)"))," (external)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"acceptrelayedcall-address-relay-address-from-bytes-encodedfunction-uint256-transactionfee-uint256-gasprice-uint256-gaslimit-uint256-nonce-bytes-approvaldata-uint256-maxpossiblecharge-\u2192-uint256-bytes-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"acceptRelayedCall"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address relay, address from, bytes encodedFunction, uint256 transactionFee, uint256 gasPrice, uint256 gasLimit, uint256 nonce, bytes approvalData, uint256 maxPossibleCharge) \u2192 uint256, bytes"))," (external)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"_prerelayedcall-bytes-context-\u2192-bytes32-internal"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"_preRelayedCall"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(bytes context) \u2192 bytes32"))," (internal)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"_postrelayedcall-bytes-context-bool-uint256-actualcharge-bytes32-internal"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"_postRelayedCall"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(bytes context, bool, uint256 actualCharge, bytes32)"))," (internal)"),Object(o.mdx)("hr",null))}m.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,c({},t,{components:n}))}},u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,p=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(p,d(d({ref:t},i),{},{components:n})):a.a.createElement(p,d({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let o;t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));const c={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);