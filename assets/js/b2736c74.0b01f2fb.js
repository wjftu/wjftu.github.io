"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[3201],{4992:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(8168),i=(t(6540),t(5680));const a={sidebar_position:343},o="343 Integer Break",p={unversionedId:"algorithmPractice/leetcode/343",id:"algorithmPractice/leetcode/343",title:"343 Integer Break",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/343.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/343",permalink:"/note/algorithmPractice/leetcode/343",tags:[],version:"current",sidebarPosition:343,frontMatter:{sidebar_position:343},sidebar:"tutorialSidebar",previous:{title:"337 House Robber III",permalink:"/note/algorithmPractice/leetcode/337"},next:{title:"354 Russian Doll Envelopes",permalink:"/note/algorithmPractice/leetcode/354"}},l=[],c={toc:l},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"343-integer-break"},"343 Integer Break"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/integer-break/"},"Leetcode")),(0,i.yg)("p",null,"Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers."),(0,i.yg)("p",null,"Return the maximum product you can get."),(0,i.yg)("p",null,"Example 1:"),(0,i.yg)("p",null,"Input: n = 2",(0,i.yg)("br",{parentName:"p"}),"\n","Output: 1",(0,i.yg)("br",{parentName:"p"}),"\n","Explanation: 2 = 1 + 1, 1 \xd7 1 = 1.  "),(0,i.yg)("p",null,"Example 2:"),(0,i.yg)("p",null,"Input: n = 10",(0,i.yg)("br",{parentName:"p"}),"\n","Output: 36",(0,i.yg)("br",{parentName:"p"}),"\n","Explanation: 10 = 3 + 3 + 4, 3 \xd7 3 \xd7 4 = 36.  "),(0,i.yg)("hr",null),(0,i.yg)("p",null,"\u52a8\u6001\u89c4\u5212\u89e3\u6cd5\uff1a"),(0,i.yg)("p",null,"dp","[i]"," \u8868\u793a\u6574\u6570 i \u5206\u89e3\u4e3a\u6574\u6570\u7684\u6700\u5927\u4e58\u79ef\uff08\u53ef\u4ee5\u4e0d\u5206\u89e3\uff0c\u65e0\u89c6 k>=2 \u7684\u6761\u4ef6\uff09\uff0c\u6700\u5927\u4e58\u79ef\u6700\u540e\u5206\u89e3\u7684\u7ed3\u679c\u53ea\u6709 2 \u548c 3 \uff0c\u5148\u6307\u5b9a dp","[2]","=2 , dp","[3]","=3 \uff0c\u5176\u4f59\u7684\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"2*dp[i-2]")," \u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"3*dp[i-3]")," \u8f83\u5927\u8005\u3002\u540c\u65f6\u8003\u8651 n \u4e3a 2 \u548c 3 \u7684 corner case \u3002\u65f6\u95f4\u590d\u6742\u5ea6 o(n) \uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 o(n)"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public int integerBreak(int n) {\n    if(n<=3) return n-1;\n    int[] dp=new int[n+1];\n    dp[2]=2;\n    dp[3]=3;\n    for(int i=4;i<=n;++i){\n        int i2=2*dp[i-2];\n        int i3=3*dp[i-3];\n        dp[i]=Math.max(i2,i3);\n    }\n    return dp[n];\n}\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int integerBreak(int n) {\n        if(n<=3) return n-1;\n        int dp[n+1];\n        dp[1]=1;\n        dp[2]=2;\n        dp[3]=3;\n        for(int i=4;i<=n;++i){\n            int i1=2*dp[i-2];\n            int i2=3*dp[i-3];\n            if(i1>i2) dp[i]=i1;\n            else dp[i]=i2;\n        }\n        return dp[n];\n    }\n};\n")),(0,i.yg)("p",null,"\u6700\u4f18\u89e3\uff1a\u8d2a\u5fc3\u7b97\u6cd5"),(0,i.yg)("p",null,"\u5c3d\u53ef\u80fd\u591a\u5206\u89e3\u4e3a 3 \uff0c\u4f46\u5982\u679c\u9664\u4ee5 3 \u4f59 1 \uff0c\u9700\u8981\u5c11\u4e00\u4e2a 3 \uff0c\u56e0\u4e3a 3 \u4e58\u4ee5 1 \u5c0f\u4e8e 2 \u4e58\u4ee5 2 \u3002\u65f6\u95f4\u590d\u6742\u5ea6 o(log n) \uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 o(1)"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public int integerBreak(int n) {\n    if(n<=3) return n-1;\n    int count3=n/3;\n    if(n%3==1){\n        return 4*(int)Math.pow(3,count3-1);\n    } else if(n%3==2){\n        return 2*(int)Math.pow(3,count3);\n    } else {\n        return (int)Math.pow(3,count3);\n    }\n}\n")))}g.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=c(t),s=i,m=g["".concat(l,".").concat(s)]||g[s]||d[s]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[g]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);