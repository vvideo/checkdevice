(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var n$1,l$1,u$1,i$1,o$1,r$1,f$1,e$2,c$1,s$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$s(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y$1(i)?g(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a=f-r:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&a++,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$2,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$2++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b$s(m,M),h.constructor=T,h.render=q$1),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l$1.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(L=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e;}else u.__e=t.__e,u.__k=t.__k;l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n$1.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A$1(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A$1(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A$1(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A$1(l,s,g,m[s],o));}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function V(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n$1.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n$1=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$s.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b$s.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b$s.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$2=0,c$1=F(!1),s$1=F(!0);

    var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$1=new Map;function e$1(s){var r=t$1.get(this);return r||(r=new Map,t$1.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

    var m$1=e$1.bind(_);

    var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function A(n){return o=5,T(function(){return {current:n}},[])}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

    function block(name) {
        return function (elem, mods) {
            if (!elem) {
                return name;
            }
            var className = name;
            if (typeof elem === 'string') {
                className = name + '__' + elem;
                if (mods) {
                    className = buildMods(className, mods);
                }
                return className;
            }
            if (elem) {
                className = buildMods(className, elem);
            }
            return className;
        };
    }
    function buildMods(className, mods) {
        var result = className;
        Object.keys(mods).forEach(function (modName) {
            var modValue = mods[modName];
            if (modValue === false || modValue === null || modValue === undefined || modValue === '') {
                return;
            }
            result += ' ' + className + '_';
            if (mods[modName] === true) {
                result += modName;
            }
            else {
                result += modName + '_' + modValue;
            }
        });
        return result;
    }

    var b$r = block('badge');
    function Badge(props) {
        var _a, _b;
        return m$1(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "])), b$r({
            type: props.type,
            background: props.background,
            disabled: props.disabled,
            hidden: props.hidden,
            size: props.size,
            click: props.click,
        }), ((_a = props.top) === null || _a === void 0 ? void 0 : _a.text) ? m$1(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["<div class=\"", "\" title=\"", "\">", "</div>"], ["<div class=\"", "\" title=\"", "\">", "</div>"])), b$r('top-text'), props.top.title, props.top.text) : '', b$r('body'), props.text, ((_b = props.bottom) === null || _b === void 0 ? void 0 : _b.text) ? m$1(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["<div class=\"", "\" title=\"", "\">", "</div>"], ["<div class=\"", "\" title=\"", "\">", "</div>"])), b$r('bottom-text'), props.bottom.title, props.bottom.text) : '');
    }
    var templateObject_1$C, templateObject_2$k, templateObject_3$7;

    let defaultVideoElement;
    let defaultAudioElement;
    function getDefaultAudioElement() {
        if (!defaultAudioElement) {
            defaultAudioElement = document.createElement('audio');
        }
        return defaultAudioElement;
    }
    function getDefaultVideoElement() {
        if (!defaultVideoElement) {
            defaultVideoElement = document.createElement('video');
        }
        return defaultVideoElement;
    }
    function canPlayType(type) {
        if (typeof window === 'undefined') {
            return '';
        }
        let mediaElement;
        const mediaElementType = type.split('/')[0];
        if (mediaElementType === 'audio') {
            mediaElement = getDefaultAudioElement();
        }
        else {
            mediaElement = getDefaultVideoElement();
        }
        return mediaElement.canPlayType ?
            mediaElement.canPlayType(type) :
            '';
    }

    function isTypeSupported(value) {
        if (typeof window === 'undefined' || !window.MediaSource) {
            return false;
        }
        let result = false;
        try {
            result = MediaSource.isTypeSupported(value);
        }
        catch (e) { }
        return result;
    }

    function isContentTypeSupported(contentType) {
        const canPlayTypeResult = canPlayType(contentType);
        const isTypeSupportedResult = isTypeSupported(contentType);
        return {
            canPlayType: canPlayTypeResult,
            isTypeSupported: isTypeSupportedResult,
            any: canPlayTypeResult !== '' || isTypeSupportedResult,
            both: canPlayTypeResult !== '' && isTypeSupportedResult,
            mediaElementType: contentType.split('/')[0],
            contentType,
        };
    }

    const H264_BASELINE_CONTENT_TYPE = 'video/mp4; codecs="avc1.42E01E"';
    const H264_MAIN_CONTENT_TYPE = 'video/mp4; codecs="avc1.4D401E"';
    const H264_HIGH_CONTENT_TYPE = 'video/mp4; codecs="avc1.64001E"';
    const VP8_CONTENT_TYPE = 'video/webm; codecs="vp8"';
    const VP9_CONTENT_TYPE = 'video/webm; codecs="vp9"';
    // https://googlechrome.github.io/samples/media/vp9-codec-string.html
    const VP9_PROFILE2_LEVEL1_10BIT_CONTENT_TYPE = 'video/webm; codecs="vp09.02.10.10.01.09.16.09.01"';
    const AV1_CONTENT_TYPE = 'video/mp4; codecs="av01.0.01M.08"';
    // https://developer.mozilla.org/en-US/docs/Web/Media/Formats/codecs_parameter
    const AV1_MAIN10_CONTENT_TYPE = 'video/mp4; codecs="av01.0.15M.10"';
    const HEV_MAIN_CONTENT_TYPE = 'video/mp4; codecs="hev1.1.6.L123.B0"';
    const HEV_MAIN10_CONTENT_TYPE = 'video/mp4; codecs="hev1.2.4.L153.B0"';
    // For iOS
    const HVC_MAIN_CONTENT_TYPE = 'video/mp4; codecs="hvc1.1.6.L123.B0"';
    const HVC_MAIN10_CONTENT_TYPE = 'video/mp4; codecs="hvc1.2.4.L153.B0"';
    const DOLBY_VISION_CONTENT_TYPE = 'video/mp4; codecs="dvhe.08.09"';
    const MPEG2T_CONTENT_TYPE = 'video/mp2t';
    const VVC1_MAIN10_CONTENT_TYPE = 'video/mp4; codecs="vvc1.1.L67.CQA.O0+3"';
    const VVCI_MAIN10_CONTENT_TYPE = 'video/mp4; codecs="vvci.1.L67.CQA.O0+3"';
    const EVC_BASELINE_CONTENT_TYPE = 'video/mp4; codecs="evc1.vprf0.vlev123"';
    const EVC_MAIN_CONTENT_TYPE = 'video/mp4; codecs="evc1.vprf1.vlev153"';

    function isVp8Supported() {
        return isContentTypeSupported(VP8_CONTENT_TYPE);
    }
    function isVp9Supported() {
        return isContentTypeSupported(VP9_CONTENT_TYPE);
    }
    function isVp9Profile2Level110BitSupported() {
        return isContentTypeSupported(VP9_PROFILE2_LEVEL1_10BIT_CONTENT_TYPE);
    }
    function isH264BaselineSupported() {
        return isContentTypeSupported(H264_BASELINE_CONTENT_TYPE);
    }
    function isH264MainSupported() {
        return isContentTypeSupported(H264_MAIN_CONTENT_TYPE);
    }
    function isH264HighSupported() {
        return isContentTypeSupported(H264_HIGH_CONTENT_TYPE);
    }
    function isAV1Supported() {
        return isContentTypeSupported(AV1_CONTENT_TYPE);
    }
    function isAV1Main10Supported() {
        return isContentTypeSupported(AV1_MAIN10_CONTENT_TYPE);
    }
    function isHevcMainSupported() {
        const result = isContentTypeSupported(HEV_MAIN_CONTENT_TYPE);
        if (result.any) {
            return result;
        }
        return isContentTypeSupported(HVC_MAIN_CONTENT_TYPE);
    }
    function isHevcMain10Supported() {
        const resultHev = isContentTypeSupported(HEV_MAIN10_CONTENT_TYPE);
        if (resultHev.any) {
            return resultHev;
        }
        return isContentTypeSupported(HVC_MAIN10_CONTENT_TYPE);
    }
    function isDolbyVisionSupported() {
        return isContentTypeSupported(DOLBY_VISION_CONTENT_TYPE);
    }
    function isMpeg2TSupported() {
        return isContentTypeSupported(MPEG2T_CONTENT_TYPE);
    }
    function isVvcMain10Supported() {
        const result = isContentTypeSupported(VVC1_MAIN10_CONTENT_TYPE);
        if (result.any) {
            return result;
        }
        return isContentTypeSupported(VVCI_MAIN10_CONTENT_TYPE);
    }
    function isEvcBaselineSupported() {
        return isContentTypeSupported(EVC_BASELINE_CONTENT_TYPE);
    }
    function isEvcMainSupported() {
        return isContentTypeSupported(EVC_MAIN_CONTENT_TYPE);
    }

    const GIF_CONTENT_TYPE = 'image/gif';
    const JPEG_CONTENT_TYPE = 'image/jpeg';
    const JPEG_XL_CONTENT_TYPE = 'image/jxl';
    const PNG_CONTENT_TYPE = 'image/png';
    const APNG_CONTENT_TYPE = 'image/apng';
    const SVG_CONTENT_TYPE = 'image/svg+xml';
    const WEBP_CONTENT_TYPE = 'image/webp';
    const HEIC_CONTENT_TYPE = 'image/heic';
    const AVIF_CONTENT_TYPE = 'image/avif';

    function isGifSupported() {
        return isImageSupported(GIF_CONTENT_TYPE);
    }
    function isJpegSupported() {
        return isImageSupported(JPEG_CONTENT_TYPE);
    }
    function isJpegXlSupported() {
        return isImageSupported(JPEG_XL_CONTENT_TYPE);
    }
    function isPngSupported() {
        return isImageSupported(PNG_CONTENT_TYPE);
    }
    function isAPngSupported() {
        return isImageSupported(APNG_CONTENT_TYPE);
    }
    function isSvgSupported() {
        return Boolean(typeof window !== 'undefined' &&
            document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
    }
    function isWebpSupported() {
        return isImageSupported(WEBP_CONTENT_TYPE);
    }
    function isHeicSupported() {
        return isImageSupported(HEIC_CONTENT_TYPE);
    }
    function isAvifSupported() {
        return isImageSupported(AVIF_CONTENT_TYPE);
    }
    function isImageSupported(type) {
        if (typeof window === 'undefined') {
            return Promise.resolve(false);
        }
        return new Promise((resolve) => {
            const picture = document.createElement('picture');
            const source = document.createElement('source');
            source.srcset = 'data:,x';
            source.type = type;
            picture.appendChild(source);
            const img = document.createElement('img');
            picture.appendChild(img);
            Promise.resolve().then(() => {
                resolve(Boolean(img.currentSrc));
            });
        });
    }

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Tablet_or_Desktop
    function isMobile() {
        return /Mobi|Android/i.test(window.navigator.userAgent);
    }

    function isFirefox() {
        return /firefox/.test(window.navigator.userAgent.toLowerCase());
    }

    function getFirefoxVersion() {
        const match = navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return match ? (parseInt(match[1], 10) || -1) : -1;
    }

    const MPD_CONTENT_TYPE = 'application/dash+xml';
    const HLS_CONTENT_TYPE = 'application/vnd.apple.mpegurl';
    const MSS_CONTENT_TYPE = 'application/vnd.ms-sstr+xml';

    function isNativeHlsSupported() {
        return canPlayType(HLS_CONTENT_TYPE) !== '';
    }
    function isNativeMpdSupported() {
        return canPlayType(MPD_CONTENT_TYPE) !== '';
    }
    function isNativeMssSupported() {
        return canPlayType(MSS_CONTENT_TYPE) !== '';
    }

    function isMseSupported() {
        return Boolean(typeof window !== 'undefined' &&
            window.MediaSource &&
            typeof window.MediaSource.isTypeSupported === 'function');
    }
    function isEmeSupported() {
        var _a, _b;
        return Boolean(typeof window !== 'undefined' &&
            window.MediaKeys &&
            (
            // @ts-ignore
            (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.requestMediaKeySystemAccess) &&
            ((_b = window.MediaKeySystemAccess) === null || _b === void 0 ? void 0 : _b.prototype.getConfiguration));
    }
    function isMmsSupported() {
        return Boolean(typeof window !== 'undefined' &&
            window.ManagedMediaSource &&
            typeof window.ManagedMediaSource.isTypeSupported === 'function');
    }

    function getDevicePixelRatio$1() {
        return window.devicePixelRatio || 1;
    }
    function getScreenWidth() {
        return screen.width * getDevicePixelRatio$1();
    }
    function getScreenHeight() {
        return screen.height * getDevicePixelRatio$1();
    }
    function isHighDynamicRangeSupported(win = window) {
        var _a, _b, _c;
        if (win.Hisense_GetSupportForHDR) {
            return win.Hisense_GetSupportForHDR() !== 'not support';
        }
        // @ts-ignore
        const cast = win.cast;
        // Chromecast
        if (cast) {
            return Boolean((_c = (_b = (_a = cast.framework) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.DeviceCapabilities) === null || _c === void 0 ? void 0 : _c.IS_HDR_SUPPORTED);
        }
        try {
            const isHighSupported = checkDynamicRange('high', win);
            const isStandardSupported = checkDynamicRange('standard', win);
            if (!isStandardSupported) {
                return undefined;
            }
            return Boolean(isStandardSupported && isHighSupported);
        }
        catch (e) { }
        return undefined;
    }
    function checkDynamicRange(type, win = window) {
        return win.matchMedia && win.matchMedia(`(dynamic-range: ${type})`).matches;
    }
    function isHighVideoDynamicRangeSupported(win = window) {
        try {
            const isHighSupported = checkVideoDynamicRange('high', win);
            const isStandardSupported = checkVideoDynamicRange('standard', win);
            if (!isStandardSupported) {
                return undefined;
            }
            return Boolean(isStandardSupported && isHighSupported);
        }
        catch (e) { }
        return undefined;
    }
    function checkVideoDynamicRange(type, win = window) {
        return win.matchMedia && win.matchMedia(`(video-dynamic-range: ${type})`).matches;
    }
    // 30720×17280
    const SCREEN_32K = [[30720, 17280]];
    // 15360×8640
    const SCREEN_16K = [[15360, 8640]];
    // 7680×4320, 8192×4320, 10000×3600, 10240×4320, 10240×5760
    const SCREEN_10K = [[7680, 4320], [8192, 4320], [10000, 3600], [10240, 4320], [10240, 5760]];
    // 7680×2160, 7680×4320, 8192×1024, 8192×1638, 8192×4320, 8192×5120
    // 8192×5464, 8192×6144, 8192×8192, 8400×3600
    const SCREEN_8K = [
        [7680, 2160], [7680, 4320], [8192, 1024], [8192, 1638], [8192, 4320], [8192, 5120],
        [8192, 5464], [8192, 6144], [8192, 8192], [8400, 3600]
    ];
    // 5760×3240, 6016×3200, 6016×3384, 6144×3240, 6144×3456, 6400×4096
    const SCREEN_6K = [[5760, 3240], [6016, 3200], [6016, 3384], [6144, 3240], [6144, 3456], [6400, 4096]];
    // 5120×1440, 5120×2160, 5120×2700, 5120×2880, 5120×3840, 5280×2160
    const SCREEN_5K = [[5120, 1440], [5120, 2160], [5120, 2700], [5120, 2880], [5120, 3840], [5280, 2160]];
    // 3656×2664, 3840×2160, 3996×2160, 4096×1716, 4096×2160, 4096×3072
    const SCREEN_4K = [[3656, 2664], [3840, 2160], [3996, 2160], [4096, 1716], [4096, 2160], [4096, 3072]];
    // 3000x2000
    const SCREEN_3K = [[3000, 2000]];
    // 2560×1440
    const SCREEN_2d5K = [[2560, 1440]];
    // 2048×1080, 1998×1080, 2048×858
    const SCREEN_2K = [[1998, 1080], [2048, 1080], [2048, 858]];
    // 1920×1080
    const SCREEN_FULLHD = [[1920, 1080]];
    // 1280×720
    const SCREEN_HD = [[1280, 720]];
    function checkSize(sizes, width, height) {
        let isLess = true;
        for (let i = 0; i < sizes.length; i++) {
            const item = sizes[i];
            if (width === item[0] && height === item[1]) {
                return 0;
            }
            if (width >= item[0]) {
                isLess = false;
            }
        }
        if (isLess) {
            return -1;
        }
        return 1;
    }
    function getResolutionBadge(width = getScreenWidth(), height = getScreenHeight()) {
        const items = [
            {
                sizes: [[0, 0]],
                title: 'SD',
            },
            {
                sizes: SCREEN_HD,
                title: 'HD'
            },
            {
                sizes: SCREEN_FULLHD,
                title: 'FullHD'
            },
            {
                sizes: SCREEN_2K,
                title: '2K'
            },
            {
                sizes: SCREEN_2d5K,
                title: '2.5K'
            },
            {
                sizes: SCREEN_3K,
                title: '3K'
            },
            {
                sizes: SCREEN_4K,
                title: '4K'
            },
            {
                sizes: SCREEN_5K,
                title: '5K'
            },
            {
                sizes: SCREEN_6K,
                title: '6K'
            },
            {
                sizes: SCREEN_8K,
                title: '8K'
            },
            {
                sizes: SCREEN_10K,
                title: '10K'
            },
            {
                sizes: SCREEN_16K,
                title: '16K'
            },
            {
                sizes: SCREEN_32K,
                title: '32K'
            },
        ];
        let supportedSize = items[0].title;
        for (const item of items) {
            const result = checkSize(item.sizes, width, height);
            if (result === 0) {
                supportedSize = item.title;
            }
            else if (result === -1) {
                break;
            }
            else {
                supportedSize = `>${item.title}`;
            }
        }
        return supportedSize;
    }
    function isSrgbSupported(win = window) {
        return checkColorSpace('srgb', win);
    }
    function isP3Supported(win = window) {
        return checkColorSpace('p3', win);
    }
    function isRec2020Supported(win = window) {
        return checkColorSpace('rec2020', win);
    }
    function checkColorSpace(type, win = window) {
        return win.matchMedia && win.matchMedia(`(color-gamut: ${type})`).matches;
    }

    const encryptionSchemes = [
        'cenc',
        'cbcs',
        'cbcs-1-9',
    ];
    const initDataTypes = ['cenc', 'sinf', 'skd', 'keyids'];
    const defaultVideoCapabilites = [
        {
            contentType: H264_BASELINE_CONTENT_TYPE,
        },
        {
            contentType: VP8_CONTENT_TYPE,
        },
    ];

    function requestMediaKeySystemAccess(keySystem, supportedConfigurations) {
        if (typeof navigator === 'undefined' || !navigator.requestMediaKeySystemAccess) {
            return Promise.resolve(false);
        }
        return navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations).then(() => true).catch(() => false);
    }

    function isDrmSupported(keySystem, params = {}) {
        const videoCapabilities = params.videoCapabilities || defaultVideoCapabilites;
        return requestMediaKeySystemAccess(keySystem, [
            {
                distinctiveIdentifier: params.distinctiveIdentifier,
                initDataTypes: params.initDataTypes || initDataTypes,
                persistentState: params.persistentState,
                sessionTypes: params.sessionTypes,
                videoCapabilities: videoCapabilities.map(item => {
                    const data = Object.assign({}, item);
                    if (params.encryptionScheme) {
                        data.encryptionScheme = params.encryptionScheme;
                    }
                    if (params.robustness) {
                        data.robustness = params.robustness;
                    }
                    return data;
                }),
            },
        ]);
    }

    const FAIRPLAY_KEY_SYSTEM = 'com.apple.fps';
    const FAIRPLAY_V1_KEY_SYSTEM = 'com.apple.fps.1_0';
    const FAIRPLAY_V2_KEY_SYSTEM = 'com.apple.fps.2_0';
    const FAIRPLAY_V3_KEY_SYSTEM = 'com.apple.fps.3_0';
    const WIDEWINE_KEY_SYSTEM = 'com.widevine.alpha';
    const PLAYREADY_RECOMMENDATION_KEY_SYSTEM = 'com.microsoft.playready.recommendation';
    const PRIMETIME_KEY_SYSTEM = 'com.adobe.primetime';
    const CLEAR_KEY_SYSTEM = 'org.w3.clearkey';

    function isFairPlaySupported(params) {
        return isDrmSupported(FAIRPLAY_KEY_SYSTEM, params);
    }
    function isFairPlayV1Supported(params) {
        return isDrmSupported(FAIRPLAY_V1_KEY_SYSTEM, params);
    }
    function isFairPlayV2Supported(params) {
        return isDrmSupported(FAIRPLAY_V2_KEY_SYSTEM, params);
    }
    function isFairPlayV3Supported(params) {
        return isDrmSupported(FAIRPLAY_V3_KEY_SYSTEM, params);
    }

    function isWidevineSupported(params) {
        return isDrmSupported(WIDEWINE_KEY_SYSTEM, params);
    }
    function isWidevineL1Supported(params = {}) {
        return isDrmSupported(WIDEWINE_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: 'HW_SECURE_DECODE' }));
    }
    function isWidevineL3Supported(params = {}) {
        return isDrmSupported(WIDEWINE_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: 'SW_SECURE_DECODE' }));
    }

    function isPlayReadySupported(params) {
        return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, params);
    }
    function isPlayReadySL150Supported(params = {}) {
        return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: '150' }));
    }
    function isPlayReadySL2000Supported(params = {}) {
        return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: '2000' }));
    }
    function isPlayReadySL3000Supported(params = {}) {
        return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: '3000' }));
    }

    function isPrimetimeSupported(params) {
        return isDrmSupported(PRIMETIME_KEY_SYSTEM, params);
    }

    function isClearKeySupported(params) {
        return isDrmSupported(CLEAR_KEY_SYSTEM, params);
    }

    function isPipSupported() {
        if (typeof window === 'undefined') {
            return false;
        }
        if (isFirefox() && getFirefoxVersion() >= 69) {
            return true;
        }
        const video = document.createElement('video');
        return 'pictureInPictureEnabled' in document || 'webkitPresentationMode' in video;
    }
    function isDocumentPipSupported() {
        if (typeof window === 'undefined') {
            return false;
        }
        // https://developer.mozilla.org/en-US/docs/Web/API/DocumentPictureInPicture
        // @ts-ignore
        return Boolean(window.documentPictureInPicture);
    }
    function isCastToAirPlaySupported() {
        return Boolean(typeof window !== 'undefined' &&
            // https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls
            // @ts-ignore
            window.WebKitPlaybackTargetAvailabilityEvent);
    }

    function noop() { }

    var isSsr = typeof window === 'undefined';

    function needChangeWidthHeight() {
        // For old mobile Safari
        return !screen.orientation &&
            typeof window.orientation === 'number' &&
            (window.orientation === 90 || window.orientation === -90);
    }

    var ScreenInfo = /** @class */ (function () {
        function ScreenInfo() {
            var _this = this;
            this.listeners = [];
            this.devicePixelRatio = isSsr ? 1 : getDevicePixelRatio$1();
            this.screens = [];
            this.timer = -1;
            this.isScreenDetails = false;
            this.needUserActivity = false;
            this.isDenied = false;
            this.handleScreenChange = function () {
                _this.emit();
            };
            if (isSsr) {
                return;
            }
            var screenJson = JSON.stringify(this.getScreen());
            this.timer = window.setInterval(function () {
                var currentDevicePixelRation = getDevicePixelRatio$1();
                if (_this.devicePixelRatio !== currentDevicePixelRation) {
                    _this.devicePixelRatio = currentDevicePixelRation;
                    _this.handleScreenChange();
                }
                if (window.screen.addEventListener) {
                    return;
                }
                var currentScreenJson = JSON.stringify(_this.getScreen());
                if (screenJson !== currentScreenJson) {
                    screenJson = currentScreenJson;
                    _this.handleScreenChange();
                }
            }, 500);
            this.bindScreenChange();
            this.getScreenDetails().catch(noop);
        }
        ScreenInfo.prototype.addListener = function (callback) {
            this.listeners.push(callback);
        };
        ScreenInfo.prototype.removeListener = function (callback) {
            this.listeners = this.listeners.filter(function (item) {
                return item !== callback;
            });
        };
        ScreenInfo.prototype.getScreenDetails = function () {
            var _this = this;
            if (isSsr || !window.getScreenDetails) {
                return Promise.resolve();
            }
            return window.getScreenDetails().then(function (result) {
                window.clearInterval(_this.timer);
                _this.isScreenDetails = true;
                _this.needUserActivity = false;
                _this.screens = result.screens;
                _this.unbindScreenChange();
                _this.bindScreensChange(result.screens);
                result.onscreenschange = function () {
                    _this.bindScreensChange(result.screens);
                    _this.screens = result.screens;
                    _this.emit();
                };
                return result;
            }).catch(function (e) {
                _this.needUserActivity = true;
                _this.emit();
                // @ts-ignore
                navigator.permissions.query({ name: 'window-management' }).then(function (result) {
                    if (result.state === 'denied') {
                        _this.isDenied = true;
                        _this.needUserActivity = false;
                    }
                    else {
                        _this.isDenied = false;
                        _this.needUserActivity = true;
                    }
                    _this.emit();
                });
                throw e;
            });
        };
        ScreenInfo.prototype.bindScreensChange = function (screens) {
            var _this = this;
            screens.forEach(function (screen) {
                if (screen.removeEventListener) {
                    screen.removeEventListener('change', _this.handleScreenChange);
                }
                if (screen.addEventListener) {
                    screen.addEventListener('change', _this.handleScreenChange);
                }
            });
        };
        ScreenInfo.prototype.bindScreenChange = function () {
            this.unbindScreenChange();
            if (screen.addEventListener) {
                screen.addEventListener('change', this.handleScreenChange);
            }
        };
        ScreenInfo.prototype.unbindScreenChange = function () {
            if (screen.removeEventListener) {
                screen.removeEventListener('change', this.handleScreenChange);
            }
        };
        ScreenInfo.prototype.getAdditionalPropsForScreen = function (screen) {
            var result = {
                isHdr: false,
                colorSpaces: [],
            };
            try {
                var win = window.open('about:blank', 'checkdevice', "popup=yes,left=".concat(screen.availLeft, ",top=").concat(screen.availTop, ",width=100,height=100"));
                if (win) {
                    // @ts-ignore
                    result.isHdrSupported = isHighDynamicRangeSupported(win);
                    // @ts-ignore
                    result.colorSpaces = this.getColorSpaces(win);
                    win.close();
                }
            }
            catch (e) {
                console.error(e);
            }
            return result;
        };
        ScreenInfo.prototype.getColorSpaces = function (win) {
            if (win === void 0) { win = window; }
            var result = [];
            if (isSrgbSupported(win)) {
                result.push('srgb');
            }
            if (isP3Supported(win)) {
                result.push('p3');
            }
            if (isRec2020Supported(win)) {
                result.push('rec2020');
            }
            return result;
        };
        ScreenInfo.prototype.getAdditionalProps = function () {
            return {
                isHdr: isHighDynamicRangeSupported(),
                colorSpaces: this.getColorSpaces(),
            };
        };
        ScreenInfo.prototype.get = function () {
            var _this = this;
            if (isSsr) {
                return { screens: [] };
            }
            var result = {
                screens: this.isScreenDetails ?
                    this.screens.map(function (item) {
                        var additionalProps = item.isPrimary ?
                            _this.getAdditionalProps() :
                            _this.getAdditionalPropsForScreen(item);
                        return {
                            availLeft: item.availLeft,
                            availTop: item.availTop,
                            availWidth: item.availWidth,
                            availHeight: item.availHeight,
                            colorDepth: item.colorDepth,
                            pixelDepth: item.pixelDepth,
                            width: item.width,
                            height: item.height,
                            label: item.label,
                            isInternal: item.isInternal,
                            isPrimary: item.isPrimary,
                            isHdr: additionalProps.isHdr,
                            colorSpaces: additionalProps.colorSpaces,
                            isExtended: item.isExtended,
                            orientation: item.orientation,
                            devicePixelRatio: item.devicePixelRatio,
                        };
                    }) :
                    [this.getScreen()],
            };
            return result;
        };
        ScreenInfo.prototype.emit = function () {
            console.log('ScreenInfo: emit');
            this.listeners.forEach(function (item) { return item(); });
        };
        ScreenInfo.prototype.getScreen = function () {
            var screen = window.screen;
            var additionalProps = this.getAdditionalProps();
            var needChange = needChangeWidthHeight();
            var width = needChange ? screen.height : screen.width;
            var height = needChange ? screen.width : screen.height;
            var availWidth = needChange ? screen.availHeight : screen.availWidth;
            var availHeight = needChange ? screen.availWidth : screen.availHeight;
            return {
                availLeft: screen.availLeft,
                availTop: screen.availTop,
                availWidth: availWidth,
                availHeight: availHeight,
                width: width,
                height: height,
                colorDepth: screen.colorDepth,
                pixelDepth: screen.pixelDepth,
                label: '',
                isInternal: undefined,
                isPrimary: undefined,
                isExtended: Boolean(screen.isExtended),
                orientation: screen.orientation,
                devicePixelRatio: getDevicePixelRatio$1(),
                isHdr: additionalProps.isHdr,
                colorSpaces: additionalProps.colorSpaces,
            };
        };
        return ScreenInfo;
    }());
    var screenInfo = new ScreenInfo();
    function isScreensLargerThan2K(screens) {
        return screens.some(function (screen) {
            return isLargerFullHd(Math.min(screen.width, screen.height) * screen.devicePixelRatio);
        });
    }
    var FULL_HD_HEIGHT = 1080;
    var HEIGHT_PADDING = 5;
    function isLargerFullHd(height) {
        return height > FULL_HD_HEIGHT + HEIGHT_PADDING;
    }
    function needHdcpWarning() {
        var screens = screenInfo.get().screens;
        if (screenInfo.isScreenDetails &&
            screens.length === 1 &&
            screens[0].isInternal) {
            return false;
        }
        return true;
    }

    const standardAspectRatio = [
        [1, 1],
        [3, 2],
        [4, 1],
        [4, 3],
        [5, 3],
        [5, 4],
        [16, 9],
        [16, 10],
        [21, 9],
        [32, 9],
        // Ultra Wide
        [12, 5],
        [43, 18],
        [64, 27],
        // Super Wide
        [16, 5],
        [18, 5],
        [32, 9],
    ].map(item => {
        const [x, y] = item;
        return ({
            x,
            y,
            value: `${x}:${y}`,
            ratio: x / y,
        });
    });
    const ratios = standardAspectRatio.map(item => item.ratio).sort();
    const hashStandardRatios = standardAspectRatio.reduce((previous, currentValue) => {
        previous[currentValue.ratio] = currentValue;
        return previous;
    }, {});
    const DEFAULT_TOLERANCE = 0.06;
    function calcAspectRatio(width, height, options = { tolerance: DEFAULT_TOLERANCE }) {
        const ratio = Math.max(width, height) / Math.min(width, height);
        const standardRatio = hashStandardRatios[ratio];
        if (standardRatio) {
            return {
                x: standardRatio.x,
                y: standardRatio.y,
                value: standardRatio.value,
                approximately: false,
                nonStandard: false,
            };
        }
        const element = findElement(ratios, ratio, options.tolerance);
        if (element) {
            const result = hashStandardRatios[element];
            return {
                x: result.x,
                y: result.y,
                value: `≈${result.value}`,
                approximately: true,
                nonStandard: false,
            };
        }
        const divisor = gcd(width, height);
        let x = width / divisor;
        let y = height / divisor;
        if (divisor === 1) {
            x = Math.round(ratio * 100) / 100;
            y = 1;
        }
        return {
            x,
            y,
            value: `${x}:${y}`,
            approximately: false,
            nonStandard: true,
        };
    }
    function findElement(elems, value, tolerance) {
        for (let i = 0; i < elems.length; i++) {
            const diff = Math.abs(elems[i] - value);
            if (diff < tolerance) {
                return elems[i];
            }
        }
        return undefined;
    }
    function gcd(a = 0, b = 0) {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    function hasZoom() {
        if (isMobile()) {
            return false;
        }
        var devicePixelRatio = getDevicePixelRatio$1();
        var floorDevicePixelRatio = Math.floor(devicePixelRatio);
        if (devicePixelRatio === 1.5) {
            return false;
        }
        if (devicePixelRatio !== floorDevicePixelRatio) {
            return true;
        }
        if (devicePixelRatio > 4) {
            return true;
        }
        return false;
    }

    var keysets = {
        'Can I watch video in this browser?': {
            'en': 'Can I\u00a0watch video in\u00a0this browser?',
            'ru': 'Могу ли я\u00a0смотреть видео в\u00a0этом браузере?'
        },
        'Audio Codecs': {
            'en': 'Audio Codecs',
            'ru': 'Аудиокодеки'
        },
        'Video Codecs': {
            'en': 'Video Codecs',
            'ru': 'Видеокодеки'
        },
        'Supported': {
            'en': 'Supported',
            'ru': 'Поддерживаемые'
        },
        'No supported audio codecs.': {
            'en': 'No supported audio codecs.',
            'ru': 'Нет поддерживаемых аудиокодеков.'
        },
        'No supported video codecs.': {
            'en': 'No supported video codecs.',
            'ru': 'Нет поддерживаемых видеокодеков.'
        },
        'Unsupported': {
            'en': 'Unsupported',
            'ru': 'Не поддерживаемые'
        },
        'Size': {
            'en': 'Size',
            'ru': 'Размер'
        },
        'Color depth': {
            'en': 'Color depth',
            'ru': 'Глубина цвета'
        },
        'Audio': {
            'en': 'Audio',
            'ru': 'Аудио'
        },
        'Video': {
            'en': 'Video',
            'ru': 'Видео'
        },
        'Image Formats': {
            'en': 'Image Formats',
            'ru': 'Форматы картинок'
        },
        'Native Streaming Support': {
            'en': 'Native Streaming Support',
            'ru': 'Поддержка нативного стримминга'
        },
        'Yes': {
            'en': 'Yes',
            'ru': 'Да'
        },
        'No': {
            'en': 'No',
            'ru': 'Нет'
        },
        'Warning': {
            'en': 'Warning',
            'ru': 'Предупреждение'
        },
        'Screens': {
            'en': 'Screens',
            'ru': 'Экраны'
        },
        'Screen': {
            'en': 'Screen',
            'ru': 'Экран'
        },
        'No supported image formats.': {
            'en': 'No supported image formats.',
            'ru': 'Нет поддерживаемых форматов картинок.'
        },
        'Can I listen to surround sound on online services?': {
            'en': 'Can I listen to surround sound on online services?',
            'ru': 'Могу ли я услышать многоканальный звук в онлайн-сервисах?'
        },
        'HTMLVideoElement Features': {
            'en': 'HTMLVideoElement Features',
            'ru': 'Возможности HTMLVideoElement'
        },
        'Aspect ratio': {
            'en': 'Aspect ratio',
            'ru': 'Соотношение сторон'
        },
        'Primary': {
            'en': 'Primary',
            'ru': 'Основной'
        },
        'Internal': {
            'en': 'Internal',
            'ru': 'Внутренний'
        },
        'Please reset zoom in the page': {
            'en': 'Please reset zoom in the page',
            'ru': 'Необходимо сбросить зум на странице'
        },
        'Can I watch HDR video?': {
            'en': 'Can I watch HDR video?',
            'ru': 'Могу ли я смотреть HDR видео?'
        },
        'Supports one of the audio codecs?': {
            'en': 'Supports one of the audio codecs?',
            'ru': 'Есть поддержка одного из аудиокодеков?'
        },
        'Is this an HDR-compatible screen?': {
            'en': 'Is this an HDR-compatible screen?',
            'ru': 'Это HDR-совместимый экран?'
        },
        'Supports one of the video codecs?': {
            'en': 'Supports one of the video codecs?',
            'ru': 'Есть поддержка одного из видеокодеков?'
        },
        'Supports one of the video codecs and DRM with high security level?': {
            'en': 'Supports one of the video codecs and DRM with high security level?',
            'ru': 'Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?'
        },
        'Can I watch 4K video on online services?': {
            'en': 'Can I watch 4K video on online services?',
            'ru': 'Могу ли я смотреть 4К видео в онлайн-сервисах?'
        },
        'Online services protect content using': {
            'en': 'Online services protect content using',
            'ru': 'Онлайн-сервисы защищают контент с помощью'
        },
        'Has DRM support?': {
            'en': 'Has DRM support?',
            'ru': 'Есть поддержка DRM?'
        },
        'Can I watch 4K video?': {
            'en': 'Can I watch 4K video?',
            'ru': 'Могу ли я смотреть 4К видео?'
        },
        'Is the screen larger than 2K?': {
            'en': 'Is the screen larger than 2K?',
            'ru': 'Экран больше чем 2К?'
        },
        'link:wiki:drm': {
            'en': 'https://en.wikipedia.org/wiki/Digital_rights_management',
            'ru': 'https://ru.wikipedia.org/wiki/Digital_rights_management'
        },
        'bit': {
            'en': 'bit',
            'ru': 'бит'
        },
        'Not detected': {
            'en': 'Not detected',
            'ru': 'Не обнаружено'
        },
        'HDCP not detected': {
            'en': 'Could not be determined',
            'ru': 'Не удалось определить'
        },
        'Security level': {
            'en': 'Security level',
            'ru': 'Уровень безопасности'
        },
        'Security levels': {
            'en': 'Security levels',
            'ru': 'Уровни безопасности'
        },
        'Key system': {
            'en': 'Key system',
            'ru': 'Система ключей'
        },
        'Key systems': {
            'en': 'Key systems',
            'ru': 'Системы ключей'
        },
        'Request': {
            'en': 'Request',
            'ru': 'Запрос'
        },
        'Request fonts': {
            'en': 'Request fonts',
            'ru': 'Запросить шрифты'
        },
        'Details': {
            'en': 'Details',
            'ru': 'Подробности'
        },
        'Battery': {
            'en': 'Battery',
            'ru': 'Батарея'
        },
        'Platform': {
            'en': 'Platform',
            'ru': 'Платформа'
        },
        'Connection': {
            'en': 'Connection',
            'ru': 'Связь'
        },
        'Has HDR support for video?': {
            'en': 'Has HDR support for video?',
            'ru': 'Есть поддержка HDR для видео?'
        },
        'Additional monitor detected': {
            'en': 'Additional monitor detected',
            'ru': 'Обнаружен дополнительный монитор'
        },
        'link:apple:t2': {
            'en': 'https://support.apple.com/en-us/103265',
            'ru': 'https://support.apple.com/ru-ru/103265'
        },
        'Select 2018 or later Mac computer with an': {
            'en': 'Select 2018 or later Mac computer with an',
            'ru': 'Компьютер Мак (начиная с 2018 или новее) с',
        },
        'Internet Speed': {
            'en': 'Internet Speed',
            'ru': 'Скорость интернета'
        },
        'HDCP 2.2 or later': {
            'en': 'HDCP 2.2 or later',
            'ru': 'HDCP 2.2 или выше'
        },
        'Make sure that monitors, video cards, and cables support HDCP 2.2 or later.': {
            'en': 'Make sure that monitors, video cards, and cables support HDCP 2.2 or later.',
            'ru': 'Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше'
        },
        'GB': {
            'en': 'GB',
            'ru': 'ГБ'
        },
        'Hardware acceleration': {
            'en': 'Hardware acceleration',
            'ru': 'Аппаратное ускорение'
        },
        'Model': {
            'en': 'Model',
            'ru': 'Модель'
        },
        'Architecture': {
            'en': 'Architecture',
            'ru': 'Архитектура'
        },
        'Form factor': {
            'en': 'Form factor',
            'ru': 'Форм-фактор'
        },
        'unsupported': {
            'en': 'unsupported',
            'ru': 'не поддерживается'
        },
        'Name': {
            'en': 'Name',
            'ru': 'Название'
        },
        'Can I use WebGPU?': {
            'en': 'Can I use WebGPU?',
            'ru': 'Могу ли я использовать WebGPU?'
        },
        'WebGPU is not supported.': {
            'en': 'WebGPU is not supported.',
            'ru': 'WebGPU не поддерживается.'
        },
        'GPU Adapter is not found.': {
            'en': 'GPU Adapter is not found.',
            'ru': 'GPU адаптер не найден.'
        },
        'Video & audio': {
            'en': 'Video & audio',
            'ru': 'Видео и аудио'
        },
        'Can I use Battery Status API?': {
            'en': 'Can I use Battery Status API?',
            'ru': 'Могу ли я использовать Battery Status API?'
        },
        'Battery Status API is not supported.': {
            'en': 'Battery Status API is not supported.',
            'ru': 'Battery Status API не поддерживается.'
        },
        'Can I use Network Information API?': {
            'en': 'Can I use Network Information API?',
            'ru': 'Могу ли я использовать Network Information API?'
        },
        'Network Information API is not supported.': {
            'en': 'Network Information API is not supported.',
            'ru': 'Network Information API не поддерживается.'
        },
        'Network': {
            'en': 'Network',
            'ru': 'Сеть'
        },
        'Geo': {
            'en': 'Geo',
            'ru': 'Гео'
        },
        'Request geo location': {
            'en': 'Request geo location',
            'ru': 'Запросить местоположение'
        },
        'Can I use 🎮 Gamepad API?': {
            'en': 'Can I use 🎮 Gamepad API?',
            'ru': 'Могу ли я использовать 🎮 Gamepad API?'
        },
        '🎮 Gamepad API is not supported.': {
            'en': '🎮 Gamepad API is not supported.',
            'ru': '🎮 Gamepad API не поддерживается.'
        },
        'Connect and press any button on the gamepad.': {
            'en': 'Connect and press any button on the gamepad.',
            'ru': 'Подключите и нажмите любую кнопку на джойстике.'
        },
        'Gamepad': {
            'en': 'Gamepad',
            'ru': 'Джойстик'
        },
        'Storage': {
            'en': 'Storage',
            'ru': 'Хранилище'
        },
        'Storages': {
            'en': 'Storages',
            'ru': 'Хранилища'
        },
        'Features': {
            'en': 'Features',
            'ru': 'Возможности'
        },
        'Can I use web storages?': {
            'en': 'Can I use web storages?',
            'ru': 'Могу ли я использовать веб-хранилища?'
        },
        'Support of persistent storage': {
            'en': 'Support of persistent storage',
            'ru': 'Поддержка постоянного хранилища'
        },
        'Storage quota for origin': {
            'en': 'Storage quota for origin',
            'ru': 'Квота хранилища на домен'
        },
        'Color spaces': {
            'en': 'Color spaces',
            'ru': 'Цветовые пространства'
        },
        'HDR support': {
            'en': 'HDR support',
            'ru': 'Поддержка HDR'
        },
        'Current screen': {
            'en': 'Current screen',
            'ru': 'Текущий экран'
        },
        'Orientation': {
            'en': 'Orientation',
            'ru': 'Ориентация'
        },
        'Camera': {
            'en': 'Camera',
            'ru': 'Камера'
        },
        'Webcamera': {
            'en': 'Webcamera',
            'ru': 'Веб-камера'
        },
        'Check camera': {
            'en': 'Check camera',
            'ru': 'Проверить камеру'
        },
        'Stop': {
            'en': 'Stop',
            'ru': 'Стоп'
        },
        'Resolution': {
            'en': 'Resolution',
            'ru': 'Разрешение'
        },
        'Low resolution': {
            'en': 'Low resolution',
            'ru': 'Низкое разрешение'
        },
        'High resolution': {
            'en': 'High resolution',
            'ru': 'Высокое разрешение'
        },
        'High frame rate': {
            'en': 'High frame rate',
            'ru': 'Высокая частота кадров'
        },
        'Frame rate': {
            'en': 'Frame rate',
            'ru': 'Частота кадров'
        },
        'Specify': {
            'en': 'Specify',
            'ru': 'Уточнить'
        },
        'Camera not found.': {
            'en': 'Camera not found.',
            'ru': 'Камера не найдена.'
        },
        'Camera is blocked.': {
            'en': 'Camera is blocked.',
            'ru': 'Камера заблокирована.'
        },
        'Has touch screen': {
            'en': 'Has touch screen',
            'ru': 'Сенсорный экран'
        },
        'Additionally': {
            'en': 'Additionally',
            'ru': 'Дополнительно'
        },
        'Standalone application': {
            'en': 'Standalone application',
            'ru': 'Автономное приложение'
        },
        'Page not found.': {
            'en': 'Page not found.',
            'ru': 'Страница не найдена.'
        },
        'Go to main page': {
            'en': 'Go to main page',
            'ru': 'Перейти на главную'
        },
        'Permissions': {
            'en': 'Permissions',
            'ru': 'Разрешения'
        },
        'Start test': {
            'en': 'Start test',
            'ru': 'Начать тест'
        },
        'Test dead pixels': {
            'en': 'Test dead pixels',
            'ru': 'Тест битых пикселей'
        },
        'Tests': {
            'en': 'Tests',
            'ru': 'Тесты'
        },
        'RAM': {
            'en': 'RAM',
            'ru': 'ОЗУ'
        },
        'Hz': {
            'en': 'Hz',
            'ru': 'Гц'
        },
        'Refresh rate': {
            'en': 'Refresh rate',
            'ru': 'Частота обновления'
        },
        'Input': {
            'en': 'Input',
            'ru': 'Ввод'
        },
        'Mouse': {
            'en': 'Mouse',
            'ru': 'Мышь'
        },
        'Reset': {
            'en': 'Reset',
            'ru': 'Сброс'
        },
        'Mouse and keyboard': {
            'en': 'Mouse and keyboard',
            'ru': 'Мышь и клавиатура'
        },
        'Keyboard': {
            'en': 'Keyboard',
            'ru': 'Клавиатура'
        },
        'Testing keyboard': {
            'en': 'Testing keyboard',
            'ru': 'Тестирование клавиатуры'
        },
        'Testing mouse': {
            'en': 'Testing mouse',
            'ru': 'Тестирование мышки'
        },
        'Check device online': {
            'en': 'Check device online',
            'ru': 'Проверь устройство онлайн'
        },
        'Report a bug': {
            'en': 'Report a bug',
            'ru': 'Сообщить об ошибке'
        },
        'Press a key to display its code.': {
            'en': 'Press a key to display its code.',
            'ru': 'Нажмите клавишу, чтобы увидеть её код.'
        },
        'Displaying key codes': {
            'en': 'Displaying key codes',
            'ru': 'Отображение кодов клавиш'
        },
        'Mic': {
            'en': 'Mic',
            'ru': 'Микрофон'
        },
        'Fonts': {
            'en': 'Fonts',
            'ru': 'Шрифты'
        },
        'Local fonts': {
            'en': 'Local fonts',
            'ru': 'Локальные шрифты'
        },
        'Filter': {
            'en': 'Filter',
            'ru': 'Фильтр'
        },
        'Family': {
            'en': 'Family',
            'ru': 'Семейство'
        },
        'Style': {
            'en': 'Style',
            'ru': 'Стиль'
        },
        'Local Font Access API is not supported.': {
            'en': 'Local Font Access API is not supported.',
            'ru': 'Local Font Access API не поддерживается.'
        },
        'Group by family': {
            'en': 'Group by family',
            'ru': 'Группировать по семейству'
        },
        'Sample rate': {
            'en': 'Sample rate',
            'ru': 'Частота дискретизации'
        },
        'Sample size': {
            'en': 'Sample size',
            'ru': 'Размер семпла'
        },
        'Channel count': {
            'en': 'Channel count',
            'ru': 'Количество каналов'
        },
        'Auto gain control': {
            'en': 'Auto gain control',
            'ru': 'Автоматическая регулировка усиления'
        },
        'Latency': {
            'en': 'Latency',
            'ru': 'Задержка'
        },
        'Noise suppression': {
            'en': 'Noise suppression',
            'ru': 'Шумоподавление'
        },
        'Echo cancellation': {
            'en': 'Echo cancellation',
            'ru': 'Эхоподавление'
        },
        'Background blur': {
            'en': 'Background blur',
            'ru': 'Размытие фона'
        },
        'hr.': {
            'en': 'hr.',
            'ru': 'ч.'
        },
        'min.': {
            'en': 'min.',
            'ru': 'мин.'
        },
        'sec.': {
            'en': 'sec.',
            'ru': 'с.'
        },
        'Discharging time': {
            'en': 'Discharging time',
            'ru': 'Время до полной разрядки'
        },
        'Charging time': {
            'en': 'Charging time',
            'ru': 'Время до полной зарядки'
        },
        'Check vibration': {
            'en': 'Check vibration',
            'ru': 'Проверить вибрацию'
        },
        'Support is mainly on mobile devices.': {
            'en': 'Support is mainly on mobile devices.',
            'ru': 'Поддержка в основном на мобильных устройствах.'
        },
        'Vibrate': {
            'en': 'Vibrate',
            'ru': 'Вибрировать'
        },
        'Vibration API is not supported.': {
            'en': 'Vibration API is not supported.',
            'ru': 'Vibration API не поддерживается.'
        },
        'Check mic': {
            'en': 'Check mic',
            'ru': 'Проверить микрофон'
        },
        'Hear yourself': {
            'en': 'Hear yourself',
            'ru': 'Слышать себя'
        },
        'Max touch points': {
            'en': 'Max touch points',
            'ru': 'Max touch points'
        },
        'Media Devices API is not supported.': {
            'en': 'Media Devices API is not supported.',
            'ru': 'Media Devices API не поддерживается.'
        },
        'Check HDCP version': {
            'en': 'Check HDCP version',
            'ru': 'Проверить HDCP версию'
        },
        'Bluetooth': {
            'en': 'Bluetooth',
            'ru': 'Bluetooth'
        },
        'USB': {
            'en': 'USB',
            'ru': 'USB'
        },
        'Sensor': {
            'en': 'Sensor',
            'ru': 'Сенсор'
        },
        'Sensors': {
            'en': 'Sensors',
            'ru': 'Сенсоры'
        },
        'MIDI': {
            'en': 'MIDI',
            'ru': 'MIDI'
        },
        'Encryption schemes': {
            'en': 'Encryption schemes',
            'ru': 'Схемы шифрования'
        }
    };

    var langs = [
        {
            name: 'EN',
            value: 'en',
            emoji: '🇺🇸'
        },
        {
            name: 'RU',
            value: 'ru',
            emoji: '🇷🇺',
        },
    ];

    var i18nKeysets = keysets;
    var i18nLang;
    function getI18nLangs() {
        return __spreadArray([], langs, true);
    }
    function i18n(id) {
        var key = i18nKeysets[id];
        if (!key) {
            console.error("Not found key \"".concat(id, "\" in getText()."));
            return id;
        }
        var value = key[i18nLang];
        if (typeof value === 'undefined') {
            console.error("Not found key \"".concat(id, "\", lang \"").concat(i18nLang, "\" in getText()."));
            return id;
        }
        return value;
    }
    function i18nWithKeyset(keyset) {
        return keyset[i18nLang];
    }
    function setI18nLang(lang) {
        i18nLang = lang;
    }
    function getI18nLang() {
        return i18nLang;
    }

    function getColorSpaceTitle(name) {
        return {
            srgb: 'sRGB',
            p3: 'DCI-P3',
            rec2020: 'Rec.2020',
        }[name] || name;
    }
    var colorSpaceTypes = [
        'srgb',
        'p3',
        'rec2020',
    ];
    function prepareColorSpaces(spaces) {
        if (!spaces) {
            return '';
        }
        return colorSpaceTypes.map(function (item) {
            var title = getColorSpaceTitle(item);
            return "".concat(spaces.indexOf(item) > -1 ? '✓' : '✗', " ").concat(title);
        }).join(',\u00A0');
    }

    function getChecked(checked) {
        return checked ? '✓' : i18n('No');
    }

    var b$q = block('screen-badge-details');
    function ScreenBadgeDetails(props) {
        var screenSize = props.withDevicePixelRatio ?
            [props.width, props.height, props.devicePixelRatio] :
            [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio];
        return m$1(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div>", ": ", "</div>\n            <div>", ": ", "</div>\n            ", "\n            <div>", ": ", " ", "</div>\n            <div>", "</div>\n            ", "\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div>", ": ", "</div>\n            <div>", ": ", "</div>\n            ", "\n            <div>", ": ", " ", "</div>\n            <div>", "</div>\n            ", "\n            ", "\n        </div>\n    "])), b$q(), i18n('Size'), screenSize.join('×'), i18n('Aspect ratio'), calcAspectRatio(Math.floor(props.width), Math.floor(props.height)).value, hasZoom() ? m$1(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["<div>\u26A0 ", "</div>"], ["<div>\u26A0 ", "</div>"])), i18n('Please reset zoom in the page')) : '', i18n('Color depth'), props.colorDepth, i18n('bit'), props.colorSpaces && props.colorSpaces.length ? prepareColorSpaces(props.colorSpaces) : '', typeof props.isPrimary === 'undefined' ? '' : m$1(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["<div>", ": ", "</div>"], ["<div>", ": ", "</div>"])), i18n('Primary'), getChecked(props.isPrimary)), typeof props.isInternal === 'undefined' ? '' : m$1(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["<div>", ": ", "</div>"], ["<div>", ": ", "</div>"])), i18n('Internal'), getChecked(props.isInternal)));
    }
    var templateObject_1$B, templateObject_2$j, templateObject_3$6, templateObject_4$4;

    var b$p = block('screen-badge');
    function ScreenBadge(props) {
        var _a = h(true), withDevicePixelRatio = _a[0], setWithDevicePixelRatio = _a[1];
        var handleClick = q(function () {
            setWithDevicePixelRatio(!withDevicePixelRatio);
        }, [withDevicePixelRatio]);
        var labelContent = props.label ? m$1(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$p('label'), props.label) : '';
        var background = isLargerFullHd(Math.min(props.width, props.height) * props.devicePixelRatio) ? 'gold' : 'white';
        return m$1(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n        <div class=\"", "\" onClick=", ">\n            ", "\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\" onClick=", ">\n            ", "\n            ", "\n        </div>\n    "])), b$p(), handleClick, labelContent, Badge({
            // TODO: Temporarily hide badge for mobile devices
            text: isMobile() ? '' : getResolutionBadge(Math.max(props.width, props.height) * props.devicePixelRatio, Math.min(props.width, props.height) * props.devicePixelRatio) || '',
            type: '4k',
            click: true,
            background: background,
            top: {
                text: isMobile() ? '' : m$1(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["<b>", "</b>"], ["<b>", "</b>"])), props.isHdr ? 'HDR' : '\u00A0'),
            },
            bottom: {
                text: ScreenBadgeDetails({
                    width: props.width,
                    height: props.height,
                    colorDepth: props.colorDepth,
                    isPrimary: props.isPrimary,
                    isInternal: props.isInternal,
                    colorSpaces: props.colorSpaces,
                    withDevicePixelRatio: withDevicePixelRatio,
                    devicePixelRatio: props.devicePixelRatio,
                }),
                title: [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×'),
            },
        }));
    }
    var templateObject_1$A, templateObject_2$i, templateObject_3$5;

    var b$o = block('row');
    function Row(props) {
        return m$1(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$o(), b$o('category'), props.name, b$o('body'), props.children);
    }
    var templateObject_1$z;

    var useForceUpdate = function () {
        var _a = h({}), updateState = _a[1];
        return q(function () { return updateState({}); }, []);
    };

    function classname() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values.filter(function (item) {
            return item !== null && item !== undefined;
        }).join(' ');
    }

    var b$n = block('button');
    function Button(props) {
        var disabled = props.disabled, size = props.size, theme = props.theme, onClick = props.onClick;
        var className = classname(props.class, b$n({ theme: theme, size: size, disabled: disabled }));
        var handleClick = q(function () {
            if (disabled) {
                return;
            }
            onClick && onClick();
        }, [disabled, onClick]);
        return m$1(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["<button class=\"", "\" disabled=\"", "\" onClick=\"", "\">", "</button>"], ["<button class=\"", "\" disabled=\"", "\" onClick=\"", "\">", "</button>"])), className, disabled, handleClick, props.children);
    }
    var templateObject_1$y;

    var b$m = block('screen-badges');
    function ScreenBadges() {
        var forceUpdate = useForceUpdate();
        var handleScreenChange = q(function () {
            forceUpdate();
        }, []);
        var handleClick = q(function () {
            screenInfo.getScreenDetails()
                .then(handleScreenChange)
                .catch(handleScreenChange);
        }, []);
        y(function () {
            screenInfo.addListener(handleScreenChange);
            !screenInfo.isDenied && screenInfo.getScreenDetails()
                .then(handleScreenChange)
                .catch(handleScreenChange);
            return function () {
                screenInfo.removeListener(handleScreenChange);
            };
        }, []);
        var screenInfoData = screenInfo.get();
        var content = screenInfoData.screens.map(function (item) {
            var props = __assign({ isScreenDetails: screenInfo.isScreenDetails }, item);
            return m$1(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["<", " ...", "><//>"], ["<", " ...", "><//>"])), ScreenBadge, props);
        });
        var name = screenInfoData.screens.length > 1 ? i18n('Screens') : i18n('Screen');
        return m$1(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["<", " name=\"", "\">\n        ", "\n        ", "\n        ", "\n    <//>"], ["<", " name=\"", "\">\n        ", "\n        ", "\n        ", "\n    <//>"])), Row, name, !screenInfo.isDenied && screenInfo.needUserActivity ? m$1(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["<div class=\"", "\"><", " size=\"s\" theme=\"red\" onClick=\"", "\">", "<//></div>"], ["<div class=\"", "\"><", " size=\"s\" theme=\"red\" onClick=\"", "\">", "<//></div>"])), b$m('specify'), Button, handleClick, i18n('Specify')) : '', content, !screenInfo.isScreenDetails && (typeof screen !== 'undefined' && screen.isExtended === true) ? m$1(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["<div class=\"", "\">\u26A0\uFE0F ", "</div>"], ["<div class=\"", "\">\u26A0\uFE0F ", "</div>"])), b$m('additional'), i18n('Additional monitor detected')) : '');
    }
    var templateObject_1$x, templateObject_2$h, templateObject_3$4, templateObject_4$3;

    var b$l = block('codec');
    function Codec(props) {
        var color = props.disabled ? 'black' : (props.color || 'black');
        var tooltip = props.tooltip ? m$1(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$l('tooltip'), props.tooltip) : '';
        return m$1(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n        </div>\n    "])), b$l({
            color: color,
            border: props.border,
            disabled: props.disabled,
        }), tooltip, b$l('name'), props.name);
    }
    var templateObject_1$w, templateObject_2$g;

    var b$k = block('column');
    function Column(props) {
        return m$1(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$k(), b$k('category'), props.name, b$k('body'), props.children);
    }
    var templateObject_1$v;

    var b$j = block('columns');
    function Columns(props) {
        return m$1(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$j(), props.children);
    }
    var templateObject_1$u;

    function getIsTypeSupportedProps(isTypeSupported) {
        return !isSsr && window.MediaSource ? {
            value: String(isTypeSupported),
            color: isTypeSupported ? 'green' : 'red',
        } : {
            value: m$1(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["<b>", "</b>"], ["<b>", "</b>"])), i18n('unsupported')),
            color: 'red',
        };
    }
    function getCanPlayTypeProps(canPlayType) {
        var color;
        switch (canPlayType) {
            case 'maybe':
                color = 'orange';
                break;
            case 'probably':
                color = 'green';
                break;
            default:
                color = 'red';
                break;
        }
        return {
            color: color,
            value: "\"".concat(String(canPlayType), "\""),
        };
    }
    function CodecDetails(props) {
        if (typeof props === 'boolean') {
            return '';
        }
        var canPlayTypeResult = getCanPlayTypeProps(props.canPlayType);
        var isTypeSupportedResult = getIsTypeSupportedProps(props.isTypeSupported);
        return m$1(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n        ", ".canPlayType(): <span style=\"color:", "\">", "</span><br />\n        MediaSource.isTypeSupported(): <span style=\"color:", "\">", "</span><br />\n        <hr />\n        ", "\n    "], ["\n        ", ".canPlayType(): <span style=\"color:", "\">", "</span><br />\n        MediaSource.isTypeSupported(): <span style=\"color:", "\">", "</span><br />\n        <hr />\n        ", "\n    "])), [props.mediaElementType], canPlayTypeResult.color, canPlayTypeResult.value, isTypeSupportedResult.color, isTypeSupportedResult.value, props.contentType);
    }
    var templateObject_1$t, templateObject_2$f;

    function VideoCodecs() {
        var supported = [];
        var unsupported = [];
        [
            { supported: isH264BaselineSupported(), name: 'H.264 Baseline', color: 'blue' },
            { supported: isH264MainSupported(), name: 'H.264 Main', color: 'blue' },
            { supported: isH264HighSupported(), name: 'H.264 High', color: 'blue' },
            { supported: isHevcMainSupported(), name: 'H.265 Main', color: 'orange' },
            { supported: isHevcMain10Supported(), name: 'H.265 Main10', color: 'orange' },
            { supported: isEvcBaselineSupported(), name: 'EVC Baseline', color: 'blue' },
            { supported: isEvcMainSupported(), name: 'EVC Main', color: 'blue' },
            { supported: isVp8Supported(), name: 'VP8', color: 'green' },
            { supported: isVp9Supported(), name: 'VP9', color: 'green' },
            { supported: isDolbyVisionSupported(), name: m$1(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["<b>Dolby</b> Vision"], ["<b>Dolby</b> Vision"]))), color: 'black', border: 'white' },
            { supported: isAV1Supported(), name: 'AV1', color: 'yellow' },
            { supported: isVvcMain10Supported(), name: 'H.266 Main10', color: 'blue' },
            { supported: isMpeg2TSupported(), name: 'MPEG2-TS', color: 'yellow' },
        ].map(function (item) {
            if (item.supported.any) {
                supported.push(Codec({
                    name: item.name,
                    color: item.color,
                    border: item.border,
                    tooltip: CodecDetails(item.supported),
                }));
            }
            else {
                unsupported.push(Codec({
                    name: item.name,
                    disabled: true,
                    tooltip: CodecDetails(item.supported),
                }));
            }
        });
        return m$1(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n        <", " name=\"", "\">\n            ", "\n            ", "\n        <//>\n"], ["\n        <", " name=\"", "\">\n            ", "\n            ", "\n        <//>\n"])), Columns, i18n('Video Codecs'), supported.length ? m$1(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["<", " name=\"", "\">\n                ", "\n            <//>"], ["<", " name=\"", "\">\n                ", "\n            <//>"])), Column, i18n('Supported'), supported) : i18n('No supported video codecs.'), unsupported.length ? m$1(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["<", " name=\"", "\">\n                ", "\n            <//>"], ["<", " name=\"", "\">\n                ", "\n            <//>"])), Column, i18n('Unsupported'), unsupported) : '');
    }
    var templateObject_1$s, templateObject_2$e, templateObject_3$3, templateObject_4$2;

    var b$i = block('link');
    function Link(props) {
        var className = classname(props.class, b$i({ theme: props.theme }));
        return m$1(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["<a target=\"", "\" class=\"", "\" href=\"", "\">", "</a>"], ["<a target=\"", "\" class=\"", "\" href=\"", "\">", "</a>"])), props.target, className, props.href, props.children);
    }
    var templateObject_1$r;

    function HdcpLink(props) {
        return m$1(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["<", " href=\"https://vvideo.github.io/hdcp/index.html\" target=\"_blank\">HDCP<//>: ", ""], ["<", " href=\"https://vvideo.github.io/hdcp/index.html\" target=\"_blank\">HDCP<//>: ", ""])), Link, props.version);
    }
    var templateObject_1$q;

    // https://wicg.github.io/hdcp-detection/
    const hdcpVersions = [
        '1.0',
        '1.1',
        '1.2',
        '1.3',
        '1.4',
        '2.0',
        '2.1',
        '2.2', // Ultra HD 4K
        '2.3',
    ];
    const HDCP_MIN_VERSION_WITH_UHD = '2.2';
    function getMaxHdcpVersion(versions) {
        for (let i = versions.length - 1; i >= 0; i--) {
            const item = versions[i];
            if (item.status === 'usable') {
                return item.version;
            }
        }
        return '';
    }
    function isUhdHdcpSupported(versions) {
        const maxVersion = getMaxHdcpVersion(versions);
        return maxVersion ?
            parseFloat(maxVersion) >= parseFloat(HDCP_MIN_VERSION_WITH_UHD) :
            false;
    }
    const defaultConfig = [{
            videoCapabilities: [{
                    contentType: 'video/mp4; codecs="avc1.42E01E"',
                }],
        }];
    function checkAllHdcpVersions(keySystem) {
        if (typeof window.navigator.requestMediaKeySystemAccess !== 'function') {
            const error = new Error('navigator.requestMediaKeySystemAccess is not supported');
            error.name = 'NotSupportedError';
            return Promise.reject(error);
        }
        return window.navigator.requestMediaKeySystemAccess(keySystem, defaultConfig)
            .then(mediaKeySystemAccess => mediaKeySystemAccess.createMediaKeys())
            .then(mediaKeys => {
            if (!('getStatusForPolicy' in mediaKeys)) {
                const error = Error('Method getStatusForPolicy is not supported');
                error.name = 'NotSupportedError';
                throw error;
            }
            const promises = [];
            hdcpVersions.forEach(minHdcpVersion => {
                promises.push(
                // @ts-ignore
                mediaKeys.getStatusForPolicy({ minHdcpVersion }).then(status => ({
                    version: minHdcpVersion,
                    status,
                })));
            });
            return Promise.all(promises);
        });
    }

    function getHdcpNotDetected() {
        return i18n('HDCP not detected');
    }
    function getHdcpVersion(versions) {
        var maxVersion = getMaxHdcpVersion(versions);
        var lastVersion = versions[versions.length - 1];
        return maxVersion || (lastVersion === null || lastVersion === void 0 ? void 0 : lastVersion.status);
    }

    function KeySystems(_a) {
        var items = _a.items;
        if (items.length === 1) {
            return "".concat(i18n('Key system'), ": ").concat(items[0]);
        }
        return "".concat(i18n('Key systems'), ": \n") + items.map(function (item) { return "\u2022 ".concat(item); }).join('\n');
    }

    function SecurityLevels(_a) {
        var items = _a.items;
        var length = items.length;
        if (!length) {
            return "".concat(i18n('Security levels'), ": ").concat(i18n('Not detected'));
        }
        if (length === 1) {
            return "".concat(i18n('Security level'), ": ").concat(items[0]);
        }
        return "".concat(i18n('Security levels'), ": ").concat(items.join(', '));
    }

    var cache = {};
    var CACHE_ITEM_LIFETIME = 5000;
    function getCachedCheckAllHdcpVersions(keySystem) {
        var result = cache[keySystem];
        if (result) {
            if (result.timestamp + CACHE_ITEM_LIFETIME < Date.now()) {
                delete cache[keySystem];
            }
            else {
                return result.promise;
            }
        }
        var promise = isSsr ? Promise.resolve([]) : checkAllHdcpVersions(keySystem);
        cache[keySystem] = {
            promise: promise,
            timestamp: Date.now(),
        };
        return promise;
    }

    function getEncryptionSchemes(keySystem) {
        var schemes = encryptionSchemes.filter(function (item) { return typeof item === 'string'; });
        var promises = [];
        if (keySystem === WIDEWINE_KEY_SYSTEM) {
            promises = schemes.map(function (encryptionScheme) {
                return isWidevineSupported({ encryptionScheme: encryptionScheme });
            });
        }
        else if (keySystem === CLEAR_KEY_SYSTEM) {
            promises = schemes.map(function (encryptionScheme) {
                return isClearKeySupported({ encryptionScheme: encryptionScheme });
            });
        }
        else if (keySystem === PLAYREADY_RECOMMENDATION_KEY_SYSTEM) {
            promises = schemes.map(function (encryptionScheme) {
                return isPlayReadySupported({ encryptionScheme: encryptionScheme });
            });
        }
        else if (keySystem === FAIRPLAY_KEY_SYSTEM) {
            promises = schemes.map(function (encryptionScheme) {
                return isFairPlaySupported({ encryptionScheme: encryptionScheme });
            });
        }
        return Promise.all(promises).then(function (data) {
            return data.map(function (item, i) { return item ? schemes[i] : ''; }).filter(Boolean);
        });
    }

    var b$h = block('widevine-badge');
    function WidevineBadge() {
        var _a = h(false), hasWidevine = _a[0], setWidevine = _a[1];
        var _b = h(false), hasL1 = _b[0], setL1 = _b[1];
        var _c = h(false), hasL3 = _c[0], setL3 = _c[1];
        var _d = h(''), hdcpVersion = _d[0], setHdcpVersion = _d[1];
        var _e = h(''), encryptionSchemes = _e[0], setEncryptionSchemes = _e[1];
        getCachedCheckAllHdcpVersions(WIDEWINE_KEY_SYSTEM).then(function (data) {
            setHdcpVersion(getHdcpVersion(data));
        }).catch(function () {
            setHdcpVersion(getHdcpNotDetected());
        });
        Promise.all([
            isWidevineSupported(),
            isWidevineL1Supported(),
            isWidevineL3Supported(),
            getEncryptionSchemes(WIDEWINE_KEY_SYSTEM),
        ]).then(function (data) {
            var result = data[0], resultL1 = data[1], resultL3 = data[2], resultEncryption = data[3];
            setWidevine(result);
            setL1(resultL1);
            setL3(resultL3);
            setEncryptionSchemes(resultEncryption.join(', '));
        });
        var levels = [];
        if (hasL1) {
            levels.push('L1');
        }
        if (hasL3) {
            levels.push('L3');
        }
        return hasWidevine ? m$1(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$h(), Badge({
            text: 'Widevine',
            background: 'white',
            top: {
                text: 'Google',
            },
            bottom: {
                text: m$1(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["<div><", " items=\"", "\" //></div>\n                        <div><", " items=\"", "\" //></div>\n                        <div>", "</div>\n                        <div><", " version=\"", "\" //></div>"], ["<div><", " items=\"", "\" //></div>\n                        <div><", " items=\"", "\" //></div>\n                        <div>", "</div>\n                        <div><", " version=\"", "\" //></div>"])), SecurityLevels, levels, KeySystems, [WIDEWINE_KEY_SYSTEM], encryptionSchemes.length ? "".concat(i18n('Encryption schemes'), ": ").concat(encryptionSchemes) : '', HdcpLink, hdcpVersion),
            },
        })) : '';
    }
    var templateObject_1$p, templateObject_2$d;

    var b$g = block('clearkey-badge');
    var keySystemsItems$1 = [CLEAR_KEY_SYSTEM];
    function ClearkeyBadge() {
        var _a = h(false), hasClearkey = _a[0], setClearkey = _a[1];
        var _b = h(''), encryptionSchemes = _b[0], setEncryptionSchemes = _b[1];
        isClearKeySupported().then(function (result) {
            setClearkey(result);
        });
        getEncryptionSchemes(CLEAR_KEY_SYSTEM).then(function (result) {
            setEncryptionSchemes(result.join(', '));
        });
        return hasClearkey ? m$1(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$g(), Badge({
            text: 'ClearKey',
            background: 'white',
            size: 'small',
            bottom: {
                text: m$1(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n                        <div><", " items=\"", "\" //></div>\n                        <div>", "</div>\n                    "], ["\n                        <div><", " items=\"", "\" //></div>\n                        <div>", "</div>\n                    "])), KeySystems, keySystemsItems$1, encryptionSchemes.length ? "".concat(i18n('Encryption schemes'), ": ").concat(encryptionSchemes) : '')
            }
        })) : '';
    }
    var templateObject_1$o, templateObject_2$c;

    var b$f = block('fairplay-badge');
    function FairplayBadge() {
        var _a = h(false), hasFairplay = _a[0], setFairplay = _a[1];
        var _b = h(false), hasFairplay1 = _b[0], setFairplay1 = _b[1];
        var _c = h(false), hasFairplay2 = _c[0], setFairplay2 = _c[1];
        var _d = h(false), hasFairplay3 = _d[0], setFairplay3 = _d[1];
        var _e = h(''), encryptionSchemes = _e[0], setEncryptionSchemes = _e[1];
        Promise.all([
            isFairPlaySupported(),
            isFairPlayV1Supported(),
            isFairPlayV2Supported(),
            isFairPlayV3Supported(),
            getEncryptionSchemes(FAIRPLAY_KEY_SYSTEM),
        ]).then(function (data) {
            var resultFairPlay = data[0], resultFairPlay1 = data[1], resultFairPlay2 = data[2], resultFairPlay3 = data[3], resultEncryption = data[4];
            setFairplay(resultFairPlay);
            setFairplay1(resultFairPlay1);
            setFairplay2(resultFairPlay2);
            setFairplay3(resultFairPlay3);
            setEncryptionSchemes(resultEncryption.join(', '));
        });
        var keySystems = [];
        if (hasFairplay) {
            keySystems.push(FAIRPLAY_KEY_SYSTEM);
        }
        if (hasFairplay1) {
            keySystems.push(FAIRPLAY_V1_KEY_SYSTEM);
        }
        if (hasFairplay2) {
            keySystems.push(FAIRPLAY_V2_KEY_SYSTEM);
        }
        if (hasFairplay3) {
            keySystems.push(FAIRPLAY_V3_KEY_SYSTEM);
        }
        return hasFairplay ? m$1(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$f(), Badge({
            text: 'FairPlay',
            background: 'white',
            top: {
                text: 'Apple',
            },
            bottom: {
                text: m$1(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n                        <div><", " items=\"", "\" //></div>\n                        <div>", "</div>\n                    "], ["\n                        <div><", " items=\"", "\" //></div>\n                        <div>", "</div>\n                    "])), KeySystems, keySystems, encryptionSchemes.length ? "".concat(i18n('Encryption schemes'), ": ").concat(encryptionSchemes) : '')
            },
        })) : '';
    }
    var templateObject_1$n, templateObject_2$b;

    var b$e = block('playready-badge');
    var keySystemsItems = [PLAYREADY_RECOMMENDATION_KEY_SYSTEM];
    function PlayreadyBadge() {
        var _a = h(false), hasPlayready = _a[0], setPlayready = _a[1];
        var _b = h(false), hasSL150 = _b[0], setSL150 = _b[1];
        var _c = h(false), hasSL2000 = _c[0], setSL2000 = _c[1];
        var _d = h(false), hasSL3000 = _d[0], setSL3000 = _d[1];
        var _e = h(''), hdcpVersion = _e[0], setHdcpVersion = _e[1];
        var _f = h(''), encryptionSchemes = _f[0], setEncryptionSchemes = _f[1];
        getCachedCheckAllHdcpVersions(PLAYREADY_RECOMMENDATION_KEY_SYSTEM).then(function (data) {
            setHdcpVersion(getHdcpVersion(data));
        }).catch(function () {
            setHdcpVersion(getHdcpNotDetected());
        });
        Promise.all([
            isPlayReadySupported(),
            isPlayReadySL150Supported(),
            isPlayReadySL2000Supported(),
            isPlayReadySL3000Supported(),
            getEncryptionSchemes(PLAYREADY_RECOMMENDATION_KEY_SYSTEM),
        ]).then(function (data) {
            var resultPlayReady = data[0], resultPlayReady150 = data[1], resultPlayReady2000 = data[2], resultPlayReady3000 = data[3], resultEncryption = data[4];
            setPlayready(resultPlayReady);
            setSL150(resultPlayReady150);
            setSL2000(resultPlayReady2000);
            setSL3000(resultPlayReady3000);
            setEncryptionSchemes(resultEncryption.join(', '));
        });
        var levels = [];
        if (hasSL150) {
            levels.push('SL150');
        }
        if (hasSL2000) {
            levels.push('SL2000');
        }
        if (hasSL3000) {
            levels.push('SL3000');
        }
        return hasPlayready ? m$1(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$e(), Badge({
            text: 'PlayReady',
            background: 'white',
            top: {
                text: 'Microsoft',
            },
            bottom: {
                text: m$1(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["<div><", " items=\"", "\" //></div>\n                        <div><", " items=\"", "\" //></div>\n                        <div>", "</div>\n                        <div><", " version=\"", "\" //></div>"], ["<div><", " items=\"", "\" //></div>\n                        <div><", " items=\"", "\" //></div>\n                        <div>", "</div>\n                        <div><", " version=\"", "\" //></div>"])), SecurityLevels, levels, KeySystems, keySystemsItems, encryptionSchemes.length ? "".concat(i18n('Encryption schemes'), ": ").concat(encryptionSchemes) : '', HdcpLink, hdcpVersion)
            },
        })) : '';
    }
    var templateObject_1$m, templateObject_2$a;

    var b$d = block('primetime-badge');
    function PrimetimeBadge() {
        var _a = h(false), hasPrimetime = _a[0], setPrimetime = _a[1];
        isPrimetimeSupported().then(function (result) {
            setPrimetime(result);
        });
        return m$1(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$d(), hasPrimetime && Badge({
            text: 'Primetime',
            background: 'white',
            top: {
                text: 'Adobe',
            },
            bottom: {
                text: KeySystems({ items: [PRIMETIME_KEY_SYSTEM] }),
            },
        }));
    }
    var templateObject_1$l;

    var b$c = block('drm-badges');
    function DrmBadges() {
        return m$1(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        </div>\n    "])), b$c(), WidevineBadge, PlayreadyBadge, FairplayBadge, PrimetimeBadge, ClearkeyBadge);
    }
    var templateObject_1$k;

    var b$b = block('native-streaming');
    function NativeStreaming() {
        var items = [
            {
                label: 'MPEG-DASH',
                supported: isNativeMpdSupported(),
            },
            {
                label: 'HTTP Live Streaming',
                supported: isNativeHlsSupported(),
            },
            {
                label: 'Smooth Streaming',
                supported: isNativeMssSupported(),
            },
        ];
        items.sort(function (a, b) {
            if (a.supported === b.supported) {
                return 0;
            }
            if (a.supported) {
                return -1;
            }
            return 1;
        });
        var result = items.map(function (item) {
            return m$1(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["<li>", ": ", "</li>"], ["<li>", ": ", "</li>"])), item.label, getChecked(item.supported));
        });
        return m$1(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n        <ul class=", ">\n            ", "\n        </ul>\n    "], ["\n        <ul class=", ">\n            ", "\n        </ul>\n    "])), b$b(), result);
    }
    var templateObject_1$j, templateObject_2$9;

    var b$a = block('result');
    function Result(props) {
        var text = props.text;
        var type = '';
        if (!props.text) {
            if (props.value === true) {
                text = i18n('Yes');
                type = 'yes';
            }
            if (props.value === false) {
                text = i18n('No');
                type = 'no';
            }
            if (props.value === undefined) {
                text = i18n('Warning');
                type = 'warning';
            }
        }
        return m$1(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["<span class=\"", "\">\n        ", "\n        ", "\n    </span>"], ["<span class=\"", "\">\n        ", "\n        ", "\n    </span>"])), b$a({
            type: type,
        }), text, props.details ? m$1(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$a('details'), props.details) : '');
    }
    var templateObject_1$i, templateObject_2$8;

    var b$9 = block('active-question');
    function ActiveQuestion(props) {
        var _a = h(false), opened = _a[0], setOpened = _a[1];
        var callback = q(function () {
            setOpened(!opened);
        }, [opened]);
        return m$1(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">", "</div>\n        </div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">", "</div>\n        </div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$9({ opened: opened }), b$9('head'), callback, b$9('plus'), opened ? '-' : '+', b$9('question'), props.head, b$9('body'), props.children);
    }
    var templateObject_1$h;

    function Question4K() {
        var _a = h(screenInfo.get().screens), screens = _a[0], setScreens = _a[1];
        y(function () {
            var handler = function () {
                setScreens(screenInfo.get().screens);
            };
            screenInfo.addListener(handler);
            return function () {
                screenInfo.removeListener(handler);
            };
        }, [screens]);
        var isVp9 = isVp9Supported();
        var isHevc = isHevcMainSupported();
        var isAv1 = isAV1Supported();
        var largeThan2K = isScreensLargerThan2K(screens);
        var mainAnswer = largeThan2K && Boolean(isVp9.any || isHevc.any || isAv1.any);
        var head = m$1(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["", "\u00A0<", " value=\"", "\"><//>"], ["", "\\u00a0<", " value=\"", "\"><//>"])), i18n('Can I watch 4K video?'), Result, mainAnswer);
        return m$1(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            <ul>\n                <li>", "\u00A0<", " value=\"", "\"><//></li>\n                <li>\n                    ", "\u00A0<", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            <ul>\n                <li>", "\\u00a0<", " value=\"", "\"><//></li>\n                <li>\n                    ", "\\u00a0<", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, i18n('Is the screen larger than 2K?'), Result, largeThan2K, i18n('Supports one of the video codecs?'), Result, true, Codec, !isVp9.any, CodecDetails(isVp9), Result, isVp9.any, Codec, !isHevc.any, CodecDetails(isHevc), Result, isHevc.any, Codec, !isAv1.any, CodecDetails(isAv1), Result, isAv1.any);
    }
    var templateObject_1$g, templateObject_2$7;

    var b$8 = block('info-link');
    function InfoLink(props) {
        return m$1(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["<span class=\"", "\">\n        <a class=\"", "\" href=\"", "\" title=\"", "\" target=\"_blank\">\u24D8</a>\n    </span>"], ["<span class=\"", "\">\n        <a class=\"", "\" href=\"", "\" title=\"", "\" target=\"_blank\">\u24D8</a>\n    </span>"])), b$8(), b$8('link'), props.href, props.title);
    }
    var templateObject_1$f;

    function QuestionHdr() {
        var isVp910Bit = isVp9Profile2Level110BitSupported();
        var isHevcMain10 = isHevcMain10Supported();
        var isAv1Main10 = isAV1Main10Supported();
        var isHdr = !isSsr && isHighDynamicRangeSupported();
        var isVideoHdr = !isSsr && isHighVideoDynamicRangeSupported();
        var mainAnswer = Boolean(isHdr || isVideoHdr) && Boolean(isVp910Bit.any || isHevcMain10.any || isAv1Main10.any);
        var head = m$1(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["", " <", " value=\"", "\"><//>"], ["", " <", " value=\"", "\"><//>"])), i18n('Can I watch HDR video?'), Result, mainAnswer);
        return m$1(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            <ul>\n                <li><", " isHdr=\"", "\" isVideoHdr=\"", "\" //></li>\n                <li>", "\u00A0<", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9 Profile 2 Level 1 10 bits\"\n                                color=\"green\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265 Main 10\"\n                                color=\"orange\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1 Main 10\"\n                                color=\"yellow\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            <ul>\n                <li><", " isHdr=\"", "\" isVideoHdr=\"", "\" //></li>\n                <li>", "\\u00a0<", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9 Profile 2 Level 1 10 bits\"\n                                color=\"green\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265 Main 10\"\n                                color=\"orange\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1 Main 10\"\n                                color=\"yellow\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, QuestionHdrHead, isHdr, isVideoHdr, i18n('Supports one of the video codecs?'), Result, Boolean(isVp910Bit || isHevcMain10 || isAv1Main10), Codec, !isVp910Bit.any, CodecDetails(isVp910Bit), Result, isVp910Bit.any, Codec, !isHevcMain10.any, CodecDetails(isHevcMain10), Result, isHevcMain10.any, Codec, !isAv1Main10.any, CodecDetails(isAv1Main10), Result, isAv1Main10.any);
    }
    function QuestionHdrHead(props) {
        var isHdr = Boolean(props.isHdr);
        var isVideoHdr = Boolean(props.isVideoHdr);
        // For Firefox on MacOS
        if (!isHdr && isVideoHdr) {
            return m$1(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["", "<", " href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range\" //>\u00A0<", " value=\"", "\"><//>"], ["", "<", " href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range\" //>\\u00a0<", " value=\"", "\"><//>"])), i18n('Has HDR support for video?'), InfoLink, Result, isVideoHdr);
        }
        return m$1(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["", "<", " href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range\" //>\u00A0<", " value=\"", "\"><//>"], ["", "<", " href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range\" //>\\u00a0<", " value=\"", "\"><//>"])), i18n('Is this an HDR-compatible screen?'), InfoLink, Result, isHdr);
    }
    var templateObject_1$e, templateObject_2$6, templateObject_3$2, templateObject_4$1;

    function isDesktopSafari() {
        var vendor = navigator.vendor, userAgent = navigator.userAgent;
        return /Safari/i.test(userAgent) &&
            /Apple Computer/i.test(vendor) &&
            !/Mobi|Android/i.test(userAgent);
    }

    function QuestionDrm4K() {
        var _a = h(false), isWidevine = _a[0], setIsWidevine = _a[1];
        var _b = h(false), isWidevineL1Vp9 = _b[0], setIsWidevineL1Vp9 = _b[1];
        var _c = h(false), isWidevineL1Hevc = _c[0], setIsWidevineL1Hevc = _c[1];
        var _d = h(false), isWidevineL1Av1 = _d[0], setIsWidevineL1Av1 = _d[1];
        var _e = h(false), isPlayReady = _e[0], setIsPlayReady = _e[1];
        var _f = h(false), isPlayReadySL3000Vp9 = _f[0], setIsPlayReadySL3000Vp9 = _f[1];
        var _g = h(false), isPlayReadySL3000Hevc = _g[0], setIsPlayReadySL3000Hevc = _g[1];
        var _h = h(false), isPlayReadySL3000Av1 = _h[0], setIsPlayReadySL3000Av1 = _h[1];
        var _j = h(false), isFairplay = _j[0], setIsFairplay = _j[1];
        var _k = h(false), isFairplayVp9 = _k[0], setIsFairplayVp9 = _k[1];
        var _l = h(false), isFairplayHevc = _l[0], setIsFairplayHevc = _l[1];
        var _m = h(false), isFairplayAv1 = _m[0], setIsFairplayAv1 = _m[1];
        var _o = h(null), hasWidevineNeededHdcp = _o[0], setWidevineNeededHdcp = _o[1];
        var _p = h(null), hasPlayReadyNeededHdcp = _p[0], setPlayReadyNeededHdcp = _p[1];
        var _q = h(screenInfo.get().screens), screens = _q[0], setScreens = _q[1];
        y(function () {
            var handler = function () {
                setScreens(screenInfo.get().screens);
            };
            screenInfo.addListener(handler);
            return function () {
                screenInfo.removeListener(handler);
            };
        }, [screens]);
        y(function () {
            getCachedCheckAllHdcpVersions(WIDEWINE_KEY_SYSTEM).then(function (data) {
                var result = isUhdHdcpSupported(data);
                setWidevineNeededHdcp(result);
            }).catch(noop);
            getCachedCheckAllHdcpVersions(PLAYREADY_RECOMMENDATION_KEY_SYSTEM).then(function (data) {
                var result = isUhdHdcpSupported(data);
                setPlayReadyNeededHdcp(result);
            }).catch(noop);
            Promise.all([
                isWidevineSupported(),
                isWidevineL1Supported({
                    videoCapabilities: [{ contentType: VP9_CONTENT_TYPE }]
                }),
                isWidevineL1Supported({
                    videoCapabilities: [{ contentType: HEV_MAIN_CONTENT_TYPE }]
                }),
                isWidevineL1Supported({
                    videoCapabilities: [{ contentType: AV1_CONTENT_TYPE }]
                }),
                isPlayReadySupported(),
                isPlayReadySL3000Supported({
                    videoCapabilities: [{ contentType: VP9_CONTENT_TYPE }]
                }),
                isPlayReadySL3000Supported({
                    videoCapabilities: [{ contentType: HEV_MAIN_CONTENT_TYPE }]
                }),
                isPlayReadySL3000Supported({
                    videoCapabilities: [{ contentType: AV1_CONTENT_TYPE }]
                }),
                isFairPlaySupported(),
            ]).then(function (data) {
                var resultWidevine = data[0], resultWidevineL1VP9 = data[1], resultWidevineL1HEV = data[2], resultWidevineL1AV1 = data[3], resultPlayReady = data[4], resultPlayReadyVP9 = data[5], resultPlayReadyHEV = data[6], resultPlayReadyAV1 = data[7], resultFairplay = data[8];
                setIsWidevine(resultWidevine);
                setIsWidevineL1Vp9(resultWidevineL1VP9);
                setIsWidevineL1Hevc(resultWidevineL1HEV);
                setIsWidevineL1Av1(resultWidevineL1AV1);
                setIsPlayReady(resultPlayReady);
                setIsPlayReadySL3000Vp9(resultPlayReadyVP9);
                setIsPlayReadySL3000Hevc(resultPlayReadyHEV);
                setIsPlayReadySL3000Av1(resultPlayReadyAV1);
                setIsFairplay(resultFairplay);
                setIsFairplayVp9(resultFairplay && isVp9Supported().any);
                setIsFairplayHevc(resultFairplay && isHevcMainSupported().any);
                setIsFairplayAv1(resultFairplay && isAV1Supported().any);
            });
        }, [
            isWidevineL1Vp9, isWidevineL1Hevc, isWidevineL1Av1,
            isPlayReadySL3000Vp9, isPlayReadySL3000Hevc, isPlayReadySL3000Av1,
            isFairplayVp9, isFairplayHevc, isFairplayAv1,
        ]);
        var anyCodecWithWidevine = hasWidevineNeededHdcp !== false && (isWidevineL1Vp9 || isWidevineL1Hevc || isWidevineL1Av1);
        var anyCodecWithPlayReady = hasPlayReadyNeededHdcp !== false && isPlayReadySL3000Vp9 || isPlayReadySL3000Hevc || isPlayReadySL3000Av1;
        var anyCodecWithFairplay = isFairplayVp9 || isFairplayHevc || isFairplayAv1;
        var anyCodecWithDrm = Boolean(anyCodecWithWidevine ||
            anyCodecWithPlayReady ||
            anyCodecWithFairplay);
        var largeThan2K = isScreensLargerThan2K(screens);
        var answer = anyCodecWithDrm && largeThan2K;
        var isSafari = !isSsr && isDesktopSafari();
        var hasCommonWarning = isSafari;
        var head = m$1(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["", "\u00A0<", " value=\"", "\"><//>", ""], ["", "\\u00a0<", " value=\"", "\"><//>", ""])), i18n('Can I watch 4K video on online services?'), Result, answer, hasCommonWarning ? '\u00a0⚠️' : '');
        return m$1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            <ul>\n                <li>", "\u00A0<", " value=\"", "\"><//></li>\n                <li>", "", "<", " target=\"_blank\" href=\"", "\">DRM<//>.<br/>\n                    ", " <", " value=", "><//>\n                    <ul>\n                        ", "\n\n                        ", "\n\n                        ", "\n                    </ul>\n                </li>\n                ", "\n                ", "\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            <ul>\n                <li>", "\\u00a0<", " value=\"", "\"><//></li>\n                <li>", "", "<", " target=\"_blank\" href=\"", "\">DRM<//>.<br/>\n                    ", " <", " value=", "><//>\n                    <ul>\n                        ", "\n\n                        ", "\n\n                        ", "\n                    </ul>\n                </li>\n                ", "\n                ", "\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, i18n('Is the screen larger than 2K?'), Result, largeThan2K, i18n('Online services protect content using'), '\u00a0', Link, i18n('link:wiki:drm'), i18n('Supports one of the video codecs and DRM with high security level?'), Result, anyCodecWithDrm, DrmItem({
            name: 'Google Widevine L1',
            hasNeededHdcp: hasWidevineNeededHdcp,
            isSupported: isWidevine,
            isVp9Supported: isWidevineL1Vp9,
            isHevcSupported: isWidevineL1Hevc,
            isAv1Supported: isWidevineL1Av1,
        }), DrmItem({
            name: 'Microsoft PlayReady SL3000',
            hasNeededHdcp: hasPlayReadyNeededHdcp,
            isSupported: isPlayReady,
            isVp9Supported: isPlayReadySL3000Vp9,
            isHevcSupported: isPlayReadySL3000Hevc,
            isAv1Supported: isPlayReadySL3000Av1,
        }), DrmItem({
            name: 'Apple FairPlay',
            hasNeededHdcp: null,
            isSupported: isFairplay,
            isVp9Supported: isFairplayVp9,
            isHevcSupported: isFairplayHevc,
            isAv1Supported: isFairplayAv1,
        }), needHdcpWarning() ? m$1(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["<li>\n                    \u26A0\uFE0F ", "\n                </li>"], ["<li>\n                    \u26A0\uFE0F ", "\n                </li>"])), i18n('Make sure that monitors, video cards, and cables support HDCP 2.2 or later.')) : '', isSafari ? m$1(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["<li>\n                    \u26A0\uFE0F ", " <", " href=\"", "\" target=\"_blank\">Apple T2 Security Chip<//>.\n                </li>"], ["<li>\n                    \u26A0\uFE0F ", " <", " href=\"", "\" target=\"_blank\">Apple T2 Security Chip<//>.\n                </li>"])), i18n('Select 2018 or later Mac computer with an'), Link, i18n('link:apple:t2')) : '');
    }
    function DrmItem(props) {
        var isSupported = props.isSupported, name = props.name, hasNeededHdcp = props.hasNeededHdcp, isVp9Supported = props.isVp9Supported, isHevcSupported = props.isHevcSupported, isAv1Supported = props.isAv1Supported;
        return isSupported ? m$1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<li>", "\n        <ul>\n            ", "\n            <li>\n                <", "\n                    name=\"VP9\"\n                    color=\"green\"\n                    disabled=\"", "\">\n                <//>\u00A0<", " value=\"", "\"><//>\n            </li>\n            <li>\n                <", "\n                    name=\"H.265\"\n                    color=\"orange\"\n                    disabled=\"", "\">\n                <//>\u00A0<", " value=\"", "\"><//>\n            </li>\n            <li>\n                <", "\n                    name=\"AV1\"\n                    color=\"yellow\"\n                    disabled=\"", "\">\n                <//>\u00A0<", " value=\"", "\"><//>\n            </li>\n        </ul>\n    </li>"], ["<li>", "\n        <ul>\n            ", "\n            <li>\n                <", "\n                    name=\"VP9\"\n                    color=\"green\"\n                    disabled=\"", "\">\n                <//>\\u00a0<", " value=\"", "\"><//>\n            </li>\n            <li>\n                <", "\n                    name=\"H.265\"\n                    color=\"orange\"\n                    disabled=\"", "\">\n                <//>\\u00a0<", " value=\"", "\"><//>\n            </li>\n            <li>\n                <", "\n                    name=\"AV1\"\n                    color=\"yellow\"\n                    disabled=\"", "\">\n                <//>\\u00a0<", " value=\"", "\"><//>\n            </li>\n        </ul>\n    </li>"])), name, hasNeededHdcp === null ? '' : m$1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<li>", " <", " value=\"", "\" //></li>"], ["<li>", " <", " value=\"", "\" //></li>"])), i18n('HDCP 2.2 or later'), Result, hasNeededHdcp), Codec, !isVp9Supported, Result, isVp9Supported, Codec, !isHevcSupported, Result, isHevcSupported, Codec, !isAv1Supported, Result, isAv1Supported) : '';
    }
    var templateObject_1$d, templateObject_2$5, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6;

    var b$7 = block('video-questions');
    function VideoQuestions() {
        return m$1(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n        <div class=", ">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        <//>\n    "], ["\n        <div class=", ">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        <//>\n    "])), b$7(), Question4K, QuestionHdr, QuestionDrm4K);
    }
    var templateObject_1$c;

    function getAutoplayPolicy() {
        if (!navigator.getAutoplayPolicy) {
            return '';
        }
        return navigator.getAutoplayPolicy('mediaelement');
    }

    var b$6 = block('html-video-element-features');
    function HtmlVideoElementFeatures() {
        var items = [
            {
                label: 'Media Source Extensions',
                title: 'MSE',
                supported: isSsr ? false : isMseSupported(),
            },
            {
                label: 'Managed Media Source',
                title: 'MMS',
                supported: isSsr ? false : isMmsSupported(),
            },
            {
                label: 'Encrypted Media Extensions',
                title: 'EME',
                supported: isSsr ? false : isEmeSupported(),
            },
            {
                label: 'Picture-in-picture',
                title: 'Pip',
                supported: isSsr ? false : isPipSupported(),
            },
            {
                label: 'Document Picture-in-picture',
                title: 'Document Pip',
                supported: isSsr ? false : isDocumentPipSupported(),
            },
            {
                label: 'Cast to AirPlay',
                title: 'AirPlay',
                supported: isSsr ? false : isCastToAirPlaySupported(),
            }
        ];
        items.sort(function (a, b) {
            if (a.supported === b.supported) {
                return 0;
            }
            return a.supported ? -1 : 1;
        });
        var content = items.map(function (item) {
            var supported = item.supported ? '✓' : i18n('No');
            return m$1(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["<li title=\"", "\">", ": ", "</li>"], ["<li title=\"", "\">", ": ", "</li>"])), item.title, item.label, supported);
        });
        var autoplayPolicy = isSsr ? '' : getAutoplayPolicy();
        if (autoplayPolicy) {
            content.push(m$1(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["<li>Autoplay Policy: ", "</li>"], ["<li>Autoplay Policy: ", "</li>"])), autoplayPolicy));
        }
        return m$1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<ul class=", ">", "</ul>"], ["<ul class=", ">", "</ul>"])), b$6(), content);
    }
    var templateObject_1$b, templateObject_2$4, templateObject_3;

    function getSupportedImageFormats() {
        var result = {
            svg: isSvgSupported(),
        };
        var formats = {
            png: isPngSupported(),
            apng: isAPngSupported(),
            jpeg: isJpegSupported(),
            jpegXl: isJpegXlSupported(),
            gif: isGifSupported(),
            avif: isAvifSupported(),
            webp: isWebpSupported(),
            heic: isHeicSupported(),
        };
        var promises = [];
        Object.keys(formats).forEach(function (key) {
            promises.push(formats[key].then(function (isSupported) {
                result[key] = isSupported;
            }));
        });
        return Promise.all(promises).then(function () { return result; });
    }
    function ImageFormats() {
        var supported = [];
        var unsupported = [];
        var _a = h(false); _a[0]; var setReady = _a[1];
        var ref = A({});
        getSupportedImageFormats().then(function (data) {
            setReady(true);
            ref.current = data;
        });
        var images = ref.current;
        [
            { supported: images.gif, name: 'GIF', color: 'orange', tooltip: GIF_CONTENT_TYPE },
            { supported: images.png, name: 'PNG', color: 'orange', tooltip: PNG_CONTENT_TYPE },
            { supported: images.apng, name: 'APNG', color: 'orange', tooltip: APNG_CONTENT_TYPE },
            { supported: images.jpeg, name: 'JPEG', color: 'blue', tooltip: JPEG_CONTENT_TYPE },
            { supported: images.jpeg, name: 'JPEG XL', color: 'blue', tooltip: JPEG_XL_CONTENT_TYPE },
            { supported: images.svg, name: 'SVG', color: 'red', tooltip: SVG_CONTENT_TYPE },
            { supported: images.webp, name: 'WebP', color: 'green', tooltip: WEBP_CONTENT_TYPE },
            { supported: images.heif, name: 'HEIC', color: 'orange', tooltip: HEIC_CONTENT_TYPE },
            { supported: images.avif, name: 'AVIF', color: 'yellow', tooltip: AVIF_CONTENT_TYPE },
        ].map(function (item) {
            if (item.supported) {
                supported.push(Codec({
                    name: item.name,
                    color: item.color,
                    tooltip: item.tooltip,
                }));
            }
            else {
                unsupported.push(Codec({
                    name: item.name,
                    color: 'black',
                    disabled: true,
                    tooltip: item.tooltip,
                }));
            }
        });
        return m$1(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["<", ">\n        <", " name=\"", "\">\n            ", "\n        <//>\n        ", "\n    <//>"], ["<", ">\n        <", " name=\"", "\">\n            ", "\n        <//>\n        ", "\n    <//>"])), Columns, Column, i18n('Supported'), supported.length ? supported : i18n('No supported image formats.'), unsupported.length ? m$1(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["<", " name=\"", "\">", "<//>"], ["<", " name=\"", "\">", "<//>"])), Column, i18n('Unsupported'), unsupported) : '');
    }
    var templateObject_1$a, templateObject_2$3;

    var hasDocument = typeof document !== 'undefined';
    var hasWindow = typeof window !== 'undefined';
    var hasNavigator = typeof navigator != 'undefined';
    var hasScreen = typeof screen != 'undefined';
    function getCharset() {
        return hasDocument && typeof document.charset === 'string' ?
            document.charset.toLowerCase() :
            '';
    }
    function getPageUrl() {
        return hasWindow && window.location ? window.location.href : '';
    }
    function getReferrer() {
        return hasDocument ? document.referrer : '';
    }
    function getTitle() {
        return hasDocument ? document.title : '';
    }
    function cookieEnabled() {
        return hasNavigator ? navigator.cookieEnabled : false;
    }
    function getScreenSize() {
        return hasScreen ? [
            screen.width,
            screen.height,
            screen.colorDepth
        ].join('x') : '';
    }
    var DEFAULT_DEVICE_PIXEL_RATIO = 1;
    function getDevicePixelRatio() {
        return hasWindow ?
            (window.devicePixelRatio || DEFAULT_DEVICE_PIXEL_RATIO) :
            DEFAULT_DEVICE_PIXEL_RATIO;
    }
    function getClientSize() {
        return hasWindow ? [
            window.innerWidth,
            window.innerHeight
        ].join('x') : '';
    }

    function truncate(str, len) {
        return (str || '').slice(0, len);
    }

    function getRandom() {
        return Math.floor(Math.random() * (1 << 31 - 1));
    }

    function getSeconds() {
        return Math.round(Date.now() / 1000);
    }

    var MAX_TITLE_LEN = 512;
    function addParam(result, name, value) {
        if (value || value === 0) {
            result.push(name + ':' + (value === true ? '1' : value));
        }
    }
    function getBrowserInfo(params, title) {
        var result = [];
        if (params) {
            Object.keys(params).forEach(function (key) { return addParam(result, key, params[key]); });
        }
        addParam(result, 'rn', getRandom());
        addParam(result, 'c', cookieEnabled());
        addParam(result, 's', getScreenSize());
        addParam(result, 'sk', getDevicePixelRatio());
        addParam(result, 'w', getClientSize());
        addParam(result, 'en', getCharset());
        var time = getSeconds();
        addParam(result, 'et', time);
        addParam(result, 'st', time);
        addParam(result, 't', truncate(title, MAX_TITLE_LEN));
        return result.join(':');
    }

    function queryStringify(params) {
        return Object.keys(params)
            .filter(function (key) { return params[key] || params[key] === 0; })
            .map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]); })
            .join('&');
    }
    var MAX_URL_LEN = 1024;
    function prepareUrl(url) {
        return truncate(url, MAX_URL_LEN);
    }

    function sendData(counterId, queryParams) {
        var url = 'https://mc.yandex.ru/watch/' + counterId + '?' + queryStringify(queryParams);
        var hasBeacon = typeof navigator !== 'undefined' && navigator.sendBeacon;
        if (!hasBeacon || !navigator.sendBeacon(url, ' ')) {
            if (typeof fetch !== 'undefined') {
                fetch(url, { credentials: 'include' }).catch(function () { });
            }
            else if (typeof Image !== 'undefined') {
                new Image().src = url;
            }
        }
    }

    function hitExt(hitExtParams) {
        var browserInfo = hitExtParams.browserInfo, counterId = hitExtParams.counterId, pageParams = hitExtParams.pageParams;
        var data = {
            'browser-info': getBrowserInfo(browserInfo, pageParams.title),
            rn: getRandom(),
            ut: pageParams.ut
        };
        if (pageParams.url) {
            data['page-url'] = prepareUrl(pageParams.url);
        }
        if (pageParams.referrer) {
            data['page-ref'] = prepareUrl(pageParams.referrer);
        }
        sendData(counterId, data);
    }
    /**
     * Отправка хита.
     *
     * @param counterId - Номер счётчика.
     * @param hitParams -  Параметры страницы.
     * @param userVars - Параметры визитов.
     *
     * @example
     * hit('123456');
     *
     * hit('123456', {
     *     referer: document.referer,
     *     title: document.title,
     *     url: window.location.href
     * }, {
     *     myParam: 'value'
     * });
     */
    function hit(counterId, hitParams, params) {
        var referrer = getReferrer();
        var title = getTitle();
        var url = getPageUrl();
        hitExt({
            browserInfo: { pv: true, ar: true },
            counterId: counterId,
            pageParams: {
                referrer: referrer,
                title: title,
                url: url
            },
            params: params
        });
    }

    function getLang() {
        var _a;
        var lang = ((_a = window.appData) === null || _a === void 0 ? void 0 : _a.lang) || getLangFromUrl() || getLangFromNavigator();
        if (lang !== 'en' && lang !== 'ru') {
            lang = 'en';
        }
        return lang;
    }
    function getLangFromNavigator() {
        return ((navigator.language || '').split('-')[0] || 'en');
    }
    function getLangFromUrl() {
        var params = window.location.search.slice(1).split('&');
        for (var i = 0; i < params.length; i++) {
            var _a = params[i].split('='), name_1 = _a[0], value = _a[1];
            if (name_1 === 'lang') {
                return value;
            }
        }
        return '';
    }

    function withInstallApp() {
        window.addEventListener('beforeinstallprompt', function (e) {
        });
    }

    function addClassName(elem, className) {
        if (elem.classList) {
            elem.classList.add(className);
        }
        else {
            elem.className += (elem.className ? ' ' : '') + className;
        }
    }

    function handleHover() {
        document.removeEventListener('mousemove', handleHover);
        addClassName(document.body, 'hover_yes');
    }
    function addHoverOnBody() {
        document.addEventListener('mousemove', handleHover);
    }

    var _a;
    if (!isSsr) {
        hit('95998062'); // 97747983
        var lang = getLang();
        setI18nLang(lang);
        withInstallApp();
        addHoverOnBody();
        // ally
        (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.setAttribute('lang', lang);
    }

    var b$5 = block('lang-switcher-item');
    function LangSwitcherItem(props) {
        var emoji = props.emoji, onClick = props.onClick, name = props.name, value = props.value, selected = props.selected;
        var handleClick = q(function () {
            onClick(value);
        }, []);
        return m$1(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["<div class=\"", "\" onClick=\"", "\">", " ", " ", "</div>"], ["<div class=\"", "\" onClick=\"", "\">", " ", " ", "</div>"])), b$5(), handleClick, emoji, name, selected ? ' ✓' : '');
    }
    var templateObject_1$9;

    function getPagePath(id, lang) {
        var idPath = id === 'index' ? '' : (id + '/');
        return "/".concat(lang || getI18nLang(), "/").concat(idPath);
    }

    var b$4 = block('lang-switcher');
    function LangSwitcher() {
        var _a = h(false), visible = _a[0], setVisible = _a[1];
        var currentLang = getI18nLang();
        var langs = getI18nLangs();
        var handleClickItem = q(function (value) {
            setVisible(false);
            window.location.href = getPagePath(window.appData.pageId, value);
        }, [setVisible]);
        var handleClick = q(function () {
            setVisible(true);
        }, [setVisible]);
        var currentLangItem = langs.filter(function (item) { return currentLang === item.value; })[0];
        return m$1(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\" onClick=\"", "\"><span class=\"", "\">", "</span> ", "</div>\n        <div class=\"", "\">\n            ", "\n        </div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\" onClick=\"", "\"><span class=\"", "\">", "</span> ", "</div>\n        <div class=\"", "\">\n            ", "\n        </div>\n    </div>"])), b$4(), b$4('current'), handleClick, b$4('emoji'), currentLangItem.emoji, currentLangItem.name, b$4('popup', { visible: visible }), langs.map(function (item) { return m$1(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["<", " selected=\"", "\" key=\"", "\" onClick=\"", "\" ...\"", "\" //>"], ["<", " selected=\"", "\" key=\"", "\" onClick=\"", "\" ...\"", "\" //>"])), LangSwitcherItem, currentLang === item.value, item.value, handleClickItem, item); }));
    }
    var templateObject_1$8, templateObject_2$2;

    var b$3 = block('footer');
    function Footer() {
        return m$1(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["<footer class=\"", "\">\n        <div class=\"", "\"><", " theme=\"white\" target=\"_blank\" href=\"https://github.com/vvideo/caniwatchvideo/issues/new\">", "<//></div>\n        <div class=\"", "\"><", " //></div>\n        <div class=\"", "\">\u00A9 Vvideo</div>\n    </footer>"], ["<footer class=\"", "\">\n        <div class=\"", "\"><", " theme=\"white\" target=\"_blank\" href=\"https://github.com/vvideo/caniwatchvideo/issues/new\">", "<//></div>\n        <div class=\"", "\"><", " //></div>\n        <div class=\"", "\">\u00A9 Vvideo</div>\n    </footer>"])), b$3(), b$3('item', { report: true }), Link, i18n('Report a bug'), b$3('item'), LangSwitcher, b$3('item'));
    }
    var templateObject_1$7;

    var b$2 = block('main-menu');
    function MainMenu(props) {
        return m$1(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n        <nav class=\"", "\">\n            <ul class=\"", "\">\n            ", "\n            </ul>\n        </nav>\n    "], ["\n        <nav class=\"", "\">\n            <ul class=\"", "\">\n            ", "\n            </ul>\n        </nav>\n    "])), b$2(), b$2('list'), props.items.filter(function (item) { return !item.hidden; }).map(function (item) {
            return m$1(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["<li class=\"", "\" key=\"", "\"><a class=\"", "\" href=\"", "\">", "</a></li>"], ["<li class=\"", "\" key=\"", "\"><a class=\"", "\" href=\"", "\">", "</a></li>"])), b$2('item', { selected: item.selected }), item.id, b$2('link'), getPagePath(item.id), item.title);
        }));
    }
    var templateObject_1$6, templateObject_2$1;

    var pages = [
        {
            "header": {
                "en": "Check device online",
                "ru": "Проверь устройство онлайн"
            },
            "emoji": "",
            "menuTitle": {
                "en": "",
                "ru": ""
            },
            "id": "index",
            "hidden": true
        },
        {
            "header": {
                "en": "Video",
                "ru": "Видео"
            },
            "emoji": "⏯",
            "menuTitle": {
                "en": "Video",
                "ru": "Видео"
            },
            "id": "video"
        },
        {
            "menuTitle": {
                "en": "Audio",
                "ru": "Аудио"
            },
            "emoji": "🔊",
            "id": "audio"
        },
        {
            "menuTitle": {
                "en": "Screen",
                "ru": "Экран"
            },
            "emoji": "🖥️",
            "id": "screen"
        },
        {
            "menuTitle": {
                "en": "Webcamera",
                "ru": "Веб-камера"
            },
            "emoji": "📸",
            "id": "camera"
        },
        {
            "menuTitle": {
                "en": "Mic",
                "ru": "Микрофон"
            },
            "emoji": "🎙️",
            "id": "mic"
        },
        {
            "menuTitle": {
                "en": "GPU",
                "ru": "GPU"
            },
            "emoji": "⚙️",
            "id": "gpu"
        },
        {
            "menuTitle": {
                "en": "Mouse",
                "ru": "Мышь"
            },
            "emoji": "🖱",
            "id": "mouse"
        },
        {
            "menuTitle": {
                "en": "Keyboard",
                "ru": "Клавиатура"
            },
            "emoji": "⌨️",
            "id": "keyboard"
        },
        {
            "menuTitle": {
                "en": "Key codes",
                "ru": "Коды клавиш"
            },
            "emoji": "",
            "id": "keycodes",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Gamepad",
                "ru": "Джойстик"
            },
            "emoji": "🕹️",
            "id": "gamepad"
        },
        {
            "menuTitle": {
                "en": "Storage",
                "ru": "Хранилище"
            },
            "emoji": "💽",
            "id": "storage"
        },
        {
            "menuTitle": {
                "en": "Network",
                "ru": "Сеть"
            },
            "emoji": "🌐",
            "id": "network"
        },
        {
            "menuTitle": {
                "en": "Geo",
                "ru": "Гео"
            },
            "emoji": "📍",
            "id": "geo"
        },
        {
            "menuTitle": {
                "en": "MIDI",
                "ru": "MIDI"
            },
            "emoji": "🎹",
            "id": "midi",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "USB",
                "ru": "USB"
            },
            "emoji": "🔌",
            "id": "usb",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Bluetooth",
                "ru": "Bluetooth"
            },
            "emoji": "ᛒ",
            "id": "bluetooth",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Sensor",
                "ru": "Сенсор"
            },
            "emoji": "🧲",
            "id": "sensor",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Platform",
                "ru": "Платформа"
            },
            "emoji": "💻",
            "id": "platform"
        },
        {
            "menuTitle": {
                "en": "Battery",
                "ru": "Батарея"
            },
            "emoji": "🔋",
            "id": "battery"
        },
        {
            "menuTitle": {
                "en": "Fonts",
                "ru": "Шрифты"
            },
            "emoji": "❝",
            "id": "fonts"
        },
        {
            "menuTitle": {
                "en": "404",
                "ru": "404"
            },
            "emoji": "",
            "id": "error404",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Test dead pixels",
                "ru": "Тестирование битых пикселей"
            },
            "emoji": "",
            "id": "test-dead-pixels",
            "hidden": true
        }
    ];

    function getIdFromLocation() {
        var id = window.location.pathname.split(/[?./]/)[2];
        return id;
    }
    function Menu() {
        var id = isSsr ? '' : getIdFromLocation();
        var items = pages.map(function (item) {
            var selected = item.id === id;
            return __assign(__assign({}, item), { url: getPagePath(item.id), title: i18nWithKeyset(item.menuTitle), selected: selected });
        });
        return m$1(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["<", " items=\"", "\"><//>"], ["<", " items=\"", "\"><//>"])), MainMenu, items);
    }
    var templateObject_1$5;

    var b$1 = block('header');
    function Header() {
        return m$1(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n        <header class=\"", "\">\n            <", " theme=\"white\" href=\"", "\"><span class=\"", "\"></span>", "<//>\n        </header>\n    "], ["\n        <header class=\"", "\">\n            <", " theme=\"white\" href=\"", "\"><span class=\"", "\"></span>", "<//>\n        </header>\n    "])), b$1(), Link, getPagePath('index'), b$1('logo'), i18n('Check device online'));
    }
    var templateObject_1$4;

    function Page(props) {
        return m$1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div>\n            <", " //>\n            ", "\n\n            ", "\n\n            <", "><//>\n        </div>"], ["\n        <div>\n            <", " //>\n            ", "\n\n            ", "\n\n            <", "><//>\n        </div>"])), Header, props.withoutMenu ? '' : m$1(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["<", "><//>"], ["<", "><//>"])), Menu), props.children, Footer);
    }
    var templateObject_1$3, templateObject_2;

    var b = block('page-title');
    function PageTitle(props) {
        return m$1(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n        <h1 class=\"", "\">\n            ", "\n        </h1>\n    "], ["\n        <h1 class=\"", "\">\n            ", "\n        </h1>\n    "])), b(), props.children);
    }
    var templateObject_1$2;

    function VideoPage() {
        var forceUpdate = useForceUpdate();
        y(function () {
            function onVisibilityСhange() {
                forceUpdate();
            }
            document.addEventListener('visibilitychange', onVisibilityСhange);
            return function () {
                document.removeEventListener('visibilitychange', onVisibilityСhange);
            };
        }, []);
        return m$1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <h2>", "</h2>\n            <", "><//>\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"DRM\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <h2>", "</h2>\n            <", "><//>\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"DRM\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n        <//>"])), Page, PageTitle, i18n('Video'), i18n('Can I watch video in this browser?'), VideoQuestions, ScreenBadges, Row, i18n('Video Codecs'), VideoCodecs, Row, DrmBadges, Row, i18n('Image Formats'), ImageFormats, Row, i18n('Native Streaming Support'), NativeStreaming, Row, i18n('HTMLVideoElement Features'), HtmlVideoElementFeatures);
    }
    var templateObject_1$1;

    B$1(m$1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<", " //>"], ["<", " //>"])), VideoPage), document.querySelector('.page'));
    var templateObject_1;

}));
