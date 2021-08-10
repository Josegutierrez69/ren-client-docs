(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),m=(n(0),n(413)),d={id:"lib_ren_src.default",title:"Class: default",sidebar_label:"default",custom_edit_url:null},c={unversionedId:"api/classes/lib_ren_src.default",id:"api/classes/lib_ren_src.default",isDocsHomePage:!1,title:"Class: default",description:"Class: default",source:"@site/ren-js/api/classes/lib_ren_src.default.md",slug:"/api/classes/lib_ren_src.default",permalink:"/ren-client-docs/ren-js/api/classes/lib_ren_src.default",editUrl:null,version:"current",sidebar_label:"default"},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"renVM",id:"renvm",children:[]},{value:"Networks",id:"networks",children:[]},{value:"defaultDepositHandler",id:"defaultdeposithandler",children:[]},{value:"utils",id:"utils",children:[]}]},{value:"Methods",id:"methods",children:[{value:"burnAndRelease",id:"burnandrelease",children:[]},{value:"getFees",id:"getfees",children:[]},{value:"lockAndMint",id:"lockandmint",children:[]}]}],l={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(m.mdx)("wrapper",Object(a.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"class-default"},"Class: default"),Object(m.mdx)("p",null,Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_ren_src"},"lib/ren/src"),".default"),Object(m.mdx)("p",null,"This is the main exported class from ",Object(m.mdx)("inlineCode",{parentName:"p"},"@renproject/ren"),"."),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-typescript"},'import RenJS from "@renproject/ren";\n')),Object(m.mdx)("p",null,"By default, RenJS will connect to the RenVM mainnet network. To connect\nto ",Object(m.mdx)("inlineCode",{parentName:"p"},"testnet")," or to configure a custom connection, RenJS takes an optional\nprovider object. See the ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src.default#constructor"},"constructor")," for more details."),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-typescript"},'new RenJS(); // Same as `new RenJS("mainnet");`\nnew RenJS("testnet");\nnew RenJS(custom provider object);\n')),Object(m.mdx)("p",null,"It then exposes two main functions:"),Object(m.mdx)("ol",null,Object(m.mdx)("li",{parentName:"ol"},Object(m.mdx)("a",{parentName:"li",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src.default#lockandmint"},"lockAndMint")," - for transferring assets to Ethereum."),Object(m.mdx)("li",{parentName:"ol"},Object(m.mdx)("a",{parentName:"li",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src.default#burnandrelease"},"burnAndRelease")," - for transferring assets out of Ethereum.")),Object(m.mdx)("p",null,"Also see:"),Object(m.mdx)("ol",null,Object(m.mdx)("li",{parentName:"ol"},Object(m.mdx)("a",{parentName:"li",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src.default#getfees"},"getFees")," - for estimating the fees that will be incurred by minting or\nburning."),Object(m.mdx)("li",{parentName:"ol"},Object(m.mdx)("a",{parentName:"li",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src.default#defaultdeposithandler"},"defaultDepositHandler"))),Object(m.mdx)("h2",{id:"constructors"},"Constructors"),Object(m.mdx)("h3",{id:"constructor"},"constructor"),Object(m.mdx)("p",null,"+"," ",Object(m.mdx)("strong",{parentName:"p"},"new default"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"providerOrNetwork?"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider"},Object(m.mdx)("em",{parentName:"a"},"AbstractRenVMProvider")),"<{}, {}",">"," ","|"," ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_networks.rennetworkdetails"},Object(m.mdx)("em",{parentName:"a"},"RenNetworkDetails"))," ","|"," ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/enums/lib_interfaces_build_main_networks.rennetwork"},Object(m.mdx)("em",{parentName:"a"},"RenNetwork"))," ","|"," ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_networks#rennetworkstring"},Object(m.mdx)("em",{parentName:"a"},"RenNetworkString")),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"config?"),": ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_ren_src_config.renjsconfig"},Object(m.mdx)("em",{parentName:"a"},"RenJSConfig")),"): ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src.default"},Object(m.mdx)("em",{parentName:"a"},"default"))),Object(m.mdx)("p",null,"Accepts the name of a network, or a network object."),Object(m.mdx)("h4",{id:"parameters"},"Parameters"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"providerOrNetwork?")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"null")," ","|"," ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider"},Object(m.mdx)("em",{parentName:"a"},"AbstractRenVMProvider")),"<{}, {}",">"," ","|"," ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_networks.rennetworkdetails"},Object(m.mdx)("em",{parentName:"a"},"RenNetworkDetails"))," ","|"," ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/enums/lib_interfaces_build_main_networks.rennetwork"},Object(m.mdx)("em",{parentName:"a"},"RenNetwork"))," ","|"," ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_networks#rennetworkstring"},Object(m.mdx)("em",{parentName:"a"},"RenNetworkString")))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"config?")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_ren_src_config.renjsconfig"},Object(m.mdx)("em",{parentName:"a"},"RenJSConfig")))))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src.default"},Object(m.mdx)("em",{parentName:"a"},"default"))),Object(m.mdx)("p",null,"Defined in: ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L109"},"ren-js/packages/lib/ren/src/index.ts:109")),Object(m.mdx)("h2",{id:"properties"},"Properties"),Object(m.mdx)("h3",{id:"renvm"},"renVM"),Object(m.mdx)("p",null,"\u2022 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",Object(m.mdx)("strong",{parentName:"p"},"renVM"),": ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider"},Object(m.mdx)("em",{parentName:"a"},"AbstractRenVMProvider")),"<{}, {}",">"),Object(m.mdx)("p",null,"RenVM provider exposing ",Object(m.mdx)("inlineCode",{parentName:"p"},"sendMessage")," and other helper functions for\ninteracting with RenVM. See ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_rpc_build_main_abstract.abstractrenvmprovider"},"AbstractRenVMProvider"),"."),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-ts"},'renJS.renVM.sendMessage("ren_queryNumPeers", {});\n')),Object(m.mdx)("p",null,"Defined in: ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L105"},"ren-js/packages/lib/ren/src/index.ts:105")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"networks"},"Networks"),Object(m.mdx)("p",null,"\u25aa ",Object(m.mdx)("inlineCode",{parentName:"p"},"Static")," ",Object(m.mdx)("strong",{parentName:"p"},"Networks"),": ",Object(m.mdx)("em",{parentName:"p"},"typeof")," ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/enums/lib_interfaces_build_main_networks.rennetwork"},Object(m.mdx)("em",{parentName:"a"},"RenNetwork"))),Object(m.mdx)("p",null,Object(m.mdx)("inlineCode",{parentName:"p"},"Networks")," exposes the network options that can be passed in to the RenJS\nconstructor. ",Object(m.mdx)("inlineCode",{parentName:"p"},"Networks.Mainnet")," resolves to the string ",Object(m.mdx)("inlineCode",{parentName:"p"},'"mainnet"'),"."),Object(m.mdx)("p",null,"Defined in: ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L65"},"ren-js/packages/lib/ren/src/index.ts:65")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"defaultdeposithandler"},"defaultDepositHandler"),Object(m.mdx)("p",null,"\u25aa ",Object(m.mdx)("inlineCode",{parentName:"p"},"Static")," ",Object(m.mdx)("strong",{parentName:"p"},"defaultDepositHandler"),": (",Object(m.mdx)("inlineCode",{parentName:"p"},"deposit"),": ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmintdeposit"},Object(m.mdx)("em",{parentName:"a"},"LockAndMintDeposit")),"<any, ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_chain#depositcommon"},Object(m.mdx)("em",{parentName:"a"},"DepositCommon")),"<any",">",", any, any, any",">",") => ",Object(m.mdx)("em",{parentName:"p"},"Promise"),"<void",">"," & { ",Object(m.mdx)("inlineCode",{parentName:"p"},"withRetries"),": (",Object(m.mdx)("inlineCode",{parentName:"p"},"newRetries"),": ",Object(m.mdx)("em",{parentName:"p"},"number"),") => ",Object(m.mdx)("em",{parentName:"p"},"void"),"  }"),Object(m.mdx)("p",null,Object(m.mdx)("inlineCode",{parentName:"p"},"RenJS.defaultDepositHandler")," can be passed as a deposit callback when\nminting. It will handle submitting to RenVM and then to the mint-chain,\nas long as a valid provider for the mint-chain is given."),Object(m.mdx)("p",null,"This is not recommended for front-ends, since it may trigger a wallet\npop-up unexpectedly when the mint is ready to be submitted."),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-ts"},'lockAndMint.on("deposit", RenJS.defaultDepositHandler);\n')),Object(m.mdx)("p",null,"Defined in: ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L90"},"ren-js/packages/lib/ren/src/index.ts:90")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"utils"},"utils"),Object(m.mdx)("p",null,"\u25aa ",Object(m.mdx)("inlineCode",{parentName:"p"},"Static")," ",Object(m.mdx)("strong",{parentName:"p"},"utils"),": ",Object(m.mdx)("em",{parentName:"p"},"object")),Object(m.mdx)("p",null,"A collection of helper functions. [","[utils.randomNonce]","] can be be used to\ngenerate a nonce when calling [","[RenJS.lockAndMint]","]."),Object(m.mdx)("h4",{id:"type-declaration"},"Type declaration"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"fromAscii")),Object(m.mdx)("td",{parentName:"tr",align:"left"},"(",Object(m.mdx)("inlineCode",{parentName:"td"},"str"),": ",Object(m.mdx)("em",{parentName:"td"},"string"),") => ",Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"fromSmallestUnit")),Object(m.mdx)("td",{parentName:"tr",align:"left"},"(",Object(m.mdx)("inlineCode",{parentName:"td"},"value"),": ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_parameters#numbervalue"},Object(m.mdx)("em",{parentName:"a"},"NumberValue")),", ",Object(m.mdx)("inlineCode",{parentName:"td"},"decimals"),": ",Object(m.mdx)("em",{parentName:"td"},"number"),") => ",Object(m.mdx)("em",{parentName:"td"},"string"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"randomNonce")),Object(m.mdx)("td",{parentName:"tr",align:"left"},"() => ",Object(m.mdx)("em",{parentName:"td"},"Buffer"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"toSmallestUnit")),Object(m.mdx)("td",{parentName:"tr",align:"left"},"(",Object(m.mdx)("inlineCode",{parentName:"td"},"value"),": ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_parameters#numbervalue"},Object(m.mdx)("em",{parentName:"a"},"NumberValue")),", ",Object(m.mdx)("inlineCode",{parentName:"td"},"decimals"),": ",Object(m.mdx)("em",{parentName:"td"},"number"),") => ",Object(m.mdx)("em",{parentName:"td"},"string"))))),Object(m.mdx)("p",null,"Defined in: ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L71"},"ren-js/packages/lib/ren/src/index.ts:71")),Object(m.mdx)("h2",{id:"methods"},"Methods"),Object(m.mdx)("h3",{id:"burnandrelease"},"burnAndRelease"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",Object(m.mdx)("strong",{parentName:"p"},"burnAndRelease"),"<Transaction, Deposit, Address",">","(",Object(m.mdx)("inlineCode",{parentName:"p"},"params"),": ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_parameters.burnandreleaseparams"},Object(m.mdx)("em",{parentName:"a"},"BurnAndReleaseParams")),"<Transaction, Deposit, Address, any, any",">","): ",Object(m.mdx)("em",{parentName:"p"},"Promise"),"<",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_burnandrelease.burnandrelease"},Object(m.mdx)("em",{parentName:"a"},"BurnAndRelease")),"<Transaction, Deposit, Address, any, any",">",">"),Object(m.mdx)("p",null,Object(m.mdx)("inlineCode",{parentName:"p"},"burnAndRelease")," submits a burn log to RenVM.\nReturns a ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_burnandrelease.burnandrelease"},"BurnAndRelease")," object."),Object(m.mdx)("h4",{id:"type-parameters"},"Type parameters"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Default"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"Transaction")),Object(m.mdx)("td",{parentName:"tr",align:"left"},"-"),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"any"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"Deposit")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_chain#depositcommon"},Object(m.mdx)("em",{parentName:"a"},"DepositCommon")),"<Transaction",">"),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_chain#depositcommon"},Object(m.mdx)("em",{parentName:"a"},"DepositCommon")),"<Transaction",">")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"Address")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"string")," ","|"," { ",Object(m.mdx)("inlineCode",{parentName:"td"},"address"),": ",Object(m.mdx)("em",{parentName:"td"},"string"),"  }"),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"any"))))),Object(m.mdx)("h4",{id:"parameters-1"},"Parameters"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"params")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_parameters.burnandreleaseparams"},Object(m.mdx)("em",{parentName:"a"},"BurnAndReleaseParams")),"<Transaction, Deposit, Address, any, any",">")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("em",{parentName:"p"},"Promise"),"<",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_burnandrelease.burnandrelease"},Object(m.mdx)("em",{parentName:"a"},"BurnAndRelease")),"<Transaction, Deposit, Address, any, any",">",">"),Object(m.mdx)("p",null,"Defined in: ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L265"},"ren-js/packages/lib/ren/src/index.ts:265")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"getfees"},"getFees"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("strong",{parentName:"p"},"getFees"),"(",Object(m.mdx)("inlineCode",{parentName:"p"},"__namedParameters"),": { ",Object(m.mdx)("inlineCode",{parentName:"p"},"asset"),": ",Object(m.mdx)("em",{parentName:"p"},"string")," ; ",Object(m.mdx)("inlineCode",{parentName:"p"},"from"),": ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.lockchain"},Object(m.mdx)("em",{parentName:"a"},"LockChain")),"<any, any, any, any, any",">"," ","|"," ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.mintchain"},Object(m.mdx)("em",{parentName:"a"},"MintChain")),"<any, any, any",">"," ; ",Object(m.mdx)("inlineCode",{parentName:"p"},"to"),": ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.lockchain"},Object(m.mdx)("em",{parentName:"a"},"LockChain")),"<any, any, any, any, any",">"," ","|"," ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.mintchain"},Object(m.mdx)("em",{parentName:"a"},"MintChain")),"<any, any, any",">","  }): ",Object(m.mdx)("em",{parentName:"p"},"Promise"),"<{ ",Object(m.mdx)("inlineCode",{parentName:"p"},"burn"),": ",Object(m.mdx)("em",{parentName:"p"},"number")," ; ",Object(m.mdx)("inlineCode",{parentName:"p"},"lock?"),": ",Object(m.mdx)("em",{parentName:"p"},"BigNumber")," ; ",Object(m.mdx)("inlineCode",{parentName:"p"},"mint"),": ",Object(m.mdx)("em",{parentName:"p"},"number")," ; ",Object(m.mdx)("inlineCode",{parentName:"p"},"release?"),": ",Object(m.mdx)("em",{parentName:"p"},"BigNumber"),"  }",">"),Object(m.mdx)("h4",{id:"parameters-2"},"Parameters"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"__namedParameters")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"object"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"__namedParameters.asset")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"string"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"__namedParameters.from")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.lockchain"},Object(m.mdx)("em",{parentName:"a"},"LockChain")),"<any, any, any, any, any",">"," ","|"," ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.mintchain"},Object(m.mdx)("em",{parentName:"a"},"MintChain")),"<any, any, any",">")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"__namedParameters.to")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.lockchain"},Object(m.mdx)("em",{parentName:"a"},"LockChain")),"<any, any, any, any, any",">"," ","|"," ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_chain.mintchain"},Object(m.mdx)("em",{parentName:"a"},"MintChain")),"<any, any, any",">")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("em",{parentName:"p"},"Promise"),"<{ ",Object(m.mdx)("inlineCode",{parentName:"p"},"burn"),": ",Object(m.mdx)("em",{parentName:"p"},"number")," ; ",Object(m.mdx)("inlineCode",{parentName:"p"},"lock?"),": ",Object(m.mdx)("em",{parentName:"p"},"BigNumber")," ; ",Object(m.mdx)("inlineCode",{parentName:"p"},"mint"),": ",Object(m.mdx)("em",{parentName:"p"},"number")," ; ",Object(m.mdx)("inlineCode",{parentName:"p"},"release?"),": ",Object(m.mdx)("em",{parentName:"p"},"BigNumber"),"  }",">"),Object(m.mdx)("p",null,"Defined in: ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L162"},"ren-js/packages/lib/ren/src/index.ts:162")),Object(m.mdx)("hr",null),Object(m.mdx)("h3",{id:"lockandmint"},"lockAndMint"),Object(m.mdx)("p",null,"\u25b8 ",Object(m.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",Object(m.mdx)("strong",{parentName:"p"},"lockAndMint"),"<Transaction, Deposit, Address",">","(",Object(m.mdx)("inlineCode",{parentName:"p"},"params"),": ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_parameters.lockandmintparams"},Object(m.mdx)("em",{parentName:"a"},"LockAndMintParams")),"<Transaction, Deposit, Address, any, any",">","): ",Object(m.mdx)("em",{parentName:"p"},"Promise"),"<",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmint"},Object(m.mdx)("em",{parentName:"a"},"LockAndMint")),"<Transaction, Deposit, Address, any, any",">",">"),Object(m.mdx)("p",null,Object(m.mdx)("inlineCode",{parentName:"p"},"lockAndMint")," initiates the process of bridging an asset from its native\nchain to a host chain."),Object(m.mdx)("p",null,"See ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_parameters.lockandmintparams"},"LockAndMintParams")," for all the options that can be set."),Object(m.mdx)("p",null,"Returns a ",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmint"},"LockAndMint")," object."),Object(m.mdx)("p",null,"Example initialization:"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-js"},'const lockAndMint = renJS.lockAndMint({\n    asset: "BTC",\n    from: Bitcoin(),\n    to: Ethereum(web3Provider).Account({\n        address: "0x...",\n    }),\n});\n')),Object(m.mdx)("h4",{id:"type-parameters-1"},"Type parameters"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Default"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"Transaction")),Object(m.mdx)("td",{parentName:"tr",align:"left"},"-"),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"any"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"Deposit")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_chain#depositcommon"},Object(m.mdx)("em",{parentName:"a"},"DepositCommon")),"<Transaction",">"),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/modules/lib_interfaces_build_main_chain#depositcommon"},Object(m.mdx)("em",{parentName:"a"},"DepositCommon")),"<Transaction",">")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"Address")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"string")," ","|"," { ",Object(m.mdx)("inlineCode",{parentName:"td"},"address"),": ",Object(m.mdx)("em",{parentName:"td"},"string"),"  }"),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("em",{parentName:"td"},"any"))))),Object(m.mdx)("h4",{id:"parameters-3"},"Parameters"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:"left"},"Name"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Type"),Object(m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("inlineCode",{parentName:"td"},"params")),Object(m.mdx)("td",{parentName:"tr",align:"left"},Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_parameters.lockandmintparams"},Object(m.mdx)("em",{parentName:"a"},"LockAndMintParams")),"<Transaction, Deposit, Address, any, any",">"),Object(m.mdx)("td",{parentName:"tr",align:"left"},"See ",Object(m.mdx)("a",{parentName:"td",href:"/ren-client-docs/ren-js/api/interfaces/lib_interfaces_build_main_parameters.lockandmintparams"},"LockAndMintParams"),".")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns:")," ",Object(m.mdx)("em",{parentName:"p"},"Promise"),"<",Object(m.mdx)("a",{parentName:"p",href:"/ren-client-docs/ren-js/api/classes/lib_ren_src_lockandmint.lockandmint"},Object(m.mdx)("em",{parentName:"a"},"LockAndMint")),"<Transaction, Deposit, Address, any, any",">",">"),Object(m.mdx)("p",null,"Defined in: ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-js/blob/c6712eb8/packages/lib/ren/src/index.ts#L246"},"ren-js/packages/lib/ren/src/index.ts:246")))}p.isMDXComponent=!0},413:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return o})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return b})),n.d(t,"withMDXComponents",(function(){return s}));var a=n(0),r=n.n(a);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){return function(t){var n=b(t.components);return r.a.createElement(e,d({},t,{components:n}))}},b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},x=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,m=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),s=a,o=p["".concat(d,".").concat(s)]||p[s]||j[s]||m;return n?r.a.createElement(o,i(i({ref:t},c),{},{components:n})):r.a.createElement(o,i({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var m=n.length,d=new Array(m);d[0]=x;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,d[1]=c;for(var l=2;l<m;l++)d[l]=n[l];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,n)}x.displayName="MDXCreateElement"}}]);