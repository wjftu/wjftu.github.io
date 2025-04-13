"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[1083],{29:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(8168),i=(t(6540),t(5680));const o={sidebar_position:40},a="40 \u6700\u5c0f\u7684K\u4e2a\u6570",l={unversionedId:"algorithmPractice/codingInterviews/40",id:"algorithmPractice/codingInterviews/40",title:"40 \u6700\u5c0f\u7684K\u4e2a\u6570",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/40.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/40",permalink:"/note/algorithmPractice/codingInterviews/40",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"39 \u6570\u7ec4\u4e2d\u51fa\u73b0\u6b21\u6570\u8d85\u8fc7\u4e00\u534a\u7684\u6570\u5b57",permalink:"/note/algorithmPractice/codingInterviews/39"},next:{title:"41 \u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u4f4d\u6570",permalink:"/note/algorithmPractice/codingInterviews/41"}},c=[],p={toc:c},u="wrapper";function s(e){let{components:r,...t}=e;return(0,i.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"40-\u6700\u5c0f\u7684k\u4e2a\u6570"},"40 \u6700\u5c0f\u7684K\u4e2a\u6570"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf"},"\u725b\u5ba2")),(0,i.yg)("p",null,"\u63cf\u8ff0"),(0,i.yg)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u53ef\u80fd\u6709\u91cd\u590d\u503c\u7684\u6570\u7ec4\uff0c\u627e\u51fa\u5176\u4e2d\u4e0d\u53bb\u91cd\u7684\u6700\u5c0f\u7684 k \u4e2a\u6570\u3002\u4f8b\u5982\u6570\u7ec4\u5143\u7d20\u662f4,5,1,6,2,7,3,8\u8fd98\u4e2a\u6570\u5b57\uff0c\u5219\u6700\u5c0f\u76844\u4e2a\u6570\u5b57\u662f1,2,3,4(\u4efb\u610f\u987a\u5e8f\u7686\u53ef)\u3002",(0,i.yg)("br",{parentName:"p"}),"\n","\u6570\u636e\u8303\u56f4\uff1a0 \u2264 k , n \u2264 10000 \uff0c\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u6570\u7684\u5927\u5c0f 0 \u2264 val \u2264 1000",(0,i.yg)("br",{parentName:"p"}),"\n","\u8981\u6c42\uff1a\u7a7a\u95f4\u590d\u6742\u5ea6 O(n)O(n) \uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(nlogn)O(nlogn)  "),(0,i.yg)("p",null,"\u793a\u4f8b1"),(0,i.yg)("p",null,"\u8f93\u5165\uff1a","[4,5,1,6,2,7,3,8]",",4",(0,i.yg)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u503c\uff1a","[1,2,3,4]",(0,i.yg)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u8fd4\u56de\u6700\u5c0f\u76844\u4e2a\u6570\u5373\u53ef\uff0c\u8fd4\u56de","[1,3,2,4]","\u4e5f\u53ef\u4ee5        "),(0,i.yg)("p",null,"\u793a\u4f8b2  "),(0,i.yg)("p",null,"\u8f93\u5165\uff1a","[1]",",0",(0,i.yg)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u503c\uff1a[]  "),(0,i.yg)("p",null,"\u793a\u4f8b3"),(0,i.yg)("p",null,"\u8f93\u5165\uff1a","[0,1,2,1,2]",",3",(0,i.yg)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u503c\uff1a","[0,1,1]","  "),(0,i.yg)("hr",null),(0,i.yg)("p",null,"\u4f7f\u7528\u4f18\u5148\u961f\u5217\u3002\u65f6\u95f4\u590d\u6742\u5ea6 o(n log k) \uff0c\u9002\u5408\u5904\u7406\u6d77\u91cf\u6570\u636e\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"import java.util.ArrayList;\nimport java.util.PriorityQueue;\npublic class Solution {\n    public ArrayList<Integer> GetLeastNumbers_Solution(int [] input, int k) {\n        ArrayList<Integer> list = new ArrayList<>();\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for(int i:input){\n            pq.add(i);\n        }\n        for(int i=0;i<k;++i){\n            list.add(pq.poll());\n        }\n        return list;\n    }\n}\n")))}s.isMDXComponent=!0},5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(6540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),y=i,m=s["".concat(c,".").concat(y)]||s[y]||g[y]||o;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);