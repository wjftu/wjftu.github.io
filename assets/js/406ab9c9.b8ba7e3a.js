"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[5031],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var n=t(6540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5754:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(8168),i=(t(6540),t(5680));const o={sidebar_position:45},a="45 \u628a\u6570\u7ec4\u6392\u6210\u6700\u5c0f\u7684\u6570",c={unversionedId:"algorithmPractice/codingInterviews/45",id:"algorithmPractice/codingInterviews/45",title:"45 \u628a\u6570\u7ec4\u6392\u6210\u6700\u5c0f\u7684\u6570",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/45.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/45",permalink:"/note/algorithmPractice/codingInterviews/45",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45},sidebar:"tutorialSidebar",previous:{title:"44 \u6570\u5b57\u5e8f\u5217\u4e2d\u67d0\u4e00\u4f4d\u7684\u6570\u5b57",permalink:"/note/algorithmPractice/codingInterviews/44"},next:{title:"46 \u628a\u6570\u5b57\u7ffb\u8bd1\u6210\u5b57\u7b26\u4e32",permalink:"/note/algorithmPractice/codingInterviews/46"}},l=[],s={toc:l},p="wrapper";function u(e){let{components:r,...t}=e;return(0,i.yg)(p,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"45-\u628a\u6570\u7ec4\u6392\u6210\u6700\u5c0f\u7684\u6570"},"45 \u628a\u6570\u7ec4\u6392\u6210\u6700\u5c0f\u7684\u6570"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993"},"\u725b\u5ba2")),(0,i.yg)("p",null,"\u63cf\u8ff0"),(0,i.yg)("p",null,"\u8f93\u5165\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u6570\u7ec4numbers\uff0c\u628a\u6570\u7ec4\u91cc\u6240\u6709\u6570\u5b57\u62fc\u63a5\u8d77\u6765\u6392\u6210\u4e00\u4e2a\u6570\uff0c\u6253\u5370\u80fd\u62fc\u63a5\u51fa\u7684\u6240\u6709\u6570\u5b57\u4e2d\u6700\u5c0f\u7684\u4e00\u4e2a\u3002",(0,i.yg)("br",{parentName:"p"}),"\n","\u4f8b\u5982\u8f93\u5165\u6570\u7ec4","[3\uff0c32\uff0c321]","\uff0c\u5219\u6253\u5370\u51fa\u8fd9\u4e09\u4e2a\u6570\u5b57\u80fd\u6392\u6210\u7684\u6700\u5c0f\u6570\u5b57\u4e3a321323\u3002  "),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u8f93\u51fa\u7ed3\u679c\u53ef\u80fd\u975e\u5e38\u5927\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u800c\u4e0d\u662f\u6574\u6570  "),(0,i.yg)("li",{parentName:"ol"},"\u62fc\u63a5\u8d77\u6765\u7684\u6570\u5b57\u53ef\u80fd\u4f1a\u6709\u524d\u5bfc 0\uff0c\u6700\u540e\u7ed3\u679c\u4e0d\u9700\u8981\u53bb\u6389\u524d\u5bfc 0  ")),(0,i.yg)("p",null,"\u5982\u679c str1+str2 < str2+str1 \uff0c\u5219 str1 \u5e94\u8be5\u5728\u524d\u9762"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public String PrintMinNumber(int [] numbers) {\n    String[] arr = new String[numbers.length];\n    for(int i=0;i<numbers.length;++i){\n        arr[i] = String.valueOf(numbers[i]);\n    }\n    Arrays.sort(arr, (s1,s2)->(s1+s2).compareTo(s2+s1) );\n    StringBuilder sb = new StringBuilder();\n    for(String s: arr) sb.append(s);\n    return sb.toString();\n}\n")))}u.isMDXComponent=!0}}]);