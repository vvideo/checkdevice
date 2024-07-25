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

var n$2,l$2,u$2,p$2=[];function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$2.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g$1(l,f,i,o,null)}function g$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$2:r,__i:-1,__u:0};return null==r&&null!=l$2.vnode&&l$2.vnode(f),f}function k$2(n){return n.children}n$2=p$2.slice,l$2={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;

var n$1=/[\s\n\\/='"\0<>]/,o$1=/^(xlink|xmlns|xml)([A-Z])/,i$1=/^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|spellC|src[A-Z]|tabI|useM|item[A-Z]/,a$1=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,c$1=/["&<]/;function s$1(e){if(0===e.length||!1===c$1.test(e))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1;}return r!==t&&(n+=e.slice(t,r)),n}var l$1={},u$1=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),f$1=/[A-Z]/g;function p$1(e){var t="";for(var r in e){var n=e[r];if(null!=n&&""!==n){var o="-"==r[0]?r:l$1[r]||(l$1[r]=r.replace(f$1,"-$&").toLowerCase()),i=";";"number"!=typeof n||o.startsWith("--")||u$1.has(o)||(i="px;"),t=t+o+":"+n+i;}}return t||void 0}var y$1,g,b$1b,k$1,w$1=[],A$1=Array.isArray,C$1=Object.assign;function S(n,o,i){var a=l$2.__s;l$2.__s=!0,y$1=l$2.__b,g=l$2.diffed,b$1b=l$2.__r,k$1=l$2.unmount;var c=_(k$2,null);c.__k=[n];try{var s=j$1(n,o||E,!1,void 0,c,!1,i);return Array.isArray(s)?s.join(""):s}catch(e){if(e.then)throw new Error('Use "renderToStringAsync" for suspenseful rendering.');throw e}finally{l$2.__c&&l$2.__c(n,w$1),l$2.__s=a,w$1.length=0;}}function L(){this.__d=!0;}var E={};function T$1(e,t){var r,n=e.type,o=!0;return e.__c?(o=!1,(r=e.__c).state=r.__s):r=new n(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=E),null==r.__s&&(r.__s=r.state),n.getDerivedStateFromProps?r.state=C$1({},r.state,n.getDerivedStateFromProps(r.props,r.state)):o&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!o&&r.componentWillUpdate&&r.componentWillUpdate(),b$1b&&b$1b(e),r.render(r.props,r.state,t)}function j$1(t,c,l,u,f,h,d){if(null==t||!0===t||!1===t||""===t)return "";if("object"!=typeof t)return "function"==typeof t?"":s$1(t+"");if(A$1(t)){var _,v="";f.__k=t;for(var m=0;m<t.length;m++){var x=t[m];if(null!=x&&"boolean"!=typeof x){var w,S=j$1(x,c,l,u,f,h,d);"string"==typeof S?v+=S:(_=_||[],v&&_.push(v),v="",Array.isArray(S)?(w=_).push.apply(w,S):_.push(S));}}return _?(v&&_.push(v),_):v}if(void 0!==t.constructor)return "";t.__=f,y$1&&y$1(t);var E,P,U,Z=t.type,F=t.props,M=c;if("function"==typeof Z){if(Z===k$2){if(F.tpl){for(var W="",$=0;$<F.tpl.length;$++)if(W+=F.tpl[$],F.exprs&&$<F.exprs.length){var z=F.exprs[$];if(null==z)continue;"object"!=typeof z||void 0!==z.constructor&&!A$1(z)?W+=z:W+=j$1(z,c,l,u,t,h,d);}return W}if(F.UNSTABLE_comment)return "\x3c!--"+s$1(F.UNSTABLE_comment||"")+"--\x3e";P=F.children;}else {if(null!=(E=Z.contextType)){var H=c[E.__c];M=H?H.props.value:E.__;}if(Z.prototype&&"function"==typeof Z.prototype.render)P=T$1(t,M),U=t.__c;else {t.__c=U={__v:t,props:F,context:M,setState:L,forceUpdate:L,__d:!0,__h:[]};for(var q=0;U.__d&&q++<25;)U.__d=!1,b$1b&&b$1b(t),P=Z.call(U,F,M);U.__d=!0;}if(null!=U.getChildContext&&(c=C$1({},c,U.getChildContext())),(Z.getDerivedStateFromError||U.componentDidCatch)&&l$2.errorBoundaries){var B="";P=null!=P&&P.type===k$2&&null==P.key?P.props.children:P;try{return B=j$1(P,c,l,u,t,h,d)}catch(e){return Z.getDerivedStateFromError&&(U.__s=Z.getDerivedStateFromError(e)),U.componentDidCatch&&U.componentDidCatch(e,{}),U.__d&&(P=T$1(t,c),null!=(U=t.__c).getChildContext&&(c=C$1({},c,U.getChildContext())),B=j$1(P=null!=P&&P.type===k$2&&null==P.key?P.props.children:P,c,l,u,t,h,d)),B}finally{g&&g(t),t.__=null,k$1&&k$1(t);}}}P=null!=P&&P.type===k$2&&null==P.key&&null==P.props.tpl?P.props.children:P;try{var I=j$1(P,c,l,u,t,h,d);return g&&g(t),t.__=null,l$2.unmount&&l$2.unmount(t),I}catch(r){if(d&&d.onError){var N=d.onError(r,t,function(e){return j$1(e,c,l,u,t,h,d)});if(void 0!==N)return N;var O=l$2.__e;return O&&O(r,t),""}throw r;}}var V,K="<"+Z,G="";for(var J in F){var Q=F[J];switch(J){case"children":V=Q;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in F)continue;J="for";break;case"className":if("class"in F)continue;J="class";break;case"defaultChecked":J="checked";break;case"defaultSelected":J="selected";break;case"defaultValue":case"value":switch(J="value",Z){case"textarea":V=Q;continue;case"select":u=Q;continue;case"option":u!=Q||"selected"in F||(K+=" selected");}break;case"dangerouslySetInnerHTML":G=Q&&Q.__html;continue;case"style":"object"==typeof Q&&(Q=p$1(Q));break;case"acceptCharset":J="accept-charset";break;case"httpEquiv":J="http-equiv";break;default:if(o$1.test(J))J=J.replace(o$1,"$1:$2").toLowerCase();else {if(n$1.test(J))continue;"-"!==J[4]&&"draggable"!==J||null==Q?l?a$1.test(J)&&(J="panose1"===J?"panose-1":J.replace(/([A-Z])/g,"-$1").toLowerCase()):i$1.test(J)&&(J=J.toLowerCase()):Q+="";}}null!=Q&&!1!==Q&&"function"!=typeof Q&&(K=!0===Q||""===Q?K+" "+J:K+" "+J+'="'+s$1(Q+"")+'"');}if(n$1.test(Z))throw new Error(Z+" is not a valid HTML tag name in "+K+">");if(G||("string"==typeof V?G=s$1(V):null!=V&&!1!==V&&!0!==V&&(G=j$1(V,c,"svg"===Z||"foreignObject"!==Z&&l,u,t,h,d))),g&&g(t),t.__=null,k$1&&k$1(t),!G&&D$1.has(Z))return K+"/>";var X="</"+Z+">",Y=K+">";return Array.isArray(G)?[Y].concat(G,[X]):"string"!=typeof G?[Y,G,X]:Y+G+X}var D$1=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);

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

var b$1a = block('badge');
function Badge(props) {
    var _a, _b;
    return m$1(templateObject_3$q || (templateObject_3$q = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n            ", "\n        </div>\n    "])), b$1a({
        type: props.type,
        background: props.background,
        disabled: props.disabled,
        hidden: props.hidden,
        size: props.size,
        click: props.click,
    }), ((_a = props.top) === null || _a === void 0 ? void 0 : _a.text) ? m$1(templateObject_1$1N || (templateObject_1$1N = __makeTemplateObject(["<div class=\"", "\" title=\"", "\">", "</div>"], ["<div class=\"", "\" title=\"", "\">", "</div>"])), b$1a('top-text'), props.top.title, props.top.text) : '', b$1a('body'), props.text, ((_b = props.bottom) === null || _b === void 0 ? void 0 : _b.text) ? m$1(templateObject_2$Q || (templateObject_2$Q = __makeTemplateObject(["<div class=\"", "\" title=\"", "\">", "</div>"], ["<div class=\"", "\" title=\"", "\">", "</div>"])), b$1a('bottom-text'), props.bottom.title, props.bottom.text) : '');
}
var templateObject_1$1N, templateObject_2$Q, templateObject_3$q;

const AAC_CONTENT_TYPE = 'audio/mp4; codecs="mp4a.40.2"';
const DOLBY_AC3_CONTENT_TYPE = 'audio/mp4; codecs="ac-3"';
const DOLBY_EC3_CONTENT_TYPE = 'audio/mp4; codecs="ec-3"';
const OPUS_CONTENT_TYPE = 'audio/webm; codecs="opus"';
const VORBIS_CONTENT_TYPE = 'audio/webm; codecs="vorbis"';
const FLAC_CONTENT_TYPE = 'audio/mp4; codecs="flac"';
const ALAC_CONTENT_TYPE = 'audio/mp4; codecs="alac"';
const MP3_CONTENT_TYPE = 'audio/mpeg';
const MP4_AUDIO_CONTENT_TYPE = 'audio/mp4';
const MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE = 'audio/mp4; codecs="mhm1.0x0D"';
const DTS_CORE_CONTENT_TYPE = 'audio/mp4; codecs="dtsc"';
const DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE = 'audio/mp4; codecs="dtsh"';
const DTS_UHD_PROFILE_2_CONTENT_TYPE = 'audio/mp4; codecs="dtsx"';

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
    if (typeof window === 'undefined') {
        return false;
    }
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
function isAlacSupported() {
    return isContentTypeSupported(ALAC_CONTENT_TYPE);
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

function isChromium() {
    // @ts-ignore
    return Boolean(window.chrome);
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

function getGpuVendor() {
    if (typeof window === 'undefined') {
        return '';
    }
    const canvas = document.createElement('canvas');
    // Less detailed GPU data
    // try {
    //     const gl = canvas.getContext('webgl');
    //     if (gl) {
    //         return gl.getParameter(gl.VENDOR);
    //     }
    // } catch(e) {}
    try {
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            // @ts-ignore
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            // @ts-ignore
            return gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        }
    }
    catch (e) { }
    return '';
}
function getGpuRenderer() {
    if (typeof window === 'undefined') {
        return '';
    }
    const canvas = document.createElement('canvas');
    // Less detailed GPU data
    // try {
    //     const gl = canvas.getContext('webgl');
    //     if (gl) {
    //         return gl.getParameter(gl.RENDERER);
    //     }
    // } catch(e) {}
    try {
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            // @ts-ignore
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            // @ts-ignore
            return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        }
    }
    catch (e) { }
    return '';
}
function hasHardwareAcceleration() {
    if (!isChromium() || !navigator.mediaCapabilities || !navigator.mediaCapabilities.decodingInfo) {
        return Promise.resolve(undefined);
    }
    return navigator.mediaCapabilities.decodingInfo({
        type: 'file',
        video: {
            contentType: H264_BASELINE_CONTENT_TYPE,
            width: 800,
            height: 600,
            bitrate: 100000,
            framerate: 30,
        }
    }).then(result => result.powerEfficient).catch(() => undefined);
}

const FAIRPLAY_KEY_SYSTEM = 'com.apple.fps';
const FAIRPLAY_V1_KEY_SYSTEM = 'com.apple.fps.1_0';
const FAIRPLAY_V2_KEY_SYSTEM = 'com.apple.fps.2_0';
const FAIRPLAY_V3_KEY_SYSTEM = 'com.apple.fps.3_0';
const WIDEWINE_KEY_SYSTEM = 'com.widevine.alpha';
// https://github.com/shaka-project/shaka-player/blob/main/docs/tutorials/drm-config.md
const PLAYREADY_KEY_SYSTEM = 'com.microsoft.playready';
const PLAYREADY_RECOMMENDATION_KEY_SYSTEM = 'com.microsoft.playready.recommendation';
const PRIMETIME_KEY_SYSTEM = 'com.adobe.primetime';
const CLEAR_KEY_SYSTEM = 'org.w3.clearkey';

function requestMediaKeySystemAccess(keySystem, supportedConfigurations) {
    if (typeof navigator === 'undefined' || !navigator.requestMediaKeySystemAccess) {
        return Promise.resolve(false);
    }
    return navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations).then(() => true).catch(() => false);
}

function isFairPlaySupported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
    return requestMediaKeySystemAccess(FAIRPLAY_KEY_SYSTEM, [
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
function isFairPlayV1Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
    return requestMediaKeySystemAccess(FAIRPLAY_V1_KEY_SYSTEM, [
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
function isFairPlayV2Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
    return requestMediaKeySystemAccess(FAIRPLAY_V2_KEY_SYSTEM, [
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
function isFairPlayV3Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
    return requestMediaKeySystemAccess(FAIRPLAY_V3_KEY_SYSTEM, [
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

function isPlayReadySupported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
    return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
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
function isPlayReadySL150Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
    return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                    robustness: '150',
                },
            ],
        },
    ]);
}
function isPlayReadySL2000Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
    return requestMediaKeySystemAccess(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                    robustness: '2000',
                },
            ],
        },
    ]);
}
function isPlayReadySL3000Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']) {
    return requestMediaKeySystemAccess(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
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
function isCastToAirPlaySupported() {
    return Boolean(typeof window !== 'undefined' &&
        // https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls
        // @ts-ignore
        window.WebKitPlaybackTargetAvailabilityEvent);
}

function isStandalone() {
    return Boolean(typeof window !== 'undefined' &&
        // @ts-ignore
        window.navigator.standalone === true || // Apple Safari
        // https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app
        (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches));
}

var b$19 = block('audio-badges');
function AudioBadge() {
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
    if (isDtsSupported().any) {
        audioCodecs51.push('DTS');
    }
    if (isDtsHdSupported().any) {
        audioCodecs51.push('DTS:HD');
    }
    if (isDtsXSupported().any) {
        audioCodecs51.push('DTS:X');
    }
    var has51 = audioCodecs51.length;
    return m$1(templateObject_1$1M || (templateObject_1$1M = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$19(), Badge({
        text: has51 ? '5.1' : '2.0',
        background: has51 ? 'gold' : 'transparent',
        bottom: {
            text: (has51 ? audioCodecs51 : audioCodecs20).join(', '),
        },
    }));
}
var templateObject_1$1M;

var b$18 = block('codec');
function Codec(props) {
    var color = props.disabled ? 'black' : (props.color || 'black');
    var tooltip = props.tooltip ? m$1(templateObject_1$1L || (templateObject_1$1L = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$18('tooltip'), props.tooltip) : '';
    return m$1(templateObject_2$P || (templateObject_2$P = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <div class=\"", "\">", "</div>\n        </div>\n    "])), b$18({
        color: color,
        border: props.border,
        disabled: props.disabled,
    }), tooltip, b$18('name'), props.name);
}
var templateObject_1$1L, templateObject_2$P;

var b$17 = block('column');
function Column(props) {
    return m$1(templateObject_1$1K || (templateObject_1$1K = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$17(), b$17('category'), props.name, b$17('body'), props.children);
}
var templateObject_1$1K;

var b$16 = block('columns');
function Columns(props) {
    return m$1(templateObject_1$1J || (templateObject_1$1J = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$16(), props.children);
}
var templateObject_1$1J;

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
    }
};

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

var isSsr = typeof window === 'undefined';

function getIsTypeSupportedProps(isTypeSupported) {
    return !isSsr && window.MediaSource ? {
        value: String(isTypeSupported),
        color: isTypeSupported ? 'green' : 'red',
    } : {
        value: m$1(templateObject_1$1I || (templateObject_1$1I = __makeTemplateObject(["<b>", "</b>"], ["<b>", "</b>"])), i18n('unsupported')),
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
    return m$1(templateObject_2$O || (templateObject_2$O = __makeTemplateObject(["\n        ", ".canPlayType(): <span style=\"color:", "\">", "</span><br />\n        MediaSource.isTypeSupported(): <span style=\"color:", "\">", "</span><br />\n        <hr />\n        ", "\n    "], ["\n        ", ".canPlayType(): <span style=\"color:", "\">", "</span><br />\n        MediaSource.isTypeSupported(): <span style=\"color:", "\">", "</span><br />\n        <hr />\n        ", "\n    "])), [props.mediaElementType], canPlayTypeResult.color, canPlayTypeResult.value, isTypeSupportedResult.color, isTypeSupportedResult.value, props.contentType);
}
var templateObject_1$1I, templateObject_2$O;

function AudioCodecs() {
    var supported = [];
    var unsupported = [];
    [
        { supported: isMp3Supported(), name: 'MP3', color: 'orange' },
        { supported: isMp4AudioSupported(), name: 'MP4', color: 'orange' },
        { supported: isAacSupported(), name: 'AAC', color: 'orange' },
        { supported: isFlacSupported(), name: 'FLAC', color: 'blue' },
        { supported: isAlacSupported(), name: 'ALAC', color: 'blue' },
        { supported: isVorbisSupported(), name: 'Vorbis', color: 'green' },
        { supported: isOpusSupported(), name: 'Opus', color: 'green' },
        { supported: isDolbyDigitalSupported(), name: m$1(templateObject_1$1H || (templateObject_1$1H = __makeTemplateObject(["<b>Dolby</b> Digital"], ["<b>Dolby</b> Digital"]))), color: 'black', border: 'white' },
        { supported: isDolbyDigitalPlusSupported(), name: m$1(templateObject_2$N || (templateObject_2$N = __makeTemplateObject(["<b>Dolby</b> Digital Plus"], ["<b>Dolby</b> Digital Plus"]))), color: 'black', border: 'white' },
        { supported: isDolbyAtmosSupported(), name: m$1(templateObject_3$p || (templateObject_3$p = __makeTemplateObject(["<b>Dolby</b> Atmos"], ["<b>Dolby</b> Atmos"]))), color: 'black', border: 'white' },
        { supported: isDtsSupported(), name: 'DTS', color: 'black' },
        { supported: isDtsHdSupported(), name: 'DTS:HD', color: 'black' },
        { supported: isDtsXSupported(), name: 'DTS:X', color: 'black' },
        { supported: isMpegHAudioSupported(), name: 'MPEG-H Audio', color: 'blue' },
    ].map(function (item) {
        var isSupported = typeof item.supported === 'boolean' ? item.supported : item.supported.any;
        if (isSupported) {
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
                color: 'black',
                disabled: true,
                tooltip: CodecDetails(item.supported),
            }));
        }
    });
    return m$1(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["<", ">\n        <", " name=\"", "\">\n            ", "\n        <//>\n        ", "\n    <//>"], ["<", ">\n        <", " name=\"", "\">\n            ", "\n        <//>\n        ", "\n    <//>"])), Columns, Column, i18n('Supported'), supported.length ? supported : i18n('No supported audio codecs.'), unsupported.length ? m$1(templateObject_4$f || (templateObject_4$f = __makeTemplateObject(["<", " name=\"", "\">", "<//>"], ["<", " name=\"", "\">", "<//>"])), Column, i18n('Unsupported'), unsupported) : '');
}
var templateObject_1$1H, templateObject_2$N, templateObject_3$p, templateObject_4$f, templateObject_5$8;

