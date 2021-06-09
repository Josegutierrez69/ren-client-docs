(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{219:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return l}));var r=t(3),i=(t(0),t(487)),o=t(488);const a={title:"String"},c={unversionedId:"darknode-sol/libraries/String",id:"darknode-sol/libraries/String",isDocsHomePage:!1,title:"String",description:"Contract: String",source:"@site/contracts/darknode-sol/libraries/String.mdx",slug:"/darknode-sol/libraries/String",permalink:"/ren-client-docs/contracts/darknode-sol/libraries/String",version:"current"},d=[{value:"Contract: <code>String</code>",id:"contract-string",children:[]},{value:"Functions",id:"functions",children:[{value:"<strong><code>fromUint</code></strong> <em><code>(uint256 _i) \u2192 string</code></em> (internal)",id:"fromuint-uint256-_i-\u2192-string-internal",children:[]},{value:"<strong><code>fromBytes32</code></strong> <em><code>(bytes32 _value) \u2192 string</code></em> (internal)",id:"frombytes32-bytes32-_value-\u2192-string-internal",children:[]},{value:"<strong><code>fromAddress</code></strong> <em><code>(address _addr) \u2192 string</code></em> (internal)",id:"fromaddress-address-_addr-\u2192-string-internal",children:[]},{value:"<strong><code>add8</code></strong> <em><code>(string a, string b, string c, string d, string e, string f, string g, string h) \u2192 string</code></em> (internal)",id:"add8-string-a-string-b-string-c-string-d-string-e-string-f-string-g-string-h-\u2192-string-internal",children:[]}]}],s={toc:d};function l({components:e,...n}){return Object(i.mdx)("wrapper",Object(r.default)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(i.mdx)("h2",{id:"contract-string"},"Contract: ",Object(i.mdx)("inlineCode",{parentName:"h2"},"String")),Object(i.mdx)("hr",null),Object(i.mdx)("br",null),Object(i.mdx)("h2",{id:"functions"},"Functions"),Object(i.mdx)("h3",{id:"fromuint-uint256-_i-\u2192-string-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"fromUint"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(uint256 _i) \u2192 string"))," (internal)"),Object(i.mdx)("p",null,"Convert a uint value to its decimal string representation"),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"frombytes32-bytes32-_value-\u2192-string-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"fromBytes32"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(bytes32 _value) \u2192 string"))," (internal)"),Object(i.mdx)("p",null,"Convert a bytes32 value to its hex string representation."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"fromaddress-address-_addr-\u2192-string-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"fromAddress"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(address _addr) \u2192 string"))," (internal)"),Object(i.mdx)("p",null,"Convert an address to its hex string representation."),Object(i.mdx)("hr",null),Object(i.mdx)("h3",{id:"add8-string-a-string-b-string-c-string-d-string-e-string-f-string-g-string-h-\u2192-string-internal"},Object(i.mdx)("strong",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"strong"},"add8"))," ",Object(i.mdx)("em",{parentName:"h3"},Object(i.mdx)("inlineCode",{parentName:"em"},"(string a, string b, string c, string d, string e, string f, string g, string h) \u2192 string"))," (internal)"),Object(i.mdx)("p",null,"Append eight strings."),Object(i.mdx)("hr",null))}l.isMDXComponent=!0},487:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return l})),t.d(n,"MDXProvider",(function(){return g})),t.d(n,"mdx",(function(){return b})),t.d(n,"useMDXComponents",(function(){return u})),t.d(n,"withMDXComponents",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),m=function(e){return function(n){var t=u(n.components);return i.a.createElement(e,a({},n,{components:t}))}},u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},g=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=r,g=l["".concat(a,".").concat(m)]||l[m]||p[m]||o;return t?i.a.createElement(g,d(d({ref:n},c),{},{components:t})):i.a.createElement(g,d({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},488:function(e,n,t){"use strict";var r=t(4).default;Object.defineProperty(n,"__esModule",{value:!0}),n.DocTag=n.DocType=void 0;var i=r(t(0));let o;n.DocType=o,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(o||(n.DocType=o={}));const a={[o.Tutorial]:"#b16bfc",[o.HowTo]:"#EC0088",[o.Reference]:"#ff823a",[o.Explanation]:"#29C0AF"};n.DocTag=({type:e,marginBottom:n})=>i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:{border:"2px solid "+a[e]||!1,borderRadius:"5px",color:a[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}]);