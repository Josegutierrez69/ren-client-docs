(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(413)),o=n(414),c={title:"1. Smart Contract",slug:"smart-contract"},s={unversionedId:"tutorial/1-smart-contract",id:"tutorial/1-smart-contract",isDocsHomePage:!1,title:"1. Smart Contract",description:"This guide uses the online Remix IDE. If you prefer to set up a local repository, check out Ren Solidity Template.",source:"@site/ren-js/tutorial/1-smart-contract.mdx",slug:"/tutorial/smart-contract",permalink:"/ren-client-docs/ren-js/tutorial/smart-contract",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/ren-js/tutorial/1-smart-contract.mdx",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/ren-client-docs/ren-js/tutorial/overview"},next:{title:"2. React UI",permalink:"/ren-client-docs/ren-js/tutorial/react-ui"}},l=[{value:"Gateways",id:"gateways",children:[]},{value:"Deposit function",id:"deposit-function",children:[]},{value:"Withdraw function",id:"withdraw-function",children:[]},{value:"Balance",id:"balance",children:[]},{value:"Final code",id:"final-code",children:[]},{value:"Deploying to Kovan",id:"deploying-to-kovan",children:[]}],d={toc:l};function m(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(o.DocTag,{type:o.DocType.Tutorial,mdxType:"DocTag"}),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"This guide uses the online Remix IDE. If you prefer to set up a local repository, check out ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/renproject/ren-solidity-template"},"Ren Solidity Template"),"."))),Object(i.mdx)("p",null,"In this chapter, we will build a simple Ethereum contract that allows us to do three things: deposit BTC, withdraw BTC and check how much BTC we have deposited."),Object(i.mdx)("p",null,"To get started, head over to the online Remix IDE at ",Object(i.mdx)("a",{parentName:"p",href:"https://remix.ethereum.org"},"https://remix.ethereum.org"),', choose "Solidity" and create a new file called ',Object(i.mdx)("inlineCode",{parentName:"p"},"Basic.sol"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Basic.sol"',title:'"Basic.sol"'},"pragma solidity >=0.5.0;\n\ncontract Basic {\n}\n")),Object(i.mdx)("h3",{id:"gateways"},"Gateways"),Object(i.mdx)("p",null,"In order to accept BTC in our Ethereum contract, we need to talk to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"BTCGateway")," contract. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"BTCGateway")," contract works with RenVM to lock BTC into, and release out of, an ERC20-compatible token called renBTC."),Object(i.mdx)("p",null,"All digital assets (BTC, ZEC, etc.) have their own ",Object(i.mdx)("inlineCode",{parentName:"p"},"Gateway")," contract, so we need to ask the ",Object(i.mdx)("inlineCode",{parentName:"p"},"GatewayRegistry")," contract for the address of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"BTCGateway"),"."),Object(i.mdx)("p",null,"Let's add some code to our Ethereum contract so that we can talk to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Gateway"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"GatewayRegistry"),", and ",Object(i.mdx)("inlineCode",{parentName:"p"},"ERC20")," contracts:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Basic.sol"',title:'"Basic.sol"'},"pragma solidity >=0.5.0;\n\ninterface IERC20 {\n    function balanceOf(address account) external view returns (uint256);\n}\n\ninterface IGateway {\n    function mint(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes calldata _sig) external returns (uint256);\n    function burn(bytes calldata _to, uint256 _amount) external returns (uint256);\n}\n\ninterface IGatewayRegistry {\n    function getGatewayBySymbol(string calldata _tokenSymbol) external view returns (IGateway);\n    function getTokenBySymbol(string calldata _tokenSymbol) external view returns (IERC20);\n}\n\ncontract Basic {\n    IGatewayRegistry public registry;\n\n    constructor(IGatewayRegistry _registry) public {\n        registry = _registry;\n    }\n}\n")),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"You can find the source code for Gateway and GatewayRegistry on GitHub:\n",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/renproject/darknode-sol/tree/release/1.0.0/contracts/Gateway"},"https://github.com/renproject/darknode-sol/tree/release/1.0.0/contracts/Gateway"),"\nand the Kovan testnet GatewayRegistry on Etherscan:\n",Object(i.mdx)("a",{parentName:"p",href:"https://kovan.etherscan.io/address/0x557e211EC5fc9a6737d2C6b7a1aDe3e0C11A8D5D"},"https://kovan.etherscan.io/address/0x557e211EC5fc9a6737d2C6b7a1aDe3e0C11A8D5D")))),Object(i.mdx)("h3",{id:"deposit-function"},"Deposit function"),Object(i.mdx)("p",null,"We will use the deposit function to mint & lock BTC into Ethereum. When locking & minting BTC into Ethereum, RenVM will always give us three parameters that we need to forward to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"BTCGateway")," contract:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"amount")," represents the amount of BTC we are transferring into Ethereum,"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"nHash")," (also known as the nonce hash) is used to uniquely identify a lock into Ethereum, and"),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"sig")," is a signature from RenVM to approve the mint.")),Object(i.mdx)("p",null,"In addition to these required fields, our Ethereum contract will also allow the user to attach a message to their deposits and withdrawals. Our Ethereum contract will log these messages as Ethereum events (this is not necessary to transfer BTC into Ethereum, we are just doing it to demonstrate that you can define extra data and functionality)."),Object(i.mdx)("p",null,"Add these logs to our Ethereum contract before the ",Object(i.mdx)("inlineCode",{parentName:"p"},"constructor"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity"},"event Deposit(uint256 _amount, bytes _msg);\nevent Withdrawal(bytes _to, uint256 _amount, bytes _msg);\n")),Object(i.mdx)("p",null,"Add the ",Object(i.mdx)("inlineCode",{parentName:"p"},"deposit")," function after the ",Object(i.mdx)("inlineCode",{parentName:"p"},"constructor"),"."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity"},"function deposit(\n    // Parameters from users\n    bytes calldata _msg,\n    // Parameters from RenVM\n    uint256        _amount,\n    bytes32        _nHash,\n    bytes calldata _sig\n) external {\n}\n")),Object(i.mdx)("p",null,"There is another parameter we need to forward to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Gateway"),": the ",Object(i.mdx)("inlineCode",{parentName:"p"},"pHash")," (also known as the payload hash). It is the hash of any extra data we are using (in our case this is the attached ",Object(i.mdx)("inlineCode",{parentName:"p"},"msg"),"). Inside the function body, add:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity"},"bytes32 pHash = keccak256(abi.encode(_msg));\n")),Object(i.mdx)("p",null,"We can now get the address of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"BTCGateway")," and call ",Object(i.mdx)("inlineCode",{parentName:"p"},"mint"),". This will return the amount of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"renBTC")," token we have received from the transfer, after subtracting a small fee that is paid to RenVM:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity"},'uint256 mintedAmount = registry.getGatewayBySymbol("BTC").mint(pHash, _amount, _nHash, _sig);\n')),Object(i.mdx)("p",null,"Finally, we log the deposit:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity"},"emit Deposit(mintedAmount, _msg);\n")),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"deposit")," function should now look like this:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity"},'function deposit(\n    // Parameters from users\n    bytes calldata _msg,\n    // Parameters from RenVM\n    uint256        _amount,\n    bytes32        _nHash,\n    bytes calldata _sig\n) external {\n    bytes32 pHash = keccak256(abi.encode(_msg));\n    uint256 mintedAmount = registry.getGatewayBySymbol("BTC").mint(pHash, _amount, _nHash, _sig);\n    emit Deposit(mintedAmount, _msg);\n}\n')),Object(i.mdx)("h3",{id:"withdraw-function"},"Withdraw function"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"withdaw")," function is similar to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"deposit")," function - we call ",Object(i.mdx)("inlineCode",{parentName:"p"},"burn")," on the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Gateway")," contract and the log the withdrawal."),Object(i.mdx)("p",null,"The user will provide the ",Object(i.mdx)("inlineCode",{parentName:"p"},"msg")," of the withdrawal (as before), a ",Object(i.mdx)("inlineCode",{parentName:"p"},"to")," Bitcoin address to receive the funds to, and the ",Object(i.mdx)("inlineCode",{parentName:"p"},"amount")," of BTC they want to withdraw."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity"},'function withdraw(bytes calldata _msg, bytes calldata _to, uint256 _amount) external {\n    uint256 burnedAmount = registry.getGatewayBySymbol("BTC").burn(_to, _amount);\n    emit Withdrawal(_to, burnedAmount, _msg);\n}\n')),Object(i.mdx)("h3",{id:"balance"},"Balance"),Object(i.mdx)("p",null,"In ",Object(i.mdx)("inlineCode",{parentName:"p"},"balance"),", instead of getting the address of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"BTCGateway"),", we need the address of the renBTC ERC20 contract. We can use ",Object(i.mdx)("inlineCode",{parentName:"p"},"getTokenBySymbol")," instead of ",Object(i.mdx)("inlineCode",{parentName:"p"},"getGatewayBySymbol"),". After looking up the address, we ask it for the balance of our ",Object(i.mdx)("inlineCode",{parentName:"p"},"Basic")," contract:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity"},'function balance() public view returns (uint256) {\n    return registry.getTokenBySymbol("BTC").balanceOf(address(this));\n}\n')),Object(i.mdx)("h3",{id:"final-code"},"Final code"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Basic.sol"',title:'"Basic.sol"'},'pragma solidity >=0.5.0;\n\ninterface IERC20 {\n    function balanceOf(address account) external view returns (uint256);\n}\n\n\ninterface IGateway {\n    function mint(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes calldata _sig) external returns (uint256);\n    function burn(bytes calldata _to, uint256 _amount) external returns (uint256);\n}\n\ninterface IGatewayRegistry {\n    function getGatewayBySymbol(string calldata _tokenSymbol) external view returns (IGateway);\n    function getTokenBySymbol(string calldata _tokenSymbol) external view returns (IERC20);\n}\n\ncontract Basic {\n    IGatewayRegistry public registry;\n\n    event Deposit(uint256 _amount, bytes _msg);\n    event Withdrawal(bytes _to, uint256 _amount, bytes _msg);\n\n    constructor(IGatewayRegistry _registry) public {\n        registry = _registry;\n    }\n\n    function deposit(\n        // Parameters from users\n        bytes calldata _msg,\n        // Parameters from RenVM\n        uint256        _amount,\n        bytes32        _nHash,\n        bytes calldata _sig\n    ) external {\n        bytes32 pHash = keccak256(abi.encode(_msg));\n        uint256 mintedAmount = registry.getGatewayBySymbol("BTC").mint(pHash, _amount, _nHash, _sig);\n        emit Deposit(mintedAmount, _msg);\n    }\n\n    function withdraw(bytes calldata _msg, bytes calldata _to, uint256 _amount) external {\n        uint256 burnedAmount = registry.getGatewayBySymbol("BTC").burn(_to, _amount);\n        emit Withdrawal(_to, burnedAmount, _msg);\n    }\n\n    function balance() public view returns (uint256) {\n        return registry.getTokenBySymbol("BTC").balanceOf(address(this));\n    }\n}\n')),Object(i.mdx)("h3",{id:"deploying-to-kovan"},"Deploying to Kovan"),Object(i.mdx)("p",null,"You'll need ",Object(i.mdx)("a",{parentName:"p",href:"https://metamask.io"},"MetaMask")," installed and the Kovan network selected. Additionally, you'll need Kovan ETH (KETH). Request some here: ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/kovan-testnet/faucet"},"https://github.com/kovan-testnet/faucet")),Object(i.mdx)("p",null,"Copy the final ",Object(i.mdx)("inlineCode",{parentName:"p"},"Basic.sol"),' into Remix and then click "Compile Basic.sol" in the "Solidity Compiler" tab.'),Object(i.mdx)("p",null,'Switch to the "Deploy & Run Transactions" tab and select "Injected Web3" as the environment. Make sure "Basic" is selected in the contract drop-down. Paste the ',Object(i.mdx)("inlineCode",{parentName:"p"},"GatewayRegistry"),"'s address, ",Object(i.mdx)("inlineCode",{parentName:"p"},"0x557e211EC5fc9a6737d2C6b7a1aDe3e0C11A8D5D"),', next to "Deploy" and press the "Deploy" button. After approving the transaction in MetaMask, it will show you the newly deployed Ethereum contract. Hit the "clipboard" button and save the address for the next section.'),Object(i.mdx)("p",null,Object(i.mdx)("img",{alt:"Remix deploy screenshot",src:n(7057).default})),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"You can also use the Basic contract that we have deployed here: 0x3Aa969d343BD6AE66c4027Bb61A382DC96e88150."))),Object(i.mdx)("p",null,"In the next chapter, we will begin building a simple user interface for interacting with our newly deployed Ethereum contract."))}m.isMDXComponent=!0},413:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),m=function(e){return function(t){var n=u(t.components);return r.a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,p=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r=a(n(0));let i;t.DocType=i,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(i||(t.DocType=i={}));const o={[i.Tutorial]:"#b16bfc",[i.HowTo]:"#EC0088",[i.Reference]:"#ff823a",[i.Explanation]:"#29C0AF"};t.DocTag=({type:e,marginBottom:t})=>r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:{border:"2px solid "+o[e]||!1,borderRadius:"5px",color:o[e]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==t?t:30,display:"inline-block"}},String(e)))},7057:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deploy-d03b5260c353e1b607702b3a68b7c53c.png"}}]);