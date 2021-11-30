(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(9),o=(n(0),n(415)),d=n(416),c={title:"GatewayRegistry"},s={unversionedId:"gateway-sol/Gateway/GatewayRegistry",id:"gateway-sol/Gateway/GatewayRegistry",isDocsHomePage:!1,title:"GatewayRegistry",description:"Contract: GatewayRegistry",source:"@site/contracts/gateway-sol/Gateway/GatewayRegistry.mdx",slug:"/gateway-sol/Gateway/GatewayRegistry",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/GatewayRegistry",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/gateway-sol/Gateway/GatewayRegistry.mdx",version:"current",sidebar:"contracts",previous:{title:"RenToken",permalink:"/ren-client-docs/contracts/darknode-sol/RenToken/RenToken"},next:{title:"MintGatewayLogicV1",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/MintGatewayLogicV1"}},l=[{value:"Contract: <code>GatewayRegistry</code>",id:"contract-gatewayregistry",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>numGatewayContracts</code></strong>: <em><code>uint256</code></em>",id:"numgatewaycontracts-uint256",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>setGateway</code></strong> <em><code>(string _symbol, address _token, address _gatewayContract)</code></em> (external)",id:"setgateway-string-_symbol-address-_token-address-_gatewaycontract-external",children:[]},{value:"<strong><code>updateGateway</code></strong> <em><code>(address _token, address _newGatewayContract)</code></em> (external)",id:"updategateway-address-_token-address-_newgatewaycontract-external",children:[]},{value:"<strong><code>removeGateway</code></strong> <em><code>(string _symbol)</code></em> (external)",id:"removegateway-string-_symbol-external",children:[]},{value:"<strong><code>getGateways</code></strong> <em><code>(address _start, uint256 _count) \u2192 address[]</code></em> (external)",id:"getgateways-address-_start-uint256-_count-\u2192-address-external",children:[]},{value:"<strong><code>getRenTokens</code></strong> <em><code>(address _start, uint256 _count) \u2192 address[]</code></em> (external)",id:"getrentokens-address-_start-uint256-_count-\u2192-address-external",children:[]},{value:"<strong><code>getGatewayByToken</code></strong> <em><code>(address _token) \u2192 contract IGateway</code></em> (external)",id:"getgatewaybytoken-address-_token-\u2192-contract-igateway-external",children:[]},{value:"<strong><code>getGatewayBySymbol</code></strong> <em><code>(string _tokenSymbol) \u2192 contract IGateway</code></em> (external)",id:"getgatewaybysymbol-string-_tokensymbol-\u2192-contract-igateway-external",children:[]},{value:"<strong><code>getTokenBySymbol</code></strong> <em><code>(string _tokenSymbol) \u2192 contract IERC20</code></em> (external)",id:"gettokenbysymbol-string-_tokensymbol-\u2192-contract-ierc20-external",children:[]},{value:"<strong><code>symbolIsValid</code></strong> <em><code>(string _tokenSymbol) \u2192 bool</code></em> (public)",id:"symbolisvalid-string-_tokensymbol-\u2192-bool-public",children:[]}]},{value:"Events",id:"events",children:[{value:"<strong><code>LogGatewayRegistered</code></strong> <em><code>(string _symbol, string _indexedSymbol, address _token, address _gatewayContract)</code></em>",id:"loggatewayregistered-string-_symbol-string-_indexedsymbol-address-_token-address-_gatewaycontract",children:[]},{value:"<strong><code>LogGatewayDeregistered</code></strong> <em><code>(string _symbol, string _indexedSymbol, address _token, address _gatewayContract)</code></em>",id:"loggatewayderegistered-string-_symbol-string-_indexedsymbol-address-_token-address-_gatewaycontract",children:[]},{value:"<strong><code>LogGatewayUpdated</code></strong> <em><code>(address _token, address _currentGatewayContract, address _newGatewayContract)</code></em>",id:"loggatewayupdated-address-_token-address-_currentgatewaycontract-address-_newgatewaycontract",children:[]}]}],m={toc:l};function i(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(d.DocTag,{type:d.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-gatewayregistry"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"GatewayRegistry")),Object(o.mdx)("p",null,"GatewayRegistry is a mapping from assets to their associated\nRenERC20 and Gateway contracts."),Object(o.mdx)("p",null,"Inherits from:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"CanReclaimTokens")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Context")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"variables"},"Variables"),Object(o.mdx)("h3",{id:"numgatewaycontracts-uint256"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"numGatewayContracts")),": ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"uint256"))),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"functions"},"Functions"),Object(o.mdx)("h3",{id:"setgateway-string-_symbol-address-_token-address-_gatewaycontract-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"setGateway"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _symbol, address _token, address _gatewayContract)"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"_token"),": The address of the RenERC20 token contract.")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"_gatewayContract"),": The address of the Gateway contract."))),Object(o.mdx)("p",null,"Allow the owner to set the Gateway contract for a given\nRenERC20 token contract."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"updategateway-address-_token-address-_newgatewaycontract-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"updateGateway"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _token, address _newGatewayContract)"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"_token"),": The address of the RenERC20 contract.")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"_newGatewayContract"),": The updated address of the Gateway contract."))),Object(o.mdx)("p",null,"Allow the owner to update the Gateway contract for a given\nRenERC20 contract."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"removegateway-string-_symbol-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"removeGateway"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _symbol)"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"_symbol"),": The symbol of the token to deregister.")),Object(o.mdx)("p",null,"Allows the owner to remove the Gateway contract for a given\nRenERC20 contract."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"getgateways-address-_start-uint256-_count-\u2192-address-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"getGateways"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _start, uint256 _count) \u2192 address[]"))," (external)"),Object(o.mdx)("p",null,"To get all the registered Gateway contracts use count = 0."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"getrentokens-address-_start-uint256-_count-\u2192-address-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"getRenTokens"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _start, uint256 _count) \u2192 address[]"))," (external)"),Object(o.mdx)("p",null,"To get all the registered RenERC20 tokens use count = 0."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"getgatewaybytoken-address-_token-\u2192-contract-igateway-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"getGatewayByToken"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _token) \u2192 contract IGateway"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"_token"),": The address of the RenERC20 token contract.")),Object(o.mdx)("p",null,"Returns the Gateway contract for the given RenERC20 token\naddress."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"getgatewaybysymbol-string-_tokensymbol-\u2192-contract-igateway-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"getGatewayBySymbol"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 contract IGateway"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"_tokenSymbol"),": The symbol of the RenERC20 token contract.")),Object(o.mdx)("p",null,"Returns the Gateway contract for the given RenERC20 token\nsymbol."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"gettokenbysymbol-string-_tokensymbol-\u2192-contract-ierc20-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"getTokenBySymbol"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 contract IERC20"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"_tokenSymbol"),": The symbol of the RenERC20 token contract to\nlookup.")),Object(o.mdx)("p",null,"Returns the RenERC20 address for the given token symbol."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"symbolisvalid-string-_tokensymbol-\u2192-bool-public"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"symbolIsValid"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _tokenSymbol) \u2192 bool"))," (public)"),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"events"},"Events"),Object(o.mdx)("h3",{id:"loggatewayregistered-string-_symbol-string-_indexedsymbol-address-_token-address-_gatewaycontract"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"LogGatewayRegistered"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _symbol, string _indexedSymbol, address _token, address _gatewayContract)"))),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"The symbol is included twice because strings have to be hashed\nfirst in order to be used as a log index/topic.")),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"loggatewayderegistered-string-_symbol-string-_indexedsymbol-address-_token-address-_gatewaycontract"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"LogGatewayDeregistered"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(string _symbol, string _indexedSymbol, address _token, address _gatewayContract)"))),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"loggatewayupdated-address-_token-address-_currentgatewaycontract-address-_newgatewaycontract"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"LogGatewayUpdated"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _token, address _currentGatewayContract, address _newGatewayContract)"))),Object(o.mdx)("hr",null))}i.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return g})),n.d(t,"mdx",(function(){return p})),n.d(t,"useMDXComponents",(function(){return b})),n.d(t,"withMDXComponents",(function(){return i}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),i=function(e){return function(t){var n=b(t.components);return r.a.createElement(e,d({},t,{components:n}))}},b=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=b(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(n),i=a,g=m["".concat(d,".").concat(i)]||m[i]||y[i]||o;return n?r.a.createElement(g,s(s({ref:t},c),{},{components:n})):r.a.createElement(g,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,d[1]=c;for(var l=2;l<o;l++)d[l]=n[l];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r,o,d=a(n(0));t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));var c=((r={})[o.Tutorial]="#b16bfc",r[o.HowTo]="#EC0088",r[o.Reference]="#ff823a",r[o.Explanation]="#29C0AF",r);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:{border:"2px solid "+c[t]||!1,borderRadius:"5px",color:c[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);