var b$15 = block('page-title');
function PageTitle(props) {
    return m$1(templateObject_1$1G || (templateObject_1$1G = __makeTemplateObject(["\n        <h1 class=\"", "\">\n            ", "\n        </h1>\n    "], ["\n        <h1 class=\"", "\">\n            ", "\n        </h1>\n    "])), b$15(), props.children);
}
var templateObject_1$1G;

var b$14 = block('row');
function Row(props) {
    return m$1(templateObject_1$1F || (templateObject_1$1F = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">", "</div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$14(), b$14('category'), props.name, b$14('body'), props.children);
}
var templateObject_1$1F;

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

if (isSsr) {
    setI18nLang('en');
}
else {
    hit('95998062'); // 97747983
    setI18nLang(getLang());
    withInstallApp();
    addHoverOnBody();
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

var b$13 = block('link');
function Link(props) {
    var className = classname(props.class, b$13({ theme: props.theme }));
    return m$1(templateObject_1$1E || (templateObject_1$1E = __makeTemplateObject(["<a class=\"", "\" href=\"", "\">", "</a>"], ["<a class=\"", "\" href=\"", "\">", "</a>"])), className, props.href, props.children);
}
var templateObject_1$1E;

var t,r,u,i,o=0,f=[],c=l$2,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function A(n){return o=5,T(function(){return {current:n}},[])}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

var b$12 = block('lang-switcher-item');
function LangSwitcherItem(props) {
    var emoji = props.emoji, onClick = props.onClick, name = props.name, value = props.value, selected = props.selected;
    var handleClick = q(function () {
        onClick(value);
    }, []);
    return m$1(templateObject_1$1D || (templateObject_1$1D = __makeTemplateObject(["<div class=\"", "\" onClick=\"", "\">", " ", " ", "</div>"], ["<div class=\"", "\" onClick=\"", "\">", " ", " ", "</div>"])), b$12(), handleClick, emoji, name, selected ? ' ✓' : '');
}
var templateObject_1$1D;

var decodeValue = function (value) {
    try {
        return decodeURIComponent(value);
    }
    catch (e) {
        return value;
    }
};
// parse only VALID search or hash part of URL
function parseQueryString(qs) {
    var result = {};
    var qsBody = qs.replace(/^[?#]+/, '').replace(/#.*$/, '');
    var params = qsBody.split('&');
    for (var i = 0; i < params.length; i += 1) {
        var index = params[i].indexOf('=');
        var key = void 0;
        var value = void 0;
        if (index === -1) {
            key = decodeValue(params[i]);
            value = '';
        }
        else {
            key = decodeValue(params[i].slice(0, index));
            value = params[i].slice(index + 1);
        }
        if (key) {
            var isValueArray = Boolean(/(\[\])$/.exec(key));
            key = key.replace(/\[\]$/, '');
            if (!isValueArray) {
                result[key] = decodeValue(value);
            }
            else if (result[key] === undefined) {
                result[key] = [decodeValue(value)];
            }
            else {
                result[key] = [].concat(result[key] || [], decodeValue(value));
            }
        }
    }
    return result;
}

var PARSE_LINK_ELEMENT;
function parseUrl(url) {
    if (!PARSE_LINK_ELEMENT) {
        PARSE_LINK_ELEMENT = document.createElement('a');
    }
    PARSE_LINK_ELEMENT.href = url;
    var pathname = PARSE_LINK_ELEMENT.pathname || '';
    if (pathname.charAt(0) !== '/') {
        pathname = "/".concat(pathname);
    }
    var searchAndHash = (PARSE_LINK_ELEMENT.search || '') + (PARSE_LINK_ELEMENT.hash || '');
    var pos = url.lastIndexOf(searchAndHash);
    var originalPath = pos === -1 ? url : url.slice(0, pos);
    return {
        originalPath: originalPath,
        href: PARSE_LINK_ELEMENT.href,
        protocol: PARSE_LINK_ELEMENT.protocol,
        host: PARSE_LINK_ELEMENT.host,
        hostname: PARSE_LINK_ELEMENT.hostname,
        port: PARSE_LINK_ELEMENT.port,
        pathname: pathname,
        search: PARSE_LINK_ELEMENT.search,
        hash: PARSE_LINK_ELEMENT.hash,
    };
}

function urlFromUrlObject(urlObject) {
    var host = urlObject.port === '443' || urlObject.port === '80' ? urlObject.hostname : urlObject.host;
    return "".concat(urlObject.protocol, "//").concat(host).concat(urlObject.pathname).concat(urlObject.search).concat(urlObject.hash);
}

function addParamToUrl(url, key, value) {
    if (value === undefined) {
        return url;
    }
    var urlObj = parseUrl(url);
    var queryObj = parseQueryString(urlObj.search);
    queryObj[key] = value;
    return urlFromUrlObject(__assign(__assign({}, urlObj), { search: formatQueryString(queryObj) }));
}
var createQueryArrayParam = function (key, arr) {
    return arr.map(function (el) { return "".concat(key, "[]=").concat(encodeURIComponent(el)); }).join('&');
};
function formatQueryString(queryObj) {
    var result = [];
    Object.keys(queryObj).forEach(function (key) {
        var value = queryObj[key];
        if (Array.isArray(value)) {
            result.push(createQueryArrayParam(key, value));
        }
        else if (value !== undefined) {
            result.push("".concat(key, "=").concat(encodeURIComponent(value)));
        }
    });
    if (!result.length) {
        return '';
    }
    return "?".concat(result.join('&'));
}

var b$11 = block('lang-switcher');
function LangSwitcher() {
    var _a = h(false), visible = _a[0], setVisible = _a[1];
    var currentLang = getI18nLang();
    var langs = getI18nLangs();
    var handleClickItem = q(function (value) {
        setVisible(false);
        window.location.href = addParamToUrl(window.location.href, 'lang', value);
    }, [setVisible]);
    var handleClick = q(function () {
        setVisible(true);
    }, [setVisible]);
    var currentLangItem = langs.filter(function (item) { return currentLang === item.value; })[0];
    return m$1(templateObject_2$M || (templateObject_2$M = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\" onClick=\"", "\"><span class=\"", "\">", "</span> ", "</div>\n        <div class=\"", "\">\n            ", "\n        </div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\" onClick=\"", "\"><span class=\"", "\">", "</span> ", "</div>\n        <div class=\"", "\">\n            ", "\n        </div>\n    </div>"])), b$11(), b$11('current'), handleClick, b$11('emoji'), currentLangItem.emoji, currentLangItem.name, b$11('popup', { visible: visible }), langs.map(function (item) { return m$1(templateObject_1$1C || (templateObject_1$1C = __makeTemplateObject(["<", " selected=\"", "\" key=\"", "\" onClick=\"", "\" ...\"", "\" //>"], ["<", " selected=\"", "\" key=\"", "\" onClick=\"", "\" ...\"", "\" //>"])), LangSwitcherItem, currentLang === item.value, item.value, handleClickItem, item); }));
}
var templateObject_1$1C, templateObject_2$M;

var b$10 = block('footer');
function Footer() {
    return m$1(templateObject_1$1B || (templateObject_1$1B = __makeTemplateObject(["<footer class=\"", "\">\n        <div class=\"", "\"><", " target=\"_blank\" href=\"https://github.com/vvideo/caniwatchvideo/issues/new\">", "<//></div>\n        <div class=\"", "\"><", " //></div>\n        <div class=\"", "\">\u00A9 Vvideo</div>\n    </footer>"], ["<footer class=\"", "\">\n        <div class=\"", "\"><", " target=\"_blank\" href=\"https://github.com/vvideo/caniwatchvideo/issues/new\">", "<//></div>\n        <div class=\"", "\"><", " //></div>\n        <div class=\"", "\">\u00A9 Vvideo</div>\n    </footer>"])), b$10(), b$10('item', { report: true }), Link, i18n('Report a bug'), b$10('item'), LangSwitcher, b$10('item'));
}
var templateObject_1$1B;

var b$$ = block('main-menu');
function MainMenu(props) {
    return m$1(templateObject_2$L || (templateObject_2$L = __makeTemplateObject(["\n        <nav class=\"", "\">\n            <ul class=\"", "\">\n            ", "\n            </ul>\n        </nav>\n    "], ["\n        <nav class=\"", "\">\n            <ul class=\"", "\">\n            ", "\n            </ul>\n        </nav>\n    "])), b$$(), b$$('list'), props.items.filter(function (item) { return !item.hidden; }).map(function (item) {
        return m$1(templateObject_1$1A || (templateObject_1$1A = __makeTemplateObject(["<li class=\"", "\" key=\"", "\"><a class=\"", "\" href=\"", "\">", "</a></li>"], ["<li class=\"", "\" key=\"", "\"><a class=\"", "\" href=\"", "\">", "</a></li>"])), b$$('item', { selected: item.selected }), item.id, b$$('link'), item.url, item.title);
    }));
}
var templateObject_1$1A, templateObject_2$L;

var pages$1 = [
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
        "url": "/",
        "hidden": true
    },
    {
        "header": {
            "en": "Can I watch video?",
            "ru": "Могу ли я смотреть видео?"
        },
        "emoji": "⏯",
        "menuTitle": {
            "en": "Video",
            "ru": "Видео"
        },
        "id": "video",
        "url": "/video.html"
    },
    {
        "menuTitle": {
            "en": "Audio",
            "ru": "Аудио"
        },
        "emoji": "🔊",
        "id": "audio",
        "url": "/audio.html"
    },
    {
        "menuTitle": {
            "en": "Screen",
            "ru": "Экран"
        },
        "emoji": "🖥️",
        "id": "screen",
        "url": "/screen.html"
    },
    {
        "menuTitle": {
            "en": "Webcamera",
            "ru": "Веб-камера"
        },
        "emoji": "📸",
        "id": "camera",
        "url": "/camera.html"
    },
    {
        "menuTitle": {
            "en": "Mic",
            "ru": "Микрофон"
        },
        "emoji": "🎙️",
        "id": "mic",
        "url": "/mic.html"
    },
    {
        "menuTitle": {
            "en": "GPU",
            "ru": "GPU"
        },
        "emoji": "⚙️",
        "id": "gpu",
        "url": "/gpu.html"
    },
    {
        "menuTitle": {
            "en": "Mouse",
            "ru": "Мышь"
        },
        "emoji": "🖱",
        "id": "mouse",
        "url": "/mouse.html"
    },
    {
        "menuTitle": {
            "en": "Keyboard",
            "ru": "Клавиатура"
        },
        "emoji": "⌨",
        "id": "keyboard",
        "url": "/keyboard.html"
    },
    {
        "menuTitle": {
            "en": "Key codes",
            "ru": "Коды клавиш"
        },
        "emoji": "",
        "id": "keycodes",
        "url": "/keycodes.html",
        "hidden": true
    },
    {
        "menuTitle": {
            "en": "Gamepad",
            "ru": "Джойстик"
        },
        "emoji": "🕹️",
        "id": "gamepad",
        "url": "/gamepad.html"
    },
    {
        "menuTitle": {
            "en": "Storage",
            "ru": "Хранилище"
        },
        "emoji": "💽",
        "id": "storage",
        "url": "/storage.html"
    },
    {
        "menuTitle": {
            "en": "Network & geo",
            "ru": "Сеть и гео"
        },
        "emoji": "📍",
        "id": "network",
        "url": "/network.html"
    },
    {
        "menuTitle": {
            "en": "Platform",
            "ru": "Платформа"
        },
        "emoji": "💻",
        "id": "platform",
        "url": "/platform.html"
    },
    {
        "menuTitle": {
            "en": "Battery",
            "ru": "Батарея"
        },
        "emoji": "🔋",
        "id": "battery",
        "url": "/battery.html"
    },
    {
        "menuTitle": {
            "en": "Fonts",
            "ru": "Шрифты"
        },
        "emoji": "❝",
        "id": "fonts",
        "url": "/fonts.html"
    },
    {
        "menuTitle": {
            "en": "404",
            "ru": "404"
        },
        "emoji": "",
        "id": "error404",
        "url": "/error404.html",
        "hidden": true
    },
    {
        "menuTitle": {
            "en": "Test dead pixels",
            "ru": "Тестирование битых пикселей"
        },
        "emoji": "",
        "id": "test-dead-pixels",
        "url": "/test-dead-pixels.html",
        "hidden": true
    }
];

function getIdFromLocation() {
    var id = window.location.pathname.split(/[?./]/)[1];
    return id ? id : 'index';
}
function Menu() {
    var id = isSsr ? '' : getIdFromLocation();
    var items = pages$1.map(function (item) {
        var selected = item.id === id;
        if (selected) {
            document.title = i18nWithKeyset(item.header || item.menuTitle) + ' / ' + i18n('Check device online');
        }
        return __assign(__assign({}, item), { url: item.url + (isSsr ? '' : '?lang=' + getI18nLang()), title: i18nWithKeyset(item.menuTitle), selected: selected });
    });
    return m$1(templateObject_1$1z || (templateObject_1$1z = __makeTemplateObject(["<", " items=\"", "\"><//>"], ["<", " items=\"", "\"><//>"])), MainMenu, items);
}
var templateObject_1$1z;

function getPagePath(id) {
    var langPostfix = isSsr ? '' : "?lang=".concat(getI18nLang());
    return id === 'index' ?
        "/".concat(langPostfix) :
        "".concat(id, ".html").concat(langPostfix);
}

var b$_ = block('header');
function Header() {
    return m$1(templateObject_1$1y || (templateObject_1$1y = __makeTemplateObject(["\n        <header class=\"", "\">\n            <", " theme=\"white\" href=\"", "\"><span class=\"", "\"></span>", "<//>\n        </header>\n    "], ["\n        <header class=\"", "\">\n            <", " theme=\"white\" href=\"", "\"><span class=\"", "\"></span>", "<//>\n        </header>\n    "])), b$_(), Link, getPagePath('index'), b$_('logo'), i18n('Check device online'));
}
var templateObject_1$1y;

function Page(props) {
    return m$1(templateObject_2$K || (templateObject_2$K = __makeTemplateObject(["\n        <div>\n            <", " //>\n            ", "\n\n            ", "\n\n            <", "><//>\n        </div>"], ["\n        <div>\n            <", " //>\n            ", "\n\n            ", "\n\n            <", "><//>\n        </div>"])), Header, props.withoutMenu ? '' : m$1(templateObject_1$1x || (templateObject_1$1x = __makeTemplateObject(["<", "><//>"], ["<", "><//>"])), Menu), props.children, Footer);
}
var templateObject_1$1x, templateObject_2$K;

var b$Z = block('active-question');
function ActiveQuestion(props) {
    var _a = h(false), opened = _a[0], setOpened = _a[1];
    var callback = q(function () {
        setOpened(!opened);
    }, [opened]);
    return m$1(templateObject_1$1w || (templateObject_1$1w = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">", "</div>\n        </div>\n        <div class=\"", "\">", "</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\" onClick=", ">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">", "</div>\n        </div>\n        <div class=\"", "\">", "</div>\n    </div>"])), b$Z({ opened: opened }), b$Z('head'), callback, b$Z('plus'), opened ? '-' : '+', b$Z('question'), props.head, b$Z('body'), props.children);
}
var templateObject_1$1w;

var b$Y = block('result');
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
    return m$1(templateObject_2$J || (templateObject_2$J = __makeTemplateObject(["<span class=\"", "\">\n        ", "\n        ", "\n    </span>"], ["<span class=\"", "\">\n        ", "\n        ", "\n    </span>"])), b$Y({
        type: type,
    }), text, props.details ? m$1(templateObject_1$1v || (templateObject_1$1v = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$Y('details'), props.details) : '');
}
var templateObject_1$1v, templateObject_2$J;

