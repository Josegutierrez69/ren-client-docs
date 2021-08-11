(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{233:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return m}));var r=t(3),i=(t(0),t(415)),a=t(416);const o={title:"RenERC20LogicV1"},c={unversionedId:"darknode-sol/Gateway/RenERC20LogicV1",id:"darknode-sol/Gateway/RenERC20LogicV1",isDocsHomePage:!1,title:"RenERC20LogicV1",description:"Contract: RenERC20LogicV1",source:"@site/contracts/darknode-sol/Gateway/RenERC20LogicV1.mdx",slug:"/darknode-sol/Gateway/RenERC20LogicV1",permalink:"/ren-client-docs/contracts/darknode-sol/Gateway/RenERC20LogicV1",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/Gateway/RenERC20LogicV1.mdx",version:"current"},d=[{value:"Contract: <code>RenERC20LogicV1</code>",id:"contract-renerc20logicv1",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>initialize</code></strong> <em><code>(uint256 _chainId, address _nextOwner, uint256 _initialRate, string _version, string _name, string _symbol, uint8 _decimals)</code></em> (public)",id:"initialize-uint256-_chainid-address-_nextowner-uint256-_initialrate-string-_version-string-_name-string-_symbol-uint8-_decimals-public",children:[]},{value:"<strong><code>mint</code></strong> <em><code>(address _to, uint256 _amount)</code></em> (public)",id:"mint-address-_to-uint256-_amount-public",children:[]},{value:"<strong><code>burn</code></strong> <em><code>(address _from, uint256 _amount)</code></em> (public)",id:"burn-address-_from-uint256-_amount-public",children:[]},{value:"<strong><code>transfer</code></strong> <em><code>(address recipient, uint256 amount) \u2192 bool</code></em> (public)",id:"transfer-address-recipient-uint256-amount-\u2192-bool-public",children:[]},{value:"<strong><code>transferFrom</code></strong> <em><code>(address sender, address recipient, uint256 amount) \u2192 bool</code></em> (public)",id:"transferfrom-address-sender-address-recipient-uint256-amount-\u2192-bool-public",children:[]}]}],l={toc:d};function m({components:e,...n}){return Object(i.mdx)("wrapper",Object(r.default)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("h2",{id:"contract-renerc20logicv1"},"Contract: ",Object(i.mdx)("inlineCode",{parentName:"h2"},"RenERC20LogicV1")),Object(i.mdx)("p",null,"RenERC20 represents a digital asset that has been bridged on to\nthe Ethereum ledger. It exposes mint and burn functions that can only be\ncalled by its associated Gateway contract."),Object(i.mdx)("p",null,"Inherits from:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"CanReclaimTokens")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20WithPermit")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20WithRate")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20Detailed")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"IERC20")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Context")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"functions"},"Functions"),Object(i.mdx)("h3",{id:"initialize-uint256-_chainid-address-_nextowner-uint256-_initialrate-string-_version-string-_name-string-_symbol-uint8-_decimals-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"initialize"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _chainId, address _nextOwner, uint256 _initialRate, string _version, string _name, string _symbol, uint8 _decimals)"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"mint-address-_to-uint256-_amount-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"mint"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address _to, uint256 _amount)"))," (public)"),Object(i.mdx)("p",null,"mint can only be called by the tokens' associated Gateway\ncontract. See Gateway's mint function instead."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"burn-address-_from-uint256-_amount-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"burn"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address _from, uint256 _amount)"))," (public)"),Object(i.mdx)("p",null,"burn can only be called by the tokens' associated Gateway\ncontract. See Gateway's burn functions instead."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"transfer-address-recipient-uint256-amount-\u2192-bool-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"transfer"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address recipient, uint256 amount) \u2192 bool"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"transferfrom-address-sender-address-recipient-uint256-amount-\u2192-bool-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"transferFrom"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address sender, address recipient, uint256 amount) \u2192 bool"))," (public)"),Object(i.mdx)("hr",null))}m.isMDXComponent=!0},415:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return m})),t.d(n,"MDXProvider",(function(){return p})),t.d(n,"mdx",(function(){return f})),t.d(n,"useMDXComponents",(function(){return u})),t.d(n,"withMDXComponents",(function(){return s}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=i.a.createContext({}),s=function(e){return function(n){var t=u(n.components);return i.a.createElement(e,o({},n,{components:t}))}},u=function(e){var n=i.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(m.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},O=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),s=r,p=m["".concat(o,".").concat(s)]||m[s]||b[s]||a;return t?i.a.createElement(p,d(d({ref:n},c),{},{components:t})):i.a.createElement(p,d({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=O;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},416:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var i=r(t(0));let a;n.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(n.DocType=a={}));const o={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);