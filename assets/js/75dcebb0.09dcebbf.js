(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(9),o=(n(0),n(415)),c=n(416),i={title:"IGateway"},u={unversionedId:"darknode-sol/Gateway/interfaces/IGateway",id:"darknode-sol/Gateway/interfaces/IGateway",isDocsHomePage:!1,title:"IGateway",description:"Contract: IGateway",source:"@site/contracts/darknode-sol/Gateway/interfaces/IGateway.mdx",slug:"/darknode-sol/Gateway/interfaces/IGateway",permalink:"/ren-client-docs/contracts/darknode-sol/Gateway/interfaces/IGateway",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/Gateway/interfaces/IGateway.mdx",version:"current"},d=[{value:"Contract: <code>IGateway</code>",id:"contract-igateway",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>mint</code></strong> <em><code>(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes _sig) \u2192 uint256</code></em> (external)",id:"mint-bytes32-_phash-uint256-_amount-bytes32-_nhash-bytes-_sig-\u2192-uint256-external",children:[]},{value:"<strong><code>mintFee</code></strong> <em><code>() \u2192 uint256</code></em> (external)",id:"mintfee--\u2192-uint256-external",children:[]},{value:"<strong><code>burn</code></strong> <em><code>(bytes _to, uint256 _amountScaled) \u2192 uint256</code></em> (external)",id:"burn-bytes-_to-uint256-_amountscaled-\u2192-uint256-external",children:[]},{value:"<strong><code>burnFee</code></strong> <em><code>() \u2192 uint256</code></em> (external)",id:"burnfee--\u2192-uint256-external",children:[]}]}],l={toc:d};function m(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c.DocTag,{type:c.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("h2",{id:"contract-igateway"},"Contract: ",Object(o.mdx)("inlineCode",{parentName:"h2"},"IGateway")),Object(o.mdx)("hr",null),Object(o.mdx)("br",null),Object(o.mdx)("h2",{id:"functions"},"Functions"),Object(o.mdx)("h3",{id:"mint-bytes32-_phash-uint256-_amount-bytes32-_nhash-bytes-_sig-\u2192-uint256-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"mint"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes _sig) \u2192 uint256"))," (external)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"mintfee--\u2192-uint256-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"mintFee"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (external)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"burn-bytes-_to-uint256-_amountscaled-\u2192-uint256-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"burn"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"(bytes _to, uint256 _amountScaled) \u2192 uint256"))," (external)"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"burnfee--\u2192-uint256-external"},Object(o.mdx)("strong",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"strong"},"burnFee"))," ",Object(o.mdx)("em",{parentName:"h3"},Object(o.mdx)("inlineCode",{parentName:"em"},"() \u2192 uint256"))," (external)"),Object(o.mdx)("hr",null))}m.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return s})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){return function(t){var n=s(t.components);return a.a.createElement(e,c({},t,{components:n}))}},s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),l=s(n),m=r,p=l["".concat(c,".").concat(m)]||l[m]||b[m]||o;return n?a.a.createElement(p,u(u({ref:t},i),{},{components:n})):a.a.createElement(p,u({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a,o,c=r(n(0));t.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(t.DocType=o={}));var i=((a={})[o.Tutorial]="#b16bfc",a[o.HowTo]="#EC0088",a[o.Reference]="#ff823a",a[o.Explanation]="#29C0AF",a);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:{border:"2px solid "+i[t]||!1,borderRadius:"5px",color:i[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}}}]);