(this["webpackJsonp@tripfinder/hotel-cra"]=this["webpackJsonp@tripfinder/hotel-cra"]||[]).push([[22],{1030:function(n,e,t){},1368:function(n,e,t){},1489:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return G}));t(948);var a=t(950),r=(t(949),t(951)),i=(t(103),t(1368),t(993),t(7)),o=t(6),c=t(122),d=t(39),p=t(1),l=t(5),s=t.n(l),x=t(117),f=t(72),m=t(262),b=t(85),u=t(1120);var h=function(){var n=Object(p.useState)({}),e=Object(d.a)(n,2),t=e[0],a=e[1];return Object(p.useEffect)((function(){var n=u.a.subscribe((function(n){a(n)}));return function(){return u.a.unsubscribe(n)}}),[]),t},g=p.createContext("default"),j=function(n){var e=n.children,t=n.size;return p.createElement(g.Consumer,null,(function(n){return p.createElement(g.Provider,{value:t||n},e)}))},O=g,v=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t},w=function(n,e){var t,a,r=p.useContext(O),l=p.useState(1),g=Object(d.a)(l,2),j=g[0],w=g[1],y=p.useState(!1),E=Object(d.a)(y,2),C=E[0],z=E[1],k=p.useState(!0),P=Object(d.a)(k,2),S=P[0],N=P[1],F=p.useRef(),B=p.useRef(),R=Object(f.a)(e,F),A=p.useContext(m.b).getPrefixCls,I=function(){if(B.current&&F.current){var e=B.current.offsetWidth,t=F.current.offsetWidth;if(0!==e&&0!==t){var a=n.gap,r=void 0===a?4:a;2*r<t&&w(t-2*r<e?(t-2*r)/e:1)}}};p.useEffect((function(){z(!0)}),[]),p.useEffect((function(){N(!0),w(1)}),[n.src]),p.useEffect((function(){I()}),[n.gap]);var W=n.prefixCls,H=n.shape,D=n.size,G=n.src,J=n.srcSet,K=n.icon,T=n.className,V=n.alt,q=n.draggable,L=n.children,M=n.crossOrigin,X=v(n,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),_="default"===D?r:D,Q=h(),U=p.useMemo((function(){if("object"!==Object(c.a)(_))return{};var n=u.b.find((function(n){return Q[n]})),e=_[n];return e?{width:e,height:e,lineHeight:"".concat(e,"px"),fontSize:K?e/2:18}:{}}),[Q,_]);Object(b.a)(!("string"===typeof K&&K.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(K,"` at https://ant.design/components/icon"));var Y,Z=A("avatar",W),$=s()((t={},Object(o.a)(t,"".concat(Z,"-lg"),"large"===_),Object(o.a)(t,"".concat(Z,"-sm"),"small"===_),t)),nn=p.isValidElement(G),en=s()(Z,$,(a={},Object(o.a)(a,"".concat(Z,"-").concat(H),!!H),Object(o.a)(a,"".concat(Z,"-image"),nn||G&&S),Object(o.a)(a,"".concat(Z,"-icon"),!!K),a),T),tn="number"===typeof _?{width:_,height:_,lineHeight:"".concat(_,"px"),fontSize:K?_/2:18}:{};if("string"===typeof G&&S)Y=p.createElement("img",{src:G,draggable:q,srcSet:J,onError:function(){var e=n.onError;!1!==(e?e():void 0)&&N(!1)},alt:V,crossOrigin:M});else if(nn)Y=G;else if(K)Y=K;else if(C||1!==j){var an="scale(".concat(j,") translateX(-50%)"),rn={msTransform:an,WebkitTransform:an,transform:an},on="number"===typeof _?{lineHeight:"".concat(_,"px")}:{};Y=p.createElement(x.a,{onResize:I},p.createElement("span",{className:"".concat(Z,"-string"),ref:function(n){B.current=n},style:Object(i.a)(Object(i.a)({},on),rn)},L))}else Y=p.createElement("span",{className:"".concat(Z,"-string"),style:{opacity:0},ref:function(n){B.current=n}},L);return delete X.onError,delete X.gap,p.createElement("span",Object(i.a)({},X,{style:Object(i.a)(Object(i.a)(Object(i.a)({},tn),U),X.style),className:en,ref:R}),Y)},y=p.forwardRef(w);y.displayName="Avatar",y.defaultProps={shape:"circle",size:"default"};var E=y,C=t(150),z=t(29),k=t(996),P=function(n){var e=p.useContext(m.b),t=e.getPrefixCls,a=e.direction,r=n.prefixCls,i=n.className,c=void 0===i?"":i,d=n.maxCount,l=n.maxStyle,x=n.size,f=t("avatar-group",r),b=s()(f,Object(o.a)({},"".concat(f,"-rtl"),"rtl"===a),c),u=n.children,h=n.maxPopoverPlacement,g=void 0===h?"top":h,O=Object(C.a)(u).map((function(n,e){return Object(z.a)(n,{key:"avatar-key-".concat(e)})})),v=O.length;if(d&&d<v){var w=O.slice(0,d),y=O.slice(d,v);return w.push(p.createElement(k.a,{key:"avatar-popover-key",content:y,trigger:"hover",placement:g,overlayClassName:"".concat(f,"-popover")},p.createElement(E,{style:l},"+".concat(v-d)))),p.createElement(j,{size:x},p.createElement("div",{className:b,style:n.style},w))}return p.createElement(j,{size:x},p.createElement("div",{className:b,style:n.style},O))},S=E;S.Group=P;var N=S,F=(t(121),t(26)),B=t(25),R=t(17),A=t(961),I=t(9),W=t(981),H=t(2);function D(){return Object(H.jsx)(W.h,{children:Object(H.jsxs)(F.a,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",children:[Object(H.jsx)(F.a.Item,{children:Object(H.jsx)(B.c,{to:I.b,children:"Edit Profile"})},"1"),Object(H.jsx)(F.a.Item,{children:Object(H.jsx)(B.c,{to:I.c,children:"Change Photos"})},"2"),Object(H.jsx)(F.a.Item,{children:Object(H.jsx)(B.c,{to:I.d,children:"Change Password"})},"3")]})})}function G(){return Object(H.jsx)(W.i,{children:Object(H.jsx)(A.a,{fullWidth:!0,children:Object(H.jsxs)(a.a,{gutter:30,children:[Object(H.jsx)(r.a,{md:9,lg:6,children:Object(H.jsxs)(W.a,{children:[Object(H.jsxs)(W.b,{children:[Object(H.jsx)(N,{src:"http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png",alt:"avatar"}),Object(H.jsxs)(W.e,{children:[Object(H.jsx)(W.c,{children:"Aziz Acharki Ahmedh"}),Object(H.jsx)(B.b,{to:I.g,children:"View profile"})]})]}),Object(H.jsx)(D,{})]})}),Object(H.jsx)(r.a,{md:15,lg:18,children:Object(H.jsx)(W.g,{children:Object(H.jsx)(R.b,{})})})]})})})}},961:function(n,e,t){"use strict";var a,r,i,o,c,d=t(27),p=t(19);const l=p.d.div(a||(a=Object(d.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  ",";\n  ",";\n\n  ","\n\n  @media (min-width: 768px) {\n    max-width: 750px;\n    width: 100%;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 970px;\n    width: 100%;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1170px;\n    width: 100%;\n  }\n"])),(n=>n.fullWidth&&Object(p.c)(r||(r=Object(d.a)(["\n      width: 100%;\n      max-width: none !important;\n    "])))),(n=>n.noGutter&&Object(p.c)(i||(i=Object(d.a)(["\n        padding-left: 0;\n        padding-right: 0;\n      "])))||Object(p.c)(o||(o=Object(d.a)(["\n      padding-left: 30px;\n      padding-right: 30px;\n\n      @media (max-width: 480px) {\n        padding-left: 25px;\n        padding-right: 25px;\n      }\n    "])))),(n=>n.fluid&&Object(p.c)(c||(c=Object(d.a)(["\n      width: 100% !important;\n      max-width: 1920px !important;\n      @media (min-width: 1441px) {\n        padding-left: 75px;\n        padding-right: 75px;\n      }\n    "])))));e.a=l},981:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"h",(function(){return h})),t.d(e,"b",(function(){return g})),t.d(e,"e",(function(){return j})),t.d(e,"c",(function(){return O})),t.d(e,"g",(function(){return v})),t.d(e,"f",(function(){return w})),t.d(e,"d",(function(){return y}));var a,r,i,o,c,d,p,l,s,x=t(27),f=t(19),m=t(4);const b=f.d.div(a||(a=Object(x.a)(["\n  padding: 60px 0;\n  @media (max-width: 767px) {\n    padding: 30px 0;\n  }\n"]))),u=f.d.aside(r||(r=Object(x.a)(["\n  border-radius: 6px;\n  background-color: ",";\n  box-shadow: 0 3px 6px ",";\n  overflow: hidden;\n  @media (max-width: 767px) {\n    box-shadow: none;\n    margin-bottom: 0;\n  }\n\n  .ant-menu {\n    padding: 27px 0 20px;\n    border: 0;\n    @media (max-width: 767px) {\n      display: flex;\n      flex-wrap: nowrap;\n      overflow-y: auto;\n      padding: 20px 0 30px;\n    }\n    li {\n      margin: 22px 0;\n      height: 26px;\n      line-height: 26px;\n      padding: 0 30px !important;\n      @media (min-width: 1441px) {\n        padding: 0 60px !important;\n      }\n      @media (max-width: 767px) {\n        width: auto;\n        height: inherit;\n        line-height: initial;\n        padding: 0 15px !important;\n        margin: 0 !important;\n        flex-shrink: 0;\n        &:first-child {\n          padding-left: 0 !important;\n        }\n        &::after {\n          display: none;\n        }\n      }\n      &.ant-menu-item-selected {\n        background-color: transparent;\n        &::after {\n          left: 0;\n          right: auto;\n          border-color: ",";\n        }\n        a {\n          color: ",";\n          font-weight: 700;\n        }\n      }\n      a {\n        color: ",";\n        font-size: 15px;\n        transition: 0.3s ease;\n        @media (max-width: 767px) {\n          padding-bottom: 8px;\n          border-bottom: 2px solid transparent;\n          &.active {\n            border-bottom-color: ",";\n          }\n        }\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n  }\n"])),Object(m.a)("color.1","#ffffff"),Object(m.a)("boxShadow.1","rgba(26, 68, 116, 0.16)"),Object(m.a)("primary.0","#008489"),Object(m.a)("primary.0","#008489"),Object(m.a)("text.0","#2C2C2C"),Object(m.a)("primary.0","#008489"),Object(m.a)("primary.0","#008489")),h=f.d.div(i||(i=Object(x.a)(["\n  overflow: hidden;\n  @media (max-width: 767px) {\n    height: 67px;\n    margin-bottom: 8px;\n  }\n"]))),g=f.d.div(o||(o=Object(x.a)(["\n  background-color: ",";\n  padding: 45px 30px 30px;\n  @media (min-width: 1441px) {\n    padding: 60px 60px 30px;\n  }\n  @media (max-width: 767px) {\n    display: flex;\n    align-items: center;\n    padding: 32px 30px;\n  }\n  .ant-avatar {\n    width: 90px;\n    height: 90px;\n    margin-bottom: 25px;\n    @media (max-width: 767px) {\n      width: 80px;\n      height: 80px;\n      margin-bottom: 0;\n      margin-right: 20px;\n      flex-shrink: 0;\n    }\n    @media (max-width: 320px) {\n      width: 65px;\n      height: 65px;\n    }\n  }\n  a {\n    color: ",";\n    font-size: 13px;\n    line-height: 16px;\n    &:hover,\n    &:focus {\n      outline: 0;\n      box-shadow: none;\n      text-decoration: none;\n    }\n  }\n"])),Object(m.a)("color.2","#F7F7F7"),Object(m.a)("text.0","#2C2C2C")),j=f.d.div(c||(c=Object(x.a)([""]))),O=f.d.h3(d||(d=Object(x.a)(["\n  color: ",";\n  font-size: 17px;\n  line-height: 21px;\n  font-weight: 700;\n  margin-bottom: 4px;\n"])),Object(m.a)("text.0","#2C2C2C")),v=f.d.div(p||(p=Object(x.a)(["\n  padding: 30px;\n  border-radius: 6px;\n  border: 1px solid ",";\n  background-color: ",";\n  overflow: hidden;\n  @media (min-width: 1441px) {\n    padding: 60px;\n  }\n  @media (max-width: 767px) {\n    padding: 0;\n    border-radius: 0;\n    border: 0;\n\n    h2 {\n      display: none;\n    }\n\n    form {\n      padding-bottom: 50px;\n    }\n  }\n\n  .submit-container {\n    display: flex;\n    flex-direction: row-reverse;\n    margin-top: 30px;\n    @media (max-width: 767px) {\n      width: 100%;\n      padding: 22px 30px;\n      flex-direction: row;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n      background-color: ",";\n      border-top: 1px solid ",";\n    }\n    > button[type='submit'] {\n      border-radius: 3px;\n      height: 47px;\n      border-color: ",";\n      background-color: ",";\n      font-size: 15px;\n      font-weight: 700;\n      text-transform: capitalize;\n      padding-left: 28px;\n      padding-right: 28px;\n      line-height: 1;\n      &::after {\n        content: none;\n      }\n    }\n  }\n"])),Object(m.a)("border.3","#E6E6E6"),Object(m.a)("color.1","#ffffff"),Object(m.a)("color.1","#ffffff"),Object(m.a)("border.3","#E6E6E6"),Object(m.a)("primary.0","#008489"),Object(m.a)("primary.0","#008489")),w=f.d.h2(l||(l=Object(x.a)(["\n  color: ",";\n  font-size: 25px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 27px;\n  @media (min-width: 1441px) {\n    margin-bottom: 40px;\n  }\n  @media (max-width: 1200px) {\n    font-size: 22px;\n  }\n"])),Object(m.a)("text.0","#2C2C2C")),y=f.d.div(s||(s=Object(x.a)(["\n  @media (max-width: 767px) {\n    padding-bottom: 50px;\n  }\n  h4 {\n    font-size: 15px;\n    font-weight: 700;\n    line-height: 18px;\n    margin-bottom: 20px;\n  }\n  .image_uploader {\n    display: block;\n    overflow: hidden;\n    margin-bottom: 30px;\n  }\n  .ant-upload.ant-upload-drag {\n    border-radius: 3px;\n    background-color: ",";\n    border: 1px solid ",";\n    &:not(.ant-upload-disabled):hover {\n      border-color: ",";\n    }\n    .ant-upload.ant-upload-btn {\n      padding: 56px 0;\n      @media (max-width: 767px) {\n        padding: 30px 0;\n      }\n      .ant-upload-drag-container {\n        > div {\n          flex-direction: column;\n          justify-content: center;\n          .ant-upload-text {\n            padding: 0;\n            margin: 5px 0 0;\n            text-decoration: underline;\n            background-color: transparent;\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .ant-upload-list {\n    &.ant-upload-list-picture-card {\n      margin-top: 20px;\n      .ant-upload-list-item {\n        padding: 5px;\n        border-radius: 3px;\n        border-color: ",";\n      }\n    }\n  }\n"])),Object(m.a)("color.2","#F7F7F7"),Object(m.a)("border.0","#EBEBEB"),Object(m.a)("border.0","#EBEBEB"),Object(m.a)("primary.0","#008489"),Object(m.a)("border.3","#E6E6E6"));e.i=b},993:function(n,e,t){"use strict";t(103),t(1030)},996:function(n,e,t){"use strict";var a=t(7),r=t(1),i=t(257),o=t(262),c=function(n){return n?"function"===typeof n?n():n:null},d=t(147),p=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t},l=r.forwardRef((function(n,e){var t=n.prefixCls,l=n.title,s=n.content,x=p(n,["prefixCls","title","content"]),f=r.useContext(o.b).getPrefixCls,m=f("popover",t),b=f();return r.createElement(i.a,Object(a.a)({},x,{prefixCls:m,ref:e,overlay:function(n){return r.createElement(r.Fragment,null,l&&r.createElement("div",{className:"".concat(n,"-title")},c(l)),r.createElement("div",{className:"".concat(n,"-inner-content")},c(s)))}(m),transitionName:Object(d.b)(b,"zoom-big",x.transitionName)}))}));l.displayName="Popover",l.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};e.a=l}}]);
//# sourceMappingURL=22.f53ceb1d.chunk.js.map