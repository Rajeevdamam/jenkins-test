(this["webpackJsonpcoding-challenge-5"]=this["webpackJsonpcoding-challenge-5"]||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},142:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),i=(a(116),a(117),a(45)),o=a(18),l=a(16),u=a.n(l),j=a(28),d=a(52),b=a(26),p=a(50),m=a(184),h=a(187),O=a(189),f=a(193),v=a.p+"static/media/Login-amico.de4ab3e5.svg",g=(a(118),a(191)),x=a(59),y=a.n(x),w="LOGGED_IN",N="LOGGED_OUT",S="USER_PROFILE",C="SEARCH_MOVIE",k="MOVIES",I="SINGLE_MOVIE",P=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("/api/users/login",JSON.stringify(t),{headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,localStorage.setItem("token",a.data.token),localStorage.setItem("user",a.data.user),localStorage.setItem("userID",a.data.userId),e.abrupt("return",{type:w,payload:a.data.user});case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("/api/users/signup",JSON.stringify(t),{headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,y.a.get("/api/movies/containing?s=".concat(t));case 4:return a=e.sent,console.log(a.data),e.abrupt("return",{type:k,payload:a.data});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,y.a.get("http://www.omdbapi.com?i=".concat(t,"&apikey=cecc65d4"));case 4:return a=e.sent,console.log(a.data),e.abrupt("return",{type:I,payload:a.data});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/movies/");case 3:return t=e.sent,e.abrupt("return",{type:k,payload:t.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=a(25),q=a(7);function D(){var e=Object(n.useState)({userName:"",password:""}),t=Object(p.a)(e,2),a=t[0],r=t[1],c=(Object(U.c)((function(e){return e.user})),Object(U.b)()),s=Object(o.f)(),l=function(e){var t=e.target.name,n=e.target.value;r(Object(b.a)(Object(b.a)({},a),{},Object(d.a)({},t,n)))},x=Object(m.a)((function(e){return{margin:{display:"block",margin:"1vw 0vw",width:250,marginLeft:"auto",marginRight:"auto"}}}))(),y=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,P(a);case 3:(n=e.sent)?(console.log(n),console.log("Login sccessful"),c(n),s.push("/home")):s.push("/error");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("login page"),Object(q.jsxs)("div",{className:"page",children:[Object(q.jsx)("div",{className:"secure-login-svg",children:Object(q.jsx)("img",{src:v,alt:"login"})}),Object(q.jsx)(g.a,{message:"Registration Successfull",type:"success",showIcon:!0,closable:!0}),Object(q.jsx)("form",{onSubmit:y,className:"login-form",children:Object(q.jsxs)(h.a,{className:"container",children:[Object(q.jsx)("h2",{style:{textAlign:"center",marginBottom:"10%",fontSize:"250%",color:"#0d00ff"},children:"LOGIN"}),Object(q.jsx)(O.a,{label:"User name",name:"userName",autoComplete:"off",type:"text",onChange:l,className:x.margin,required:!0,value:a.userName,fullWidth:!0}),Object(q.jsx)(O.a,{label:"Password",name:"password",autoComplete:"off",type:"password",onChange:l,className:x.margin,value:a.password,required:!0,fullWidth:!0}),Object(q.jsx)(f.a,{variant:"contained",size:"large",color:"primary",type:"submit",className:"button",children:"Login"}),Object(q.jsxs)("div",{style:{margin:"10px auto"},children:["Not a user? ",Object(q.jsx)(i.b,{to:"/signup",className:"link",children:"Sign Up"})]})]})})]})}var W=a.p+"static/media/signup.2a9aeb53.svg";a(142);function G(){var e=Object(n.useState)({name:"",userName:"",email:"",password:"",confirmPassword:"",profileImage:""}),t=Object(p.a)(e,2),a=t[0],r=t[1],c=function(e){var t=e.target.name,n=e.target.value;r(Object(b.a)(Object(b.a)({},a),{},Object(d.a)({},t,n)))},s=Object(o.f)(),i=Object(m.a)((function(e){return{margin:{margin:"1vw 1vw"}}}))(),l=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,M(a);case 3:e.sent?(console.log("Signup successful"),s.push("/")):console.log("Signup unsuccessful");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{className:"page",children:[Object(q.jsx)("div",{className:"secure-login-svg",children:Object(q.jsx)("img",{src:W,alt:"signup"})}),Object(q.jsxs)("form",{onSubmit:l,className:"signup-form",children:[Object(q.jsx)("h2",{style:{textAlign:"center",marginBottom:"1.5vw",fontFamily:"Pattaya, sans-serif",fontSize:"250%",color:"#0d00ff"},children:"Sign Up"}),Object(q.jsxs)("div",{className:"container-fluid",children:[Object(q.jsx)("div",{className:"row ",children:Object(q.jsx)("div",{className:"col-sm-12 submit-button",children:Object(q.jsx)(O.a,{label:"User name",name:"userName",autoComplete:"off",type:"text",onChange:c,className:i.margin,required:!0,value:a.userName,fullWidth:!0})})}),Object(q.jsx)("div",{className:"row ",children:Object(q.jsx)("div",{className:"col-sm-12 submit-button",children:Object(q.jsx)(O.a,{label:"Email",name:"email",autoComplete:"off",type:"text",onChange:c,className:i.margin,required:!0,value:a.email,fullWidth:!0})})}),Object(q.jsx)("div",{className:"row ",children:Object(q.jsx)("div",{className:"col-sm-12 submit-button",children:Object(q.jsx)(O.a,{label:"Password",name:"password",autoComplete:"off",type:"password",onChange:c,className:i.margin,value:a.password,required:!0,fullWidth:!0})})}),Object(q.jsx)("div",{className:"row ",children:Object(q.jsx)("div",{className:"col-sm-12 submit-button",children:Object(q.jsx)(O.a,{label:"Confirm Password",name:"confirmPassword",autoComplete:"off",type:"password",onChange:c,className:i.margin,value:a.confirmPassword,required:!0,fullWidth:!0})})}),Object(q.jsx)("div",{className:"row ",children:Object(q.jsx)("div",{className:"col-sm-12 submit-button",children:Object(q.jsx)(f.a,{variant:"contained",size:"large",color:"primary",type:"submit",className:"sign-button",children:"Submit"})})})]})]})]})}var R=a(194),_=a(195),A=a(60);function z(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),s=Object(p.a)(c,2),l=s[0],u=s[1],j=(Object(U.c)((function(e){return e.movies})),Object(U.b)()),d=Object(o.f)();return Object(q.jsx)("div",{children:Object(q.jsx)(A.d,{sticky:!0,expand:"lg",light:!0,bgColor:"white",style:{padding:"20px"},children:Object(q.jsxs)(A.b,{fluid:!0,children:[Object(q.jsx)(i.b,{to:"/home",className:"link",children:"Home"}),Object(q.jsx)(A.e,{"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return r(!a)},children:Object(q.jsx)(A.c,{icon:"bars",fas:!0})}),Object(q.jsx)(A.a,{navbar:!0,show:a,children:Object(q.jsxs)("div",{style:{display:"grid",width:"30%",margin:"5px auto",gridTemplateColumns:"65% 35%"},children:[Object(q.jsx)(R.a,{type:"text",placeholder:"Search",className:"mr-sm-1 search-input",onChange:function(e){u(e.target.value),console.log(e.target.value)}}),Object(q.jsx)(_.a,{type:"button",onClick:function(e){console.log(l),j({type:C,payload:l}),l.startsWith("tt")?d.push("/details?i=".concat(l)):d.push("/search?q=".concat(l))},style:{margin:"auto"},children:"Submit"})]})})]})})})}a(146),a(190).a.Meta;var J=function(e){var t=Object(o.f)(),a=Object(U.b)(),n=e.value;return Object(q.jsxs)("div",{className:"container",onClick:function(){return e=n.imdbID,a({type:C,payload:e}),void t.push("/details?i=".concat(e));var e},children:[Object(q.jsx)("img",{src:n.Poster,alt:"Notebook",style:{width:"100%",height:"100%"}}),Object(q.jsx)("div",{className:"content",children:Object(q.jsxs)("div",{children:[Object(q.jsx)("strong",{children:n.Title}),Object(q.jsx)("p",{children:n.Year})]})})]})},V=function(e){var t=Object(U.c)((function(e){return e.movies})),a=Object(U.b)(),r=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),console.log(t.movies.length),Object(q.jsx)("div",{style:{display:"grid",gridTemplateColumns:"25% 25% 25% 25%",margin:"auto"},children:t.movies.map((function(e,t){return Object(q.jsx)(J,{value:e},t)}))})},B=function(e){var t=Object(U.c)((function(e){return e.movies})),a=Object(U.b)(),r=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t.searchedParams);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[t.searchedParams]),Object(q.jsx)("div",{children:Object(q.jsx)("div",{style:{display:"grid",gridTemplateColumns:"25% 25% 25% 25%",margin:"auto"},children:t.movies.map((function(e,t){return Object(q.jsx)(J,{value:e},t)}))})})};function F(){return Object(q.jsx)("div",{style:{width:"100%",margin:" auto"},children:Object(q.jsx)("img",{src:"https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg",alt:""})})}a(147);var H=function(e){var t=Object(U.c)((function(e){return e.movies})),a=Object(U.b)(),r=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t.searchedParams);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[t.searchedParams]),Object(q.jsxs)("div",{className:"details-card",children:[Object(q.jsx)("div",{className:"image",children:Object(q.jsx)("img",{height:"70%",src:t.oneMovie.Poster,alt:"card-img"})}),Object(q.jsxs)("div",{className:"details",children:[Object(q.jsx)("p",{children:t.oneMovie.Title}),Object(q.jsx)("p",{children:t.oneMovie.Year}),Object(q.jsx)("p",{children:t.oneMovie.imdbID}),Object(q.jsx)("p",{children:t.oneMovie.Type}),Object(q.jsx)("p",{children:t.oneMovie.Plot}),Object(q.jsx)("p",{children:t.oneMovie.Actors}),Object(q.jsx)("p",{children:t.oneMovie.imdbRatings}),Object(q.jsx)("p",{children:t.oneMovie.imdbVotes})]})]})};var Y=function(){return Object(q.jsx)("div",{className:"App",children:Object(q.jsx)(i.a,{children:Object(q.jsxs)(o.c,{children:[Object(q.jsx)(o.a,{exact:!0,path:"/",children:Object(q.jsx)(D,{})}),Object(q.jsx)(o.a,{exact:!0,path:"/signup",children:Object(q.jsx)(G,{})}),Object(q.jsxs)(o.a,{exact:!0,path:"/home",children:[Object(q.jsx)(z,{}),Object(q.jsx)(V,{})]}),Object(q.jsxs)(o.a,{exact:!0,path:"/search",children:[Object(q.jsx)(z,{}),Object(q.jsx)(B,{})]}),Object(q.jsxs)(o.a,{exact:!0,path:"/details",children:[Object(q.jsx)(z,{}),Object(q.jsx)(H,{})]}),Object(q.jsx)(o.a,{exact:!0,path:"/error",children:Object(q.jsx)(F,{})})]})})})},K=a(78),Q={loggedInUser:"",userProfile:[]},X={movies:[],searchedParams:"",oneMovie:{}},Z=Object(K.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case N:return Object(b.a)(Object(b.a)({},e),{},{loggedInUser:t.payload});case S:return Object(b.a)(Object(b.a)({},e),{},{userProfile:t.payload});default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(b.a)(Object(b.a)({},e),{},{movies:t.payload});case I:return Object(b.a)(Object(b.a)({},e),{},{oneMovie:t.payload});case C:return console.log(t.payload),Object(b.a)(Object(b.a)({},e),{},{searchedParams:t.payload});default:return e}}}),$=Object(K.b)(Z);console.log($.getState());a(148),a(149),a(150);s.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(U.a,{store:$,children:Object(q.jsx)(Y,{})})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.f403f0fd.chunk.js.map