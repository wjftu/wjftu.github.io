"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[985],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6301:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const l={sidebar_position:744},o="744 Find Smallest Letter Greater Than Target",i={unversionedId:"algorithmPractice/leetcode/744",id:"algorithmPractice/leetcode/744",title:"744 Find Smallest Letter Greater Than Target",description:"Leetcodt",source:"@site/note/algorithmPractice/leetcode/744.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/744",permalink:"/note/algorithmPractice/leetcode/744",tags:[],version:"current",sidebarPosition:744,frontMatter:{sidebar_position:744},sidebar:"tutorialSidebar",previous:{title:"740 Delete and Earn",permalink:"/note/algorithmPractice/leetcode/740"},next:{title:"763 Partition Labels",permalink:"/note/algorithmPractice/leetcode/763"}},c=[],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"744-find-smallest-letter-greater-than-target"},"744 Find Smallest Letter Greater Than Target"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/find-smallest-letter-greater-than-target/"},"Leetcodt")),(0,a.yg)("p",null,"Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target."),(0,a.yg)("p",null,"Note that the letters wrap around."),(0,a.yg)("p",null,"For example, if target == 'z' and letters == ","['a', 'b']",", the answer is 'a'."),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("p",null,"Input: letters = ",'["c","f","j"]',', target = "a"\nOutput: "c"'),(0,a.yg)("p",null,"Example 2:"),(0,a.yg)("p",null,"Input: letters = ",'["c","f","j"]',', target = "c"\nOutput: "f"'),(0,a.yg)("p",null,"Example 3:"),(0,a.yg)("p",null,"Input: letters = ",'["c","f","j"]',', target = "d"\nOutput: "f"'),(0,a.yg)("p",null,"\u5de6\u95ed\u53f3\u5f00\u7684\u4e8c\u5206\u67e5\u627e\u3002\u5982\u679c\u5de6\u6307\u9488\u4e3a\u6570\u7ec4\u957f\u5ea6\uff0c\u8bf4\u660e\u6ca1\u6709\u627e\u5230\uff0c\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public char nextGreatestLetter(char[] letters, char target) {\n    int low=0,high=letters.length;\n    int mid;\n    char c;\n    while(low<high){\n        mid=(low+high)/2;\n        c=letters[mid];\n        if(c<=target){\n            low=mid+1;\n        } else {\n            high=mid;\n        }\n    }\n    return low==letters.length?letters[0]:letters[low];\n}\n")))}u.isMDXComponent=!0}}]);