"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1691],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(r),y=o,f=m["".concat(l,".").concat(y)]||m[y]||p[y]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45783:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var n=r(22122),o=(r(67294),r(3905));const a={slug:"one-mutation-testing-html-report",title:"One mutation testing HTML report",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker","stryker4s","stryker.net","mutation testing elements"]},i=void 0,u={permalink:"/blog/one-mutation-testing-html-report",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2019-04-03-one-mutation-testing-html-report.md",source:"@site/blog/2019-04-03-one-mutation-testing-html-report.md",title:"One mutation testing HTML report",description:"If you've used Stryker before, you'll know that it produces a gorgeous report you can view in the browser.",date:"2019-04-03T00:00:00.000Z",formattedDate:"April 3, 2019",tags:[{label:"stryker",permalink:"/blog/tags/stryker"},{label:"stryker4s",permalink:"/blog/tags/stryker-4-s"},{label:"stryker.net",permalink:"/blog/tags/stryker-net"},{label:"mutation testing elements",permalink:"/blog/tags/mutation-testing-elements"}],readingTime:2.85,truncated:!0,prevItem:{title:"Announcing Stryker.NET 0.10 with .NET Framework support",permalink:"/blog/announcing-dotnet-framework-support"},nextItem:{title:"Announcing Stryker 1.0",permalink:"/blog/announcing-stryker-1-0"}},l=[],s={toc:l};function c({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you've used Stryker before, you'll know that it produces a gorgeous report you can view in the browser.\nIt works by generating HTML files based on the events raised by Stryker.\nDuring development of Stryker4s and Stryker.NET, we realized that producing the same report would be a lot of\nwork."),(0,o.kt)("p",null,"Instead of a new HTML reporter implementation for each Stryker framework, we've decided to move the logic of presenting the report to your browser.\nThat way, any framework can support an HTML report simply by producing a JSON file."),(0,o.kt)("p",null,"We call it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/mutation-testing-elements#readme"},"mutation testing elements")," and\nit is implemented using the mature\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/components-intro/"},"web components suite of features"),".\nYou can now use it in Stryker, Stryker.NET and Stryker4s"))}c.isMDXComponent=!0}}]);