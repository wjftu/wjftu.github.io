"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[1395],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7482:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const o={sidebar_position:9},i="9 \u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217",c={unversionedId:"algorithmPractice/codingInterviews/9",id:"algorithmPractice/codingInterviews/9",title:"9 \u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/9.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/9",permalink:"/note/algorithmPractice/codingInterviews/9",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8 \u4e8c\u53c9\u6811\u7684\u4e0b\u4e00\u4e2a\u7ed3\u70b9",permalink:"/note/algorithmPractice/codingInterviews/8"},next:{title:"10 \u6590\u6ce2\u90a3\u5951\u6570\u5217 & \u8df3\u53f0\u9636 & \u77e9\u5f62\u8986\u76d6",permalink:"/note/algorithmPractice/codingInterviews/10"}},p=[],l={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"9-\u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217"},"9 \u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6"},"\u725b\u5ba2")),(0,a.yg)("p",null,"\u63cf\u8ff0",(0,a.yg)("br",{parentName:"p"}),"\n","\u7528\u4e24\u4e2a\u6808\u6765\u5b9e\u73b0\u4e00\u4e2a\u961f\u5217\uff0c\u5206\u522b\u5b8c\u6210\u5728\u961f\u5217\u5c3e\u90e8\u63d2\u5165\u6574\u6570(push)\u548c\u5728\u961f\u5217\u5934\u90e8\u5220\u9664\u6574\u6570(pop)\u7684\u529f\u80fd\u3002 \u961f\u5217\u4e2d\u7684\u5143\u7d20\u4e3aint\u7c7b\u578b\u3002\u4fdd\u8bc1\u64cd\u4f5c\u5408\u6cd5\uff0c\u5373\u4fdd\u8bc1pop\u64cd\u4f5c\u65f6\u961f\u5217\u5185\u5df2\u6709\u5143\u7d20\u3002"),(0,a.yg)("p",null,"\u793a\u4f8b:"),(0,a.yg)("p",null,"\u8f93\u5165:",(0,a.yg)("br",{parentName:"p"}),"\n",'["PSH1","PSH2","POP","POP"]',"\n\u8fd4\u56de:",(0,a.yg)("br",{parentName:"p"}),"\n","1,2"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\u4e00\u4e2a\u6808\u4e0d\u65ad\u5f39\u51fa\u5143\u7d20\u5e76\u5c06\u5143\u7d20\u538b\u5165\u53e6\u4e00\u4e2a\u6808\uff0c\u5373\u53ef\u5b9e\u73b0\u987a\u5e8f\u8c03\u8f6c\u3002"),(0,a.yg)("p",null,"\uff08\u8fd9\u9898 java \u7528 Stack \u4f5c\u4e3a\u6808\uff0c\u5b9e\u9645\u4e0a\u5e76\u4e0d\u63a8\u8350\u7528 Stack\uff0c\u56e0\u4e3a Stack \u662f\u7ee7\u627f Vector \u7684\u4e00\u4e2a\u7c7b\uff0c\u800c\u4e0d\u662f\u63a5\u53e3\uff0c\u800c\u4e14\u57fa\u4e8e\u94fe\u8868\u5b9e\u73b0\u6808\u6bd4\u6570\u7ec4\u66f4\u597d\u3002\u63a8\u8350\u4f7f\u7528 Deuqe\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"import java.util.Stack;\n\npublic class Solution {\n    Stack<Integer> stack1 = new Stack<Integer>();\n    Stack<Integer> stack2 = new Stack<Integer>();\n    \n    public void push(int node) {\n        stack1.push(node);\n    }\n    \n    public int pop() {\n        if(stack2.isEmpty()){\n            while(!stack1.isEmpty()){\n                stack2.push(stack1.pop());\n            }\n        }\n        return stack2.pop();\n    }\n}\n")))}u.isMDXComponent=!0}}]);