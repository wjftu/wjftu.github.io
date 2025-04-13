"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[5945],{219:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>p,toc:()=>i});var r=n(8168),a=(n(6540),n(5680));const u={sidebar_position:232},o="232 Implement Queue using Stacks",p={unversionedId:"algorithmPractice/leetcode/232",id:"algorithmPractice/leetcode/232",title:"232 Implement Queue using Stacks",description:"LeetCode",source:"@site/note/algorithmPractice/leetcode/232.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/232",permalink:"/note/algorithmPractice/leetcode/232",tags:[],version:"current",sidebarPosition:232,frontMatter:{sidebar_position:232},sidebar:"tutorialSidebar",previous:{title:"228 Summary Ranges",permalink:"/note/algorithmPractice/leetcode/228"},next:{title:"236 Lowest Common Ancestor of a Binary Tree",permalink:"/note/algorithmPractice/leetcode/236"}},i=[],s={toc:i},l="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(l,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"232-implement-queue-using-stacks"},"232 Implement Queue using Stacks"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/implement-queue-using-stacks/"},"LeetCode")),(0,a.yg)("p",null,"Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty)."),(0,a.yg)("p",null,"Implement the MyQueue class:"),(0,a.yg)("p",null,"void push(int x) Pushes element x to the back of the queue.",(0,a.yg)("br",{parentName:"p"}),"\n","int pop() Removes the element from the front of the queue and returns it.",(0,a.yg)("br",{parentName:"p"}),"\n","int peek() Returns the element at the front of the queue.",(0,a.yg)("br",{parentName:"p"}),"\n","boolean empty() Returns true if the queue is empty, false otherwise.  "),(0,a.yg)("p",null,"Notes:"),(0,a.yg)("p",null,"You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.",(0,a.yg)("br",{parentName:"p"}),"\n","Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations."),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("p",null,"Input",(0,a.yg)("br",{parentName:"p"}),"\n",'["MyQueue", "push", "push", "peek", "pop", "empty"]',"[], ","[1]",", ","[2]",", [], [], []]  "),(0,a.yg)("p",null,"Output",(0,a.yg)("br",{parentName:"p"}),"\n","[null, null, null, 1, 1, false]","  "),(0,a.yg)("p",null,"Explanation",(0,a.yg)("br",{parentName:"p"}),"\n","MyQueue myQueue = new MyQueue();",(0,a.yg)("br",{parentName:"p"}),"\n","myQueue.push(1); // queue is: ","[1]",(0,a.yg)("br",{parentName:"p"}),"\n","myQueue.push(2); // queue is: ","[1, 2]"," (leftmost is front of the queue)",(0,a.yg)("br",{parentName:"p"}),"\n","myQueue.peek(); // return 1",(0,a.yg)("br",{parentName:"p"}),"\n","myQueue.pop(); // return 1, queue is ","[2]",(0,a.yg)("br",{parentName:"p"}),"\n","myQueue.empty(); // return false  "),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\u4f7f\u7528 2 \u4e2a\u6808\uff0c\u5f53\u4e00\u4e2a\u6808\u7684\u5143\u7d20\u5168\u90e8\u5f39\u51fa\u5e76\u538b\u5165\u53e6\u4e00\u4e2a\u6808\u65f6\uff0c\u987a\u5e8f\u5c31\u98a0\u5012\u4e86\uff0c\u53d8\u6210\u961f\u5217"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"class MyQueue {\n    \n    Deque<Integer> stack1, stack2;\n\n    public MyQueue() {\n        stack1 = new LinkedList<>();\n        stack2 = new LinkedList<>();\n    }\n    \n    public void push(int x) {\n        stack1.push(x);\n    }\n    \n    public int pop() {\n        if(stack2.isEmpty()) transfer();\n        return stack2.pop();\n    }\n    \n    public int peek() {\n        if(stack2.isEmpty()) transfer();\n        return stack2.peek();\n    }\n    \n    private void transfer(){\n        while(!stack1.isEmpty()){\n            stack2.push(stack1.pop());\n        }\n    }\n    \n    public boolean empty() {\n        return stack1.isEmpty() && stack2.isEmpty();\n    }\n}\n\n")))}c.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(n),y=a,f=c["".concat(i,".").concat(y)]||c[y]||m[y]||u;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);