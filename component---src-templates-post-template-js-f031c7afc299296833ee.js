(self.webpackChunkkoop_blog=self.webpackChunkkoop_blog||[]).push([[946],{2102:function(e,t,r){var o=r(2632);e.exports={MDXRenderer:o}},2632:function(e,t,r){var o=r(861),n=r(3515),a=r(8416),l=r(7071),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),i=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,s),c=f(t),d=p.useMemo((function(){if(!r)return null;var e=u({React:p,mdx:i},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return p.createElement(d,u({},a))}},8496:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(1597),a=r(74),l=r(2102),s=r(9692).default.section.withConfig({displayName:"post-template__PostTemplateStyles",componentId:"sc-z5s3wm-0"})(["h1,h2{margin-top:2.5rem;margin-bottom:2.5rem;}.post__body{margin-top:2.5rem;margin-bottom:2.5rem;code{color:var(--dark);font-family:Heebo,Arial,Helvetica,'Helvetica Neue',sans-serif;background:#f1f1f1;padding:2px;}pre{color:var(--dark);font-family:Heebo,Arial,Helvetica,'Helvetica Neue',sans-serif;background:#f1f1f1;padding:15px;code{padding:0;}}"]);t.default=function(e){var t=e.data,r=t.mdx.frontmatter,c=r.title,u=r.date,p=r.author,i=(r.image,t.mdx.body);return o.createElement(a.Z,null,o.createElement(s,null,o.createElement("hr",{style:{marginTop:0},class:"separator separator__large"}),o.createElement(n.rU,{className:"btn",to:"/"},"Back to all posts"),o.createElement("hr",{class:"separator"}),o.createElement("h1",null,c),o.createElement("h2",null,o.createElement("span",null,"Written by ",p)," & Posted on ",o.createElement("span",null,u)),o.createElement("div",{className:"post__body"},o.createElement(l.MDXRenderer,null,i)),o.createElement("hr",{class:"separator"}),o.createElement("h2",null,"Posted on ",o.createElement("span",null,u)),o.createElement("hr",{class:"separator separator__large"})))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var o=r(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var o=r(6015),n=r(9617);function a(t,r,l){return n()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var o=r(3405),n=r(9498),a=r(6116),l=r(2281);e.exports=function(e){return o(e)||n(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var o=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-post-template-js-f031c7afc299296833ee.js.map