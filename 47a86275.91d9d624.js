(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(189)),i={sidebar_label:"Contributing",title:"Contribute to Stryker4s",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/contributing.md"},s={unversionedId:"stryker4s/contributing",id:"stryker4s/contributing",isDocsHomePage:!1,title:"Contribute to Stryker4s",description:"This is the contribution guide for Stryker4s. Great to have you here! Here are a few ways you can help to make this project better.",source:"@site/docs/stryker4s/contributing.md",slug:"/stryker4s/contributing",permalink:"/docs/stryker4s/contributing",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/contributing.md",version:"current",sidebar_label:"Contributing",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/stryker4s/configuration"},next:{title:"Versioning strategy",permalink:"/docs/stryker4s/versioning"}},c=[{value:"Getting started",id:"getting-started",children:[]},{value:"Adding a new feature",id:"adding-a-new-feature",children:[]},{value:"Running Stryker4s on Stryker4s",id:"running-stryker4s-on-stryker4s",children:[]},{value:"Learning resources",id:"learning-resources",children:[]},{value:"Mutation switching",id:"mutation-switching",children:[]},{value:"Community",id:"community",children:[]}],l={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is the contribution guide for Stryker4s. Great to have you here! Here are a few ways you can help to make this project better."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"To get started with developing Stryker4s, you'll need a couple of tools:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://openjdk.java.net/"}),"Java JDK"),", a recent version like 11 is recommended"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.scala-sbt.org/"}),"sbt"),", to build and test the project")),Object(o.b)("p",null,"Once these tools are installed you can open the project with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/idea/"}),"IntelliJ"),", or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"VS Code")," combined with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scalameta.org/metals/"}),"Metals"),"."),Object(o.b)("p",null,"If you use VS Code with Metals, you can also install the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scalacenter.github.io/bloop/"}),"Bloop CLI")," for easier compiling and testing via the command-line."),Object(o.b)("p",null,"If you are have issues with setup, or want to keep a clean environment you can also use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/remote/containers"}),"VS Code Remote Containers")," feature to develop in a clean reproducible Docker container. All you need for it is VS Code, the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"}),"Remote Containers extension")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker"),". Then run 'Remote-Containers: Open Repository in Container...' and enter ",Object(o.b)("inlineCode",{parentName:"p"},"stryker-mutator/stryker4s")," as the repository. The devcontainer also has the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scalacenter.github.io/bloop/"}),"Bloop")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://get-coursier.io/"}),"Coursier")," CLI tools installed."),Object(o.b)("h2",{id:"adding-a-new-feature"},"Adding a new feature"),Object(o.b)("p",null,"New features are welcome! Both as ideas or in the form of a pull request."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Please ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker4s/issues/new"}),"create an issue")," with your idea first or let us know via ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitter.im/stryker-mutator/stryker4s"}),"Gitter"),"."),Object(o.b)("li",{parentName:"ol"},"Create a fork on your GitHub account."),Object(o.b)("li",{parentName:"ol"},"When writing your code, please conform the existing coding style. We use Scalafmt as a code formatter. You can format your code by running ",Object(o.b)("inlineCode",{parentName:"li"},"./bin/scalafmt"),", or with editor-specific settings. It also helps to take a moment to review the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.scala-lang.org/style/"}),"Scala style guide"),"."),Object(o.b)("li",{parentName:"ol"},"Please create or edit unit/integration tests for any changed or added code."),Object(o.b)("li",{parentName:"ol"},"Confirm everything still works by running ",Object(o.b)("inlineCode",{parentName:"li"},"sbt test")," (or let the CI do the work for you)."),Object(o.b)("li",{parentName:"ol"},"Submit the pull request!")),Object(o.b)("p",null,"Don't hesitate or get discouraged to get in touch! We are always happy to help you if you get stuck or have a question. Even if you don't finish something it can still be a good contribution."),Object(o.b)("h2",{id:"running-stryker4s-on-stryker4s"},"Running Stryker4s on Stryker4s"),Object(o.b)("p",null,"We support mutation testing Stryker4s with Stryker4s! The easiest way is to follow our guide in the root readme. If you want to test any local changes, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"sbt sbt-stryker4s2_12/publishLocal")," to publish the snapshot version to your local ivy repository."),Object(o.b)("li",{parentName:"ol"},"Note the version outputted by the log. Sbt will output something like ",Object(o.b)("inlineCode",{parentName:"li"},"[info] published sbt-stryker4s to $HOME/.ivy2/local/io.stryker-mutator/sbt-stryker4s/scala_2.12/sbt_1.0/0.6.1+31-85939087-SNAPSHOT/jars/sbt-stryker4s2_12.jar"),". In this case ",Object(o.b)("inlineCode",{parentName:"li"},"0.6.1+31-85939087-SNAPSHOT")," is the version you need (based on the commit hash and some other information, gathered by ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/dwijnand/sbt-dynver"}),Object(o.b)("inlineCode",{parentName:"a"},"sbt-dynver")),").",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Alternatively, set the ",Object(o.b)("inlineCode",{parentName:"li"},"version")," in sbt to something easier before calling ",Object(o.b)("inlineCode",{parentName:"li"},"sbt-stryker4s2_12/publishLocal")))),Object(o.b)("li",{parentName:"ol"},"Add the sbt plugin to ",Object(o.b)("inlineCode",{parentName:"li"},"project/plugins.sbt")," with the new version number"),Object(o.b)("li",{parentName:"ol"},"Run stryker4s as described in the readme.")),Object(o.b)("h2",{id:"learning-resources"},"Learning resources"),Object(o.b)("p",null,"Here are some resources you can use if you are new to mutation testing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://stryker-mutator.io/"}),"What is mutation testing?")," (and the rest of the website). On the Stryker mutator website."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.guru99.com/mutation-testing.html"}),"Mutation Testing: Complete Guide - Guru99")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://portal.klewel.com/watch/webcast/scala-days-2019/talk/18/"}),"Scala Days 2019 - Daniel Westheide - Testing in the postapocalyptic future")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://youtu.be/ba_86FlRiKg"}),"TechDays 2017 - Simon de Lang - Using Mutation Testing to Improve your JavaScript Tests"))),Object(o.b)("h2",{id:"mutation-switching"},"Mutation switching"),Object(o.b)("p",null,"Stryker4s uses a technique called 'mutation switching' to perform mutations. It does this by adding all mutations into a single pattern match, and activating the correct mutation via an environment variable. This would change the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"def isAdult(person: Person) = {\n  person.age >= 18\n}\n")),Object(o.b)("p",null,"To:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'def isAdult(person: Person) = {\n  sys.env.get("ACTIVE_MUTATION") match {\n    case Some("1") => person.age > 18\n    case Some("2") => person.age < 18\n    case Some("3") => person.age == 18\n    case _         => person.age >= 18 // Original\n  }\n}\n')),Object(o.b)("p",null,"The effect is the same as compiling each mutation seperately, but instead we only have to do it once. This is a big performance improvement, but does mean we have to be more careful about compile errors. Read more about mutation switching on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stryker-mutator.io/blog/2018-10-6/mutation-switching"}),"our blog")),Object(o.b)("h2",{id:"community"},"Community"),Object(o.b)("p",null,"Want to help in some other ways? Great! Here are some things you could do:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Evangelize mutation testing",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Mutation testing is still relatively new, especially in Scala. Please help us get the word out there!"),Object(o.b)("li",{parentName:"ul"},"Share your stories in blog posts and on social media. And please let us know about it!"))),Object(o.b)("li",{parentName:"ul"},"Did you use Stryker4s? Your feedback is very valuable to us. Both good and bad! Please ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitter.im/stryker-mutator/stryker4s"}),"contact us")," to let us know what you think.")))}b.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return r?a.a.createElement(d,s(s({ref:t},l),{},{components:r})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);