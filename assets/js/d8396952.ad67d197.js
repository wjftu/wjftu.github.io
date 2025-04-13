"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[6397],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),y=i,f=s["".concat(l,".").concat(y)]||s[y]||d[y]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6182:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(8168),i=(n(6540),n(5680));const o={sidebar_position:547},c="547 Number of Provinces",a={unversionedId:"algorithmPractice/leetcode/547",id:"algorithmPractice/leetcode/547",title:"547 Number of Provinces",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/547.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/547",permalink:"/note/algorithmPractice/leetcode/547",tags:[],version:"current",sidebarPosition:547,frontMatter:{sidebar_position:547},sidebar:"tutorialSidebar",previous:{title:"543 Diameter of Binary Tree",permalink:"/note/algorithmPractice/leetcode/543"},next:{title:"560 Subarray Sum Equals K",permalink:"/note/algorithmPractice/leetcode/560"}},l=[],u={toc:l},p="wrapper";function s(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"547-number-of-provinces"},"547 Number of Provinces"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-provinces/"},"Leetcode")),(0,i.yg)("p",null,"There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c."),(0,i.yg)("p",null,"A province is a group of directly or indirectly connected cities and no other cities outside of the group."),(0,i.yg)("p",null,"You are given an n x n matrix isConnected where isConnected","[i][j]"," = 1 if the ith city and the jth city are directly connected, and isConnected","[i][j]"," = 0 otherwise."),(0,i.yg)("p",null,"Return the total number of provinces."),(0,i.yg)("p",null,"Example 1:"),(0,i.yg)("p",null,"Input: isConnected = [","[1,1,0]",",","[1,1,0]",",","[0,0,1]","]",(0,i.yg)("br",{parentName:"p"}),"\n","Output: 2  "),(0,i.yg)("p",null,"Example 2:"),(0,i.yg)("p",null,"Input: isConnected = [","[1,0,0]",",","[0,1,0]",",","[0,0,1]","]",(0,i.yg)("br",{parentName:"p"}),"\n","Output: 3  "),(0,i.yg)("hr",null),(0,i.yg)("p",null,"\u904d\u5386\u6240\u6709\u7684\u57ce\u5e02\uff0c\u9047\u5230\u672a\u6807\u8bb0\u7684\u57ce\u5e02\u5c31\u5bf9\u5176\u8fdb\u884c\u6df1\u5ea6\u4f18\u5148\u6216\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u6807\u8bb0\u6240\u6709\u7684\u57ce\u5e02\uff0c\u8fd9\u4e9b\u662f\u540c\u4e00\u4e2a\u7701\uff0c\u8bb0\u5f55\u7701\u6570\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int findCircleNum(int[][] isConnected) {\n        boolean[] visited=new boolean[isConnected.length];\n        int count=0;\n        for(int i=0;i<isConnected.length;++i){\n            if(!visited[i]){\n                count++;\n                dfs(i, isConnected, visited);\n            }\n        }\n        return count;\n    }\n    \n    private void dfs(int i, int[][] isConnected, boolean[] visited){\n        visited[i]=true;\n        int[] arr=isConnected[i];\n        for(int j=0;j<arr.length;++j){\n            if(!visited[j] && arr[j]==1) dfs(j, isConnected, visited);\n        }\n    }\n}\n")))}s.isMDXComponent=!0}}]);