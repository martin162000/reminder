(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],{100:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(30),i=n.n(c),r=n(22),s=(n(99),n(8)),l=(n(100),n(16)),d=n(172),u=n(173),j=n(56),b=n.n(j),h=n(170),m=n(2),O=function(e){for(var t=e.totalPosts,n=e.postsPerPage,o=e.paginate,c=[],i=1;i<=Math.ceil(t/n);i++)c.push(i);var r=Object(a.useState)(1),l=Object(s.a)(r,2),d=l[0],u=l[1];return Object(m.jsx)(h.a,{className:"pagination",count:c.length,page:d,color:"standard",onChange:function(e,t){u(t),o(t)},shape:"rounded"})},x=n(78),p=n.n(x),f=function(e){var t=e.currentPosts,n=e.allSendPosts,a=Object(l.g)();return 0===t.length&&0!==n.length&&a.push({pathname:"/"}),Object(m.jsx)(d.a,{item:!0,xs:12,style:{width:"100%",margin:"0",padding:"0",minHeight:"870px"},container:!0,direction:"row",justifyContent:"flex-start",alignContent:"flex-start",children:t.length>0?t.map((function(t){return Object(m.jsx)(d.a,{className:"gridPost fadeIn",item:!0,xs:12,md:6,lg:4,children:Object(m.jsxs)("article",{children:[Object(m.jsx)("span",{className:"delete",onClick:function(a){return o=t.id,n=n.filter((function(e){return e.id!==o})),e.onDeleteChange(n),localStorage.setItem("Data",JSON.stringify(n)),void(0===n.length&&localStorage.removeItem("Data"));var o},children:Object(m.jsx)(p.a,{className:"deleteIcon"})}),Object(m.jsxs)(r.b,{to:{pathname:"/post/".concat(t.id)},children:[Object(m.jsxs)("div",{className:"posts",children:[Object(m.jsxs)("p",{children:["Show ",Object(m.jsx)("span",{children:"or"})," Edit"]}),Object(m.jsx)("h2",{children:t.name}),Object(m.jsxs)("span",{children:[" ",t.text,"  "]}),Object(m.jsx)("div",{className:"date",children:t.date}),Object(m.jsx)("div",{className:"time",children:t.time})]}),Object(m.jsx)("div",{className:"afterDate"}),Object(m.jsx)("div",{className:"afterTime"})]})]})},t.id)})):Object(m.jsxs)("div",{className:"dontAnyPost",children:[" You don't have any post. Please click on",Object(m.jsx)(r.b,{to:{pathname:"/Add"},children:Object(m.jsx)(u.a,{variant:"contained",size:"medium",color:"success",style:{minWidth:"0px",padding:"4px 8px",margin:"0 6px"},children:Object(m.jsx)(b.a,{})})}),"and create your first post"]})})},g=function(e){var t=e.postsFromLocalStorage,n=e.onChange,o=Object(a.useState)(1),c=Object(s.a)(o,2),i=c[0],l=c[1],j=Object(a.useState)(9),h=Object(s.a)(j,1)[0],x=i*h,p=x-h,g=0!==t.length?t.reverse().slice(p,x):t.slice(p,x);return Object(m.jsxs)(d.a,{container:!0,style:{width:"100%",margin:"0",padding:"0",justifyContent:"flex-end"},children:[Object(m.jsx)(d.a,{item:!0,xs:12,md:12,lg:12,className:"menuMain",children:Object(m.jsx)(r.b,{to:{pathname:"/Add"},children:Object(m.jsx)(u.a,{variant:"contained",size:"medium",color:"success",style:{},children:Object(m.jsx)(b.a,{})})})}),Object(m.jsx)(f,{currentPosts:g,allSendPosts:0!==t.length?t.reverse():t,onDeleteChange:function(e){n(e)}}),Object(m.jsx)(O,{postsPerPage:h,totalPosts:t.length,paginate:function(e){return l(e)}})]})},v=n(14),S=n(174),C=n(168),y=n(5),N=function(){var e=new Date;return e.getDate()+"."+e.getMonth()+"."+e.getFullYear()},I=function(){var e=new Date,t=e.getHours();t=t>9?t:"0"+t;var n=e.getMinutes();n=n>9?n:"0"+n;var a=e.getSeconds();return t+":"+n+" | "+(a=a>9?a:"0"+a)+"sec"},M=Object(y.a)(C.a,{shouldForwardProp:function(e){return"focusColor"!==e}})((function(e){return{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:e.defaultcolor},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:e.focusColor},"&:focus .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:e.focusColor},"& .MuiOutlinedInput-input":{color:"white"},"&:hover .MuiOutlinedInput-input":{color:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"white"},"& .MuiInputLabel-outlined":{color:e.focusColor},"&:hover .MuiInputLabel-outlined":{color:e.focusColor},"& .MuiInputLabel-outlined.Mui-focused":{color:e.focusColor},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:e.focusColor}},background:"rgb(42 42 44)",color:"white"}})),w=n(57),D=n.n(w),P=n(79),F=n.n(P),T=function(e){var t=e.postsFromLocalStorage,n=Object(l.g)(),o=Object(a.useState)(""),c=Object(s.a)(o,2),i=c[0],j=c[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),O=h[0],x=h[1],p=Object(a.useState)(!1),f=Object(s.a)(p,2),g=f[0],C=f[1],y=Object(a.useState)(!1),w=Object(s.a)(y,2),P=w[0],T=w[1];return Object(m.jsxs)(S.a,{sx:{width:"100%"},children:[Object(m.jsx)(d.a,{item:!0,xs:12,md:12,lg:12,className:"menuMain justifyStart",children:Object(m.jsx)(r.b,{to:{pathname:"/Home"},children:Object(m.jsx)(u.a,{variant:"contained",size:"large",children:Object(m.jsx)(D.a,{})})})}),Object(m.jsx)(d.a,{item:!0,xs:12,md:12,lg:12,className:"zoomfadeOut",container:!0,direction:"row",justifyContent:"center",alignContent:"flex-start",children:Object(m.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(a){if(a.preventDefault(),C(!1),T(!1),""===i&&C(!0),""===O&&T(!0),i&&O)if(void 0===t||0===t.length){var o=[{id:1,name:i,text:O,date:N(),time:I()}];e.onChange(o),localStorage.setItem("Data",JSON.stringify(o)),n.push({pathname:"/home"})}else{var c={id:Math.max.apply(Math,Object(v.a)(t.map((function(e){return e.id}))))+1,name:i,text:O,date:N(),time:I()};e.onChange([].concat(Object(v.a)(t),[c])),localStorage.setItem("Data",JSON.stringify([].concat(Object(v.a)(t),[c]))),n.push({pathname:"/home"})}},children:[Object(m.jsx)("div",{className:"titleForm",children:Object(m.jsx)(M,{defaultcolor:"#1e4e20",focusColor:"#2e7d32",onChange:function(e){return j(e.target.value)},id:"outlinedBasic",label:"Title",variant:"outlined",style:{width:"100%"},required:!0,error:g})}),Object(m.jsx)(M,{defaultcolor:"#1e4e20",focusColor:"#2e7d32",onChange:function(e){return x(e.target.value)},id:"postText",label:"Text of post",variant:"outlined",multiline:!0,rows:22,style:{width:"100%",marginTop:"2em"},required:!0,error:P}),Object(m.jsx)("div",{className:"butSubmit",children:Object(m.jsx)(u.a,{startIcon:Object(m.jsx)(F.a,{}),type:"submit",color:"success",variant:"contained",style:{width:"35%",marginTop:"2em",color:"#252526",fontSize:"16px",padding:"12px 0px"},children:"Submit"})})]})})]})},L=n(80),z=n.n(L),J=function(e){var t=e.postsFromLocalStorage,n=Object(l.g)(),o=Object(l.h)().postId,c=t.filter((function(e){return e.id===Number(o)})),i=Object(a.useState)(c[0].name),j=Object(s.a)(i,2),b=j[0],h=j[1],O=Object(a.useState)(c[0].text),x=Object(s.a)(O,2),p=x[0],f=x[1],g=Object(a.useState)(!1),v=Object(s.a)(g,2),S=v[0],C=v[1],y=Object(a.useState)(!1),w=Object(s.a)(y,2),P=w[0],F=w[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(d.a,{item:!0,xs:12,md:12,lg:12,className:"menuMain justifyStart",children:Object(m.jsx)(r.b,{to:{pathname:"/Home"},children:Object(m.jsx)(u.a,{variant:"contained",size:"large",children:Object(m.jsx)(D.a,{})})})}),Object(m.jsx)(d.a,{item:!0,xs:12,md:12,lg:12,className:"zoomfadein",container:!0,direction:"row",justifyContent:"center",alignContent:"flex-start",children:Object(m.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(a){if(a.preventDefault(),C(!1),F(!1),""===b&&C(!0),""===p&&F(!0),b&&p&&void 0!==t){var i={id:c[0].id,name:b,text:p,date:N(),time:I()},r=t.filter((function(e){return e.id!==Number(o)}));r.push(i),e.onChange(r),localStorage.setItem("Data",JSON.stringify(r)),n.push({pathname:"/home"})}},children:[Object(m.jsx)("div",{className:"titleForm",children:Object(m.jsx)(M,{defaultcolor:"#764c34",focusColor:"#f28d52",id:"outlinedBasic",label:"Title",variant:"outlined",style:{width:"100%"},required:!0,value:b,onChange:function(e){return h(e.target.value)},error:S})}),Object(m.jsx)(M,{defaultcolor:"#764c34",focusColor:"#f28d52",id:"postText",label:"Text of post",variant:"outlined",style:{width:"100%",marginTop:"2em"},required:!0,multiline:!0,rows:22,value:p,onChange:function(e){return f(e.target.value)},error:P}),Object(m.jsx)("div",{className:"butSubmit",children:Object(m.jsx)(u.a,{type:"submit",color:"secondary",variant:"contained",style:{width:"35%",marginTop:"2em",color:"#252526",background:"#F28D52",fontSize:"16px",padding:"12px 0px"},startIcon:Object(m.jsx)(z.a,{}),children:"Edit"})})]})})]})};var k=function(){var e=Object(a.useState)((function(){var e=localStorage.getItem("Data");return JSON.parse(e)||""})),t=Object(s.a)(e,2),n=t[0],o=t[1],c=function(e){o(e)};return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"reminder",children:[Object(m.jsx)("h1",{children:" Reminder "}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",children:Object(m.jsx)(l.a,{to:"/home"})}),Object(m.jsx)(l.b,{path:"/reminder",children:Object(m.jsx)(l.a,{to:"/home"})}),Object(m.jsx)(l.b,{path:"/home",exact:!0,children:Object(m.jsx)(g,{postsFromLocalStorage:n,onChange:c})}),Object(m.jsx)(l.b,{path:"/add",children:Object(m.jsx)(T,{postsFromLocalStorage:n,onChange:c})}),Object(m.jsx)(l.b,{path:"/post/:postId",component:J,children:Object(m.jsx)(J,{postsFromLocalStorage:n,onChange:c})})]})]})})};i.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(k,{})})}),document.getElementById("root"))},99:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.a565f5aa.chunk.js.map