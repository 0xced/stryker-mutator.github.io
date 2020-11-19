(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(181)),s={title:"Plugins",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/plugins.md"},c={unversionedId:"stryker/plugins",id:"stryker/plugins",isDocsHomePage:!1,title:"Plugins",description:"Stryker supports several plugins, which are listed below. You can also search npm for the stryker-plugin tag.",source:"@site/docs/stryker/plugins.md",slug:"/stryker/plugins",permalink:"/docs/stryker/plugins",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/plugins.md",version:"current",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/stryker/configuration"},next:{title:"Jasmine Runner",permalink:"/docs/stryker/jasmine-runner"}},u=[{value:"Test runners",id:"test-runners",children:[]},{value:"Reporters",id:"reporters",children:[]},{value:"Checkers",id:"checkers",children:[]},{value:"&lt;Your plugin here&gt;",id:"your-plugin-here",children:[]}],i={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stryker supports several plugins, which are listed below. You can also ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=stryker-plugin"}),"search npm for the stryker-plugin tag"),"."),Object(o.b)("p",null,"Test runner and checker plugins are packaged separately; you should install them yourself. For example, if you want to use the mocha test runner you can run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -D @stryker-mutator/mocha-runner"),"."),Object(o.b)("p",null,"Don't worry about plugins if you're just getting started. The needed plugins will be installed when you're following our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stryker/getting-started"}),"getting started guide"),"."),Object(o.b)("h2",{id:"test-runners"},"Test runners"),Object(o.b)("p",null,"A test runner plugin can hook into your test runner support coverage analysis or improve performance. If your test runner isn't listed here, you can probably still use the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./configuration#testrunner-string"}),"command test runner"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/stryker/jasmine-runner"}),"Jasmine")," (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/tree/master/packages/jasmine-runner"}),"@stryker-mutator/jasmine-runner"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/stryker/jest-runner"}),"Jest")," (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/tree/master/packages/jest-runner"}),"@stryker-mutator/jest-runner"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/stryker/karma-runner"}),"Karma")," (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/tree/master/packages/karma-runner"}),"@stryker-mutator/karma-runner"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/stryker/mocha-runner"}),"Mocha")," (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/tree/master/packages/mocha-runner"}),"@stryker-mutator/mocha-runner"),")")),Object(o.b)("p",null,"Removed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("del",{parentName:"li"},"Web Component Tester")," (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/tree/v3.3.1/packages/wct-runner"}),"@stryker-mutator/wct-runner"),") (Removed in v4 of Stryker).")),Object(o.b)("p",null,"After choosing your test runner plugin, install "),Object(o.b)("h2",{id:"reporters"},"Reporters"),Object(o.b)("p",null,"A reporter plugin can act on events that happen during the mutation testing process. They should be used to, well, report results, or progress."),Object(o.b)("p",null,"Stryker already comes with the most useful reporters included:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"progress: Report progress during mutation testing."),Object(o.b)("li",{parentName:"ul"},"dots: Report progress as dots during mutation testing."),Object(o.b)("li",{parentName:"ul"},"clear-text: A clear text report at the end of the mutation testing phase."),Object(o.b)("li",{parentName:"ul"},"html: An HTML report. See ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/stryker/master"}),"Stryker's own report")," for an example."),Object(o.b)("li",{parentName:"ul"},"dashboard: Upload your mutation testing report to the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://dashboard.stryker-mutator.io"}),"Stryker dashboard"),". See the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/General/dashboard"}),"dashboard docs")," for more information."),Object(o.b)("li",{parentName:"ul"},"event-recorder: Write all events to disk. Useful for debug purposes.")),Object(o.b)("h2",{id:"checkers"},"Checkers"),Object(o.b)("p",null,"A checker plugin can ",Object(o.b)("em",{parentName:"p"},"check")," a mutant before it is mutation tested. The check can ",Object(o.b)("em",{parentName:"p"},"fail")," or ",Object(o.b)("em",{parentName:"p"},"pass"),"; when a check fails, the mutant is not mutation tested."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"./typescript-checker"}),"TypeScript")," (@stryker-mutator/typescript-checker)"),": This checker will check each mutant for typescript compile errors.")),Object(o.b)("h2",{id:"your-plugin-here"},"<","Your plugin here",">"),Object(o.b)("p",null,"You can write your plugins for Stryker. Interested? Come and have a chat at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"}),"our Slack"),"."))}l.isMDXComponent=!0},181:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(h,c(c({ref:t},i),{},{components:r})):a.a.createElement(h,c({ref:t},i))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);