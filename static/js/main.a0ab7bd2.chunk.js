(this["webpackJsonpactors-app"]=this["webpackJsonpactors-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(70)},42:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(28),i=a.n(r),c=(a(42),a(43),a(44),a(13)),l=a.n(c),o=a(7),h=a(9),u=a(11),m=a(10),d=a(8),v=a(12),p=a(75),b=a(74),S=(a(46),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={searchText:""},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a.handleSelection=a.handleSelection.bind(Object(d.a)(a)),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({searchText:t}),this.props.onSearchChange(t)}},{key:"handleSelection",value:function(e){this.props.onSelectedResult(parseInt(e.target.getAttribute("data-index"))),this.setState({searchText:""})}},{key:"render",value:function(){var e=this,t=this.props,a=t.searchPlaceholder,n=t.results,r=this.state.searchText,i=n.map((function(t,a){return s.a.createElement(p.a.Item,{key:a,"data-index":a,action:!0,onClick:e.handleSelection},t)}));return s.a.createElement("div",{className:"search-box"},s.a.createElement(b.a.Control,{type:"text",placeholder:a,value:r,onChange:this.handleInputChange}),s.a.createElement(p.a,{className:"search-results"},i))}}]),t}(n.Component)),g=a(34),f=a(71),E=a(72),k=a(73),R=a(76),j=(a(51),function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.movie;return s.a.createElement("div",null,s.a.createElement(R.a,null,s.a.createElement(R.a.Img,{variant:"top",src:e.posterURL}),s.a.createElement(R.a.Body,null,s.a.createElement(R.a.Title,null,s.a.createElement("span",{className:"titles"},"Title : "),"  "+e.title,",",s.a.createElement("br",null),s.a.createElement("span",{className:"titles"},"Length :")," ","  "+e.runtime+" "," minutes,",s.a.createElement("br",null)," ",s.a.createElement("span",{className:"titles"},"Actor 1st :"),"  "+e.firstMainStars,", ",s.a.createElement("br",null),s.a.createElement("span",{className:"titles"},"Actor 2nd :"),"  "+e.secondMainStars,s.a.createElement("br",null),s.a.createElement("span",{className:"titles"}," Actor 3th :"),"  "+e.thirdMainStars,".",s.a.createElement("br",null),s.a.createElement("span",{className:"titles"},"Director :"),"  "+e.director))))}}]),t}(n.Component)),O=function e(t,a,n,s,r,i,c,l){Object(o.a)(this,e),this.title=t,this.posterURL="https://image.tmdb.org/t/p/w500"+a,this.id=n,this.runtime=s,this.firstMainStars=r,this.secondMainStars=i,this.thirdMainStars=c,this.director=l},y=a(14),x=a.n(y),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={movieSearchResults:[],movieSearchResultStrings:[],movies:[]},a.searchMovies=a.searchMovies.bind(Object(d.a)(a)),a.addMovie=a.addMovie.bind(Object(d.a)(a)),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"searchMovies",value:function(e){var t=this;if(""===e)this.setState({movieSearchResults:[],movieSearchResultStrings:[]});else{var a="https://api.themoviedb.org/3/search/movie?api_key=77cc9523668c3dd019a1c3282e7b7141&query="+e;x.a.get(a).then((function(e){t.setState({movieSearchResults:e.data.results,movieSearchResultStrings:e.data.results.map((function(e){return e.title}))})}))}}},{key:"addMovie",value:function(e){var t,a,n,s,r,i,c,o,h=this;return l.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t="https://api.themoviedb.org/3/movie/"+this.state.movieSearchResults[e].id+"/credits?api_key=77cc9523668c3dd019a1c3282e7b7141&language=en-US",a="https://api.themoviedb.org/3/movie/"+this.state.movieSearchResults[e].id+"?api_key=77cc9523668c3dd019a1c3282e7b7141&language=en-US",u.next=4,l.a.awrap(x.a.get(t));case 4:return n=u.sent,u.next=7,l.a.awrap(x.a.get(a));case 7:s=u.sent,r=[n,s],Promise.all(r).then((function(e){h.setState({movieDetailsResult:r[1].data.runtime,movieCreditsResult:r[0].data.cast[0].name})})),i="",c=0;case 12:if(!(c<r[0].data.crew.length)){u.next=19;break}if("Directing"!==r[0].data.crew[c].department){u.next=16;break}return i=r[0].data.crew[c].name+" .",u.abrupt("break",19);case 16:c++,u.next=12;break;case 19:o=new O(this.state.movieSearchResults[e].title,this.state.movieSearchResults[e].poster_path,this.state.movieSearchResults[e].id,r[1].data.runtime,r[0].data.cast[0].name,r[0].data.cast[1].name,r[0].data.cast[2].name,i),this.setState({movies:this.state.movies.concat(o),movieSearchResults:[],movieSearchResultStrings:[],movieDetailsResult:[]});case 21:case"end":return u.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.movieSearchResultStrings,a=e.movies.map((function(e,t){return s.a.createElement(g.a,{md:4,key:t},s.a.createElement(j,{movie:e}))}));return s.a.createElement("div",null,s.a.createElement(f.a,null,s.a.createElement("h1",null,s.a.createElement(E.a,{variant:"success",className:"m-2 text-center"},"Searcing Movies to get details in TMDB"," ")),s.a.createElement(S,{searchPlaceholder:"Search Movie",results:t,onSearchChange:this.searchMovies,onSelectedResult:this.addMovie}),s.a.createElement(k.a,null,a)))}}]),t}(n.Component);var w=function(){return s.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);i.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.a0ab7bd2.chunk.js.map