var b$X = block('question-surround-sound');
function QuestionSurroundSound() {
    var isDolbyDigital = isDolbyDigitalSupported();
    var isDolbyDigitalPlus = isDolbyDigitalPlusSupported();
    var isDolbyAtmos = isDolbyAtmosSupported();
    var isDts = isDtsSupported();
    var isDtsHd = isDtsHdSupported();
    var isDtsX = isDtsXSupported();
    var mainAnswer = isDolbyDigital.any ||
        isDolbyDigitalPlus.any ||
        isDolbyAtmos ||
        isDts.any ||
        isDtsHd.any ||
        isDtsX.any;
    var head = m$1(templateObject_1$1u || (templateObject_1$1u = __makeTemplateObject(["", "\u00A0<", " value=\"", "\"><//>"], ["", "\\u00a0<", " value=\"", "\"><//>"])), i18n('Can I listen to surround sound on online services?'), Result, mainAnswer);
    return m$1(templateObject_2$I || (templateObject_2$I = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", " head=\"", "\">\n                ", "\u00A0<", " value=\"", "\"><//>\n                <ul>\n                    <li>\n                        <", "\n                            name=\"Dolby Digital\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\u00A0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"Dolby Digital Plus\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\u00A0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"Dolby Atmos\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\">\n                            <//>\u00A0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"DTS\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\u00A0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"DTS:HD\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\u00A0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"DTS:X\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\u00A0<", " value=\"", "\"><//>\n                    </li>\n                </ul>\n            <//>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", " head=\"", "\">\n                ", "\\u00a0<", " value=\"", "\"><//>\n                <ul>\n                    <li>\n                        <", "\n                            name=\"Dolby Digital\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\\u00a0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"Dolby Digital Plus\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\\u00a0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"Dolby Atmos\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\">\n                            <//>\\u00a0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"DTS\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\\u00a0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"DTS:HD\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\\u00a0<", " value=\"", "\"><//>\n                    </li>\n                    <li>\n                        <", "\n                            name=\"DTS:X\"\n                            color=\"black\"\n                            border=\"white\"\n                            disabled=\"", "\"\n                            tooltip=\"", "\">\n                            <//>\\u00a0<", " value=\"", "\"><//>\n                    </li>\n                </ul>\n            <//>\n        </div>\n    "])), b$X(), ActiveQuestion, head, i18n('Supports one of the audio codecs?'), Result, mainAnswer, Codec, !isDolbyDigital.any, CodecDetails(isDolbyDigital), Result, isDolbyDigital.any, Codec, !isDolbyDigitalPlus.any, CodecDetails(isDolbyDigitalPlus), Result, isDolbyDigitalPlus.any, Codec, !isDolbyAtmos, Result, isDolbyAtmos, Codec, !isDts.any, CodecDetails(isDts), Result, isDts.any, Codec, !isDtsHd.any, CodecDetails(isDtsHd), Result, isDtsHd.any, Codec, !isDtsX.any, CodecDetails(isDtsX), Result, isDtsX.any);
}
var templateObject_1$1u, templateObject_2$I;

var b$W = block('button');
function Button(props) {
    var disabled = props.disabled, size = props.size, theme = props.theme, onClick = props.onClick;
    var className = classname(props.class, b$W({ theme: theme, size: size, disabled: disabled }));
    var handleClick = q(function () {
        if (disabled) {
            return;
        }
        onClick && onClick();
    }, [disabled, onClick]);
    return m$1(templateObject_1$1t || (templateObject_1$1t = __makeTemplateObject(["<button class=\"", "\" disabled=\"", "\" onClick=\"", "\">", "</button>"], ["<button class=\"", "\" disabled=\"", "\" onClick=\"", "\">", "</button>"])), className, disabled, handleClick, props.children);
}
var templateObject_1$1t;

var b$V = block('warning-message');
function WarningMessage(props) {
    return m$1(templateObject_1$1s || (templateObject_1$1s = __makeTemplateObject(["<span class=\"", "\">\u26A0\uFE0F ", "</span>"], ["<span class=\"", "\">\u26A0\uFE0F ", "</span>"])), b$V({ theme: props.theme }), props.children);
}
var templateObject_1$1s;

var b$U = block('vibration');
function Vibration() {
    var onClick = q(function () {
        navigator.vibrate(1000);
    }, []);
    var isSupported = typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
    if (!isSsr && !isSupported) {
        return '';
    }
    return m$1(templateObject_1$1r || (templateObject_1$1r = __makeTemplateObject(["<div class=\"", "\">\n        <", " disabled=\"", "\" onClick=", ">", "<//>\n\n        <div class=\"", "\">\n            <", " theme=\"gray\">", "<//>\n        </div>\n    </div>"], ["<div class=\"", "\">\n        <", " disabled=\"", "\" onClick=", ">", "<//>\n\n        <div class=\"", "\">\n            <", " theme=\"gray\">", "<//>\n        </div>\n    </div>"])), b$U(), Button, !isSupported, onClick, i18n('Vibrate'), b$U('details'), WarningMessage, i18n('Support is mainly on mobile devices.'));
}
var templateObject_1$1r;

var b$T = block('audio-page');
function AudioPage() {
    return m$1(templateObject_1$1q || (templateObject_1$1q = __makeTemplateObject(["\n        <", ">\n            <", "}>\n                ", "\n            <//>\n\n            <", "><//>\n\n            <div class=\"", "\">\n                <", "><//>\n            </div>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n        <//>"], ["\n        <", ">\n            <", "}>\n                ", "\n            <//>\n\n            <", "><//>\n\n            <div class=\"", "\">\n                <", "><//>\n            </div>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n        <//>"])), Page, PageTitle, i18n('Audio'), QuestionSurroundSound, b$T('badge'), AudioBadge, Row, i18n('Audio Codecs'), AudioCodecs, Row, i18n('Check vibration'), Vibration);
}
var templateObject_1$1q;

var b$S = block('battery-badge');
function BatteryBadge(props) {
    return m$1(templateObject_2$H || (templateObject_2$H = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\" style=\"width: ", "%\"></div>\n            <div class=\"", "\"></div>\n            ", "\n            <div class=\"", "\">", "%</div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\" style=\"width: ", "%\"></div>\n            <div class=\"", "\"></div>\n            ", "\n            <div class=\"", "\">", "%</div>\n        </div>\n    "])), b$S({ low: props.level < 0.2 }), b$S('charge'), props.level * 100, b$S('contact'), props.charging ? m$1(templateObject_1$1p || (templateObject_1$1p = __makeTemplateObject(["<div class=\"", "\">\u21AF</div>"], ["<div class=\"", "\">\u21AF</div>"])), b$S('charging')) : '', b$S('level'), Math.floor(props.level * 100));
}
var templateObject_1$1p, templateObject_2$H;

var useForceUpdate = function () {
    var _a = h({}), updateState = _a[1];
    return q(function () { return updateState({}); }, []);
};

var b$R = block('spinner');
function Spinner(props) {
    return m$1(templateObject_1$1o || (templateObject_1$1o = __makeTemplateObject(["<div class=\"", "\"></div>"], ["<div class=\"", "\"></div>"])), b$R({ size: props.size }));
}
var templateObject_1$1o;

var b$Q = block('list');
function List(props) {
    var filteredItems = props.items
        .filter(function (item) {
        if (!item) {
            return false;
        }
        if (item.length === 1) {
            return true;
        }
        item[0]; var value = item[1];
        return typeof value !== 'undefined' && value !== '';
    })
        .map(function (item) {
        var name = item[0], value = item[1];
        return item.length === 1 ?
            [name] :
            [name, typeof value === 'boolean' ? String(value) : value];
    });
    var className = classname(props.class, b$Q());
    return filteredItems.length ? m$1(templateObject_3$o || (templateObject_3$o = __makeTemplateObject(["<", " name=\"", "\">\n        <ul class=\"", "\">\n        ", "\n        </ul>\n    <//>"], ["<", " name=\"", "\">\n        <ul class=\"", "\">\n        ", "\n        </ul>\n    <//>"])), Row, props.title, className, filteredItems.map(function (item) {
        var name = item[0], value = item[1];
        if (item.length === 1) {
            return m$1(templateObject_1$1n || (templateObject_1$1n = __makeTemplateObject(["<li>", "</li>"], ["<li>", "</li>"])), name);
        }
        return m$1(templateObject_2$G || (templateObject_2$G = __makeTemplateObject(["<li>", ": ", "</li>"], ["<li>", ": ", "</li>"])), name, value);
    })) : '';
}
var templateObject_1$1n, templateObject_2$G, templateObject_3$o;

function formatTime(secs) {
    var h = Math.floor(secs / 60 / 60);
    var m = Math.floor((secs - h * 60 * 60) / 60);
    return [
        "".concat(h ? "".concat(h, " ").concat(i18n('hr.')) : ''),
        "".concat(!h && !m ? '' : "".concat(m, " ").concat(i18n('min.')))
    ].filter(Boolean).join(' ');
}

var b$P = block('battery-status');
function BatteryStatus() {
    if (isSsr) {
        return m$1(templateObject_1$1m || (templateObject_1$1m = __makeTemplateObject(["<", " //>"], ["<", " //>"])), Spinner);
    }
    if (!navigator.getBattery) {
        return m$1(templateObject_2$F || (templateObject_2$F = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('Battery Status API is not supported.'));
    }
    var _a = h(), batteryManager = _a[0], setBatteryManager = _a[1];
    var forceUpdate = useForceUpdate();
    y(function () {
        if (!navigator.getBattery) {
            return;
        }
        navigator.getBattery().then(function (battery) {
            setBatteryManager(battery);
        }).catch(function (error) {
            console.error(error);
        });
        var interval = setInterval(function () {
            forceUpdate();
        }, 1000);
        return function () { return clearInterval(interval); };
    }, []);
    var items = batteryManager ? [
        [i18n('Charging time'), isFinite(batteryManager === null || batteryManager === void 0 ? void 0 : batteryManager.chargingTime) ? formatTime(batteryManager === null || batteryManager === void 0 ? void 0 : batteryManager.chargingTime) : '∞'],
        [i18n('Discharging time'), isFinite(batteryManager === null || batteryManager === void 0 ? void 0 : batteryManager.dischargingTime) ? formatTime(batteryManager === null || batteryManager === void 0 ? void 0 : batteryManager.dischargingTime) : '∞']
    ] : [];
    return batteryManager ? m$1(templateObject_3$n || (templateObject_3$n = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", " level=\"", "\" charging=\"", "\"><//>\n            <", " class=\"", "\" items=\"", "\"><//>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", " level=\"", "\" charging=\"", "\"><//>\n            <", " class=\"", "\" items=\"", "\"><//>\n        </div>\n    "])), b$P(), BatteryBadge, batteryManager.level, batteryManager.charging, List, b$P('list'), items) : m$1(templateObject_4$e || (templateObject_4$e = __makeTemplateObject(["<", " //>"], ["<", " //>"])), Spinner);
}
var templateObject_1$1m, templateObject_2$F, templateObject_3$n, templateObject_4$e;

function BatteryPage() {
    return m$1(templateObject_1$1l || (templateObject_1$1l = __makeTemplateObject(["\n        <", "}>\n            <", ">\n                ", "\n            <//>\n\n            <", "><//>\n        <//>"], ["\n        <", "}>\n            <", ">\n                ", "\n            <//>\n\n            <", "><//>\n        <//>"])), Page, PageTitle, i18n('Battery'), BatteryStatus);
}
var templateObject_1$1l;

function stopCamera(stream, video) {
    stream.getTracks().forEach((function (track) {
        track.stop();
    }));
    video.pause();
    video.srcObject = null;
}
function requestCamera(video, constraints) {
    return navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
        video.srcObject = mediaStream;
        video.setAttribute('playsinline', '');
        video.controls = true;
        video.play();
        return mediaStream;
    });
}
function getConstraints(value, audio) {
    return {
        0: {
            video: {
                width: {
                    ideal: 19200,
                }
            },
            audio: audio,
        },
        1: {
            video: {
                width: {
                    ideal: 0,
                },
            },
            audio: audio,
        },
        2: {
            video: {
                frameRate: {
                    ideal: 200,
                }
            },
            audio: audio,
        },
    }[value];
}

var b$O = block('radio-button');
function RadioButton(props) {
    var handleClick = q(function () {
        var _a;
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, props.value);
    }, [props.onClick]);
    var className = classname(b$O({ selected: props.selected }), props.class);
    return m$1(templateObject_1$1k || (templateObject_1$1k = __makeTemplateObject(["\n        <span\n            class=\"", "\"\n            onClick=\"", "\"\n            key=\"", "\"\n        >", "</span>\n    "], ["\n        <span\n            class=\"", "\"\n            onClick=\"", "\"\n            key=\"", "\"\n        >", "</span>\n    "])), className, handleClick, props.value, props.text);
}
var templateObject_1$1k;

var b$N = block('radio-buttons');
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
    return m$1(templateObject_2$E || (templateObject_2$E = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">\n                ", "\n            </div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">\n                ", "\n            </div>\n        </div>\n    "])), classname(b$N(), className), b$N('label'), label, b$N('items'), buttons.map(function (item) {
        return m$1(templateObject_1$1j || (templateObject_1$1j = __makeTemplateObject(["<", "\n                            key=\"", "\"\n                            class=\"", "\"\n                            selected=\"", "\"\n                            text=\"", "\"\n                            value=\"", "\"\n                            onClick=\"", "\"\n                        ><//>"], ["<", "\n                            key=\"", "\"\n                            class=\"", "\"\n                            selected=\"", "\"\n                            text=\"", "\"\n                            value=\"", "\"\n                            onClick=\"", "\"\n                        ><//>"])), RadioButton, item.value, b$N('item'), item.value === selectedValue, item.text, item.value, handleSelect);
    }));
}
var templateObject_1$1j, templateObject_2$E;

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

function getChecked(checked) {
    return checked ? '✓' : i18n('No');
}

function MicInfo(props) {
    var audioParams = [
        [i18n('Auto gain control'), getChecked(props.autoGainControl)],
        [i18n('Channel count'), props.channelCount],
        [i18n('Echo cancellation'), getChecked(props.echoCancellation)],
        [i18n('Latency'), props.latency],
        [i18n('Noise suppression'), getChecked(props.noiseSuppression)],
        [i18n('Sample rate'), props.sampleRate ? "".concat(props.sampleRate, " ").concat(i18n('Hz')) : undefined],
        [i18n('Sample size'), props.sampleSize],
        ['groupId', props.groupId],
        ['deviceId', props.deviceId],
    ];
    return m$1(templateObject_1$1i || (templateObject_1$1i = __makeTemplateObject(["<", " title=\"", "\" items=\"", "\"><//>"], ["<", " title=\"", "\" items=\"", "\"><//>"])), List, props.label, audioParams);
}
var templateObject_1$1i;

function CameraInfo(props) {
    var video = props.video, audio = props.audio;
    var width = video.width, height = video.height;
    var videoParams = [
        [i18n('Resolution'), "".concat(video.width, "\u00D7").concat(video.height)],
        [i18n('Aspect ratio'), calcAspectRatio(Math.max(width, height), Math.min(width, height)).value],
        [i18n('Frame rate'), "".concat(video.frameRate)],
        [i18n('Resize mode'), video.resizeMode],
        ['groupId', video.groupId],
        ['deviceId', video.deviceId],
    ];
    return m$1(templateObject_2$D || (templateObject_2$D = __makeTemplateObject(["\n        <", " title=\"", "\" items=\"", "\"><//>\n        ", "\n    "], ["\n        <", " title=\"", "\" items=\"", "\"><//>\n        ", "\n    "])), List, video.label, videoParams, audio ? m$1(templateObject_1$1h || (templateObject_1$1h = __makeTemplateObject(["<", " ...\"", "\"><//>"], ["<", " ...\"", "\"><//>"])), MicInfo, audio) : '');
}
var templateObject_1$1h, templateObject_2$D;

var b$M = block('checkbox');
function Checkbox(props) {
    var _a = h(props.checked), checked = _a[0], setChecked = _a[1];
    var ref = A();
    var handleClick = q(function () {
        if (ref.current) {
            var value = !ref.current.checked;
            setChecked(value);
            props.onClick && props.onClick(value);
        }
    }, [checked]);
    var className = classname(props.class, b$M({ checked: checked, theme: props.theme }));
    return m$1(templateObject_1$1g || (templateObject_1$1g = __makeTemplateObject(["<label class=\"", "\" onClick=\"", "\">\n        <input autocomplete=\"off\" ref=\"", "\" class=\"", "\" type=\"checkbox\" checked=\"", "\" />", "\n    </label>"], ["<label class=\"", "\" onClick=\"", "\">\n        <input autocomplete=\"off\" ref=\"", "\" class=\"", "\" type=\"checkbox\" checked=\"", "\" />", "\n    </label>"])), className, handleClick, ref, b$M('input'), checked, props.label);
}
var templateObject_1$1g;

