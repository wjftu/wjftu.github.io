"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[110],{4127:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const o={sidebar_position:799},l="799 Champagne Tower",i={unversionedId:"algorithmPractice/leetcode/799",id:"algorithmPractice/leetcode/799",title:"799 Champagne Tower",description:"Leetcode",source:"@site/note/algorithmPractice/leetcode/799.md",sourceDirName:"algorithmPractice/leetcode",slug:"/algorithmPractice/leetcode/799",permalink:"/note/algorithmPractice/leetcode/799",tags:[],version:"current",sidebarPosition:799,frontMatter:{sidebar_position:799},sidebar:"tutorialSidebar",previous:{title:"763 Partition Labels",permalink:"/note/algorithmPractice/leetcode/763"},next:{title:"844 Backspace String Compare",permalink:"/note/algorithmPractice/leetcode/844"}},p=[],s={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"799-champagne-tower"},"799 Champagne Tower"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/champagne-tower/"},"Leetcode")),(0,a.yg)("p",null,"We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.  Each glass holds one cup of champagne."),(0,a.yg)("p",null,"Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)"),(0,a.yg)("p",null,"For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below."),(0,a.yg)("p",null,"Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.)"),(0,a.yg)("p",null,"Example 1:"),(0,a.yg)("p",null,"Input: poured = 1, query_row = 1, query_glass = 1",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 0.00000",(0,a.yg)("br",{parentName:"p"}),"\n","Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.  "),(0,a.yg)("p",null,"Example 2:"),(0,a.yg)("p",null,"Input: poured = 2, query_row = 1, query_glass = 1",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 0.50000",(0,a.yg)("br",{parentName:"p"}),"\n","Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.  "),(0,a.yg)("p",null,"Example 3:"),(0,a.yg)("p",null,"Input: poured = 100000009, query_row = 33, query_glass = 17",(0,a.yg)("br",{parentName:"p"}),"\n","Output: 1.00000  "),(0,a.yg)("p",null,"\u6c42\u51fa\u6bcf\u4e00\u4e2a\u676f\u5b50\u7684\u6d41\u91cf\uff0c\u4e0b\u9762\u5de6\u53f3\u4e24\u4e2a\u676f\u5b50\u7684\u6d41\u91cf\u4e3a\u5f53\u524d\u676f\u5b50\u6d41\u91cf\u51cf 1 \u7684\u4e00\u534a\u3002"),(0,a.yg)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u6709\u8ba1\u7b97\u4e00\u4e9b\u4e0d\u9700\u8981\u7684\u676f\u5b50\uff0c\u975e\u6700\u4f18\u89e3\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public double champagneTower(int poured, int query_row, int query_glass) {\n    double[][] cup = new double[query_row+1][];\n    for(int i=0;i<=query_row;++i){\n        cup[i] = new double[i+1];\n    }\n    cup[0][0]=poured;\n    for(int i=1;i<=query_row;++i){\n        if(cup[i-1][0]>1) cup[i][0]=(cup[i-1][0]-1)/2;\n        \n        for(int j=1;j<=i;++j){\n            if(j>i/2){\n                cup[i][j]=cup[i][i-j];\n            } else {\n                if(cup[i-1][j-1]>1) cup[i][j]+=(cup[i-1][j-1]-1)/2;\n                if(cup[i-1][j]>1) cup[i][j]+=(cup[i-1][j]-1)/2;\n            }\n        }\n    }\n    double ret = cup[query_row][query_glass];\n    if(ret>1) return 1;\n    return ret;\n}\n")))}c.isMDXComponent=!0},5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),h=a,d=c["".concat(p,".").concat(h)]||c[h]||g[h]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);