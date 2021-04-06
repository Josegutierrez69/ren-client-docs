(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(8),a=(r(0),r(485)),s={title:"RenVM Support Tutorial & Template"},i={unversionedId:"best-practices/support",id:"best-practices/support",isDocsHomePage:!1,title:"RenVM Support Tutorial & Template",description:"A guide to resolving RenVM support issues.",source:"@site/ren-js/best-practices/support.mdx",slug:"/best-practices/support",permalink:"/ren-js/best-practices/support",version:"current",sidebar:"docs",previous:{title:"RenVM UX Best Practice",permalink:"/ren-js/best-practices/ui-best-practices"},next:{title:"Ren Brand Hub",permalink:"/ren-js/other/brand"}},p=[{value:"<strong>Step #1 | Address Common UE</strong>",id:"step-1--address-common-ue",children:[]},{value:"Step #2 | Push the RenVM TX through manually",id:"step-2--push-the-renvm-tx-through-manually",children:[]},{value:"Step #3 | RenVM Bug Report",id:"step-3--renvm-bug-report",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:p};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.mdx)("wrapper",Object(n.default)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"A guide to resolving RenVM support issues.")),Object(a.mdx)("hr",null),Object(a.mdx)("p",null,"Most common issues are typically caused by user error ","(","UE",")",". EG:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"User exiting the bridge before submitting the ETH or BSC transaction."),Object(a.mdx)("li",{parentName:"ul"},"Closing web-browser and deleting history."),Object(a.mdx)("li",{parentName:"ul"},"Not having ETH or BNB to pay for the TX.")),Object(a.mdx)("p",null,"While we created the ",Object(a.mdx)("a",{parentName:"p",href:"https://docs.renproject.io/developers/renvm-ux-best-practice"},"RenVM UX Best Practices")," to mitigate most of the common pitfalls some users still have issues, so the Ren team wanted to provide a few simple steps for dealing with support issues as a 3rd party integrator."),Object(a.mdx)("h3",{id:"step-1--address-common-ue"},Object(a.mdx)("strong",{parentName:"h3"},"Step ","#","1 ","|"," Address Common UE")),Object(a.mdx)("p",null,"The way to solve these boil down to sending them back to the bridge UI to submit the ETH TX, and/or restarting their browser/computer to solve MetaMask not picking up the TX. Troubleshooting questions to help the user:"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"1",")")," Have you been prompted by your MetaMask to sign an ETH or BSC TX? If not, try to restart your computer and then visit the UI with the wallet you originally used ","(","MetaMask, etc",")",".",Object(a.mdx)("br",{parentName:"p"}),"\n",Object(a.mdx)("strong",{parentName:"p"},"2",")")," Check your MetaMask activity to ensure no pending TX is there.",Object(a.mdx)("br",{parentName:"p"}),"\n",Object(a.mdx)("strong",{parentName:"p"},"3",")")," Make sure you added renBTC, etc into MetaMask ","(","as a custom token",")",".",Object(a.mdx)("br",{parentName:"p"}),"\n",Object(a.mdx)("strong",{parentName:"p"},"4",")")," Try hard-refreshing the webpage ","(","F5",")","."),Object(a.mdx)("h3",{id:"step-2--push-the-renvm-tx-through-manually"},"Step ","#","2 ","|"," Push the RenVM TX through manually"),Object(a.mdx)("p",null,"Since most user issue reports you will receive will likely be something at the UI level, it is typically incumbent on the Bridge owner to assist users with any issues ","(","via the above steps",")"," but if there is an issue, and step ","#","1 does not solve the issue, one can manually triggering the TX:"),Object(a.mdx)("p",null,"To do so, follow the below directions:"),Object(a.mdx)("h4",{id:"1-go-to-httpsrenprojectgithubiodev-tools"},"1",")"," Go to: ",Object(a.mdx)("a",{parentName:"h4",href:"https://renproject.github.io/dev-tools/"},"https://renproject.github.io/dev-tools")),Object(a.mdx)("h4",{id:"2-connect-wallet-that-the-order-was-placed-on-and-input-the-renvm-tx-hash"},"2",")"," Connect wallet that the order was placed on and input the RenVM TX hash"),Object(a.mdx)("h4",{id:"3-submit-the-tx-via-wallet-and-use-fast-gas-so-there-are-no-issues"},"3",")"," Submit the TX via wallet and use \u201cFast GAS\u201d so there are no issues."),Object(a.mdx)("p",null,"Email template for users\ud83d\udc47",Object(a.mdx)("br",{parentName:"p"}),"\n",Object(a.mdx)("em",{parentName:"p"},"Hi xxx,",Object(a.mdx)("br",{parentName:"em"}),"If you could, please follow the below instructions:",Object(a.mdx)("br",{parentName:"em"}),"1",")"," Go here:")," ",Object(a.mdx)("a",{parentName:"p",href:"https://renproject.github.io/dev-tools/"},Object(a.mdx)("em",{parentName:"a"},"https://renproject.github.io/dev-tools/")),Object(a.mdx)("br",{parentName:"p"}),"\n",Object(a.mdx)("em",{parentName:"p"},"2",")"," Connect with your wallet that you did the order on and input this TX:",Object(a.mdx)("br",{parentName:"em"}),"xxxx",Object(a.mdx)("br",{parentName:"em"}),"3",")"," Then submit via MetaMask ","(","use \u201cFast GAS\u201d so there are no issues",")",".",Object(a.mdx)("br",{parentName:"em"}),"4",")"," renBTC, etc will show up in your wallet.")),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"Let us know if you have any issues, and we\u2019ll go from there.",Object(a.mdx)("br",{parentName:"em"}),"All the best,",Object(a.mdx)("br",{parentName:"em"}),"xxxx")),Object(a.mdx)("h3",{id:"step-3--renvm-bug-report"},"Step ","#","3 ","|"," RenVM Bug Report"),Object(a.mdx)("p",null,"If you are unable to get the RenVM TX hash, or there is some other case that you can't resolve through steps ","#","1 & ","#","2, have your user fill out this form, and the Ren team will assist:",Object(a.mdx)("br",{parentName:"p"}),"\n",Object(a.mdx)("a",{parentName:"p",href:"https://renprotocol.typeform.com/to/YdmFyB"},"https://renprotocol.typeform.com/to/YdmFyB")),Object(a.mdx)("h3",{id:"summary"},"Summary"),Object(a.mdx)("p",null,"Through implementing ",Object(a.mdx)("strong",{parentName:"p"},"all")," of the ",Object(a.mdx)("a",{parentName:"p",href:"https://docs.renproject.io/developers/renvm-ux-best-practice"},"RenVM UX Best Practices")," and ensuring you have a streamlined process to complete ",Object(a.mdx)("em",{parentName:"p"},"Steps ","#","1 and ","#","2,")," most if not all UX issues are mitigated at this stage. If you have any questions at this stage, please utilize our mutual Telegram group to reach out for any inquiries."))}c.isMDXComponent=!0},485:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return c})),r.d(t,"MDXProvider",(function(){return d})),r.d(t,"mdx",(function(){return f})),r.d(t,"useMDXComponents",(function(){return l})),r.d(t,"withMDXComponents",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),m=function(e){return function(t){var r=l(t.components);return o.a.createElement(e,s({},t,{components:r}))}},l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||a;return r?o.a.createElement(d,p(p({ref:t},i),{},{components:r})):o.a.createElement(d,p({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);