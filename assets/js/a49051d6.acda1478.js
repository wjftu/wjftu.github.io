"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[6863],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),y=a,g=s["".concat(l,".").concat(y)]||s[y]||m[y]||o;return t?r.createElement(g,u(u({ref:n},p),{},{components:t})):r.createElement(g,u({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6813:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>u,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const o={sidebar_position:560},u="560 Subarray Sum Equals K",i={unversionedId:"algorithmPractice/leetcode/560",id:"algorithmPractice/leetcode/560",title:"560 Subarray Sum Equals K",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/560.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/560",permalink:"/note/algorithmPractice/leetcode/560",tags:[],version:"current",sidebarPosition:560,frontMatter:{sidebar_position:560},sidebar:"tutorialSidebar",previous:{title:"547 Number of Provinces",permalink:"/note/algorithmPractice/leetcode/547"},next:{title:"567 Permutation in String",permalink:"/note/algorithmPractice/leetcode/567"}},l=[],c={toc:l},p="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"560-subarray-sum-equals-k"},"560 Subarray Sum Equals K"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/subarray-sum-equals-k/"},"Leetcode")),(0,a.yg)("p",null,"Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k."),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("p",null,"Input: nums = ","[1,1,1]",", k = 2",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 2  "),(0,a.yg)("p",null,"Example 2:"),(0,a.yg)("p",null,"Input: nums = ","[1,2,3]",", k = 3",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 2  "),(0,a.yg)("p",null,"\u5bf9\u6570\u7ec4\u8fdb\u884c\u6c42\u548c\u5f97\u5230\u4e00\u4e2a\u6c42\u548c\u6570\u7ec4\uff0c\u7b2c i \u4e2a\u5143\u7d20\u7684\u503c\u4e3a\u539f\u6570\u7ec4\u4ece 1 \u5230\u7b2c i \u4e2a\u5143\u7d20\u4e4b\u548c\u3002\u6c42\u548c\u540e\u7684\u6570\u7ec4\u4e24\u4e2a\u4e0b\u6807\u5143\u7d20\u4e4b\u5dee\u4e3a\u539f\u6570\u7ec4\u7684\u5b50\u6570\u7ec4\u7684\u548c\uff08\u524d\u4e0d\u5305\u540e\u5305\uff09\uff0c\u518d\u7b97\u4e0a\u6c42\u548c\u6570\u7ec4\u5355\u4e2a\u5143\u7d20\u7684\u503c\uff08\u4e3a\u539f\u6570\u7ec4\u4ece 0 \u5230\u8be5\u5143\u7d20\u8fd9\u4e2a\u5b50\u6570\u7ec4\u7684\u548c\uff09"),(0,a.yg)("p",null,"\u6700\u5f00\u59cb\u7684\u505a\u6cd5\uff0c\u4f9d\u6b21\u904d\u5386\u6240\u6709\u4e0b\u6807\u7ec4\u5408\uff0c\u53d1\u73b0\u53ea\u8d85\u8fc7 5% Java \u4ee3\u7801\u7684\u901f\u5ea6\u3002\u3002\u3002\u65f6\u95f4\u590d\u6742\u5ea6 o(n",(0,a.yg)("sup",null,"2"),")"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public int subarraySum(int[] nums, int k) {\n    for(int i=1;i<nums.length;++i){\n        nums[i]+=nums[i-1];\n    }\n    int count=0;\n    for(int i=0;i<nums.length;++i){\n        for(int j=i+1;j<nums.length;++j){\n            if(nums[j]-nums[i]==k) count++;\n        }\n        if(nums[i]==k) count++;\n    }\n    return count;\n}\n")),(0,a.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 HashMap \u6765\u8bb0\u5f55\u524d\u9762\u8fd9\u4e2a\u548c\u51fa\u73b0\u591a\u5c11\u6b21\uff0c\u5b9e\u73b0\u65f6\u95f4\u590d\u6742\u5ea6 o(n)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public int subarraySum(int[] nums, int k) {\n    HashMap<Integer, Integer> map = new HashMap<>();\n    map.put(0,1);\n    int sum=0, count=0;\n    for(int i:nums){\n        sum+=i;\n        if(map.containsKey(sum-k)){\n            count+=map.get(sum-k);\n        }\n        map.put(sum, map.getOrDefault(sum, 0)+1);\n    }\n    return count;\n}\n")))}s.isMDXComponent=!0}}]);