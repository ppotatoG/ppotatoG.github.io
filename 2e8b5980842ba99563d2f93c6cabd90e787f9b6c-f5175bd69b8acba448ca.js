/*! For license information please see 2e8b5980842ba99563d2f93c6cabd90e787f9b6c-f5175bd69b8acba448ca.js.LICENSE.txt */
(self.webpackChunkkoop_blog=self.webpackChunkkoop_blog||[]).push([[496],{3720:function(e,t,n){!function(){var t={808:function(e,t,n){var r,o,i;void 0===(o="function"==typeof(r=i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var l in i)i[l]&&(c+="; "+l,!0!==i[l]&&(c+="="+i[l].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),l=c.slice(1).join("=");n||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var u=t(c[0]);if(l=(r.read||r)(l,u)||t(l),n)try{l=JSON.parse(l)}catch(e){}if(o[u]=l,e===u)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))})?r.call(t,n,t,e):r)||(e.exports=o),e.exports=i()},703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};!function(){"use strict";o.r(i),o.d(i,{Cookies:function(){return l()},OPTIONS:function(){return v},SAME_SITE_OPTIONS:function(){return O},VISIBLE_OPTIONS:function(){return w},default:function(){return A},getCookieConsentValue:function(){return x},resetCookieConsentValue:function(){return T}});var e=n(7294),t=o.n(e),r=o(697),a=o.n(r),c=o(808),l=o.n(c);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=["children"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={TOP:"top",BOTTOM:"bottom",NONE:"none"},O={STRICT:"strict",LAX:"lax",NONE:"none"},w={HIDDEN:"hidden",SHOW:"show",BY_COOKIE_VALUE:"byCookieValue"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=l().get(e);return void 0===t&&(t=l().get(S(e))),t},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;l().remove(e)},S=function(e){return"".concat(e,"-legacy")},C="CookieConsent",E=function(e){var t=e.condition,n=e.wrapper,r=e.children;return t?n(r):r},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),g(h(t=i.call(this,e)),"handleScroll",(function(){var e=t.props.acceptOnScrollPercentage,n=document.documentElement,r=document.body,o="scrollTop",i="scrollHeight";(n[o]||r[o])/((n[i]||r[i])-n.clientHeight)*100>e&&t.accept(!0)})),g(h(t),"removeScrollListener",(function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)})),t.state={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},t}return(n=[{key:"componentDidMount",value:function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))}},{key:"componentWillUnmount",value:function(){this.removeScrollListener()}},{key:"accept",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props,n=t.cookieName,r=t.cookieValue,o=t.hideOnAccept,i=t.onAccept;this.setCookie(n,r),i(null!=e&&e),o&&(this.setState({visible:!1}),this.removeScrollListener())}},{key:"decline",value:function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,r=e.hideOnDecline,o=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),o(),r&&this.setState({visible:!1})}},{key:"setCookie",value:function(e,t){var n=this.props,r=n.extraCookieOptions,o=n.expires,i=n.sameSite,a=this.props.cookieSecurity;void 0===a&&(a=!location||"https:"===location.protocol);var c=d(d({expires:o},r),{},{sameSite:i,secure:a});i===O.NONE&&l().set(S(e),t,c),l().set(e,t,c)}},{key:"getCookieValue",value:function(){var e=this.props.cookieName;return x(e)}},{key:"render",value:function(){var e=this;switch(this.props.visible){case w.HIDDEN:return null;case w.BY_COOKIE_VALUE:if(!this.state.visible)return null}var n=this.props,r=n.location,o=n.style,i=n.buttonStyle,a=n.declineButtonStyle,c=n.contentStyle,l=n.disableStyles,u=n.buttonText,s=n.declineButtonText,f=n.containerClasses,m=n.contentClasses,y=n.buttonClasses,h=n.buttonWrapperClasses,b=n.declineButtonClasses,g=n.buttonId,O=n.declineButtonId,x=n.disableButtonStyles,T=n.enableDeclineButton,S=n.flipButtons,C=n.ButtonComponent,k=n.overlay,A=n.overlayClasses,j=n.overlayStyle,P=n.ariaAcceptLabel,I=n.ariaDeclineLabel,_={},N={},B={},L={},D={};switch(l?(_=p({},o),N=p({},i),B=p({},a),L=p({},c),D=p({},j)):(_=p({},d(d({},this.state.style),o)),L=p({},d(d({},this.state.contentStyle),c)),D=p({},d(d({},this.state.overlayStyle),j)),x?(N=p({},i),B=p({},a)):(N=p({},d(d({},this.state.buttonStyle),i)),B=p({},d(d({},this.state.declineButtonStyle),a)))),r){case v.TOP:_.top="0";break;case v.BOTTOM:_.bottom="0"}var R=[];return T&&R.push(t().createElement(C,{key:"declineButton",style:B,className:b,id:O,"aria-label":I,onClick:function(){e.decline()}},s)),R.push(t().createElement(C,{key:"acceptButton",style:N,className:y,id:g,"aria-label":P,onClick:function(){e.accept()}},u)),S&&R.reverse(),t().createElement(E,{condition:k,wrapper:function(e){return t().createElement("div",{style:D,className:A},e)}},t().createElement("div",{className:"".concat(f),style:_},t().createElement("div",{style:L,className:m},this.props.children),t().createElement("div",{className:"".concat(h)},R.map((function(e){return e})))))}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a.prototype,n),a}(e.Component);k.propTypes={location:a().oneOf(Object.keys(v).map((function(e){return v[e]}))),visible:a().oneOf(Object.keys(w).map((function(e){return w[e]}))),sameSite:a().oneOf(Object.keys(O).map((function(e){return O[e]}))),style:a().object,buttonStyle:a().object,declineButtonStyle:a().object,contentStyle:a().object,children:a().any,disableStyles:a().bool,hideOnAccept:a().bool,hideOnDecline:a().bool,onAccept:a().func,onDecline:a().func,buttonText:a().oneOfType([a().string,a().func,a().element]),declineButtonText:a().oneOfType([a().string,a().func,a().element]),cookieName:a().string,cookieValue:a().oneOfType([a().string,a().bool,a().number]),declineCookieValue:a().oneOfType([a().string,a().bool,a().number]),setDeclineCookie:a().bool,debug:a().bool,expires:a().number,containerClasses:a().string,contentClasses:a().string,buttonClasses:a().string,buttonWrapperClasses:a().string,declineButtonClasses:a().string,buttonId:a().string,declineButtonId:a().string,extraCookieOptions:a().object,disableButtonStyles:a().bool,enableDeclineButton:a().bool,flipButtons:a().bool,ButtonComponent:a().elementType,cookieSecurity:a().bool,overlay:a().bool,overlayClasses:a().string,overlayStyle:a().object,ariaAcceptLabel:a().string,ariaDeclineLabel:a().string,acceptOnScroll:a().bool,acceptOnScrollPercentage:a().number},k.defaultProps={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:v.BOTTOM,visible:w.BY_COOKIE_VALUE,onAccept:function(){},onDecline:function(){},cookieName:C,cookieValue:!0,declineCookieValue:!1,setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:O.LAX,ButtonComponent:function(e){var n=e.children,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s);return t().createElement("button",r,n)},overlay:!1,overlayClasses:"",ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25};var A=k}(),e.exports=i}()},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},3962:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ue}});var r,o,i,a,c=n(7294),l=n(5444),u=n(5697),s=n.n(u),p=n(4839),f=n.n(p),d=n(2993),m=n.n(d),y=n(6494),h=n.n(y),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(O).map((function(e){return O[e]})),"charset"),x="cssText",T="href",S="http-equiv",C="innerHTML",E="itemprop",k="name",A="property",j="rel",P="src",I="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",B="defer",L="encodeSpecialCharacters",D="onChangeClientState",R="titleTemplate",M=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),U=[O.NOSCRIPT,O.SCRIPT,O.STYLE],H="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,O.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,N);return t||r||void 0},X=function(e){return Q(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[O.BASE]})).map((function(e){return e[O.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==x&&c!==E||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,p=e.title,f=e.titleAttributes;ue(O.BODY,r),ue(O.HTML,o),le(p,f);var d={baseTag:se(O.BASE,n),linkTags:se(O.LINK,i),metaTags:se(O.META,a),noscriptTags:se(O.NOSCRIPT,c),scriptTags:se(O.SCRIPT,u),styleTags:se(O.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),l(e,m,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(O.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(O.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case O.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[c.createElement(O.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=pe(n),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===C||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,p=void 0===s?"":s,f=e.titleAttributes;return{base:de(O.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(g,o,r),link:de(O.LINK,i,r),meta:de(O.META,a,r),noscript:de(O.NOSCRIPT,c,r),script:de(O.SCRIPT,l,r),style:de(O.STYLE,u,r),title:de(O.TITLE,{title:p,titleAttributes:f},r)}},ye=f()((function(e){return{baseTag:Z([T,I],e),bodyAttributes:J(b,e),defer:Q(e,B),encode:Q(e,L),htmlAttributes:J(g,e),linkTags:$(O.LINK,[j,T],e),metaTags:$(O.META,[k,w,S,A,E],e),noscriptTags:$(O.NOSCRIPT,[C],e),onChangeClientState:X(e),scriptTags:$(O.SCRIPT,[P,C],e),styleTags:$(O.STYLE,[x],e),title:G(e),titleAttributes:J(v,e)}}),(function(e){ie&&re(ie),e.defer?ie=ne((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),me)((function(){return null})),he=(o=ye,a=i=function(e){function t(){return V(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:t};case O.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case O.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case O.BODY:return Y({},o,{bodyAttributes:Y({},i)});case O.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var be=n(9499),ge=function(e){var t=e.title,n=e.description,r=e.lang,o=e.image,i=e.article,a=(0,be.useLocation)().pathname,u=(0,l.K2)(Oe).site.siteMetadata,s=u.defaultTitle,p=u.titleTemplate,f=u.defaultDescription,d=u.siteUrl,m=u.defaultImage,y=u.twitterUsername,h={title:t||s,description:n||f,image:""+d+(o||m),siteUrl:""+d+a};return c.createElement(he,{htmlAttributes:{lang:r},title:h.title,titleTemplate:p},c.createElement("meta",{name:"description",content:h.description}),c.createElement("meta",{name:"image",content:h.image}),h.url&&c.createElement("meta",{property:"og:url",content:h.url}),!i?null:c.createElement("meta",{property:"og:type",content:"article"}),h.title&&c.createElement("meta",{property:"og:title",content:h.title}),h.description&&c.createElement("meta",{property:"og:description",content:h.description}),h.image&&c.createElement("meta",{property:"og:image",content:h.image}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),y&&c.createElement("meta",{name:"twitter:creator",content:y}),h.title&&c.createElement("meta",{name:"twitter:title",content:h.title}),h.description&&c.createElement("meta",{name:"twitter:description",content:h.description}),h.image&&c.createElement("meta",{name:"twitter:image",content:h.image}))},ve=ge;ge.defaultProps={title:null,description:null,image:null,lang:"en",article:!1};var Oe="228695001",we=n(9692),xe=we.default.footer.withConfig({displayName:"FooterStyles",componentId:"sc-efe4qx-0"})(["font-weight:700;letter-spacing:-0.5px;a{color:#222;text-decoration-color:rgba(0,0,0,0.15);text-decoration-thickness:2px;text-underline-offset:2px;transition:text-decoration-color 0.3s;&:hover{text-decoration-color:#222;}}margin-top:5rem;padding:0 30px 2rem 30px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#222;.container{max-width:800px;text-align:center;ul{display:flex;li{padding:10px 6px;}}}h2{a{text-decoration:none;transition:color 0.3s;}&:hover{a{color:var(--highlight);}}}"]),Te=(new Date).getFullYear(),Se=function(){var e=(0,l.K2)("3441984052").site.siteMetadata,t=e.title,n=e.siteAuthor,r=e.siteAuthorUrl;return c.createElement(xe,null,c.createElement("h2",{style:{marginTop:"0px"},className:"title__main"},c.createElement(l.rU,{to:"/"},t)),c.createElement("div",{className:"container"},"ppotatoG - © ",Te," Designed and built by"," ",c.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},n)," ","| ",c.createElement(l.rU,{to:"/privacy"},"Privacy Statement")))},Ce=n(6898),Ee=n(3720),ke=n.n(Ee),Ae=we.default.nav.withConfig({displayName:"NavStyles",componentId:"sc-17ixwsl-0"})(["display:none;@media (min-width:768px){display:flex;list-style:none;li{padding:0.5rem 1rem;font-weight:700;font-size:1.25rem;a{color:var(--dark);text-decoration:none;transition:color 0.3s ease;}&:hover{a{color:var(--highlight);}}}}"]),je=[{name:"Home",path:"/"},{name:"Contact",path:"/contact"}],Pe=function(){return c.createElement(Ae,null,je.map((function(e,t){return c.createElement("li",{key:t},c.createElement(l.rU,{to:e.path},e.name))})))},Ie=we.default.header.withConfig({displayName:"HeaderStyles",componentId:"sc-r01efp-0"})(["padding:10px 20px;display:flex;justify-content:space-between;align-items:center;position:fixed;top:0;left:0;width:100%;z-index:98;transition:background-color 0.3s ease,box-shadow 0.3s ease;&.nav__scrolled{background-color:#fff;box-shadow:-1px 5px 11px 0px rgba(0,0,0,0.1);}h1{a{color:var(--dark);text-decoration:none;transition:color 0.3s ease;}&:hover{a{color:var(--highlight);}}}"]),_e=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];return(0,c.useEffect)((function(){window.addEventListener("scroll",(function(){n(window.scrollY>50)}))}),[]),c.createElement(c.Fragment,null,c.createElement(Ie,{className:t?"nav__scrolled":null},c.createElement("h1",null,c.createElement(l.rU,{to:"/"},"ppotatoG")),c.createElement(Pe,null)))},Ne=we.default.button.withConfig({displayName:"BurgerStyles",componentId:"sc-1wumhge-0"})(["position:fixed;top:2.5rem;right:2.5rem;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:101;@media (min-width:768px){display:none;}&:focus{outline:none;}div{width:2rem;height:2px;background:",";transition:all 0.3s;position:relative;transform-origin:1px;&:first-child{transform:",";}&:nth-child(2){opacity:",";transform:",";}&:nth-child(3){transform:",";}}"],(function(e){return e.open?"#fff":"#2b2b2b"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"translate(20px)":"translate(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),Be=function(e){var t=e.open,n=e.setOpen;return c.createElement(Ne,{open:t,onClick:function(){return n(!t)}},c.createElement("div",null),c.createElement("div",null),c.createElement("div",null))},Le=we.default.div.withConfig({displayName:"SideMenuStyles",componentId:"sc-3cova2-0"})(["display:flex;flex-direction:column;justify-content:center;background:var(--dark);height:100vh;text-align:left;padding:2rem 5rem;position:fixed;top:0;right:0;transition:transform 0.3s ease-in-out;transform:",";z-index:100;@media (max-width:767px){width:100%;padding:2rem;}@media (min-width:768px){display:none;}li{margin:1rem 0;transition:opacity 0.3s;&:hover{opacity:0.5;}}a{font-size:2rem;padding:2rem 0;color:#fff;text-decoration:none;@media (max-width:767px){font-size:1.5rem;text-align:center;}}"],(function(e){return e.open?"translateX(0)":"translateX(100%)"})),De=function(e){var t=e.open;return c.createElement(Le,{open:t},c.createElement("ul",null,je.map((function(e,t){return c.createElement("li",{key:t},c.createElement(l.rU,{to:e.path},e.name))}))))},Re=(0,we.createGlobalStyle)([":root{font-size:16px;--dark:#222;--grey:#7c7c7c;--highlight:#fa7481;}*{box-sizing:border-box;}ul,ol{margin:0;padding:0;list-style:none;}body{color:var(--dark);font-family:Heebo,Arial,Helvetica,'Helvetica Neue',sans-serif;padding:2rem 1.5rem;margin:0;padding:150px 0 0 0;font-size:1.2rem;line-height:1.4;&::-webkit-scrollbar{width:12px;}&::-webkit-scrollbar-track{background:var(--highlight);}&::-webkit-scrollbar-thumb{background-color:var(--dark);border-radius:0px;}}.gatsby-resp-image-wrapper{max-width:800px!important;margin-top:2.5rem;margin-bottom:2.5rem;}.btn{color:var(--highlight);font-weight:700;margin-top:1.25rem;font-size:1.2rem;letter-spacing:-0.5px;text-decoration:none;text-transform:capitalize;}main{max-width:1200px;margin-left:auto;margin-right:auto;padding:30px 30px 0 30px;}hr{&.separator{height:3px;border:none;background-color:#000;margin-top:2.5rem;margin-bottom:2.5rem;&.separator__large{height:6px;}}}"]),Me=(0,we.createGlobalStyle)(["h1,.title__main{font-size:3.5rem;font-weight:700;color:var(--dark);margin-top:1.25rem;margin-bottom:1.25rem;letter-spacing:-2px;line-height:1.1em;&:after{content:'.';display:inline-block;color:var(--highlight);}}h2{font-size:1.5rem;font-weight:700;color:var(--grey);margin-top:1rem;margin-bottom:1rem;line-height:1.25em;letter-spacing:-0.5px;}p{margin-top:0.5rem;margin-bottom:1.5rem;}"]),Ue=function(e){var t=e.children,n=(0,c.useState)(!1),r=n[0],o=n[1];return c.createElement(c.Fragment,null,c.createElement(Re,null),c.createElement(Me,null),c.createElement(ve,null),c.createElement(Ce.ww.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,delay:.25}},c.createElement(_e,null),c.createElement(Be,{open:r,setOpen:o}),c.createElement(De,{open:r,setOpen:o}),c.createElement("main",{style:{minHeight:"100vh"}},t),c.createElement(Se,null),c.createElement(ke(),{location:"bottom",buttonText:"OK",cookieName:"koopBlogCookie",expires:150,style:{background:"#222222",padding:"15px 25px",fontSize:"16px"},buttonStyle:{backgroundColor:"#fff",color:"#222222",fontSize:"16px",fontWeight:700,padding:"8px 18px"}},"This website uses cookies to help improve your experience. By using this site you agree to the website"," ",c.createElement(l.rU,{to:"/privacy",style:{color:"#fff"}},"privacy statement"),".")))}}}]);
//# sourceMappingURL=2e8b5980842ba99563d2f93c6cabd90e787f9b6c-f5175bd69b8acba448ca.js.map