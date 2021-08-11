(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(415)),d=n(416);const o={title:"ClaimlessRewardsWithdrawHandler"},i={unversionedId:"darknode-sol/DarknodePayment/ClaimlessRewardsWithdrawHandler",id:"darknode-sol/DarknodePayment/ClaimlessRewardsWithdrawHandler",isDocsHomePage:!1,title:"ClaimlessRewardsWithdrawHandler",description:"Contract: ClaimlessRewardsWithdrawHandler",source:"@site/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsWithdrawHandler.mdx",slug:"/darknode-sol/DarknodePayment/ClaimlessRewardsWithdrawHandler",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsWithdrawHandler",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsWithdrawHandler.mdx",version:"current",sidebar:"contracts",previous:{title:"ClaimlessRewards",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewards"},next:{title:"ClaimlessRewardsState",permalink:"/ren-client-docs/contracts/darknode-sol/DarknodePayment/ClaimlessRewardsState"}},s=[{value:"Contract: <code>ClaimlessRewardsWithdrawHandler</code>",id:"contract-claimlessrewardswithdrawhandler",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>getNextEpochFromTimestamp</code></strong> <em><code>(uint256 _target) \u2192 uint256</code></em> (public)",id:"getnextepochfromtimestamp-uint256-_target-\u2192-uint256-public",children:[]},{value:"<strong><code>darknodeBalances</code></strong> <em><code>(address _node, address _token) \u2192 uint256</code></em> (external)",id:"darknodebalances-address-_node-address-_token-\u2192-uint256-external",children:[]},{value:"<strong><code>withdrawToken</code></strong> <em><code>(address[] _nodes, address _token)</code></em> (public)",id:"withdrawtoken-address-_nodes-address-_token-public",children:[]},{value:"<strong><code>withdrawMultiple</code></strong> <em><code>(address[] _nodes, address[] _tokens)</code></em> (public)",id:"withdrawmultiple-address-_nodes-address-_tokens-public",children:[]},{value:"<strong><code>withdraw</code></strong> <em><code>(address _node, address _token)</code></em> (public)",id:"withdraw-address-_node-address-_token-public",children:[]},{value:"<strong><code>withdrawToCommunityFund</code></strong> <em><code>(address[] _tokens)</code></em> (public)",id:"withdrawtocommunityfund-address-_tokens-public",children:[]},{value:"<strong><code>_calculateNewWithdrawable</code></strong> <em><code>(address _node, address _token) \u2192 uint256, uint256</code></em> (internal)",id:"_calculatenewwithdrawable-address-_node-address-_token-\u2192-uint256-uint256-internal",children:[]}]}],c={toc:s};function l({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(d.DocTag,{type:d.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-claimlessrewardswithdrawhandler"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"ClaimlessRewardsWithdrawHandler")),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsCycleHandler")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsState")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"ClaimlessRewardsEvents"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"getnextepochfromtimestamp-uint256-_target-\u2192-uint256-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"getNextEpochFromTimestamp"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _target) \u2192 uint256"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"darknodebalances-address-_node-address-_token-\u2192-uint256-external"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"darknodeBalances"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _node, address _token) \u2192 uint256"))," (external)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"withdrawtoken-address-_nodes-address-_token-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"withdrawToken"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address[] _nodes, address _token)"))," (public)"),Object(a.mdx)("p",null,"Withdraw the provided asset for each node in the list."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"withdrawmultiple-address-_nodes-address-_tokens-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"withdrawMultiple"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address[] _nodes, address[] _tokens)"))," (public)"),Object(a.mdx)("p",null,"Withdraw multiple assets for each darknode in the list.\nThe interface has been kept the same as the DarknodePayment contract\nfor backward-compatibility."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"withdraw-address-_node-address-_token-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"withdraw"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _node, address _token)"))," (public)"),Object(a.mdx)("p",null,"Withdraw the provided asset for the given darknode.\nThe interface has been kept the same as the DarknodePayment contract\nfor backward-compatibility."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"withdrawtocommunityfund-address-_tokens-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"withdrawToCommunityFund"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address[] _tokens)"))," (public)"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"_calculatenewwithdrawable-address-_node-address-_token-\u2192-uint256-uint256-internal"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"_calculateNewWithdrawable"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _node, address _token) \u2192 uint256, uint256"))," (internal)"),Object(a.mdx)("hr",null))}l.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return w})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,p=l["".concat(o,".").concat(m)]||l[m]||b[m]||d;return n?a.a.createElement(p,s(s({ref:t},i),{},{components:n})):a.a.createElement(p,s({ref:t},i))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<d;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let d;t.DocType=d,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(d||(t.DocType=d={}));const o={[d.Tutorial]:"#b16bfc",[d.HowTo]:"#EC0088",[d.Reference]:"#ff823a",[d.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);