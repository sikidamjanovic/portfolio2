(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(13),r=n.n(o),c=n(3),s=n(7),l=n(5),d=n(4),m=n(6),h=(n(11),n(2)),p=n(14),u=n.n(p),v=n(9),w=n.n(v),f=n(15),b=n.n(f),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={showSearching:!0,changeTitle:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){setTimeout((function(){e.setState({showSearching:!1})}),1e3),e.setState({changeTitle:!0})}),3500)}},{key:"renderTyped",value:function(){return this.state.showSearching?i.a.createElement("div",{className:"loader-container"},i.a.createElement(w.a,null,i.a.createElement(b.a,{type:"Puff",color:"#7ec6e280",height:30,width:30}))):i.a.createElement("div",{className:"info-text-container"},i.a.createElement(u.a,{className:"info-text",strings:['<span id="label">NAME:</span> Sinisa Damjanovic\n<span id="label">EMAIL:</span> sikidamjanovic@gmail.com\n<span id="label">SKILL:</span> Full-stack Developer / Designer\n<span id="label">TOOLS:</span> React, Javascript, HTML + CSS\n\n<span id="label">PROJECTS:</span> \n - Cowrite.io [<a target="_blank" href="https://github.com/sikidamjanovic/cowrite">Repo</a>][<a target="_blank" href="https://www.cowrite.io">Demo</a>]\n - Kino Movie [<a target="_blank" href="https://github.com/sikidamjanovic/kino">Repo</a>][<a target="_blank" href="https://kino-7425a.firebaseapp.com/">Demo</a>]\n - Reactriv [<a target="_blank" href="https://github.com/sikidamjanovic/reactriv">Repo</a>][<a target="_blank" href="https://reactriv.firebaseapp.com/">Demo</a>]\n\n<span id=label>LINKS: </span>[<a id="bottom-link" href="https://github.com/sikidamjanovic" target="_blank">Github</a>] [<a id="bottom-link" href="https://www.linkedin.com/in/sinisa-damjanovic-673053bb/" target="_blank">LinkedIn</a>] [<a id="bottom-link" href="">Resume</a>] '],typeSpeed:5}))}},{key:"expandStyle",value:function(){return this.state.changeTitle?null:{width:"30px"}}},{key:"render",value:function(){return i.a.createElement("div",{className:"info"},i.a.createElement(w.a,null,this.state.changeTitle?i.a.createElement(w.a,null,i.a.createElement("div",null,i.a.createElement("h1",{className:"info-title"},"1 DEVELOPER(S) FOUND"))):i.a.createElement("div",null,i.a.createElement("h1",{className:"info-title"},"SEARCHING DATABASE"))),i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("div",{className:"info-container",style:this.expandStyle()},i.a.createElement("div",{className:"info-corners-top"},i.a.createElement("div",{className:"info-corners-bottom"})),this.renderTyped())))}}]),t}(a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=new h.l;e.fog=new h.c(0,.002);var t=new h.g(60,window.innerWidth/window.innerHeight,1,1e3);t.position.z=1,t.rotation.x=1.16,t.rotation.y=-.12,t.rotation.z=.27;var n=new h.o;n.setClearColor(e.fog.color),n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);var a=new h.a(4215376);e.add(a);var i=new h.b(3007206);i.position.set(0,0,1),e.add(i);var o=new h.i(404873,30,500,1.7);o.position.set(200,300,100),e.add(o);for(var r=[],c=new h.d,s=0;s<2e3;s++){var l=new h.n(400*Math.random()-200,500*Math.random()-250,400*Math.random()-200);l.velocity={},l.velocity=0,c.vertices.push(l)}var d=new h.k({color:11184810,size:.1,transparent:!0}),m=new h.j(c,d);e.add(m),(new h.m).load("https://raw.githubusercontent.com/navin-navi/codepen-assets/master/images/smoke.png",(function(t){for(var n=new h.h(500,500),a=new h.f({map:t,transparent:!0}),i=0;i<25;i++){var o=new h.e(n,a);o.position.set(800*Math.random()-400,500,500*Math.random()-500),o.rotation.x=1.16,o.rotation.y=-.12,o.rotation.z=2*Math.random()*Math.PI,o.material.opacity=.55,r.push(o),e.add(o)}})),function a(){n.render(e,t),requestAnimationFrame(a),r.forEach((function(e){e.rotation.z-=.002})),c.vertices.forEach((function(e){e.velocity-=3*Math.random()*1,e.y+=e.velocity,e.y<-100&&(e.y=100,e.velocity=0)})),c.verticesNeedUpdate=!0,m.rotation.y+=.002,(Math.random()>.96||o.power>100)&&(o.power<100&&o.position.set(400*Math.random(),300+200*Math.random(),100),o.power=50+500*Math.random())}(),window.addEventListener("resize",(function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}),!1)}},{key:"render",value:function(){return i.a.createElement("div",{className:"background"},i.a.createElement(g,null))}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.65ed7967.chunk.js.map