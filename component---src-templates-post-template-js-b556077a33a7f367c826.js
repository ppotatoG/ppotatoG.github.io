(self.webpackChunkkoop_blog=self.webpackChunkkoop_blog||[]).push([[946],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var o=r(9489),n=r(7067);function a(t,r,l){return n()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var o=r(3646),n=r(6860),a=r(379),l=r(8206);e.exports=function(e){return o(e)||n(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var o=r(3395);e.exports={MDXRenderer:o}},3395:function(e,t,r){var o=r(9100),n=r(319),a=r(9713),l=r(7316),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),i=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,s),c=f(t),m=p.useMemo((function(){if(!r)return null;var e=u({React:p,mdx:i},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return p.createElement(m,u({},a))}},545:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(5444),a=r(2359),l=r(3962),s=r(6725),c=r(9692).default.section.withConfig({displayName:"post-template__PostTemplateStyles",componentId:"sc-z5s3wm-0"})(["h1,h2{margin-top:2.5rem;margin-bottom:2.5rem;}.post__body{margin-top:2.5rem;margin-bottom:2.5rem;}"]);t.default=function(e){var t=e.data,r=t.mdx.frontmatter,u=r.title,p=r.date,i=r.author,f=r.image,m=t.mdx.body;(0,a.d)(f.childImageSharp.gatsbyImageData);return o.createElement(l.Z,null,o.createElement(c,null,o.createElement("hr",{style:{marginTop:0},class:"separator separator__large"}),o.createElement(n.rU,{className:"btn",to:"/"},"Back to all posts"),o.createElement("hr",{class:"separator"}),o.createElement("h1",null,u),o.createElement("h2",null,o.createElement("span",null,"Written by ",i)," & Posted on ",o.createElement("span",null,p)),o.createElement("div",{className:"post__body"},o.createElement(s.MDXRenderer,null,m)),o.createElement("hr",{class:"separator"}),o.createElement("h2",null,"Posted on ",o.createElement("span",null,p)),o.createElement("hr",{class:"separator separator__large"})))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-b556077a33a7f367c826.js.map