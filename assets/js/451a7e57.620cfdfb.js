"use strict";(self.webpackChunkren_client_docs=self.webpackChunkren_client_docs||[]).push([[2182],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,y=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77025:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(69324),c=n(93454),s=n(1773),l=["components"],p={title:"GatewayTransaction Class"},m=void 0,u={unversionedId:"v3/reference/gatewayTransaction",id:"v3/reference/gatewayTransaction",title:"GatewayTransaction Class",description:"GatewayTransaction (TypeDoc)",source:"@site/ren-js/v3/reference/gatewayTransaction.mdx",sourceDirName:"v3/reference",slug:"/v3/reference/gatewayTransaction",permalink:"/ren-client-docs/ren-js/v3/reference/gatewayTransaction",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/v3/reference/gatewayTransaction.mdx",tags:[],version:"current",frontMatter:{title:"GatewayTransaction Class"},sidebar:"docs",previous:{title:"Gateway Class",permalink:"/ren-client-docs/ren-js/v3/reference/gateway"},next:{title:"TxSubmitter / TxWaiter",permalink:"/ren-client-docs/ren-js/v3/reference/txSubmitter"}},h=[{value:'GatewayTransaction <TypeDoc name="GatewayTransaction">(TypeDoc)</TypeDoc>',id:"gatewaytransaction-typedoc",children:[],level:3}],y={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.G,{type:c.e.Reference,mdxType:"DocTag"}),(0,o.kt)("h3",{id:"gatewaytransaction-typedoc"},"GatewayTransaction ",(0,o.kt)(i.L,{name:"GatewayTransaction",mdxType:"TypeDoc"},"(TypeDoc)")),(0,o.kt)("p",null,"When a new transaction is detected on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Gateway")," instance (either from a user sending funds to a gateway address or from the user submitting a transaction), a new ",(0,o.kt)("inlineCode",{parentName:"p"},"GatewayTransaction")," instance is returned. Alternatively, ",(0,o.kt)("inlineCode",{parentName:"p"},"renJS.gatewayTransaction")," can also be used directly - this will usually only be used to recover existing transactions that have already been emitted by a ",(0,o.kt)("inlineCode",{parentName:"p"},"Gateway")," instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'interface TransactionParams<\n    ToPayload extends { chain: string; txConfig?: any } = {\n        chain: string;\n    }\n> {\n    /**\n     * The asset being minted or burned - e.g. `"BTC"`.\n     */\n    asset: string;\n\n    /**\n     * A payload for the chain being bridged to.\n     *\n     * @example\n     * bitcoin.Address("miMi...")\n     */\n    to: ToPayload;\n\n    /**\n     * A gateway transaction always has a input transaction on the origin-chain.\n     */\n    fromTx: InputChainTransaction;\n\n    /**\n     * See GatewayParams["shard"].\n     */\n    shard?: GatewayParams["shard"];\n\n    /**\n     * See GatewayParams["nonce"].\n     */\n    nonce?: GatewayParams["nonce"];\n}\n')),(0,o.kt)("p",null,"The main difference between the parameters for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gateway")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GatewayTransaction")," objects is the ",(0,o.kt)("inlineCode",{parentName:"p"},"fromTx")," field of type ",(0,o.kt)(i.L,{name:"InputChainTransaction",mdxType:"TypeDoc"},(0,o.kt)("inlineCode",{parentName:"p"},"InputChainTransaction"))," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," payload."),(0,o.kt)("p",null,"The parameters of an existing ",(0,o.kt)("inlineCode",{parentName:"p"},"GatewayTransaction")," are available from ",(0,o.kt)("inlineCode",{parentName:"p"},"gatewayTransaction.params"),". They can be serialized and deserialized using ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse"),", and the transaction recreated using ",(0,o.kt)("inlineCode",{parentName:"p"},"renJS.gatewayTransaction(JSON.parse(serializedParams))"),"."),(0,o.kt)("p",null,"There are several fields on a GatewayTransaction instance that may be useful:"),(0,o.kt)(s.P,{title:"Properties",mdxType:"Enumerate"},(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.params",mdxType:"TypeDoc"},"params")," - the parameters that can be used to recreate the"," ",(0,o.kt)("code",null,"GatewayTransaction")),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.hash",mdxType:"TypeDoc"},"hash")," - the RenVM hash of the transaction"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.selector",mdxType:"TypeDoc"},"selector")," - the transaction's RenVM method selector"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.provider",mdxType:"TypeDoc"},"provider")," - the connected RenVM provider"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.fromChain",mdxType:"TypeDoc"},"fromChain")," - access the from transaction's chain instance that was passed into",(0,o.kt)("code",null,"renJS.withChains")),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.fromChain",mdxType:"TypeDoc"},"toChain")," - access the to-payload's chain instance that was passed into"," ",(0,o.kt)("code",null,"renJS.withChains")),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.nHash",mdxType:"TypeDoc"},"nHash")," - the nonce hash of the RenVM transaction"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.pHash",mdxType:"TypeDoc"},"pHash")," - the payload hash of the RenVM transaction"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.gHash",mdxType:"TypeDoc"},"gHash")," - the gateway hash of the RenVM transaction"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.in",mdxType:"TypeDoc"},"in")," - the TxWaiter instance for the input transaction"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.renVM",mdxType:"TypeDoc"},"renVM")," - the TxSubmitter instance for the RenVM transaction"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.outSetup",mdxType:"TypeDoc"},"outSetup")," - the setup transactions required to be submitted before ",(0,o.kt)("code",null,"out")," - e.g. for creating SPL token accounts on Solana"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.out",mdxType:"TypeDoc"},"out")," - the TxSubmitter/TxWaiter instance for the output transaction"),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.inputType",mdxType:"TypeDoc"},"inputType"),' - the input type of the transaction (one of "lock" or "burn")'),(0,o.kt)("p",null,(0,o.kt)(i.L,{name:"GatewayTransaction.outputType",mdxType:"TypeDoc"},"outputType"),' - the output type of the transaction (one of "mint" or "release")')))}d.isMDXComponent=!0},93454:function(e,t,n){n.d(t,{G:function(){return c},e:function(){return a}});var r,a,o=n(67294);!function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(a||(a={}));var i=((r={})[a.Tutorial]="#b48ead",r[a.HowTo]="#69a8b9",r[a.Reference]="#bf616a",r[a.Explanation]="#d2b06c",r),c=function(e){var t=e.type,n=e.marginBottom;return o.createElement(o.Fragment,null,o.createElement("span",{style:{border:"2px solid "+i[t]||0,borderRadius:"5px",color:i[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}},1773:function(e,t,n){n.d(t,{P:function(){return a}});var r=n(67294),a=function(e){var t=e.title,n=e.children;return r.createElement("div",{className:"enumerate"},r.createElement("h3",null,t),n)}},69324:function(e,t,n){n.d(t,{L:function(){return o}});var r=n(67294),a={Asset:"enums/_renproject_chains.Asset.html",Chain:"enums/_renproject_chains.Chain.html",RPCMethod:"enums/_renproject_provider.RPCMethod.html",ChainTransactionStatus:"enums/_renproject_utils.ChainTransactionStatus.html",InputType:"enums/_renproject_utils.InputType.html",LogLevel:"enums/_renproject_utils.LogLevel.html",OutputType:"enums/_renproject_utils.OutputType.html",PackPrimitive:"enums/_renproject_utils.PackPrimitive.html",RenJSError:"enums/_renproject_utils.RenJSError.html",RenNetwork:"enums/_renproject_utils.RenNetwork.html",TxStatus:"enums/_renproject_utils.TxStatus.html",EVMParam:"enums/_renproject_chains_ethereum.EVMParam.html",Bitcoin:"classes/_renproject_chains_bitcoin.Bitcoin.html",BitcoinBaseChain:"classes/_renproject_chains_bitcoin.BitcoinBaseChain.html",BitcoinCash:"classes/_renproject_chains_bitcoin.BitcoinCash.html",DigiByte:"classes/_renproject_chains_bitcoin.DigiByte.html",Dogecoin:"classes/_renproject_chains_bitcoin.Dogecoin.html",Zcash:"classes/_renproject_chains_bitcoin.Zcash.html",Arbitrum:"classes/_renproject_chains_ethereum.Arbitrum.html",Avalanche:"classes/_renproject_chains_ethereum.Avalanche.html",BinanceSmartChain:"classes/_renproject_chains_ethereum.BinanceSmartChain.html",Ethereum:"classes/_renproject_chains_ethereum.Ethereum.html",Fantom:"classes/_renproject_chains_ethereum.Fantom.html",Goerli:"classes/_renproject_chains_ethereum.Goerli.html",Polygon:"classes/_renproject_chains_ethereum.Polygon.html",Filecoin:"classes/_renproject_chains_filecoin.Filecoin.html",Solana:"classes/_renproject_chains_solana.Solana.html",Terra:"classes/_renproject_chains_terra.Terra.html",MockChain:"classes/_renproject_mock_provider.MockChain.html",MockProvider:"classes/_renproject_mock_provider.MockProvider.html",RenVMProvider:"classes/_renproject_provider.RenVMProvider.html",Gateway:"classes/_renproject_ren.Gateway.html",GatewayTransaction:"classes/_renproject_ren.GatewayTransaction.html",RenJS:"classes/_renproject_ren.RenJS.html",RenVMTxSubmitter:"classes/_renproject_ren.RenVMTxSubmitter.html",DefaultTxWaiter:"classes/_renproject_utils.DefaultTxWaiter.html",ErrorWithCode:"classes/_renproject_utils.ErrorWithCode.html",EventEmitterTyped:"classes/_renproject_utils.EventEmitterTyped.html",TxWaiterProxy:"classes/_renproject_utils.TxWaiterProxy.html",BitcoinNetworkConfig:"interfaces/_renproject_chains_bitcoin.BitcoinNetworkConfig.html",BitcoinOutputPayload:"interfaces/_renproject_chains_bitcoin.BitcoinOutputPayload.html",EthereumClassConfig:"interfaces/_renproject_chains_ethereum.EthereumClassConfig.html",EvmNetworkConfig:"interfaces/_renproject_chains_ethereum.EvmNetworkConfig.html",FilecoinNetworkConfig:"interfaces/_renproject_chains_filecoin.FilecoinNetworkConfig.html",FilecoinOutputPayload:"interfaces/_renproject_chains_filecoin.FilecoinOutputPayload.html",SolanaPayloadInterface:"interfaces/_renproject_chains_solana.SolanaPayloadInterface.html",TerraOutputPayload:"interfaces/_renproject_chains_terra.TerraOutputPayload.html",BlockState:"interfaces/_renproject_provider.BlockState.html",MarshalledRenVMBlock:"interfaces/_renproject_provider.MarshalledRenVMBlock.html",ParamsQueryBlock:"interfaces/_renproject_provider.ParamsQueryBlock.html",ParamsQueryBlockState:"interfaces/_renproject_provider.ParamsQueryBlockState.html",ParamsQueryBlocks:"interfaces/_renproject_provider.ParamsQueryBlocks.html",ParamsQueryConfig:"interfaces/_renproject_provider.ParamsQueryConfig.html",ParamsQueryTx:"interfaces/_renproject_provider.ParamsQueryTx.html",ParamsQueryTxs:"interfaces/_renproject_provider.ParamsQueryTxs.html",ParamsSubmitTx:"interfaces/_renproject_provider.ParamsSubmitTx.html",RenVMBlock:"interfaces/_renproject_provider.RenVMBlock.html",RenVMProviderInterface:"interfaces/_renproject_provider.RenVMProviderInterface.html",RenVMTransaction:"interfaces/_renproject_provider.RenVMTransaction.html",RenVMTransactionWithStatus:"interfaces/_renproject_provider.RenVMTransactionWithStatus.html",ResponseQueryBlock:"interfaces/_renproject_provider.ResponseQueryBlock.html",ResponseQueryBlockState:"interfaces/_renproject_provider.ResponseQueryBlockState.html",ResponseQueryBlocks:"interfaces/_renproject_provider.ResponseQueryBlocks.html",ResponseQueryConfig:"interfaces/_renproject_provider.ResponseQueryConfig.html",ResponseQueryTx:"interfaces/_renproject_provider.ResponseQueryTx.html",ResponseQueryTxs:"interfaces/_renproject_provider.ResponseQueryTxs.html",ResponseSubmitGateway:"interfaces/_renproject_provider.ResponseSubmitGateway.html",ResponseSubmitTx:"interfaces/_renproject_provider.ResponseSubmitTx.html",SubmitGatewayInput:"interfaces/_renproject_provider.SubmitGatewayInput.html",TransactionInput:"interfaces/_renproject_provider.TransactionInput.html",TransactionOutput:"interfaces/_renproject_provider.TransactionOutput.html",GatewayFees:"interfaces/_renproject_ren.GatewayFees.html",ChainCommon:"interfaces/_renproject_utils.ChainCommon.html",ChainTransaction:"interfaces/_renproject_utils.ChainTransaction.html",ChainTransactionProgress:"interfaces/_renproject_utils.ChainTransactionProgress.html",ContractChain:"interfaces/_renproject_utils.ContractChain.html",DepositChain:"interfaces/_renproject_utils.DepositChain.html",InputChainTransaction:"interfaces/_renproject_utils.InputChainTransaction.html",Logger:"interfaces/_renproject_utils.Logger.html",PackListType:"interfaces/_renproject_utils.PackListType.html",PackStructType:"interfaces/_renproject_utils.PackStructType.html",RenVMShard:"interfaces/_renproject_utils.RenVMShard.html",TxSubmitter:"interfaces/_renproject_utils.TxSubmitter.html",TxWaiter:"interfaces/_renproject_utils.TxWaiter.html",TypedPackValue:"interfaces/_renproject_utils.TypedPackValue.html"},o=function(e){var t=e.name,n=e.children,o=t.split("."),i=o[0],c=o[1];return r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://renproject.github.io/ren-js-v3-docs/"+a[i]+(c?"#"+c:"")},n||t,a[i]?null:r.createElement("span",{style:{color:"#bf616a"}}," (Link not found)"))}}}]);