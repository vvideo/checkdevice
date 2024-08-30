(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var n,l$1,u$1,i$1,o$1,r$1,f$1,e$1,c$1,s$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$l(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y$1(i)?g(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a--:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&(f==r-a?a-=f-r:a++),f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b$l(m,M),h.constructor=T,h.render=q$1),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l$1.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(L=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e;}else u.__e=t.__e,u.__k=t.__k;l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A$1(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A$1(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A$1(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A$1(l,s,g,m[s],o));}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function V(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$l.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b$l.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b$l.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$1=0,c$1=F(!1),s$1=F(!0);

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

    var isSsr = typeof window === 'undefined';

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

    function classname() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values.filter(function (item) {
            return item !== null && item !== undefined;
        }).join(' ');
    }

    var b$k = block('link');
    function Link(props) {
        var className = classname(props.class, b$k({ theme: props.theme }));
        return (_("a", { target: props.target, class: className, href: props.href }, props.children));
    }

    var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function A(n){return o=5,T(function(){return {current:n}},[])}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

    var b$j = block('lang-icon');
    function LangIcon(props) {
        return (_("span", { class: b$j({ lang: props.lang }) }));
    }

    var b$i = block('lang-switcher-item');
    function LangSwitcherItem(props) {
        var value = props.value, name = props.name, selected = props.selected, url = props.url;
        return (_("li", { class: b$i() },
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

    var b$h = block('lang-switcher');
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
        return (_("div", { ref: ref, class: b$h() },
            _("div", { class: b$h('current'), onClick: handleClick },
                _(LangIcon, { lang: currentLangItem.value }),
                " ",
                currentLangItem.name),
            _("menu", { class: b$h('popup', { visible: visible }) }, langs.map(function (item) {
                var url = getPagePath(getPageId(), item.value);
                return (_(LangSwitcherItem, { key: item.value, name: item.name, value: item.value, selected: currentLang === item.value, url: url }));
            }))));
    }

    var b$g = block('footer');
    function Footer() {
        return (_("footer", { class: b$g() },
            _("div", { class: b$g('item', { report: true }) },
                _(Link, { theme: "page-theme", target: "_blank", href: "https://github.com/vvideo/caniwatchvideo/issues/new" }, i18n('Report a bug'))),
            _("div", { class: b$g('item') },
                _(LangSwitcher, null)),
            _("div", { class: b$g('item') }, "\u00A9 Vvideo")));
    }

    var b$f = block('main-menu');
    function MainMenu(props) {
        return (_("nav", { class: b$f() },
            _("ul", { class: b$f('list') }, props.items.filter(function (item) { return !item.hidden; }).map(function (item) {
                return (_("li", { class: b$f('item', { selected: item.selected }), key: item.id },
                    _("a", { class: b$f('link'), href: getPagePath(item.id) }, item.title),
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

    var b$e = block('theme-switcher');
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
        return (_("div", { class: b$e({ theme: theme }), onClick: handleClick, title: title }));
    }

    var b$d = block('header');
    function Header() {
        return (_("header", { class: b$d() },
            _(Link, { theme: "page-theme", href: getPagePath('index') },
                _("span", null,
                    _("span", { class: b$d('logo') }),
                    i18n('Check device online'))),
            _(ThemeSwitcher, null)));
    }

    var b$c = block('page-title');
    function PageTitle(props) {
        return (_("h1", { class: b$c() }, props.children));
    }

    var b$b = block('page');
    function Page(props) {
        return (_("div", { class: b$b() },
            _(Header, null),
            props.withoutMenu ? '' : (_(Menu, null)),
            props.title ? (_(PageTitle, null, props.title)) : '',
            props.children,
            _(Footer, null)));
    }

    var b$a = block('button');
    function Button(props) {
        var disabled = props.disabled, size = props.size, theme = props.theme, onClick = props.onClick, title = props.title;
        var className = classname(props.class, b$a({ theme: theme, size: size, disabled: disabled }));
        var handleClick = q(function () {
            if (disabled) {
                return;
            }
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }, [disabled, onClick]);
        return (_("button", { title: title, class: className, disabled: disabled, onClick: handleClick }, props.children));
    }

    function isFirefox() {
        return /firefox/.test(window.navigator.userAgent.toLowerCase());
    }

    var KeyboardLedController = /** @class */ (function () {
        function KeyboardLedController() {
            var _this = this;
            this.signal = new Signal();
            this.isFirefox = !isSsr && isFirefox();
            this.capsLock = false;
            this.scrollLock = false;
            this.numLock = false;
            this.handleMouse = function (event) {
                _this.update(event);
            };
            this.handleKey = function (event) {
                if (_this.isFirefox && event.code && event.code.indexOf('Arrow') !== -1) {
                    return;
                }
                _this.update(event);
            };
        }
        KeyboardLedController.prototype.on = function () {
            this.bindMouseEvents();
            this.bindKeyboardEvents();
        };
        KeyboardLedController.prototype.off = function () {
            this.unbindMouseEvents();
            this.unbindKeyboardEvents();
        };
        KeyboardLedController.prototype.bindMouseEvents = function () {
            document.addEventListener('mousemove', this.handleMouse);
            document.addEventListener('mousedown', this.handleMouse);
            document.addEventListener('mouseup', this.handleMouse);
        };
        KeyboardLedController.prototype.bindKeyboardEvents = function () {
            document.addEventListener('keydown', this.handleKey, true);
            document.addEventListener('keyup', this.handleKey, true);
        };
        KeyboardLedController.prototype.unbindMouseEvents = function () {
            document.removeEventListener('mousemove', this.handleMouse);
            document.removeEventListener('mousedown', this.handleMouse);
            document.removeEventListener('mouseup', this.handleMouse);
        };
        KeyboardLedController.prototype.unbindKeyboardEvents = function () {
            document.removeEventListener('keydown', this.handleKey, true);
            document.removeEventListener('keyup', this.handleKey, true);
        };
        KeyboardLedController.prototype.update = function (event) {
            if (event.getModifierState) {
                var statusCapsLock = event.getModifierState('CapsLock');
                if (this.capsLock !== statusCapsLock) {
                    this.capsLock = statusCapsLock;
                    this.signal.trigger('CapsLock');
                }
                var statusScrollLock = event.getModifierState('ScrollLock');
                if (this.scrollLock !== statusScrollLock) {
                    this.scrollLock = statusScrollLock;
                    this.signal.trigger('ScrollLock');
                }
                var statusNumLock = event.getModifierState('NumLock');
                if (this.numLock !== statusNumLock) {
                    this.numLock = statusNumLock;
                    this.signal.trigger('NumLock');
                }
            }
        };
        KeyboardLedController.prototype.addListener = function (callback) {
            this.signal.addListener(callback);
        };
        KeyboardLedController.prototype.removeListener = function (callback) {
            this.signal.removeListener(callback);
        };
        return KeyboardLedController;
    }());
    var keyboardLedController = new KeyboardLedController();

    var KeyboardStateController = /** @class */ (function () {
        function KeyboardStateController() {
            var _this = this;
            this.state = {};
            this.signal = new Signal();
            this.handleLed = function () {
                _this.setLed('CapsLock', keyboardLedController.capsLock);
                _this.setLed('ScrollLock', keyboardLedController.scrollLock);
                _this.setLed('NumLock', keyboardLedController.numLock);
            };
            this.handleKeydown = function (event) {
                event.preventDefault();
                var code = _this.prepareKeyboardCode(event.code, event.key);
                if (event.code !== 'CapsLock') {
                    _this.setPressed(code, true);
                }
                _this.setWasPressed(code, true);
            };
            this.handleBlur = function () {
                _this.clearPressed();
            };
            this.handleKeyup = function (event) {
                event.preventDefault();
                var code = _this.prepareKeyboardCode(event.code, event.key);
                _this.setPressed(code, false);
                _this.setWasPressed(code, true);
                if (code === 'MetaLeft' || code === 'MetaRight') {
                    _this.clearPressed();
                }
            };
        }
        KeyboardStateController.prototype.destroy = function () {
            this.unbindEvents();
            this.signal.clearListeners();
            this.state = {};
        };
        KeyboardStateController.prototype.on = function () {
            this.bindEvents();
        };
        KeyboardStateController.prototype.off = function () {
            this.unbindEvents();
        };
        KeyboardStateController.prototype.addListener = function (callback) {
            this.signal.addListener(callback);
        };
        KeyboardStateController.prototype.removeListener = function (callback) {
            this.signal.removeListener(callback);
        };
        KeyboardStateController.prototype.setPressed = function (code, value) {
            this.state[code] = this.state[code] || {};
            this.state[code].pressed = value;
            this.signal.trigger(code);
        };
        KeyboardStateController.prototype.setWasPressed = function (code, value) {
            this.state[code] = this.state[code] || {};
            this.state[code].wasPressed = value;
            this.signal.trigger(code);
        };
        KeyboardStateController.prototype.setLed = function (code, value) {
            this.state[code] = this.state[code] || {};
            this.state[code].led = value;
            this.signal.trigger(code);
        };
        KeyboardStateController.prototype.clearPressed = function () {
            var _this = this;
            Object.keys(this.state).forEach(function (code) {
                _this.setPressed(code, false);
            });
        };
        KeyboardStateController.prototype.clearState = function () {
            var _this = this;
            Object.keys(this.state).forEach(function (code) {
                _this.setPressed(code, false);
                _this.setWasPressed(code, false);
            });
        };
        KeyboardStateController.prototype.getKeyState = function (code) {
            return this.state[code] || { pressed: false, wasPressed: false, led: false };
        };
        KeyboardStateController.prototype.bindEvents = function () {
            document.addEventListener('keydown', this.handleKeydown);
            document.addEventListener('keyup', this.handleKeyup);
            document.addEventListener('blur', this.handleBlur);
            keyboardLedController.addListener(this.handleLed);
        };
        KeyboardStateController.prototype.unbindEvents = function () {
            document.removeEventListener('keydown', this.handleKeydown);
            document.removeEventListener('keyup', this.handleKeyup);
            document.removeEventListener('blur', this.handleBlur);
            keyboardLedController.removeListener(this.handleLed);
        };
        KeyboardStateController.prototype.prepareKeyboardCode = function (code, key) {
            if (code === 'IntlBackslash' && (key === '`' || key === '~')) {
                return 'Backquote';
            }
            else if (code === 'Backquote' && (key === '§' || key === '±')) {
                return 'IntlBackslash';
            }
            // Fix for media keys on Windows.
            return code || key;
        };
        return KeyboardStateController;
    }());
    var keyboardStateController = new KeyboardStateController();

    var useForceUpdate = function () {
        var _a = h({}), updateState = _a[1];
        return q(function () { return updateState({}); }, []);
    };

    var b$9 = block('keyboard-key');
    function KeyboardKey(props) {
        var keyData = props.keyData;
        var forceUpdate = useForceUpdate();
        y(function () {
            var handler = function (code) {
                if (keyData.code === code) {
                    forceUpdate();
                }
            };
            keyboardStateController.addListener(handler);
            return function () {
                keyboardStateController.removeListener(handler);
            };
        }, [keyData.code]);
        var state = keyboardStateController.getKeyState(keyData.code);
        var title = keyData.code;
        return (_("div", { title: title, class: b$9({ align: keyData.align, code: keyData.code, pressed: state.pressed, wasPressed: state.wasPressed, view: keyData.view, fontSize: keyData.fontSize }) },
            keyData.text || '',
            keyData.topSymbol ? (_("div", { class: b$9('top-symbol') }, keyData.topSymbol)) : '',
            keyData.topLeftSymbol ? (_("div", { class: b$9('top-left-symbol') }, keyData.topLeftSymbol)) : '',
            keyData.topRightSymbol ? (_("div", { class: b$9('top-right-symbol') }, keyData.topRightSymbol)) : '',
            keyData.bottomLeftSymbol ? (_("div", { class: b$9('bottom-left-symbol') }, keyData.bottomLeftSymbol)) : '',
            keyData.bottomRightSymbol ? (_("div", { class: b$9('bottom-right-symbol') }, keyData.bottomRightSymbol)) : '',
            keyData.bottomSymbol ? (_("div", { class: b$9('bottom-symbol') }, keyData.bottomSymbol)) : '',
            keyData.bottomText ? (_("div", { class: b$9('bottom-text') }, keyData.bottomText)) : '',
            typeof keyData.led === 'boolean' ? (_("div", { class: b$9('led', { on: state.led }) })) : ''));
    }

    var b$8 = block('keyboard-led');
    function KeyboardLed(props) {
        var forceUpdate = useForceUpdate();
        y(function () {
            var handler = function (code) {
                if (props.code === code) {
                    forceUpdate();
                }
            };
            keyboardStateController.addListener(handler);
            return function () {
                keyboardStateController.removeListener(handler);
            };
        }, [props.code]);
        var state = keyboardStateController.getKeyState(props.code);
        return (_("div", { title: props.code, class: b$8({ on: state.led, code: props.code }) }));
    }

    var b$7 = block('keyboard-spacer');
    function KeyboardSpacer(props) {
        return (_("div", { class: b$7({ name: props.name }) }));
    }

    var b$6 = block('keyboard-row');
    function KeyboardRow(props) {
        var rowData = props.rowData;
        return (_("div", { class: b$6() }, rowData.map(function (item, i) {
            if (item.type === 'spacer') {
                return (_(KeyboardSpacer, { key: i, name: item.name }));
            }
            if (item.type === 'led') {
                return (_(KeyboardLed, { key: i, code: item.code }));
            }
            return (_(KeyboardKey, { key: i, keyData: item }));
        })));
    }

    var row0$3 = [
        {
            code: 'Backquote',
            topSymbol: '~',
            bottomSymbol: '`'
        },
        {
            code: 'Digit1',
            topSymbol: '!',
            bottomSymbol: '1'
        },
        {
            code: 'Digit2',
            topSymbol: '@',
            bottomSymbol: '2'
        },
        {
            code: 'Digit3',
            topSymbol: '#',
            bottomSymbol: '3'
        },
        {
            code: 'Digit4',
            topSymbol: '$',
            bottomSymbol: '4'
        },
        {
            code: 'Digit5',
            topSymbol: '%',
            bottomSymbol: '5'
        },
        {
            code: 'Digit6',
            topSymbol: '^',
            bottomSymbol: '6'
        },
        {
            code: 'Digit7',
            topSymbol: '&',
            bottomSymbol: '7'
        },
        {
            code: 'Digit8',
            topSymbol: '*',
            bottomSymbol: '8'
        },
        {
            code: 'Digit9',
            topSymbol: '(',
            bottomSymbol: '9'
        },
        {
            code: 'Digit0',
            topSymbol: ')',
            bottomSymbol: '0'
        },
        {
            code: 'Minus',
            topSymbol: '_',
            bottomSymbol: '-'
        },
        {
            code: 'Equal',
            topSymbol: '+',
            bottomSymbol: '='
        },
        {
            code: 'Backspace',
            bottomText: 'delete',
            align: 'right'
        },
    ];
    var row1$3 = [
        {
            code: 'Tab',
            bottomText: 'tab',
            align: 'left'
        },
        {
            code: 'KeyQ',
            text: 'Q'
        },
        {
            code: 'KeyW',
            text: 'W'
        },
        {
            code: 'KeyE',
            text: 'E'
        },
        {
            code: 'KeyR',
            text: 'R'
        },
        {
            code: 'KeyT',
            text: 'T'
        },
        {
            code: 'KeyY',
            text: 'Y'
        },
        {
            code: 'KeyU',
            text: 'U'
        },
        {
            code: 'KeyI',
            text: 'I'
        },
        {
            code: 'KeyO',
            text: 'O'
        },
        {
            code: 'KeyP',
            text: 'P'
        },
        {
            code: 'BracketLeft',
            topSymbol: '{',
            bottomSymbol: '['
        },
        {
            code: 'BracketRight',
            topSymbol: '}',
            bottomSymbol: ']'
        },
        {
            code: 'Backslash',
            topSymbol: '|',
            bottomSymbol: '\\'
        }
    ];
    var row2$3 = [
        {
            code: 'CapsLock',
            bottomText: 'caps lock',
            led: true,
            align: 'left'
        },
        {
            code: 'KeyA',
            text: 'A'
        },
        {
            code: 'KeyS',
            text: 'S'
        },
        {
            code: 'KeyD',
            text: 'D'
        },
        {
            code: 'KeyF',
            text: 'F'
        },
        {
            code: 'KeyG',
            text: 'G'
        },
        {
            code: 'KeyH',
            text: 'H'
        },
        {
            code: 'KeyJ',
            text: 'J'
        },
        {
            code: 'KeyK',
            text: 'K'
        },
        {
            code: 'KeyL',
            text: 'L'
        },
        {
            code: 'Semicolon',
            topSymbol: ':',
            bottomSymbol: ';'
        },
        {
            code: 'Quote',
            topSymbol: '"',
            bottomSymbol: '\''
        },
        {
            code: 'Enter',
            bottomText: 'return',
            align: 'right'
        }
    ];
    var row3$3 = [
        {
            code: 'ShiftLeft',
            bottomText: 'shift',
            align: 'left'
        },
        {
            code: 'KeyZ',
            text: 'Z'
        },
        {
            code: 'KeyX',
            text: 'X'
        },
        {
            code: 'KeyC',
            text: 'C'
        },
        {
            code: 'KeyV',
            text: 'V'
        },
        {
            code: 'KeyB',
            text: 'B'
        },
        {
            code: 'KeyN',
            text: 'N'
        },
        {
            code: 'KeyM',
            text: 'M'
        },
        {
            code: 'Comma',
            topSymbol: '<',
            bottomSymbol: ','
        },
        {
            code: 'Period',
            topSymbol: '>',
            bottomSymbol: '.'
        },
        {
            code: 'Slash',
            topSymbol: '?',
            bottomSymbol: '/'
        },
        {
            code: 'ShiftRight',
            bottomText: 'shift',
            align: 'right'
        },
    ];
    var row4$3 = [
        {
            code: 'Fn',
            bottomLeftSymbol: '🌐'
        },
        {
            code: 'ControlLeft',
            topRightSymbol: '^',
            bottomText: 'control'
        },
        {
            code: 'AltLeft',
            topRightSymbol: '⌥',
            bottomText: 'option'
        },
        {
            code: 'MetaLeft',
            topRightSymbol: '⌘',
            bottomText: 'command'
        },
        {
            code: 'Space'
        },
        {
            code: 'MetaRight',
            topLeftSymbol: '⌘',
            bottomText: 'command'
        },
        {
            code: 'AltRight',
            topLeftSymbol: '⌥',
            bottomText: 'option'
        },
        {
            code: 'ArrowLeft'
        },
        {
            code: 'ArrowDown'
        },
        {
            code: 'ArrowUp'
        },
        {
            code: 'ArrowRight'
        },
    ];
    var ipadKeyboardLayout = {
        type: 'ipad',
        rows: [
            row0$3,
            row1$3,
            row2$3,
            row3$3,
            row4$3,
        ]
    };

    var row0$2 = [
        {
            code: 'Escape',
            bottomText: 'esc',
            align: 'left'
        },
        {
            code: 'F1',
            text: 'F1'
        },
        {
            code: 'F2',
            text: 'F2'
        },
        {
            code: 'F3',
            text: 'F3'
        },
        {
            code: 'F4',
            text: 'F4'
        },
        {
            code: 'F5',
            text: 'F5'
        },
        {
            code: 'F6',
            text: 'F6'
        },
        {
            code: 'F7',
            text: 'F7'
        },
        {
            code: 'F8',
            text: 'F8'
        },
        {
            code: 'F9',
            text: 'F9'
        },
        {
            code: 'F10',
            text: 'F10'
        },
        {
            code: 'F11',
            text: 'F11'
        },
        {
            code: 'F12',
            text: 'F12'
        },
        {
            code: 'PowerOff',
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'F13',
            text: 'F13'
        },
        {
            code: 'F14',
            text: 'F14'
        },
        {
            code: 'F15',
            text: 'F15'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'F16',
            text: 'F16'
        },
        {
            code: 'F17',
            text: 'F17'
        },
        {
            code: 'F18',
            text: 'F18'
        },
        {
            code: 'F19',
            text: 'F19'
        }
    ];
    var row1$2 = [
        {
            code: 'Backquote',
            topSymbol: '~',
            bottomSymbol: '`'
        },
        {
            code: 'Digit1',
            topSymbol: '!',
            bottomSymbol: '1'
        },
        {
            code: 'Digit2',
            topSymbol: '@',
            bottomSymbol: '2'
        },
        {
            code: 'Digit3',
            topSymbol: '#',
            bottomSymbol: '3'
        },
        {
            code: 'Digit4',
            topSymbol: '$',
            bottomSymbol: '4'
        },
        {
            code: 'Digit5',
            topSymbol: '%',
            bottomSymbol: '5'
        },
        {
            code: 'Digit6',
            topSymbol: '^',
            bottomSymbol: '6'
        },
        {
            code: 'Digit7',
            topSymbol: '&',
            bottomSymbol: '7'
        },
        {
            code: 'Digit8',
            topSymbol: '*',
            bottomSymbol: '8'
        },
        {
            code: 'Digit9',
            topSymbol: '(',
            bottomSymbol: '9'
        },
        {
            code: 'Digit0',
            topSymbol: ')',
            bottomSymbol: '0'
        },
        {
            code: 'Minus',
            topSymbol: '_',
            bottomSymbol: '-'
        },
        {
            code: 'Equal',
            topSymbol: '+',
            bottomSymbol: '='
        },
        {
            code: 'Backspace',
            bottomText: 'delete',
            align: 'right'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'Fn',
            bottomRightSymbol: 'fn',
            text: '🌐'
        },
        {
            code: 'Home',
            text: 'home',
            fontSize: 'small'
        },
        {
            code: 'PageUp',
            text: 'page up',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'Clear',
            text: 'clear',
            fontSize: 'small'
        },
        {
            code: 'NumpadEqual',
            text: '='
        },
        {
            code: 'NumpadDivide',
            text: '/'
        },
        {
            code: 'NumpadMultiply',
            text: '*'
        }
    ];
    var row2$2 = [
        {
            code: 'Tab',
            bottomText: 'tab',
            align: 'left'
        },
        {
            code: 'KeyQ',
            text: 'Q'
        },
        {
            code: 'KeyW',
            text: 'W'
        },
        {
            code: 'KeyE',
            text: 'E'
        },
        {
            code: 'KeyR',
            text: 'R'
        },
        {
            code: 'KeyT',
            text: 'T'
        },
        {
            code: 'KeyY',
            text: 'Y'
        },
        {
            code: 'KeyU',
            text: 'U'
        },
        {
            code: 'KeyI',
            text: 'I'
        },
        {
            code: 'KeyO',
            text: 'O'
        },
        {
            code: 'KeyP',
            text: 'P'
        },
        {
            code: 'BracketLeft',
            topSymbol: '{',
            bottomSymbol: '['
        },
        {
            code: 'BracketRight',
            topSymbol: '}',
            bottomSymbol: ']'
        },
        {
            code: 'Backslash',
            topSymbol: '|',
            bottomSymbol: '\\'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'Delete',
            text: '⌫',
            fontSize: 'small'
        },
        {
            code: 'End',
            text: 'end',
            fontSize: 'small'
        },
        {
            code: 'PageDown',
            text: 'page down',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'Numpad7',
            text: '7'
        },
        {
            code: 'Numpad8',
            text: '8'
        },
        {
            code: 'Numpad9',
            text: '9'
        },
        {
            code: 'NumpadSubtract',
            text: '-'
        }
    ];
    var row3$2 = [
        {
            code: 'CapsLock',
            bottomText: 'caps lock',
            align: 'left',
            led: true
        },
        {
            code: 'KeyA',
            text: 'A'
        },
        {
            code: 'KeyS',
            text: 'S'
        },
        {
            code: 'KeyD',
            text: 'D'
        },
        {
            code: 'KeyF',
            text: 'F'
        },
        {
            code: 'KeyG',
            text: 'G'
        },
        {
            code: 'KeyH',
            text: 'H'
        },
        {
            code: 'KeyJ',
            text: 'J'
        },
        {
            code: 'KeyK',
            text: 'K'
        },
        {
            code: 'KeyL',
            text: 'L'
        },
        {
            code: 'Semicolon',
            topSymbol: ':',
            bottomSymbol: ';'
        },
        {
            code: 'Quote',
            topSymbol: '"',
            bottomSymbol: '\''
        },
        {
            code: 'Enter',
            bottomText: 'return',
            align: 'right'
        },
        {
            type: 'spacer',
            name: 'before-numpad-long'
        },
        {
            code: 'Numpad4',
            text: '4'
        },
        {
            code: 'Numpad5',
            text: '5'
        },
        {
            code: 'Numpad6',
            text: '6'
        },
        {
            code: 'NumpadAdd',
            text: '+'
        }
    ];
    var row4$2 = [
        {
            code: 'ShiftLeft',
            bottomText: 'shift',
            align: 'left'
        },
        {
            code: 'KeyZ',
            text: 'Z'
        },
        {
            code: 'KeyX',
            text: 'X'
        },
        {
            code: 'KeyC',
            text: 'C'
        },
        {
            code: 'KeyV',
            text: 'V'
        },
        {
            code: 'KeyB',
            text: 'B'
        },
        {
            code: 'KeyN',
            text: 'N'
        },
        {
            code: 'KeyM',
            text: 'M'
        },
        {
            code: 'Comma',
            topSymbol: '<',
            bottomSymbol: ','
        },
        {
            code: 'Period',
            topSymbol: '>',
            bottomSymbol: '.'
        },
        {
            code: 'Slash',
            topSymbol: '?',
            bottomSymbol: '/'
        },
        {
            code: 'ShiftRight',
            bottomText: 'shift',
            align: 'right'
        },
        {
            type: 'spacer',
            name: 'before-arrow-up'
        },
        {
            code: 'ArrowUp'
        },
        {
            type: 'spacer',
            name: 'after-arrow-up'
        },
        {
            code: 'Numpad1',
            text: '1'
        },
        {
            code: 'Numpad2',
            text: '2'
        },
        {
            code: 'Numpad3',
            text: '3'
        },
        {
            code: 'NumpadEnter',
            bottomText: 'enter',
            fontSize: 'small'
        }
    ];
    var row5$2 = [
        {
            code: 'ControlLeft',
            topRightSymbol: '^',
            bottomText: 'control',
            align: 'right'
        },
        {
            code: 'AltLeft',
            topRightSymbol: '⌥',
            bottomText: 'option',
            align: 'right'
        },
        {
            code: 'MetaLeft',
            topRightSymbol: '⌘',
            bottomText: 'command',
            align: 'right'
        },
        {
            code: 'Space'
        },
        {
            code: 'MetaRight',
            topLeftSymbol: '⌘',
            bottomText: 'command',
            align: 'left'
        },
        {
            code: 'AltRight',
            topLeftSymbol: '⌥',
            bottomText: 'option',
            align: 'left'
        },
        {
            code: 'ControlRight',
            topLeftSymbol: '^',
            bottomText: 'control',
            align: 'left'
        },
        {
            type: 'spacer',
            name: 'before-arrows'
        },
        {
            code: 'ArrowLeft'
        },
        {
            code: 'ArrowDown'
        },
        {
            code: 'ArrowRight'
        },
        {
            type: 'spacer',
            name: 'after-arrows'
        },
        {
            code: 'Numpad0',
            text: '0'
        },
        {
            code: 'NumpadDecimal',
            text: '.'
        }
    ];
    var macKeyboardLayout = {
        type: 'mac',
        rows: [
            row0$2,
            row1$2,
            row2$2,
            row3$2,
            row4$2,
            row5$2,
        ]
    };

    var row0$1 = [
        {
            code: 'Escape',
            text: 'esc',
            align: 'left'
        },
        {
            code: 'F1',
            text: 'F1'
        },
        {
            code: 'F2',
            text: 'F2'
        },
        {
            code: 'F3',
            text: 'F3'
        },
        {
            code: 'F4',
            text: 'F4'
        },
        {
            code: 'F5',
            text: 'F5'
        },
        {
            code: 'F6',
            text: 'F6'
        },
        {
            code: 'F7',
            text: 'F7'
        },
        {
            code: 'F8',
            text: 'F8'
        },
        {
            code: 'F9',
            text: 'F9'
        },
        {
            code: 'F10',
            text: 'F10'
        },
        {
            code: 'F11',
            text: 'F11'
        },
        {
            code: 'F12',
            text: 'F12'
        },
        {
            code: 'PowerOff',
        }
    ];
    var row1$1 = [
        {
            code: 'IntlBackslash',
            topLeftSymbol: '±',
            topRightSymbol: '<',
            bottomLeftSymbol: '§',
            bottomRightSymbol: '>',
        },
        {
            code: 'Digit1',
            topSymbol: '!',
            bottomSymbol: '1'
        },
        {
            code: 'Digit2',
            topSymbol: '@',
            bottomSymbol: '2'
        },
        {
            code: 'Digit3',
            topSymbol: '#',
            bottomSymbol: '3'
        },
        {
            code: 'Digit4',
            topSymbol: '$',
            bottomSymbol: '4'
        },
        {
            code: 'Digit5',
            topSymbol: '%',
            bottomSymbol: '5'
        },
        {
            code: 'Digit6',
            topSymbol: '^',
            bottomSymbol: '6'
        },
        {
            code: 'Digit7',
            topSymbol: '&',
            bottomSymbol: '7'
        },
        {
            code: 'Digit8',
            topSymbol: '*',
            bottomSymbol: '8'
        },
        {
            code: 'Digit9',
            topSymbol: '(',
            bottomSymbol: '9'
        },
        {
            code: 'Digit0',
            topSymbol: ')',
            bottomSymbol: '0'
        },
        {
            code: 'Minus',
            topSymbol: '_',
            bottomSymbol: '-'
        },
        {
            code: 'Equal',
            topSymbol: '+',
            bottomSymbol: '='
        },
        {
            code: 'Backspace',
            bottomRightSymbol: '⌫'
        },
    ];
    var row2$1 = [
        {
            code: 'Tab',
            bottomLeftSymbol: '⇥'
        },
        {
            code: 'KeyQ',
            text: 'Q'
        },
        {
            code: 'KeyW',
            text: 'W'
        },
        {
            code: 'KeyE',
            text: 'E'
        },
        {
            code: 'KeyR',
            text: 'R'
        },
        {
            code: 'KeyT',
            text: 'T'
        },
        {
            code: 'KeyY',
            text: 'Y'
        },
        {
            code: 'KeyU',
            text: 'U'
        },
        {
            code: 'KeyI',
            text: 'I'
        },
        {
            code: 'KeyO',
            text: 'O'
        },
        {
            code: 'KeyP',
            text: 'P'
        },
        {
            code: 'BracketLeft',
            topSymbol: '{',
            bottomSymbol: '['
        },
        {
            code: 'BracketRight',
            topSymbol: '}',
            bottomSymbol: ']'
        },
        {
            code: 'Enter',
            text: '⏎'
        },
    ];
    var row3$1 = [
        {
            code: 'CapsLock',
            bottomLeftSymbol: '⇪',
            led: true
        },
        {
            code: 'KeyA',
            text: 'A'
        },
        {
            code: 'KeyS',
            text: 'S'
        },
        {
            code: 'KeyD',
            text: 'D'
        },
        {
            code: 'KeyF',
            text: 'F'
        },
        {
            code: 'KeyG',
            text: 'G'
        },
        {
            code: 'KeyH',
            text: 'H'
        },
        {
            code: 'KeyJ',
            text: 'J'
        },
        {
            code: 'KeyK',
            text: 'K'
        },
        {
            code: 'KeyL',
            text: 'L'
        },
        {
            code: 'Semicolon',
            topSymbol: ':',
            bottomSymbol: ';'
        },
        {
            code: 'Quote',
            topSymbol: '"',
            bottomSymbol: '\''
        },
        {
            code: 'Backslash',
            topSymbol: '|',
            bottomSymbol: '\\'
        },
    ];
    var row4$1 = [
        {
            code: 'ShiftLeft',
            bottomText: 'shift',
            align: 'left'
        },
        {
            code: 'Backquote',
            topSymbol: '~',
            bottomSymbol: '`'
        },
        {
            code: 'KeyZ',
            text: 'Z'
        },
        {
            code: 'KeyX',
            text: 'X'
        },
        {
            code: 'KeyC',
            text: 'C'
        },
        {
            code: 'KeyV',
            text: 'V'
        },
        {
            code: 'KeyB',
            text: 'B'
        },
        {
            code: 'KeyN',
            text: 'N'
        },
        {
            code: 'KeyM',
            text: 'M'
        },
        {
            code: 'Comma',
            topSymbol: '<',
            bottomSymbol: ','
        },
        {
            code: 'Period',
            topSymbol: '>',
            bottomSymbol: '.'
        },
        {
            code: 'Slash',
            topSymbol: '?',
            bottomSymbol: '/'
        },
        {
            code: 'ShiftRight',
            bottomText: 'shift',
            align: 'right'
        },
    ];
    var row5$1 = [
        {
            code: 'Fn',
            fontSize: 'small',
            topRightSymbol: 'fn',
            bottomLeftSymbol: '🌐'
        },
        {
            code: 'ControlLeft',
            topRightSymbol: '^',
            bottomText: 'control'
        },
        {
            code: 'AltLeft',
            topRightSymbol: '⌥',
            bottomText: 'option'
        },
        {
            code: 'MetaLeft',
            topRightSymbol: '⌘',
            bottomText: 'command'
        },
        {
            code: 'Space'
        },
        {
            code: 'MetaRight',
            topLeftSymbol: '⌘',
            bottomText: 'command'
        },
        {
            code: 'AltRight',
            topLeftSymbol: '⌥',
            bottomText: 'option'
        },
        {
            code: 'ArrowLeft'
        },
        {
            code: 'ArrowDown'
        },
        {
            code: 'ArrowUp'
        },
        {
            code: 'ArrowRight'
        },
    ];
    var macbookKeyboardLayout = {
        type: 'macbook',
        rows: [
            row0$1,
            row1$1,
            row2$1,
            row3$1,
            row4$1,
            row5$1,
        ]
    };

    var row0 = [
        {
            code: 'Escape',
            text: 'ESC'
        },
        {
            type: 'spacer',
            name: 'between-func'
        },
        {
            code: 'F1',
            text: 'F1'
        },
        {
            code: 'F2',
            text: 'F2'
        },
        {
            code: 'F3',
            text: 'F3'
        },
        {
            code: 'F4',
            text: 'F4'
        },
        {
            type: 'spacer',
            name: 'between-func'
        },
        {
            code: 'F5',
            text: 'F5'
        },
        {
            code: 'F6',
            text: 'F6'
        },
        {
            code: 'F7',
            text: 'F7'
        },
        {
            code: 'F8',
            text: 'F8'
        },
        {
            type: 'spacer',
            name: 'between-func'
        },
        {
            code: 'F9',
            text: 'F9'
        },
        {
            code: 'F10',
            text: 'F10'
        },
        {
            code: 'F11',
            text: 'F11'
        },
        {
            code: 'F12',
            text: 'F12'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'PrintScreen',
            text: 'PRINT SCRN',
            fontSize: 'small'
        },
        {
            code: 'ScrollLock',
            text: 'SCROLL LOCK',
            fontSize: 'small'
        },
        {
            code: 'Pause',
            text: 'PAUSE BREAK',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'MediaPlayPause',
            text: '⏯',
            view: 'circle'
        },
        {
            code: 'MediaStop',
            text: '⏹',
            view: 'circle'
        },
        {
            code: 'MediaTrackPrevious',
            text: '⏮',
            view: 'circle'
        },
        {
            code: 'MediaTrackNext',
            text: '⏭',
            view: 'circle'
        }
    ];
    var row1 = [
        {
            code: 'Backquote',
            topSymbol: '~',
            bottomSymbol: '`'
        },
        {
            code: 'Digit1',
            topSymbol: '!',
            bottomSymbol: '1'
        },
        {
            code: 'Digit2',
            topSymbol: '@',
            bottomSymbol: '2'
        },
        {
            code: 'Digit3',
            topSymbol: '#',
            bottomSymbol: '3'
        },
        {
            code: 'Digit4',
            topSymbol: '$',
            bottomSymbol: '4'
        },
        {
            code: 'Digit5',
            topSymbol: '%',
            bottomSymbol: '5'
        },
        {
            code: 'Digit6',
            topSymbol: '^',
            bottomSymbol: '6'
        },
        {
            code: 'Digit7',
            topSymbol: '&',
            bottomSymbol: '7'
        },
        {
            code: 'Digit8',
            topSymbol: '*',
            bottomSymbol: '8'
        },
        {
            code: 'Digit9',
            topSymbol: '(',
            bottomSymbol: '9'
        },
        {
            code: 'Digit0',
            topSymbol: ')',
            bottomSymbol: '0'
        },
        {
            code: 'Minus',
            topSymbol: '_',
            bottomSymbol: '-'
        },
        {
            code: 'Equal',
            topSymbol: '+',
            bottomSymbol: '='
        },
        {
            code: 'Backspace',
            text: '←'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'Insert',
            text: 'INSERT',
            fontSize: 'small'
        },
        {
            code: 'Home',
            text: 'HOME',
            fontSize: 'small'
        },
        {
            code: 'PageUp',
            text: 'PAGE UP',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'NumLock',
            text: 'NUM LOCK',
            fontSize: 'small'
        },
        {
            code: 'NumpadDivide',
            text: '/'
        },
        {
            code: 'NumpadMultiply',
            text: '*'
        },
        {
            code: 'NumpadSubtract',
            text: '-'
        }
    ];
    var row2 = [
        {
            code: 'Tab',
            text: 'TAB ⇥',
            fontSize: 'small'
        },
        {
            code: 'KeyQ',
            text: 'Q'
        },
        {
            code: 'KeyW',
            text: 'W'
        },
        {
            code: 'KeyE',
            text: 'E'
        },
        {
            code: 'KeyR',
            text: 'R'
        },
        {
            code: 'KeyT',
            text: 'T'
        },
        {
            code: 'KeyY',
            text: 'Y'
        },
        {
            code: 'KeyU',
            text: 'U'
        },
        {
            code: 'KeyI',
            text: 'I'
        },
        {
            code: 'KeyO',
            text: 'O'
        },
        {
            code: 'KeyP',
            text: 'P'
        },
        {
            code: 'BracketLeft',
            topSymbol: '{',
            bottomSymbol: '['
        },
        {
            code: 'BracketRight',
            topSymbol: '}',
            bottomSymbol: ']'
        },
        {
            code: 'Enter',
            text: '⏎'
        },
        {
            type: 'spacer',
            name: 'before-sys'
        },
        {
            code: 'Delete',
            text: 'DELETE',
            fontSize: 'small'
        },
        {
            code: 'End',
            text: 'END',
            fontSize: 'small'
        },
        {
            code: 'PageDown',
            text: 'PAGE DOWN',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-numpad'
        },
        {
            code: 'Numpad7',
            text: '7'
        },
        {
            code: 'Numpad8',
            text: '8'
        },
        {
            code: 'Numpad9',
            text: '9'
        },
        {
            code: 'NumpadAdd',
            text: '+'
        }
    ];
    var row3 = [
        {
            code: 'CapsLock',
            text: 'CAPS LOCK',
            fontSize: 'small'
        },
        {
            code: 'KeyA',
            text: 'A'
        },
        {
            code: 'KeyS',
            text: 'S'
        },
        {
            code: 'KeyD',
            text: 'D'
        },
        {
            code: 'KeyF',
            text: 'F'
        },
        {
            code: 'KeyG',
            text: 'G'
        },
        {
            code: 'KeyH',
            text: 'H'
        },
        {
            code: 'KeyJ',
            text: 'J'
        },
        {
            code: 'KeyK',
            text: 'K'
        },
        {
            code: 'KeyL',
            text: 'L'
        },
        {
            code: 'Semicolon',
            topSymbol: ':',
            bottomSymbol: ';'
        },
        {
            code: 'Quote',
            topSymbol: '"',
            bottomSymbol: '\''
        },
        {
            code: 'Backslash',
            topSymbol: '|',
            bottomSymbol: '\\'
        },
        {
            type: 'spacer',
            name: 'before-numpad-long'
        },
        {
            code: 'Numpad4',
            text: '4'
        },
        {
            code: 'Numpad5',
            text: '5'
        },
        {
            code: 'Numpad6',
            text: '6'
        }
    ];
    var row4 = [
        {
            code: 'ShiftLeft',
            text: 'SHIFT',
            fontSize: 'small'
        },
        {
            code: 'KeyZ',
            text: 'Z'
        },
        {
            code: 'KeyX',
            text: 'X'
        },
        {
            code: 'KeyC',
            text: 'C'
        },
        {
            code: 'KeyV',
            text: 'V'
        },
        {
            code: 'KeyB',
            text: 'B'
        },
        {
            code: 'KeyN',
            text: 'N'
        },
        {
            code: 'KeyM',
            text: 'M'
        },
        {
            code: 'Comma',
            topSymbol: '<',
            bottomSymbol: ','
        },
        {
            code: 'Period',
            topSymbol: '>',
            bottomSymbol: '.'
        },
        {
            code: 'Slash',
            topSymbol: '?',
            bottomSymbol: '/'
        },
        {
            code: 'ShiftRight',
            text: 'SHIFT',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-arrow-up'
        },
        {
            code: 'ArrowUp',
            text: '↑'
        },
        {
            type: 'spacer',
            name: 'after-arrow-up'
        },
        {
            code: 'Numpad1',
            text: '1'
        },
        {
            code: 'Numpad2',
            text: '2'
        },
        {
            code: 'Numpad3',
            text: '3'
        },
        {
            code: 'NumpadEnter',
            text: 'ENTER',
            fontSize: 'small'
        },
    ];
    var row5 = [
        {
            code: 'ControlLeft',
            text: 'CTRL',
            fontSize: 'small'
        },
        {
            code: 'MetaLeft',
            topLeftSymbol: ' ',
            topRightSymbol: ' ',
            bottomLeftSymbol: ' ',
            bottomRightSymbol: ' '
        },
        {
            code: 'AltLeft',
            text: 'ALT',
            fontSize: 'small'
        },
        {
            code: 'Space'
        },
        {
            code: 'AltRight',
            text: 'ALT',
            fontSize: 'small'
        },
        {
            code: 'MetaRight',
            topLeftSymbol: ' ',
            topRightSymbol: ' ',
            bottomLeftSymbol: ' ',
            bottomRightSymbol: ' '
        },
        {
            code: 'ContextMenu',
            topLeftSymbol: ' ',
            topRightSymbol: ' ',
            bottomLeftSymbol: ' ',
            bottomRightSymbol: ' '
        },
        {
            code: 'ControlRight',
            text: 'CTRL',
            fontSize: 'small'
        },
        {
            type: 'spacer',
            name: 'before-arrows'
        },
        {
            code: 'ArrowLeft',
            text: '←'
        },
        {
            code: 'ArrowDown',
            text: '↓'
        },
        {
            code: 'ArrowRight',
            text: '→'
        },
        {
            type: 'spacer',
            name: 'after-arrows'
        },
        {
            code: 'Numpad0',
            text: '0'
        },
        {
            code: 'NumpadDecimal',
            text: '.'
        }
    ];
    var row6 = [
        {
            type: 'led',
            code: 'NumLock'
        },
        {
            type: 'led',
            code: 'CapsLock'
        },
        {
            type: 'led',
            code: 'ScrollLock'
        }
    ];
    var winKeyboardLayout = {
        type: 'win',
        rows: [
            row0,
            row1,
            row2,
            row3,
            row4,
            row5,
            row6,
        ]
    };

    var b$5 = block('keyboard-layout');
    function KeyboardLayout(props) {
        var layout = props.layout;
        var items = layout.rows.map(function (rowData, num) {
            return (_("div", { key: num, class: b$5('row', { num: num }) },
                _(KeyboardRow, { rowData: rowData })));
        });
        return (_("div", { class: b$5({ type: layout.type }) }, items));
    }
    function getLayoutData(layout) {
        switch (layout) {
            case 'ipad':
                return ipadKeyboardLayout;
            case 'mac':
                return macKeyboardLayout;
            case 'macbook':
                return macbookKeyboardLayout;
            default:
                return winKeyboardLayout;
        }
    }

    var b$4 = block('radio-button');
    function RadioButton(props) {
        var handleClick = q(function () {
            var _a;
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, props.value);
        }, [props.onClick]);
        var className = classname(b$4({ selected: props.selected }), props.class);
        return (_("li", { title: props.title, class: className, onClick: handleClick, key: props.value }, props.text));
    }

    var b$3 = block('radio-buttons');
    function getSelectedButton(buttons) {
        var selectedButtons = buttons.filter(function (item) { return item.selected; });
        return selectedButtons[0];
    }
    function RadioButtons(props) {
        var className = props.className, buttons = props.buttons, label = props.label, onSelect = props.onSelect;
        var selectedButton = getSelectedButton(buttons);
        var _a = h(selectedButton ? selectedButton.value : undefined), selectedValue = _a[0], setSelectedValue = _a[1];
        var handleSelect = q(function (value) {
            setSelectedValue(value);
            onSelect(value);
        }, [onSelect]);
        return (_("fieldset", { class: classname(b$3(), className) },
            label ? (_("legend", { class: b$3('label', { hidden: props.hideLabel }) }, label)) : '',
            _("ul", { class: b$3('items') }, buttons.map(function (item) {
                return (_(RadioButton, { key: item.value, class: b$3('item'), selected: item.value === selectedValue, title: item.title, text: item.text, value: item.value, onClick: handleSelect }));
            }))));
    }

    function isMacintosh() {
        return navigator.userAgent.indexOf('Mac') > -1;
    }

    function isIpad() {
        if (/iPad/.test(navigator.platform)) {
            return true;
        }
        else {
            return Boolean(navigator.maxTouchPoints &&
                navigator.maxTouchPoints > 2 &&
                /MacIntel/.test(navigator.platform));
        }
    }

    function getIsMacBook() {
        var _a = window.screen, width = _a.width, height = _a.height;
        var aspectRatio = width / height;
        return aspectRatio > 1.5 && aspectRatio < 1.7;
    }
    function getPlatform() {
        if (isIpad()) {
            return 'ipad';
        }
        if (isMacintosh()) {
            return getIsMacBook() ? 'macbook' : 'mac';
        }
        return 'win';
    }

    var b$2 = block('keyboard');
    var platform = isSsr ? 'win' : getPlatform();
    function Keyboard() {
        var buttons = [
            {
                text: 'Win',
                value: 'win',
                title: i18n('Windows Logitech G810 keyboard'),
                selected: platform === 'win'
            },
            {
                text: 'Mac',
                value: 'mac',
                title: i18n('Apple Magic Keyboard with Numeric Keypad'),
                selected: platform === 'mac'
            },
            {
                text: 'MacBook',
                value: 'macbook',
                title: i18n('MacBook keyboard'),
                selected: platform === 'macbook',
            },
            {
                text: 'iPad',
                value: 'ipad',
                title: i18n('Apple Magic Keyboard for iPad'),
                selected: platform === 'ipad'
            }
        ];
        var selectedButton = getSelectedButton(buttons);
        var _a = h(selectedButton && selectedButton.value), layout = _a[0], setLayout = _a[1];
        var handleReset = q(function () {
            keyboardStateController.clearState();
        }, []);
        var handleSelect = q(function (value) {
            setLayout(value);
        }, [layout]);
        return (_("div", { class: b$2() },
            _("div", { class: b$2('top-controls') },
                _(RadioButtons, { hideLabel: true, label: i18n('Select keyboard'), onSelect: handleSelect, buttons: buttons })),
            _(KeyboardLayout, { layout: getLayoutData(layout) }),
            _("div", { class: b$2('bottom-controls') },
                _(Button, { title: i18n('Reset pressed keys on keyboard'), onClick: handleReset }, i18n('Reset')))));
    }

    var b$1 = block('section');
    function Section(props) {
        if (!props.children) {
            return null;
        }
        var className = classname(b$1(), props.class);
        return props.name ? (_("section", { class: className },
            _("h2", { class: b$1('name') }, props.name),
            _("div", { class: b$1('body') }, props.children))) : (_("div", { class: b$1() }, props.children));
    }

    var b = block('nav-list');
    function NavList(props) {
        var filteredItems = props.items.filter(function (item) { return Boolean(item); });
        var className = classname(props.class, b());
        return filteredItems.length ? (_("nav", { class: className },
            _("ul", { class: b('list') }, filteredItems.map(function (item) { return (_("li", null, item)); })))) : null;
    }

    var keyset = {
        'Keyboard': {
            'en': 'Keyboard',
            'ru': 'Клавиатура'
        },
        'Windows Logitech G810 keyboard': {
            'en': 'Windows Logitech G810 keyboard',
            'ru': 'Клавиатура Windows Logitech G810'
        },
        'Apple Magic Keyboard with Numeric Keypad': {
            'en': 'Apple Magic Keyboard with Numeric Keypad',
            'ru': 'Клавиатура Apple MagicKeyboard with Numeric Keypad'
        },
        'MacBook keyboard': {
            'en': 'MacBook keyboard',
            'ru': 'MacBook клавиатура'
        },
        'Apple Magic Keyboard for iPad': {
            'en': 'Apple Magic Keyboard for iPad',
            'ru': 'Клавиатура Apple Magic Keyboard for iPad'
        },
        'Select keyboard': {
            'en': 'Select keyboard',
            'ru': 'Выберите клавиатуру'
        },
        'Reset pressed keys on keyboard': {
            'en': 'Reset pressed keys on keyboard',
            'ru': 'Сбросить нажатые клавиши на клавиатуре'
        },
        'Testing keyboard': {
            'en': 'Testing keyboard',
            'ru': 'Тестирование клавиатуры'
        },
    };

    addI18nKeyset(keyset);
    function KeyboardPage() {
        var items = [
            [(_(Link, { href: getPagePath('keycodes') }, i18n('Displaying key codes')))]
        ];
        return (_(Page, { title: i18n('Testing keyboard') },
            _("div", null,
                _(Keyboard, null),
                _(Section, { name: i18n('Additionally') },
                    _(NavList, { items: items })))));
    }

    function renderToRoot(Component) {
        return B$1(_(Component, null), document.querySelector('.root'));
    }

    keyboardStateController.on();
    keyboardLedController.on();
    renderToRoot(KeyboardPage);

}));
