"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[7357],{4674:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={sidebar_position:543},i="543 Diameter of Binary Tree",l={unversionedId:"algorithmPractice/leetcode/543",id:"algorithmPractice/leetcode/543",title:"543 Diameter of Binary Tree",description:"LeetCode",source:"@site/note/algorithmPractice/leetcode/543.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/543",permalink:"/note/algorithmPractice/leetcode/543",tags:[],version:"current",sidebarPosition:543,frontMatter:{sidebar_position:543},sidebar:"tutorialSidebar",previous:{title:"540 Single Element in a Sorted Array",permalink:"/note/algorithmPractice/leetcode/540"},next:{title:"547 Number of Provinces",permalink:"/note/algorithmPractice/leetcode/547"}},c=[],p={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"543-diameter-of-binary-tree"},"543 Diameter of Binary Tree"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/diameter-of-binary-tree/"},"LeetCode")),(0,o.yg)("p",null,"Given the root of a binary tree, return the length of the diameter of the tree."),(0,o.yg)("p",null,"The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root."),(0,o.yg)("p",null,"The length of a path between two nodes is represented by the number of edges between them."),(0,o.yg)("p",null,"Example 1:"),(0,o.yg)("p",null,"Input: root = ","[1,2,3,4,5]","\nOutput: 3\nExplanation: 3is the length of the path ","[4,2,1,3]"," or ","[5,2,1,3]","."),(0,o.yg)("p",null,"Example 2:"),(0,o.yg)("p",null,"Input: root = ","[1,2]","\nOutput: 1"),(0,o.yg)("p",null,"Constraints:"),(0,o.yg)("p",null,"The number of nodes in the tree is in the range ","[1, 104]",".\n-100 <= Node.val <= 100"),(0,o.yg)("hr",null),(0,o.yg)("p",null,"\u6700\u5927\u7684\u8ddd\u79bb\u4e3a\u67d0\u4e2a\u8282\u70b9\u7684\u5de6\u5b50\u6811\u6df1\u5ea6\u52a0\u4e0a\u53f3\u5b50\u6811\u6df1\u5ea6"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    int max=0;\n    public int diameterOfBinaryTree(TreeNode root) {\n        depth(root);\n        return max;\n    }\n    \n    private int depth(TreeNode t){\n        if(t==null) return 0;\n        int left=depth(t.left);\n        int right=depth(t.right);\n        max=max>left+right?max:left+right;\n        return Math.max(left,right)+1;\n    }\n}\n")))}s.isMDXComponent=!0},5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,y=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);