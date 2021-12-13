(window.webpackJsonp=window.webpackJsonp||[]).push([[69,132,133,134,135],{1183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21);function i(){var e=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n  .isoBoxWrapper {\n border: none;\n }\n"]);return i=function(){return e},e}var o=n(20).c.div(i());t.default=function(e){return r.a.createElement(o,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),i=n(20),o=n(2);function c(){var e=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return e},e}function m(){var e=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return m=function(){return e},e}var u=i.c.h3(m(),Object(o.palette)("text",0)),d=i.c.p(c(),Object(o.palette)("text",3)),p=function(e){return r.a.createElement("div",null,e.title?r.a.createElement(u,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?r.a.createElement(d,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function s(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return s=function(){return e},e}var f=i.c.div(s(),Object(o.palette)("border",0),"");t.default=function(e){return r.a.createElement(f,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},r.a.createElement(p,{title:e.title,subtitle:e.subtitle}),e.children)}},1187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),i=n(20),o=n(2),c=n(27);function m(){var e=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return m=function(){return e},e}var u=i.c.h1(m(),Object(o.palette)("secondary",2),Object(o.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(o.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),d=Object(c.a)(u);t.default=function(e){return r.a.createElement(d,{className:"isoComponentTitle"},e.children)}},1188:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),i=n(20),o=n(2),c=n(27);function m(){var e=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return m=function(){return e},e}var u=i.c.div(m(),function(e){return"rtl"===e["data-rtl"]?"0":"10px"},function(e){return"rtl"===e["data-rtl"]?"10px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0":"295px"},function(e){return"rtl"===e["data-rtl"]?"295px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"},function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"},function(e){return"rtl"===e["data-rtl"]?"0":"8px"},function(e){return"rtl"===e["data-rtl"]?"8px":"0"},Object(o.palette)("secondary",1),function(e){return"rtl"===e["data-rtl"]?"auto":"6px"},function(e){return"rtl"===e["data-rtl"]?"6px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"15px"},function(e){return"rtl"===e["data-rtl"]?"15px":"0"},function(e){return e["data-rtl"],"0"},function(e){return e["data-rtl"],"0"}),d=Object(c.a)(u);t.default=function(e){return r.a.createElement(d,{className:"isoExampleWrapper",style:e.style},e.children)}},1190:function(e,t,n){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.a=a},1480:function(e,t,n){"use strict";var a=n(57),r=n(1373),l=n(21),i=n(20),o=n(2);function c(){var e=Object(l.a)(["\n  .ant-dropdown-menu-item {\n    a {\n      font-size: 13px;\n      color: ",";\n    }\n  }\n\n  .ant-dropdown-menu-item,\n  .ant-dropdown-menu-submenu-title {\n    a {\n      font-size: 13px;\n      color: ",";\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n"]);return c=function(){return e},e}function m(){var e=Object(l.a)(["\n  display: inline-block;\n\n  &.ant-dropdown-button {\n    &.ant-btn-group > .ant-btn:first-child:not(:last-child) {\n      border-radius: ",";\n    }\n\n    &.ant-btn-group > .ant-btn:last-child:not(:first-child) {\n      border-radius: ",";\n    }\n\n    &.ant-btn-group .ant-btn + .ant-btn {\n      margin: ",";\n    }\n  }\n\n  .ant-dropdown-link {\n    font-size: 13px;\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return m=function(){return e},e}var u=function(e){return Object(i.c)(e)(c(),Object(o.palette)("text",1),Object(o.palette)("text",1),Object(o.palette)("secondary",1))},d=function(e){return Object(i.c)(e)(m(),function(e){return"rtl"===e["data-rtl"]?"0 4px 4px 0":"4px 0  0 4px"},function(e){return"rtl"===e["data-rtl"]?"4px 0 0 4px":"0 4px 4px 0"},function(e){return"rtl"===e["data-rtl"]?"0 -1px 0 0":"0 0 0 -1px"},Object(o.palette)("primary",0),Object(o.palette)("primary",2))},p=n(27);n.d(t,"a",function(){return x}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return g});var s=d(a.a),f=Object(p.a)(s),h=d(a.a.Button),x=Object(p.a)(h),b=u(r.b),E=u(r.b.Item),g=u(r.b.SubMenu);t.e=f},1678:function(e,t,n){"use strict";var a=n(1810);t.a=a.a},2750:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return B});var a=n(13),r=n(14),l=n(19),i=n(17),o=n(18),c=n(0),m=n.n(c),u=n(28),d=n(29),p=n(4),s=n(187),f=n(1480),h=n(192),x=n(1678),b=n(1187),E=n(1184),g=n(1183),w=n(1188),y=n(1190),v=n(26),k=n(27),j=s.a.Divider,O=f.a,C=h.b,B=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1},n.handleButtonClick=function(e){x.a.info("Click on left button.")},n.handleMenuClickToLink=function(e){x.a.info("Click on menu item.")},n.handleMenuClick=function(e){"3"===e.key&&n.setState({visible:!1})},n.handleVisibleChange=function(e){n.setState({visible:e})},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=y.a.rowStyle,t=y.a.colStyle,n=y.a.gutter,a={marginBottom:"8px",marginRight:"8px"},r=m.a.createElement(f.b,null,m.a.createElement(f.c,null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"1st menu item")),m.a.createElement(f.c,null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"2nd menu item")),m.a.createElement(f.c,null,m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"3d menu item"))),l=m.a.createElement(f.b,null,m.a.createElement(f.c,{key:"0"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"1st menu item")),m.a.createElement(f.c,{key:"1"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"2nd menu item")),m.a.createElement(j,null),m.a.createElement(f.c,{key:"3",disabled:!0},"3d menu item\uff08disabled\uff09")),i=m.a.createElement(f.b,{onClick:this.handleMenuClickToLink},m.a.createElement(f.c,{key:"1"},"1st menu item"),m.a.createElement(f.c,{key:"2"},"2nd menu item"),m.a.createElement(f.c,{key:"3"},"3d menu item")),o=m.a.createElement(f.b,null,m.a.createElement(f.c,null,"1st menu item"),m.a.createElement(f.c,null,"2nd menu item"),m.a.createElement(f.d,{title:"sub menu"},m.a.createElement(f.c,null,"3d menu item"),m.a.createElement(f.c,null,"4th menu item")));return m.a.createElement(g.default,null,m.a.createElement(b.default,null,m.a.createElement(v.a,{id:"uiElements.dropdown.dropdown"})),m.a.createElement(u.a,{style:e,gutter:n,justify:"start"},m.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(E.default,{title:m.a.createElement(v.a,{id:"uiElements.dropdown.hoverDropdown"})},m.a.createElement(w.default,null,m.a.createElement(f.e,{overlay:r},m.a.createElement("a",{className:"ant-dropdown-link",href:"# "},m.a.createElement(v.a,{id:"uiElements.dropdown.hoverMe"})," ",m.a.createElement(p.a,{type:"down"})))))),m.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(E.default,{title:m.a.createElement(v.a,{id:"uiElements.dropdown.hoverPlacement"})},m.a.createElement(w.default,null,m.a.createElement(f.e,{overlay:r,placement:"bottomLeft"},m.a.createElement(C,{style:a},"bottomLeft")),m.a.createElement(f.e,{overlay:r,placement:"bottomCenter"},m.a.createElement(C,{style:a},"bottomCenter")),m.a.createElement(f.e,{overlay:r,placement:"bottomRight"},m.a.createElement(C,{style:a},"bottomRight")),m.a.createElement("br",null),m.a.createElement(f.e,{overlay:r,placement:"topLeft"},m.a.createElement(C,{style:a},"topLeft")),m.a.createElement(f.e,{overlay:r,placement:"topCenter"},m.a.createElement(C,{style:a},"topCenter")),m.a.createElement(f.e,{overlay:r,placement:"topRight"},m.a.createElement(C,{style:a},"topRight")))))),m.a.createElement(u.a,{style:e,gutter:n,justify:"start"},m.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(E.default,{title:m.a.createElement(v.a,{id:"uiElements.dropdown.hoverDisableLink"})},m.a.createElement(w.default,null,m.a.createElement(f.e,{overlay:l},m.a.createElement("a",{className:"ant-dropdown-link",href:"# "},"Hover me ",m.a.createElement(p.a,{type:"down"})))))),m.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(E.default,{title:m.a.createElement(v.a,{id:"uiElements.dropdown.clickedDropdown"})},m.a.createElement(w.default,null,m.a.createElement(f.e,{overlay:r,trigger:["click"]},m.a.createElement("a",{className:"ant-dropdown-link",href:"# "},"Click me ",m.a.createElement(p.a,{type:"down"}))))))),m.a.createElement(u.a,{style:e,gutter:n,justify:"start"},m.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(E.default,{title:m.a.createElement(v.a,{id:"uiElements.dropdown.buttonDropdown"})},m.a.createElement(w.default,null,m.a.createElement(O,{onClick:this.handleButtonClick,overlay:i},"Dropdown"),m.a.createElement(O,{onClick:this.handleButtonClick,overlay:i,disabled:!0,style:{margin:"rtl"===k.b?"0 8px 0 0":"0 0 0 8px"}},"Dropdown"),m.a.createElement(f.e,{overlay:i},m.a.createElement(C,{style:{margin:"rtl"===k.b?"0 8px 0 0":"0 0 0 8px"}},"Button ",m.a.createElement(p.a,{type:"down"})))))),m.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(E.default,{title:m.a.createElement(v.a,{id:"uiElements.dropdown.clickedDropdown"})},m.a.createElement(w.default,null,m.a.createElement(f.e,{overlay:o},m.a.createElement("a",{className:"ant-dropdown-link",href:"# "},"Cascading menu ",m.a.createElement(p.a,{type:"down"}))))))))}}]),t}(c.Component)}}]);
//# sourceMappingURL=69.c3950a66.chunk.js.map