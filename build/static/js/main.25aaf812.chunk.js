(this["webpackJsonpnasty-copy"]=this["webpackJsonpnasty-copy"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/red_flower.5aaf38fc.svg"},function(e,t,n){e.exports=n.p+"static/media/blue_flower.5d10f6d2.svg"},function(e,t,n){e.exports=n.p+"static/media/cactus_flower.2ec5ccec.svg"},function(e,t,n){e.exports=n.p+"static/media/orange_flower.5c6e474b.svg"},function(e,t,n){e.exports=n.p+"static/media/purple_flower.5d74bfb7.svg"},function(e,t,n){e.exports=n.p+"static/media/pink_flower.a86ac779.svg"},function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(20),n(21),n(22),n(23),n(24),n(25),n(1)),l=n(2),s=n(4),u=n(3),d=n(5),m=n(6);var h=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(m.a)(c,2),l=i[0],s=i[1],u=Object(a.useState)(!1),d=Object(m.a)(u,2),h=d[0],b=d[1],p=Object(a.useState)(!1),f=Object(m.a)(p,2),v=f[0],g=f[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!v){var t=new XMLHttpRequest;t.open("POST","/api/create",!0),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&200===this.status&&g(!0)},t.send(JSON.stringify({email:n,wrong:l,willpay:h}))}},className:"interest-form column align-center"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"email"},"Your Email:"),r.a.createElement("input",{name:"email",type:"email",value:n,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"wrong"},"What's Wrong:"),r.a.createElement("input",{name:"wrong",type:"text",value:l,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"willpay"},"I Promise To Pay Money:"),r.a.createElement("input",{name:"willpay",type:"checkbox",value:h,onChange:function(e){return b(e.target.checked)}})),r.a.createElement("button",null,"Submit"))},b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"submit align-center"},r.a.createElement("h1",null,"I want to humiliate my enemies."),r.a.createElement("h6",null,"And I'm willing to share personal information."),r.a.createElement(h,null))}}]),t}(r.a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card column align-center"},r.a.createElement("div",{className:this.props.color+" card-header",alt:"Square Button"},r.a.createElement("div",{className:"card-header-text tall-line"},this.props.headerText)),r.a.createElement("div",{className:"card-text-header"},this.props.bodyHeader),r.a.createElement("div",{className:"card-text-body"},this.props.bodyText),r.a.createElement("button",{className:"card-button",onClick:this.props.onClick},r.a.createElement("div",{className:"card-button-text tall-line "+this.props.color+"-text"},this.props.buttonText)))}}]),t}(r.a.Component);var f=function(){var e={0:[{color:"green",headerText:"Yes",bodyHeader:"It was",bodyText:"infuriating.",buttonText:"Once.",targetCards:1},{color:"teal",headerText:"Yes",bodyHeader:"I know",bodyText:"the patience of revenge.",buttonText:"Many times.",targetCards:2},{color:"blue",headerText:"No",bodyHeader:"But,",bodyText:"somehow.",buttonText:"I'm grumpy",targetCards:3}],1:[i(),{color:"teal",headerText:"Infuriating",bodyHeader:"Doesn't quite",bodyText:"cover the",buttonText:"Feeling.",targetCards:0}],2:[i(),{color:"teal",headerText:"This sounds",bodyHeader:"Serious.",bodyText:"The only person I can control.",buttonText:"Is myself.",targetCards:3}],3:[i(),{color:"teal",headerText:"I Don't know what came over me",bodyHeader:"but It",bodyText:"wasn't",buttonText:"Right.",targetCards:0}]},t=Object(a.useState)(0),n=Object(m.a)(t,2),o=n[0],c=n[1];function i(e){return{color:e||"green",headerText:"Forgivness",bodyHeader:"Might",bodyText:"be.",buttonText:"Best.",targetCards:0}}return r.a.createElement("div",{className:"cards-container row justify-center"},e[o].map((function(e,t){return r.a.createElement(p,{key:t,color:e.color,headerText:e.headerText,buttonText:e.buttonText,bodyHeader:e.bodyHeader,bodyText:e.bodyText,onClick:function(){return c(e.targetCards)}})})))},v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"interactive-panel column"},r.a.createElement("h1",null,"Welcome."),r.a.createElement("h3",null,"Has someone been mean to you?"),r.a.createElement(f,null))}}]),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{className:"flower-image shrink",src:this.props.src,alt:this.props.altText})}}]),t}(r.a.Component),y=n(9),w=n.n(y),x=n(10),T=n.n(x),E=n(11),O=n.n(E),j=n(12),k=n.n(j),C=n(13),N=n.n(C),S=n(14),H=n.n(S),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[{src:w.a,altText:"Red"},{src:T.a,altText:"Blue"},{src:O.a,altText:"Cactus"},{src:k.a,altText:"Orange"},{src:N.a,altText:"Purple"},{src:H.a,altText:"Pink"}],t=Math.ceil(0),n=Math.floor(e.length);for(var a=[],o=8;o>=0;o--){var c=e[Math.floor(Math.random()*(n-t))+t];a.push(r.a.createElement(g,{key:o,src:c.src}))}return r.a.createElement("div",{className:"flowers-container"},r.a.createElement("div",{className:"row"},a))}}]),t}(r.a.Component);var W=function(){return r.a.createElement("div",{className:"App column"},r.a.createElement(v,null),r.a.createElement(I,null),r.a.createElement(b,null))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");M?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.25aaf812.chunk.js.map