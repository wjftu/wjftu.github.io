"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[6252],{5680:(e,n,t)=>{t.d(n,{xA:()=>i,yg:()=>m});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||s;return t?o.createElement(m,l(l({ref:n},i),{},{components:t})):o.createElement(m,l({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[g]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<s;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=t(8168),a=(t(6540),t(5680));const s={title:"React \u5feb\u901f\u4e0a\u624b",sidebar_position:10},l=void 0,r={unversionedId:"frontend/react-quickstart",id:"frontend/react-quickstart",title:"React \u5feb\u901f\u4e0a\u624b",description:"\u4ece cdn \u5f15\u5165 react \u548c babel",source:"@site/note/frontend/react-quickstart.md",sourceDirName:"frontend",slug:"/frontend/react-quickstart",permalink:"/note/frontend/react-quickstart",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"React \u5feb\u901f\u4e0a\u624b",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/note/frontend/vue"},next:{title:"Docker",permalink:"/note/docker/"}},p=[],c={toc:p},i="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(i,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u4ece cdn \u5f15\u5165 react \u548c babel"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n        <script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"><\/script> \n    </head>\n    <body>\n        <div id="root"></div>\n        <script type="text/babel">\n            const root = ReactDOM.createRoot(document.getElementById("root"))\n            root.render(<h1>hello</h1>)\n        <\/script>\n    </body>\n</html>\n')),(0,a.yg)("p",null,"\u7ec4\u4ef6\u6709\u7c7b\u7ec4\u4ef6\u548c\u51fd\u6570\u7ec4\u4ef6\uff0c\u51fd\u6570\u7ec4\u4ef6\u66f4\u4f18\u96c5\u4e5f\u66f4\u5e38\u7528\u3002"),(0,a.yg)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u7ec4\u4ef6\uff0c\u7ee7\u627f ",(0,a.yg)("inlineCode",{parentName:"p"},"React.Component")," \uff0c\u5b9e\u73b0 render \u65b9\u6cd5\u7528\u4e8e\u6e32\u67d3\uff0crender \u62ec\u53f7\u8fd4\u56de\u5185\u5bb9\u7528\u62ec\u53f7\u5305\u88f9\u3002\u53d8\u91cf\u53ef\u4ee5\u7528\u5927\u9614\u53f7\u83b7\u53d6\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<script type="text/babel">\n    const root = ReactDOM.createRoot(document.getElementById("root"))\n    const pokemons = ["\u76ae\u5361\u4e18", "\u53ef\u8fbe\u9e2d", "\u5c0f\u706b\u9f99"]\n    class App extends React.Component {\n        \n        render() {\n            return (\n                <div>\n                    <h1>\u5b9d\u53ef\u68a6</h1>\n                    <ul>\n                        { pokemons.map(pokemon => <li>{pokemon}</li>) }\n                    </ul>\n                </div>    \n            );\n        }\n    }\n    root.render(<App />)\n<\/script>\n')),(0,a.yg)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u6709 state \uff0c\u53ef\u4ee5\u7528\u4e8e\u5b58\u653e\u6570\u636e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<script type="text/babel">\n    const root = ReactDOM.createRoot(document.getElementById("root"))\n    class App extends React.Component {\n        constructor() {\n            super()\n            this.state = {\n                pokemons : ["\u76ae\u5361\u4e18", "\u53ef\u8fbe\u9e2d", "\u5c0f\u706b\u9f99"]\n            }\n        }\n        render() {\n            return (\n                <div>\n                    <h1>\u5b9d\u53ef\u68a6</h1>\n                    <ul>\n                        { this.state.pokemons.map((pokemon, index) => <li key={index}>{pokemon}</li>) }\n                    </ul>\n                </div>    \n            );\n        }\n    }\n    root.render(<App />)\n<\/script>\n')),(0,a.yg)("p",null,"\u6570\u636e\u6539\u4e3a\u4ece\u540e\u7aef\u83b7\u53d6\uff0c\u7c7b\u7ec4\u4ef6\u7684 componentDidMount \u65b9\u6cd5\u53ef\u4ee5\u5728\u7ec4\u4ef6\u6302\u8f7d\u540e\u8fd0\u884c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const root = ReactDOM.createRoot(document.getElementById("root"))\nclass App extends React.Component {\n    constructor() {\n        super()\n        this.state = {\n            pokemons : ["\u76ae\u5361\u4e18", "\u53ef\u8fbe\u9e2d", "\u5c0f\u706b\u9f99"]\n        }\n    }\n    componentDidMount() {\n        fetch(\'https://pokeapi.co/api/v2/pokemon\')\n            .then(res => res.json())\n            .then( json => this.setState({pokemons: json.results.map(e => e.name)}) )\n    }\n    render() {\n        return (\n            <div>\n                <h1>\u5b9d\u53ef\u68a6</h1>\n                <ul>\n                    { this.state.pokemons.map((pokemon, index) => <li key={index}>{pokemon}</li>) }\n                </ul>\n            </div>    \n        );\n    }\n}\nroot.render(<App />)\n')),(0,a.yg)("p",null,"\u53ef\u4ee5\u628a\u7ec4\u4ef6\u653e\u5728\u5355\u72ec\u7684\u6587\u4ef6\uff0c\u66f4\u4f18\u96c5"),(0,a.yg)("p",null,"index.html"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div id="root"></div>\n<script type="text/babel" src="src/App.js"><\/script>\n<script type="text/babel" src="src/index.js"><\/script>\n')),(0,a.yg)("p",null,"src/index.js"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const root = ReactDOM.createRoot(document.getElementById("root"))\nroot.render(<App />)\n')),(0,a.yg)("p",null,"src/App.js"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'class App extends React.Component {\n    constructor() {\n        console.log("constructor")\n        super()\n        this.state = {\n            pokemons : ["\u76ae\u5361\u4e18", "\u53ef\u8fbe\u9e2d", "\u5c0f\u706b\u9f99"]\n        }\n    }\n    componentDidMount() {\n        console.log("componentDidMount")\n        fetch(\'https://pokeapi.co/api/v2/pokemon\')\n            .then(res => res.json())\n            .then( json => this.setState({pokemons: json.results.map(e => e.name)}) )\n    }\n    render() {\n        console.log("render")\n        return (\n            <div>\n                <h1>\u5b9d\u53ef\u68a6</h1>\n                <ul>\n                    { this.state.pokemons.map((pokemon, index) => <li key={index}>{pokemon}</li>) }\n                </ul>\n            </div>    \n        );\n    }\n}\n')),(0,a.yg)("p",null,"\u4e8b\u4ef6"),(0,a.yg)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0c\u5728\u8f93\u5165\u6846\u6539\u53d8\u65f6\u5019\u8fd0\u884c\uff0conChange \u65b9\u6cd5\u7c7b\u4f3c on-change \u65b9\u6cd5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'onChangeHandler = (e) => {\n        const filtered = this.state.pokemons.filter(p => {\n            return p.includes(e.target.value)\n        })\n        this.setState(\n            {filteredPokemons: filtered}\n        )\n    }\n    render() {\n        console.log("render")\n        return (\n            <div>\n                <h1>\u5b9d\u53ef\u68a6</h1>\n                <input type="text" onChange={ this.onChangeHandler }></input>\n                <ul>\n                    { this.state.filteredPokemons.map((pokemon, index) => <li key={index}>{pokemon}</li>) }\n                </ul>\n            </div>    \n        );\n    }\n')),(0,a.yg)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u590d\u7528\uff0c\u53ef\u4ee5\u8fdb\u884c\u5d4c\u5957\uff0c\u5e76\u53ef\u4ee5\u7528 props \u4f20\u9012\u53c2\u6570"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<script type="text/babel" src="src/components/Input.jsx"><\/script>\n<script type="text/babel" src="src/components/List.jsx"><\/script>\n<script type="text/babel" src="src/App.js"><\/script>\n<script type="text/babel" src="src/index.js"><\/script>\n')),(0,a.yg)("p",null,"\u4e24\u4e2a jsx \u7ec4\u4ef6"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'class List extends React.Component {\n    render() {\n        const { pokemonList } = this.props;\n        return (\n            <ul>\n                { pokemonList.map( (p, index) => <li key={index}>{p}</li>) }\n            </ul>\n        )\n    }\n}\nclass Input extends React.Component {\n    render() {\n        const {handler} = this.props\n        return <input type="text" onChange={handler} />\n    }\n}\n')),(0,a.yg)("p",null,"\u5728 App \u7ec4\u4ef6\u4e2d\u5d4c\u5957 List \u548c Input \u7ec4\u4ef6"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'render() {\n    console.log("render")\n    return (\n        <div>\n            <h1>\u5b9d\u53ef\u68a6</h1>\n            <Input handler={this.onChangeHandler} />\n            <List pokemonList={this.state.filteredPokemons} />\n        </div>    \n    );\n}\n')),(0,a.yg)("p",null,"\u63a5\u4e0b\u6765\u628a App \u6539\u4e3a\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0d\u518d\u6709 this \uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7 useState \u8bbe\u7f6e\u6e32\u67d3\u7684\u5bf9\u8c61\u3002useEffect \u53ef\u4ee5\u8ba9\u51fd\u6570\u6267\u884c\u4e00\u6b21\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u914d\u7f6e\u4ec0\u4e48\u65f6\u5019\u91cd\u590d\u6267\u884c\uff0c\u4f20\u5165\u7a7a\u6570\u7ec4\u8868\u793a\u8fd9\u4e2a\u51fd\u6570\u53ea\u6267\u884c\u4e00\u6b21\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const App = () => {\n    const [pokemons, setPokemons] = React.useState(["\u76ae\u5361\u4e18", "\u53ef\u8fbe\u9e2d", "\u5c0f\u706b\u9f99"])\n    const [filteredPokemons, setFilteredPokemons] = React.useState([...pokemons])\n    const onChangeHandler = (e) => {\n        const filtered = pokemons.filter(p => {\n            return p.includes(e.target.value)\n        })\n        setFilteredPokemons(filtered)\n    }\n    React.useEffect(() => {\n        fetch(\'https://pokeapi.co/api/v2/pokemon\')\n            .then(res => res.json())\n            .then( json => {\n                const fetchedPokemons = json.results.map(e => e.name)\n                setPokemons(fetchedPokemons)\n                setFilteredPokemons(fetchedPokemons)\n            })\n    }, [])\n  \n    return (\n        <div>\n            <h1>\u5b9d\u53ef\u68a6</h1>\n            <Input handler={onChangeHandler} />\n            <List pokemonList={filteredPokemons} />\n        </div>    \n    )\n}\n')),(0,a.yg)("p",null,"List \u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u6539\u4e3a\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u7528\u66f4\u7b80\u6d01\u7684\u65b9\u5f0f ",(0,a.yg)("inlineCode",{parentName:"p"},"const List = ({pokemonList}) => {}")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const List = (props) => {\n    const { pokemonList } = props\n    return (\n        <ul>\n            { pokemonList.map( (p, index) => <li key={index}>{p}</li>) }\n        </ul>\n    )\n}\n")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"NodeJs \u7248\u5feb\u901f\u4e0a\u624b"),(0,a.yg)("p",null,"Use create-react-app to create a react project."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npx create-react-app my-blog\n")),(0,a.yg)("p",null,"Dependencies will download in node_module folder. If we delete this folder, we can use command ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install")," to download the dependencies. Normally the module folder is not under version control, if we download a project from github we can run this command to download modules."),(0,a.yg)("p",null,"Start a local development server so we can preview our web application."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm start\n")),(0,a.yg)("p",null,"If we inspect the page, we can see a div with id 'root' and a div with class 'app' rendered in it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div id="root">\n  <div class="App">\n  ...\n  </div>\n</div>\n')),(0,a.yg)("p",null,"Index.js takes this element and renders it to element root."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n")),(0,a.yg)("p",null,"There are 2 types of template. One is functional template. At the end of the component we export this component so that it can be used in other files."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'function App(){\n  return (\n    <div className="App">\n      <h1>Hello World</h1>\n    </div>\n  );\n}\n\nexport default App\n')),(0,a.yg)("p",null,"We can use curly braces to reference variables in JSX. React will convert it to string before outputs it to browser, but boolean and object will not be converted. We can write javascript statement in curly braces. If we pass an array, all the elements will be bunch together and output a string."),(0,a.yg)("p",null,"Vscode extention ES7+ React/Redux/React-Native snippets helps generate code easily. For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"rafce")," generate a react array function export component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const name = 'Jeff';\nconst age = 32;\nconst friends = ['John','Tom','Mary'];\nconst link = \"http://abc.com\";\nfunction App(){\n  return (\n    <div className=\"App\">\n      <h1>Hello {name}</h1>\n      <p>You are {age} years old</p>\n      <p>Next year you will be {age + 1}</p>\n      <p>friends: {friends}</p>\n      <a href={link} >Link</a>\n    </div>\n  );\n}\n\nexport default App;\n\n")),(0,a.yg)("p",null,"We can create new component and nest it to App Component"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const Navbar = () => {\n  return (\n    <nav className="navebar">\n      <h1>My Blog</h1>\n      <div className="links">\n        <a href="/">Home</a>\n        <a href="/create">New Blog</a>\n      </div>\n    </nav>\n  )\n}\n\nexport default Navbar\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import './App.css';\nimport Navbar from './Navbar';\nimport Home from './Home';\n\n\nfunction App(){\n  return (\n    <div className=\"App\">\n      <Navbar />\n      <div className=\"content\">\n        <Home />\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.yg)("p",null,"We can define inline style by using 2 curly braces. The outter braces mean this is a javascript expression and the inner braces mean this is an object. We should change minus sign to camel case."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"<p style={{\n        backgroudColor: 'green',\n        textAlign: 'center',\n        color: 'red',\n        }}>line1</p>\n")),(0,a.yg)("p",null,"Handle event. In the second button, we use an anonymous function to help us pass arguments. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const handleClick = () => {\n  console.log('hello click');\n}\n\nconst sayHello = (name, event) => {\n  console.log('hello ' + name);\n  console.log(event);\n}\nreturn (\n  <div className=\"home\">\n    <h2>Home Page</h2>\n    <button onClick={handleClick}>Click me</button>\n    <button onClick={(event) => { sayHello('mario', event) }}>Click me</button>\n  </div>\n)\n\n")),(0,a.yg)("p",null,"Use state"),(0,a.yg)("p",null,"If we click the button, name do change to luigi, but the page is not going to re-render."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"let name = 'mario';\nconst handleClick = () => {\n  name = 'luigi';\n  console.log(name);\n}\nreturn (\n  <div className=\"home\">\n    <h2>Home Page</h2>\n    <p>{name}</p>\n    <button onClick={handleClick}>Click me</button>\n  </div>\n)\n")),(0,a.yg)("p",null,"We can use useState to make it reactive"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react';\nconst Home = () => {\n  const [name, setName] = useState('mario');\n  const [age, setAge] = useState(10);\n  const handleClick = () => {\n    setName('luigi');\n    setAge(age + 2);\n    console.log(name);\n  }\n  return (\n    <div className=\"home\">\n      <h2>Home Page</h2>\n      <p>{name} is {age} years old</p>\n      <button onClick={handleClick}>Click me</button>\n    </div>\n  )\n}\n")),(0,a.yg)("p",null,"If we want to output a list, we can use map method to cycle through the list."),(0,a.yg)("p",null,"Each item must have a key property. This key property is something that react uses to keep track of each item"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const Home = () => {\n  const [blogs, setBlogs] = useState([\n    {title: 'welcome', body:'balabala...', author:'Jeff', id:1},\n    {title: 'JavaScript', body:'javascript...', author:'Mary', id:2},\n    {title: 'React', body:'react...', author:'Jeff', id:3}\n  ]);\n  return (\n    <div className=\"home\">\n      {blogs.map((blog) => (\n        <div className=\"blog-preview\" key={blog.id}>\n          <h2>{ blog.title }</h2>\n          <p>Writen by { blog.author }</p>\n        </div>\n      ))}\n    </div>\n  );\n}\n")),(0,a.yg)("p",null,"Props"),(0,a.yg)("p",null,"We can make list-blog component reusable and use it in other component by pass in props."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const BlogList = (props) => {\n  const blogs = props.blogs;\n  const title = props.title;\n  console.log(props);\n  return (\n    <div className=\"home\">\n      <h2>{ title }</h2>\n      {blogs.map((blog) => (\n        <div className=\"blog-preview\" key={blog.id}>\n          <h2>{ blog.title }</h2>\n          <p>Writen by { blog.author }</p>\n        </div>\n      ))}\n    </div>\n  )\n}\n\nconst Home = () => {\n  const [blogs, setBlogs] = useState([\n    {title: 'welcome', body:'balabala...', author:'Jeff', id:1},\n    {title: 'JavaScript', body:'javascript...', author:'Mary', id:2},\n    {title: 'React', body:'react...', author:'Jeff', id:3}\n  ]);\n  return (\n    <div className=\"home\">\n      <BlogList blogs={blogs} title=\"All Blogs\"/>\n    </div>\n  );\n}\n")),(0,a.yg)("p",null,"We can easily re-use our component"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'<BlogList blogs={blogs} title="All Blogs"/>\n<BlogList blogs={blogs.filter((blog) => blog.author === \'Mary\')} title="Mary\'s Blog" />\n')),(0,a.yg)("p",null,"Also, we can distruct properties from props."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const BlogList = ({blogs, title}) => {\n  // const blogs = props.blogs;\n  // const title = props.title;\n  //...\n}\n")),(0,a.yg)("p",null,"We can add a button to delete the blog by passing a function"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const BlogList = ({blogs, title, handleDelete}) => {\n  // const blogs = props.blogs;\n  // const title = props.title;\n  // console.log(props);\n\n  return (\n    <div className="home">\n      <h2>{ title }</h2>\n      \n      {blogs.map((blog) => (\n        <div className="blog-preview" key={blog.id}>\n          <h2>{ blog.title }</h2>\n          <p>Writen by { blog.author }</p>\n          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>\n        </div>\n      ))}\n    </div>\n  )\n}\n')),(0,a.yg)("p",null,"Then define and pass a delete function to Bloglist component"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const Home = () => {\n  const [blogs, setBlogs] = useState(null);\n  const handleDelete = (id) => {\n    setBlogs(blogs.filter( blog => blog.id !== id));\n  }\n  return (\n    <div className="home">\n      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete} />}\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"If we want to run a function every render of components, we can use another hook ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { useEffect } from 'react';\n\nuseEffect(() => {\n  console.log('do something');\n})\n")),(0,a.yg)("p",null,"If we only want it run in the first render, we can pass an empty array as the second argument. Also we can add some variables in the array, when these variables change, the function will run."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n  console.log('do something');\n}, [])\n\nconst [name, setName] = useState('Jeff');\nuseEffect(() => {\n  console.log('name changed');\n}, [name])\n\n")),(0,a.yg)("p",null,"Normally we don't hard code in javascript, instead we fetch data from server. To test this, we can create a file with json data and run a json server with the data file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n  "blogs": [\n    {\n      "title": "React Blog",\n      "body": "react is one of the most famous frontend framework",\n      "author": "facebook",\n      "id": 1\n    },\n    {\n      "title": "Vue Blog",\n      "body": "Vue is one of the most famous frontend framework too",\n      "author": "You",\n      "id": 2\n    },\n    {\n      "title": "Angular Blog",\n      "body": "Angular is one of the most famous frontend framework too",\n      "author": "google",\n      "id": 3\n    }\n  ]\n}\n')),(0,a.yg)("p",null,"run a json server"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npx json-server --watch data/db.json --port 8000\n")),(0,a.yg)("p",null,"json server endpoints:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"/blogs  GET fetch all blogs\n/blogs/{id} GET fetch a single blog\n/blogs POST add a blog\n/blogs/{id} DELETE delete a blog \n")),(0,a.yg)("p",null,"Then we can fetch and render the data to page. Because at the beginning the blogs is null, we should check if blogs is null before render the BlogList component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const Home = () => {\n  const [blogs, setBlogs] = useState(null);\n  const handleDelete = (id) => {\n    setBlogs(blogs.filter( blog => blog.id !== id));\n  }\n  useEffect(()=>{\n    fetch(\'http://localhost:8000/blogs\')\n      .then(res => {\n        return res.json();\n      })\n      .then(data => {\n        setBlogs(data);\n      })\n  },[])\n\n  return (\n    <div className="home">\n      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete} />}\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"We can use a isPending variable to show message while fetching data."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const Home = () => {\n  const [blogs, setBlogs] = useState(null);\n  const [isPending, setIsPending] = useState(true);\n  const handleDelete = (id) => {\n    setBlogs(blogs.filter( blog => blog.id !== id));\n  }\n  useEffect(()=>{\n    fetch(\'http://localhost:8000/blogs\')\n      .then(res => {\n        return res.json();\n      })\n      .then(data => {\n        setBlogs(data);\n        setIsPending(false);\n      })\n  },[])\n\n  return (\n    <div className="home">\n      {isPending && <div>loding...</div>}\n      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete} />}\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"we can use setTimeOut to test it "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n    setTimeout(() => {\n        fetch('http://localhost:8000/blogs')\n        .then(res => {\n            return res.json();\n        })\n        .then(data => {\n            console.log(data)\n            setBlogs(data);\n            setIsPending(false);\n        })\n    }, 2000)\n    \n},[]);\n")),(0,a.yg)("p",null,"We can catch the error and show error message in the page"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const Home = () => {\n\n    const [blogs, setBlogs] = useState(null);\n    const [isPending, setIsPending] = useState(true);\n    const [errMsg, setErrMsg] = useState(null);\n\n    useEffect(() => {\n      fetch('http://localhost:8000/blogs')\n      .then(res => {\n        if(!res.ok) {\n          throw Error('cound not fetch the data');\n        }\n          return res.json();\n      })\n      .then(data => { \n          setBlogs(data);\n          setErrMsg(null);\n          setIsPending(false);\n      })\n      .catch(err => {\n        setIsPending(false);\n        setErrMsg(err.message);\n      })\n    },[]);\n    return (\n      <div className=\"home\">\n        { isPending && <div> Loading... </div>}\n        { errMsg && <div>{errMsg}</div> }\n        {blogs && <Blog blogs={blogs} title=\"All Blogs\" />}\n      </div>\n    );\n}\n")),(0,a.yg)("p",null,"We can put the code into a javascript file to make it reusable. We can pass in a url and get the data, isPending and error message."),(0,a.yg)("p",null,"useFetch.js"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import {useState, useEffect} from 'react'\n\nconst useFetch = (url) => {\n    const [data, setData] = useState(null);\n    const [isPending, setIsPending] = useState(true);\n    const [errMsg, setErrMsg] = useState(null);\n\n    useEffect(() => {\n        fetch(url)\n        .then(res => {\n          if(!res.ok) {\n            console.log(\"err\")\n            throw Error('cound not fetch the data');\n          }\n            return res.json();\n        })\n        .then(data => {\n            console.log(data);\n            setData(data);\n            setErrMsg(null);\n            setIsPending(false);\n        })\n        .catch(err => {\n          setIsPending(false);\n          setErrMsg(err.message);\n        })\n        \n      },[url]);\n      return {data, isPending, errMsg}\n}\nexport default useFetch;\n")),(0,a.yg)("p",null,"We can pass in a url to use the code."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const {data: blogs, isPending, errMsg} = useFetch('http://localhost:8000/blogs');\n")),(0,a.yg)("p",null,"Route"),(0,a.yg)("p",null,"install route"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm install react-route-dom@5\n")),(0,a.yg)("p",null,"Import route"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'\n")),(0,a.yg)("p",null,"A simple route example. Visite ",(0,a.yg)("inlineCode",{parentName:"p"},"/")," we can see Navbar and Home and visite ",(0,a.yg)("inlineCode",{parentName:"p"},"/create")," we can see Navbar and Create. If we don't add ",(0,a.yg)("inlineCode",{parentName:"p"},"exact")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"/")," route, it matches ",(0,a.yg)("inlineCode",{parentName:"p"},"/create")," also. When a request is made to a route, react will go from top to button to try to match."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <Router>\n      <div className="App">\n        <Navbar/>\n        <Switch>\n          <Route exact path="/">\n            <Home/>\n          </Route>\n          <Route path="/create">\n            <Create />\n          </Route>\n        </Switch>\n      </div>\n    </Router>\n  );\n}\n')))}g.isMDXComponent=!0}}]);