function CameraError(props) {
    var error = props.error;
    if (!error) {
        return '';
    }
    if (error.name === 'NotFoundError') {
        return m$1(templateObject_1$1f || (templateObject_1$1f = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('Camera not found.'));
    }
    if (error.name === 'NotAllowedError') {
        return m$1(templateObject_2$C || (templateObject_2$C = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('Camera is blocked.'));
    }
    return m$1(templateObject_3$m || (templateObject_3$m = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, error.message);
}
var templateObject_1$1f, templateObject_2$C, templateObject_3$m;

function getStreamParams(stream) {
    var video = stream.getVideoTracks()[0];
    var audio = stream.getAudioTracks()[0];
    var videoSettings = video === null || video === void 0 ? void 0 : video.getSettings();
    var audioSettings = audio === null || audio === void 0 ? void 0 : audio.getSettings();
    return {
        video: video && videoSettings ? {
            deviceId: videoSettings.deviceId,
            groupId: videoSettings.groupId,
            label: video.label,
            width: videoSettings.width,
            height: videoSettings.height,
            frameRate: videoSettings.frameRate,
            // @ts-ignore
            resizeMode: videoSettings.resizeMode,
            // @ts-ignore
            backgroundBlur: videoSettings.backgroundBlur,
        } : undefined,
        audio: audio && audioSettings ? {
            deviceId: audioSettings.deviceId,
            groupId: audioSettings.groupId,
            label: audio.label,
            // @ts-ignore
            latency: audioSettings.latency,
            autoGainControl: audioSettings.autoGainControl,
            channelCount: audioSettings.channelCount,
            echoCancellation: audioSettings.echoCancellation,
            noiseSuppression: audioSettings.noiseSuppression,
            sampleRate: audioSettings.sampleRate,
            sampleSize: audioSettings.sampleSize,
        } : undefined,
    };
}

var b$L = block('camera');
function Camera() {
    var buttons = [
        {
            text: i18n('High resolution'),
            value: '0',
            selected: true,
        },
        {
            text: i18n('Low resolution'),
            value: '1',
        },
        {
            text: i18n('High frame rate'),
            value: '2',
        }
    ];
    var refVideo = A(null);
    var _a = h(null), stream = _a[0], setStream = _a[1];
    var _b = h(getSelectedButton(buttons).value), quality = _b[0], setQuality = _b[1];
    var _c = h(false), withMic = _c[0], setWithMic = _c[1];
    var _d = h(null), error = _d[0], setError = _d[1];
    var handleClick = q(function () {
        var video = refVideo.current;
        if (!video) {
            return;
        }
        if (stream) {
            stopCamera(stream, video);
            setStream(null);
            video.controls = false;
            return;
        }
        requestCamera(video, getConstraints(quality, withMic)).then(function (stream) {
            setStream(stream);
            setError(null);
        }).catch(function (error) {
            setError(error);
            console.log(error);
        });
    }, [stream, quality, withMic]);
    var handleSelect = q(function (value) {
        var video = refVideo.current;
        setQuality(value);
        if (stream && video) {
            stopCamera(stream, video);
            setStream(null);
            requestCamera(video, getConstraints(value, withMic)).then(function (stream) {
                setStream(stream);
                setError(null);
            }).catch(function (error) {
                setError(error);
                console.log(error);
            });
        }
    }, [quality, stream, withMic]);
    var handleMic = q(function (checked) {
        setWithMic(checked);
    }, []);
    var params = stream ? getStreamParams(stream) : undefined;
    if (!isSsr) {
        if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
            return m$1(templateObject_1$1e || (templateObject_1$1e = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('Media Devices API is not supported.'));
        }
    }
    var showStop = Boolean(stream);
    var played = Boolean(stream);
    return m$1(templateObject_3$l || (templateObject_3$l = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">\n            <", " class=\"", "\" theme=\"", "\" onClick=\"", "\">", "<//>\n            <", " label=\"", "\" checked=\"", "\" onClick=\"", "\" //>\n        </div>\n        <div class=\"", "\">\n            <", " onSelect=\"", "\" buttons=\"", "\"><//>\n        </div>\n\n        <", " error=\"", "\" //>\n\n        <div class=\"", "\">\n            <video ref=\"", "\" class=\"", "\" />\n        </div>\n\n        <div class=\"", "\">\n            ", "\n        </div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">\n            <", " class=\"", "\" theme=\"", "\" onClick=\"", "\">", "<//>\n            <", " label=\"", "\" checked=\"", "\" onClick=\"", "\" //>\n        </div>\n        <div class=\"", "\">\n            <", " onSelect=\"", "\" buttons=\"", "\"><//>\n        </div>\n\n        <", " error=\"", "\" //>\n\n        <div class=\"", "\">\n            <video ref=\"", "\" class=\"", "\" />\n        </div>\n\n        <div class=\"", "\">\n            ", "\n        </div>\n    </div>"])), b$L(), b$L('select'), Button, b$L('select-camera'), showStop ? 'red' : 'active', handleClick, stream ? i18n('Stop') : i18n('Check camera'), Checkbox, i18n('Mic'), withMic, handleMic, b$L('controls'), RadioButtons, handleSelect, buttons, CameraError, error, b$L('container', { played: played }), refVideo, b$L('video'), b$L('params'), params ? m$1(templateObject_2$B || (templateObject_2$B = __makeTemplateObject(["<", " ...", " //>"], ["<", " ...", " //>"])), CameraInfo, params) : '');
}
var templateObject_1$1e, templateObject_2$B, templateObject_3$l;

function CameraPage() {
    return m$1(templateObject_1$1d || (templateObject_1$1d = __makeTemplateObject(["\n        <", ">\n            <", ">", "<//>\n            <", "><//>\n        <//>"], ["\n        <", ">\n            <", ">", "<//>\n            <", "><//>\n        <//>"])), Page, PageTitle, i18n('Webcamera'), Camera);
}
var templateObject_1$1d;

function Error404Page() {
    return m$1(templateObject_1$1c || (templateObject_1$1c = __makeTemplateObject(["\n        <", ">\n            <", ">404<//>\n\n            <p>", "</p>\n            <p><", " href=\"/\">", "><//></p>\n        <//>"], ["\n        <", ">\n            <", ">404<//>\n\n            <p>", "</p>\n            <p><", " href=\"/\">", "><//></p>\n        <//>"])), Page, PageTitle, i18n('Page not found.'), Link, i18n('Go to main page'));
}
var templateObject_1$1c;

var b$K = block('input');
function Input(props) {
    var className = classname(b$K(), props.class);
    var _a = h(props.value || ''), value = _a[0], setValue = _a[1];
    var ref = A();
    var handleInput = q(function () {
        if (!ref.current) {
            return;
        }
        var value = ref.current.value;
        setValue(value);
        props.onChange && props.onChange(value);
    }, [value, props.onChange]);
    return m$1(templateObject_1$1b || (templateObject_1$1b = __makeTemplateObject(["<input ref=\"", "\" class=\"", "\" onInput=\"", "\" placeholder=\"", "\" value=\"", "\" />"], ["<input ref=\"", "\" class=\"", "\" onInput=\"", "\" placeholder=\"", "\" value=\"", "\" />"])), ref, className, handleInput, props.placeholder, value);
}
var templateObject_1$1b;

function filterFonts(fonts, filter) {
    return (fonts || []).filter(function (item) {
        return item.fullName.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
}
function groupByFamily(fonts) {
    var buffer = {};
    fonts.forEach(function (item) {
        buffer[item.family] = buffer[item.family] || { name: item.family, items: [] };
        buffer[item.family].items.push(item);
    });
    var result = [];
    Object.keys(buffer).forEach(function (key) {
        result.push(buffer[key]);
        buffer[key].items.sort(function (a, b) { return a.fullName > b.fullName ? 1 : -1; });
    });
    result.sort(function (a, b) { return a.name > b.name ? 1 : -1; });
    return result;
}

var b$J = block('font-item');
function FontItem(props) {
    var _a = h(false), opened = _a[0], setOpened = _a[1];
    var handleClick = q(function () {
        setOpened(!opened);
    }, [opened]);
    return m$1(templateObject_2$A || (templateObject_2$A = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">\n            <span class=\"", "\" onClick=\"", "\">", "</span>\n            ", "\n        </div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">\n            <span class=\"", "\" onClick=\"", "\">", "</span>\n            ", "\n        </div>\n    </div>"])), b$J({ opened: opened }), b$J('value'), b$J('switcher'), handleClick, props.fullName, opened ? m$1(templateObject_1$1a || (templateObject_1$1a = __makeTemplateObject(["<div class=\"", "\">\n                <div class=\"", "\">", ": ", "</div>\n                <div class=\"", "\">", ": ", "</div>\n            </div>"], ["<div class=\"", "\">\n                <div class=\"", "\">", ": ", "</div>\n                <div class=\"", "\">", ": ", "</div>\n            </div>"])), b$J('content'), b$J('family'), i18n('Family'), props.family, b$J('style'), i18n('Style'), props.style) : '');
}
var templateObject_1$1a, templateObject_2$A;

var b$I = block('font-list');
function FontList(props) {
    var items = props.items;
    return m$1(templateObject_2$z || (templateObject_2$z = __makeTemplateObject(["<div class=\"", "\">\n        ", "\n    </div>"], ["<div class=\"", "\">\n        ", "\n    </div>"])), b$I(), items.map(function (item, i) {
        return m$1(templateObject_1$19 || (templateObject_1$19 = __makeTemplateObject(["<", " key=\"", "\" family=\"", "\" fullName=\"", "\" style=\"", "\" num=\"", "\" //>"], ["<", " key=\"", "\" family=\"", "\" fullName=\"", "\" style=\"", "\" num=\"", "\" //>"])), FontItem, item.fullName, item.family, item.fullName, item.style, i + 1);
    }));
}
var templateObject_1$19, templateObject_2$z;

var b$H = block('font-family-item');
function FontFamilyItem(props) {
    var _a = h(false), opened = _a[0], setOpened = _a[1];
    var handleClick = q(function () {
        setOpened(!opened);
    }, [opened]);
    return m$1(templateObject_2$y || (templateObject_2$y = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">\n            <span class=\"", "\" onClick=\"", "\">", "</span>\n            ", "\n        </div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">\n            <span class=\"", "\" onClick=\"", "\">", "</span>\n            ", "\n        </div>\n    </div>"])), b$H({ opened: opened }), b$H('value'), b$H('switcher'), handleClick, props.name, opened ? m$1(templateObject_1$18 || (templateObject_1$18 = __makeTemplateObject(["<div class=\"", "\"><", " items=\"", "\" //></div>"], ["<div class=\"", "\"><", " items=\"", "\" //></div>"])), b$H('items'), FontList, props.items) : '');
}
var templateObject_1$18, templateObject_2$y;

var b$G = block('font-list-grouped');
function FontListGrouped(props) {
    var items = props.items;
    var groupedItems = groupByFamily(items);
    return m$1(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["<div class=\"", "\">\n        ", "\n    </div>"], ["<div class=\"", "\">\n        ", "\n    </div>"])), b$G(), groupedItems.map(function (item, i) {
        return m$1(templateObject_1$17 || (templateObject_1$17 = __makeTemplateObject(["<", " key=\"", "\" name=\"", "\" items=\"", "\" num=\"", "\" //>"], ["<", " key=\"", "\" name=\"", "\" items=\"", "\" num=\"", "\" //>"])), FontFamilyItem, item.name, item.name, item.items, i + 1);
    }));
}
var templateObject_1$17, templateObject_2$x;

var b$F = block('fonts');
function Fonts() {
    if (isSsr) {
        return m$1(templateObject_1$16 || (templateObject_1$16 = __makeTemplateObject(["<", " //>"], ["<", " //>"])), Spinner);
    }
    if (!window.queryLocalFonts) {
        return m$1(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('Local Font Access API is not supported.'));
    }
    var _a = h(), fonts = _a[0], setFonts = _a[1];
    var _b = h(''), filter = _b[0], setFilter = _b[1];
    var _c = h(true), groupByFamily = _c[0], setGroupByFamily = _c[1];
    var handleButtonClick = q(function () {
        if (!window.queryLocalFonts) {
            return;
        }
        window.queryLocalFonts().then(function (fontData) {
            setFonts(fontData);
        });
    }, []);
    y(function () {
        handleButtonClick();
    }, []);
    var handleCheckboxClick = q(function (value) {
        setGroupByFamily(value);
    }, []);
    var handleChange = q(function (value) {
        setFilter(value);
    }, []);
    var items = filterFonts(fonts || [], filter);
    return m$1(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\">\n                ", "\n                ", "\n                ", "\n            </div>\n            <", " items=\"", "\" />\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\">\n                ", "\n                ", "\n                ", "\n            </div>\n            <", " items=\"", "\" />\n        </div>\n    "])), b$F(), b$F('controls'), fonts ? '' : m$1(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["<", " theme=\"active\" onClick=\"", "\">", "<//>"], ["<", " theme=\"active\" onClick=\"", "\">", "<//>"])), Button, handleButtonClick, i18n('Request fonts')), fonts ? m$1(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["<", " class=\"", "\" placeholder=\"", "\" value=\"\" onChange=\"", "\" //>"], ["<", " class=\"", "\" placeholder=\"", "\" value=\"\" onChange=\"", "\" //>"])), Input, b$F('filter'), i18n('Filter'), handleChange) : '', fonts ? m$1(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["<div class=\"", "\"><", " onClick=\"", "\" label=\"", "\" checked=\"", "\" //></div>"], ["<div class=\"", "\"><", " onClick=\"", "\" label=\"", "\" checked=\"", "\" //></div>"])), b$F('group-by-family'), Checkbox, handleCheckboxClick, i18n('Group by family'), groupByFamily) : '', groupByFamily ? FontListGrouped : FontList, items);
}
var templateObject_1$16, templateObject_2$w, templateObject_3$k, templateObject_4$d, templateObject_5$7, templateObject_6$5;

function FontsPage() {
    return m$1(templateObject_1$15 || (templateObject_1$15 = __makeTemplateObject(["\n        <", ">\n            <", ">", "<//>\n            <", "><//>\n        <//>"], ["\n        <", ">\n            <", ">", "<//>\n            <", "><//>\n        <//>"])), Page, PageTitle, i18n('Local fonts'), Fonts);
}
var templateObject_1$15;

var b$E = block('tree-list');

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
        return m$1(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["<span class=\"", "\">'", "'</span>"], ["<span class=\"", "\">'", "'</span>"])), b$E('string'), data);
    }
    if (typeof data === 'number') {
        return m$1(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$E('number'), data);
    }
    if (typeof data === 'bigint') {
        return m$1(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["<span class=\"", "\">", "n</span>"], ["<span class=\"", "\">", "n</span>"])), b$E('bigint'), data);
    }
    if (typeof data === 'boolean') {
        return m$1(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$E('boolean'), String(data));
    }
    if (typeof data === 'function') {
        return m$1(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["<span class=\"", "\">function</span>"], ["<span class=\"", "\">function</span>"])), b$E('function'));
    }
    if (typeof data === 'symbol') {
        return m$1(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["<span class=\"", "\">", "</span>"], ["<span class=\"", "\">", "</span>"])), b$E('symbol'), data);
    }
    if (typeof data === 'undefined') {
        return m$1(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["<span class=\"", "\">undefined</span>"], ["<span class=\"", "\">undefined</span>"])), b$E('undefined'));
    }
    if (data === null) {
        return m$1(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["<span class=\"", "\">null</span>"], ["<span class=\"", "\">null</span>"])), b$E('null'));
    }
    if (Array.isArray(data)) {
        if (options.compactArrayWithSimpleTypes && isArrayWithSimpleTypes(data)) {
            return m$1(templateObject_10 || (templateObject_10 = __makeTemplateObject(["[", "\n                ", "\n            ", "]"], ["[", "\n                ", "\n            ", "]"])), ' ', data.map(function (item, i) {
                return m$1(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["", "", ""], ["", "", ""])), i ? ', ' : '', buildData(item, options, level + 1));
            }), ' ');
        }
        else {
            return m$1(templateObject_13 || (templateObject_13 = __makeTemplateObject(["[<ul>\n                ", "\n            </ul>]"], ["[<ul>\n                ", "\n            </ul>]"])), data.map(function (item, i) {
                var arrayIndex = options.showArrayIndex ? m$1(templateObject_11 || (templateObject_11 = __makeTemplateObject([" <span class=\"", "\">", ": </span>"], [" <span class=\"", "\">", ": </span>"])), b$E('index'), i) : '';
                return m$1(templateObject_12 || (templateObject_12 = __makeTemplateObject(["<li>", "", "", "</li>"], ["<li>", "", "", "</li>"])), arrayIndex, buildData(item, options, level + 1), i === data.length - 1 ? '' : ',');
            }));
        }
    }
    if (options.compactObject && level > 0) {
        return m$1(templateObject_15 || (templateObject_15 = __makeTemplateObject(["{", "\n            ", "\n        ", "}"], ["{", "\n            ", "\n        ", "}"])), ' ', Object.keys(data).map(function (key, i, items) {
            return m$1(templateObject_14 || (templateObject_14 = __makeTemplateObject(["<span class=\"", "\">", ": </span>", "", ""], ["<span class=\"", "\">", ": </span>", "", ""])), b$E('property'), key, buildData(data[key], options, level + 1), i === items.length - 1 ? '' : ', ');
        }), ' ');
    }
    var hasBraces = Boolean(options.showCurlyBracesAtRootLevel || level);
    return m$1(templateObject_17 || (templateObject_17 = __makeTemplateObject(["", "<ul class=\"", "\">\n        ", "\n    </ul>", ""], ["", "<ul class=\"", "\">\n        ", "\n    </ul>", ""])), hasBraces ? '{' : '', b$E('ul', { padding: hasBraces ? 'yes' : 'no' }), Object.keys(data).map(function (key, i, items) {
        return m$1(templateObject_16 || (templateObject_16 = __makeTemplateObject(["<li><span class=\"", "\">", ": </span>", "", "</li>"], ["<li><span class=\"", "\">", ": </span>", "", "</li>"])), b$E('property'), key, buildData(data[key], options, level + 1), i === items.length - 1 ? '' : ',');
    }), hasBraces ? '}' : '');
}
var templateObject_1$14, templateObject_2$v, templateObject_3$j, templateObject_4$c, templateObject_5$6, templateObject_6$4, templateObject_7$1, templateObject_8$1, templateObject_9$1, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

function TreeList(props) {
    return m$1(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n        <", " name=\"", "\">\n            <div class=\"", "\">\n                ", "\n            </div>\n        <//>"], ["\n        <", " name=\"", "\">\n            <div class=\"", "\">\n                ", "\n            </div>\n        <//>"])), Row, props.title, b$E(), buildData(props.data, props.options));
}
var templateObject_1$13;

var b$D = block('xbox-buttons');
function XboxButtons() {
    return m$1(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["<div class=\"", "\">\n        <div class=\"", "\">X</div>\n        <div class=\"", "\">Y</div>\n        <div class=\"", "\">A</div>\n        <div class=\"", "\">B</div>\n    </div>"], ["<div class=\"", "\">\n        <div class=\"", "\">X</div>\n        <div class=\"", "\">Y</div>\n        <div class=\"", "\">A</div>\n        <div class=\"", "\">B</div>\n    </div>"])), b$D(), b$D('x'), b$D('y'), b$D('a'), b$D('b'));
}
var templateObject_1$12;

var b$C = block('gamepad-list');
function GamepadList() {
    if (isSsr) {
        return m$1(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["<", " //>"], ["<", " //>"])), Spinner);
    }
    if (!navigator.getGamepads) {
        return m$1(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('🎮 Gamepad API is not supported.'));
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
    return gamepads.length ? m$1(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$C(), gamepads.map(function (rawItem, i) {
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
        return m$1(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n                        <div class=\"", "\">\n                            <div class=\"", "\">", "</div>\n                            <", " name=\"", "\" data=\"", "\" options=\"", "\"><//>\n                        </div>"], ["\n                        <div class=\"", "\">\n                            <div class=\"", "\">", "</div>\n                            <", " name=\"", "\" data=\"", "\" options=\"", "\"><//>\n                        </div>"])), b$C('item'), b$C('title'), item.id, TreeList, i, data, options);
    })) : m$1(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["<", " //>"], ["<", " //>"])), GamepadWait);
}
function GamepadWait() {
    return m$1(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["<", " size=\"m\" //> ", " <", " //>"], ["<", " size=\"m\" //> ", " <", " //>"])), Spinner, i18n('Connect and press any button on the gamepad.'), XboxButtons);
}
var templateObject_1$11, templateObject_2$u, templateObject_3$i, templateObject_4$b, templateObject_5$5, templateObject_6$3;

