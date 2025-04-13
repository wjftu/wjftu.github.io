"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[782],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),y=o,g=s["".concat(c,".").concat(y)]||s[y]||m[y]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8827:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const a={sidebar_position:540},i="540 Single Element in a Sorted Array",l={unversionedId:"algorithmPractice/leetcode/540",id:"algorithmPractice/leetcode/540",title:"540 Single Element in a Sorted Array",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/540.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/540",permalink:"/note/algorithmPractice/leetcode/540",tags:[],version:"current",sidebarPosition:540,frontMatter:{sidebar_position:540},sidebar:"tutorialSidebar",previous:{title:"532 K-diff Pairs in an Array",permalink:"/note/algorithmPractice/leetcode/532"},next:{title:"543 Diameter of Binary Tree",permalink:"/note/algorithmPractice/leetcode/543"}},c=[],p={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"540-single-element-in-a-sorted-array"},"540 Single Element in a Sorted Array"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/single-element-in-a-sorted-array/"},"Leetcode")),(0,o.yg)("p",null,"You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once."),(0,o.yg)("p",null,"Return the single element that appears only once."),(0,o.yg)("p",null,"Your solution must run in O(log n) time and O(1) space."),(0,o.yg)("p",null,"Example 1:"),(0,o.yg)("p",null,"Input: nums = ","[1,1,2,3,3,4,4,8,8]",(0,o.yg)("br",{parentName:"p"}),"\n","Output: 2"),(0,o.yg)("p",null,"Example 2:"),(0,o.yg)("p",null,"Input: nums = ","[3,3,7,7,10,11,11]",(0,o.yg)("br",{parentName:"p"}),"\n","Output: 10"),(0,o.yg)("p",null,"\u5728\u5355\u4e2a\u7684\u6570\u5b57\u7684\u5de6\u8fb9\uff0c\u6bcf\u4e2a\u5947\u6570\u4e0b\u6807\u7684\u6570\u5b57\u7b49\u4e8e\u4e0b\u6807\u51cf 1 \u7684\u6570\u5b57\uff0c\u6bcf\u4e2a\u5076\u6570\u4e0b\u6807\u7684\u6570\u5b57\u7b49\u4e8e\u4e0b\u6807\u52a0 1 \u7684\u6570\u5b57\uff1b\u5728\u5355\u4e2a\u6570\u5b57\u7684\u53f3\u8fb9\u76f8\u53cd\u3002\u4f7f\u7528\u548c 1 \u5f02\u6216\u5b9e\u73b0\u4e0b\u6807\u5076\u6570\u52a0 1 \u5947\u6570\u51cf 1 \u3002\u5f53\u67d0\u4e0b\u6807\u7684\u6570\u5b57\u7b49\u4e8e\u5f02\u6216 1 \u4e0b\u6807\u7684\u6570\u5b57\u65f6\u8bf4\u660e\u5355\u4e2a\u6570\u5b57\u5728\u53f3\u8fb9\uff0c\u53cd\u4e4b\u5355\u4e2a\u6570\u5b57\u4e3a\u5f53\u524d\u6570\u5b57\u6216\u5728\u5de6\u8fb9\u3002\u4f7f\u7528\u5de6\u95ed\u53f3\u5f00\u7684\u4e8c\u5206\u67e5\u627e\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 o(log n)\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public int singleNonDuplicate(int[] nums) {\n    int low = 0, high = nums.length-1;\n    int mid, n;\n    while(low<high){\n        mid = (low+high)/2;\n        n = mid ^ 1;\n        if(nums[mid] == nums[n]){\n            low = mid + 1;\n        } else {\n            high = mid;\n        }\n        \n    }\n    return nums[low];\n}\n")))}s.isMDXComponent=!0}}]);