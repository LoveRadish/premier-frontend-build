(this["webpackJsonp@tripfinder/hotel-cra"]=this["webpackJsonp@tripfinder/hotel-cra"]||[]).push([[24],{1486:function(t,n,e){"use strict";e.r(n);e(1);var r=e(971),i=e(951),a=e(948),o=e(9),c=e(2);n.default=()=>{const{data:t,loadMoreData:n,loading:e}=Object(a.a)("/data/agent.json"),s=t[0]&&t[0].favourite_post?t[0].favourite_post:[];return Object(c.jsx)(r.a,{link:o.q,data:s,loading:e,limit:6,totalItem:s.length,columnWidth:[.5,.5,1/3,1/4,.2,1/6],placeholder:Object(c.jsx)(i.a,{}),handleLoadMore:n})}},933:function(t,n,e){"use strict";e(1);var r=e(251),i=e(2);n.a=t=>{const{rating:n,ratingCount:e,type:a,ratingFieldName:o}=t;let c,s,l,d,x=[];if(n&&0!==n)for(s=Math.floor(n),c=0;c<5;c++)c<s?x.push(Object(i.jsx)(r.g,{},c)):x.push(Object(i.jsx)(r.h,{},c));return l=n&&5===n?"Awesome":4<=n&&n<5?"Good":3<=n&&n<4?"Average":2<=n&&n<3?"Bad":n>=1?"Terrible":"",d=e?"("+e+")":"",Object(i.jsx)(i.Fragment,{children:a&&"bulk"===a?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:x}),Object(i.jsxs)("strong",{children:[" ".concat(l)," ","".concat(d)]})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:o})," ",x]})})}},948:function(t,n,e){"use strict";var r=e(1);async function i(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i={method:n,headers:e};return"POST"!==n&&"PUT"!==n||(i={...i,body:r}),fetch(t,i).then((t=>Promise.resolve(t.json()))).catch((t=>Promise.reject(t)))}function a(t,n){switch(n.type){case"FETCH_INIT":return{...t,loading:!0,error:!1};case"FETCH_SUCCESS":return{...t,data:n.payload.slice(0,t.limit),total:n.payload,loading:!1,error:!1};case"FETCH_FAILURE":return{...t,loading:!1,error:!0};case"LOAD_MORE":return{...t,data:[...t.data,...t.total.slice(t.data.length,t.data.length+t.limit)],loading:!1,error:!1};default:throw new Error}}n.a=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const[o,c]=Object(r.useState)(t),[s,l]=Object(r.useReducer)(a,{loading:!1,error:!1,data:e,total:e,limit:n});Object(r.useEffect)((()=>{let t=!1;return(async()=>{l({type:"FETCH_INIT"});try{const n=await i(o);t||l({type:"FETCH_SUCCESS",payload:n})}catch(n){t||l({type:"FETCH_FAILURE"})}})(),()=>{t=!0}}),[o]);const d=()=>{l({type:"LOAD_MORE"})},x=t=>{c(t)};return{...s,doFetch:x,loadMoreData:d}}},951:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}));e(1);var r=e(972),i=e(2);const a=t=>Object(i.jsxs)(r.a,{height:400,width:400,speed:2,className:"placeholder",backgroundColor:"#f3f3f3",foregroundColor:"#e9e8ec",...t,children:[Object(i.jsx)("circle",{cx:"39.34",cy:"17.32",r:"0.71"}),Object(i.jsx)("circle",{cx:"751.46",cy:"58.81",r:"40.21"}),Object(i.jsx)("rect",{x:"605.25",y:"39.6",rx:"0",ry:"0",width:"66",height:"41"}),Object(i.jsx)("rect",{x:"639.25",y:"59.6",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("rect",{x:"518.25",y:"38.6",rx:"0",ry:"0",width:"66",height:"41"}),Object(i.jsx)("rect",{x:"435.25",y:"40.6",rx:"0",ry:"0",width:"66",height:"41"}),Object(i.jsx)("rect",{x:"264.25",y:"216.6",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("rect",{x:"31.25",y:"451.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"399.25",y:"531.94",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("rect",{x:"217.25",y:"450.94",rx:"0",ry:"0",width:"176.33",height:"147.66"}),Object(i.jsx)("rect",{x:"415.25",y:"449.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"608.17",y:"448.94",rx:"0",ry:"0",width:"171.75",height:"147.66"}),Object(i.jsx)("rect",{x:"30.25",y:"609.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"417.25",y:"612.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"609.25",y:"612.94",rx:"0",ry:"0",width:"167.17",height:"147.66"}),Object(i.jsx)("rect",{x:"220.25",y:"612.94",rx:"0",ry:"0",width:"174.04",height:"147.66"}),Object(i.jsx)("rect",{x:"9.63",y:"18.61",rx:"0",ry:"0",width:"381.03",height:"186"}),Object(i.jsx)("rect",{x:"80.63",y:"132.61",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("rect",{x:"9.63",y:"218.61",rx:"0",ry:"0",width:"183",height:"25"}),Object(i.jsx)("rect",{x:"8.63",y:"258.61",rx:"0",ry:"0",width:"381",height:"43"}),Object(i.jsx)("rect",{x:"8.63",y:"319.61",rx:"0",ry:"0",width:"204",height:"24"}),Object(i.jsx)("rect",{x:"229.63",y:"320.61",rx:"0",ry:"0",width:"164.45",height:"23"}),Object(i.jsx)("rect",{x:"336.63",y:"328.61",rx:"0",ry:"0",width:"0",height:"0"}),Object(i.jsx)("circle",{cx:"20.56",cy:"370.54",r:"11.93"}),Object(i.jsx)("circle",{cx:"53.63",cy:"376.61",r:"1"}),Object(i.jsx)("circle",{cx:"52.56",cy:"370.54",r:"11.93"}),Object(i.jsx)("circle",{cx:"81.56",cy:"370.54",r:"11.93"}),Object(i.jsx)("circle",{cx:"112.56",cy:"371.54",r:"11.93"}),Object(i.jsx)("circle",{cx:"141.56",cy:"371.54",r:"11.93"}),Object(i.jsx)("rect",{x:"168.63",y:"360.61",rx:"0",ry:"0",width:"104",height:"24"}),Object(i.jsx)("rect",{x:"213.63",y:"397.61",rx:"0",ry:"0",width:"0",height:"0"})]}),o=()=>Object(i.jsxs)(r.a,{height:180,width:180,speed:3,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(i.jsx)("circle",{cx:"76",cy:"60",r:"1"}),Object(i.jsx)("circle",{cx:"90",cy:"50",r:"41"}),Object(i.jsx)("rect",{x:"16",y:"94",rx:"0",ry:"0",width:"149",height:"80"})]})},958:function(t,n,e){"use strict";var r=e(1);var i,a,o,c,s,l=t=>{const[n,e]=Object(r.useState)(t),i=Object(r.useCallback)((()=>e((t=>!t))),[]);return[n,i]},d=e(27),x=e(19),h=e(4);const p=Object(x.e)(i||(i=Object(d.a)(["\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  50% {\n    transform: scale(1.34) rotateY(90deg);\n  }\n"]))),b=Object(x.e)(a||(a=Object(d.a)(["\n  0% {\n    transform: scale(1.34) rotateY(90deg);\n  }\n  50% {\n    transform: scale(1) rotateY(0);\n  }\n"]))),j=Object(x.c)(o||(o=Object(d.a)(["\n  animation: "," 0.4s cubic-bezier(0.38, 0.7, 0.6, 0.29);\n"])),p),g=Object(x.c)(c||(c=Object(d.a)(["\n  animation: "," 0.55s cubic-bezier(0.38, 0.7, 0.6, 0.29);\n"])),b);var u=x.d.button(s||(s=Object(d.a)(["\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  padding: 10px;\n  background-color: transparent;\n  &:hover,\n  &:focus {\n    border: 0;\n    box-shadow: none;\n    outline: none;\n  }\n\n  svg {\n    width: 20px;\n    height: 20px;\n    ","\n    path {\n      fill: ",";\n      stroke: ",";\n      stroke-width: 2px;\n      transition: fill 1s ease;\n    }\n  }\n\n  &.active {\n    svg {\n      ",";\n      path {\n        fill: ",";\n      }\n    }\n  }\n"])),g,Object(h.a)("color.5","rgba(0, 0, 0, 0.25)"),Object(h.a)("color.1","#ffffff"),j,Object(h.a)("color.4","#FC5C63")),m=e(2);const O=t=>{let{className:n,content:e,onClick:r}=t;const[i,a]=l(!1),o=["favorite"];n&&o.push(n);return Object(m.jsxs)(u,{onClick:t=>{a(),r(!i)},className:"".concat(o.join(" ")," ").concat(i?"active":""),children:[Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.64 18.232",children:Object(m.jsx)("path",{d:"M60.16,56h-.04a4.551,4.551,0,0,0-3.8,2.08A4.551,4.551,0,0,0,52.52,56h-.04A4.522,4.522,0,0,0,48,60.52a9.737,9.737,0,0,0,1.912,5.308A33.506,33.506,0,0,0,56.32,72a33.506,33.506,0,0,0,6.408-6.172A9.737,9.737,0,0,0,64.64,60.52,4.522,4.522,0,0,0,60.16,56Z",transform:"translate(-47 -55)"})}),Object(m.jsx)("span",{children:e})]})};O.defaultProps={onClick:()=>{}};n.a=O},960:function(t,n,e){"use strict";e(1);var r,i,a,o,c,s,l,d,x,h,p=e(27),b=e(19),j=e(4);const g=b.d.div(r||(r=Object(p.a)(["\n  position: relative;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 30px;\n\n  @media (max-width: 480px) {\n    margin-bottom: 20px;\n  }\n\n  &.has_btn {\n    .button_group {\n      @media (min-width: 481px) {\n        position: absolute;\n        top: 5px;\n        padding-top: 3px;\n      }\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 6px 12px ",";\n\n    .content_wrapper {\n      border-color: transparent;\n    }\n\n    &.has_btn {\n      .meta_wrapper {\n        .rating {\n          @media (min-width: 481px) {\n            opacity: 0;\n            visibility: hidden;\n          }\n        }\n      }\n\n      @media (min-width: 481px) {\n        .button_group {\n          top: 19px;\n          opacity: 1;\n          visibility: visible;\n        }\n      }\n    }\n\n    .react-multiple-carousel__arrow {\n      opacity: 1;\n      visibility: visible;\n    }\n\n    .react-multi-carousel-dot-list {\n      bottom: 0;\n    }\n  }\n"])),Object(j.a)("boxShadow.2","rgba(0, 0, 0, 0.16)")),u=b.d.div(i||(i=Object(p.a)(["\n  > img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  .react-multi-carousel-list {\n    min-height: 150px;\n    background-color: #e9e8ec;\n  }\n\n  .react-multi-carousel-item {\n    height: 170px;\n  }\n\n  .react-multiple-carousel__arrow {\n    top: 0;\n    width: 22%;\n    height: 100%;\n    border-radius: 0;\n    padding: 0;\n    opacity: 0;\n    visibility: hidden;\n    z-index: 1;\n\n    &::before {\n      font-weight: 700;\n    }\n  }\n\n  .react-multiple-carousel__arrow--left {\n    left: 0;\n    background: linear-gradient(\n      to left,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    &:hover {\n      background: linear-gradient(\n        to left,\n        transparent 0%,\n        rgba(0, 0, 0, 0.25) 100%\n      );\n    }\n  }\n\n  .react-multiple-carousel__arrow--right {\n    right: 0;\n    background: linear-gradient(\n      to right,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    &:hover {\n      background: linear-gradient(\n        to right,\n        transparent 0%,\n        rgba(0, 0, 0, 0.25) 100%\n      );\n    }\n  }\n\n  .react-multi-carousel-dot-list {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(\n      to bottom,\n      transparent 0%,\n      rgba(0, 0, 0, 0.25) 100%\n    );\n    transition: bottom 0.3s ease;\n  }\n\n  .react-multi-carousel-dot {\n    align-items: center;\n\n    button {\n      width: 6px;\n      height: 6px;\n      border: 0;\n      background-color: ",";\n      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);\n      transition: all 0.3s ease;\n    }\n  }\n\n  .react-multi-carousel-dot--active {\n    button {\n      width: 8px;\n      height: 8px;\n      background-color: ",";\n    }\n  }\n"])),Object(j.a)("color.3","#E9E8E8"),Object(j.a)("color.1","#ffffff")),m=b.d.div(a||(a=Object(p.a)(["\n  position: absolute;\n  top: 10px;\n  right: 8px;\n  z-index: 9;\n"]))),O=b.d.div(o||(o=Object(p.a)(["\n  padding: 15px;\n  border-width: 1px;\n  border-style: solid;\n  border-top-width: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-color: ",";\n  transition: border-color 0.2s ease;\n"])),Object(j.a)("border.3","#E6E6E6")),f=b.d.div(c||(c=Object(p.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 400;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),Object(j.a)("text.1","#909090")),y=b.d.div(s||(s=Object(p.a)(["\n  color: ",";\n  font-size: 17px;\n  font-weight: 700;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media (max-width: 480px) {\n    font-size: 15px;\n    margin: 4px 0 5px;\n  }\n\n  a {\n    color: ",";\n    font-size: 17px;\n    font-weight: 700;\n    margin-bottom: 2px;\n    @media (max-width: 480px) {\n      font-size: 15px;\n      margin: 4px 0 5px;\n    }\n    &:hover {\n      color: ",";\n    }\n  }\n"])),Object(j.a)("text.0","#2C2C2C"),Object(j.a)("text.0","#2C2C2C"),Object(j.a)("primary.0","#008489")),w=b.d.div(l||(l=Object(p.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 1px;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),Object(j.a)("text.0","#2C2C2C")),v=b.d.div(d||(d=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-size: 13px;\n  margin-top: 4px;\n  /* @media   (max-width: 480px) {\n\t\tmargin-top: 7px;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t} */\n\n  span {\n    flex-shrink: 0;\n  }\n\n  i {\n    color: ",";\n  }\n\n  svg {\n    fill: ",";\n  }\n\n  strong {\n    margin-top: -2px;\n    font-weight: 700;\n    margin-left: 8px;\n    /* @media   (max-width: 480px) {\n\t\t\tmargin-left: 0;\n\t\t} */\n  }\n\n  .ant-rate {\n    /* margin-top: -2px; */\n    .ant-rate-star {\n      margin-right: 4px;\n      font-size: 15px;\n    }\n  }\n"])),Object(j.a)("text.0","#2C2C2C"),Object(j.a)("primary.0","#008489"),Object(j.a)("primary.0","#008489")),C=b.d.div(x||(x=Object(p.a)(["\n  position: relative;\n  transition: all 0.3s ease-out;\n"]))),k=b.d.div(h||(h=Object(p.a)(["\n  padding-top: 7px;\n\n  @media (min-width: 481px) {\n    opacity: 0;\n    visibility: hidden;\n  }\n\n  > a {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 700;\n    color: ",";\n    transition: all 0.3s ease;\n    &:hover,\n    &:focus {\n      outline: 0;\n      text-decoration: none;\n      color: ",";\n    }\n\n    svg {\n      margin-right: 5px;\n      width: 18px;\n      height: 18px;\n    }\n  }\n"])),Object(j.a)("primary.0","#008489"),Object(j.a)("primary.1","#399C9F"));var _=g,E=e(2);n.a=t=>{let{className:n,id:e,favorite:r,location:i,title:a,price:o,rating:c,editBtn:s,viewDetailsBtn:l,children:d}=t,x=l||s?"has_btn ".concat(n):n;return Object(E.jsxs)(_,{className:"grid_card ".concat(x).trim(),children:[Object(E.jsx)(u,{className:"media_wrapper",children:d}),Object(E.jsxs)(O,{className:"content_wrapper",children:[i&&Object(E.jsx)(f,{children:i}),a&&Object(E.jsx)(y,{children:a}),Object(E.jsxs)(C,{className:"meta_wrapper",children:[o&&Object(E.jsx)(w,{className:"price",children:o}),c&&Object(E.jsx)(v,{className:"rating",children:c}),l||s?Object(E.jsxs)(k,{className:"button_group",children:[l,s]}):null]})]}),r&&Object(E.jsx)(m,{children:r})]})}},963:function(t,n,e){"use strict";e(1);var r=e(19),i=e(15),a=e(104),o=e(2);const c=Object(r.d)("div")(a.a,Object(a.b)("Box"),(t=>t.flexBox&&Object(r.c)({display:"flex"},i.j,i.i,i.a,i.o,Object(a.b)("FlexBox")))),s=t=>{let{children:n,...e}=t;return Object(o.jsx)(c,{...e,children:n})};n.a=s,s.defaultProps={as:"div"}},971:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));e(190);var r=e(93),i=(e(1),e(963)),a=e(253),o=e(262),c=e(254),s=e(933),l=e(958),d=e(1004),x=e.n(d),h=(e(1005),e(960)),p=e(2);const b={desktop:{breakpoint:{max:3e3,min:1024},items:1,paritialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,paritialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:1,paritialVisibilityGutter:30}};var j=t=>{let{id:n,name:e,rating:r,formattedAddress:i,price:a,ratingCount:d,gallery:j,slug:g,link:u}=t;return Object(p.jsx)(h.a,{isCarousel:!0,favorite:Object(p.jsx)(l.a,{onClick:t=>{console.log(t)}}),id:n,location:i,title:Object(p.jsx)(c.a,{link:"".concat(u,"/").concat(n),content:e}),price:"$".concat(a,"/Day - Free Cancellation"),rating:Object(p.jsx)(s.a,{rating:r,ratingCount:d,type:"bulk"}),viewDetailsBtn:Object(p.jsx)(c.a,{link:"".concat(u,"/").concat(n),icon:Object(p.jsx)(o.a,{}),content:"View Details"}),children:Object(p.jsx)(x.a,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,containerClass:"container",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",renderDotsOutside:!1,responsive:b,showDots:!0,sliderClass:"",slidesToSlide:1,children:j.map(((t,n)=>{let{url:e,title:r}=t;return Object(p.jsx)("img",{src:e,alt:r,draggable:!1,style:{width:"100%",height:"100%",objectFit:"cover",position:"relative"}},n)}))})})};const g=t=>{let{handleLoadMore:n,showButton:e,buttonText:a,loading:o,loadMoreComponent:c,loadMoreStyle:s}=t;return!!e&&Object(p.jsx)(i.a,{className:"loadmore_wrapper",...s,children:c||Object(p.jsx)(r.a,{loading:o,onClick:n,children:a||"Load More"})})};function u(t){let{data:n=[],totalItem:e,limit:r,columnWidth:o,paginationComponent:c,handleLoadMore:s,loadMoreComponent:l,placeholder:d,loading:x,buttonText:h,rowStyle:b,columnStyle:u,loadMoreStyle:m,link:O}=t;const f=r?Number(r):1,y=Array(f).fill(0);let w=n.length<e;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(i.a,{className:"grid_wrapper",...b,children:[n&&n.length?n.map((t=>Object(p.jsx)(i.a,{className:"grid_column",width:o,...u,children:Object(p.jsx)(j,{link:O,...t})},t.id))):null,x&&y.map(((t,n)=>Object(p.jsx)(i.a,{className:"grid_column",width:o,...u,children:d||Object(p.jsx)(a.a,{content:"Loading ..."})},n)))]}),w&&Object(p.jsx)(g,{showButton:w,handleLoadMore:s,loading:x,buttonText:h,loadMoreComponent:l,loadMoreStyle:m}),c&&Object(p.jsx)(i.a,{className:"pagination_wrapper",children:c})]})}u.defaultProps={rowStyle:{flexBox:!0,flexWrap:"wrap",mr:["-10px","-10px","-10px","-10px","-10px","-15px"],ml:["-10px","-10px","-10px","-10px","-10px","-15px"]},columnStyle:{pr:["10px","10px","10px","10px","10px","15px"],pl:["10px","10px","10px","10px","10px","15px"]},loadMoreStyle:{flexBox:!0,justifyContent:"center",mt:"1rem"}}}}]);
//# sourceMappingURL=24.8fe4b902.chunk.js.map