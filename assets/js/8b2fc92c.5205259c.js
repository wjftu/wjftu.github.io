"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[7e3],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,g=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4748:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(8168),o=(t(6540),t(5680));const i={sidebar_position:54},a="54 \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2ck\u4e2a\u8282\u70b9",l={unversionedId:"algorithmPractice/codingInterviews/54",id:"algorithmPractice/codingInterviews/54",title:"54 \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2ck\u4e2a\u8282\u70b9",description:"\u725b\u5ba2",source:"@site/note/algorithmPractice/codingInterviews/54.md",sourceDirName:"algorithmPractice/codingInterviews",slug:"/algorithmPractice/codingInterviews/54",permalink:"/note/algorithmPractice/codingInterviews/54",tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"tutorialSidebar",previous:{title:"53 \u6570\u5b57\u5728\u5347\u5e8f\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u6b21\u6570",permalink:"/note/algorithmPractice/codingInterviews/53"},next:{title:"55 \u4e8c\u53c9\u6811\u7684\u6df1\u5ea6",permalink:"/note/algorithmPractice/codingInterviews/55"}},c=[],p={toc:c},u="wrapper";function s(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"54-\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2ck\u4e2a\u8282\u70b9"},"54 \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7b2ck\u4e2a\u8282\u70b9"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.nowcoder.com/practice/57aa0bab91884a10b5136ca2c087f8ff"},"\u725b\u5ba2")),(0,o.yg)("p",null,"\u63cf\u8ff0"),(0,o.yg)("p",null,"\u7ed9\u5b9a\u4e00\u68f5\u7ed3\u70b9\u6570\u4e3an \u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u8bf7\u627e\u51fa\u5176\u4e2d\u7684\u7b2c k \u5c0f\u7684TreeNode\u7ed3\u70b9\u503c\u3002"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u8fd4\u56de\u7b2ck\u5c0f\u7684\u8282\u70b9\u503c\u5373\u53ef  "),(0,o.yg)("li",{parentName:"ol"},"\u4e0d\u80fd\u67e5\u627e\u7684\u60c5\u51b5\uff0c\u5982\u4e8c\u53c9\u6811\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de-1\uff0c\u6216\u8005k\u5927\u4e8en\u7b49\u7b49\uff0c\u4e5f\u8fd4\u56de-1  "),(0,o.yg)("li",{parentName:"ol"},"\u4fdd\u8bc1n\u4e2a\u8282\u70b9\u7684\u503c\u4e0d\u4e00\u6837  ")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"import java.util.*;\n\n/*\n * public class TreeNode {\n *   int val = 0;\n *   TreeNode left = null;\n *   TreeNode right = null;\n *   public TreeNode(int val) {\n *     this.val = val;\n *   }\n * }\n */\n\npublic class Solution {\n    /**\n     * \u4ee3\u7801\u4e2d\u7684\u7c7b\u540d\u3001\u65b9\u6cd5\u540d\u3001\u53c2\u6570\u540d\u5df2\u7ecf\u6307\u5b9a\uff0c\u8bf7\u52ff\u4fee\u6539\uff0c\u76f4\u63a5\u8fd4\u56de\u65b9\u6cd5\u89c4\u5b9a\u7684\u503c\u5373\u53ef\n     *\n     * \n     * @param proot TreeNode\u7c7b \n     * @param k int\u6574\u578b \n     * @return int\u6574\u578b\n     */\n    public int KthNode (TreeNode proot, int k) {\n        if(proot==null || k<=0) return -1;\n        kk=k;\n        ret=null;\n        kThNode(proot);\n        if(ret==null) return -1;\n        return ret;\n    }\n    \n    int kk;\n    Integer ret;\n    private void kThNode(TreeNode proot){\n        if(ret!=null) return;\n        if(proot.left!=null){\n            kThNode(proot.left);\n        }\n        kk--;\n        if(kk==0) ret=proot.val;\n        if(ret!=null) return;\n        if(proot.right!=null) kThNode(proot.right);\n    }\n}\n")))}s.isMDXComponent=!0}}]);