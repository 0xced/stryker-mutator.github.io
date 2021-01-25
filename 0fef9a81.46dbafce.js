(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,b(b({ref:t},c),{},{components:n})):r.a.createElement(d,b({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(190)),o={title:"Configuration",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/configuration.md"},b={unversionedId:"stryker4s/configuration",id:"stryker4s/configuration",isDocsHomePage:!1,title:"Configuration",description:'All configuration options can be set from the stryker4s.conf file in the root of the project. This file is read in the HOCON-format. All configuration should be in the "stryker4s" namespace and in camel-case.',source:"@site/docs/stryker4s/configuration.md",slug:"/stryker4s/configuration",permalink:"/docs/stryker4s/configuration",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/configuration.md",version:"current",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/stryker4s/getting-started"},next:{title:"Contribute to Stryker4s",permalink:"/docs/stryker4s/contributing"}},l=[{value:"General config",id:"general-config",children:[{value:"<code>mutate</code> [<code>string[]</code>]",id:"mutate-string",children:[]},{value:"<code>test-filter</code> [<code>string[]</code>]",id:"test-filter-string",children:[]},{value:"<code>files</code> [<code>string[]</code>]",id:"files-string",children:[]},{value:"<code>base-dir</code> string",id:"base-dir-string",children:[]},{value:"<code>reporters</code> [<code>string[]</code>]",id:"reporters-string",children:[]},{value:"<code>excluded-mutations</code> [<code>string[]</code>]",id:"excluded-mutations-string",children:[]},{value:"<code>thresholds</code> object",id:"thresholds-object",children:[]},{value:"<code>dashboard.*</code> object",id:"dashboard-object",children:[]}]},{value:"Sbt plugin config",id:"sbt-plugin-config",children:[{value:"<code>timeout-factor</code> number",id:"timeout-factor-number",children:[]},{value:"<code>timeout</code> duration",id:"timeout-duration",children:[]},{value:"<code>max-test-runner-reuse</code> number",id:"max-test-runner-reuse-number",children:[]},{value:"<code>legacy-test-runner</code> boolean",id:"legacy-test-runner-boolean",children:[]}]},{value:"Process runner config",id:"process-runner-config",children:[{value:"<code>test-runner</code> object",id:"test-runner-object",children:[]},{value:"<code>scala-dialect</code> string",id:"scala-dialect-string",children:[]}]},{value:"Other configuration options",id:"other-configuration-options",children:[{value:"<code>log-level</code> string",id:"log-level-string",children:[]}]},{value:"Excluding specific mutations",id:"excluding-specific-mutations",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All configuration options can be set from the ",Object(i.b)("inlineCode",{parentName:"p"},"stryker4s.conf"),' file in the root of the project. This file is read in the HOCON-format. All configuration should be in the "stryker4s" namespace and in camel-case.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-conf"}),"stryker4s {\n  # Your configuration here\n}\n")),Object(i.b)("h2",{id:"general-config"},"General config"),Object(i.b)("h3",{id:"mutate-string"},Object(i.b)("inlineCode",{parentName:"h3"},"mutate")," [",Object(i.b)("inlineCode",{parentName:"h3"},"string[]"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},'mutate: [ "**/main/scala/**/*.scala" ]'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},'[ "**/main/scala/**/*.scala" ]'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","With ",Object(i.b)("inlineCode",{parentName:"p"},"mutate")," you configure the subset of files to use for mutation testing.\nGenerally speaking, these should be your own source files.",Object(i.b)("br",{parentName:"p"}),"\n","The default for this will find files in the common Scala project format."),Object(i.b)("p",null,"You can ",Object(i.b)("em",{parentName:"p"},"ignore")," files by adding an exclamation mark (",Object(i.b)("inlineCode",{parentName:"p"},"!"),") at the start of an expression."),Object(i.b)("h3",{id:"test-filter-string"},Object(i.b)("inlineCode",{parentName:"h3"},"test-filter")," [",Object(i.b)("inlineCode",{parentName:"h3"},"string[]"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},'test-filter: [ "com.mypackage.MyTest" ]'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Since:")," ",Object(i.b)("inlineCode",{parentName:"p"},"v0.8.0"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","With ",Object(i.b)("inlineCode",{parentName:"p"},"test-filter")," you configure the subset of tests to use for mutation testing. By default all tests are included.\nYou can use wildcard pattern: ",Object(i.b)("inlineCode",{parentName:"p"},"com.mypackage.*"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"With sbt ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.scala-sbt.org/1.x/docs/Testing.html#Filter+classes"}),Object(i.b)("inlineCode",{parentName:"a"},"Tests.Filter"))," is used.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You can ",Object(i.b)("em",{parentName:"li"},"ignore")," tests by adding an exclamation mark (",Object(i.b)("inlineCode",{parentName:"li"},"!"),") at the start of an expression."))),Object(i.b)("li",{parentName:"ul"},"With Maven and the ScalaTest plugin, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.scalatest.org/user_guide/using_the_scalatest_maven_plugin"}),Object(i.b)("inlineCode",{parentName:"a"},"wildcardSuites"))," property is used"),Object(i.b)("li",{parentName:"ul"},"With Maven and the SureFire plugin, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://maven.apache.org/surefire/maven-surefire-plugin/examples/single-test.html"}),Object(i.b)("inlineCode",{parentName:"a"},"tests"))," property is used")),Object(i.b)("p",null,"Note: Not supported in the command-runner plugin."),Object(i.b)("h3",{id:"files-string"},Object(i.b)("inlineCode",{parentName:"h3"},"files")," [",Object(i.b)("inlineCode",{parentName:"h3"},"string[]"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},'files: [ "**/main/scala/**/*.scala" ]'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," result of ",Object(i.b)("inlineCode",{parentName:"p"},"git ls-files --others --exclude-standard --cached"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","With ",Object(i.b)("inlineCode",{parentName:"p"},"files")," you can choose which files should be included in your mutation run sandbox.\nThis is normally not needed as it defaults to all files not ignored by git. If you do need to override ",Object(i.b)("inlineCode",{parentName:"p"},"files")," (for example, when your project isn't in a git repository), you can override the ",Object(i.b)("inlineCode",{parentName:"p"},"files")," config."),Object(i.b)("p",null,"You can ",Object(i.b)("em",{parentName:"p"},"ignore")," files by adding an exclamation mark (",Object(i.b)("inlineCode",{parentName:"p"},"!"),") at the start of an expression."),Object(i.b)("h3",{id:"base-dir-string"},Object(i.b)("inlineCode",{parentName:"h3"},"base-dir")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},"base-dir: '/usr/your/project/folder/here'"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," The directory from which the process is started",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","With ",Object(i.b)("inlineCode",{parentName:"p"},"base-dir")," you specify the directory from which stryker4s starts and searches for mutations. The default for this is the directory from which the project is being run, which should be fine in most cases. This value can also be relative to the current working directory, E.G.: ",Object(i.b)("inlineCode",{parentName:"p"},"base-dir: submodule1")," to set the base-dir to a submodule of your project."),Object(i.b)("h3",{id:"reporters-string"},Object(i.b)("inlineCode",{parentName:"h3"},"reporters")," [",Object(i.b)("inlineCode",{parentName:"h3"},"string[]"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},'reporters: ["console", "html", "json", "dashboard"]'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," The ",Object(i.b)("inlineCode",{parentName:"p"},"console")," and ",Object(i.b)("inlineCode",{parentName:"p"},"html")," reporters",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","With ",Object(i.b)("inlineCode",{parentName:"p"},"reporters")," you can specify reporters for stryker4s to use. The following reporters are supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"console")," will output progress and the final result to the console."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"html")," outputs a nice HTML report to ",Object(i.b)("inlineCode",{parentName:"li"},"target/stryker4s-report-$timestamp/index.html"),". See the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-elements#mutation-testing-elements"}),"mutation-testing-elements repo")," for more information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"json")," writes a json of the mutation result to the same folder as the HTML reporter. The JSON is in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-report-schema"}),"mutation-testing-report-schema")," format."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dashboard")," reporter sends a report to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://dashboard.stryker-mutator.io"}),"https://dashboard.stryker-mutator.io"),", enabling you to add a fancy mutation score badge to your readme, as well as hosting your HTML report on the dashboard! It uses the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#dashboard-object"}),"dashboard.","*")," configuration options. See the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/General/dashboard"}),"dashboard docs")," for more info. The dashboard reporter only works on JDK 11 or higher.")),Object(i.b)("h3",{id:"excluded-mutations-string"},Object(i.b)("inlineCode",{parentName:"h3"},"excluded-mutations")," [",Object(i.b)("inlineCode",{parentName:"h3"},"string[]"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},'excluded-mutations: ["BooleanLiteral"]'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","With ",Object(i.b)("inlineCode",{parentName:"p"},"excluded-mutations"),", you can turn off certain mutations in the project. Allowed values are the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EqualityOperator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BooleanLiteral")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ConditionalExpression")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LogicalOperator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringLiteral")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MethodExpression"))),Object(i.b)("h3",{id:"thresholds-object"},Object(i.b)("inlineCode",{parentName:"h3"},"thresholds")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},"thresholds{ high=80, low=60, break=0 }"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default values:")," ",Object(i.b)("inlineCode",{parentName:"p"},"high=80"),", ",Object(i.b)("inlineCode",{parentName:"p"},"low=60"),", ",Object(i.b)("inlineCode",{parentName:"p"},"break=0"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","Specify the thresholds for mutation scores."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mutation score >= high"),": Success! Mutation score will be logged at the INFO level."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"high > mutation score >= low"),": Warning! Mutation score will be logged at the WARN level."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mutation score < low"),": Dangerously low! Mutation score will be logged at the ERROR level with an extra warning."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mutation score < break"),": Error! Stryker will exit with exit code 1, indicating a build failure.")),Object(i.b)("p",null,"Setting ",Object(i.b)("inlineCode",{parentName:"p"},"break=0")," (default value) ensures that the build will never fail."),Object(i.b)("h3",{id:"dashboard-object"},Object(i.b)("inlineCode",{parentName:"h3"},"dashboard.*")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},'dashboard { module="core" }'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default values:")," ",Object(i.b)("inlineCode",{parentName:"p"},'dashboard { base-url="https://dashboard.stryker-mutator.io", project="github.com/$USER/$PROJECT_NAME", report-type=full, version=$BRANCH }')," if filled by CI environment",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","Settings for the dashboard ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#reporters-string"}),"reporter"),". See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/General/dashboard"}),"dashboard docs"),". Note that the values should be kebab-case, not camelCase. If nothing is configured, Stryker4s will try to retrieve the values from one of the supported CI environments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Travis"),Object(i.b)("li",{parentName:"ul"},"CircleCI"),Object(i.b)("li",{parentName:"ul"},"GitHub actions")),Object(i.b)("h2",{id:"sbt-plugin-config"},"Sbt plugin config"),Object(i.b)("h3",{id:"timeout-factor-number"},Object(i.b)("inlineCode",{parentName:"h3"},"timeout-factor")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"number"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},"timeout-factor: 1.5"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"1.5"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Since:")," ",Object(i.b)("inlineCode",{parentName:"p"},"v0.10.0"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#timeout-duration"}),"timeout")),Object(i.b)("h3",{id:"timeout-duration"},Object(i.b)("inlineCode",{parentName:"h3"},"timeout")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"duration"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},"timeout: 5000"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"5 seconds"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Since:")," ",Object(i.b)("inlineCode",{parentName:"p"},"v0.10.0"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:")),Object(i.b)("p",null,"When Stryker4s is mutating code, it cannot determine indefinitely whether a code mutation results in an infinite loop (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Halting_problem"}),"Halting problem"),").\nIn order to battle infinite loops, a test run gets killed after a certain period of time. This period is configurable with two settings: ",Object(i.b)("inlineCode",{parentName:"p"},"timeout")," and ",Object(i.b)("inlineCode",{parentName:"p"},"timeoutFactor"),".\nTo calculate the actual timeout in milliseconds the, following formula is used:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"timeoutForTestRun = netTime * timeoutFactor + timeout\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"netTime")," is calculated during the initial test run. The result is logged on ",Object(i.b)("inlineCode",{parentName:"p"},"info")," level. For example: ",Object(i.b)("inlineCode",{parentName:"p"},"Timeout set to 5600ms (net 400 milliseconds)")),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"timeout-factor")," you can configure the allowed deviation relative to the time of a normal test run. Tweak this if you notice that mutants are prone to creating slower code, but not infinite loops.\n",Object(i.b)("inlineCode",{parentName:"p"},"timeout")," lets you configure an absolute deviation. Use it if you run Stryker on a busy machine and you need to wait longer to make sure that the code indeed entered an infinite loop. It can be configured using a number of milliseconds (",Object(i.b)("inlineCode",{parentName:"p"},"5000"),") or a duration string (",Object(i.b)("inlineCode",{parentName:"p"},"5s"),", ",Object(i.b)("inlineCode",{parentName:"p"},"5000ms"),")"),Object(i.b)("h3",{id:"max-test-runner-reuse-number"},Object(i.b)("inlineCode",{parentName:"h3"},"max-test-runner-reuse")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"number"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},"max-test-runner-reuse: 5"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," disabled",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Since:")," ",Object(i.b)("inlineCode",{parentName:"p"},"v0.10.0"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:")),Object(i.b)("p",null,"Restart the testrunner after every ",Object(i.b)("inlineCode",{parentName:"p"},"n")," runs. Not recommended unless you are experiencing memory leaks that you are unable to resolve."),Object(i.b)("h3",{id:"legacy-test-runner-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"legacy-test-runner")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},"legacy-test-runner: true"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"false"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Since:")," ",Object(i.b)("inlineCode",{parentName:"p"},"v0.10.0"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:")),Object(i.b)("p",null,"Use the sbt testrunner that was the default before ",Object(i.b)("inlineCode",{parentName:"p"},"v0.10.0"),". This testrunner is a lot slower, so it is recommended to only enable this if you are running into issues with the new testrunner. You might want to take a look at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#max-test-runner-reuse-number"}),Object(i.b)("inlineCode",{parentName:"a"},"max-test-runner-reuse"))," first."),Object(i.b)("p",null,"Cases where you might want to use this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your code has lots of 'static' mutants (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"val")," in an ",Object(i.b)("inlineCode",{parentName:"li"},"object"),") which the new testrunner can not test."),Object(i.b)("li",{parentName:"ul"},"You are running into a bug with the new testrunner."),Object(i.b)("li",{parentName:"ul"},"Your testframework does not work with the testrunner.")),Object(i.b)("p",null,"For the last two cases, please ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker4s/issues/new"}),"let us know by creating an issue"),"!"),Object(i.b)("h2",{id:"process-runner-config"},"Process runner config"),Object(i.b)("h3",{id:"test-runner-object"},Object(i.b)("inlineCode",{parentName:"h3"},"test-runner")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},'test-runner: { command: "sbt", args: "test" }'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Mandatory:")," Yes",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","With ",Object(i.b)("inlineCode",{parentName:"p"},"test-runner")," you specify how stryker4s can invoke the test runner.",Object(i.b)("br",{parentName:"p"}),"\n","Examples would be ",Object(i.b)("inlineCode",{parentName:"p"},"sbt test"),", ",Object(i.b)("inlineCode",{parentName:"p"},"mvn test")," or any other command to run your tests, including any parameters your tests might need."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"warning")," The process runner should only be used when your specific test framework is not supported. Due to performance and predictability reasons."),Object(i.b)("h3",{id:"scala-dialect-string"},Object(i.b)("inlineCode",{parentName:"h3"},"scala-dialect")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Config file:")," ",Object(i.b)("inlineCode",{parentName:"p"},'scala-dialect: "2.13"'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"scala3"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Since:")," ",Object(i.b)("inlineCode",{parentName:"p"},"v0.10.1"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:")),Object(i.b)("p",null,"Set the Scala dialect that should be used for parsing Scala files. The default is Scala 3 as most syntax is backwards-compatible with Scala 2. If you are running into issues with parsing older unsupported Scala syntax that we forgot about you can change this value."),Object(i.b)("p",null,"Valid values are Scala-versions without a patch version (",Object(i.b)("inlineCode",{parentName:"p"},"scala2.12"),", ",Object(i.b)("inlineCode",{parentName:"p"},"212"),", ",Object(i.b)("inlineCode",{parentName:"p"},"2.12"),", ",Object(i.b)("inlineCode",{parentName:"p"},"2"),"). The full list can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker4s/blob/master/core/src/main/scala/stryker4s/config/implicits/ConfigReaderImplicits.scala#L77"}),"here"),"."),Object(i.b)("h2",{id:"other-configuration-options"},"Other configuration options"),Object(i.b)("h3",{id:"log-level-string"},Object(i.b)("inlineCode",{parentName:"h3"},"log-level")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"INFO"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description:"),Object(i.b)("br",{parentName:"p"}),"\n","How to adjust the loglevel depends on how you run stryker4s:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sbt plugin",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"logLevel in stryker := Level.Debug")," to your build.sbt. Or use ",Object(i.b)("inlineCode",{parentName:"li"},"set logLevel in stryker := Level.Debug")," if you are in a sbt session."),Object(i.b)("li",{parentName:"ul"},"Options: ",Object(i.b)("inlineCode",{parentName:"li"},"Debug"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Info"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Warn"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Error")))),Object(i.b)("li",{parentName:"ul"},"Commandrunner",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Pass the loglevel as a parameter when running, like so: ",Object(i.b)("inlineCode",{parentName:"li"},"--debug")),Object(i.b)("li",{parentName:"ul"},"Options: ",Object(i.b)("inlineCode",{parentName:"li"},"--off"),", ",Object(i.b)("inlineCode",{parentName:"li"},"--trace"),", ",Object(i.b)("inlineCode",{parentName:"li"},"--debug"),", ",Object(i.b)("inlineCode",{parentName:"li"},"--info"),", ",Object(i.b)("inlineCode",{parentName:"li"},"--warn"),", ",Object(i.b)("inlineCode",{parentName:"li"},"--error"),", ",Object(i.b)("inlineCode",{parentName:"li"},"--all")," (not case sensitive)"))),Object(i.b)("li",{parentName:"ul"},"Maven plugin",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"As a command-line property, like so: ",Object(i.b)("inlineCode",{parentName:"li"},"mvn -Dorg.slf4j.simpleLogger.defaultLogLevel=warn stryker4s:run"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Options: ",Object(i.b)("inlineCode",{parentName:"li"},"trace"),", ",Object(i.b)("inlineCode",{parentName:"li"},"debug"),", ",Object(i.b)("inlineCode",{parentName:"li"},"info"),", ",Object(i.b)("inlineCode",{parentName:"li"},"warn"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"error")))),Object(i.b)("li",{parentName:"ul"},"Debug logging with ",Object(i.b)("inlineCode",{parentName:"li"},"-X")," or ",Object(i.b)("inlineCode",{parentName:"li"},"-debug"),": ",Object(i.b)("inlineCode",{parentName:"li"},"mvn -debug stryker4s:run"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"warning")," This option cannot be set from stryker4s.conf."),Object(i.b)("h2",{id:"excluding-specific-mutations"},"Excluding specific mutations"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Since:")," ",Object(i.b)("inlineCode",{parentName:"p"},"v0.9.0")),Object(i.b)("p",null,"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"@SuppressWarnings")," annotation, you can tell Stryker4s to ignore mutations in a code block. Annotate a code block with a ",Object(i.b)("inlineCode",{parentName:"p"},"@SuppressWarnings")," annotation, passing an array of mutation names you would like to ignore."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'/** No booleans will be mutated\n */\n@SuppressWarnings(Array("stryker4s.mutation.BooleanLiteral"))\nRequestLogger(logHeaders = false, logBody = false)(ResponseLogger(logHeaders = false, logBody = true)(httpClient))\n')),Object(i.b)("p",null,"All mutation names are the same as for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#excluded-mutations-string"}),"Excluded mutations")," and should be prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},'"stryker4s.mutation."'),"."))}s.isMDXComponent=!0}}]);