"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[1062],{5680:(e,t,n)=>{n.d(t,{xA:()=>f,yg:()=>b});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,b=d["".concat(i,".").concat(u)]||d[u]||p[u]||a;return n?r.createElement(b,l(l({ref:t},f),{},{components:n})):r.createElement(b,l({ref:t},f))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8400:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(8168),o=(n(6540),n(5680));const a={title:"\u7f51\u7edc",sidebar_position:6},l=void 0,c={unversionedId:"docker/network",id:"docker/network",title:"\u7f51\u7edc",description:"\u5355\u673a\u7f51\u7edc\uff1a",source:"@site/note/docker/network.md",sourceDirName:"docker",slug:"/docker/network",permalink:"/note/docker/network",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u7f51\u7edc",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Dockerfile \u6784\u5efa\u955c\u50cf",permalink:"/note/docker/dockerfile"},next:{title:"\u6570\u636e\u5377",permalink:"/note/docker/volume"}},i=[],s={toc:i},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(f,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u5355\u673a\u7f51\u7edc\uff1a "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Bridge Network"),(0,o.yg)("li",{parentName:"ul"},"Host Network"),(0,o.yg)("li",{parentName:"ul"},"None Network")),(0,o.yg)("p",null,"\u591a\u673a\u7f51\u7edc\uff1a Overlay Network "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"root@ubuntu:~# docker network ls\nNETWORK ID     NAME      DRIVER    SCOPE\n57d90d999c93   bridge    bridge    local\n11aebd249128   host      host      local\nbad0ef80d603   none      null      local\n")),(0,o.yg)("p",null,"\u542f\u52a8\u4e00\u4e2a\u5c0f\u578b\u955c\u50cf busybox \u5e76\u5728\u540e\u53f0\u8fd0\u884c\u65e0\u9650\u5faa\u73af\uff0c\u7136\u540e\u8fdb\u5165\u5bb9\u5668"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -d --name testnet busybox /bin/sh -c \"while true; do sleep 3600; done\"\nUnable to find image 'busybox:latest' locally\nlatest: Pulling from library/busybox\n5cc84ad355aa: Pull complete \nDigest: sha256:5acba83a746c7608ed544dc1533b87c737a0b0fb730301639a0179f9344b1678\nStatus: Downloaded newer image for busybox:latest\n05b3e03bbdf4dce162c384ce5c3e57f7b345339a3f2b703340d20fae9da87543\nroot@ubuntu:~# docker exec -it testnet /bin/sh\n")),(0,o.yg)("p",null,"\u67e5\u770b\u5bb9\u5668\u7f51\u7edc\u4fe1\u606f\u3002\u5bb9\u5668\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u548c\u5bbf\u4e3b\u673a\u662f\u4e0d\u4e00\u6837\u7684"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"/ # ip a \n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n36: eth0@if37: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue \n    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n")),(0,o.yg)("p",null,"\u521b\u5efa\u53e6\u4e00\u4e2a\u5bb9\u5668\uff0c\u53ef\u4ee5\u770b\u5230\u5b83\u7684\u547d\u540d\u7a7a\u95f4\u662f\u65b0\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5 ping \u901a\u539f\u6765\u7684\u5bb9\u5668"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'root@ubuntu:~# docker run -d --name testnet2 busybox /bin/sh -c "while true; do sleep 3600; done"\nb0940e8ca4b94bf3ff72374a6a04b33057dd38282df71f79fc91bcf8869f970f\nroot@ubuntu:~# docker exec -it testnet2 /bin/sh\n/ # ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n42: eth0@if43: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue \n    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n/ # ping 172.17.0.2\nPING 172.17.0.2 (172.17.0.2): 56 data bytes\n64 bytes from 172.17.0.2: seq=0 ttl=64 time=0.108 ms\n64 bytes from 172.17.0.2: seq=1 ttl=64 time=0.083 ms\n64 bytes from 172.17.0.2: seq=2 ttl=64 time=0.081 ms\n64 bytes from 172.17.0.2: seq=3 ttl=64 time=0.083 ms\n64 bytes from 172.17.0.2: seq=4 ttl=64 time=0.075 ms\n\n--- 172.17.0.2 ping statistics ---\n5 packets transmitted, 5 packets received, 0% packet loss\nround-trip min/avg/max = 0.075/0.086/0.108 ms\n/ # ping 127.0.0.1\nPING 127.0.0.1 (127.0.0.1): 56 data bytes\n64 bytes from 127.0.0.1: seq=0 ttl=64 time=0.044 ms\n64 bytes from 127.0.0.1: seq=1 ttl=64 time=0.062 ms\n64 bytes from 127.0.0.1: seq=2 ttl=64 time=0.058 ms\n64 bytes from 127.0.0.1: seq=3 ttl=64 time=0.050 ms\n^C\n--- 127.0.0.1 ping statistics ---\n4 packets transmitted, 4 packets received, 0% packet loss\nround-trip min/avg/max = 0.044/0.053/0.062 ms\n')),(0,o.yg)("p",null,"\u4f7f\u7528 docker inspect \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc\u7684\u60c5\u51b5\uff0cbridge \u6709\u8fd9\u4e24\u4e2a\u5bb9\u5668"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'root@ubuntu:~# docker inspect bridge\n...\n        "Containers": {\n            "05b3e03bbdf4dce162c384ce5c3e57f7b345339a3f2b703340d20fae9da87543": {\n                "Name": "testnet",\n                "EndpointID": "635009286f763ee2c1fb1b74d35539215586bdf855062f7a6b9ef738d6884f98",\n                "MacAddress": "02:42:ac:11:00:02",\n                "IPv4Address": "172.17.0.2/16",\n                "IPv6Address": ""\n            },\n            "b0940e8ca4b94bf3ff72374a6a04b33057dd38282df71f79fc91bcf8869f970f": {\n                "Name": "testnet2",\n                "EndpointID": "215e017aec6c0b4e5a2e823cb1154121c3f8fc8118b40db9538de262d609aef7",\n                "MacAddress": "02:42:ac:11:00:03",\n                "IPv4Address": "172.17.0.3/16",\n                "IPv6Address": ""\n            }\n        },\n...\n')),(0,o.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a bridge \u7f51\u7edc\u793a\u4f8b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network create --driver bridge --subnet 182.18.0.0/12 custom-isolated-network\n")))}d.isMDXComponent=!0}}]);