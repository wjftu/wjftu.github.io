"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[1561],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>b});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),y=o,b=s["".concat(c,".").concat(y)]||s[y]||m[y]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7078:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const a={sidebar_position:198},i="198 House Robber",l={unversionedId:"algorithmPractice/leetcode/198",id:"algorithmPractice/leetcode/198",title:"198 House Robber",description:"LeetCode",source:"@site/note/algorithmPractice/leetcode/198.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/198",permalink:"/note/algorithmPractice/leetcode/198",tags:[],version:"current",sidebarPosition:198,frontMatter:{sidebar_position:198},sidebar:"tutorialSidebar",previous:{title:"173 Binary Search Tree Iterator",permalink:"/note/algorithmPractice/leetcode/173"},next:{title:"200 Number of Islands",permalink:"/note/algorithmPractice/leetcode/200"}},c=[],u={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"198-house-robber"},"198 House Robber"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/house-robber/"},"LeetCode")),(0,o.yg)("p",null,"You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night."),(0,o.yg)("p",null,"Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police."),(0,o.yg)("p",null,"Example 1:"),(0,o.yg)("p",null,"Input: nums = ","[1,2,3,1]",(0,o.yg)("br",{parentName:"p"}),"\n","Output: 4",(0,o.yg)("br",{parentName:"p"}),"\n","Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).",(0,o.yg)("br",{parentName:"p"}),"\n","Total amount you can rob = 1 + 3 = 4.  "),(0,o.yg)("p",null,"Example 2:"),(0,o.yg)("p",null,"Input: nums = ","[2,7,9,3,1]",(0,o.yg)("br",{parentName:"p"}),"\n","Output: 12",(0,o.yg)("br",{parentName:"p"}),"\n","Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).",(0,o.yg)("br",{parentName:"p"}),"\n","Total amount you can rob = 2 + 9 + 1 = 12.  "),(0,o.yg)("p",null,"\u7ecf\u5178\u52a8\u6001\u89c4\u5212\u9898\u3002\u62a2\u5230\u5f53\u524d\u623f\u5c4b\u7684\u6536\u83b7\u6700\u5927\u503c\u6709 2 \u79cd\u60c5\u51b5\uff0c\u8981\u4e48\u4e0d\u62a2\u5f53\u524d\u7684\uff0c\u6b64\u65f6\u6700\u5927\u503c\u548c\u62a2\u5230\u4e0a\u4e00\u4e2a\u623f\u5c4b\u76f8\u540c\uff0c\u8981\u4e48\u4e0a\u4e00\u4e2a\u623f\u5c4b\u4e0d\u62a2\uff0c\u6b64\u65f6\u6700\u5927\u503c\u4e3a\u62a2\u5230\u4e0a\u4e0a\u4e2a\u623f\u5c4b\u7684\u6700\u5927\u503c\u52a0\u4e0a\u8fd9\u4e2a\u623f\u5c4b\u7684\u4ef7\u503c\u3002\u65f6\u95f4\u590d\u6742\u5ea6 O(n)\u3002\u6709\u5982\u4e0b\u5173\u7cfb dp","[i]"," = max( nums","[i]","+dp","[i-2]"," , dp","[i-1]"," )"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public int rob(int[] nums) {\n    if(nums==null || nums.length==0) return 0;\n    int pre1=0,pre2=0,max=0;\n    for(int i:nums){\n        max=Math.max(pre1+i,pre2);\n        pre1=pre2;\n        pre2=max;\n    }\n    return max;\n}\n")))}s.isMDXComponent=!0}}]);