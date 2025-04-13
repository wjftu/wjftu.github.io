"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[4118],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||g[m]||c;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9884:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const c={sidebar_position:844},i="844 Backspace String Compare",o={unversionedId:"algorithmPractice/leetcode/844",id:"algorithmPractice/leetcode/844",title:"844 Backspace String Compare",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/844.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/844",permalink:"/note/algorithmPractice/leetcode/844",tags:[],version:"current",sidebarPosition:844,frontMatter:{sidebar_position:844},sidebar:"tutorialSidebar",previous:{title:"799 Champagne Tower",permalink:"/note/algorithmPractice/leetcode/799"},next:{title:"847 Shortest Path Visiting All Nodes",permalink:"/note/algorithmPractice/leetcode/847"}},l=[],p={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"844-backspace-string-compare"},"844 Backspace String Compare"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/backspace-string-compare/"},"Leetcode")),(0,a.yg)("p",null,"Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character."),(0,a.yg)("p",null,"Note that after backspacing an empty text, the text will continue empty."),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'Input: s = "ab#c", t = "ad#c"  \nOutput: true  \nExplanation: Both s and t become "ac".\n')),(0,a.yg)("p",null,"Example 2:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'Input: s = "ab##", t = "c#d#"\nOutput: true\nExplanation: Both s and t become "".\n')),(0,a.yg)("p",null,"Example 3:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'Input: s = "a#c", t = "b"\nOutput: false\nExplanation: s becomes "c" while t becomes "b".\n')),(0,a.yg)("p",null,"\u8f6c\u5316\u6210\u5b57\u7b26\u4e32\u6bd4\u8f83\u3002\u4f7f\u7528\u6808\uff0c\u9047\u5230\u5b57\u6bcd\u538b\u5165\uff0c\u9047\u5230 # \u53f7\u5f39\u51fa\u3002\u65f6\u95f4\u590d\u6742\u5ea6 o(n) \uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 o(n)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"    public boolean backspaceCompare(String s, String t) {\n        return getStr(s).equals(getStr(t));\n    }\n    \n    public String getStr(String s){\n        Deque<Character> stack = new LinkedList<>();\n        for(int i=0;i<s.length();++i){\n            char c=s.charAt(i);\n            if(c=='#'){\n                if(stack.size()>0) stack.pop();\n            } else {\n                stack.push(c);\n            }\n        }\n        StringBuilder sb=new StringBuilder(stack.size());\n        while(stack.size()>0){\n            sb.append(stack.removeLast());\n        }\n        return sb.toString();\n    }\n")),(0,a.yg)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6 o(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 o(1) \u7684\u65b9\u6cd5\uff1a\u4ece\u540e\u5f80\u524d\u904d\u5386\uff0c\u9047\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"#")," \u5c31\u8ba1\u6570\uff0c\u4e0d\u65ad\u5f80\u5de6\u79fb\u52a8\u5230\u5934\u6216\u8005\u5230\u8be5\u5220\u9664\u7684\u5b57\u6bcd\u90fd\u5220\u9664\u4e86\uff0c\u5f97\u5230\u7684\u5b57\u6bcd\u5c31\u662f\u6700\u7ec8\u7ed3\u679c\u7684\u53f3\u8fb9\u7684\u5b57\u6bcd\uff0c\u4e0d\u65ad\u91cd\u590d\uff0c\u4ece\u6700\u7ec8\u7ed3\u679c\u7684\u53f3\u8fb9\u4f9d\u6b21\u6bd4\u8f83\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public boolean backspaceCompare(String s, String t) {\n    int i1=0, i2=0;\n    char c1=' ',c2=' ';\n    int count1=0, count2=0;\n    while(true){\n        while(count1>0 && i1>=0){\n\n            c1=s.charAt(i1--);\n            if(c1=='#') count1++;\n        }\n        while(count2>0 && i2>0){\n            \n            c2=t.charAt(i2);\n            i2--;\n            if(c2=='#') count2++;\n        }\n        if(c1!=c2) return false;\n        if(i1==-1 && i2==-1) return true;\n        if(i1==-1 || i1==-1){\n            while(i1>=0){\n                if(s.charAt(i1--)!='#') return false;\n            }\n            while(i2>=0){\n                if(t.charAt(i2--)!='#') return false;\n            }\n            return true;\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);