function GamepadPage() {
    return m$1(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n        <", ">\n            <", "}>\n                ", "\n            <//>\n\n            <", "><//>\n        <//>"], ["\n        <", ">\n            <", "}>\n                ", "\n            <//>\n\n            <", "><//>\n        <//>"])), Page, PageTitle, i18n('Gamepad'), GamepadList);
}
var templateObject_1$10;

function prepareAdapterLimits(limits) {
    if (!limits) {
        return {};
    }
    var result = {};
    for (var key in limits) {
        // @ts-ignore
        result[key] = limits[key];
    }
    return result;
}
function prepareAdapterFeatures(features) {
    if (!features) {
        return [];
    }
    var result = [];
    features.forEach(function (item) {
        result.push(item);
    });
    return result.sort();
}
function prepareAdapterInfo(adapterInfo) {
    return adapterInfo ? {
        vendor: adapterInfo.vendor,
        architecture: adapterInfo.architecture,
        description: adapterInfo.description,
        device: adapterInfo.device,
    } : {};
}

var buttons$1 = [
    {
        text: 'Low power',
        value: 'low-power',
    },
    {
        text: 'High performance',
        value: 'high-performance',
        selected: true,
    },
];
var b$B = block('gpu-navigator');
function GpuNavigator() {
    var _a = h(false), hasAdapter = _a[0], setAdapter = _a[1];
    var _b = h(false); _b[0]; var setAdapterInfo = _b[1];
    var _c = h('high-performance'), powerPreference = _c[0], setPowerPreference = _c[1];
    var refAdapter = A();
    var refAdapterInfo = A();
    var onSelect = q(function (value) {
        setPowerPreference(value);
    }, []);
    y(function () {
        if (!navigator.gpu) {
            return;
        }
        navigator.gpu.requestAdapter({ powerPreference: powerPreference }).then(function (adapter) {
            refAdapter.current = adapter;
            setAdapter(true);
            if (!adapter) {
                return;
            }
            if (adapter.info) {
                refAdapterInfo.current = adapter.info;
                setAdapterInfo(true);
                return;
            }
            // Fallback
            adapter.requestAdapterInfo().then(function (adapterInfo) {
                refAdapterInfo.current = adapterInfo;
                setAdapterInfo(true);
            }).catch(function (error) {
                console.error(error);
            });
        }).catch(function (error) {
            console.error(error);
        });
    }, [powerPreference]);
    var data = {
        info: prepareAdapterInfo(refAdapterInfo.current),
        isFallbackAdapter: refAdapter.current && refAdapter.current.isFallbackAdapter,
        limits: prepareAdapterLimits(refAdapter.current && refAdapter.current.limits),
        features: prepareAdapterFeatures(refAdapter.current && refAdapter.current.features),
    };
    if (typeof navigator === 'undefined' || !navigator.gpu) {
        return m$1(templateObject_1$$ || (templateObject_1$$ = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('WebGPU is not supported.'));
    }
    if (hasAdapter === null) {
        return m$1(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('GPU Adapter is not found.'));
    }
    return hasAdapter ? m$1(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\">\n                <", "\n                    label=\"Power preference:\"\n                    buttons=\"", "\"\n                    onSelect=\"", "\"\n                ><//>\n            </div>\n\n            <", " title=\"Adapter\" data=", "><//>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\">\n                <", "\n                    label=\"Power preference:\"\n                    buttons=\"", "\"\n                    onSelect=\"", "\"\n                ><//>\n            </div>\n\n            <", " title=\"Adapter\" data=", "><//>\n        </div>\n    "])), b$B(), b$B('controls'), RadioButtons, buttons$1, onSelect, TreeList, data) : '...';
}
var templateObject_1$$, templateObject_2$t, templateObject_3$h;

function WebGLContext() {
    var items = [
        ['Vendor', getGpuVendor()],
        ['Renderer', getGpuRenderer()],
    ].filter(function (item) { return Boolean(item[1]); });
    return m$1(templateObject_1$_ || (templateObject_1$_ = __makeTemplateObject(["<", " title=\"WebGL context\" items=\"", "\" //>"], ["<", " title=\"WebGL context\" items=\"", "\" //>"])), List, items);
}
var templateObject_1$_;

var b$A = block('cube-3d');
function Cube3d() {
    return m$1(templateObject_1$Z || (templateObject_1$Z = __makeTemplateObject(["\n    <div class=\"", "\">\n        <div class=\"", "\">\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n        </div>\n    </div>"], ["\n    <div class=\"", "\">\n        <div class=\"", "\">\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n        </div>\n    </div>"])), b$A(), b$A('container'), b$A('side', { back: true }), b$A('side', { left: true }), b$A('side', { right: true }), b$A('side', { top: true }), b$A('side', { bottom: true }), b$A('side', { front: true }));
}
var templateObject_1$Z;

function GpuPage() {
    return m$1(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n        <", ">\n            <", ">GPU<//>\n\n            <", " //>\n\n            <", "><//>\n\n            <", "><//>\n        <//>"], ["\n        <", ">\n            <", ">GPU<//>\n\n            <", " //>\n\n            <", "><//>\n\n            <", "><//>\n        <//>"])), Page, PageTitle, Cube3d, WebGLContext, GpuNavigator);
}
var templateObject_1$Y;

var b$z = block('index-menu');
function IndexMenu() {
    var items = pages$1.filter(function (item) { return !item.hidden; }).map(function (item) {
        return __assign(__assign({}, item), { title: i18nWithKeyset(item.menuTitle) });
    });
    return m$1(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["<nav class=\"", "\">\n        <ul class=\"", "\">\n        ", "\n        </ul>\n        <div class=\"", "\"></div>\n    </nav>\n    "], ["<nav class=\"", "\">\n        <ul class=\"", "\">\n        ", "\n        </ul>\n        <div class=\"", "\"></div>\n    </nav>\n    "])), b$z(), b$z('list'), items.map(function (item) {
        return m$1(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["<li key=\"", "\" class=\"", "\"><", " class=\"", "\" theme=\"white\" href=\"", "\"><span class=\"", "\">", "</span> ", "<//></li>"], ["<li key=\"", "\" class=\"", "\"><", " class=\"", "\" theme=\"white\" href=\"", "\"><span class=\"", "\">", "</span> ", "<//></li>"])), item.id, b$z('item'), Link, b$z('link'), getPagePath(item.id), b$z('emoji'), item.emoji, item.title);
    }), b$z('clear'));
}
var templateObject_1$X, templateObject_2$s;

function IndexPage() {
    return m$1(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n        <", " withoutMenu=\"true\">\n            <", " //>\n        <//>"], ["\n        <", " withoutMenu=\"true\">\n            <", " //>\n        <//>"])), Page, IndexMenu);
}
var templateObject_1$W;

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
    Signal.prototype.trigger = function (name) {
        this.listeners.forEach(function (item) { return item(name); });
    };
    Signal.prototype.clearListeners = function () {
        this.listeners.length = 0;
    };
    return Signal;
}());

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

var b$y = block('keyboard-key');
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
    return m$1(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        <div title=\"", "\" class=\"", "\">\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </div>"], ["\n        <div title=\"", "\" class=\"", "\">\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        </div>"])), title, b$y({ align: keyData.align, code: keyData.code, pressed: state.pressed, wasPressed: state.wasPressed, view: keyData.view, fontSize: keyData.fontSize }), keyData.text || '', keyData.topSymbol ? m$1(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$y('top-symbol'), keyData.topSymbol) : '', keyData.topLeftSymbol ? m$1(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$y('top-left-symbol'), keyData.topLeftSymbol) : '', keyData.topRightSymbol ? m$1(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$y('top-right-symbol'), keyData.topRightSymbol) : '', keyData.bottomLeftSymbol ? m$1(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$y('bottom-left-symbol'), keyData.bottomLeftSymbol) : '', keyData.bottomRightSymbol ? m$1(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$y('bottom-right-symbol'), keyData.bottomRightSymbol) : '', keyData.bottomSymbol ? m$1(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$y('bottom-symbol'), keyData.bottomSymbol) : '', keyData.bottomText ? m$1(templateObject_7 || (templateObject_7 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$y('bottom-text'), keyData.bottomText) : '', typeof keyData.led === 'boolean' ? m$1(templateObject_8 || (templateObject_8 = __makeTemplateObject(["<div class=\"", "\"></div>"], ["<div class=\"", "\"></div>"])), b$y('led', { on: state.led })) : '');
}
var templateObject_1$V, templateObject_2$r, templateObject_3$g, templateObject_4$a, templateObject_5$4, templateObject_6$2, templateObject_7, templateObject_8, templateObject_9;

var b$x = block('keyboard-led');
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
    return m$1(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["<div title=\"", "\" class=\"", "\"></div>"], ["<div title=\"", "\" class=\"", "\"></div>"])), props.code, b$x({ on: state.led, code: props.code }));
}
var templateObject_1$U;

var b$w = block('keyboard-spacer');
function KeyboardSpacer(props) {
    return m$1(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["<div class=\"", "\"></div>"], ["<div class=\"", "\"></div>"])), b$w({ name: props.name }));
}
var templateObject_1$T;

function KeyboardRow(props) {
    var rowData = props.rowData;
    return rowData.map(function (item, i) {
        if (item.type === 'spacer') {
            return m$1(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["<", " key=\"", "\" name=\"", "\" //>"], ["<", " key=\"", "\" name=\"", "\" //>"])), KeyboardSpacer, i, item.name);
        }
        if (item.type === 'led') {
            return m$1(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["<", " key=\"", "\" code=\"", "\" //>"], ["<", " key=\"", "\" code=\"", "\" //>"])), KeyboardLed, i, item.code);
        }
        return m$1(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["<", " key=\"", "\" keyData=\"", "\" //>"], ["<", " key=\"", "\" keyData=\"", "\" //>"])), KeyboardKey, i, item);
    });
}
var templateObject_1$S, templateObject_2$q, templateObject_3$f;

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

var b$v = block('keyboard-layout');
function KeyboardLayout(props) {
    var layout = props.layout;
    var items = layout.rows.map(function (rowData, num) {
        return m$1(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n            <div key=\"", "\" class=\"", "\">\n                <", " rowData=\"", "\" //>\n            </div>\n        "], ["\n            <div key=\"", "\" class=\"", "\">\n                <", " rowData=\"", "\" //>\n            </div>\n        "])), num, b$v('row', { num: num }), KeyboardRow, rowData);
    });
    return m$1(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$v({ type: layout.type }), items);
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
var templateObject_1$R, templateObject_2$p;

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

var b$u = block('keyboard');
var platform = isSsr ? 'win' : getPlatform();
var buttons = [
    {
        text: 'Win',
        value: 'win',
        selected: platform === 'win'
    },
    {
        text: 'Mac',
        value: 'mac',
        selected: platform === 'mac'
    },
    {
        text: 'MacBook',
        value: 'macbook',
        selected: platform === 'macbook'
    },
    {
        text: 'iPad',
        value: 'ipad',
        selected: platform === 'ipad'
    }
];
function Keyboard() {
    var selectedButton = getSelectedButton(buttons);
    var _a = h(selectedButton && selectedButton.value), layout = _a[0], setLayout = _a[1];
    var handleReset = q(function () {
        keyboardStateController.clearState();
    }, []);
    var handleSelect = q(function (value) {
        setLayout(value);
    }, [layout]);
    return m$1(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\">\n                <", " onSelect=\"", "\" buttons=\"", "\"><//>\n            </div>\n\n            <", " layout=\"", "\" //>\n\n            <div class=\"", "\">\n                <", " size=\"m\" onClick=\"", "\">", "<//>\n            </div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\">\n                <", " onSelect=\"", "\" buttons=\"", "\"><//>\n            </div>\n\n            <", " layout=\"", "\" //>\n\n            <div class=\"", "\">\n                <", " size=\"m\" onClick=\"", "\">", "<//>\n            </div>\n        </div>\n    "])), b$u(), b$u('top-controls'), RadioButtons, handleSelect, buttons, KeyboardLayout, getLayoutData(layout), b$u('bottom-controls'), Button, handleReset, i18n('Reset'));
}
var templateObject_1$Q;

function KeyboardPage() {
    var items = [
        [m$1(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["<", " href=\"", "\">", "<//>"], ["<", " href=\"", "\">", "<//>"])), Link, getPagePath('keycodes'), i18n('Displaying key codes'))]
    ];
    return m$1(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", " //>\n\n            <", " items=\"", "\" title=\"", "\" //>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", " //>\n\n            <", " items=\"", "\" title=\"", "\" //>\n        <//>"])), Page, PageTitle, i18n('Testing keyboard'), Keyboard, List, items, i18n('Additionally'));
}
var templateObject_1$P, templateObject_2$o;

var b$t = block('keycode');
function getEventList(event) {
    var items = event ? {
        key: event.key,
        code: event.code,
        keyCode: event.keyCode,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        shiftKey: event.shiftKey,
        metaKey: event.metaKey,
        charCode: event.charCode,
        which: event.which,
        repeat: event.repeat,
        location: event.location,
    } : {};
    return items;
}
function getKeyTitle(event) {
    return String(event.code || event.key || event.keyCode);
}
function Keycode() {
    var _a = h(''), key = _a[0], setKey = _a[1];
    var _b = h(false), pressed = _b[0], setPressed = _b[1];
    var _c = h(), keydownEvent = _c[0], setKeydownEvent = _c[1];
    y(function () {
        var handleKeydown = function (event) {
            setKeydownEvent(event);
            setKey(getKeyTitle(event));
            setPressed(true);
        };
        var handleKeyUp = function (event) {
            setKey(getKeyTitle(event));
            setPressed(false);
        };
        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('keyup', handleKeyUp);
        return function () {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    var keydownItems = getEventList(keydownEvent);
    return m$1(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\">", "</div>\n            ", "\n            <div class=\"", "\">\n                <", " data=", " title=\"keydown event\" //>\n            </div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\">", "</div>\n            ", "\n            <div class=\"", "\">\n                <", " data=", " title=\"keydown event\" //>\n            </div>\n        </div>\n    "])), b$t(), b$t('description'), i18n('Press a key to display its code.'), key ? m$1(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$t('key', { pressed: pressed }), key) : '', b$t('keydown'), TreeList, keydownItems);
}
var templateObject_1$O, templateObject_2$n;

function KeycodesPage() {
    return m$1(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", " //>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", " //>\n        <//>"])), Page, PageTitle, i18n('Displaying key codes'), Keycode);
}
var templateObject_1$N;

function noop() { }

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#safely_detecting_option_support
var passiveSupported = false;
try {
    var options = {
        get passive() {
            passiveSupported = true;
            return false;
        },
    };
    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop, {});
}
catch (e) {
    passiveSupported = false;
}

var b$s = block('mouse');
function Mouse() {
    var _a = h(0), wheelY = _a[0], setWheelY = _a[1];
    var forceUpdate = useForceUpdate();
    var buttons = A({});
    var refRoot = A();
    y(function () {
        var handleScroll = function (e) {
            e.preventDefault();
        };
        var handleMouseDown = function (e) {
            buttons.current[e.button] = true;
            forceUpdate();
        };
        var handleMouseUp = function (e) {
            buttons.current[e.button] = false;
            forceUpdate();
        };
        document.addEventListener('contextmenu', handleScroll);
        document.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        return function () {
            document.removeEventListener('contextmenu', handleScroll);
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    y(function () {
        var _a;
        var handleWheel = function (e) {
            e.preventDefault();
            setWheelY(wheelY - e.deltaY);
        };
        (_a = refRoot.current) === null || _a === void 0 ? void 0 : _a.addEventListener('wheel', handleWheel, passiveSupported ? { passive: false } : false);
        return function () {
            var _a;
            (_a = refRoot.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('wheel', handleWheel);
        };
    }, [wheelY]);
    return m$1(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n        <div ref=\"", "\" class=\"", "\">\n            <div class=\"", "\">\n                <div class=\"", "\"></div>\n                <div class=\"", "\">\n                    <div class=\"", "\" style=\"background-position-y:", "px\"></div>\n                </div>\n                <div class=\"", "\"></div>\n                <div class=\"", "\"></div>\n                <div class=\"", "\"></div>\n            </div>\n        </div>\n    "], ["\n        <div ref=\"", "\" class=\"", "\">\n            <div class=\"", "\">\n                <div class=\"", "\"></div>\n                <div class=\"", "\">\n                    <div class=\"", "\" style=\"background-position-y:", "px\"></div>\n                </div>\n                <div class=\"", "\"></div>\n                <div class=\"", "\"></div>\n                <div class=\"", "\"></div>\n            </div>\n        </div>\n    "])), refRoot, b$s(), b$s('body'), b$s('left-button', { pressed: buttons.current[0] }), b$s('middle-button', { pressed: buttons.current[1] }), b$s('wheel'), wheelY, b$s('right-button', { pressed: buttons.current[2] }), b$s('4-button', { pressed: buttons.current[3] }), b$s('5-button', { pressed: buttons.current[4] }));
}
var templateObject_1$M;

function MousePage() {
    return m$1(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", " //>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", " //>\n        <//>"])), Page, PageTitle, i18n('Testing mouse'), Mouse);
}
var templateObject_1$L;

var b$r = block('info-link');
function InfoLink(props) {
    return m$1(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["<span class=\"", "\">\n        <a class=\"", "\" href=\"", "\" title=\"", "\" target=\"_blank\">\u24D8</a>\n    </span>"], ["<span class=\"", "\">\n        <a class=\"", "\" href=\"", "\" title=\"", "\" target=\"_blank\">\u24D8</a>\n    </span>"])), b$r(), b$r('link'), props.href, props.title);
}
var templateObject_1$K;

