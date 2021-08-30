(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{410:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return x})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,c({},t,{components:n}))}},u=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,p=m["".concat(c,".").concat(s)]||m[s]||b[s]||i;return n?a.a.createElement(p,d(d({ref:t},o),{},{components:n})):a.a.createElement(p,d({ref:t},o))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},411:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const c={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},43:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var r=n(3),a=(n(0),n(410)),i=n(411);const c={title:"Vesting"},o={unversionedId:"gateway-sol/Gateway/examples/Vesting",id:"gateway-sol/Gateway/examples/Vesting",isDocsHomePage:!1,title:"Vesting",description:"Contract: Vesting",source:"@site/contracts/gateway-sol/Gateway/examples/Vesting.mdx",slug:"/gateway-sol/Gateway/examples/Vesting",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/examples/Vesting",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/gateway-sol/Gateway/examples/Vesting.mdx",version:"current"},d=[{value:"Contract: <code>Vesting</code>",id:"contract-vesting",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>registry</code></strong>: <em><code>contract GatewayRegistry</code></em>",id:"registry-contract-gatewayregistry",children:[]},{value:"<strong><code>schedules</code></strong>: <em><code>mapping(address =&gt; struct Vesting.VestingSchedule)</code></em>",id:"schedules-mappingaddress--struct-vestingvestingschedule",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>constructor</code></strong> <em><code>(contract GatewayRegistry _registry)</code></em> (public)",id:"constructor-contract-gatewayregistry-_registry-public",children:[]},{value:"<strong><code>addVestingSchedule</code></strong> <em><code>(address _beneficiary, uint256 _startTime, uint16 _duration, uint256 _amount, bytes32 _nHash, bytes _sig)</code></em> (external)",id:"addvestingschedule-address-_beneficiary-uint256-_starttime-uint16-_duration-uint256-_amount-bytes32-_nhash-bytes-_sig-external",children:[]},{value:"<strong><code>claim</code></strong> <em><code>(bytes _to)</code></em> (external)",id:"claim-bytes-_to-external",children:[]},{value:"<strong><code>calculateClaimable</code></strong> <em><code>(address _to) \u2192 uint256, uint256</code></em> (public)",id:"calculateclaimable-address-_to-\u2192-uint256-uint256-public",children:[]}]}],l={toc:d};function m({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(i.DocTag,{type:i.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-vesting"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"Vesting")),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Context")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"variables"},"Variables"),Object(a.mdx)("h3",{id:"registry-contract-gatewayregistry"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"registry")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"contract GatewayRegistry"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"schedules-mappingaddress--struct-vestingvestingschedule"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"schedules")),": ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"mapping(address => struct Vesting.VestingSchedule)"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"constructor-contract-gatewayregistry-_registry-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"constructor"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(contract GatewayRegistry _registry)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_registry"),": The GatewayRegistry contract address.")),Object(a.mdx)("p",null,"The contract constructor."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"addvestingschedule-address-_beneficiary-uint256-_starttime-uint16-_duration-uint256-_amount-bytes32-_nhash-bytes-_sig-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"addVestingSchedule"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _beneficiary, uint256 _startTime, uint16 _duration, uint256 _amount, bytes32 _nHash, bytes _sig)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_amount"),": The amount of Bitcoin provided to the Darknodes in Sats.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_nHash"),": The hash of the nonce returned by the Darknodes.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_sig"),": The signature returned by the Darknodes.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_beneficiary"),": The address of the recipient entitled to claim the vested tokens.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_startTime"),": The start time (in seconds since Unix epoch) at which the vesting\nperiod should begin.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_duration"),": The number of months for the vesting period."))),Object(a.mdx)("p",null,"Allows the contract owner to add a vesting schedule for a\nbeneficiary."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"claim-bytes-_to-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"claim"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(bytes _to)"))," (external)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_to"),": The Bitcoin address to which the beneficiary will receive\ntheir Bitcoin.")),Object(a.mdx)("p",null,"Allows a beneficiary to withdraw their vested Bitcoin."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"calculateclaimable-address-_to-\u2192-uint256-uint256-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"calculateClaimable"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _to) \u2192 uint256, uint256"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_to"),": The Ethereum address of the beneficiary.")),Object(a.mdx)("p",null,"Retrieves the claimable amount for a given beneficiary."),Object(a.mdx)("hr",null))}m.isMDXComponent=!0}}]);