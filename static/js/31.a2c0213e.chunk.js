(this["webpackJsonp@tripfinder/hotel-cra"]=this["webpackJsonp@tripfinder/hotel-cra"]||[]).push([[31],{1495:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return g}));t(190);var i,a=t(93),r=t(1),o=t.n(r),d=(t(1032),t(1043)),p=(t(1035),t(1042)),c=t(995),x=t(27);const l=t(19).d.div(i||(i=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  .image-drag-area {\n    width: 125px;\n    height: 125px;\n    border: 1px dashed #e6e6e6;\n    border-radius: 3px;\n    font-size: 38px;\n    color: #e6e6e6;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .ant-upload-text {\n    font-size: 15px;\n    font-weight: 700;\n    color: #fff;\n    background-color: #008489;\n    border-radius: 3px;\n    padding: 8px 15px;\n    margin-left: 30px;\n  }\n"])));var s=t(2);class h extends o.a.Component{constructor(){super(...arguments),this.state={previewVisible:!1,previewImage:"",fileList:[{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]},this.handleCancel=()=>this.setState({previewVisible:!1}),this.handlePreview=n=>{this.setState({previewImage:n.url||n.thumbUrl,previewVisible:!0})},this.handleChange=n=>{let{fileList:e}=n;return this.setState({fileList:e})}}render(){const{previewVisible:n,previewImage:e,fileList:t}=this.state,i=p.a.Dragger,a=Object(s.jsxs)(l,{children:[Object(s.jsx)("div",{className:"image-drag-area",children:Object(s.jsx)(c.b,{})}),Object(s.jsx)("div",{className:"ant-upload-text",children:"Upload Photos"})]});return Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)(i,{action:"//jsonplaceholder.typicode.com/posts/",listType:"picture-card",fileList:t,onPreview:this.handlePreview,onChange:this.handleChange,className:"image_uploader",children:t.length>=4?null:a}),Object(s.jsx)(d.a,{visible:n,footer:null,onCancel:this.handleCancel,children:Object(s.jsx)("img",{alt:"example",style:{width:"100%"},src:e})})]})}}var b=t(926),m=t(981);function g(){return Object(s.jsxs)(m.d,{children:[Object(s.jsx)(m.f,{children:"Profile Images"}),Object(s.jsx)(b.a,{content:"Cover Image",as:"h4"}),Object(s.jsx)(h,{}),Object(s.jsx)(b.a,{content:"Profile Image",as:"h4"}),Object(s.jsx)(h,{}),Object(s.jsx)("div",{className:"submit-container",children:Object(s.jsx)(a.a,{htmlType:"submit",type:"primary",children:"Save Changes"})})]})}},926:function(n,e,t){"use strict";t(1);var i=t(19),a=t(15),r=t(104),o=t(2);const d=Object(i.d)("p")(r.a,a.k,a.m,a.x,a.q,a.p,Object(r.b)("Heading")),p=n=>{let{content:e,...t}=n;return Object(o.jsx)(d,{...t,children:e})};p.defaultProps={as:"h2",mt:0,mb:0,fontWeight:700},e.a=p},981:function(n,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"h",(function(){return f})),t.d(e,"b",(function(){return u})),t.d(e,"e",(function(){return j})),t.d(e,"c",(function(){return w})),t.d(e,"g",(function(){return O})),t.d(e,"f",(function(){return v})),t.d(e,"d",(function(){return y}));var i,a,r,o,d,p,c,x,l,s=t(27),h=t(19),b=t(4);const m=h.d.div(i||(i=Object(s.a)(["\n  padding: 60px 0;\n  @media (max-width: 767px) {\n    padding: 30px 0;\n  }\n"]))),g=h.d.aside(a||(a=Object(s.a)(["\n  border-radius: 6px;\n  background-color: ",";\n  box-shadow: 0 3px 6px ",";\n  overflow: hidden;\n  @media (max-width: 767px) {\n    box-shadow: none;\n    margin-bottom: 0;\n  }\n\n  .ant-menu {\n    padding: 27px 0 20px;\n    border: 0;\n    @media (max-width: 767px) {\n      display: flex;\n      flex-wrap: nowrap;\n      overflow-y: auto;\n      padding: 20px 0 30px;\n    }\n    li {\n      margin: 22px 0;\n      height: 26px;\n      line-height: 26px;\n      padding: 0 30px !important;\n      @media (min-width: 1441px) {\n        padding: 0 60px !important;\n      }\n      @media (max-width: 767px) {\n        width: auto;\n        height: inherit;\n        line-height: initial;\n        padding: 0 15px !important;\n        margin: 0 !important;\n        flex-shrink: 0;\n        &:first-child {\n          padding-left: 0 !important;\n        }\n        &::after {\n          display: none;\n        }\n      }\n      &.ant-menu-item-selected {\n        background-color: transparent;\n        &::after {\n          left: 0;\n          right: auto;\n          border-color: ",";\n        }\n        a {\n          color: ",";\n          font-weight: 700;\n        }\n      }\n      a {\n        color: ",";\n        font-size: 15px;\n        transition: 0.3s ease;\n        @media (max-width: 767px) {\n          padding-bottom: 8px;\n          border-bottom: 2px solid transparent;\n          &.active {\n            border-bottom-color: ",";\n          }\n        }\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n  }\n"])),Object(b.a)("color.1","#ffffff"),Object(b.a)("boxShadow.1","rgba(26, 68, 116, 0.16)"),Object(b.a)("primary.0","#008489"),Object(b.a)("primary.0","#008489"),Object(b.a)("text.0","#2C2C2C"),Object(b.a)("primary.0","#008489"),Object(b.a)("primary.0","#008489")),f=h.d.div(r||(r=Object(s.a)(["\n  overflow: hidden;\n  @media (max-width: 767px) {\n    height: 67px;\n    margin-bottom: 8px;\n  }\n"]))),u=h.d.div(o||(o=Object(s.a)(["\n  background-color: ",";\n  padding: 45px 30px 30px;\n  @media (min-width: 1441px) {\n    padding: 60px 60px 30px;\n  }\n  @media (max-width: 767px) {\n    display: flex;\n    align-items: center;\n    padding: 32px 30px;\n  }\n  .ant-avatar {\n    width: 90px;\n    height: 90px;\n    margin-bottom: 25px;\n    @media (max-width: 767px) {\n      width: 80px;\n      height: 80px;\n      margin-bottom: 0;\n      margin-right: 20px;\n      flex-shrink: 0;\n    }\n    @media (max-width: 320px) {\n      width: 65px;\n      height: 65px;\n    }\n  }\n  a {\n    color: ",";\n    font-size: 13px;\n    line-height: 16px;\n    &:hover,\n    &:focus {\n      outline: 0;\n      box-shadow: none;\n      text-decoration: none;\n    }\n  }\n"])),Object(b.a)("color.2","#F7F7F7"),Object(b.a)("text.0","#2C2C2C")),j=h.d.div(d||(d=Object(s.a)([""]))),w=h.d.h3(p||(p=Object(s.a)(["\n  color: ",";\n  font-size: 17px;\n  line-height: 21px;\n  font-weight: 700;\n  margin-bottom: 4px;\n"])),Object(b.a)("text.0","#2C2C2C")),O=h.d.div(c||(c=Object(s.a)(["\n  padding: 30px;\n  border-radius: 6px;\n  border: 1px solid ",";\n  background-color: ",";\n  overflow: hidden;\n  @media (min-width: 1441px) {\n    padding: 60px;\n  }\n  @media (max-width: 767px) {\n    padding: 0;\n    border-radius: 0;\n    border: 0;\n\n    h2 {\n      display: none;\n    }\n\n    form {\n      padding-bottom: 50px;\n    }\n  }\n\n  .submit-container {\n    display: flex;\n    flex-direction: row-reverse;\n    margin-top: 30px;\n    @media (max-width: 767px) {\n      width: 100%;\n      padding: 22px 30px;\n      flex-direction: row;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n      background-color: ",";\n      border-top: 1px solid ",";\n    }\n    > button[type='submit'] {\n      border-radius: 3px;\n      height: 47px;\n      border-color: ",";\n      background-color: ",";\n      font-size: 15px;\n      font-weight: 700;\n      text-transform: capitalize;\n      padding-left: 28px;\n      padding-right: 28px;\n      line-height: 1;\n      &::after {\n        content: none;\n      }\n    }\n  }\n"])),Object(b.a)("border.3","#E6E6E6"),Object(b.a)("color.1","#ffffff"),Object(b.a)("color.1","#ffffff"),Object(b.a)("border.3","#E6E6E6"),Object(b.a)("primary.0","#008489"),Object(b.a)("primary.0","#008489")),v=h.d.h2(x||(x=Object(s.a)(["\n  color: ",";\n  font-size: 25px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 27px;\n  @media (min-width: 1441px) {\n    margin-bottom: 40px;\n  }\n  @media (max-width: 1200px) {\n    font-size: 22px;\n  }\n"])),Object(b.a)("text.0","#2C2C2C")),y=h.d.div(l||(l=Object(s.a)(["\n  @media (max-width: 767px) {\n    padding-bottom: 50px;\n  }\n  h4 {\n    font-size: 15px;\n    font-weight: 700;\n    line-height: 18px;\n    margin-bottom: 20px;\n  }\n  .image_uploader {\n    display: block;\n    overflow: hidden;\n    margin-bottom: 30px;\n  }\n  .ant-upload.ant-upload-drag {\n    border-radius: 3px;\n    background-color: ",";\n    border: 1px solid ",";\n    &:not(.ant-upload-disabled):hover {\n      border-color: ",";\n    }\n    .ant-upload.ant-upload-btn {\n      padding: 56px 0;\n      @media (max-width: 767px) {\n        padding: 30px 0;\n      }\n      .ant-upload-drag-container {\n        > div {\n          flex-direction: column;\n          justify-content: center;\n          .ant-upload-text {\n            padding: 0;\n            margin: 5px 0 0;\n            text-decoration: underline;\n            background-color: transparent;\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .ant-upload-list {\n    &.ant-upload-list-picture-card {\n      margin-top: 20px;\n      .ant-upload-list-item {\n        padding: 5px;\n        border-radius: 3px;\n        border-color: ",";\n      }\n    }\n  }\n"])),Object(b.a)("color.2","#F7F7F7"),Object(b.a)("border.0","#EBEBEB"),Object(b.a)("border.0","#EBEBEB"),Object(b.a)("primary.0","#008489"),Object(b.a)("border.3","#E6E6E6"));e.i=m}}]);
//# sourceMappingURL=31.a2c0213e.chunk.js.map