function Platform() {
    var _a, _b;
    var ref = A([]);
    var _c = h(false); _c[0]; var setUserData = _c[1];
    var _d = h(undefined), hardwareAcceleration = _d[0], setHardwareAcceleration = _d[1];
    !isSsr && hasHardwareAcceleration().then(function (result) {
        setHardwareAcceleration(result);
    });
    // @ts-ignore
    !isSsr && ((_b = (_a = navigator.userAgentData) === null || _a === void 0 ? void 0 : _a.getHighEntropyValues) === null || _b === void 0 ? void 0 : _b.call(_a, [
        'architecture',
        'bitness',
        'formFactor',
        'fullVersionList',
        'model',
        'platformVersion',
        'wow64',
    ]).then(function (data) {
        var result = [
            [
                i18n('Name'),
                "".concat(data.platform, " ").concat((data.platformVersion || ''))
            ],
            [
                i18n('Architecture'),
                data.architecture ? "".concat(data.architecture, " ").concat((data.bitness || '')) : ''
            ],
            [
                i18n('Form factor'),
                data.formFactor
            ],
            [
                i18n('Model'),
                data.model
            ],
        ];
        ref.current = result.filter(function (item) { return item[1]; });
        setUserData(true);
    }).catch(noop));
    var items = [
        [
            m$1(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["Hardware concurrency <", " title=\"MDN\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency\"><//>"], ["Hardware concurrency <", " title=\"MDN\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency\"><//>"])), InfoLink),
            isSsr ? '…' : navigator.hardwareConcurrency
        ],
        [
            i18n('Standalone application'),
            isSsr ? '…' : getChecked(isStandalone())
        ],
        [
            'User agent',
            isSsr ? '…' : navigator.userAgent
        ],
    ];
    if (!isSsr && navigator.deviceMemory) {
        items.unshift([
            m$1(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["", " <", " title=\"MDN\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory\"><//>"], ["", " <", " title=\"MDN\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory\"><//>"])), i18n('RAM'), InfoLink),
            "\u2248\u202F".concat(navigator.deviceMemory, " ").concat(i18n('GB'))
        ]);
    }
    if (hardwareAcceleration !== undefined) {
        items.push([
            i18n('Hardware acceleration'),
            getChecked(hardwareAcceleration)
        ]);
    }
    if (ref.current.length) {
        items = __spreadArray(__spreadArray([], ref.current, true), items, true);
    }
    else {
        items = __spreadArray([
            [
                i18n('Name'),
                isSsr ? '…' : navigator.platform
            ]
        ], items, true);
    }
    return m$1(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["<", " items=\"", "\" //>"], ["<", " items=\"", "\" //>"])), List, items);
}
var templateObject_1$J, templateObject_2$m, templateObject_3$e;

var permissions = [
    'accessibility-events',
    'background-sync',
    'bluetooth',
    'clipboard-read',
    'clipboard-write',
    'compute-pressure',
    'geolocation',
    'local-fonts',
    'microphone', 'camera',
    'notifications',
    'push',
    'accelerometer', 'gyroscope', 'magnetometer', 'ambient-light-sensor',
    'storage-access', 'top-level-storage-access', 'persistent-storage',
    'midi',
    'screen-wake-lock',
    'window-management',
    'xr-spatial-tracking',
];
function Permissions() {
    if (isSsr || !navigator.permissions) {
        return '';
    }
    var _a = h([]), result = _a[0]; _a[1];
    var _b = h(false), done = _b[0], setDone = _b[1];
    var items = result
        .map(function (item) { return [item.name, item.state]; })
        .sort(function (a, b) { return a[0] > b[0] ? 1 : -1; });
    y(function () {
        var promises = [];
        permissions.forEach(function (name) {
            // @ts-ignore
            var query = { name: name };
            if (name === 'push') {
                // @ts-ignore
                query.userVisibleOnly = true;
            }
            promises.push(navigator.permissions.query(query).then(function (data) {
                result.push({ name: name, state: data.state });
            }).catch(noop));
        });
        Promise.all(promises).then(function () {
            setDone(true);
        });
    }, []);
    return done ? m$1(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["<", " title=\"", "\" items=\"", "\" //>"], ["<", " title=\"", "\" items=\"", "\" //>"])), List, i18n('Permissions'), items) :
        '';
}
var templateObject_1$I;

function PlatformPage() {
    return m$1(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n        <", ">\n            <", ">", "<//>\n\n            <", " //>\n\n            <", " //>\n        <//>"], ["\n        <", ">\n            <", ">", "<//>\n\n            <", " //>\n\n            <", " //>\n        <//>"])), Page, PageTitle, i18n('Platform'), Platform, Permissions);
}
var templateObject_1$H;

var b$q = block('hdr-label');
function HdrLabel(props) {
    return m$1(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["<span class=\"", "\">HDR</span>"], ["<span class=\"", "\">HDR</span>"])), b$q({ enabled: props.enabled }));
}
var templateObject_1$G;

var b$p = block('color-space-item');
function ColorSpaceItem(props) {
    var name = props.name, supported = props.supported, type = props.type;
    return m$1(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["<span class=\"", "\"><span class=\"", "\">", "</span> <span class=\"", "\">", "</span></span>"], ["<span class=\"", "\"><span class=\"", "\">", "</span> <span class=\"", "\">", "</span></span>"])), b$p({ type: type, supported: supported }), b$p('checked'), supported ? '✓' : '✗', b$p('color'), name);
}
var templateObject_1$F;

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

var b$o = block('color-space-list');
function ColorSpaceList(props) {
    if (!props.items) {
        return '';
    }
    var items = colorSpaceTypes.map(function (item) {
        return {
            supported: props.items.indexOf(item) > -1,
            name: getColorSpaceTitle(item),
            type: item,
        };
    });
    return m$1(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n        <span class=\"", "\">\n            ", "\n        </span>"], ["\n        <span class=\"", "\">\n            ", "\n        </span>"])), b$o(), items.map(function (item) {
        return m$1(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["<", " ...", " //>"], ["<", " ...", " //>"])), ColorSpaceItem, item);
    }));
}
var templateObject_1$E, templateObject_2$l;

var b$n = block('screen-item');
function ScreenItem(props) {
    var width = props.width, height = props.height, devicePixelRatio = props.devicePixelRatio, colorDepth = props.colorDepth, colorSpaces = props.colorSpaces, isHdr = props.isHdr, isInternal = props.isInternal, isPrimary = props.isPrimary, label = props.label, maxTouchPoints = props.maxTouchPoints, isExtended = props.isExtended, orientation = props.orientation;
    var logicalSize = [width, height, devicePixelRatio];
    var realSize = [width * devicePixelRatio, height * devicePixelRatio];
    var items = [
        [i18n('Size'), "".concat(realSize.join('×'), " (").concat(logicalSize.join('×'), ")")],
        ['devicePixelRatio', devicePixelRatio],
        [i18n('Aspect ratio'), calcAspectRatio(Math.max(width, height), Math.min(width, height)).value],
        orientation ? [i18n('Orientation'), orientation.type] : '',
        [i18n('Color depth'), "".concat(colorDepth, " ").concat(i18n('bit'))],
        [m$1(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["<", " enabled=\"", "\" //>"], ["<", " enabled=\"", "\" //>"])), HdrLabel, isHdr), getChecked(Boolean(isHdr))],
        [i18n('Color spaces'), m$1(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["<", " items=\"", "\" //>"], ["<", " items=\"", "\" //>"])), ColorSpaceList, colorSpaces)],
        typeof isPrimary === 'undefined' ? '' : [i18n('Primary'), getChecked(Boolean(isPrimary))],
        typeof isInternal === 'undefined' ? '' : [i18n('Internal'), getChecked(Boolean(isInternal))],
        typeof maxTouchPoints === 'undefined' ? '' : [i18n('Max touch points'), maxTouchPoints],
    ].filter(Boolean);
    return m$1(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n            <", " items=\"", "\"><//>\n\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n            <", " items=\"", "\"><//>\n\n            ", "\n        </div>\n    "])), b$n(), label ? m$1(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$n('label'), label) : '', List, items, isExtended === true ? m$1(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["<", ">", "<//>"], ["<", ">", "<//>"])), WarningMessage, i18n('Additional monitor detected')) : '');
}
var templateObject_1$D, templateObject_2$k, templateObject_3$d, templateObject_4$9, templateObject_5$3;

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
            var win = window.open('about:blank', 'caniwatchvideo', "popup=yes,left=".concat(screen.availLeft, ",top=").concat(screen.availTop, ",width=100,height=100"));
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

function hasTouchScreen() {
    return Boolean(('ontouchstart' in window) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0));
}

function getMaxTouchPoints() {
    return navigator.maxTouchPoints || navigator.msMaxTouchPoints || 0;
}

var BUFFER_SIZE = 200;
var RefreshRateController = /** @class */ (function () {
    function RefreshRateController() {
        var _this = this;
        this.requestId = null;
        this.lastTimestamp = 0;
        this.buffer = [];
        this.handleAnimationFrame = function (timestamp) {
            if (!document.hidden) {
                _this.update(timestamp);
            }
            _this.requestAnimationFrame();
        };
    }
    RefreshRateController.hasSupport = function () {
        var _a;
        return Boolean(typeof window !== 'undefined' &&
            typeof ((_a = window.performance) === null || _a === void 0 ? void 0 : _a.now) === 'function' &&
            typeof window.requestAnimationFrame === 'function');
    };
    RefreshRateController.prototype.get = function () {
        if (this.buffer.length < BUFFER_SIZE) {
            return null;
        }
        var clonedBuffer = __spreadArray([], this.buffer, true);
        clonedBuffer.sort(function (a, b) { return a - b; });
        var values = clonedBuffer.slice(Math.floor(BUFFER_SIZE * 0.1), Math.floor(BUFFER_SIZE - BUFFER_SIZE * 0.1));
        var sum = 0;
        for (var i = 0; i < values.length; i++) {
            sum += values[i];
        }
        return 1000 / sum * values.length;
    };
    RefreshRateController.prototype.start = function () {
        if (!this.requestId) {
            this.requestAnimationFrame();
        }
    };
    RefreshRateController.prototype.stop = function () {
        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = null;
        }
    };
    RefreshRateController.prototype.requestAnimationFrame = function () {
        this.requestId = window.requestAnimationFrame(this.handleAnimationFrame);
    };
    RefreshRateController.prototype.update = function (timestamp) {
        this.buffer.push(timestamp - this.lastTimestamp);
        if (this.buffer.length > BUFFER_SIZE) {
            this.buffer.shift();
        }
        this.lastTimestamp = timestamp;
    };
    return RefreshRateController;
}());

var b$m = block('refresh-rate');
function RefreshRate() {
    var _a;
    var ref = A();
    if (!ref.current) {
        ref.current = new RefreshRateController();
    }
    var forceUpdate = useForceUpdate();
    y(function () {
        var _a;
        var timer = window.setInterval(forceUpdate, 500);
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.start();
        return function () {
            var _a;
            window.clearInterval(timer);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.stop();
        };
    }, []);
    var value = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.get();
    return value ? m$1(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["<span class=\"", "\">", " ", "</span>"], ["<span class=\"", "\">", " ", "</span>"])), b$m(), value.toFixed(3), i18n('Hz')) : m$1(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["<", " size=\"s\" //>"], ["<", " size=\"s\" //>"])), Spinner);
}
var templateObject_1$C, templateObject_2$j;

var b$l = block('screen-list');
function ScreenList() {
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
    var additionalItems = [
        RefreshRateController.hasSupport() ? [i18n('Refresh rate'), m$1(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["<", " //>"], ["<", " //>"])), RefreshRate)] : undefined,
        [i18n('Has touch screen'), getChecked(isSsr ? false : hasTouchScreen())],
        [i18n('Max touch points'), isSsr ? 0 : getMaxTouchPoints()],
    ];
    var screenInfoData = screenInfo.get();
    return m$1(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["<div class=\"", "\">\n        <", ">\n            ", "\n        <//>\n\n        ", "\n\n        ", "\n\n        <", " title=\"", "\" items=\"", "\" //>\n    </div>"], ["<div class=\"", "\">\n        <", ">\n            ", "\n        <//>\n\n        ", "\n\n        ", "\n\n        <", " title=\"", "\" items=\"", "\" //>\n    </div>"])), b$l(), PageTitle, screenInfoData.screens.length === 1 ? i18n('Screen') : i18n('Screens'), !screenInfo.isDenied && screenInfo.needUserActivity ? m$1(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["<div class=\"", "\"><", " theme=\"red\" size=\"s\" onClick=\"", "\">", "</button></div>"], ["<div class=\"", "\"><", " theme=\"red\" size=\"s\" onClick=\"", "\">", "</button></div>"])), b$l('specify'), Button, handleClick, i18n('Specify')) : '', screenInfoData.screens.map(function (item) {
        return m$1(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["<", " ...", "><//>"], ["<", " ...", "><//>"])), ScreenItem, item);
    }), List, i18n('Additionally'), additionalItems);
}
var templateObject_1$B, templateObject_2$i, templateObject_3$c, templateObject_4$8;

function ScreenPage() {
    var items = [
        [m$1(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["<", " href=\"", "\">", "<//>"], ["<", " href=\"", "\">", "<//>"])), Link, getPagePath('test-dead-pixels'), i18n('Test dead pixels'))]
    ];
    return m$1(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n        <", ">\n            <", "><//>\n\n            <", " title=\"", "\" items=\"", "\" //>\n        <//>"], ["\n        <", ">\n            <", "><//>\n\n            <", " title=\"", "\" items=\"", "\" //>\n        <//>"])), Page, ScreenList, List, i18n('Tests'), items);
}
var templateObject_1$A, templateObject_2$h;

function formatBytesToGB(bytes) {
    var result = Math.floor(bytes / 1024 / 1024 / 1024 * 100) / 100;
    return "".concat(result, " ").concat(i18n('GB'));
}

function ExtLink(props) {
    return m$1(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n        <", " theme=\"", "\" href=\"", "\" target=\"_blank\">", "<//>\n    "], ["\n        <", " theme=\"", "\" href=\"", "\" target=\"_blank\">", "<//>\n    "])), Link, props.theme, props.href, props.children);
}
var templateObject_1$z;

function StorageFeatures() {
    var _a, _b;
    var _c = h(undefined), quota = _c[0], setQuota = _c[1];
    if (isSsr || typeof ((_a = navigator.storage) === null || _a === void 0 ? void 0 : _a.estimate) !== 'function') {
        return '';
    }
    y(function () {
        navigator.storage.estimate().then(function (data) {
            if (typeof data.quota !== 'undefined') {
                setQuota(data.quota);
            }
        });
    }, []);
    var features = [
        [
            m$1(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["<", " theme=\"white\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist\">", "<//>"], ["<", " theme=\"white\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist\">", "<//>"])), ExtLink, i18n('Support of persistent storage')),
            getChecked(Boolean(typeof ((_b = navigator.storage) === null || _b === void 0 ? void 0 : _b.persist) === 'function'))
        ],
    ];
    if (typeof quota === 'number') {
        features.push([
            m$1(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["<", " theme=\"white\" href=\"https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate\">", "<//>"], ["<", " theme=\"white\" href=\"https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate\">", "<//>"])), ExtLink, i18n('Storage quota for origin')),
            formatBytesToGB(quota)
        ]);
    }
    return m$1(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["<", " title=\"", "\" items=\"", "\"><//>"], ["<", " title=\"", "\" items=\"", "\"><//>"])), List, i18n('Features'), features);
}
var templateObject_1$y, templateObject_2$g, templateObject_3$b;

var mdnLinks = {
    cookies: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled',
    sessionStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage',
    localStorage: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
    indexeddb: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    opfs: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system',
};
var b$k = block('storages');
function Storages() {
    var _a;
    var hasOPFS = !isSsr && typeof ((_a = navigator.storage) === null || _a === void 0 ? void 0 : _a.getDirectory) === 'function';
    var items = [
        [
            m$1(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["<", " theme=\"white\" href=\"", "\">Cookies<//>"], ["<", " theme=\"white\" href=\"", "\">Cookies<//>"])), ExtLink, mdnLinks.cookies),
            isSsr ? '…' : getChecked(navigator.cookieEnabled)
        ],
        [
            m$1(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["<", " theme=\"white\" href=\"", "\">Local storage<//>"], ["<", " theme=\"white\" href=\"", "\">Local storage<//>"])), ExtLink, mdnLinks.localStorage),
            isSsr ? '…' : getChecked(Boolean(window.localStorage))
        ],
        [
            m$1(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["<", " theme=\"white\" href=\"", "\">Session storage<//>"], ["<", " theme=\"white\" href=\"", "\">Session storage<//>"])), ExtLink, mdnLinks.sessionStorage),
            isSsr ? '…' : getChecked(Boolean(window.sessionStorage))
        ],
        [
            m$1(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["<", " theme=\"white\" href=\"", "\">IndexedDB<//>"], ["<", " theme=\"white\" href=\"", "\">IndexedDB<//>"])), ExtLink, mdnLinks.indexeddb),
            isSsr ? '…' : getChecked(Boolean(window.indexedDB))
        ],
        [
            m$1(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["<", " theme=\"white\" href=\"", "\">Origin private file system<//>"], ["<", " theme=\"white\" href=\"", "\">Origin private file system<//>"])), ExtLink, mdnLinks.opfs),
            isSsr ? '…' : getChecked(hasOPFS)
        ],
    ];
    return m$1(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", " items=\"", "\" />\n\n            <div class=\"", "\">\n                <", "><//>\n            </div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", " items=\"", "\" />\n\n            <div class=\"", "\">\n                <", "><//>\n            </div>\n        </div>\n    "])), b$k(), List, items, b$k('features'), StorageFeatures);
}
var templateObject_1$x, templateObject_2$f, templateObject_3$a, templateObject_4$7, templateObject_5$2, templateObject_6$1;

