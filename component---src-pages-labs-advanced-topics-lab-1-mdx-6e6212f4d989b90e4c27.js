"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3884],{867:function(e,t,a){a.r(t),a.d(t,{Title:function(){return r},_frontmatter:function(){return o},default:function(){return d}});var n=a(5987),l=(a(7294),a(4983)),s=a(4295);const i=["components"],r=()=>(0,l.kt)("span",null,"Lab 1 - Custom Events ",(0,l.kt)("br",null)),o={},c={Title:r,_frontmatter:o},p=s.Z;function d(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,l.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Lab Overview"),(0,l.kt)("p",null,"In this lab you will create a custom event. We will be creating an issue type event, which triggers when something out of the ordinary occurs. In this case, it triggers when a component of our application is offline. At the end of this lab, you will be able to verify that your event has triggered and review the event."),(0,l.kt)("h2",null,"Step 1:"),(0,l.kt)("p",null,"Click Settings. "),(0,l.kt)("p",null,"Then click Events. "),(0,l.kt)("p",null,"Lastly, click New Events. "),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACRElEQVQ4y52TS2sUQRSFWxFduBQ3QiBqEBVF3Pv/NKi4EkFIohuZCAETE9E/EDSIwVcgmxDN6MTYM11d7/eRW51JoksvHKopuk5/p+7t6sTk1TTbW8BwxPL2zg+wVsCHCOfDf6k6PnE5zc4vQCuTB7t7YFwgpYwQIkJMiDGVD4yfQ4zwIfyjeKDq1IVraf7lKwDITEjEGMGFgrUO2li0XMA6ejYQstvPANJRpYSUcwGpTk/dSM8WlyGB3G8YjLXFwHlfzImIikistfC07x2S0cjGIFrbvRdCWQthb2mlECql4ZzHuJqmwWB3Fzv9fjEbl9/axLeNT/j+9SPk5/ewPhRDAqlOnj80ZC0vB3PO5aAQEnt7v6GURCLS/f0sGMygD/1zB7H+BWMdpFKIKY0JuzvkQpSoZEhncwqQWoPbAGEDuPFFwkVkHBZdg9Jduqo6O5l6ix0h56IjODB0EEqCKQdpfZGwHsp290vU1BBjLCgdNfAvQqktXIwHXQzBouEcNddgyhYNhQHXrowVzR2NilQaw6YtM1wdOzeVei+WgRgyq2vAu84uJ6TowJVEo1yJ2moHQatxYGQaU0lDd0iEXEhUly5eSfPTt7E8M5dnpu/jyd0HeHznHpYePgLaGtyYQkZRyUzsR3chlibQ/I0jF8Nb12+mN0/nsLW+nr+srmJzbQ0bb99he/0DIhcYNQK10Gj2I5MaaQ9/txLZYDSOXJ2ZSM9XXnfToA2OVkq+RK6lxUh1GpJZiCUqNYRWrcmQoWEt/gAi5sCArDhhmAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 9",title:"Lab 9",src:"/Instana-Advanced-Partner-Workshop/static/321f22a88928040cd091d2142e787f54/3cbba/lab9.1.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/321f22a88928040cd091d2142e787f54/7fc1e/lab9.1.png 288w","/Instana-Advanced-Partner-Workshop/static/321f22a88928040cd091d2142e787f54/a5df1/lab9.1.png 576w","/Instana-Advanced-Partner-Workshop/static/321f22a88928040cd091d2142e787f54/3cbba/lab9.1.png 1152w","/Instana-Advanced-Partner-Workshop/static/321f22a88928040cd091d2142e787f54/0b124/lab9.1.png 1728w","/Instana-Advanced-Partner-Workshop/static/321f22a88928040cd091d2142e787f54/9d3b4/lab9.1.png 1770w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("h2",null,"Step 2:"),(0,l.kt)("p",null,"Configure your Event with the following name: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL is Offline -<your last name> \n")),(0,l.kt)("p",null,"Enter Description of the Event to:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL has been offline for 1 minute  \n")),(0,l.kt)("h2",null,"Step 3:"),(0,l.kt)("p",null,"Configure the settings the following way: "),(0,l.kt)("p",null,"Set the Issue Severity to Critical. "),(0,l.kt)("p",null,"Set the Grace Period to 5s. "),(0,l.kt)("p",null,"Set Condition Source to System Rules. "),(0,l.kt)("p",null,"For System Rules, select: Hosts that do not have matching entities on them. "),(0,l.kt)("p",null,"For Entity Type drop down, select MySQL DB. "),(0,l.kt)("p",null,"Change the Entity Label Operator to Contains. "),(0,l.kt)("p",null,"Enter MySQL in the Entity Label field. "),(0,l.kt)("p",null,"Select 1 min in the Offline for drop down. "),(0,l.kt)("p",null,"Select your Application Perspective for the Scope. "),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABcElEQVQoz5VTy07DMBDMx/ABSBUSQgIkxDdygCMHxB+BQko5t8VJEzt+rQftJk7bQA+sNFrH9o7Hs06htIZxHkQJkQhENGVK6RhE4FhvNqiqCqvVFz5XK3wsl6ibRtYKpWq0bYfeOjjvYZ2Hcx7eh4k8w4cgRQ+PT1hcXuHm7h4X17c4O1/g+eV1IOyMgdZGCEOIiJELo4xDHMBzMg5RlK63W7yVJcpqibKq8F6WYGEDYadFUUaz62CdE5IEiLLeWvlmW/gWpyKlhKLjzUTywYijT4ebhGxcp+zvDLwmCttOT4SsYAAd+Zfn4q/5Y48ZRdPsYIwZ0PdiPHvImZXFeOjlMbLP8cDnQmuNwCQ+jGQB2Vc5lTeGiHqnoW2EcQRjCT3nvp+atie0dro/p+zlHHs7Row1Q+G+ttgqhbZtpXt8wl++zBuVg8Ym5ocvhEop1HWNb6XgxydxSuUcLkTYECSzVWxNwX/J/srpX5hHiAk/YeykgB2zBwMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 9",title:"Lab 9",src:"/Instana-Advanced-Partner-Workshop/static/f75f2c1acf061c1f5ccd993a4aea628f/3cbba/9.2.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/f75f2c1acf061c1f5ccd993a4aea628f/7fc1e/9.2.png 288w","/Instana-Advanced-Partner-Workshop/static/f75f2c1acf061c1f5ccd993a4aea628f/a5df1/9.2.png 576w","/Instana-Advanced-Partner-Workshop/static/f75f2c1acf061c1f5ccd993a4aea628f/3cbba/9.2.png 1152w","/Instana-Advanced-Partner-Workshop/static/f75f2c1acf061c1f5ccd993a4aea628f/0b124/9.2.png 1728w","/Instana-Advanced-Partner-Workshop/static/f75f2c1acf061c1f5ccd993a4aea628f/6358c/9.2.png 1876w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("p",null,"Step 4: "),(0,l.kt)("p",null,"Stop the MySQL Container on your host. "),(0,l.kt)("p",null,"SSH into your host. "),(0,l.kt)("p",null,"Execute the following command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo docker stop robot-shop_mysql_1 \n")),(0,l.kt)("h2",null,"Step 5:"),(0,l.kt)("p",null,"Verify that your Event has triggered. "),(0,l.kt)("p",null,"Select Issues. "),(0,l.kt)("p",null,"Review Event. "),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABRklEQVQoz61SbUrFMBDs/Y/gbbyBoqgoqCCI2PfS9CPJfiUjm1dURPxlYEgzSSY7Ox2OIdq8bFCRJqIQtU+w6J8oxIjzghBnEDOSEIbMavkwIt9ctjIFiFXkQv2wqELVfoXveQHMgpxLvyOmGJaU7Pj2hvTy3DglsCqIuL/oVchf0C+4sHNDWjebo1emDf8wBlOzZgYTadUMHbWi2o6f331t3/YUFUBdH1GfzjBkYiP3z9LYbRKDS9lBfZZ9pnzihejrTM6nkMZXlMtzDDwFo3BACYfG4QhZZqidUvY+EsveT9l5xbJunfc19d4JyINyy3pzYfJ4j+X2qm131+CHW1QRWK1Y1w1byli3hEKEWltP2AWdM6v9MQ/DzPzXw6CcjXLC+D62w/uIGGMX88tTnLugD++X815VmCKOYeqC2W2zoLbWXX0AMka+AH613GsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 9",title:"Lab 9",src:"/Instana-Advanced-Partner-Workshop/static/56f5647c93f78144ca3cc79eab0f6648/3cbba/lab9.3.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/56f5647c93f78144ca3cc79eab0f6648/7fc1e/lab9.3.png 288w","/Instana-Advanced-Partner-Workshop/static/56f5647c93f78144ca3cc79eab0f6648/a5df1/lab9.3.png 576w","/Instana-Advanced-Partner-Workshop/static/56f5647c93f78144ca3cc79eab0f6648/3cbba/lab9.3.png 1152w","/Instana-Advanced-Partner-Workshop/static/56f5647c93f78144ca3cc79eab0f6648/0b124/lab9.3.png 1728w","/Instana-Advanced-Partner-Workshop/static/56f5647c93f78144ca3cc79eab0f6648/f0200/lab9.3.png 2146w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),l=a(8650),s=a.n(l),i=a(5444),r=a(9403),o=a(3321),c=a(5900),p=a.n(c);var d=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:o}=a||l,c=s+"/edit/"+o+r+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(4275),u=a(1721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),r=t===l,o=new RegExp(l+"/?(#.*)?$"),c=a.replace(o,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var f=b,h=a(2881),A=a(6958),k=a(36);var v=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:l,Title:c}=e;const{frontmatter:p={},relativePagePath:u,titleType:b}=t,{tabs:k,title:w,theme:y,description:E,keywords:I,date:Q}=p,{interiorTheme:S}=(0,A.Z)(),{site:{pathPrefix:P}}=(0,i.useStaticQuery)("2456312558"),x=P?l.pathname.replace(P,""):l.pathname,N=k?x.split("/").filter(Boolean).slice(-1)[0]||s()(k[0],{lower:!0}):"",C=y||S;return n.createElement(o.Z,{tabs:k,homepage:!1,theme:C,pageTitle:w,pageDescription:E,pageKeywords:I,titleType:b},n.createElement(d,{title:c?n.createElement(c,null):w,label:"label",tabs:k,theme:C}),k&&n.createElement(f,{title:w,slug:x,tabs:k,currentTab:N}),n.createElement(h.Z,{padded:!0},a,n.createElement(g,{relativePagePath:u}),n.createElement(v,{date:Q})),n.createElement(m.Z,{pageContext:t,location:l,slug:x,tabs:k,currentTab:N}),n.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-advanced-topics-lab-1-mdx-6e6212f4d989b90e4c27.js.map