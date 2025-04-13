"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[9926],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),g=o,m=s["".concat(l,".").concat(g)]||s[g]||f[g]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7011:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(8168),o=(r(6540),r(5680));const i={sidebar_position:55},a="55 \u4e8c\u53c9\u6811\u7684\u6df1\u5ea6",c={unversionedId:"algorithmPractice/codingInterviews/55",id:"algorithmPractice/codingInterviews/55",title:"55 \u4e8c\u53c9\u6811\u7684\u6df1\u5ea6",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/55.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/55",permalink:"/note/algorithmPractice/codingInterviews/55",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55},sidebar:"tutorialSidebar",previous:{title:"54 \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2ck\u4e2a\u8282\u70b9",permalink:"/note/algorithmPractice/codingInterviews/54"},next:{title:"LeetCode",permalink:"/note/algorithmPractice/leetcode/"}},l=[],p={toc:l},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"55-\u4e8c\u53c9\u6811\u7684\u6df1\u5ea6"},"55 \u4e8c\u53c9\u6811\u7684\u6df1\u5ea6"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b"},"\u725b\u5ba2")),(0,o.yg)("p",null,"\u63cf\u8ff0"),(0,o.yg)("p",null,"\u8f93\u5165\u4e00\u68f5\u4e8c\u53c9\u6811\uff0c\u6c42\u8be5\u6811\u7684\u6df1\u5ea6\u3002\u4ece\u6839\u7ed3\u70b9\u5230\u53f6\u7ed3\u70b9\u4f9d\u6b21\u7ecf\u8fc7\u7684\u7ed3\u70b9\uff08\u542b\u6839\u3001\u53f6\u7ed3\u70b9\uff09\u5f62\u6210\u6811\u7684\u4e00\u6761\u8def\u5f84\uff0c\u6700\u957f\u8def\u5f84\u7684\u957f\u5ea6\u4e3a\u6811\u7684\u6df1\u5ea6\uff0c\u6839\u8282\u70b9\u7684\u6df1\u5ea6\u89c6\u4e3a 1 \u3002"),(0,o.yg)("p",null,"\u9012\u5f52\uff0c\u5982\u679c\u8282\u70b9\u4e3a\u7a7a\u8fd4\u56de 0 \uff0c\u8fd4\u56de\u5f53\u524d\u8282\u70b9\u7684\u5de6\u53f3\u5b50\u8282\u70b9\u7684\u6df1\u5ea6\u6700\u5927\u503c\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public int TreeDepth(TreeNode root) {\n    if(root==null) return 0;\n    return Math.max(TreeDepth(root.left), TreeDepth(root.right))+1;\n}\n")))}s.isMDXComponent=!0}}]);