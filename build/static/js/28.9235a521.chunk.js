(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1252:function(e,n,t){"use strict";var a=t(53),r=t(21),o=t(20),i=t(2);function c(){var e=Object(r.a)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n"]);return c=function(){return e},e}var l=function(e){return Object(o.c)(e)(c(),Object(i.palette)("text",1))};t.d(n,"a",function(){return p});var s=l(a.a),p=a.a.Group;n.b=s},1974:function(e,n,t){e.exports=t.p+"static/media/04.61f51abd.jpg"},2833:function(e,n,t){"use strict";t.r(n);var a=t(44),r=t(13),o=t(14),i=t(19),c=t(17),l=t(18),s=t(0),p=t.n(s),d=t(2732),g=t(24),m=t(119),u=t(1252),h=t(192),b=t(60),f=t(62),v=t(140),x=t.n(v),j=t(26),O=t(21),w=t(20),y=t(2),k=t(1974),E=t.n(k),C=t(27);function S(){var e=Object(O.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.3);\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoSignUpContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoSignUpContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignUpForm {\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoLeftRightComponent {\n        input {\n          width: calc(100% - 10px);\n\n          &:first-child {\n            margin-right: ",";\n            margin-left: ",";\n          }\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n        width: 100%;\n        height: 42px;\n        border: 0;\n\n        &.btnFacebook {\n          background-color: ",";\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnGooglePlus {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnAuthZero {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnFirebase {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n      }\n    }\n  }\n"]);return S=function(){return e},e}var W=w.c.div(S(),E.a,function(e){return"rtl"===e["data-rtl"]?"inherit":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"inherit"},Object(y.palette)("secondary",2),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),function(e){return"rtl"===e["data-rtl"]?"inherit":"20px"},function(e){return"rtl"===e["data-rtl"]?"20px":"inherit"},Object(y.palette)("text",2),Object(y.palette)("primary",0),Object(y.palette)("color",7),Object(y.palette)("color",8),Object(y.palette)("color",9),Object(y.palette)("color",10),Object(y.palette)("color",11),Object(y.palette)("color",12),Object(y.palette)("color",5),Object(y.palette)("color",6)),z=Object(C.a)(W),U=t(218),I=b.a.login,N=f.a.clearMenu,A=function(e){function n(){var e,t;Object(r.a)(this,n);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(l)))).state={redirectToReferrer:!1,email:"",password:"",confirm:"",terms:!1},t.handleLogin=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.props,a=n.login,r=n.clearMenu;console.log(e,"handlelogin"),e?a(e):a(),r(),t.props.history.push("/dashboard")},t.handleSignUp=function(){var e=t.state,n=e.confirm,a=e.email,r=e.password,o=e.terms;e.name;o?!1===/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(a)?Object(U.a)("error","It does not fit the email form."):!0===/^\d+$/.test(r)&&r.length>=6?Object(U.a)("error","The password must contain at least 6 digits of letters and numbers."):n!==r?Object(U.a)("error","Passwords do not match."):x.a.auth().createUserWithEmailAndPassword(a,r).then(function(e){x.a.firestore().collection("users").doc(e.user.uid).set({email:a}),Object(U.a)("success","Sign up is complete."),t.setState({email:"",password:"",confirm:"",terms:!1})}).catch(function(e){}):Object(U.a)("error","Please accept the terms.")},t.handleOnChange=function(e){t.setState(Object(a.a)({},e.target.name,e.target.value))},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.props.isLoggedIn!==e.isLoggedIn&&!0===e.isLoggedIn&&this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){var e=this;return p.a.createElement(z,{className:"isoSignUpPage"},p.a.createElement("div",{className:"isoSignUpContentWrapper"},p.a.createElement("div",{className:"isoSignUpContent"},p.a.createElement("div",{className:"isoLogoWrapper"},p.a.createElement(d.a,{to:"/dashboard"},p.a.createElement(j.a,{id:"page.signUpTitle"}))),p.a.createElement("div",{className:"isoSignUpForm"},p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(m.d,{name:"email",size:"large",onChange:this.handleOnChange,placeholder:"Email"})),p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(m.d,{name:"password",size:"large",onChange:this.handleOnChange,type:"password",placeholder:"Password"})),p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(m.d,{size:"large",type:"password",onChange:function(n){e.setState({confirm:n.target.value})},placeholder:"Confirm Password"})),p.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:"50px"}},p.a.createElement(u.b,{name:"terms",onChange:function(n){e.setState({terms:n.target.checked})}},p.a.createElement(j.a,{id:"page.signUpTermsConditions"}))),p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(h.b,{type:"primary",onClick:this.handleSignUp},p.a.createElement(j.a,{id:"page.signUpButton"}))),p.a.createElement("div",{className:"isoInputWrapper isoCenterComponent isoHelperWrapper"},p.a.createElement(d.a,{to:"/signin"},p.a.createElement(j.a,{id:"page.signUpAlreadyAccount"})))))))}}]),n}(s.Component);n.default=Object(g.c)(function(e){return{isLoggedIn:null!==e.Auth.idToken}},{login:I,clearMenu:N})(A)}}]);
//# sourceMappingURL=28.9235a521.chunk.js.map