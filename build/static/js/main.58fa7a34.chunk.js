(this["webpackJsonpnasty-copy"]=this["webpackJsonpnasty-copy"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/red_flower.e8e872f4.svg"},function(e,t,a){e.exports=a.p+"static/media/blue_flower.6ff0dfd2.svg"},function(e,t,a){e.exports=a.p+"static/media/cactus_flower.cd92de5c.svg"},function(e,t,a){e.exports=a.p+"static/media/orange_flower.ce30b639.svg"},function(e,t,a){e.exports=a.p+"static/media/purple_flower.70c67c5c.svg"},function(e,t,a){e.exports=a.p+"static/media/pink_flower.3b1617e3.svg"},function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(20),a(21),a(22),a(23),a(24),a(25),a(26),a(27),a(28),a(29),a(30),a(6));var i=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],u=i[1],d=Object(n.useState)(!1),m=Object(l.a)(d,2),f=m[0],b=m[1],h=Object(n.useState)(!1),p=Object(l.a)(h,2),g=p[0],v=p[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!g){var t=new XMLHttpRequest;t.open("POST","/api/create",!0),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&200===this.status&&v(!0)},t.send(JSON.stringify({email:a,wrong:s,willpay:f}))}},className:"interest-form grid margin-top"},r.a.createElement("label",{className:"email-label",htmlFor:"email"},"Your Email:"),r.a.createElement("input",{className:"email-form",name:"email",type:"email",value:a,onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"wrong"},"What's Wrong:"),r.a.createElement("textarea",{name:"wrong",type:"text",value:s,onChange:function(e){return u(e.target.value)}}),r.a.createElement("label",{htmlFor:"willpay"},"I Promise To Consider Paying Money:"),r.a.createElement("input",{name:"willpay",type:"checkbox",value:f,onChange:function(e){return b(e.target.checked)}}),r.a.createElement("button",null,"Submit"))};var s=function(){return r.a.createElement("div",{className:"column gateholder"},r.a.createElement("button",{className:"gate tall-line"},"Tell Me More"),r.a.createElement("button",{className:"gate tall-line"},"I'm Not Interested"))};var u=function(){var e={0:r.a.createElement(i,null),1:r.a.createElement(s,null)};return r.a.createElement("div",{className:"column bottom-margin"},r.a.createElement("div",{className:"column text-left"},r.a.createElement("h3",null,"I want to humiliate my enemies."),r.a.createElement("div",{className:"card-text-body"},"I want to tell someone about it."),e[0]))},d=a(1),m=a(2),f=a(4),b=a(3),h=a(5),p=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card column card-margin align-center"},r.a.createElement("div",{className:this.props.color+" card-header",alt:"Square Button"},r.a.createElement("div",{className:"card-header-text tall-line"},this.props.headerText)),r.a.createElement("div",{className:"card-text-header"},this.props.bodyHeader),r.a.createElement("div",{className:"card-text-body"},this.props.bodyText),r.a.createElement("button",{className:"card-button",onClick:this.props.onClick},r.a.createElement("div",{className:"card-button-text tall-line "+this.props.color+"-text"},this.props.buttonText)))}}]),t}(r.a.Component),g=a(9),v=a.n(g),y=a(10),x=a.n(y),w=a(11),T=a.n(w),E=a(12),O=a.n(E),j=a(13),N=a.n(j),C=a(14),k=a.n(C),S=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[{src:v.a,altText:"Red"},{src:x.a,altText:"Blue"},{src:T.a,altText:"Cactus"},{src:O.a,altText:"Orange"},{src:N.a,altText:"Purple"},{src:k.a,altText:"Pink"}],t=Math.ceil(0),a=Math.floor(e.length);var n=e[Math.floor(Math.random()*(a-t))+t];return r.a.createElement("img",{className:"flower-image",src:n.src,alt:n.altText})}}]),t}(r.a.Component);var H=function(){var e={0:[{color:"green",headerText:"Once",bodyHeader:"It was",bodyText:"infuriating.",buttonText:"Yes.",targetCards:3},{color:"teal",headerText:"Many times",bodyHeader:"I know",bodyText:"the patience of",buttonText:"Revenge.",targetCards:2},{color:"blue",headerText:"No",bodyHeader:"But,",bodyText:"somehow.",buttonText:"I'm Grumpy.",targetCards:2}],1:[i(),{color:"teal",headerText:"Infuriating",bodyHeader:"Doesn't quite",bodyText:"cover the",buttonText:"Feeling.",targetCards:2}],2:[{color:"teal",headerText:"This sounds",bodyHeader:"Serious.",bodyText:"The only person I can control.",buttonText:"Is myself.",targetCards:3},i()],3:[i(),{color:"teal",headerText:"I Can't",bodyHeader:"Feel anything but anger",bodyText:"about my experience",buttonText:"Be Mean.",targetCards:0}]},t=Object(n.useState)(0),a=Object(l.a)(t,2),o=a[0],c=a[1];function i(e){return{color:e||"green",headerText:"Forgiveness",bodyHeader:"As Always,",bodyText:"will be",buttonText:"Best.",targetCards:0}}return r.a.createElement("div",{className:"cards-container switch justify-center align-center"},e[o].map((function(e,t){return r.a.createElement(p,{key:t,color:e.color,headerText:e.headerText,buttonText:e.buttonText,bodyHeader:e.bodyHeader,bodyText:e.bodyText,onClick:function(){return c(e.targetCards)}})})))},I=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=[],t=6;t>=0;t--)e.push(r.a.createElement(S,{key:t}));return r.a.createElement("div",{style:{gridTemplateColumns:"repeat("+7..toString()+", 1fr)"},className:"flowers-container grid center"},e)}}]),t}(r.a.Component),M=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Welcome."),r.a.createElement("h3",null,"Has someone been mean to you?"))}}]),t}(r.a.Component);var W=function(){return r.a.createElement("div",{className:"App grid body-grid"},r.a.createElement(M,null),r.a.createElement(H,null),r.a.createElement(I,null),r.a.createElement(u,null))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");A?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.58fa7a34.chunk.js.map