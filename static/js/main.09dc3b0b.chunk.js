(this["webpackJsonpflag-picker"]=this["webpackJsonpflag-picker"]||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},23:function(e,n,t){},24:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(10),c=t.n(o),r=(t(22),t(23),t(3)),l=t(4),s=t(7),u=t(5),m=t(8),g=(t(24),t(6)),f=[{continent:"Africa",countries:[{name:"Nigeria",flag:"\ud83c\uddf3\ud83c\uddec"},{name:"Ethiopia",flag:"\ud83c\uddea\ud83c\uddf9"},{name:"Egypt",flag:"\ud83c\uddea\ud83c\uddec"},{name:"DR Congo",flag:"\ud83c\udde8\ud83c\udde9"},{name:"South Africa",flag:"\ud83c\uddff\ud83c\udde6"}]},{continent:"America",countries:[{name:"USA",flag:"\ud83c\uddfa\ud83c\uddf8"},{name:"Brazil",flag:"\ud83c\udde7\ud83c\uddf7"},{name:"Mexico",flag:"\ud83c\uddf2\ud83c\uddfd"},{name:"Colombia",flag:"\ud83c\udde8\ud83c\uddf4"},{name:"Argentina",flag:"\ud83c\udde6\ud83c\uddf7"}]},{continent:"Asia",countries:[{name:"China",flag:"\ud83c\udde8\ud83c\uddf3"},{name:"India",flag:"\ud83c\uddee\ud83c\uddf3"},{name:"Indonesia",flag:"\ud83c\uddee\ud83c\udde9"},{name:"Pakistan",flag:"\ud83c\uddf5\ud83c\uddf0"},{name:"Bangladesh",flag:"\ud83c\udde7\ud83c\udde9"}]},{continent:"Europe",countries:[{name:"Russia",flag:"\ud83c\uddf7\ud83c\uddfa"},{name:"Germany",flag:"\ud83c\udde9\ud83c\uddea"},{name:"UK",flag:"\ud83c\uddec\ud83c\udde7"},{name:"France",flag:"\ud83c\uddeb\ud83c\uddf7"},{name:"Italy",flag:"\ud83c\uddee\ud83c\uddf9"}]},{continent:"Oceania",countries:[{name:"Australia",flag:"\ud83c\udde6\ud83c\uddfa"},{name:"Papua New Guinea",flag:"\ud83c\uddf5\ud83c\uddec"},{name:"New Zealand",flag:"\ud83c\uddf3\ud83c\uddff"},{name:"Fiji",flag:"\ud83c\uddeb\ud83c\uddef"},{name:"Solomon Islands",flag:"\ud83c\uddf8\ud83c\udde7"}]}],h=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).onChange=function(e){var n=e.target.value,a=[];if(n.length>0){var i=new RegExp("^".concat(n),"i");a=f.sort().filter((function(e){return i.test(e.continent)}))}t.setState({suggestions:a,value:e.target.value,isActive:!e.target.value,continentName:e.target.value})},t.onFocus=function(e){console.log(e),t.setState({isActive:!1,suggestions:f.map((function(e){return e}))})},t.onClick=function(e){t.setState({suggestions:[],continentName:e,isActive:!0})},t.state={value:"",suggestions:[],isActive:!1,continentName:""},console.log("Content Select: ",t.props.continentName),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"renderedSuggestion",value:function(){var e=this,n=this.state.suggestions;this.props.isActive;return 0===n?null:i.a.createElement("ul",{className:"list-group"},n.map((function(n,t){return i.a.createElement("li",{className:"list-group-item",onClick:function(){e.onClick(n.continent),e.props.getContinentName(n.continent)},key:t},n.continent)})))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-sm-4"},i.a.createElement("input",{className:"form-control",value:this.state.continentName,onFocus:this.onFocus,onChange:function(n){return e.onChange(n)}}),this.renderedSuggestion(),""===this.props.continentName?null:i.a.createElement("div",null,i.a.createElement("h5",null," You selected"),i.a.createElement("span",null,this.props.continentName)))}}]),n}(a.Component),p=Object(g.b)((function(e){return{continentName:e.falgPickerMain.continentName}}),(function(e){return{getContinentName:function(n){return e({type:"AUTO_COMPLETE_CONTINENT_SELECT",continentName:n})}}}))(h),v=function(e){function n(){return Object(r.a)(this,n),Object(s.a)(this,Object(u.a)(n).call(this))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.continentName)}}]),n}(a.Component),N=Object(g.b)((function(e){return{continentName:e.falgPickerMain.continentName}}))(v),d=function(e){function n(){return Object(r.a)(this,n),Object(s.a)(this,Object(u.a)(n).call(this))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getFlagPickerData()}},{key:"getFlagPickerData",value:function(){var e=this;fetch("http://localhost:3000/assets/data.json").then((function(e){return e.json()})).then((function(n){console.log("SDSDS",n),e.setState({items:n})}),(function(n){e.setState({error:n})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,"Flag Picker"),i.a.createElement(p,null),i.a.createElement(N,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(9),O=t(14),b={continentName:"",isActive:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0,t=Object(O.a)({},e);switch(n.type){case"AUTO_COMPLETE_CONTINENT_SELECT":return Object(O.a)({},e,{continentName:n.continentName})}return t},k=Object(E.c)({falgPickerMain:j}),C=Object(E.d)(k,Object(E.a)((function(e){return function(e){return function(n){var t=e(n);return console.log("result 1: ",t),t}}})));c.a.render(i.a.createElement(g.a,{store:C},i.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.09dc3b0b.chunk.js.map