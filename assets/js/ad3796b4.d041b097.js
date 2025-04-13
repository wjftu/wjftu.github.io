"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[4473],{5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>y});var l=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,l,r=function(e,n){if(null==e)return{};var a,l,r={},t=Object.keys(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),c=function(e){var n=l.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},g=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,y=u["".concat(s,".").concat(m)]||u[m]||i[m]||t;return a?l.createElement(y,o(o({ref:n},g),{},{components:a})):l.createElement(y,o({ref:n},g))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,o=new Array(t);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<t;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9311:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>p,toc:()=>s});var l=a(8168),r=(a(6540),a(5680));const t={title:"JavaScript",sidebar_position:1},o=void 0,p={unversionedId:"frontend/javascript",id:"frontend/javascript",title:"JavaScript",description:"ECMAScript \u662f\u4e00\u79cd\u811a\u672c\u8bed\u8a00\u89c4\u8303\uff0cJavaScript \u662f\u5b9e\u73b0\u89c4\u8303\u7684\u8bed\u8a00",source:"@site/note/frontend/javascript.md",sourceDirName:"frontend",slug:"/frontend/javascript",permalink:"/note/frontend/javascript",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"JavaScript",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef",permalink:"/note/frontend/"},next:{title:"Vue",permalink:"/note/frontend/vue"}},s=[{value:"\u53d8\u91cf",id:"\u53d8\u91cf",children:[],level:3},{value:"\u51fd\u6570",id:"\u51fd\u6570",children:[],level:3},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",children:[],level:3},{value:"\u96c6\u5408\u6846\u67b6",id:"\u96c6\u5408\u6846\u67b6",children:[],level:3},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",children:[],level:3}],c={toc:s},g="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,l.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ECMAScript \u662f\u4e00\u79cd\u811a\u672c\u8bed\u8a00\u89c4\u8303\uff0cJavaScript \u662f\u5b9e\u73b0\u89c4\u8303\u7684\u8bed\u8a00"),(0,r.yg)("h3",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,r.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 let \u58f0\u660e\u53d8\u91cf\uff0c\u53d8\u91cf\u53ef\u4ee5\u662f number string object boolean \u7b49\u7b49\uff0c\u53ef\u4ee5\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"typeof")," \u67e5\u770b\u53d8\u91cf\u7c7b\u578b\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// number\nlet a = 13\nlet b = 1.2\n// string\nlet c = "abc"\n// object\nlet d = {\n    name: "jeff",\n    age: 12\n}\n// boolean\nlet e = true\n')),(0,r.yg)("p",null,"\u5e38\u91cf\u7528 const \u58f0\u660e\uff0c\u5e38\u91cf\u4e0d\u53ef\u4ee5\u91cd\u65b0\u8d4b\u503c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const PI = 3.14\n")),(0,r.yg)("h3",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.yg)("p",null,"\u901a\u8fc7 function \u5b9a\u4e49\u51fd\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'function hello() {\n    console.log("hello sir")\n}\n\nfunction sayHello(name) {\n    console.log("hello", name)\n}\n')),(0,r.yg)("p",null,"\u4f18\u96c5\u7684\u7bad\u5934\u51fd\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let hello = () => {\n    console.log("hello sir")\n}\n\nlet sayHello = (name) => {\n    console.log("hello", name)\n}\n')),(0,r.yg)("p",null,"\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"let add = (a, b) => {\n    return a + b\n}\n\n// \u9690\u5f0f\u8fd4\u56de\nlet add2 = (a, b) => a + b\n")),(0,r.yg)("p",null,"\u53c2\u6570\u53ef\u4ee5\u6709\u9ed8\u8ba4\u503c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let sayHello = (name = "john") => {\n    console.log("hello", name)\n}\n')),(0,r.yg)("h3",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,r.yg)("p",null,"\u58f0\u660e\u6570\u7ec4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// \u58f0\u660e\u7a7a\u6570\u7ec4\uff0c\u957f\u5ea6\u4e3a 0 \nlet a1 = []\n// \u58f0\u660e\u6307\u5b9a\u957f\u5ea6\u7684\u6570\u7ec4\uff0c\u5143\u7d20\u4e3a undefined\nlet a2 = new Array(3)\n// \u58f0\u660e\u5e76\u521d\u59cb\u5316\u6570\u7ec4\u5143\u7d20\nlet a3 = [1, "tom", true]\n')),(0,r.yg)("p",null,"\u53ef\u4ee5\u7528 push \u548c pop \u5728\u5c3e\u90e8\u6dfb\u52a0\u6216\u5f39\u51fa\u5143\u7d20\uff0c\u53ef\u4ee5\u7528 unshift \u548c shift \u5728\u5934\u90e8\u6dfb\u52a0\u6216\u5f39\u51fa\u5143\u7d20"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"let arr = [1,2,3]\narr.push(4)\n// [ 1, 2, 3, 4 ]\narr.pop()\n// [ 1, 2, 3 ]\narr.unshift(0)\n// [ 0, 1, 2, 3 ]\narr.shift()\n// [ 1, 2, 3 ]\n")),(0,r.yg)("p",null,"splice \u65b9\u6cd5\u53ef\u4ee5\u5220\u9664\u5143\u7d20\uff0c\u7b2c\u4e00\u4e2a\u53d8\u91cf\u4e3a\u5176\u5b9e\u7d22\u5f15\uff0c\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u4e3a\u5220\u9664\u5143\u7d20\u7684\u4e2a\u6570"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"let arr1 = [1,2,3,4,5]\nlet arr2 = arr1.splice(2,1)\n// arr1: [ 1, 2, 4, 5 ]\n// arr2: [ 3 ]\n")),(0,r.yg)("p",null,"\u6392\u5e8f"),(0,r.yg)("p",null,"\u6ce8\u610f number \u6392\u5e8f\u9700\u8981\u624b\u52a8\u4f20\u5165\u5224\u65ad\u5927\u5c0f\u7684\u65b9\u6cd5\uff0c\u5426\u5219\u5c31\u662f\u5b57\u7b26\u4e32\u6392\u5e8f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"let arr1 = [\"bob\", \"david\", \"carol\", \"alice\"]\nlet arr2 = [4,1,15,2,3]\nlet arr3 = [4,1,15,2,3]\narr1.sort()\narr2.sort()\narr3.sort((a, b) => a - b)\n\n// arr1 [ 'alice', 'bob', 'carol', 'david' ]\n// arr2 [ 1, 15, 2, 3, 4 ]\n// arr3 [ 1, 2, 3, 4, 15 ]\n")),(0,r.yg)("p",null,"\u904d\u5386\u6570\u7ec4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let names = ["alice", "bob", "caleb"]\nfor(let name of names) {\n    console.log(name)\n}\n\nfor(let i=0; i<names.length; i++) {\n    console.log(names[i])\n}\n\nnames.forEach((name) => {\n    console.log(name)\n})\n')),(0,r.yg)("p",null,"filter \u65b9\u6cd5\u53ef\u4ee5\u6839\u636e\u6761\u4ef6\u8fc7\u6ee4\u5e76\u751f\u6210\u65b0\u7684\u6570\u7ec4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let names = ["alice", "bob", "caleb"]\nlet arr = names.filter((name) => {\n    return name.length > 3\n})\n// [ \'alice\', \'caleb\' ]\n')),(0,r.yg)("p",null,"\u5c55\u5f00\u6570\u7ec4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"let arr = [1,3,2]\nlet arr2 = [...arr]\n// arr2: [ 1, 3, 2 ]\n")),(0,r.yg)("h3",{id:"\u96c6\u5408\u6846\u67b6"},"\u96c6\u5408\u6846\u67b6"),(0,r.yg)("p",null,"Map"),(0,r.yg)("p",null,"set \u65b9\u6cd5\u8bbe\u7f6e\u952e\u503c\u5bf9\uff0c\u4f1a\u8986\u76d6\u539f\u6709\u7684  "),(0,r.yg)("p",null,"has \u65b9\u6cd5\u5224\u65ad\u662f\u5426\u5b58\u5728\u67d0\u4e2a\u952e  "),(0,r.yg)("p",null,"delete \u65b9\u6cd5\u5220\u9664\u952e\u503c\u5bf9  "),(0,r.yg)("p",null,"clear \u65b9\u6cd5\u6e05\u9664\u6240\u6709\u952e\u503c\u5bf9  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let mp = new Map()\nmp.set("k1", "v1")\nmp.has("k1")\nmp.delete("k1")\nmp.clear()\n')),(0,r.yg)("p",null,"\u521b\u5efa\u5e76\u521d\u59cb\u5316 Map"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let mp = new Map([\n    ["k1", "v1"],\n    ["k2", 2]\n])\n')),(0,r.yg)("p",null,"\u904d\u5386 Map"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"let mp = new Map([\n    [\"name\", \"jeff\"],\n    [\"age\", 1]\n])\n\nfor(let entry of mp) {\n    console.log(entry)\n}\n// [ 'name', 'jeff' ]\n// [ 'age', 1 ]\n\nfor(let [key, value] of mp) {\n    console.log(key, value)\n}\n// name jeff\n// age 1\n\nmp.forEach((value, key) => {\n    console.log(key, value)\n})\n// name jeff\n// age 1\n")),(0,r.yg)("p",null,"Set"),(0,r.yg)("p",null,"has \u65b9\u6cd5\u5224\u65ad\u662f\u5426\u5143\u7d20\u5b58\u5728"),(0,r.yg)("p",null,"delete \u65b9\u6cd5\u5220\u9664\u5143\u7d20\uff0c\u5143\u7d20\u5b58\u5728\u8fd4\u56de true \uff0c\u5426\u5219\u8fd4\u56de false"),(0,r.yg)("p",null,"add \u65b9\u6cd5\u6dfb\u52a0\u5143\u7d20\uff0c\u5e76\u8fd4\u56de set"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"let st = new Set([\"apple\", \"banana\"])\n// Set(2) { 'apple', 'banana' }\nlet b = st.has(\"apple\") // true\n\n// Set(3) { 'apple', 'banana', 'coconut' }\nst.delete(\"apple\")\n// Set(2) { 'banana', 'coconut' }\n")),(0,r.yg)("p",null,"Set \u8f6c\u4e3a\u6570\u7ec4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let st = new Set(["apple", "banana", "coconut"])\nlet arr = Array.from(st)\n')),(0,r.yg)("p",null,"\u904d\u5386"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let names = ["jim", "merry", "alice"]\n\nfor(let name of names) {\n    console.log(name)\n}\n\nnames.forEach(name => {\n    console.log(name)\n})\n')),(0,r.yg)("h3",{id:"\u5bf9\u8c61"},"\u5bf9\u8c61"),(0,r.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u5bf9\u8c61"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let people = {\n    name: "jeff",\n    age: 1\n}\n')),(0,r.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u70b9\u6216\u8005\u4e2d\u62ec\u53f7\u83b7\u53d6\u548c\u4fee\u6539\u5c5e\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7 in \u5224\u65ad\u662f\u5426\u5b58\u5728\u67d0\u4e2a\u5c5e\u6027"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'people.age = 2\npeople["name"] = "jim"\npeople["job"] = "typist"\n// { name: \'jim\', age: 2, job: \'typist\' }\nconsole.log(age in people ) //true\n')))}u.isMDXComponent=!0}}]);