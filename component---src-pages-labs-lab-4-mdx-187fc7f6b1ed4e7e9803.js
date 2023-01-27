"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1463],{9095:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return c}});var n=t(3366),i=(t(7294),t(4983)),o=t(4295),l=["components"],s={},r={_frontmatter:s},p=o.Z;function c(e){var a=e.components,t=(0,n.Z)(e,l);return(0,i.kt)(p,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Lab Overview"),(0,i.kt)("p",null,"In Lab 4, you will be introduced to Robot Shop. Robot Shop is a sample microservice application that you\ncan use as a sandbox to test and learn containerized application orchestration and monitoring techniques.\nWe will be utilizing the Stan’s Robot Shop for all the labs following this. Note that Robot Shop has been\npre-installed by your training team."),(0,i.kt)("p",null,"Stan’s Robot Shop is a sample microservice application that you can use as a sandbox to test and learn\ncontainerized application orchestration and monitoring techniques. We will be utilizing the Stan’s Robot Shop for all\nthe labs following this. Note that Robot Shop has been pre-installed by your training team."),(0,i.kt)("h2",null,"Step 1:"),(0,i.kt)("p",null,"SSH into thehost that was provided by your instructor, and browse to the installation directory for Robot Shop "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /home/ubuntu/robot-shop\n\n")),(0,i.kt)("h2",null,"Step 2:"),(0,i.kt)("p",null,"In your terminal window type "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,i.kt)("p",null,"Note: -d runs it in the background"),(0,i.kt)("h2",null,"Step 3:"),(0,i.kt)("p",null,"Validate that Stan’s Robot Shop is up by going to:"),(0,i.kt)("p",null,"http://(publicip):8080"),(0,i.kt)("p",null,"If successful, you will see the following page:"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"766px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.84722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEPklEQVQ4y22QV1MbBxSFlTGGJAZJqwIIVEBtV2VXddVWWvVVQaZIgIjtxLEdOwYhwLEFJi5x/Me/DISJX/Jw5tyZe+abc69JLGpE1QJRrUJE05FyN7NOtFwlquaRlBSSnCSipP5XN7toMo0vJHL14SOmxd4WZr3KUknD3GxhGWzzoFJhsVpjqdtjYcXF/KKZeYvAvNn6rywCC4KdBavtVj/anZjmf+D4/ALTA9c6Fu8GlkAIiz+AecXFiieAa1PE5RdxBURcoQirgTArIQlXOMLyZhDHmgfnuhen24fD7eW7RTOnb99hsrUNhFgcW0bFli8iuH0oWo9M75B0Z0jC2EXuD1H6u8R39pF3Roh1g3AySzClEs7kcYcjt8DpDVAo6zhrDaxBkSW7E2HdR7a5h9oakTZGKGqDWLJMLKMj53TC6RKiWiF+Ay3qSHoDT0zh3pKVyZu3mIRckdXdEQ6tgmV1Hbt7g1xzn7wxJt0+IN05INndJ9XbJ7F9iGjsEGv2idY7SO3+bVtfPMmcWWD6doZpac3DSm/A6vYeghRDWHVTKu9SaB2hGmNy/UdkWkMUfYt0d0Ss8RA5V0MpNUjpbcRcBbckM2excTa7wvRgdQ0hJOI6PMIaiyOseaile9QeTSn0HpPPdsilGqRiGglZQ0mUkdUaiUIDuVAjkCrijia4Z7MzuW3oD+KsNXHkS1g2Ati9AdqlPeqPLtBqBxQjVQpZAzXbRknXSRcN5HyTSK5OOKsj5uv4FJU5u5PJu0tMZncAwSdiXQ9g9Qaxe0V65QP6L6+pj0+pt39CLz2kkO+hVQZo9W3ihTaxUptoqU28bOCRVe471jm7/IBp0RPEuiFi3ZQwb4jYvBK9ypid86+0nl/R7v9Kt3lAszGi2hiSLW8RL3VJ6ltEtQ7hQguPkuee083Z+4+YlrwhBH/kFmjZFHFsRjHUffaeXbG1/Rs9bchw+xeGw6do+i752g7Z2jaKPiCQaxHMt9nIaMwtezi//oTJ7Atj80f+gzqDMu3RGb0nl3RevKfz4pL+8TXd0z+p/H5J6fWM/OQK+ekE8dkU+fmUoNbivtPN9OojppszhWAUIRDF6pdwhhO0H88wXnzGeP2Z1slnWm++0rr4i9qbL2izr6hnH8gez0hMZsROZnirPeaXPRzPrjGZAxFs4ThCOIY1FMUhJmh2XtEZTOiPz2iOp1T2TyiNJ5SfTMk/mZDujskYB4j6gHB1gE+tcn99g9Obky0BCbskYxdlBDHGspjAaL9ksHdGd3dCffeE4sNXqD//gTo+JlcbkqkPkas7hIpd/LmbH1ZY8Gxy8ekLJiGWxBFN3EJtksxyJEmpvE+l+Zhi4wi1dYSij4i3xyQ6h0iFDmKpR7BgIGoG/nyTtUSB7z2BO2CmiD2WRhATCNKdwgpCSEYIy3eufPO7jE36lndEUyx4w5x/+pt/AGV3TafVdfedAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-1-Day-Partner-Workshop/static/fe352d2618cefc3937acf89adc2cecae/c6902/4.1.png",srcSet:["/Instana-1-Day-Partner-Workshop/static/fe352d2618cefc3937acf89adc2cecae/7fc1e/4.1.png 288w","/Instana-1-Day-Partner-Workshop/static/fe352d2618cefc3937acf89adc2cecae/a5df1/4.1.png 576w","/Instana-1-Day-Partner-Workshop/static/fe352d2618cefc3937acf89adc2cecae/c6902/4.1.png 766w"],sizes:"(max-width: 766px) 100vw, 766px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Feel free to navigate around and buy some robots!"),(0,i.kt)("h2",null,"Step 4:"),(0,i.kt)("p",null,"Find your host in the Instana UI on the Infrastructure screen."),(0,i.kt)("p",null,"Hover your mouse over the host and notice all the entities being shown."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"522px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"105.20833333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAADW0lEQVQ4y42VS08TURiGu3fpD3DlwsQYjUo0SKwttB1aLgWkdG5t5wwt7YAgIRoTDYlNCSIUb5Eao0GJgT8gEkAEISILIwRBFBFEJSbqxj/wmnNmBmeKJi5Ozul0zvN973cbRyCWhDscQ4lAUMwrbDfP5m/9HINHVG3PzJ0+N88OCizm7RBzeUWVGavV2qCea4c7HN02mG80D6jsAJYICty8iuNBGWGtAaTtDAqr/wDzvTXPDqtk80W6u3kF5bEIOrKNeDmTwex0Gi2X6uEMRZkiq2fWENg8ZECBwFVHUF0vYnb6Mr6t57C52oettTv4vHoDV2+k4M6Lp3lmksuUJIptVhQ4QwSCJmLzXS++fOjD2vJNLLzKYm4ui4dDrQilmuCTE/8pWSAMGE6JWHvTjR+fclheuIbhsQwmprpwd6AFFSQBj1i/I4kWoEWyqAN5TcTHJR34Zr4XI+MdmHnRg/7BVvijKnxSnEk1Y76d5TIlZa8pQ7LUFMHG2ywDLs1fw5OxDEbG0sj1N8IjRnGyNoKiGhGucIwptMXQ/RegoElYX+7B940cPq7cQnuXhsKKGpyoqEJBoAaHuSAOeiqwe38Bdu09iEO+ILhIwh5DJsEA8inRAPZhbeUWOm82gxNqUVIXxJHSKgY4UFKOfU4Oe465cDRwGj6pfmdSzCxLGgV24+cmjWEWw2NpjD/L4N5AE3yCzOrxVF10R4vqklkMdFipRODlVUSaJJYUClycz+LxaBpTM124/6gFQRJHeTQOr0i2S85cDr9R2BTklwg4icBZZ5bNVUuWM5icvoK7A2cQ0prByQmUigp739oYjqCaNP5QbZIFTcDWai8DLr7OYng0jeczXXgw2ILqRApeKc5AnEjgl/V7THIlSaJUUmydQuVzcgSDQ+fx6+ttvF+6jompDjx9lkY624ByktTr0Oh5erdMJvCJFsnUCrWmzzfCoEU1Mto7NUxNXkZP7iz4RsKawFp3NI40XHR58juFuS8Z7gv6s6LTMeYtzagzZCgx4kU9okDP3+YhrUE3K2wd6jO89UqqPq6M+HoNoxdb4+i+kEC6LY5glMAV/sdwMKd3vrc+I/icIS0gE1RG9OUV/jEcrPONeus1LgZMkKhuD1cXr+BUWNE9s3xTfgPrLpsg2lYtXAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-1-Day-Partner-Workshop/static/f9757ab3c9ae1969601150566037cab7/4fe5f/4.2.png",srcSet:["/Instana-1-Day-Partner-Workshop/static/f9757ab3c9ae1969601150566037cab7/7fc1e/4.2.png 288w","/Instana-1-Day-Partner-Workshop/static/f9757ab3c9ae1969601150566037cab7/4fe5f/4.2.png 522w"],sizes:"(max-width: 522px) 100vw, 522px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Open the host dashboard and see all of the components of Robot Shop visible."),(0,i.kt)("p",null,"Click on a few of them to open their respective dashboards and find the metrics streaming in automatically."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"378px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"129.5138888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAEA0lEQVRIx3VV244bRRD1/7/xAFIAKZECEkEgQCLiASEh8QCEhCSbZHeTTfYSr+259Uz39PS9Zw6qmrVjJ2SkUnW5x8d1Oae8iDFB9ppNSIV+MBCtRNW06FSPdVFxzPetRC06NtEpSKVhfYBuNghWg56F9wHlpsHJ8RmePjnGxcUSL8/eYHm9xsXVWxyfvsLl1RJvzi/x4uQljp4f8/3pq9dYbQqENOL62Z9Q5XIGdCngTC5x0a9xOWxwJQs8OznHw6NTtn+enuLh01M8OnqJxy/O8O+zV3j8nOwMD56c4NHRKeLEWJimCQvpNO6/+QO/Xv6F35Z/4/fXD3H321/wxdc/4dbdH/DJl/fw6e3v8PlXP+L2Nz/j1t3Z37l3H5/d+Z7PejAYx3HO0FiHqhYgTzYYB+M8hpvY+YDBWCg9cJxzhuo1tB4QY+TYh8B+mgjQOR4ANVkbx002PrDfGoGrwcKHyFl0NLxec1ZU5s5TyYO12FQ1atFCGwsX4gGY9ZE/V4NhwBACtNYMSM84Tgy2tYWwCWXvsClKrMsay9UGUg87YPL9HqBzHm0n0YgWKY+IKbMRMGW6UC6i6S16PfCXuHfOH2RJMYFa5+G8n9/tNUJMbPRDVC71dHEtA87rAXXToBIdfMxwIR2UPGc4G925mLjP/WB32aecEULEwoSEShkUVYVVUWFT1qyK/ZKph71xTI+yqlDXDYy1O+5RdvTQtBfaJy5ZdBJ127H8COD9KWuatNY4Pz9nE0LsAKd9wN4lVNKgKCueNg3Ex/TBlLUxUC5h1Sg4a3Zg+54B6aVSmnly3bwE/o+H1CvyTdtx88c9quxK9gGLeoh4K+ahFHXDoPtgcw8dNz7E+K5v477NsiNV3fTQoKxrVkxFBCfJbQlORN7jIXaZzerAzfmgh612kKpHq3regR/jofERymdIl9CHkY3O0mekkUr2M2A3OBRVzdnRQPblt6UNcXDOOGJwHuuqQSk6DC6gkQrWe14QC2EiVq1BIwTKRnCWHwMklXjnMObMevbOc6k5j5jGEZmktwWUSvFAWtl/sCAGXmsWnQk4vlihKEqoYFC3LbpOIqiSVULAi6UMuKgHVHXNy2Em9SEgTblnLlqslleQ9QbeSgyqgVUCqa+RgpvXVzNErDqDWgiestLmvfUVbmhjeXVhSkCOQIqzzxET+WmcAankdTewltdlhVaqA6Uc9DBEpHFEzBlxnI3jMTMYcZKJfX3TQ9IxKWF/OeyUwoABNjmYaOGyh02ezyY55Cm/A1ySUoRAUQtWS3fzf7vl45bYxgV0Q0CrPda1RCF6SBNQtprv+E+Kxp1yQswjb+DtFvbb5RkTxwRMcWZ6TKgawWIYJzCdYkoM+B9IV8erUw25xwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-1-Day-Partner-Workshop/static/8fe593bb3cd832ee597eb87dba2abde1/962e8/4.3.png",srcSet:["/Instana-1-Day-Partner-Workshop/static/8fe593bb3cd832ee597eb87dba2abde1/7fc1e/4.3.png 288w","/Instana-1-Day-Partner-Workshop/static/8fe593bb3cd832ee597eb87dba2abde1/962e8/4.3.png 378w"],sizes:"(max-width: 378px) 100vw, 378px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"758px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuElEQVQoz22S247TMBCG8/5PhRAChDhoBRI3XCB1aZu0aeLDHDy28yM7XbQsRPqUzIwz/ucwHMYzxusNiwtwnrD6CB8Ilst/yY1SkSxDNWFZHWIkWMlgVQzfTj/w7vNXvHr7CW8+POD1+y/4+PAdJApJBtHU4YYoiGWP3f3dZrnbisF7QmTpBGI4t6KUjJwNmgzJDGaGUmuPn8cJ1/nW/TnnjllGLrv64XDaSz5fZlxXj5UY0RKiUFcUVDqpln6pdytEApgCEnkoBXD0KElQSsHweB4xXW84TVe4EBDZw4UFt7CC2ndc4eOKSK6XlC3D1JCTwZ6jqSsdfh6OmOZbV7n6AFWGCoMbKhBhiEq3W6/43r/WjpewSEv4C+Nl7gnnxcEFAqmBn0GSQJrgI2NxvpfehtSG85IhkPRpRlYsgTBNI1gIKoQkEcKErVYAW//h8XiE8w4icvejx9rTBjXw00r0GwVJCEIBQv4PiePuV4VaQUwFYhliFZorrGzQvKHWuidsCntCTQiS4FjhJe1wQ+FoL3MhwWmN/T15wiUQ5sAYXdwVtv16oj5j27Z/aP62Go26/X1+Z8NvbKxTy/rU5qQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-1-Day-Partner-Workshop/static/9020e4e327f3f71858699f54524dbba9/ea648/4.4.png",srcSet:["/Instana-1-Day-Partner-Workshop/static/9020e4e327f3f71858699f54524dbba9/7fc1e/4.4.png 288w","/Instana-1-Day-Partner-Workshop/static/9020e4e327f3f71858699f54524dbba9/a5df1/4.4.png 576w","/Instana-1-Day-Partner-Workshop/static/9020e4e327f3f71858699f54524dbba9/ea648/4.4.png 758w"],sizes:"(max-width: 758px) 100vw, 758px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("h2",null,"Step 5:"),(0,i.kt)("p",null,"Now we will generate the Robot Shop Lead."),(0,i.kt)("p",null,"Browse to a directory within the robot-shop directory called “load-gen”"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /home/ubuntu/robot-shop/load-gen\n")),(0,i.kt)("p",null,"In your terminal window type: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./load-gen.sh -d\n")),(0,i.kt)("p",null,"Execute the following command to confirm that the loadgen container is running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker ps | grep loadgen\n")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"11.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAaUlEQVQI102LywoDIRAER8UHKg5xoiYSk1P+/xM7rLBhD01VHZqen4H3d+Kx7pB5gwxBaw29dzAzUkqotaKUgpwzvPcgos2jQwh/t9aCeDDmEqyXINaIyBHOuX26TmsNYwyUUrsPnn31H3+LLKDmKjajAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-1-Day-Partner-Workshop/static/e660318c0986e68700ff3d62dd2a59da/3cbba/4.5.png",srcSet:["/Instana-1-Day-Partner-Workshop/static/e660318c0986e68700ff3d62dd2a59da/7fc1e/4.5.png 288w","/Instana-1-Day-Partner-Workshop/static/e660318c0986e68700ff3d62dd2a59da/a5df1/4.5.png 576w","/Instana-1-Day-Partner-Workshop/static/e660318c0986e68700ff3d62dd2a59da/3cbba/4.5.png 1152w","/Instana-1-Day-Partner-Workshop/static/e660318c0986e68700ff3d62dd2a59da/0b124/4.5.png 1728w","/Instana-1-Day-Partner-Workshop/static/e660318c0986e68700ff3d62dd2a59da/e0c97/4.5.png 1780w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"We will move on for now, but we will find the robot shop data in the Instana UI a little later in the training."))}c.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(7294),i=t(8650),o=t.n(i),l=t(5444),s=t(9403),r=t(3321),p=t(5900),c=t.n(p),d=function(e){var a,t=e.title,i=e.theme,o=e.tabs,l=void 0===o?[]:o;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=l.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===i,a))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},g=function(e){var a=e.relativePagePath,t=e.repository,i=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=t||i,s=o.baseUrl,r=o.subDirectory,p=s+"/edit/"+o.branch+r+"/src/pages"+a;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},m=t(4275),A=t(1721),b=function(e){function a(){return e.apply(this,arguments)||this}return(0,A.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var a,t=o()(e,{lower:!0,strict:!0}),r=t===s,p=new RegExp(s+"/?(#.*)?$"),d=i.replace(p,t);return n.createElement("li",{key:e,className:c()((a={},a["PageTabs-module--selected-item--aBB0K"]=r,a),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":a},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},a}(n.Component),h=b,u=t(2881),k=t(6958),w=t(36),y=function(e){var a=e.date,t=new Date(a);return a?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var a=e.pageContext,t=e.children,i=e.location,p=e.Title,c=a.frontmatter,A=void 0===c?{}:c,b=a.relativePagePath,w=a.titleType,f=A.tabs,E=A.title,N=A.theme,x=A.description,S=A.keywords,v=A.date,B=(0,k.Z)().interiorTheme,W=(0,l.useStaticQuery)("2456312558").site.pathPrefix,I=W?i.pathname.replace(W,""):i.pathname,D=f?I.split("/").filter(Boolean).slice(-1)[0]||o()(f[0],{lower:!0}):"",C=N||B;return n.createElement(r.Z,{tabs:f,homepage:!1,theme:C,pageTitle:E,pageDescription:x,pageKeywords:S,titleType:w},n.createElement(d,{title:p?n.createElement(p,null):E,label:"label",tabs:f,theme:C}),f&&n.createElement(h,{title:E,slug:I,tabs:f,currentTab:D}),n.createElement(u.Z,{padded:!0},t,n.createElement(g,{relativePagePath:b}),n.createElement(y,{date:v})),n.createElement(m.Z,{pageContext:a,location:i,slug:I,tabs:f,currentTab:D}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-4-mdx-187fc7f6b1ed4e7e9803.js.map