"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[5148],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=l,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7474:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(8168),l=(n(6540),n(5680));const a={sidebar_position:2},o="2 Add Two Numbers",i={unversionedId:"algorithmPractice/leetcode/2",id:"algorithmPractice/leetcode/2",title:"2 Add Two Numbers",description:"LeetCode",source:"@site/note/algorithmPractice/leetcode/2.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/2",permalink:"/note/algorithmPractice/leetcode/2",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1 Two Sum",permalink:"/note/algorithmPractice/leetcode/1"},next:{title:"3 Longest Substring Without Repeating Characters",permalink:"/note/algorithmPractice/leetcode/3"}},c=[],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"2-add-two-numbers"},"2 Add Two Numbers"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/add-two-numbers/"},"LeetCode")),(0,l.yg)("p",null,"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list."),(0,l.yg)("p",null,"You may assume the two numbers do not contain any leading zero, except the number 0 itself."),(0,l.yg)("p",null,"Example 1:"),(0,l.yg)("p",null,"Input: l1 = ","[2,4,3]",", l2 = ","[5,6,4]","\nOutput: ","[7,0,8]","\nExplanation: 342 + 465 = 807."),(0,l.yg)("p",null,"Example 2:"),(0,l.yg)("p",null,"Input: l1 = ","[0]",", l2 = ","[0]","\nOutput: ","[0]"),(0,l.yg)("p",null,"Example 3:"),(0,l.yg)("p",null,"Input: l1 = ","[9,9,9,9,9,9,9]",", l2 = ","[9,9,9,9]","\nOutput: ","[8,9,9,9,0,0,0,1]"),(0,l.yg)("p",null,"Constraints:"),(0,l.yg)("p",null,"The number of nodes in each linked list is in the range ","[1, 100]",".\n0 <= Node.val <= 9\nIt is guaranteed that the list represents a number that does not have leading zeros."),(0,l.yg)("hr",null),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode ret,p;\n        int carry=0;\n        ret=new ListNode((l1.val+l2.val)%10);\n        p=ret;\n        carry=(l1.val+l2.val)/10;\n        l1=l1.next; l2=l2.next;\n        while(l1!=null && l2!=null){\n            p.next=new ListNode((l1.val+l2.val+carry)%10);\n            p=p.next;\n            carry=(l1.val+l2.val+carry)/10;\n            l1=l1.next; l2=l2.next;\n        }\n        while(l1!=null){\n            p.next=new ListNode((l1.val+carry)%10);\n            p=p.next;\n            carry=(l1.val+carry)/10;\n            l1=l1.next;\n        }\n        while(l2!=null){\n            p.next=new ListNode((l2.val+carry)%10);\n            p=p.next;\n            carry=(l2.val+carry)/10;\n            l2=l2.next;\n        }\n        if(carry==1)\n            p.next=new ListNode(1);\n        return ret;\n    }\n}\n")))}u.isMDXComponent=!0}}]);