function StoragePage() {
    return m$1(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", "><//>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", "><//>\n        <//>"])), Page, PageTitle, i18n('Storages'), Storages);
}
var templateObject_1$w;

var b$j = block('monitor');
function Monitor(props) {
    return m$1(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n        </div>\n    "])), b$j(), b$j('content'), props.children, b$j('rack'), b$j('foot'));
}
var templateObject_1$v;

var b$i = block('screen-dead-pixels-example');
function ScreenDeadPixelsExample() {
    return m$1(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n            <div class=\"", "\"></div>\n        </div>\n    "])), b$i(), b$i('content'), b$i('dpixel1'), b$i('dpixel2'), b$i('dpixel3'));
}
var templateObject_1$u;

var VK_ESC = 27;
var VK_BACKSPACE = 8;

var b$h = block('test-dead-pixels');
var colors = ['white', 'black', 'red', 'green', 'blue'];
function TestDeadPixels() {
    var _a = h(false), isFullScreen = _a[0], setFullScreen = _a[1];
    var _b = h(0), step = _b[0], setStep = _b[1];
    var ref = A();
    var handleButtonClick = q(function () {
        var _a, _b;
        setStep(0);
        setFullScreen(true);
        if (ref.current) {
            (_b = (_a = ref.current).requestFullscreen) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    }, []);
    var nextColor = q(function () {
        var newStep = step + 1;
        setStep(newStep > colors.length - 1 ? 0 : newStep);
    }, [step]);
    var handleContentClick = q(function () {
        nextColor();
    }, [nextColor]);
    y(function () {
        var handleKeypress = function (event) {
            var _a;
            if (event.keyCode === VK_ESC || event.keyCode === VK_BACKSPACE) {
                setFullScreen(false);
                if (ref.current && document.fullscreenElement) {
                    (_a = document.exitFullscreen) === null || _a === void 0 ? void 0 : _a.call(document);
                }
            }
            else {
                nextColor();
            }
        };
        document.addEventListener('keydown', handleKeypress);
        return function () {
            document.removeEventListener('keydown', handleKeypress);
        };
    }, [nextColor, isFullScreen]);
    y(function () {
        var handleFullscreen = function () {
            setFullScreen(false);
        };
        document.addEventListener('fullscreenchange', handleFullscreen);
        return function () {
            document.removeEventListener('fullscreenchange', handleFullscreen);
        };
    }, []);
    return m$1(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", " theme=\"active\" onClick=\"", "\">", "<///>\n            <div class=\"", "\" ref=\"", "\" style=\"background-color: ", "\" onClick=\"", "\"></div>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", " theme=\"active\" onClick=\"", "\">", "<///>\n            <div class=\"", "\" ref=\"", "\" style=\"background-color: ", "\" onClick=\"", "\"></div>\n        </div>\n    "])), b$h({ fullscreen: isFullScreen }), Button, handleButtonClick, i18n('Start test'), b$h('content'), ref, colors[step], handleContentClick);
}
var templateObject_1$t;

function TestDeadPixelsPage() {
    return m$1(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n        <", ">\n            <", ">", "<//>\n            <", "><", " //><//>\n            <", " //>\n        <//>"], ["\n        <", ">\n            <", ">", "<//>\n            <", "><", " //><//>\n            <", " //>\n        <//>"])), Page, PageTitle, i18n('Test dead pixels'), Monitor, ScreenDeadPixelsExample, TestDeadPixels);
}
var templateObject_1$s;

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

var b$g = block('screen-badge-details');
function ScreenBadgeDetails(props) {
    var screenSize = props.withDevicePixelRatio ?
        [props.width, props.height, props.devicePixelRatio] :
        [props.width * props.devicePixelRatio, props.height * props.devicePixelRatio];
    return m$1(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <div>", ": ", "</div>\n            <div>", ": ", "</div>\n            ", "\n            <div>", ": ", " ", "</div>\n            <div>", "</div>\n            ", "\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <div>", ": ", "</div>\n            <div>", ": ", "</div>\n            ", "\n            <div>", ": ", " ", "</div>\n            <div>", "</div>\n            ", "\n            ", "\n        </div>\n    "])), b$g(), i18n('Size'), screenSize.join('×'), i18n('Aspect ratio'), calcAspectRatio(Math.floor(props.width), Math.floor(props.height)).value, hasZoom() ? m$1(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["<div>\u26A0 ", "</div>"], ["<div>\u26A0 ", "</div>"])), i18n('Please reset zoom in the page')) : '', i18n('Color depth'), props.colorDepth, i18n('bit'), props.colorSpaces && props.colorSpaces.length ? prepareColorSpaces(props.colorSpaces) : '', typeof props.isPrimary === 'undefined' ? '' : m$1(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["<div>", ": ", "</div>"], ["<div>", ": ", "</div>"])), i18n('Primary'), getChecked(props.isPrimary)), typeof props.isInternal === 'undefined' ? '' : m$1(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["<div>", ": ", "</div>"], ["<div>", ": ", "</div>"])), i18n('Internal'), getChecked(props.isInternal)));
}
var templateObject_1$r, templateObject_2$e, templateObject_3$9, templateObject_4$6;

var b$f = block('screen-badge');
function ScreenBadge(props) {
    var _a = h(true), withDevicePixelRatio = _a[0], setWithDevicePixelRatio = _a[1];
    var handleClick = q(function () {
        setWithDevicePixelRatio(!withDevicePixelRatio);
    }, [withDevicePixelRatio]);
    var labelContent = props.label ? m$1(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b$f('label'), props.label) : '';
    var background = isLargerFullHd(Math.min(props.width, props.height) * props.devicePixelRatio) ? 'gold' : 'white';
    return m$1(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n        <div class=\"", "\" onClick=", ">\n            ", "\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\" onClick=", ">\n            ", "\n            ", "\n        </div>\n    "])), b$f(), handleClick, labelContent, Badge({
        // TODO: Temporarily hide badge for mobile devices
        text: isMobile() ? '' : getResolutionBadge(Math.max(props.width, props.height) * props.devicePixelRatio, Math.min(props.width, props.height) * props.devicePixelRatio) || '',
        type: '4k',
        click: true,
        background: background,
        top: {
            text: isMobile() ? '' : m$1(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["<b>", "</b>"], ["<b>", "</b>"])), props.isHdr ? 'HDR' : '\u00A0'),
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
var templateObject_1$q, templateObject_2$d, templateObject_3$8;

var b$e = block('screen-badges');
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
        return m$1(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["<", " ...", "><//>"], ["<", " ...", "><//>"])), ScreenBadge, props);
    });
    var name = screenInfoData.screens.length > 1 ? i18n('Screens') : i18n('Screen');
    return m$1(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["<", " name=\"", "\">\n        ", "\n        ", "\n        ", "\n    <//>"], ["<", " name=\"", "\">\n        ", "\n        ", "\n        ", "\n    <//>"])), Row, name, !screenInfo.isDenied && screenInfo.needUserActivity ? m$1(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["<div class=\"", "\"><", " size=\"s\" theme=\"red\" onClick=\"", "\">", "<//></div>"], ["<div class=\"", "\"><", " size=\"s\" theme=\"red\" onClick=\"", "\">", "<//></div>"])), b$e('specify'), Button, handleClick, i18n('Specify')) : '', content, !screenInfo.isScreenDetails && (typeof screen !== 'undefined' && screen.isExtended === true) ? m$1(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["<div class=\"", "\">\u26A0\uFE0F ", "</div>"], ["<div class=\"", "\">\u26A0\uFE0F ", "</div>"])), b$e('additional'), i18n('Additional monitor detected')) : '');
}
var templateObject_1$p, templateObject_2$c, templateObject_3$7, templateObject_4$5;

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
        { supported: isDolbyVisionSupported(), name: m$1(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["<b>Dolby</b> Vision"], ["<b>Dolby</b> Vision"]))), color: 'black', border: 'white' },
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
    return m$1(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n        <", " name=\"", "\">\n            ", "\n            ", "\n        <//>\n"], ["\n        <", " name=\"", "\">\n            ", "\n            ", "\n        <//>\n"])), Columns, i18n('Video Codecs'), supported.length ? m$1(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["<", " name=\"", "\">\n                ", "\n            <//>"], ["<", " name=\"", "\">\n                ", "\n            <//>"])), Column, i18n('Supported'), supported) : i18n('No supported video codecs.'), unsupported.length ? m$1(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["<", " name=\"", "\">\n                ", "\n            <//>"], ["<", " name=\"", "\">\n                ", "\n            <//>"])), Column, i18n('Unsupported'), unsupported) : '');
}
var templateObject_1$o, templateObject_2$b, templateObject_3$6, templateObject_4$4;

function HdcpLink(props) {
    return m$1(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["<", " href=\"https://vvideo.github.io/hdcp/index.html\" target=\"_blank\">HDCP<//>: ", ""], ["<", " href=\"https://vvideo.github.io/hdcp/index.html\" target=\"_blank\">HDCP<//>: ", ""])), Link, props.version);
}
var templateObject_1$n;

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

var b$d = block('widevine-badge');
function WidevineBadge() {
    var _a = h(false), hasWidevine = _a[0], setWidevine = _a[1];
    var _b = h(false), hasL1 = _b[0], setL1 = _b[1];
    var _c = h(false), hasL3 = _c[0], setL3 = _c[1];
    var _d = h(''), hdcpVersion = _d[0], setHdcpVersion = _d[1];
    getCachedCheckAllHdcpVersions(WIDEWINE_KEY_SYSTEM).then(function (data) {
        setHdcpVersion(getHdcpVersion(data));
    }).catch(function () {
        setHdcpVersion(getHdcpNotDetected());
    });
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
    return m$1(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$d(), hasWidevine && Badge({
        text: 'Widevine',
        background: 'white',
        top: {
            text: 'Google',
        },
        bottom: {
            text: m$1(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["<div><", " items=\"", "\" //></div>\n                        <div><", " items=\"", "\" //></div>\n                        <div><", " version=\"", "\" //></div>"], ["<div><", " items=\"", "\" //></div>\n                        <div><", " items=\"", "\" //></div>\n                        <div><", " version=\"", "\" //></div>"])), SecurityLevels, levels, KeySystems, [WIDEWINE_KEY_SYSTEM], HdcpLink, hdcpVersion),
        },
    }));
}
var templateObject_1$m, templateObject_2$a;

var b$c = block('clearkey-badge');
function ClearkeyBadge() {
    var _a = h(false), hasClearkey = _a[0], setClearkey = _a[1];
    isClearKeySupported().then(function (result) {
        setClearkey(result);
    });
    return hasClearkey ? m$1(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", "\n                text=\"ClearKey\"\n                size=\"small\"\n                background=\"white\"\n                bottom=\"", "\"\n            ><//>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", "\n                text=\"ClearKey\"\n                size=\"small\"\n                background=\"white\"\n                bottom=\"", "\"\n            ><//>\n        </div>\n    "])), b$c(), Badge, {
        text: KeySystems({ items: [CLEAR_KEY_SYSTEM] }),
    }) : '';
}
var templateObject_1$l;

var b$b = block('fairplay-badge');
function FairplayBadge() {
    var _a = h(false), hasFairplay = _a[0], setFairplay = _a[1];
    var _b = h(false), hasFairplay1 = _b[0], setFairplay1 = _b[1];
    var _c = h(false), hasFairplay2 = _c[0], setFairplay2 = _c[1];
    var _d = h(false), hasFairplay3 = _d[0], setFairplay3 = _d[1];
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
    return m$1(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$b(), hasFairplay && Badge({
        text: 'FairPlay',
        background: 'white',
        top: {
            text: 'Apple',
        },
        bottom: {
            text: KeySystems({ items: keySystems }),
        },
    }));
}
var templateObject_1$k;

var b$a = block('playready-badge');
var keySystemsItems = [PLAYREADY_RECOMMENDATION_KEY_SYSTEM];
function PlayreadyBadge() {
    var _a = h(false), hasPlayready = _a[0], setPlayready = _a[1];
    var _b = h(false), hasSL150 = _b[0], setSL150 = _b[1];
    var _c = h(false), hasSL2000 = _c[0], setSL2000 = _c[1];
    var _d = h(false), hasSL3000 = _d[0], setSL3000 = _d[1];
    var _e = h(''), hdcpVersion = _e[0], setHdcpVersion = _e[1];
    getCachedCheckAllHdcpVersions(PLAYREADY_RECOMMENDATION_KEY_SYSTEM).then(function (data) {
        setHdcpVersion(getHdcpVersion(data));
    }).catch(function () {
        setHdcpVersion(getHdcpNotDetected());
    });
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
    return m$1(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$a(), hasPlayready && Badge({
        text: 'PlayReady',
        background: 'white',
        top: {
            text: 'Microsoft',
        },
        bottom: {
            text: m$1(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["<div><", " items=\"", "\" //></div>\n                        <div><", " items=\"", "\" //></div>\n                        <div><", " version=\"", "\" //></div>"], ["<div><", " items=\"", "\" //></div>\n                        <div><", " items=\"", "\" //></div>\n                        <div><", " version=\"", "\" //></div>"])), SecurityLevels, levels, KeySystems, keySystemsItems, HdcpLink, hdcpVersion)
        },
    }));
}
var templateObject_1$j, templateObject_2$9;

var b$9 = block('primetime-badge');
function PrimetimeBadge() {
    var _a = h(false), hasPrimetime = _a[0], setPrimetime = _a[1];
    isPrimetimeSupported().then(function (result) {
        setPrimetime(result);
    });
    return m$1(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "], ["\n        <div class=\"", "\">\n            ", "\n        </div>\n    "])), b$9(), hasPrimetime && Badge({
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
var templateObject_1$i;

var b$8 = block('drm-badges');
function DrmBadges() {
    return m$1(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        </div>\n    "], ["\n        <div class=\"", "\">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        </div>\n    "])), b$8(), WidevineBadge, PlayreadyBadge, FairplayBadge, PrimetimeBadge, ClearkeyBadge);
}
var templateObject_1$h;

var b$7 = block('native-streaming');
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
        return m$1(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["<li>", ": ", "</li>"], ["<li>", ": ", "</li>"])), item.label, getChecked(item.supported));
    });
    return m$1(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n        <ul class=", ">\n            ", "\n        </ul>\n    "], ["\n        <ul class=", ">\n            ", "\n        </ul>\n    "])), b$7(), result);
}
var templateObject_1$g, templateObject_2$8;

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
    var head = m$1(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["", "\u00A0<", " value=\"", "\"><//>"], ["", "\\u00a0<", " value=\"", "\"><//>"])), i18n('Can I watch 4K video?'), Result, mainAnswer);
    return m$1(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            <ul>\n                <li>", "\u00A0<", " value=\"", "\"><//></li>\n                <li>\n                    ", "\u00A0<", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                tooltip=\"", "\">\n                                <//>\u00A0<", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            <ul>\n                <li>", "\\u00a0<", " value=\"", "\"><//></li>\n                <li>\n                    ", "\\u00a0<", " value=", "><//>\n                    <ul>\n                        <li>\n                            <", "\n                                name=\"VP9\"\n                                color=\"green\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"H.265\"\n                                color=\"orange\"\n                                disabled=\"", "\"\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                        <li>\n                            <", "\n                                name=\"AV1\"\n                                color=\"yellow\"\n                                disabled=\"", "\">\n                                tooltip=\"", "\">\n                                <//>\\u00a0<", " value=\"", "\"><//>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, i18n('Is the screen larger than 2K?'), Result, largeThan2K, i18n('Supports one of the video codecs?'), Result, true, Codec, !isVp9.any, CodecDetails(isVp9), Result, isVp9.any, Codec, !isHevc.any, CodecDetails(isHevc), Result, isHevc.any, Codec, !isAv1.any, CodecDetails(isAv1), Result, isAv1.any);
}
var templateObject_1$f, templateObject_2$7;

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
        return m$1(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["", "<", " href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range\" //>\u00A0<", " value=\"", "\"><//>"], ["", "<", " href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/video-dynamic-range\" //>\\u00a0<", " value=\"", "\"><//>"])), i18n('Has HDR support for video?'), InfoLink, Result, isVideoHdr);
    }
    return m$1(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["", "<", " href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range\" //>\u00A0<", " value=\"", "\"><//>"], ["", "<", " href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range\" //>\\u00a0<", " value=\"", "\"><//>"])), i18n('Is this an HDR-compatible screen?'), InfoLink, Result, isHdr);
}
var templateObject_1$e, templateObject_2$6, templateObject_3$5, templateObject_4$3;

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
        isWidevineSupported().then(function (result) {
            setIsWidevine(result);
        });
        isWidevineL1Supported(VP9_CONTENT_TYPE).then(function (result) {
            setIsWidevineL1Vp9(result);
        });
        isWidevineL1Supported(HEV_MAIN_CONTENT_TYPE).then(function (result) {
            setIsWidevineL1Hevc(result);
        });
        isWidevineL1Supported(AV1_CONTENT_TYPE).then(function (result) {
            setIsWidevineL1Av1(result);
        });
        isPlayReadySupported().then(function (result) {
            setIsPlayReady(result);
        });
        isPlayReadySL3000Supported(VP9_CONTENT_TYPE).then(function (result) {
            setIsPlayReadySL3000Vp9(result);
        });
        isPlayReadySL3000Supported(HEV_MAIN_CONTENT_TYPE).then(function (result) {
            setIsPlayReadySL3000Hevc(result);
        });
        isPlayReadySL3000Supported(AV1_CONTENT_TYPE).then(function (result) {
            setIsPlayReadySL3000Av1(result);
        });
        isFairPlaySupported().then(function (result) {
            setIsFairplay(result);
            setIsFairplayVp9(result && isVp9Supported().any);
            setIsFairplayHevc(result && isHevcMainSupported().any);
            setIsFairplayAv1(result && isAV1Supported().any);
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
    return m$1(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n        <", " head=\"", "\">\n            <ul>\n                <li>", "\u00A0<", " value=\"", "\"><//></li>\n                <li>", "", "<", " target=\"_blank\" href=\"", "\">DRM<//>.<br/>\n                    ", " <", " value=", "><//>\n                    <ul>\n                        ", "\n\n                        ", "\n\n                        ", "\n                    </ul>\n                </li>\n                ", "\n                ", "\n            </ul>\n        <//>\n    "], ["\n        <", " head=\"", "\">\n            <ul>\n                <li>", "\\u00a0<", " value=\"", "\"><//></li>\n                <li>", "", "<", " target=\"_blank\" href=\"", "\">DRM<//>.<br/>\n                    ", " <", " value=", "><//>\n                    <ul>\n                        ", "\n\n                        ", "\n\n                        ", "\n                    </ul>\n                </li>\n                ", "\n                ", "\n            </ul>\n        <//>\n    "])), ActiveQuestion, head, i18n('Is the screen larger than 2K?'), Result, largeThan2K, i18n('Online services protect content using'), '\u00a0', Link, i18n('link:wiki:drm'), i18n('Supports one of the video codecs and DRM with high security level?'), Result, anyCodecWithDrm, DrmItem({
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
    }), needHdcpWarning() ? m$1(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["<li>\n                    \u26A0\uFE0F ", "\n                </li>"], ["<li>\n                    \u26A0\uFE0F ", "\n                </li>"])), i18n('Make sure that monitors, video cards, and cables support HDCP 2.2 or later.')) : '', isSafari ? m$1(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["<li>\n                    \u26A0\uFE0F ", " <", " href=\"", "\" target=\"_blank\">Apple T2 Security Chip<//>.\n                </li>"], ["<li>\n                    \u26A0\uFE0F ", " <", " href=\"", "\" target=\"_blank\">Apple T2 Security Chip<//>.\n                </li>"])), i18n('Select 2018 or later Mac computer with an'), Link, i18n('link:apple:t2')) : '');
}
function DrmItem(props) {
    var isSupported = props.isSupported, name = props.name, hasNeededHdcp = props.hasNeededHdcp, isVp9Supported = props.isVp9Supported, isHevcSupported = props.isHevcSupported, isAv1Supported = props.isAv1Supported;
    return isSupported ? m$1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<li>", "\n        <ul>\n            ", "\n            <li>\n                <", "\n                    name=\"VP9\"\n                    color=\"green\"\n                    disabled=\"", "\">\n                <//>\u00A0<", " value=\"", "\"><//>\n            </li>\n            <li>\n                <", "\n                    name=\"H.265\"\n                    color=\"orange\"\n                    disabled=\"", "\">\n                <//>\u00A0<", " value=\"", "\"><//>\n            </li>\n            <li>\n                <", "\n                    name=\"AV1\"\n                    color=\"yellow\"\n                    disabled=\"", "\">\n                <//>\u00A0<", " value=\"", "\"><//>\n            </li>\n        </ul>\n    </li>"], ["<li>", "\n        <ul>\n            ", "\n            <li>\n                <", "\n                    name=\"VP9\"\n                    color=\"green\"\n                    disabled=\"", "\">\n                <//>\\u00a0<", " value=\"", "\"><//>\n            </li>\n            <li>\n                <", "\n                    name=\"H.265\"\n                    color=\"orange\"\n                    disabled=\"", "\">\n                <//>\\u00a0<", " value=\"", "\"><//>\n            </li>\n            <li>\n                <", "\n                    name=\"AV1\"\n                    color=\"yellow\"\n                    disabled=\"", "\">\n                <//>\\u00a0<", " value=\"", "\"><//>\n            </li>\n        </ul>\n    </li>"])), name, hasNeededHdcp === null ? '' : m$1(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["<li>", " <", " value=\"", "\" //></li>"], ["<li>", " <", " value=\"", "\" //></li>"])), i18n('HDCP 2.2 or later'), Result, hasNeededHdcp), Codec, !isVp9Supported, Result, isVp9Supported, Codec, !isHevcSupported, Result, isHevcSupported, Codec, !isAv1Supported, Result, isAv1Supported) : '';
}
var templateObject_1$d, templateObject_2$5, templateObject_3$4, templateObject_4$2, templateObject_5$1, templateObject_6;

