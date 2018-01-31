/*!
* Vue Material v0.7.7
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=458)})({0:function(t,e){t.exports=function(t,e,n,r,o){var i,u=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,u=t.default);var f="function"==typeof u?u.options:u;e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns),r&&(f._scopeId=r);var a;if(o?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=a):n&&(a=n),a){var s=f.functional,l=s?f.render:f.beforeCreate;s?f.render=function(t,e){return a.call(e),l(t,e)}:f.beforeCreate=l?[].concat(l,a):[a]}return{esModule:i,exports:u,options:f}}},10:function(t,e,n){var r=n(9),o=n(17);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=r,t.exports=e.default},12:function(t,e,n){var r=n(22)("wks"),o=n(20),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},13:function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},14:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},15:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},16:function(t,e,n){var r=n(2),o=n(4),i=n(29),u=n(10),c=function(t,e,n){var f,a,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,y=t&c.W,x=p?o:o[e]||(o[e]={}),m=x.prototype,_=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(f in n)(a=!l&&_&&void 0!==_[f])&&f in x||(s=a?_[f]:n[f],x[f]=p&&"function"!=typeof _[f]?n[f]:h&&a?i(s,r):y&&_[f]==s?(function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((x.virtual||(x.virtual={}))[f]=s,t&c.R&&m&&!m[f]&&u(m,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},17:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},18:function(t,e,n){var r=n(30),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},19:function(t,e,n){var r=n(22)("keys"),o=n(20);t.exports=function(t){return r[t]||(r[t]=o(t))}},2:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},203:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-file",u.default),t.material.styles.push(f.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(204),u=r(i),c=n(208),f=r(c);t.exports=e.default},204:function(t,e,n){function r(t){n(205)}var o=n(0)(n(206),n(207),r,null,null);t.exports=o.exports},205:function(t,e){},206:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(66),i=r(o),u=n(11),c=r(u);e.default={name:"md-file",props:{value:String,id:String,name:String,disabled:Boolean,required:Boolean,placeholder:String,accept:String,multiple:Boolean},data:function(){return{filename:this.value}},watch:{value:function(){this.filename=this.value}},methods:{getMultipleName:function(t){var e=[];return[].concat((0,i.default)(t)).forEach((function(t){e.push(t.name)})),e.join(", ")},openPicker:function(){this.disabled||(this.resetFile(),this.$refs.fileInput.click(),this.$refs.textInput.$el.focus())},resetFile:function(){this.parentContainer.value="",this.$refs.fileInput.value=""},onFileSelected:function(t){var e=t.target.files||t.dataTransfer.files;e?e.length>1?this.filename=this.getMultipleName(e):1===e.length?this.filename=e[0].name:this.filename=null:this.filename=t.target.value.split("\\").pop(),this.$emit("selected",e||t.target.value),this.$emit("input",this.filename)}},mounted:function(){if(this.parentContainer=(0,c.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-file in a md-input-container");this.parentContainer.hasFile=!0},beforeDestroy:function(){this.parentContainer.hasFile=!1}},t.exports=e.default},207:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-file",on:{click:t.openPicker}},[n("md-input",{ref:"textInput",attrs:{readonly:"",required:t.required,placeholder:t.placeholder,disabled:t.disabled},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),t._v(" "),n("md-icon",[t._v("attach_file")]),t._v(" "),n("input",{ref:"fileInput",attrs:{type:"file",id:t.id,name:t.name,disabled:t.disabled,multiple:t.multiple,accept:t.accept},on:{change:t.onFileSelected}})],1)},staticRenderFns:[]}},208:function(t,e){t.exports=""},21:function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},22:function(t,e,n){var r=n(2),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},23:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},25:function(t,e,n){var r=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},26:function(t,e,n){var r=n(6),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},27:function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},28:function(t,e,n){var r=n(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},29:function(t,e,n){var r=n(35);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},3:function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},30:function(t,e,n){var r=n(8),o=n(7),i=n(33)(!1),u=n(19)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(a,n)||a.push(n));return a}},31:function(t,e,n){t.exports=!n(3)&&!n(5)((function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a}))},32:function(t,e){t.exports={}},33:function(t,e,n){var r=n(7),o=n(28),i=n(34);t.exports=function(t){return function(e,n,u){var c,f=r(e),a=o(f.length),s=i(u,a);if(t&&n!=n){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}}},34:function(t,e,n){var r=n(15),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},35:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},37:function(t,e,n){var r=n(9).f,o=n(8),i=n(12)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},4:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},40:function(t,e){t.exports=!0},43:function(t,e,n){"use strict";var r=n(40),o=n(16),i=n(49),u=n(10),c=n(8),f=n(32),a=n(52),s=n(37),l=n(55),p=n(12)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,y,x,m){a(n,e,h);var _,g,b,O=function(t){if(!d&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",j="values"==y,S=!1,M=t.prototype,P=M[p]||M["@@iterator"]||y&&M[y],E=P||O(y),C=y?j?O("entries"):E:void 0,A="Array"==e?M.entries||P:P;if(A&&(b=l(A.call(new t)))!==Object.prototype&&(s(b,w,!0),r||c(b,p)||u(b,p,v)),j&&P&&"values"!==P.name&&(S=!0,E=function(){return P.call(this)}),r&&!m||!d&&!S&&M[p]||u(M,p,E),f[e]=E,f[w]=v,y)if(_={values:j?E:O("values"),keys:x?E:O("keys"),entries:C},m)for(g in _)g in M||i(M,g,_[g]);else o(o.P+o.F*(d||S),e,_);return _}},458:function(t,e,n){t.exports=n(203)},48:function(t,e,n){"use strict";var r=n(51)(!0);n(43)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},49:function(t,e,n){t.exports=n(10)},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},50:function(t,e,n){var r=n(13),o=n(53),i=n(23),u=n(19)("IE_PROTO"),c=function(){},f=function(){var t,e=n(26)("iframe"),r=i.length;for(e.style.display="none",n(54).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},51:function(t,e,n){var r=n(15),o=n(14);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},52:function(t,e,n){"use strict";var r=n(50),o=n(17),i=n(37),u={};n(10)(u,n(12)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},53:function(t,e,n){var r=n(9),o=n(13),i=n(18);t.exports=n(3)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}},54:function(t,e,n){t.exports=n(2).document&&document.documentElement},55:function(t,e,n){var r=n(8),o=n(21),i=n(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},6:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},60:function(t,e,n){var r=n(61),o=n(12)("iterator"),i=n(32);t.exports=n(4).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},61:function(t,e,n){var r=n(24),o=n(12)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},66:function(t,e,n){"use strict";e.__esModule=!0;var r=n(69),o=(function(t){return t&&t.__esModule?t:{default:t}})(r);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},69:function(t,e,n){t.exports={default:n(70),__esModule:!0}},7:function(t,e,n){var r=n(25),o=n(14);t.exports=function(t){return r(o(t))}},70:function(t,e,n){n(48),n(71),t.exports=n(4).Array.from},71:function(t,e,n){"use strict";var r=n(29),o=n(16),i=n(21),u=n(72),c=n(73),f=n(28),a=n(74),s=n(60);o(o.S+o.F*!n(75)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,x=0,m=s(p);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==m||d==Array&&c(m))for(e=f(p.length),n=new d(e);e>x;x++)a(n,x,y?h(p[x],x):p[x]);else for(l=m.call(p),n=new d;!(o=l.next()).done;x++)a(n,x,y?u(l,h,[o.value,x],!0):o.value);return n.length=x,n}})},72:function(t,e,n){var r=n(13);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},73:function(t,e,n){var r=n(32),o=n(12)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},74:function(t,e,n){"use strict";var r=n(9),o=n(17);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},75:function(t,e,n){var r=n(12)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},8:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},9:function(t,e,n){var r=n(13),o=n(31),i=n(27),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}}})}));