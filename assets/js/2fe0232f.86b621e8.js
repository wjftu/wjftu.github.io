"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[4629],{1053:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(8168),r=(t(6540),t(5680));const o={title:"Liquibase",sidebar_position:11},l=void 0,i={unversionedId:"springboot/data/liquibase",id:"springboot/data/liquibase",title:"Liquibase",description:"Liquibase \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u6570\u636e\u5e93\u53d8\u66f4\u7ba1\u7406\u5de5\u5177\uff0c\u5b83\u5e2e\u52a9\u5f00\u53d1\u56e2\u961f\u8ddf\u8e2a\u3001\u7248\u672c\u63a7\u5236\u548c\u90e8\u7f72\u6570\u636e\u5e93 schema \u7684\u53d8\u5316\u3002\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff0c\u8bb0\u5f55\u53d8\u66f4\u5386\u53f2\u3002",source:"@site/note/springboot/data/liquibase.md",sourceDirName:"springboot/data",slug:"/springboot/data/liquibase",permalink:"/note/springboot/data/liquibase",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Liquibase",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/note/springboot/data/redis"},next:{title:"WEB \u5e94\u7528",permalink:"/note/springboot/web/"}},s=[],g={toc:s},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Liquibase \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u6570\u636e\u5e93\u53d8\u66f4\u7ba1\u7406\u5de5\u5177\uff0c\u5b83\u5e2e\u52a9\u5f00\u53d1\u56e2\u961f\u8ddf\u8e2a\u3001\u7248\u672c\u63a7\u5236\u548c\u90e8\u7f72\u6570\u636e\u5e93 schema \u7684\u53d8\u5316\u3002\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff0c\u8bb0\u5f55\u53d8\u66f4\u5386\u53f2\u3002"),(0,r.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a Spring Boot \u9879\u76ee\uff0c\u6570\u636e\u6e90\u7528 h2 database \uff0c\u5f15\u5165 liquibase \u4f9d\u8d56"),(0,r.yg)("p",null,"build.gradle"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},"plugins {\n    id 'java'\n    id 'org.springframework.boot' version '3.3.10'\n    id 'io.spring.dependency-management' version '1.1.7'\n}\n\ndependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    runtimeOnly 'com.h2database:h2'\n    implementation 'org.liquibase:liquibase-core'\n    testImplementation 'org.springframework.boot:spring-boot-starter-test'\n}\n\n\n")),(0,r.yg)("p",null,"\u914d\u7f6e liquibase \u548c h2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"spring:\n  datasource:\n    url: jdbc:h2:mem:testdb\n    driver-class-name: org.h2.Driver\n    username: sa\n    password: ''\n  jpa:\n    hibernate:\n      ddl-auto: validate\n  liquibase:\n    change-log: classpath:db/changelog/changelog-master.xml\n  h2:\n    console:\n      enabled: true\n      path: /h2-console\n")),(0,r.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a db/changelog/changelog-master.xml \u6587\u4ef6\uff0c\u5f15\u5165\u4e00\u4e2a changelog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<databaseChangeLog\n        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog\n      http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.1.xsd">\n\n    <include file="db/changelog/changes/001-create-person-table.xml"/>\n\n</databaseChangeLog>\n\n')),(0,r.yg)("p",null,"change log \u7684\u5185\u5bb9\u662f\u521b\u5efa\u4e00\u4e2a\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<databaseChangeLog\n        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog\n      http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.1.xsd">\n\n    <changeSet id="1" author="yourname">\n        <createTable tableName="person">\n            <column name="id" type="BIGINT" autoIncrement="true">\n                <constraints primaryKey="true" nullable="false"/>\n            </column>\n            <column name="name" type="VARCHAR(255)"/>\n            <column name="age" type="INT"/>\n        </createTable>\n    </changeSet>\n\n</databaseChangeLog>\n')),(0,r.yg)("p",null,"\u6210\u529f\u521b\u5efa\u4e00\u4e2a table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW COLUMNS FROM PERSON;\nFIELD   TYPE    NULL    KEY     DEFAULT  \nID  BIGINT  NO  PRI NULL\nNAME    CHARACTER VARYING(255)  YES     NULL\nAGE INTEGER YES     NULL\n")),(0,r.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 changelog file \uff0c 002-add-email-column.xml \uff0c\u7ed9\u8868\u6dfb\u52a0\u4e00\u5217\uff0c\u5e76\u628a\u5b83\u52a0\u5165 changelog-master.xml"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},'<changeSet id="2" author="yourname">\n    <addColumn tableName="person">\n        <column name="email" type="VARCHAR(255)"/>\n    </addColumn>\n</changeSet>\n')),(0,r.yg)("p",null,"\u65b0\u7684\u8868\u7ed3\u6784"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"FIELD   TYPE    NULL    KEY     DEFAULT  \nID  BIGINT  NO  PRI NULL\nNAME    CHARACTER VARYING(255)  YES     NULL\nAGE INTEGER YES     NULL\nEMAIL   CHARACTER VARYING(255)  YES     NULL\n")))}p.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=g(t),m=r,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=t[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);