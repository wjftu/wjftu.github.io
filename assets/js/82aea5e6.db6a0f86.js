"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[2004],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),y=i,d=s["".concat(u,".").concat(y)]||s[y]||g[y]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8645:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(8168),i=(r(6540),r(5680));const o={sidebar_position:7},a="7 Reverse Integer",l={unversionedId:"algorithmPractice/leetcode/7",id:"algorithmPractice/leetcode/7",title:"7 Reverse Integer",description:"Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.",source:"@site/note/algorithmPractice/leetcode/7.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/7",permalink:"/note/algorithmPractice/leetcode/7",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6 ZigZag Conversion",permalink:"/note/algorithmPractice/leetcode/6"},next:{title:"10 Regular Expression Matching",permalink:"/note/algorithmPractice/leetcode/10"}},u=[],c={toc:u},p="wrapper";function s(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"7-reverse-integer"},"7 Reverse Integer"),(0,i.yg)("p",null,"Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range ","[-231, 231 - 1]",", then return 0."),(0,i.yg)("p",null,"Assume the environment does not allow you to store 64-bit integers (signed or unsigned)."),(0,i.yg)("p",null,"Example 1:"),(0,i.yg)("p",null,"Input: x = 123",(0,i.yg)("br",{parentName:"p"}),"\n","Output: 321  "),(0,i.yg)("p",null,"Example 2:"),(0,i.yg)("p",null,"Input: x = -123",(0,i.yg)("br",{parentName:"p"}),"\n","Output: -321  "),(0,i.yg)("p",null,"Example 3:"),(0,i.yg)("p",null,"Input: x = 120",(0,i.yg)("br",{parentName:"p"}),"\n","Output: 21  "),(0,i.yg)("p",null,"Example 4:"),(0,i.yg)("p",null,"Input: x = 0",(0,i.yg)("br",{parentName:"p"}),"\n","Output: 0  "),(0,i.yg)("p",null,"Constraints:"),(0,i.yg)("p",null,"-2^31 <= x <= 2^31 - 1"),(0,i.yg)("hr",null),(0,i.yg)("p",null,"\u7528 long \u6765\u8ba1\u7b97\uff0c\u4e0d\u4f1a\u6ea2\u51fa\uff0c\u5982\u679c\u8d85\u51fa int \u7684\u8303\u56f4\uff0c\u8fd4\u56de 0"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int reverse(int x) {\n        long res=0;\n        while(x!=0){\n            res=res*10+x%10;;\n            x/=10;\n        }\n        if(res>Integer.MAX_VALUE || res<Integer.MIN_VALUE) return 0;\n        return (int)res;\n    }\n}\n")))}s.isMDXComponent=!0}}]);