(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{410:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return y})),n.d(t,"mdx",(function(){return p})),n.d(t,"useMDXComponents",(function(){return g})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){return function(t){var n=g(t.components);return a.a.createElement(e,o({},t,{components:n}))}},g=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},y=function(e){var t=g(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=g(n),m=r,y=l["".concat(o,".").concat(m)]||l[m]||u[m]||d;return n?a.a.createElement(y,c(c({ref:t},s),{},{components:n})):a.a.createElement(y,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<d;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},411:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let d;t.DocType=d,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(d||(t.DocType=d={}));const o={[d.Tutorial]:"#b16bfc",[d.HowTo]:"#EC0088",[d.Reference]:"#ff823a",[d.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(9),d=(n(0),n(410)),o=n(411),s={title:"IGatewayRegistry"},c={unversionedId:"gateway-sol/Gateway/interfaces/IGatewayRegistry",id:"gateway-sol/Gateway/interfaces/IGatewayRegistry",isDocsHomePage:!1,title:"IGatewayRegistry",description:"Contract: IGatewayRegistry",source:"@site/contracts/gateway-sol/Gateway/interfaces/IGatewayRegistry.mdx",slug:"/gateway-sol/Gateway/interfaces/IGatewayRegistry",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/interfaces/IGatewayRegistry",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/gateway-sol/Gateway/interfaces/IGatewayRegistry.mdx",version:"current"},i=[{value:"Contract: <code>IGatewayRegistry</code>",id:"contract-igatewayregistry",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>getGateways</code></strong> <em><code>(address _start, uint256 _count) \u2192 address[]</code></em> (external)",id:"getgateways-address-_start-uint256-_count-\u2192-address-external",children:[]},{value:"<strong><code>getRenTokens</code></strong> <em><code>(address _start, uint256 _count) \u2192 address[]</code></em> (external)",id:"getrentokens-address-_start-uint256-_count-\u2192-address-external",children:[]},{value:"<strong><code>getGatewayByToken</code></strong> <em><code>(address _tokenAddress) \u2192 contract IGateway</code></em> (external)",id:"getgatewaybytoken-address-_tokenaddress-\u2192-contract-igateway-external",children:[]},{value:"<strong><code>getGatewayBySymbol</code></strong> <em><code>(string _tokenSymbol) \u2192 contract IGateway</code></em> (external)",id:"getgatewaybysymbol-string-_tokensymbol-\u2192-contract-igateway-external",children:[]},{value:"<strong><code>getTokenBySymbol</code></strong> <em><code>(string _tokenSymbol) \u2192 contract IERC20</code></em> (external)",id:"gettokenbysymbol-string-_tokensymbol-\u2192-contract-ierc20-external",children:[]}]},{value:"Events",id:"events",children:[{value:"<strong><code>LogGatewayRegistered</code></strong> <em><code>(string _symbol, string _indexedSymbol, address _tokenAddress, address _gatewayAddress)</code></em>",id:"loggatewayregistered-string-_symbol-string-_indexedsymbol-address-_tokenaddress-address-_gatewayaddress",children:[]},{value:"<strong><code>LogGatewayDeregistered</code></strong> <em><code>(string _symbol, string _indexedSymbol, address _tokenAddress, address _gatewayAddress)</code></em>",id:"loggatewayderegistered-string-_symbol-string-_indexedsymbol-address-_tokenaddress-address-_gatewayaddress",children:[]},{value:"<strong><code>LogGatewayUpdated</code></strong> <em><code>(address _tokenAddress, address _currentGatewayAddress, address _newGatewayAddress)</code></em>",id:"loggatewayupdated-address-_tokenaddress-address-_currentgatewayaddress-address-_newgatewayaddress",children:[]}]}],l={toc:i};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(d.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(d.mdx)("h2",{id:"contract-igatewayregistry"},"Contract: ",Object(d.mdx)("inlineCode",{parentName:"h2"},"IGatewayRegistry")),Object(d.mdx)("p",null,"GatewayRegistry is a mapping from assets to their associated\nRenERC20 and Gateway contracts."),Object(d.mdx)("hr",null),Object(d.mdx)("br",null),Object(d.mdx)("h2",{id:"functions"},"Functions"),Object(d.mdx)("h3",{id:"getgateways-address-_start-uint256-_count-\u2192-address-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"getGateways"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _start, uint256 _count) \u2192 address[]"))," (external)"),Object(d.mdx)("p",null,"To get all the registered gateways use count = 0."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"getrentokens-address-_start-uint256-_count-\u2192-address-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"getRenTokens"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _start, uint256 _count) \u2192 address[]"))," (external)"),Object(d.mdx)("p",null,"To get all the registered RenERC20s use count = 0."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"getgatewaybytoken-address-_tokenaddress-\u2192-contract-igateway-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"getGatewayByToken"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _tokenAddress) \u2192 contract IGateway"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_tokenAddress"),": The address of the RenERC20 contract.")),Object(d.mdx)("p",null,"Returns the Gateway contract for the given RenERC20\naddress."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"getgatewaybysymbol-string-_tokensymbol-\u2192-contract-igateway-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"getGatewayBySymbol"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 contract IGateway"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_tokenSymbol"),": The symbol of the RenERC20 contract.")),Object(d.mdx)("p",null,"Returns the Gateway contract for the given RenERC20\nsymbol."),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"gettokenbysymbol-string-_tokensymbol-\u2192-contract-ierc20-external"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"getTokenBySymbol"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 contract IERC20"))," (external)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Params")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"_tokenSymbol"),": The symbol of the RenERC20 contract to\nlookup.")),Object(d.mdx)("p",null,"Returns the RenERC20 address for the given token symbol."),Object(d.mdx)("hr",null),Object(d.mdx)("br",null),Object(d.mdx)("h2",{id:"events"},"Events"),Object(d.mdx)("h3",{id:"loggatewayregistered-string-_symbol-string-_indexedsymbol-address-_tokenaddress-address-_gatewayaddress"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogGatewayRegistered"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(string _symbol, string _indexedSymbol, address _tokenAddress, address _gatewayAddress)"))),Object(d.mdx)("p",null,Object(d.mdx)("em",{parentName:"p"},"The symbol is included twice because strings have to be hashed\nfirst in order to be used as a log index/topic.")),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"loggatewayderegistered-string-_symbol-string-_indexedsymbol-address-_tokenaddress-address-_gatewayaddress"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogGatewayDeregistered"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(string _symbol, string _indexedSymbol, address _tokenAddress, address _gatewayAddress)"))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"loggatewayupdated-address-_tokenaddress-address-_currentgatewayaddress-address-_newgatewayaddress"},Object(d.mdx)("strong",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"strong"},"LogGatewayUpdated"))," ",Object(d.mdx)("em",{parentName:"h3"},Object(d.mdx)("inlineCode",{parentName:"em"},"(address _tokenAddress, address _currentGatewayAddress, address _newGatewayAddress)"))),Object(d.mdx)("hr",null))}m.isMDXComponent=!0}}]);