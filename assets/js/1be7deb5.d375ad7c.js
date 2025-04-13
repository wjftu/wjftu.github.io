"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[4108],{1350:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(8168),i=(r(6540),r(5680));const o={sidebar_position:165},a="165 Compare Version Numbers",s={unversionedId:"algorithmPractice/leetcode/165",id:"algorithmPractice/leetcode/165",title:"165 Compare Version Numbers",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/165.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/165",permalink:"/note/algorithmPractice/leetcode/165",tags:[],version:"current",sidebarPosition:165,frontMatter:{sidebar_position:165},sidebar:"tutorialSidebar",previous:{title:"162 Find Peak Element",permalink:"/note/algorithmPractice/leetcode/162"},next:{title:"169 Majority Element",permalink:"/note/algorithmPractice/leetcode/169"}},l=[],p={toc:l},c="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(c,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"165-compare-version-numbers"},"165 Compare Version Numbers"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/compare-version-numbers/"},"Leetcode")),(0,i.yg)("p",null,"Given two version numbers, version1 and version2, compare them."),(0,i.yg)("p",null,"Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers."),(0,i.yg)("p",null,"To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1."),(0,i.yg)("p",null,"Return the following:"),(0,i.yg)("p",null,"If version1 < version2, return -1.",(0,i.yg)("br",{parentName:"p"}),"\n","If version1 > version2, return 1.",(0,i.yg)("br",{parentName:"p"}),"\n","Otherwise, return 0.  "),(0,i.yg)("p",null,"Example 1:"),(0,i.yg)("p",null,'Input: version1 = "1.01", version2 = "1.001"',(0,i.yg)("br",{parentName:"p"}),"\n","Output: 0",(0,i.yg)("br",{parentName:"p"}),"\n",'Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".  '),(0,i.yg)("p",null,"Example 2:"),(0,i.yg)("p",null,'Input: version1 = "1.0", version2 = "1.0.0"\nOutput: 0\nExplanation: version1 does not specify revision 2, which means it is treated as "0".\nExample 3:'),(0,i.yg)("p",null,'Input: version1 = "0.1", version2 = "1.1"',(0,i.yg)("br",{parentName:"p"}),"\n","Output: -1",(0,i.yg)("br",{parentName:"p"}),"\n",'Explanation: version1\'s revision 0 is "0", while version2\'s revision 0 is "1". 0 < 1, so version1 < version2.  '),(0,i.yg)("hr",null),(0,i.yg)("p",null,"\u5b57\u7b26\u4e32\u7684 split \u65b9\u6cd5\uff0c\u4f20\u9012\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u6839\u636e\u5339\u914d\u7ed3\u679c\u628a\u5b57\u7b26\u4e32\u5206\u5272\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4\u3002\u5982\u679c\u65e0\u6cd5\u5339\u914d\uff0c\u4e5f\u4f1a\u5206\u5272\u4e3a\u957f\u5ea6\u4e3a 1 \u7684\u6570\u7ec4\uff0c\u4e5f\u5c31\u662f\u5b57\u7b26\u4e32\u672c\u8eab\u3002 Integer \u7684 valueOf \u65b9\u6cd5\uff0c\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6574\u6570\uff0c\u8f6c\u6362\u4e0d\u4e86\u4f1a\u629b\u9519\uff0c\u8f6c\u6362\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u53bb\u6389\u524d\u9762\u7684 0 \u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'public int compareVersion(String version1, String version2) {\n    String[] ss1 = version1.split("\\\\.");\n    String[] ss2 = version2.split("\\\\.");\n    \n    for(int i=0;i<ss1.length || i<ss2.length;++i){\n        int i1 = i<ss1.length ? Integer.valueOf(ss1[i]):0;\n        int i2 = i<ss2.length ? Integer.valueOf(ss2[i]):0;\n        int cmp = i1-i2;\n        if(cmp==0) continue;\n        return cmp>0?1:-1;\n    }\n    return 0;\n}\n')))}u.isMDXComponent=!0},5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>v});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,v=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return r?t.createElement(v,a(a({ref:n},c),{},{components:r})):t.createElement(v,a({ref:n},c))}));function v(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);