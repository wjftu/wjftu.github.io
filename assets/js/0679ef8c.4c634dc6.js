"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[4163],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),g=o,d=s["".concat(c,".").concat(g)]||s[g]||f[g]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9456:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={sidebar_position:36},l="36 \u4e8c\u53c9\u641c\u7d22\u6811\u4e0e\u53cc\u5411\u94fe\u8868",i={unversionedId:"algorithmPractice/codingInterviews/36",id:"algorithmPractice/codingInterviews/36",title:"36 \u4e8c\u53c9\u641c\u7d22\u6811\u4e0e\u53cc\u5411\u94fe\u8868",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/36.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/36",permalink:"/note/algorithmPractice/codingInterviews/36",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"tutorialSidebar",previous:{title:"35 \u590d\u6742\u94fe\u8868\u7684\u590d\u5236",permalink:"/note/algorithmPractice/codingInterviews/35"},next:{title:"37 \u5e8f\u5217\u5316\u4e8c\u53c9\u6811",permalink:"/note/algorithmPractice/codingInterviews/37"}},c=[],p={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"36-\u4e8c\u53c9\u641c\u7d22\u6811\u4e0e\u53cc\u5411\u94fe\u8868"},"36 \u4e8c\u53c9\u641c\u7d22\u6811\u4e0e\u53cc\u5411\u94fe\u8868"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5"},"\u725b\u5ba2")),(0,o.yg)("p",null,"\u63cf\u8ff0  "),(0,o.yg)("p",null,"\u8f93\u5165\u4e00\u68f5\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u5c06\u8be5\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u6210\u4e00\u4e2a\u6392\u5e8f\u7684\u53cc\u5411\u94fe\u8868\u3002\u5982\u4e0b\u56fe\u6240\u793a  "),(0,o.yg)("p",null,"\u6570\u636e\u8303\u56f4\uff1a\u8f93\u5165\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u6570 0 \\le n \\le 10000\u2264n\u22641000\uff0c\u4e8c\u53c9\u6811\u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684\u503c 0\\le val \\le 10000\u2264val\u22641000",(0,o.yg)("br",{parentName:"p"}),"\n","\u8981\u6c42\uff1a\u7a7a\u95f4\u590d\u6742\u5ea6O(1)O(1)\uff08\u5373\u5728\u539f\u6811\u4e0a\u64cd\u4f5c\uff09\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(n)O(n)  "),(0,o.yg)("p",null,"\u6ce8\u610f:",(0,o.yg)("br",{parentName:"p"}),"\n","1.\u8981\u6c42\u4e0d\u80fd\u521b\u5efa\u4efb\u4f55\u65b0\u7684\u7ed3\u70b9\uff0c\u53ea\u80fd\u8c03\u6574\u6811\u4e2d\u7ed3\u70b9\u6307\u9488\u7684\u6307\u5411\u3002\u5f53\u8f6c\u5316\u5b8c\u6210\u4ee5\u540e\uff0c\u6811\u4e2d\u8282\u70b9\u7684\u5de6\u6307\u9488\u9700\u8981\u6307\u5411\u524d\u9a71\uff0c\u6811\u4e2d\u8282\u70b9\u7684\u53f3\u6307\u9488\u9700\u8981\u6307\u5411\u540e\u7ee7",(0,o.yg)("br",{parentName:"p"}),"\n","2.\u8fd4\u56de\u94fe\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684\u6307\u9488",(0,o.yg)("br",{parentName:"p"}),"\n","3.\u51fd\u6570\u8fd4\u56de\u7684TreeNode\uff0c\u6709\u5de6\u53f3\u6307\u9488\uff0c\u5176\u5b9e\u53ef\u4ee5\u770b\u6210\u4e00\u4e2a\u53cc\u5411\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784",(0,o.yg)("br",{parentName:"p"}),"\n","4.\u4f60\u4e0d\u7528\u8f93\u51fa\u53cc\u5411\u94fe\u8868\uff0c\u7a0b\u5e8f\u4f1a\u6839\u636e\u4f60\u7684\u8fd4\u56de\u503c\u81ea\u52a8\u6253\u5370\u8f93\u51fa  "),(0,o.yg)("p",null,"\u793a\u4f8b1  "),(0,o.yg)("p",null,"\u8f93\u5165\uff1a{10,6,14,4,8,12,16}",(0,o.yg)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u503c\uff1aFrom left to right are:4,6,8,10,12,14,16;From right to left are:16,14,12,10,8,6,4;  "),(0,o.yg)("p",null,"\u793a\u4f8b2"),(0,o.yg)("p",null,"\u8f93\u5165\uff1a{5,4,#,3,#,2,#,1}",(0,o.yg)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u503c\uff1aFrom left to right are:1,2,3,4,5;From right to left are:5,4,3,2,1;"),(0,o.yg)("p",null,"\u9012\u5f52\u3002\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf lastNode \u6807\u8bb0\u4e0a\u4e00\u4e2a\u5143\u7d20\u3002\u9012\u5f52\u5b8c\u5de6\u8fb9\u7684\u5143\u7d20\u540e\uff0c\u5de6\u6307\u9488\u6307\u5411 lastNode \u3002\u8fd4\u56de\u9012\u5f52\u524d\uff0c\u6700\u540e\u4e00\u4e2a\u904d\u5386\u5230\u7684\u5143\u7d20\u662f lastNode \u3002\u6700\u540e\u8fd8\u8981\u627e\u5230\u94fe\u8868\u7684\u5934\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    TreeNode lastNode;\n    public TreeNode Convert(TreeNode pRootOfTree) {\n        if(pRootOfTree==null) return null;\n        lastNode=null;\n        convertNode(pRootOfTree);\n        while(pRootOfTree.left!=null){\n            pRootOfTree=pRootOfTree.left;\n        }\n        return pRootOfTree;\n    }\n    \n    private void convertNode(TreeNode root){\n        if(root.left!=null) convertNode(root.left);\n        root.left=lastNode;\n        if(lastNode!=null) lastNode.right=root;\n        lastNode=root;\n        if(root.right!=null) convertNode(root.right);\n    }\n}\n")))}s.isMDXComponent=!0}}]);