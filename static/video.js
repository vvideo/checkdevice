(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var n,l$1,u$1,i$1,o$1,r$1,f$1,e$1,c$1,s$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$y(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y$1(i)?g(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a--:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&(f==r-a?a-=f-r:a++),f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b$y(m,M),h.constructor=T,h.render=q$1),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l$1.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(L=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e;}else u.__e=t.__e,u.__k=t.__k;l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A$1(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A$1(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A$1(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A$1(l,s,g,m[s],o));}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function V(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$y.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b$y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b$y.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$1=0,c$1=F(!1),s$1=F(!0);

    var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function A(n){return o=5,T(function(){return {current:n}},[])}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

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

    const isSsr$1 = typeof window === 'undefined';

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
        if (isSsr$1) {
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
        if (isSsr$1 || !window.MediaSource) {
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
        if (isSsr$1) {
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
        if (isSsr$1) {
            return false;
        }
        if (isFirefox() && getFirefoxVersion() >= 69) {
            return true;
        }
        const video = document.createElement('video');
        return 'pictureInPictureEnabled' in document || 'webkitPresentationMode' in video;
    }
    function isDocumentPipSupported() {
        if (isSsr$1) {
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

    var b$x = block('badge');
    function Badge(props) {
        var _a, _b;
        return (_("div", { class: b$x({
                type: props.type,
                background: props.background,
                disabled: props.disabled,
                hidden: props.hidden,
                size: props.size,
                click: props.click,
            }) },
            ((_a = props.top) === null || _a === void 0 ? void 0 : _a.text) ? (_("div", { class: b$x('top-text'), title: props.top.title }, props.top.text)) : '',
            _("div", { class: b$x('body') }, props.text),
            ((_b = props.bottom) === null || _b === void 0 ? void 0 : _b.text) ? (_("div", { class: b$x('bottom-text'), title: props.bottom.title }, props.bottom.text)) : ''));
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

    function ValueInProgress() {
        return (_("span", null, "\u2026"));
    }

    var b$w = block('screen-badge-details');
    function ScreenBadgeDetails(props) {
        if (isSsr) {
            return (_(ScreenBadgeDetailsSsr, null));
        }
        var screenSize = props.withDevicePixelRatio ?
            [props.width, props.height, props.devicePixelRatio] :
            [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio];
        return (_("ul", { class: b$w() },
            _("li", { class: b$w('item') },
                i18n('Size'),
                ": ",
                screenSize.join('×')),
            _("li", { class: b$w('item') },
                i18n('Aspect ratio'),
                ": ",
                calcAspectRatio(Math.floor(props.width), Math.floor(props.height)).value),
            hasZoom() ? (_("li", { class: b$w('item') },
                "\u26A0 ",
                i18n('Please reset zoom in the page'))) : '',
            _("li", { class: b$w('item') },
                i18n('Color depth'),
                ": ",
                props.colorDepth,
                " ",
                i18n('bit')),
            _("li", { class: b$w('item') }, props.colorSpaces && props.colorSpaces.length ? prepareColorSpaces(props.colorSpaces) : ''),
            typeof props.isPrimary === 'undefined' ? '' : (_("li", { class: b$w('item') },
                i18n('Primary'),
                ": ",
                getChecked(props.isPrimary))),
            typeof props.isInternal === 'undefined' ? '' : (_("li", { class: b$w('item') },
                i18n('Internal'),
                ": ",
                getChecked(props.isInternal)))));
    }
    function ScreenBadgeDetailsSsr() {
        return (_("ul", { class: b$w() },
            _("li", { class: b$w('item') },
                i18n('Size'),
                ": ",
                _(ValueInProgress, null)),
            _("li", { class: b$w('item') },
                i18n('Aspect ratio'),
                ": ",
                _(ValueInProgress, null)),
            _("li", { class: b$w('item') },
                i18n('Color depth'),
                ": ",
                _(ValueInProgress, null)),
            _("li", { class: b$w('item') }, prepareColorSpaces(['srgb'])),
            _("li", { class: b$w('item') },
                i18n('Primary'),
                ": ",
                _(ValueInProgress, null)),
            _("li", { class: b$w('item') },
                i18n('Internal'),
                ": ",
                _(ValueInProgress, null))));
    }

    var b$v = block('screen-badge');
    function ScreenBadge(props) {
        var _a = h(true), withDevicePixelRatio = _a[0], setWithDevicePixelRatio = _a[1];
        var handleClick = q(function () {
            setWithDevicePixelRatio(!withDevicePixelRatio);
        }, [withDevicePixelRatio]);
        var labelContent = props.label ? (_("div", { class: b$v('label') }, props.label)) : '';
        var background = isLargerFullHd(Math.min(props.width, props.height) * props.devicePixelRatio) ? 'gold' : 'white';
        return (_("div", { class: b$v(), onClick: handleClick },
            labelContent,
            _(Badge
            // TODO: Temporarily hide badge for mobile devices
            , { 
                // TODO: Temporarily hide badge for mobile devices
                text: isMobile() ? '' : getResolutionBadge(Math.max(props.width, props.height) * props.devicePixelRatio, Math.min(props.width, props.height) * props.devicePixelRatio) || '', type: "4k", click: true, background: background, top: {
                    text: isMobile() ? '' : (_("span", { style: "font-weight:bold" }, props.isHdr ? 'HDR' : '\u00A0')),
                }, bottom: {
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
                } })));
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

    var b$u = block('section');
    function Section(props) {
        if (!props.children) {
            return null;
        }
        var className = classname(b$u(), props.class);
        return props.name ? (_("section", { class: className },
            _("h2", { class: b$u('name') }, props.name),
            _("div", { class: b$u('body') }, props.children))) : (_("div", { class: b$u() }, props.children));
    }

    var useForceUpdate = function () {
        var _a = h({}), updateState = _a[1];
        return q(function () { return updateState({}); }, []);
    };

    var b$t = block('button');
    function Button(props) {
        var disabled = props.disabled, size = props.size, theme = props.theme, onClick = props.onClick, title = props.title;
        var className = classname(props.class, b$t({ theme: theme, size: size, disabled: disabled }));
        var handleClick = q(function () {
            if (disabled) {
                return;
            }
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }, [disabled, onClick]);
        return (_("button", { title: title, class: className, disabled: disabled, onClick: handleClick }, props.children));
    }

    var b$s = block('screen-badges');
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
            if (!screenInfo.isDenied) {
                screenInfo.getScreenDetails()
                    .then(handleScreenChange)
                    .catch(handleScreenChange);
            }
            return function () {
                screenInfo.removeListener(handleScreenChange);
            };
        }, []);
        var screenInfoData = screenInfo.get();
        var content = screenInfoData.screens.map(function (item) {
            var props = __assign({ isScreenDetails: screenInfo.isScreenDetails }, item);
            return (_(ScreenBadge, __assign({}, props)));
        });
        var name = screenInfoData.screens.length > 1 ? i18n('Screens') : i18n('Screen');
        return (_(Section, { name: name },
            _("div", null,
                !screenInfo.isDenied && screenInfo.needUserActivity ? (_("div", { class: b$s('specify') },
                    _(Button, { size: "s", theme: "red", onClick: handleClick }, i18n('Specify')))) : '',
                content,
                !screenInfo.isScreenDetails && (typeof screen !== 'undefined' && screen.isExtended === true) ? (_("div", { class: b$s('additional') },
                    "\u26A0\uFE0F ",
                    i18n('Additional monitor detected'))) : '')));
    }

    var b$r = block('codec');
    function Codec(props) {
        var color = props.disabled ? 'black' : (props.color || 'black');
        var tooltip = props.tooltip ? (_("div", { class: b$r('tooltip') }, props.tooltip)) : '';
        return (_("div", { class: b$r({
                color: color,
                border: props.border,
                disabled: props.disabled,
            }) },
            tooltip,
            _("div", { class: b$r('name') }, props.name)));
    }

    var b$q = block('column');
    function Column(props) {
        return (_("div", { class: b$q() },
            _("div", { title: props.title, class: b$q('category', { disabled: props.disabled }) }, props.name),
            _("div", { class: b$q('body') }, props.children)));
    }

    var b$p = block('columns');
    function Columns(props) {
        return (_("div", { class: b$p() }, props.children));
    }

    function getIsTypeSupportedProps(isTypeSupported) {
        return !isSsr && window.MediaSource ? {
            value: String(isTypeSupported),
            color: isTypeSupported ? 'green' : 'red',
        } : {
            value: (_("span", { style: "font-weight:bold" }, i18n('unsupported'))),
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
    // function getCodecType(mediaElementType: string) {
    //     if (mediaElementType === 'audio') {
    //         return i18n('Audio codec');
    //     }
    //     if (mediaElementType === 'video') {
    //         return i18n('Video codec');
    //     }
    //     return i18n('Codec');
    // }
    var b$o = block('codec-details');
    function CodecDetails(props) {
        if (typeof props === 'boolean') {
            return '';
        }
        var canPlayTypeResult = getCanPlayTypeProps(props.canPlayType);
        var isTypeSupportedResult = getIsTypeSupportedProps(props.isTypeSupported);
        return (_("div", { class: b$o() },
            _("div", { class: b$o('mimetype') },
                i18n('MIME type'),
                ": ",
                _("code", null, props.contentType)),
            _("div", { class: b$o('types') },
                i18n('Types of testing'),
                ":"),
            _("ul", { class: b$o('list') },
                _("li", { class: b$o('item') },
                    _("code", null,
                        [props.mediaElementType],
                        ".canPlayType(): ",
                        _("span", { style: "color:".concat(canPlayTypeResult.color) }, canPlayTypeResult.value))),
                _("li", { class: b$o('item') },
                    _("code", null,
                        "MediaSource.isTypeSupported(): ",
                        _("span", { style: "color:".concat(isTypeSupportedResult.color) }, isTypeSupportedResult.value))))));
    }

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
            { supported: isDolbyVisionSupported(), name: (_("span", null,
                    _("b", null, "Dolby"),
                    " Vision")), color: 'black', border: 'white' },
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
        return (_(Columns, null,
            _("div", null,
                supported.length ? (_(Column, { title: i18n('Supported video codecs'), name: i18n('Supported') }, supported)) : i18n('No supported video codecs.'),
                unsupported.length ? (_(Column, { disabled: true, title: i18n('Unsupported video codecs'), name: i18n('Unsupported') }, unsupported)) : '')));
    }

    var b$n = block('link');
    function Link(props) {
        var className = classname(props.class, b$n({ theme: props.theme }));
        return (_("a", { target: props.target, class: className, href: props.href }, props.children));
    }

    var b$m = block('hdcp-link');
    function HdcpLink(props) {
        return (_("span", { class: b$m() },
            _(Link, { href: "https://vvideo.github.io/hdcp/index.html", target: "_blank" }, "HDCP"),
            ": ",
            props.version));
    }

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
            return (_("span", null,
                i18n('Key system'),
                ": ",
                items[0]));
        }
        return (_("span", null, "".concat(i18n('Key systems'), ": \n") + items.map(function (item) { return "\u2022 ".concat(item); }).join('\n')));
    }

    function getText(items) {
        var length = items.length;
        if (!length) {
            return "".concat(i18n('Security levels'), ": ").concat(i18n('Not detected'));
        }
        if (length === 1) {
            return "".concat(i18n('Security level'), ": ").concat(items[0]);
        }
        return "".concat(i18n('Security levels'), ": ").concat(items.join(', '));
    }
    function SecurityLevels(_a) {
        var items = _a.items;
        return (_("span", null, getText(items)));
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

    var b$l = block('widevine-badge');
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
        return hasWidevine ? (_("div", { class: b$l() },
            _(Badge, { text: "Widevine", background: "white", top: { text: 'Google' }, bottom: {
                    text: (_("ul", { class: b$l('list') },
                        _("li", { class: b$l('item') },
                            _(SecurityLevels, { items: levels })),
                        _("li", { class: b$l('item') },
                            _(KeySystems, { items: [WIDEWINE_KEY_SYSTEM] })),
                        _("li", { class: b$l('item') }, encryptionSchemes.length ? "".concat(i18n('Encryption schemes'), ": ").concat(encryptionSchemes) : ''),
                        _("li", { class: b$l('item') },
                            _(HdcpLink, { version: hdcpVersion })))),
                } }))) : null;
    }

    var b$k = block('clearkey-badge');
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
        return hasClearkey ? (_("div", { class: b$k() },
            _(Badge, { text: "ClearKey", background: "white", size: "small", bottom: {
                    text: (_("ul", { class: b$k('list') },
                        _("li", { class: b$k('item') },
                            _(KeySystems, { items: keySystemsItems$1 })),
                        _("li", { class: b$k('item') }, encryptionSchemes.length ? "".concat(i18n('Encryption schemes'), ": ").concat(encryptionSchemes) : '')))
                } }))) : null;
    }

    var b$j = block('fairplay-badge');
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
        return hasFairplay ? (_("div", { class: b$j() },
            _(Badge, { text: "FairPlay", background: "white", top: { text: 'Apple' }, bottom: {
                    text: (_("ul", { class: b$j('list') },
                        _("li", { class: b$j('item') },
                            _(KeySystems, { items: keySystems })),
                        _("li", { class: b$j('item') }, encryptionSchemes.length ? "".concat(i18n('Encryption schemes'), ": ").concat(encryptionSchemes) : '')))
                } }))) : null;
    }

    var b$i = block('playready-badge');
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
        return hasPlayready ? (_("div", { class: b$i() },
            _(Badge, { text: "PlayReady", background: "white", top: { text: 'Microsoft' }, bottom: {
                    text: (_("ul", { class: b$i('list') },
                        _("li", { class: b$i('item') },
                            _(SecurityLevels, { items: levels })),
                        _("li", { class: b$i('item') },
                            _(KeySystems, { items: keySystemsItems })),
                        _("li", { class: b$i('item') }, encryptionSchemes.length ? "".concat(i18n('Encryption schemes'), ": ").concat(encryptionSchemes) : ''),
                        _("li", { class: b$i('item') },
                            _(HdcpLink, { version: hdcpVersion }))))
                } }))) : null;
    }

    var b$h = block('primetime-badge');
    function PrimetimeBadge() {
        var _a = h(false), hasPrimetime = _a[0], setPrimetime = _a[1];
        isPrimetimeSupported().then(function (result) {
            setPrimetime(result);
        });
        return (_("div", { class: b$h() }, hasPrimetime && (_(Badge, { text: "Primetime", background: "white", top: { text: 'Adobe' }, bottom: {
                text: (_(KeySystems, { items: [PRIMETIME_KEY_SYSTEM] })),
            } }))));
    }

    var b$g = block('drm-badges');
    function DrmBadges() {
        return (_("div", { class: b$g() },
            _(WidevineBadge, null),
            _(PlayreadyBadge, null),
            _(FairplayBadge, null),
            _(PrimetimeBadge, null),
            _(ClearkeyBadge, null)));
    }

    var b$f = block('native-streaming');
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
            return (_("li", null,
                item.label,
                ": ",
                getChecked(item.supported)));
        });
        return (_("ul", { class: b$f() }, result));
    }

    var b$e = block('result');
    function Result(props) {
        var text = props.text;
        var type = '';
        if (isSsr) {
            return null;
        }
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
        return (_("span", { class: b$e({ type: type }) },
            text,
            props.details ? (_("span", { class: b$e('details') }, props.details)) : ''));
    }

    var b$d = block('active-question');
    function ActiveQuestion(props) {
        var _a = h(false), opened = _a[0], setOpened = _a[1];
        var callback = q(function () {
            setOpened(!opened);
        }, [opened]);
        return (_("div", { class: b$d({ opened: opened }) },
            _("div", { class: b$d('head'), onClick: callback },
                _("div", { class: b$d('plus', { opened: opened }) }),
                _("div", { class: b$d('question') }, props.head)),
            _("div", { class: b$d('body') }, props.children)));
    }

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
        var head = (_("span", null,
            i18n('Can I watch 4K video?'),
            '\u00a0',
            _(Result, { value: mainAnswer })));
        return (_(ActiveQuestion, { head: head },
            _("ul", null,
                _("li", null,
                    i18n('Is the screen larger than 2K?'),
                    '\u00a0',
                    _(Result, { value: largeThan2K })),
                _("li", null,
                    i18n('Supports one of the video codecs?'),
                    '\u00a0',
                    _(Result, { value: true }),
                    _("ul", null,
                        _("li", null,
                            _(Codec, { name: "VP9", color: "green", disabled: !isVp9.any, tooltip: CodecDetails(isVp9) }),
                            '\u00a0',
                            _(Result, { value: isVp9.any })),
                        _("li", null,
                            _(Codec, { name: "H.265", color: "orange", disabled: !isHevc.any, tooltip: CodecDetails(isHevc) }),
                            '\u00a0',
                            _(Result, { value: isHevc.any })),
                        _("li", null,
                            _(Codec, { name: "AV1", color: "yellow", disabled: !isAv1.any, tooltip: CodecDetails(isAv1) }),
                            '\u00a0',
                            _(Result, { value: isAv1.any })))))));
    }

    var b$c = block('info-link');
    function InfoLink(props) {
        return (_("span", { class: b$c() },
            _("a", { class: b$c('link'), href: props.href, title: props.title, target: "_blank" }, "\u24D8")));
    }

    function QuestionHdr() {
        var isVp910Bit = isVp9Profile2Level110BitSupported();
        var isHevcMain10 = isHevcMain10Supported();
        var isAv1Main10 = isAV1Main10Supported();
        var isHdr = !isSsr && isHighDynamicRangeSupported();
        var isVideoHdr = !isSsr && isHighVideoDynamicRangeSupported();
        var mainAnswer = Boolean(isHdr || isVideoHdr) && Boolean(isVp910Bit.any || isHevcMain10.any || isAv1Main10.any);
        var head = (_("span", null,
            i18n('Can I watch HDR video?'),
            " ",
            _(Result, { value: mainAnswer })));
        return (_(ActiveQuestion, { head: head },
            _("ul", null,
                _("li", null,
                    _(QuestionHdrHead, { isHdr: Boolean(isHdr), isVideoHdr: Boolean(isVideoHdr) })),
                _("li", null,
                    i18n('Supports one of the video codecs?'),
                    '\u00a0',
                    _(Result, { value: Boolean(isVp910Bit || isHevcMain10 || isAv1Main10) }),
                    _("ul", null,
                        _("li", null,
                            _(Codec, { name: "VP9 Profile 2 Level 1 10 bits", color: "green", disabled: !isVp910Bit.any, tooltip: CodecDetails(isVp910Bit) }),
                            '\u00a0',
                            _(Result, { value: isVp910Bit.any })),
                        _("li", null,
                            _(Codec, { name: "H.265 Main 10", color: "orange", disabled: !isHevcMain10.any, tooltip: CodecDetails(isHevcMain10) }),
                            '\u00a0',
                            _(Result, { value: isHevcMain10.any })),
                        _("li", null,
                            _(Codec, { name: "AV1 Main 10", color: "yellow", disabled: !isAv1Main10.any, tooltip: CodecDetails(isAv1Main10) }),
                            '\u00a0',
                            _(Result, { value: isAv1Main10.any })))))));
    }
    function QuestionHdrHead(props) {
        var isHdr = Boolean(props.isHdr);
        var isVideoHdr = Boolean(props.isVideoHdr);
        // For Firefox on MacOS
        if (!isHdr && isVideoHdr) {
            return (_("span", null,
                i18n('Has HDR support for video?'),
                _(InfoLink, { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range" }),
                '\u00a0',
                _(Result, { value: isVideoHdr })));
        }
        return (_("span", null,
            i18n('Is this an HDR-compatible screen?'),
            _(InfoLink, { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range" }),
            '\u00a0',
            _(Result, { value: isHdr })));
    }

    function isDesktopSafari() {
        var vendor = navigator.vendor, userAgent = navigator.userAgent;
        return /Safari/i.test(userAgent) &&
            /Apple Computer/i.test(vendor) &&
            !/Mobi|Android/i.test(userAgent);
    }

    function ExtLink(props) {
        return (_(Link, { theme: props.theme, href: props.href, target: props.target || '_blank' }, props.children));
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
        var head = (_("span", null,
            i18n('Can I watch 4K video on online services?'),
            '\u00a0',
            _(Result, { value: answer }),
            hasCommonWarning ? '\u00a0⚠️' : ''));
        return (_(ActiveQuestion, { head: head },
            _("ul", null,
                _("li", null,
                    i18n('Is the screen larger than 2K?'),
                    '\u00a0',
                    _(Result, { value: largeThan2K })),
                _("li", null,
                    i18n('Online services protect content using'),
                    '\u00a0',
                    _(ExtLink, { target: "_blank", href: i18n('link:wiki:drm') }, "DRM"),
                    ".",
                    _("br", null),
                    i18n('Supports one of the video codecs and DRM with high security level?'),
                    " ",
                    _(Result, { value: anyCodecWithDrm }),
                    _("ul", null,
                        _(DrmItem, { name: "Google Widevine L1", hasNeededHdcp: hasWidevineNeededHdcp, isSupported: isWidevine, isVp9Supported: isWidevineL1Vp9, isHevcSupported: isWidevineL1Hevc, isAv1Supported: isWidevineL1Av1 }),
                        _(DrmItem, { name: "Microsoft PlayReady SL3000", hasNeededHdcp: hasPlayReadyNeededHdcp, isSupported: isPlayReady, isVp9Supported: isPlayReadySL3000Vp9, isHevcSupported: isPlayReadySL3000Hevc, isAv1Supported: isPlayReadySL3000Av1 }),
                        _(DrmItem, { name: "Apple FairPlay", hasNeededHdcp: null, isSupported: isFairplay, isVp9Supported: isFairplayVp9, isHevcSupported: isFairplayHevc, isAv1Supported: isFairplayAv1 }))),
                needHdcpWarning() ? (_("li", null,
                    "\u26A0\uFE0F ",
                    i18n('Make sure that monitors, video cards, and cables support HDCP 2.2 or later.'))) : '',
                isSafari ? (_("li", null,
                    "\u26A0\uFE0F ",
                    i18n('Select 2018 or later Mac computer with an'),
                    " ",
                    _(ExtLink, { href: i18n('link:apple:t2') }, "Apple T2 Security Chip"),
                    ".")) : '')));
    }
    function DrmItem(props) {
        var isSupported = props.isSupported, name = props.name, hasNeededHdcp = props.hasNeededHdcp, isVp9Supported = props.isVp9Supported, isHevcSupported = props.isHevcSupported, isAv1Supported = props.isAv1Supported;
        return isSupported ? (_("li", null,
            name,
            _("ul", null,
                hasNeededHdcp === null ? '' :
                    (_("li", null,
                        i18n('HDCP 2.2 or later'),
                        " ",
                        _(Result, { value: hasNeededHdcp }))),
                _("li", null,
                    _(Codec, { name: "VP9", color: "green", disabled: !isVp9Supported }),
                    '\u00a0',
                    _(Result, { value: isVp9Supported })),
                _("li", null,
                    _(Codec, { name: "H.265", color: "orange", disabled: !isHevcSupported }),
                    '\u00a0',
                    _(Result, { value: isHevcSupported })),
                _("li", null,
                    _(Codec, { name: "AV1", color: "yellow", disabled: !isAv1Supported }),
                    '\u00a0',
                    _(Result, { value: isAv1Supported }))))) : null;
    }

    var b$b = block('video-questions');
    function VideoQuestions() {
        return (_("div", { class: b$b() },
            _(Question4K, null),
            _(QuestionHdr, null),
            _(QuestionDrm4K, null)));
    }

    function getAutoplayPolicy() {
        if (!navigator.getAutoplayPolicy) {
            return '';
        }
        return navigator.getAutoplayPolicy('mediaelement');
    }

    var b$a = block('html-video-element-features');
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
            },
        ];
        items.sort(function (a, b) {
            if (a.supported === b.supported) {
                return 0;
            }
            return a.supported ? -1 : 1;
        });
        var content = items.map(function (item) {
            var supported = item.supported ? '✓' : i18n('No');
            return (_("li", { title: item.title },
                item.label,
                ": ",
                supported));
        });
        var autoplayPolicy = isSsr ? '' : getAutoplayPolicy();
        if (autoplayPolicy) {
            content.push((_("li", null,
                "Autoplay Policy: ",
                autoplayPolicy)));
        }
        return (_("ul", { class: b$a() }, content));
    }

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
    var b$9 = block('image-formats');
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
                    tooltip: getTooltip(item.tooltip),
                }));
            }
            else {
                unsupported.push(Codec({
                    name: item.name,
                    color: 'black',
                    disabled: true,
                    tooltip: getTooltip(item.tooltip),
                }));
            }
        });
        return (_(Columns, null,
            _("div", null,
                _(Column, { name: i18n('Supported') }, supported.length ? supported : i18n('No supported image formats.')),
                unsupported.length ? (_(Column, { disabled: true, name: i18n('Unsupported') }, unsupported)) : null)));
    }
    function getTooltip(mimeType) {
        return (_("div", { class: b$9('tooltip') },
            i18n('MIME type'),
            ": ",
            _("code", null, mimeType)));
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
        'Video': {
            'en': 'Video',
            'ru': 'Видео'
        },
        'Is this an HDR-compatible screen?': {
            'en': 'Is this an HDR-compatible screen?',
            'ru': 'Это HDR-совместимый экран?'
        },
        'Supports one of the video codecs?': {
            'en': 'Supports one of the video codecs?',
            'ru': 'Есть поддержка одного из видеокодеков?'
        },
        'HTMLVideoElement Features': {
            'en': 'HTMLVideoElement Features',
            'ru': 'Возможности HTMLVideoElement'
        },
        'Can I watch video in this browser?': {
            'en': 'Can I\u00a0watch video in\u00a0this browser?',
            'ru': 'Могу ли я\u00a0смотреть видео в\u00a0этом браузере?'
        },
        'Video Codecs': {
            'en': 'Video Codecs',
            'ru': 'Видеокодеки'
        },
        'Supported video codecs': {
            'en': 'Supported video codecs',
            'ru': 'Поддерживаемые видеокодеки'
        },
        'Unsupported video codecs': {
            'en': 'Unsupported video codecs.',
            'ru': 'Не поддерживаемые видеокодеки'
        },
        'No supported video codecs.': {
            'en': 'No supported video codecs.',
            'ru': 'Нет поддерживаемых видеокодеков.'
        },
        'Image Formats': {
            'en': 'Image Formats',
            'ru': 'Форматы картинок'
        },
        'Native Streaming Support': {
            'en': 'Native Streaming Support',
            'ru': 'Поддержка нативного стримминга'
        },
        'No supported image formats.': {
            'en': 'No supported image formats.',
            'ru': 'Нет поддерживаемых форматов картинок.'
        },
        'Please reset zoom in the page': {
            'en': 'Please reset zoom in the page',
            'ru': 'Необходимо сбросить зум на странице'
        },
        'Can I watch HDR video?': {
            'en': 'Can I watch HDR video?',
            'ru': 'Могу ли я смотреть HDR видео?'
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
        'HDCP 2.2 or later': {
            'en': 'HDCP 2.2 or later',
            'ru': 'HDCP 2.2 или выше'
        },
        'Make sure that monitors, video cards, and cables support HDCP 2.2 or later.': {
            'en': 'Make sure that monitors, video cards, and cables support HDCP 2.2 or later.',
            'ru': 'Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше'
        },
        'Encryption schemes': {
            'en': 'Encryption schemes',
            'ru': 'Схемы шифрования'
        },
    };

    addI18nKeyset(keyset);
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
        return (_(Page, { title: i18n('Video') },
            _("div", null,
                _("h2", null, i18n('Can I watch video in this browser?')),
                _(VideoQuestions, null),
                _(ScreenBadges, null),
                _(Section, { name: i18n('Video Codecs') },
                    _(VideoCodecs, null)),
                _(Section, { name: "DRM" },
                    _(DrmBadges, null)),
                _(Section, { name: i18n('Image Formats') },
                    _(ImageFormats, null)),
                _(Section, { name: i18n('Native Streaming Support') },
                    _(NativeStreaming, null)),
                _(Section, { name: i18n('HTMLVideoElement Features') },
                    _(HtmlVideoElementFeatures, null)))));
    }

    function renderToRoot(Component) {
        return B$1(_(Component, null), document.querySelector('.root'));
    }

    renderToRoot(VideoPage);

}));
