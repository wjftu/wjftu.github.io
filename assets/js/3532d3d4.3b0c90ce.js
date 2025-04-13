"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[2567],{1647:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(8168),t=(r(6540),r(5680));const l={title:"\u955c\u50cf",sidebar_position:3},o=void 0,i={unversionedId:"docker/image",id:"docker/image",title:"\u955c\u50cf",description:"\u955c\u50cf\u7684\u7279\u70b9",source:"@site/note/docker/image.md",sourceDirName:"docker",slug:"/docker/image",permalink:"/note/docker/image",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u955c\u50cf",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/note/docker/install"},next:{title:"\u5bb9\u5668",permalink:"/note/docker/container"}},c=[{value:"\u641c\u7d22\u955c\u50cf",id:"\u641c\u7d22\u955c\u50cf",children:[],level:3},{value:"\u62c9\u53d6\u955c\u50cf",id:"\u62c9\u53d6\u955c\u50cf",children:[],level:3},{value:"\u663e\u793a\u955c\u50cf",id:"\u663e\u793a\u955c\u50cf",children:[],level:3},{value:"\u67e5\u770b\u955c\u50cf\u4fe1\u606f",id:"\u67e5\u770b\u955c\u50cf\u4fe1\u606f",children:[],level:3},{value:"\u5220\u9664\u955c\u50cf",id:"\u5220\u9664\u955c\u50cf",children:[],level:3},{value:"\u63d0\u4ea4\u5bb9\u5668\u4e3a\u955c\u50cf",id:"\u63d0\u4ea4\u5bb9\u5668\u4e3a\u955c\u50cf",children:[],level:3}],d={toc:c},s="wrapper";function u(e){let{components:n,...r}=e;return(0,t.yg)(s,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u955c\u50cf\u7684\u7279\u70b9"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u548c meta data \u96c6\u5408"),(0,t.yg)("li",{parentName:"ul"},"\u5206\u5c42\u7684\uff0c\u6bcf\u5c42\u53ef\u6dfb\u52a0\u548c\u5220\u9664\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u540c image \u53ef\u4ee5\u5171\u4eab\u76f8\u540c\u7684 layer"),(0,t.yg)("li",{parentName:"ul"},"Image \u672c\u8eab\u662f read-only \u7684 ")),(0,t.yg)("p",null,"\u6700\u4e0b\u5c42\u662f Linux Kernel(bootfs)\uff0c\u7136\u540e\u4e0a\u9762\u662f Base Image\uff0c\u5982 Ubuntu, Centos (rootfs)\uff0c\u7136\u540e\u4e0a\u9762\u662f\u4e00\u5c42\u4e00\u5c42\u7684 Image\u3002\u5404\u79cd\u4e0d\u540c\u7684 Base Image \u4f1a\u5171\u4eab\u4e3b\u673a\u7684 bootfs\u3002 "),(0,t.yg)("p",null,"\u5982\u679c"),(0,t.yg)("h3",{id:"\u641c\u7d22\u955c\u50cf"},"\u641c\u7d22\u955c\u50cf"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker search [OPTIONS] TERM\n")),(0,t.yg)("p",null,"--limit \u9650\u5236\u6700\u5927\u6761\u6570\uff0c\u9ed8\u8ba425"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"root@ubuntu:~# docker search nginx\nNAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\nnginx                             Official build of Nginx.                        16148     [OK]       \njwilder/nginx-proxy               Automated Nginx reverse proxy for docker con\u2026   2108                 [OK]\nricharvey/nginx-php-fpm           Container running Nginx + PHP-FPM capable of\u2026   821                  [OK]               \n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"NAME \u8868\u793a\u955c\u50cf\u4ed3\u5e93\u540d\u79f0  "),(0,t.yg)("li",{parentName:"ul"},"DIESCRIPTION \u8868\u793a\u955c\u50cf\u4ed3\u5e93\u63cf\u8ff0"),(0,t.yg)("li",{parentName:"ul"},"STARS \u8868\u793a\u6536\u85cf\u6570\uff08\u53d7\u6b22\u8fce\u5c42\u5ea6\uff09"),(0,t.yg)("li",{parentName:"ul"},"OFFICAL \u8868\u793a\u5341\u5206\u4e3a\u5b98\u65b9\u955c\u50cf"),(0,t.yg)("li",{parentName:"ul"},"AUTOMATED \u8868\u793a\u662f\u5426\u662f\u81ea\u52a8\u6784\u5efa\u955c\u50cf")),(0,t.yg)("h3",{id:"\u62c9\u53d6\u955c\u50cf"},"\u62c9\u53d6\u955c\u50cf"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker pull [OPTIONS] NAME[:TAG|@DIGEST]\n")),(0,t.yg)("p",null,"\u4f8b\u5982"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"root@ubuntu:~# docker pull hello-world:latest\nlatest: Pulling from library/hello-world\n2db29710123e: Pull complete \nDigest: sha256:975f4b14f326b05db86e16de00144f9c12257553bba9484fed41f9b6f2257800\nStatus: Downloaded newer image for hello-world:latest\ndocker.io/library/hello-world:latest\n")),(0,t.yg)("h3",{id:"\u663e\u793a\u955c\u50cf"},"\u663e\u793a\u955c\u50cf"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"docker image ls")," \uff0c\u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"docker images")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker images [OPTIONS] [REPOSITORY[:TAG]]\n")),(0,t.yg)("p",null,"\u4f8b\u5982"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"root@VM-4-17-ubuntu:~# docker image ls\nREPOSITORY                       TAG       IMAGE ID       CREATED         SIZE\nnode                             14-slim   cdcdba611ec1   5 weeks ago     168MB\nnginx                            latest    87a94228f133   3 months ago    133MB\ncentos                           latest    5d0da3dc9764   3 months ago    231MB\nalpine                           3.12      48b8ec4ed9eb   4 months ago    5.58MB\n")),(0,t.yg)("p",null,"\u53c2\u6570"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-a, --all")," \u663e\u793a\u6240\u6709\uff0c\u5305\u62ec\u4e2d\u95f4\u5c42\u955c\u50cf",(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"-f, --filter")," \u8fc7\u6ee4",(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"-q, --quiet")," \u4ec5\u663e\u793a id  "),(0,t.yg)("h3",{id:"\u67e5\u770b\u955c\u50cf\u4fe1\u606f"},"\u67e5\u770b\u955c\u50cf\u4fe1\u606f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker inspect [OPTIONS] NAME|ID [NAME|ID...]\n")),(0,t.yg)("p",null,"\u4f8b\u5982"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'root@ubuntu:~# docker inspect hello-world\n[\n    {\n        "Id": "sha256:feb5d9fea6a5e9606aa995e879d862b825965ba48de054caab5ef356dc6b3412",\n        "RepoTags": [\n            "hello-world:latest"\n        ],\n        "RepoDigests": [\n            "hello-world@sha256:975f4b14f326b05db86e16de00144f9c12257553bba9484fed41f9b6f2257800"\n        ],\n        "Parent": "",\n        "Comment": "",\n        "Created": "2021-09-23T23:47:57.442225064Z",\n        "Container": "8746661ca3c2f215da94e6d3f7dfdcafaff5ec0b21c9aff6af3dc379a82fbc72",\n        "ContainerConfig": {\n            "Hostname": "8746661ca3c2",\n            "Domainname": "",\n            "User": "",\n            "AttachStdin": false,\n            "AttachStdout": false,\n            "AttachStderr": false,\n            "Tty": false,\n            "OpenStdin": false,\n            "StdinOnce": false,\n            "Env": [\n                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"\n            ],\n            "Cmd": [\n                "/bin/sh",\n                "-c",\n                "#(nop) ",\n                "CMD [\\"/hello\\"]"\n            ],\n            "Image": "sha256:b9935d4e8431fb1a7f0989304ec86b3329a99a25f5efdc7f09f3f8c41434ca6d",\n            "Volumes": null,\n            "WorkingDir": "",\n            "Entrypoint": null,\n            "OnBuild": null,\n            "Labels": {}\n        },\n        "DockerVersion": "20.10.7",\n        "Author": "",\n        "Config": {\n            "Hostname": "",\n            "Domainname": "",\n            "User": "",\n            "AttachStdin": false,\n            "AttachStdout": false,\n            "AttachStderr": false,\n            "Tty": false,\n            "OpenStdin": false,\n            "StdinOnce": false,\n            "Env": [\n                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"\n            ],\n            "Cmd": [\n                "/hello"\n            ],\n            "Image": "sha256:b9935d4e8431fb1a7f0989304ec86b3329a99a25f5efdc7f09f3f8c41434ca6d",\n            "Volumes": null,\n            "WorkingDir": "",\n            "Entrypoint": null,\n            "OnBuild": null,\n            "Labels": null\n        },\n        "Architecture": "amd64",\n        "Os": "linux",\n        "Size": 13256,\n        "VirtualSize": 13256,\n        "GraphDriver": {\n            "Data": {\n                "MergedDir": "/var/lib/docker/overlay2/645af721584c8ec36599fc222077d3d4e3a8de11c213bf9c48fad447603e2107/merged",\n                "UpperDir": "/var/lib/docker/overlay2/645af721584c8ec36599fc222077d3d4e3a8de11c213bf9c48fad447603e2107/diff",\n                "WorkDir": "/var/lib/docker/overlay2/645af721584c8ec36599fc222077d3d4e3a8de11c213bf9c48fad447603e2107/work"\n            },\n            "Name": "overlay2"\n        },\n        "RootFS": {\n            "Type": "layers",\n            "Layers": [\n                "sha256:e07ee1baac5fae6a26f30cabfe54a36d3402f96afda318fe0a96cec4ca393359"\n            ]\n        },\n        "Metadata": {\n            "LastTagTime": "0001-01-01T00:00:00Z"\n        }\n    }\n]\n\n')),(0,t.yg)("h3",{id:"\u5220\u9664\u955c\u50cf"},"\u5220\u9664\u955c\u50cf"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker image rm [OPTIONS] IMAGE [IMAGE...]\n")),(0,t.yg)("p",null,"\u53c2\u6570\uff1a"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-f, --force")," \u5f3a\u5236\u5220\u9664"),(0,t.yg)("p",null,"\u4e00\u4e2a\u4e00\u4e2a\u624b\u52a8\u5220\u9664\u6bd4\u8f83\u9ebb\u70e6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"docker rmi -f $(docker images -qa)")," \u4e00\u6b21\u6027\u5220\u9664\u6240\u6709\u955c\u50cf"),(0,t.yg)("h3",{id:"\u63d0\u4ea4\u5bb9\u5668\u4e3a\u955c\u50cf"},"\u63d0\u4ea4\u5bb9\u5668\u4e3a\u955c\u50cf"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]\n")),(0,t.yg)("p",null,"\u9996\u5148\u8fd0\u884c\u5bb9\u5668\uff0c\u8fdb\u5165\u5bb9\u5668\uff0c\u5e76\u5b89\u88c5 vim"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"docker run -it centos\nyum install vim -y\n")),(0,t.yg)("p",null,"\u9000\u51fa\u5bb9\u5668\uff0c\u53ef\u4ee5\u7528\u770b\u5230\u8fd9\u4e2a\u5bb9\u5668\uff0c\u5bf9\u5176 commit \uff0c\u5f97\u5230\u4e00\u4e2a\u65b0\u7684 image"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'root@VM-4-17-ubuntu:~# docker container ls -a\nCONTAINER ID   IMAGE                    COMMAND                  CREATED              STATUS                     PORTS                    NAMES\n85f84bef3ca7   centos                   "/bin/bash"              About a minute ago   Exited (0) 8 seconds ago                            elegant_colden\n\nroot@VM-4-17-ubuntu:~# docker commit elegant_colden wjftu/centos-vim\nsha256:5bd3de919e30d6850a531e866de5985f8ff0e82157b08b9e69bc59f0a7ef6316\n\nroot@VM-4-17-ubuntu:~# docker image ls\nREPOSITORY                       TAG       IMAGE ID       CREATED          SIZE\nwjftu/centos-vim                 latest    5bd3de919e30   36 seconds ago   298MB\ncentos                           latest    5d0da3dc9764   3 months ago     231MB\n\nroot@VM-4-17-ubuntu:~# docker history 5bd3de919e30\nIMAGE          CREATED         CREATED BY                                      SIZE      COMMENT\n5bd3de919e30   4 minutes ago   /bin/bash                                       66.3MB    \n5d0da3dc9764   3 months ago    /bin/sh -c #(nop)  CMD ["/bin/bash"]            0B        \n<missing>      3 months ago    /bin/sh -c #(nop)  LABEL org.label-schema.sc\u2026   0B        \n<missing>      3 months ago    /bin/sh -c #(nop) ADD file:805cb5e15fb6e0bb0\u2026   231MB     \nroot@VM-4-17-ubuntu:~# docker history 5d0da3dc9764\nIMAGE          CREATED        CREATED BY                                      SIZE      COMMENT\n5d0da3dc9764   3 months ago   /bin/sh -c #(nop)  CMD ["/bin/bash"]            0B        \n<missing>      3 months ago   /bin/sh -c #(nop)  LABEL org.label-schema.sc\u2026   0B        \n<missing>      3 months ago   /bin/sh -c #(nop) ADD file:805cb5e15fb6e0bb0\u2026   231MB\n')),(0,t.yg)("p",null,"\u8fd9\u6837\u5236\u4f5c image \u5176\u5b9e\u4e0d\u592a\u597d\uff0c\u56e0\u4e3a\u522b\u4eba\u4e0d\u77e5\u9053\u662f\u5982\u4f55\u5236\u4f5c\u7684\uff0c\u53ef\u80fd\u6709\u4e0d\u5b89\u5168\u7684\u56e0\u7d20\u3002\u597d\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 dockerfile \uff0c\u522b\u4eba\u53ef\u4ee5\u6839\u636e dockerfile \u6784\u5efa\u548c\u4f60\u4e00\u6837\u7684 image"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0},5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>f});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),d=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),g=t,f=u["".concat(c,".").concat(g)]||u[g]||p[g]||l;return r?a.createElement(f,o(o({ref:n},s),{},{components:r})):a.createElement(f,o({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:t,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);