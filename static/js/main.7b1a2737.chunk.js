(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n(15),c=n.n(a),i=(n(23),n(5)),o=(n(24),n(7)),r=n.n(o),l=n(8),u=(n(26),"https://puppeteer-test-zoqc.onrender.com"),d=n(59),p=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},b=n(1),j=function(e){d.a.create({baseURL:u,timeout:36e5,headers:{Accept:"application/json","content-type":"application/json"}});var t=e.quality,n=e.type,a=e.setIsLoading,c=e.setIsDownloadLinkAvailable,o=e.setDownloadLinks,j=e.setPlaylistName,h=e.setPlaylistLength,v=e.setIsResultVisible,f=Object(s.useState)(""),x=Object(i.a)(f,2),O=x[0],y=x[1],m=function(){return!(O.length>=4&&"http"===O.substr(0,4))};return Object(b.jsx)("div",{className:"Playlist",children:Object(b.jsxs)("div",{className:"playlistInput",children:[Object(b.jsx)("input",{onChange:function(e){y(e.target.value)},className:"inputLink",type:"text",placeholder:"Insert the url of youtube playlist"}),Object(b.jsx)("button",{className:"".concat(m()?"disabled":""),onClick:m()?function(){}:function(){var e=/http[s]?[:]\/\/m\.youtube\.com\/playlist[?]list[=].+/;if(/http[s]?[:]\/\/www\.youtube\.com\/playlist[?]list[=].+/.test(O)||e.test(O)){var s=O;e.test(O)&&(s=O.replace("m","www")),a(!0),v(!1),c(!1),fetch("".concat(u,"/getList"),{method:"post",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({playlistURL:s,quality:t,type:n})}).then((function(e){return e.json()})).then(function(){var e=Object(l.a)(r.a.mark((function e(t){var n,s,i,l,d,b,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:return e.next=4,p(6e4);case 4:return e.next=6,fetch("".concat(u,"/getResponseState"));case 6:return s=e.sent,e.next=9,s.json();case 9:if(i=e.sent,console.log("mainData ",i),!1!==i.state){e.next=15;break}return e.next=14,p(1e4);case 14:return e.abrupt("continue",1);case 15:return v(!0),console.log(i),a(!1),l=null===(n=i.data)||void 0===n?void 0:n[0],d=l.videoList,b=l.playListName,f=l.audioList,d?(o(d),h(d.length),j(b),c(!0)):f&&(o(f),h(f.length),j(b),c(!0)),e.abrupt("break",23);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){o([]),j(""),h(0),console.log(e),v(!1),a(!1),alert("some error")}))}else alert("Invalid playlist link")},children:"Generate Link"})]})})},h=(n(32),function(e){var t=e.quality,n=e.type,a=e.setIsLoading,c=e.setIsDownloadLinkAvailable,o=e.setDownloadLinks,r=e.setPlaylistName,l=e.setIsResultVisible,d=Object(s.useState)(""),p=Object(i.a)(d,2),j=p[0],h=p[1],v=function(){return!(j.length>=4&&"http"===j.substr(0,4))};return Object(b.jsx)("div",{className:"IndividualVideos",children:Object(b.jsxs)("div",{className:"videosInput",children:[Object(b.jsx)("input",{onChange:function(e){h(e.target.value)},className:"inputLink",type:"text",placeholder:"Insert video links separated by commas"}),Object(b.jsx)("button",{className:"".concat(v()?"disabled":""),onClick:v()?function(){}:function(){var e=/http[s]?[:]\/\/www\.youtube\.com\/watch[?]v[=].+/,s=/http[s]?[:]\/\/m\.youtube\.com\/watch[?]v[=].+/;if(e.test(j))if(e.test(j)||s.test(j)){var i=j;s.test(j)&&(i=j.replace("m","www")),a(!0),l(!1),c(!1),fetch("".concat(u,"/getIndividualList"),{method:"post",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({urls:i,quality:t,type:n})}).then((function(e){return e.json()})).then((function(e){console.log(e),a(!1),e.length>0&&(o(e),r(e[0].playListName),c(!0))})).catch((function(e){console.log(e),o([]),r(""),a(!1),alert("some error")}))}else alert("Invalid playlist link");else alert("Invalid video link")},children:"Generate Link"})]})})}),v=(n(33),n(18)),f=n.n(v);var x=function(e){var t=e.visible,n=e.text,s=e.type,a=e.classes||"",c=e.color||"#fff",i=e.color;return Object(b.jsxs)("div",{className:"Spinner ".concat(a," ").concat(t?"":"none"),children:[Object(b.jsx)(f.a,{type:s,color:c,height:50,width:50,timeout:0}),Object(b.jsx)("span",{style:i?{color:c}:{},class:"Loading_Text",children:n})]})},O=n(12),y=(n(54),function(e){var t=e.downloadLinks,n=e.playlistName,s=e.type,a=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},c=function(){var e=Object(l.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=document.createElement("a")).setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer"),n.dispatchEvent(new MouseEvent("click",{ctrlKey:!0})),"audio"!==s){e.next=10;break}return e.next=8,a(3e3);case 8:e.next=12;break;case 10:return e.next=12,a(1e4);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(r.a.mark((function e(){var s,a,i,o,l,u,d,p,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("videos"!==n){e.next=20;break}s=Object(O.a)(t),e.prev=2,s.s();case 4:if((a=s.n()).done){e.next=10;break}return i=a.value,e.next=8,c(i.videoURL);case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),s.e(e.t0);case 15:return e.prev=15,s.f(),e.finish(15);case 18:e.next=57;break;case 20:if("audios"!==n){e.next=40;break}o=Object(O.a)(t),e.prev=22,o.s();case 24:if((l=o.n()).done){e.next=30;break}return u=l.value,e.next=28,c(u.audioURL);case 28:e.next=24;break;case 30:e.next=35;break;case 32:e.prev=32,e.t1=e.catch(22),o.e(e.t1);case 35:return e.prev=35,o.f(),e.finish(35);case 38:e.next=57;break;case 40:d=Object(O.a)(t),e.prev=41,d.s();case 43:if((p=d.n()).done){e.next=49;break}return b=p.value,e.next=47,c(b.downURL);case 47:e.next=43;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e.catch(41),d.e(e.t2);case 54:return e.prev=54,d.f(),e.finish(54);case 57:case"end":return e.stop()}}),e,null,[[2,12,15,18],[22,32,35,38],[41,51,54,57]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"Download",children:Object(b.jsx)("button",{onClick:i,children:"Download"})})}),m=(n(55),function(e){var t=e.setQuality,n=e.setType;return Object(b.jsxs)("div",{className:"Format",children:[Object(b.jsx)("label",{htmlFor:"",children:"Format: "}),Object(b.jsxs)("select",{onChange:function(e){var s=e.target.value;e.target.selectedIndex<6?(n("video"),t(s)):n("audio")},name:"Format",id:"",children:[Object(b.jsxs)("optgroup",{label:"Video",children:[Object(b.jsx)("option",{value:"144",children:"144p"}),Object(b.jsx)("option",{value:"240",children:"240p"}),Object(b.jsx)("option",{value:"360",children:"360p"}),Object(b.jsx)("option",{selected:!0,value:"480",children:"480p"}),Object(b.jsx)("option",{value:"720",children:"720p"}),Object(b.jsx)("option",{value:"1080",children:"1080p"})]}),Object(b.jsx)("optgroup",{label:"Audio",children:Object(b.jsx)("option",{value:"mp3",children:"128kbps"})})]})]})}),k=(n(56),function(e){return Object(b.jsxs)("div",{className:"Result",children:[Object(b.jsx)("h3",{children:e.playlistName}),Object(b.jsxs)("p",{children:[e.playlistLength?e.playlistLength:0," videos found in playlist"]})]})});var g=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),o=Object(i.a)(c,2),r=o[0],l=o[1],u=Object(s.useState)("480"),d=Object(i.a)(u,2),p=d[0],v=d[1],f=Object(s.useState)("video"),O=Object(i.a)(f,2),g=O[0],w=O[1],L=Object(s.useState)([]),N=Object(i.a)(L,2),I=N[0],S=N[1],R=Object(s.useState)(""),D=Object(i.a)(R,2),A=D[0],P=D[1],q=Object(s.useState)(0),C=Object(i.a)(q,2),V=C[0],F=C[1],T=Object(s.useState)(!1),U=Object(i.a)(T,2),E=U[0],J=U[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{setQuality:v,setType:w}),Object(b.jsx)(j,{quality:p,type:g,setIsLoading:l,setIsDownloadLinkAvailable:a,setDownloadLinks:S,setPlaylistName:P,setPlaylistLength:F,setIsResultVisible:J}),Object(b.jsx)("div",{className:"OR",children:"OR"}),Object(b.jsx)("div",{className:"labelIndividualVideos",children:"For downloading videos separately"}),Object(b.jsx)(h,{quality:p,type:g,setIsLoading:l,setIsDownloadLinkAvailable:a,setDownloadLinks:S,setPlaylistName:P,setIsResultVisible:J}),Object(b.jsx)(x,{classes:"center mgtop",visible:r,text:"Loading",type:"Circles",color:"black"}),n?Object(b.jsx)(y,{type:g,downloadLinks:I,playlistName:A}):"",0!=V&&E?Object(b.jsx)(k,{playlistName:A,playlistLength:V}):""]})};c.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.7b1a2737.chunk.js.map