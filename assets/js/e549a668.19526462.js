(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{364:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return m})),t.d(n,"default",(function(){return o}));var a=t(3),r=(t(0),t(487));const i={id:"lib_interfaces_build_main_transaction",title:"Module: lib/interfaces/build/main/transaction",sidebar_label:"lib/interfaces/build/main/transaction",sidebar_position:0,custom_edit_url:null},c={unversionedId:"api/modules/lib_interfaces_build_main_transaction",id:"api/modules/lib_interfaces_build_main_transaction",isDocsHomePage:!1,title:"Module: lib/interfaces/build/main/transaction",description:"Module: lib/interfaces/build/main/transaction",source:"@site/ren-js/api/modules/lib_interfaces_build_main_transaction.md",slug:"/api/modules/lib_interfaces_build_main_transaction",permalink:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_transaction",editUrl:null,version:"current",sidebar_label:"lib/interfaces/build/main/transaction"},m=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[{value:"BurnAndReleaseTransaction",id:"burnandreleasetransaction",children:[]},{value:"LockAndMintTransaction",id:"lockandminttransaction",children:[]},{value:"RenVMAssetFees",id:"renvmassetfees",children:[]}]}],d={toc:m};function o({components:e,...n}){return Object(r.mdx)("wrapper",Object(a.default)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"module-libinterfacesbuildmaintransaction"},"Module: lib/interfaces/build/main/transaction"),Object(r.mdx)("h2",{id:"interfaces"},"Interfaces"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",{parentName:"li",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_transaction.rentransaction"},"RenTransaction")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",{parentName:"li",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_transaction.renvmfees"},"RenVMFees"))),Object(r.mdx)("h2",{id:"type-aliases"},"Type aliases"),Object(r.mdx)("h3",{id:"burnandreleasetransaction"},"BurnAndReleaseTransaction"),Object(r.mdx)("p",null,"\u01ac ",Object(r.mdx)("strong",{parentName:"p"},"BurnAndReleaseTransaction"),": ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_transaction.rentransaction"},Object(r.mdx)("em",{parentName:"a"},"RenTransaction")),"<{ ",Object(r.mdx)("inlineCode",{parentName:"p"},"amount"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"ref"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"to"),": ",Object(r.mdx)("em",{parentName:"p"},"string"),"  }, { ",Object(r.mdx)("inlineCode",{parentName:"p"},"amount?"),": BigNumber ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"outpoint?"),": { ",Object(r.mdx)("inlineCode",{parentName:"p"},"hash"),": Buffer ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"index"),": BigNumber  } ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"revert?"),": ",Object(r.mdx)("em",{parentName:"p"},"undefined")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"txid?"),": Buffer  } ","|"," { ",Object(r.mdx)("inlineCode",{parentName:"p"},"revert"),": Buffer  }",">"),Object(r.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:38"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"lockandminttransaction"},"LockAndMintTransaction"),Object(r.mdx)("p",null,"\u01ac ",Object(r.mdx)("strong",{parentName:"p"},"LockAndMintTransaction"),": ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_transaction.rentransaction"},Object(r.mdx)("em",{parentName:"a"},"RenTransaction")),"<{ ",Object(r.mdx)("inlineCode",{parentName:"p"},"n"),": Buffer ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"p"),": { ",Object(r.mdx)("inlineCode",{parentName:"p"},"abi"),": ",Object(r.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_abi.abiitem"},Object(r.mdx)("em",{parentName:"a"},"AbiItem")),"[] ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"fn"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"value"),": Buffer  } ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"to"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"token"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"utxo"),": { ",Object(r.mdx)("inlineCode",{parentName:"p"},"amount"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"scriptPubKey"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"txHash"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"vOut"),": ",Object(r.mdx)("em",{parentName:"p"},"number"),"  }  }, { ",Object(r.mdx)("inlineCode",{parentName:"p"},"amount"),": ",Object(r.mdx)("em",{parentName:"p"},"string")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"ghash"),": Buffer ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"nhash"),": Buffer ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"phash"),": Buffer ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"revert?"),": ",Object(r.mdx)("em",{parentName:"p"},"undefined")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"sighash"),": Buffer ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"signature?"),": Buffer  } ","|"," { ",Object(r.mdx)("inlineCode",{parentName:"p"},"revert"),": Buffer  }",">"),Object(r.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:12"),Object(r.mdx)("hr",null),Object(r.mdx)("h3",{id:"renvmassetfees"},"RenVMAssetFees"),Object(r.mdx)("p",null,"\u01ac ",Object(r.mdx)("strong",{parentName:"p"},"RenVMAssetFees"),": { ","[mintChain: string]",": { ",Object(r.mdx)("inlineCode",{parentName:"p"},"burn"),": ",Object(r.mdx)("em",{parentName:"p"},"number")," ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"mint"),": ",Object(r.mdx)("em",{parentName:"p"},"number"),"  };  } & { ",Object(r.mdx)("inlineCode",{parentName:"p"},"lock"),": BigNumber ; ",Object(r.mdx)("inlineCode",{parentName:"p"},"release"),": BigNumber  }"),Object(r.mdx)("p",null,"Defined in: ren-js/packages/lib/interfaces/build/main/transaction.d.ts:53"))}o.isMDXComponent=!0},487:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return p})),t.d(n,"MDXProvider",(function(){return b})),t.d(n,"mdx",(function(){return O})),t.d(n,"useMDXComponents",(function(){return s})),t.d(n,"withMDXComponents",(function(){return l}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){return function(n){var t=s(n.components);return r.a.createElement(e,c({},n,{components:t}))}},s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(t),l=a,b=p["".concat(c,".").concat(l)]||p[l]||u[l]||i;return t?r.a.createElement(b,d(d({ref:n},m),{},{components:t})):r.a.createElement(b,d({ref:n},m))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=f;var m={};for(var d in n)hasOwnProperty.call(n,d)&&(m[d]=n[d]);m.originalType=e,m.mdxType="string"==typeof e?e:a,c[1]=m;for(var o=2;o<i;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);