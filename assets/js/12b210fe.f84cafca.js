"use strict";(self.webpackChunkren_client_docs=self.webpackChunkren_client_docs||[]).push([[1821],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15582:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(93454),c=["components"],l={title:"Overview",slug:"/v3/tutorial"},s=void 0,p={unversionedId:"v3/tutorial/overview",id:"v3/tutorial/overview",title:"Overview",description:"This tutorial goes through using the Ethereum Kovan network, which is being phased out.",source:"@site/ren-js/v3/tutorial/0-overview.mdx",sourceDirName:"v3/tutorial",slug:"/v3/tutorial",permalink:"/ren-client-docs/ren-js/v3/tutorial",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/v3/tutorial/0-overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",slug:"/v3/tutorial"},sidebar:"docs",previous:{title:"Changelog",permalink:"/ren-client-docs/ren-js/v3/changelog"},next:{title:"1. Smart Contract",permalink:"/ren-client-docs/ren-js/v3/tutorial/smart-contract"}},u=[],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.G,{type:i.e.Tutorial,mdxType:"DocTag"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Ethereum testnet networks")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This tutorial goes through using the Ethereum Kovan network, which is being phased out.\nIt will be updated shortly to use ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.net"},"Goerli")," instead."))),(0,o.kt)("p",null,"This tutorial will walk you through writing a front-end app that uses RenVM to mint BTC to an Ethereum smart contract. It is designed to be a quick introduction to RenVM and should be read together with the other examples, which provide more in-depth explanations."),(0,o.kt)("p",null,"Sections:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./tutorial/smart-contract"},"Smart Contract")," - Write a basic smart contract that can mint renBTC"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./tutorial/react-setup"},"React Setup")," - Setup the React repo"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./tutorial/chain-transactions"},"Chain Transactions")," - Write a component for handling chain transactions"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./tutorial/gateway-transactions"},"Gateway Transactions")," - Write a component for handling gateway transactions"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./tutorial/gateways"},"Gateways")," - Handle creating new gateways"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./tutorial/app"},"App")," - Create the top-level App component")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The code for this tutorial can be found on GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/renproject/ren-js-v3-tutorial"},"https://github.com/renproject/ren-js-v3-tutorial"),", and a live version can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://renproject.github.io/ren-js-v3-tutorial"},"https://renproject.github.io/ren-js-v3-tutorial")))))}d.isMDXComponent=!0},93454:function(t,e,n){n.d(e,{G:function(){return c},e:function(){return a}});var r,a,o=n(67294);!function(t){t.Tutorial="Tutorial",t.HowTo="How To",t.Reference="Reference",t.Explanation="Explanation"}(a||(a={}));var i=((r={})[a.Tutorial]="#b48ead",r[a.HowTo]="#69a8b9",r[a.Reference]="#bf616a",r[a.Explanation]="#d2b06c",r),c=function(t){var e=t.type,n=t.marginBottom;return o.createElement(o.Fragment,null,o.createElement("span",{style:{border:"2px solid "+i[e]||0,borderRadius:"5px",color:i[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(e)))}}}]);