"use strict";(self.webpackChunkwjftu_ds=self.webpackChunkwjftu_ds||[]).push([[8401],{3168:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var n=a(6540),l=a(53),s=a(9312),i=a(1312),o=a(5489);const r=function(e){const{navLink:t,next:a}=e;return n.createElement(o.A,{className:(0,l.A)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(i.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(i.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};const c=function(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r,{navLink:a,next:!0})))};var d=a(4586),m=a(727),u=a(1211);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.A,{to:a,onClick:l},n.createElement(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,d.A)(),{pluginId:i}=(0,m.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,u.g1)(i),{latestDocSuggestion:r,latestVersionSuggestion:c}=(0,m.HW)(i),v=r??(h=c).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.A)(t,u.GN.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:c.label,to:v.path,onClick:()=>o(c.name)})))}function b(e){let{className:t}=e;const a=(0,u.rv)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}function E(e){let{className:t}=e;const a=(0,u.rv)();return a.badge?n.createElement("span",{className:(0,l.A)(t,u.GN.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var A=a(8139);function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(i.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.GN.common.lastUpdated},n.createElement(i.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(1335),k=a(5137);const C={lastUpdated:"lastUpdated_mt2f"};function T(e){return n.createElement("div",{className:(0,l.A)(u.GN.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(k.A,e)))}function U(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.A)(u.GN.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L.A,{editUrl:t})),n.createElement("div",{className:(0,l.A)("col",C.lastUpdated)},(a||s)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function y(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:o,lastUpdatedBy:r,tags:c}=a,d=c.length>0,m=!!(s||i||r);return d||m?n.createElement("footer",{className:(0,l.A)(u.GN.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(T,{tags:c}),m&&n.createElement(U,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:r,formattedLastUpdatedAt:o})):null}var w=a(5751);const x={tocCollapsible:"tocCollapsible_aw-L",tocCollapsibleButton:"tocCollapsibleButton_zr6a",tocCollapsibleContent:"tocCollapsibleContent_0dom",tocCollapsibleExpanded:"tocCollapsibleExpanded_FSiv"};var H=a(5496);function B(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:c}=(0,u.uW)({initialState:!0});return n.createElement("div",{className:(0,l.A)(x.tocCollapsible,{[x.tocCollapsibleExpanded]:!r},a)},n.createElement("button",{type:"button",className:(0,l.A)("clean-btn",x.tocCollapsibleButton),onClick:c},n.createElement(i.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.Nt,{lazy:!0,className:x.tocCollapsibleContent,collapsed:r},n.createElement(H.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:o})))}var M=a(39);const S={docItemContainer:"docItemContainer_oiyr",docItemCol:"docItemCol_zHA2",tocMobile:"tocMobile_Tx6Y"};function V(e){const{content:t}=e,{metadata:a,frontMatter:i}=t,{image:o,keywords:r,hide_title:d,hide_table_of_contents:m,toc_min_heading_level:v,toc_max_heading_level:p}=i,{description:g,title:h}=a,N=!d&&void 0===t.contentTitle,f=(0,s.A)(),_=!m&&t.toc&&t.toc.length>0,L=_&&("desktop"===f||"ssr"===f);return n.createElement(n.Fragment,null,n.createElement(A.A,{title:h,description:g,keywords:r,image:o}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.A)("col",{[S.docItemCol]:!m})},n.createElement(b,null),n.createElement("div",{className:S.docItemContainer},n.createElement("article",null,n.createElement(E,null),_&&n.createElement(B,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:p,className:(0,l.A)(u.GN.docs.docTocMobile,S.tocMobile)}),n.createElement("div",{className:(0,l.A)(u.GN.docs.docMarkdown,"markdown")},N&&n.createElement(M.e,null,h),n.createElement(t,null)),n.createElement(y,e)),n.createElement(c,{previous:a.previous,next:a.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(w.A,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:p,className:u.GN.docs.docTocDesktop}))))}},1335:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(6540),l=a(1312),s=a(8168),i=a(53);const o="iconEdit_mS5F";const r=function(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(1211);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.GN.common.editThisPage},n.createElement(r,null),n.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39:(e,t,a)=>{a.d(t,{e:()=>d,A:()=>m});var n=a(8168),l=a(6540),s=a(53),i=a(1312),o=a(1211);const r="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5",d=e=>{let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.A)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,e=>{let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,o.pN)();return a?l.createElement(t,(0,n.A)({},d,{className:(0,s.A)("anchor",{[c]:m,[r]:!m}),id:a}),d.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,i.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},5751:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(8168),l=a(6540),s=a(53),i=a(5496);const o="tableOfContents_vrFS";const r=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,s.A)(o,"thin-scrollbar",t)},l.createElement(i.A,(0,n.A)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5496:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(8168),l=a(6540),s=a(1211);function i(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?l.createElement("ul",{className:s?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function o(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,s.pN)(),v=c??u.tableOfContents.minHeadingLevel,p=d??u.tableOfContents.maxHeadingLevel,g=(0,s.WQ)({toc:t,minHeadingLevel:v,maxHeadingLevel:p}),h=(0,l.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:p}}),[o,r,v,p]);return(0,s.i3)(h),l.createElement(i,(0,n.A)({toc:g,className:a,linkClassName:o},m))}},5465:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(6540),l=a(53),s=a(5489);const i="tag_WK-t",o="tagRegular_LXbV",r="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(s.A,{href:t,className:(0,l.A)(i,{[o]:!c,[r]:c})},a,c&&n.createElement("span",null,c))}},5137:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(6540),l=a(53),s=a(1312),i=a(5465);const o={tags:"tags_NBRY",tag:"tag_F03v"};function r(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.A)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o.tag},n.createElement(i.A,{name:t,permalink:a}))}))))}}}]);