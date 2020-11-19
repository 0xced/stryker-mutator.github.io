(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(181)),o={title:"Karma Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/karma-runner.md"},c={unversionedId:"stryker/karma-runner",id:"stryker/karma-runner",isDocsHomePage:!1,title:"Karma Runner",description:"Installation",source:"@site/docs/stryker/karma-runner.md",slug:"/stryker/karma-runner",permalink:"/docs/stryker/karma-runner",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/karma-runner.md",version:"current",sidebar:"docs",previous:{title:"Jest Runner",permalink:"/docs/stryker/jest-runner"},next:{title:"Mocha Runner",permalink:"/docs/stryker/mocha-runner"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Install",id:"install",children:[]},{value:"Bring your own test runner",id:"bring-your-own-test-runner",children:[]},{value:"Configuring",id:"configuring",children:[{value:'<code>karma.projectType</code> "custom" | "angular-cli"',id:"karmaprojecttype-custom--angular-cli",children:[]},{value:"<code>karma.configFile</code> string",id:"karmaconfigfile-string",children:[]},{value:"<code>karma.config</code> object",id:"karmaconfig-object",children:[]},{value:"<code>karma.ngConfig.testArguments</code> object",id:"karmangconfigtestarguments-object",children:[]}]},{value:"Non overridable options",id:"non-overridable-options",children:[]},{value:"Configure angular cli",id:"configure-angular-cli",children:[]},{value:"Debugging",id:"debugging",children:[]}],b={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"A plugin to use the karma test runner (or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@angular/cli"}),"@angular/cli"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"ng test"),") in Stryker."),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"Install @stryker-mutator/karma-runner locally within your project folder, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i --save-dev @stryker-mutator/karma-runner\n")),Object(i.b)("h2",{id:"bring-your-own-test-runner"},"Bring your own test runner"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," is a plugin for ",Object(i.b)("inlineCode",{parentName:"p"},"stryker")," to enable ",Object(i.b)("inlineCode",{parentName:"p"},"karma")," as a test runner.\nHowever, it does ",Object(i.b)("em",{parentName:"p"},"not")," come packaged with it's own version of ",Object(i.b)("inlineCode",{parentName:"p"},"karma"),", instead it\nuses ",Object(i.b)("em",{parentName:"p"},"your very own karma")," version. It can also work with ",Object(i.b)("inlineCode",{parentName:"p"},"@angular/cli"),", see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#configuring"}),"Configuring")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," karma v2.0.3 has a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/karma-runner/karma/issues/3057"}),"known issue")," which makes it impossible to use it with Stryker. please upgrade to 2.0.4 or higher."),Object(i.b)("h2",{id:"configuring"},"Configuring"),Object(i.b)("p",null,"You can configure the ",Object(i.b)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," using the ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.json"),") config file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "testRunner": "karma",\n  "karma": {\n    "projectType": "custom",\n    "configFile": "path/to/karma.conf.js",\n    "config": {\n      "browsers": ["ChromeHeadless"]\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"karmaprojecttype-custom--angular-cli"},Object(i.b)("inlineCode",{parentName:"h3"},"karma.projectType")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},'"custom"')," | ",Object(i.b)("inlineCode",{parentName:"h3"},'"angular-cli"'),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"custom"')),Object(i.b)("p",null,"Specify which kind of project you're using. This determines which command is used to start karma"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},'"custom"')),": configure @stryker-mutator/karma-runner to use ",Object(i.b)("inlineCode",{parentName:"li"},"karma start"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},'"angular-cli"')),": configure @stryker-mutator/karma-runner to use ",Object(i.b)("inlineCode",{parentName:"li"},"ng test")," (see ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#configure-angular-cli"}),"configuring for angular-cli"),").")),Object(i.b)("h3",{id:"karmaconfigfile-string"},Object(i.b)("inlineCode",{parentName:"h3"},"karma.configFile")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("p",null,"Specify a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://karma-runner.github.io/2.0/config/configuration-file.html"}),"'karma.conf.js' file")," to be loaded.\nOptions specified directly in your stryker.conf.js file using ",Object(i.b)("inlineCode",{parentName:"p"},"karma.config")," will overrule options in your karma.conf.js file."),Object(i.b)("h3",{id:"karmaconfig-object"},Object(i.b)("inlineCode",{parentName:"h3"},"karma.config")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("p",null,"Specify ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://karma-runner.github.io/2.0/config/configuration-file.html"}),"karma configuration options")," directly.\nOptions specified here will overrule any options in your karma.conf.js file."),Object(i.b)("h3",{id:"karmangconfigtestarguments-object"},Object(i.b)("inlineCode",{parentName:"h3"},"karma.ngConfig.testArguments")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("p",null,"Add ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/angular/angular-cli/wiki/test#options"}),"ng test arguments"),". For example, specify an alternative project with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "karma": {\n    "projectType": "angular-cli",\n      "ngConfig": {\n        "testArguments": {\n          "project": "my-lib"\n        }\n    }\n  }\n}\n')),Object(i.b)("p",null,"This will run ng test with ",Object(i.b)("inlineCode",{parentName:"p"},"--project")," argument: ",Object(i.b)("inlineCode",{parentName:"p"},"ng test --project=my-lib"),"."),Object(i.b)("h2",{id:"non-overridable-options"},"Non overridable options"),Object(i.b)("p",null,"The browser's life cycle is determined by ",Object(i.b)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner"),". I.e. these settings cannot be overridden. You configuration settings for these will be ignored."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n  browserNoActivityTimeout: 1000000,\n  autoWatch: false,\n  singleRun: false,\n  detached: false\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"coverage")," plugin will also be removed (not needed for mutation testing)."),Object(i.b)("h2",{id:"configure-angular-cli"},"Configure angular cli"),Object(i.b)("p",null,"Please follow the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stryker/guides/angular"}),"angular guide"),"."),Object(i.b)("h2",{id:"debugging"},"Debugging"),Object(i.b)("p",null,"As Stryker runs karma in its own process, its logging output will be consumed by Stryker."),Object(i.b)("p",null,"To see all logging from karma, set the log level to ",Object(i.b)("inlineCode",{parentName:"p"},"trace")," in ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "logLevel": "trace"\n}\n')))}u.isMDXComponent=!0},181:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,g=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return t?a.a.createElement(g,c(c({ref:n},b),{},{components:t})):a.a.createElement(g,c({ref:n},b))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);