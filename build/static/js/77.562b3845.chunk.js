(window.webpackJsonp=window.webpackJsonp||[]).push([[77,132,133,134,135],{1183:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(21);function i(){var t=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n  .isoBoxWrapper {\n border: none;\n }\n"]);return i=function(){return t},t}var c=e(20).c.div(i());n.default=function(t){return r.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1184:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(21),i=e(20),c=e(2);function o(){var t=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return o=function(){return t},t}function u(){var t=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return u=function(){return t},t}var s=i.c.h3(u(),Object(c.palette)("text",0)),d=i.c.p(o(),Object(c.palette)("text",3)),p=function(t){return r.a.createElement("div",null,t.title?r.a.createElement(s,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?r.a.createElement(d,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function m(){var t=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return m=function(){return t},t}var f=i.c.div(m(),Object(c.palette)("border",0),"");n.default=function(t){return r.a.createElement(f,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},r.a.createElement(p,{title:t.title,subtitle:t.subtitle}),t.children)}},1187:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(21),i=e(20),c=e(2),o=e(27);function u(){var t=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return u=function(){return t},t}var s=i.c.h1(u(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),d=Object(o.a)(s);n.default=function(t){return r.a.createElement(d,{className:"isoComponentTitle"},t.children)}},1188:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(21),i=e(20),c=e(2),o=e(27);function u(){var t=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return u=function(){return t},t}var s=i.c.div(u(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),d=Object(o.a)(s);n.default=function(t){return r.a.createElement(d,{className:"isoExampleWrapper",style:t.style},t.children)}},1190:function(t,n,e){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};n.a=a},1464:function(t,n,e){"use strict";var a=e(126);n.a=a.a},2803:function(t,n,e){"use strict";e.r(n);var a=e(71),r=e(13),l=e(14),i=e(19),c=e(17),o=e(18),u=e(0),s=e.n(u),d=e(28),p=e(29),m=e(1962).a,f=e(119),g=e(1464),h=e(192),x=e(1187),b=e(1184),E=e(1183),w=e(1188),y=e(1190),v=e(26),O=e(21),j=e(20),k=e(2),C=e(6),T=e(27);function B(){var t=Object(O.a)(["\n  display: inline-block;\n\n  .ant-tag {\n    display: inline-block;\n    line-height: 24px;\n    height: 26px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 1px solid ",";\n    background: ",";\n    font-size: 12px;\n    color: ",";\n    opacity: 1;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    margin-right: ",";\n    margin-left: ",";\n    cursor: pointer;\n    white-space: nowrap;\n    ",";\n\n    a {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .anticon-cross {\n      margin: ",";\n    }\n\n    &.ant-tag-has-color {\n      line-height: 24px;\n      color: #ffffff;\n      border: 0;\n    }\n\n    &.ant-tag-checkable {\n      background-color: transparent;\n      border-color: transparent;\n\n      &:not(.ant-tag-checkable-checked) {\n        &:hover {\n          background-color: ",";\n          color: #ffffff;\n        }\n      }\n\n      &:active {\n        background-color: ",";\n        color: #ffffff;\n      }\n\n      &.ant-tag-checkable-checked {\n        background-color: ",";\n        color: #ffffff;\n      }\n    }\n  }\n"]);return B=function(){return t},t}var S=j.c.div(B(),Object(k.palette)("border",0),Object(k.palette)("grayscale",6),Object(k.palette)("text",3),function(t){return"rtl"===t["data-rtl"]?"inherit":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"inherit"},Object(C.c)(),Object(k.palette)("text",3),Object(k.palette)("text",3),function(t){return"rtl"===t["data-rtl"]?"0 3px 0 0":"0 0 0 3px"},Object(k.palette)("primary",0),Object(k.palette)("primary",0),Object(k.palette)("primary",0)),I=Object(T.a)(S);e.d(n,"default",function(){return D});var N=m.CheckableTag,V=function(t){return s.a.createElement(I,null,s.a.createElement(m,t,t.children))},z=["Movie","Books","Music"],D=function(t){function n(){var t,e;Object(r.a)(this,n);for(var l=arguments.length,o=new Array(l),u=0;u<l;u++)o[u]=arguments[u];return(e=Object(i.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(o)))).state={selectedTags:[],tags:["Unremovable","Tag 2","Tag 3"],inputVisible:!1,inputValue:""},e.log=function(t){},e.handleChange=function(t,n){var r=e.state.selectedTags,l=n?[].concat(Object(a.a)(r),[t]):r.filter(function(n){return n!==t});e.setState({selectedTags:l})},e.preventDefault=function(t){t.preventDefault()},e.handleClose=function(t){var n=e.state.tags.filter(function(n){return n!==t});e.setState({tags:n})},e.showInput=function(){e.setState({inputVisible:!0},function(){document.getElementById("newTagsInput").focus()})},e.handleInputChange=function(t){e.setState({inputValue:t.target.value})},e.handleInputConfirm=function(){var t=e.state,n=t.inputValue,r=t.tags;n&&-1===r.indexOf(n)&&(r=[].concat(Object(a.a)(r),[n])),e.setState({tags:r,inputVisible:!1,inputValue:""})},e}return Object(o.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){var t=this,n=this.state,e=n.selectedTags,a=n.tags,r=n.inputVisible,l=n.inputValue,i=y.a.rowStyle,c=y.a.colStyle,o=y.a.gutter;return s.a.createElement(E.default,null,s.a.createElement(x.default,null,s.a.createElement(v.a,{id:"uiElements.tags.tags"})),s.a.createElement(d.a,{style:i,gutter:o,justify:"start"},s.a.createElement(p.a,{md:12,sm:12,xs:24,style:c},s.a.createElement(b.default,{title:s.a.createElement(v.a,{id:"uiElements.tags.basicExample"}),subtitle:s.a.createElement(v.a,{id:"uiElements.tags.basicExampleSubTitle"})},s.a.createElement(w.default,null,s.a.createElement(V,null,s.a.createElement(v.a,{id:"uiElements.tags.tagOne"})),s.a.createElement(V,null,s.a.createElement("a",{href:"https://isomorphic.redq.io/dashboard/op_tag"},s.a.createElement(v.a,{id:"uiElements.tags.link"}))),s.a.createElement(V,{closable:!0,onClose:this.log},s.a.createElement(v.a,{id:"uiElements.tags.tagTwo"})),s.a.createElement(V,{closable:!0,onClose:this.preventDefault},s.a.createElement(v.a,{id:"uiElements.tags.preventDefault"}))))),s.a.createElement(p.a,{md:12,sm:12,xs:24,style:c},s.a.createElement(b.default,{title:s.a.createElement(v.a,{id:"uiElements.tags.colorfulTag"})},s.a.createElement(w.default,null,s.a.createElement(V,{color:"#f50"},"#f50"),s.a.createElement(V,{color:"#2db7f5"},"#2db7f5"),s.a.createElement(V,{color:"#87d068"},"#87d068"),s.a.createElement(V,{color:"#108ee9"},"#108ee9"))))),s.a.createElement(d.a,{style:i,gutter:o,justify:"start"},s.a.createElement(p.a,{md:12,sm:12,xs:24,style:c},s.a.createElement(b.default,{title:s.a.createElement(v.a,{id:"uiElements.tags.hotTags"}),subtitle:s.a.createElement(v.a,{id:"uiElements.tags.hotTagsSubTitle"})},s.a.createElement(w.default,null,s.a.createElement("strong",null,s.a.createElement(v.a,{id:"uiElements.tags.hots"})," "),z.map(function(n){return s.a.createElement(N,{key:n,checked:e.indexOf(n)>-1,onChange:function(e){return t.handleChange(n,e)}},n)})))),s.a.createElement(p.a,{md:12,sm:12,xs:24,style:c},s.a.createElement(b.default,{title:s.a.createElement(v.a,{id:"uiElements.tags.addRemoveDynamically"}),subtitle:s.a.createElement(v.a,{id:"uiElements.tags.addRemoveDynamicallySubTitle"})},s.a.createElement(w.default,null,a.map(function(n,e){var a=n.length>20,r=s.a.createElement(V,{key:n,closable:0!==e,afterClose:function(){return t.handleClose(n)}},a?"".concat(n.slice(0,20),"..."):n);return a?s.a.createElement(g.a,{title:n},r):r}),r&&s.a.createElement(f.d,{id:"newTagsInput",type:"text",size:"small",style:{width:78},value:l,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!r&&s.a.createElement(h.b,{size:"small",type:"dashed",onClick:this.showInput},s.a.createElement(v.a,{id:"uiElements.tags.newTag"})))))))}}]),n}(u.Component)}}]);
//# sourceMappingURL=77.562b3845.chunk.js.map