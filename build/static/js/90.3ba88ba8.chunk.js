(window.webpackJsonp=window.webpackJsonp||[]).push([[90,132,133,134,135],{1183:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(21);function a(){var n=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n  .isoBoxWrapper {\n border: none;\n }\n"]);return a=function(){return n},n}var l=e(20).c.div(a());t.default=function(n){return o.a.createElement(l,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},1184:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(21),a=e(20),l=e(2);function c(){var n=Object(i.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return n},n}function s(){var n=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return n},n}var d=a.c.h3(s(),Object(l.palette)("text",0)),u=a.c.p(c(),Object(l.palette)("text",3)),p=function(n){return o.a.createElement("div",null,n.title?o.a.createElement(d,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?o.a.createElement(u,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")};function m(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return m=function(){return n},n}var h=a.c.div(m(),Object(l.palette)("border",0),"");t.default=function(n){return o.a.createElement(h,{className:"".concat(n.className," isoBoxWrapper"),style:n.style},o.a.createElement(p,{title:n.title,subtitle:n.subtitle}),n.children)}},1187:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(21),a=e(20),l=e(2),c=e(27);function s(){var n=Object(i.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return n},n}var d=a.c.h1(s(),Object(l.palette)("secondary",2),Object(l.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(l.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),u=Object(c.a)(d);t.default=function(n){return o.a.createElement(u,{className:"isoComponentTitle"},n.children)}},1188:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(21),a=e(20),l=e(2),c=e(27);function s(){var n=Object(i.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return s=function(){return n},n}var d=a.c.div(s(),function(n){return"rtl"===n["data-rtl"]?"0":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"70px"},function(n){return"rtl"===n["data-rtl"]?"70px":"0"},function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"0":"295px"},function(n){return"rtl"===n["data-rtl"]?"295px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"70px"},function(n){return"rtl"===n["data-rtl"]?"70px":"0"},function(n){return"rtl"===n["data-rtl"]?"8px":"0 !important"},function(n){return"rtl"===n["data-rtl"]?"0 !important":"8px"},function(n){return"rtl"===n["data-rtl"]?"0":"8px"},function(n){return"rtl"===n["data-rtl"]?"8px":"0"},Object(l.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"auto":"6px"},function(n){return"rtl"===n["data-rtl"]?"6px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"0"},function(n){return n["data-rtl"],"0"},function(n){return n["data-rtl"],"0"}),u=Object(c.a)(d);t.default=function(n){return o.a.createElement(u,{className:"isoExampleWrapper",style:n.style},n.children)}},1190:function(n,t,e){"use strict";var r={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.a=r},1226:function(n,t,e){"use strict";var r=e(1345),o=e(21),i=e(20),a=e(2),l=e(6);function c(){var n=Object(o.a)(["\n  &.ant-select {\n    box-sizing: border-box;\n    display: inline-block;\n    position: relative;\n    color: ",";\n    font-size: 13px;\n\n    .ant-select-selection {\n      background-color: #fff;\n      border-radius: 4px;\n      border: 1px solid ",";\n      ",";\n\n      &.ant-select-selection--single {\n        height: 35px;\n        position: relative;\n        cursor: pointer;\n      }\n\n      .ant-select-selection__rendered {\n        margin-left: 10px;\n        margin-right: 10px;\n        line-height: 33px;\n\n        .ant-select-selection-selected-value {\n          float: ",";\n          padding: ",";\n        }\n      }\n\n      .ant-select-arrow {\n        right: ",";\n        left: ",";\n      }\n\n      &:hover {\n        border-color: ",";\n      }\n    }\n\n    &.ant-select-focused {\n      .ant-select-selection {\n        &:focus,\n        &:active {\n          border-color: ",";\n          outline: 0;\n          box-shadow: 0 0 0 2px ",";\n        }\n      }\n    }\n\n    &.ant-select-open {\n      .ant-select-selection {\n        border-color: ",";\n        outline: 0;\n        box-shadow: 0 0 0 2px ",";\n      }\n    }\n\n    .ant-select-selection--multiple > ul > li,\n    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n      margin-top: 4px;\n      height: 26px;\n      line-height: 26px;\n    }\n\n    .ant-select-selection--multiple .ant-select-selection__choice {\n      background-color: ",";\n      color: ",";\n    }\n\n    .ant-select-tree li a {\n      font-size: 13px;\n      color: ",";\n    }\n  }\n"]);return c=function(){return n},n}var s=e(27);e.d(t,"a",function(){return m});var d,u=(d=r.a,Object(i.c)(d)(c(),Object(a.palette)("text",1),Object(a.palette)("border",0),Object(l.c)(),function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 14px":"0 14px 0 0"},function(n){return"rtl"===n["data-rtl"]?"inherit":"7px"},function(n){return"rtl"===n["data-rtl"]?"7px":"inherit"},Object(a.palette)("primary",0),Object(a.palette)("primary",0),Object(a.palette)("primary",3),Object(a.palette)("primary",0),Object(a.palette)("primary",3),Object(a.palette)("grayscale",4),Object(a.palette)("text",1),Object(a.palette)("text",1))),p=Object(s.a)(u),m=r.a.Option;t.b=p},1253:function(n,t,e){"use strict";var r=e(2710);t.a=r.a},1327:function(n,t,e){"use strict";var r=e(1378),o=e(21),i=e(20),a=e(2);function l(){var n=Object(o.a)(["\n  &.ant-switch-checked {\n    border-color: ",";\n    background-color: ",";\n  }\n"]);return l=function(){return n},n}var c=function(n){return Object(i.c)(n)(l(),Object(a.palette)("primary",0),Object(a.palette)("primary",0))}(r.a);t.a=c},2794:function(n,t,e){"use strict";e.r(t);var r=e(44),o=e(5),i=e(13),a=e(14),l=e(19),c=e(17),s=e(18),d=e(8),u=e(0),p=e.n(u),m=e(28),h=e(29),b=e(1327),f=e(1226),g=e(1253),x=e(1187),v=e(1184),w=e(1183),y=e(1188),C=e(1190),k=[{id:"lineNumbers",title:"Line Numbers",trueValue:!0,falseValue:!1,value:!0},{id:"readOnly",title:"Read Only",trueValue:!1,falseValue:!0,value:!0}],O=[{id:"tabSize",title:"Tab Size",options:["uk.png","4","6","8"],value:2},{id:"mode",title:"Language",options:["javascript","xml","markdown","php","python","ruby"],value:"javascript"},{id:"theme",title:"Select themes",options:["default","zenburn","solarized","rubyblue","paraiso-dark","midnight","material","hopscotch","twilight"],value:"zenburn"}],j={basic:"const component = {\n    name: 'Isomorphic',\n    author: 'RedQ Team',\n    website: 'https://isomorphic.redq.io/'\n};",javascript:"const component = {\n    name: 'Isomorphic',\n    author: 'RedQ Team',\n    website: 'https://isomorphic.redq.io/'\n};",markdown:"# Isomorphic\n###This is a RedQ Team production\n[have a look](https://isomorphic.redq.io/)\n  ",xml:"<isomprphic>\n    <to>Tove</to>\n    <name>Isomorphic</name>\n    <author>RedQ Team</author>\n    <website>isomorphic.redq.io</website>\n</isomprphic>",php:'<html>\n <head>\n  <title> v</title>\n </head>\n <body>\n <h1>https://isomorphic.redq.io/</h1>\n <p>This is a RedQ Team production</p>\n <a href="https://isomorphic.redq.io/">visit ou site</a>\n </body>\n</html>\n',python:'\nprint("Isomorphic")\nprint("This is a RedQ Team production")\nprint("visit us https://isomorphic.redq.io ")\n',ruby:'rint "Isomorphic"\nprint "This is a RedQ Team production"\nprint "visit us https://isomorphic.redq.io "\n'},E=e(21),M=e(2464),z=e.n(M),N=(e(1907),e(1699),e(2465),e(2467),e(2471),e(2472),e(2474),e(2476),e(2478),e(2480),e(2482),e(2484),e(2486),e(2488),e(2490),z.a),T=e(20);function S(){var n=Object(E.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n\n  .ant-form-item {\n    display: flex;\n    align-items: center;\n    margin-right: 30px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"]);return S=function(){return n},n}function B(){var n=Object(E.a)(["\n  .CodeMirror {\n    font-family: monospace;\n    height: 300px;\n    position: relative;\n    overflow: hidden;\n    pre {\n      padding: 0 4px;\n      -moz-border-radius: 0;\n      -webkit-border-radius: 0;\n      border-radius: 0;\n      border-width: 0;\n      background: transparent;\n      font-family: inherit;\n      font-size: inherit;\n      margin: 0;\n      white-space: pre;\n      word-wrap: normal;\n      line-height: inherit;\n      color: inherit;\n      z-index: 2;\n      position: relative;\n      overflow: visible;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-font-variant-ligatures: contextual;\n      font-variant-ligatures: contextual;\n    }\n    div.CodeMirror-secondarycursor {\n      border-left: 1px solid silver;\n    }\n  }\n  .CodeMirror-lines {\n    padding: 4px 0;\n    cursor: text;\n    min-height: 1px;\n  }\n  .CodeMirror-scrollbar-filler {\n    background-color: white;\n    position: absolute;\n    z-index: 6;\n    display: none;\n    right: 0;\n    bottom: 0;\n  }\n  .CodeMirror-gutter-filler {\n    background-color: white;\n    position: absolute;\n    z-index: 6;\n    display: none;\n    left: 0;\n    bottom: 0;\n  }\n  .CodeMirror-gutters {\n    border-right: 1px solid #dddddd;\n    background-color: #f7f7f7;\n    white-space: nowrap;\n    position: absolute;\n    left: 0;\n    top: 0;\n    min-height: 100%;\n    z-index: 3;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-linenumbers {\n  }\n  .CodeMirror-linenumber {\n    padding: 0 3px 0 5px;\n    min-width: 20px;\n    text-align: right;\n    color: #999999;\n    white-space: nowrap;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-guttermarker {\n    color: black;\n  }\n  .CodeMirror-guttermarker-subtle {\n    color: #999999;\n  }\n  .CodeMirror-cursor {\n    border-left: 1px solid black;\n    border-right: none;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n  .cm-fat-cursor .CodeMirror-cursor {\n    width: auto;\n    border: 0 !important;\n    background: #77ee77;\n  }\n  .cm-fat-cursor div.CodeMirror-cursors {\n    z-index: 1;\n  }\n  .cm-animate-fat-cursor {\n    width: auto;\n    border: 0;\n    -webkit-animation: blink 1.06s steps(1) infinite;\n    -moz-animation: blink 1.06s steps(1) infinite;\n    animation: blink 1.06s steps(1) infinite;\n    background-color: #77ee77;\n  }\n  .CodeMirror-overwrite .CodeMirror-cursor {\n  }\n  .cm-tab {\n    display: inline-block;\n    text-decoration: inherit;\n  }\n  .CodeMirror-rulers {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -50px;\n    bottom: -20px;\n    overflow: hidden;\n  }\n  .CodeMirror-ruler {\n    border-left: 1px solid #cccccc;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n  }\n  .cm-s-default {\n    .cm-variable,\n    .cm-punctuation,\n    .cm-property,\n    .cm-operator {\n    }\n    .cm-variable-3,\n    .cm-type {\n      color: #008855;\n    }\n    .cm-header {\n      color: blue;\n    }\n    .cm-quote {\n      color: #009900;\n    }\n    .cm-keyword {\n      color: #770088;\n    }\n    .cm-atom {\n      color: #221199;\n    }\n    .cm-number {\n      color: #116644;\n    }\n    .cm-def {\n      color: #0000ff;\n    }\n    .cm-variable-2 {\n      color: #0055aa;\n    }\n    .cm-comment {\n      color: #aa5500;\n    }\n    .cm-string {\n      color: #aa1111;\n    }\n    .cm-string-2 {\n      color: #ff5500;\n    }\n    .cm-meta {\n      color: #555555;\n    }\n    .cm-qualifier {\n      color: #555555;\n    }\n    .cm-builtin {\n      color: #3300aa;\n    }\n    .cm-bracket {\n      color: #999977;\n    }\n    .cm-tag {\n      color: #117700;\n    }\n    .cm-attribute {\n      color: #0000cc;\n    }\n    .cm-hr {\n      color: #999999;\n    }\n    .cm-link {\n      color: #0000cc;\n    }\n    .cm-error {\n      color: #ff0000;\n    }\n  }\n  .cm-negative {\n    color: #dd4444;\n  }\n  .cm-positive {\n    color: #229922;\n  }\n  .cm-header,\n  .cm-strong {\n    font-weight: bold;\n  }\n  .cm-em {\n    font-style: italic;\n  }\n  .cm-link {\n    text-decoration: underline;\n  }\n  .cm-strikethrough {\n    text-decoration: line-through;\n  }\n  .cm-invalidchar {\n    color: #ff0000;\n  }\n  .CodeMirror-composing {\n    border-bottom: 2px solid;\n  }\n  div.CodeMirror span.CodeMirror-matchingbracket {\n    color: #00ff00;\n  }\n  div.CodeMirror span.CodeMirror-nonmatchingbracket {\n    color: #ff2222;\n  }\n  .CodeMirror-matchingtag {\n    background: rgba(255, 150, 0, 0.3);\n  }\n  .CodeMirror-activeline-background {\n    background: #e8f2ff;\n  }\n  .CodeMirror-scroll {\n    overflow: scroll !important;\n    margin-bottom: -30px;\n    margin-right: -30px;\n    padding-bottom: 30px;\n    height: 100%;\n    outline: none;\n    position: relative;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-sizer {\n    position: relative;\n    border-right: 30px solid transparent;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-vscrollbar {\n    position: absolute;\n    z-index: 6;\n    display: none;\n    right: 0;\n    top: 0;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  .CodeMirror-hscrollbar {\n    position: absolute;\n    z-index: 6;\n    display: none;\n    bottom: 0;\n    left: 0;\n    overflow-y: hidden;\n    overflow-x: scroll;\n  }\n  .CodeMirror-gutter {\n    white-space: normal;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n    margin-bottom: -30px;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-gutter-wrapper {\n    position: absolute;\n    z-index: 4;\n    background: none !important;\n    border: none !important;\n    ::selection {\n      background-color: transparent;\n    }\n    ::-moz-selection {\n      background-color: transparent;\n    }\n  }\n  .CodeMirror-gutter-background {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    z-index: 4;\n  }\n  .CodeMirror-gutter-elt {\n    position: absolute;\n    cursor: default;\n    z-index: 4;\n  }\n  .CodeMirror-wrap pre {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: normal;\n  }\n  .CodeMirror-linebackground {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 0;\n  }\n  .CodeMirror-linewidget {\n    position: relative;\n    z-index: 2;\n    overflow: auto;\n  }\n  .CodeMirror-widget {\n  }\n  .CodeMirror-rtl pre {\n    direction: rtl;\n  }\n  .CodeMirror-code {\n    outline: none;\n  }\n  .CodeMirror-measure {\n    position: absolute;\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    pre {\n      position: static;\n    }\n  }\n  div.CodeMirror-cursors {\n    visibility: hidden;\n    position: relative;\n    z-index: 3;\n  }\n  div.CodeMirror-dragcursors {\n    visibility: visible;\n  }\n  .CodeMirror-focused div.CodeMirror-cursors {\n    visibility: visible;\n  }\n  .CodeMirror-focused .CodeMirror-selected {\n    background: #d7d4f0;\n  }\n  .CodeMirror-selected {\n    background: #d9d9d9;\n  }\n  .CodeMirror-crosshair {\n    cursor: crosshair;\n  }\n  .CodeMirror-line::selection,\n  .CodeMirror-line > span::selection,\n  .CodeMirror-line > span > span::selection {\n    background: #d7d4f0;\n  }\n  .CodeMirror-line::-moz-selection,\n  .CodeMirror-line > span::-moz-selection,\n  .CodeMirror-line > span > span::-moz-selection {\n    background: #d7d4f0;\n  }\n  .cm-searching {\n    background: #ffffaa;\n    background: rgba(255, 255, 0, 0.4);\n  }\n  .cm-force-border {\n    padding-right: 0.1px;\n  }\n  .cm-tab-wrap-hack:after {\n    content: '';\n  }\n  span.CodeMirror-selectedtext {\n    background: none;\n  }\n"]);return B=function(){return n},n}var q=Object(T.c)(function(n){return p.a.createElement(N,n)})(B()),R=T.c.div(S()),I=q;e.d(t,"default",function(){return _});var Q=g.a.Item,W=f.a,_=function(n){function t(n){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this,n))).updateCode=e.updateCode.bind(Object(d.a)(Object(d.a)(e))),e.toggleOptions=e.toggleOptions.bind(Object(d.a)(Object(d.a)(e))),e.selctOptions=e.selctOptions.bind(Object(d.a)(Object(d.a)(e))),e.state=Object(o.a)({},j,{basicOptions:{lineNumbers:!0,readOnly:!1,tabSize:4,mode:"javascript",theme:"zenburn"}}),e}return Object(s.a)(t,n),Object(a.a)(t,[{key:"updateCode",value:function(n,t){this.setState(Object(r.a)({},n,t))}},{key:"toggleOptions",value:function(){var n=this,t=this.state.basicOptions;return k.map(function(e,r){var o=e.id;return p.a.createElement(Q,{label:e.title,key:e.id},p.a.createElement(b.a,{checked:e.value===t[o],onChange:function(){t[o]=!t[o],n.setState(t)}}))})}},{key:"selctOptions",value:function(){var n=this,t=this.state.basicOptions;return O.map(function(e,r){var o=e.id;return p.a.createElement(Q,{label:e.title,key:e.id},p.a.createElement(f.b,{defaultValue:"".concat(t[o]),onChange:function(e){t[o]=isNaN(e)?e:parseInt(e,10),n.setState(t)}},e.options.map(function(n){return p.a.createElement(W,{value:n,key:n},n)})))})}},{key:"render",value:function(){var n=this,t=C.a.rowStyle,e=C.a.colStyle,r=C.a.gutter;return p.a.createElement(w.default,null,p.a.createElement(x.default,null,"Code Mirror"),p.a.createElement(m.a,{style:t,gutter:r,justify:"start"},p.a.createElement(h.a,{md:24,sm:24,xs:24,style:e},p.a.createElement(v.default,{title:"Basic Example"},p.a.createElement(y.default,null,p.a.createElement(R,{className:"isoOptionWrapper"},this.toggleOptions(),this.selctOptions()),p.a.createElement(I,{value:this.state.basic,onChange:function(t){return n.updateCode("basic",t)},options:this.state.basicOptions}))))),p.a.createElement(m.a,{style:t,gutter:r,justify:"start"},p.a.createElement(h.a,{md:12,sm:12,xs:24,style:e},p.a.createElement(v.default,{title:"Ruby Example"},p.a.createElement(y.default,null,p.a.createElement(I,{value:this.state.ruby,onChange:function(t){return n.updateCode("ruby",t)},options:{lineNumbers:!0,theme:"hopscotch"}})))),p.a.createElement(h.a,{md:12,sm:12,xs:24,style:e},p.a.createElement(v.default,{title:"Javascript Example"},p.a.createElement(y.default,null,p.a.createElement(I,{value:this.state.javascript,onChange:function(t){return n.updateCode("javascript",t)},options:{lineNumbers:!0,theme:"twilight"}}))))),p.a.createElement(m.a,{style:t,gutter:r,justify:"start"},p.a.createElement(h.a,{md:12,sm:12,xs:24,style:e},p.a.createElement(v.default,{title:"Markdown Example"},p.a.createElement(y.default,null,p.a.createElement(I,{value:this.state.markdown,onChange:function(t){return n.updateCode("markdown",t)},options:{lineNumbers:!0,theme:"rubyblue"}})))),p.a.createElement(h.a,{md:12,sm:12,xs:24,style:e},p.a.createElement(v.default,{title:"XML Example"},p.a.createElement(y.default,null,p.a.createElement(I,{value:this.state.xml,onChange:function(t){return n.updateCode("xml",t)},options:{lineNumbers:!0,theme:"paraiso-dark"}}))))),p.a.createElement(m.a,{style:t,gutter:r,justify:"start"},p.a.createElement(h.a,{md:12,sm:12,xs:24,style:e},p.a.createElement(v.default,{title:"PHP Example"},p.a.createElement(y.default,null,p.a.createElement(I,{value:this.state.php,onChange:function(t){return n.updateCode("php",t)},options:{lineNumbers:!0,theme:"midnight"}})))),p.a.createElement(h.a,{md:12,sm:12,xs:24,style:e},p.a.createElement(v.default,{title:"Python Example"},p.a.createElement(y.default,null,p.a.createElement(I,{value:this.state.python,onChange:function(t){return n.updateCode("python",t)},options:{lineNumbers:!0,theme:"material"}}))))))}}]),t}(u.Component)}}]);
//# sourceMappingURL=90.3ba88ba8.chunk.js.map