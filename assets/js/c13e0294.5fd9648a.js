(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),u=(n(0),n(415));const i={id:"lib_rpc_build_main_v2_value.renvmoutpututxo",title:"Interface: RenVMOutputUTXO",sidebar_label:"RenVMOutputUTXO",custom_edit_url:null},a={unversionedId:"api/interfaces/lib_rpc_build_main_v2_value.renvmoutpututxo",id:"api/interfaces/lib_rpc_build_main_v2_value.renvmoutpututxo",isDocsHomePage:!1,title:"Interface: RenVMOutputUTXO",description:"Interface: RenVMOutputUTXO",source:"@site/ren-js/api/interfaces/lib_rpc_build_main_v2_value.renvmoutpututxo.md",slug:"/api/interfaces/lib_rpc_build_main_v2_value.renvmoutpututxo",permalink:"/ren-client-docs/ren-js/api/interfaces/lib_rpc_build_main_v2_value.renvmoutpututxo",editUrl:null,version:"current",sidebar_label:"RenVMOutputUTXO"},c=[{value:"Properties",id:"properties",children:[{value:"amount",id:"amount",children:[]},{value:"scriptPubKey",id:"scriptpubkey",children:[]},{value:"txHash",id:"txhash",children:[]},{value:"vOut",id:"vout",children:[]}]}],o={toc:c};function p({components:e,...t}){return Object(u.mdx)("wrapper",Object(r.default)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(u.mdx)("h1",{id:"interface-renvmoutpututxo"},"Interface: RenVMOutputUTXO"),Object(u.mdx)("p",null,Object(u.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_rpc_build_main_v2_value"},"lib/rpc/build/main/v2/value"),".RenVMOutputUTXO"),Object(u.mdx)("h2",{id:"properties"},"Properties"),Object(u.mdx)("h3",{id:"amount"},"amount"),Object(u.mdx)("p",null,"\u2022 ",Object(u.mdx)("strong",{parentName:"p"},"amount"),": ",Object(u.mdx)("em",{parentName:"p"},"string")),Object(u.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:30"),Object(u.mdx)("hr",null),Object(u.mdx)("h3",{id:"scriptpubkey"},"scriptPubKey"),Object(u.mdx)("p",null,"\u2022 ",Object(u.mdx)("strong",{parentName:"p"},"scriptPubKey"),": ",Object(u.mdx)("em",{parentName:"p"},"string")),Object(u.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:29"),Object(u.mdx)("hr",null),Object(u.mdx)("h3",{id:"txhash"},"txHash"),Object(u.mdx)("p",null,"\u2022 ",Object(u.mdx)("strong",{parentName:"p"},"txHash"),": ",Object(u.mdx)("em",{parentName:"p"},"string")),Object(u.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:27"),Object(u.mdx)("hr",null),Object(u.mdx)("h3",{id:"vout"},"vOut"),Object(u.mdx)("p",null,"\u2022 ",Object(u.mdx)("strong",{parentName:"p"},"vOut"),": ",Object(u.mdx)("em",{parentName:"p"},"string")),Object(u.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v2/value.d.ts:28"))}p.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return s})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),u=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var l=u.a.createContext({}),d=function(e){return function(t){var n=m(t.components);return u.a.createElement(e,a({},t,{components:n}))}},m=function(e){var t=u.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return u.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return u.a.createElement(u.a.Fragment,{},t)}},f=u.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=m(n),d=r,s=l["".concat(a,".").concat(d)]||l[d]||b[d]||i;return n?u.a.createElement(s,o(o({ref:t},c),{},{components:n})):u.a.createElement(s,o({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return u.a.createElement.apply(null,a)}return u.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);