var b$6 = block('video-questions');
function VideoQuestions() {
    return m$1(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n        <div class=", ">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        <//>\n    "], ["\n        <div class=", ">\n            <", "><//>\n            <", "><//>\n            <", "><//>\n        <//>\n    "])), b$6(), Question4K, QuestionHdr, QuestionDrm4K);
}
var templateObject_1$c;

function isDocumentPipSupported() {
    return Boolean(window.documentPictureInPicture);
}

function getAutoplayPolicy() {
    if (!navigator.getAutoplayPolicy) {
        return '';
    }
    return navigator.getAutoplayPolicy('mediaelement');
}

var b$5 = block('html-video-element-features');
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
    return m$1(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["<ul class=", ">", "</ul>"], ["<ul class=", ">", "</ul>"])), b$5(), content);
}
var templateObject_1$b, templateObject_2$4, templateObject_3$3;

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
    return m$1(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", "><//>\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"DRM\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n\n            <", "><//>\n            <", "><//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"DRM\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n\n            <", " name=\"", "\">\n                <", "><//>\n            <//>\n        <//>"])), Page, PageTitle, i18n('Can I watch video in this browser?'), VideoQuestions, ScreenBadges, Row, i18n('Video Codecs'), VideoCodecs, Row, DrmBadges, Row, i18n('Image Formats'), ImageFormats, Row, i18n('Native Streaming Support'), NativeStreaming, Row, i18n('HTMLVideoElement Features'), HtmlVideoElementFeatures);
}
var templateObject_1$9;

var MicWaveform = /** @class */ (function () {
    function MicWaveform() {
        var _this = this;
        this.stream = null;
        this.frameRequestId = 0;
        this.draw = function () {
            if (!_this.audioCtx || !_this.analyser) {
                return;
            }
            var canvasCtx = _this.canvas.getContext('2d');
            _this.analyser.fftSize = 2048;
            var bufferLength = _this.analyser.frequencyBinCount;
            var dataArray = new Uint8Array(bufferLength);
            _this.analyser.getByteTimeDomainData(dataArray);
            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
            canvasCtx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = 'rgb(255, 255, 255)';
            canvasCtx.beginPath();
            var sliceWidth = _this.canvas.width / bufferLength;
            var x = 0;
            for (var i = 0; i < bufferLength; i++) {
                var v = dataArray[i] / 128.0;
                var y = v * (_this.canvas.height / 2);
                if (i === 0) {
                    canvasCtx.moveTo(x, y);
                }
                else {
                    canvasCtx.lineTo(x, y);
                }
                x += sliceWidth;
            }
            canvasCtx.lineTo(_this.canvas.width, _this.canvas.height / 2);
            canvasCtx.stroke();
            _this.frameRequestId = requestAnimationFrame(_this.draw);
        };
    }
    MicWaveform.prototype.requestMic = function () {
        var _this = this;
        return navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            _this.audio.srcObject = stream;
            _this.audio.play();
            _this.stream = stream;
            return stream;
        });
    };
    MicWaveform.prototype.initAudio = function () {
        if (!this.audio) {
            this.audio = new Audio();
        }
    };
    MicWaveform.prototype.setMuted = function (muted) {
        this.initAudio();
        this.audio.muted = muted;
    };
    MicWaveform.prototype.start = function (canvas) {
        var _this = this;
        this.canvas = canvas;
        this.audioCtx = new AudioContext();
        this.initAudio();
        this.analyser = this.audioCtx.createAnalyser();
        return this.requestMic().then(function (stream) {
            if (!_this.audioCtx || !_this.analyser) {
                return;
            }
            var source = _this.audioCtx.createMediaStreamSource(stream);
            source.connect(_this.analyser);
            var distortion = _this.audioCtx.createWaveShaper();
            distortion.connect(_this.audioCtx.destination);
            _this.frameRequestId = requestAnimationFrame(_this.draw);
        });
    };
    MicWaveform.prototype.getStreamParams = function () {
        return this.stream ? getStreamParams(this.stream) : null;
    };
    MicWaveform.prototype.stop = function () {
        if (this.frameRequestId && this.stream) {
            this.stream.getTracks().forEach((function (track) {
                track.stop();
            }));
            this.audio.pause();
            this.audio.srcObject = null;
            this.stream = null;
            cancelAnimationFrame(this.frameRequestId);
            this.frameRequestId = 0;
        }
        this.clearCanvas();
    };
    MicWaveform.prototype.clearCanvas = function () {
        var canvasCtx = this.canvas.getContext('2d');
        canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return MicWaveform;
}());
var micWaveform = new MicWaveform();

var b$4 = block('mic');
function Mic() {
    var refCanvas = A();
    var _a = h(true), muted = _a[0], setMuted = _a[1];
    var _b = h(false), started = _b[0], setStarted = _b[1];
    var handleSelectMic = q(function () {
        if (!refCanvas.current) {
            return;
        }
        micWaveform.setMuted(muted);
        micWaveform.start(refCanvas.current).then(function () {
            setStarted(true);
        });
    }, [muted, setStarted]);
    var handleHearYourself = q(function (value) {
        setMuted(!value);
        micWaveform.setMuted(!value);
    }, [setMuted]);
    var handleStop = q(function () {
        micWaveform.stop();
        setStarted(false);
    }, [setMuted, setStarted]);
    var selectButton = m$1(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["<", " theme=\"active\" onClick=\"", "\">", "<//>"], ["<", " theme=\"active\" onClick=\"", "\">", "<//>"])), Button, handleSelectMic, i18n('Check mic'));
    var stopButton = m$1(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["<", " theme=\"red\" onClick=\"", "\">", "<//>"], ["<", " theme=\"red\" onClick=\"", "\">", "<//>"])), Button, handleStop, i18n('Stop'));
    var streamParams = micWaveform.getStreamParams();
    return m$1(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["<div class=\"", "\">\n        ", "<", " class=\"", "\" label=\"", "\" onClick=\"", "\" />\n\n        <div class=\"", "\">\n            <canvas ref=\"", "\" class=\"", "\" width=\"300\" height=\"200\"></canvas>\n        </div>\n\n        ", "\n    </div>"], ["<div class=\"", "\">\n        ", "<", " class=\"", "\" label=\"", "\" onClick=\"", "\" />\n\n        <div class=\"", "\">\n            <canvas ref=\"", "\" class=\"", "\" width=\"300\" height=\"200\"></canvas>\n        </div>\n\n        ", "\n    </div>"])), b$4({ started: started }), started ? stopButton : selectButton, Checkbox, b$4('hear-yourself'), i18n('Hear yourself'), handleHearYourself, b$4('canvas-container'), refCanvas, b$4('canvas'), streamParams && streamParams.audio ? m$1(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["<", " ...\"", "\" />"], ["<", " ...\"", "\" />"])), MicInfo, streamParams.audio) : '');
}
var templateObject_1$8, templateObject_2$2, templateObject_3$2, templateObject_4$1;

function MicPage() {
    return m$1(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n        <", ">\n            <", "}>", "<//>\n            <", " //>\n        <//>"], ["\n        <", ">\n            <", "}>", "<//>\n            <", " //>\n        <//>"])), Page, PageTitle, i18n('Mic'), Mic);
}
var templateObject_1$7;

var b$3 = block('connection-navigator');
function ConnectionNavigator() {
    if (isSsr || !navigator.connection) {
        return '';
    }
    var connection = navigator.connection;
    var data = {
        downlink: connection.downlink,
        effectiveType: connection.effectiveType,
        rtt: connection.rtt,
        saveData: connection.saveData,
    };
    if ('type' in connection) {
        data.type = connection.type;
    }
    if ('downlinkMax' in connection) {
        data.downlinkMax = connection.downlinkMax;
    }
    return m$1(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", " title=\"navigator.connection\" data=\"", "\"><//>\n        </div>"], ["\n        <div class=\"", "\">\n            <", " title=\"navigator.connection\" data=\"", "\"><//>\n        </div>"])), b$3(), TreeList, data);
}
var templateObject_1$6;

function getCfIp(text) {
    if (!text) {
        return '-';
    }
    var result = text.match(/^ip=([\w\d:]+?)$/m);
    if (result) {
        return result[1];
    }
    return '-';
}

function fetch$1(input, init) {
    if (window.fetch) {
        return window.fetch.call(null, input, init);
    }
    // TODO: add polyfill
    return new Promise(noop);
}

function IP() {
    var _a = h(''), ipv4 = _a[0], setIpv4 = _a[1];
    var _b = h(''), ipv6 = _b[0], setIpv6 = _b[1];
    y(function () {
        fetch$1('https://checkip.amazonaws.com/')
            .then(function (data) { return data.text(); })
            .then(function (result) {
            setIpv4(result);
        });
        fetch$1('https://www.cloudflare.com/cdn-cgi/trace')
            .then(function (data) { return data.text(); })
            .then(function (result) {
            setIpv6(getCfIp(result));
        });
    }, []);
    var items = [
        ['IPv4', ipv4 || m$1(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["<", " size=\"s\" //>"], ["<", " size=\"s\" //>"])), Spinner)],
        ['IPv6', ipv6 || m$1(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["<", " size=\"s\" //>"], ["<", " size=\"s\" //>"])), Spinner)]
    ];
    return m$1(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["<", " items=\"", "\" //>"], ["<", " items=\"", "\" //>"])), List, items);
}
var templateObject_1$5, templateObject_2$1, templateObject_3$1;

var b$2 = block('network-information');
function NetworkInformation() {
    return m$1(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n        <div class=\"", "\">\n            <", " //>\n            <", " //>\n        </div>"], ["\n        <div class=\"", "\">\n            <", " //>\n            <", " //>\n        </div>"])), b$2(), IP, ConnectionNavigator);
}
var templateObject_1$4;

var b$1 = block('ya-static-map');
var YA_STATIC_IMAGE_URL = 'https://static-maps.yandex.ru/v1?';
function YaStaticMap(props) {
    var url = YA_STATIC_IMAGE_URL + [
        ['ll', "".concat(props.longitude, ",").concat(props.latitude)],
        ['size', "".concat(props.width, ",").concat(props.height)],
        ['z', props.zoom],
        ['apikey', props.apikey],
    ].map(function (item) {
        return "".concat(item[0], "=").concat(item[1]);
    }).join('&');
    return m$1(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["<div class=\"", "\"><img src=\"", "\" width=\"", "\" height=\"", "\" /></div>"], ["<div class=\"", "\"><img src=\"", "\" width=\"", "\" height=\"", "\" /></div>"])), b$1(), url, props.width, props.height);
}
var templateObject_1$3;

var b = block('geo-location');
function GeoLocation(props) {
    var _a;
    if (isSsr || typeof ((_a = navigator.geolocation) === null || _a === void 0 ? void 0 : _a.getCurrentPosition) === 'undefined') {
        return '';
    }
    var _b = h(null), coords = _b[0], setCoords = _b[1];
    var _c = h(false), inProgress = _c[0], setInProgress = _c[1];
    var _d = h(null), error = _d[0], setError = _d[1];
    var handleClick = q(function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        setInProgress(true);
        function success(position) {
            var coords = position.coords;
            setCoords({
                latitude: coords.latitude,
                longitude: coords.longitude,
                accuracy: coords.accuracy,
                altitude: coords.altitude,
                altitudeAccuracy: coords.altitudeAccuracy,
                speed: coords.speed,
                heading: coords.heading,
            });
            setInProgress(false);
        }
        function error(error) {
            setInProgress(false);
            setError(error.message);
            console.error(error);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);
    return m$1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        <", " theme=\"active\" onClick=\"", "\">", "<//> ", "\n        ", "\n        ", "\n        ", "\n    "], ["\n        <", " theme=\"active\" onClick=\"", "\">", "<//> ", "\n        ", "\n        ", "\n        ", "\n    "])), Button, handleClick, i18n('Request geo location'), inProgress ? m$1(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["<", " size=\"m\" //>"], ["<", " size=\"m\" //>"])), Spinner) : '', coords ? m$1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<div class=\"", "\"><", " data=\"", "\" //></div>"], ["<div class=\"", "\"><", " data=\"", "\" //></div>"])), b('list'), TreeList, coords) : '', error ? m$1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), b('error'), error) : '', coords ? m$1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<div class=\"", "\">\n            <", "\n                latitude=\"", "\"\n                longitude=\"", "\"\n                width=\"300\"\n                height=\"300\"\n                zoom=\"13\"\n                apikey=\"", "\" //>\n        </div>"], ["<div class=\"", "\">\n            <", "\n                latitude=\"", "\"\n                longitude=\"", "\"\n                width=\"300\"\n                height=\"300\"\n                zoom=\"13\"\n                apikey=\"", "\" //>\n        </div>"])), b('map'), YaStaticMap, coords.latitude, coords.longitude, props.yaMapsApiKey) : '');
}
var templateObject_1$2, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var config = {
    yaMapsApiKey: '82d7a38b-bad1-4b72-b66c-bfdaf838ba66',
};

function NetworkPage() {
    return m$1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n        <", ">\n            <", ">\n                ", "\n            <//>\n            <", "><//>\n            <", " yaMapsApiKey=\"", "\" //>\n        <//>"], ["\n        <", ">\n            <", ">\n                ", "\n            <//>\n            <", "><//>\n            <", " yaMapsApiKey=\"", "\" //>\n        <//>"])), Page, PageTitle, i18n('Network & geo'), NetworkInformation, GeoLocation, config.yaMapsApiKey);
}
var templateObject_1$1;

var pages = {
    audio: AudioPage,
    video: VideoPage,
    screen: ScreenPage,
    'test-dead-pixels': TestDeadPixelsPage,
    gamepad: GamepadPage,
    storage: StoragePage,
    platform: PlatformPage,
    error404: Error404Page,
    battery: BatteryPage,
    camera: CameraPage,
    fonts: FontsPage,
    gpu: GpuPage,
    index: IndexPage,
    keyboard: KeyboardPage,
    keycodes: KeycodesPage,
    mouse: MousePage,
    mic: MicPage,
    network: NetworkPage,
};
function buildPage(id) {
    return pages[id] ? S(m$1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<", " //>"], ["<", " //>"])), pages[id])) : '';
}
var templateObject_1;

export { buildPage, pages };
