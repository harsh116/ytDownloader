(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(9),c=n.n(s),i=(n(15),n(3)),l=(n(16),n(17),"https://puppeteer-test-zoqc.onrender.com"),o=n(0),r=function(e){var t=e.quality,n=e.type,s=e.setIsLoading,c=e.setIsDownloadLinkAvailable,r=e.setDownloadLinks,u=e.setPlaylistName,d=e.setPlaylistLength,p=Object(a.useState)(""),b=Object(i.a)(p,2),j=b[0],h=b[1],v=function(){return!(j.length>=4&&"http"===j.substr(0,4))};return Object(o.jsx)("div",{className:"Playlist",children:Object(o.jsxs)("div",{className:"playlistInput",children:[Object(o.jsx)("input",{onChange:function(e){h(e.target.value)},className:"inputLink",type:"text",placeholder:"Insert the url of youtube playlist"}),Object(o.jsx)("button",{className:"".concat(v()?"disabled":""),onClick:v()?function(){}:function(){var e=/http[s]?[:]\/\/m\.youtube\.com\/playlist[?]list[=].+/;if(/http[s]?[:]\/\/www\.youtube\.com\/playlist[?]list[=].+/.test(j)||e.test(j)){var a=j;e.test(j)&&(a=j.replace("m","www")),s(!0),c(!1),fetch("".concat(l,"/getList"),{method:"post",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({playlistURL:a,quality:t,type:n})}).then((function(e){return e.json()})).then((function(e){console.log(e),s(!1);var t=null===e||void 0===e?void 0:e[0],n=t.videoList,a=t.playListName,i=t.audioList;n?(r(n),d(n.length),u(a),c(!0)):i&&(r(i),d(i.length),u(a),c(!0))})).catch((function(e){r([]),u(""),d(0),console.log(e),s(!1),alert("some error")}))}else alert("Invalid playlist link")},children:"Generate Link"})]})})},u=(n(19),function(e){var t=e.quality,n=e.type,s=e.setIsLoading,c=e.setIsDownloadLinkAvailable,r=e.setDownloadLinks,u=e.setPlaylistName,d=Object(a.useState)(""),p=Object(i.a)(d,2),b=p[0],j=p[1],h=function(){return!(b.length>=4&&"http"===b.substr(0,4))};return Object(o.jsx)("div",{className:"IndividualVideos",children:Object(o.jsxs)("div",{className:"videosInput",children:[Object(o.jsx)("input",{onChange:function(e){j(e.target.value)},className:"inputLink",type:"text",placeholder:"Insert video links separated by commas"}),Object(o.jsx)("button",{className:"".concat(h()?"disabled":""),onClick:h()?function(){}:function(){var e=/http[s]?[:]\/\/www\.youtube\.com\/watch[?]v[=].+/,a=/http[s]?[:]\/\/m\.youtube\.com\/watch[?]v[=].+/;if(e.test(b))if(e.test(b)||a.test(b)){var i=b;a.test(b)&&(i=b.replace("m","www")),s(!0),c(!1),fetch("".concat(l,"/getIndividualList"),{method:"post",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({urls:i,quality:t,type:n})}).then((function(e){return e.json()})).then((function(e){console.log(e),s(!1),e.length>0&&(r(e),u(e[0].playListName),c(!0))})).catch((function(e){console.log(e),r([]),u(""),s(!1),alert("some error")}))}else alert("Invalid playlist link");else alert("Invalid video link")},children:"Generate Link"})]})})}),d=(n(20),n(10)),p=n.n(d);var b=function(e){var t=e.visible,n=e.text,a=e.type,s=e.classes||"",c=e.color||"#fff",i=e.color;return Object(o.jsxs)("div",{className:"Spinner ".concat(s," ").concat(t?"":"none"),children:[Object(o.jsx)(p.a,{type:a,color:c,height:50,width:50,timeout:0}),Object(o.jsx)("span",{style:i?{color:c}:{},class:"Loading_Text",children:n})]})},j=n(6),h=n(4),v=n.n(h),f=n(8),x=(n(42),function(e){var t=e.downloadLinks,n=e.playlistName,a=e.type,s=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},c=function(){var e=Object(f.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=document.createElement("a")).setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer"),n.dispatchEvent(new MouseEvent("click",{ctrlKey:!0})),"audio"!==a){e.next=10;break}return e.next=8,s(3e3);case 8:e.next=12;break;case 10:return e.next=12,s(1e4);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(f.a)(v.a.mark((function e(){var a,s,i,l,o,r,u,d,p;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("videos"!==n){e.next=20;break}a=Object(j.a)(t),e.prev=2,a.s();case 4:if((s=a.n()).done){e.next=10;break}return i=s.value,e.next=8,c(i.videoURL);case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),a.e(e.t0);case 15:return e.prev=15,a.f(),e.finish(15);case 18:e.next=57;break;case 20:if("audios"!==n){e.next=40;break}l=Object(j.a)(t),e.prev=22,l.s();case 24:if((o=l.n()).done){e.next=30;break}return r=o.value,e.next=28,c(r.audioURL);case 28:e.next=24;break;case 30:e.next=35;break;case 32:e.prev=32,e.t1=e.catch(22),l.e(e.t1);case 35:return e.prev=35,l.f(),e.finish(35);case 38:e.next=57;break;case 40:u=Object(j.a)(t),e.prev=41,u.s();case 43:if((d=u.n()).done){e.next=49;break}return p=d.value,e.next=47,c(p.downURL);case 47:e.next=43;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e.catch(41),u.e(e.t2);case 54:return e.prev=54,u.f(),e.finish(54);case 57:case"end":return e.stop()}}),e,null,[[2,12,15,18],[22,32,35,38],[41,51,54,57]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"Download",children:Object(o.jsx)("button",{onClick:i,children:"Download"})})}),y=(n(43),function(e){var t=e.setQuality,n=e.setType;return Object(o.jsxs)("div",{className:"Format",children:[Object(o.jsx)("label",{htmlFor:"",children:"Format: "}),Object(o.jsxs)("select",{onChange:function(e){var a=e.target.value;e.target.selectedIndex<6?(n("video"),t(a)):n("audio")},name:"Format",id:"",children:[Object(o.jsxs)("optgroup",{label:"Video",children:[Object(o.jsx)("option",{value:"144",children:"144p"}),Object(o.jsx)("option",{value:"240",children:"240p"}),Object(o.jsx)("option",{value:"360",children:"360p"}),Object(o.jsx)("option",{selected:!0,value:"480",children:"480p"}),Object(o.jsx)("option",{value:"720",children:"720p"}),Object(o.jsx)("option",{value:"1080",children:"1080p"})]}),Object(o.jsx)("optgroup",{label:"Audio",children:Object(o.jsx)("option",{value:"mp3",children:"128kbps"})})]})]})}),O=(n(44),function(e){return Object(o.jsxs)("div",{className:"Result",children:[Object(o.jsx)("h3",{children:e.playlistName}),Object(o.jsxs)("p",{children:[e.playlistLength?e.playlistLength:0," videos found in playlist"]})]})});var m=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),l=Object(i.a)(c,2),d=l[0],p=l[1],j=Object(a.useState)("480"),h=Object(i.a)(j,2),v=h[0],f=h[1],m=Object(a.useState)("video"),k=Object(i.a)(m,2),g=k[0],w=k[1],L=Object(a.useState)([]),N=Object(i.a)(L,2),I=N[0],S=N[1],D=Object(a.useState)(""),A=Object(i.a)(D,2),P=A[0],q=A[1],C=Object(a.useState)(0),R=Object(i.a)(C,2),F=R[0],E=R[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(y,{setQuality:f,setType:w}),Object(o.jsx)(r,{quality:v,type:g,setIsLoading:p,setIsDownloadLinkAvailable:s,setDownloadLinks:S,setPlaylistName:q,setPlaylistLength:E}),Object(o.jsx)("div",{className:"OR",children:"OR"}),Object(o.jsx)("div",{className:"labelIndividualVideos",children:"For downloading videos separately"}),Object(o.jsx)(u,{quality:v,type:g,setIsLoading:p,setIsDownloadLinkAvailable:s,setDownloadLinks:S,setPlaylistName:q}),Object(o.jsx)(b,{classes:"center mgtop",visible:d,text:"Loading",type:"Circles",color:"black"}),n?Object(o.jsx)(x,{type:g,downloadLinks:I,playlistName:P}):"",0!=F?Object(o.jsx)(O,{playlistName:P,playlistLength:F}):""]})};c.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.76cea0f9.chunk.js.map