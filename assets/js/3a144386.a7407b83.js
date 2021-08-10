(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(8),i=(n(0),n(413)),o=n(414),s={title:"Handling address expiry and uniqueness"},d={unversionedId:"how-to/handling-address-expiry",id:"how-to/handling-address-expiry",isDocsHomePage:!1,title:"Handling address expiry and uniqueness",description:"Gateway address uniqueness",source:"@site/ren-js/how-to/handling-address-expiry.mdx",slug:"/how-to/handling-address-expiry",permalink:"/ren-client-docs/ren-js/how-to/handling-address-expiry",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/how-to/handling-address-expiry.mdx",version:"current",sidebar:"docs",previous:{title:"Chain Utils",permalink:"/ren-client-docs/ren-js/how-to/chain-utils"},next:{title:"Add parameters at mint",permalink:"/ren-client-docs/ren-js/how-to/add-parameters-at-mint"}},c=[{value:"Gateway address uniqueness",id:"gateway-address-uniqueness",children:[]},{value:"Gateway address expiry",id:"gateway-address-expiry",children:[]}],l={toc:c};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(o.DocTag,{type:o.DocType.HowTo,marginBottom:0,mdxType:"DocTag"}),Object(i.mdx)("h2",{id:"gateway-address-uniqueness"},"Gateway address uniqueness"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"gateway address")," of a ",Object(i.mdx)("inlineCode",{parentName:"p"},"LockAndMint")," is deterministic based on its constructor parameters. This means that if a user is minting the same asset to the same recipient multiple times, they will be shown the same address."),Object(i.mdx)("p",null,"If this is not the desired behaviour, a ",Object(i.mdx)("inlineCode",{parentName:"p"},"nonce")," can be provided to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"lockAndMint")," function along side the other parameters to ensure that a new address is generated."),Object(i.mdx)("p",null,"The nonce should be a 32-byte ",Object(i.mdx)("inlineCode",{parentName:"p"},"Buffer"),", which can be created using the ",Object(i.mdx)("inlineCode",{parentName:"p"},"bn.js")," library:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-ts",metastring:"{3-4}","{3-4}":!0},'const lockAndMint = await renJS.lockAndMint({\n    ...\n    // To set the nonce to 42.\n    nonce: new BN(42).toArrayLike(Buffer, "be", 32),\n})\n')),Object(i.mdx)("p",null,"It is best if the nonce is incremental for the user, using persistent storage to track it. If a random nonce is used, it should still be stored to persistent storage to that the ",Object(i.mdx)("inlineCode",{parentName:"p"},"LockAndMint")," can be resumed if the user's session is closed."),Object(i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Just like all the other parameters, the LockAndMint can only be resumed by providing the nonce again. If the nonce is lost, the funds may not be recoverable."))),Object(i.mdx)("h2",{id:"gateway-address-expiry"},"Gateway address expiry"),Object(i.mdx)("p",null,"Currently, ",Object(i.mdx)("em",{parentName:"p"},"gateway addresses")," do not expire. An upcoming update to RenVM will change this."),Object(i.mdx)("p",null,"The network will have 24-hour cycles, and the ",Object(i.mdx)("em",{parentName:"p"},"gateway address")," timeline will look like this:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"1st time cycle:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"If a user wants to make a deposit, an address for this cycle is generated. They have the rest of this time cycle to initiate the deposit."))),Object(i.mdx)("li",{parentName:"ul"},"2nd time cycle:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"If the user sent a deposit, the deposit needs to be confirmed and submitted to RenVM before the end of the cycle."),Object(i.mdx)("li",{parentName:"ul"},"If the user wants to make a new deposit, a new address is generated for this new time cycle, starting a new three-cycle timeline."))),Object(i.mdx)("li",{parentName:"ul"},"3rd time cycle:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"The user has the rest of the time cycle to submit the RenVM signature to the mint-chain."),Object(i.mdx)("li",{parentName:"ul"},"Like before, if the user wants to make a new deposit, a new address is generated for this new time cycle.")))),Object(i.mdx)("p",null,"Each of the steps can happen sooner if the deposit is ready - the deposit, signing and submitting to the mint-chain can all happen in the same cycle."),Object(i.mdx)("p",null,"In expectation of this, Bridge (",Object(i.mdx)("a",{parentName:"p",href:"https://bridge.renproject.io"},"bridge.renproject.io"),") is using the ",Object(i.mdx)("inlineCode",{parentName:"p"},"nonce")," described ",Object(i.mdx)("a",{parentName:"p",href:"#gateway-address-uniqueness"},"above")," to replicate this behaviour. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"nonce")," is calculated based on the current time cycle and the number addresses the user has already generated for that cycle."))}m.isMDXComponent=!0},413:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,u=l["".concat(o,".").concat(m)]||l[m]||h[m]||i;return n?a.a.createElement(u,d(d({ref:t},s),{},{components:n})):a.a.createElement(u,d({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=r(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const o={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))}}]);