(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

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
        var browserInfo = hitExtParams.browserInfo, counterId = hitExtParams.counterId, pageParams = hitExtParams.pageParams, params = hitExtParams.params;
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
        if (params) {
            data['site-info'] = JSON.stringify(params);
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
        var referrer = hitParams && hitParams.referrer !== undefined ?
            hitParams.referrer :
            getReferrer();
        var title = hitParams && hitParams.title !== undefined ?
            hitParams.title :
            getTitle();
        var url = hitParams && hitParams.url !== undefined ?
            hitParams.url :
            getPageUrl();
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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    var n$1,l$1,u$1,i$1,o$1,r$1,f$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$1(n,l){for(var u in l)n[u]=l[u];return n}function p$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y$1(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function g(n){return n.children}function b$l(n,l){this.props=n,this.context=l;}function m$2(n,l){if(null==l)return n.__?m$2(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?m$2(n):null}function w$1(n,u,t){var i,o=n.__v,r=o.__e,f=n.__P;if(f)return (i=v$1({},o)).__v=o.__v+1,l$1.vnode&&l$1.vnode(i),M(f,i,o,n.__n,void 0!==f.ownerSVGElement,32&o.__u?[r]:null,u,null==r?m$2(o):r,!!(32&o.__u),t),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=r&&k$1(i),i}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function x$1(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!C$1.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(C$1);}function C$1(){var n,u,t,o=[],r=[];for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(t=i$1.length,u=w$1(n,o,r)||u,0===t||i$1.length>t?(j$1(o,u,r),r.length=o.length=0,u=void 0,i$1.sort(f$1)):u&&l$1.__c&&l$1.__c(u,s$1));u&&j$1(o,u,r),C$1.__r=0;}function P(n,l,u,t,i,o,r,f,e,a,h){var v,p,y,d,_,g=t&&t.__k||s$1,b=l.length;for(u.__d=e,S(u,l,g),e=u.__d,v=0;v<b;v++)null!=(y=u.__k[v])&&"boolean"!=typeof y&&"function"!=typeof y&&(p=-1===y.__i?c$1:g[y.__i]||c$1,y.__i=v,M(n,y,p,i,o,r,f,e,a,h),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&N(p.ref,null,y),h.push(y.ref,y.__c||d,y)),null==_&&null!=d&&(_=d),65536&y.__u||p.__k===y.__k?e=$(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=_;}function S(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?d$1(null,i,null,null,null):h$1(i)?d$1(g,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?d$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=I(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r?f==r-1&&(a=f-r):a=0,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=m$2(o)),O(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=m$2(o)),O(o,o));}function $(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=$(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function I(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=Date.now(),n.addEventListener(l,o?L:D$1,o)):n.removeEventListener(l,o?L:D$1,o);else {if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&"role"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function D$1(n){if(this.l){var u=this.l[n.type+!1];if(n.t){if(n.t<=u.u)return}else n.t=Date.now();return u(l$1.event?l$1.event(n):n)}}function L(n){if(this.l)return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function M(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,m,w,k,x,C,S,$,H,I,T,A=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof A)try{if(k=u.props,x=(a=A.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?w=(p=u.__c=t.__c).__=p.__E:("prototype"in A&&A.prototype.render?u.__c=p=new A(k,C):(u.__c=p=new b$l(k,C),p.constructor=A,p.render=q$1),x&&x.sub(p),p.props=k,p.state||(p.state={}),p.context=C,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$1({},p.__s)),v$1(p.__s,A.getDerivedStateFromProps(k,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==A.getDerivedStateFromProps&&k!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,C),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=k,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,m);});}if(p.context=C,p.props=k,p.__P=n,p.__e=!1,$=l$1.__r,H=0,"prototype"in A&&A.prototype.render){for(p.state=p.__s,p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),I=0;I<p._sb.length;I++)p.__h.push(p._sb[I]);p._sb=[];}else do{p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(i=v$1(v$1({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,_)),P(n,h$1(T=null!=a&&a.type===g&&null==a.key?a.props.children:a)?T:[T],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__u&=-161,p.__h.length&&f.push(p),w&&(p.__E=p.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,s){var a,v,y,d,_,g,b,w=t.props,k=u.props,x=u.type;if("svg"===x&&(o=!0),null!=r)for(a=0;a<r.length;a++)if((_=r[a])&&"setAttribute"in _==!!x&&(x?_.localName===x:3===_.nodeType)){l=_,r[a]=null;break}if(null==l){if(null===x)return document.createTextNode(k);l=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,k.is&&k),r=null,e=!1;}if(null===x)w===k||e&&l.data===k||(l.data=k);else {if(r=r&&n$1.call(l.childNodes),w=t.props||c$1,!e&&null!=r)for(w={},a=0;a<l.attributes.length;a++)w[(_=l.attributes[a]).name]=_.value;for(a in w)_=w[a],"children"==a||("dangerouslySetInnerHTML"==a?y=_:"key"===a||a in k||A(l,a,null,_,o));for(a in k)_=k[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?b=_:"key"===a||e&&"function"!=typeof _||w[a]===_||A(l,a,_,w[a],o);if(v)e||y&&(v.__html===y.__html||v.__html===l.innerHTML)||(l.innerHTML=v.__html),u.__k=[];else if(y&&(l.innerHTML=""),P(l,h$1(d)?d:[d],u,t,i,o&&"foreignObject"!==x,r,f,r?r[0]:t.__k&&m$2(t,0),e,s),null!=r)for(a=r.length;a--;)null!=r[a]&&p$1(r[a]);e||(a="value",void 0!==g&&(g!==l[a]||"progress"===x&&!g||"option"===x&&g!==w[a])&&A(l,a,g,w[a],!1),a="checked",void 0!==b&&b!==l[a]&&A(l,a,b,w[a],!1));}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function O(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&O(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p$1(n.__e),n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],M(t,u=(!o&&i||t).__k=y$1(g,null,[u]),r||c$1,c$1,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n$1.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),u.__d=void 0,j$1(f,u,e);}n$1=s$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$l.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$1({},this.state),"function"==typeof n&&(n=n(v$1({},u),this.props)),n&&v$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),x$1(this));},b$l.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),x$1(this));},b$l.prototype.render=g,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},C$1.__r=0;

    var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$1=new Map;function e$1(s){var r=t$1.get(this);return r||(r=new Map,t$1.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

    var m$1=e$1.bind(y$1);

    function block(name) {
        return function (mods) {
            var className = name;
            if (typeof mods === 'string') {
                return "".concat(name, "__").concat(mods);
            }
            if (mods) {
                Object.keys(mods).forEach(function (modName) {
                    var modValue = mods[modName];
                    if (modValue === false || modValue === null || modValue === undefined || modValue === '') {
                        return;
                    }
                    className += ' ' + name + '_';
                    if (mods[modName] === true) {
                        className += modName;
                    }
                    else {
                        className += modName + '_' + modValue;
                    }
                });
            }
            return className;
        };
    }

    var b$k = block('badge');
    function Badge(props) {
        var _a, _b;
        return m$1(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "])), b$k({
            type: props.type,
            background: props.background,
            disabled: props.disabled,
            hidden: props.hidden,
            size: props.size,
            click: props.click,
        }), ((_a = props.top) === null || _a === void 0 ? void 0 : _a.text) ? m$1(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["<div class=\"", "\" title=\"", "\">", "</div>"], ["<div class=\"", "\" title=\"", "\">", "</div>"])), b$k('top-text'), props.top.title, props.top.text) : '', b$k('body'), props.text, ((_b = props.bottom) === null || _b === void 0 ? void 0 : _b.text) ? m$1(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["<div class=\"", "\" title=\"", "\">", "</div>"], ["<div class=\"", "\" title=\"", "\">", "</div>"])), b$k('bottom-text'), props.bottom.title, props.bottom.text) : '');
    }
    var templateObject_1$t, templateObject_2$d, templateObject_3$4;

    const AAC_CONTENT_TYPE = 'audio/mp4; codecs="mp4a.40.2"';
    const DOLBY_AC3_CONTENT_TYPE = 'audio/mp4; codecs="ac-3"';
    const DOLBY_EC3_CONTENT_TYPE = 'audio/mp4; codecs="ec-3"';
    const VORBIS_CONTENT_TYPE = 'audio/mp4; codecs="vorbis"';
    const OPUS_CONTENT_TYPE = 'audio/mp4; codecs="opus"';
    const FLAC_CONTENT_TYPE = 'audio/mp4; codecs="flac"';
    const MP3_CONTENT_TYPE = 'audio/mpeg';
    const MP4_AUDIO_CONTENT_TYPE = 'audio/mp4';
    const MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE = 'audio/mp4; codecs="mhm1.0x0D"';
    const DTS_CORE_CONTENT_TYPE = 'audio/mp4; codecs="dtsc"';
    const DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE = 'audio/mp4; codecs="dtsh"';
    const DTS_UHD_PROFILE_2_CONTENT_TYPE = 'audio/mp4; codecs="dtsx"';

    let defaultVideoElement;
    function canPlayType(type) {
        if (!defaultVideoElement) {
            defaultVideoElement = document.createElement('video');
        }
        return defaultVideoElement.canPlayType ?
            defaultVideoElement.canPlayType(type) :
            '';
    }

    function isTypeSupported(value) {
        if (!window.MediaSource) {
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
        const canPlayTypeResult = canPlayType(contentType) !== '';
        const isTypeSupportedResult = isTypeSupported(contentType);
        return {
            file: canPlayTypeResult,
            mediaSource: isTypeSupportedResult,
            any: canPlayTypeResult || isTypeSupportedResult,
            both: canPlayTypeResult && isTypeSupportedResult,
            contentType,
        };
    }

    function isMp3Supported() {
        return isContentTypeSupported(MP3_CONTENT_TYPE);
    }
    function isMp4AudioSupported() {
        return isContentTypeSupported(MP4_AUDIO_CONTENT_TYPE);
    }
    function isAacSupported() {
        return isContentTypeSupported(AAC_CONTENT_TYPE);
    }
    function isDolbyDigitalSupported() {
        return isContentTypeSupported(DOLBY_AC3_CONTENT_TYPE);
    }
    function isDolbyDigitalPlusSupported() {
        return isContentTypeSupported(DOLBY_EC3_CONTENT_TYPE);
    }
    // audio/mp4; codecs="ec-3"; spatialRendering=true - no support
    function isDolbyAtmosSupported() {
        var _a, _b, _c;
        // @ts-ignore
        const cast = window.cast;
        // Chromecast
        if (cast) {
            return Boolean((_c = (_b = (_a = cast.framework) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.DeviceCapabilities) === null || _c === void 0 ? void 0 : _c.IS_DOLBY_ATMOS_SUPPORTED);
        }
        let result = false;
        // Hisense VIDAA
        if (window.Hisense_GetSupportForDolbyAtmos) {
            try {
                result = window.Hisense_GetSupportForDolbyAtmos();
            }
            catch (e) { }
        }
        return result;
    }
    function isMpegHAudioSupported() {
        return isContentTypeSupported(MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE);
    }
    function isVorbisSupported() {
        return isContentTypeSupported(VORBIS_CONTENT_TYPE);
    }
    function isFlacSupported() {
        return isContentTypeSupported(FLAC_CONTENT_TYPE);
    }
    function isOpusSupported() {
        return isContentTypeSupported(OPUS_CONTENT_TYPE);
    }
    function isDtsSupported() {
        return isContentTypeSupported(DTS_CORE_CONTENT_TYPE);
    }
    function isDtsHdSupported() {
        return isContentTypeSupported(DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE);
    }
    function isDtsXSupported() {
        return isContentTypeSupported(DTS_UHD_PROFILE_2_CONTENT_TYPE);
    }

    const H264_BASELINE_CONTENT_TYPE = 'video/mp4; codecs="avc1.42E01E"';
    const H264_MAIN_CONTENT_TYPE = 'video/mp4; codecs="avc1.4D401E"';
    const H264_HIGH_CONTENT_TYPE = 'video/mp4; codecs="avc1.64001E"';
    const VP8_CONTENT_TYPE = 'video/webm; codecs="vp8"';
    const VP9_CONTENT_TYPE = 'video/webm; codecs="vp9"';
    const AV1_CONTENT_TYPE = 'video/mp4; codecs="av01.0.01M.08"';
    const HEV_MAIN_CONTENT_TYPE = 'video/mp4; codecs="hev1.1.6.L123.B0"';
    const HEV_MAIN10_CONTENT_TYPE = 'video/mp4; codecs="hev1.2.4.L153.B0"';
    // For iOS
    const HVC_MAIN_CONTENT_TYPE = 'video/mp4; codecs="hvc1.1.6.L123.B0"';
    const HVC_MAIN10_CONTENT_TYPE = 'video/mp4; codecs="hvc1.2.4.L153.B0"';
    const DOLBY_VISION_CONTENT_TYPE = 'video/mp4; codecs="dvhe.08.09"';
    const MPEG2T_CONTENT_TYPE = 'video/mp2t';

    function isVp8Supported() {
        return isContentTypeSupported(VP8_CONTENT_TYPE);
    }
    function isVp9Supported() {
        return isContentTypeSupported(VP9_CONTENT_TYPE);
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
    function isHevcMainSupported() {
        const resultHev = isContentTypeSupported(HEV_MAIN_CONTENT_TYPE);
        if (resultHev.any) {
            return resultHev;
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

    const GIF_CONTENT_TYPE = 'image/gif';
    const JPEG_CONTENT_TYPE = 'image/jpeg';
    const PNG_CONTENT_TYPE = 'image/png';
    const APNG_CONTENT_TYPE = 'image/apng';
    const SVG_CONTENT_TYPE = 'image/svg+xml';
    const WEBP_CONTENT_TYPE = 'image/webp';
    const HEIF_CONTENT_TYPE = 'image/heif';
    const AVIF_CONTENT_TYPE = 'image/avif';

    function isGifSupported() {
        return isImageSupported(GIF_CONTENT_TYPE);
    }
    function isJpegSupported() {
        return isImageSupported(JPEG_CONTENT_TYPE);
    }
    function isPngSupported() {
        return isImageSupported(PNG_CONTENT_TYPE);
    }
    function isAPngSupported() {
        return isImageSupported(APNG_CONTENT_TYPE);
    }
    function isSvgSupported() {
        return Boolean(document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
    }
    function isWebpSupported() {
        return isImageSupported(WEBP_CONTENT_TYPE);
    }
    function isHeifSupported() {
        return isImageSupported(HEIF_CONTENT_TYPE);
    }
    function isAvifSupported() {
        return isImageSupported(AVIF_CONTENT_TYPE);
    }
    function isImageSupported(type) {
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
    function getIsMobile() {
        return /Mobi|Android/i.test(window.navigator.userAgent);
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
        return Boolean(window.MediaSource && window.MediaSource.isTypeSupported);
    }
    function isEmeSupported() {
        var _a, _b;
        return Boolean(window.MediaKeys) &&
            Boolean((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.requestMediaKeySystemAccess) &&
            Boolean((_b = window.MediaKeySystemAccess) === null || _b === void 0 ? void 0 : _b.prototype.getConfiguration);
    }
    function isMmsSupported() {
        return Boolean(window.ManagedMediaSource &&
            window.ManagedMediaSource.isTypeSupported);
    }

    function getDevicePixelRatio() {
        return window.devicePixelRatio || 1;
    }
    function getScreenWidth() {
        return screen.width * getDevicePixelRatio();
    }
    function isHdrScreenSupported() {
        var _a, _b, _c;
        if (window.Hisense_GetSupportForHDR) {
            return window.Hisense_GetSupportForHDR() !== 'not support';
        }
        // @ts-ignore
        const cast = window.cast;
        // Chromecast
        if (cast) {
            return Boolean((_c = (_b = (_a = cast.framework) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.DeviceCapabilities) === null || _c === void 0 ? void 0 : _c.IS_HDR_SUPPORTED);
        }
        try {
            const isHighSupported = checkDynamicRange('high');
            const isStandardSupported = checkDynamicRange('standard');
            if (!isStandardSupported) {
                return undefined;
            }
            return Boolean(isStandardSupported && isHighSupported);
        }
        catch (e) { }
        return undefined;
    }
    function checkDynamicRange(type) {
        return window.matchMedia(`(dynamic-range: ${type})`).matches ||
            // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range
            // For Firefox users on macOS 11+ (with HDR-compatible screens)
            window.matchMedia(`(video-dynamic-range: ${type})`).matches;
    }
    // 15360×8640
    const SCREEN_WIDTH_16K = 15360;
    // 7680×4320, 8192×4320, 10000×3600, 10240×4320, 10240×5760
    const SCREEN_WIDTH_10K = 10000;
    // 7680×2160, 7680×4320, 8192×1024, 8192×1638, 8192×4320, 8192×5120
    // 8192×5464, 8192×6144, 8192×8192, 8400×3600
    const SCREEN_WIDTH_8K = 7680;
    // 5760 × 3240, 6016×3200, 6016×3384, 6144×3240, 6144×3456, 6400×4096
    const SCREEN_WIDTH_6K = 5760;
    // 5120×1440, 5120×2160, 5120×2700, 5120×2880, 5120×3840, 5280×2160
    const SCREEN_WIDTH_5K = 5120;
    // 3656×2664, 3840×2160, 3996×2160, 4096×1716, 4096×2160, 4096×3072
    const SCREEN_WIDTH_4K = 3656;
    // 2560×1440
    const SCREEN_WIDTH_2d5K = 2560;
    // 2048×1080, 1998×1080, 2048×858
    const SCREEN_WIDTH_2K = 1998;
    // 1920×1080
    const SCREEN_WIDTH_FULLHD = 1920;
    // 1280×720
    const SCREEN_WIDTH_HD = 1280;
    function getResolutionBadge(width = getScreenWidth()) {
        const sizes = [
            {
                badge: 'SD',
                width: 0,
            },
            {
                width: SCREEN_WIDTH_HD,
                title: 'HD'
            },
            {
                width: SCREEN_WIDTH_FULLHD,
                title: 'FullHD'
            },
            {
                width: SCREEN_WIDTH_2K,
                title: '2K'
            },
            {
                width: SCREEN_WIDTH_2d5K,
                title: '2.5K'
            },
            {
                width: SCREEN_WIDTH_4K,
                title: '4K'
            },
            {
                width: SCREEN_WIDTH_5K,
                title: '5K'
            },
            {
                width: SCREEN_WIDTH_6K,
                title: '6K'
            },
            {
                width: SCREEN_WIDTH_8K,
                title: '8K'
            },
            {
                width: SCREEN_WIDTH_10K,
                title: '10K'
            },
            {
                width: SCREEN_WIDTH_16K,
                title: '16K'
            },
        ];
        let supportedSize = sizes[0].title;
        for (const item of sizes) {
            if (item.width === width) {
                supportedSize = item.title;
                break;
            }
            if (item.width > width) {
                break;
            }
            else {
                supportedSize = `>${item.title}`;
            }
        }
        return supportedSize;
    }

    const FAIRPLAY_KEY_SYSTEM = 'com.apple.fps';
    const FAIRPLAY_V1_KEY_SYSTEM = 'com.apple.fps.1_0';
    const FAIRPLAY_V2_KEY_SYSTEM = 'com.apple.fps.2_0';
    const FAIRPLAY_V3_KEY_SYSTEM = 'com.apple.fps.3_0';
    const WIDEWINE_KEY_SYSTEM = 'com.widevine.alpha';
    const PLAYREADY_KEY_SYSTEM = 'com.microsoft.playready';
    const PRIMETIME_KEY_SYSTEM = 'com.adobe.primetime';
    const CLEAR_KEY_SYSTEM = 'org.w3.clearkey';

    function requestMediaKeySystemAccess(keySystem, supportedConfigurations) {
        if (!navigator.requestMediaKeySystemAccess) {
            return Promise.resolve(false);
        }
        return navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations).then(() => true).catch(() => false);
    }

    function isFairPlaySupported() {
        return requestMediaKeySystemAccess(FAIRPLAY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }
    function isFairPlayV1Supported() {
        return requestMediaKeySystemAccess(FAIRPLAY_V1_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }
    function isFairPlayV2Supported() {
        return requestMediaKeySystemAccess(FAIRPLAY_V2_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }
    function isFairPlayV3Supported() {
        return requestMediaKeySystemAccess(FAIRPLAY_V3_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }

    function isWidevineSupported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
        return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
            {
                initDataTypes,
                videoCapabilities: [
                    {
                        contentType,
                    },
                ],
            },
        ]);
    }
    function isWidevineL1Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
        return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
            {
                initDataTypes,
                videoCapabilities: [
                    {
                        contentType,
                        robustness: 'HW_SECURE_DECODE',
                    },
                ],
            },
        ]);
    }
    function isWidevineL3Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
        return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
            {
                initDataTypes,
                videoCapabilities: [
                    {
                        contentType,
                        robustness: 'SW_SECURE_DECODE',
                    },
                ],
            },
        ]);
    }

    function isPlayReadySupported() {
        return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }
    function isPlayReadySL150Supported() {
        return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                        robustness: '150',
                    },
                ],
            },
        ]);
    }
    function isPlayReadySL2000Supported() {
        return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                        robustness: '2000',
                    },
                ],
            },
        ]);
    }
    function isPlayReadySL3000Supported() {
        return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                        robustness: '3000',
                    },
                ],
            },
        ]);
    }

    function isPrimetimeSupported() {
        return requestMediaKeySystemAccess(PRIMETIME_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }

    function isClearKeySupported() {
        return requestMediaKeySystemAccess(CLEAR_KEY_SYSTEM, [
            {
                initDataTypes: ['cenc'],
                videoCapabilities: [
                    {
                        contentType: H264_BASELINE_CONTENT_TYPE,
                    },
                ],
            },
        ]);
    }

    var b$j = block('audio-badges');
    function AudioBadges() {
        var audioCodecs20 = [];
        var audioCodecs51 = [];
        if (isAacSupported().any) {
            audioCodecs20.push('AAC');
        }
        if (isDolbyDigitalSupported().any) {
            audioCodecs51.push('Dolby Digital');
        }
        if (isDolbyDigitalPlusSupported().any) {
            audioCodecs51.push('Dolby Digital Plus');
        }
        if (isDolbyAtmosSupported()) {
            audioCodecs51.push('Dolby Atmos');
        }
        var has51 = audioCodecs51.length;
        return m$1(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$j(), Badge({
            text: has51 ? '5.1' : '2.0',
            background: has51 ? 'gold' : 'transparent',
            bottom: {
                text: (has51 ? audioCodecs51 : audioCodecs20).join(', '),
            },
        }));
    }
    var templateObject_1$s;

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

    var t,r,u,i,o=0,f=[],c=[],e=l$1,a=e.__b,v=e.__r,l=e.diffed,m=e.__c,s=e.unmount,d=e.__;function h(n,t){e.__h&&e.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function p(n){return o=1,y(D,n)}function y(n,u,i){var o=h(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function _(n,u){var i=h(t++,3);!e.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function F(n){return o=5,q(function(){return {current:n}},[])}function q(n,r){var u=h(t++,7);return C(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function x(n,t){return o=8,q(function(){return n},t)}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],e.__e(t,n.__v);}}e.__b=function(n){r=null,a&&a(n);},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),d&&d(n,t);},e.__r=function(n){v&&v(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===e.requestAnimationFrame||((i=e.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],e.__e(r,n.__v);}}),m&&m(n,t);},e.unmount=function(n){s&&s(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&e.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

    function hasZoom() {
        if (getIsMobile()) {
            return false;
        }
        var devicePixelRatio = getDevicePixelRatio();
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
        'Can I Watch Video': {
            'en': 'Can I\u00a0Watch Video',
            'ru': 'Могу ли я\u00a0смотреть видео?'
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
        'Can I listen surround sound?': {
            'en': 'Can I listen surround sound?',
            'ru': 'Могу ли я услышать многоканальный звук?'
        },
        'HTMLVideoElement Features': {
            'en': 'HTMLVideoElement Features',
            'ru': 'Возможности HTMLVideoElement'
        },
        'Aspect ratio': {
            'en': 'Aspect ratio',
            'ru': 'Соотн. сторон'
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
        'Support one of the audio codecs?': {
            'en': 'Support one of the audio codecs?',
            'ru': 'Поддержка одного из аудиокодеков?'
        },
        'Is this a HDR screen?': {
            'en': 'Is this a HDR screen?',
            'ru': 'Это HDR экран?'
        },
        'Support one of the video codecs?': {
            'en': 'Support one of the video codecs?',
            'ru': 'Поддержка одного из видеокодеков?'
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
        'Security level': {
            'en': 'Security level',
            'ru': 'Уровень безопасности'
        },
        'Security levels': {
            'en': 'Security levels',
            'ru': 'Уровни безопасности'
        },
        'KeySystem': {
            'en': 'KeySystem',
            'ru': 'Система ключей'
        },
        'KeySystems': {
            'en': 'KeySystems',
            'ru': 'Системы ключей'
        },
        'Request': {
            'en': 'Request',
            'ru': 'Запрос'
        }
    };

    var i18nKeysets = keysets;
    var i18nLang;
    function i18n(id) {
        var key = i18nKeysets[id];
        if (!key) {
            console.error("Not found key \"".concat(id, "\" in getText()."));
            return '';
        }
        var value = key[i18nLang];
        if (typeof value === 'undefined') {
            console.error("Not found key \"".concat(id, "\", lang \"").concat(i18nLang, "\" in getText()."));
            return '';
        }
        return value;
    }
    function setI18nLang(lang) {
        i18nLang = lang;
    }

    var b$i = block('screen-badge');
    function ScreenBadge(props) {
        var _a = p(true), withDevicePixelRatio = _a[0], setWithDevicePixelRatio = _a[1];
        var handleClick = x(function () {
            setWithDevicePixelRatio(!withDevicePixelRatio);
        }, [withDevicePixelRatio]);
        var screenSize = withDevicePixelRatio ?
            [props.width, props.height, props.devicePixelRatio].join('×') :
            [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×');
        var screenText = m$1(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n        <div>", ": ", "</div>\n        ", "\n        <div>", ": ", " ", "</div>\n        <div>", ": ", "</div>\n        ", "\n        ", "\n    "], ["\n        <div>", ": ", "</div>\n        ", "\n        <div>", ": ", " ", "</div>\n        <div>", ": ", "</div>\n        ", "\n        ", "\n    "])), i18n('Size'), screenSize, hasZoom() ? m$1(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["<div>\u26A0 ", "</div>"], ["<div>\u26A0 ", "</div>"])), i18n('Please reset zoom in the page')) : '', i18n('Color depth'), props.colorDepth, i18n('bit'), i18n('Aspect ratio'), calcAspectRatio(props.width, props.height).value, props.isPrimary ? m$1(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["<div>", ": ", "</div>"], ["<div>", ": ", "</div>"])), i18n('Primary'), i18n('Yes')) : '', props.isInternal ? m$1(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["<div>", ": ", "</div>"], ["<div>", ": ", "</div>"])), i18n('Internal'), i18n('Yes')) : '');
        var isHDR = props.isScreenDetails ? props.colorDepth > 24 : isHdrScreenSupported();
        return m$1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "])), b$i(), handleClick, b$i('label'), props.label, Badge({
            text: getResolutionBadge(Math.max(props.width, props.height) * props.devicePixelRatio) || '',
            type: '4k',
            click: true,
            background: 'gold',
            top: {
                text: isHDR ? m$1(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["<b>HDR</b>"], ["<b>HDR</b>"]))) : '',
            },
            bottom: {
                text: screenText,
                title: [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio].join('×'),
            },
        }));
    }
    var templateObject_1$r, templateObject_2$c, templateObject_3$3, templateObject_4$2, templateObject_5$1, templateObject_6;

    var b$h = block('row');
    function Row(props) {
        return m$1(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$h(), b$h('category'), props.name, b$h('body'), props.children);
    }
    var templateObject_1$q;

    var ScreenInfo = /** @class */ (function () {
        function ScreenInfo() {
            var _this = this;
            this.listeners = [];
            this.devicePixelRatio = getDevicePixelRatio();
            this.isScreenDetails = false;
            this.screens = [];
            this.timer = -1;
            this.needUserActivity = false;
            this.handleScreenChange = function () {
                _this.emit();
            };
            var screenJson = JSON.stringify(this.getScreen());
            this.timer = window.setInterval(function () {
                var currentDevicePixelRation = getDevicePixelRatio();
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
            this.getScreenDetails();
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
            if (!window.getScreenDetails) {
                return Promise.resolve();
            }
            return window.getScreenDetails().then(function (result) {
                window.clearInterval(_this.timer);
                _this.isScreenDetails = true;
                _this.needUserActivity = false;
                _this.screens = result.screens;
                _this.emit();
                _this.unbindScreenChange();
                _this.bindScreensChange(result.screens);
                result.onscreenschange = function () {
                    _this.bindScreensChange(result.screens);
                    _this.screens = result.screens;
                    _this.emit();
                };
                return result;
            }).catch(function (e) {
                // @ts-ignore
                navigator.permissions.query({ name: 'window-management' }).then(function (result) {
                    if (result.state === 'denied') {
                        _this.needUserActivity = false;
                    }
                    else {
                        _this.needUserActivity = true;
                    }
                    _this.emit();
                });
                _this.needUserActivity = true;
                _this.emit();
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
        ScreenInfo.prototype.get = function () {
            var result = {
                isScreenDetails: this.isScreenDetails,
                screens: this.isScreenDetails ?
                    this.screens.map(function (item) {
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
            this.listeners.forEach(function (item) { return item(); });
        };
        ScreenInfo.prototype.getScreen = function () {
            var screen = window.screen;
            return {
                availLeft: screen.availLeft,
                availTop: screen.availTop,
                availWidth: screen.availWidth,
                availHeight: screen.availHeight,
                colorDepth: screen.colorDepth,
                pixelDepth: screen.pixelDepth,
                width: screen.width,
                height: screen.height,
                label: '',
                isInternal: false,
                isPrimary: false,
                isExtended: Boolean(screen.isExtended),
                orientation: screen.orientation,
                devicePixelRatio: getDevicePixelRatio(),
            };
        };
        return ScreenInfo;
    }());
    var screenInfo = new ScreenInfo();

    var ScreenBadges = /** @class */ (function (_super) {
        __extends(ScreenBadges, _super);
        function ScreenBadges() {
            var _this = _super.call(this) || this;
            _this.handleScreenChange = function () {
                _this.setState({
                    screens: screenInfo.get().screens,
                });
            };
            _this.handleClick = function () {
                screenInfo.getScreenDetails();
            };
            screenInfo.addListener(_this.handleScreenChange);
            return _this;
        }
        ScreenBadges.prototype.render = function () {
            var _a = screenInfo.get(), screens = _a.screens, isScreenDetails = _a.isScreenDetails;
            var content = screens.map(function (item) {
                var props = __assign({ isScreenDetails: isScreenDetails }, item);
                return m$1(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["<", " ...", "><//>"], ["<", " ...", "><//>"])), ScreenBadge, props);
            });
            var name = screens.length > 1 ? i18n('Screens') : i18n('Screen');
            return m$1(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["<", " name=\"", "\">\n            ", "\n            ", "\n        <//>"], ["<", " name=\"", "\">\n            ", "\n            ", "\n        <//>"])), Row, name, screenInfo.needUserActivity ? m$1(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["<div><button onClick=\"", "\">", "</button></div>"], ["<div><button onClick=\"", "\">", "</button></div>"])), this.handleClick, i18n('Request')) : '', content);
        };
        ScreenBadges.prototype.componentWillUnmount = function () {
            screenInfo.removeListener(this.handleScreenChange);
        };
        return ScreenBadges;
    }(b$l));
    var templateObject_1$p, templateObject_2$b, templateObject_3$2;

    var b$g = block('codec');
    function Codec(props) {
        var color = props.disabled ? 'black' : (props.color || 'black');
        var tooltip = props.tooltip ? m$1(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$g('tooltip'), props.tooltip) : '';
        return m$1(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n        </div>\n    "])), b$g({
            color: color,
            border: props.border,
            disabled: props.disabled,
        }), tooltip, b$g('name'), props.name);
    }
    var templateObject_1$o, templateObject_2$a;

    var b$f = block('column');
    function Column(props) {
        return m$1(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$f(), b$f('category'), props.name, b$f('body'), props.children);
    }
    var templateObject_1$n;

    var b$e = block('columns');
    function Columns(props) {
        return m$1(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$e(), props.children);
    }
    var templateObject_1$m;

    function getTooltip(result) {
        if (typeof result === 'boolean') {
            return '';
        }
        return m$1(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n        video.canPlayType(): ", "<br />\n        MediaSource.isTypeSupported(): ", "<br />\n        <hr />\n        ", "\n    "], ["\n        video.canPlayType(): ", "<br />\n        MediaSource.isTypeSupported(): ", "<br />\n        <hr />\n        ", "\n    "])), result.file ? i18n('Yes') : i18n('No'), result.mediaSource ? i18n('Yes') : i18n('No'), result.contentType);
    }
    var templateObject_1$l;

    function AudioCodecs() {
        var supported = [];
        var unsupported = [];
        [
            { supported: isMp3Supported(), name: 'MP3', color: 'orange' },
            { supported: isMp4AudioSupported(), name: 'MP4', color: 'orange' },
            { supported: isAacSupported(), name: 'AAC', color: 'orange' },
            { supported: isFlacSupported(), name: 'FLAC', color: 'blue' },
            { supported: isVorbisSupported(), name: 'Vorbis', color: 'orange' },
            { supported: isOpusSupported(), name: 'Opus', color: 'green' },
            { supported: isDolbyDigitalSupported(), name: m$1(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["<b>Dolby</b> Digital"], ["<b>Dolby</b> Digital"]))), color: 'black', border: 'white' },
            { supported: isDolbyDigitalPlusSupported(), name: m$1(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["<b>Dolby</b> Digital Plus"], ["<b>Dolby</b> Digital Plus"]))), color: 'black', border: 'white' },
            { supported: isDolbyAtmosSupported(), name: m$1(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["<b>Dolby</b> Atmos"], ["<b>Dolby</b> Atmos"]))), color: 'black', border: 'white' },
            { supported: isDtsSupported(), name: 'DTS', color: 'black' },
            { supported: isDtsHdSupported(), name: 'DTS:HD', color: 'black' },
            { supported: isDtsXSupported(), name: 'DTS:X', color: 'black' },
            { supported: isMpegHAudioSupported(), name: 'MPEG-H Audio', color: 'blue' },
        ].map(function (item) {
            var tooltip = getTooltip(item.supported);
            var isSupported = typeof item.supported === 'boolean' ? item.supported : item.supported.any;
            if (isSupported) {
                supported.push(Codec({
                    name: item.name,
                    color: item.color,
                    border: item.border,
                    tooltip: tooltip,
                }));
            }
            else {
                unsupported.push(Codec({
                    name: item.name,
                    color: 'black',
                    disabled: true,
                    tooltip: tooltip,
                }));
            }
        });
        return m$1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<", " name=\"", "\">\n        <", ">\n            <", " name=\"", "\">\n                ", "\n            <//>\n            ", "\n        <//>\n    <//>"], ["<", " name=\"", "\">\n        <", ">\n            <", " name=\"", "\">\n                ", "\n            <//>\n            ", "\n        <//>\n    <//>"])), Row, i18n('Audio Codecs'), Columns, Column, i18n('Supported'), supported.length ? supported : i18n('No supported audio codecs.'), unsupported.length ? m$1(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["<", " name=\"", "\">", "<//>"], ["<", " name=\"", "\">", "<//>"])), Column, i18n('Unsupported'), unsupported) : '');
    }
    var templateObject_1$k, templateObject_2$9, templateObject_3$1, templateObject_4$1, templateObject_5;

    function VideoCodecs() {
        var supported = [];
        var unsupported = [];
        [
            { supported: isH264BaselineSupported(), name: 'H.264 Baseline', color: 'blue' },
            { supported: isH264MainSupported(), name: 'H.264 Main', color: 'blue' },
            { supported: isH264HighSupported(), name: 'H.264 High', color: 'blue' },
            { supported: isHevcMainSupported(), name: 'H.265 Main', color: 'orange' },
            { supported: isHevcMain10Supported(), name: 'H.265 Main10', color: 'orange' },
            { supported: isVp8Supported(), name: 'VP8', color: 'green' },
            { supported: isVp9Supported(), name: 'VP9', color: 'green' },
            { supported: isDolbyVisionSupported(), name: m$1(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["<b>Dolby</b> Vision"], ["<b>Dolby</b> Vision"]))), color: 'black', border: 'white' },
            { supported: isAV1Supported(), name: 'AV1', color: 'yellow' },
            { supported: isMpeg2TSupported(), name: 'MPEG2-TS', color: 'yellow' },
        ].map(function (item) {
            var tooltip = getTooltip(item.supported);
            if (item.supported.any) {
                supported.push(Codec({
                    name: item.name,
                    color: item.color,
                    border: item.border,
                    tooltip: tooltip,
                }));
            }
            else {
                unsupported.push(Codec({
                    name: item.name,
                    disabled: true,
                    tooltip: tooltip,
                }));
            }
        });
        return m$1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        <", " name=\"", "\">\n            ", "\n            ", "\n        <//>\n"], ["\n        <", " name=\"", "\">\n            ", "\n            ", "\n        <//>\n"])), Columns, i18n('Video Codecs'), supported.length ? m$1(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["<", " name=\"", "\">\n                ", "\n            <//>"], ["<", " name=\"", "\">\n                ", "\n            <//>"])), Column, i18n('Supported'), supported) : i18n('No supported video codecs.'), unsupported.length ? m$1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<", " name=\"", "\">\n                ", "\n            <//>"], ["<", " name=\"", "\">\n                ", "\n            <//>"])), Column, i18n('Unsupported'), unsupported) : '');
    }
    var templateObject_1$j, templateObject_2$8, templateObject_3, templateObject_4;

    var b$d = block('header');
    function Header() {
        return m$1(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$d(), i18n('Can I Watch Video'));
    }
    var templateObject_1$i;

    function getKeySystemsText(keySystems) {
        if (keySystems.length === 0) {
            return '';
        }
        if (keySystems.length === 1) {
            return "".concat(i18n('KeySystem'), ": ").concat(keySystems[0]);
        }
        return "".concat(i18n('KeySystems'), ": \n") + keySystems.map(function (item) { return "\u2022 ".concat(item); }).join('\n');
    }

    function getSecurityLevelsText(levels) {
        if (levels.length === 0) {
            return i18n('Not detected');
        }
        if (levels.length === 1) {
            return "".concat(i18n('Security level'), ": ").concat(levels[0]);
        }
        return "".concat(i18n('Security levels'), ": ").concat(levels.join(', '));
    }

    var b$c = block('widevine-badge');
    function WidevineBadge() {
        var _a = p(false), hasWidevine = _a[0], setWidevine = _a[1];
        var _b = p(false), hasL1 = _b[0], setL1 = _b[1];
        var _c = p(false), hasL3 = _c[0], setL3 = _c[1];
        isWidevineSupported().then(function (result) {
            setWidevine(result);
        });
        isWidevineL1Supported().then(function (result) {
            setL1(result);
        });
        isWidevineL3Supported().then(function (result) {
            setL3(result);
        });
        var levels = [];
        if (hasL1) {
            levels.push('L1');
        }
        if (hasL3) {
            levels.push('L3');
        }
        var text = [
            getSecurityLevelsText(levels),
            getKeySystemsText([WIDEWINE_KEY_SYSTEM]),
        ].join('\n');
        return m$1(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$c(), hasWidevine && Badge({
            text: 'Widevine',
            background: 'white',
            top: {
                text: 'Google',
            },
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$h;

    var b$b = block('clearkey-badge');
    function ClearkeyBadge() {
        var _a = p(false), hasClearkey = _a[0], setClearkey = _a[1];
        isClearKeySupported().then(function (result) {
            setClearkey(result);
        });
        var text = [
            getKeySystemsText([CLEAR_KEY_SYSTEM]),
        ].join('\n');
        return m$1(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$b(), hasClearkey && Badge({
            text: 'ClearKey',
            size: 'small',
            background: 'white',
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$g;

    var b$a = block('fairplay-badge');
    function FairplayBadge() {
        var _a = p(false), hasFairplay = _a[0], setFairplay = _a[1];
        var _b = p(false), hasFairplay1 = _b[0], setFairplay1 = _b[1];
        var _c = p(false), hasFairplay2 = _c[0], setFairplay2 = _c[1];
        var _d = p(false), hasFairplay3 = _d[0], setFairplay3 = _d[1];
        isFairPlaySupported().then(function (result) {
            setFairplay(result);
        });
        isFairPlayV1Supported().then(function (result) {
            setFairplay1(result);
        });
        isFairPlayV2Supported().then(function (result) {
            setFairplay2(result);
        });
        isFairPlayV3Supported().then(function (result) {
            setFairplay3(result);
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
        var text = [
            getKeySystemsText(keySystems),
        ].join('\n');
        return m$1(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$a(), hasFairplay && Badge({
            text: 'FairPlay',
            background: 'white',
            top: {
                text: 'Apple',
            },
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$f;

    var b$9 = block('playready-badge');
    function PlayreadyBadge() {
        var _a = p(false), hasPlayready = _a[0], setPlayready = _a[1];
        var _b = p(false), hasSL150 = _b[0], setSL150 = _b[1];
        var _c = p(false), hasSL2000 = _c[0], setSL2000 = _c[1];
        var _d = p(false), hasSL3000 = _d[0], setSL3000 = _d[1];
        isPlayReadySupported().then(function (result) {
            setPlayready(result);
        });
        isPlayReadySL150Supported().then(function (result) {
            setSL150(result);
        });
        isPlayReadySL2000Supported().then(function (result) {
            setSL2000(result);
        });
        isPlayReadySL3000Supported().then(function (result) {
            setSL3000(result);
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
        var text = [
            getSecurityLevelsText(levels),
            getKeySystemsText([PLAYREADY_KEY_SYSTEM]),
        ].join('\n');
        return m$1(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$9(), hasPlayready && Badge({
            text: 'PlayReady',
            background: 'white',
            top: {
                text: 'MicroSoft',
            },
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$e;

    var b$8 = block('primetime-badge');
    function PrimetimeBadge() {
        var _a = p(false), hasPrimetime = _a[0], setPrimetime = _a[1];
        isPrimetimeSupported().then(function (result) {
            setPrimetime(result);
        });
        var text = [
            getKeySystemsText([
                PRIMETIME_KEY_SYSTEM,
            ]),
        ].join('\n');
        return m$1(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$8(), hasPrimetime && Badge({
            text: 'Primetime',
            background: 'white',
            top: {
                text: 'Adobe',
            },
            bottom: {
                text: text,
            },
        }));
    }
    var templateObject_1$d;

    var b$7 = block('drm-badges');
    function DrmBadges() {
        return m$1(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        </div>\n    "])), b$7(), WidevineBadge, PlayreadyBadge, FairplayBadge, PrimetimeBadge, ClearkeyBadge);
    }
    var templateObject_1$c;

    var b$6 = block('native-streaming');
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
            return m$1(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["<li>", ": ", "</li>"], ["<li>", ": ", "</li>"])), item.label, item.supported ? '✓' : i18n('No'));
        });
        return m$1(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n        <ul class=", ">\n            ", "\n        </ul>\n    "], ["\n        <ul class=", ">\n            ", "\n        </ul>\n    "])), b$6(), result);
    }
    var templateObject_1$b, templateObject_2$7;

    var b$5 = block('result');
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
        return m$1(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["<span class=\"", "\">\n        ", "\n        ", "\n    </span>"], ["<span class=\"", "\">\n        ", "\n        ", "\n    </span>"])), b$5({
            type: type,
        }), text, props.details ? m$1(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$5('details'), props.details) : '');
    }
    var templateObject_1$a, templateObject_2$6;

    var b$4 = block('active-question');
    function ActiveQuestion(props) {
        var _a = p(false), opened = _a[0], setOpened = _a[1];
        var callback = x(function () {
            setOpened(!opened);
        }, [opened]);
        return m$1(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">", "</div>\n        </div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">", "</div>\n        </div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$4({ opened: opened }), b$4('head'), callback, b$4('plus'), opened ? '-' : '+', b$4('question'), props.head, b$4('body'), props.children);
    }
    var templateObject_1$9;

    var FULL_HD_HEIGHT = 1080;
    var HEIGHT_PADDING = 5;
    function isLargerFullHd(height) {
        return height > FULL_HD_HEIGHT + HEIGHT_PADDING;
    }
    function Question4K() {
        var _a = p(screenInfo.get().screens), screens = _a[0], setScreens = _a[1];
        _(function () {
            var handler = function () {
                setScreens(screenInfo.get().screens);
            };
            screenInfo.addListener(handler);
            return function () {
                screenInfo.removeListener(handler);
            };
        }, [screens]);
        var screensLargerThan2K = screens.some(function (screen) {
            return isLargerFullHd(Math.min(screen.width, screen.height) * screen.devicePixelRatio);
        });
        var isVp9 = isVp9Supported().any;
        var isHevc = isHevcMainSupported().any;
        var isAv1 = isAV1Supported().any;
        var mainAnswer = screensLargerThan2K && Boolean(isVp9 || isHevc || isAv1);
        var head = m$1(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["", " <", " value=\"", "\"><//>"], ["", " <", " value=\"", "\"><//>"])), i18n('Can I watch 4K video?'), Result, mainAnswer);
        return m$1(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            <ul>\n                <li>", " <", " value=\"", "\"><//></li>\n                <li>\n                    ", " <", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            <ul>\n                <li>", " <", " value=\"", "\"><//></li>\n                <li>\n                    ", " <", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, i18n('Is the screen larger than 2K?'), Result, screensLargerThan2K, i18n('Support one of the video codecs?'), Result, true, Codec, !isVp9, Result, isVp9, Codec, !isHevc, Result, isHevc, Codec, !isAv1, Result, isAv1);
    }
    var templateObject_1$8, templateObject_2$5;

    function QuestionHdr() {
        var isVp9 = isVp9Supported().any;
        var isHevc = isHevcMainSupported().any;
        var isAv1 = isAV1Supported().any;
        var isHdr = isHdrScreenSupported();
        var mainAnswer = isHdr && Boolean(isVp9 || isHevc || isAv1);
        var head = m$1(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["", " <", " value=\"", "\"><//>"], ["", " <", " value=\"", "\"><//>"])), i18n('Can I watch HDR video?'), Result, mainAnswer);
        return m$1(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            <ul>\n                <li>", " <", " value=\"", "\"><//></li>\n                <li>", " <", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            <ul>\n                <li>", " <", " value=\"", "\"><//></li>\n                <li>", " <", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, i18n('Is this a HDR screen?'), Result, isHdr, i18n('Support one of the video codecs?'), Result, Boolean(isVp9 || isHevc || isAv1), Codec, !isVp9, Result, isVp9, Codec, !isHevc, Result, isHevc, Codec, !isAv1, Result, isAv1);
    }
    var templateObject_1$7, templateObject_2$4;

    function QuestionSurroundSound() {
        var isDolbyDigital = isDolbyDigitalSupported().any;
        var isDolbyDigitalPlus = isDolbyDigitalPlusSupported().any;
        var isDolbyAtmos = isDolbyAtmosSupported();
        var mainAnswer = isDolbyDigital || isDolbyDigitalPlus || isDolbyAtmos;
        var head = m$1(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["", " <", " value=\"", "\"><//>"], ["", " <", " value=\"", "\"><//>"])), i18n('Can I listen surround sound?'), Result, mainAnswer);
        return m$1(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            <ul>\n                <li>", " <", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"Dolby Digital\"\n                                color=\"black\"\n                                border=\"white\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"Dolby Digital Plus\"\n                                color=\"black\"\n                                border=\"white\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"Dolby Atmos\"\n                                color=\"black\"\n                                border=\"white\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            <ul>\n                <li>", " <", " value=\"", "\"><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"Dolby Digital\"\n                                color=\"black\"\n                                border=\"white\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"Dolby Digital Plus\"\n                                color=\"black\"\n                                border=\"white\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"Dolby Atmos\"\n                                color=\"black\"\n                                border=\"white\"\n                                disabled=\"", "\">\n                                <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, i18n('Support one of the audio codecs?'), Result, mainAnswer, Codec, !isDolbyDigital, Result, isDolbyDigital, Codec, !isDolbyDigitalPlus, Result, isDolbyDigitalPlus, Codec, !isDolbyAtmos, Result, isDolbyAtmos);
    }
    var templateObject_1$6, templateObject_2$3;

    var promise;
    function getDrmSystems() {
        if (promise) {
            return promise;
        }
        promise = Promise.all([
            isWidevineSupported(),
            isPlayReadySupported(),
            isFairPlaySupported(),
        ]).then(function (_a) {
            var isWidevine = _a[0], isPlayReady = _a[1], isFairPlay = _a[2];
            var result = [];
            if (isWidevine) {
                result.push('widevine');
            }
            if (isPlayReady) {
                result.push('playready');
            }
            if (isFairPlay) {
                result.push('fairplay');
            }
            return result;
        });
        return promise;
    }

    function QuestionDrm4K() {
        var _a = p(false), isVp9 = _a[0], setIsVp9 = _a[1];
        var _b = p(false), isHevc = _b[0], setIsHevc = _b[1];
        var _c = p(false), isAv1 = _c[0], setIsAv1 = _c[1];
        var _d = p([]), drmSystems = _d[0], setDrmSystems = _d[1];
        _(function () {
            isWidevineSupported(VP9_CONTENT_TYPE).then(function (result) {
                setIsVp9(result);
            });
            isWidevineSupported(HEV_MAIN_CONTENT_TYPE).then(function (result) {
                setIsHevc(result);
            });
            isWidevineSupported(AV1_CONTENT_TYPE).then(function (result) {
                setIsAv1(result);
            });
            getDrmSystems().then(function (result) {
                setDrmSystems(result);
            });
        }, [drmSystems, isVp9, isHevc, isAv1]);
        var anyCodec = Boolean(isVp9 || isHevc || isAv1);
        var hasDrm = Boolean(drmSystems.length);
        var answer = anyCodec && hasDrm;
        var head = m$1(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["", " <", " value=\"", "\"><//>"], ["", " <", " value=\"", "\"><//>"])), i18n('Can I watch 4K video on online services?'), Result, answer);
        return m$1(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            ", "\n            ", "<a target=\"_blank\" href=\"", "\">DRM</a>.\n            <ul>\n                <li>\n                    ", " <", " value=", "><//>\n                </li>\n                <li>\n                ", " <", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                            <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                            <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                            <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            ", "\n            ", "<a target=\"_blank\" href=\"", "\">DRM</a>.\n            <ul>\n                <li>\n                    ", " <", " value=", "><//>\n                </li>\n                <li>\n                ", " <", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\">\n                            <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\">\n                            <//> <", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                            <//> <", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, i18n('Online services protect content using'), '\u00a0', i18n('link:wiki:drm'), i18n('Has DRM support?'), Result, hasDrm, i18n('Support one of the video codecs?'), Result, anyCodec, Codec, !isVp9, Result, isVp9, Codec, !isHevc, Result, isHevc, Codec, !isAv1, Result, isAv1);
    }
    var templateObject_1$5, templateObject_2$2;

    var b$3 = block('questions');
    function Questions( /*props: Question4KProps*/) {
        return m$1(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["    \n        <div class=", ">    \n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        <//>\n    "], ["    \n        <div class=", ">    \n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        <//>\n    "])), b$3(), Question4K, QuestionHdr, QuestionSurroundSound, QuestionDrm4K);
    }
    var templateObject_1$4;

    var b$2 = block('html-video-element-features');
    function HtmlVideoElementFeatures() {
        var items = [
            {
                label: 'Media Source Extensions',
                title: 'MSE',
                supported: isMseSupported(),
            },
            {
                label: 'Managed Media Source',
                title: 'MMS',
                supported: isMmsSupported(),
            },
            {
                label: 'Encrypted Media Extensions',
                title: 'EME',
                supported: isEmeSupported(),
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
            return m$1(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["<li title=\"", "\">", ": ", "</li>"], ["<li title=\"", "\">", ": ", "</li>"])), item.title, item.label, item.supported ? '✓' : i18n('No'));
        });
        return m$1(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n        <ul class=", ">\n            ", "\n        </ul>\n    "], ["\n        <ul class=", ">\n            ", "\n        </ul>\n    "])), b$2(), result);
    }
    var templateObject_1$3, templateObject_2$1;

    var b$1 = block('footer');
    function Footer() {
        return m$1(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\">\u00A9 Vvideo</div>\n            <div class=\"", "\"><a target=\"_blank\" href=\"https://github.com/vvideo/caniwatch\">GitHub</a></div>\n        </div>"], ["\n        <div class=\"", "\">\n            <div class=\"", "\">\u00A9 Vvideo</div>\n            <div class=\"", "\"><a target=\"_blank\" href=\"https://github.com/vvideo/caniwatch\">GitHub</a></div>\n        </div>"])), b$1(), b$1('item'), b$1('item'));
    }
    var templateObject_1$2;

    function getImageFormatsSupported() {
        var result = {
            svg: isSvgSupported(),
        };
        var formats = {
            png: isPngSupported(),
            apng: isAPngSupported(),
            jpeg: isJpegSupported(),
            gif: isGifSupported(),
            avif: isAvifSupported(),
            webp: isWebpSupported(),
            heif: isHeifSupported(),
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
        var _a = p(false); _a[0]; var setReady = _a[1];
        var ref = F({});
        getImageFormatsSupported().then(function (data) {
            setReady(true);
            ref.current = data;
        });
        var images = ref.current;
        [
            { supported: images.gif, name: 'GIF', color: 'blue', tooltip: GIF_CONTENT_TYPE },
            { supported: images.jpeg, name: 'JPEG', color: 'blue', tooltip: JPEG_CONTENT_TYPE },
            { supported: images.png, name: 'PNG', color: 'blue', tooltip: PNG_CONTENT_TYPE },
            { supported: images.apng, name: 'APNG', color: 'blue', tooltip: APNG_CONTENT_TYPE },
            { supported: images.svg, name: 'SVG', color: 'red', tooltip: SVG_CONTENT_TYPE },
            { supported: images.webp, name: 'WebP', color: 'green', tooltip: WEBP_CONTENT_TYPE },
            { supported: images.heif, name: 'HEIF', color: 'orange', tooltip: HEIF_CONTENT_TYPE },
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
        return m$1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<", " name=\"", "\">\n        <", ">\n            <", " name=\"", "\">\n                ", "\n            <//>\n            ", "\n        <//>\n    <//>"], ["<", " name=\"", "\">\n        <", ">\n            <", " name=\"", "\">\n                ", "\n            <//>\n            ", "\n        <//>\n    <//>"])), Row, i18n('Image Formats'), Columns, Column, i18n('Supported'), supported.length ? supported : i18n('No supported image formats.'), unsupported.length ? m$1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["<", " name=\"", "\">", "<//>"], ["<", " name=\"", "\">", "<//>"])), Column, i18n('Unsupported'), unsupported) : '');
    }
    var templateObject_1$1, templateObject_2;

    var b = block('main-page');
    function MainPage() {
        return m$1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", "><//>\n\n            <", "><//>\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"DRM\">\n                <", "><//>\n            <//>\n\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", "><//>\n        </div>"], ["\n        <div class=\"", "\">\n            <", "><//>\n\n            <", "><//>\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"DRM\">\n                <", "><//>\n            <//>\n\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", "><//>\n        </div>"])), b(), Header, Questions, ScreenBadges, Row, i18n('Audio'), AudioBadges, AudioCodecs, Row, i18n('Video Codecs'), VideoCodecs, Row, DrmBadges, ImageFormats, Row, i18n('Native Streaming Support'), NativeStreaming, Row, i18n('HTMLVideoElement Features'), HtmlVideoElementFeatures, Footer);
    }
    var templateObject_1;

    hit('95998062');
    var lang = ((navigator.language || '').split('-')[0] || 'en');
    if (lang !== 'en' && lang !== 'ru') {
        lang = 'en';
    }
    setI18nLang(lang);
    B$1(MainPage(), document.querySelector('.page'));

}));
