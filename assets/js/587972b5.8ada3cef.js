"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[8084],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var o=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=o.createContext({}),g=function(e){var n=o.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=g(e.components);return o.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=g(r),d=t,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return r?o.createElement(m,a(a({ref:n},c),{},{components:r})):o.createElement(m,a({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:t,a[1]=i;for(var g=2;g<l;g++)a[g]=r[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},875:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=r(8168),t=(r(6540),r(5680));const l={title:"HelloWorld",sidebar_position:2},a=void 0,i={unversionedId:"springboot/helloworld",id:"springboot/helloworld",title:"HelloWorld",description:"HelloWorld",source:"@site/note/springboot/helloworld.md",sourceDirName:"springboot",slug:"/springboot/helloworld",permalink:"/note/springboot/helloworld",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"HelloWorld",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Spring Boot",permalink:"/note/springboot/"},next:{title:"\u4ece\u96f6\u5f00\u59cb\u5199\u4e00\u4e2a Spring",permalink:"/note/springboot/spring-boot-from-scratch"}},p=[{value:"HelloWorld",id:"helloworld",children:[],level:3},{value:"\u597d\u7528\u7684\u5de5\u5177",id:"\u597d\u7528\u7684\u5de5\u5177",children:[],level:3}],g={toc:p},c="wrapper";function s(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,o.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h3",{id:"helloworld"},"HelloWorld"),(0,t.yg)("p",null,"\u65b0\u5efa\u4e00\u4e2a web \u9879\u76ee\u7684 HelloWorld"),(0,t.yg)("p",null,"\u5f15\u5165 maven \u4f9d\u8d56\uff0c pom \u6587\u4ef6\u5982\u4e0b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.6.3</version>\n        <relativePath/> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <groupId>com.wjftu</groupId>\n    <artifactId>springbootdemo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>springbootdemo</name>\n    <description>Demo project for Spring Boot</description>\n    <properties>\n        <java.version>8</java.version>\n    </properties>\n    <dependencies>\n\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n\n    </dependencies>\n\n    \x3c!-- \u7528\u4e8e\u6253\u5305\u7684 maven \u63d2\u4ef6 --\x3e\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),(0,t.yg)("p",null,"\u542f\u52a8\u7c7b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"package demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n//\u544a\u8bc9\u7f16\u8bd1\u5668\u8fd9\u662f\u4e2a Spring Boot \u5e94\u7528\n@SpringBootApplication\npublic class SpringBootDemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(SpringBootDemoApplication.class, args);\n    }\n}\n")),(0,t.yg)("p",null,"\u5728\u542f\u52a8\u7c7b\u6240\u5728\u7684\u5305\u6216\u5b50\u5305\u4e0b\u5efa\u4e00\u4e2a Controller \u7c7b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'package demo.controller;\n\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n// Rest \u98ce\u683c\u7684 controller \n@RestController\n@RequestMapping("/hello")\npublic class HelloController {\n\n    @RequestMapping("/springboot")\n    public String hello(){\n        return "hello spring boot";\n    }\n\n}\n')),(0,t.yg)("p",null,"\u8fd0\u884c\u542f\u52a8\u7c7b\u7684 main \u65b9\u6cd5\uff0c\u8bbf\u95ee localhost:8080/hello/springboot \uff0c\u663e\u793a ",(0,t.yg)("inlineCode",{parentName:"p"},"hello spring boot")),(0,t.yg)("p",null,"\u5e76\u6ca1\u6709\u914d\u7f6e tomcat \u7b49 web \u670d\u52a1\u5668\uff08\u4f7f\u7528\u4e86\u5185\u5d4c\u7684 tomcat \u670d\u52a1\u5668\uff09\uff0c\u4e5f\u6ca1\u6709\u5bf9\u5e94\u7528\u8fdb\u884c\u914d\u7f6e\uff0c\u76f4\u63a5\u5c31\u6210\u529f\u642d\u5efa\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 web \u670d\u52a1\uff01"),(0,t.yg)("h3",{id:"\u597d\u7528\u7684\u5de5\u5177"},"\u597d\u7528\u7684\u5de5\u5177"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"lombok")),(0,t.yg)("p",null,"\u53ef\u4ee5\u65b9\u4fbf\u7684\u7701\u53bb\u5f88\u591a\u6a21\u7248\u4ee3\u7801"),(0,t.yg)("p",null,"\u5728 Intellij \u4e2d\u5b89\u88c5 lombok \u63d2\u4ef6\u5e76\u6dfb\u52a0\u4f9d\u8d56"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <optional>true</optional>\n</dependency>\n")),(0,t.yg)("p",null,"\u5e38\u7528\u65b9\u6cd5\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"@data \u81ea\u52a8\u751f\u6210 getter setter toString equals hashCode \u65b9\u6cd5  "),(0,t.yg)("li",{parentName:"ul"},"@Getter/Setter \u81ea\u52a8\u751f\u6210 getter setter \u65b9\u6cd5  "),(0,t.yg)("li",{parentName:"ul"},"@ToString \u81ea\u52a8\u751f\u6210 toString \u65b9\u6cd5  "),(0,t.yg)("li",{parentName:"ul"},"@EqualsAndHashcode \u81ea\u52a8\u6839\u636e\u5b57\u6bb5\u91cd\u5199 equals \u548c hashcode \u65b9\u6cd5  "),(0,t.yg)("li",{parentName:"ul"},"@NoArgsConstructor/AllArgsConstructor \u81ea\u52a8\u751f\u6210\u65e0\u53c2\u3001\u5168\u53c2\u6784\u9020\u51fd\u6570  ")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"devtools")),(0,t.yg)("p",null,"\u6309 ctrl+F9 \u6216 command+F9 \u53ef\u4ee5\u66f4\u65b0\u5e76\u542f\u52a8\u9879\u76ee"),(0,t.yg)("p",null,"\u5982\u679c\u9700\u8981\u771f\u6b63\u7684\u6539\u53d8\u4ee3\u7801\u81ea\u52a8\u66f4\u65b0\uff0c\u53ea\u6709\u7528\u4ed8\u8d39\u7684 JRebel ."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-devtools</artifactId>\n    <scope>runtime</scope>\n    <optional>true</optional>\n</dependency>\n")))}s.isMDXComponent=!0}}]);