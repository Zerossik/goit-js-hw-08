function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(S,t),l?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function S(){var e=g();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?y(e):(o=i=void 0,a)}function w(){var e=g(),n=O(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),j={};y.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),y.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(e.email&&(y.elements.email.value=e.email),e.message&&(y.elements.message.value=e.message))}();
//# sourceMappingURL=03-feedback.96cbfd13.js.map
