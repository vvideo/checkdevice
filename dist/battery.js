!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";function e(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var n,t,r,o,i,_,u,a,l,s,c={},d=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,p=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function h(e){var n=e.parentNode;n&&n.removeChild(e)}function m(e,t,r){var o,i,_,u={};for(_ in t)"key"==_?o=t[_]:"ref"==_?i=t[_]:u[_]=t[_];if(arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===u[_]&&(u[_]=e.defaultProps[_]);return g(e,u,o,i,null)}function g(e,n,o,i,_){var u={type:e,props:n,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==_?++r:_,__i:-1,__u:0};return null==_&&null!=t.vnode&&t.vnode(u),u}function y(e){return e.children}function w(e,n){this.props=e,this.context=n}function b(e,n){if(null==n)return e.__?b(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?b(e):null}function k(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return k(e)}}function S(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!H.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||_)(H)}function H(){var e,n,r,i,_,a,l,s;for(o.sort(u);e=o.shift();)e.__d&&(n=o.length,i=void 0,a=(_=(r=e).__v).__e,l=[],s=[],r.__P&&((i=v({},_)).__v=_.__v+1,t.vnode&&t.vnode(i),A(r.__P,i,_,r.__n,r.__P.namespaceURI,32&_.__u?[a]:null,l,null==a?b(_):a,!!(32&_.__u),s),i.__v=_.__v,i.__.__k[i.__i]=i,x(l,i,s),i.__e!=a&&k(i)),o.length>n&&o.sort(u));H.__r=0}function P(e,n,t,r,o,i,_,u,a,l,s){var f,p,v,h,m,g=r&&r.__k||d,y=n.length;for(t.__d=a,C(t,n,g),a=t.__d,f=0;f<y;f++)null!=(v=t.__k[f])&&"boolean"!=typeof v&&"function"!=typeof v&&(p=-1===v.__i?c:g[v.__i]||c,v.__i=f,A(e,v,p,o,i,_,u,a,l,s),h=v.__e,v.ref&&p.ref!=v.ref&&(p.ref&&E(p.ref,null,v),s.push(v.ref,v.__c||h,v)),null==m&&null!=h&&(m=h),65536&v.__u||p.__k===v.__k?(a&&!a.isConnected&&(a=b(p)),a=I(v,a,e)):"function"==typeof v.type&&void 0!==v.__d?a=v.__d:h&&(a=h.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=a,t.__e=m}function C(e,n,t){var r,o,i,_,u,a=n.length,l=t.length,s=l,c=0;for(e.__k=[],r=0;r<a;r++)_=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):p(o)?g(y,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,u=D(o,t,_,s),o.__i=u,i=null,-1!==u&&(s--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==_&&(u===_+1?c++:u>_?s>a-_?c+=u-_:c--:u<_?u==_-1&&(c=u-_):c=0,u!==r+c&&(o.__u|=65536))):(i=t[_])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),R(i,i,!1),t[_]=null,s--);if(s)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),R(i,i))}function I(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=I(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,i=e.type,_=t-1,u=t+1,a=n[t];if(null===a||a&&o==a.key&&i===a.type&&!(131072&a.__u))return t;if(r>(null==a||131072&a.__u?0:1))for(;_>=0||u<n.length;){if(_>=0){if((a=n[_])&&!(131072&a.__u)&&o==a.key&&i===a.type)return _;_--}if(u<n.length){if((a=n[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u++}}return-1}function N(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function M(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||N(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||N(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=a,e.addEventListener(n,i?s:l,i)):e.removeEventListener(n,i?s:l,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function U(e){return function(n){if(this.l){var r=this.l[n.type+e];if(null==n.t)n.t=a++;else if(n.t<r.u)return;return r(t.event?t.event(n):n)}}}function A(e,r,o,i,_,u,a,l,s,d){var f,m,g,k,S,H,C,I,D,N,U,A,x,E,R,W=r.type;if(void 0!==r.constructor)return null;128&o.__u&&(s=!!(32&o.__u),u=[l=r.__e=o.__e]),(f=t.__b)&&f(r);e:if("function"==typeof W)try{if(I=r.props,D=(f=W.contextType)&&i[f.__c],N=f?D?D.props.value:f.__:i,o.__c?C=(m=r.__c=o.__c).__=m.__E:("prototype"in W&&W.prototype.render?r.__c=m=new W(I,N):(r.__c=m=new w(I,N),m.constructor=W,m.render=T),D&&D.sub(m),m.props=I,m.state||(m.state={}),m.context=N,m.__n=i,g=m.__d=!0,m.__h=[],m._sb=[]),null==m.__s&&(m.__s=m.state),null!=W.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=v({},m.__s)),v(m.__s,W.getDerivedStateFromProps(I,m.__s))),k=m.props,S=m.state,m.__v=r,g)null==W.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==W.getDerivedStateFromProps&&I!==k&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(I,N),!m.__e&&(null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(I,m.__s,N)||r.__v===o.__v)){for(r.__v!==o.__v&&(m.props=I,m.state=m.__s,m.__d=!1),r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(e){e&&(e.__=r)})),U=0;U<m._sb.length;U++)m.__h.push(m._sb[U]);m._sb=[],m.__h.length&&a.push(m);break e}null!=m.componentWillUpdate&&m.componentWillUpdate(I,m.__s,N),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(k,S,H)}))}if(m.context=N,m.props=I,m.__P=e,m.__e=!1,A=t.__r,x=0,"prototype"in W&&W.prototype.render){for(m.state=m.__s,m.__d=!1,A&&A(r),f=m.render(m.props,m.state,m.context),E=0;E<m._sb.length;E++)m.__h.push(m._sb[E]);m._sb=[]}else do{m.__d=!1,A&&A(r),f=m.render(m.props,m.state,m.context),m.state=m.__s}while(m.__d&&++x<25);m.state=m.__s,null!=m.getChildContext&&(i=v(v({},i),m.getChildContext())),g||null==m.getSnapshotBeforeUpdate||(H=m.getSnapshotBeforeUpdate(k,S)),P(e,p(R=null!=f&&f.type===y&&null==f.key?f.props.children:f)?R:[R],r,o,i,_,u,a,l,s,d),m.base=r.__e,r.__u&=-161,m.__h.length&&a.push(m),C&&(m.__E=m.__=null)}catch(e){r.__v=null,s||null!=u?(r.__e=l,r.__u|=s?160:32,u[u.indexOf(l)]=null):(r.__e=o.__e,r.__k=o.__k),t.__e(e,r,o)}else null==u&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(e,t,r,o,i,_,u,a,l){var s,d,f,v,m,g,y,w=r.props,k=t.props,S=t.type;if("svg"===S?i="http://www.w3.org/2000/svg":"math"===S?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=_)for(s=0;s<_.length;s++)if((m=_[s])&&"setAttribute"in m==!!S&&(S?m.localName===S:3===m.nodeType)){e=m,_[s]=null;break}if(null==e){if(null===S)return document.createTextNode(k);e=document.createElementNS(i,S,k.is&&k),_=null,a=!1}if(null===S)w===k||a&&e.data===k||(e.data=k);else{if(_=_&&n.call(e.childNodes),w=r.props||c,!a&&null!=_)for(w={},s=0;s<e.attributes.length;s++)w[(m=e.attributes[s]).name]=m.value;for(s in w)if(m=w[s],"children"==s);else if("dangerouslySetInnerHTML"==s)f=m;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;M(e,s,null,m,i)}for(s in k)m=k[s],"children"==s?v=m:"dangerouslySetInnerHTML"==s?d=m:"value"==s?g=m:"checked"==s?y=m:"key"===s||a&&"function"!=typeof m||w[s]===m||M(e,s,m,w[s],i);if(d)a||f&&(d.__html===f.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(f&&(e.innerHTML=""),P(e,p(v)?v:[v],t,r,o,"foreignObject"===S?"http://www.w3.org/1999/xhtml":i,_,u,_?_[0]:r.__k&&b(r,0),a,l),null!=_)for(s=_.length;s--;)null!=_[s]&&h(_[s]);a||(s="value",void 0!==g&&(g!==e[s]||"progress"===S&&!g||"option"===S&&g!==w[s])&&M(e,s,g,w[s],i),s="checked",void 0!==y&&y!==e[s]&&M(e,s,y,w[s],i))}return e}(o.__e,r,o,i,_,u,a,s,d);(f=t.diffed)&&f(r)}function x(e,n,r){n.__d=void 0;for(var o=0;o<r.length;o++)E(r[o],r[++o],r[++o]);t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function E(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function R(e,n,r){var o,i;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&R(o[i],n,r||"function"!=typeof e.type);r||null==e.__e||h(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function T(e,n,t){return this.constructor(e,t)}n=d.slice,t={__e:function(e,n,t,r){for(var o,i,_;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),_=o.__d),_)return o.__E=o}catch(n){e=n}throw e}},r=0,w.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),S(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},w.prototype.render=y,o=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,n){return e.__v.__b-n.__v.__b},H.__r=0,a=0,l=U(!1),s=U(!0);var W=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var _=n[i++],u=n[i]?(n[0]|=_?1:2,t[n[i++]]):n[++i];3===_?r[0]=u:4===_?r[1]=Object.assign(r[1]||{},u):5===_?(r[1]=r[1]||{})[n[++i]]=u:6===_?r[1][n[++i]]+=u+"":_?(o=e.apply(u,W(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},V=new Map;var F=function(e){var n=V.get(this);return n||(n=new Map,V.set(this,n)),(n=W(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",_=[0],u=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,e,o):3===r&&(e||o)?(_.push(3,e,o),r=2):2===r&&"..."===o&&e?_.push(4,e,0):2===r&&o&&!e?_.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(_.push(r,0,o,t),r=6),e&&(_.push(r,e,0,t),r=6)),o=""},a=0;a<e.length;a++){a&&(1===r&&u(),u(a));for(var l=0;l<e[a].length;l++)n=e[a][l],1===r?"<"===n?(u(),_=[_],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(u(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[a][l+1])?(u(),3===r&&(_=_[0]),r=_,(_=_[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),r=2):o+=n),3===r&&"!--"===o&&(r=4,_=_[0])}return u(),_}(e)),n),arguments,[])).length>1?n:n[0]}.bind(m),B="undefined"!=typeof document,G="undefined"!=typeof window,L="undefined"!=typeof navigator,j="undefined"!=typeof screen;var O=1;function K(e,n){return(e||"").slice(0,n)}function q(){return Math.floor(Math.random()*(1<<30))}var z=512;function $(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function Y(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return $(t,n,e[n])})),$(t,"rn",q()),$(t,"c",!!L&&navigator.cookieEnabled),$(t,"s",j?[screen.width,screen.height,screen.colorDepth].join("x"):""),$(t,"sk",G&&window.devicePixelRatio||O),$(t,"w",G?[window.innerWidth,window.innerHeight].join("x"):""),$(t,"en",B&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return $(t,"et",r),$(t,"st",r),$(t,"t",K(n,z)),t.join(":")}var J=1024;function Q(e){return K(e,J)}function X(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var Z,ee,ne,te={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"}};function re(e){var n=te[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[Z];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(Z,'" in getText().')),e):t}function oe(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=ie(r,t)),r):(n&&(r=ie(r,n)),r)}}function ie(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":Y(n,r.title),rn:q(),ut:r.ut};r.url&&(o["page-url"]=Q(r.url)),r.referrer&&(o["page-ref"]=Q(r.referrer)),X(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:B?document.referrer:"",title:B?document.title:"",url:G&&window.location?window.location.href:""},params:ee}),function(e){Z=e}((ne=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==ne&&"ru"!==ne&&(ne="en"),ne));var _e,ue=oe("header");function ae(n){return F(_e||(_e=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ue(),n.children)}var le,se=oe("footer");function ce(){return F(le||(le=e(['<div class="','">\n        <div class="','">© Vvideo</div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo">GitHub</a></div>\n    </div>'],['<div class="','">\n        <div class="','">© Vvideo</div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo">GitHub</a></div>\n    </div>'])),se(),se("item"),se("item"))}var de,fe=oe("info-link");function pe(n){return F(de||(de=e(['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'],['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'])),fe(),fe("link"),n.href,n.title)}var ve,he,me=[{title:re("Video & audio"),id:"index",url:"./"},{title:"GPU",id:"gpu",url:"./gpu.html"},{title:re("Network"),id:"network",url:"./network.html"},{title:re("Battery"),id:"battery",url:"./battery.html"}],ge=oe("main-menu");function ye(){var n=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?.\/]/)[1];return e||"index"}();return F(he||(he=e(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ge(),me.map((function(t){return F(ve||(ve=e(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),ge("item",{active:t.id===n}),t.url,t.title)})))}var we,be,ke,Se,He=0,Pe=[],Ce=[],Ie=t,De=Ie.__b,Ne=Ie.__r,Me=Ie.diffed,Ue=Ie.__c,Ae=Ie.unmount,xe=Ie.__;function Ee(e,n){Ie.__h&&Ie.__h(be,e,He||n),He=0;var t=be.__H||(be.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:Ce}),t.__[e]}function Re(e){return He=1,function(e,n,t){var r=Ee(we++,2);if(r.t=e,!r.__c&&(r.__=[Oe(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=be,!be.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var _=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(_=!0)}})),!(!_&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};be.u=!0;var i=be.shouldComponentUpdate,_=be.componentWillUpdate;be.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}_&&_.call(this,e,n,t)},be.shouldComponentUpdate=o}return r.__N||r.__}(Oe,e)}function Te(e,n){var t=Ee(we++,7);return je(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function We(){for(var e;e=Pe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ge),e.__H.__h.forEach(Le),e.__H.__h=[]}catch(n){e.__H.__h=[],Ie.__e(n,e.__v)}}Ie.__b=function(e){be=null,De&&De(e)},Ie.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),xe&&xe(e,n)},Ie.__r=function(e){Ne&&Ne(e),we=0;var n=(be=e.__c).__H;n&&(ke===be?(n.__h=[],be.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=Ce,e.__N=e.i=void 0}))):(n.__h.forEach(Ge),n.__h.forEach(Le),n.__h=[],we=0)),ke=be},Ie.diffed=function(e){Me&&Me(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==Pe.push(n)&&Se===Ie.requestAnimationFrame||((Se=Ie.requestAnimationFrame)||Be)(We)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==Ce&&(e.__=e.__V),e.i=void 0,e.__V=Ce}))),ke=be=null},Ie.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Ge),e.__h=e.__h.filter((function(e){return!e.__||Le(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],Ie.__e(t,e.__v)}})),Ue&&Ue(e,n)},Ie.unmount=function(e){Ae&&Ae(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{Ge(e)}catch(e){n=e}})),t.__H=void 0,n&&Ie.__e(n,t.__v))};var Ve,Fe="function"==typeof requestAnimationFrame;function Be(e){var n,t=function(){clearTimeout(r),Fe&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Fe&&(n=requestAnimationFrame(t))}function Ge(e){var n=be,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),be=n}function Le(e){var n=be;e.__c=e.__(),be=n}function je(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function Oe(e,n){return"function"==typeof n?n(e):n}function Ke(n){return F(Ve||(Ve=e(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),n.children)}var qe,ze=oe("row");function $e(n){return F(qe||(qe=e(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),ze(),ze("category"),n.name,ze("body"),n.children)}var Ye,Je,Qe,Xe,Ze,en,nn,tn,rn,on,_n,un=oe("tree-list");function an(n){return"string"==typeof n?F(Ye||(Ye=e(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),un("string"),n):"number"==typeof n?F(Je||(Je=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),un("number"),n):"boolean"==typeof n?F(Qe||(Qe=e(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),un("boolean"),String(n)):void 0===typeof n?F(Xe||(Xe=e(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),un("undefined")):null===typeof n?F(Ze||(Ze=e(['<span class="','">null</span>'],['<span class="','">null</span>'])),un("null")):"function"==typeof n?F(en||(en=e(['<span class="','">function</span>'],['<span class="','">function</span>'])),un("function")):Array.isArray(n)?F(tn||(tn=e(["<ul>\n            ","\n        </ul>"],["<ul>\n            ","\n        </ul>"])),n.map((function(n){return F(nn||(nn=e(["<li>","</li>"],["<li>","</li>"])),an(n))}))):F(on||(on=e(["<ul>\n        ","\n    </ul>"],["<ul>\n        ","\n    </ul>"])),Object.keys(n).map((function(t){return F(rn||(rn=e(['<li><span class="','">',": </span>","</div>"],['<li><span class="','">',": </span>","</div>"])),un("property"),t,an(n[t]))})))}function ln(n){return F(_n||(_n=e(["\n        <",' title="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' title="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),$e,n.title,un(),an(n.data))}var sn,cn,dn=oe("battery-badge");function fn(n){return F(cn||(cn=e(['\n        <div class="','">\n            <div class="','" style="width: ','%"></div>\n            <div class="','"></div>\n            ','\n            <div class="','">',"%</div>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','" style="width: ','%"></div>\n            <div class="','"></div>\n            ','\n            <div class="','">',"%</div>\n        </div>\n    "])),dn({low:n.level<.2}),dn("charge"),100*n.level,dn("contact"),n.charging?F(sn||(sn=e(['<div class="','">↯</div>'],['<div class="','">↯</div>'])),dn("charging")):"",dn("level"),Math.floor(100*n.level))}var pn,vn,hn=function(){var e=Re({})[1];return function(e,n){return He=8,Te((function(){return e}),n)}((function(){return e({})}),[])},mn=oe("battery-status");function gn(){var n,t,r,o,i=Re(!1),_=i[0],u=i[1],a=function(e){return He=5,Te((function(){return{current:e}}),[])}(),l=hn();if(function(e,n){var t=Ee(we++,3);!Ie.__s&&je(t.__H,n)&&(t.__=e,t.i=n,be.__H.__h.push(t))}((function(){if(navigator.getBattery){navigator.getBattery().then((function(e){a.current=e,u(!0)})).catch((function(e){console.error(e)}));var e=setInterval((function(){l()}),1e3);return function(){return clearInterval(e)}}}),[]),!navigator.getBattery)return F(pn||(pn=e(["<",">","<//>"],["<",">","<//>"])),Ke,re("Battery Status API is not supported."));var s={charging:null===(n=a.current)||void 0===n?void 0:n.charging,chargingTime:null===(t=a.current)||void 0===t?void 0:t.chargingTime,dischargingTime:null===(r=a.current)||void 0===r?void 0:r.dischargingTime,level:null===(o=a.current)||void 0===o?void 0:o.level};return _?F(vn||(vn=e(['\n        <div class="','">\n            <',' data="','"><//>\n            <',' level="','" charging="','"><//>\n        </div>\n    '],['\n        <div class="','">\n            <',' data="','"><//>\n            <',' level="','" charging="','"><//>\n        </div>\n    '])),mn(),ln,s,fn,.1,s.charging):"..."}var yn,wn,bn=oe("battery-page");!function(e,r,o){var i,_,u,a;t.__&&t.__(e,r),_=(i="function"==typeof o)?null:r.__k,u=[],a=[],A(r,e=(!i&&o||r).__k=m(y,null,[e]),_||c,c,r.namespaceURI,!i&&o?[o]:_?null:r.firstChild?n.call(r.childNodes):null,u,!i&&o?o:_?_.__e:r.firstChild,i,a),x(u,e,a)}(F(wn||(wn=e(["<"," //>"],["<"," //>"])),(function(){return F(yn||(yn=e(['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API"><//>\n            <//>\n\n            <',"><//>\n\n            <","><//>\n        </div>"],['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API"><//>\n            <//>\n\n            <',"><//>\n\n            <","><//>\n        </div>"])),bn(),ye,ae,re("Can I use Battery Status API?"),pe,gn,ce)})),document.querySelector(".page"))}));