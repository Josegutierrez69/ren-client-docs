(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(415));const c={id:"lib_interfaces_build_main_parameters.contractcall",title:"Interface: ContractCall",sidebar_label:"ContractCall",custom_edit_url:null},i={unversionedId:"api/interfaces/lib_interfaces_build_main_parameters.contractcall",id:"api/interfaces/lib_interfaces_build_main_parameters.contractcall",isDocsHomePage:!1,title:"Interface: ContractCall",description:"Interface: ContractCall",source:"@site/ren-js/api/interfaces/lib_interfaces_build_main_parameters.contractcall.md",slug:"/api/interfaces/lib_interfaces_build_main_parameters.contractcall",permalink:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_parameters.contractcall",editUrl:null,version:"current",sidebar_label:"ContractCall"},o=[{value:"Properties",id:"properties",children:[{value:"contractFn",id:"contractfn",children:[]},{value:"contractParams",id:"contractparams",children:[]},{value:"sendTo",id:"sendto",children:[]},{value:"txConfig",id:"txconfig",children:[]}]}],l={toc:o};function s({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"interface-contractcall"},"Interface: ContractCall"),Object(a.mdx)("p",null,Object(a.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_parameters"},"lib/interfaces/build/main/parameters"),".ContractCall"),Object(a.mdx)("p",null,"The details required to create and/or submit a transaction to a chain."),Object(a.mdx)("h2",{id:"properties"},"Properties"),Object(a.mdx)("h3",{id:"contractfn"},"contractFn"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("strong",{parentName:"p"},"contractFn"),": ",Object(a.mdx)("em",{parentName:"p"},"string")),Object(a.mdx)("p",null,"The name of the function to be called on the contract."),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:21"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"contractparams"},"contractParams"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.mdx)("strong",{parentName:"p"},"contractParams"),": ",Object(a.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_ethargs#ethargs"},Object(a.mdx)("em",{parentName:"a"},"EthArgs"))),Object(a.mdx)("p",null,"The parameters to be passed to the contract. They can only be defined\nusing Ethereum types currently."),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:26"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"sendto"},"sendTo"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("strong",{parentName:"p"},"sendTo"),": ",Object(a.mdx)("em",{parentName:"p"},"string")),Object(a.mdx)("p",null,"The address of the contract."),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:17"),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"txconfig"},"txConfig"),Object(a.mdx)("p",null,"\u2022 ",Object(a.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.mdx)("strong",{parentName:"p"},"txConfig"),": ",Object(a.mdx)("em",{parentName:"p"},"unknown")),Object(a.mdx)("p",null,"Override chain-specific transaction configuration, such as gas/fees."),Object(a.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/parameters.d.ts:30"))}s.isMDXComponent=!0},415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){return function(t){var n=u(t.components);return a.a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||c;return n?a.a.createElement(m,l(l({ref:t},o),{},{components:n})):a.a.createElement(m,l({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);