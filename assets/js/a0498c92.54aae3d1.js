"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[5663],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(6540);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(t),v=p,d=s["".concat(u,".").concat(v)]||s[v]||m[v]||o;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=v;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[s]="string"==typeof e?e:p,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6090:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(8168),p=(t(6540),t(5680));const o={title:"Vue",sidebar_position:5},a=void 0,i={unversionedId:"frontend/vue",id:"frontend/vue",title:"Vue",description:"Vue.js \uff0c\u5e02\u573a\u5360\u6709\u7387\u524d 2 \u7684\u524d\u7aef\u6846\u67b6",source:"@site/note/frontend/vue.md",sourceDirName:"frontend",slug:"/frontend/vue",permalink:"/note/frontend/vue",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Vue",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/note/frontend/javascript"},next:{title:"React \u5feb\u901f\u4e0a\u624b",permalink:"/note/frontend/react-quickstart"}},u=[{value:"\u521b\u5efa Vue \u9879\u76ee",id:"\u521b\u5efa-vue-\u9879\u76ee",children:[],level:3},{value:"\u57fa\u7840",id:"\u57fa\u7840",children:[],level:3}],l={toc:u},c="wrapper";function s(e){let{components:n,...t}=e;return(0,p.yg)(c,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,p.yg)("p",null,"Vue.js \uff0c\u5e02\u573a\u5360\u6709\u7387\u524d 2 \u7684\u524d\u7aef\u6846\u67b6"),(0,p.yg)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a ",(0,p.yg)("a",{parentName:"p",href:"https://vuejs.org/"},"https://vuejs.org/"),"\n\u4e2d\u6587\u5b98\u65b9\u6587\u6863\uff1a ",(0,p.yg)("a",{parentName:"p",href:"https://cn.vuejs.org/"},"https://cn.vuejs.org/")," "),(0,p.yg)("h3",{id:"\u521b\u5efa-vue-\u9879\u76ee"},"\u521b\u5efa Vue \u9879\u76ee"),(0,p.yg)("p",null,"\u901a\u8fc7 CDN \u4f7f\u7528 Vue"),(0,p.yg)("p",null,"\u5168\u5c40\u6784\u5efa\u7248\u672c\uff1a\u6240\u6709\u9876\u5c42 API \u90fd\u4ee5\u5c5e\u6027\u7684\u5f62\u5f0f\u66b4\u9732\u5728\u4e86\u5168\u5c40\u7684 Vue \u5bf9\u8c61\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7\u89e3\u6784\u83b7\u53d6\u8fd9\u4e9b"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},'<!Doctype html>\n<html>\n    <head>\n        <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\n    </head>\n    <body>\n        <div id="app">\n            {{ msg }}\n        </div>\n        <script>\n            Vue.createApp({\n                setup() {\n                    return {\n                        msg: "success"\n                    }\n                }\n            }).mount("#app")\n        <\/script>\n    </body>\n</html>\n')),(0,p.yg)("p",null,"\u4f7f\u7528 ES \u6a21\u5757\u6784\u5efa\u7248\u672c"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},"<!Doctype html>\n<html>\n    <head>\n\n    </head>\n    <body>\n        <div id=\"app\">\n            {{ msg }}\n        </div>\n        <script type=\"module\">\n            import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'\n            createApp({\n                setup() {\n                    const msg = ref('success')\n                    return {\n                        msg\n                    }\n                }\n            }).mount('#app')\n        <\/script>\n    </body>\n</html>\n")),(0,p.yg)("p",null,"\u6bcf\u4e2a Vue \u5e94\u7528\u90fd\u662f\u901a\u8fc7 createApp \u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 \u5e94\u7528\u5b9e\u4f8b\uff0c\u4f20\u5165\u7684\u662f\u4e00\u4e2a\u6839\u7ec4\u4ef6\uff0c\u5e76\u5c06\u5176\u6302\u8f7d\u5230 dom \u5143\u7d20\uff0c\u53ef\u4ee5\u4f7f\u7528 mount \u65b9\u6cd5\u4f20\u5165 css \u9009\u62e9\u5668\u5c06\u5176\u6302\u8f7d\u3002"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-js"},"import { createApp } from 'vue'\n\nconst app = createApp({\n  /* \u6839\u7ec4\u4ef6\u9009\u9879 */\n})\napp.mount('#app')\n")),(0,p.yg)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,p.yg)("p",null,"\u54cd\u5e94\u5f0f\u6570\u636e "),(0,p.yg)("p",null,"\u5728\u7ec4\u5408\u5f0f API \u4e2d\uff0c\u63a8\u8350\u4f7f\u7528 ref() \u51fd\u6570\u6765\u58f0\u660e\u54cd\u5e94\u5f0f\u72b6\u6001\uff0cref \u4f1a\u8fd4\u56de\u4e00\u4e2a\u5e26\u6709 value \u5c5e\u6027\u7684\u5f15\u7528\u5bf9\u8c61\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u5c5e\u6027\u83b7\u53d6\u6216\u4fee\u6539\u503c\uff0c\u5f53\u72b6\u6001\u6539\u53d8\u65f6\u4f1a\u91cd\u65b0\u6e32\u67d3"),(0,p.yg)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\uff0c\u5728\u6a21\u7248\u4e2d\u4f7f\u7528\u4e0d\u9700\u8981\u7528 value \u5c5e\u6027\uff0cref \u4f1a\u81ea\u52a8\u89e3\u5305\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},'<div id="app">\n    {{ count }}\n    <button @click="count++">count++</button>\n    <button @click="increment">increment</button>\n</div>\n<script type="module">\n    import { createApp, ref, reactive } from \'https://unpkg.com/vue@3/dist/vue.esm-browser.js\'\n    createApp({\n        setup() {\n            const count = ref(1)\n            const increment = () => {\n                count.value++\n            }\n            return {\n                count,\n                increment\n            }\n        }\n    }).mount(\'#app\')\n<\/script>\n')),(0,p.yg)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528 reactive \u6765\u58f0\u660e\u54cd\u5e94\u5f0f\u53d8\u91cf\uff0c\u901a\u8fc7\u4ee3\u7406\u5bf9\u8c61\u5b9e\u73b0\uff0c\u5f53\u72b6\u6001\u6539\u53d8\u65f6\u4f1a\u91cd\u65b0\u6e32\u67d3"),(0,p.yg)("p",null,"reactive \u9002\u5408\u590d\u6742\u5bf9\u8c61\uff0c\u4e0d\u80fd\u7528\u4e8e\u57fa\u672c\u7c7b\u578b string\u3001number \u6216 boolean\u3002\u7531\u4e8e\u901a\u8fc7\u4ee3\u7406\uff0c\u56e0\u6b64\u4e0d\u80fd\u66ff\u6362\u6574\u4e2a\u5bf9\u8c61"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},'<div id="app">\n    {{ people }}\n    <button @click="people.age++">count++</button>\n    <button @click="increment">increment</button>\n</div>\n<script type="module">\n    import { createApp, ref, reactive } from \'https://unpkg.com/vue@3/dist/vue.esm-browser.js\'\n    createApp({\n        setup() {\n            const people = reactive({\n                name: "jeff",\n                age: 1\n            })\n            const increment = () => {\n                people.age++\n            }\n            return {\n                people,\n                increment\n            }\n        }\n    }).mount(\'#app\')\n<\/script>\n')),(0,p.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 v-on \u6307\u4ee4 (\u7b80\u5199\u4e3a @) \u6765\u76d1\u542c\u4e8b\u4ef6\uff0c\u4f8b\u5982 ",(0,p.yg)("inlineCode",{parentName:"p"},"v-on:click")," \uff0c\u4e8b\u4ef6\u53d1\u751f\u65f6\u4f1a\u8fd0\u884c\u540e\u9762\u7684 JavaScript \u8bed\u53e5\u3002"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},'<div id="app">\n    {{ people }}\n    <button v-on:click="increment">increment1</button>\n    <button @click="increment">increment2</button>\n</div>\n<script type="module">\n    import { createApp, ref, reactive } from \'https://unpkg.com/vue@3/dist/vue.esm-browser.js\'\n    createApp({\n        setup() {\n            const people = ref({\n                name: "jeff",\n                age: 1\n            })\n            const increment = () => {\n                console.log(people)\n                people.value.age++\n            }\n            return {\n                people,\n                increment\n            }\n        }\n    }).mount(\'#app\')\n<\/script>\n')),(0,p.yg)("p",null,"\u6761\u4ef6\u6e32\u67d3"),(0,p.yg)("p",null,"v-show \u548c v-if \u53ef\u4ee5\u7528\u6765\u63a7\u5236\u663e\u793a"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},'<div id="app">\n    <div>show: {{ show }}</div>\n    <div v-show="show">v-show</div>\n    <div v-if="show">v-if</div>\n    <div v-else="show">v-else</div>\n    <button @click="change">Change show</button>\n</div>\n<script type="module">\n    import { createApp, ref, reactive } from \'https://unpkg.com/vue@3/dist/vue.esm-browser.js\'\n    createApp({\n        setup() {\n            const show = ref(true)\n            const change = () => {\n                show.value = !show.value\n            }\n            return {\n                show,\n                change\n            }\n        }\n    }).mount(\'#app\')\n<\/script>\n')),(0,p.yg)("p",null,"\u67e5\u770b\u6e90\u4ee3\u7801\u53ef\u4ee5\u770b\u5230 v-show \u662f\u901a\u8fc7 display \u63a7\u5236\u7684\uff0c\u800c v-if \u662f\u52a0\u5165\u6216\u79fb\u9664\u5143\u7d20\uff0cv-show \u6709\u66f4\u9ad8\u7684\u6027\u80fd\u4f18\u52bf"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},'<div style="display: none;">v-show</div>\n<div>v-else</div>\n')),(0,p.yg)("p",null,"\u52a8\u6001\u5c5e\u6027\u7ed1\u5b9a "),(0,p.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 v-bind \u6216\u8005\u7b80\u5199\u5192\u53f7\u8fdb\u884c\u52a8\u6001\u5c5e\u6027\u7ed1\u5b9a"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},'<div id="app">\n    <div :style="{ \'font-size\': fontSize + \'px\' }">Size</div>\n    <input type="text" v-bind:value="fontSize">\n    <input type="text" :value="fontSize">\n    <button @click="fontSize++">increment</button>\n</div>\n<script type="module">\n    import { createApp, ref, reactive } from \'https://unpkg.com/vue@3/dist/vue.esm-browser.js\'\n    createApp({\n        setup() {\n            const fontSize = ref(1)\n            return {\n                fontSize\n            }\n        }\n    }).mount(\'#app\')\n<\/script>\n')),(0,p.yg)("p",null,"\u5217\u8868\u6e32\u67d3"),(0,p.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 v-for \u904d\u5386\u5bf9\u8c61\u548c\u6570\u7ec4"),(0,p.yg)("p",null,"\u53ef\u4ee5\u5728 template \u4e0a\u4f7f\u7528 v-for \u6765\u6e32\u67d3\u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u5143\u7d20\u7684\u5757\uff0ctemplate \u4e0d\u4f1a\u6e32\u67d3"),(0,p.yg)("p",null,"key \u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4f46\u63a8\u8350\u4f7f\u7528\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-html"},'<div id="app">\n    <div v-for="(value, key, index) in people" :key="key">\n        value: {{value}}, key: {{key}}, index: {{index}}\n    </div>\n    <div v-for="(number, index) in numbers" :key="index">\n        number: {{ number }} , index: {{ index }}\n    </div>\n    <template v-for="number in numbers" :key="index">\n        <div v-if="number % 2 === 1">{{ number }}</div>\n    </template>\n</div>\n<script type="module">\n    import { createApp, ref, reactive } from \'https://unpkg.com/vue@3/dist/vue.esm-browser.js\'\n    createApp({\n        setup() {\n            const people = ref({\n                name: "jeff",\n                age: 12\n            })\n            const numbers = ref([11,22,33])\n            return {\n                people,\n                numbers\n            }\n        }\n    }).mount(\'#app\')\n<\/script>\n')))}s.isMDXComponent=!0}}]);