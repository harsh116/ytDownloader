(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(9),i=n.n(a),c=(n(15),n(3)),l=(n(16),n(17),"https://plausible-wobbly-sock.glitch.me"),o=n(0),r=function(e){var t=e.quality,n=e.type,a=e.setIsLoading,i=e.setIsDownloadLinkAvailable,r=e.setDownloadLinks,u=e.setPlaylistName,d=e.setPlaylistLength,b=e.setIsResultVisible,p=Object(s.useState)(""),j=Object(c.a)(p,2),h=j[0],v=j[1],f=function(){return!(h.length>=4&&"http"===h.substr(0,4))};return Object(o.jsx)("div",{className:"Playlist",children:Object(o.jsxs)("div",{className:"playlistInput",children:[Object(o.jsx)("input",{onChange:function(e){v(e.target.value)},className:"inputLink",type:"text",placeholder:"Insert the url of youtube playlist"}),Object(o.jsx)("button",{className:"".concat(f()?"disabled":""),onClick:f()?function(){}:function(){var e=/http[s]?[:]\/\/m\.youtube\.com\/playlist[?]list[=].+/;if(/http[s]?[:]\/\/www\.youtube\.com\/playlist[?]list[=].+/.test(h)||e.test(h)){var s=h;e.test(h)&&(s=h.replace("m","www")),a(!0),b(!1),i(!1),fetch("".concat(l,"/getList"),{method:"post",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({playlistURL:s,quality:t,type:n})}).then((function(e){return e.json()})).then((function(e){b(!0),console.log(e),a(!1);var t=null===e||void 0===e?void 0:e[0],n=t.videoList,s=t.playListName,c=t.audioList;n?(r(n),d(n.length),u(s),i(!0)):c&&(r(c),d(c.length),u(s),i(!0))})).catch((function(e){r([]),u(""),d(0),console.log(e),b(!1),a(!1),alert("some error")}))}else alert("Invalid playlist link")},children:"Generate Link"})]})})},u=(n(19),function(e){var t=e.quality,n=e.type,a=e.setIsLoading,i=e.setIsDownloadLinkAvailable,r=e.setDownloadLinks,u=e.setPlaylistName,d=e.setIsResultVisible,b=Object(s.useState)(""),p=Object(c.a)(b,2),j=p[0],h=p[1],v=function(){return!(j.length>=4&&"http"===j.substr(0,4))};return Object(o.jsx)("div",{className:"IndividualVideos",children:Object(o.jsxs)("div",{className:"videosInput",children:[Object(o.jsx)("input",{onChange:function(e){h(e.target.value)},className:"inputLink",type:"text",placeholder:"Insert video links separated by commas"}),Object(o.jsx)("button",{className:"".concat(v()?"disabled":""),onClick:v()?function(){}:function(){var e=/http[s]?[:]\/\/www\.youtube\.com\/watch[?]v[=].+/,s=/http[s]?[:]\/\/m\.youtube\.com\/watch[?]v[=].+/;if(e.test(j))if(e.test(j)||s.test(j)){var c=j;s.test(j)&&(c=j.replace("m","www")),a(!0),d(!1),i(!1),fetch("".concat(l,"/getIndividualList"),{method:"post",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({urls:c,quality:t,type:n})}).then((function(e){return e.json()})).then((function(e){console.log(e),a(!1),e.length>0&&(r(e),u(e[0].playListName),i(!0))})).catch((function(e){console.log(e),r([]),u(""),a(!1),alert("some error")}))}else alert("Invalid playlist link");else alert("Invalid video link")},children:"Generate Link"})]})})}),d=(n(20),n(10)),b=n.n(d);var p=function(e){var t=e.visible,n=e.text,s=e.type,a=e.classes||"",i=e.color||"#fff",c=e.color;return Object(o.jsxs)("div",{className:"Spinner ".concat(a," ").concat(t?"":"none"),children:[Object(o.jsx)(b.a,{type:s,color:i,height:50,width:50,timeout:0}),Object(o.jsx)("span",{style:c?{color:i}:{},class:"Loading_Text",children:n})]})},j=n(6),h=n(4),v=n.n(h),f=n(8),O=(n(42),function(e){var t=e.downloadLinks,n=e.playlistName,s=e.type,a=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},i=function(){var e=Object(f.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=document.createElement("a")).setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener noreferrer"),n.dispatchEvent(new MouseEvent("click",{ctrlKey:!0})),"audio"!==s){e.next=10;break}return e.next=8,a(3e3);case 8:e.next=12;break;case 10:return e.next=12,a(1e4);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(f.a)(v.a.mark((function e(){var s,a,c,l,o,r,u,d,b;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("videos"!==n){e.next=20;break}s=Object(j.a)(t),e.prev=2,s.s();case 4:if((a=s.n()).done){e.next=10;break}return c=a.value,e.next=8,i(c.videoURL);case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),s.e(e.t0);case 15:return e.prev=15,s.f(),e.finish(15);case 18:e.next=57;break;case 20:if("audios"!==n){e.next=40;break}l=Object(j.a)(t),e.prev=22,l.s();case 24:if((o=l.n()).done){e.next=30;break}return r=o.value,e.next=28,i(r.audioURL);case 28:e.next=24;break;case 30:e.next=35;break;case 32:e.prev=32,e.t1=e.catch(22),l.e(e.t1);case 35:return e.prev=35,l.f(),e.finish(35);case 38:e.next=57;break;case 40:u=Object(j.a)(t),e.prev=41,u.s();case 43:if((d=u.n()).done){e.next=49;break}return b=d.value,e.next=47,i(b.downURL);case 47:e.next=43;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e.catch(41),u.e(e.t2);case 54:return e.prev=54,u.f(),e.finish(54);case 57:case"end":return e.stop()}}),e,null,[[2,12,15,18],[22,32,35,38],[41,51,54,57]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"Download",children:Object(o.jsx)("button",{onClick:c,children:"Download"})})}),x=(n(43),function(e){var t=e.setQuality,n=e.setType;return Object(o.jsxs)("div",{className:"Format",children:[Object(o.jsx)("label",{htmlFor:"",children:"Format: "}),Object(o.jsxs)("select",{onChange:function(e){var s=e.target.value;e.target.selectedIndex<6?(n("video"),t(s)):n("audio")},name:"Format",id:"",children:[Object(o.jsxs)("optgroup",{label:"Video",children:[Object(o.jsx)("option",{value:"144",children:"144p"}),Object(o.jsx)("option",{value:"240",children:"240p"}),Object(o.jsx)("option",{value:"360",children:"360p"}),Object(o.jsx)("option",{selected:!0,value:"480",children:"480p"}),Object(o.jsx)("option",{value:"720",children:"720p"}),Object(o.jsx)("option",{value:"1080",children:"1080p"})]}),Object(o.jsx)("optgroup",{label:"Audio",children:Object(o.jsx)("option",{value:"mp3",children:"128kbps"})})]})]})}),y=(n(44),function(e){return Object(o.jsxs)("div",{className:"Result",children:[Object(o.jsx)("h3",{children:e.playlistName}),Object(o.jsxs)("p",{children:[e.playlistLength?e.playlistLength:0," videos found in playlist"]})]})});var m=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(!1),l=Object(c.a)(i,2),d=l[0],b=l[1],j=Object(s.useState)("480"),h=Object(c.a)(j,2),v=h[0],f=h[1],m=Object(s.useState)("video"),k=Object(c.a)(m,2),g=k[0],w=k[1],L=Object(s.useState)([]),N=Object(c.a)(L,2),I=N[0],S=N[1],R=Object(s.useState)(""),D=Object(c.a)(R,2),A=D[0],P=D[1],C=Object(s.useState)(0),V=Object(c.a)(C,2),q=V[0],F=V[1],E=Object(s.useState)(!1),J=Object(c.a)(E,2),T=J[0],U=J[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(x,{setQuality:f,setType:w}),Object(o.jsx)(r,{quality:v,type:g,setIsLoading:b,setIsDownloadLinkAvailable:a,setDownloadLinks:S,setPlaylistName:P,setPlaylistLength:F,setIsResultVisible:U}),Object(o.jsx)("div",{className:"OR",children:"OR"}),Object(o.jsx)("div",{className:"labelIndividualVideos",children:"For downloading videos separately"}),Object(o.jsx)(u,{quality:v,type:g,setIsLoading:b,setIsDownloadLinkAvailable:a,setDownloadLinks:S,setPlaylistName:P,setIsResultVisible:U}),Object(o.jsx)(p,{classes:"center mgtop",visible:d,text:"Loading",type:"Circles",color:"black"}),n?Object(o.jsx)(O,{type:g,downloadLinks:I,playlistName:A}):"",0!=q&&T?Object(o.jsx)(y,{playlistName:A,playlistLength:q}):""]})};i.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2488ef92.chunk.js.map