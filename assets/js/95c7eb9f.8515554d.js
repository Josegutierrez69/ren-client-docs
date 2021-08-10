(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(413)),c=n(414),o={title:"ERC20WithRate"},d={unversionedId:"gateway-sol/Gateway/ERC20WithRate",id:"gateway-sol/Gateway/ERC20WithRate",isDocsHomePage:!1,title:"ERC20WithRate",description:"Contract: ERC20WithRate",source:"@site/contracts/gateway-sol/Gateway/ERC20WithRate.mdx",slug:"/gateway-sol/Gateway/ERC20WithRate",permalink:"/ren-client-docs/contracts/gateway-sol/Gateway/ERC20WithRate",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/gateway-sol/Gateway/ERC20WithRate.mdx",version:"current"},l=[{value:"Contract: <code>ERC20WithRate</code>",id:"contract-erc20withrate",children:[]},{value:"Variables",id:"variables",children:[{value:"<strong><code>_rateScale</code></strong>: <em><code>uint256</code></em>",id:"_ratescale-uint256",children:[]},{value:"<strong><code>_rate</code></strong>: <em><code>uint256</code></em>",id:"_rate-uint256",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>initialize</code></strong> <em><code>(address _nextOwner, uint256 _initialRate)</code></em> (public)",id:"initialize-address-_nextowner-uint256-_initialrate-public",children:[]},{value:"<strong><code>setExchangeRate</code></strong> <em><code>(uint256 _nextRate)</code></em> (public)",id:"setexchangerate-uint256-_nextrate-public",children:[]},{value:"<strong><code>exchangeRateCurrent</code></strong> <em><code>() \u2192 uint256</code></em> (public)",id:"exchangeratecurrent--\u2192-uint256-public",children:[]},{value:"<strong><code>_setRate</code></strong> <em><code>(uint256 _nextRate)</code></em> (internal)",id:"_setrate-uint256-_nextrate-internal",children:[]},{value:"<strong><code>balanceOfUnderlying</code></strong> <em><code>(address _account) \u2192 uint256</code></em> (public)",id:"balanceofunderlying-address-_account-\u2192-uint256-public",children:[]},{value:"<strong><code>toUnderlying</code></strong> <em><code>(uint256 _amount) \u2192 uint256</code></em> (public)",id:"tounderlying-uint256-_amount-\u2192-uint256-public",children:[]},{value:"<strong><code>fromUnderlying</code></strong> <em><code>(uint256 _amountUnderlying) \u2192 uint256</code></em> (public)",id:"fromunderlying-uint256-_amountunderlying-\u2192-uint256-public",children:[]}]},{value:"Events",id:"events",children:[{value:"<strong><code>LogRateChanged</code></strong> <em><code>(uint256 _rate)</code></em>",id:"logratechanged-uint256-_rate",children:[]}]}],m={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("h2",{id:"contract-erc20withrate"},"Contract: ",Object(i.mdx)("inlineCode",{parentName:"h2"},"ERC20WithRate")),Object(i.mdx)("p",null,"ERC20WithRate allows for a more dynamic fee model by storing a rate\nthat tracks the number of the underlying asset's unit represented by a\nsingle ERC20 token."),Object(i.mdx)("p",null,"Inherits from:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"ERC20")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"IERC20")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Context")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"variables"},"Variables"),Object(i.mdx)("h3",{id:"_ratescale-uint256"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"_rateScale")),": ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"uint256"))),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"_rate-uint256"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"_rate")),": ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"uint256"))),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"functions"},"Functions"),Object(i.mdx)("h3",{id:"initialize-address-_nextowner-uint256-_initialrate-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"initialize"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address _nextOwner, uint256 _initialRate)"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"setexchangerate-uint256-_nextrate-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"setExchangeRate"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _nextRate)"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"exchangeratecurrent--\u2192-uint256-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"exchangeRateCurrent"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"_setrate-uint256-_nextrate-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"_setRate"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _nextRate)"))," (internal)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"balanceofunderlying-address-_account-\u2192-uint256-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"balanceOfUnderlying"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address _account) \u2192 uint256"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"tounderlying-uint256-_amount-\u2192-uint256-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"toUnderlying"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _amount) \u2192 uint256"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"fromunderlying-uint256-_amountunderlying-\u2192-uint256-public"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"fromUnderlying"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _amountUnderlying) \u2192 uint256"))," (public)"),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"events"},"Events"),Object(i.mdx)("h3",{id:"logratechanged-uint256-_rate"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"LogRateChanged"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _rate)"))),Object(i.mdx)("hr",null))}u.isMDXComponent=!0},413:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return b})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,c({},t,{components:n}))}},p=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},x=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,b=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return n?a.a.createElement(b,d(d({ref:t},o),{},{components:n})):a.a.createElement(b,d({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=x;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const c={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);