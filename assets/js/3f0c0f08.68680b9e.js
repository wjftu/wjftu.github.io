"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[2449],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),y=a,g=m["".concat(c,".").concat(y)]||m[y]||s[y]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[m]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8668:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const i={sidebar_position:152},o="152 Maximum Product Subarray",u={unversionedId:"algorithmPractice/leetcode/152",id:"algorithmPractice/leetcode/152",title:"152 Maximum Product Subarray",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/152.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/152",permalink:"/note/algorithmPractice/leetcode/152",tags:[],version:"current",sidebarPosition:152,frontMatter:{sidebar_position:152},sidebar:"tutorialSidebar",previous:{title:"146 LRU Cache",permalink:"/note/algorithmPractice/leetcode/146"},next:{title:"153 Find Minimum in Rotated Sorted Array",permalink:"/note/algorithmPractice/leetcode/153"}},c=[],l={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"152-maximum-product-subarray"},"152 Maximum Product Subarray"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-product-subarray/"},"Leetcode")),(0,a.yg)("p",null,"Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product."),(0,a.yg)("p",null,"The test cases are generated so that the answer will fit in a 32-bit integer."),(0,a.yg)("p",null,"A subarray is a contiguous subsequence of the array."),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("p",null,"Input: nums = ","[2,3,-2,4]",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 6",(0,a.yg)("br",{parentName:"p"}),"\n","Explanation: ","[2,3]"," has the largest product 6.  "),(0,a.yg)("p",null,"Example 2:"),(0,a.yg)("p",null,"Input: nums = ","[-2,0,-1]",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 0",(0,a.yg)("br",{parentName:"p"}),"\n","Explanation: The result cannot be 2, because ","[-2,-1]"," is not a subarray.  "),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\u4f7f\u7528\u52a8\u6001\u89c4\u5212\uff0c\u6bcf\u904d\u5386\u5230\u4e00\u4e2a\u70b9\u65f6\uff0c\u8bb0\u5f55\u5f53\u524d\u4f4d\u7f6e\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\uff0c\u5230\u65b0\u7684\u4f4d\u7f6e\uff0c\u65b0\u7684\u4f4d\u7f6e\u7684\u503c\uff0c\u4ee5\u53ca\u65b0\u7684\u4f4d\u7f6e\u7684\u503c\u4e0e\u524d\u4e00\u4e2a\u8282\u70b9\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u7684\u4e58\u79ef\uff0c\u8fd9\u4e09\u4e2a\u6570\u4e2d\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u662f\u65b0\u4f4d\u7f6e\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u3002\u8bb0\u5f55\u5176\u4e2d\u7684\u6700\u5927\u503c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int maxProduct(int[] nums) {\n        int max=nums[0];\n        int big=max, small=max;\n        for(int i=1;i<nums.length;++i){\n            int cur=nums[i];\n            int next1=cur*big;\n            int next2=cur*small;\n            big=max(cur, next1, next2);\n            small=min(cur, next1, next2);\n            if(big>max) max=big;\n        }\n        return max;\n    }\n    \n    private int max(int i1, int i2, int i3){\n        if(i1>i2){\n            if(i1>i3) return i1;\n        } else {\n            if(i2>i3) return i2;\n        }\n        return i3;\n    }\n    \n    private int min(int i1, int i2, int i3){\n        if(i1<i2){\n            if(i1<i3) return i1;\n        } else {\n            if(i2<i3) return i2;\n        }\n        return i3;\n    }\n}\n")))}m.isMDXComponent=!0}}]);