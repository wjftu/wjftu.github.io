"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[3251],{5680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=i,f=s["".concat(c,".").concat(g)]||s[g]||m[g]||a;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5828:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(8168),i=(r(6540),r(5680));const a={sidebar_position:3},o="3 \u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57",l={unversionedId:"algorithmPractice/codingInterviews/3",id:"algorithmPractice/codingInterviews/3",title:"3 \u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/3.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/3",permalink:"/note/algorithmPractice/codingInterviews/3",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5251\u6307 Offer",permalink:"/note/algorithmPractice/codingInterviews/"},next:{title:"4 \u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",permalink:"/note/algorithmPractice/codingInterviews/4"}},c=[],u={toc:c},p="wrapper";function s(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"3-\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57"},"3 \u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/6fe361ede7e54db1b84adc81d09d8524"},"\u725b\u5ba2")),(0,i.yg)("p",null,"\u63cf\u8ff0"),(0,i.yg)("p",null,"\u5728\u4e00\u4e2a\u957f\u5ea6\u4e3an\u7684\u6570\u7ec4\u91cc\u7684\u6240\u6709\u6570\u5b57\u90fd\u57280\u5230n-1\u7684\u8303\u56f4\u5185\u3002 \u6570\u7ec4\u4e2d\u67d0\u4e9b\u6570\u5b57\u662f\u91cd\u590d\u7684\uff0c\u4f46\u4e0d\u77e5\u9053\u6709\u51e0\u4e2a\u6570\u5b57\u662f\u91cd\u590d\u7684\u3002\u4e5f\u4e0d\u77e5\u9053\u6bcf\u4e2a\u6570\u5b57\u91cd\u590d\u51e0\u6b21\u3002\u8bf7\u627e\u51fa\u6570\u7ec4\u4e2d\u4efb\u4e00\u4e00\u4e2a\u91cd\u590d\u7684\u6570\u5b57\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u8f93\u5165\u957f\u5ea6\u4e3a7\u7684\u6570\u7ec4","[2,3,1,0,2,5,3]","\uff0c\u90a3\u4e48\u5bf9\u5e94\u7684\u8f93\u51fa\u662f2\u6216\u80053\u3002\u5b58\u5728\u4e0d\u5408\u6cd5\u7684\u8f93\u5165\u7684\u8bdd\u8f93\u51fa-1"),(0,i.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,i.yg)("p",null,"\u8f93\u5165\uff1a",(0,i.yg)("br",{parentName:"p"}),"\n","[2,3,1,0,2,5,3]"),(0,i.yg)("p",null,"\u8fd4\u56de\u503c\uff1a2\u62163\u90fd\u662f\u5bf9\u7684 "),(0,i.yg)("hr",null),(0,i.yg)("p",null,"\u53ef\u4ee5\u5148\u5c06\u6570\u7ec4\u6392\u5e8f\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(nlogn)\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u8fc7\u9ad8\uff0c\u800c\u4e14\u7531\u4e8e\u53ea\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u91cd\u590d\u6570\u5b57\uff0c\u6ca1\u6709\u5fc5\u8981\u5bf9\u6574\u4e2a\u6570\u7ec4\u6392\u5e8f\u3002"),(0,i.yg)("p",null,"\u4e5f\u53ef\u4ee5\u7528\u8f85\u7ec4\u6570\u7ec4\u6216\u8005 hash \u8868\u6765\u5b9e\u73b0\u3002\u65f6\u95f4\u590d\u6742\u5ea6 O(n) \uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(n)\uff0c"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public int duplicate (int[] numbers) {\n    boolean[] arr=new boolean[numbers.length];\n    for(int i:numbers){\n        if(arr[i]==false)\n            arr[i]=true;\n        else\n            return i;\n    }\n    return -1;\n}\n")),(0,i.yg)("p",null,"\u5982\u679c\u5141\u8bb8\u4fee\u6539\u539f\u6709\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u6709\u7a7a\u95f4\u590d\u6742\u5ea6 O(1) \u7684\u529e\u6cd5\u3002\u4ece\u7b2c\u4e00\u4e2a\u6570\u5b57\u5f00\u59cb\u904d\u5386\u6570\u7ec4\uff0c\u5c06\u6570\u5b57\u4e0e\u76f8\u5e94\u7684\u4e0b\u6807\u4e0a\u7684\u6570\u5b57\u6bd4\u8f83\uff0c\u5982\u679c\u4e00\u6837\u5219\u8fd4\u56de\u8fd9\u4e2a\u6570\u5b57\uff0c\u5982\u679c\u4e0d\u4e00\u6837\uff0c\u5c06\u6570\u5b57\u4e0e\u76f8\u5e94\u4e0b\u6807\u7684\u6570\u5b57\u4ea4\u6362\uff0c\u518d\u5c06\u65b0\u7684\u6570\u5b57\u4e0e\u76f8\u5e94\u4e0b\u6807\u7684\u6570\u5b57\u4ea4\u6362\uff0c\u76f4\u5230\u6240\u6709\u6570\u5b57\u90fd\u5230\u6570\u5b57\u7684\u5bf9\u5e94\u4e0b\u6807\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"import java.util.*;\npublic class Solution {\n    public int duplicate (int[] numbers) {\n        int cur,t;\n        for(int i=0;i<numbers.length;++i){\n            while(numbers[i]!=i){\n                if(numbers[i]==numbers[numbers[i]]){\n                    return numbers[i];\n                } else {\n                    t=numbers[numbers[i]];\n                    numbers[numbers[i]]=numbers[i];\n                    numbers[i]=t;\n                }\n            }\n        }\n        return -1;\n    }\n}\n")))}s.isMDXComponent=!0}}]);