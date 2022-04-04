"use strict";(self.webpackChunkcryptopp_docs=self.webpackChunkcryptopp_docs||[]).push([[640],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var d=2;d<i;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),p=["components"],l={sidebar_position:3},o="PKCS5 PBKDF1",d={unversionedId:"padding-schemes/pkcs5_pbkdf1",id:"padding-schemes/pkcs5_pbkdf1",title:"PKCS5 PBKDF1",description:"Note from Crypyto++ Wiki: New applications should consider using a modern KDF, like HKDF. HKDF is state of the art extract-then-expand derivation function with provable security properties.",source:"@site/docs/padding-schemes/pkcs5_pbkdf1.md",sourceDirName:"padding-schemes",slug:"/padding-schemes/pkcs5_pbkdf1",permalink:"/react-native-cryptopp/next/padding-schemes/pkcs5_pbkdf1",editUrl:"https://github.com/JiriHoffmann/react-native-cryptopp/docs/docs/padding-schemes/pkcs5_pbkdf1.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PKCS12 PBKDF",permalink:"/react-native-cryptopp/next/padding-schemes/pbkdf12"},next:{title:"PKCS5 PBKDF2 HMAC",permalink:"/react-native-cryptopp/next/padding-schemes/pkcs5_pbkdf2"}},c={},s=[{value:"Parameters",id:"parameters",level:4},{value:"Returns: <code>string</code>",id:"returns-string",level:4}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pkcs5-pbkdf1"},"PKCS5 PBKDF1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Note from Crypyto++ Wiki:")," New applications should consider using a modern KDF, like HKDF. HKDF is state of the art extract-then-expand derivation function with provable security properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {pkcs5_pbkdf1} = Cryptopp.keyDerivation;\nconst derived = pkcs5_pbkdf1(str, 'salt', 'SHA256', 1024);\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"salt"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hash"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"SHA1"')," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHA256"')," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHA512"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHA3_256"'),"  ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHA3_512"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHAKE128"')," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHAKE256"')," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"BLAKE2b"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"BLAKE2s"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"LSH256"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"LSH512"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"SM3"')),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iterations"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("h4",{id:"returns-string"},"Returns: ",(0,i.kt)("inlineCode",{parentName:"h4"},"string")))}m.isMDXComponent=!0}}]);