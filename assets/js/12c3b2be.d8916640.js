"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[7359],{6429:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"java/basic/jvm","title":"JVM","description":"\u7c7b\u52a0\u8f7d","source":"@site/note/java/basic/jvm.md","sourceDirName":"java/basic","slug":"/java/basic/jvm","permalink":"/note/java/basic/jvm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5faa\u73af","permalink":"/note/java/basic/loop"},"next":{"title":"\u96c6\u5408\u6846\u67b6","permalink":"/note/java/advanced/collections"}}');var r=s(4848),l=s(8453);const a={},c="JVM",t={},d=[{value:"\u7c7b\u52a0\u8f7d",id:"\u7c7b\u52a0\u8f7d",level:3},{value:"\u6808",id:"\u6808",level:3},{value:"\u5806",id:"\u5806",level:3},{value:"\u65b9\u6cd5\u533a",id:"\u65b9\u6cd5\u533a",level:3}];function o(n){const e={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"jvm",children:"JVM"})}),"\n",(0,r.jsx)(e.h3,{id:"\u7c7b\u52a0\u8f7d",children:"\u7c7b\u52a0\u8f7d"}),"\n",(0,r.jsx)(e.p,{children:"java \u6587\u4ef6\u7ecf\u8fc7\u7f16\u8bd1\u53d8\u6210\u5b57\u8282\u7801 class \u6587\u4ef6\uff0cclass \u6587\u4ef6\u88ab\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u8fdb\u5165\u65b9\u6cd5\u533a\uff0c\u751f\u6210 Class \u5bf9\u8c61\u653e\u5728\u5806\u4e2d"}),"\n",(0,r.jsx)(e.p,{children:"\u4ec0\u4e48\u65f6\u5019\u4f1a\u52a0\u8f7d\u7c7b\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u8fd0\u884c main \u65b9\u6cd5"}),"\n",(0,r.jsx)(e.li,{children:"new \u5bf9\u8c61"}),"\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528\u9759\u6001\u53d8\u91cf\u6216\u65b9\u6cd5"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7c7b\u52a0\u8f7d\u4e03\u5927 \u6d41\u7a0b\uff1a \u52a0\u8f7d\uff0c\u9a8c\u8bc1\uff0c\u51c6\u5907\uff0c\u89e3\u6790\uff0c\u521d\u59cb\u5316\uff0c\u4f7f\u7528\uff0c\u5378\u8f7d"}),"\n",(0,r.jsx)(e.p,{children:"\u52a0\u8f7d\uff1a\u901a\u8fc7\u5168\u540d\uff08\u5305\u540d\u548c\u7c7b\u540d\uff09\u8bfb\u53d6\u5b57\u8282\u6d41\uff0c\u5c06\u5b57\u8282\u6d41\u4ee3\u8868\u7684\u6570\u636e\u7ed3\u6784\u8f6c\u5316\u4e3a\u65b9\u6cd5\u533a\u7684\u7ed3\u6784\uff0c\u5728\u5806\u4e2d\u751f\u6210\u4e00\u4e2a\u6b64\u7c7b\u7684 java.lang.Class \u5bf9\u8c61\uff0c\u4f5c\u4e3a\u6b64\u7c7b\u7684\u8bbf\u95ee\u5165\u53e3"}),"\n",(0,r.jsx)(e.p,{children:"\u9a8c\u8bc1\uff1a\u5bf9\u7c7b\u8fdb\u884c\u9a8c\u8bc1\uff0c\u4fdd\u8bc1\u7c7b\u52a0\u8f7d\u6b63\u786e\u6027\uff0c\u786e\u4fdd\u4e0d\u4f1a\u5371\u5bb3\u865a\u62df\u673a\u7684\u5b89\u5168\uff1a\u6587\u4ef6\u683c\u5f0f\u9a8c\u8bc1\uff0c\u6e90\u6570\u636e\u9a8c\u8bc1\uff0c\u5b57\u8282\u7801\u9a8c\u8bc1\uff0c\u7b26\u53f7\u5f15\u7528\u9a8c\u8bc1"}),"\n",(0,r.jsx)(e.p,{children:"\u51c6\u5907\uff1a\u4e3a\u53d8\u91cf\u5206\u914d\u5185\u5b58\u5e76\u8bbe\u7f6e\u521d\u59cb\u503c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"class A {\n    //\u7c7b\u53d8\u91cf\uff0c\u51c6\u5907\u9636\u6bb5\u5206\u914d\u5230\u65b9\u6cd5\u533a\uff0c\u5e76\u8bbe\u7f6e\u521d\u59cb\u503c\n    static int a;\n    //\u4e0d\u5904\u7406\uff0cfinal \u4fee\u9970\u7684\u5728\u7f16\u8bd1\u9636\u6bb5\u5df2\u5206\u914d\u597d\n    final static int b = 0;\n    //\u5b9e\u4f8b\u53d8\u91cf\uff0c\u53ea\u5728\u5806\u4e2d\u5206\u914d\n    int c;\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u89e3\u6790\uff1a\u5c06\u5e38\u91cf\u6c60\u4e2d\u7684\u7b26\u53f7\u5f15\u7528\u8f6c\u4e3a\u76f4\u63a5\u5f15\u7528"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'final String STR = "a";\n\n//\u89e3\u6790\u524d\nSystem.out.println(STR);\n//\u89e3\u6790\u540e\nSystem.out.println("a"); \n'})}),"\n",(0,r.jsx)(e.p,{children:"\u521d\u59cb\u5316\uff1a\u5f53\u4e3b\u52a8\u5f15\u7528\uff0c\u4f7f\u7528\u975e final \u4fee\u9970\u7684\u9759\u6001\u6210\u5458\uff0c\u8c03\u7528\u9759\u6001\u65b9\u6cd5\uff0c\u53cd\u5c04\u8c03\u7528\uff0c\u4f1a\u89e6\u53d1\u7c7b\u521d\u59cb\u5316\u3002\u8fd0\u884c\u4e3b\u7c7b main \u65b9\u6cd5\u65f6\uff0c\u865a\u62df\u673a\u4f1a\u521d\u59cb\u5316\u4e3b\u7c7b\u3002\u5f53\u53d1\u73b0\u7236\u7c7b\u6ca1\u6709\u521d\u59cb\u5316\uff0c\u4f1a\u5148\u521d\u59cb\u5316\u7236\u7c7b\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5378\u8f7d\u53d1\u751f\u7684\u60c5\u51b5\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6267\u884c ",(0,r.jsx)(e.code,{children:"System.exit();"})]}),"\n",(0,r.jsx)(e.li,{children:"\u7a0b\u5e8f\u6b63\u5e38\u7ec8\u6b62"}),"\n",(0,r.jsx)(e.li,{children:"\u7a0b\u5e8f\u5f02\u5e38\u7ed3\u675f"}),"\n",(0,r.jsx)(e.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\u5f02\u5e38\u5bfc\u81f4 jvm \u8fdb\u7a0b\u7ec8\u6b62"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u7c7b\u52a0\u8f7d\u5668\u5305\u62ec\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\uff08Bootstrap\uff09\uff0c\u6269\u5c55\u7c7b\u52a0\u8f7d\u5668\uff08ExtClassLoader\uff09\uff0c\u7cfb\u7edf\u7c7b\u52a0\u8f7d\u5668\uff08AppClassLoader\uff09\u3002\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u7cfb\u7edf\u5c5e\u6027 ",(0,r.jsx)(e.code,{children:"sun.boot.class.path"})," \u8def\u5f84\u4e0b\u7684\u7c7b\uff0c\u5b83\u4f9d\u8d56\u4e8e\u64cd\u4f5c\u7cfb\u7edf\uff0c\u662f\u865a\u62df\u673a\u5b9e\u73b0\u7684\u4e00\u90e8\u5206 \u3002\u6269\u5c55\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d ",(0,r.jsx)(e.code,{children:"java.ext.dirs"})," \u4e0b\u7684\u7c7b\u3002\u7cfb\u7edf\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d ",(0,r.jsx)(e.code,{children:"java.class.path"})," \u4e0b\u7684\u7c7b\uff0c\u6211\u4eec\u5199\u7684\u4ee3\u7801\u548c\u4f7f\u7528\u7684\u4f9d\u8d56\u662f\u901a\u8fc7\u8fd9\u4e2a\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u7684\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\uff0c\u53ef\u4ee5\u7ee7\u627f ",(0,r.jsx)(e.code,{children:"java.lang.ClassLoader"})," \u5e76\u91cd\u5199\u5176\u65b9\u6cd5"]}),"\n",(0,r.jsx)(e.p,{children:"\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u7684\u65f6\u5019\u4f1a\u5411\u4e0a\u59d4\u6258\uff0c\u5148\u7528\u81ea\u5df1\u7684\u7c7b\u52a0\u8f7d\u5668\u5224\u65ad\u7c7b\u662f\u5426\u5df2\u7ecf\u88ab\u52a0\u8f7d\uff0c\u5982\u679c\u88ab\u52a0\u8f7d\u4e86\u996d\u56de Class \u5bf9\u8c61\uff0c\u5982\u679c\u6ca1\u6709\u5219\u59d4\u6258\u7ed9\u7236\u52a0\u8f7d\u5668\uff0c\u76f4\u5230\u6839\u7c7b\u52a0\u8f7d\u5668\u3002\u5982\u679c\u7236\u7c7b\u52a0\u8f7d\u5668\u53cd\u9988\u65e0\u6cd5\u52a0\u8f7d\uff0c\u5219\u4ea4\u7ed9\u5b50\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d"}),"\n",(0,r.jsx)(e.h3,{id:"\u6808",children:"\u6808"}),"\n",(0,r.jsx)(e.p,{children:"cpu \u5185\u90e8\u5b58\u5728\u7a0b\u5e8f\u8ba1\u6570\u5668\uff0c\u8bb0\u5f55\u4e0b\u4e00\u6761\u6307\u4ee4\u5730\u5740\u3002JVM \u4e5f\u7c7b\u4f3c\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u6709\u4e00\u4e2a\u8bb0\u5f55\u5f53\u524d bytecode \u7684\u5730\u5740\u7684\u8ba1\u6570\u5668\u3002CPU \u4e0d\u505c\u5207\u6362\u4e0a\u4e0b\u6587\uff0c\u7ebf\u7a0b\u4e0d\u65ad\u5207\u6362\uff0c\u7ebf\u7a0b\u4e0d\u65ad\u88ab\u4e2d\u6b62\u548c\u6062\u590d\uff0c\u9700\u8981\u8bb0\u5f55\u6267\u884c\u7684\u4f4d\u7f6e\u3002\u5206\u652f\uff0c\u8df3\u8f6c\uff0c\u5faa\u73af\uff0c\u7ebf\u7a0b\u5207\u6362\u90fd\u4f9d\u8d56\u4e8e\u7a0b\u5e8f\u8ba1\u6570\u5668\uff0c\u5b83\u662f\u7ebf\u7a0b\u9694\u79bb\u7684\uff0c\u5360\u7528\u7a7a\u95f4\u975e\u5e38\u5c0f\uff0c\u4e0d\u4f1a\u53d1\u751f OutofMemoryError\uff0c\u5f53\u6267\u884c native \u65b9\u6cd5\u65f6\u7a0b\u5e8f\u8ba1\u6570\u5668\u4e3a\u7a7a\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6bcf\u4e2a\u7ebf\u7a0b\u4f1a\u6709\u4e00\u4e2a\u865a\u62df\u673a\u6808\u3002\u6bcf\u4e2a\u6808\u5e27\u5305\u542b\u5c40\u90e8\u53d8\u91cf\u8868\uff08Local variable table\uff09\uff0c\u65b9\u6cd5\u8fd4\u56de\u5730\u5740\uff0c\u64cd\u4f5c\u6570\u6808\uff0c\u52a8\u6001\u94fe\u63a5\uff0c\u5176\u4ed6\u4fe1\u606f\u3002\u5c40\u90e8\u53d8\u91cf\u8868\u7684\u6570\u636e\u7c7b\u578b\u662f slot \uff0c\u5360\u7528 32 bit \uff0c\u5c0f\u4e8e 32 bit \u7684\u6570\u636e\u7c7b\u578b\u88c5\u4e00\u4e2a slot \uff0c\u5927\u4e8e\u7684\u88c5 2 \u4e2a\u3002\u5c40\u90e8\u53d8\u91cf\u8868\u4e5f\u5b58\u653e\u5bf9\u8c61\u5f15\u7528"}),"\n",(0,r.jsx)(e.p,{children:"\u6808\u7684\u5185\u5b58\u9ed8\u8ba4 1 MB\uff0c\u5f53\u5185\u5b58\u6ea2\u51fa\u62a5\u9519 java.lang. StackOverFlowError"}),"\n",(0,r.jsx)(e.h3,{id:"\u5806",children:"\u5806"}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u8c61\u50a8\u5b58\u5728\u5806\u4e2d\uff0c\u88ab\u6808\u548c\u5806\u4e2d\u7684\u53d8\u91cf\u5f15\u7528\uff0c\u5f53\u4e0d\u518d\u4f7f\u7528\u65f6\u4e0d\u518d\u88ab\u5f15\u7528\uff0c\u88ab\u5783\u573e\u56de\u6536\u7b97\u6cd5\u56de\u6536\u6389\u3002\u5806\u662f\u6240\u6709\u7ebf\u7a0b\u5171\u4eab\u7684\uff0c\u53ef\u4ee5\u88ab\u6240\u6709\u6808\u5e27\u8bbf\u95ee\u3002\u5f53\u7a7a\u95f4\u7528\u5b8c\u65f6\u62a5\u9519 OutofMemoryError"}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"-Xms"})," \u548c ",(0,r.jsx)(e.code,{children:"-Xmx"})," \u8bbe\u7f6e\u5806\u7684\u521d\u59cb\u5316\u5927\u5c0f\u548c\u6700\u5927\u5927\u5c0f\uff08\u5176\u4e2d ",(0,r.jsx)(e.code,{children:"-X"})," \u8868\u793a\u8fd0\u884c\u53c2\u6570\uff09\uff0c\u9ed8\u8ba4\u521d\u59cb\u5316\u5927\u5c0f\u4e3a\u64cd\u4f5c\u7cfb\u7edf\u5185\u5b58\u5927\u5c0f\u7684 1/64 \uff0c\u9ed8\u8ba4\u6700\u5927\u5927\u5c0f\u4e3a\u64cd\u4f5c\u7cfb\u7edf\u5185\u5b58\u5927\u5c0f\u7684 1/4"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"java -Xms512m -Xmx512m \n"})}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u4ee5\u4f7f\u7528 jmap \u67e5\u770b\u5806\u5185\u90e8\u7ed3\u6784"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"jmap -heap [pid]\njmap -histo:live [pid]\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u9ed8\u8ba4\u65b0\u751f\u4ee3\u5360\u5806\u5185\u5b58\u7684 1/3\uff0c\u8001\u5e74\u4ee3\u9ed8\u8ba4\u5360 2/3\uff0c\u5143\u7a7a\u95f4\uff08metaspace\uff09\u9ed8\u8ba4 20M \uff0c\u65b0\u751f\u4ee3\u8001\u5e74\u4ee3\u6bd4\u4f8b\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"-XX:newRatio=<n>"})," \u6765\u8bbe\u7f6e"]}),"\n",(0,r.jsxs)(e.p,{children:["\u65b0\u751f\u4ee3\uff08new generation\uff09\u5305\u62ec eden \u533a\u548c survivor \u533a\uff0c survivor \u533a \u5305\u62ec from \u548c to \uff0c\u7a7a\u95f4\u5927\u5c0f eden : from : to \u9ed8\u8ba4\u503c\u4e3a 8:1:1 \uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"-XX:survivorRatio=<n>"})," \u6765\u8bbe\u7f6e"]}),"\n",(0,r.jsxs)(e.p,{children:["JVM \u53c2\u6570 ",(0,r.jsx)(e.code,{children:"-XX:+PrintGCDetails"})," \u8f93\u51fa GC \u8be6\u7ec6\u65e5\u5fd7\uff0c ",(0,r.jsx)(e.code,{children:"-XX:+PrintHeapAtGC"})," \u6253\u5370 GC \u524d\u540e\u72b6\u6001"]}),"\n",(0,r.jsx)(e.h3,{id:"\u65b9\u6cd5\u533a",children:"\u65b9\u6cd5\u533a"}),"\n",(0,r.jsx)(e.p,{children:"\u65b9\u6cd5\u533a\u5728 java 8 \u540e\u88ab\u5143\u7a7a\u95f4\u53d6\u4ee3"}),"\n",(0,r.jsx)(e.p,{children:"\u65b9\u6cd5\u533a\u4fdd\u5b58\u4e86\u7c7b\u7684\u57df\u4fe1\u606f\uff08\u6210\u5458\u53d8\u91cf\uff09\u7684\uff08\u7c7b\u578b\uff0c\u58f0\u660e\u987a\u5e8f\uff0c\u4fee\u9970\u7b26\uff0c\u7b49 \uff09\uff0c\u65b9\u6cd5\u7684\u4fe1\u606f\uff08\u65b9\u6cd5\u540d\uff0c\u53c2\u6570\u7c7b\u578b\uff0c\u4fee\u9970\u7b26\uff0c\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u5b57\u8282\u7801\uff0c\u5f02\u5e38\u8868\u7b49\uff09"}),"\n",(0,r.jsx)(e.p,{children:"\u5e38\u91cf\u6c60\uff08Constants poll\uff09\u662f\u4e3a\u4e86\u907f\u514d\u9891\u7e41\u521b\u5efa\u9500\u6bc1\u53d8\u91cf\u5f71\u54cd\u6027\u80fd\uff0c\u5b9e\u73b0\u53d8\u91cf\u5171\u4eab\u3002\u4f8b\u5982\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\uff0c\u7f16\u8bd1\u9636\u6bb5\u628a\u6240\u6709\u5b57\u7b26\u4e32\u653e\u5165"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public void test(){\n    String s1 = "a"; //\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u4e2d\n    String s2 = new String("a"); //\u5728\u5806\u4e2d\u521b\u5efa\u4e00\u4e2a String \u5bf9\u8c61\n    boolean b = s1 == s2; //false\n}\n'})})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>c});var i=s(6540);const r={},l=i.createContext(r);function a(n){const e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);