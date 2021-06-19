(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(20),o=n.n(i),r=n(11),l=(n(29),n(2)),u=n(3),p=n.p+"static/media/logo.c2821b38.svg";var d=function(e){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",src:p,alt:"\u043b\u043e\u0433\u043e"}),Object(a.jsx)("div",{className:"header__rendered-element",children:e.children})]})},h=n(22),j=c.a.createContext();var m=function(e){var t=c.a.useContext(j),n=t.id===e.curCard.owner._id,s=e.curCard.likes.some((function(e){return e._id===t.id}));return Object(a.jsxs)("li",{className:"elements__card",children:[Object(a.jsx)("img",{className:"elements__image",src:e.curCard.link,alt:e.curCard.name,onClick:function(){e.onCardClick(e.curCard)}}),Object(a.jsx)("h2",{className:"elements__title",children:e.curCard.name}),Object(a.jsxs)("div",{className:"elements__like-container",children:[Object(a.jsx)("button",{className:"elements__like-button ".concat(s&&"elements__like-button_liked"),type:"button",onClick:function(){e.onCardLike(e.curCard)}}),Object(a.jsx)("span",{className:"elements__like-number",children:e.curCard.likes.length})]}),Object(a.jsx)("button",{className:"elements__trash-button",type:"button",style:{display:n?"block":"none"},onClick:function(){e.onCardDelete(e.curCard)}})]})};var _=function(e){var t=c.a.useContext(j);return Object(a.jsxs)("main",{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar-container",children:[Object(a.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("div",{className:"profile__avatar-redaction",onClick:e.onEditAvatar})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__user-name",children:t.name}),Object(a.jsx)("button",{className:"profile__redaction-button",type:"button",onClick:e.onEditProfile}),Object(a.jsx)("p",{className:"profile__user-caption",children:t.about})]}),Object(a.jsx)("button",{className:"profile__button",type:"button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(a.jsx)(m,{curCard:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var b=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var f=function(e){return Object(a.jsx)("section",{className:"popup popup_type_image ".concat(e.cardImageState.link?"popup_opened":""),id:"image",children:Object(a.jsxs)("div",{className:"popup__image-container",children:[Object(a.jsx)("img",{className:"popup__image",src:e.cardImageState.link,alt:e.cardImageState.name}),Object(a.jsx)("h2",{className:"popup__caption",children:e.cardImageState.name}),Object(a.jsx)("button",{type:"button",className:"popup__exit-button popup__exit-button_type_image",onClick:e.onClose})]})})};var O=function(e){return Object(a.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),id:e.name,children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),Object(a.jsxs)("form",{className:"popup__form",name:"popup-form-".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(a.jsx)("button",{type:"submit",className:"popup__save-button",children:e.btnText}),Object(a.jsx)("button",{type:"button",className:"popup__exit-button",onClick:e.onClose})]})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,i=c.a.useContext(j);c.a.useEffect((function(){p(i.name),_(i.about)}),[i]);var o=c.a.useState(""),r=Object(l.a)(o,2),u=r[0],p=r[1],d=c.a.useState(""),h=Object(l.a)(d,2),m=h[0],_=h[1];return Object(a.jsx)(O,{name:"redaction",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",btnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),s({name:u,about:m})},isOpen:t,onClose:n,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{className:"popup__input",id:"user-name",type:"text",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",onChange:function(e){p(e.target.value)},value:u||""}),Object(a.jsx)("span",{className:"popup__error",id:"user-name-error"}),Object(a.jsx)("input",{className:"popup__input",id:"user-caption",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"caption",required:!0,minLength:"2",maxLength:"200",onChange:function(e){_(e.target.value)},value:m||""}),Object(a.jsx)("span",{className:"popup__error",id:"user-caption-error"})]})})};var x=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,i=c.a.useRef();return Object(a.jsx)(O,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",btnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),s(i.current.value)},isOpen:t,onClose:n,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{className:"popup__input",id:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"linkAvatar",required:!0,ref:i}),Object(a.jsx)("span",{className:"popup__error",id:"link-error"})]})})};var v=function(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,i=c.a.useState(""),o=Object(l.a)(i,2),r=o[0],u=o[1],p=c.a.useState(""),d=Object(l.a)(p,2),h=d[0],j=d[1];return Object(a.jsxs)(O,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",btnText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),s({name:r,link:h}),e.target.reset()},isOpen:t,onClose:n,children:[Object(a.jsx)("input",{className:"popup__input",id:"place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"place",required:!0,minLength:"1",maxLength:"30",onChange:function(e){u(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"place-error"}),Object(a.jsx)("input",{className:"popup__input",id:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,onChange:function(e){j(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"link-error"})]})},C=n(13),N=n(14),k=new(function(){function e(t){Object(C.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(N.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"getName",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}},{key:"patchName",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"register",value:function(e){return console.log(e),fetch("".concat(this._url,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"login",value:function(e){return fetch("".concat(this._url,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"checkToken",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._getResponseData)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"8e87a5dc-6c3c-4389-85a0-676a9403f4b5","Content-Type":"application/json"}});var y=function(e){var t=c.a.useState({}),n=Object(l.a)(t,2),s=n[0],i=n[1],o=c.a.useState(!1),r=Object(l.a)(o,2),u=r[0],p=r[1],m=c.a.useState(!1),C=Object(l.a)(m,2),N=C[0],y=C[1],S=c.a.useState(!1),D=Object(l.a)(S,2),P=D[0],T=D[1],L=c.a.useState({}),E=Object(l.a)(L,2),R=E[0],w=E[1],I=c.a.useState([]),U=Object(l.a)(I,2),A=U[0],q=U[1];function J(){p(!1),y(!1),T(!1),w({})}return console.log(e.email),c.a.useEffect((function(){Promise.all([k.getInitialCards(),k.getName()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];q(n),i({name:a.name,about:a.about,avatar:a.avatar,id:a._id})})).catch((function(e){console.log(e.message)}))}),[]),Object(a.jsxs)(j.Provider,{value:s,children:[Object(a.jsxs)(d,{children:[Object(a.jsx)("p",{className:"header__caption header__caption_type_email",children:e.email}),Object(a.jsx)("a",{className:"header__caption header__caption_type_logout",href:"/sign-in",onClick:e.onLogOut,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(a.jsx)(_,{onEditProfile:function(){p(!u)},onAddPlace:function(){y(!N)},onEditAvatar:function(){T(!P)},onCardClick:function(e){w({link:e.link,name:e.name})},onClose:J,cards:A,onCardLike:function(e){e.likes.some((function(e){return e._id===s.id}))?k.dislikeCard(e._id).then((function(e){return t(e)})):k.likeCard(e._id).then((function(e){return t(e)}));var t=function(t){var n=A.map((function(n){return n._id===e._id?t:n}));q(n)}},onCardDelete:function(e){k.deleteCard(e._id).then((function(t){var n=A.filter((function(t){return e._id!==t._id}));q(n)}))}}),Object(a.jsx)(g,{isOpen:u,onClose:J,onUpdateUser:function(e){k.patchName(e).then((function(e){i({name:e.name,about:e.about,avatar:e.avatar,id:e._id}),J()}))}}),Object(a.jsx)(f,{onClose:J,cardImageState:R}),Object(a.jsx)(O,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",btnText:"\u0434\u0430",isOpen:!1,onClose:J,children:null}),Object(a.jsx)(x,{isOpen:P,onClose:J,onUpdateUser:function(e){k.patchAvatar(e).then((function(e){i({name:e.name,about:e.about,avatar:e.avatar,id:e._id}),J()}))}}),Object(a.jsx)(v,{isOpen:N,onClose:J,onAddPlace:function(e){k.postCard(e).then((function(e){q([e].concat(Object(h.a)(A))),J()}))}}),Object(a.jsx)(b,{})]})},S=n(23);var D=function(e){return Object(a.jsx)(u.b,{children:function(){return e.loggedIn?Object(a.jsx)(e.component,Object(S.a)({},e)):Object(a.jsx)(u.a,{to:"/sign-in"})}})};var P=function(e){var t=c.a.useState({value:""}),n=Object(l.a)(t,2),s=n[0],i=n[1],o=c.a.useState({value:""}),r=Object(l.a)(o,2),u=r[0],p=r[1];return Object(a.jsxs)("section",{className:"sing",children:[Object(a.jsx)("h1",{className:"sing__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"sing__form",onSubmit:function(t){t.preventDefault(),e.onLogin({email:s.value,password:u.value})},children:[Object(a.jsx)("input",{className:"sing__input",type:"email",required:!0,placeholder:"Email",value:s.value,onChange:function(e){i({value:e.target.value})}}),Object(a.jsx)("input",{className:"sing__input",type:"password",required:!0,minLength:"8",maxLength:"30",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:u.value,onChange:function(e){p({value:e.target.value})}}),Object(a.jsx)("button",{className:"sing__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var T=function(e){var t=c.a.useState({value:""}),n=Object(l.a)(t,2),s=n[0],i=n[1],o=c.a.useState({value:""}),r=Object(l.a)(o,2),u=r[0],p=r[1];return Object(a.jsxs)("section",{className:"sing",children:[Object(a.jsx)("h1",{className:"sing__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"sing__form",onSubmit:function(t){t.preventDefault(),e.onRegistor({email:s.value,password:u.value})},children:[Object(a.jsx)("input",{className:"sing__input",type:"email",required:!0,placeholder:"Email",value:s.value,onChange:function(e){i({value:e.target.value})}}),Object(a.jsx)("input",{className:"sing__input",type:"password",required:!0,minLength:"8",maxLength:"30",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:u.value,onChange:function(e){p({value:e.target.value})}}),Object(a.jsx)("button",{className:"sing__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)("a",{className:"sing__caption",href:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})},L=n.p+"static/media/Union.7c6a020b.svg",E=n.p+"static/media/icon.1b6082f8.svg";var R=function(e){return Object(a.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container popup__container_type_failed-sign-in",children:[Object(a.jsx)("img",{className:"popup__icon",src:e.failed?L:E,alt:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(a.jsx)("h1",{className:"popup__title",children:e.failed?"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Object(a.jsx)("button",{type:"button",className:"popup__exit-button popup__exit-button_type_failed-sign-in",onClick:e.onClose})]})})},w=new(function(){function e(t){Object(C.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(N.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"register",value:function(e){return console.log(e),fetch("".concat(this._url,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"login",value:function(e){return fetch("".concat(this._url,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"checkToken",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._getResponseData)}}]),e}())({baseUrl:"https://auth.nomoreparties.co",headers:{"Content-Type":"application/json"}});var I=function(e){var t=Object(u.g)(),n=c.a.useState(!1),s=Object(l.a)(n,2),i=s[0],o=s[1],r=c.a.useState({openPopup:!1,failed:!0}),p=Object(l.a)(r,2),h=p[0],j=p[1],m=c.a.useState(""),_=Object(l.a)(m,2),b=_[0],f=_[1];function O(){j({openPopup:!1,failed:h.failed})}return c.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&w.checkToken(e).then((function(e){o(!0),f(e.email),t.push("/")})).catch((function(e){console.log(e.message)}))}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(D,{exact:!0,path:"/",component:y,loggedIn:i,email:b,onLogOut:function(){o(!1),localStorage.removeItem("jwt")}}),Object(a.jsxs)(u.b,{exact:!0,path:"/sign-in",children:[Object(a.jsx)(d,{children:Object(a.jsx)("a",{className:"header__caption",href:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(P,{onLogin:function(e){w.login(e).then((function(n){localStorage.setItem("jwt",n.token),o(!0),f(e.email),t.push("/")})).catch((function(e){j({openPopup:!0,failed:!0}),console.log(e.message)}))}}),Object(a.jsx)(R,{isOpen:h.openPopup,failed:h.failed,onClose:O})]}),Object(a.jsxs)(u.b,{exact:!0,path:"/sign-up",children:[Object(a.jsx)(d,{children:Object(a.jsx)("a",{className:"header__caption",href:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsx)(T,{onRegistor:function(e){w.register(e).then((function(e){j({openPopup:!0,failed:!1}),t.push("/sign-in")})).catch((function(e){j({openPopup:!0,failed:!0}),console.log(e.message)}))}}),Object(a.jsx)(R,{isOpen:h.openPopup,failed:h.failed,onClose:O})]})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(I,{})})}),document.getElementById("root")),U()}},[[35,1,2]]]);
//# sourceMappingURL=main.07c439d3.chunk.js.map