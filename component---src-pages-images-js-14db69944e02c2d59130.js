(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[595],{3349:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})},4396:function(e,t,n){"use strict";var a=n(3349),i=n(3552),s=n(7294);s.Component},6642:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(3349),i=n(3552),s=n(7294),l=n(9984),r=n(1171),c=(n(4396),n(7708)),o=n(8235),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={content:c.MN,title:"color",slidesToShow:1,expand:!1},n.switchCarousel=n.switchCarousel.bind((0,a.Z)(n)),n.expandSideBar=n.expandSideBar.bind((0,a.Z)(n)),n}(0,i.Z)(t,e);var n=t.prototype;return n.switchCarousel=function(e,t,n){this.setState({content:e,title:t,slidesToShow:n}),console.log(this.state.content),this.forceUpdate()},n.fetchState=function(){return"archival"==this.state.title?"archival-images":"iphone"==this.state.title?"iphone-images":"images"},n.expandSideBar=function(){this.setState((function(e){return{expand:!e.expand}}))},n.render=function(){var e,t=this,n=[{title:"color",content:c.MN,slidesToShow:1},{title:"black & white",content:c.Z3,slidesToShow:1},{title:"archival",content:c.Qk,slidesToShow:1},{title:"iphone",content:c.m7,slidesToShow:1}],a=this.state.content,i=this.state.slidesToShow,d=this.state.expand;return e=1==d?s.createElement(o.pjk,{className:"expand-arrow"}):s.createElement(o.fmn,{className:"expand-arrow"}),s.createElement("main",null,s.createElement("div",{className:0==d?"expand-sideBar":"collapse-sideBar",onClick:this.expandSideBar},e),s.createElement("div",{className:"cssgrid"},s.createElement("div",{className:1==d?"expand-sideBar-bg":"none"},s.createElement("div",{className:0==d?"sideBar":"expand-text"},n.map((function(e){return s.createElement("div",{className:1==d?"expand-list-item":""},s.createElement("a",{onClick:function(){return t.switchCarousel(e.content,e.title,e.slidesToShow)},style:{color:e.title==t.state.title?"red":"black"}},e.title))})))),s.createElement("div",{className:"text-body"},s.createElement("header",null,s.createElement(r.Z,null)),s.createElement("div",{className:"carousel"},s.createElement("div",{className:this.fetchState()},s.createElement(l.Z,{images:a,slides:i})),"archival"==this.state.title&&s.createElement("div",null,s.createElement("p",{className:"archive-image-label"}," ",s.createElement("i",null,"All specimens were digitized in collaboration with the Brown University Herbarium.")," ",s.createElement("br",null)," Shown below are samples from the ",s.createElement("i",null,"exsiccatae")," (or bound collection) of Hannah Wilkinson Goodwin"),s.createElement("div",{className:"archival-images"},s.createElement(l.Z,{images:c.sj,slides:i})))))))},t}(s.Component)}}]);
//# sourceMappingURL=component---src-pages-images-js-14db69944e02c2d59130.js.map