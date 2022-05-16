(this["webpackJsonp@tripfinder/hotel-cra"]=this["webpackJsonp@tripfinder/hotel-cra"]||[]).push([[25],{1121:function(t,n,e){"use strict";var r=e(984),i=e.n(r);n.a=async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";const r=i.a.create({baseURL:"https://api.premiervacations.io/",mode:"no-cors",headers:{"Content-Type":"application/json"}});let a={};return"GET"==e?a=await r.get(t,n):"POST"==e&&(a=await r.post(t,n)),a}},1491:function(t,n,e){"use strict";e.r(n);var r,i,a,c,o,s,l,x,d,h,p=e(1),b=(e(190),e(93),e(962)),j=(e(253),e(254),e(932),e(957)),g=e(999),m=e.n(g),u=(e(1e3),e(27)),O=e(19),f=e(4);const w=O.d.div(r||(r=Object(u.a)(["\n  position: relative;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 30px;\n\n  @media (max-width: 480px) {\n    margin-bottom: 20px;\n  }\n\n  &.has_btn {\n    .button_group {\n      @media (min-width: 481px) {\n        position: absolute;\n        top: 5px;\n        padding-top: 3px;\n      }\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 6px 12px ",";\n\n    .content_wrapper {\n      border-color: transparent;\n    }\n\n    &.has_btn {\n      .meta_wrapper {\n        .rating {\n          @media (min-width: 481px) {\n            opacity: 0;\n            visibility: hidden;\n          }\n        }\n      }\n\n      @media (min-width: 481px) {\n        .button_group {\n          top: 19px;\n          opacity: 1;\n          visibility: visible;\n        }\n      }\n    }\n\n    .react-multiple-carousel__arrow {\n      opacity: 1;\n      visibility: visible;\n    }\n\n    .react-multi-carousel-dot-list {\n      bottom: 0;\n    }\n  }\n"])),Object(f.a)("boxShadow.2","rgba(0, 0, 0, 0.16)")),y=O.d.div(i||(i=Object(u.a)(["\n  > img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  .react-multi-carousel-list {\n    min-height: 150px;\n    background-color: #e9e8ec;\n  }\n\n  .react-multi-carousel-item {\n    height: 170px;\n  }\n\n  .react-multiple-carousel__arrow {\n    top: 0;\n    width: 22%;\n    height: 100%;\n    border-radius: 0;\n    padding: 0;\n    opacity: 0;\n    visibility: hidden;\n    z-index: 1;\n\n    &::before {\n      font-weight: 700;\n    }\n  }\n\n  .react-multiple-carousel__arrow--left {\n    left: 0;\n    background: linear-gradient(\n      to left,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    &:hover {\n      background: linear-gradient(\n        to left,\n        transparent 0%,\n        rgba(0, 0, 0, 0.25) 100%\n      );\n    }\n  }\n\n  .react-multiple-carousel__arrow--right {\n    right: 0;\n    background: linear-gradient(\n      to right,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    &:hover {\n      background: linear-gradient(\n        to right,\n        transparent 0%,\n        rgba(0, 0, 0, 0.25) 100%\n      );\n    }\n  }\n\n  .react-multi-carousel-dot-list {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(\n      to bottom,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    transition: bottom 0.3s ease;\n  }\n\n  .react-multi-carousel-dot {\n    align-items: center;\n\n    button {\n      width: 6px;\n      height: 6px;\n      border: 0;\n      background-color: ",";\n      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);\n      transition: all 0.3s ease;\n    }\n  }\n\n  .react-multi-carousel-dot--active {\n    button {\n      width: 8px;\n      height: 8px;\n      background-color: ",";\n    }\n  }\n"])),Object(f.a)("color.3","#E9E8E8"),Object(f.a)("color.1","#ffffff")),v=O.d.div(a||(a=Object(u.a)(["\n  position: absolute;\n  top: 10px;\n  right: 8px;\n  z-index: 9;\n"]))),C=O.d.div(c||(c=Object(u.a)(["\n  padding: 15px;\n  border-width: 1px;\n  border-style: solid;\n  border-top-width: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-color: ",";\n  transition: border-color 0.2s ease;\n"])),Object(f.a)("border.3","#E6E6E6")),k=O.d.div(o||(o=Object(u.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 400;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),Object(f.a)("text.1","#909090")),_=O.d.div(s||(s=Object(u.a)(["\n  color: ",";\n  font-size: 17px;\n  font-weight: 700;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media (max-width: 480px) {\n    font-size: 15px;\n    margin: 4px 0 5px;\n  }\n\n  a {\n    color: ",";\n    font-size: 17px;\n    font-weight: 700;\n    margin-bottom: 2px;\n    @media (max-width: 480px) {\n      font-size: 15px;\n      margin: 4px 0 5px;\n    }\n    &:hover {\n      color: ",";\n    }\n  }\n"])),Object(f.a)("text.0","#2C2C2C"),Object(f.a)("text.0","#2C2C2C"),Object(f.a)("primary.0","#008489")),S=O.d.div(l||(l=Object(u.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 1px;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),Object(f.a)("text.0","#2C2C2C")),z=O.d.div(x||(x=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-size: 13px;\n  margin-top: 4px;\n  /* @media   (max-width: 480px) {\n\t\tmargin-top: 7px;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t} */\n\n  span {\n    flex-shrink: 0;\n  }\n\n  i {\n    color: ",";\n  }\n\n  svg {\n    fill: ",";\n  }\n\n  strong {\n    margin-top: -2px;\n    font-weight: 700;\n    margin-left: 8px;\n    /* @media   (max-width: 480px) {\n\t\t\tmargin-left: 0;\n\t\t} */\n  }\n\n  .ant-rate {\n    /* margin-top: -2px; */\n    .ant-rate-star {\n      margin-right: 4px;\n      font-size: 15px;\n    }\n  }\n"])),Object(f.a)("text.0","#2C2C2C"),Object(f.a)("primary.0","#008489"),Object(f.a)("primary.0","#008489")),N=O.d.div(d||(d=Object(u.a)(["\n  position: relative;\n  transition: all 0.3s ease-out;\n"])));O.d.div(h||(h=Object(u.a)(["\n  padding-top: 7px;\n\n  @media (min-width: 481px) {\n    opacity: 0;\n    visibility: hidden;\n  }\n\n  > a {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 700;\n    color: ",";\n    transition: all 0.3s ease;\n    &:hover,\n    &:focus {\n      outline: 0;\n      text-decoration: none;\n      color: ",";\n    }\n\n    svg {\n      margin-right: 5px;\n      width: 18px;\n      height: 18px;\n    }\n  }\n"])),Object(f.a)("primary.0","#008489"),Object(f.a)("primary.1","#399C9F"));var T=w,B=e(2);var E=t=>{let{className:n,id:e,favorite:r,location:i,title:a,price:c,rating:o,editBtn:s,children:l}=t;return Object(B.jsxs)(T,{className:"grid_card".trim(),children:[Object(B.jsx)(y,{className:"media_wrapper",children:l}),Object(B.jsxs)(C,{className:"content_wrapper",children:[i&&Object(B.jsx)(k,{children:i}),a&&Object(B.jsx)(_,{children:a}),Object(B.jsxs)(N,{className:"meta_wrapper",children:[c&&Object(B.jsx)(S,{className:"price",children:c}),o&&Object(B.jsx)(z,{className:"rating",children:o})]})]}),r&&Object(B.jsx)(v,{children:r})]})};const F={desktop:{breakpoint:{max:3e3,min:1024},items:1,paritialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,paritialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:1,paritialVisibilityGutter:30}};var P=t=>{let{id:n,collection_id:e,collection_name:r,token_id:i}=t;const a=[{title:"Premier#".concat(i),url:"images/premier/".concat(i,".jpg")}];return Object(B.jsx)(E,{isCarousel:!0,favorite:Object(B.jsx)(j.a,{onClick:t=>{console.log(t)}}),id:n,title:"Premier#".concat(i),price:"".concat(r),children:Object(B.jsx)(m.a,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,containerClass:"container",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",renderDotsOutside:!1,responsive:F,showDots:!0,sliderClass:"",slidesToSlide:1,children:a.map(((t,n)=>{let{url:e,title:r}=t;return Object(B.jsx)("img",{src:e,alt:r,draggable:!1,style:{width:"100%",height:"100%",objectFit:"cover",position:"relative"}},n)}))})})};function A(t){let{data:n=[],totalItem:e,columnWidth:r,placeholder:i,buttonText:a,rowStyle:c,columnStyle:o,loadMoreStyle:s}=t;n.length;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(b.a,{className:"grid_wrapper",...c,children:n&&n.length?n.map((t=>Object(B.jsx)(b.a,{className:"grid_column",width:r,...o,children:Object(B.jsx)(P,{...t})},t.id))):null})})}A.defaultProps={rowStyle:{flexBox:!0,flexWrap:"wrap",mr:["-10px","-10px","-10px","-10px","-10px","-15px"],ml:["-10px","-10px","-10px","-10px","-10px","-15px"]},columnStyle:{pr:["10px","10px","10px","10px","10px","15px"],pl:["10px","10px","10px","10px","10px","15px"]},loadMoreStyle:{flexBox:!0,justifyContent:"center",mt:"1rem"}};var G=e(946),M=e(1121);n.default=t=>{let{account:n}=t;const[e,r]=Object(p.useState)([]);return Object(p.useEffect)((async()=>{const t={address:n},e=await Object(M.a)("/getTokensByOwner",t,"POST");e.data.success&&r(e.data.data)}),[n]),Object(B.jsxs)("div",{children:[null===n&&Object(B.jsx)("h3",{children:" You need to connect your wallet. "}),n&&Object(B.jsx)(A,{data:e,totalItem:e.length,columnWidth:[.5,.5,1/3,1/4,.2,1/6],placeholder:Object(B.jsx)(G.a,{})})]})}},932:function(t,n,e){"use strict";e(1);var r=e(251),i=e(2);n.a=t=>{const{rating:n,ratingCount:e,type:a,ratingFieldName:c}=t;let o,s,l,x,d=[];if(n&&0!==n)for(s=Math.floor(n),o=0;o<5;o++)o<s?d.push(Object(i.jsx)(r.g,{},o)):d.push(Object(i.jsx)(r.h,{},o));return l=n&&5===n?"Awesome":4<=n&&n<5?"Good":3<=n&&n<4?"Average":2<=n&&n<3?"Bad":n>=1?"Terrible":"",x=e?"("+e+")":"",Object(i.jsx)(i.Fragment,{children:a&&"bulk"===a?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:d}),Object(i.jsxs)("strong",{children:[" ".concat(l)," ","".concat(x)]})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:c})," ",d]})})}},946:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return c}));e(1);var r=e(971),i=e(2);const a=t=>Object(i.jsxs)(r.a,{height:400,width:400,speed:2,className:"placeholder",backgroundColor:"#f3f3f3",foregroundColor:"#e9e8ec",...t,children:[Object(i.jsx)("circle",{cx:"39.34",cy:"17.32",r:"0.71"}),Object(i.jsx)("circle",{cx:"751.46",cy:"58.81",r:"40.21"}),Object(i.jsx)("rect",{x:"605.25",y:"39.6",rx:"0",ry:"0",width:"66",height:"41"}),Object(i.jsx)("rect",{x:"639.25",y:"59.6",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("rect",{x:"518.25",y:"38.6",rx:"0",ry:"0",width:"66",height:"41"}),Object(i.jsx)("rect",{x:"435.25",y:"40.6",rx:"0",ry:"0",width:"66",height:"41"}),Object(i.jsx)("rect",{x:"264.25",y:"216.6",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("rect",{x:"31.25",y:"451.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"399.25",y:"531.94",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("rect",{x:"217.25",y:"450.94",rx:"0",ry:"0",width:"176.33",height:"147.66"}),Object(i.jsx)("rect",{x:"415.25",y:"449.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"608.17",y:"448.94",rx:"0",ry:"0",width:"171.75",height:"147.66"}),Object(i.jsx)("rect",{x:"30.25",y:"609.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"417.25",y:"612.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"609.25",y:"612.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"220.25",y:"612.94",rx:"0",ry:"0",width:"174.04",height:"147.66"}),Object(i.jsx)("rect",{x:"9.63",y:"18.61",rx:"0",ry:"0",width:"381.03",height:"186"}),Object(i.jsx)("rect",{x:"80.63",y:"132.61",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("rect",{x:"9.63",y:"218.61",rx:"0",ry:"0",width:"183",height:"25"}),Object(i.jsx)("rect",{x:"8.63",y:"258.61",rx:"0",ry:"0",width:"381",height:"43"}),Object(i.jsx)("rect",{x:"8.63",y:"319.61",rx:"0",ry:"0",width:"204",height:"24"}),Object(i.jsx)("rect",{x:"229.63",y:"320.61",rx:"0",ry:"0",width:"164.45",height:"23"}),Object(i.jsx)("rect",{x:"336.63",y:"328.61",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("circle",{cx:"20.56",cy:"370.54",r:"11.93"}),Object(i.jsx)("circle",{cx:"53.63",cy:"376.61",r:"1"}),Object(i.jsx)("circle",{cx:"52.56",cy:"370.54",r:"11.93"}),Object(i.jsx)("circle",{cx:"81.56",cy:"370.54",r:"11.93"}),Object(i.jsx)("circle",{cx:"112.56",cy:"371.54",r:"11.93"}),Object(i.jsx)("circle",{cx:"141.56",cy:"371.54",r:"11.93"}),Object(i.jsx)("rect",{x:"168.63",y:"360.61",rx:"0",ry:"0",width:"104",height:"24"}),Object(i.jsx)("rect",{x:"213.63",y:"397.61",rx:"0",ry:"0",width:"0",height:"0"})]}),c=()=>Object(i.jsxs)(r.a,{height:180,width:180,speed:3,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(i.jsx)("circle",{cx:"76",cy:"60",r:"1"}),Object(i.jsx)("circle",{cx:"90",cy:"50",r:"41"}),Object(i.jsx)("rect",{x:"16",y:"94",rx:"0",ry:"0",width:"149",height:"80"})]})},957:function(t,n,e){"use strict";var r=e(1);var i,a,c,o,s,l=t=>{const[n,e]=Object(r.useState)(t),i=Object(r.useCallback)((()=>e((t=>!t))),[]);return[n,i]},x=e(27),d=e(19),h=e(4);const p=Object(d.e)(i||(i=Object(x.a)(["\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  50% {\n    transform: scale(1.34) rotateY(90deg);\n  }\n"]))),b=Object(d.e)(a||(a=Object(x.a)(["\n  0% {\n    transform: scale(1.34) rotateY(90deg);\n  }\n  50% {\n    transform: scale(1) rotateY(0);\n  }\n"]))),j=Object(d.c)(c||(c=Object(x.a)(["\n  animation: "," 0.4s cubic-bezier(0.38, 0.7, 0.6, 0.29);\n"])),p),g=Object(d.c)(o||(o=Object(x.a)(["\n  animation: "," 0.55s cubic-bezier(0.38, 0.7, 0.6, 0.29);\n"])),b);var m=d.d.button(s||(s=Object(x.a)(["\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  padding: 10px;\n  background-color: transparent;\n  &:hover,\n  &:focus {\n    border: 0;\n    box-shadow: none;\n    outline: none;\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n    ","\n    path {\n      fill: ",";\n      stroke: ",";\n      stroke-width: 2px;\n      transition: fill 1s ease;\n    }\n  }\n\n  &.active {\n    svg {\n      ",";\n      path {\n        fill: ",";\n      }\n    }\n  }\n"])),g,Object(h.a)("color.5","rgba(0, 0, 0, 0.25)"),Object(h.a)("color.1","#ffffff"),j,Object(h.a)("color.4","#FC5C63")),u=e(2);const O=t=>{let{className:n,content:e,onClick:r}=t;const[i,a]=l(!1),c=["favorite"];n&&c.push(n);return Object(u.jsxs)(m,{onClick:t=>{a(),r(!i)},className:"".concat(c.join(" ")," ").concat(i?"active":""),children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.64 18.232",children:Object(u.jsx)("path",{d:"M60.16,56h-.04a4.551,4.551,0,0,0-3.8,2.08A4.551,4.551,0,0,0,52.52,56h-.04A4.522,4.522,0,0,0,48,60.52a9.737,9.737,0,0,0,1.912,5.308A33.506,33.506,0,0,0,56.32,72a33.506,33.506,0,0,0,6.408-6.172A9.737,9.737,0,0,0,64.64,60.52,4.522,4.522,0,0,0,60.16,56Z",transform:"translate(-47 -55)"})}),Object(u.jsx)("span",{children:e})]})};O.defaultProps={onClick:()=>{}};n.a=O},962:function(t,n,e){"use strict";e(1);var r=e(19),i=e(15),a=e(104),c=e(2);const o=Object(r.d)("div")(a.a,Object(a.b)("Box"),(t=>t.flexBox&&Object(r.c)({display:"flex"},i.j,i.i,i.a,i.o,Object(a.b)("FlexBox")))),s=t=>{let{children:n,...e}=t;return Object(c.jsx)(o,{...e,children:n})};n.a=s,s.defaultProps={as:"div"}}}]);
//# sourceMappingURL=25.fcb7e421.chunk.js.map