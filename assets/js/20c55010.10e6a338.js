"use strict";(self.webpackChunkcryptopp_docs=self.webpackChunkcryptopp_docs||[]).push([[779],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},l="Keccak",p={unversionedId:"hash-functions/keccak",id:"version-0.2.0/hash-functions/keccak",title:"Keccak",description:"Parameters",source:"@site/versioned_docs/version-0.2.0/hash-functions/keccak.md",sourceDirName:"hash-functions",slug:"/hash-functions/keccak",permalink:"/react-native-cryptopp/hash-functions/keccak",editUrl:"https://github.com/JiriHoffmann/react-native-cryptopp/docs/versioned_docs/version-0.2.0/hash-functions/keccak.md",tags:[],version:"0.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"BLAKE2b/BLAKE2s",permalink:"/react-native-cryptopp/hash-functions/blake2"},next:{title:"LSH",permalink:"/react-native-cryptopp/hash-functions/lsh"}},u={},s=[{value:"Parameters",id:"parameters",level:4},{value:"Returns: <code>string</code>",id:"returns-string",level:4}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keccak"},"Keccak"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Cryptopp.hashFunctions.Keccak(data, '512');\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"size"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"224"')," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},'"256"')," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},'"384"')," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},'"512"')),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,o.kt)("h4",{id:"returns-string"},"Returns: ",(0,o.kt)("inlineCode",{parentName:"h4"},"string")))}f.isMDXComponent=!0}}]);