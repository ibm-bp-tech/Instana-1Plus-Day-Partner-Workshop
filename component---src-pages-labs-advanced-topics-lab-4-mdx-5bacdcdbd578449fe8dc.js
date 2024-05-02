"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[7193],{5586:function(e,a,t){t.r(a),t.d(a,{Title:function(){return r},_frontmatter:function(){return l},default:function(){return p}});var n=t(5987),s=(t(7294),t(4983)),i=t(4295);const o=["components"],r=()=>(0,s.kt)("span",null,"Lab 4 - Synthetic Monitoring ",(0,s.kt)("br",null)),l={},c={Title:r,_frontmatter:l},d=i.Z;function p(e){let{components:a}=e,t=(0,n.Z)(e,o);return(0,s.kt)(d,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",null,"Lab Overview"),(0,s.kt)("p",null,"Synthetic monitoring is a proactive approach to monitoring the performance and functionality of applications, websites, and APIs. It involves simulating real user interactions and measuring how the system responds. This allows you to identify and fix issues before they impact real users."),(0,s.kt)("p",null,"This lab focuses on  Instana feature - Synthetic Monitoring. Key capabilities that we will cover:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Setting up the synthetic “Point of Presence”. This is the component that executes the synthetic test."),(0,s.kt)("li",{parentName:"ol"},"Test Availability of your website using API Simple Test ")),(0,s.kt)("p",null,"Before we can create any synthetic tests, we must first setup a synthetic “Point of Presence” or “PoP server” to playback our synthetic tests. Many customers deploy two or more “Points of Presence” so that they can compare the response time and availability from different network zones. "),(0,s.kt)("p",null,"In the lab, we will begin by installing the “Synthetic Point of Presence”. "),(0,s.kt)("h2",null,"Step 1:"),(0,s.kt)("p",null,"Install Synthetic Point of Presence component"),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"Note:"),(0,s.kt)("p",null,"If you are using ",(0,s.kt)("a",{parentName:"p",href:"https://ibm.github.io/aiops-pot/docs/category/instana-pot"},"Instana POT environment")),(0,s.kt)("p",null,"We will be installing the Synthetic Point of Presence into  Kubernetes Cluster provided in the POT / Sandbox.\nHelm is already installed on ",(0,s.kt)("inlineCode",{parentName:"p"},"ipot-rsmaster")," VM in POT environment, so we will deploy Synthetic Pop on this server. "),(0,s.kt)("p",null,"If not using POT environment, proceed to step 3."),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"Step 2:"),(0,s.kt)("p",null,"From the Instana sandbox UI, Click on “Synthetic Monitoring” and then on “Deploy a PoP” button:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.06944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABQUlEQVQoz1VRy0pDMRC9v1BduXNvhSLWhaBf6N4/cC/iRl2LIkVpa5XulPqA2mdu7s08kiPJtbUNHJJMZs45k8lq9SbuWk8wxuJnPMFoPEVuS4h6EAtYdA2LWFk6OEcYjsZQFdw+tHFyeoasttNEq/MM9R4mtyhKB1uUqTDGVFfgV6Ca4EPAcPCJq4sbXJ5fI9vcPcB9uwvyISkSMxwxiBgs8g+WFK9A1Z7yBXZm8PU2wPf7B7KNehOP3R4QAsIK4qqcKbz36V6RaxJbCEeoD4gV0W22tX+Ezmt/SRCLowMigrUFZnOz1iYzp5yiJCyWVwZz5Tbbbhyi+0fouHIT26v+kdM5qkskE4FzLhGbgpMjH4CgBVQdnAZkjb1j9F76kIBlC3HKk+kcJi8wM3lqczGseW7TPQqkibOA4jsJLAl+AfM+DYYh+WypAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/d8a9656b69bb2bc7004a9d6fac0ac45d/3cbba/14.1.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/d8a9656b69bb2bc7004a9d6fac0ac45d/7fc1e/14.1.png 288w","/Instana-Advanced-Partner-Workshop/static/d8a9656b69bb2bc7004a9d6fac0ac45d/a5df1/14.1.png 576w","/Instana-Advanced-Partner-Workshop/static/d8a9656b69bb2bc7004a9d6fac0ac45d/3cbba/14.1.png 1152w","/Instana-Advanced-Partner-Workshop/static/d8a9656b69bb2bc7004a9d6fac0ac45d/0b124/14.1.png 1728w","/Instana-Advanced-Partner-Workshop/static/d8a9656b69bb2bc7004a9d6fac0ac45d/2eafe/14.1.png 1887w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"Use Simple tab for Helm command"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA90lEQVQY04WO207DQAxE8/8/xwsIUSp6FU3Spk127d3sLQclVJXgASwdaTwajV2pc1gRjBXGMaDqcN6TUiLEhA8syAhl4jE5Z0opj71ME7EUqiFGTMrYXBZqY2lFmf1bCPQhYGIkl7IUfDMtx2JMi853r+RC1Vvhs245bo+0hwZvPM56xAdcTKgPqI+48X/mbOVD4lQ3vK5WrN/W1C8bzNMW83zANj1yFaSz6E1+IHce3pyzbi7MtJeOzW7Px3bPdr3jvDoyvJ+QfYcOivZ3Boe68PeHVh2X7krTnrn1A3YQrFV6VazzGKsYcYh6RB1z3qgu+jdWHF+CDc7q6WI3NAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/93b2d4dff75d86b3c3f7b0b1c5952b6f/3cbba/14.2.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/93b2d4dff75d86b3c3f7b0b1c5952b6f/7fc1e/14.2.png 288w","/Instana-Advanced-Partner-Workshop/static/93b2d4dff75d86b3c3f7b0b1c5952b6f/a5df1/14.2.png 576w","/Instana-Advanced-Partner-Workshop/static/93b2d4dff75d86b3c3f7b0b1c5952b6f/3cbba/14.2.png 1152w","/Instana-Advanced-Partner-Workshop/static/93b2d4dff75d86b3c3f7b0b1c5952b6f/82343/14.2.png 1558w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"You will need to edit the information contained in the helm command, so copy and paste the text to a file to edit."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Helm install synthetic-pop \\\n    --repo "https://agents.instana.io/helm" \\\n    --namespace syn \\\n    --create-namespace \\\n    --set downloadKey="xxx" \\\n    --set controller.location="MyPop;RoksDK;India;Blr;0;0;This is a Synthetic PoP Testing" \\\n    --set controller.clusterName="cp4i" \\\n    --set controller.instanaKey="xxx" \\\n    --set controller.instanaSyntheticEndpoint="https://synthetics-xxx-saas.instana.io" \\\n    --set redis.tls.enabled=false \\\n    --set redis.password="a1fc5d01bcbb" \\\n    --set seccompDefault=true \\  \n    synthetic-pop\n')),(0,s.kt)("p",null,"The default helm command will look as  above. Some of the parameters have been replaced with “xxx” for security reasons.\nFor Synthetic Point of Presence we need to modify some of the parameters and provide additional parameter. "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"--set seccompDefault=true \\"),". This parameter is required for OpenShift versions 4.11 and above."),(0,s.kt)("li",{parentName:"ol"},"Then, modify the ",(0,s.kt)("inlineCode",{parentName:"li"},"controller.clusterName")," parameter and provide a meaningful name."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("inlineCode",{parentName:"li"},"controller.location"),", specify a name, display name, country, etc. for your “Point of Presence”. as shown in example above ",(0,s.kt)("inlineCode",{parentName:"li"},"MyPop;<student name>;India;Blr;0;0;This is a Synthetic PoP Testing"))),(0,s.kt)("p",null,"Copy the helm command from the text file and paste it into a terminal window on ",(0,s.kt)("inlineCode",{parentName:"p"},"ipot-rsmaster")," VM. This will execute the helm chart.\nYou should see an output similar to the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'[user@bastion ~]$ helm install synthetic-pop \\\n>     --repo https://agents.instana.io/helm  \\\n>     --namespace syn\\\n>     --create-namespace \\\n>     --set downloadKey="xxx" \\\n>     --set controller.location=" MyPop;RoksDK;India;Blr;0;0;This is a Synthetic PoP Testing" \\\n>     --set controller.instanaKey="xxx" \\\n>     --set controller.clusterName="cp4i" \\\n>     --set controller.instanaSyntheticEndpoint=" https://synthetics-xxx-saas.instana.io " \\\n>     --set redis.tls.enabled=false \\\n>     --set redis.password="a1fc5d01bcbb" \\\n>     --set seccompDefault=true \\\n>     synthetic-pop\nNAME: synthetic-pop\nLAST DEPLOYED: Thu Jul 13 07:49:37 2023\nNAMESPACE: syn\nSTATUS: deployed\n')),(0,s.kt)("p",null,"Verify Installation\nAfter the Synthetic point of presence is installed verify its appearance in the Instana UI:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABI0lEQVQoz31Ry04DMQzc//8hrtwQBzjwEpRSihDbst3dtvtInNjJILu7wAFhaRQnHo3tSXF9+4D9oUO1a1DVDY7dAJaEEBmR5U9ozXkP5zx2dQPvCRo5ZxRPL6926Z0DxQhPARQiUkqQf2B1Scg54b2scHZ+iYurexSPyxVYBFU/oPcET2SiIUYT1tMw5fp2emfjRWZ0w4iP7Q6fdYtisVpjGJ2RNVLONvqMNE0z53laLak4kYnHyD8rPy+WcHWNsW3hhwHBeSMYmL+nExGM2pgFMo4YN1vw/oAogjhxmAXF4uYO0rSI5QZ+/QZWIrNBidpVQwXVfB8CYt9jKDeQY3fyVMR4mtvKOSU4T9aFQgBFtg9Sn2bP5nuYauQJpB/4y1fFFwWMH8HHvjFHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/e32e297ec466218bd5b7fb302a90c288/3cbba/14.3.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/e32e297ec466218bd5b7fb302a90c288/7fc1e/14.3.png 288w","/Instana-Advanced-Partner-Workshop/static/e32e297ec466218bd5b7fb302a90c288/a5df1/14.3.png 576w","/Instana-Advanced-Partner-Workshop/static/e32e297ec466218bd5b7fb302a90c288/3cbba/14.3.png 1152w","/Instana-Advanced-Partner-Workshop/static/e32e297ec466218bd5b7fb302a90c288/0b124/14.3.png 1728w","/Instana-Advanced-Partner-Workshop/static/e32e297ec466218bd5b7fb302a90c288/f1ad1/14.3.png 1903w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"You can also confirm that the Synthetic Point of Presence is running by typing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl get pods -n syn  (syn is a namespace) \n")),(0,s.kt)("h2",null,"Step 3:"),(0,s.kt)("p",null,"Let’s begin by executing a simple REST API test. This will be a single GET request.\nBegin by selecting Synthetics and then “+ADD” button as seen below.\n",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABhUlEQVQoz11SsU7kMBD1zwCiOonyCkArsSt0BfwDv8QP8AVUFDSga/YkCqipEaeFbJLdxIntmbEfGifZQ2dp9OSx/ebNG5u94zne/q5Q1Rusqw2KskbvPFgiAjGIBYFlh1PO+4DeORTrCkSEx+ULrm9uYfaP5yiqGj4Qut7BeZ+RmCExQiQO+H9oXgQSBZ9ljfvfT3hYPsMcnp7jfV2iCwTnQyYeMGQ1Q1AOzen5hHpPz23n8L4qsCpKmIOTBdZlBWaGrpTSEMCoRBBjzDnSdom/EQ+kqlaX3jU/FheomxYxDWSaVDWK6lFrO/BIqkXVr4GcMC29mwsRwxzNfmHTWJAgP8qEgdC0dkeoatVTHZZGGovHmBAVk/qa0JHAzM4usd02sD7BBc5k+qixHWzvMupUtbVu3P/zdvwFWZ3ABoE5+DnLCq1XFdoy776EzyR9bmv6Bao4jj5PqF4nYQTnYY5OF2iaFhyRq7EMFTfbdjd1zTHLOGnKQ+Axgj5ExJ/XD1zdveELj62op5oKpB8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/da56addb35edee093ad49e6c1b685b52/3cbba/14.4.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/da56addb35edee093ad49e6c1b685b52/7fc1e/14.4.png 288w","/Instana-Advanced-Partner-Workshop/static/da56addb35edee093ad49e6c1b685b52/a5df1/14.4.png 576w","/Instana-Advanced-Partner-Workshop/static/da56addb35edee093ad49e6c1b685b52/3cbba/14.4.png 1152w","/Instana-Advanced-Partner-Workshop/static/da56addb35edee093ad49e6c1b685b52/0b124/14.4.png 1728w","/Instana-Advanced-Partner-Workshop/static/da56addb35edee093ad49e6c1b685b52/e68a8/14.4.png 1906w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"Then, click the Add Synthetic Test button.\n",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"405px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACF0lEQVQoz42SX0sUURjG96arrrrqIuoiw4jAUrCo/ABeBVFB9u9DdNlF3VTaNyiIoCy1bU2iIEsXSkNKWtEwiqK0ZHZ2dneYHXF3Zs45c35xxllZpYsGfpyH58x55j3vvBkhFVuJhEz4Ly0kcRzTCEMaYURma1BzDVOkjAmFImjxjFZSoZUiiCRSxdSDfwRufFkqiBXoGD/yCUQdtAad+sR8qYbkVxqJBo0UURqYli22XOerG7JQCZkuesyW6hScYIOFckD2xxp3FldZrIQUyiHf3QZRJMhEG5WtB0ml8BshvS9K9DyvcHysQkfW4egzh66cQ0e2RPeow7GxMkdGHQ4/dWgbsrmcr4IygWllpjf1UCbB7lrAiZxFz1iJQ0+KtA9ZdOdsDo4U6czaCV1Zm7ZHVuLtGbQ4M16GWJDRWhOb/mx6NJ/tVd7/9pj5U2Nq2ePtksf0sse7FqZS8j9d5q0aQggyzbBftYirHzxuz/lcm61x45PPwJxP/5zPrYJPf8HnZsFP9o02+0YPJO97DH/zUVKQUfF64PjSKtvurtCZc9hx3+LASIl9Qza7HhZpH7bZP2yz97HNzgfFxN89WEwwPd1+z6L3ZXrlZoXzToNT41WuzHicfl2lb9Ll3IRL34TLxbzL+UmXC5MuZ99UN+lLeZeTrypc/+ihzU9JOpaGmjVSmmZfm6gWdItnjpmhNpMRhOtz+Be47wz3JFCtigAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/612b16ae26e9e556978162898470080f/233e0/14.5.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/612b16ae26e9e556978162898470080f/7fc1e/14.5.png 288w","/Instana-Advanced-Partner-Workshop/static/612b16ae26e9e556978162898470080f/233e0/14.5.png 405w"],sizes:"(max-width: 405px) 100vw, 405px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"you will see that you have the option of an API Simple test or an API Script test. Leave the default of API Simple and click the Next button.\n",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABlElEQVQoz42RzW7TQBSF89q8BTuWbJFYdtEFLSKEpqQBWiHRBQESJ44TO03w/NjjGY/9oZm0UhFdcKVPd/7u3DNnBienZ7x7P+bt8CIyHF0ymV4zmd4w+XTk4/Q68jAPXE4+M776wvBiwvloHPdfvHzFINsWSOspRMVO1hyqhv+NHnDAQ8X3H3MGWV7ExYM27JVBWU/b9TjnME2DaSxd10WaxlLVhrZt4zyeMQ2mNvHC2c8Fg2yTo7WmLEuklAghUErxuxQIqRBCRnRV/a2u7/8ZL5IVg2S15vzDFa9P3nB6NqKUilLIiFQa51q893jfxcKnCGpDzBfLo4daVxxKQSENuqpZrTOkVPHJTcBaahOye9rLe4XzoHCb76Insqr5evA0rmW93pBmG/JiR7bNY97lBVqqeHnwMjSy1samtTH3T06PCkO41tO0nq7vudsfSJYpySqNviRpxs2vBcndHqV0tOIxwW/fdUcPl+sNre+oQ1frYg4Y6zDhF2tDJhTPbm95PpvRWoc2DdUjVGXwXc+32Zw/KPepsbPt3YsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/1a1c94798fb7b6ccf6884291b6cff3c4/3cbba/14.6.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/1a1c94798fb7b6ccf6884291b6cff3c4/7fc1e/14.6.png 288w","/Instana-Advanced-Partner-Workshop/static/1a1c94798fb7b6ccf6884291b6cff3c4/a5df1/14.6.png 576w","/Instana-Advanced-Partner-Workshop/static/1a1c94798fb7b6ccf6884291b6cff3c4/3cbba/14.6.png 1152w","/Instana-Advanced-Partner-Workshop/static/1a1c94798fb7b6ccf6884291b6cff3c4/53c53/14.6.png 1703w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"A new dialog will open prompting for the REST API GET URL. Enter the URL for your robotshop application:\n",(0,s.kt)("a",{parentName:"p",href:"http://x.x.x.x:8080/"},"http://x.x.x.x:8080/"),(0,s.kt)("br",{parentName:"p"}),"\n","This could be any REST request. In this case, we are testing the  API call for the Robot Shop application."),(0,s.kt)("p",null,"Then, select your Point of Presence location and click Next. This allows you to choose the location(s) where you want your synthetic script to execute. In the lab, you only have 1 location that you can select. "),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.40277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABYElEQVQoz52SXUvjQBSG85P3Xu8WtYiyfuDXnT9BVlzQVitVf4AiiOCFu6SmtrY1mSSd5EzmkZlUV0G88IWHw8w7ec8cJsGPmZ8cHXfY2z/k90HT0zw54/j04gOt9jktV6e4M4cnHf402xwctX1d3twlmPu1gdMwjhklinGi0CJUgFjrMXwu52XGkJQlFrj/FxIsrGx5s6sUYaKI0oyRCAOt6Sb13kAX/uOyFPKJphTBumYiaF1QFIXPCLsRwcLqNmIM4UPE8GlIvz+g0JrvqPfYJ1hc30GAcZ6Du4UY30DEUFUVZkr1Bc53eug9EjRWt/1CTTR5UZBmuWeidR1manwTY97W73H71kLU6xM01nZ8YKRSMhG+J1tnuMC56aMolfoxXceqsvU47oWr+gY9rQnzHOO9j7yO7APnl9YQC6M44Vml/0nqOo4Vo3HMys0ts5dX/teK3/mvZ1WWc333lxexe6XrhIXeAQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/95bc9e2b052490e946265a317443d230/3cbba/14.7.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/95bc9e2b052490e946265a317443d230/7fc1e/14.7.png 288w","/Instana-Advanced-Partner-Workshop/static/95bc9e2b052490e946265a317443d230/a5df1/14.7.png 576w","/Instana-Advanced-Partner-Workshop/static/95bc9e2b052490e946265a317443d230/3cbba/14.7.png 1152w","/Instana-Advanced-Partner-Workshop/static/95bc9e2b052490e946265a317443d230/0b124/14.7.png 1728w","/Instana-Advanced-Partner-Workshop/static/95bc9e2b052490e946265a317443d230/02df5/14.7.png 1819w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"The next screen allows you to specify the scheduling interval for your synthetic test. Drag the time slider to 1 minute. Then, select Next\n",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZElEQVQoz5VRy07CQBTtv7HRRFeGqCHESIw7P8mdS+NWCQZBmqKycWGMRhF5CC2PvqYPSmd6zExbKNGF3uTk3NfcuWdGyu0UcVmpoXxdx1WFo4ZqXYHcbEFWWitWMnGSq8l3qDaaKN80cKs84PTsHNLG7iEM04IXzGE5BCaxhc+NIRKIEBtnmuRS86MIThgKXx1PIW3ulWDYFnTPhmrOMHUskNCHFbiYuTYmjgXdJ7AXnmDV0qERA244B6UUQRDA9+MFVG0Sb6gbJtTJFP2RBsdx8V+LonjjMd9wu3AEnTjQGYUZhlgwBsYY6B9Z+JSKgZqQvF8Ccdz4FsYEM47ETxFSCpqJKV3Vee9qYOF4KTM7BJnDqaQ1iZlaOnA8mUHK5Q/gev7yF3+8T8JqEODeNEESedEvPfwvpK18Ea/vHXz2h/joDtDprYPnup0eLp6ecVKXoby1MegP0e6u9wy+Rmg8vuAbwBqeKoIlNv4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/dd5e069dbe4db40053361ff3510175e5/3cbba/14.8.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/dd5e069dbe4db40053361ff3510175e5/7fc1e/14.8.png 288w","/Instana-Advanced-Partner-Workshop/static/dd5e069dbe4db40053361ff3510175e5/a5df1/14.8.png 576w","/Instana-Advanced-Partner-Workshop/static/dd5e069dbe4db40053361ff3510175e5/3cbba/14.8.png 1152w","/Instana-Advanced-Partner-Workshop/static/dd5e069dbe4db40053361ff3510175e5/0b124/14.8.png 1728w","/Instana-Advanced-Partner-Workshop/static/dd5e069dbe4db40053361ff3510175e5/b5fb7/14.8.png 1806w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"On the next screen you will give your syntetic test a name and description. Then, optionally, associate the synthetic test with an application.\nFinally, click the Create button to finish creating your synthetic test.\n",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.05555555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABhklEQVQoz42RSW/TQBhA/cu5Im5w67kHBO0lLAEKUSi4aSNKRdXSRQRFCNEosR032OMZe7aHPKkIKUJipKdv1bdNdO/BBrvxkFe9XXZ673jdj4n3DxkMjxgMP/6DI/YODnm//4F+fBB4Gw+5v7FJ9LjznPZVlUSpmrpp+N9nAekclbXB/nRy3hbsorUmm+fM82vy60WQaZaTZHNmSUqazUO8JUmzYBelwFqL0Qbd6FDw+PScaKvTxRgTCohKIkRFKaqgV1JSCkFRlGEDqdTvuJQK7z3Oe6xzoeDp2SXR9tMXodPiZ4n3hAR/w0rnlu1xzmOsxVqHNsuVTz5fEG096S5vKFVI0O0KZp1GG2q9lOtxG2j9bYOzy1E74Us8MMty8qKklAqh6nXqBqtNQNQrv2p0oBCSWmsuvoyJHnWWE4YjOxc6Ob/Ceo9WNaMkYZymuHaam9O4WzccfR0TbT7cZlFWXE0TJrP0L66mKd9GY+7svOFur8/k+w8mScZk+mdOEj712eCYX/kXo35ExPXYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/1a415775f806c0e8cdda25c2d9b60472/3cbba/14.9.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/1a415775f806c0e8cdda25c2d9b60472/7fc1e/14.9.png 288w","/Instana-Advanced-Partner-Workshop/static/1a415775f806c0e8cdda25c2d9b60472/a5df1/14.9.png 576w","/Instana-Advanced-Partner-Workshop/static/1a415775f806c0e8cdda25c2d9b60472/3cbba/14.9.png 1152w","/Instana-Advanced-Partner-Workshop/static/1a415775f806c0e8cdda25c2d9b60472/0b124/14.9.png 1728w","/Instana-Advanced-Partner-Workshop/static/1a415775f806c0e8cdda25c2d9b60472/83557/14.9.png 1827w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"On the next Screen , select Tests Tab\nClick on the RoboShop Test  link to drill down into the details of the synthetic test.\nIt will take a couple of minutes for the synthetic tests to begin executing."),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.06944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABUUlEQVQoz02RS4sVMRCF+1c56M69CuILF/rbXAruRHA1a8GVK3+Bwtzb6XTn/aruT5I7czFwqMpJciqnanr07DWz0pyVZl46VlIu1CaU2gb+zx+QcialxKwWSil8/nrLpy/fmbqgC4FaK7lUSq1DUPad4zgG9n1nv887+lnnRC7x793Mt9sf/Pz1m+nm+RtmH1lcIcRMCBHrPJuxOBdGXkq98sY6SmujeEdrgvWBPyfFSRummxdvSdqQVk91gWYdeTOY84xXC25W7N2BtQS9jr34gNz//OoEKHIwPX33EX9e8GdD3SxFryS1EGZFUpq0aOpmyIsenLs7IcYOwYv1gyZCaUIsjenJy/eEVIixUnIhd9s+suqNGCI1l2tMMWGNG0MSEWq7DKz3/NL/xvT41Qd8aqwBZGdU7Rd6D3vlPoz+sFt64HOPrtGEsVoXlp1YhX9DTg91NGCVWQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/107239db6a5de039427307d322daa944/3cbba/14.10.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/107239db6a5de039427307d322daa944/7fc1e/14.10.png 288w","/Instana-Advanced-Partner-Workshop/static/107239db6a5de039427307d322daa944/a5df1/14.10.png 576w","/Instana-Advanced-Partner-Workshop/static/107239db6a5de039427307d322daa944/3cbba/14.10.png 1152w","/Instana-Advanced-Partner-Workshop/static/107239db6a5de039427307d322daa944/0b124/14.10.png 1728w","/Instana-Advanced-Partner-Workshop/static/107239db6a5de039427307d322daa944/6c456/14.10.png 1878w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"On the screen, you can see a summary of the synthetic results. You can also click on the Results tab and see the detailed results of each synthetic test.\n",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABUklEQVQoz4VQS07DMBDNbShiy75sEJ8NiFNxCW7ADbgAa4RYIFpBS9L0g5PaTuKZsf2QXajYMdLTs5/fzHimOBifqefpu3qtV6r6atTr5ENNZ5WKEcqxKGJpaMd7sHg1OFJd36vNl8psjFXWdqo4HJ/h/m2C27cJHuolECJIPMR7sPyPwREc8d5fjMbn8XO9iS6ESCzREUViziwi0YcQvQ+ZIxBThLC7J8aP5r3PWjE6ucB8sUSrNaztQMS5q7YdBufAIhlJa9ottLFwRCBmdP2AdqthkpcFAzGK48sbzMoKZVWjXq2zMY2QTGmM30hF52WVi6ZGIj4XrBZLaG1+XAHF0ekVynoF5wghBPgEH/I5JaYfNFuNfnC7lBhBLFlP6LsOlgPuXgweFz2Kw9NrzOtNHimmLf0JMxBUq+FFcoPfd2KPTWvymrS20Mbhad1jYRnfdBoNk77XOdoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 4",title:"Lab 4",src:"/Instana-Advanced-Partner-Workshop/static/fd978e39a7a70001eccccf96e1042c11/3cbba/14.11.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/fd978e39a7a70001eccccf96e1042c11/7fc1e/14.11.png 288w","/Instana-Advanced-Partner-Workshop/static/fd978e39a7a70001eccccf96e1042c11/a5df1/14.11.png 576w","/Instana-Advanced-Partner-Workshop/static/fd978e39a7a70001eccccf96e1042c11/3cbba/14.11.png 1152w","/Instana-Advanced-Partner-Workshop/static/fd978e39a7a70001eccccf96e1042c11/0b124/14.11.png 1728w","/Instana-Advanced-Partner-Workshop/static/fd978e39a7a70001eccccf96e1042c11/2eafe/14.11.png 1887w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,s.kt)("p",null,"In this lab, you have now successfully created a synthetic test for a single REST API."))}p.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(7294),s=t(8650),i=t.n(s),o=t(5444),r=t(9403),l=t(3321),c=t(5900),d=t.n(c);var p=e=>{let{title:a,theme:t,tabs:s=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:s}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:r,branch:l}=t||s,c=i+"/edit/"+l+r+"/src/pages"+a;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},A=t(4275),g=t(1721);let b=function(e){function a(){return e.apply(this,arguments)||this}return(0,g.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,s=t.split("/").filter(Boolean).slice(-1)[0],r=a.map((e=>{const a=i()(e,{lower:!0,strict:!0}),r=a===s,l=new RegExp(s+"/?(#.*)?$"),c=t.replace(l,a);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},a}(n.Component);var h=b,u=t(2881),k=t(6958),y=t(36);var f=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:s,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:b}=a,{tabs:y,title:w,theme:v,description:P,keywords:x,date:I}=d,{interiorTheme:N}=(0,k.Z)(),{site:{pathPrefix:B}}=(0,o.useStaticQuery)("2456312558"),W=B?s.pathname.replace(B,""):s.pathname,S=y?W.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",E=v||N;return n.createElement(l.Z,{tabs:y,homepage:!1,theme:E,pageTitle:w,pageDescription:P,pageKeywords:x,titleType:b},n.createElement(p,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:E}),y&&n.createElement(h,{title:w,slug:W,tabs:y,currentTab:S}),n.createElement(u.Z,{padded:!0},t,n.createElement(m,{relativePagePath:g}),n.createElement(f,{date:I})),n.createElement(A.Z,{pageContext:a,location:s,slug:W,tabs:y,currentTab:S}),n.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-advanced-topics-lab-4-mdx-5bacdcdbd578449fe8dc.js.map