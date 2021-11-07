(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(2),r=n(33),c=n(34),s=n(36),i=n(35),o=n(1),u=n.n(o),l=n(12),f=n(6),j=n(28),d=n(0),p=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(s.a)(o,t);var n=Object(i.a)(o);function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(a.a)({},this.props)):Object(d.jsx)(f.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(p,{getAuthThunk:j.b})(t)}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(136),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"96c1cbe8-ce69-487c-a58b-caa1f1a08239"}}),c={getUsers:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r.get("users?page=".concat(e,"&count=").concat(t,"&friend=").concat(n)).then((function(e){return e.data}))},deleteUsers:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},postUsers:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return r.put("profile",e).then((function(e){return e.data}))}},i={getAuth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))},getCaptchaUrl:function(){return r.get("security/get-captcha-url").then((function(e){return e.data}))}}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(50),r=n(2),c="ADD-MESSAGE",s={dialogsData:[{id:1,name:"Dima"},{id:2,name:"Sasha"},{id:3,name:"Sveta"},{id:4,name:"Vasya"},{id:5,name:"Kaban"}],messagesData:[{id:1,message:"The posts section is still in development"},{id:2,message:"there is no api support yet"}]},i=function(e){return function(t){t(o(e))}},o=function(e){return{type:c,newTextMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:e.messagesData.length+1,message:t.newTextMessage};return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[n])});default:return e}}},14:function(e,t,n){e.exports={nav:"Nav_nav__6FaQn",list:"Nav_list__9Y5W8",item:"Nav_item__1RSFu",link:"Nav_link__31ZTw",active:"Nav_active__1j5ig"}},140:function(e,t,n){},23:function(e,t,n){e.exports={settings:"Settings_settings__19RYd",changePhoto:"Settings_changePhoto__1RgWc",title:"Settings_title__2Y3AL",inputBlock:"Settings_inputBlock__v_Zlb",inputWrapper:"Settings_inputWrapper__1yClz",fileInfo:"Settings_fileInfo__2PcFE",choosegFileButton:"Settings_choosegFileButton__3cjy8"}},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b}));var a=n(10),r=n.n(a),c=n(16),s=n(2),i=n(27),o=n(13),u="SET_USER_DATA",l="DELETE_USER_DATA",f="GET_CAPTCHA_URL",j={userId:null,login:null,email:null,isAuth:!1,captchaUrl:null},d=function(){return function(e){return o.a.getAuth().then((function(t){if(0===t.resultCode){var n=t.data,a=n.id,r=n.login,c=n.email;e(O(a,r,c))}}))}},p=function(e,t,n,a){return function(){var s=Object(c.a)(r.a.mark((function c(s){var u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(e,t,n,a);case 2:0===(u=r.sent).resultCode?s(d()):(10===u.resultCode&&s(h()),l=u.messages.length>0?u.messages[0]:"Some error",s(Object(i.b)("login",{_error:l})));case 4:case"end":return r.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},b=function(){return function(e){o.a.logout().then((function(t){0===t.resultCode&&e(m())}))}},h=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getCaptchaUrl();case 2:n=e.sent,t(g(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return{type:l}},O=function(e,t,n){return{type:u,data:{userId:e,login:t,email:n}}},g=function(e){return{type:f,captchaUrl:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)(Object(s.a)({},e),t.data),{},{isAuth:!0});case l:return Object(s.a)(Object(s.a)({},e),{},{userId:null,login:null,email:null,isAuth:!1});case f:return Object(s.a)(Object(s.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}}},299:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(34),c=n(36),s=n(35),i=n(6),o=n(76),u=n.n(o),l=n(0),f=function(){return Object(l.jsx)("div",{children:"Music"})},j=n(20),d=n(14),p=n.n(d),b=function(){return Object(l.jsx)("nav",{className:p.a.nav,children:Object(l.jsxs)("ul",{className:p.a.list,children:[Object(l.jsx)("li",{className:p.a.item,children:Object(l.jsx)(j.b,{to:"/profile",className:p.a.link,activeClassName:p.a.active,children:"Profile"})}),Object(l.jsx)("li",{className:p.a.item,children:Object(l.jsx)(j.b,{to:"/users",className:p.a.link,activeClassName:p.a.active,children:"Users"})}),Object(l.jsx)("li",{className:p.a.item,children:Object(l.jsx)(j.b,{to:"/friends",className:p.a.link,activeClassName:p.a.active,children:"Friends"})}),Object(l.jsx)("li",{className:p.a.item,children:Object(l.jsx)(j.b,{to:"/dialogs",className:p.a.link,activeClassName:p.a.active,children:"Messages"})}),Object(l.jsx)("li",{className:p.a.item,children:Object(l.jsx)(j.b,{to:"/settings",className:p.a.link,activeClassName:p.a.active,children:"Settings"})})]})})},h=function(){return Object(l.jsx)("div",{children:"News"})},m=n(21),O=n(1),g=n.n(O),_=n(12),x=n(11),v=n(100),k=n(10),N=n.n(k),P=n(16),I=n(50),C=n(2),y=n(27),T=n(13),w="ADD-POST",S="SET_USER_PROFILE",A="SET_STATUS",U="SET_PHOTO",L="LIKE",E="UNLIKE",D="TOGGLE_IS_LOADING",M={postsData:[{id:1,message:"The posts section is still in development",likesCount:12},{id:2,message:"there is no api support yet ",likesCount:32}],profile:null,status:"",isLoading:!1},F=function(e){return function(t){T.b.getProfile(e).then((function(e){t(G(e))}))}},B=function(e){return function(t){t(V(!0)),T.b.savePhoto(e).then((function(e){0===e.resultCode&&t(H(e.data.photos)),t(V(!1))}))}},R=function(e){return{type:A,status:e}},z=function(e){return{type:w,newPostText:e}},G=function(e){return{type:S,profile:e}},H=function(e){return{type:U,photo:e}},W=function(e){return{type:L,id:e}},J=function(e){return{type:E,id:e}},V=function(e){return{type:D,isLoading:e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n={id:e.postsData.length+1,message:t.newPostText,likesCount:0};return Object(C.a)(Object(C.a)({},e),{},{postsData:[].concat(Object(I.a)(e.postsData),[n])});case S:return Object(C.a)(Object(C.a)({},e),{},{profile:t.profile});case A:return Object(C.a)(Object(C.a)({},e),{},{status:t.status});case U:return Object(C.a)(Object(C.a)({},e),{},{profile:Object(C.a)(Object(C.a)({},e.profile),{},{photos:t.photo})});case L:return Object(C.a)(Object(C.a)({},e),{},{postsData:e.postsData.map((function(e){return e.id===t.id?Object(C.a)(Object(C.a)({},e),{},{likesCount:e.likesCount+1}):e}))});case E:return Object(C.a)(Object(C.a)({},e),{},{postsData:e.postsData.map((function(e){return e.id===t.id?Object(C.a)(Object(C.a)({},e),{},{likesCount:e.likesCount-1}):e}))});case D:return Object(C.a)(Object(C.a)({},e),{},{isLoading:t.isLoading});default:return e}},Y=n(23),K=n.n(Y),q=Object(x.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,isLoading:e.profilePage.isLoading}}),{setPhotoThunk:B}),v.a)((function(e){var t=Object(O.useState)(null),n=Object(m.a)(t,2),a=n[0],r=n[1],c=Object(O.useState)(!1),s=Object(m.a)(c,2),i=s[0],o=s[1],u=Object(O.useState)(!1),f=Object(m.a)(u,2),j=f[0],d=f[1];return Object(l.jsxs)("div",{className:K.a.settings,children:[Object(l.jsx)("h1",{className:K.a.title,children:"Settings"}),Object(l.jsxs)("div",{className:K.a.changePhoto,children:[Object(l.jsx)("h2",{className:K.a.title,children:"1. Change your avatar"}),Object(l.jsxs)("div",{className:K.a.inputBlock,children:[Object(l.jsx)("input",{className:K.a.input,type:"file",id:"changePhotoInput",onChange:function(e){e.target.files.length&&(o(!0),r(e.target.files[0]))},hidden:!0}),Object(l.jsxs)("label",{className:K.a.inputWrapper,htmlFor:"changePhotoInput",children:[i?Object(l.jsx)("div",{className:K.a.fileInfo,children:a.name}):Object(l.jsx)("div",{className:K.a.fileInfo,children:"No selected file"}),Object(l.jsx)("div",{className:K.a.choosegFileButton,children:"Choose file"})]}),Object(l.jsx)("button",{className:K.a.button,onClick:function(){d(!0),e.setPhotoThunk(a)},disabled:e.isLoading,children:"Change Photo"}),!e.isLoading&&j&&"\u2705"]})]})]})})),X=n(53),Z=n(30),$=n.n(Z),ee=n(46),te=n.p+"static/media/like-ico.665ede1a.svg",ne=n.p+"static/media/like-ico-clicked.4c4725c1.svg",ae=function(e){var t=Object(O.useState)(!1),n=Object(m.a)(t,2),a=n[0],r=n[1];return Object(l.jsxs)("div",{className:$.a.post,children:[Object(l.jsx)(j.b,{to:"/profile",children:null!=e.avatar?Object(l.jsx)("img",{className:$.a.avatar,src:e.avatar,alt:""}):Object(l.jsx)("img",{src:"".concat(ee.a),className:$.a.avatar,alt:"smallImage"})}),Object(l.jsx)("span",{className:$.a.message,children:e.message}),Object(l.jsxs)("div",{className:$.a.likes,onClick:function(){a?(r(!1),e.unlikeThunk(e.id)):a||(r(!0),e.likeThunk(e.id))},children:[a?Object(l.jsx)("img",{className:$.a.likesImage,src:"".concat(ne),alt:""}):Object(l.jsx)("img",{className:$.a.likesImage,src:"".concat(te),alt:""}),Object(l.jsx)("div",{className:$.a.likesMessage,children:e.likesCount})]})]})},re=n(43),ce=n.n(re),se=n(132),ie=n(131),oe=n(42),ue=n(72),le=Object(oe.a)(50),fe=Object(ue.a)("textarea"),je=Object(se.a)({form:"posts"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)(ie.a,{className:ce.a.textarea,name:"postElement",placeholder:"Anything new?",component:fe,validate:[oe.b,le]}),Object(l.jsx)("button",{children:"Add post"})]})})),de=function(e){var t=e.postsData.map((function(t){return Object(l.jsx)(ae,{avatar:null!==e.profile?e.profile.photos.small:null,id:t.id,message:t.message,likesCount:t.likesCount,likeThunk:e.likeThunk,unlikeThunk:e.unlikeThunk},t.id)}));return Object(l.jsx)("div",{className:ce.a.postsWrapper,children:Object(l.jsxs)("div",{className:ce.a.posts,children:[Object(l.jsxs)("div",{className:ce.a.addPostContainer,children:[null!==e.profile?Object(l.jsx)("img",{className:ce.a.avatar,src:e.profile.photos.small,alt:""}):Object(l.jsx)("img",{src:"".concat(ee.a),className:ce.a.avatar,alt:""}),Object(l.jsx)(je,{onSubmit:function(t,n){e.addPostThunk(t.postElement),n(Object(y.a)("posts"))}})]}),t]})})},pe=n(140),be=n.n(pe),he=n(57),me=n(8),Oe=n.n(me),ge=function(e){var t=Object(O.useState)(!1),n=Object(m.a)(t,2),a=n[0],r=n[1],c=Object(O.useState)(e.status),s=Object(m.a)(c,2),i=s[0],o=s[1];return Object(O.useEffect)((function(){o(e.status)}),[e.status]),Object(l.jsx)("div",{className:Oe.a.status,children:a?Object(l.jsx)("div",{children:Object(l.jsx)("input",{onChange:function(e){o(e.target.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatusThunk(i)},value:i})}):Object(l.jsx)("div",{children:Object(l.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"set status"})})})},_e=function(e){return Object(l.jsxs)("div",{className:Oe.a.contact,children:[Object(l.jsxs)("span",{children:[e.contactTitle,":"]})," ",Object(l.jsxs)("a",{href:e.contactValue,children:[" ",e.contactValue.split("//")[1]," "]})]})},xe=function(e){return Object(l.jsxs)("div",{className:Oe.a.profileData,children:[Object(l.jsxs)("div",{className:Oe.a.mainInfo,children:[Object(l.jsxs)("div",{className:Oe.a.dataItem,children:[Object(l.jsx)("span",{children:"About Me:"})," ",Object(l.jsx)("div",{children:e.profile.aboutMe})]}),Object(l.jsxs)("div",{className:Oe.a.dataItem,children:[Object(l.jsx)("span",{children:"Looking for a job:"})," ",Object(l.jsx)("div",{children:e.profile.lookingForAJob?"yes":"no"})]}),e.profile.lookingForAJob&&Object(l.jsxs)("div",{className:Oe.a.dataItem,children:[Object(l.jsx)("span",{children:"Looking for a job description:"}),"  ",Object(l.jsx)("div",{children:e.profile.lookingForAJobDescription})]})]}),Object(l.jsx)("div",{className:Oe.a.contacts,children:Object(l.jsx)("div",{className:Oe.a.dataItem,children:Object.keys(e.profile.contacts).map((function(t){return null!==e.profile.contacts[t]&&""!==e.profile.contacts[t]?Object(l.jsx)(_e,{contactTitle:t,contactValue:e.profile.contacts[t]},t):null}))})})]})},ve=function(e){return Object(l.jsxs)("div",{className:Oe.a.formContact,children:[Object(l.jsxs)("span",{children:[e.contactTitle,":"]})," ",Object(l.jsx)(ie.a,{placeholder:"Your ".concat(e.contactTitle),name:"contacts.".concat(e.contactTitle),component:"input"})," "]})},ke=Object(se.a)({form:"editProfile"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,className:Oe.a.form,children:[Object(l.jsxs)("div",{className:Oe.a.formInfo,children:[Object(l.jsxs)("div",{className:Oe.a.formItem,children:[Object(l.jsx)("span",{children:"Full name:"})," ",Object(l.jsx)(ie.a,{placeholder:"Full name",name:"fullName",component:"input"})]}),Object(l.jsxs)("div",{className:Oe.a.formItem,children:[Object(l.jsx)("span",{children:"About Me:"})," ",Object(l.jsx)(ie.a,{placeholder:"About Me",name:"aboutMe",component:"input"})]}),Object(l.jsxs)("div",{className:Oe.a.formItem,children:[Object(l.jsx)("span",{children:"Looking for a job:"})," ",Object(l.jsx)(ie.a,{type:"checkbox",name:"lookingForAJob",component:"input"})]}),Object(l.jsxs)("div",{className:Oe.a.formItem,children:[Object(l.jsx)("span",{children:"Looking for a job description:"})," ",Object(l.jsx)(ie.a,{placeholder:"Looking for a job description",name:"lookingForAJobDescription",component:"textarea"})]})]}),Object(l.jsx)("div",{className:Oe.a.formContacts,children:Object.keys(e.profile.contacts).map((function(t){return Object(l.jsx)(ve,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))}),e.error&&Object(l.jsx)("div",{className:Oe.a.error,children:e.error}),Object(l.jsx)("button",{children:"save"})]})})),Ne=function(e){var t=Object(O.useState)(!1),n=Object(m.a)(t,2),a=n[0],r=n[1];if(!e.profile)return Object(l.jsx)(he.a,{});return Object(l.jsx)("div",{className:Oe.a.info,children:Object(l.jsxs)("div",{className:Oe.a.desc,children:[Object(l.jsxs)("div",{className:Oe.a.avatar,children:[null!=e.profile.photos.small?Object(l.jsx)("img",{src:e.profile.photos.small,className:Oe.a.img,alt:"smallImage"}):Object(l.jsx)("img",{src:"".concat(ee.a),className:Oe.a.img,alt:"smallImage"}),e.isOwner?Object(l.jsx)("button",{className:Oe.a.editButton,onClick:function(){r(!0)},disabled:a,children:"Edit profile"}):Object(l.jsx)("button",{className:Oe.a.followButton,onClick:function(){e.followThunk(e.match.params.userId)},disabled:a,children:"Follow"})]}),Object(l.jsxs)("div",{className:Oe.a.info,children:[Object(l.jsxs)("div",{className:Oe.a.name__wrapper,children:[Object(l.jsx)("div",{className:Oe.a.name,children:e.profile.fullName}),Object(l.jsx)(ge,Object(C.a)({},e))]}),a?Object(l.jsx)(ke,Object(C.a)({initialValues:e.profile,onSubmit:function(t){e.saveProfileThunk(t).then((function(){r(!1)}))}},e)):Object(l.jsx)(xe,Object(C.a)({},e))]})]})})},Pe=function(e){return Object(l.jsxs)("div",{className:be.a.profile,children:[Object(l.jsx)(Ne,Object(C.a)({},e)),Object(l.jsx)(de,{postsData:e.postsData,addPostThunk:e.addPostThunk,profile:e.profile,likeThunk:e.likeThunk,unlikeThunk:e.unlikeThunk})]})},Ie=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"DoingProfileStuffFc",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)?(this.props.setProfileThunk(e),this.props.setStatusThunk(e)):this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this.DoingProfileStuffFc()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.DoingProfileStuffFc()}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(Pe,Object(C.a)(Object(C.a)({},this.props),{},{isOwner:!this.props.match.params.userId}))})}}]),n}(g.a.Component),Ce=Object(x.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId,users:e.usersPage.users,postsData:e.profilePage.postsData}}),{setProfileThunk:F,setStatusThunk:function(e){return function(t){T.b.getStatus(e).then((function(e){t(R(e))}))}},updateStatusThunk:function(e){return function(t){T.b.updateStatus(e).then((function(n){0===n.resultCode&&t(R(e))}))}},setPhotoThunk:B,saveProfileThunk:function(e){return function(){var t=Object(P.a)(N.a.mark((function t(n,a){var r,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,T.b.saveProfile(e);case 3:if(0!==(c=t.sent).resultCode){t.next=8;break}n(F(r)),t.next=10;break;case 8:return n(Object(y.b)("editProfile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},followThunk:X.b,unfollowThunk:X.h,addPostThunk:function(e){return function(t){t(z(e))}},likeThunk:function(e){return function(){var t=Object(P.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(W(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unlikeThunk:function(e){return function(){var t=Object(P.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(J(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),i.g)(Ie),ye=n(44),Te=n.n(ye),we=function(e){var t=Object(O.useState)(!1),n=Object(m.a)(t,2),a=n[0],r=n[1];return Object(l.jsx)("header",{className:Te.a.header,children:Object(l.jsxs)("div",{className:Te.a.content,children:[Object(l.jsxs)(j.b,{to:"/profile",className:Te.a.logoBlock,children:[Object(l.jsx)("img",{className:Te.a.logo,src:"http://cdn.onlinewebfonts.com/svg/img_176857.png",alt:""}),Object(l.jsx)("span",{children:"panda"})]}),Object(l.jsx)("div",{className:Te.a.loginBlock,children:e.isAuth?Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("span",{onClick:function(){r(!a)},children:e.login}),"  ",a&&Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("div",{className:Te.a.loginModeMenu,onClick:e.logoutThunk,children:"Logout"})," "]})," "]}):Object(l.jsx)(j.b,{to:"/login",children:"Sign in"})})]})})},Se=n(28),Ae=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)(we,Object(C.a)({},this.props))}}]),n}(g.a.Component),Ue=Object(_.b)((function(e){return{userId:e.auth.usersId,login:e.auth.login,email:e.auth.email,isAuth:e.auth.isAuth}}),{logoutThunk:Se.d})(Ae),Le=n(78),Ee=n.n(Le),De=n(60),Me=n.n(De),Fe=Object(ue.a)("input"),Be=Object(se.a)({form:"login"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,className:Ee.a.wrapper,children:[Object(l.jsx)(ie.a,{placeholder:"Email",name:"email",component:Fe,validate:[oe.b]}),Object(l.jsx)(ie.a,{placeholder:"Password",name:"password",component:Fe,validate:[oe.b],type:"password"}),Object(l.jsxs)("div",{className:Ee.a.rememberMe,children:[Object(l.jsx)(ie.a,{name:"rememberMe",component:"input",type:"checkbox"})," remember me"]}),Object(l.jsx)("div",{className:Me.a.errorMessage,children:e.error}),e.captchaUrl&&Object(l.jsx)("img",{src:e.captchaUrl,alt:""}),e.captchaUrl&&Object(l.jsx)(ie.a,{placeholder:"Captcha",name:"captcha",component:Fe,validate:[oe.b]}),Object(l.jsx)("button",{children:"Sign in"})]})})),Re=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{loginThunk:Se.c})((function(e){return e.isAuth?Object(l.jsx)(i.a,{to:"/profile/"}):Object(l.jsxs)("div",{className:Ee.a.login,children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsx)(Be,{captchaUrl:e.captchaUrl,onSubmit:function(t){e.loginThunk(t.email,t.password,t.rememberMe,t.captcha)}})]})})),ze="INITIALIZE",Ge={initialized:!1},He=function(){return{type:ze}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},Je=g.a.lazy((function(){return n.e(5).then(n.bind(null,303))})),Ve=g.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),Qe=g.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),Ye=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeThunk()}},{key:"render",value:function(){return this.props.initialized?Object(l.jsxs)("div",{className:u.a.wrapper,children:[Object(l.jsx)(Ue,{}),Object(l.jsxs)("div",{className:u.a.wrapper__main,children:[Object(l.jsx)(b,{}),Object(l.jsx)("div",{className:u.a.content,children:Object(l.jsx)(g.a.Suspense,{fallback:Object(l.jsx)(he.a,{}),children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/dialogs",render:function(){return Object(l.jsx)(Je,{})}}),Object(l.jsx)(i.b,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(Ce,{})}}),Object(l.jsx)(i.b,{path:"/news",render:h}),Object(l.jsx)(i.b,{path:"/music",render:f}),Object(l.jsx)(i.b,{path:"/friends",render:function(){return Object(l.jsx)(Qe,{})}}),Object(l.jsx)(i.b,{path:"/settings",render:function(){return Object(l.jsx)(q,{})}}),Object(l.jsx)(i.b,{path:"/users",render:function(){return Object(l.jsx)(Ve,{})}}),Object(l.jsx)(i.b,{path:"/login",render:function(){return Object(l.jsx)(Re,{})}}),Object(l.jsx)(i.a,{from:"/",to:"/profile"})]})})})]})]}):Object(l.jsx)(he.a,{})}}]),n}(g.a.Component),Ke=Object(x.d)(i.g,Object(_.b)((function(e){return{initialized:e.app.initialized}}),{initializeThunk:function(){return function(e){e(Object(Se.b)()).then((function(){e(He())}))}}}))(Ye),qe=n(130),Xe=n(141),Ze=n(133),$e=Object(x.c)({profilePage:Q,dialogsPage:qe.b,usersPage:X.a,auth:Se.a,form:Ze.a,app:We}),et=Object(x.e)($e,Object(x.a)(Xe.a)),tt=n(71);n.n(tt).a.render(Object(l.jsx)(_.a,{store:et,children:Object(l.jsx)(j.a,{children:Object(l.jsx)(Ke,{})})}),document.getElementById("root"))},30:function(e,t,n){e.exports={post:"Post_post__6IuCe",avatar:"Post_avatar__27yPM",message:"Post_message__lfLqA",likes:"Post_likes__37lxl",likesImage:"Post_likesImage__2NljR"}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},43:function(e,t,n){e.exports={postsWrapper:"MyPosts_postsWrapper__G0mtX",posts:"MyPosts_posts__2QxPd",addPostContainer:"MyPosts_addPostContainer__2Dn_O",avatar:"MyPosts_avatar__3hBUQ"}},44:function(e,t,n){e.exports={header:"Header_header__sCfzG",content:"Header_content__1CtLy",logoBlock:"Header_logoBlock__1evdE",logo:"Header_logo__3iC9z",loginBlock:"Header_loginBlock__yGhsJ",loginModeMenu:"Header_loginModeMenu__20xoP"}},46:function(e,t,n){"use strict";t.a=n.p+"static/media/user.f8ec10c3.jpg"},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return x})),n.d(t,"b",(function(){return v})),n.d(t,"h",(function(){return k})),n.d(t,"g",(function(){return N})),n.d(t,"f",(function(){return P})),n.d(t,"e",(function(){return I}));var a=n(10),r=n.n(a),c=n(16),s=n(50),i=n(2),o=n(13),u="FOLLOW",l="UNFOLLOW",f="SET_USERS",j="SET_CURRENT_PAGE",d="SET__FRIENDS_CURRENT_PAGE",p="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_LOADING",h="TOGGLE_IS_FOLLOWING",m="SET_PORTION_NUMBER",O="SET_FRIENDS_PORTION_NUMBER",g={users:[],pageSize:8,totalUsersCount:200,currentPage:1,isLoading:!1,followingUsers:[],friendsCurrentPage:1,friendsCurrentPortionNumber:1,currentPortionNumber:1},_=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(U(!0)),a.next=3,o.c.getUsers(e,t,n);case 3:s=a.sent,c(U(!1)),c(T(s.items)),c(A(s.totalCount));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var a=Object(c.a)(r.a.mark((function a(c){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(U(!0)),c(n?S(e):w(e)),a.next=4,o.c.getUsers(e,t,n);case 4:s=a.sent,c(U(!1)),c(T(s.items));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(L(!0,e)),t.next=3,o.c.postUsers(e);case 3:0===t.sent.resultCode&&n(C(e)),n(L(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(L(!0,e)),t.next=3,o.c.deleteUsers(e);case 3:0===t.sent.resultCode&&n(y(e)),n(L(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e,t,n,a){return function(){var s=Object(c.a)(r.a.mark((function c(s){var i;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(L(!0,e)),r.next=3,o.c.deleteUsers(e);case 3:if(0!==r.sent.resultCode){r.next=11;break}return s(y(e)),r.next=8,o.c.getUsers(t,n,a);case 8:i=r.sent,s(T(i.items)),s(A(i.totalCount));case 11:s(L(!1,e));case 12:case"end":return r.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(E(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(D(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return{type:u,userId:e}},y=function(e){return{type:l,userId:e}},T=function(e){return{type:f,users:e}},w=function(e){return{type:j,currentPage:e}},S=function(e){return{type:d,currentPage:e}},A=function(e){return{type:p,totalUsersCount:e}},U=function(e){return{type:b,isLoading:e}},L=function(e,t){return{type:h,isLoading:e,userId:t}},E=function(e){return{type:m,currentPortionNumber:e}},D=function(e){return{type:O,currentPortionNumber:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case f:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case d:return Object(i.a)(Object(i.a)({},e),{},{friendsCurrentPage:t.currentPage});case p:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case b:return Object(i.a)(Object(i.a)({},e),{},{isLoading:t.isLoading});case h:return Object(i.a)(Object(i.a)({},e),{},{followingUsers:t.isLoading?[].concat(Object(s.a)(e.followingUsers),[t.userId]):[e.followingUsers.filter((function(e){return e!==t.userId}))]});case m:return Object(i.a)(Object(i.a)({},e),{},{currentPortionNumber:t.currentPortionNumber});case O:return Object(i.a)(Object(i.a)({},e),{},{friendsCurrentPortionNumber:t.currentPortionNumber});default:return e}}},57:function(e,t,n){"use strict";n(1);var a=n(0);t.a=function(){return Object(a.jsx)("div",{children:" Loading "})}},60:function(e,t,n){e.exports={formControl:"FormControls_formControl__3Aa8D",error:"FormControls_error__3BHH1",errorMessage:"FormControls_errorMessage__3Mnx4"}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(2),r=n(137),c=n(60),s=n.n(c),i=n(0),o=["input","meta"],u=function(e){return function(t){var n=t.input,c=t.meta,u=Object(r.a)(t,o),l=c.touched&&c.error;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(l?s.a.error:" "),children:[Object(i.jsx)("div",{children:Object(i.jsx)(e,Object(a.a)(Object(a.a)({},n),u))}),l&&Object(i.jsx)("span",{children:c.error})]})}}},76:function(e,t,n){e.exports={chromeframe:"App_chromeframe__3P-CU",wrapper:"App_wrapper__11tqO",wrapper__main:"App_wrapper__main__3LFh2",content:"App_content__13BX_"}},78:function(e,t,n){e.exports={wrapper:"Login_wrapper__1se9A",rememberMe:"Login_rememberMe__1UiB3"}},8:function(e,t,n){e.exports={info:"ProfileInfo_info__1NYw7",bigImg:"ProfileInfo_bigImg__2kTqb",avatar:"ProfileInfo_avatar__3iYmh",img:"ProfileInfo_img__fObrF",editButton:"ProfileInfo_editButton__1reti",followButton:"ProfileInfo_followButton__KXuBQ",name__wrapper:"ProfileInfo_name__wrapper__3kQyF",status:"ProfileInfo_status__1CfA8",mainInfo:"ProfileInfo_mainInfo__34rVw",contacts:"ProfileInfo_contacts__MFjiI",name:"ProfileInfo_name__24Bt0",desc:"ProfileInfo_desc__5_1JT",dataItem:"ProfileInfo_dataItem__lOJMz",contact:"ProfileInfo_contact__dkfjH",form:"ProfileInfo_form__3Lxgw",formInfo:"ProfileInfo_formInfo__3FLUA",formItem:"ProfileInfo_formItem__3zNj2",formContacts:"ProfileInfo_formContacts__3UvUw",formContact:"ProfileInfo_formContact__O-A_Q",error:"ProfileInfo_error__3V0QC"}}},[[299,1,2]]]);
//# sourceMappingURL=main.37937af5.chunk.js.map