(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{3209:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-review/[id]",function(){return r(4669)}])},4122:function(e,t,r){"use strict";var i=r(5893),s=r(8928),_=r.n(s),a=r(7294);let n=e=>{let{ratingSystem:t,count:r,rating:s,setRating:n,isSubmit:o}=e,[c,l]=(0,a.useState)(),[d,u]=(0,a.useState)(0);return(0,a.useEffect)(()=>{t?l([void 0,void 0,void 0,void 0,void 0].map((e,t)=>(t+=1,(0,i.jsx)("button",{className:_().__rating_system,onClick:()=>n(t),onMouseEnter:()=>u(t),onMouseLeave:()=>u(s),children:(0,i.jsx)("span",{className:t<=(s&&d||d)&&!o?_().__active:_().__off,children:"★"})},t)))):l([void 0,void 0,void 0,void 0,void 0].map((e,t)=>(t+=1,(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:t<=r?_().__active:_().__off,children:"★"},t)}))))},[s,d,r,t,n,o]),t?(0,i.jsx)("div",{children:c}):(0,i.jsx)(i.Fragment,{children:c})};t.Z=n},4669:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return w}});var i=r(5893),s=r(7294),_=r(317),a=r.n(_),n=r(4122),o=r(4179),c=r(9498),l=r(5675),d=r.n(l),u=r(4742),v=r(9434),h=r(2920);r(4213);var m=r(1163),p=r(175),x=r(3454);let g=e=>{let{product:t}=e,[r,_]=(0,s.useState)({}),[l,g]=(0,s.useState)(0),[w,j]=(0,s.useState)(),[f,b]=(0,s.useState)(),[y,N]=(0,s.useState)(!1),[S,k]=(0,s.useState)(!1),[C,E]=(0,s.useState)({content:"",title:""}),T=(0,m.useRouter)(),{isLoggedIn:F}=(0,p.a)();(0,s.useEffect)(()=>{_({name:t.rows[0].name,image:(0,u.G)(t.rows[0].cart_image,"public","/static")})},[t]);let A=async()=>{if(!F())return(0,h.Am)("To leave a review, you must be logged in. Please log in or create an account to continue.",{autoClose:5e3,type:"warning"});let[e,r]=(0,v.z)(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,C.title,C.content);if(e&&0!==l){let i=localStorage.getItem("token");try{let s=await fetch("".concat(x.env.NEXT_PUBLIC_CREATE_REVIEW),{method:"POST",body:JSON.stringify({product_id:t.rows[0].item_id,title:C.title,content:C.content,rating:l}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(i)}}),_=await s.json();201===_.status?(N(!0),E({title:"",content:""}),h.Am.success("Your review has been successfully submitted!"),setTimeout(()=>{T.push("/")},3e3)):400===_.status&&(h.Am.error("You have already submitted a review for this product."),N(!1),k(!0),setTimeout(()=>{T.back()},3e3))}catch(a){throw N(!1),a}}j(r),b("Overall note is required")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:a().__create_review,children:(0,i.jsxs)("div",{className:a().__container,children:[(0,i.jsxs)("div",{className:a().__head,children:[(0,i.jsx)("h5",{children:"Leave a review"}),(0,i.jsx)("div",{className:a().__go_back_btn,onClick:()=>T.back(),children:(0,i.jsx)(o.Z,{btnContent:"go back",btnType:"borderless"})})]}),(0,i.jsxs)("div",{className:a().__product,children:[(0,i.jsx)(d(),{src:r.image,alt:"product",width:50,height:50}),(0,i.jsx)("p",{children:r.name})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:a().__overall_note,children:[(0,i.jsx)("p",{children:"Overall note"}),(0,i.jsx)(n.Z,{ratingSystem:!0,rating:l,setRating:g,isSubmit:y}),0===l&&!y&&(0,i.jsx)("p",{className:a().__error_ratings,children:f})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:a().__add_title,children:[(0,i.jsx)("p",{children:"Add a title"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{error:w&&w.find(e=>"title"===e.input),placeholder:"Enter a descriptive title for your review",isFullWidth:!0,type:"text",value:C.title,onChange:e=>E({...C,title:e.target.value})}),w&&w.map((e,t)=>{if("title"===e.input)return(0,i.jsx)("p",{className:a().__error_message,children:e.message},t)})]})]}),(0,i.jsxs)("div",{className:a().__write_review,children:[(0,i.jsx)("p",{children:"Share your experience"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{error:w&&w.find(e=>"content"===e.input),placeholder:"Tell us what you liked or disliked about the product",isFullWidth:!0,type:"text",isTextArea:!0,value:C.content,onChange:e=>E({...C,content:e.target.value})}),w&&w.map((e,t)=>{if("content"===e.input)return(0,i.jsx)("p",{className:a().__error_message,children:e.message},t)})]})]}),(0,i.jsx)(o.Z,{btnContent:"Send",onClick:A,disabled:S})]})}),(0,i.jsx)(h.Ix,{position:"top-center",autoClose:1e3})]})};var w=!0;t.default=g},317:function(e){e.exports={__create_review:"create-review___create_review__vjJfx",__container:"create-review___container__p11jW",__head:"create-review___head__cPFyD",__go_back_btn:"create-review___go_back_btn__d_YMT",__product:"create-review___product__sS_z2",__add_title:"create-review___add_title__R_zTz",__write_review:"create-review___write_review__UrnRh",__error_message:"create-review___error_message__DV_Ma",__error_ratings:"create-review___error_ratings__Iwtnz"}},8928:function(e){e.exports={__rating_system:"styles___rating_system__YEogl",__active:"styles___active__Ek5RC",__off:"styles___off__KV83p",__star_ratings:"styles___star_ratings__BGhCY",__stars:"styles___stars__QhbUF"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3209)}),_N_E=e.O()}]);