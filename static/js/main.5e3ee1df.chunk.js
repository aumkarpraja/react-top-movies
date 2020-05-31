(this["webpackJsonptop-movies"]=this["webpackJsonptop-movies"]||[]).push([[0],{46:function(e,t,a){e.exports=a(59)},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(51),a(27)),i=a.n(l),s=a(33),u=a(14),m=a(11),v=a(23),p=a(22),h=(a(53),"8faa6c7a07d68028d68b5950e7751b83"),d=a(101),f=a(4),b=a(102),g=a(103),E=a(38),y=a(105),w=(a(54),a(89)),j=a(92),x=a(95),k=a(94),M=a(93),O=a(96),C=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).selectMovie=function(){var t=e.props,a=t.movie;(0,t.selectMovie)(a)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement(w.a,{className:"movie-card"},r.a.createElement(j.a,null,r.a.createElement(M.a,{className:"movie-image",image:"http://image.tmdb.org/t/p/w300".concat(e.backdrop_path),title:e.title}),r.a.createElement(k.a,null,r.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},e.overview))),r.a.createElement(x.a,null,r.a.createElement(O.a,{size:"small",color:"primary",onClick:this.selectMovie},"Learn More")))}}]),a}(r.a.Component),S=a(104),T=a(100),N=a(98),_=a(99),B=a(97),A=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movie,a=e.handleClose,n=null,o=null;return t&&(n=r.a.createElement(B.a,{id:"form-dialog-title"},t.title),o=r.a.createElement(N.a,null,r.a.createElement(_.a,null,"Release Date: ",t.release_date,r.a.createElement("br",null),r.a.createElement("br",null),t.overview))),r.a.createElement("div",null,r.a.createElement(S.a,{open:!!t,onClose:a,"aria-labelledby":"form-dialog-title"},n,o,r.a.createElement(T.a,null,r.a.createElement(O.a,{onClick:a,color:"primary"},"Close"))))}}]),a}(r.a.Component),D=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),G=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],selectedMovie:null,searchText:null},e.selectMovie=function(t){return e.setState({selectedMovie:t})},e.clearMovie=function(){return e.setState({selectedMovie:null})},e.search=function(){var t=Object(s.a)(i.a.mark((function t(a){var n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state.searchText,t.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(h,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 4:return r=t.sent,t.next=7,r.json();case 7:o=t.sent,console.log(o),e.setState({movies:o.results});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.searchTextChanged=function(t){return e.setState({searchText:t.target.value})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(h,"&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({movies:a.results});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.movies,n=t.selectedMovie,o=t.searchText;return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{position:"fixed"},r.a.createElement(g.a,null,r.a.createElement(E.a,{variant:"h6",className:"titleBar"},"Top Movies"),r.a.createElement("form",{onSubmit:this.search},r.a.createElement(y.a,{type:"search",value:o,onChange:this.searchTextChanged,placeholder:"Search"})))),r.a.createElement("div",{className:"movies"},a.map((function(t){return r.a.createElement(C,{className:"movieCard",key:t.id,movie:t,selectMovie:e.selectMovie})}))),r.a.createElement(A,{movie:n,handleClose:this.clearMovie}))}}]),a}(n.Component),J=Object(f.a)(D)(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.5e3ee1df.chunk.js.map