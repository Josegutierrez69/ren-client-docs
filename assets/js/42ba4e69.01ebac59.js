(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{129:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return u})),n.d(r,"Tag",(function(){return p})),n.d(r,"default",(function(){return l}));var t=n(3),o=(n(0),n(487)),a=n(488);const c={id:"order-direction",title:"OrderDirection"},i={unversionedId:"subgraph/enums/order-direction",id:"subgraph/enums/order-direction",isDocsHomePage:!1,title:"OrderDirection",description:"<span",source:"@site/subgraph/subgraph/enums/order-direction.mdx",slug:"/subgraph/enums/order-direction",permalink:"/ren-client-docs/subgraph/subgraph/enums/order-direction",version:"current",sidebar:"subgraph",previous:{title:"Integrator_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/integrator-order-by"},next:{title:"RenVM_orderBy",permalink:"/ren-client-docs/subgraph/subgraph/enums/ren-vm-order-by"}},u=[{value:"Values",id:"values",children:[]}],p=({children:e,color:r})=>Object(o.mdx)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),d={toc:u,Tag:p};function l({components:e,...r}){return Object(o.mdx)("wrapper",Object(t.default)({},d,r,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)(a.DocTag,{type:a.DocType.Reference,mdxType:"DocTag"}),Object(o.mdx)("p",null,"No description"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-graphql"},"enum OrderDirection {\n  asc\n  desc\n}\n")),Object(o.mdx)("h3",{id:"values"},"Values"),Object(o.mdx)("h4",{id:"asc"},Object(o.mdx)("inlineCode",{parentName:"h4"},"asc")),Object(o.mdx)("h4",{id:"desc"},Object(o.mdx)("inlineCode",{parentName:"h4"},"desc")))}l.isMDXComponent=!0},487:function(e,r,n){"use strict";n.r(r),n.d(r,"MDXContext",(function(){return d})),n.d(r,"MDXProvider",(function(){return f})),n.d(r,"mdx",(function(){return g})),n.d(r,"useMDXComponents",(function(){return s})),n.d(r,"withMDXComponents",(function(){return l}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){return function(r){var n=s(r.components);return o.a.createElement(e,c({},r,{components:n}))}},s=function(e){var r=o.a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},f=function(e){var r=s(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(n),l=t,f=d["".concat(c,".").concat(l)]||d[l]||m[l]||a;return n?o.a.createElement(f,u(u({ref:r},i),{},{components:n})):o.a.createElement(f,u({ref:r},i))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},488:function(e,r,n){"use strict";var t=n(4).default;Object.defineProperty(r,"__esModule",{value:!0}),r.DocTag=r.DocType=void 0;var o=t(n(0));let a;r.DocType=a,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(r.DocType=a={}));const c={[a.Tutorial]:"#b16bfc",[a.HowTo]:"#EC0088",[a.Reference]:"#ff823a",[a.Explanation]:"#29C0AF"};r.DocTag=({type:e,marginBottom:r})=>o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+c[e]||!1,borderRadius:"5px",color:c[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==r?r:30,display:"inline-block"}},String(e)))}}]);