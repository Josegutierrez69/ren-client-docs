(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{271:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return A})),t.d(e,"metadata",(function(){return o})),t.d(e,"toc",(function(){return c})),t.d(e,"default",(function(){return i}));var r=t(3),a=t(9),s=(t(0),t(410)),A={},o={unversionedId:"client-spec/ren-js-output",id:"client-spec/ren-js-output",isDocsHomePage:!1,title:"ren-js-output",description:"`json",source:"@site/ren-js/client-spec/ren-js-output.md",slug:"/client-spec/ren-js-output",permalink:"/ren-client-docs/ren-js/client-spec/ren-js-output",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/client-spec/ren-js-output.md",version:"current"},c=[],u={toc:c};function i(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(s.mdx)("wrapper",Object(r.default)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'yarn run v1.22.10\n$ run-s test:*\n$ nyc ../../../node_modules/ts-mocha/bin/ts-mocha --sort --exit --timeout 180000 --paths -p ./tsconfig.json ./test/*.spec.ts ./test/**/*.spec.ts --ignore ./test/testutils/chai.d.ts\n\n\n  Refactor: mint\nMint address: 0xFB87bCF203b78d9B67719b7EEa3b6B65A208961B, balance: 0.390831171397589548\n[RenJS][DEBUG]lockAndMint created:\n  {\n    asset: \'LUNA\',\n    nonce: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 03>\n  }\n[RenJS][DEBUG]pHash\n  Ymk5U5rcsw4XWdRssDQcITTrPRdIA92n3QW57h1fyeE= 0x0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000fb87bcf203b78d9b67719b7eea3b6b65a208961b00000000000000000000000000000000000000000000000000000000000000044c554e4100000000000000000000000000000000000000000000000000000000 [\n    { type: \'string\', name: \'_symbol\', value: \'LUNA\' },\n    {\n      type: \'address\',\n      name: \'_address\',\n      value: \'0xFB87bCF203b78d9B67719b7EEa3b6B65A208961B\'\n    }\n  ]\n[RenJS][DEBUG]pHash\n  Ymk5U5rcsw4XWdRssDQcITTrPRdIA92n3QW57h1fyeE= 0x0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000fb87bcf203b78d9b67719b7eea3b6b65a208961b00000000000000000000000000000000000000000000000000000000000000044c554e4100000000000000000000000000000000000000000000000000000000 [\n    { type: \'string\', name: \'_symbol\', value: \'LUNA\' },\n    {\n      type: \'address\',\n      name: \'_address\',\n      value: \'0xFB87bCF203b78d9B67719b7EEa3b6B65A208961B\'\n    }\n  ]\n[RenJS][DEBUG]gHash\n  +90QUTTCuDAbS1KHwswbgunCu9kq9YPxEAcW39JhRsM= 0x626939539adcb30e1759d46cb0341c2134eb3d174803dda7dd05b9ee1d5fc9e1cf82f7a141f97d439a22da6e28ef6c74c814875a32d79c6630afe73242e47e0d7ddfa2e5435027f6e13ca8db2f32ebd5551158bb0000000000000000000000000000000000000000000000000000000000000003\n[RenJS][DEBUG]gPubKey:\n  0x030dd65f7db2920bb229912e3f4213dd150e5f972c9b73e9be714d844561ac355c\n[RenJS][DEBUG]gateway address:\n  {\n    asset: \'LUNA\',\n    address: \'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu\'\n  }\nSend at least 0.3 LUNA to {\n  asset: \'LUNA\',\n  address: \'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu\'\n}\nLUNA balance: 978.000323 LUNA (terra1u9lte8qxtt53ssa8hs4t4kp27fkrh5gjvyr8yk)\n[faucet] Sending 1.5 LUNA to {"asset":"LUNA","address":"terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu"}\n[RenJS][DEBUG]LockAndMintDeposit created\n  {\n    transaction: {\n      hash: \'C685515C36A05AEA885477E6DCD17E6C00E778139868CF8F7A440D3078EF8FB5\',\n      messageIndex: 0,\n      from: \'terra1u9lte8qxtt53ssa8hs4t4kp27fkrh5gjvyr8yk\',\n      to: \'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu\',\n      denomination: \'uluna\',\n      amount: \'1500000\',\n      memo: \'\',\n      confirmations: 2\n    },\n    amount: \'1500000\'\n  } {\n    contractCalls: [\n      {\n        sendTo: \'0x7DDFA2e5435027f6e13Ca8Db2f32ebd5551158Bb\',\n        contractFn: \'mint\',\n        contractParams: [Array],\n        txConfig: [Object]\n      }\n    ],\n    asset: \'LUNA\',\n    nonce: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 03>\n  }\n[yskU2X] Received 1.5 LUNA {\n  transaction: {\n    hash: \'C685515C36A05AEA885477E6DCD17E6C00E778139868CF8F7A440D3078EF8FB5\',\n    messageIndex: 0,\n    from: \'terra1u9lte8qxtt53ssa8hs4t4kp27fkrh5gjvyr8yk\',\n    to: \'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu\',\n    denomination: \'uluna\',\n    amount: \'1500000\',\n    memo: \'\',\n    confirmations: 2\n  },\n  amount: \'1500000\'\n} https://finder.terra.money/tequila-0004/tx/C685515C36A05AEA885477E6DCD17E6C00E778139868CF8F7A440D3078EF8FB5\n[yskU2X] Calling .signed\n[yskU2X]RenVM txHash:\n  yskU2X15B9k_Lcxp0aFjB9sb2ow_Lqub4H_tBAXvn0c\n[RenJS][DEBUG]new deposit:\n  {\n    transaction: {\n      hash: \'C685515C36A05AEA885477E6DCD17E6C00E778139868CF8F7A440D3078EF8FB5\',\n      messageIndex: 0,\n      from: \'terra1u9lte8qxtt53ssa8hs4t4kp27fkrh5gjvyr8yk\',\n      to: \'terra15cdmhng0hmzfaw5ahhdd496kpjuekv72gt2ttu\',\n      denomination: \'uluna\',\n      amount: \'1500000\',\n      memo: \'\',\n      confirmations: 2\n    },\n    amount: \'1500000\'\n  }\n[yskU2X] status: confirming\n[yskU2X]transaction status:\n  confirming\n[yskU2X] status: executing\n[yskU2X]transaction status:\n  executing\n[yskU2X] status: executing\n[yskU2X]transaction status:\n  executing\n[yskU2X]signature:\n  <Buffer dd 69 44 2e 68 9e 06 fe 2f 08 c0 ef 5b 17 09 30 3f 9e 22 be 71 33 9b 71 0d c7 99 ae b5 df ae d3 14 01 f8 c9 7e 33 57 3c 85 60 32 03 26 3a dd 49 40 19 ... 15 more bytes>\n[yskU2X] Calling .mint\n[yskU2X] txHash: https://kovan.etherscan.io/tx/0xfdbefef6f3601f0c82dadf8177a2bb8ac668cf6df9f90b11126fcf01d6c30077\n    \u2713 mint to contract (151608ms)\n\n\n  1 passing (3m)\n\n----------|---------|----------|---------|---------|-------------------\nFile      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s\n----------|---------|----------|---------|---------|-------------------\nAll files |       0 |        0 |       0 |       0 |\n----------|---------|----------|---------|---------|-------------------\nDone in 153.98s.\n\n\n\n\n{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "tx": {\n      "hash": "yskU2X15B9k_Lcxp0aFjB9sb2ow_Lqub4H_tBAXvn0c",\n      "version": "1",\n      "selector": "LUNA/toEthereum",\n      "in": {\n        "t": {\n          "struct": [\n            {\n              "txid": "bytes"\n            },\n            {\n              "txindex": "u32"\n            },\n            {\n              "amount": "u256"\n            },\n            {\n              "payload": "bytes"\n            },\n            {\n              "phash": "bytes32"\n            },\n            {\n              "to": "string"\n            },\n            {\n              "nonce": "bytes32"\n            },\n            {\n              "nhash": "bytes32"\n            },\n            {\n              "gpubkey": "bytes"\n            },\n            {\n              "ghash": "bytes32"\n            }\n          ]\n        },\n        "v": {\n          "amount": "1500000",\n          "ghash": "-90QUTTCuDAbS1KHwswbgunCu9kq9YPxEAcW39JhRsM",\n          "gpubkey": "Aw3WX32ykguyKZEuP0IT3RUOX5csm3PpvnFNhEVhrDVc",\n          "nhash": "3vejIRESKNPYtHuW4ZcxbkTsCiMVwPI_YYZHKDbWQMI",\n          "nonce": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM",\n          "payload": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAD7h7zyA7eNm2dxm37qO2tlogiWGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAETFVOQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",\n          "phash": "Ymk5U5rcsw4XWdRssDQcITTrPRdIA92n3QW57h1fyeE",\n          "to": "7DDFA2e5435027f6e13Ca8Db2f32ebd5551158Bb",\n          "txid": "xoVRXDagWuqIVHfm3NF-bADneBOYaM-PekQNMHjvj7U",\n          "txindex": "0"\n        }\n      },\n      "out": {\n        "t": {\n          "struct": [\n            {\n              "hash": "bytes32"\n            },\n            {\n              "amount": "u256"\n            },\n            {\n              "sighash": "bytes32"\n            },\n            {\n              "sig": "bytes65"\n            },\n            {\n              "txid": "bytes"\n            },\n            {\n              "txindex": "u32"\n            }\n          ]\n        },\n        "v": {\n          "amount": "1197000",\n          "hash": "yskU2X15B9k_Lcxp0aFjB9sb2ow_Lqub4H_tBAXvn0c",\n          "sig": "3WlELmieBv4vCMDvWxcJMD-eIr5xM5txDceZrrXfrtMUAfjJfjNXPIVgMgMmOt1JQBmBtHVcHpAwLhufORHY3wA",\n          "sighash": "Ftg3mNeJwKwk6d6egOzwtNUPl-DHimbPed44zwA6b0c",\n          "txid": "",\n          "txindex": "0"\n        }\n      }\n    },\n    "txStatus": "done"\n  }\n}\n')))}i.isMDXComponent=!0},410:function(n,e,t){"use strict";t.r(e),t.d(e,"MDXContext",(function(){return i})),t.d(e,"MDXProvider",(function(){return b})),t.d(e,"mdx",(function(){return l})),t.d(e,"useMDXComponents",(function(){return f})),t.d(e,"withMDXComponents",(function(){return d}));var r=t(0),a=t.n(r);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function A(){return(A=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=a.a.createContext({}),d=function(n){return function(e){var t=f(e.components);return a.a.createElement(n,A({},e,{components:t}))}},f=function(n){var e=a.a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},b=function(n){var e=f(n.components);return a.a.createElement(i.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},p=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,A=n.parentName,o=u(n,["components","mdxType","originalType","parentName"]),i=f(t),d=r,b=i["".concat(A,".").concat(d)]||i[d]||m[d]||s;return t?a.a.createElement(b,c(c({ref:e},o),{},{components:t})):a.a.createElement(b,c({ref:e},o))}));function l(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,A=new Array(s);A[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:r,A[1]=o;for(var u=2;u<s;u++)A[u]=t[u];return a.a.createElement.apply(null,A)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);