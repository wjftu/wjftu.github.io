"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[2268],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(n),g=a,y=h["".concat(c,".").concat(g)]||h[g]||s[g]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8518:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const i={sidebar_position:110},l="110 Balanced Binary Tree",o={unversionedId:"algorithmPractice/leetcode/110",id:"algorithmPractice/leetcode/110",title:"110 Balanced Binary Tree",description:"LeetCode",source:"@site/note/algorithmPractice/leetcode/110.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/110",permalink:"/note/algorithmPractice/leetcode/110",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"104 Maximum Depth of Binary Tree",permalink:"/note/algorithmPractice/leetcode/104"},next:{title:"121 Best Time to Buy and Sell Stock",permalink:"/note/algorithmPractice/leetcode/121"}},c=[],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"110-balanced-binary-tree"},"110 Balanced Binary Tree"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/balanced-binary-tree/"},"LeetCode")),(0,a.yg)("p",null,"Given a binary tree, determine if it is height-balanced."),(0,a.yg)("p",null,"For this problem, a height-balanced binary tree is defined as:"),(0,a.yg)("p",null,"a binary tree in which the left and right subtrees of every node differ in height by no more than 1."),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("p",null,"Input: root = ","[3,9,20,null,null,15,7]","\nOutput: true"),(0,a.yg)("p",null,"Example 2:"),(0,a.yg)("p",null,"Input: root = ","[1,2,2,3,3,null,null,4,4]","\nOutput: false"),(0,a.yg)("p",null,"Example 3:"),(0,a.yg)("p",null,"Input: root = []\nOutput: true"),(0,a.yg)("p",null,"Constraints:"),(0,a.yg)("p",null,"The number of nodes in the tree is in the range ","[0, 5000]",".\n-104 <= Node.val <= 104"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\u9012\u5f52\uff0c\u8ba1\u7b97\u6bcf\u4e2a\u8282\u70b9\u4e24\u5b50\u6811\u7684\u9ad8\u5ea6\uff0c\u5982\u679c\u76f8\u5dee\u8d85\u8fc71\uff0c\u5219\u4e0d\u662f\u5e73\u8861\u6811"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    boolean isBal=true;\n    public boolean isBalanced(TreeNode root) {\n        height(root);\n        return isBal;\n    }\n    \n    private int height(TreeNode t){\n        if(t==null) return 0;\n        int height1=height(t.left);\n        int height2=height(t.right);\n        if(Math.abs(height1-height2)>1) isBal=false;\n        return Math.max(height1,height2)+1;\n    }\n}\n")),(0,a.yg)("p",null,"\u5982\u679c\u5de6\u5b50\u6811\u9012\u5f52\u5b8c\u5df2\u7ecf\u53d1\u73b0\u4e0d\u662f\u5e73\u8861\u6811\u4e86\uff0c\u90a3\u4e48\u4e0d\u5fc5\u8003\u8651\u53f3\u5b50\u6811\uff0c\u4e0d\u5fc5\u771f\u7684\u8ba1\u7b97\u9ad8\u5ea6\uff08\u8fd9\u6837\u5176\u5b9e\u6548\u7387\u5dee\u4e0d\u591a\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    boolean isBal=true;\n    public boolean isBalanced(TreeNode root) {\n        height(root);\n        return isBal;\n    }\n    \n    private int height(TreeNode t){\n        if(t==null) return 0;\n        int height1=height(t.left);\n        if(!isBal) return 0;\n        int height2=height(t.right);\n        if(Math.abs(height1-height2)>1) isBal=false;\n        return Math.max(height1,height2)+1;\n    }\n}\n")))}h.isMDXComponent=!0}}]);