"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[5088],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=l,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5787:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(8168),l=(t(6540),t(5680));const a={sidebar_position:141},i="141 Linked List Cycle",o={unversionedId:"algorithmPractice/leetcode/141",id:"algorithmPractice/leetcode/141",title:"141 Linked List Cycle",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/141.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/141",permalink:"/note/algorithmPractice/leetcode/141",tags:[],version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141},sidebar:"tutorialSidebar",previous:{title:"138 Copy List with Random Pointer",permalink:"/note/algorithmPractice/leetcode/138"},next:{title:"142 Linked List Cycle II",permalink:"/note/algorithmPractice/leetcode/142"}},c=[],s={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"141-linked-list-cycle"},"141 Linked List Cycle"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/linked-list-cycle/"},"Leetcode")),(0,l.yg)("p",null,"Given head, the head of a linked list, determine if the linked list has a cycle in it."),(0,l.yg)("p",null,"There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter."),(0,l.yg)("p",null,"Return true if there is a cycle in the linked list. Otherwise, return false."),(0,l.yg)("p",null,"\u4e24\u4e2a\u6307\u9488\uff0c\u4e00\u4e2a\u4e00\u6b21\u8d70 2 \u6b65\uff0c\u4e00\u4e2a\u4e00\u6b21\u8d70 1 \u6b65\uff0c\u5982\u679c\u5feb\u7684\u8d70\u5230\u5934\uff0c\u8bf4\u660e\u6ca1\u6709\u73af\uff0c\u6709\u73af\u4e24\u4e2a\u6307\u9488\u5fc5\u7136\u76f8\u9047\uff0c\u5982\u679c\u76f8\u9047\u8bf4\u660e\u6709\u73af\u3002\u65f6\u95f4\u590d\u6742\u5ea6 o(n) \uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 o(1)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"public boolean hasCycle(ListNode head) {\n    if(head==null) return false;\n    ListNode l1=head, l2=head;\n    while(l2!=null && l2.next!=null){\n        l2=l2.next.next;\n        l1=l1.next;\n        if(l2==l1) return true;\n    }\n    return false;\n}\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        if(head==NULL) return false;\n        ListNode * l1=head; \n        ListNode * l2=head;\n        while(l2!=NULL && l2->next!=NULL){\n            l2=l2->next->next;\n            l1=l1->next;\n            if(l1==l2) return true;\n        }\n        return false;\n    }\n};\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-python"},"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        if head is None:\n            return False;\n        p1=head\n        p2=head\n        while p2 and p2.next:\n            p2=p2.next.next\n            p1=p1.next\n            if p1 is p2:\n                return True\n        return False\n        \n")),(0,l.yg)("p",null,"\u8fd9\u9053\u9898\u6709\u4eba\u627e\u5230\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u94fe\u8868\u7684\u6700\u5927\u957f\u5ea6\uff0c\u7136\u540e\u9762\u5411\u6d4b\u8bd5\u7528\u4f8b\u7f16\u7a0b\u3002\u3002\u3002"),(0,l.yg)("p",null,"(\u6d4b\u8bd5\u7528\u4f8b\u662f\u4f1a\u53d8\u7684\uff0c\u73b0\u5728\u5df2\u7ecf\u6269\u5145\u5230 10000)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    public boolean hasCycle(ListNode head) {\n        \n        int count = 8029;\n\n        while( head != null && count > 0){\n\n            head = head.next;\n\n            count--;\n        }\n\n        if( head == null ) return false;\n\n        return true;\n\n    }\n}\n")))}u.isMDXComponent=!0}}]);