(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{415:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return x})),n.d(t,"useMDXComponents",(function(){return s})),n.d(t,"withMDXComponents",(function(){return l}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){return function(t){var n=s(t.components);return a.a.createElement(e,o({},t,{components:n}))}},s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),l=i,p=u["".concat(o,".").concat(l)]||u[l]||b[l]||r;return n?a.a.createElement(p,m(m({ref:t},d),{},{components:n})):a.a.createElement(p,m({ref:t},d))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},416:function(e,t,n){"use strict";var i=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var a=i(n(0));let r;t.DocType=r,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(r||(t.DocType=r={}));const o={[r.Tutorial]:"#b16bfc",[r.HowTo]:"#EC0088",[r.Reference]:"#ff823a",[r.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return u}));var i=n(3),a=(n(0),n(415)),r=n(416);const o={title:"GatewayLogicV1"},d={unversionedId:"darknode-sol/Gateway/GatewayLogicV1",id:"darknode-sol/Gateway/GatewayLogicV1",isDocsHomePage:!1,title:"GatewayLogicV1",description:"Contract: GatewayLogicV1",source:"@site/contracts/darknode-sol/Gateway/GatewayLogicV1.mdx",slug:"/darknode-sol/Gateway/GatewayLogicV1",permalink:"/ren-client-docs/contracts/darknode-sol/Gateway/GatewayLogicV1",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/contracts/darknode-sol/Gateway/GatewayLogicV1.mdx",version:"current"},m=[{value:"Contract: <code>GatewayLogicV1</code>",id:"contract-gatewaylogicv1",children:[]},{value:"Modifiers",id:"modifiers",children:[{value:"<code>onlyOwnerOrMintAuthority()</code>",id:"onlyownerormintauthority",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<strong><code>initialize</code></strong> <em><code>(contract RenERC20LogicV1 _token, address _feeRecipient, address _mintAuthority, uint16 _mintFee, uint16 _burnFee, uint256 _minimumBurnAmount)</code></em> (public)",id:"initialize-contract-renerc20logicv1-_token-address-_feerecipient-address-_mintauthority-uint16-_mintfee-uint16-_burnfee-uint256-_minimumburnamount-public",children:[]},{value:"<strong><code>claimTokenOwnership</code></strong> <em><code>()</code></em> (public)",id:"claimtokenownership--public",children:[]},{value:"<strong><code>transferTokenOwnership</code></strong> <em><code>(contract GatewayLogicV1 _nextTokenOwner)</code></em> (public)",id:"transfertokenownership-contract-gatewaylogicv1-_nexttokenowner-public",children:[]},{value:"<strong><code>updateMintAuthority</code></strong> <em><code>(address _nextMintAuthority)</code></em> (public)",id:"updatemintauthority-address-_nextmintauthority-public",children:[]},{value:"<strong><code>updateMinimumBurnAmount</code></strong> <em><code>(uint256 _minimumBurnAmount)</code></em> (public)",id:"updateminimumburnamount-uint256-_minimumburnamount-public",children:[]},{value:"<strong><code>updateFeeRecipient</code></strong> <em><code>(address _nextFeeRecipient)</code></em> (public)",id:"updatefeerecipient-address-_nextfeerecipient-public",children:[]},{value:"<strong><code>updateMintFee</code></strong> <em><code>(uint16 _nextMintFee)</code></em> (public)",id:"updatemintfee-uint16-_nextmintfee-public",children:[]},{value:"<strong><code>updateBurnFee</code></strong> <em><code>(uint16 _nextBurnFee)</code></em> (public)",id:"updateburnfee-uint16-_nextburnfee-public",children:[]},{value:"<strong><code>mint</code></strong> <em><code>(bytes32 _pHash, uint256 _amountUnderlying, bytes32 _nHash, bytes _sig) \u2192 uint256</code></em> (public)",id:"mint-bytes32-_phash-uint256-_amountunderlying-bytes32-_nhash-bytes-_sig-\u2192-uint256-public",children:[]},{value:"<strong><code>burn</code></strong> <em><code>(bytes _to, uint256 _amount) \u2192 uint256</code></em> (public)",id:"burn-bytes-_to-uint256-_amount-\u2192-uint256-public",children:[]},{value:"<strong><code>verifySignature</code></strong> <em><code>(bytes32 _signedMessageHash, bytes _sig) \u2192 bool</code></em> (public)",id:"verifysignature-bytes32-_signedmessagehash-bytes-_sig-\u2192-bool-public",children:[]},{value:"<strong><code>hashForSignature</code></strong> <em><code>(bytes32 _pHash, uint256 _amount, address _to, bytes32 _nHash) \u2192 bytes32</code></em> (public)",id:"hashforsignature-bytes32-_phash-uint256-_amount-address-_to-bytes32-_nhash-\u2192-bytes32-public",children:[]}]},{value:"Events",id:"events",children:[{value:"<strong><code>LogMintAuthorityUpdated</code></strong> <em><code>(address _newMintAuthority)</code></em>",id:"logmintauthorityupdated-address-_newmintauthority",children:[]},{value:"<strong><code>LogMint</code></strong> <em><code>(address _to, uint256 _amount, uint256 _n, bytes32 _signedMessageHash)</code></em>",id:"logmint-address-_to-uint256-_amount-uint256-_n-bytes32-_signedmessagehash",children:[]},{value:"<strong><code>LogBurn</code></strong> <em><code>(bytes _to, uint256 _amount, uint256 _n, bytes _indexedTo)</code></em>",id:"logburn-bytes-_to-uint256-_amount-uint256-_n-bytes-_indexedto",children:[]}]}],c={toc:m};function u({components:e,...t}){return Object(a.mdx)("wrapper",Object(i.default)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(r.DocTag,{type:r.DocType.Reference,mdxType:"DocTag"}),Object(a.mdx)("h2",{id:"contract-gatewaylogicv1"},"Contract: ",Object(a.mdx)("inlineCode",{parentName:"h2"},"GatewayLogicV1")),Object(a.mdx)("p",null,"Gateway handles verifying mint and burn requests. A mintAuthority\napproves new assets to be minted by providing a digital signature. An owner\nof an asset can request for it to be burnt."),Object(a.mdx)("p",null,"Inherits from:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"GatewayStateV1")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"IGateway")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"CanReclaimTokens")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Claimable")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Ownable")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Context")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"Initializable"))),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"modifiers"},"Modifiers"),Object(a.mdx)("h3",{id:"onlyownerormintauthority"},Object(a.mdx)("inlineCode",{parentName:"h3"},"onlyOwnerOrMintAuthority()")),Object(a.mdx)("p",null,"Only allow the Darknode Payment contract."),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"functions"},"Functions"),Object(a.mdx)("h3",{id:"initialize-contract-renerc20logicv1-_token-address-_feerecipient-address-_mintauthority-uint16-_mintfee-uint16-_burnfee-uint256-_minimumburnamount-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"initialize"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(contract RenERC20LogicV1 _token, address _feeRecipient, address _mintAuthority, uint16 _mintFee, uint16 _burnFee, uint256 _minimumBurnAmount)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_token"),": The RenERC20 this Gateway is responsible for.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_feeRecipient"),": The recipient of burning and minting fees.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_mintAuthority"),": The address of the key that can sign mint\nrequests.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_mintFee"),": The amount subtracted each mint request and\nforwarded to the feeRecipient. In BIPS.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_burnFee"),": The amount subtracted each burn request and\nforwarded to the feeRecipient. In BIPS."))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"claimtokenownership--public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"claimTokenOwnership"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"()"))," (public)"),Object(a.mdx)("p",null,"Claims ownership of the token passed in to the constructor.\n",Object(a.mdx)("inlineCode",{parentName:"p"},"transferStoreOwnership")," must have previously been called.\nAnyone can call this function."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"transfertokenownership-contract-gatewaylogicv1-_nexttokenowner-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"transferTokenOwnership"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(contract GatewayLogicV1 _nextTokenOwner)"))," (public)"),Object(a.mdx)("p",null,"Allow the owner to update the owner of the RenERC20 token."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"updatemintauthority-address-_nextmintauthority-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"updateMintAuthority"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _nextMintAuthority)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_nextMintAuthority"),": The address to start paying fees to.")),Object(a.mdx)("p",null,"Allow the owner to update the fee recipient."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"updateminimumburnamount-uint256-_minimumburnamount-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"updateMinimumBurnAmount"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint256 _minimumBurnAmount)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_minimumBurnAmount"),": The new min burn amount.")),Object(a.mdx)("p",null,"Allow the owner to update the minimum burn amount."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"updatefeerecipient-address-_nextfeerecipient-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"updateFeeRecipient"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _nextFeeRecipient)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_nextFeeRecipient"),": The address to start paying fees to.")),Object(a.mdx)("p",null,"Allow the owner to update the fee recipient."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"updatemintfee-uint16-_nextmintfee-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"updateMintFee"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint16 _nextMintFee)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_nextMintFee"),": The new fee for minting and burning.")),Object(a.mdx)("p",null,"Allow the owner to update the 'mint' fee."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"updateburnfee-uint16-_nextburnfee-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"updateBurnFee"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(uint16 _nextBurnFee)"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"_nextBurnFee"),": The new fee for minting and burning.")),Object(a.mdx)("p",null,"Allow the owner to update the burn fee."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"mint-bytes32-_phash-uint256-_amountunderlying-bytes32-_nhash-bytes-_sig-\u2192-uint256-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"mint"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(bytes32 _pHash, uint256 _amountUnderlying, bytes32 _nHash, bytes _sig) \u2192 uint256"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_pHash"),": (payload hash) The hash of the payload associated with the\nmint.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_amountUnderlying"),": The amount of the token being minted, in its smallest\nvalue. (e.g. satoshis for BTC).")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_nHash"),": (nonce hash) The hash of the nonce, amount and pHash.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_sig"),": The signature of the hash of the following values:\n(pHash, amount, msg.sender, nHash), signed by the mintAuthority."))),Object(a.mdx)("p",null,"mint verifies a mint approval signature from RenVM and creates\ntokens after taking a fee for the ",Object(a.mdx)("inlineCode",{parentName:"p"},"_feeRecipient"),"."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"burn-bytes-_to-uint256-_amount-\u2192-uint256-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"burn"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(bytes _to, uint256 _amount) \u2192 uint256"))," (public)"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Params")),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_to"),": The address to receive the un-bridged asset. The format of\nthis address should be of the destination chain.\nFor example, when burning to Bitcoin, _to should be a\nBitcoin address.")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"_amount"),": The amount of the token being burnt, in its\nsmallest value. (e.g. satoshis for BTC)"))),Object(a.mdx)("p",null,"burn destroys tokens after taking a fee for the ",Object(a.mdx)("inlineCode",{parentName:"p"},"_feeRecipient"),",\nallowing the associated assets to be released on their native\nchain."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"verifysignature-bytes32-_signedmessagehash-bytes-_sig-\u2192-bool-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"verifySignature"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(bytes32 _signedMessageHash, bytes _sig) \u2192 bool"))," (public)"),Object(a.mdx)("p",null,"verifySignature checks the the provided signature matches the provided\nparameters."),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"hashforsignature-bytes32-_phash-uint256-_amount-address-_to-bytes32-_nhash-\u2192-bytes32-public"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"hashForSignature"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(bytes32 _pHash, uint256 _amount, address _to, bytes32 _nHash) \u2192 bytes32"))," (public)"),Object(a.mdx)("p",null,"hashForSignature hashes the parameters so that they can be signed."),Object(a.mdx)("hr",null),Object(a.mdx)("br",null),Object(a.mdx)("h2",{id:"events"},"Events"),Object(a.mdx)("h3",{id:"logmintauthorityupdated-address-_newmintauthority"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogMintAuthorityUpdated"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _newMintAuthority)"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logmint-address-_to-uint256-_amount-uint256-_n-bytes32-_signedmessagehash"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogMint"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(address _to, uint256 _amount, uint256 _n, bytes32 _signedMessageHash)"))),Object(a.mdx)("hr",null),Object(a.mdx)("h3",{id:"logburn-bytes-_to-uint256-_amount-uint256-_n-bytes-_indexedto"},Object(a.mdx)("strong",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"strong"},"LogBurn"))," ",Object(a.mdx)("em",{parentName:"h3"},Object(a.mdx)("inlineCode",{parentName:"em"},"(bytes _to, uint256 _amount, uint256 _n, bytes _indexedTo)"))),Object(a.mdx)("hr",null))}u.isMDXComponent=!0}}]);