"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[5699],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>g});var t=n(6540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,g=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function g(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7766:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(8168),i=(n(6540),n(5680));const a={sidebar_position:49},o="49 \u4e11\u6570",c={unversionedId:"algorithmPractice/codingInterviews/49",id:"algorithmPractice/codingInterviews/49",title:"49 \u4e11\u6570",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/49.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/49",permalink:"/note/algorithmPractice/codingInterviews/49",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49},sidebar:"tutorialSidebar",previous:{title:"48 \u6700\u957f\u4e0d\u542b\u91cd\u590d\u5b57\u7b26\u7684\u5b50\u5b57\u7b26\u4e32",permalink:"/note/algorithmPractice/codingInterviews/48"},next:{title:"50 \u7b2c\u4e00\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u5b57\u7b26",permalink:"/note/algorithmPractice/codingInterviews/50"}},l=[],u={toc:l},p="wrapper";function s(e){let{components:r,...n}=e;return(0,i.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"49-\u4e11\u6570"},"49 \u4e11\u6570"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/6aa9e04fc3794f68acf8778237ba065b"},"\u725b\u5ba2")),(0,i.yg)("p",null,"\u63cf\u8ff0"),(0,i.yg)("p",null,"\u628a\u53ea\u5305\u542b\u8d28\u56e0\u5b502\u30013\u548c5\u7684\u6570\u79f0\u4f5c\u4e11\u6570\uff08Ugly Number\uff09\u3002\u4f8b\u59826\u30018\u90fd\u662f\u4e11\u6570\uff0c\u4f4614\u4e0d\u662f\uff0c\u56e0\u4e3a\u5b83\u5305\u542b\u8d28\u56e0\u5b507\u3002 \u4e60\u60ef\u4e0a\u6211\u4eec\u628a1\u5f53\u505a\u662f\u7b2c\u4e00\u4e2a\u4e11\u6570\u3002\u6c42\u6309\u4ece\u5c0f\u5230\u5927\u7684\u987a\u5e8f\u7684\u7b2c n\u4e2a\u4e11\u6570\u3002"),(0,i.yg)("p",null,"\u4f7f\u7528\u4e00\u4e2a\u6570\u7ec4\u8bb0\u5f55\u51fa\u73b0\u8fc7\u7684\u4e11\u6570\u3002\u7b2c\u4e00\u4e2a\u4e11\u6570\u662f 1 \uff0c\u7528\u4e09\u4e2a\u6574\u6570\u8bb0\u5f55\u4e0b\u4e00\u4e2a\u4e58\u4ee5 2\uff0c3\uff0c5 \u7684\u5750\u6807\uff0c\u5f00\u59cb\u65f6\u5b83\u4eec\u90fd\u4e3a 0 \u3002\u5c1d\u8bd5\u7528\u8fd9 3 \u4e2a\u4e0b\u6807\u7684\u6570\u4e58\u4ee5 2\uff0c3\uff0c5\uff0c\u6700\u5c0f\u8005\u4e3a\u4e0b\u4e00\u4e2a\u4e11\u6570\uff0c\u7136\u540e\u66f4\u65b0\u8fd9 3 \u4e2a\u5750\u6807\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    public int GetUglyNumber_Solution(int index) {\n        \n        if(index<=0) return 0;\n        int[] arr = new int[index];\n        arr[0]=1;\n        int i2=0, i3=0, i5=0;\n        for(int i=1;i<index;++i){\n            int pre = arr[i-1];\n            arr[i] = min(arr[i2]*2, arr[i3]*3, arr[i5]*5);\n            int cur = arr[i];\n            while(2*arr[i2]<=cur) i2++;\n            while(3*arr[i3]<=cur) i3++;\n            while(5*arr[i5]<=cur) i5++;\n        }\n        return arr[index-1];\n    }\n    \n    private int min(int i1, int i2, int i3){\n        if(i1<i2){\n            if(i1<i3) return i1;\n            return i3;\n        } else {\n            if(i2<i3) return i2;\n            return i3;\n        }\n    }\n}\n")))}s.isMDXComponent=!0}}]);