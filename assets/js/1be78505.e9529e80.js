"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[8714,9090],{7641:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var n=a(6540),l=a(5680),o=a(5920),c=a(9360),r=a(53),i=a(1211),s=a(9312),d=a(1773),m=a(8168);const u=function(e){return n.createElement("svg",(0,m.A)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var p=a(1312),b=a(5489),h=a(6654),E=a(3679);const f="menuLinkText_OKON",g="hasHref_TwRn";var A=a(2303);const N=(0,n.memo)((e=>{let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(v,(0,m.A)({key:t,item:e},a)))))}));function v(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(_,(0,m.A)({item:t},a)):n.createElement(C,(0,m.A)({item:t},a))}function _(e){let{item:t,onItemClick:a,activePath:l,level:o,...c}=e;const{items:s,label:d,collapsible:u,className:h,href:E}=t,v=function(e){const t=(0,A.A)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i._o)(e):void 0),[e,t])}(t),_=(0,i.w8)(t,l),{collapsed:C,setCollapsed:k,toggleCollapsed:T}=(0,i.uW)({initialState:()=>!!u&&(!_&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:l}=e;const o=(0,i.ZC)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:_,collapsed:C,setCollapsed:k}),n.createElement("li",{className:(0,r.A)(i.GN.docs.docSidebarItemCategory,i.GN.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":C},h)},n.createElement("div",{className:"menu__list-item-collapsible"},n.createElement(b.A,(0,m.A)({className:(0,r.A)("menu__link",{"menu__link--sublist":u&&!E,"menu__link--active":_,[f]:!u,[g]:!!v}),onClick:u?e=>{a?.(t),E?k(!1):(e.preventDefault(),T())}:()=>{a?.(t)},href:u?v??"#":v},c),d),E&&u&&n.createElement("button",{"aria-label":(0,p.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:d}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),T()}})),n.createElement(i.Nt,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(N,{items:s,tabIndex:C?-1:0,onItemClick:a,activePath:l,level:o+1})))}function C(e){let{item:t,onItemClick:a,activePath:l,level:o,...c}=e;const{href:s,label:d,className:u}=t,p=(0,i.w8)(t,l);return n.createElement("li",{className:(0,r.A)(i.GN.docs.docSidebarItemLink,i.GN.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:d},n.createElement(b.A,(0,m.A)({className:(0,r.A)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.A)(s)&&{onClick:a?()=>a(t):void 0},c),(0,h.A)(s)?d:n.createElement("span",null,d,n.createElement(E.A,null))))}const k="sidebar_a3j0",T="sidebarWithHideableNavbar_VlPv",S="sidebarHidden_OqfG",I="sidebarLogo_hmkv",w="menu_cyFh",y="menuWithAnnouncementBar_+O1J",M="collapseSidebarButton_eoK2",B="collapseSidebarButtonIcon_e+kA";function x(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,p.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.A)("button button--secondary button--outline",M),onClick:t},n.createElement(u,{className:B}))}function L(e){let{path:t,sidebar:a,onCollapse:l,isHidden:o}=e;const c=function(){const{isActive:e}=(0,i.Mj)(),[t,a]=(0,n.useState)(e);return(0,i.Mq)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}(),{navbar:{hideOnScroll:s},hideableSidebar:m}=(0,i.pN)();return n.createElement("div",{className:(0,r.A)(k,{[T]:s,[S]:o})},s&&n.createElement(d.A,{tabIndex:-1,className:I}),n.createElement("nav",{className:(0,r.A)("menu thin-scrollbar",w,{[y]:c})},n.createElement("ul",{className:(0,r.A)(i.GN.docs.docSidebarMenu,"menu__list")},n.createElement(N,{items:a,activePath:t,level:1}))),m&&n.createElement(x,{onClick:l}))}const P=e=>{let{toggleSidebar:t,sidebar:a,path:l}=e;return n.createElement("ul",{className:(0,r.A)(i.GN.docs.docSidebarMenu,"menu__list")},n.createElement(N,{items:a,activePath:l,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function F(e){return n.createElement(i.Gh,{component:P,props:e})}const G=n.memo(L),H=n.memo(F);function D(e){const t=(0,s.A)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(G,e),l&&n.createElement(H,e))}var R=a(3817),W=a(9090);const O="backToTopButton_i9tI",q="backToTopButtonShow_wCmF";function j(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}const z=function(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:l,cancelScrollToTop:o}=j();return(0,i.Mq)(((e,n)=>{let{scrollY:l}=e;const c=n?.scrollY;if(!c)return;if(a.current)return void(a.current=!1);const r=l<c;if(r||o(),l<300)t(!1);else if(r){const e=document.documentElement.scrollHeight;l+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.$G)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,p.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.A)("clean-btn",i.GN.common.backToTopButton,O,{[q]:e}),type:"button",onClick:()=>l()})};var Y=a(6347);const K={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};var U=a(8895);function V(e){let{currentDocRoute:t,versionMetadata:a,children:o,sidebarName:s}=e;const d=(0,i.ts)(),{pluginId:m,version:b}=a,[h,E]=(0,n.useState)(!1),[f,g]=(0,n.useState)(!1),A=(0,n.useCallback)((()=>{f&&g(!1),E((e=>!e))}),[f]);return n.createElement(c.A,{wrapperClassName:i.GN.wrapper.docsPages,pageClassName:i.GN.page.docsDocPage,searchMetadata:{version:b,tag:(0,i.tU)(m,b)}},n.createElement("div",{className:K.docPage},n.createElement(z,null),d&&n.createElement("aside",{className:(0,r.A)(K.docSidebarContainer,{[K.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(K.docSidebarContainer)&&h&&g(!0)}},n.createElement(D,{key:s,sidebar:d,path:t.path,onCollapse:A,isHidden:f}),f&&n.createElement("div",{className:K.collapsedDocSidebar,title:(0,p.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},n.createElement(u,{className:K.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.A)(K.docMainContainer,{[K.docMainContainerEnhanced]:h||!d})},n.createElement("div",{className:(0,r.A)("container padding-top--md padding-bottom--lg",K.docItemWrapper,{[K.docItemWrapperEnhanced]:h})},n.createElement(l.xA,{components:R.A},o)))))}const Z=function(e){const{route:{routes:t},versionMetadata:a,location:l}=e,c=t.find((e=>(0,Y.B6)(l.pathname,e)));if(!c)return n.createElement(W.default,null);const r=c.sidebar,s=r?a.docsSidebars[r]:null;return n.createElement(n.Fragment,null,n.createElement(U.A,null,n.createElement("html",{className:a.className})),n.createElement(i.nM,{version:a},n.createElement(i.VB,{sidebar:s},n.createElement(V,{currentDocRoute:c,versionMetadata:a,sidebarName:r},(0,o.A)(t,{versionMetadata:a})))))}},9090:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(6540),l=a(9360),o=a(1312);const c=function(){return n.createElement(l.A,{title:(0,o.T)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);