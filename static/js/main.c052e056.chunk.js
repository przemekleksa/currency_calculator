(this.webpackJsonpnetninredux=this.webpackJsonpnetninredux||[]).push([[0],{15:function(e,t,a){e.exports=a(31)},20:function(e,t,a){},21:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(20),a(21),a(2)),i=a(3),s=a(5),u=a(4),m=a(6),p=a(1),d=(a(28),a(29),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=e.target.value;isNaN(t)&&(alert("Please type a number"),e.target.value=4.3),a.props.changeValue(e.target.value)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props;return console.log(e.exchangeRate[0].rate),r.a.createElement("div",{className:"exchange-rate-form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,"1 EUR ="),r.a.createElement("label",null,r.a.createElement("input",{type:"text",placeholder:"enter exchange rate here",onChange:this.handleChange}))),r.a.createElement("div",null,"current exchange rate: ",r.a.createElement("span",null,"1 EUR = ",e.exchangeRate[0].rate," PLN")))}}]),t}(n.Component)),h=Object(p.b)((function(e){return{exchangeRate:e.exchangeRate}}),(function(e){return{changeValue:function(t){e({type:"CHANGE_RATE",rate:t})}}}))(d),f=(a(30),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=e.target.name.value,n=e.target.amount.value;if(""===t)alert("enter name");else if(isNaN(n))alert("enter number into amount");else if(""!==t&&!1===isNaN(n)){var r={name:t,amount:n=parseFloat(n)};a.props.addTransaction(r)}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"add-transaction"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"labels"},r.a.createElement("div",{className:"label"},"Name:"),r.a.createElement("div",{className:"label"},"Amount:")),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"name"}),r.a.createElement("input",{type:"text",name:"amount"}),r.a.createElement("div",null,"EUR"),r.a.createElement("button",null,"Add"))))}}]),t}(n.Component)),v=Object(p.b)(null,(function(e){return{addTransaction:function(t){e({type:"ADD_TRANSACTION",name:t.name,eur:t.amount,id:"4"})}}}))(f),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.deletePost(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props.posts,a=0,n=0,l=0;l<this.props.posts.length;l++)a+=this.props.posts[l].eur,n+=this.props.posts[l].pln;return this.items=t.map((function(t,a){return r.a.createElement("li",{key:t.id},r.a.createElement("div",{className:"transaction-name"},t.name),r.a.createElement("div",{className:"eur"},t.eur.toFixed(2).replace(/[.,]00$/,"")," EUR"),r.a.createElement("div",{className:"pln"},t.pln.toFixed(2).replace(/[.,]00$/,"")," PLN"),r.a.createElement("button",{onClick:function(){return e.handleClick("".concat(t.id))}},"Delete"))})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"calc"},r.a.createElement("h1",null,"EUR/PLN exchange"),r.a.createElement("h2",null,"Please enter exchange rate for 1 euro"),r.a.createElement(h,null),r.a.createElement(v,null)),r.a.createElement("div",{className:"transaction-list"},r.a.createElement("div",{className:"total-value"},r.a.createElement("div",{className:"total"},r.a.createElement("div",null,"Total value of all transactions:"),r.a.createElement("div",null,a.toFixed(2).replace(/[.,]00$/,"")," EUR"),r.a.createElement("div",null,n.toFixed(2).replace(/[.,]00$/,"")," PLN"))),r.a.createElement("div",{className:"list"},r.a.createElement("ul",null,this.items))))}}]),t}(n.Component),b=Object(p.b)((function(e){return{posts:e.posts}}),(function(e){return{deletePost:function(t){e({type:"DELETE",id:t})}}}))(E);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(8),y=a(14);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={posts:[{id:"1",name:"loan",eur:16444.34,pln:70710.662},{id:"2",name:"car payment",eur:345.34,pln:1484.962},{id:"3",name:"new sofa",eur:5435,pln:23370.5}],exchangeRate:[{rate:4.3}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;if("DELETE"===t.type){var a=e.posts.filter((function(e){return t.id!==e.id}));return j({},e,{posts:a})}if("CHANGE_RATE"===t.type){var n=t.rate,r=e.posts.map((function(e){return e=j({},e,{pln:t.rate*e.eur})}));return j({},e,{exchangeRate:[{rate:n}],posts:r})}if("ADD_TRANSACTION"===t.type){var l=t.name,c=t.eur,o=c*e.exchangeRate[0].rate,i="0";e.posts.length>0&&(i=e.posts[e.posts.length-1].id);var s={id:i=String(parseInt(i)+1),name:l,eur:c,pln:o};return j({},e,{posts:e.posts.concat(s)})}return e},R=Object(O.b)(w);c.a.render(r.a.createElement(p.a,{store:R},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c052e056.chunk.js.map