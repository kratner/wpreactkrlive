(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(51)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(18),r=a.n(l),o=(a(38),a(6)),c=a(5),s=a(9),m=a(7),u=a(10),d=(a(39),a(40),a(72)),p="".concat("https://keithratner.live").concat("/wp-json").concat("/wpcms/v1").concat("/posts-by-category/","?"),h="".concat("https://optionexplicit.live").concat("/wp-json").concat("/wpcms/v1").concat("/posts-by-category/","?"),f="".concat(p,"name=links"),g="".concat(p,"name=prints"),v="".concat(h,"name=code"),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={posts:[],loadState:"loading"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="".concat(f);fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({posts:t,loadState:"loaded"})})}},{key:"render",value:function(){var e=this.state.posts.filter(function(e){return"project"===e.acf.type}).sort(function(e,t){return e.acf.weight>t.acf.weight?1:-1}).map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:e.acf.href,className:e.acf.class,title:e.title.rendered,target:e.acf.target},e.acf.text,i.a.createElement("span",{className:"icon-"+e.acf.icon+" inline-icon"})))});switch(this.state.loadState){case"loading":return i.a.createElement("div",{id:"project-links-container"},i.a.createElement(d.a,{className:"progress"}));case"loaded":return i.a.createElement("div",{id:"project-links-container"},i.a.createElement("h3",null,this.props.projectLinksTitle),i.a.createElement("ul",null,e))}}}]),t}(n.Component),b=a(73),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={posts:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="".concat(f);fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({posts:t})})}},{key:"render",value:function(){var e=this.state.posts.filter(function(e){return"social"===e.acf.type}).sort(function(e,t){return e.acf.weight>t.acf.weight?1:-1}).map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:e.acf.href,className:e.acf.class,title:e.title.rendered,target:e.acf.target},e.acf.text,i.a.createElement("span",{className:"icon-"+e.acf.icon})))});return i.a.createElement("div",{className:"social-links",id:"social-links-container"},0===e.length?i.a.createElement(b.a,{className:"progress"}):i.a.createElement("ul",null,e))}}]),t}(n.Component),k=a(78),j=a(15),w=a.n(j),O=a(74),S=a(80),L=a(77),_=a(75),x=a(76),N=Object(O.a)({card:{backgroundColor:"#040b2dba",color:"#f4b98e",textAlign:"left",margin:".4em",width:"47%",display:"inline-block",verticalAlign:"top","@media (max-width: 600px)":{width:"96.5%"},"@media (min-width: 1200px)":{width:"31.7%"}},cardActions:{},fullwidth:{width:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},content:{fontSize:"0.45em"},title:{color:"#f4b98e",fontSize:"0.8em",fontWeight:"bold"},pos:{marginBottom:12}});function C(e){var t=N();return i.a.createElement(S.a,{className:t.card},i.a.createElement(_.a,null,i.a.createElement(x.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.contentTitle),i.a.createElement(x.a,{className:t.content,component:"p",dangerouslySetInnerHTML:{__html:e.mainContent}})),i.a.createElement(L.a,{className:t.cardActions},i.a.createElement(k.a,{style:{color:"#f4b98e",fontSize:"0.75em"},size:"large",onClick:e.onClick,title:e.linkButtonTitle},e.linkButtonLabel,i.a.createElement(w.a,{style:{marginLeft:"0.2em"},fontSize:"inherit"}))))}var B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={posts:[],loadState:"inactive"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"loadOECodeSamplesList",value:function(){var e=this,t="".concat(v);this.setState({loadState:"loading"}),fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({posts:t,loadState:"loaded"})})}},{key:"handleOECodeCardClick",value:function(e){window.open(e,"_blank")}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.posts.sort(function(e,t){return e.title>t.title?1:-1}).map(function(t,a){var n=t.title.rendered,l=t.link,r=t.content.rendered,o="Go to "+l;return i.a.createElement(C,{contentTitle:n,mainContent:r,externalLink:l,linkButtonLabel:"View on Website",linkButtonTitle:o,onClick:function(){e.handleOECodeCardClick(l)}})});switch(this.state.loadState){case"inactive":return i.a.createElement("div",{id:"oe-code-samples-container"},i.a.createElement(k.a,{className:"button-standard",color:"primary",onClick:function(){e.loadOECodeSamplesList()},size:"large",title:this.props.sectionButtonLabel,variant:"contained"},this.props.sectionButtonLabel));case"loading":return i.a.createElement("div",{id:"oe-code-samples-container"},i.a.createElement(d.a,{className:"progress"}));case"loaded":return i.a.createElement("div",{id:"oe-code-samples-container"},i.a.createElement("h3",null,this.props.codeSamplesTitle),i.a.createElement("p",null,i.a.createElement("a",{href:this.props.codeSamplesExternalSiteURL,rel:"noopener noreferrer",target:"_blank",title:this.props.codeSamplesExternalSiteTitle},this.props.codeSamplesExternalSiteName," ",i.a.createElement(w.a,{fontSize:"inherit",style:{marginBottom:"-0.1em"}}))),i.a.createElement("div",{className:"oe-code-samples"},t))}}}]),t}(n.Component),T=a(29),A=a.n(T),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={images:[],loadState:"inactive"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"loadMainImageGallery",value:function(){var e=this,t="".concat(g);this.setState({loadState:"loading"}),fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({images:t,loadState:"loaded"})})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.images.map(function(e,t){var a=e.title.rendered,n=e.jetpack_featured_media_url;return{original:n,originalAlt:a,originalTitle:a,thumbnail:n,thumbnailAlt:a,thumbnailTitle:a,description:a}});switch(this.state.loadState){case"inactive":return i.a.createElement("div",{id:"image-gallery-container"},i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{className:"button-standard",color:"primary",onClick:function(){e.loadMainImageGallery()},size:"large",title:this.props.sectionButtonLabel,variant:"contained"},this.props.sectionButtonLabel)));case"loading":return i.a.createElement("div",{id:"image-gallery-container"},i.a.createElement(d.a,{className:"progress"}));case"loaded":return i.a.createElement("div",{id:"image-gallery-container"},i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,this.props.galleryTitle),i.a.createElement("p",null,i.a.createElement("a",{href:this.props.galleryLinkURL,rel:"noopener noreferrer",target:"_blank",title:this.props.galleryLinkTitle},this.props.galleryLinkText," ",i.a.createElement(w.a,null))),i.a.createElement(A.a,{className:"image-gallery",items:t,thumbnailPosition:this.props.thumbnailPosition})))}}}]),t}(n.Component),M=a(30),R=a.n(M),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={images:[],loadState:"inactive"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"loadImageData",value:function(){var e=this,t="".concat(g);this.setState({loadState:"loading"}),fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({images:t,loadState:"loaded"})})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.images.map(function(e){var t=e.title.rendered,a=e.jetpack_featured_media_url;return i.a.createElement("img",{src:a,alt:t})});switch(this.state.loadState){case"inactive":return i.a.createElement("div",{id:"coverflow-gallery-container"},i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{className:"button-standard",color:"primary",onClick:function(){e.loadImageData()},size:"large",title:this.props.sectionButtonLabel,variant:"contained"},this.props.sectionButtonLabel)));case"loading":return i.a.createElement("div",{id:"coverflow-gallery-container"},i.a.createElement(d.a,{className:"progress"}));case"loaded":return i.a.createElement("div",{id:"coverflow-gallery-container"},i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,this.props.galleryTitle),i.a.createElement("p",null,i.a.createElement("a",{href:this.props.galleryLinkURL,rel:"noopener noreferrer",target:"_blank",title:this.props.galleryLinkTitle},this.props.galleryLinkText," ",i.a.createElement(w.a,null))),i.a.createElement(R.a,{displayQuantityOfSide:2,navigation:!0,enableHeading:!0,clickable:!0,media:{"@media (max-width: 900px)":{width:"600px",height:"300px"},"@media (min-width: 900px)":{width:"960px",height:"600px"}},className:"coverflow-gallery"},t)))}}}]),t}(n.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"kr-monogram__parent"},i.a.createElement("div",{className:"kr-monogram"},i.a.createElement("svg",{className:"icon"},i.a.createElement("use",{className:"sprite__monogram",xlinkHref:"#monogram"}))),i.a.createElement("div",{className:"svg-sprites"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i.a.createElement("defs",null,i.a.createElement("filter",{id:"drop-shadow"},i.a.createElement("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"1"}),i.a.createElement("feOffset",{dx:"1",dy:"1",result:"offsetblur"}),i.a.createElement("feFlood",{floodColor:"rgba(0,0,0,1)"}),i.a.createElement("feComposite",{in2:"offsetblur",operator:"in"}),i.a.createElement("feMerge",null,i.a.createElement("feMergeNode",null),i.a.createElement("feMergeNode",{in:"SourceGraphic"}))),i.a.createElement("symbol",{id:"monogram",viewBox:"560 1790 200 200"},i.a.createElement("polygon",{id:"glyph_x5F__x5F_right",points:"674.331,1891.881 746,1939.049 682.765,1891.277 711.96,1859.64 657.285,1862.205 698.104,1864.282 "}),i.a.createElement("polygon",{id:"glyph_x5F__x5F_middle",points:"693.824,1963.297 638.749,1861.327 693.824,1804.035 649.28,1861.851 "}),i.a.createElement("polygon",{id:"glyph_x5F__x5F_left",points:"600.744,1977.16 660.771,1913.468 591.762,1860.794 631.498,1860.705 574.999,1858.154 653.576,1915.606 "}))))))}}]),t}(n.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(new Date).getFullYear();return i.a.createElement("span",{className:"copyright"},"\xa9",e)}}]),t}(n.Component),z=a(16),D=a(31),I=a.n(D),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={videoURLs:[],switchBackgroundVideo:{},videoElement:{},videoSource:{}},a.state={toggle:!0},a.handleClick=a.handleClick.bind(Object(z.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.state.switchBackgroundVideo(this.state.videoURLs,this.state.videoElement,this.state.videoSource)}},{key:"toggleBGVideoSwitch",value:function(e){document.getElementsByClassName("ctl__bgvideoswitch")[0].style.visibility=e?"visible":"hidden"}},{key:"componentDidMount",value:function(){var e=this;this.toggleBGVideoSwitch(!1);var t="".concat(f);fetch(t).then(function(e){return e.json()}).then(function(t){e.state.populateVideoURLArray(t),e.state.switchBackgroundVideo(e.state.videoURLs,e.state.videoElement,e.state.videoSource),e.toggleBGVideoSwitch(!0)}),this.setState({videoURLs:["/img/20181215_154218.mp4"],videoElement:document.getElementsByClassName("video-background__video"),videoSource:document.getElementsByClassName("video-background__video__source"),switchBackgroundVideo:function(e,t,a){var n=Math.floor(Math.random()*e.length);a[0].setAttribute("src",e[n]),t[0].load()},populateVideoURLArray:function(t){var a=t.filter(function(e){return"video"===e.acf.type}).sort(function(e,t){return e.acf.weight>t.acf.weight?1:-1}).map(function(e,t){return e.acf.href});e.setState({videoURLs:a})}})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{"data-ctl":"bgvideoswitch",className:"ctl ctl__bgvideoswitch",title:"Switch Video Background",onClick:this.handleClick},i.a.createElement(I.a,{fontSize:"large"})))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav"},i.a.createElement(G,null),i.a.createElement(P,null))}}]),t}(n.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"video-background"},i.a.createElement("video",{autoPlay:!0,loop:!0,className:"video-background__video",muted:!0,playsInline:!0},i.a.createElement("source",{src:"/img/20181215_154218.mp4",type:"video/mp4",className:"video-background__video__source"})))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(H,null),i.a.createElement(W,null),i.a.createElement(U,null),i.a.createElement("div",{className:"splash-container theme-light"},i.a.createElement("div",{className:"front"},i.a.createElement("div",{className:"brand-title"},i.a.createElement("h1",null,"Keith Ratner")),i.a.createElement(F,{sectionButtonLabel:"Load Coverflow Gallery",galleryTitle:"Art Gallery",galleryLinkURL:"https://keithratner.live/shop",galleryLinkTitle:"Purchase Prints Online",galleryLinkText:"Visit the Store"}),i.a.createElement(V,{sectionButtonLabel:"Load Image Gallery",galleryTitle:"Art Gallery",galleryLinkURL:"https://keithratner.live/shop",galleryLinkTitle:"Purchase Prints Online",galleryLinkText:"Visit the Store",thumbnailPosition:"left"}),i.a.createElement(B,{sectionButtonLabel:"Load VBA Code Samples",codeSamplesTitle:"VBA Code Samples",codeSamplesExternalSiteURL:"https://optionexplicit.live",codeSamplesExternalSiteTitle:"Visit Option Explicit",codeSamplesExternalSiteName:"Option Explicit"}),i.a.createElement(y,null),i.a.createElement(E,{projectLinksTitle:"Suggested Links"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.c679e178.chunk.js.map