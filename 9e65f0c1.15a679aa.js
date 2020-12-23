(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),c=r(7),i=(r(0),r(189)),a={title:"TypeScript Checker",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/typescript-checker.md"},o={unversionedId:"stryker/typescript-checker",id:"stryker/typescript-checker",isDocsHomePage:!1,title:"TypeScript Checker",description:"A TypeScript type checker plugin for Stryker, the JavaScript TypeScript Mutation testing framework.",source:"@site/docs/stryker/typescript-checker.md",slug:"/stryker/typescript-checker",permalink:"/docs/stryker/typescript-checker",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/typescript-checker.md",version:"current",sidebar:"docs",previous:{title:"Mocha Runner",permalink:"/docs/stryker/mocha-runner"},next:{title:"Angular",permalink:"/docs/stryker/guides/angular"}},p=[{value:"Features",id:"features",children:[]},{value:"Install",id:"install",children:[]},{value:"Configuring",id:"configuring",children:[{value:"<code>tsconfigFile</code> string",id:"tsconfigfile-string",children:[]}]},{value:"Peer dependencies",id:"peer-dependencies",children:[]},{value:"Load the plugin",id:"load-the-plugin",children:[]}],s={toc:p};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A TypeScript type checker plugin for Stryker, the ",Object(i.b)("del",{parentName:"p"},"JavaScript")," ",Object(i.b)("em",{parentName:"p"},"TypeScript")," Mutation testing framework.\nThis plugin enables type checking on mutants, so you won't have to waste time on mutants which result in a type error."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("p",null,"\ud83d\udc7d Type check each mutant. Invalid mutants will be marked as ",Object(i.b)("inlineCode",{parentName:"p"},"CompileError")," in your Stryker report.",Object(i.b)("br",null),"\n\ud83e\uddd2 Easy to setup, only your ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file is needed.",Object(i.b)("br",null),"\n\ud83d\udd22 Type check is done in-memory, no side effects on disk.",Object(i.b)("br",null),"\n\ud83c\udf81 Support for both single typescript projects as well as projects with project references (",Object(i.b)("inlineCode",{parentName:"p"},"--build")," mode)."),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"First, install Stryker itself (you can follow the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stryker/getting-started"}),"getting started"),")"),Object(i.b)("p",null,"Next, install this package:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev @stryker-mutator/typescript-checker\n")),Object(i.b)("h2",{id:"configuring"},"Configuring"),Object(i.b)("p",null,"You can configure the typescript checker in the ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.json"),") file."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),Object(i.b)("h3",{id:"tsconfigfile-string"},Object(i.b)("inlineCode",{parentName:"h3"},"tsconfigFile")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"'tsconfig.json'")),Object(i.b)("p",null,"The path to your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),"tsconfig"),". Project references ",Object(i.b)("em",{parentName:"p"},"are supported"),", ",Object(i.b)("inlineCode",{parentName:"p"},"--build")," mode will be enabled automatically when references are found in your tsconfig.json file."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note: the following compiler options are always overridden by @stryker-mutator/typescript-checker to avoid false positives. See ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/stryker-mutator/stryker/issues/391#issue-259829320"}),"issue 391")," for more information on this")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "allowUnreachableCode": true,\n    "noUnusedLocals": false,\n    "noUnusedParameters": false\n  }\n}\n')),Object(i.b)("h2",{id:"peer-dependencies"},"Peer dependencies"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript-checker")," package for ",Object(i.b)("inlineCode",{parentName:"p"},"stryker")," to enable ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," support. As such, you should make sure you have the correct versions of its dependencies installed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"typescript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@stryker-mutator/core"))),Object(i.b)("p",null,"For the current versions, see the ",Object(i.b)("inlineCode",{parentName:"p"},"peerDependencies")," section in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/blob/master/packages/typescript/package.json"}),"package.json"),"."),Object(i.b)("h2",{id:"load-the-plugin"},"Load the plugin"),Object(i.b)("p",null,"In this plugin the ",Object(i.b)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript-checker"),"' must be loaded into Stryker.\nThe easiest way to achieve this, is ",Object(i.b)("em",{parentName:"p"},"not have a ",Object(i.b)("inlineCode",{parentName:"em"},"plugins")," section")," in your config file. That way, all plugins starting with ",Object(i.b)("inlineCode",{parentName:"p"},'"@stryker-mutator/"')," will be loaded."),Object(i.b)("p",null,"If you do decide to choose specific modules, don't forget to add ",Object(i.b)("inlineCode",{parentName:"p"},'"@stryker-mutator/typescript-checker"')," to the list of plugins to load."))}l.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),l=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return r?c.a.createElement(m,o(o({ref:t},s),{},{components:r})):c.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var s=2;s<i;s++)a[s]=r[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);