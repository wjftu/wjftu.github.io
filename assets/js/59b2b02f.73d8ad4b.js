"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[3943],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||y[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6493:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const o={},s="AWS S3",l={unversionedId:"cloud/aws-s3",id:"cloud/aws-s3",title:"AWS S3",description:"\u5bf9\u8c61\u5b58\u50a8\u662f\u4e00\u79cd\u6587\u4ef6\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u7b80\u5355\u6613\u7528\uff0c\u9ad8\u6027\u80fd\uff0c\u9ad8\u53ef\u9760\uff0c\u517c\u5bb9\u6027\u597d\uff0c\u6210\u672c\u4f4e\uff0c\u53ef\u6269\u5c55\u3002AWS \u7684 S3 \u5bf9\u8c61\u5b58\u50a8\u662f\u4e1a\u754c\u6807\u51c6\uff0c\u5176\u4ed6\u5f88\u591a\u4e91\u670d\u52a1\u5546\u7684\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u6709 s3 \u517c\u5bb9\u6a21\u5f0f\uff0c\u5982 qiniu \uff0c oracle cloud \u3002",source:"@site/note/cloud/aws-s3.md",sourceDirName:"cloud",slug:"/cloud/aws-s3",permalink:"/note/cloud/aws-s3",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS IAM",permalink:"/note/cloud/aws-iam"},next:{title:"\u524d\u7aef",permalink:"/note/frontend/"}},u=[{value:"S3 Java SDk",id:"s3-java-sdk",children:[],level:3}],i={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"aws-s3"},"AWS S3"),(0,a.yg)("p",null,"\u5bf9\u8c61\u5b58\u50a8\u662f\u4e00\u79cd\u6587\u4ef6\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u7b80\u5355\u6613\u7528\uff0c\u9ad8\u6027\u80fd\uff0c\u9ad8\u53ef\u9760\uff0c\u517c\u5bb9\u6027\u597d\uff0c\u6210\u672c\u4f4e\uff0c\u53ef\u6269\u5c55\u3002AWS \u7684 S3 \u5bf9\u8c61\u5b58\u50a8\u662f\u4e1a\u754c\u6807\u51c6\uff0c\u5176\u4ed6\u5f88\u591a\u4e91\u670d\u52a1\u5546\u7684\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u6709 s3 \u517c\u5bb9\u6a21\u5f0f\uff0c\u5982 qiniu \uff0c oracle cloud \u3002"),(0,a.yg)("p",null,"\u5bf9\u8c61\u5b58\u50a8\u548c NAS \u7684\u533a\u522b\uff1a "),(0,a.yg)("p",null,"\u5bf9\u8c61\u5b58\u50a8\u65e0\u9700\u6302\u8f7d\uff0c\u53ea\u9700\u8981\u7f51\u7edc\u80fd\u901a\u5c31\u80fd\u4f7f\u7528\u3002NAS \u662f\u6587\u4ef6\u7cfb\u7edf\uff0c\u751f\u4ea7\u4e0a\u4f1a\u6709\u5404\u79cd\u95ee\u9898\uff0c\u5982 inodes \u4f7f\u7528\u7387\u9ad8\u62a5\u8b66\uff0c\u9047\u5230\u6587\u4ef6\u6743\u9650\u95ee\u9898\uff08\u4e24\u4e2a\u5e94\u7528\u4e00\u4e2a\u662f root \u4e00\u4e2a\u975e root\uff09\u3002\u751f\u4ea7\u4e0a\u4f53\u9a8c\u4e0a\u5bf9\u8c61\u5b58\u50a8\u76f8\u5bf9\u4e8e NAS \u6162\u4e00\u4e9b\uff0c\u4f46 NAS \u5076\u5c14\u4f1a\u6709\u4e00\u7b14\u975e\u5e38\u6162\u7684\u8bfb\u53d6\u6216\u5199\u5165\uff0c\u800c\u4e14\u9ad8\u5e76\u53d1\u4e0b\u66f4\u5bb9\u6613\u53d1\u751f\u3002"),(0,a.yg)("h3",{id:"s3-java-sdk"},"S3 Java SDk"),(0,a.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 sdk \u4e0e s3 \u8fdb\u884c\u4ea4\u4e92\uff0c\u5f53\u524d\u7248\u672c\u662f 2.x \u7248\u672c\uff0c\u548c 1.x \u7248\u672c\u5dee\u522b\u5f88\u5927\u3002\u65b0\u7248 sdk \u5927\u91cf\u4f7f\u7528\u5efa\u9020\u8005\u6a21\u5f0f\uff0c\u4ee3\u7801\u66f4\u7f8e\u89c2\u3002"),(0,a.yg)("p",null,"sdk \u6587\u6863\uff1a",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/home.html"},"https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/home.html")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>software.amazon.awssdk</groupId>\n    <artifactId>s3</artifactId>\n    <version>2.23.7</version>\n</dependency>\n")),(0,a.yg)("p",null,"\u521b\u5efa\u5ba2\u6237\u7aef"),(0,a.yg)("p",null,"\u6709\u591a\u79cd\u65b9\u5f0f\u8bbe\u7f6e credential \uff0c\u4f8b\u5982\u7528 Java \u7cfb\u7edf\u53d8\u91cf\uff0c\u73af\u5883\u53d8\u91cf\uff0c\u914d\u7f6e\u6587\u4ef6"),(0,a.yg)("p",null,"Access Key \u53ef\u4ee5\u7406\u89e3\u4e3a\u7528\u6237\u540d\uff0cSecret Key \u53ef\u4ee5\u7406\u89e3\u4e3a\u5bc6\u7801\uff0cEndpoint \u53ef\u4ee5\u7406\u89e3\u4e3a\u8bf7\u6c42\u7aef\u70b9\u3002\u5728\u4f7f\u7528\u975e AWS \u670d\u52a1\u6216\u8005 on-premise \u670d\u52a1\u7684\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u81ea\u5df1\u8bbe\u7f6e\u7aef\u70b9\uff0c\u4f46\u4ecd\u7136\u8981\u8bbe\u7f6e\u4e00\u4e2a\u5047\u7684 region \u3002"),(0,a.yg)("p",null,"\u5b98\u65b9\u6587\u6863\u63d0\u5230 Reuse an SDK client, if possible \uff0c\u5ba2\u6237\u7aef\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u7c7b\uff0c\u6240\u4ee5\u5728 Spring \u5f00\u53d1\u65f6\uff0c\u53ef\u4ee5\u521b\u5efa\u4e3a\u4e00\u4e2a bean"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class S3Config {\n\n    @Value("${accessKey}")\n    String accessKey;\n\n    @Value("${secretKey}")\n    String secretKey;\n\n    @Value("${endpoint}")\n    String endpoint;\n\n    @Bean\n    public S3Client s3Client() {\n        System.setProperty("aws.accessKeyId", accessKey);\n        System.setProperty("aws.region", "us-east-1");\n        System.setProperty("aws.secretAccessKey", secretKey);\n\n        S3Client s3 = S3Client.builder()\n                .endpointOverride(URI.create(endpoint))\n                .build();\n        return s3;\n    }\n}\n')),(0,a.yg)("p",null,"\u5ba2\u6237\u7aef\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0capiCallTimeout \u4e3a\u5355\u4e2a\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0capiCallAttemptTimeout \u4e3a\u5305\u62ec\u91cd\u8bd5\u5728\u5185\u7684\u6574\u4e2a\u8fc7\u7a0b\u7684\u8d85\u65f6\u65f6\u95f4\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"S3Client s3 = S3Client.builder()\n        .overrideConfiguration(b -> \n                b.apiCallTimeout(Duration.ofSeconds(3))\n                        .apiCallAttemptTimeout(Duration.ofSeconds(10)))\n        .build();\n")),(0,a.yg)("p",null,"\u4e0a\u4f20\u5bf9\u8c61"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'        PutObjectRequest request = PutObjectRequest.builder()\n                .bucket(bucketName)\n                .key("1.txt")\n                .build();\n        RequestBody requestBody = RequestBody.fromByteBuffer(ByteBuffer.wrap(new byte[0]));\n                \n        PutObjectResponse response = s3Client.putObject(request, requestBody);\n')),(0,a.yg)("p",null,"RequestBody \u6709\u591a\u79cd\u65b9\u5f0f\u521b\u5efa\uff0c\u53ef\u4ee5\u4ece ByteBuffer \uff0c\u5b57\u8282\u6570\u7ec4\uff0c\u6587\u4ef6\uff0c\u6d41\uff0c\u6587\u4ef6\u5185\u5bb9\u521b\u5efa\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'RequestBody requestBody = RequestBody.fromByteBuffer(ByteBuffer.wrap(new byte[0]));\nRequestBody requestBody2 = RequestBody.fromBytes(new byte[0]);\nRequestBody requestBody3 = RequestBody.fromFile(new File("1.txt"));\ntry (InputStream is = new FileInputStream("1.txt")) {\n    RequestBody requestBody4 = RequestBody.fromInputStream(is, is.available());\n} catch (IOException e) {\n    throw new RuntimeException(e);\n}\nRequestBody requestBody5 = RequestBody.fromString("abc", StandardCharsets.UTF_8);\n')),(0,a.yg)("p",null,"\u5217\u51fa\u5bf9\u8c61"),(0,a.yg)("p",null,"prefix \u6307\u5b9a\u524d\u7f00\uff0cmaxkey \u6307\u5b9a\u5217\u51fa\u5bf9\u8c61\u6700\u5927\u6570\u91cf\uff08\u5728\u6570\u91cf\u5f88\u591a\u65f6\u4e0d\u8bbe\u7f6e\u4f1a\u8d85\u65f6\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'ListObjectsRequest request = ListObjectsRequest.builder()\n        .bucket(bucketName)\n        .prefix("1")\n        .maxKeys(2)\n        .build();\nListObjectsResponse response = s3Client.listObjects(request);\nList<S3Object> contents = response.contents();\nfor(S3Object s3Object : contents) {\n    System.out.println(s3Object.key());\n}\n')))}p.isMDXComponent=!0}}]);