"use strict";(self.webpackChunkcryptopp_docs=self.webpackChunkcryptopp_docs||[]).push([[810],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},p="HDKF",d={unversionedId:"padding-schemes/hkdf",id:"version-0.2.0/padding-schemes/hkdf",title:"HDKF",description:"Parameters",source:"@site/versioned_docs/version-0.2.0/padding-schemes/hkdf.md",sourceDirName:"padding-schemes",slug:"/padding-schemes/hkdf",permalink:"/react-native-cryptopp/padding-schemes/hkdf",editUrl:"https://github.com/JiriHoffmann/react-native-cryptopp/docs/versioned_docs/version-0.2.0/padding-schemes/hkdf.md",tags:[],version:"0.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"RSA",permalink:"/react-native-cryptopp/public-key-cryptography/rsa"},next:{title:"PKCS12 PBKDF",permalink:"/react-native-cryptopp/padding-schemes/pbkdf12"}},u={},c=[{value:"Parameters",id:"parameters",level:4},{value:"Returns: <code>string</code>",id:"returns-string",level:4}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hdkf"},"HDKF"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {hkdf} = Cryptopp.keyDerivation;\nconst derived = hkdf(str, 'salt', 'HKDF key derivation', 1024);\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"salt"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hash"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"SHA1"')," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHA256"')," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHA512"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHA3_256"'),"  ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHA3_512"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHAKE128"')," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"SHAKE256"')," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},'"BLAKE2b"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"BLAKE2s"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"LSH256"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"LSH512"')," ",(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},'"SM3"')),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"info"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"info")," is additional, possibly public information to use during derivation."),(0,i.kt)("h4",{id:"returns-string"},"Returns: ",(0,i.kt)("inlineCode",{parentName:"h4"},"string")))}m.isMDXComponent=!0}}]);