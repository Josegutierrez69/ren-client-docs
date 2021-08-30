(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{410:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return s}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.a.createElement(e,c({},n,{components:t}))}},p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=p(t),s=r,m=d["".concat(c,".").concat(s)]||d[s]||b[s]||i;return t?a.a.createElement(m,l(l({ref:n},o),{},{components:t})):a.a.createElement(m,l({ref:n},o))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var r=t(3),a=(t(0),t(410));const i={id:"lib_interfaces_build_main_chain.burndetails",title:"Interface: BurnDetails<Transaction>",sidebar_label:"BurnDetails",custom_edit_url:null},c={unversionedId:"api/interfaces/lib_interfaces_build_main_chain.burndetails",id:"api/interfaces/lib_interfaces_build_main_chain.burndetails",isDocsHomePage:!1,title:"Interface: BurnDetails<Transaction>",description:"Interface: BurnDetails",source:"@site/ren-js/api/interfaces/lib_interfaces_build_main_chain.burndetails.md",slug:"/api/interfaces/lib_interfaces_build_main_chain.burndetails",permalink:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.burndetails",editUrl:null,version:"current",sidebar_label:"BurnDetails"},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"amount",id:"amount",children:[]},{value:"nonce",id:"nonce",children:[]},{value:"to",id:"to",children:[]},{value:"transaction",id:"transaction",children:[]}]}],l={toc:o};function u({components:e,...n}){return Object(a.mdx)("wrapper",Object(r.default)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"interface-burndetailstransaction"},"Interface: BurnDetails<Transaction",">"),Object(a.mdx)("p",null,Object(a.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_chain"},"lib/interfaces/build/main/chain"),".BurnDetails"),Object(a.mdx)("h2",{id:"type-parameters"},"Type parameters"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",{parentName:"tr",align:"left"},"Name"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:"left"},Object(a.mdx)("inlineCode",{parentName:"td"},"Transaction"))))),Object(a.mdx)("h2",{id:"properties"},"Properties"),Object(a.mdx)("h3",{id:"amount"},"amount"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("strong",{parentName:"p"},"amount"),": ",Object(a.mdx)("em",{parentName:"p"},"BigNumber")),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:183"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"nonce"},"nonce"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("strong",{parentName:"p"},"nonce"),": ",Object(a.mdx)("em",{parentName:"p"},"BigNumber")),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:185"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"to"},"to"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("strong",{parentName:"p"},"to"),": ",Object(a.mdx)("em",{parentName:"p"},"string")),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:184"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"transaction"},"transaction"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("strong",{parentName:"p"},"transaction"),": Transaction"),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/chain.d.ts:182"))}u.isMDXComponent=!0}}]);