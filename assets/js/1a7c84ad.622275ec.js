"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[1256],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),y=o,g=m["".concat(c,".").concat(y)]||m[y]||s[y]||l;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1355:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const l={sidebar_position:171},a="171 Excel Sheet Column Number",i={unversionedId:"algorithmPractice/leetcode/171",id:"algorithmPractice/leetcode/171",title:"171 Excel Sheet Column Number",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/171.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/171",permalink:"/note/algorithmPractice/leetcode/171",tags:[],version:"current",sidebarPosition:171,frontMatter:{sidebar_position:171},sidebar:"tutorialSidebar",previous:{title:"169 Majority Element",permalink:"/note/algorithmPractice/leetcode/169"},next:{title:"173 Binary Search Tree Iterator",permalink:"/note/algorithmPractice/leetcode/173"}},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"171-excel-sheet-column-number"},"171 Excel Sheet Column Number"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/excel-sheet-column-number/"},"Leetcode")),(0,o.yg)("p",null,"Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number."),(0,o.yg)("p",null,"For example:"),(0,o.yg)("p",null,"A -> 1",(0,o.yg)("br",{parentName:"p"}),"\n","B -> 2",(0,o.yg)("br",{parentName:"p"}),"\n","C -> 3",(0,o.yg)("br",{parentName:"p"}),"\n","Z -> 26",(0,o.yg)("br",{parentName:"p"}),"\n","AA -> 27",(0,o.yg)("br",{parentName:"p"}),"\n","AB -> 28   "),(0,o.yg)("p",null,"Example 1:"),(0,o.yg)("p",null,'Input: columnTitle = "A"',(0,o.yg)("br",{parentName:"p"}),"\n","Output: 1  "),(0,o.yg)("p",null,"Example 2:"),(0,o.yg)("p",null,'Input: columnTitle = "AB"',(0,o.yg)("br",{parentName:"p"}),"\n","Output: 28  "),(0,o.yg)("p",null,"Example 3:"),(0,o.yg)("p",null,'Input: columnTitle = "ZY"',(0,o.yg)("br",{parentName:"p"}),"\n","Output: 701  "),(0,o.yg)("hr",null),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public int titleToNumber(String columnTitle) {\n    int ret=0;\n    int times=1;\n    for(int i=columnTitle.length()-1;i>=0;--i){\n        ret+=(columnTitle.charAt(i)-'A'+1)*times;\n        times*=26;\n    }\n    return ret;\n}\n")))}m.isMDXComponent=!0}}]);