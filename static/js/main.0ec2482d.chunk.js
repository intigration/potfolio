(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=(a(101),a(24)),l=a.n(s),i=a(36),u=a(16),m=(a(103),a(241)),f=a(242),d=a(243),v=a(235),p=a(239),h=a(89),b=a(240),E=(a(104),["title","cases","total","active","isRed"]);var g=function(e){var t=e.title,a=e.cases,n=e.total,c=e.active,o=e.isRed,s=Object(h.a)(e,E);return console.log(t,c),r.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(o&&"infoBox--red")},r.a.createElement(p.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),r.a.createElement(b.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},y=a(86),j=a(14),O=a.n(j),x={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return O()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return O()(e).format("0a")}}}]}},_=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var k=function(e){var t=e.casesType,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=_(e,t);s(a),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(y.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},options:x}))};a(205);var w=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.country),r.a.createElement("td",null,r.a.createElement("strong",null,O()(e.cases).format("0,0"))))})))},N=a(88),C=a(244),S=a(245),B={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},I=function(e){var t=Object(N.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},R=function(e){return e?"+".concat(O()(e).format("0.0a")):"+0"},T=a(246),D=a(247);a(206);var M=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(T.a,{center:n,zoom:c},r.a.createElement(D.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> by <a href="https://github.com/intigration">muhammad.farhan</a>'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:B[t].hex,fillColor:B[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*B[t].multiplier},r.a.createElement(S.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",O()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",O()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",O()(e.deaths).format("0,0")))))}))}(t,a)))},z=(a(207),function(){var e=Object(n.useState)("PK"),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),s=Object(u.a)(o,2),h=s[0],b=s[1],E=Object(n.useState)([]),y=Object(u.a)(E,2),j=y[0],x=y[1],_=Object(n.useState)([]),N=Object(u.a)(_,2),C=N[0],S=N[1],B=Object(n.useState)([]),T=Object(u.a)(B,2),D=T[0],z=T[1],A=Object(n.useState)("cases"),K=Object(u.a)(A,2),P=K[0],W=K[1],J=Object(n.useState)({lat:30.3753,lng:69.3451}),L=Object(u.a)(J,2),V=L[0],Y=L[1],q=Object(n.useState)(3),F=Object(u.a)(q,2),$=F[0],G=F[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){b(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=I(e);x(t),S(e),z(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(P);var H=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="PK"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){c(a),b(e),Y([e.countryInfo.lat,e.countryInfo.long]),G(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"Virus Tracker -PK"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(f.a,{variant:"outlined",value:a,onChange:H},r.a.createElement(d.a,{value:"worldwide"},"Worldwide"),j.map((function(e){return r.a.createElement(d.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(g,{onClick:function(e){return W("cases")},title:"Infected",isRed:!0,active:"cases"===P,cases:R(h.todayCases),total:O()(h.cases).format("0.0a")}),r.a.createElement(g,{onClick:function(e){return W("recovered")},title:"Recovered",active:"recovered"===P,cases:R(h.todayRecovered),total:O()(h.recovered).format("0.0a")}),r.a.createElement(g,{onClick:function(e){return W("deaths")},title:"Deaths",isRed:!0,active:"deaths"===P,cases:R(h.todayDeaths),total:O()(h.deaths).format("0.0a")})),r.a.createElement(M,{countries:C,casesType:P,center:V,zoom:$})),r.a.createElement(v.a,{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"app__information"},r.a.createElement("h3",null,"Virus Spread by Country"),r.a.createElement(w,{countries:D}),r.a.createElement("h3",null," New cases  ",P),r.a.createElement(k,{casesType:P})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a(209)}},[[96,1,2]]]);
//# sourceMappingURL=main.0ec2482d.chunk.js.map