"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[3693],{1004:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(8168),a=(r(6540),r(5680));const i={sidebar_position:295},l="295 Find Median from Data Stream",o={unversionedId:"algorithmPractice/leetcode/295",id:"algorithmPractice/leetcode/295",title:"295 Find Median from Data Stream",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/295.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/295",permalink:"/note/algorithmPractice/leetcode/295",tags:[],version:"current",sidebarPosition:295,frontMatter:{sidebar_position:295},sidebar:"tutorialSidebar",previous:{title:"273 Integer to English Words",permalink:"/note/algorithmPractice/leetcode/273"},next:{title:"303 Range Sum Query - Immutable",permalink:"/note/algorithmPractice/leetcode/303"}},d=[],u={toc:d},m="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"295-find-median-from-data-stream"},"295 Find Median from Data Stream"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/find-median-from-data-stream/"},"Leetcode")),(0,a.yg)("p",null,"The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values."),(0,a.yg)("p",null,"For example, for arr = ","[2,3,4]",", the median is 3.",(0,a.yg)("br",{parentName:"p"}),"\n","For example, for arr = ","[2,3]",", the median is (2 + 3) / 2 = 2.5.  "),(0,a.yg)("p",null,"Implement the MedianFinder class:  "),(0,a.yg)("p",null,"MedianFinder() initializes the MedianFinder object.",(0,a.yg)("br",{parentName:"p"}),"\n","void addNum(int num) adds the integer num from the data stream to the data structure.",(0,a.yg)("br",{parentName:"p"}),"\n","double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.  "),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("p",null,"Input",(0,a.yg)("br",{parentName:"p"}),"\n",'["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]',"[], ","[1]",", ","[2]",", [], ","[3]",", []]",(0,a.yg)("br",{parentName:"p"}),"\n","Output",(0,a.yg)("br",{parentName:"p"}),"\n","[null, null, null, 1.5, null, 2.0]","  "),(0,a.yg)("p",null,"Explanation",(0,a.yg)("br",{parentName:"p"}),"\n","MedianFinder medianFinder = new MedianFinder();",(0,a.yg)("br",{parentName:"p"}),"\n","medianFinder.addNum(1);    // arr = ","[1]",(0,a.yg)("br",{parentName:"p"}),"\n","medianFinder.addNum(2);    // arr = ","[1, 2]",(0,a.yg)("br",{parentName:"p"}),"\n","medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)",(0,a.yg)("br",{parentName:"p"}),"\n","medianFinder.addNum(3);    // arr","[1, 2, 3]",(0,a.yg)("br",{parentName:"p"}),"\n","medianFinder.findMedian(); // return 2.0  "),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\u7528\u4e24\u4e2a\u5806\u6765\u5b58\u653e\u6570\u636e\uff0c\u4e00\u4e2a\u5927\u9876\u5806\u5b58\u653e\u5c0f\u5143\u7d20\uff0c\u4e00\u4e2a\u5c0f\u9876\u5806\u5b58\u653e\u5927\u5143\u7d20\u3002\u7ef4\u6301\u4e24\u4e2a\u5806\u5e73\u8861\uff0c\u8981\u4e48\u5143\u7d20\u76f8\u7b49\uff0c\u8981\u4e48\u5c0f\u5143\u7d20\u7684\u5806\u6bd4\u5927\u5143\u7d20\u7684\u591a\u4e00\u4e2a\u3002\u63d2\u5165\u7684\u65f6\u5019\uff0c\u5982\u679c\u4e24\u4e2a\u5806\u5143\u7d20\u76f8\u7b49\uff0c\u8bf4\u660e\u5e94\u8be5\u63d2\u5165\u5c0f\u5143\u7d20\u7684\u5806\uff0c\u5426\u5219\u5e94\u8be5\u63d2\u5165\u5927\u5143\u7d20\u7684\u5806\u3002\u4f46\u662f\u4e0d\u662f\u76f4\u63a5\u63d2\u5165\uff0c\u800c\u662f\u5148\u63d2\u5165\u53e6\u4e00\u4e2a\u5806\uff0c\u7136\u540e\u4ece\u5176\u4e2d\u5f39\u51fa\u4e00\u4e2a\u5143\u7d20\u63d2\u5165\u672c\u6765\u8be5\u63d2\u5165\u7684\u5806\uff0c\u8fd9\u6837\u53ef\u4ee5\u7ef4\u6301\u6240\u6709\u5c0f\u5143\u7d20\u7684\u5806\u7684\u5143\u7d20\u6bd4\u5927\u5143\u7d20\u7684\u5806\u4e2d\u7684\u5143\u7d20\u5c0f\u3002\u4e2d\u95f4\u503c\uff0c\u5982\u679c\u8fde\u4e2a\u5806\u76f8\u7b49\uff0c\u5219\u4e3a\u4e24\u4e2a\u5806\u5806\u9876\u5143\u7d20\u7684\u5e73\u5747\uff0c\u5426\u5219\u4e3a\u5c0f\u5143\u7d20\u5806\u7684\u5806\u9876\u5143\u7d20\u3002"),(0,a.yg)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6 o(n)\uff0c\u63d2\u5165\u65f6\u95f4\u590d\u6742\u5ea6 o(logn) \uff0c\u6c42\u5e73\u5747\u6570\u65f6\u95f4\u590d\u6742\u5ea6 o(1)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"class MedianFinder {\n    PriorityQueue<Integer> small;\n    PriorityQueue<Integer> big;\n    boolean even;\n\n    public MedianFinder() {\n        small=new PriorityQueue<>((i1,i2)->i2-i1);\n        big=new PriorityQueue<>();\n        even=true;\n    }\n    \n    public void addNum(int num) {\n        if(even){\n            big.add(num);\n            small.add(big.poll());\n        } else {\n            small.add(num);\n            big.add(small.poll());\n        }\n        even=!even;\n        \n    }\n    \n    public double findMedian() {\n        if(even){\n            return (double)(small.peek()+big.peek())/2;\n        } else {\n            return (double) small.peek();\n        }\n    }\n}\n\n/**\n * Your MedianFinder object will be instantiated and called as such:\n * MedianFinder obj = new MedianFinder();\n * obj.addNum(num);\n * double param_2 = obj.findMedian();\n */\n")))}p.isMDXComponent=!0},5680:(e,n,r)=>{r.d(n,{xA:()=>m,yg:()=>f});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),u=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=u(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(r),s=a,f=p["".concat(d,".").concat(s)]||p[s]||c[s]||i;return r?t.createElement(f,l(l({ref:n},m),{},{components:r})):t.createElement(f,l({ref:n},m))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);