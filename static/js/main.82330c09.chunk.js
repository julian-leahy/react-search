(this["webpackJsonpreact-search"]=this["webpackJsonpreact-search"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(6),h=n(5),u=(n(13),n(14),function(e){var t=e.id,n=e.name;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set2&size=180x180"),alt:"".concat(n)}),r.a.createElement("h3",null,n))}),m=(n(15),function(e){return r.a.createElement("div",{className:"card-container"},e.robots.map((function(e){var t=e.id,n=e.name;return r.a.createElement(u,{key:t,name:n,id:t})})))}),d=(n(16),function(e){return r.a.createElement("input",{type:"search",className:"search",placeholder:e.placeholder,onChange:e.handleChange})}),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchTerm:t.target.value})},e.state={robots:[],searchTerm:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchTerm.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement(d,{placeholder:"Search Robots",handleChange:this.handleChange}),r.a.createElement(m,{robots:t}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.82330c09.chunk.js.map