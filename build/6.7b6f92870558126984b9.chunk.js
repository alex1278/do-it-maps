webpackJsonp([6],{"./app/components/Messages/index.js":function(e,n,o){"use strict";function s(e){return e.messages?i(a,{},void 0,e.messages.map(function(n){return i(f,{onClick:function(o){return e.removeMessage(o,n.id)}},n.id,n.message)})):null}Object.defineProperty(n,"__esModule",{value:!0});var r=o("./node_modules/react/react.js"),t=(o.n(r),o("./node_modules/styled-components/dist/styled-components.es.js")),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,o,s,r){var t=n&&n.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&t)for(var a in t)void 0===o[a]&&(o[a]=t[a]);else o||(o=t||{});if(1===i)o.children=r;else if(i>1){for(var f=Array(i),l=0;l<i;l++)f[l]=arguments[l+3];o.children=f}return{$$typeof:e,type:n,key:void 0===s?null:""+s,ref:null,props:o,_owner:null}}}(),a=t.a.div.withConfig({displayName:"Messages__MessagesWrapper"})(["display: flex;position: fixed;flex-direction: column;bottom: 20px;right: 20px;background-color: transparent;z-index: 10;cursor: pointer;"]),f=t.a.p.withConfig({displayName:"Messages__Message"})(["font-family: Helvetica, sans-serif;background: #249cff;width: 300px;height: auto;padding: 20px;font-size: 16px;color: #f4fcff;cursor: pointer;transition: background 0.6s;&:hover {background: #249cff;}"]);n.default=s}});