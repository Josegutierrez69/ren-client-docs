(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{181:function(e,t,a){"use strict";var r=a(19).default,l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),u=l(a(527)),o=l(a(586)),s=l(a(499)),c=l(a(541)),i=r(a(498)),d=a(496);function m({tagName:e,count:t}){const a=function(){const{selectMessage:e}=(0,d.usePluralForm)();return t=>e(t,(0,i.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return n.default.createElement(i.default,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:a(t),tagName:e}},'{nPosts} tagged with "{tagName}"')}var f=function(e){const{metadata:t,items:a,sidebar:r}=e,{allTagsPath:l,name:d,count:f}=t;return n.default.createElement(u.default,{title:`Posts tagged "${d}"`,description:`Blog | Tagged "${d}"`,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},n.default.createElement("div",{className:"container margin-vert--lg"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col col--3"},n.default.createElement(c.default,{sidebar:r})),n.default.createElement("main",{className:"col col--7"},n.default.createElement("h1",null,n.default.createElement(m,{count:f,tagName:d})),n.default.createElement(s.default,{href:l},n.default.createElement(i.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),n.default.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>n.default.createElement(o.default,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.default.createElement(e,null)))))))))};t.default=f},485:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return i})),a.d(t,"MDXProvider",(function(){return f})),a.d(t,"mdx",(function(){return b})),a.d(t,"useMDXComponents",(function(){return m})),a.d(t,"withMDXComponents",(function(){return d}));var r=a(0),l=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=l.a.createContext({}),d=function(e){return function(t){var a=m(t.components);return l.a.createElement(e,u({},t,{components:a}))}},m=function(e){var t=l.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},f=function(e){var t=m(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},g=l.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),i=m(a),d=r,f=i["".concat(u,".").concat(d)]||i[d]||p[d]||n;return a?l.a.createElement(f,s(s({ref:t},o),{},{components:a})):l.a.createElement(f,s({ref:t},o))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,u=new Array(n);u[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var c=2;c<n;c++)u[c]=a[c];return l.a.createElement.apply(null,u)}return l.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},541:function(e,t,a){"use strict";var r=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({sidebar:e}){if(0===e.items.length)return null;return l.default.createElement("div",{className:(0,n.default)(o.default.sidebar,"thin-scrollbar")},l.default.createElement("h3",{className:o.default.sidebarItemTitle},e.title),l.default.createElement("ul",{className:o.default.sidebarItemList},e.items.map((e=>l.default.createElement("li",{key:e.permalink,className:o.default.sidebarItem},l.default.createElement(u.default,{isNavLink:!0,to:e.permalink,className:o.default.sidebarItemLink,activeClassName:o.default.sidebarItemLinkActive},e.title))))))};var l=r(a(0)),n=r(a(488)),u=r(a(499)),o=r(a(446))},586:function(e,t,a){"use strict";var r=a(19).default,l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),u=l(a(488)),o=a(485),s=r(a(498)),c=l(a(499)),i=l(a(551)),d=l(a(547)),m=l(a(449)),f=a(496);var p=function(e){const t=function(){const{selectMessage:e}=(0,f.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,(0,s.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:r,metadata:l,truncated:p,isBlogPostPage:g=!1}=e,{date:b,formattedDate:v,permalink:h,tags:E,readingTime:y}=l,{author:w,title:O,image:N,keywords:P}=r,_=r.author_url||r.authorURL,T=r.author_title||r.authorTitle,k=r.author_image_url||r.authorImageURL;return n.default.createElement(n.default.Fragment,null,n.default.createElement(d.default,{keywords:P,image:N}),n.default.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2";return n.default.createElement("header",null,n.default.createElement(e,{className:(0,u.default)("margin-bottom--sm",m.default.blogPostTitle)},g?O:n.default.createElement(c.default,{to:h},O)),n.default.createElement("div",{className:"margin-vert--md"},n.default.createElement("time",{dateTime:b,className:m.default.blogPostDate},v,y&&n.default.createElement(n.default.Fragment,null," \xb7 ",t(y)))),n.default.createElement("div",{className:"avatar margin-vert--md"},k&&n.default.createElement(c.default,{className:"avatar__photo-link avatar__photo",href:_},n.default.createElement("img",{src:k,alt:w})),n.default.createElement("div",{className:"avatar__intro"},w&&n.default.createElement(n.default.Fragment,null,n.default.createElement("h4",{className:"avatar__name"},n.default.createElement(c.default,{href:_},w)),n.default.createElement("small",{className:"avatar__subtitle"},T)))))})(),n.default.createElement("div",{className:"markdown"},n.default.createElement(o.MDXProvider,{components:i.default},a)),(E.length>0||p)&&n.default.createElement("footer",{className:"row margin-vert--lg"},E.length>0&&n.default.createElement("div",{className:"col"},n.default.createElement("strong",null,n.default.createElement(s.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),E.map((({label:e,permalink:t})=>n.default.createElement(c.default,{key:t,className:"margin-horiz--sm",to:t},e)))),p&&n.default.createElement("div",{className:"col text--right"},n.default.createElement(c.default,{to:l.permalink,"aria-label":`Read more about ${O}`},n.default.createElement("strong",null,n.default.createElement(s.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))};t.default=p}}]);