"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8610],{46165:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(67294),l=a(86010),n=a(5227),s=a(36742),i="sidebar_2ahu",c="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",g=a(24973);function h({sidebar:e}){return 0===e.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},e.title),r.createElement("ul",{className:o},e.items.map((e=>r.createElement("li",{key:e.permalink,className:m},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}var E=a(571);var p=function(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return r.createElement(n.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(E.Z,{toc:a})))))}},43146:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(67294),l=a(86010),n=a(3905),s=a(24973),i=a(36742),c=a(13018),o=a(60637),m=a(41217),d=a(86146),u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var E=function(e){const t=function(){const{selectMessage:e}=(0,c.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:E,metadata:p,truncated:f,isBlogPostPage:b=!1}=e,{date:v,formattedDate:_,permalink:N,tags:k,readingTime:Z,title:T,editUrl:w}=p,{author:L,image:y,keywords:P}=E,C=E.author_url||E.authorURL,I=E.author_title||E.authorTitle,M=E.author_image_url||E.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:P,image:y}),r.createElement("article",{className:b?void 0:"margin-bottom--xl"},(()=>{const e=b?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:u},b?T:r.createElement(i.Z,{to:N},T)),r.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:v},_),Z&&r.createElement(r.Fragment,null," \xb7 ",t(Z))),r.createElement("div",{className:"avatar margin-vert--md"},M&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:C},r.createElement("img",{src:M,alt:L})),r.createElement("div",{className:"avatar__intro"},L&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:C},L)),r.createElement("small",{className:"avatar__subtitle"},I)))))})(),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:o.Z},a)),(k.length>0||f)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[h]:b})},k.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((({label:e,permalink:t})=>r.createElement(i.Z,{key:t,className:"margin-horiz--sm",to:t},e)))),b&&w&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:w})),!b&&f&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:p.permalink,"aria-label":`Read more about ${T}`},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},69404:function(e,t,a){a.r(t);var r=a(67294),l=a(36742),n=a(46165),s=a(43146),i=a(24973),c=a(13018);t.default=function(e){const{metadata:t,items:a,sidebar:o}=e,{allTagsPath:m,name:d,count:u}=t,g=function(){const{selectMessage:e}=(0,c.c2)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),h=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(u),tagName:d});return r.createElement(n.Z,{title:h,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:o},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(l.Z,{href:m},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((({content:e})=>r.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.createElement(e,null)))))}},86146:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),l=a(24973),n=a(22122),s=a(86010),i="iconEdit_2_ui";var c=({className:e,...t})=>r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,e),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function o({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return c},Z:function(){return o}});var r=a(67294),l=a(86010);var n=function(e,t,a){const[l,n]=(0,r.useState)(void 0);(0,r.useEffect)((()=>{function r(){const r=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(r){let a=0,s=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!s;){const e=i[a],{href:c}=e,o=decodeURIComponent(c.substring(c.indexOf("#")+1));r.id===o&&(l&&l.classList.remove(t),e.classList.add(t),n(e),s=!0),a+=1}}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},s="tableOfContents_35-E";const i="table-of-contents__link";function c({toc:e,isChild:t}){return e.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children}))))):null}var o=function({toc:e}){return n(i,"table-of-contents__link--active",100),r.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar")},r.createElement(c,{toc:e}))}}}]);