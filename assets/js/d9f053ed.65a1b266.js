"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[3927],{1195:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(8168),i=(n(6540),n(5680));const o={sidebar_position:24},a="24 \u53cd\u8f6c\u94fe\u8868",c={unversionedId:"algorithmPractice/codingInterviews/24",id:"algorithmPractice/codingInterviews/24",title:"24 \u53cd\u8f6c\u94fe\u8868",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/24.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/24",permalink:"/note/algorithmPractice/codingInterviews/24",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"23 \u94fe\u8868\u4e2d\u73af\u7684\u5165\u53e3\u7ed3\u70b9",permalink:"/note/algorithmPractice/codingInterviews/23"},next:{title:"25 \u5408\u5e76\u4e24\u4e2a\u6392\u5e8f\u7684\u94fe\u8868",permalink:"/note/algorithmPractice/codingInterviews/25"}},l=[],p={toc:l},u="wrapper";function s(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"24-\u53cd\u8f6c\u94fe\u8868"},"24 \u53cd\u8f6c\u94fe\u8868"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca"},"\u725b\u5ba2")),(0,i.yg)("p",null,"\u63cf\u8ff0"),(0,i.yg)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5355\u94fe\u8868\u7684\u5934\u7ed3\u70b9pHead(\u8be5\u5934\u8282\u70b9\u662f\u6709\u503c\u7684\uff0c\u6bd4\u5982\u5728\u4e0b\u56fe\uff0c\u5b83\u7684val\u662f1)\uff0c\u957f\u5ea6\u4e3an\uff0c\u53cd\u8f6c\u8be5\u94fe\u8868\u540e\uff0c\u8fd4\u56de\u65b0\u94fe\u8868\u7684\u8868\u5934\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\u8282\u70b9 `<-` \u4e0a\u4e00\u4e2a\u8282\u70b9   \u5f53\u524d\u8282\u70b9 -> \u4e0b\u4e00\u4e2a\u8282\u70b9 -> \u8282\u70b9\n")),(0,i.yg)("p",null,"\u9700\u8981 3 \u4e2a\u6307\u9488\uff0c\u4e00\u4e2a\u6307\u5411\u5f53\u524d\u8282\u70b9\uff0c\u4e00\u4e2a\u6307\u5411\u4e0a\u4e00\u4e2a\u8282\u70b9\uff0c\u4e00\u4e2a\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\u3002\u56e0\u4e3a\u53cd\u8f6c\u8fc7\u7a0b\u4e2d\uff0c\u5f53\u524d\u8282\u70b9\u9700\u8981\u5c06\u6307\u9488\u4ece\u4e0b\u4e00\u4e2a\u8282\u70b9\u6307\u5411\u4e0a\u4e00\u4e2a\u8282\u70b9\uff0c\u9700\u8981\u4fdd\u5b58\u4e0a\u4e00\u4e2a\u8282\u70b9\u7684\u4fe1\u606f\uff0c\u540c\u65f6\u5f53\u524d\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u9700\u8981\u8df3\u5230\u4e0b\u4e00\u4e2a\u8282\u70b9\u8fdb\u884c\u64cd\u4f5c\uff0c\u56e0\u6b64\u9700\u8981\u4e00\u4e2a\u6307\u9488\u4fdd\u5b58\u4e0b\u4e00\u4e2a\u8282\u70b9\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"/*\npublic class ListNode {\n    int val;\n    ListNode next = null;\n\n    ListNode(int val) {\n        this.val = val;\n    }\n}*/\npublic class Solution {\n    public ListNode ReverseList(ListNode head) {\n        ListNode cur=head, next, pre=null;\n        while(cur != null){\n            next = cur.next;\n            cur.next = pre;\n            pre = cur;\n            cur = next;\n        }\n        return pre;\n    }\n}\n")))}s.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,g=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);