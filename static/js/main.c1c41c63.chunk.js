(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={recipe:"recipe_recipe__3B3Qw"}},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),c=a.n(s),o=(a(12),a(2)),i=a.n(o),l=a(5),m=a(1),u=a(6),p=a.n(u),g=function(e){var t=e.title,a=e.calories,n=e.image,s=e.ingredients,c=e.link;return r.a.createElement("div",{className:p.a.recipe},r.a.createElement("h1",null,t),r.a.createElement("p",null,r.a.createElement("b",null,"Ingredients:")),r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("p",null,r.a.createElement("b",null,"Calories: "),Math.round(a)),r.a.createElement("p",null,"For more details click ",r.a.createElement("a",{href:c},"here"),"!"),r.a.createElement("img",{src:n,alt:""}))},d=(a(14),function(){var e=sessionStorage.getItem("URL"),t=Object(n.useState)([]),a=Object(m.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(sessionStorage.getItem("searchBar")),u=Object(m.a)(o,2),p=u[0],d=u[1],f=Object(n.useState)(""),h=Object(m.a)(f,2),b=h[0],S=h[1],E=Object(n.useState)(""),v=Object(m.a)(E,2),I=(v[0],v[1]),x=parseInt(null===sessionStorage.getItem("rolodex")?"0":sessionStorage.getItem("rolodex")),k=function(e){x=e,sessionStorage.setItem("rolodex",x)};Object(n.useEffect)((function(){console.log("rolodex:"+x),new String(sessionStorage.getItem("prevURL")).valueOf()==new String(sessionStorage.getItem("URL")).valueOf()?c(null===sessionStorage.getItem("recipes")?s:JSON.parse(sessionStorage.getItem("recipes"))):O()}),[b,x]);var O=function(){var t=Object(l.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,sessionStorage.setItem("recipes",JSON.stringify(n.hits)),c(n.hits),console.log(n.hits);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{className:"search-form"},r.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){d(e.target.value)}}),r.a.createElement("button",{className:"search-button",type:"submit",onClick:function(){sessionStorage.setItem("searchBar",p),sessionStorage.setItem("rolodex","0"),sessionStorage.setItem("prevURL",e),e="https://api.edamam.com/search?q="+p+"&app_id=".concat("c9c5311d","&app_key=").concat("6b827db324b96cbf534cda1763fb6a6c"),sessionStorage.setItem("URL",e),x=0,S(p)}},"Search")),r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:s},r.a.createElement("button",{className:"change-button",onClick:function(){null===x&&(sessionStorage.setItem("rolodex",0),k(0)),x+-1>=0&&(sessionStorage.setItem("rolodex",x+-1),k(parseInt(x)+-1),I(x))}},"Back"),r.a.createElement("div",{class:"spaced"}),s.filter((function(e,t){return t===x})).map((function(e){return r.a.createElement(g,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,link:e.recipe.url})})),r.a.createElement("div",{class:"spaced"}),r.a.createElement("button",{className:"change-button",onClick:function(){null===x&&(sessionStorage.setItem("rolodex",0),k(0)),x+1<=s.length-1&&(sessionStorage.setItem("rolodex",x+1),k(parseInt(x)+1),I(x))}},"Next"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c1c41c63.chunk.js.map