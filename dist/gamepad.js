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

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var n$1,l$1,u$1,i$1,o$1,r$1,f$1,e$2,c$1,s$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$a(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?(e&&"string"==typeof y.type&&!n.contains(e)&&(e=x(v)),e=I(y,e,n)):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y$1(i)?g(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a=f-r:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&a++,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$2,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$2++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b$a(m,M),h.constructor=T,h.render=q$1),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l$1.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(L=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n$1.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A(l,s,g,m[s],o));}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function V(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n$1.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n$1=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$a.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b$a.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b$a.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$2=0,c$1=F(!1),s$1=F(!0);

    var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$1=new Map;function e$1(s){var r=t$1.get(this);return r||(r=new Map,t$1.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

    var m$1=e$1.bind(_);

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

    var b$9 = block('header');
    function Header(props) {
        return m$1(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$9(), props.children);
    }
    var templateObject_1$f;

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
        'Network & geo': {
            'en': 'Network & geo',
            'ru': 'Сеть и гео'
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
        'Select camera': {
            'en': 'Select camera',
            'ru': 'Выбрать камеру'
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
        }
    };

    var i18nKeysets = keysets;
    var i18nLang;
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

    var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

    function WarningMessage(props) {
        return m$1(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["<span>\u26A0\uFE0F ", "</span>"], ["<span>\u26A0\uFE0F ", "</span>"])), props.children);
    }
    var templateObject_1$e;

    var b$8 = block('row');
    function Row(props) {
        return m$1(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$8(), b$8('category'), props.name, b$8('body'), props.children);
    }
    var templateObject_1$d;

    var b$7 = block('tree-list');

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
            return m$1(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["<span class=\"", "\">'", "'</span>"], ["<span class=\"", "\">'", "'</span>"])), b$7('string'), data);
        }
        if (typeof data === 'number') {
            return m$1(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$7('number'), data);
        }
        if (typeof data === 'bigint') {
            return m$1(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["<span class=\"", "\">", "n</span>"], ["<span class=\"", "\">", "n</span>"])), b$7('bigint'), data);
        }
        if (typeof data === 'boolean') {
            return m$1(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$7('boolean'), String(data));
        }
        if (typeof data === 'function') {
            return m$1(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["<span class=\"", "\">function</span>"], ["<span class=\"", "\">function</span>"])), b$7('function'));
        }
        if (typeof data === 'symbol') {
            return m$1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$7('symbol'), data);
        }
        if (typeof data === 'undefined') {
            return m$1(templateObject_7 || (templateObject_7 = __makeTemplateObject(["<span class=\"", "\">undefined</span>"], ["<span class=\"", "\">undefined</span>"])), b$7('undefined'));
        }
        if (data === null) {
            return m$1(templateObject_8 || (templateObject_8 = __makeTemplateObject(["<span class=\"", "\">null</span>"], ["<span class=\"", "\">null</span>"])), b$7('null'));
        }
        if (Array.isArray(data)) {
            if (options.compactArrayWithSimpleTypes && isArrayWithSimpleTypes(data)) {
                return m$1(templateObject_10 || (templateObject_10 = __makeTemplateObject(["[", "\n                ", "\n            ", "]"], ["[", "\n                ", "\n            ", "]"])), ' ', data.map(function (item, i) {
                    return m$1(templateObject_9 || (templateObject_9 = __makeTemplateObject(["", "", ""], ["", "", ""])), i ? ', ' : '', buildData(item, options, level + 1));
                }), ' ');
            }
            else {
                return m$1(templateObject_13 || (templateObject_13 = __makeTemplateObject(["[<ul>\n                ", "\n            </ul>]"], ["[<ul>\n                ", "\n            </ul>]"])), data.map(function (item, i) {
                    var arrayIndex = options.showArrayIndex ? m$1(templateObject_11 || (templateObject_11 = __makeTemplateObject([" <span class=\"", "\">", ": </span>"], [" <span class=\"", "\">", ": </span>"])), b$7('index'), i) : '';
                    return m$1(templateObject_12 || (templateObject_12 = __makeTemplateObject(["<li>", "", "", "</li>"], ["<li>", "", "", "</li>"])), arrayIndex, buildData(item, options, level + 1), i === data.length - 1 ? '' : ',');
                }));
            }
        }
        if (options.compactObject && level > 0) {
            return m$1(templateObject_15 || (templateObject_15 = __makeTemplateObject(["{", "\n            ", "\n        ", "}"], ["{", "\n            ", "\n        ", "}"])), ' ', Object.keys(data).map(function (key, i, items) {
                return m$1(templateObject_14 || (templateObject_14 = __makeTemplateObject(["<span class=\"", "\">", ": </span>", "", ""], ["<span class=\"", "\">", ": </span>", "", ""])), b$7('property'), key, buildData(data[key], options, level + 1), i === items.length - 1 ? '' : ', ');
            }), ' ');
        }
        var hasBraces = Boolean(options.showCurlyBracesAtRootLevel || level);
        return m$1(templateObject_17 || (templateObject_17 = __makeTemplateObject(["", "<ul class=\"", "\">\n        ", "\n    </ul>", ""], ["", "<ul class=\"", "\">\n        ", "\n    </ul>", ""])), hasBraces ? '{' : '', b$7('ul', { padding: hasBraces ? 'yes' : 'no' }), Object.keys(data).map(function (key, i, items) {
            return m$1(templateObject_16 || (templateObject_16 = __makeTemplateObject(["<li><span class=\"", "\">", ": </span>", "", "</li>"], ["<li><span class=\"", "\">", ": </span>", "", "</li>"])), b$7('property'), key, buildData(data[key], options, level + 1), i === items.length - 1 ? '' : ',');
        }), hasBraces ? '}' : '');
    }
    var templateObject_1$c, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

    function TreeList(props) {
        return m$1(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n        <", " name=\"", "\">\n            <div class=\"", "\">\n                ", "\n            </div>\n        <//>"], ["\n        <", " name=\"", "\">\n            <div class=\"", "\">\n                ", "\n            </div>\n        <//>"])), Row, props.title, b$7(), buildData(props.data, props.options));
    }
    var templateObject_1$b;

    var useForceUpdate = function () {
        var _a = h({}), updateState = _a[1];
        return q(function () { return updateState({}); }, []);
    };

    var b$6 = block('spinner');
    function Spinner(props) {
        return m$1(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["<div class=\"", "\"></div>"], ["<div class=\"", "\"></div>"])), b$6({ size: props.size }));
    }
    var templateObject_1$a;

    var b$5 = block('xbox-buttons');
    function XboxButtons() {
        return m$1(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">X</div>\n        <div class=\"", "\">Y</div>\n        <div class=\"", "\">A</div>\n        <div class=\"", "\">B</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">X</div>\n        <div class=\"", "\">Y</div>\n        <div class=\"", "\">A</div>\n        <div class=\"", "\">B</div>\n    </div>"])), b$5(), b$5('x'), b$5('y'), b$5('a'), b$5('b'));
    }
    var templateObject_1$9;

    var b$4 = block('gamepad-list');
    function GamepadList() {
        if (!navigator.getGamepads) {
            return m$1(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('🎮 Gamepad API is not supported.'));
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
        var result = navigator.getGamepads();
        var gamepads = Array.isArray(result) ? result.filter(function (item) { return item !== null; }) : [];
        return gamepads.length ? m$1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$4(), gamepads.map(function (rawItem, i) {
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
            return m$1(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n                        <div class=\"", "\">\n                            <div class=\"", "\">", "</div>\n                            <", " name=\"", "\" data=\"", "\" options=\"", "\"><//>\n                        </div>"], ["\n                        <div class=\"", "\">\n                            <div class=\"", "\">", "</div>\n                            <", " name=\"", "\" data=\"", "\" options=\"", "\"><//>\n                        </div>"])), b$4('item'), b$4('title'), item.id, TreeList, i, data, options);
        })) : m$1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<", " //>"], ["<", " //>"])), GamepadWait);
    }
    function GamepadWait() {
        return m$1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<", " size=\"m\" //> ", " <", " //>"], ["<", " size=\"m\" //> ", " <", " //>"])), Spinner, i18n('Connect and press any button on the gamepad.'), XboxButtons);
    }
    var templateObject_1$8, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5;

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
        var lang = getLangFromUrl() || getLangFromNavigator();
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

    var counterId = window.location.host === 'caniwatchvideo.online' ? '95998062' : '97747983';
    hit(counterId);
    setI18nLang(getLang());
    withInstallApp();

    var b$3 = block('link');
    function Link(props) {
        return m$1(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["<a class=\"", "\" href=\"", "\">", "</a>"], ["<a class=\"", "\" href=\"", "\">", "</a>"])), b$3({ theme: props.theme }), props.href, props.children);
    }
    var templateObject_1$7;

    var b$2 = block('footer');
    function Footer() {
        return m$1(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">\u00A9 <span class=\"", "\">V</span><span class=\"", "\">v</span><span class=\"", "\">i</span><span class=\"", "\">d</span><span class=\"", "\">e</span><span class=\"", "\">o</span></div>\n        <div class=\"", "\"><", " target=\"_blank\" href=\"https://github.com/vvideo/caniwatchvideo/issues\">", "<//></div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">\u00A9 <span class=\"", "\">V</span><span class=\"", "\">v</span><span class=\"", "\">i</span><span class=\"", "\">d</span><span class=\"", "\">e</span><span class=\"", "\">o</span></div>\n        <div class=\"", "\"><", " target=\"_blank\" href=\"https://github.com/vvideo/caniwatchvideo/issues\">", "<//></div>\n    </div>"])), b$2(), b$2('item'), b$2('l1'), b$2('l2'), b$2('l3'), b$2('l4'), b$2('l5'), b$2('l6'), b$2('item', { g: true }), Link, i18n('Report a bug'));
    }
    var templateObject_1$6;

    var b$1 = block('main-menu');
    function MainMenu(props) {
        return m$1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$1(), props.items.filter(function (item) { return !item.hidden; }).map(function (item) {
            return m$1(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["<a class=\"", "\" href=\"", "\">", "</a>"], ["<a class=\"", "\" href=\"", "\">", "</a>"])), b$1('item', { selected: item.selected }), item.url, item.title);
        }));
    }
    var templateObject_1$5, templateObject_2;

    var pages = [
        {
            "header": {
                "en": "Can I watch video?",
                "ru": "Могу ли я смотреть видео?"
            },
            "menuTitle": {
                "en": "Video",
                "ru": "Видео"
            },
            "id": "index",
            "url": "./"
        },
        {
            "menuTitle": {
                "en": "Audio",
                "ru": "Аудио"
            },
            "id": "audio",
            "url": "./audio.html"
        },
        {
            "menuTitle": {
                "en": "Screen",
                "ru": "Экран"
            },
            "id": "screen",
            "url": "./screen.html"
        },
        {
            "menuTitle": {
                "en": "Webcamera",
                "ru": "Веб-камера"
            },
            "id": "camera",
            "url": "./camera.html"
        },
        {
            "menuTitle": {
                "en": "GPU",
                "ru": "GPU"
            },
            "id": "gpu",
            "url": "./gpu.html"
        },
        {
            "menuTitle": {
                "en": "Mouse",
                "ru": "Мышь"
            },
            "id": "mouse",
            "url": "./mouse.html"
        },
        {
            "menuTitle": {
                "en": "Keyboard",
                "ru": "Клавиатура"
            },
            "id": "keyboard",
            "url": "./keyboard.html"
        },
        {
            "menuTitle": {
                "en": "Key codes",
                "ru": "Коды клавиш"
            },
            "id": "keycodes",
            "url": "./keycodes.html",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Gamepad",
                "ru": "Джойстик"
            },
            "id": "gamepad",
            "url": "./gamepad.html"
        },
        {
            "menuTitle": {
                "en": "Storage",
                "ru": "Хранилище"
            },
            "id": "storage",
            "url": "./storage.html"
        },
        {
            "menuTitle": {
                "en": "Network & geo",
                "ru": "Сеть и гео"
            },
            "id": "network",
            "url": "./network.html"
        },
        {
            "menuTitle": {
                "en": "Platform",
                "ru": "Платформа"
            },
            "id": "platform",
            "url": "./platform.html"
        },
        {
            "menuTitle": {
                "en": "Battery",
                "ru": "Батарея"
            },
            "id": "battery",
            "url": "./battery.html"
        },
        {
            "menuTitle": {
                "en": "Fonts",
                "ru": "Шрифты"
            },
            "id": "fonts",
            "url": "./fonts.html",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "404",
                "ru": "404"
            },
            "id": "error404",
            "url": "./error404.html",
            "hidden": true
        },
        {
            "menuTitle": {
                "en": "Test dead pixels",
                "ru": "Тестирование битых пикселей"
            },
            "id": "test-dead-pixels",
            "url": "./test-dead-pixels.html",
            "hidden": true
        }
    ];

    function getIdFromLocation() {
        var id = window.location.pathname
            // Fix for github pages
            .replace(/^\/caniwatchvideo/, '')
            .split(/[?./]/)[1];
        return id ? id : 'index';
    }
    function Menu() {
        var id = getIdFromLocation();
        var items = pages.map(function (item) {
            var selected = item.id === id;
            if (selected) {
                document.title = i18nWithKeyset(item.header || item.menuTitle);
            }
            return __assign(__assign({}, item), { title: i18nWithKeyset(item.menuTitle), selected: selected });
        });
        return m$1(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["<", " items=\"", "\"><//>"], ["<", " items=\"", "\"><//>"])), MainMenu, items);
    }
    var templateObject_1$4;

    var b = block('head');
    function Head() {
        return m$1(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <span class=\"", "\"></span>", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <span class=\"", "\"></span>", "\n        </div>\n    "])), b(), b('logo'), i18n('Check device online'));
    }
    var templateObject_1$3;

    function Page(props) {
        return m$1(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n        <div>\n            <", " //>\n            <", "><//>\n\n            ", "\n\n            <", "><//>\n        </div>"], ["\n        <div>\n            <", " //>\n            <", "><//>\n\n            ", "\n\n            <", "><//>\n        </div>"])), Head, Menu, props.children, Footer);
    }
    var templateObject_1$2;

    function GamepadPage() {
        return m$1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", "><//>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", "><//>\n        <//>"])), Page, Header, i18n('Gamepad'), GamepadList);
    }
    var templateObject_1$1;

    B$1(m$1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<", " //>"], ["<", " //>"])), GamepadPage), document.querySelector('.page'));
    var templateObject_1;

}));
