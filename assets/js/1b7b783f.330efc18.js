(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{485:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return c})),n.d(t,"MDXProvider",(function(){return o})),n.d(t,"mdx",(function(){return j})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return b}));var a=n(0),r=n.n(a);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){return function(t){var n=u(t.components);return r.a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,m=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(n),b=a,o=c["".concat(i,".").concat(b)]||c[b]||s[b]||m;return n?r.a.createElement(o,l(l({ref:t},d),{},{components:n})):r.a.createElement(o,l({ref:t},d))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var m=n.length,i=new Array(m);i[0]=O;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<m;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),m=(n(0),n(485)),i={id:"utils_build_main_signatureutils",title:"Module: utils/build/main/signatureUtils",sidebar_label:"utils/build/main/signatureUtils",custom_edit_url:null,hide_title:!0},d={unversionedId:"api/modules/utils_build_main_signatureutils",id:"api/modules/utils_build_main_signatureutils",isDocsHomePage:!1,title:"Module: utils/build/main/signatureUtils",description:"Module: utils/build/main/signatureUtils",source:"@site/ren-js/api/modules/utils_build_main_signatureutils.md",slug:"/api/modules/utils_build_main_signatureutils",permalink:"/ren-js/api/modules/utils_build_main_signatureutils",editUrl:null,version:"current",sidebar_label:"utils/build/main/signatureUtils",sidebar:"docs",previous:{title:"Module: utils/build/main/renVMUtils",permalink:"/ren-js/api/modules/utils_build_main_renvmutils"},next:{title:"Module: utils/build/main/value",permalink:"/ren-js/api/modules/utils_build_main_value"}},l=[{value:"Variables",id:"variables",children:[{value:"secp256k1n",id:"secp256k1n",children:[]}]},{value:"Functions",id:"functions",children:[{value:"fixSignature",id:"fixsignature",children:[]},{value:"fixSignatureSimple",id:"fixsignaturesimple",children:[]},{value:"signatureToBuffer",id:"signaturetobuffer",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(m.mdx)("wrapper",Object(a.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"module-utilsbuildmainsignatureutils"},"Module: utils/build/main/signatureUtils"),Object(m.mdx)("h2",{id:"variables"},"Variables"),Object(m.mdx)("h3",{id:"secp256k1n"},"secp256k1n"),Object(m.mdx)("p",null,"\u2022 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Const")," ",Object(m.mdx)("strong",{parentName:"p"},"secp256k1n"),": BigNumber"),Object(m.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:10"),Object(m.mdx)("h2",{id:"functions"},"Functions"),Object(m.mdx)("h3",{id:"fixsignature"},"fixSignature"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Const"),Object(m.mdx)("strong",{parentName:"p"},"fixSignature"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"r"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"s"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"v"),": ",Object(m.mdx)("em",{parentName:"p"},"number"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"sigHash"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"pHash"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"amount"),": ",Object(m.mdx)("em",{parentName:"p"},"string"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"to"),": ",Object(m.mdx)("em",{parentName:"p"},"string"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"tokenIdentifier"),": ",Object(m.mdx)("em",{parentName:"p"},"string"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"nHash"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"v2?"),": ",Object(m.mdx)("em",{parentName:"p"},"boolean"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"logger?"),": ",Object(m.mdx)("a",{parentName:"p",href:"/ren-js/api/interfaces/interfaces_build_main_logger.logger"},Object(m.mdx)("em",{parentName:"a"},"Logger")),"): Signature"),Object(m.mdx)("h4",{id:"parameters"},"Parameters:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"r")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"s")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"v")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"number"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"sigHash")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"pHash")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"amount")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"string"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"to")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"string"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"tokenIdentifier")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"string"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"nHash")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"v2?")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"boolean"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"logger?")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-js/api/interfaces/interfaces_build_main_logger.logger"},Object(m.mdx)("em",{parentName:"a"},"Logger")))))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," Signature"),Object(m.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:12"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"fixsignaturesimple"},"fixSignatureSimple"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Const"),Object(m.mdx)("strong",{parentName:"p"},"fixSignatureSimple"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"r"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"s"),": ",Object(m.mdx)("em",{parentName:"p"},"Buffer"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"v"),": ",Object(m.mdx)("em",{parentName:"p"},"number"),"): Signature"),Object(m.mdx)("h4",{id:"parameters-1"},"Parameters:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"r")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"s")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"v")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"number"))))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," Signature"),Object(m.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:11"),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"signaturetobuffer"},"signatureToBuffer"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Const"),Object(m.mdx)("strong",{parentName:"p"},"signatureToBuffer"),"<T",">","(",Object(m.mdx)("inlineCode",{parentName:"p"},"sig"),": T): ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("h4",{id:"type-parameters"},"Type parameters:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"T")),Object(m.mdx)("td",{parentName:"tr",align:"left"},"Signature")))),Object(m.mdx)("h4",{id:"parameters-2"},"Parameters:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"sig")),Object(m.mdx)("td",{parentName:"tr",align:"left"},"T")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("em",{parentName:"p"},"Buffer")),Object(m.mdx)("p",null,"Defined in: ren-js/packages/lib/utils/build/main/signatureUtils.d.ts:9"))}c.isMDXComponent=!0}}]);