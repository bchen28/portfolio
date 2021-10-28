(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[826],{3349:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},4401:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,c=e.title,s=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},1171:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(3552),a=r(7294),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement("nav",{className:"header",class:"container"},a.createElement("div",null,a.createElement("a",{href:"/portfolio/text"},"Essays")),a.createElement("div",null,a.createElement("a",{href:"/portfolio/images"},"Images")),a.createElement("div",null,a.createElement("a",{className:"logo",href:"/portfolio/"},"BOWEN CHEN")),a.createElement("div",null,a.createElement("a",{href:"/portfolio/technical-writing"},"Technical Writing")),a.createElement("div",null,a.createElement("a",{href:"/portfolio/about"},"About")))},t}(a.Component)},4396:function(e,t,r){"use strict";var n=r(3349),a=r(3552),o=r(7294);o.Component},8020:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(3349),a=r(3552),o=r(7294),i=r(1171),l=(r(4396),function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return o.createElement("div",null,o.createElement("a",{href:"https://github.com/tremor-rs/tremor-www/blob/main/docs/overview.md"},"Tremor Project Overview Page"),o.createElement("p",null,'I worked with the team at Tremor to rewrite their "Architecture Overview" Page into a general "Overview" page that catered towards new and potential users. The internal content was restructured to provide clearer parameters that conveyed what Tremor was and what it was best used for. Although I deemed it necessary, no content was refactored into separate pages (e.g. a separate "Model" page), and the existing content was rewritten, adhering to the Google developer documentation style guide, to be more concise and professional.'),o.createElement("a",{href:"https://github.com/tremor-rs/tremor-www/pull/84"},"link to the Github pull request."),o.createElement("br",null),o.createElement("div",{className:"tremor-text"},o.createElement("a",{href:"https://github.com/tremor-rs/tremor-www/blob/main/docs/getting-started/getting-started.md"},"Tremor Project Getting Started Page"),o.createElement("p",null,'I rewrote the Tremor Project\'s "Getting Started" Page to make instructions more concise and easier to follow for new users.  Previous language that negatively impacted the clarity or tone of the page was rewritten to be more direct and reflect a higher degree of professionalism.The document was also changed to adhere to the Google developer documentation style guide.'),o.createElement("a",{href:"https://github.com/tremor-rs/tremor-www/pull/83"},"link to the Github pull request.")))},t}(o.Component)),c=(o.Component,r(8235)),s=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={content:o.createElement(l,null),title:"Tremor",expand:!1},r.switchText=r.switchText.bind((0,n.Z)(r)),r.expandSideBar=r.expandSideBar.bind((0,n.Z)(r)),r}(0,a.Z)(t,e);var r=t.prototype;return r.switchText=function(e,t){this.setState({content:e}),console.log(this.state.content),this.forceUpdate()},r.expandSideBar=function(){this.setState((function(e){return{expand:!e.expand}}))},r.render=function(){var e,t=this,r=[{title:"Tremor",content:o.createElement(l,null)}],n=this.state.content,a=this.state.expand;return e=1==a?o.createElement(c.pjk,{className:"expand-arrow"}):o.createElement(c.fmn,{className:"expand-arrow"}),o.createElement("main",null,o.createElement("div",{className:0==a?"expand-sideBar":"collapse-sideBar",onClick:this.expandSideBar},e),o.createElement("div",{className:"cssgrid"},o.createElement("div",{className:1==a?"expand-sideBar-bg":"none"},o.createElement("div",{className:0==a?"text-sideBar":"expand-text"},r.map((function(e){return o.createElement("div",{className:1==a?"expand-list-item":""},o.createElement("a",{onClick:function(){return t.switchText(e.content)},style:{color:e.title==t.state.title?"red":"black"}},e.title))})))),o.createElement("div",{className:"text-body"},o.createElement("header",null,o.createElement(i.Z,null)),o.createElement("div",{className:"writing"},n))))},t}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-technical-writing-js-ce6fa41cc9b293fb1ccc.js.map