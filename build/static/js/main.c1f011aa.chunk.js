(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),r=n.n(i),c=n(3),s=n(7),l=n(5),d=n(4),m=n(6),h=(n(11),n(2)),u=n(14),w=n.n(u),p=n(9),v=n.n(p),f=n(15),b=n.n(f),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={showSearching:!0,changeTitle:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){setTimeout((function(){e.setState({showSearching:!1})}),2e3),e.setState({changeTitle:!0})}),2e3)}},{key:"renderTyped",value:function(){return this.state.showSearching?o.a.createElement("div",{className:"loader-container"},o.a.createElement(v.a,null,o.a.createElement(b.a,{type:"Puff",color:"#7ec6e280",height:30,width:30,timeout:4e3}))):o.a.createElement("div",{className:"info-text-container"},o.a.createElement(w.a,{className:"info-text",strings:['NAME: Sinisa Damjanovic\nEMAIL: sikidamjanovic@gmail.com\nSKILL: Full-stack Developer / Designer\nTOOLS: React, Javascript, HTML + CSS\n\nPROJECTS: \n - Cowrite.io [<a href="https://github.com/sikidamjanovic/cowrite">Repo</a>][<a href="https://www.cowrite.io">Demo</a>]\n - Kino Movie [<a href="">Repo</a>][<a href="">Demo</a>]\n - Reactriv [<a href="">Repo</a>][<a href="">Demo</a>]\n\n[<a id="bottom-link" href="https://github.com/sikidamjanovic" target="_blank">Github</a>] [<a id="bottom-link" href="https://www.linkedin.com/in/sinisa-damjanovic-673053bb/" target="_blank">LinkedIn</a>] [<a id="bottom-link" href="">Resume</a>]'],typeSpeed:5}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"info"},o.a.createElement(v.a,null,this.state.changeTitle?o.a.createElement(v.a,null,o.a.createElement("div",null,o.a.createElement("h1",{className:"info-title"},"1 DEVELOPER(S) FOUND"))):o.a.createElement("div",null,o.a.createElement("h1",{className:"info-title"},"SEARCHING..."))),o.a.createElement("div",{className:"info-container"},o.a.createElement("div",{className:"info-corners-top"},o.a.createElement("div",{className:"info-corners-bottom"})),this.renderTyped()))}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=new h.l;e.fog=new h.c(0,.002);var t=new h.g(60,window.innerWidth/window.innerHeight,1,1e3);t.position.z=1,t.rotation.x=1.16,t.rotation.y=-.12,t.rotation.z=.27;var n=new h.o;n.setClearColor(e.fog.color),n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);var a=new h.a(4215376);e.add(a);var o=new h.b(3007206);o.position.set(0,0,1),e.add(o);var i=new h.i(404873,30,500,1.7);i.position.set(200,300,100),e.add(i);for(var r=[],c=new h.d,s=0;s<2e3;s++){var l=new h.n(400*Math.random()-200,500*Math.random()-250,400*Math.random()-200);l.velocity={},l.velocity=0,c.vertices.push(l)}var d=new h.k({color:11184810,size:.1,transparent:!0}),m=new h.j(c,d);e.add(m),(new h.m).load("https://raw.githubusercontent.com/navin-navi/codepen-assets/master/images/smoke.png",(function(t){for(var n=new h.h(500,500),a=new h.f({map:t,transparent:!0}),o=0;o<25;o++){var i=new h.e(n,a);i.position.set(800*Math.random()-400,500,500*Math.random()-500),i.rotation.x=1.16,i.rotation.y=-.12,i.rotation.z=2*Math.random()*Math.PI,i.material.opacity=.55,r.push(i),e.add(i)}})),function a(){n.render(e,t),requestAnimationFrame(a),r.forEach((function(e){e.rotation.z-=.002})),c.vertices.forEach((function(e){e.velocity-=3*Math.random()*1,e.y+=e.velocity,e.y<-100&&(e.y=100,e.velocity=0)})),c.verticesNeedUpdate=!0,m.rotation.y+=.002,(Math.random()>.96||i.power>100)&&(i.power<100&&i.position.set(400*Math.random(),300+200*Math.random(),100),i.power=50+500*Math.random())}(),window.addEventListener("resize",(function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}),!1)}},{key:"render",value:function(){return o.a.createElement("div",{className:"background"},o.a.createElement(E,null))}}]),t}(a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.c1f011aa.chunk.js.map