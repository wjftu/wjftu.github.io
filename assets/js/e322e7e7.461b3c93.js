"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[9387],{3730:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={sidebar_position:80},i="80 Remove Duplicates from Sorted Array II",l={unversionedId:"algorithmPractice/leetcode/80",id:"algorithmPractice/leetcode/80",title:"80 Remove Duplicates from Sorted Array II",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/80.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/80",permalink:"/note/algorithmPractice/leetcode/80",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"79 Word Search",permalink:"/note/algorithmPractice/leetcode/79"},next:{title:"82 Remove Duplicates from Sorted List II",permalink:"/note/algorithmPractice/leetcode/82"}},s=[],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"80-remove-duplicates-from-sorted-array-ii"},"80 Remove Duplicates from Sorted Array II"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"},"Leetcode")),(0,a.yg)("p",null,"Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same."),(0,a.yg)("p",null,"Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements."),(0,a.yg)("p",null,"Return k after placing the final result in the first k slots of nums."),(0,a.yg)("p",null,"Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory."),(0,a.yg)("p",null,"Custom Judge:"),(0,a.yg)("p",null,"The judge will test your solution with the following code:"),(0,a.yg)("p",null,"int[] nums = ","[...]","; // Input array",(0,a.yg)("br",{parentName:"p"}),"\n","int[] expectedNums = ","[...]","; // The expected answer with correct length"),(0,a.yg)("p",null,"int k = removeDuplicates(nums); // Calls your implementation"),(0,a.yg)("p",null,"assert k == expectedNums.length;",(0,a.yg)("br",{parentName:"p"}),"\n","for (int i = 0; i < k; i++) {",(0,a.yg)("br",{parentName:"p"}),"\n","assert nums","[i]"," == expectedNums","[i]",";",(0,a.yg)("br",{parentName:"p"}),"\n","}",(0,a.yg)("br",{parentName:"p"}),"\n","If all assertions pass, then your solution will be accepted.  "),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("p",null,"Input: nums = ","[1,1,1,2,2,3]",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 5, nums = ","[1,1,2,2,3,_]",(0,a.yg)("br",{parentName:"p"}),"\n","Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.",(0,a.yg)("br",{parentName:"p"}),"\n","It does not matter what you leave beyond the returned k (hence they are underscores).  "),(0,a.yg)("p",null,"Example 2:"),(0,a.yg)("p",null,"Input: nums = ","[0,0,1,1,1,1,2,3,3]",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 7, nums = ","[0,0,1,1,2,3,3,",(0,a.yg)("em",{parentName:"p"},","),"]",(0,a.yg)("br",{parentName:"p"}),"\n","Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.",(0,a.yg)("br",{parentName:"p"}),"\n","It does not matter what you leave beyond the returned k (hence they are underscores).  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public int removeDuplicates(int[] nums) {\n    if(nums.length<=2) return nums.length;\n    int index=1;\n    for(int next=2;next<nums.length;next++){\n        if(nums[next]==nums[index] && nums[index]==nums[index-1]){\n        } else {\n            nums[++index]=nums[next];\n        }\n    }\n    return index+1;\n}\n")))}c.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);