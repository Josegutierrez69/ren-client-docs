(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(9),c=(n(0),n(414)),i={title:"Client Spec (WIP)"},l={unversionedId:"client-spec/client-spec",id:"client-spec/client-spec",isDocsHomePage:!1,title:"Client Spec (WIP)",description:"This document outlines all of a client's steps involved in initiating, submitting and completing mints and burns.",source:"@site/ren-js/client-spec/client-spec.mdx",slug:"/client-spec/client-spec",permalink:"/ren-client-docs/ren-js/client-spec/client-spec",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/client-spec/client-spec.mdx",version:"current"},o=[{value:"Contents",id:"contents",children:[]},{value:"Generating a gateway address",id:"generating-a-gateway-address",children:[{value:"Dependency chain",id:"dependency-chain",children:[]},{value:"Information provided by the user / the front-end",id:"information-provided-by-the-user--the-front-end",children:[]},{value:"Select a shard",id:"select-a-shard",children:[]},{value:"Hashes",id:"hashes",children:[]}]}],d={toc:o};function m(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(c.mdx)("wrapper",Object(a.default)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"This document outlines all of a client's steps involved in initiating, submitting and completing mints and burns."),Object(c.mdx)("p",null,"It serves as a specification for RenJS to follow, as well as for other potential client implementations."),Object(c.mdx)("h3",{id:"contents"},"Contents"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"1 ",Object(c.mdx)("a",{parentName:"li",href:"#locking"},"Locking")),Object(c.mdx)("li",{parentName:"ul"},"1.1 ",Object(c.mdx)("a",{parentName:"li",href:"#generating-a-gateway-address"},"Generating a gateway address"))),Object(c.mdx)("h1",{id:"locking"},"Locking"),Object(c.mdx)("h2",{id:"generating-a-gateway-address"},"Generating a gateway address"),Object(c.mdx)("h3",{id:"dependency-chain"},"Dependency chain"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Gateway address depends on",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},"gPubKey, which depends on",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},"the selector"),Object(c.mdx)("li",{parentName:"ul"},"the latest ",Object(c.mdx)("inlineCode",{parentName:"li"},"ren_queryState")," result"))),Object(c.mdx)("li",{parentName:"ul"},"gHash, which depends on",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},"the recipient"),Object(c.mdx)("li",{parentName:"ul"},"nonce"),Object(c.mdx)("li",{parentName:"ul"},"pHash, which depends on",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},"payload"))),Object(c.mdx)("li",{parentName:"ul"},"sHash, which depends on",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},"the selector")))))))),Object(c.mdx)("h3",{id:"information-provided-by-the-user--the-front-end"},"Information provided by the user / the front-end"),Object(c.mdx)("ol",null,Object(c.mdx)("li",{parentName:"ol"},"The chain on which an asset is being locked"),Object(c.mdx)("li",{parentName:"ol"},"The asset being locked"),Object(c.mdx)("li",{parentName:"ol"},"The host chain, where the ren-asset will be minted"),Object(c.mdx)("li",{parentName:"ol"},"A recipient on the target chain - either a user's address or a contract"),Object(c.mdx)("li",{parentName:"ol"},"A payload associated with the recipient, such as the parameters for a contract call"),Object(c.mdx)("li",{parentName:"ol"},"A nonce, an arbitrary 32-byte integer")),Object(c.mdx)("p",null,"The ",Object(c.mdx)("strong",{parentName:"p"},Object(c.mdx)("em",{parentName:"strong"},"selector"))," is defined to be ",Object(c.mdx)("inlineCode",{parentName:"p"},"ASSET/toHostChain")," for the provided asset and host-chain."),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},Object(c.mdx)("strong",{parentName:"p"},"Example")),Object(c.mdx)("ul",{parentName:"blockquote"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"Lock-chain"),": Terra"),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"Asset"),": LUNA"),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"Host-chain"),": Ethereum"),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"Selector"),": `LUNA/toEthereum"),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"Recipient"),": The ",Object(c.mdx)("inlineCode",{parentName:"li"},"BasicAdapter")," contract deployed at ",Object(c.mdx)("inlineCode",{parentName:"li"},"0x32666B64e9fD0F44916E1378Efb2CFa3B3B96e80"),", decoded from hex"),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"Payload"),":"),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"Nonce"),": 3"))),Object(c.mdx)("h3",{id:"select-a-shard"},"Select a shard"),Object(c.mdx)("p",null,"A RenVM shard is selected using the ",Object(c.mdx)("inlineCode",{parentName:"p"},"ren_queryState")," JSON-RPC endpoint on RenVM. The shard must support the asset being locked."),Object(c.mdx)("p",null,"We assign the shard's public key to the variable ",Object(c.mdx)("inlineCode",{parentName:"p"},"gPubKey"),"."),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},Object(c.mdx)("strong",{parentName:"p"},"Example")),Object(c.mdx)("ul",{parentName:"blockquote"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"ren_queryState")," result:")),Object(c.mdx)("pre",{parentName:"blockquote"},Object(c.mdx)("code",{parentName:"pre"},'POST https://rpc-testnet.renproject.io/\n{\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "ren_queryState",\n    "params": {}\n}\nRESPONSE\n{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "state": {\n      "Bitcoin": {\n        "address": "mytu3FGw8cTzGTBTQZoVcZ2CZaYpRdk2YA",\n        "dust": "546",\n        "gasCap": "2",\n        "gasLimit": "400",\n        "gasPrice": "2",\n        "latestChainHash": "",\n        "latestChainHeight": "2034624",\n        "minimumAmount": "547",\n        "output": {\n          "outpoint": {\n            "hash": "4ZIEedHtDGcEXu-xTNjeaQSTHRHS1rvW6twem9gT2mU",\n            "index": "2"\n          },\n          "pubKeyScript": "dqkUyZiyqIrJZnbhTwdzkANBl5mmgjqIrA",\n          "value": "840258866"\n        },\n        "pubKey": "Aw3WX32ykguyKZEuP0IT3RUOX5csm3PpvnFNhEVhrDVc"\n      }\n    }\n  }\n}\n')),Object(c.mdx)("p",{parentName:"blockquote"},"We select the ",Object(c.mdx)("inlineCode",{parentName:"p"},"pubKey")," listed under ",Object(c.mdx)("inlineCode",{parentName:"p"},'"Bitcoin"'),"."),Object(c.mdx)("ul",{parentName:"blockquote"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"gPubKey"),": ",Object(c.mdx)("inlineCode",{parentName:"li"},"Aw3WX32ykguyKZEuP0IT3RUOX5csm3PpvnFNhEVhrDVc")))),Object(c.mdx)("h3",{id:"hashes"},"Hashes"),Object(c.mdx)("p",null,"There are several hashes involved in generating a gateway address. All of them use Keccak256, but some encode the data being hashed differently."),Object(c.mdx)("p",null,"The hashes are:"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},Object(c.mdx)("em",{parentName:"strong"},"sHash"))," - the selector hash. ",Object(c.mdx)("inlineCode",{parentName:"li"},"keccak256(selector)")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},Object(c.mdx)("em",{parentName:"strong"},"pHash"))," - the payload hash. ",Object(c.mdx)("inlineCode",{parentName:"li"},"keccak256(payload)")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},Object(c.mdx)("em",{parentName:"strong"},"gHash"))," - the gateway hash. ",Object(c.mdx)("inlineCode",{parentName:"li"},"keccak256(concat(pHash, sHash, recipient, nonce))"))),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},Object(c.mdx)("strong",{parentName:"p"},Object(c.mdx)("em",{parentName:"strong"},"Example"))),Object(c.mdx)("ul",{parentName:"blockquote"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"sHash"),": ",Object(c.mdx)("inlineCode",{parentName:"li"},'keccak256("LUNA/toEthereum")')," => ",Object(c.mdx)("inlineCode",{parentName:"li"},"cf82f7a141f97d439a22da6e28ef6c74c814875a32d79c6630afe73242e47e0d")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("strong",{parentName:"li"},"pHash"),": ",Object(c.mdx)("inlineCode",{parentName:"li"},"keccak256()")))))}m.isMDXComponent=!0},414:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return s})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.a.createElement(e,i({},t,{components:n}))}},s=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,u=m["".concat(i,".").concat(p)]||m[p]||b[p]||c;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<c;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);