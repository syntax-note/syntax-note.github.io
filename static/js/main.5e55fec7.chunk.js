(this["webpackJsonpsyntax-note"]=this["webpackJsonpsyntax-note"]||[]).push([[0],{355:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(17),i=n.n(s),o=n(42),a=n.n(o),l=n(60),j=n(61),u=n(16),d=n(64),b=n.n(d),p=["python","kotlin","javascript"],x=["python","kotlin"],h=["1. types","1.1. basic types","1.2. type checks and cast","2. conditions","2.1. if","2.1. when, switch","3. loops","3.1. for-loop (collection)","3.2. for-loop (with index)","4. string","4.1. string template","4.2. split","5. collections","5.1. filter","10. etc","10.1. range"],O={0:12,1:12,2:6,3:4,4:3,5:2,6:2},g=n(368),f=n(374),m=n(65),v=n.n(m),y=n(375),k=n(369),S=n(370),w=n(2),N=function(e){var t=e.languages,n=e.contents;console.log("contents in Contents"),console.log(n);var c=O[t.length];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(g.a,{container:!0,spacing:1,children:t.map((function(e,t){return Object(w.jsx)(g.a,{item:!0,xs:c,children:Object(w.jsx)("h4",{children:e})},t)}))}),Object(w.jsx)("div",{className:"js-toc-content",children:h.map((function(e,r){return Object(w.jsx)(f.a,{children:e.indexOf(".")===e.lastIndexOf(".")?Object(w.jsx)("h2",{id:e,children:e}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h3",{id:e,children:e}),Object(w.jsx)(g.a,{container:!0,spacing:1,children:t.map((function(t){return function(e,t){var r=null,s=null,i=null;if(e in n&&t in n[e]){var o=n[e][t];if("code"in o){var a=(r=o.code.raw).indexOf("\n"),l=(r=r.substring(a+1)).lastIndexOf("```");r=r.substring(0,l)}if("output"in o){var j=(s=o.output.raw).indexOf("\n"),u=(s=s.substring(j+1)).lastIndexOf("```");s=s.substring(0,u)}"description"in o&&(i=o.description.raw)}return Object(w.jsxs)(g.a,{item:!0,xs:c,children:[null!=r?Object(w.jsx)(y.a,{language:e,style:k.a,children:r}):Object(w.jsx)("p",{children:"N/A"}),null!=s?Object(w.jsx)(y.a,{style:S.a,children:s}):Object(w.jsx)("div",{}),null!=i?Object(w.jsx)("pre",{children:Object(w.jsx)(v.a,{properties:{target:"_blank"},children:i})}):Object(w.jsx)("div",{})]},e)}(t,e)}))})]})},r)}))})]})},I=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"footer"}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."}),Object(w.jsx)("p",{children:"."})]})},C=n(9),J=n(371),T=n(372),A=Object(J.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),B=function(e){var t=e.languages,n=e.setLanguages,c=A();function r(e,c){console.log("".concat(e," has clicked."));var r=Object(C.a)(t);c?r.push(e):r=r.filter((function(t){return t!==e})),console.log("new",r),localStorage.setItem("languages",JSON.stringify(r)),n(r)}return Object(w.jsxs)("header",{children:[Object(w.jsx)("h1",{children:"Syntax Note"}),Object(w.jsxs)("div",{className:c.root,children:[t.map((function(e){return Object(w.jsx)(T.a,{color:"primary",variant:"contained",onClick:function(){return r(e,!1)},children:e},e)})),t.length?Object(w.jsx)("span",{children:"\xa0\xa0\xa0\xa0"}):Object(w.jsx)(w.Fragment,{}),p.filter((function(e){return!t.includes(e)})).map((function(e){return Object(w.jsx)(T.a,{color:"primary",variant:"outlined",onClick:function(){return r(e,!0)},children:e},e)}))]})]})},F=n(373),E=Object(J.a)((function(e){return{root:{position:"fixed",top:"10px",right:"10px",fontSize:"0.8em","& .js-toc":{marginTop:"10px"},"& .js-toc .toc-list":{listStyle:"none"},"& .js-toc > .toc-list li a":{textDecoration:"none"},"& .js-toc > .toc-list li":{marginBottom:"10px"},"& .js-toc > .toc-list li:last-child":{marginBottom:"0"},"& .js-toc .is-collapsible":{marginTop:"10px"},"& #id-toc-list":{display:function(e){return e?"none":"block"}}}}})),L=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],s=E(n);return Object(w.jsxs)("div",{className:s.root,children:[Object(w.jsx)(F.a,{color:"primary","aria-label":"add",onClick:function(){r(!n)},children:"TOC"}),Object(w.jsx)("div",{id:"id-toc-list",className:"js-toc"})]})};var z=function(){var e=Object(c.useState)(x),t=Object(u.a)(e,2),r=t[0],s=t[1],i=Object(c.useState)({dummy:"temp"}),o=Object(u.a)(i,2),d=o[0],h=o[1],O=function(){var e=Object(j.a)(a.a.mark((function e(){var t,c,r,s,i,o,j,u,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},c=n(352),r=Object(l.a)(p),e.prev=3,r.s();case 5:if((s=r.n()).done){e.next=20;break}return i=s.value,o="/common/".concat(i,".md"),console.log(o),e.next=11,fetch(o);case 11:return j=e.sent,e.next=14,j.text();case 14:u=e.sent,d=c.parse(u),console.log(d),t[i]=d;case 18:e.next=5;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(3),r.e(e.t0);case 25:return e.prev=25,r.f(),e.finish(25);case 28:return console.log(t),e.abrupt("return",t);case 30:case"end":return e.stop()}}),e,null,[[3,22,25,28]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("App mounted");var e=JSON.parse(localStorage.getItem("languages"))||x;console.log(e),s(e),O().then((function(e){h(e),setTimeout((function(){b.a.init({tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",hasInnerContainers:!1})}),1e3)}))}),[]),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(B,{languages:r,setLanguages:s}),Object(w.jsx)(L,{}),Object(w.jsx)(N,{languages:r,contents:d}),Object(w.jsx)(I,{})]})};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(z,{})}),document.getElementById("root"))}},[[355,1,2]]]);
//# sourceMappingURL=main.5e55fec7.chunk.js.map