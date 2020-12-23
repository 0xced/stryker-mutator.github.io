(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(189)),r={slug:"mutation-switching",title:"Mutation switching in Stryker4s",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker4s"]},s={permalink:"/blog/mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-10-06-mutation-switching.md",source:"@site/blog/2018-10-06-mutation-switching.md",description:"Learn how Stryker4s uses mutation switching to improve performance.",date:"2018-10-06T00:00:00.000Z",tags:[{label:"stryker4s",permalink:"/blog/tags/stryker-4-s"}],title:"Mutation switching in Stryker4s",readingTime:5.5,truncated:!0,prevItem:{title:"Announcing Stryker 0.34",permalink:"/blog/announcing-stryker-0-34"},nextItem:{title:"Introducing Stryker.NET and Stryker4s",permalink:"/blog/csharp-and-scala-support"}},c=[{value:"Attempt one: Compiling each mutation",id:"attempt-one-compiling-each-mutation",children:[]},{value:"Attempt two: Mutating bytecode",id:"attempt-two-mutating-bytecode",children:[]},{value:"Solution: Mutation switching",id:"solution-mutation-switching",children:[]},{value:"Top statements",id:"top-statements",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Learn how Stryker4s uses mutation switching to improve performance."),Object(i.b)("p",null,"We are very happy with Stryker's new friends! One of those new friends is Stryker4s(cala).\nScala developers can now use mutation testing to improve their tests!\nCreating a mutation testing framework for Scala comes with many challenges.\nOne of those challenges is the Scala compiler itself.\nWe all know it's not the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://scala-ci.typesafe.com/grafana/dashboard/db/scala-benchmark?from=1429139130109&to=1492531027936h&orgId=1&var-branch=2.11.x&var-branch=2.12.x&var-branch=2.13.x&var-source=scala&var-bench=HotScalacBenchmark.compile&var-host=scalabench@scalabench@"}),"fastest in its kind"),".\nOne of the main goals of Stryker is to be fast. This means we need to come up with an intelligent way to introduce the mutants into the source code."),Object(i.b)("h2",{id:"attempt-one-compiling-each-mutation"},"Attempt one: Compiling each mutation"),Object(i.b)("p",null,"One way of introducing mutants to a codebase is by mutating one statement, compile the code, run tests, gather the results and repeat.\nThis seems like a logical choice because it mimics the way a developer would go about it."),Object(i.b)("p",null,"Let's look at an example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"class Numbers {\n    def greaterThan(a: Int, b: Int): Boolean = {\n        a > b\n        // Mutant 1: a >= b\n        // Mutant 2: a < b\n        // Mutant 3: a == b\n    }\n}\n")),Object(i.b)("p",null,"As you can see, there are three possible mutants:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Change ",Object(i.b)("inlineCode",{parentName:"li"},">")," to ",Object(i.b)("inlineCode",{parentName:"li"},">=")),Object(i.b)("li",{parentName:"ol"},"Change ",Object(i.b)("inlineCode",{parentName:"li"},">")," to ",Object(i.b)("inlineCode",{parentName:"li"},"<")),Object(i.b)("li",{parentName:"ol"},"Change ",Object(i.b)("inlineCode",{parentName:"li"},">")," to ",Object(i.b)("inlineCode",{parentName:"li"},"=="))),Object(i.b)("p",null,"If we apply the mutation one by one, we would need to compile the code base three times.\nIf we assume the compile time of this program is 10 seconds, we already have 30 seconds of compile time for one full mutation run.\nThis would quickly get out of hand when the codebase is bigger and generates more mutants."),Object(i.b)("h2",{id:"attempt-two-mutating-bytecode"},"Attempt two: Mutating bytecode"),Object(i.b)("p",null,"As you might know, Scala gets compiled to Java bytecode. This gives us an alternative way to introduce mutations in a codebase.\nWe would be able to mutate the bytecode directly, eliminating the need for recompiling."),Object(i.b)("p",null,"The main challenge with this approach is that ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.scala-lang.org/overviews/core/binary-compatibility-of-scala-releases.html"}),"Scala doesn't guarantee the bytecode output for each version of the compiler")," (or even JDK version).\nEven the jump from Scala 2.12 to 2.13 produces different bytecode. This would make manipulating bytecode complicated, unpredictable and hard to maintain."),Object(i.b)("p",null,"Furthermore, if you mutate the bytecode, it can be difficult to reproduce the exact Scala code that you changed.\nDetails, like the exact location, are not represented in bytecode.\nScala makes this extra challenging, as 1 ",Object(i.b)("inlineCode",{parentName:"p"},".scala")," file can easily result in 100 ",Object(i.b)("inlineCode",{parentName:"p"},".class")," files in bytecode."),Object(i.b)("p",null,"For performance reasons, mutating bytecode might sound like a fast solution, but you would still need to load (or hot reload) the mutated class files\nfor each mutant."),Object(i.b)("p",null,"There should be a better solution out there, right?"),Object(i.b)("h2",{id:"solution-mutation-switching"},"Solution: Mutation switching"),Object(i.b)("p",null,"Mutation switching to the rescue! So how is mutation switching both ",Object(i.b)("em",{parentName:"p"},"faster")," and ",Object(i.b)("em",{parentName:"p"},"more reliable"),' than compiling each mutation or mutating bytecode?\nThe steps are quite similar to "Compiling each mutant", but with some big differences:'),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"All mutants are identified for the whole codebase."),Object(i.b)("li",{parentName:"ol"},"All mutants are applied to the codebase ",Object(i.b)("strong",{parentName:"li"},"at the same time")," using a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.scala-lang.org/tour/pattern-matching.html"}),"Scala Pattern match"),"."),Object(i.b)("li",{parentName:"ol"},"All mutants are tested one by one, with only ",Object(i.b)("strong",{parentName:"li"},"one mutant active at a time"),", using an environment variable.")),Object(i.b)("p",null,"Step 2 is where the magic happens. Let's take a look at the same code example as used previously, right after the mutations are applied."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'class Numbers {\n    def greaterThan(a: Int, b: Int): Boolean = {\n        sys.env.get("ACTIVE_MUTATION") match {\n            case Some("0") =>\n                a >= b\n            case Some("1") =>\n                a < b\n            case Some("2") =>\n                a == b\n            case _ =>\n                a > b\n        }\n    }\n}\n')),Object(i.b)("p",null,"All possible mutations are implemented in the pattern match. An identifier is used to turn on/off, or ",Object(i.b)("em",{parentName:"p"},"switch"),", specific mutations.\nThe default case will be used when none of the mutants are active. Now the code base only needs to be compiled once.\nThe extra time compilation takes because of its increased size is negligible compared to the overhead of compiling each mutant.\nFor example, if the compilation time for this code base\nwould be 15 seconds we will still gain 15 seconds compared to compiling each mutation."),Object(i.b)("p",null,"We gain performance without losing flexibility. It's a win-win scenario."),Object(i.b)("h2",{id:"top-statements"},"Top statements"),Object(i.b)("p",null,"Mutation switching sure is great, but let's take a look at a more complex example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"def isEven(number: Int): Boolean = number % 2 == 0\ndef isOdd(number: Int): Boolean = !isEven(number)\n\nval numbers: List[Int] = 1 to 100 toList\n\ndef filterOddAnd(specialNumber: Int): List[Int] = {\n  numbers\n    .filter(isOdd)\n    .filterNot(_.equals(specialNumber))\n}\n")),Object(i.b)("p",null,"With this code base ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," and ",Object(i.b)("inlineCode",{parentName:"p"},"filterNot")," could be mutated to there counterparts.\nThis would give us the following code base if we implement the pattern match at the direct position."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'def isEven(number: Int): Boolean = number % 2 == 0\ndef isOdd(number: Int): Boolean = !isEven(number)\n\nval numbers: List[Int] = 1 to 100 toList\n\ndef filterOddAnd(specialNumber: Int): List[Int] = {\n  numbers.(sys.env.get("ACTIVE_MUTATION") match {\n    case Some("0") => .filter(isOdd)\n    case _         => .filterNot(isOdd)\n  }).\n  (sys.env.get("ACTIVE_MUTATION") match {\n    case Some("1") =>  .filterNot(_.equals(specialNumber))\n    case _         =>  .filter(_.equals(specialNumber))\n  })\n}\n')),Object(i.b)("p",null,"Because we wrapped the functions right on the spot we produced code that doesn't even compile!\nTo make the code compile we need to take a closer look at the abstract syntax tree.\nWe are searching for the parent statement in this abstract syntax tree, which is ",Object(i.b)("inlineCode",{parentName:"p"},"numbers")," in our case.\nIf we implement mutation switching using the parent statement, we can generate the following code."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Scala"}),'def isEven(number: Int): Boolean = number % 2 == 0\ndef isOdd(number: Int): Boolean = !isEven(number)\n\nval numbers: List[Int] = 1 to 100 toList\n\ndef filterOddAnd(specialNumber: Int): List[Int] = {\n  sys.env.get("ACTIVE_MUTATION") match {\n    case Some("0") => numbers.filterNot(isOdd).filter(_.equals(specialNumber))\n    case Some("1") => numbers.filter(isOdd).filter(_.equals(specialNumber))\n    case _         => numbers.filter(isOdd).filterNot(_.equals(specialNumber))\n  }\n}\n')),Object(i.b)("p",null,"This enables us to get clean, readable pattern matches and avoid compilation errors."),Object(i.b)("h2",{id:"whats-next"},"What's next?"),Object(i.b)("p",null,"With mutation switching in place, the road is clear for even bigger performance improvements. Right now, we're not\nkeeping the testing process alive. We simply run ",Object(i.b)("inlineCode",{parentName:"p"},"sbt test")," with the correct mutant switched on.\nKeeping the test process alive and rerunning the tests after switching mutants is where we can really put the pedal to the metal!"),Object(i.b)("p",null,"Interested to help? We're very much looking for contributions! Take a look at our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker4s/issues"}),"issue tracker"),"\nor contact us on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"}),"Slack"),"."),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"With the combination of mutation switching and traversing to the parent statements Stryker4s is able to apply mutations to the codebase\nin a clean and understandable fashion and keep the chances of compilation errors to a minimum.\nWe hope this blog gave some insight on mutation switching works and how Stryker4s uses this to its advantage. Happy mutating!"))}u.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(r,".").concat(p)]||m[p]||b[p]||i;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);