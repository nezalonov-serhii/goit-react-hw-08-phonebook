"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[912],{6912:function(n,e,a){a.r(e),a.d(e,{default:function(){return f}});var r,o,t=a(9439),i=a(2791),s=a(3531),d=a(5568),l=a(966),c=a(6316),p=a(8069),u=a(168),x=a(6444),h=x.ZP.section(r||(r=(0,u.Z)(["\n  padding: 40px 15px;\n"]))),m=x.ZP.form(o||(o=(0,u.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 30px 30px;\n\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: rgb(150, 150, 150) 10px 10px 20px;\n\n  @media screen and (min-width: 480px) {\n    width: 450px;\n    margin: 0 auto;\n    padding: 40px 50px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 30%;\n  }\n\n  & h2 {\n    display: block;\n    font-size: 18px;\n    margin-bottom: 15px;\n  }\n\n  & label {\n    display: flex;\n    /* flex-direction: column; */\n    align-items: center;\n    margin-bottom: 30px;\n  }\n  & input {\n    font-size: 16px;\n    border: none;\n    border-bottom: 1px solid #000;\n    width: 100%;\n  }\n\n  & button {\n    border: none;\n    padding: 8px 10px;\n    border-radius: 5px;\n    background-color: rgb(255, 248, 0);\n    font-size: 16px;\n    box-shadow: rgb(150, 150, 150) 5px 5px 10px;\n\n    transition: all 250ms linear;\n    &:hover {\n      color: #fff;\n      background-color: rgb(0, 177, 163);\n    }\n\n    &:disabled {\n      opacity: 50%;\n    }\n  }\n"]))),b=a(3329),f=function(){var n=(0,i.useState)(""),e=(0,t.Z)(n,2),a=e[0],r=e[1],o=(0,i.useState)(""),u=(0,t.Z)(o,2),x=u[0],f=u[1],g=(0,s.useSelector)(p.selectIsAuthLoading),w=(0,s.useDispatch)(),k=function(n,e){switch(e){case"email":r(n);break;case"password":f(n);break;default:return}},v=function(){r(""),f("")};return(0,b.jsx)(h,{children:(0,b.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e={email:a,password:x};w((0,c.Fv)(e)).unwrap().then((function(n){var e=n.user;d.Am.success("".concat(e.name," hello, you have successfully logged in"))})).catch((function(n){d.Am.error("Sorry, try again, this user was not found or the password is incorrect")})),v()},children:[(0,b.jsx)("h2",{children:"Please enter Email and Password"}),(0,b.jsx)("label",{children:(0,b.jsx)("input",{required:!0,type:"email",placeholder:"Email",value:a,name:"email",onChange:function(n){k(n.target.value,n.target.name)}})}),(0,b.jsx)("label",{children:(0,b.jsx)("input",{required:!0,type:"password",placeholder:"Password",value:x,name:"password",autoComplete:"off",onChange:function(n){k(n.target.value,n.target.name)}})}),(0,b.jsxs)("button",{type:"submit",disabled:g,children:[g&&(0,b.jsx)(l.Z,{size:"20"}),!g&&(0,b.jsx)("span",{children:"Sign in"})]})]})})}}}]);
//# sourceMappingURL=912.d5d4fc4e.chunk.js.map