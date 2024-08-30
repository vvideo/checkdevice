(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var n,l$1,u$1,i$1,o$1,r$1,f$1,e$1,c$1,s$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$g(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y$1(i)?g(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a--:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&(f==r-a?a-=f-r:a++),f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b$g(m,M),h.constructor=T,h.render=q$1),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l$1.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(L=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e;}else u.__e=t.__e,u.__k=t.__k;l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A$1(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A$1(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A$1(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A$1(l,s,g,m[s],o));}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function V(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$g.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b$g.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b$g.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$1=0,c$1=F(!1),s$1=F(!0);

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
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


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

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var i18nKeyset = {};
    var i18nLang;
    var langsData$1 = [];
    function getI18nLangs() {
        return __spreadArray([], langsData$1, true);
    }
    function setI18nLangs(data) {
        langsData$1 = data;
    }
    function addI18nKeyset(keyset) {
        i18nKeyset = __assign(__assign({}, i18nKeyset), keyset);
    }
    function i18n(id) {
        var key = i18nKeyset[id];
        if (!key) {
            console.error("i18n: not found translation key \"".concat(id, "\"."));
            return id;
        }
        var value = key[i18nLang];
        if (typeof value === 'undefined') {
            console.error("i18n: not found translation key \"".concat(id, "\", lang \"").concat(i18nLang, "\"."));
            return id;
        }
        return value;
    }
    function i18nWithKeyset(keyset) {
        return keyset[i18nLang];
    }
    function setI18nLang(lang) {
        if (lang) {
            i18nLang = lang;
        }
    }
    function getI18nLang() {
        return i18nLang;
    }

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

    var b$f = block('warning-message');
    function WarningMessage(props) {
        return (_("span", { class: b$f({ theme: props.theme }) },
            "\u26A0\uFE0F ",
            props.children));
    }

    function classname() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values.filter(function (item) {
            return item !== null && item !== undefined;
        }).join(' ');
    }

    var b$e = block('section');
    function Section(props) {
        if (!props.children) {
            return null;
        }
        var className = classname(b$e(), props.class);
        return props.name ? (_("section", { class: className },
            _("h2", { class: b$e('name') }, props.name),
            _("div", { class: b$e('body') }, props.children))) : (_("div", { class: b$e() }, props.children));
    }

    var b$d = block('tree-list');

    var simpleTypes = {
        string: true,
        number: true,
        bigint: true,
        boolean: true,
        symbol: true,
        undefined: true,
        function: true,
        object: false,
    };
    function isArrayWithSimpleTypes(arr) {
        return arr.every(function (item) {
            return item === null || simpleTypes[typeof item];
        });
    }
    function buildData(data, options, level) {
        if (options === void 0) { options = {}; }
        if (level === void 0) { level = 0; }
        if (typeof data === 'string') {
            return (_("span", { class: b$d('string') },
                "'",
                data,
                "'"));
        }
        if (typeof data === 'number') {
            return (_("span", { class: b$d('number') }, data));
        }
        if (typeof data === 'bigint') {
            return (_("span", { class: b$d('bigint') },
                data,
                "n"));
        }
        if (typeof data === 'boolean') {
            return (_("span", { class: b$d('boolean') }, String(data)));
        }
        if (typeof data === 'function') {
            return (_("span", { class: b$d('function') },
                "\u0192 ",
                data.name,
                "()"));
        }
        if (typeof data === 'symbol') {
            return (_("span", { class: b$d('symbol') }, data.toString()));
        }
        if (typeof data === 'undefined') {
            return (_("span", { class: b$d('undefined') }, "undefined"));
        }
        if (data === null) {
            return (_("span", { class: b$d('null') }, "null"));
        }
        if (Array.isArray(data)) {
            if (options.compactArrayWithSimpleTypes && isArrayWithSimpleTypes(data)) {
                return (_("div", { class: b$d('inline') },
                    "[",
                    ' ',
                    data.map(function (item, i) {
                        return (_("div", { class: b$d('inline') },
                            i ? ', ' : '',
                            buildData(item, options, level + 1)));
                    }),
                    ' ',
                    "]"));
            }
            else {
                return (_("div", { class: b$d('inline') },
                    "[",
                    _("ul", null, data.map(function (item, i) {
                        var arrayIndex = options.showArrayIndex ? (_("div", { class: b$d('inline') },
                            " ",
                            _("span", { class: b$d('index') },
                                i,
                                ": "))) : '';
                        return (_("li", null,
                            arrayIndex,
                            buildData(item, options, level + 1),
                            i === data.length - 1 ? '' : ','));
                    })),
                    "]"));
            }
        }
        if (options.compactObject && level > 0) {
            return (_("div", { class: b$d('inline') },
                ' ',
                Object.keys(data).map(function (key, i, items) {
                    return (_("div", { class: b$d('inline') },
                        _("span", { class: b$d('property') },
                            key,
                            ": "),
                        buildData(data[key], options, level + 1),
                        i === items.length - 1 ? '' : ', '));
                }),
                ' '));
        }
        var props = [];
        for (var key in data) {
            props.push(key);
        }
        var hasBraces = Boolean(options.showCurlyBracesAtRootLevel || level);
        return (_("div", { class: b$d('inline') },
            hasBraces ? '{' : '',
            _("ul", { class: b$d('ul', { padding: hasBraces ? 'yes' : 'no' }) }, props.map(function (key, i, items) {
                return (_("li", null,
                    _("span", { class: b$d('property') },
                        key,
                        ": "),
                    buildData(data[key], options, level + 1),
                    i === items.length - 1 ? '' : ','));
            })),
            hasBraces ? '}' : ''));
    }

    function TreeList(props) {
        return (_(Section, { name: props.title },
            _("div", { class: b$d() }, buildData(props.data, props.options))));
    }

    var useForceUpdate = function () {
        var _a = h({}), updateState = _a[1];
        return q(function () { return updateState({}); }, []);
    };

    var isSsr = typeof window === 'undefined';

    var b$c = block('xbox-buttons');
    function XboxButtons() {
        return (_("div", { class: b$c() },
            _("div", { class: b$c('x') }, "X"),
            _("div", { class: b$c('y') }, "Y"),
            _("div", { class: b$c('a') }, "A"),
            _("div", { class: b$c('b') }, "B")));
    }

    var b$b = block('spinner');
    function Spinner(props) {
        return (_("div", { class: b$b({ size: props.size }) }));
    }

    function GamepadWait() {
        return (_("div", null,
            _(Spinner, { size: "s" }),
            " ",
            i18n('Connect and press any button on the gamepad.'),
            " ",
            _(XboxButtons, null)));
    }

    var b$a = block('gamepad-list');
    function GamepadList() {
        if (!isSsr && !navigator.getGamepads) {
            return (_(WarningMessage, null, i18n('🎮 Gamepad API is not supported.')));
        }
        var forceUpdate = useForceUpdate();
        y(function () {
            var timer = window.setInterval(function () {
                forceUpdate();
            }, 20);
            var handleGamepad = function () {
                forceUpdate();
            };
            window.addEventListener('gamepadconnected', handleGamepad);
            window.addEventListener('gamepaddisconnected', handleGamepad);
            return function () {
                window.removeEventListener('gamepadconnected', handleGamepad);
                window.removeEventListener('gamepaddisconnected', handleGamepad);
                window.clearInterval(timer);
            };
        }, []);
        var result = isSsr ? [] : navigator.getGamepads();
        var gamepads = Array.isArray(result) ? result.filter(function (item) { return item !== null; }) : [];
        return gamepads.length ? (_("div", { class: b$a() }, gamepads.map(function (rawItem, i) {
            var item = rawItem;
            var data = {
                index: item.index,
                mapping: item.mapping,
                connected: item.connected,
                timestamp: item.timestamp,
                axes: item.axes,
                buttons: item.buttons.map(function (button) {
                    return {
                        value: button.value,
                        pressed: button.pressed,
                        touched: button.touched,
                    };
                }),
            };
            if (typeof item.hand !== 'undefined') {
                // @ts-ignore
                data.hand = item.hand;
            }
            var options = {
                compactObject: true,
                compactArrayWithSimpleTypes: true,
                showArrayIndex: true,
            };
            return (_("div", { class: b$a('item') },
                _("div", { class: b$a('title') }, item.id),
                _(TreeList, { title: i, data: data, options: options })));
        }))) : (_(GamepadWait, null));
    }

    /*! show-js-error | © 2024 Denis Seleznev | MIT License | https://github.com/hcodes/show-js-error/ */
    function getScreenSize$1() {
        return [screen.width, screen.height, screen.colorDepth].join('×');
    }
    function getScreenOrientation() {
        return typeof screen.orientation === 'string' ? screen.orientation : screen.orientation.type;
    }
    function copyTextToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        try {
            textarea.select();
            document.execCommand('copy');
        }
        catch (e) {
            alert('Copying text is not supported in this browser.');
        }
        document.body.removeChild(textarea);
    }
    function injectStyle(style) {
        const styleNode = document.createElement('style');
        document.body.appendChild(styleNode);
        styleNode.textContent = style;
        return styleNode;
    }

    function createElem(data) {
        const elem = document.createElement(data.tag || 'div');
        if (data.props) {
            addProps(elem, data.props);
        }
        elem.className = buildElemClass(data.name);
        data.container.appendChild(elem);
        return elem;
    }
    function addProps(elem, props) {
        Object.keys(props).forEach(key => {
            elem[key] = props[key];
        });
    }
    function buildElemClass(name, mod) {
        let elemName = 'show-js-error';
        if (name) {
            elemName += '__' + name;
        }
        let className = elemName;
        if (mod) {
            Object.keys(mod).forEach((modName) => {
                const modValue = mod[modName];
                if (modValue === false || modValue === null || modValue === undefined || modValue === '') {
                    return;
                }
                if (mod[modName] === true) {
                    className += ' ' + elemName + '_' + modName;
                }
                else {
                    className += ' ' + elemName + '_' + modName + '_' + modValue;
                }
            });
        }
        return className;
    }

    function getStack(error) {
        return error && error.stack || '';
    }
    function getMessage(error) {
        return error && error.message || '';
    }
    function getValue(value, defaultValue) {
        return typeof value === 'undefined' ? defaultValue : value;
    }
    function getFilenameWithPosition(error) {
        if (!error) {
            return '';
        }
        let text = error.filename || '';
        if (typeof error.lineno !== 'undefined') {
            text += ':' + getValue(error.lineno, '');
            if (typeof error.colno !== 'undefined') {
                text += ':' + getValue(error.colno, '');
            }
        }
        return text;
    }

    const STYLE = '.show-js-error{background:#ffc1cc;bottom:15px;color:#000;font-family:Arial,sans-serif;font-size:13px;left:15px;max-width:90vw;min-width:15em;opacity:1;position:fixed;transition:opacity .2s ease-out;transition-delay:0s;visibility:visible;z-index:10000000}.show-js-error_size_big{transform:scale(2) translate(25%,-25%)}.show-js-error_hidden{opacity:0;transition:opacity .3s,visibility 0s linear .3s;visibility:hidden}.show-js-error__title{background:#f66;color:#fff;font-weight:700;padding:4px 30px 4px 7px}.show-js-error__title_no-errors{background:#6b6}.show-js-error__message{cursor:pointer;display:inline}.show-js-error__message:before{background-color:#eee;border-radius:10px;content:"+";display:inline-block;font-size:10px;height:10px;line-height:10px;margin-bottom:2px;margin-right:5px;text-align:center;vertical-align:middle;width:10px}.show-js-error__body_detailed .show-js-error__message:before{content:"-"}.show-js-error__body_no-stack .show-js-error__message:before{display:none}.show-js-error__body_detailed .show-js-error__filename{display:block}.show-js-error__body_no-stack .show-js-error__filename{display:none}.show-js-error__close{color:#fff;cursor:pointer;font-size:20px;line-height:20px;padding:3px;position:absolute;right:2px;top:0}.show-js-error__body{line-height:19px;padding:5px 8px}.show-js-error__body_hidden{display:none}.show-js-error__filename{background:#ffe1ec;border:1px solid #faa;display:none;margin:3px 0 3px -2px;max-height:15em;overflow-y:auto;padding:5px;white-space:pre-wrap}.show-js-error__actions{border-top:1px solid #faa;margin-top:5px;padding:5px 0 3px}.show-js-error__actions_hidden{display:none}.show-js-error__arrows{margin-left:8px;white-space:nowrap}.show-js-error__arrows_hidden{display:none}.show-js-error__copy,.show-js-error__next,.show-js-error__num,.show-js-error__prev,.show-js-error__report{font-size:12px}.show-js-error__report_hidden{display:none}.show-js-error__next{margin-left:1px}.show-js-error__num{margin-left:5px;margin-right:5px}.show-js-error__copy,.show-js-error__report{margin-right:3px}.show-js-error input{padding:1px 2px}.show-js-error a,.show-js-error a:visited{color:#000;text-decoration:underline}.show-js-error a:hover{text-decoration:underline}';
    class ShowJSError {
        constructor() {
            this.elems = {};
            this.state = {
                appended: false,
                detailed: false,
                errorIndex: 0,
                errorBuffer: [],
            };
            this.onerror = (event) => {
                const error = event.error ? event.error : event;
                console.log(1, event);
                this.pushError({
                    title: 'JavaScript Error',
                    message: error.message,
                    filename: error.filename,
                    colno: error.colno,
                    lineno: error.lineno,
                    stack: error.stack,
                });
            };
            this.onsecuritypolicyviolation = (error) => {
                this.pushError({
                    title: 'CSP Error',
                    message: `blockedURI: ${error.blockedURI || ''}\n violatedDirective: ${error.violatedDirective} || ''\n originalPolicy: ${error.originalPolicy || ''}`,
                    colno: error.columnNumber,
                    filename: error.sourceFile,
                    lineno: error.lineNumber,
                });
            };
            this.onunhandledrejection = (error) => {
                this.pushError({
                    title: 'Unhandled promise rejection',
                    message: error.reason.message,
                    colno: error.reason.colno,
                    filename: error.reason.filename,
                    lineno: error.reason.lineno,
                    stack: error.reason.stack,
                });
            };
            this.appendToBody = () => {
                document.removeEventListener('DOMContentLoaded', this.appendToBody, false);
                if (this.elems.container) {
                    this.styleNode = injectStyle(STYLE);
                    document.body.appendChild(this.elems.container);
                }
            };
            this.settings = this.prepareSettings();
            if (typeof window === 'undefined') {
                return;
            }
            window.addEventListener('error', this.onerror, false);
            window.addEventListener('unhandledrejection', this.onunhandledrejection, false);
            document.addEventListener('securitypolicyviolation', this.onsecuritypolicyviolation, false);
        }
        destruct() {
            var _a;
            window.removeEventListener('error', this.onerror, false);
            window.removeEventListener('unhandledrejection', this.onunhandledrejection, false);
            document.removeEventListener('securitypolicyviolation', this.onsecuritypolicyviolation, false);
            document.removeEventListener('DOMContentLoaded', this.appendToBody, false);
            if (document.body && this.elems.container) {
                document.body.removeChild(this.elems.container);
            }
            this.state.errorBuffer = [];
            this.elems = {};
            if (this.styleNode) {
                (_a = this.styleNode.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.styleNode);
                this.styleNode = undefined;
            }
        }
        setSettings(settings) {
            this.settings = this.prepareSettings(settings);
            if (this.state.appended) {
                this.updateUI();
            }
        }
        /**
         * Show error panel with transmitted error.
         */
        show(error) {
            if (!error) {
                this.showUI();
                return;
            }
            if (typeof error === 'string') {
                this.pushError({ message: error });
            }
            else {
                this.pushError(typeof error === 'object' ?
                    error :
                    new Error(error));
            }
        }
        /**
         * Hide error panel.
         */
        hide() {
            if (this.elems.container) {
                this.elems.container.className = buildElemClass('', {
                    size: this.settings.size,
                    hidden: true
                });
            }
        }
        /**
         * Clear error panel.
         */
        clear() {
            this.state.errorBuffer = [];
            this.state.detailed = false;
            this.setCurrentError(0);
        }
        /**
         * Toggle view (shortly/detail).
         */
        toggleView() {
            this.state.detailed = !this.state.detailed;
            this.updateUI();
        }
        prepareSettings(rawSettings) {
            const settings = rawSettings || {};
            return {
                size: settings.size || 'normal',
                reportUrl: settings.reportUrl || '',
                templateDetailedMessage: settings.templateDetailedMessage || '',
            };
        }
        pushError(error) {
            this.state.errorBuffer.push(error);
            this.state.errorIndex = this.state.errorBuffer.length - 1;
            this.updateUI();
        }
        appendUI() {
            const container = document.createElement('div');
            container.className = buildElemClass('', {
                size: this.settings.size,
            });
            this.elems.container = container;
            this.elems.close = createElem({
                name: 'close',
                props: {
                    innerText: '×',
                    onclick: () => {
                        this.hide();
                    }
                },
                container
            });
            this.elems.title = createElem({
                name: 'title',
                props: {
                    innerText: this.getTitle()
                },
                container
            });
            const body = createElem({
                name: 'body',
                container
            });
            this.elems.body = body;
            this.elems.message = createElem({
                name: 'message',
                props: {
                    onclick: () => {
                        this.toggleView();
                    }
                },
                container: body
            });
            this.elems.filename = createElem({
                name: 'filename',
                container: body
            });
            this.createActions(body);
            if (document.body) {
                document.body.appendChild(container);
                this.styleNode = injectStyle(STYLE);
            }
            else {
                document.addEventListener('DOMContentLoaded', this.appendToBody, false);
            }
        }
        createActions(container) {
            const actions = createElem({
                name: 'actions',
                container
            });
            this.elems.actions = actions;
            createElem({
                tag: 'input',
                name: 'copy',
                props: {
                    type: 'button',
                    value: 'Copy',
                    onclick: () => {
                        const error = this.getCurrentError();
                        copyTextToClipboard(this.getDetailedMessage(error));
                    }
                },
                container: actions
            });
            const reportLink = createElem({
                tag: 'a',
                name: 'report-link',
                props: {
                    href: '',
                    target: '_blank'
                },
                container: actions
            });
            this.elems.reportLink = reportLink;
            this.elems.report = createElem({
                tag: 'input',
                name: 'report',
                props: {
                    type: 'button',
                    value: 'Report'
                },
                container: reportLink
            });
            this.createArrows(actions);
        }
        createArrows(container) {
            const arrows = createElem({
                tag: 'span',
                name: 'arrows',
                container
            });
            this.elems.arrows = arrows;
            this.elems.prev = createElem({
                tag: 'input',
                name: 'prev',
                props: {
                    type: 'button',
                    value: '←',
                    onclick: () => {
                        this.setCurrentError(this.state.errorIndex - 1);
                    }
                },
                container: arrows
            });
            this.elems.num = createElem({
                tag: 'span',
                name: 'num',
                props: {
                    innerText: this.state.errorIndex + 1
                },
                container: arrows
            });
            this.elems.next = createElem({
                tag: 'input',
                name: 'next',
                props: {
                    type: 'button',
                    value: '→',
                    onclick: () => {
                        this.setCurrentError(this.state.errorIndex + 1);
                    }
                },
                container: arrows
            });
        }
        getDetailedMessage(error) {
            let text = [
                ['Title', this.getTitle(error)],
                ['Message', getMessage(error)],
                ['Filename', getFilenameWithPosition(error)],
                ['Stack', getStack(error)],
                ['Page url', window.location.href],
                ['Refferer', document.referrer],
                ['User-agent', navigator.userAgent],
                ['Screen size', getScreenSize$1()],
                ['Screen orientation', getScreenOrientation()],
                ['Cookie enabled', navigator.cookieEnabled]
            ].map(item => (item[0] + ': ' + item[1] + '\n')).join('');
            if (this.settings.templateDetailedMessage) {
                text = this.settings.templateDetailedMessage.replace(/\{message\}/, text);
            }
            return text;
        }
        getTitle(error) {
            return error ? (error.title || 'Error') : 'No errors';
        }
        showUI() {
            if (this.elems.container) {
                this.elems.container.className = buildElemClass('', {
                    size: this.settings.size,
                });
            }
        }
        hasStack() {
            const error = this.getCurrentError();
            return error && (error.stack || error.filename);
        }
        getCurrentError() {
            return this.state.errorBuffer[this.state.errorIndex];
        }
        setCurrentError(index) {
            const length = this.state.errorBuffer.length;
            let newIndex = index;
            if (newIndex > length - 1) {
                newIndex = length - 1;
            }
            else if (newIndex < 0) {
                newIndex = 0;
            }
            this.state.errorIndex = newIndex;
            this.updateUI();
        }
        updateUI() {
            const error = this.getCurrentError();
            if (!this.state.appended) {
                this.state.appended = true;
                this.appendUI();
            }
            if (this.elems.body) {
                this.elems.body.className = buildElemClass('body', {
                    detailed: this.state.detailed,
                    'no-stack': !this.hasStack(),
                    hidden: !error,
                });
            }
            if (this.elems.title) {
                this.elems.title.innerText = this.getTitle(error);
                this.elems.title.className = buildElemClass('title', {
                    'no-errors': !error
                });
            }
            if (this.elems.message) {
                this.elems.message.innerText = getMessage(error);
            }
            if (this.elems.actions) {
                this.elems.actions.className = buildElemClass('actions', { hidden: !error });
            }
            if (this.elems.reportLink) {
                this.elems.reportLink.className = buildElemClass('report', {
                    hidden: !this.settings.reportUrl
                });
            }
            if (this.elems.reportLink) {
                this.elems.reportLink.href = this.settings.reportUrl
                    .replace(/\{title\}/, encodeURIComponent(getMessage(error)))
                    .replace(/\{body\}/, encodeURIComponent(this.getDetailedMessage(error)));
            }
            if (this.elems.filename) {
                this.elems.filename.className = buildElemClass('filename', { hidden: !error });
                this.elems.filename.innerText = getStack(error) || getFilenameWithPosition(error);
            }
            this.updateArrows(error);
            this.showUI();
        }
        updateArrows(error) {
            const length = this.state.errorBuffer.length;
            const errorIndex = this.state.errorIndex;
            if (this.elems.arrows) {
                this.elems.arrows.className = buildElemClass('arrows', { hidden: !error });
            }
            if (this.elems.prev) {
                this.elems.prev.disabled = !errorIndex;
            }
            if (this.elems.num) {
                this.elems.num.innerText = (errorIndex + 1) + '\u2009/\u2009' + length;
            }
            if (this.elems.next) {
                this.elems.next.disabled = errorIndex === length - 1;
            }
        }
    }

    const showJSError = new ShowJSError();
    if (typeof window !== 'undefined') {
        window.showJSError = showJSError;
    }

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

    var pageId = '';
    function setPageId(id) {
        pageId = id;
    }
    function getPageId() {
        return pageId;
    }

    var langsData = [
        {
            name: 'EN',
            value: 'en',
            default: true
        },
        {
            name: 'RU',
            value: 'ru',
        },
    ];
    var defaultLang = langsData.filter(function (item) { return Boolean(item.default); })[0].value;

    var keyset$1 = {
        'Supported': {
            'en': 'Supported',
            'ru': 'Поддерживаемые'
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
        'bit': {
            'en': 'bit',
            'ru': 'бит'
        },
        'Not detected': {
            'en': 'Not detected',
            'ru': 'Не обнаружено'
        },
        'Request': {
            'en': 'Request',
            'ru': 'Запрос'
        },
        'Details': {
            'en': 'Details',
            'ru': 'Подробности'
        },
        'GB': {
            'en': 'GB',
            'ru': 'ГБ'
        },
        'unsupported': {
            'en': 'unsupported',
            'ru': 'не поддерживается'
        },
        'Name': {
            'en': 'Name',
            'ru': 'Название'
        },
        'Stop': {
            'en': 'Stop',
            'ru': 'Стоп'
        },
        'Specify': {
            'en': 'Specify',
            'ru': 'Уточнить'
        },
        'Additionally': {
            'en': 'Additionally',
            'ru': 'Дополнительно'
        },
        'RAM': {
            'en': 'RAM',
            'ru': 'ОЗУ'
        },
        'Hz': {
            'en': 'Hz',
            'ru': 'Гц'
        },
        'Input': {
            'en': 'Input',
            'ru': 'Ввод'
        },
        'Reset': {
            'en': 'Reset',
            'ru': 'Сброс'
        },
        'Check device online': {
            'en': 'Check device online',
            'ru': 'Проверь устройство онлайн'
        },
        'Report a bug': {
            'en': 'Report a bug',
            'ru': 'Сообщить об ошибке'
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
        'Microphone name': {
            'en': 'Microphone name',
            'ru': 'Название микрофона'
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
        'Media Devices API is not supported.': {
            'en': 'Media Devices API is not supported.',
            'ru': 'Media Devices API не поддерживается.'
        },
        'MIME type': {
            'en': 'MIME type',
            'ru': 'MIME тип'
        },
        'Types of testing': {
            'en': 'Types of testing',
            'ru': 'Виды тестирования'
        },
        'Light theme': {
            'en': 'Light theme',
            'ru': 'Светлая тема'
        },
        'Dark theme': {
            'en': 'Dark theme',
            'ru': 'Тёмная тема'
        },
    };

    var config = {
        yaMapsApiKey: '82d7a38b-bad1-4b72-b66c-bfdaf838ba66',
        showJSErrorRepportUrl: 'https://github.com/hcodes/show-js-error/issues/new?title={title}&body={body}',
        metrikaCounterId: '95998062', // 97747983
    };

    function getPreferredColorScheme() {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return;
    }

    var localStorageInMemory = {};
    function setLocalStorageItem(key, value) {
        var ls = window.localStorage;
        localStorageInMemory[key] = String(value);
        try {
            ls.setItem(key, value);
        }
        catch ( /* */_a) { /* */ }
    }
    function getLocalStorageItem(key) {
        var ls = window.localStorage;
        try {
            return ls.getItem(key);
        }
        catch (_a) {
            return localStorageInMemory[key];
        }
    }

    var Signal = /** @class */ (function () {
        function Signal() {
            this.listeners = [];
        }
        Signal.prototype.addListener = function (callback) {
            if (callback) {
                this.listeners.push(callback);
            }
        };
        Signal.prototype.removeListener = function (callback) {
            this.listeners = this.listeners.filter(function (item) { return callback !== item; });
        };
        Signal.prototype.trigger = function (data) {
            this.listeners.forEach(function (item) { return item(data); });
        };
        Signal.prototype.clearListeners = function () {
            this.listeners.length = 0;
        };
        return Signal;
    }());

    var PAGE_THEME_LOCAL_STORAGE_KEY = 'page-theme';
    var DEFAULT_PAGE_THEME = 'dark';
    var pageTheme = DEFAULT_PAGE_THEME;
    function setPageTheme(theme) {
        if (theme === 'light') {
            document.documentElement.classList.add('page-theme_light');
            document.documentElement.classList.remove('page-theme_dark');
        }
        else {
            document.documentElement.classList.add('page-theme_dark');
            document.documentElement.classList.remove('page-theme_light');
        }
        pageTheme = theme;
    }
    function savePageTheme(theme) {
        setLocalStorageItem(PAGE_THEME_LOCAL_STORAGE_KEY, theme);
    }
    function wasSavedPageTheme() {
        return Boolean(getLocalStorageItem(PAGE_THEME_LOCAL_STORAGE_KEY));
    }
    function getPageTheme() {
        return pageTheme;
    }
    var pageThemeChangeSignal = new Signal();
    function addPageThemeListener(callback) {
        pageThemeChangeSignal.addListener(callback);
    }
    function removePageThemeListener(callback) {
        pageThemeChangeSignal.removeListener(callback);
    }
    function initPageTheme() {
        if (typeof window !== 'undefined' && window.matchMedia) {
            var query = window.matchMedia('(prefers-color-scheme: dark)');
            query.addEventListener('change', function () {
                var theme = getPreferredColorScheme() || DEFAULT_PAGE_THEME;
                pageThemeChangeSignal.trigger(theme);
            });
            var theme = getLocalStorageItem(PAGE_THEME_LOCAL_STORAGE_KEY) || getPreferredColorScheme();
            if (theme && isCorrectTheme(theme)) {
                setPageTheme(theme);
            }
        }
    }
    function isCorrectTheme(value) {
        return value === 'light' || value === 'dark';
    }

    var _a;
    addI18nKeyset(keyset$1);
    function getLang() {
        var lang = window.__appData__.lang || getLangFromNavigator();
        var result = langsData.filter(function (item) { return item.value === lang; });
        if (!result.length) {
            lang = defaultLang;
        }
        return lang;
    }
    function getLangFromNavigator() {
        return ((navigator.language || '').split('-')[0] || defaultLang);
    }
    setI18nLangs(langsData);
    addI18nKeyset(keyset$1);
    if (!isSsr) {
        showJSError.setSettings({
            reportUrl: config.showJSErrorRepportUrl,
        });
        hit(config.metrikaCounterId);
        var lang = getLang();
        setI18nLang(lang);
        setPageId(window.__appData__.pageId);
        withInstallApp();
        addHoverOnBody();
        initPageTheme();
        // ally
        (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.setAttribute('lang', lang);
    }

    var b$9 = block('link');
    function Link(props) {
        var className = classname(props.class, b$9({ theme: props.theme }));
        return (_("a", { target: props.target, class: className, href: props.href }, props.children));
    }

    var b$8 = block('lang-icon');
    function LangIcon(props) {
        return (_("span", { class: b$8({ lang: props.lang }) }));
    }

    var b$7 = block('lang-switcher-item');
    function LangSwitcherItem(props) {
        var value = props.value, name = props.name, selected = props.selected, url = props.url;
        return (_("li", { class: b$7() },
            _(Link, { href: url },
                _("span", null,
                    _(LangIcon, { lang: value }),
                    " ",
                    name,
                    selected ? ' ✓' : ''))));
    }

    function getPagePath(id, lang) {
        var idPath = id === 'index' ? '' : (id + '/');
        return "/".concat(lang || getI18nLang(), "/").concat(idPath);
    }

    var b$6 = block('lang-switcher');
    function LangSwitcher() {
        var _a = h(false), visible = _a[0], setVisible = _a[1];
        var currentLang = getI18nLang();
        var langs = getI18nLangs();
        var ref = A(null);
        var handleClick = q(function () {
            setVisible(true);
        }, [setVisible]);
        y(function () {
            var handleDocumentClick = function (event) {
                if (event.target && ref.current) {
                    var target = event.target;
                    if (ref.current.contains && !ref.current.contains(target)) {
                        setVisible(false);
                    }
                }
            };
            var handleDocumentKeydown = function (event) {
                if (event.code === 'Escape') {
                    setVisible(false);
                }
            };
            document.addEventListener('click', handleDocumentClick, false);
            document.addEventListener('keydown', handleDocumentKeydown, false);
            return function () {
                document.removeEventListener('click', handleDocumentClick, false);
                document.removeEventListener('keydown', handleDocumentKeydown, false);
            };
        }, [setVisible]);
        var currentLangItem = langs.filter(function (item) { return currentLang === item.value; })[0];
        return (_("div", { ref: ref, class: b$6() },
            _("div", { class: b$6('current'), onClick: handleClick },
                _(LangIcon, { lang: currentLangItem.value }),
                " ",
                currentLangItem.name),
            _("menu", { class: b$6('popup', { visible: visible }) }, langs.map(function (item) {
                var url = getPagePath(getPageId(), item.value);
                return (_(LangSwitcherItem, { key: item.value, name: item.name, value: item.value, selected: currentLang === item.value, url: url }));
            }))));
    }

    var b$5 = block('footer');
    function Footer() {
        return (_("footer", { class: b$5() },
            _("div", { class: b$5('item', { report: true }) },
                _(Link, { theme: "page-theme", target: "_blank", href: "https://github.com/vvideo/caniwatchvideo/issues/new" }, i18n('Report a bug'))),
            _("div", { class: b$5('item') },
                _(LangSwitcher, null)),
            _("div", { class: b$5('item') }, "\u00A9 Vvideo")));
    }

    var b$4 = block('main-menu');
    function MainMenu(props) {
        return (_("nav", { class: b$4() },
            _("ul", { class: b$4('list') }, props.items.filter(function (item) { return !item.hidden; }).map(function (item) {
                return (_("li", { class: b$4('item', { selected: item.selected }), key: item.id },
                    _("a", { class: b$4('link'), href: getPagePath(item.id) }, item.title),
                    " "));
            }))));
    }

    var pages = [
        {
            "header": {
                "en": "Check device online",
                "ru": "Проверь устройство онлайн"
            },
            "menuTitle": {
                "en": "",
                "ru": ""
            },
            "description": {
                "en": "Online testing and viewing detailed information about devices in your browser",
                "ru": "Тестирование и просмотр детальной информации об устройствах в вашем браузере онлайн"
            },
            "keywords": {
                "en": "audio, video, mouse, keyboard, gamepad, geo, gpu, battery, screen, midi, usb, mic, camera",
                "ru": "аудио, видео, мышь, клавиатура, джойстик, гео, gpu, батарея, экран, миди, юсб, микрофон, веб-камера"
            },
            "id": "index",
            "hidden": true,
            "isIndex": true
        },
        {
            "header": {
                "en": "Check Video",
                "ru": "Проверить видео"
            },
            "menuTitle": {
                "en": "Video",
                "ru": "Видео"
            },
            "id": "video",
            "indexMenuList": {
                "en": [
                    "Can I watch 4K video? ",
                    "Supported video codecs",
                    "Supported types of DRM"
                ],
                "ru": [
                    "Могу ли я смотреть 4К видео?",
                    "Поддерживаемые видеокодеки",
                    "Поддерживаемые типы DRM"
                ]
            }
        },
        {
            "header": {
                "en": "Check Audio",
                "ru": "Проверить аудио"
            },
            "menuTitle": {
                "en": "Audio",
                "ru": "Аудио"
            },
            "description": {
                "en": "View information about audio codecs and multichannel audio support in your browser",
                "ru": "Посмотреть информацию о поддержке аудиокодеков и многоканального звука в вашем браузере"
            },
            "keywords": {
                "en": "check dolby atmos, check dolby digital, check surround sound, check vibration, check speech syntesis",
                "ru": "проверить dolby atmos, проверить dolby digital, проверить многоканальый звук, аудиокодеки, проверить вибрацию, синтез речи"
            },
            "id": "audio",
            "indexMenuList": {
                "en": [
                    "Can I listen to surround sound?",
                    "Supported audio codecs",
                    "Speech Synthesis, Vibration"
                ],
                "ru": [
                    "Могу ли я услышать многоканальный звук?",
                    "Поддерживаемые аудиокодеки",
                    "Синтез речи, Вибрация"
                ]
            }
        },
        {
            "header": {
                "en": "Check Screen",
                "ru": "Проверить экран"
            },
            "menuTitle": {
                "en": "Screen",
                "ru": "Экран"
            },
            "description": {
                "en": "View screen resolution of monitor, laptop, smartphone or tablet online, support for multiple monitors",
                "ru": "Посмотреть разрешение экрана монитора, ноутбука, смартфона или планшета онлайн, поддержка нескольких мониторов"
            },
            "keywords": {
                "en": "logical size, actual size, resolution screen, hdr, device pixel ratio, max touch points, color depth, aspect ratio, color spaces, orientation, frame rate",
                "ru": "разрешение экрана, логический и фактический размер, HDR, соотношение сторон, глубина цвета, ориентация, частота обновления, цветовые пространства"
            },
            "id": "screen",
            "indexMenuList": {
                "en": [
                    "Screen Size, Aspect ratio, Frame rate",
                    "HDR support, Color depth, Color spaces",
                    "Multi-screen support"
                ],
                "ru": [
                    "Размер экрана, Соотношение сторон, Частота обновления",
                    "Поддержка HDR, Глубина цвета, Цветовые пространства",
                    "Поддержка нескольких экранов"
                ]
            }
        },
        {
            "header": {
                "en": "Check Webcamera",
                "ru": "Проверить веб-камеру"
            },
            "menuTitle": {
                "en": "Webcamera",
                "ru": "Веб-камера"
            },
            "description": {
                "en": "Online testing of webcam with or without microphone",
                "ru": "Онлайн-тестирование веб-камеры с микрофоном или без микрофона"
            },
            "keywords": {
                "en": "web camera, microphone, web camera with microphone, web camera without microphone, low resolution of camera, high resolution of camera, high rate of camera",
                "ru": "веб-камера, микрофон, веб-камера с микрофоном, веб-камера без микрофона, веб-камера с низким разрешением, веб-камера с высоким разрешением, веб-камера с высокой частотой обновления"
            },
            "id": "camera",
            "indexMenuList": {
                "en": [
                    "Testing webcam",
                    "Information about webcam",
                    "Low and high resolution webcam"
                ],
                "ru": [
                    "Тестирование веб-камеры",
                    "Расширенная информация о веб-камере",
                    "Низкое и высокое разрешение веб-камеры"
                ]
            }
        },
        {
            "header": {
                "en": "Check Microphone",
                "ru": "Проверить микрофон"
            },
            "menuTitle": {
                "en": "Microphone",
                "ru": "Микрофон"
            },
            "description": {
                "en": "Online testing of microphone with ability to hear yourself",
                "ru": "Онлайн-тестирование микрофона с возможностью слышать себя"
            },
            "keywords": {
                "en": "microphone, hear yourself, auto gain control, channel count, echo cancellation, noise suppression, sample rate, sample size",
                "ru": "микрофон, слышать себя, автоматическая регулировка усиления, количество каналов, эхоподавление, шумоподавление, размер семпла"
            },
            "id": "mic",
            "indexMenuList": {
                "en": [
                    "Testing microphone",
                    "Information about microphone",
                    "Ability to hear yourself"
                ],
                "ru": [
                    "Тестирование микрофона",
                    "Информация о микрофоне",
                    "Возможность слышать себя"
                ]
            }
        },
        {
            "header": {
                "en": "Check GPU",
                "ru": "Проверить GPU"
            },
            "menuTitle": {
                "en": "GPU",
                "ru": "GPU"
            },
            "id": "gpu",
            "indexMenuList": {
                "en": [
                    "Detailed information about GPU",
                    "GPU name and vendor",
                    "WebGPU"
                ],
                "ru": [
                    "Детальная информация о GPU",
                    "Название и производитель GPU",
                    "WebGPU"
                ]
            },
            "description": {
                "en": "View detailed information about your GPU online",
                "ru": "Просмотр детальной информации о графическом процессоре онлайн"
            },
            "keywords": {
                "en": "GPU, GPU vendor, GPU name, Lower power GPU, High power GPU",
                "ru": "производитель GPU, название GPU, GPU, графический процессор, графический процессор с пониженной мощностью, графический процессор с повышенной мощностью"
            }
        },
        {
            "header": {
                "en": "Check Mouse",
                "ru": "Проверить мышку"
            },
            "menuTitle": {
                "en": "Mouse",
                "ru": "Мышь"
            },
            "id": "mouse",
            "indexMenuList": {
                "en": [
                    "Testing mouse",
                    "Displaying mouse button clicks",
                    "Support for additional buttons"
                ],
                "ru": [
                    "Тестирование мышки",
                    "Отображение нажатий кнопок мышки",
                    "Поддержка дополнительных кнопок"
                ]
            },
            "description": {
                "en": "Mouse click testing online",
                "ru": "Тестирование нажатий кнопок мышки онлайн"
            },
            "keywords": {
                "en": "left mouse click, right mouse click, middle mouse click, mouse, wheel mouse",
                "ru": "левая кнопка мышки, правая кнопка мышки, средняя кнопка мышки, колесо прокрутки мышки"
            }
        },
        {
            "header": {
                "en": "Check Keyboard",
                "ru": "Проверить клавиатуру"
            },
            "menuTitle": {
                "en": "Keyboard",
                "ru": "Клавиатура"
            },
            "id": "keyboard",
            "indexMenuList": {
                "en": [
                    "Displaying keystrokes on keyboard",
                    "Displaying keyboard key codes",
                    "Keyboards: Windows, Mac, MacBook, iPad"
                ],
                "ru": [
                    "Отображение нажатий клавиш на клавиатуре",
                    "Отображение кодов клавиш клавиатуры",
                    "Клавиатуры: Windows, Mac, MacBook, iPad"
                ]
            },
            "description": {
                "en": "Online keyboard key testing",
                "ru": "Тестирование клавиш клавиатуры онлайн"
            },
            "keywords": {
                "en": "keyboard, keyboard keys, num lock, scroll lock, led indicators, CTRL, SHIT, MET",
                "ru": "клавиатура, клавиши клавиатуры, индикаторы клавиатуры, CTRL, SHIFT, META"
            }
        },
        {
            "header": {
                "en": "Displaying Сode of Pressed Key",
                "ru": "Отображение кода нажатой клавиши"
            },
            "menuTitle": {
                "en": "Key codes",
                "ru": "Коды клавиш"
            },
            "id": "keycodes",
            "hidden": true,
            "description": {
                "en": "Display keyboard key codes online",
                "ru": "Отображение кодов клавиш клавиатуры онлайн"
            },
            "keywords": {
                "en": "key codes, keydown event",
                "ru": "Коды клавиш клавиатуры, keydown событие"
            }
        },
        {
            "header": {
                "en": "Check Gamepad",
                "ru": "Проверить джойстик"
            },
            "menuTitle": {
                "en": "Gamepad",
                "ru": "Джойстик"
            },
            "id": "gamepad",
            "indexMenuList": {
                "en": [
                    "Display of joystick button presses",
                    "Vibration check",
                    "Joystick support: PS3, PS4, PS5, Xbox360 and others"
                ],
                "ru": [
                    "Отображение нажатий кнопок джойстика",
                    "Проверка вибрации джойстика",
                    "Поддержка джойстиков: PS3, PS4, PS5, Xbox360 и другие"
                ]
            },
            "description": {
                "en": "Online testing joystick buttons, triggers and axes",
                "ru": "Тестирование кнопок, триггеров и осей джойстика онлайн"
            },
            "keywords": {
                "en": "gamepad axes, gamepad buttons, gamepad triggers",
                "ru": "оси джойстика, кнопки джойстика, триггеры джойстика"
            }
        },
        {
            "header": {
                "en": "Check Storage",
                "ru": "Проверить хранилище"
            },
            "menuTitle": {
                "en": "Storage",
                "ru": "Хранилище"
            },
            "id": "storage",
            "indexMenuList": {
                "en": [
                    "Types of supported storage",
                    "Support of persistent storage",
                    "Storage quota for origin"
                ],
                "ru": [
                    "Виды поддерживаемых хранилищ",
                    "Поддержка постоянного хранилища",
                    "Квота хранилища на домен"
                ]
            },
            "description": {
                "en": "View supported storage types in your browser",
                "ru": "Просмотр поддерживаемых типов хранилищ в браузере"
            },
            "keywords": {
                "en": "cookies, local storage, session storage, indexeddb, origin private file system",
                "ru": "cookies, local storage, session storage, indexeddb, origin private file system"
            }
        },
        {
            "header": {
                "en": "Check Network",
                "ru": "Проверить сеть"
            },
            "menuTitle": {
                "en": "Network",
                "ru": "Сеть"
            },
            "id": "network",
            "indexMenuList": {
                "en": [
                    "IPv4, IPv6",
                    "Downlink",
                    "RTT"
                ],
                "ru": [
                    "IPv4, IPv6",
                    "Downlink",
                    "RTT"
                ]
            },
            "description": {
                "en": "Display information about your network in browser",
                "ru": "Отображение информации о вашей сети в браузере"
            },
            "keywords": {
                "en": "IPv4, IPv6, Downlink, RTT",
                "ru": "IPv4, IPv6, Downlink, RTT"
            }
        },
        {
            "header": {
                "en": "Check Geo",
                "ru": "Проверить геолокацию"
            },
            "menuTitle": {
                "en": "Geo",
                "ru": "Гео"
            },
            "id": "geo",
            "indexMenuList": {
                "en": [
                    "Latitude",
                    "Longitude",
                    "Displaying location on map"
                ],
                "ru": [
                    "Широта",
                    "Долгота",
                    "Отображение геопозиции на карте"
                ]
            },
            "description": {
                "en": "Displaying your geolocation information in the browser",
                "ru": "Отображение информации о вашей геопозиции в браузере"
            },
            "keywords": {
                "en": "latitude, longitude, displaying location on map",
                "ru": "широта, долгота, отображение геопозиции на карте"
            }
        },
        {
            "header": {
                "en": "Check MIDI Keyboard",
                "ru": "Проверить MIDI-клавиатуру"
            },
            "menuTitle": {
                "en": "MIDI",
                "ru": "MIDI"
            },
            "id": "midi",
            "hidden": true,
            "indexMenuList": {
                "en": [
                    "Product name",
                    "Serial number",
                    "Detailed MIDI info"
                ],
                "ru": [
                    "Название устройства",
                    "Серийный номер",
                    "Детальная информация o MIDI"
                ]
            },
            "description": {
                "en": "Testing MIDI keyboard in browser",
                "ru": "Тестирование MIDI-клавиатуры в браузере"
            },
            "keywords": {
                "en": "MIDI",
                "ru": "MIDI"
            }
        },
        {
            "header": {
                "en": "View Info About USB Device",
                "ru": "Посмотреть информацию о USB-устройстве"
            },
            "menuTitle": {
                "en": "USB",
                "ru": "USB"
            },
            "id": "usb",
            "indexMenuList": {
                "en": [
                    "Product name",
                    "Serial number",
                    "Detailed USB info"
                ],
                "ru": [
                    "Название устройства",
                    "Серийный номер",
                    "Детальная информация"
                ]
            },
            "description": {
                "en": "View detailed information about a USB device in browser",
                "ru": "Посмотреть детальную информацию о USB-устройстве в браузере"
            },
            "keywords": {
                "en": "product name, serial number, detailed USB info",
                "ru": "название устройства, серийный номер, детальная информация"
            }
        },
        {
            "menuTitle": {
                "en": "Bluetooth",
                "ru": "Bluetooth"
            },
            "id": "bluetooth",
            "hidden": true,
            "indexMenuList": {
                "en": [
                    "Product name",
                    "Serial number",
                    "Detailed USB info"
                ],
                "ru": [
                    "Название устройства",
                    "Серийный номер",
                    "Детальная информация"
                ]
            },
            "description": {
                "en": "Просмотр детальной информации о bluetooth-устройстве онлайн",
                "ru": "View detailed information about a Bluetooth device online"
            },
            "keywords": {
                "en": "bluetooth",
                "ru": "bluetooth"
            }
        },
        {
            "menuTitle": {
                "en": "Sensor",
                "ru": "Сенсор"
            },
            "id": "sensor",
            "hidden": true,
            "indexMenuList": {
                "en": [
                    "Accelerometer, Ammbient light sensor",
                    "Gravity sensor",
                    "Gyroscope, Magnetometer"
                ],
                "ru": [
                    "Акселерометр, Датчик освещенности",
                    "Датчик силы тяжести",
                    "Гироскоп, Магнитометр"
                ]
            },
            "description": {
                "en": "View detailed information about sensors online",
                "ru": "Просмотр детальной информации о датчиках онлайн"
            },
            "keywords": {
                "en": "accelerometer, ammbient light sensor, gravity sensor, gyroscope, linear acceleration sensor, magnetometer, orientation sensor",
                "ru": "акселерометр, датчик освещенности, датчик силы тяжести, гироскоп, датчик линейного ускорения, магнитометр, датчик ориентации"
            }
        },
        {
            "header": {
                "en": "View Info About Platform",
                "ru": "Посмотреть информацию о платформе"
            },
            "menuTitle": {
                "en": "Platform",
                "ru": "Платформа"
            },
            "id": "platform",
            "indexMenuList": {
                "en": [
                    "Detailed information about platform",
                    "Permissions",
                    "RAM and number of processor cores"
                ],
                "ru": [
                    "Информация о платформе",
                    "Разрешения",
                    "ОЗУ и количество ядер процессора"
                ]
            },
            "description": {
                "en": "View detailed platform information in your browser",
                "ru": "Посмотреть детальную информацию о платформе в браузере"
            },
            "keywords": {
                "en": "permissions, RAM, number of processor core ",
                "ru": "разрешения, ОЗУ, количество ядер процессора"
            }
        },
        {
            "header": {
                "en": "Check Battery",
                "ru": "Проверить батарею"
            },
            "menuTitle": {
                "en": "Battery",
                "ru": "Батарея"
            },
            "id": "battery",
            "indexMenuList": {
                "en": [
                    "Battery status",
                    "Battery charge level",
                    "Battery charge and discharge time"
                ],
                "ru": [
                    "Статус батареи",
                    "Уровень заряда батареи",
                    "Время заряда и разряда батареи"
                ]
            },
            "description": {
                "en": "View detailed battery status information",
                "ru": "Просмотр детальной информации о статусе батареи"
            },
            "keywords": {
                "en": "battery status, battery charge level, battery charge and discharge time",
                "ru": "статус батареи, уровень заряда батареи, время заряда и разряда батареи"
            }
        },
        {
            "header": {
                "en": "View Local Fonts",
                "ru": "Посмотреть локальные шрифты"
            },
            "menuTitle": {
                "en": "Fonts",
                "ru": "Шрифты"
            },
            "id": "fonts",
            "indexMenuList": {
                "en": [
                    "List of local fonts",
                    "Group by font family",
                    "Searching and viewing fonts"
                ],
                "ru": [
                    "Список локальных шрифтов",
                    "Группировка шрифтов по семейству",
                    "Поиск и просмотр шрифтов"
                ]
            },
            "description": {
                "en": "Viewing local fonts in browser",
                "ru": "Просмотр локальных шрифтов в браузере"
            },
            "keywords": {
                "en": "list of local fonts, group by font family",
                "ru": "список локальных шрифтов, группировка шрифтов по семейству"
            }
        },
        {
            "menuTitle": {
                "en": "404",
                "ru": "404"
            },
            "id": "error404",
            "hidden": true,
            "sitemap": false,
            "isError": true,
            "description": {
                "en": "Page not found",
                "ru": "Страница не найдена"
            }
        },
        {
            "menuTitle": {
                "en": "Test dead pixels",
                "ru": "Тестирование битых пикселей"
            },
            "id": "test-dead-pixels",
            "hidden": true,
            "description": {
                "en": "Testing your monitor or TV for dead pixels",
                "ru": "Тестирование битых пикселей вашего монитора или ТВ"
            },
            "keywords": {
                "en": "dead pixels",
                "ru": "битые пиксели"
            }
        }
    ];

    function Menu() {
        var id = getPageId();
        var items = pages.map(function (item) {
            var selected = item.id === id;
            return __assign(__assign({}, item), { url: getPagePath(item.id), title: i18nWithKeyset(item.menuTitle), selected: selected });
        });
        return (_(MainMenu, { items: items }));
    }

    var b$3 = block('theme-switcher');
    function ThemeSwitcher() {
        var _a = h(getPageTheme()), theme = _a[0], setTheme = _a[1];
        var handleClick = q(function () {
            var currentTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(currentTheme);
            setPageTheme(currentTheme);
            savePageTheme(currentTheme);
        }, [theme, setTheme]);
        y(function () {
            var handler = function (currentTheme) {
                if (!wasSavedPageTheme()) {
                    setTheme(currentTheme);
                    setPageTheme(currentTheme);
                }
            };
            addPageThemeListener(handler);
            return function () {
                removePageThemeListener(handler);
            };
        }, [setTheme]);
        var title = theme === 'light' ? i18n('Dark theme') : i18n('Light theme');
        return (_("div", { class: b$3({ theme: theme }), onClick: handleClick, title: title }));
    }

    var b$2 = block('header');
    function Header() {
        return (_("header", { class: b$2() },
            _(Link, { theme: "page-theme", href: getPagePath('index') },
                _("span", null,
                    _("span", { class: b$2('logo') }),
                    i18n('Check device online'))),
            _(ThemeSwitcher, null)));
    }

    var b$1 = block('page-title');
    function PageTitle(props) {
        return (_("h1", { class: b$1() }, props.children));
    }

    var b = block('page');
    function Page(props) {
        return (_("div", { class: b() },
            _(Header, null),
            props.withoutMenu ? '' : (_(Menu, null)),
            props.title ? (_(PageTitle, null, props.title)) : '',
            props.children,
            _(Footer, null)));
    }

    var keyset = {
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
    };

    addI18nKeyset(keyset);
    function GamepadPage() {
        return (_(Page, { title: i18n('Gamepad') },
            _(GamepadList, null)));
    }

    function renderToRoot(Component) {
        return B$1(_(Component, null), document.querySelector('.root'));
    }

    renderToRoot(GamepadPage);

}));
