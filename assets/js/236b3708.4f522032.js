"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[8564],{4144:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(8168),i=(t(6540),t(5680));const o={sidebar_position:43},a="43 \u6574\u6570\u4e2d1\u51fa\u73b0\u7684\u6b21\u6570\uff08\u4ece1\u5230n\u6574\u6570\u4e2d1\u51fa\u73b0\u7684\u6b21\u6570\uff09",c={unversionedId:"algorithmPractice/codingInterviews/43",id:"algorithmPractice/codingInterviews/43",title:"43 \u6574\u6570\u4e2d1\u51fa\u73b0\u7684\u6b21\u6570\uff08\u4ece1\u5230n\u6574\u6570\u4e2d1\u51fa\u73b0\u7684\u6b21\u6570\uff09",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/43.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/43",permalink:"/note/algorithmPractice/codingInterviews/43",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43},sidebar:"tutorialSidebar",previous:{title:"42 \u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",permalink:"/note/algorithmPractice/codingInterviews/42"},next:{title:"44 \u6570\u5b57\u5e8f\u5217\u4e2d\u67d0\u4e00\u4f4d\u7684\u6570\u5b57",permalink:"/note/algorithmPractice/codingInterviews/44"}},l=[],p={toc:l},u="wrapper";function s(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"43-\u6574\u6570\u4e2d1\u51fa\u73b0\u7684\u6b21\u6570\u4ece1\u5230n\u6574\u6570\u4e2d1\u51fa\u73b0\u7684\u6b21\u6570"},"43 \u6574\u6570\u4e2d1\u51fa\u73b0\u7684\u6b21\u6570\uff08\u4ece1\u5230n\u6574\u6570\u4e2d1\u51fa\u73b0\u7684\u6b21\u6570\uff09"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6"},"\u725b\u5ba2")),(0,i.yg)("p",null,"\u63cf\u8ff0",(0,i.yg)("br",{parentName:"p"}),"\n","\u8f93\u5165\u4e00\u4e2a\u6574\u6570 n \uff0c\u6c42 1\uff5en \u8fd9 n \u4e2a\u6574\u6570\u7684\u5341\u8fdb\u5236\u8868\u793a\u4e2d 1 \u51fa\u73b0\u7684\u6b21\u6570",(0,i.yg)("br",{parentName:"p"}),"\n","\u4f8b\u5982\uff0c 1~13 \u4e2d\u5305\u542b 1 \u7684\u6570\u5b57\u6709 1 \u3001 10 \u3001 11 \u3001 12 \u3001 13 \u56e0\u6b64\u5171\u51fa\u73b0 6 \u6b21  "),(0,i.yg)("p",null,"\u6ce8\u610f\uff1a11 \u8fd9\u79cd\u60c5\u51b5\u7b97\u4e24\u6b21"),(0,i.yg)("p",null,"\u793a\u4f8b1",(0,i.yg)("br",{parentName:"p"}),"\n","\u8f93\u5165\uff1a13",(0,i.yg)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u503c\uff1a6  "),(0,i.yg)("p",null,"\u793a\u4f8b2",(0,i.yg)("br",{parentName:"p"}),"\n","\u8f93\u5165\uff1a0",(0,i.yg)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u503c\uff1a0  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public int NumberOf1Between1AndN_Solution(int n) {\n    int count=0;\n    for(int i=1;i<=n;i*=10){\n        int high=n/i/10;\n        int low=n%i;\n        int cur=n/i%10;\n        if(cur==0){\n            count+=high*i;\n        } else if (cur==1){\n            count+=high*i+low+1;\n        } else {\n            count+=high*i+i;\n        }\n    }\n    return count;\n}\n")))}s.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,f=s["".concat(l,".").concat(m)]||s[m]||g[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);