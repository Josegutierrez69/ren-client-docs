(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{255:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return i}));var a=t(3),r=(t(0),t(415)),d=t(416);const o={title:"DarknodePaymentStore"},c={unversionedId:"darknode-sol/DarknodePayment/DarknodePaymentStore",id:"darknode-sol/DarknodePayment/DarknodePaymentStore",isDocsHomePage:!1,title:"DarknodePaymentStore",description:"Contract: DarknodePaymentStore",source:"@site/contracts/darknode-sol/DarknodePayment/DarknodePaymentStore.mdx",slug:"/darknode-sol/DarknodePayment/DarknodePaymentStore",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/DarknodePaymentStore",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/DarknodePayment/DarknodePaymentStore.mdx",version:"current",sidebar:"contracts",previous:{title:"DarknodeSlasher",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodeSlasher/DarknodeSlasher"},next:{title:"DarknodePayment",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/DarknodePayment"}},l=[{value:"Contract: <code>DarknodePaymentStore</code>",id:"contract-darknodepaymentstore",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>VERSION</code></strong>: <em><code>string</code></em>",id:"version-string",children:[]},{value:"<strong><code>ETHEREUM</code></strong>: <em><code>address</code></em>",id:"ethereum-address",children:[]},{value:"<strong><code>darknodeBalances</code></strong>: <em><code>mapping(address =&gt; mapping(address =&gt; uint256))</code></em>",id:"darknodebalances-mappingaddress--mappingaddress--uint256",children:[]},{value:"<strong><code>lockedBalances</code></strong>: <em><code>mapping(address =&gt; uint256)</code></em>",id:"lockedbalances-mappingaddress--uint256",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>constructor</code></strong> <em><code>(string _VERSION)</code></em> (public)",id:"constructor-string-_version-public",children:[]},{value:"<strong><code>fallback</code></strong> <em><code>()</code></em> (external)",id:"fallback--external",children:[]},{value:"<strong><code>totalBalance</code></strong> <em><code>(address _token) \u2192 uint256</code></em> (public)",id:"totalbalance-address-_token-\u2192-uint256-public",children:[]},{value:"<strong><code>availableBalance</code></strong> <em><code>(address _token) \u2192 uint256</code></em> (public)",id:"availablebalance-address-_token-\u2192-uint256-public",children:[]},{value:"<strong><code>incrementDarknodeBalance</code></strong> <em><code>(address _darknode, address _token, uint256 _amount)</code></em> (external)",id:"incrementdarknodebalance-address-_darknode-address-_token-uint256-_amount-external",children:[]},{value:"<strong><code>transfer</code></strong> <em><code>(address _darknode, address _token, uint256 _amount, address payable _recipient)</code></em> (external)",id:"transfer-address-_darknode-address-_token-uint256-_amount-address-payable-_recipient-external",children:[]}]}],m={toc:l};function i({components:e,...n}){return Object(r.mdx)("wrapper",Object(a.default)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)(d.DocTag,{type:d.DocType.Reference,mdxType:"DocTag"}),Object(r.mdx)("h2",{id:"contract-darknodepaymentstore"},"Contract: ",Object(r.mdx)("inlineCode",{parentName:"h2"},"DarknodePaymentStore")),Object(r.mdx)("p",null,"DarknodePaymentStore is responsible for tracking balances which have\nbeen allocated to the darknodes. It is also responsible for holding\nthe tokens to be paid out to darknodes."),Object(r.mdx)("p",null,"Inherits from:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"Context")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(r.mdx)("hr",null),Object(r.mdx)("br",null),Object(r.mdx)("h2",{id:"variables"},"Variables"),Object(r.mdx)("h3",{id:"version-string"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"VERSION")),": ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"string"))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"ethereum-address"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"ETHEREUM")),": ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"address"))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"darknodebalances-mappingaddress--mappingaddress--uint256"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"darknodeBalances")),": ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"mapping(address => mapping(address => uint256))"))),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"lockedbalances-mappingaddress--uint256"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"lockedBalances")),": ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"mapping(address => uint256)"))),Object(r.mdx)("hr",null),Object(r.mdx)("br",null),Object(r.mdx)("h2",{id:"functions"},"Functions"),Object(r.mdx)("h3",{id:"constructor-string-_version-public"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"constructor"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(string _VERSION)"))," (public)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"_VERSION"),": A string defining the contract version.")),Object(r.mdx)("p",null,"The contract constructor."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"fallback--external"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"fallback"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"()"))," (external)"),Object(r.mdx)("p",null,"Allow direct ETH payments to be made to the DarknodePaymentStore."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"totalbalance-address-_token-\u2192-uint256-public"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"totalBalance"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(address _token) \u2192 uint256"))," (public)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"_token"),": The token to check balance of.")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"The"),": total balance of the contract.")),Object(r.mdx)("p",null,"Get the total balance of the contract for a particular token."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"availablebalance-address-_token-\u2192-uint256-public"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"availableBalance"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(address _token) \u2192 uint256"))," (public)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"_token"),": The token to check balance of.")),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Returns")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"The"),": available balance of the contract.")),Object(r.mdx)("p",null,"Get the available balance of the contract for a particular token\nThis is the free amount which has not yet been allocated to\ndarknodes."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"incrementdarknodebalance-address-_darknode-address-_token-uint256-_amount-external"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"incrementDarknodeBalance"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(address _darknode, address _token, uint256 _amount)"))," (external)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"_darknode"),": The address of the darknode to increase balance of.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"_token"),": The token which the balance should be incremented.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"_amount"),": The amount that the balance should be incremented by."))),Object(r.mdx)("p",null,"Increments the amount of funds allocated to a particular\ndarknode."),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"transfer-address-_darknode-address-_token-uint256-_amount-address-payable-_recipient-external"},Object(r.mdx)("strong",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"strong"},"transfer"))," ",Object(r.mdx)("em",{parentName:"h3"},Object(r.mdx)("inlineCode",{parentName:"em"},"(address _darknode, address _token, uint256 _amount, address payable _recipient)"))," (external)"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Params")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"_darknode"),": The address of the darknode.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"_token"),": Which token to transfer.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"_amount"),": The amount to transfer.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("inlineCode",{parentName:"p"},"_recipient"),": The address to withdraw it to."))),Object(r.mdx)("p",null,"Transfers an amount out of balance to a specified address."),Object(r.mdx)("hr",null))}i.isMDXComponent=!0},415:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return i})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return x})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return s}));var a=t(0),r=t.n(a);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),s=function(e){return function(n){var t=p(n.components);return r.a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},O=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,d=e.originalType,o=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),i=p(t),s=a,u=i["".concat(o,".").concat(s)]||i[s]||b[s]||d;return t?r.a.createElement(u,l(l({ref:n},c),{},{components:t})):r.a.createElement(u,l({ref:n},c))}));function x(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var d=t.length,o=new Array(d);o[0]=O;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var m=2;m<d;m++)o[m]=t[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},416:function(e,n,t){"use strict";var a=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var r=a(t(0));let d;n.DocType=d,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(d||(n.DocType=d={}));const o={[d.Tutorial]:"#b16bfc",[d.HowTo]:"#EC0088",[d.Reference]:"#ff823a",[d.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);