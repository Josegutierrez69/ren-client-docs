(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{488:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.r(t),t.default=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(749);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(936);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return o.useAlternatePageUtils}});var s=n(937);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return s.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return s.DEFAULT_SEARCH_TAG}});var u=n(750);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return u.isDocsPluginEnabled}});var i=n(940);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var a=n(941);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return a.useTitleFormatter}});var l=n(942);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return l.usePluralForm}});var c=n(943);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return c.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return c.useDocsPreferredVersionByPluginId}});var f=n(751);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return f.DocsPreferredVersionContextProvider}})},498:function(e,t,n){"use strict";var r=n(19).default,o=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.translate=function({message:e,id:t},n){var r;const o=null!==(r=a({message:e,id:t}))&&void 0!==r?r:e;return(0,u.interpolate)(o,n)},t.default=function({children:e,id:t,values:n}){var r;const o=null!==(r=a({message:e,id:t}))&&void 0!==r?r:e;return s.default.createElement(u.default,{values:n},o)};var s=o(n(0)),u=r(n(934)),i=o(n(36));function a({id:e,message:t}){var n;return null!==(n=i.default[null!=e?e:t])&&void 0!==n?n:t}},499:function(e,t,n){"use strict";var r=n(4).default,o=n(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n(0)),u=n(12),i=r(n(589)),a=r(n(11)),l=n(956),c=n(540),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var d=function(e){var t,{isNavLink:n,to:r,href:o,activeClassName:d,isActive:v,"data-noBrokenLinkCheck":g,autoAddBaseUrl:p=!0}=e,P=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:m}=(0,c.useBaseUrlUtils)(),b=(0,l.useLinksCollector)(),h=r||o,D=(0,i.default)(h),_=null==h?void 0:h.replace("pathname://",""),y=void 0!==_?(V=_,p&&(e=>e.startsWith("/"))(V)?m(V):V):void 0;var V;const O=(0,s.useRef)(!1),A=n?u.NavLink:u.Link,j=a.default.canUseIntersectionObserver;let C;(0,s.useEffect)((()=>(!j&&D&&window.docusaurus.prefetch(y),()=>{j&&C&&C.disconnect()})),[y,j,D]);const w=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,L=!y||!D||w;return y&&D&&!w&&!g&&b.collectLink(y),L?s.default.createElement("a",Object.assign({href:y},h&&!D&&{target:"_blank",rel:"noopener noreferrer"},P)):s.default.createElement(A,Object.assign({},P,{onMouseEnter:()=>{O.current||(window.docusaurus.preload(y),O.current=!0)},innerRef:e=>{var t,n;j&&e&&D&&(t=e,n=()=>{window.docusaurus.prefetch(y)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:y||""},n&&{isActive:v,activeClassName:d}))};t.default=d},535:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(31),o=n(938),s=n(939);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return s.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:s.getActiveVersion(n.pluginData,o)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return s.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveVersion(n,o)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveDocContext(n,o)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getDocVersionSuggestions(n,o)}},540:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useBaseUrlUtils=u,t.default=function(e,t={}){const{withBaseUrl:n}=u();return n(e,t)};var o=r(n(30)),s=n(589);function u(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,s.hasProtocol)(n))return n;if(r)return t+n;const u=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+u:u}(t,e,n,r)}}},589:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.hasProtocol=r,t.default=function(e){return void 0!==e&&!r(e)}},749:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const o=r(n(30));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},750:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(535);t.isDocsPluginEnabled=!!r.useAllDocsData},751:function(e,t,n){"use strict";var r=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},o=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const i=s(n(0)),a=n(749),l=n(750),c=n(535),f=u(n(944));function d({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=f.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(f.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function v(){const e=c.useAllDocsData(),t=a.useThemeConfig().docs.versionPersistence,n=i.useMemo((()=>Object.keys(e)),[e]),[r,o]=i.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));i.useEffect((()=>{o(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,i.useMemo((()=>({savePreferredVersion:function(e,n){f.default.save(e,t,n),o((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[o])]}const g=i.createContext(null);function p({children:e}){const t=v();return i.default.createElement(g.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return l.isDocsPluginEnabled?i.default.createElement(p,null,e):i.default.createElement(i.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=i.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},934:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.interpolate=i,t.default=function({children:e,values:t}){return i(e,t)};var o=r(n(0));const s=/{\w+}/g,u="{}";function i(e,t){const n=[],r=e.replace(s,(e=>{const r=e.substr(1,e.length-2),s=null==t?void 0:t[r];if(void 0!==s){const e=o.default.isValidElement(s)?s:String(s);return n.push(e),u}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?r.split(u).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):r.split(u).reduce(((e,t,r)=>[...e,o.default.createElement(o.default.Fragment,{key:r},t,n[r])]),[])}},936:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;const o=r(n(30)),s=n(31);t.useAlternatePageUtils=function(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:r}}=o.default(),{pathname:u}=s.useLocation(),i=r===n?e:e.replace(`/${r}/`,"/"),a=u.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?`${i}`:`${i}${e}/`}(e)}${a}`}}}},937:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},938:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=s,t.useAllPluginInstancesData=u,t.usePluginData=function(e,t="default"){const n=u(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n};var o=r(n(30));function s(){const{globalData:e}=(0,o.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function u(e){const t=s()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}},939:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(31);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),s=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!s&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return s},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(s.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),s=o.activeVersion!==r;return{latestDocSuggestion:s?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:s?r:void 0}}},940:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},941:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const o=r(n(30));t.useTitleFormatter=e=>{const{siteConfig:t={}}=o.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},942:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;const o=n(0),s=r(n(30)),u=["zero","one","two","few","many","other"];function i(e){return u.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=s.default();return o.useMemo((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),a;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale=${e}.\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),a}}),[e])}t.usePluralForm=function(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}}(n,t,e)}}},943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(751),s=n(535),u=n(945);t.useDocsPreferredVersion=function(e=u.DEFAULT_PLUGIN_ID){const t=s.useDocsData(e),[n,i]=o.useDocsPreferredVersionContext(),{preferredVersionName:a}=n[e];return{preferredVersion:a?t.versions.find((e=>e.name===a)):null,savePreferredVersionName:r.useCallback((t=>{i.savePreferredVersion(e,t)}),[i])}},t.useDocsPreferredVersionByPluginId=function(){const e=s.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}},944:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,o={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},945:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_PLUGIN_ID=void 0;t.DEFAULT_PLUGIN_ID="default"},956:function(e,t,n){"use strict";var r=n(19).default;Object.defineProperty(t,"__esModule",{value:!0}),t.ProvideLinksCollector=t.useLinksCollector=t.createStatefulLinksCollector=void 0;var o=r(n(0));t.createStatefulLinksCollector=()=>{const e=new Set;return{collectLink:t=>{e.add(t)},getCollectedLinks:()=>[...e]}};const s=(0,o.createContext)({collectLink:()=>{}});t.useLinksCollector=()=>(0,o.useContext)(s);t.ProvideLinksCollector=({children:e,linksCollector:t})=>o.default.createElement(s.Provider,{value:t},e)}}]);