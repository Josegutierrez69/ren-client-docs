(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(9),o=(n(0),n(415)),d=n(416),l={title:"ClaimlessRewardsTokenHandler"},i={unversionedId:"darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler",id:"darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler",isDocsHomePage:!1,title:"ClaimlessRewardsTokenHandler",description:"Contract: ClaimlessRewardsTokenHandler",source:"@site/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler.mdx",slug:"/darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsTokenHandler.mdx",version:"current",sidebar:"contracts",previous:{title:"DarknodePayment",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/DarknodePayment"},next:{title:"ClaimlessRewardsCycleHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsCycleHandler"}},c=[{value:"Contract: <code>ClaimlessRewardsTokenHandler</code>",id:"contract-claimlessrewardstokenhandler",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>registerToken</code></strong> <em><code>(address _token)</code></em> (external)",id:"registertoken-address-_token-external",children:[]},{value:"<strong><code>deregisterToken</code></strong> <em><code>(address _token)</code></em> (external)",id:"deregistertoken-address-_token-external",children:[]},{value:"<strong><code>getRegisteredTokens</code></strong> <em><code>() \u2192 address[]</code></em> (external)",id:"getregisteredtokens--\u2192-address-external",children:[]},{value:"<strong><code>isRegistered</code></strong> <em><code>(address _token) \u2192 bool</code></em> (external)",id:"isregistered-address-_token-\u2192-bool-external",children:[]},{value:"<strong><code>forward</code></strong> <em><code>(address _token)</code></em> (external)",id:"forward-address-_token-external",children:[]}]}],s={toc:c};function m(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(d.DocTag,{type:d.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-claimlessrewardstokenhandler"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"ClaimlessRewardsTokenHandler")),Object(o.mdx)("p",null,"Inherits from:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsState")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsEvents")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Context")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"functions"},"Functions"),Object(o.mdx)("h3",{id:"registertoken-address-_token-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"registerToken"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _token)"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"_token"),": The address of the token to be registered.")),Object(o.mdx)("p",null,"Adds tokens to be payable. Registration is pending until next\ncycle."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"deregistertoken-address-_token-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"deregisterToken"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _token)"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"_token"),": The address of the token to be deregistered.")),Object(o.mdx)("p",null,"Removes a token from the list of supported tokens.\nDeregistration is pending until next cycle."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"getregisteredtokens--\u2192-address-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"getRegisteredTokens"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"() \u2192 address[]"))," (external)"),Object(o.mdx)("p",null,"(external view) Returns the full list of registered tokens."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"isregistered-address-_token-\u2192-bool-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"isRegistered"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _token) \u2192 bool"))," (external)"),Object(o.mdx)("p",null,"(external view) Returns whether a token is registered."),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"forward-address-_token-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"forward"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(address _token)"))," (external)"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Params")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"_token"),": The token to forward. For ETH, this is 0xeeee... .")),Object(o.mdx)("p",null,"Forwards any balance held by this contract on to the store."),Object(o.mdx)("hr",null))}m.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,d({},t,{components:n}))}},u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},x=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,p=s["".concat(d,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(p,i(i({ref:t},l),{},{components:n})):a.a.createElement(p,i({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=x;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var c=2;c<o;c++)d[c]=n[c];return a.a.createElement.apply(null,d)}return a.a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a,o,d=r(n(0));t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));var l=((a={})[o.Tutorial]="#b16bfc",a[o.HowTo]="#EC0088",a[o.Reference]="#ff823a",a[o.Explanation]="#29C0AF",a);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:{border:"2px solid "+l[t]||!1,borderRadius:"5px",color:l[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);