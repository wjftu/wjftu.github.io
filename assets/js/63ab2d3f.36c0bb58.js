"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[8526],{5680:(e,n,r)=>{r.d(n,{xA:()=>i,yg:()=>d});var a=r(6540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function t(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,l=function(e,n){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),p=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):t(t({},n),e)),r},i=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=l,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return r?a.createElement(d,t(t({ref:n},i),{},{components:r})):a.createElement(d,t({ref:n},i))}));function d(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=r.length,t=new Array(o);t[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:l,t[1]=s;for(var p=2;p<o;p++)t[p]=r[p];return a.createElement.apply(null,t)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2696:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(8168),l=(r(6540),r(5680));const o={},t="Config",s={unversionedId:"springcloud/config",id:"springcloud/config",title:"Config",description:"\u6587\u6863\uff1a",source:"@site/note/springcloud/config.md",sourceDirName:"springcloud",slug:"/springcloud/config",permalink:"/note/springcloud/config",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spring Cloud",permalink:"/note/springcloud/"},next:{title:"Eureka",permalink:"/note/springcloud/eureka"}},c=[{value:"\u670d\u52a1\u7aef\u642d\u5efa",id:"\u670d\u52a1\u7aef\u642d\u5efa",children:[],level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",children:[],level:3}],p={toc:c},i="wrapper";function u(e){let{components:n,...r}=e;return(0,l.yg)(i,(0,a.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"config"},"Config"),(0,l.yg)("p",null,"\u6587\u6863\uff1a",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("a",{parentName:"p",href:"https://docs.spring.io/spring-cloud-config/docs/current/reference/html/"},"https://docs.spring.io/spring-cloud-config/docs/current/reference/html/")),(0,l.yg)("p",null,"Spring Cloud Config \u63d0\u4f9b\u4e86\u914d\u7f6e\u7ba1\u7406\uff0c\u5c06\u914d\u7f6e\u62bd\u8c61\u5230\u670d\u52a1\u63a5\u53e3\u4e2d\uff0c\u96c6\u4e2d\u7ba1\u7406\u914d\u7f6e\uff0c\u53ef\u4ee5\u5bf9\u914d\u7f6e\u8fdb\u884c\u7248\u672c\u7ba1\u7406"),(0,l.yg)("p",null,"\u5176\u5b83\u7c7b\u4f3c\u4ea7\u54c1\uff1a  "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Eureka \u901a\u5e38\u7528\u4f5c\u670d\u52a1\u53d1\u73b0\uff0c\u4e5f\u53ef\u4ee5\u7ba1\u7406\u952e\u503c\u914d\u7f6e  "),(0,l.yg)("li",{parentName:"ul"},"Consul \u5e7f\u6cdb\u4f7f\u7528\u7684 Go \u8bed\u8a00\u5f00\u53d1\u7684\u914d\u7f6e\u4e2d\u5fc3  "),(0,l.yg)("li",{parentName:"ul"},"Nacos \u56fd\u5185\u7528\u7684\u6bd4\u8f83\u591a\uff0cSpring Cloud Alibaba \u7ec4\u4ef6")),(0,l.yg)("p",null,"\u4e0b\u9762\u793a\u4f8b\u4ee5 jubilee \u4e3a\u4f8b"),(0,l.yg)("h3",{id:"\u670d\u52a1\u7aef\u642d\u5efa"},"\u670d\u52a1\u7aef\u642d\u5efa"),(0,l.yg)("p",null,"\u5f15\u5165\u4f9d\u8d56"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-config-server</artifactId>\n</dependency>\n")),(0,l.yg)("p",null,"\u542f\u52a8\u7c7b\u52a0\u4e0a\u6ce8\u89e3 ",(0,l.yg)("inlineCode",{parentName:"p"},"@EnableConfigServer")," "),(0,l.yg)("p",null,"Spring Cloud Config \u652f\u6301\u4ee5\u591a\u79cd\u65b9\u5f0f\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6\uff0c\u5305\u62ec\u6587\u4ef6\uff0cgit\uff0csvn\uff0cs3 \u7b49\u7b49"),(0,l.yg)("p",null,"\u6587\u4ef6\u7cfb\u7edf\u7684\u914d\u7f6e\uff0c\u9700\u8981\u8bbe\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"spring.profiles.active=native")," \uff0c\u7136\u540e\u5728 search-locations \u4e2d\u914d\u7f6e\u914d\u7f6e\u6587\u4ef6\u8def\u5f84"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},"spring:\n  application:\n    name: config-server\n  profiles:\n    active: native\n  cloud:\n    config:\n      server:\n        native:\n          search-locations:\n            - classpath:/config\nserver:\n  port: 8888\n")),(0,l.yg)("p",null,"\u4f8b\u5982\u8fd9\u4e2a\u8def\u5f84\u4e0b\u6709 consumer.yml \u6587\u4ef6"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},"spring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/test?useUnicode=true\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    username: user1\n    password: 123456\n")),(0,l.yg)("p",null,"\u4ee5\u53ca\u4e00\u4e2a dev \u73af\u5883\u7684\u914d\u7f6e consumer-dev.yml"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},"spring:\n  datasource:\n    password: 1234567777\n")),(0,l.yg)("p",null,"\u901a\u8fc7 http \u8bf7\u6c42\u83b7\u53d6\u914d\u7f6e\u7684\u65b9\u5f0f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/{application}/{profile}[/{label}]\n/{application}-{profile}.yml\n/{application}-{profile}.properties\n/{label}/{application}-{profile}.yml\n/{label}/{application}-{profile}.properties\n")),(0,l.yg)("p",null,"profile \u901a\u5e38\u7528\u4e8e\u8868\u793a\u73af\u5883\u4fe1\u606f\uff0c\u53ef\u4ee5\u7528\u9017\u53f7\u5206\u9694\u914d\u7f6e\u591a\u4e2a\u3002label \u901a\u5e38\u662f git \u5206\u652f\uff0c\u7528\u4e8e\u7248\u672c\u7ba1\u7406\uff0c\u9ed8\u8ba4 master"),(0,l.yg)("p",null,"\u542f\u52a8\u670d\u52a1\uff0c\u8bbf\u95ee http://localhost:8888/consumer/default \u5f97\u5230"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "consumer",\n  "profiles": [\n    "default"\n  ],\n  "label": null,\n  "version": null,\n  "state": null,\n  "propertySources": [\n    {\n      "name": "classpath:/config/consumer.yml",\n      "source": {\n        "spring.datasource.url": "jdbc:mysql://localhost:3306/test?useUnicode=true",\n        "spring.datasource.driver-class-name": "com.mysql.cj.jdbc.Driver",\n        "spring.datasource.username": "user1",\n        "spring.datasource.password": 123456\n      }\n    }\n  ]\n}\n')),(0,l.yg)("p",null,"\u8bbf\u95ee http://localhost:8888/consumer/dev \u5f97\u5230"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "consumer",\n  "profiles": [\n    "dev"\n  ],\n  "label": null,\n  "version": null,\n  "state": null,\n  "propertySources": [\n    {\n      "name": "classpath:/config/consumer-dev.yml",\n      "source": {\n        "spring.datasource.password": 1234567777\n      }\n    },\n    {\n      "name": "classpath:/config/consumer.yml",\n      "source": {\n        "spring.datasource.url": "jdbc:mysql://localhost:3306/test?useUnicode=true",\n        "spring.datasource.driver-class-name": "com.mysql.cj.jdbc.Driver",\n        "spring.datasource.username": "user1",\n        "spring.datasource.password": 123456\n      }\n    }\n  ]\n}\n')),(0,l.yg)("p",null,"Spring \u89e3\u6790\u5c5e\u6027\u65f6\uff0c\u5148\u627e\u5230\u9ed8\u8ba4\u5c5e\u6027\uff0c\u5982\u679c\u6709\u7279\u5b9a\u73af\u5883\u7684\u5c5e\u6027\uff0c\u4f1a\u8986\u76d6\u9ed8\u8ba4\u5c5e\u6027\uff0c\u4f8b\u5982\u8bfb\u53d6 dev \u73af\u5883\u914d\u7f6e\u7684\u5c5e\u6027\uff0c\u4f1a\u8986\u76d6\u9ed8\u8ba4\u7684\u3002"),(0,l.yg)("p",null,"git \u914d\u7f6e\u793a\u4f8b"),(0,l.yg)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u672c\u5730\u4ed3\u5e93\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u8fdc\u7a0b\u4ed3\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},"spring:\n  application:\n    name: config-server\n  cloud:\n    config:\n      server:\n        git:\n          uri: /path/to/repository\n")),(0,l.yg)("p",null,"\u5728 /path/to/repository \u4e0b\u6709 consumer.yml \u6587\u4ef6\uff0c\u6709 master \u548c labelA \u4e24\u4e2a branch"),(0,l.yg)("p",null,"\u8bbf\u95ee http://localhost:8888/consumer/default/ \u5f97\u5230 master \u7684\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "consumer",\n  "profiles": [\n    "default"\n  ],\n  "label": null,\n  "version": "ebe3d114d8c0ccec95d754f5a4f7d86e6b7b60ee",\n  "state": null,\n  "propertySources": [\n    {\n      "name": "/Users/mac/Documents/tmp/g/consumer.yml",\n      "source": {\n        "spring.datasource.url": "jdbc:mysql://localhost:3306/test?useUnicode=true",\n        "spring.datasource.driver-class-name": "com.mysql.cj.jdbc.Driver",\n        "spring.datasource.username": "user1",\n        "spring.datasource.password": 12345677\n      }\n    }\n  ]\n}\n')),(0,l.yg)("p",null,"\u8bbf\u95ee http://localhost:8888/consumer/default/labelA \u5f97\u5230 labelA \u5206\u652f\u7684\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "consumer",\n  "profiles": [\n    "default"\n  ],\n  "label": "labelA",\n  "version": "53986b32c389a5e7ac5f330f5315a25f4a115faa",\n  "state": null,\n  "propertySources": [\n    {\n      "name": "/Users/mac/Documents/tmp/g/consumer.yml",\n      "source": {\n        "spring.datasource.url": "jdbc:mysql://localhost:3306/test?useUnicode=true",\n        "spring.datasource.driver-class-name": "com.mysql.cj.jdbc.Driver",\n        "spring.datasource.username": "user1",\n        "spring.datasource.password": 123456,\n        "myLabel": "AAA"\n      }\n    }\n  ]\n}\n')),(0,l.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 composite \u8fdb\u884c\u6df7\u5408\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"spring:\n  application:\n    name: config-server\n  profiles:\n    active: native\n  cloud:\n    config:\n      server:\n        composite:\n          - type: native\n            searchLocations: classpath:/config\n          - type: git\n            uri: /path/to/git\n")),(0,l.yg)("h3",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,l.yg)("p",null,"\u5f15\u5165 maven \u4f9d\u8d56"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-config</artifactId>\n</dependency>\n")),(0,l.yg)("p",null,"\u65e9\u671f\u9700\u8981\u7528 bootstrap.yml \u914d\u7f6e\uff0c\u73b0\u5728\u9ed8\u8ba4\u4e0d\u652f\u6301 bootstrap.yml \u4e86\uff0c\u76f4\u63a5\u5728 application.yml \u914d\u7f6e"),(0,l.yg)("p",null,"application profile label \u5bf9\u5e94\u7684\u914d\u7f6e\u5982\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 spring.cloud.config.name \u914d\u7f6e\u591a\u4e2a application"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'"application" = ${spring.application.name}\n"profile" = ${spring.profiles.active} (actually Environment.getActiveProfiles())\n"label" = ${spring.cloud.config.label}\n')),(0,l.yg)("p",null,"spring.config.import \u7528\u6765\u914d\u7f6e\u914d\u7f6e\u4fe1\u606f\uff0c\u4e0d\u4ec5\u4ec5\u662f\u914d\u7f6e\u4e2d\u5fc3\u5730\u5740\uff0c\u8fd8\u53ef\u4ee5\u914d\u7f6e\u5176\u4ed6\u914d\u7f6e\u6765\u6e90\u3002optinal \u8868\u793a\u83b7\u53d6\u4e0d\u5230\u914d\u7f6e\u670d\u52a1\u4ecd\u7136\u80fd\u542f\u52a8"),(0,l.yg)("p",null,"\u914d\u7f6e\u4e2d\u5fc3\u5730\u5740\u8981\u52a0\u4e0a\u7ed3\u5c3e\u7684\u659c\u6760\uff0c\u4e0d\u7136\u4f1a\u62a5\u9519\uff1aFile extension is not known to any PropertySourceLoader. If the location is meant to reference a directory, it must end in '/' or File.separator"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},"spring:\n  config:\n    import: optinal:configserver:http://localhost:8888/\n  cloud:\n    config:\n      name: consumer\n")))}u.isMDXComponent=!0}}]);