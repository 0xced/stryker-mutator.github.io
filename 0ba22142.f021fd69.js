(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{189:function(A,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return m}));var r=t(0),n=t.n(r);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var l=n.a.createContext({}),c=function(A){var e=n.a.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},p=function(A){var e=c(A.components);return n.a.createElement(l.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.a.createElement(n.a.Fragment,{},e)}},b=n.a.forwardRef((function(A,e){var t=A.components,r=A.mdxType,o=A.originalType,a=A.parentName,l=s(A,["components","mdxType","originalType","parentName"]),p=c(t),b=r,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||o;return t?n.a.createElement(m,i(i({ref:e},l),{},{components:t})):n.a.createElement(m,i({ref:e},l))}));function m(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var o=t.length,a=new Array(o);a[0]=b;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=A,i.mdxType="string"==typeof A?A:r,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},257:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,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"},78:function(A,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return i})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return c}));var r=t(3),n=t(7),o=(t(0),t(189)),a={slug:"stryker-0-5-5",title:"Stryker 0.5.5 released!",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i={permalink:"/blog/stryker-0-5-5",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2016-12-30-stryker-0-5-5.md",source:"@site/blog/2016-12-30-stryker-0-5-5.md",description:"The full changelog can be found on GitHub. In this post we'll dive into a couple of new features.",date:"2016-12-30T00:00:00.000Z",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Stryker 0.5.5 released!",readingTime:1.87,truncated:!0,prevItem:{title:"Happy new Stryker!",permalink:"/blog/happy-new-stryker"}},s=[{value:"New progress reporter",id:"new-progress-reporter",children:[]},{value:"Clear text reporter updated",id:"clear-text-reporter-updated",children:[]},{value:"Karma config parsing",id:"karma-config-parsing",children:[]}],l={toc:s};function c(A){var e=A.components,a=Object(n.a)(A,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The full changelog can be found on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/blob/master/CHANGELOG.md"}),"GitHub"),". In this post we'll dive into a couple of new features."),Object(o.b)("p",null,"To upgrade to Stryker 0.5.5, simply run: ",Object(o.b)("inlineCode",{parentName:"p"},"npm i --save-dev stryker-api@0.4.2 stryker@0.5.5")),Object(o.b)("h3",{id:"new-progress-reporter"},"New progress reporter"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"progress")," reporter got a fresh new look! It will now display a progress bar, the percentage of doneness and an ETC (Estimated Time of Completion).\nGone are the days of guessing how far Stryker has come and how long it'll need!\nYou can use it by setting reporter to ",Object(o.b)("inlineCode",{parentName:"p"},"'progress'")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"stryker.conf.js"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The new progress reporter looks like this:"),"\n",Object(o.b)("img",{alt:"new progress reporter image",src:t(257).default})),Object(o.b)("p",null,"Do you still want to use the ",Object(o.b)("strong",{parentName:"p"},"old")," reporter? It's still there! Just use the repoter ",Object(o.b)("inlineCode",{parentName:"p"},"'dots'")," in your configuration."),Object(o.b)("h3",{id:"clear-text-reporter-updated"},"Clear text reporter updated"),Object(o.b)("p",null,"The clear text reporter no longer prints every single test that was executed for a mutant. It now only prints the first three tests and mentions how many more tests were executed.\nIf desired, you can overwrite this behavior by adding the following piece of config to your ",Object(o.b)("inlineCode",{parentName:"p"},"stryker.conf.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"clearTextReporter: {\n    maxTestsToLog: 25\n},\n")),Object(o.b)("p",null,"Don't want to know which tests were executed? Feel free to set the ",Object(o.b)("inlineCode",{parentName:"p"},"maxTestsToLog")," property to 0."),Object(o.b)("h3",{id:"karma-config-parsing"},"Karma config parsing"),Object(o.b)("p",null,"In addition to this release of Stryker, we've also added support for an often requested feature: reading your existing ",Object(o.b)("inlineCode",{parentName:"p"},"karma.conf.js")," in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/tree/master/packages/stryker-karma-runner"}),"stryker-karma-runner"),"!\nStarting with version 0.3.3, you can add the location of your karma config file to ",Object(o.b)("inlineCode",{parentName:"p"},"Stryker.conf.js")," and have it automatically be picked up by the plugin. This reduces code duplication between these two files."),Object(o.b)("p",null,"This is what your new ",Object(o.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," might look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Stryker.conf.js\nmodule.exports = function (config) {\n    config.set({\n        testRunner: 'karma',\n        testFramework: 'jasmine', // <-- add your testFramework here\n        karmaConfigFile: 'karma.conf.js' // <-- add your karma.conf.js file here\n        mutate: [\n            'src/**/*.js' // <-- mark files for mutation here\n        ]\n    });\n}\n")),Object(o.b)("p",null,"As you can see, there is no need to specify which files Stryker should use! You only have to specify which files you want to mutate.\nA more detailed explanation of this feature can be found in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/tree/master/packages/stryker-karma-runner/blob/master/README.md#configuring"}),"stryker-karma-runner README.md"),"."),Object(o.b)("h4",{id:"we-hope-you-enjoy-this-new-version-of-stryker-wed-love-to-hear-your-feedback-on-slack-andor-twitter-with-hashtag-strykermutator"},"We hope you enjoy this new version of Stryker! We'd love to hear your feedback on ",Object(o.b)("a",Object(r.a)({parentName:"h4"},{href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"}),"Slack")," and/or Twitter (with hashtag #strykermutator)!"))}c.isMDXComponent=!0}}]);