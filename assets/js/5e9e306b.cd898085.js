(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),u=(n(0),n(485)),i={id:"rpc_build_main_v1_value.renvmoutpututxo",title:"Interface: RenVMOutputUTXO",sidebar_label:"RenVMOutputUTXO",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/rpc_build_main_v1_value.renvmoutpututxo",id:"api/interfaces/rpc_build_main_v1_value.renvmoutpututxo",isDocsHomePage:!1,title:"Interface: RenVMOutputUTXO",description:"Interface: RenVMOutputUTXO",source:"@site/ren-js/api/interfaces/rpc_build_main_v1_value.renvmoutpututxo.md",slug:"/api/interfaces/rpc_build_main_v1_value.renvmoutpututxo",permalink:"/ren-js/api/interfaces/rpc_build_main_v1_value.renvmoutpututxo",editUrl:null,version:"current",sidebar_label:"RenVMOutputUTXO",sidebar:"docs",previous:{title:"Interface: RenVMInputUTXO",permalink:"/ren-js/api/interfaces/rpc_build_main_v1_value.renvminpututxo"},next:{title:"Interface: PackStructType",permalink:"/ren-js/api/interfaces/rpc_build_main_v2.packstructtype"}},p=[{value:"Properties",id:"properties",children:[{value:"amount",id:"amount",children:[]},{value:"scriptPubKey",id:"scriptpubkey",children:[]},{value:"txHash",id:"txhash",children:[]},{value:"vOut",id:"vout",children:[]}]}],o={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(u.mdx)("wrapper",Object(r.default)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("h1",{id:"interface-renvmoutpututxo"},"Interface: RenVMOutputUTXO"),Object(u.mdx)("p",null,Object(u.mdx)("a",{parentName:"p",href:"/ren-js/api/modules/rpc_build_main_v1_value"},"rpc/build/main/v1/value"),".RenVMOutputUTXO"),Object(u.mdx)("h2",{id:"properties"},"Properties"),Object(u.mdx)("h3",{id:"amount"},"amount"),Object(u.mdx)("p",null,"\u2022 ",Object(u.mdx)("strong",{parentName:"p"},"amount"),": ",Object(u.mdx)("em",{parentName:"p"},"string")),Object(u.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:30"),Object(u.mdx)("hr",null),Object(u.mdx)("h3",{id:"scriptpubkey"},"scriptPubKey"),Object(u.mdx)("p",null,"\u2022 ",Object(u.mdx)("strong",{parentName:"p"},"scriptPubKey"),": ",Object(u.mdx)("em",{parentName:"p"},"string")),Object(u.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:29"),Object(u.mdx)("hr",null),Object(u.mdx)("h3",{id:"txhash"},"txHash"),Object(u.mdx)("p",null,"\u2022 ",Object(u.mdx)("strong",{parentName:"p"},"txHash"),": ",Object(u.mdx)("em",{parentName:"p"},"string")),Object(u.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:27"),Object(u.mdx)("hr",null),Object(u.mdx)("h3",{id:"vout"},"vOut"),Object(u.mdx)("p",null,"\u2022 ",Object(u.mdx)("strong",{parentName:"p"},"vOut"),": ",Object(u.mdx)("em",{parentName:"p"},"string")),Object(u.mdx)("p",null,"Defined in: ren-js/packages/lib/rpc/build/main/v1/value.d.ts:28"))}l.isMDXComponent=!0},485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return s})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),a=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=m(n),d=r,s=l["".concat(i,".").concat(d)]||l[d]||b[d]||u;return n?a.a.createElement(s,p(p({ref:t},c),{},{components:n})):a.a.createElement(s,p({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,i=new Array(u);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<u;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);