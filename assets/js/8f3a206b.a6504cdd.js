"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1067],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(22122),o=(n(67294),n(3905));const a={slug:"announcing-stryker-4-beta-mutation-switching",title:"Announcing Stryker 4.0 Beta",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i=void 0,u={permalink:"/blog/announcing-stryker-4-beta-mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-07-13-announcing-stryker-4-beta-mutation-switching.md",source:"@site/blog/2020-07-13-announcing-stryker-4-beta-mutation-switching.md",title:"Announcing Stryker 4.0 Beta",description:"We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.",date:"2020-07-13T00:00:00.000Z",formattedDate:"July 13, 2020",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:6.36,truncated:!0,prevItem:{title:"Announcing Stryker 4.0 - Mutation Switching",permalink:"/blog/announcing-stryker-4-mutation-switching"},nextItem:{title:"Integrating Stryker.NET in your azure pipelines",permalink:"/blog/azure-pipelines-integration"}},c=[],l={toc:c};function s({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0."),(0,o.kt)("p",null,'This beta is a huge milestone because it means a fundamental shift in the way Stryker works internally. It now uses "Mutation switching", a technique that can improve performance.'))}s.isMDXComponent=!0}}]);