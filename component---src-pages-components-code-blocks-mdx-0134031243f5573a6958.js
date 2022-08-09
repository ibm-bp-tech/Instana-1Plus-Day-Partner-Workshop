"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8416],{2678:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),o=["components"],s={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},m=i("PageDescription"),d=i("Title"),c={_frontmatter:s},p=l.Z;function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"title: Code blocks\ndescription: Usage instructions for the Code blocks component"),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"When authoring markdown using the Carbon Gatsby theme, code blocks have some\nextra super powers you can take advantage of. We provide carbon-themed syntax\nhighlighting as well as optional ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," features.")),(0,r.kt)("h2",null,"Example"),(0,r.kt)(d,{mdxType:"Title"},"Horizontal overflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"},"## Path and src w/ overflow\n\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar.\n")),(0,r.kt)(d,{mdxType:"Title"},"Vertical overflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"},"## Path and src w/ overflow\n\nThis example demonstrates the show more button. This example demonstrates the\nshow more button. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button. This example\ndemonstrates the show more button. This example demonstrates the show more\nbutton. This example demonstrates the show more button.\n")),(0,r.kt)("h2",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```markdown path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh\n### Path and src\n\nThis code snippet provides both a `path` and a `src`.\n```\n")),(0,r.kt)("h3",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"propType"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"language"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"},"Available languages."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"src"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The full url of a relevant link (source)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A string indicating the filename or path. Due to markdown limitations this can only be a single word")))))}h.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),l=a.n(r),o=a(5444),s=a(5426),i=a(4311),m=a(5900),d=a.n(m),c=function(e){var t,a=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,s=l.baseUrl,i=l.subDirectory,m=s+"/edit/"+l.branch+i+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},h=a(4275),u=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===s,m=new RegExp(s+"/?(#.*)?$"),c=r.replace(m,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component),b=g,k=a(2881),f=a(6958),w=a(36),x=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,d=t.frontmatter,u=void 0===d?{}:d,g=t.relativePagePath,w=t.titleType,v=u.tabs,N=u.title,y=u.theme,T=u.description,E=u.keywords,P=u.date,C=(0,f.Z)().interiorTheme,D=(0,o.useStaticQuery)("2456312558").site.pathPrefix,Z=D?r.pathname.replace(D,""):r.pathname,L=v?Z.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",H=y||C;return n.createElement(i.Z,{tabs:v,homepage:!1,theme:H,pageTitle:N,pageDescription:T,pageKeywords:E,titleType:w},n.createElement(c,{title:m?n.createElement(m,null):N,label:"label",tabs:v,theme:H}),v&&n.createElement(b,{title:N,slug:Z,tabs:v,currentTab:L}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(x,{date:P})),n.createElement(h.Z,{pageContext:t,location:r,slug:Z,tabs:v,currentTab:L}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-components-code-blocks-mdx-0134031243f5573a6958.js.map