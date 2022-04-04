"use strict";(self.webpackChunkcryptopp_docs=self.webpackChunkcryptopp_docs||[]).push([[670],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:1},d="RSA",o={unversionedId:"public-key-cryptography/rsa",id:"public-key-cryptography/rsa",title:"RSA",description:"This library uses the Cryptop++ PEM_PACK to parse and store RSA keys in the PEM format.",source:"@site/docs/public-key-cryptography/rsa.md",sourceDirName:"public-key-cryptography",slug:"/public-key-cryptography/rsa",permalink:"/react-native-cryptopp/next/public-key-cryptography/rsa",editUrl:"https://github.com/JiriHoffmann/react-native-cryptopp/docs/docs/public-key-cryptography/rsa.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"WHIRLPOOL",permalink:"/react-native-cryptopp/next/hash-functions/whirlpool"},next:{title:"HDKF",permalink:"/react-native-cryptopp/next/padding-schemes/hkdf"}},s={},u=[{value:"Generate Key Pair",id:"generate-key-pair",level:2},{value:"Returns: Object containing the public and private keys, as well as the parameters used to generate the keys.",id:"returns-object-containing-the-public-and-private-keys-as-well-as-the-parameters-used-to-generate-the-keys",level:4},{value:"Encrypt",id:"encrypt",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Returns: <code>base64-encoded string</code>",id:"returns-base64-encoded-string",level:4},{value:"Decrypt",id:"decrypt",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns: <code>string</code>",id:"returns-string",level:4},{value:"Sign",id:"sign",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns: <code>base64-encoded string</code>",id:"returns-base64-encoded-string-1",level:4},{value:"Verify",id:"verify",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns: <code>true</code> if the signature is valid, <code>false</code> otherwise.",id:"returns-true-if-the-signature-is-valid-false-otherwise",level:4},{value:"Recover",id:"recover",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns: <code>string</code>",id:"returns-string-1",level:4},{value:"Throws error if the signature doesn&#39;t match the key",id:"throws-error-if-the-signature-doesnt-match-the-key",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rsa"},"RSA"),(0,l.kt)("p",null,"This library uses the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/noloader/cryptopp-pem"},"Cryptop++ PEM_PACK")," to parse and store RSA keys in the PEM format."),(0,l.kt)("h2",{id:"generate-key-pair"},"Generate Key Pair"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const rsa_keypair = Cryptopp.RSA.generateKeyPair(2048);\n")),(0,l.kt)("h4",{id:"returns-object-containing-the-public-and-private-keys-as-well-as-the-parameters-used-to-generate-the-keys"},"Returns: Object containing the public and private keys, as well as the parameters used to generate the keys."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    public: "...",\n    private: "...",\n    params: {\n        n: "...",\n        p:"...",\n        q:"...",\n        d:"...",\n        e:"...",\n    },\n};\n')),(0,l.kt)("p",null,"Example of a returned public/private key:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-----BEGIN FOO BAR KEY-----\nMIIBgjAcBgoqhkiG9w0BDAEDMA4ECKZesfWLQOiDAgID6ASCAWBu7izm8N4V\n2puRO/Mdt+Y8ceywxiC0cE57nrbmvaTSvBwTg9b/xyd8YC6QK7lrhC9Njgp/\n...\n-----END FOO BAR KEY-----\n")),(0,l.kt)("h2",{id:"encrypt"},"Encrypt"),(0,l.kt)("p",null,"Encrypts a message using the public key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const publicKey = ... // obtained from second party\nconst encrypted = Cryptopp.RSA.encrypt(data, publicKey, 'OAEP_SHA1');\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryptionScheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"OAEP_SHA1"')," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"OAEP_SHA256"')," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PKCS1v15"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h4",{id:"returns-base64-encoded-string"},"Returns: ",(0,l.kt)("inlineCode",{parentName:"h4"},"base64-encoded string")),(0,l.kt)("h2",{id:"decrypt"},"Decrypt"),(0,l.kt)("p",null,"Decrypts a message using the private key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const rsa_keypair = ... // some locally stored keypair\nconst encryptedData = Cryptopp.RSA.encrypt(data, rsa_keypair.private, 'OAEP_SHA1');\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"base64-encoded string")," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privateKey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryptionScheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"OAEP_SHA1"')," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"OAEP_SHA256"')," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PKCS1v15"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h4",{id:"returns-string"},"Returns: ",(0,l.kt)("inlineCode",{parentName:"h4"},"string")),(0,l.kt)("h2",{id:"sign"},"Sign"),(0,l.kt)("p",null,"Signs a message with a private key to ensure authenticity."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const rsa_keypair = ... // some locally stored keypair\nconst signedData = Cryptopp.RSA.sign(encryptedData, rsa_keypair.private, 'PKCS1v15_SHA1');\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privateKey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signatureScheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PKCS1v15_SHA1"'),"  ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PKCS1v15_SHA256"'),"  ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PSSR_SHA1"'),"   ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PSSR_SHA256"'),"  ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PSSR_Whirlpool"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Note:")," Crypto++ supports two broad categories of digital signatures: Signature Schemes with Appendix (PKCS1v15_SHA1 and PKCS1v15_SHA256) and Signature Schemes with Recovery (PSSR_SHA1, PSSR_SHA256, and PSSR_Whirlpool)."),(0,l.kt)("p",null,"A signature scheme with appendix requires the verifier to have three items: the public key, the message, and the signature. Can be verified using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Cryptopp.RSA.verify")," function."),(0,l.kt)("p",null,"A signature scheme with recovery requires only the public key and signature - the message is recovered from the signature. Can be recovered using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Cryptopp.RSA.recover")," function."),(0,l.kt)("h4",{id:"returns-base64-encoded-string-1"},"Returns: ",(0,l.kt)("inlineCode",{parentName:"h4"},"base64-encoded string")),(0,l.kt)("h2",{id:"verify"},"Verify"),(0,l.kt)("p",null,"Valides signature of a message."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const data = ...\nconst dataSignature = ...\nconst publicKey = ... // obtained from second party\nconst isSignatureValid = Cryptopp.RSA.verify(signedData, publicKey, 'PKCS1v15_SHA1', dataSignature);\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"base64-encoded string")," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signatureScheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PKCS1v15_SHA1"')," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PKCS1v15_SHA256"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h4",{id:"returns-true-if-the-signature-is-valid-false-otherwise"},"Returns: ",(0,l.kt)("inlineCode",{parentName:"h4"},"true")," if the signature is valid, ",(0,l.kt)("inlineCode",{parentName:"h4"},"false")," otherwise."),(0,l.kt)("h2",{id:"recover"},"Recover"),(0,l.kt)("p",null,"Recovers the message from the signature using the public key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// In this case, data has to be signed with PSSR and will be then distributed as the message\nconst data = ...\nconst rsa_keypair = ... // some locally stored keypair\nconst signature = Cryptopp.RSA.sign(data, rsa_keypair.private, 'PSSR_SHA1');\n\n// Recipient can now verify the signature and recover the message\nconst publicKey = ... // obtained from second party\ntry {\n    const recoveredData = Cryptopp.RSA.recover(signature, publicKey, 'PSSR_SHA1');\n} catch (e) {\n    // handle error if signature doens't match the key\n}\n")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signature"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"base64-encoded string")," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signatureScheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PSSR_SHA1"')," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PSSR_SHA256"')," ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},'"PSSR_Whirlpool"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h4",{id:"returns-string-1"},"Returns: ",(0,l.kt)("inlineCode",{parentName:"h4"},"string")),(0,l.kt)("h4",{id:"throws-error-if-the-signature-doesnt-match-the-key"},"Throws error if the signature doesn't match the key"))}m.isMDXComponent=!0}}]);