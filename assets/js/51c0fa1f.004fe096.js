(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(9),s=(n(0),n(415)),o=n(416),i=n(531),l={title:"RenVM Stats",slug:"/renvm-stats"},c={unversionedId:"renvm-stats",id:"renvm-stats",isDocsHomePage:!1,title:"RenVM Stats",description:"The RenVM Tracker is a server that syncs RenVM blocks and tracks volume, locked amounts and historic asset prices. It provides a GraphQL endpoint to query RenVM stats for a provided timestamp.",source:"@site/stats/renvm-stats.mdx",slug:"/renvm-stats",permalink:"/ren-client-docs/stats/renvm-stats",editUrl:"https://github.com/renproject/ren-client-docs/edit/master/stats/renvm-stats.mdx",version:"current",sidebar:"subgraph",previous:{title:"About",permalink:"/ren-client-docs/stats/"},next:{title:"Darknode Stats",permalink:"/ren-client-docs/stats/darknode-stats"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Try it now",id:"try-it-now",children:[]}],p={toc:d};function m(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(s.mdx)("wrapper",Object(a.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)(o.DocTag,{type:o.DocType.HowTo,mdxType:"DocTag"})," ",Object(s.mdx)(o.DocTag,{type:o.DocType.Reference,mdxType:"DocTag"}),Object(s.mdx)("p",null,"The RenVM Tracker is a server that syncs RenVM blocks and tracks volume, locked amounts and historic asset prices. It provides a GraphQL endpoint to query RenVM stats for a provided timestamp."),Object(s.mdx)("h3",{id:"usage"},"Usage"),Object(s.mdx)("p",null,"The interface is a GraphQL endpoint running at ",Object(s.mdx)("a",{parentName:"p",href:"https://stats.renproject.io"},"https://stats.renproject.io")," (mainnet) and ",Object(s.mdx)("a",{parentName:"p",href:"https://stats-testnet.renproject.io"},"https://stats-testnet.renproject.io")," (testnet)."),Object(s.mdx)("p",null,"There is one type of queryable entities, ",Object(s.mdx)("inlineCode",{parentName:"p"},"Snapshots"),", which contain RenVM's statistics for a specific timestamp. ",Object(s.mdx)("inlineCode",{parentName:"p"},"Snapshots")," are created when new RenVM transactions are confirmed, batching together transactions in the same 5 minute timeslot."),Object(s.mdx)("p",null,"Snapshots can be queried by providing a Unix timestamp in seconds. The request will return the most recent ",Object(s.mdx)("inlineCode",{parentName:"p"},"Snapshot")," before or at that timestamp. If the timestamp is from before the first ",Object(s.mdx)("inlineCode",{parentName:"p"},"Snapshot"),", an error will be thrown."),Object(s.mdx)("p",null,"The volume in a ",Object(s.mdx)("inlineCode",{parentName:"p"},"Snapshot")," is the total since the network came online, so to get the volume of a specific period (e.g. 1 month), you should get the snapshots from the start and the end of the period and subtract the volume and locked amounts."),Object(s.mdx)("p",null,"You can request multiple snapshots in a single request by using labels (see the label ",Object(s.mdx)("inlineCode",{parentName:"p"},"snapshot1")," below)."),Object(s.mdx)("p",null,"The ",Object(s.mdx)("inlineCode",{parentName:"p"},"fees")," field is only available for snapshots from August 2021 onwards."),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  snapshot1: Snapshot(timestamp: "1627300267") {\n    timestamp\n    locked {\n      asset\n      chain\n      amount\n      amountInUsd\n    }\n    volume {\n      asset\n      chain\n      amount\n      amountInUsd\n    }\n    # Only available for Snapshots from August 2021 onwards.\n    fees {\n      asset\n      amount\n      amountInUsd\n    }\n    prices {\n      asset\n      decimals\n      priceInUsd\n    }\n  }\n}\n')),Object(s.mdx)("p",null,"In order to query the RenVM tracker, you will need a GraphQL library. Some options are:"),Object(s.mdx)("ol",null,Object(s.mdx)("li",{parentName:"ol"},"The playground below"),Object(s.mdx)("li",{parentName:"ol"},"An SDK such as ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/@apollo/client"},"Apollo")," - see others at ",Object(s.mdx)("a",{parentName:"li",href:"https://graphql.org/code/"},"https://graphql.org/code/"),"."),Object(s.mdx)("li",{parentName:"ol"},"A desktop client such as ",Object(s.mdx)("a",{parentName:"li",href:"https://insomnia.rest/products/insomnia"},"Insomnia")," or Postman")),Object(s.mdx)("h3",{id:"try-it-now"},"Try it now"),Object(s.mdx)(i.GraphQL,{minHeight:600,url:"https://stats.renproject.io",defaultQuery:'{\n  snapshot1: Snapshot(timestamp: "1627300267") {\n    timestamp\n    locked {\n      asset\n      chain\n      amount\n      amountInUsd\n    }\n    volume {\n      asset\n      chain\n      amount\n      amountInUsd\n    }\n    # Fees are only available from August 2021 onwards.\n    fees {\n      asset\n      amount\n      amountInUsd\n    }\n    prices {\n      asset\n      decimals\n      priceInUsd\n    }\n  }\n}',mdxType:"GraphQL"}))}m.isMDXComponent=!0},416:function(e,t,n){"use strict";var a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocTag=t.DocType=void 0;var r,s,o=a(n(0));t.DocType=s,function(e){e.Tutorial="Tutorial",e.HowTo="How To",e.Reference="Reference",e.Explanation="Explanation"}(s||(t.DocType=s={}));var i=((r={})[s.Tutorial]="#b16bfc",r[s.HowTo]="#EC0088",r[s.Reference]="#ff823a",r[s.Explanation]="#29C0AF",r);t.DocTag=function(e){var t=e.type,n=e.marginBottom;return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:{border:"2px solid "+i[t]||!1,borderRadius:"5px",color:i[t]||"orange",padding:"0.1rem 0.4rem",marginBottom:void 0!==n?n:30,display:"inline-block"}},String(t)))}},531:function(e,t,n){"use strict";var a=n(4).default,r=n(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.GraphQL=void 0;var s=r(n(0)),o=a(n(734));n(375);var i=function(e){var t=e.url,a=e.defaultQuery,r=e.docExplorerOpen,o=e.minHeight;if("undefined"==typeof window)return null;var i=n(759).createGraphiQLFetcher,l=n(760).default,c=i({url:t});return s.default.createElement("div",{style:{height:o||500}},s.default.createElement(s.Suspense,{fallback:s.default.createElement("div",null,"Loading...")},s.default.createElement(l,{docExplorerOpen:r,query:a,fetcher:c})))};t.GraphQL=function(e){return"undefined"==typeof window?null:s.default.createElement(o.default,null,(function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(i,e),s.default.createElement("br",null))}))}}}]);