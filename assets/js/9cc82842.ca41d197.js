(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{217:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return p}));var r=t(3),o=(t(0),t(415));const i={id:"lib_ren_src_config.renjsconfig",title:"Interface: RenJSConfig",sidebar_label:"RenJSConfig",custom_edit_url:null},c={unversionedId:"api/interfaces/lib_ren_src_config.renjsconfig",id:"api/interfaces/lib_ren_src_config.renjsconfig",isDocsHomePage:!1,title:"Interface: RenJSConfig",description:"Interface: RenJSConfig",source:"@site/ren-js/api/interfaces/lib_ren_src_config.renjsconfig.md",slug:"/api/interfaces/lib_ren_src_config.renjsconfig",permalink:"/ren-client-docs/ren-js/api/interfaces/lib_ren_src_config.renjsconfig",editUrl:null,version:"current",sidebar_label:"RenJSConfig"},a=[{value:"Properties",id:"properties",children:[{value:"loadCompletedDeposits",id:"loadcompleteddeposits",children:[]},{value:"logLevel",id:"loglevel",children:[]},{value:"logger",id:"logger",children:[]},{value:"networkDelay",id:"networkdelay",children:[]}]}],l={toc:a};function p({components:e,...n}){return Object(o.mdx)("wrapper",Object(r.default)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"interface-renjsconfig"},"Interface: RenJSConfig"),Object(o.mdx)("p",null,Object(o.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_ren_src_config"},"lib/ren/src/config"),".RenJSConfig"),Object(o.mdx)("h2",{id:"properties"},"Properties"),Object(o.mdx)("h3",{id:"loadcompleteddeposits"},"loadCompletedDeposits"),Object(o.mdx)("p",null,"\u2022 ",Object(o.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.mdx)("strong",{parentName:"p"},"loadCompletedDeposits"),": ",Object(o.mdx)("em",{parentName:"p"},"boolean")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"loadCompletedDeposits")," whether or not to detect deposits that have\nalready been minted."),Object(o.mdx)("p",null,"It defaults to false"),Object(o.mdx)("p",null,"Defined in: ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/config.ts#L27"},"ren-js/packages/lib/ren/src/config.ts:27")),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"loglevel"},"logLevel"),Object(o.mdx)("p",null,"\u2022 ",Object(o.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.mdx)("strong",{parentName:"p"},"logLevel"),": ",Object(o.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_logger#loglevelstring"},Object(o.mdx)("em",{parentName:"a"},"LogLevelString"))),Object(o.mdx)("p",null,"The logger and logLevel are used to configure where RenJS sends debug\nand error logs. Set the logLevel to ",Object(o.mdx)("inlineCode",{parentName:"p"},"LogLevel.Debug")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"LogLevel.Trace"),"\nto receive debug logs."),Object(o.mdx)("p",null,"Defined in: ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/config.ts#L9"},"ren-js/packages/lib/ren/src/config.ts:9")),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"logger"},"logger"),Object(o.mdx)("p",null,"\u2022 ",Object(o.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.mdx)("strong",{parentName:"p"},"logger"),": ",Object(o.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_logger.logger"},Object(o.mdx)("em",{parentName:"a"},"Logger"))),Object(o.mdx)("p",null,"Defined in: ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/config.ts#L10"},"ren-js/packages/lib/ren/src/config.ts:10")),Object(o.mdx)("hr",null),Object(o.mdx)("h3",{id:"networkdelay"},"networkDelay"),Object(o.mdx)("p",null,"\u2022 ",Object(o.mdx)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.mdx)("strong",{parentName:"p"},"networkDelay"),": ",Object(o.mdx)("em",{parentName:"p"},"number")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"networkDelay")," is the timeout in ms between retrying various network\nrequests including 1) fetching deposits, 2) fetching confirmations and\n3) fetching a transaction's RenVM status."),Object(o.mdx)("p",null,"It defaults to ",Object(o.mdx)("inlineCode",{parentName:"p"},"15000")," (15 seconds)."),Object(o.mdx)("p",null,"Defined in: ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/config.ts#L19"},"ren-js/packages/lib/ren/src/config.ts:19")))}p.isMDXComponent=!0},415:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return s})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return g})),t.d(n,"useMDXComponents",(function(){return m})),t.d(n,"withMDXComponents",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){return function(n){var t=m(n.components);return o.a.createElement(e,c({},n,{components:t}))}},m=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,a=p(e,["components","mdxType","originalType","parentName"]),s=m(t),d=r,u=s["".concat(c,".").concat(d)]||s[d]||b[d]||i;return t?o.a.createElement(u,l(l({ref:n},a),{},{components:t})):o.a.createElement(u,l({ref:n},a))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);