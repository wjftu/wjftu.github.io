"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[2717],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||y[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1078:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={sidebar_position:226},i="226 Invert Binary Tree",l={unversionedId:"algorithmPractice/leetcode/226",id:"algorithmPractice/leetcode/226",title:"226 Invert Binary Tree",description:"LeetCode",source:"@site/note/algorithmPractice/leetcode/226.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/226",permalink:"/note/algorithmPractice/leetcode/226",tags:[],version:"current",sidebarPosition:226,frontMatter:{sidebar_position:226},sidebar:"tutorialSidebar",previous:{title:"217 Contains Duplicate",permalink:"/note/algorithmPractice/leetcode/217"},next:{title:"228 Summary Ranges",permalink:"/note/algorithmPractice/leetcode/228"}},c=[],p={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"226-invert-binary-tree"},"226 Invert Binary Tree"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/invert-binary-tree/"},"LeetCode")),(0,o.yg)("p",null,"Given the root of a binary tree, invert the tree, and return its root."),(0,o.yg)("p",null,"Example 1:"),(0,o.yg)("p",null,"Input: root = ","[4,2,7,1,3,6,9]","\nOutput: ","[4,7,2,9,6,3,1]"),(0,o.yg)("p",null,"Example 2:"),(0,o.yg)("p",null,"Input: root = ","[2,1,3]","\nOutput: ","[2,3,1]"),(0,o.yg)("p",null,"Example 3:"),(0,o.yg)("p",null,"Input: root = []\nOutput: []"),(0,o.yg)("p",null,"Constraints:"),(0,o.yg)("p",null,"The number of nodes in the tree is in the range ","[0, 100]",".\n-100 <= Node.val <= 100"),(0,o.yg)("hr",null),(0,o.yg)("p",null,"\u5148\u628a\u8be5\u8282\u70b9\u7684\u5de6\u53f3\u5b50\u6811\u4ea4\u6362\uff0c\u518d\u5206\u522b\u5bf9\u5de6\u53f3\u5b50\u6811\u64cd\u4f5c"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if(root==null) return null;\n        TreeNode t=root.left;\n        root.left=root.right;\n        root.right=t;\n        invertTree(root.left);\n        invertTree(root.right);\n        return root;\n    }\n}\n")))}s.isMDXComponent=!0}}]);