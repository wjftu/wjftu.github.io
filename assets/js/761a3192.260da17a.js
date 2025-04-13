"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[7059],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>m});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),y=c(r),g=a,m=y["".concat(l,".").concat(g)]||y[g]||u[g]||o;return r?t.createElement(m,i(i({ref:n},d),{},{components:r})):t.createElement(m,i({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[y]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6353:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=r(8168),a=(r(6540),r(5680));const o={title:"\u5bb9\u5668",sidebar_position:4},i=void 0,p={unversionedId:"docker/container",id:"docker/container",title:"\u5bb9\u5668",description:"\u5982\u679c\u955c\u50cf\u662f\u7c7b\uff0c\u90a3\u4e48\u5bb9\u5668\u5c31\u662f\u5bf9\u8c61\u3002",source:"@site/note/docker/container.md",sourceDirName:"docker",slug:"/docker/container",permalink:"/note/docker/container",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5bb9\u5668",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u955c\u50cf",permalink:"/note/docker/image"},next:{title:"Dockerfile \u6784\u5efa\u955c\u50cf",permalink:"/note/docker/dockerfile"}},l=[{value:"\u67e5\u770b\u5bb9\u5668",id:"\u67e5\u770b\u5bb9\u5668",children:[],level:3},{value:"\u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668",id:"\u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668",children:[],level:3},{value:"\u505c\u6b62\u5bb9\u5668",id:"\u505c\u6b62\u5bb9\u5668",children:[],level:3},{value:"\u5220\u9664\u5bb9\u5668",id:"\u5220\u9664\u5bb9\u5668",children:[],level:3},{value:"\u590d\u5236\u6587\u4ef6",id:"\u590d\u5236\u6587\u4ef6",children:[],level:3},{value:"\u8fdb\u5165\u5bb9\u5668",id:"\u8fdb\u5165\u5bb9\u5668",children:[],level:3}],c={toc:l},d="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u5982\u679c\u955c\u50cf\u662f\u7c7b\uff0c\u90a3\u4e48\u5bb9\u5668\u5c31\u662f\u5bf9\u8c61\u3002"),(0,a.yg)("h3",{id:"\u67e5\u770b\u5bb9\u5668"},"\u67e5\u770b\u5bb9\u5668"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker ps [OPTIONS]\ndocker container ls [OPTIONS]\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-a, --all")," \u663e\u793a\u6240\u6709\uff08\u9ed8\u8ba4\u53ea\u663e\u793a\u8fd0\u884c\u4e2d\u7684\uff09",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-q, --quiet")," \u53ea\u663e\u793a id"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'root@ubuntu:~# docker ps -a \nCONTAINER ID   IMAGE         COMMAND                  CREATED             STATUS                         PORTS                               NAMES\n2ec952d81bec   nginx         "/docker-entrypoint.\u2026"   35 minutes ago      Up 33 minutes                  0.0.0.0:80->80/tcp, :::80->80/tcp   serene_cohen\n515aba961085   nginx         "/docker-entrypoint.\u2026"   35 minutes ago      Exited (137) 34 minutes ago                                        elegant_chaplygin\n5c778f89ae9d   ubuntu        "-d"                     About an hour ago   Created                                                            crazy_proskuriakova\n')),(0,a.yg)("h3",{id:"\u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668"},"\u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n")),(0,a.yg)("p",null,"\u9009\u9879\u975e\u5e38\u591a\uff0c\u5e38\u7528\u4e0b\u9762\u8fd9\u4e9b"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-d, --detach")," \u540e\u53f0\u8fd0\u884c",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-p, --publish")," \u7aef\u53e3\u6620\u5c04\uff0c\u6709 4 \u79cd\u683c\u5f0f ",(0,a.yg)("inlineCode",{parentName:"p"},"containerPort")," , ",(0,a.yg)("inlineCode",{parentName:"p"},"hostPort:containerPort")," , ",(0,a.yg)("inlineCode",{parentName:"p"},"ip::containerPort")," , ",(0,a.yg)("inlineCode",{parentName:"p"},"ip:hostPort:containerPort"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-t, --tty")," \u5206\u914d\u7ec8\u7aef",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-i, --interactive")," \u4ea4\u4e92\u8fd0\u884c",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"--network")," \u7f51\u7edc\u6a21\u5f0f\uff0c\u9ed8\u8ba4 --network=bridge",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"--name")," \u6307\u5b9a\u540d\u5b57",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-m, --memory")," \u9650\u5236\u5185\u5b58\uff0c\u9ed8\u8ba4 swap \u548c\u5185\u5b58\u4e00\u6837",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-c, --cpu-shares")," \u8bbe\u7f6e cpu \u76f8\u5bf9\u6743\u91cd  "),(0,a.yg)("p",null,"\u5e38\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"-it")," \u6765\u8fdb\u5165\u5bb9\u5668 "),(0,a.yg)("h3",{id:"\u505c\u6b62\u5bb9\u5668"},"\u505c\u6b62\u5bb9\u5668"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker stop [OPTIONS] CONTAINER [CONTAINER...]\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-t, --time")," \u5f3a\u5236\u505c\u6b62\u7b49\u5f85\u65f6\u95f4"),(0,a.yg)("h3",{id:"\u5220\u9664\u5bb9\u5668"},"\u5220\u9664\u5bb9\u5668"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"docker container rm")," \u53ef\u7f29\u5199\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"docker rm")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker rm [OPTIONS] CONTAINER [CONTAINER...]\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-f, --force")," \u5f3a\u5236\u5220\u9664",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-l, --link")," \u5220\u9664\u7f51\u7edc\u8fde\u63a5",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"-v, --volumes")," \u5220\u9664\u5bb9\u5668\u5173\u8054\u7684\u5377  "),(0,a.yg)("p",null,"\u5220\u9664\u6240\u6709\u7684\u5bb9\u5668\u65b9\u4fbf\u7684\u547d\u4ee4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker rm -f $(docker ps -a -q)\n")),(0,a.yg)("h3",{id:"\u590d\u5236\u6587\u4ef6"},"\u590d\u5236\u6587\u4ef6"),(0,a.yg)("p",null,"\u53ef\u4ee5\u590d\u5236\u6587\u4ef6\u5230\u5bb9\u5668\uff0c\u4e5f\u53ef\u4ee5\u53cd\u8fc7\u6765\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|\ndocker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH\n")),(0,a.yg)("h3",{id:"\u8fdb\u5165\u5bb9\u5668"},"\u8fdb\u5165\u5bb9\u5668"),(0,a.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 attach \u8fdb\u5165\u5bb9\u5668\uff08\u6211\u8fd8\u6ca1\u6210\u529f\u8fc7\u3002\u3002\uff09"),(0,a.yg)("p",null,"\u66f4\u591a\u7684\u662f\u4f7f\u7528 exec"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker exec [OPTIONS] CONTAINER COMMAND [ARG...]\n")),(0,a.yg)("p",null,"\u4f8b\u5982"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"root@ubuntu:~# docker run -d --name hi_nginx nginx \n2acc233fe379b1f6dbe79a4b0140c4dbe05db4e47d427a6d1dd188ca61b26b28\ndocker exec -it hi_nginx bash\n")),(0,a.yg)("p",null,"\u4f7f\u7528\u547d\u4ee4 ",(0,a.yg)("inlineCode",{parentName:"p"},"exit")," \u9000\u51fa"))}y.isMDXComponent=!0}}]);