"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[3837],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9809:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const i={sidebar_position:160},a="160 Intersection of Two Linked Lists",l={unversionedId:"algorithmPractice/leetcode/160",id:"algorithmPractice/leetcode/160",title:"160 Intersection of Two Linked Lists",description:"Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.",source:"@site/note/algorithmPractice/leetcode/160.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/160",permalink:"/note/algorithmPractice/leetcode/160",tags:[],version:"current",sidebarPosition:160,frontMatter:{sidebar_position:160},sidebar:"tutorialSidebar",previous:{title:"153 Find Minimum in Rotated Sorted Array",permalink:"/note/algorithmPractice/leetcode/153"},next:{title:"162 Find Peak Element",permalink:"/note/algorithmPractice/leetcode/162"}},c=[],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"160-intersection-of-two-linked-lists"},"160 Intersection of Two Linked Lists"),(0,o.yg)("p",null,"Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null."),(0,o.yg)("p",null,"\u4e24\u4e2a\u6307\u9488\u904d\u5386\u94fe\u8868\uff0cA \u94fe\u8868\u7684\u6307\u9488\u904d\u5386\u5b8c\u540e\u4ece B \u94fe\u8868\u7684\u5f00\u5934\u7ee7\u7eed\u904d\u5386\uff0cB \u94fe\u8868\u7684\u6307\u9488\u904d\u5386\u5b8c\u540e\u4ece A \u94fe\u8868\u7684\u5f00\u5934\u7ee7\u7eed\u904d\u5386\u3002\u5982\u679c\u6709\u4ea4\u70b9\uff0c\u4e24\u4e2a\u6307\u9488\u90fd\u4ece\u5934\u904d\u5386\u4e00\u6b21\u540e\u4f1a\u5728\u4ea4\u70b9\u76f8\u9047\u3002\u5982\u679c\u6ca1\u6709\uff0c\u4e24\u4e2a\u6307\u9488\u7b2c\u4e8c\u6b21\u4f1a\u540c\u65f6\u5230\u961f\u5c3e\uff0c\u540c\u65f6\u4e3a null \u3002\u65f6\u95f4\u590d\u6742\u5ea6 O(n) \uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        ListNode p1=headA, p2=headB;\n        while(p1 != p2){\n            p1 = p1 == null ? headB : p1.next;\n            p2 = p2 == null ? headA : p2.next;\n        }\n        return p1;\n    }\n}\n")),(0,o.yg)("p",null,"\u4e5f\u53ef\u4ee5\u7528 hash \u8868\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(n) \uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(n)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        ListNode p1=headA, p2=headB;\n        HashSet<ListNode> set=new HashSet<>();\n        while(p1!=null){\n            set.add(p1);\n            p1=p1.next;\n        }\n        while(p2!=null){\n            if(set.contains(p2)) return p2;\n            p2=p2.next;\n        }\n        return null;\n    }\n}\n")))}d.isMDXComponent=!0}}]);