(this["webpackJsonppay-with-dai"]=this["webpackJsonppay-with-dai"]||[]).push([[0],{10:function(e,a,t){e.exports=t(21)},15:function(e,a,t){},16:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(6),r=t.n(l),o=(t(15),t(8)),i=(t(16),t(9)),s=t(7),m=t.n(s),d=t(1),u=t.n(d),h={},f=function(e){var a=e.value,t=void 0===a?"":a,c=e.level,l=void 0===c?"L":c,r=e.bgColor,o=void 0===r?"#FFFFFF":r,s=e.fgColor,d=void 0===s?"#000000":s,f=e.cellClassPrefix,v=void 0===f?"":f,g=Object(i.a)(e,["value","level","bgColor","fgColor","cellClassPrefix"]),p=function(e,a){var t="".concat(e,":").concat(a);if(!h[t]){var c=new m.a(-1,u.a[a]);c.addData(e),c.make(),h[t]=c.modules}return h[t]}(t,l),E=200/p.length,w=v&&"".concat(v,"-cell"),y=v&&"".concat(w," ").concat(v,"-cell-empty"),H=v&&"".concat(w," ").concat(v,"-cell-filled"),b=0;return n.a.createElement("g",g,p.map((function(e,a){return e.map((function(e,t){var c=e?H:y,l=c?{className:c}:null,r=!l&&(e?d:o),i=r?{style:{fill:r}}:null;return n.a.createElement("rect",Object.assign({height:E,key:b++},i,l,{width:E,x:t*E,y:a*E}))}))})))};var v=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),t=a[0],l=a[1];return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},t.length>=40&&n.a.createElement("div",{style:{padding:"10px",background:"white",margin:"10px"}},n.a.createElement("svg",{height:"200",width:"200"},n.a.createElement(f,{value:t,level:"L"}),n.a.createElement("g",{transform:"translate(50,50) scale(0.5)","transform-origin":"50 50"},n.a.createElement("path",{d:"M50,0A50,50,0,1,1,0,50,49.99963,49.99963,0,0,1,50,0Z",transform:"scale(1.1)",style:{fill:"#ececec"},"transform-origin":"50 50"}),n.a.createElement("path",{d:"M50,0A50,50,0,1,1,0,50,49.99963,49.99963,0,0,1,50,0Z",transform:"translate(0 0)",style:{fill:"#f5ac37"}}),n.a.createElement("path",{d:"M51.84277,53.53029H70.842c.405,0,.59625,0,.62551-.531a36.31923,36.31923,0,0,0,0-5.81181c0-.37575-.18675-.531-.594-.531H33.06183c-.468,0-.594.15525-.594.594v5.56206c0,.71776,0,.71776.74926.71776ZM69.3457,40.15615a.60841.60841,0,0,0,0-.4365,12.35742,12.35742,0,0,0-1.12951-1.96877,15.94217,15.94217,0,0,0-2.313-2.907,7.667,7.667,0,0,0-1.43776-1.40627,22.46261,22.46261,0,0,0-9.37585-4.74979,23.306,23.306,0,0,0-5.3123-.56251H32.99658c-.468,0-.531.18675-.531.594V39.8119c0,.468,0,.594.594.594H69.12069s.31276-.063.37576-.24975H69.3457Zm0,19.87445a7.29155,7.29155,0,0,0-1.59752,0H33.09333c-.468,0-.6255,0-.6255.6255V71.50121c0,.49951,0,.62551.6255.62551H49.09324a7.99173,7.99173,0,0,0,2.27928-.15525,23.81833,23.81833,0,0,0,6.78381-1.50077,12.4166,12.4166,0,0,0,2.27928-1.062h.21825a20.30178,20.30178,0,0,0,8.71883-8.77734s.21826-.47251-.027-.59626ZM26.188,77.74952V60.46935c0-.40725,0-.468-.49951-.468H18.90694c-.37575,0-.531,0-.531-.4995V53.564h7.24957c.405,0,.56251,0,.56251-.531V47.15822c0-.37575,0-.468-.49951-.468H18.90694c-.37575,0-.531,0-.531-.49951V40.69166c0-.34426,0-.43651.4995-.43651H25.594c.468,0,.594,0,.594-.594V22.81748c0-.49951,0-.62551.6255-.62551H50.24976a35.70742,35.70742,0,0,1,5.06255.56251,30.54613,30.54613,0,0,1,9.78084,3.62478,27.56438,27.56438,0,0,1,5.49906,4.2503,30.11235,30.11235,0,0,1,3.34353,4.15579,25.06367,25.06367,0,0,1,2.44128,4.7813.81373.81373,0,0,0,.93375.657h5.59356c.71776,0,.71776,0,.74926.68851v5.12555c0,.49951-.18675.62551-.68851.62551H78.65179c-.43651,0-.56251,0-.531.5625a31.92156,31.92156,0,0,1,0,5.71731c0,.531,0,.594.59626.594h4.9343c.21825.28125,0,.5625,0,.846a6.31271,6.31271,0,0,1,0,1.09127V59.2566c0,.531-.15526.6885-.62551.6885H77.11952a.78188.78188,0,0,0-.90676.594,24.98877,24.98877,0,0,1-6.56332,9.5626,37.63817,37.63817,0,0,1-3.34353,2.68652c-1.251.72-2.46827,1.46927-3.75079,2.06328a33.78744,33.78744,0,0,1-7.37557,2.34227,38.451,38.451,0,0,1-7.31257.594H26.179v-.0315Z",style:{fill:"#fefefd"}}))),n.a.createElement("div",{style:{color:"black",textAlign:"center",fontSize:"18px"}},"Pay with Dai")),n.a.createElement("input",{value:t,placeholder:"Ethereum Address",onChange:function(e){return l(e.target.value)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b7d0f3d8.chunk.js.map