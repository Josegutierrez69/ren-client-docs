(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{345:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(485)),o=n(486),c={title:"RenERC20LogicV1"},d={unversionedId:"gateway-sol/Gateway/RenERC20LogicV1",id:"gateway-sol/Gateway/RenERC20LogicV1",isDocsHomePage:!1,title:"RenERC20LogicV1",description:"Contract: RenERC20LogicV1",source:"@site/contracts/gateway-sol/Gateway/RenERC20LogicV1.mdx",slug:"/gateway-sol/Gateway/RenERC20LogicV1",permalink:"/contracts/gateway-sol/Gateway/RenERC20LogicV1",version:"current",sidebar:"contracts",previous:{title:"LockGatewayStateV1",permalink:"/contracts/gateway-sol/Gateway/LockGatewayStateV1"}},l=[{value:"Contract: <code>RenERC20LogicV1</code>",id:"contract-renerc20logicv1",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>initialize</code></strong> <em><code>(uint256 _chainId, address _nextOwner, uint256 _initialRate, string _version, string _name, string _symbol, uint8 _decimals)</code></em> (public)",id:"initialize-uint256-_chainid-address-_nextowner-uint256-_initialrate-string-_version-string-_name-string-_symbol-uint8-_decimals-public",children:[]},{value:"<strong><code>updateSymbol</code></strong> <em><code>(string symbol)</code></em> (public)",id:"updatesymbol-string-symbol-public",children:[]},{value:"<strong><code>mint</code></strong> <em><code>(address _to, uint256 _amount)</code></em> (public)",id:"mint-address-_to-uint256-_amount-public",children:[]},{value:"<strong><code>burn</code></strong> <em><code>(address _from, uint256 _amount)</code></em> (public)",id:"burn-address-_from-uint256-_amount-public",children:[]},{value:"<strong><code>transfer</code></strong> <em><code>(address recipient, uint256 amount) \u2192 bool</code></em> (public)",id:"transfer-address-recipient-uint256-amount-\u2192-bool-public",children:[]},{value:"<strong><code>transferFrom</code></strong> <em><code>(address sender, address recipient, uint256 amount) \u2192 bool</code></em> (public)",id:"transferfrom-address-sender-address-recipient-uint256-amount-\u2192-bool-public",children:[]}]}],m={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("h2",{id:"contract-renerc20logicv1"},"Contract: ",Object(i.mdx)("inlineCode",{parentName:"h2"},"RenERC20LogicV1")),Object(i.mdx)("p",null,"RenERC20 represents a digital asset that has been bridged on to\nthe Ethereum ledger. It exposes mint and burn functions that can only be\ncalled by it's associated Gateway contract."),Object(i.mdx)("p",null,"Inherits from:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"CanReclaimTokens")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20WithPermit")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20WithRate")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20Detailed")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"IERC20")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Context")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"functions"},"Functions"),Object(i.mdx)("h3",{id:"initialize-uint256-_chainid-address-_nextowner-uint256-_initialrate-string-_version-string-_name-string-_symbol-uint8-_decimals-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"initialize"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _chainId, address _nextOwner, uint256 _initialRate, string _version, string _name, string _symbol, uint8 _decimals)"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"updatesymbol-string-symbol-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"updateSymbol"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(string symbol)"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"mint-address-_to-uint256-_amount-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"mint"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address _to, uint256 _amount)"))," (public)"),Object(i.mdx)("p",null,"mint can only be called by the tokens' associated Gateway\ncontract. See Gateway's mint function instead."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"burn-address-_from-uint256-_amount-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"burn"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address _from, uint256 _amount)"))," (public)"),Object(i.mdx)("p",null,"burn can only be called by the tokens' associated Gateway\ncontract. See Gateway's burn functions instead."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"transfer-address-recipient-uint256-amount-\u2192-bool-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"transfer"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address recipient, uint256 amount) \u2192 bool"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"transferfrom-address-sender-address-recipient-uint256-amount-\u2192-bool-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"transferFrom"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address sender, address recipient, uint256 amount) \u2192 bool"))," (public)"),Object(i.mdx)("hr",null))}s.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,p=m["".concat(o,".").concat(s)]||m[s]||b[s]||i;return n?a.a.createElement(p,d(d({ref:t},c),{},{components:n})):a.a.createElement(p,d({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=O;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const o={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);