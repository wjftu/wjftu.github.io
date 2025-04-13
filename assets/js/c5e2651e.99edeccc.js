"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[6644],{2423:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const i={sidebar_position:337},a="337 House Robber III",l={unversionedId:"algorithmPractice/leetcode/337",id:"algorithmPractice/leetcode/337",title:"337 House Robber III",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/337.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/337",permalink:"/note/algorithmPractice/leetcode/337",tags:[],version:"current",sidebarPosition:337,frontMatter:{sidebar_position:337},sidebar:"tutorialSidebar",previous:{title:"322 Coin Change",permalink:"/note/algorithmPractice/leetcode/322"},next:{title:"343 Integer Break",permalink:"/note/algorithmPractice/leetcode/343"}},c=[],u={toc:c},p="wrapper";function s(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"337-house-robber-iii"},"337 House Robber III"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/house-robber-iii/"},"Leetcode")),(0,o.yg)("p",null,"The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root."),(0,o.yg)("p",null,"Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night."),(0,o.yg)("p",null,"Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police."),(0,o.yg)("p",null,"\u548c\u524d\u9762\u4e24\u4e2a\u5f3a\u76d7\u62a2\u52ab\u4e00\u6837\uff0c\u4f7f\u7528\u52a8\u6001\u89c4\u5212\u3002\u9012\u5f52\u7684\u65f6\u5019\u8fd4\u56de\u53d6\u5f53\u524d\u8282\u70b9\u7684\u6700\u4f18\u7ed3\u679c\u548c\u4e0d\u53d6\u5f53\u524d\u8282\u70b9\u7684\u6700\u4f18\u7ed3\u679c\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int rob(TreeNode root) {\n        if(root==null) return 0;\n        int[] left=dp(root.left);\n        int[] right=dp(root.right);\n        int children = left[1]+right[1];\n        int noChildren = root.val+left[0]+right[0];\n        return children>noChildren? children:noChildren;\n    }\n    \n    private int[] dp(TreeNode root){\n        \n        if(root==null) return new int[]{0,0};\n        \n        int[] left=dp(root.left);\n        int[] right=dp(root.right);\n        \n        int children = left[1]+right[1];\n        int noChildren = root.val+left[0]+right[0];\n        return new int[]{children, noChildren};\n    }\n}\n")))}s.isMDXComponent=!0},5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,f=s["".concat(c,".").concat(d)]||s[d]||h[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);