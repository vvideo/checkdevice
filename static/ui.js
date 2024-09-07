(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var n,l$1,u$1,i$1,o$1,r$1,f$1,e$1,c$1,s$1,h$1={},p$1=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$e(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$1,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$1:_[y.__i]||h$1,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y$1(i)?g(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a--:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&(f==r-a?a-=f-r:a++),f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b$e(m,M),h.constructor=T,h.render=q$1),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l$1.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(L=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e;}else u.__e=t.__e,u.__k=t.__k;l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A$1(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A$1(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A$1(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A$1(l,s,g,m[s],o));}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function V(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k$1,null,[u]),r||h$1,h$1,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n=p$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$e.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b$e.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b$e.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$1=0,c$1=F(!1),s$1=F(!0);

    /*! show-js-error | © 2024 Denis Seleznev | MIT License | https://github.com/hcodes/show-js-error/ */
    function getScreenSize() {
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
                ['Screen size', getScreenSize()],
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

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var i18nKeyset = {};
    function addI18nKeyset(keyset) {
        i18nKeyset = __assign(__assign({}, i18nKeyset), keyset);
    }

    var isSsr = typeof window === 'undefined';

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
    langsData.filter(function (item) { return Boolean(item.default); })[0].value;

    var keyset = {
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
        'Default': {
            'en': 'Default',
            'ru': 'По умолчанию'
        }
    };

    var config = {
        yaMapsApiKey: '82d7a38b-bad1-4b72-b66c-bfdaf838ba66',
        showJSErrorRepportUrl: 'https://github.com/hcodes/show-js-error/issues/new?title={title}&body={body}',
        metrikaCounterId: '95998062', // 97747983
        metrikaOptions: {
            clickmap: false,
            trackLinks: true,
            trackHash: true,
            accurateTrackBounce: true,
        },
    };

    addI18nKeyset(keyset);
    addI18nKeyset(keyset);
    if (!isSsr) {
        showJSError.setSettings({
            reportUrl: config.showJSErrorRepportUrl,
        });
        // hit(config.metrikaCounterId);
        // const lang = getLang() as I18NLanguage;
        // setI18nLang(lang as I18NLanguage);
        // setPageId(window.__appData__.pageId);
        // withInstallApp();
        // addHoverOnBody();
        // initPageTheme();
        // // ally
        // document.documentElement?.setAttribute('lang', lang);
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

    var b$d = block('page');
    function Page(props) {
        return (_("div", { class: b$d() }, props.children));
    }

    var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function A(n){return o=5,T(function(){return {current:n}},[])}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

    function classname() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values.filter(function (item) {
            return item !== null && item !== undefined;
        }).join(' ');
    }

    var b$c = block('button');
    function Button(props) {
        var disabled = props.disabled, size = props.size, theme = props.theme, onClick = props.onClick, title = props.title;
        var className = classname(props.class, b$c({ theme: theme, size: size, disabled: disabled }));
        var handleClick = q(function () {
            if (disabled) {
                return;
            }
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }, [disabled, onClick]);
        return (_("button", { title: title, class: className, disabled: disabled, onClick: handleClick }, props.children));
    }

    var b$b = block('spinner');
    function Spinner(props) {
        return (_("div", { class: b$b({ size: props.size }) }));
    }

    var b$a = block('link');
    function Link(props) {
        var className = classname(props.class, b$a({ theme: props.theme }));
        return (_("a", { target: props.target, class: className, href: props.href }, props.children));
    }

    var b$9 = block('error-message');
    function ErrorMessage(props) {
        var className = classname(props.class, b$9({ theme: props.theme }));
        return (_("div", { class: className },
            "\u274C ",
            props.children));
    }

    var b$8 = block('warning-message');
    function WarningMessage(props) {
        return (_("span", { class: b$8({ theme: props.theme }) },
            "\u26A0\uFE0F ",
            props.children));
    }

    var b$7 = block('input');
    function Input(props) {
        var className = classname(b$7({ disabled: props.disabled }), props.class);
        var _a = h(props.value || ''), value = _a[0], setValue = _a[1];
        var ref = A(null);
        var handleInput = q(function () {
            var _a;
            if (!ref.current) {
                return;
            }
            var value = ref.current.value;
            setValue(value);
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, value);
        }, [value, props.onChange]);
        var handleKeyPress = q(function (event) {
            var _a;
            if (!ref.current) {
                return;
            }
            (_a = props.onKeyPress) === null || _a === void 0 ? void 0 : _a.call(props, event);
        }, [value, props.onKeyPress]);
        return (_("input", { class: className, ref: ref, disabled: props.disabled, title: props.title, onKeyPress: handleKeyPress, onInput: handleInput, placeholder: props.placeholder, value: value }));
    }

    var b$6 = block('checkbox');
    function Checkbox(props) {
        var _a = h(Boolean(props.checked)), checked = _a[0], setChecked = _a[1];
        var _b = h(false), focus = _b[0], setFocus = _b[1];
        var ref = A(null);
        var handleClick = q(function () {
            var _a;
            if (!ref.current || props.disabled) {
                return;
            }
            var value = !ref.current.checked;
            setChecked(value);
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, value);
        }, [checked, props.disabled]);
        var className = classname(props.class, b$6({ checked: checked, theme: props.theme, focus: focus, disabled: props.disabled }));
        y(function () {
            if (!ref.current) {
                return;
            }
            var handleFocus = function () {
                setFocus(true);
            };
            var handleBlur = function () {
                setFocus(false);
            };
            ref.current.addEventListener('focus', handleFocus);
            ref.current.addEventListener('blur', handleBlur);
            return function () {
                if (!ref.current) {
                    return;
                }
                ref.current.removeEventListener('focus', handleFocus);
                ref.current.removeEventListener('blur', handleBlur);
            };
        }, [setFocus, focus]);
        return (_("label", { title: props.title, class: className, onClick: handleClick },
            _("input", { type: "checkbox", disabled: props.disabled, ref: ref, class: b$6('input'), checked: checked }),
            props.label));
    }

    var b$5 = block('radio-button');
    function RadioButton(props) {
        var handleClick = q(function () {
            var _a;
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, props.value);
        }, [props.onClick]);
        var className = classname(b$5({ selected: props.selected }), props.class);
        return (_("li", { title: props.title, class: className, onClick: handleClick, key: props.value }, props.text));
    }

    var b$4 = block('radio-buttons');
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
            if (onSelect) {
                onSelect(value);
            }
        }, [onSelect]);
        return (_("fieldset", { class: classname(b$4(), className) },
            label ? (_("legend", { class: b$4('label', { hidden: props.hideLabel }) }, label)) : '',
            _("ul", { class: b$4('items') }, buttons.map(function (item) {
                return (_(RadioButton, { key: item.value, class: b$4('item'), selected: item.value === selectedValue, title: item.title, text: item.text, value: item.value, onClick: handleSelect }));
            }))));
    }

    var b$3 = block('color-switcher-item');
    function ColorSwitcherItem(props) {
        var handleClick = q(function () {
            props.onClick(props.value);
        }, []);
        return (_("li", { class: b$3({ selected: props.selected }) },
            _("div", { onClick: handleClick, title: props.title, class: b$3('color'), style: "background-color: ".concat(props.color) })));
    }

    var b$2 = block('color-switcher');
    function ColorSwitcher(props) {
        var _a = h(props.selected || props.items[0].value), value = _a[0], setValue = _a[1];
        var handleClick = q(function (data) {
            setValue(data);
        }, [setValue]);
        return (_("div", { class: b$2() },
            props.label ? (_("div", { class: b$2('label'), title: props.title }, props.label)) : null,
            _("ul", { class: b$2('list') }, props.items.map(function (item) {
                return (_(ColorSwitcherItem, { onClick: handleClick, key: item.value, color: item.color, title: item.title, value: item.value, selected: item.value === value }));
            }))));
    }

    var b$1 = block('select');
    function Select(props) {
        var refSelect = A(null);
        var handleChange = q(function () {
            var _a;
            if (!refSelect.current) {
                return;
            }
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, refSelect.current.value);
        }, []);
        var cl = classname(b$1({ theme: props.theme, disabled: props.disabled }), props.class);
        return (_("select", { ref: refSelect, class: cl, onChange: handleChange }, props.options.map(function (item) {
            return (_("option", { value: item.value, selected: item.value === props.value }, item.title));
        })));
    }

    var b = block('ui-list');
    var radioButtonsItems = [
        { text: 'text1', value: '1', selected: true },
        { text: 'text2', value: '2' },
    ];
    var colorSwitcherItems = [
        { color: 'black', value: 'black', title: 'Black' },
        { color: 'red', value: 'red', title: 'Red' },
        { color: 'white', value: 'white', title: 'White' },
    ];
    var selectOptions = [
        {
            value: '1',
            title: 'item1'
        },
        {
            value: '2',
            title: 'item2'
        },
        {
            value: '3',
            title: 'item3'
        },
    ];
    function UIList() {
        return (_("div", { class: b() },
            _("h2", null, "Select"),
            _("ul", { class: b('items') },
                _("li", null,
                    _(Select, { options: selectOptions })),
                _("li", null,
                    "theme=active: ",
                    _(Select, { theme: "active", options: selectOptions }))),
            _("h2", null, "Button"),
            _("ul", { class: b('items') },
                _("li", null,
                    _(Button, null, "Button"),
                    " ",
                    _(Button, { disabled: true }, "Button disabled"),
                    " ",
                    _(Button, { theme: "active" }, "Button theme=active"),
                    " ",
                    _(Button, { theme: "red" }, "Button theme=red")),
                _("li", null,
                    _(Button, { size: "s" }, "Button size=s"),
                    " ",
                    _(Button, { size: "s", disabled: true }, "Button disabled"),
                    " ",
                    _(Button, { theme: "active", size: "s" }, "Button theme=active size=s"),
                    " ",
                    _(Button, { theme: "red", size: "s" }, "Button theme=red size=s"))),
            _("h2", null, "Input"),
            _("ul", { class: b('items') },
                _("li", null,
                    "Input placeholder: ",
                    _(Input, { placeholder: "Placeholder" })),
                _("li", null,
                    "Input value: ",
                    _(Input, { value: "value" })),
                _("li", null,
                    "Input disabled: ",
                    _(Input, { disabled: true, value: "value" }))),
            _("h2", null, "RadioButtons"),
            _("ul", { class: b('items') },
                _("li", null,
                    _(RadioButtons, { onSelect: function () { }, label: "Label", buttons: radioButtonsItems }))),
            _("h2", null, "Checkbox"),
            _("ul", { class: b('items') },
                _("li", null,
                    _(Checkbox, { label: "Checkbox" })),
                _("li", null,
                    _(Checkbox, { checked: true, label: "Checkbox checked" })),
                _("li", null,
                    _(Checkbox, { disabled: true, label: "Checkbox disabled" })),
                _("li", null,
                    _(Checkbox, { disabled: true, checked: true, label: "Checkbox disabled checked" })),
                _("li", null,
                    _(Checkbox, { theme: "active", label: "Checkbox theme=active" })),
                _("li", null,
                    _(Checkbox, { theme: "active", checked: true, label: "Checkbox checked theme=active" }))),
            _("h2", null, "ColorSwitcher"),
            _("ul", { class: b('items') },
                _("li", null,
                    _(ColorSwitcher, { label: "Label", selected: "black", items: colorSwitcherItems }))),
            _("h2", null, "Spinner"),
            _("ul", { class: b('items') },
                _("li", null,
                    "Spinner size=m: ",
                    _(Spinner, { size: "m" })),
                _("li", null,
                    "Spinner size=s: ",
                    _(Spinner, { size: "s" })),
                _("li", null,
                    "Spinner size=xl: ",
                    _(Spinner, { size: "xl" }))),
            _("h2", null, "Link"),
            _("ul", { class: b('items') },
                _("li", null,
                    _(Link, { href: "/" }, "Link")),
                _("li", null,
                    _("span", { style: "background: black; padding: 3px;" },
                        _(Link, { theme: "white", href: "/" }, "Link theme=white")))),
            _("h2", null, "Messages"),
            _("ul", { class: b('items') },
                _("li", null,
                    _(ErrorMessage, null, "Error message")),
                _("li", null,
                    _(ErrorMessage, { theme: "gray" }, "Gray error message")),
                _("li", null,
                    _(WarningMessage, null, "Warning message")))));
    }

    function UIPage() {
        return (_(Page, { title: "UI" },
            _(UIList, null)));
    }

    function renderToRoot(Component) {
        return B$1(_(Component, null), document.querySelector('.root'));
    }

    renderToRoot(UIPage);

}));
