function Nm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}},Qi={},Kd={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),Tm=Symbol.for("react.portal"),Om=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),Im=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),Lm=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),Dm=Symbol.for("react.memo"),Fm=Symbol.for("react.lazy"),Zu=Symbol.iterator;function Mm(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var Gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zd=Object.assign,Xd={};function yr(e,t,n){this.props=e,this.context=t,this.refs=Xd,this.updater=n||Gd}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=yr.prototype;function Il(e,t,n){this.props=e,this.context=t,this.refs=Xd,this.updater=n||Gd}var zl=Il.prototype=new Yd;zl.constructor=Il;Zd(zl,yr.prototype);zl.isPureReactComponent=!0;var Xu=Array.isArray,Jd=Object.prototype.hasOwnProperty,Ll={current:null},Qd={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Jd.call(t,r)&&!Qd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:xo,type:e,key:i,ref:s,props:o,_owner:Ll.current}}function Um(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $l(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function Wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yu=/\/+/g;function zs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wm(""+e.key):t.toString(36)}function Jo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xo:case Tm:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+zs(s,0):r,Xu(o)?(n="",e!=null&&(n=e.replace(Yu,"$&/")+"/"),Jo(o,t,n,"",function(u){return u})):o!=null&&($l(o)&&(o=Um(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Yu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Xu(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+zs(i,a);s+=Jo(i,t,n,l,o)}else if(l=Mm(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+zs(i,a++),s+=Jo(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Oo(e,t,n){if(e==null)return e;var r=[],o=0;return Jo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Bm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Qo={transition:null},Hm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Qo,ReactCurrentOwner:Ll};$.Children={map:Oo,forEach:function(e,t,n){Oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oo(e,function(){t++}),t},toArray:function(e){return Oo(e,function(t){return t})||[]},only:function(e){if(!$l(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=yr;$.Fragment=Om;$.Profiler=Im;$.PureComponent=Il;$.StrictMode=bm;$.Suspense=Am;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zd({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ll.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Jd.call(t,l)&&!Qd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xo,type:e.type,key:o,ref:i,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:Lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zm,_context:e},e.Consumer=e};$.createElement=qd;$.createFactory=function(e){var t=qd.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:$m,render:e}};$.isValidElement=$l;$.lazy=function(e){return{$$typeof:Fm,_payload:{_status:-1,_result:e},_init:Bm}};$.memo=function(e,t){return{$$typeof:Dm,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Qo.transition;Qo.transition={};try{e()}finally{Qo.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Ce.current.useCallback(e,t)};$.useContext=function(e){return Ce.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ce.current.useEffect(e,t)};$.useId=function(){return Ce.current.useId()};$.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ce.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};$.useRef=function(e){return Ce.current.useRef(e)};$.useState=function(e){return Ce.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ce.current.useTransition()};$.version="18.2.0";Kd.exports=$;var j=Kd.exports;const ie=Rm(j),Vm=Nm({__proto__:null,default:ie},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=j,Gm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),Xm=Object.prototype.hasOwnProperty,Ym=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jm={key:!0,ref:!0,__self:!0,__source:!0};function ef(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Xm.call(t,r)&&!Jm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Gm,type:e,key:i,ref:s,props:o,_owner:Ym.current}}Qi.Fragment=Zm;Qi.jsx=ef;Qi.jsxs=ef;Vd.exports=Qi;var f=Vd.exports,xa={},tf={exports:{}},De={},nf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,b){var z=R.length;R.push(b);e:for(;0<z;){var W=z-1>>>1,B=R[W];if(0<o(B,b))R[W]=b,R[z]=B,z=W;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var b=R[0],z=R.pop();if(z!==b){R[0]=z;e:for(var W=0,B=R.length,un=B>>>1;W<un;){var Ze=2*(W+1)-1,Nt=R[Ze],be=Ze+1,ht=R[be];if(0>o(Nt,z))be<B&&0>o(ht,Nt)?(R[W]=ht,R[be]=z,W=be):(R[W]=Nt,R[Ze]=z,W=Ze);else if(be<B&&0>o(ht,z))R[W]=ht,R[be]=z,W=be;else break e}}return b}function o(R,b){var z=R.sortIndex-b.sortIndex;return z!==0?z:R.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,c=null,p=3,v=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=R)r(u),b.sortIndex=b.expirationTime,t(l,b);else break;b=n(u)}}function x(R){if(w=!1,g(R),!y)if(n(l)!==null)y=!0,Er(k);else{var b=n(u);b!==null&&ln(x,b.startTime-R)}}function k(R,b){y=!1,w&&(w=!1,m(P),P=-1),v=!0;var z=p;try{for(g(b),c=n(l);c!==null&&(!(c.expirationTime>b)||R&&!ee());){var W=c.callback;if(typeof W=="function"){c.callback=null,p=c.priorityLevel;var B=W(c.expirationTime<=b);b=e.unstable_now(),typeof B=="function"?c.callback=B:c===n(l)&&r(l),g(b)}else r(l);c=n(l)}if(c!==null)var un=!0;else{var Ze=n(u);Ze!==null&&ln(x,Ze.startTime-b),un=!1}return un}finally{c=null,p=z,v=!1}}var _=!1,E=null,P=-1,I=5,O=-1;function ee(){return!(e.unstable_now()-O<I)}function sn(){if(E!==null){var R=e.unstable_now();O=R;var b=!0;try{b=E(!0,R)}finally{b?an():(_=!1,E=null)}}else _=!1}var an;if(typeof h=="function")an=function(){h(sn)};else if(typeof MessageChannel<"u"){var Ro=new MessageChannel,bs=Ro.port2;Ro.port1.onmessage=sn,an=function(){bs.postMessage(null)}}else an=function(){S(sn,0)};function Er(R){E=R,_||(_=!0,an())}function ln(R,b){P=S(function(){R(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Er(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var b=3;break;default:b=p}var z=p;p=b;try{return R()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,b){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=p;p=R;try{return b()}finally{p=z}},e.unstable_scheduleCallback=function(R,b,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,R){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,R={id:d++,callback:b,priorityLevel:R,startTime:z,expirationTime:B,sortIndex:-1},z>W?(R.sortIndex=z,t(u,R),n(l)===null&&R===n(u)&&(w?(m(P),P=-1):w=!0,ln(x,z-W))):(R.sortIndex=B,t(l,R),y||v||(y=!0,Er(k))),R},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(R){var b=p;return function(){var z=p;p=b;try{return R.apply(this,arguments)}finally{p=z}}}})(rf);nf.exports=rf;var Qm=nf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=j,Ae=Qm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sf=new Set,Yr={};function Tn(e,t){nr(e,t),nr(e+"Capture",t)}function nr(e,t){for(Yr[e]=t,e=0;e<t.length;e++)sf.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sa=Object.prototype.hasOwnProperty,qm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ju={},Qu={};function e0(e){return Sa.call(Qu,e)?!0:Sa.call(Ju,e)?!1:qm.test(e)?Qu[e]=!0:(Ju[e]=!0,!1)}function t0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function n0(e,t,n,r){if(t===null||typeof t>"u"||t0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Al,Dl);ge[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Al,Dl);ge[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Al,Dl);ge[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fl(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(n0(t,n,o,r)&&(n=null),r||o===null?e0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),An=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),Ml=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),lf=Symbol.for("react.context"),Ul=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Ca=Symbol.for("react.suspense_list"),Wl=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),uf=Symbol.for("react.offscreen"),qu=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ls;function Lr(e){if(Ls===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ls=t&&t[1]||""}return`
`+Ls+e}var $s=!1;function As(e,t){if(!e||$s)return"";$s=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{$s=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function r0(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=As(e.type,!1),e;case 11:return e=As(e.type.render,!1),e;case 1:return e=As(e.type,!0),e;default:return""}}function _a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case An:return"Portal";case ka:return"Profiler";case Ml:return"StrictMode";case Ea:return"Suspense";case Ca:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lf:return(e.displayName||"Context")+".Consumer";case af:return(e._context.displayName||"Context")+".Provider";case Ul:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wl:return t=e.displayName||null,t!==null?t:_a(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return _a(e(t))}catch{}}return null}function o0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _a(t);case 8:return t===Ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i0(e){var t=cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Io(e){e._valueTracker||(e._valueTracker=i0(e))}function df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ff(e,t){t=t.checked,t!=null&&Fl(e,"checked",t,!1)}function Pa(e,t){ff(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Na(e,t.type,n):t.hasOwnProperty("defaultValue")&&Na(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Na(e,t,n){(t!=="number"||vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function Yn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if($r(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function pf(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zo,mf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s0=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){s0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function gf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function yf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=gf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var a0=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(e,t){if(t){if(a0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ia=null;function Bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,Jn=null,Qn=null;function oc(e){if(e=Eo(e)){if(typeof za!="function")throw Error(N(280));var t=e.stateNode;t&&(t=rs(t),za(e.stateNode,e.type,t))}}function vf(e){Jn?Qn?Qn.push(e):Qn=[e]:Jn=e}function wf(){if(Jn){var e=Jn,t=Qn;if(Qn=Jn=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function xf(e,t){return e(t)}function Sf(){}var Ds=!1;function kf(e,t,n){if(Ds)return e(t,n);Ds=!0;try{return xf(e,t,n)}finally{Ds=!1,(Jn!==null||Qn!==null)&&(Sf(),wf())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=rs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var La=!1;if(Et)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){La=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{La=!1}function l0(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ur=!1,wi=null,xi=!1,$a=null,u0={onError:function(e){Ur=!0,wi=e}};function c0(e,t,n,r,o,i,s,a,l){Ur=!1,wi=null,l0.apply(u0,arguments)}function d0(e,t,n,r,o,i,s,a,l){if(c0.apply(this,arguments),Ur){if(Ur){var u=wi;Ur=!1,wi=null}else throw Error(N(198));xi||(xi=!0,$a=u)}}function On(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ic(e){if(On(e)!==e)throw Error(N(188))}function f0(e){var t=e.alternate;if(!t){if(t=On(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ic(o),e;if(i===r)return ic(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Cf(e){return e=f0(e),e!==null?_f(e):null}function _f(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_f(e);if(t!==null)return t;e=e.sibling}return null}var jf=Ae.unstable_scheduleCallback,sc=Ae.unstable_cancelCallback,p0=Ae.unstable_shouldYield,h0=Ae.unstable_requestPaint,te=Ae.unstable_now,m0=Ae.unstable_getCurrentPriorityLevel,Hl=Ae.unstable_ImmediatePriority,Pf=Ae.unstable_UserBlockingPriority,Si=Ae.unstable_NormalPriority,g0=Ae.unstable_LowPriority,Nf=Ae.unstable_IdlePriority,qi=null,ct=null;function y0(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:x0,v0=Math.log,w0=Math.LN2;function x0(e){return e>>>=0,e===0?32:31-(v0(e)/w0|0)|0}var Lo=64,$o=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Ar(a):(i&=s,i!==0&&(r=Ar(i)))}else s=n&~o,s!==0?r=Ar(s):i!==0&&(r=Ar(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function S0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-qe(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=S0(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rf(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function Fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function So(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function E0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Vl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Of,Kl,bf,If,zf,Da=!1,Ao=[],Ut=null,Wt=null,Bt=null,qr=new Map,eo=new Map,$t=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ac(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function Pr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Eo(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function _0(e,t,n,r,o){switch(t){case"focusin":return Ut=Pr(Ut,e,t,n,r,o),!0;case"dragenter":return Wt=Pr(Wt,e,t,n,r,o),!0;case"mouseover":return Bt=Pr(Bt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return qr.set(i,Pr(qr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,eo.set(i,Pr(eo.get(i)||null,e,t,n,r,o)),!0}return!1}function Lf(e){var t=mn(e.target);if(t!==null){var n=On(t);if(n!==null){if(t=n.tag,t===13){if(t=Ef(n),t!==null){e.blockedOn=t,zf(e.priority,function(){bf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ia=r,n.target.dispatchEvent(r),Ia=null}else return t=Eo(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function lc(e,t,n){qo(e)&&n.delete(t)}function j0(){Da=!1,Ut!==null&&qo(Ut)&&(Ut=null),Wt!==null&&qo(Wt)&&(Wt=null),Bt!==null&&qo(Bt)&&(Bt=null),qr.forEach(lc),eo.forEach(lc)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Da||(Da=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,j0)))}function to(e){function t(o){return Nr(o,e)}if(0<Ao.length){Nr(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&Nr(Ut,e),Wt!==null&&Nr(Wt,e),Bt!==null&&Nr(Bt,e),qr.forEach(t),eo.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&$t.shift()}var qn=Pt.ReactCurrentBatchConfig,Ei=!0;function P0(e,t,n,r){var o=U,i=qn.transition;qn.transition=null;try{U=1,Gl(e,t,n,r)}finally{U=o,qn.transition=i}}function N0(e,t,n,r){var o=U,i=qn.transition;qn.transition=null;try{U=4,Gl(e,t,n,r)}finally{U=o,qn.transition=i}}function Gl(e,t,n,r){if(Ei){var o=Fa(e,t,n,r);if(o===null)Xs(e,t,r,Ci,n),ac(e,r);else if(_0(o,e,t,n,r))r.stopPropagation();else if(ac(e,r),t&4&&-1<C0.indexOf(e)){for(;o!==null;){var i=Eo(o);if(i!==null&&Of(i),i=Fa(e,t,n,r),i===null&&Xs(e,t,r,Ci,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Xs(e,t,r,null,n)}}var Ci=null;function Fa(e,t,n,r){if(Ci=null,e=Bl(r),e=mn(e),e!==null)if(t=On(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ef(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ci=e,null}function $f(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m0()){case Hl:return 1;case Pf:return 4;case Si:case g0:return 16;case Nf:return 536870912;default:return 16}default:return 16}}var Dt=null,Zl=null,ei=null;function Af(){if(ei)return ei;var e,t=Zl,n=t.length,r,o="value"in Dt?Dt.value:Dt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ei=o.slice(e,1<r?1-r:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function uc(){return!1}function Fe(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Do:uc,this.isPropagationStopped=uc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Fe(vr),ko=J({},vr,{view:0,detail:0}),R0=Fe(ko),Ms,Us,Rr,es=J({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(Ms=e.screenX-Rr.screenX,Us=e.screenY-Rr.screenY):Us=Ms=0,Rr=e),Ms)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),cc=Fe(es),T0=J({},es,{dataTransfer:0}),O0=Fe(T0),b0=J({},ko,{relatedTarget:0}),Ws=Fe(b0),I0=J({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Fe(I0),L0=J({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$0=Fe(L0),A0=J({},vr,{data:0}),dc=Fe(A0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=M0[e])?!!t[e]:!1}function Yl(){return U0}var W0=J({},ko,{key:function(e){if(e.key){var t=D0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?F0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B0=Fe(W0),H0=J({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=Fe(H0),V0=J({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),K0=Fe(V0),G0=J({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z0=Fe(G0),X0=J({},es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=Fe(X0),J0=[9,13,27,32],Jl=Et&&"CompositionEvent"in window,Wr=null;Et&&"documentMode"in document&&(Wr=document.documentMode);var Q0=Et&&"TextEvent"in window&&!Wr,Df=Et&&(!Jl||Wr&&8<Wr&&11>=Wr),pc=" ",hc=!1;function Ff(e,t){switch(e){case"keyup":return J0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function q0(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(hc=!0,pc);case"textInput":return e=t.data,e===pc&&hc?null:e;default:return null}}function e1(e,t){if(Fn)return e==="compositionend"||!Jl&&Ff(e,t)?(e=Af(),ei=Zl=Dt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Df&&t.locale!=="ko"?null:t.data;default:return null}}var t1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!t1[e.type]:t==="textarea"}function Uf(e,t,n,r){vf(r),t=_i(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,no=null;function n1(e){Qf(e,0)}function ts(e){var t=Wn(e);if(df(t))return e}function r1(e,t){if(e==="change")return t}var Wf=!1;if(Et){var Bs;if(Et){var Hs="oninput"in document;if(!Hs){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),Hs=typeof gc.oninput=="function"}Bs=Hs}else Bs=!1;Wf=Bs&&(!document.documentMode||9<document.documentMode)}function yc(){Br&&(Br.detachEvent("onpropertychange",Bf),no=Br=null)}function Bf(e){if(e.propertyName==="value"&&ts(no)){var t=[];Uf(t,no,e,Bl(e)),kf(n1,t)}}function o1(e,t,n){e==="focusin"?(yc(),Br=t,no=n,Br.attachEvent("onpropertychange",Bf)):e==="focusout"&&yc()}function i1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ts(no)}function s1(e,t){if(e==="click")return ts(t)}function a1(e,t){if(e==="input"||e==="change")return ts(t)}function l1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:l1;function ro(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Sa.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wc(e,t){var n=vc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vc(n)}}function Hf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vf(){for(var e=window,t=vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vi(e.document)}return t}function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function u1(e){var t=Vf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hf(n.ownerDocument.documentElement,n)){if(r!==null&&Ql(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=wc(n,i);var s=wc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var c1=Et&&"documentMode"in document&&11>=document.documentMode,Mn=null,Ma=null,Hr=null,Ua=!1;function xc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ua||Mn==null||Mn!==vi(r)||(r=Mn,"selectionStart"in r&&Ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&ro(Hr,r)||(Hr=r,r=_i(Ma,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Vs={},Kf={};Et&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function ns(e){if(Vs[e])return Vs[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return Vs[e]=t[n];return e}var Gf=ns("animationend"),Zf=ns("animationiteration"),Xf=ns("animationstart"),Yf=ns("transitionend"),Jf=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Jf.set(e,t),Tn(t,[e])}for(var Ks=0;Ks<Sc.length;Ks++){var Gs=Sc[Ks],d1=Gs.toLowerCase(),f1=Gs[0].toUpperCase()+Gs.slice(1);en(d1,"on"+f1)}en(Gf,"onAnimationEnd");en(Zf,"onAnimationIteration");en(Xf,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Yf,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function kc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,d0(r,t,void 0,e),e.currentTarget=null}function Qf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;kc(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;kc(o,a,u),i=l}}}if(xi)throw e=$a,xi=!1,$a=null,e}function V(e,t){var n=t[Ka];n===void 0&&(n=t[Ka]=new Set);var r=e+"__bubble";n.has(r)||(qf(t,e,2,!1),n.add(r))}function Zs(e,t,n){var r=0;t&&(r|=4),qf(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[Mo]){e[Mo]=!0,sf.forEach(function(n){n!=="selectionchange"&&(p1.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,Zs("selectionchange",!1,t))}}function qf(e,t,n,r){switch($f(t)){case 1:var o=P0;break;case 4:o=N0;break;default:o=Gl}n=o.bind(null,t,n,e),o=void 0,!La||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=mn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}kf(function(){var u=i,d=Bl(n),c=[];e:{var p=Jf.get(e);if(p!==void 0){var v=Xl,y=e;switch(e){case"keypress":if(ti(n)===0)break e;case"keydown":case"keyup":v=B0;break;case"focusin":y="focus",v=Ws;break;case"focusout":y="blur",v=Ws;break;case"beforeblur":case"afterblur":v=Ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=K0;break;case Gf:case Zf:case Xf:v=z0;break;case Yf:v=Z0;break;case"scroll":v=R0;break;case"wheel":v=Y0;break;case"copy":case"cut":case"paste":v=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fc}var w=(t&4)!==0,S=!w&&e==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var h=u,g;h!==null;){g=h;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=Qr(h,m),x!=null&&w.push(io(h,x,g)))),S)break;h=h.return}0<w.length&&(p=new v(p,y,null,n,d),c.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Ia&&(y=n.relatedTarget||n.fromElement)&&(mn(y)||y[Ct]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?mn(y):null,y!==null&&(S=On(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=cc,x="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=fc,x="onPointerLeave",m="onPointerEnter",h="pointer"),S=v==null?p:Wn(v),g=y==null?p:Wn(y),p=new w(x,h+"leave",v,n,d),p.target=S,p.relatedTarget=g,x=null,mn(d)===u&&(w=new w(m,h+"enter",y,n,d),w.target=g,w.relatedTarget=S,x=w),S=x,v&&y)t:{for(w=v,m=y,h=0,g=w;g;g=bn(g))h++;for(g=0,x=m;x;x=bn(x))g++;for(;0<h-g;)w=bn(w),h--;for(;0<g-h;)m=bn(m),g--;for(;h--;){if(w===m||m!==null&&w===m.alternate)break t;w=bn(w),m=bn(m)}w=null}else w=null;v!==null&&Ec(c,p,v,w,!1),y!==null&&S!==null&&Ec(c,S,y,w,!0)}}e:{if(p=u?Wn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=r1;else if(mc(p))if(Wf)k=a1;else{k=i1;var _=o1}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=s1);if(k&&(k=k(e,u))){Uf(c,k,n,d);break e}_&&_(e,p,u),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Na(p,"number",p.value)}switch(_=u?Wn(u):window,e){case"focusin":(mc(_)||_.contentEditable==="true")&&(Mn=_,Ma=u,Hr=null);break;case"focusout":Hr=Ma=Mn=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,xc(c,n,d);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":xc(c,n,d)}var E;if(Jl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fn?Ff(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Df&&n.locale!=="ko"&&(Fn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fn&&(E=Af()):(Dt=d,Zl="value"in Dt?Dt.value:Dt.textContent,Fn=!0)),_=_i(u,P),0<_.length&&(P=new dc(P,e,null,n,d),c.push({event:P,listeners:_}),E?P.data=E:(E=Mf(n),E!==null&&(P.data=E)))),(E=Q0?q0(e,n):e1(e,n))&&(u=_i(u,"onBeforeInput"),0<u.length&&(d=new dc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=E))}Qf(c,t)})}function io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _i(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qr(e,n),i!=null&&r.unshift(io(e,i,o)),i=Qr(e,t),i!=null&&r.push(io(e,i,o))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=Qr(n,i),l!=null&&s.unshift(io(n,l,a))):o||(l=Qr(n,i),l!=null&&s.push(io(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var h1=/\r\n?/g,m1=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(h1,`
`).replace(m1,"")}function Uo(e,t,n){if(t=Cc(t),Cc(e)!==t&&n)throw Error(N(425))}function ji(){}var Wa=null,Ba=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,g1=typeof clearTimeout=="function"?clearTimeout:void 0,_c=typeof Promise=="function"?Promise:void 0,y1=typeof queueMicrotask=="function"?queueMicrotask:typeof _c<"u"?function(e){return _c.resolve(null).then(e).catch(v1)}:Va;function v1(e){setTimeout(function(){throw e})}function Ys(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),to(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);to(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),at="__reactFiber$"+wr,so="__reactProps$"+wr,Ct="__reactContainer$"+wr,Ka="__reactEvents$"+wr,w1="__reactListeners$"+wr,x1="__reactHandles$"+wr;function mn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jc(e);e!==null;){if(n=e[at])return n;e=jc(e)}return t}e=n,n=e.parentNode}return null}function Eo(e){return e=e[at]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function rs(e){return e[so]||null}var Ga=[],Bn=-1;function tn(e){return{current:e}}function G(e){0>Bn||(e.current=Ga[Bn],Ga[Bn]=null,Bn--)}function H(e,t){Bn++,Ga[Bn]=e.current,e.current=t}var Qt={},Se=tn(Qt),Re=tn(!1),En=Qt;function rr(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Te(e){return e=e.childContextTypes,e!=null}function Pi(){G(Re),G(Se)}function Pc(e,t,n){if(Se.current!==Qt)throw Error(N(168));H(Se,t),H(Re,n)}function ep(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,o0(e)||"Unknown",o));return J({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,En=Se.current,H(Se,e),H(Re,Re.current),!0}function Nc(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=ep(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,G(Re),G(Se),H(Se,e)):G(Re),H(Re,n)}var vt=null,os=!1,Js=!1;function tp(e){vt===null?vt=[e]:vt.push(e)}function S1(e){os=!0,tp(e)}function nn(){if(!Js&&vt!==null){Js=!0;var e=0,t=U;try{var n=vt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,os=!1}catch(o){throw vt!==null&&(vt=vt.slice(e+1)),jf(Hl,nn),o}finally{U=t,Js=!1}}return null}var Hn=[],Vn=0,Ri=null,Ti=0,Me=[],Ue=0,Cn=null,wt=1,xt="";function dn(e,t){Hn[Vn++]=Ti,Hn[Vn++]=Ri,Ri=e,Ti=t}function np(e,t,n){Me[Ue++]=wt,Me[Ue++]=xt,Me[Ue++]=Cn,Cn=e;var r=wt;e=xt;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,wt=1<<32-qe(t)+o|n<<o|r,xt=i+e}else wt=1<<i|n<<o|r,xt=e}function ql(e){e.return!==null&&(dn(e,1),np(e,1,0))}function eu(e){for(;e===Ri;)Ri=Hn[--Vn],Hn[Vn]=null,Ti=Hn[--Vn],Hn[Vn]=null;for(;e===Cn;)Cn=Me[--Ue],Me[Ue]=null,xt=Me[--Ue],Me[Ue]=null,wt=Me[--Ue],Me[Ue]=null}var $e=null,Le=null,Z=!1,Qe=null;function rp(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Le=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:wt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Le=null,!0):!1;default:return!1}}function Za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(Z){var t=Le;if(t){var n=t;if(!Rc(e,t)){if(Za(e))throw Error(N(418));t=Ht(n.nextSibling);var r=$e;t&&Rc(e,t)?rp(r,n):(e.flags=e.flags&-4097|2,Z=!1,$e=e)}}else{if(Za(e))throw Error(N(418));e.flags=e.flags&-4097|2,Z=!1,$e=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Wo(e){if(e!==$e)return!1;if(!Z)return Tc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=Le)){if(Za(e))throw op(),Error(N(418));for(;t;)rp(e,t),t=Ht(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=$e?Ht(e.stateNode.nextSibling):null;return!0}function op(){for(var e=Le;e;)e=Ht(e.nextSibling)}function or(){Le=$e=null,Z=!1}function tu(e){Qe===null?Qe=[e]:Qe.push(e)}var k1=Pt.ReactCurrentBatchConfig;function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Oi=tn(null),bi=null,Kn=null,nu=null;function ru(){nu=Kn=bi=null}function ou(e){var t=Oi.current;G(Oi),e._currentValue=t}function Ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){bi=e,nu=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(nu!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(bi===null)throw Error(N(308));Kn=e,bi.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var gn=null;function iu(e){gn===null?gn=[e]:gn.push(e)}function ip(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,iu(t)):(n.next=o.next,o.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,_t(e,n)}return o=r.interleaved,o===null?(t.next=t,iu(r)):(t.next=o.next,o.next=t),r.interleaved=t,_t(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vl(e,n)}}function Oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ii(e,t,n,r){var o=e.updateQueue;Lt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(i!==null){var c=o.baseState;s=0,d=u=l=null,a=i;do{var p=a.lane,v=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(p=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){c=y.call(v,c,p);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(v,c,p):y,p==null)break e;c=J({},c,p);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=c):d=d.next=v,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(l=c),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);jn|=s,e.lanes=s,e.memoizedState=c}}function bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var ap=new of.Component().refs;function Ja(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Gt(e),i=St(r,o);i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(et(t,e,o,r),ni(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Gt(e),i=St(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(et(t,e,o,r),ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Gt(e),o=St(n,r);o.tag=2,t!=null&&(o.callback=t),t=Vt(e,o,r),t!==null&&(et(t,e,r,n),ni(t,e,r))}};function Ic(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!ro(n,r)||!ro(o,i):!0}function lp(e,t,n){var r=!1,o=Qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=Te(t)?En:Se.current,r=t.contextTypes,i=(r=r!=null)?rr(e,o):Qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function Qa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=ap,su(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=Te(t)?En:Se.current,o.context=rr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ja(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&is.enqueueReplaceState(o,o.state,null),Ii(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===ap&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Bo(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lc(e){var t=e._init;return t(e._payload)}function up(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function o(m,h){return m=Zt(m,h),m.index=0,m.sibling=null,m}function i(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,x){return h===null||h.tag!==6?(h=oa(g,m.mode,x),h.return=m,h):(h=o(h,g),h.return=m,h)}function l(m,h,g,x){var k=g.type;return k===Dn?d(m,h,g.props.children,x,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zt&&Lc(k)===h.type)?(x=o(h,g.props),x.ref=Tr(m,h,g),x.return=m,x):(x=li(g.type,g.key,g.props,null,m.mode,x),x.ref=Tr(m,h,g),x.return=m,x)}function u(m,h,g,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=ia(g,m.mode,x),h.return=m,h):(h=o(h,g.children||[]),h.return=m,h)}function d(m,h,g,x,k){return h===null||h.tag!==7?(h=Sn(g,m.mode,x,k),h.return=m,h):(h=o(h,g),h.return=m,h)}function c(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=oa(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case bo:return g=li(h.type,h.key,h.props,null,m.mode,g),g.ref=Tr(m,null,h),g.return=m,g;case An:return h=ia(h,m.mode,g),h.return=m,h;case zt:var x=h._init;return c(m,x(h._payload),g)}if($r(h)||_r(h))return h=Sn(h,m.mode,g,null),h.return=m,h;Bo(m,h)}return null}function p(m,h,g,x){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(m,h,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:return g.key===k?l(m,h,g,x):null;case An:return g.key===k?u(m,h,g,x):null;case zt:return k=g._init,p(m,h,k(g._payload),x)}if($r(g)||_r(g))return k!==null?null:d(m,h,g,x,null);Bo(m,g)}return null}function v(m,h,g,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,a(h,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bo:return m=m.get(x.key===null?g:x.key)||null,l(h,m,x,k);case An:return m=m.get(x.key===null?g:x.key)||null,u(h,m,x,k);case zt:var _=x._init;return v(m,h,g,_(x._payload),k)}if($r(x)||_r(x))return m=m.get(g)||null,d(h,m,x,k,null);Bo(h,x)}return null}function y(m,h,g,x){for(var k=null,_=null,E=h,P=h=0,I=null;E!==null&&P<g.length;P++){E.index>P?(I=E,E=null):I=E.sibling;var O=p(m,E,g[P],x);if(O===null){E===null&&(E=I);break}e&&E&&O.alternate===null&&t(m,E),h=i(O,h,P),_===null?k=O:_.sibling=O,_=O,E=I}if(P===g.length)return n(m,E),Z&&dn(m,P),k;if(E===null){for(;P<g.length;P++)E=c(m,g[P],x),E!==null&&(h=i(E,h,P),_===null?k=E:_.sibling=E,_=E);return Z&&dn(m,P),k}for(E=r(m,E);P<g.length;P++)I=v(E,m,P,g[P],x),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?P:I.key),h=i(I,h,P),_===null?k=I:_.sibling=I,_=I);return e&&E.forEach(function(ee){return t(m,ee)}),Z&&dn(m,P),k}function w(m,h,g,x){var k=_r(g);if(typeof k!="function")throw Error(N(150));if(g=k.call(g),g==null)throw Error(N(151));for(var _=k=null,E=h,P=h=0,I=null,O=g.next();E!==null&&!O.done;P++,O=g.next()){E.index>P?(I=E,E=null):I=E.sibling;var ee=p(m,E,O.value,x);if(ee===null){E===null&&(E=I);break}e&&E&&ee.alternate===null&&t(m,E),h=i(ee,h,P),_===null?k=ee:_.sibling=ee,_=ee,E=I}if(O.done)return n(m,E),Z&&dn(m,P),k;if(E===null){for(;!O.done;P++,O=g.next())O=c(m,O.value,x),O!==null&&(h=i(O,h,P),_===null?k=O:_.sibling=O,_=O);return Z&&dn(m,P),k}for(E=r(m,E);!O.done;P++,O=g.next())O=v(E,m,P,O.value,x),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?P:O.key),h=i(O,h,P),_===null?k=O:_.sibling=O,_=O);return e&&E.forEach(function(sn){return t(m,sn)}),Z&&dn(m,P),k}function S(m,h,g,x){if(typeof g=="object"&&g!==null&&g.type===Dn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:e:{for(var k=g.key,_=h;_!==null;){if(_.key===k){if(k=g.type,k===Dn){if(_.tag===7){n(m,_.sibling),h=o(_,g.props.children),h.return=m,m=h;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zt&&Lc(k)===_.type){n(m,_.sibling),h=o(_,g.props),h.ref=Tr(m,_,g),h.return=m,m=h;break e}n(m,_);break}else t(m,_);_=_.sibling}g.type===Dn?(h=Sn(g.props.children,m.mode,x,g.key),h.return=m,m=h):(x=li(g.type,g.key,g.props,null,m.mode,x),x.ref=Tr(m,h,g),x.return=m,m=x)}return s(m);case An:e:{for(_=g.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=o(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=ia(g,m.mode,x),h.return=m,m=h}return s(m);case zt:return _=g._init,S(m,h,_(g._payload),x)}if($r(g))return y(m,h,g,x);if(_r(g))return w(m,h,g,x);Bo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=o(h,g),h.return=m,m=h):(n(m,h),h=oa(g,m.mode,x),h.return=m,m=h),s(m)):n(m,h)}return S}var ir=up(!0),cp=up(!1),Co={},dt=tn(Co),ao=tn(Co),lo=tn(Co);function yn(e){if(e===Co)throw Error(N(174));return e}function au(e,t){switch(H(lo,t),H(ao,e),H(dt,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ta(t,e)}G(dt),H(dt,t)}function sr(){G(dt),G(ao),G(lo)}function dp(e){yn(lo.current);var t=yn(dt.current),n=Ta(t,e.type);t!==n&&(H(ao,e),H(dt,n))}function lu(e){ao.current===e&&(G(dt),G(ao))}var X=tn(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qs=[];function uu(){for(var e=0;e<Qs.length;e++)Qs[e]._workInProgressVersionPrimary=null;Qs.length=0}var ri=Pt.ReactCurrentDispatcher,qs=Pt.ReactCurrentBatchConfig,_n=0,Y=null,ae=null,ce=null,Li=!1,Vr=!1,uo=0,E1=0;function ye(){throw Error(N(321))}function cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function du(e,t,n,r,o,i){if(_n=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ri.current=e===null||e.memoizedState===null?P1:N1,e=n(r,o),Vr){i=0;do{if(Vr=!1,uo=0,25<=i)throw Error(N(301));i+=1,ce=ae=null,t.updateQueue=null,ri.current=R1,e=n(r,o)}while(Vr)}if(ri.current=$i,t=ae!==null&&ae.next!==null,_n=0,ce=ae=Y=null,Li=!1,t)throw Error(N(300));return e}function fu(){var e=uo!==0;return uo=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Y.memoizedState=ce=e:ce=ce.next=e,ce}function Ke(){if(ae===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?Y.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(N(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?Y.memoizedState=ce=e:ce=ce.next=e}return ce}function co(e,t){return typeof t=="function"?t(e):t}function ea(e){var t=Ke(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var d=u.lane;if((_n&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,Y.lanes|=d,jn|=d}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,nt(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ta(e){var t=Ke(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);nt(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function fp(){}function pp(e,t){var n=Y,r=Ke(),o=t(),i=!nt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,pu(gp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,fo(9,mp.bind(null,n,r,o,t),void 0,null),pe===null)throw Error(N(349));_n&30||hp(n,t,o)}return o}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mp(e,t,n,r){t.value=n,t.getSnapshot=r,yp(t)&&vp(e)}function gp(e,t,n){return n(function(){yp(t)&&vp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function vp(e){var t=_t(e,1);t!==null&&et(t,e,1,-1)}function $c(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=e,e=e.dispatch=j1.bind(null,Y,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wp(){return Ke().memoizedState}function oi(e,t,n,r){var o=ot();Y.flags|=e,o.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function ss(e,t,n,r){var o=Ke();r=r===void 0?null:r;var i=void 0;if(ae!==null){var s=ae.memoizedState;if(i=s.destroy,r!==null&&cu(r,s.deps)){o.memoizedState=fo(t,n,i,r);return}}Y.flags|=e,o.memoizedState=fo(1|t,n,i,r)}function Ac(e,t){return oi(8390656,8,e,t)}function pu(e,t){return ss(2048,8,e,t)}function xp(e,t){return ss(4,2,e,t)}function Sp(e,t){return ss(4,4,e,t)}function kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ep(e,t,n){return n=n!=null?n.concat([e]):null,ss(4,4,kp.bind(null,t,e),n)}function hu(){}function Cp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _p(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jp(e,t,n){return _n&21?(nt(n,t)||(n=Rf(),Y.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function C1(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=qs.transition;qs.transition={};try{e(!1),t()}finally{U=n,qs.transition=r}}function Pp(){return Ke().memoizedState}function _1(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Np(e))Rp(t,n);else if(n=ip(e,t,n,r),n!==null){var o=Ee();et(n,e,r,o),Tp(n,t,r)}}function j1(e,t,n){var r=Gt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Np(e))Rp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,nt(a,s)){var l=t.interleaved;l===null?(o.next=o,iu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=ip(e,t,o,r),n!==null&&(o=Ee(),et(n,e,r,o),Tp(n,t,r))}}function Np(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Rp(e,t){Vr=Li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vl(e,n)}}var $i={readContext:Ve,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},P1={readContext:Ve,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_1.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:$c,useDebugValue:hu,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=$c(!1),t=e[0];return e=C1.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=ot();if(Z){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),pe===null)throw Error(N(349));_n&30||hp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ac(gp.bind(null,r,i,e),[e]),r.flags|=2048,fo(9,mp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ot(),t=pe.identifierPrefix;if(Z){var n=xt,r=wt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=E1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},N1={readContext:Ve,useCallback:Cp,useContext:Ve,useEffect:pu,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:Sp,useMemo:_p,useReducer:ea,useRef:wp,useState:function(){return ea(co)},useDebugValue:hu,useDeferredValue:function(e){var t=Ke();return jp(t,ae.memoizedState,e)},useTransition:function(){var e=ea(co)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1},R1={readContext:Ve,useCallback:Cp,useContext:Ve,useEffect:pu,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:Sp,useMemo:_p,useReducer:ta,useRef:wp,useState:function(){return ta(co)},useDebugValue:hu,useDeferredValue:function(e){var t=Ke();return ae===null?t.memoizedState=e:jp(t,ae.memoizedState,e)},useTransition:function(){var e=ta(co)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1};function ar(e,t){try{var n="",r=t;do n+=r0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function na(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var T1=typeof WeakMap=="function"?WeakMap:Map;function Op(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Di||(Di=!0,ul=r),qa(e,t)},n}function bp(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){qa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qa(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Dc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new T1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=H1.bind(null,e,t,n),t.then(e,e))}function Fc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var O1=Pt.ReactCurrentOwner,Ne=!1;function ke(e,t,n,r){t.child=e===null?cp(t,null,n,r):ir(t,e.child,n,r)}function Uc(e,t,n,r,o){n=n.render;var i=t.ref;return er(t,o),r=du(e,t,n,r,i,o),n=fu(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(Z&&n&&ql(t),t.flags|=1,ke(e,t,r,o),t.child)}function Wc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ku(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ip(e,t,i,r,o)):(e=li(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(s,r)&&e.ref===t.ref)return jt(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ip(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ro(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,jt(e,t,o)}return el(e,t,n,r,o)}function zp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Zn,ze),ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Zn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(Zn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(Zn,ze),ze|=r;return ke(e,t,o,n),t.child}function Lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function el(e,t,n,r,o){var i=Te(n)?En:Se.current;return i=rr(t,i),er(t,o),n=du(e,t,n,r,i,o),r=fu(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(Z&&r&&ql(t),t.flags|=1,ke(e,t,n,o),t.child)}function Bc(e,t,n,r,o){if(Te(n)){var i=!0;Ni(t)}else i=!1;if(er(t,o),t.stateNode===null)ii(e,t),lp(t,n,r),Qa(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Te(n)?En:Se.current,u=rr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&zc(t,s,r,u),Lt=!1;var p=t.memoizedState;s.state=p,Ii(t,r,s,o),l=t.memoizedState,a!==r||p!==l||Re.current||Lt?(typeof d=="function"&&(Ja(t,n,d,r),l=t.memoizedState),(a=Lt||Ic(t,n,a,r,p,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,sp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ye(t.type,a),s.props=u,c=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ve(l):(l=Te(n)?En:Se.current,l=rr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||p!==l)&&zc(t,s,r,l),Lt=!1,p=t.memoizedState,s.state=p,Ii(t,r,s,o);var y=t.memoizedState;a!==c||p!==y||Re.current||Lt?(typeof v=="function"&&(Ja(t,n,v,r),y=t.memoizedState),(u=Lt||Ic(t,n,u,r,p,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return tl(e,t,n,r,i,o)}function tl(e,t,n,r,o,i){Lp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Nc(t,n,!1),jt(e,t,i);r=t.stateNode,O1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ir(t,e.child,null,i),t.child=ir(t,null,a,i)):ke(e,t,a,i),t.memoizedState=r.state,o&&Nc(t,n,!0),t.child}function $p(e){var t=e.stateNode;t.pendingContext?Pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pc(e,t.context,!1),au(e,t.containerInfo)}function Hc(e,t,n,r,o){return or(),tu(o),t.flags|=256,ke(e,t,n,r),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ap(e,t,n){var r=t.pendingProps,o=X.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(X,o&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=us(s,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=rl(n),t.memoizedState=nl,e):mu(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return b1(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zt(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Zt(a,i):(i=Sn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?rl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=nl,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mu(e,t){return t=us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ho(e,t,n,r){return r!==null&&tu(r),ir(t,e.child,null,n),e=mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b1(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=na(Error(N(422))),Ho(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=us({mode:"visible",children:r.children},o,0,null),i=Sn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ir(t,e.child,null,s),t.child.memoizedState=rl(s),t.memoizedState=nl,i);if(!(t.mode&1))return Ho(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=na(i,r,void 0),Ho(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ne||a){if(r=pe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,_t(e,o),et(r,e,o,-1))}return Su(),r=na(Error(N(421))),Ho(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=V1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=Ht(o.nextSibling),$e=t,Z=!0,Qe=null,e!==null&&(Me[Ue++]=wt,Me[Ue++]=xt,Me[Ue++]=Cn,wt=e.id,xt=e.overflow,Cn=t),t=mu(t,r.children),t.flags|=4096,t)}function Vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ya(e.return,t,n)}function ra(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Dp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vc(e,n,t);else if(e.tag===19)Vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&zi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ra(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&zi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ra(t,!0,n,null,i);break;case"together":ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ii(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function I1(e,t,n){switch(t.tag){case 3:$p(t),or();break;case 5:dp(t);break;case 1:Te(t.type)&&Ni(t);break;case 4:au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Oi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Ap(e,t,n):(H(X,X.current&1),e=jt(e,t,n),e!==null?e.sibling:null);H(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,zp(e,t,n)}return jt(e,t,n)}var Fp,ol,Mp,Up;Fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ol=function(){};Mp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,yn(dt.current);var i=null;switch(n){case"input":o=ja(e,o),r=ja(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=Ra(e,o),r=Ra(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ji)}Oa(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Up=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z1(e,t,n){var r=t.pendingProps;switch(eu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Te(t.type)&&Pi(),ve(t),null;case 3:return r=t.stateNode,sr(),G(Re),G(Se),uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(fl(Qe),Qe=null))),ol(e,t),ve(t),null;case 5:lu(t);var o=yn(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)Mp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ve(t),null}if(e=yn(dt.current),Wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[at]=t,r[so]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Dr.length;o++)V(Dr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ec(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":nc(r,i),V("invalid",r)}Oa(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Uo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Uo(r.textContent,a,e),o=["children",""+a]):Yr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":Io(r),tc(r,i,!0);break;case"textarea":Io(r),rc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ji)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[so]=r,Fp(e,t,!1,!1),t.stateNode=e;e:{switch(s=ba(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Dr.length;o++)V(Dr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":ec(e,r),o=ja(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":nc(e,r),o=Ra(e,r),V("invalid",e);break;default:o=r}Oa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?yf(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mf(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jr(e,l):typeof l=="number"&&Jr(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yr.hasOwnProperty(i)?l!=null&&i==="onScroll"&&V("scroll",e):l!=null&&Fl(e,i,l,s))}switch(n){case"input":Io(e),tc(e,r,!1);break;case"textarea":Io(e),rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Up(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=yn(lo.current),yn(dt.current),Wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ve(t),null;case 13:if(G(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Le!==null&&t.mode&1&&!(t.flags&128))op(),or(),t.flags|=98560,i=!1;else if(i=Wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[at]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Qe!==null&&(fl(Qe),Qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?le===0&&(le=3):Su())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return sr(),ol(e,t),e===null&&oo(t.stateNode.containerInfo),ve(t),null;case 10:return ou(t.type._context),ve(t),null;case 17:return Te(t.type)&&Pi(),ve(t),null;case 19:if(G(X),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Or(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=zi(e),s!==null){for(t.flags|=128,Or(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>lr&&(t.flags|=128,r=!0,Or(i,!1),t.lanes=4194304)}else{if(!r)if(e=zi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Z)return ve(t),null}else 2*te()-i.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,Or(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=X.current,H(X,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function L1(e,t){switch(eu(t),t.tag){case 1:return Te(t.type)&&Pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),G(Re),G(Se),uu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lu(t),null;case 13:if(G(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(X),null;case 4:return sr(),null;case 10:return ou(t.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var Vo=!1,xe=!1,$1=typeof WeakSet=="function"?WeakSet:Set,T=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function il(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Kc=!1;function A1(e,t){if(Wa=Ei,e=Vf(),Ql(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,c=e,p=null;t:for(;;){for(var v;c!==n||o!==0&&c.nodeType!==3||(a=s+o),c!==i||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(v=c.firstChild)!==null;)p=c,c=v;for(;;){if(c===e)break t;if(p===n&&++u===o&&(a=s),p===i&&++d===r&&(l=s),(v=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ba={focusedElem:e,selectionRange:n},Ei=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){Q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=Kc,Kc=!1,y}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&il(t,n,i)}o=o.next}while(o!==r)}}function as(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wp(e){var t=e.alternate;t!==null&&(e.alternate=null,Wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[so],delete t[Ka],delete t[w1],delete t[x1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bp(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}var he=null,Je=!1;function Tt(e,t,n){for(n=n.child;n!==null;)Hp(e,t,n),n=n.sibling}function Hp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(qi,n)}catch{}switch(n.tag){case 5:xe||Gn(n,t);case 6:var r=he,o=Je;he=null,Tt(e,t,n),he=r,Je=o,he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?Ys(e.parentNode,n):e.nodeType===1&&Ys(e,n),to(e)):Ys(he,n.stateNode));break;case 4:r=he,o=Je,he=n.stateNode.containerInfo,Je=!0,Tt(e,t,n),he=r,Je=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&il(n,t,s),o=o.next}while(o!==r)}Tt(e,t,n);break;case 1:if(!xe&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Tt(e,t,n),xe=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function Zc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $1),t.forEach(function(r){var o=K1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Je=!1;break e;case 3:he=a.stateNode.containerInfo,Je=!0;break e;case 4:he=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(he===null)throw Error(N(160));Hp(i,s,o),he=null,Je=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){Q(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling}function Vp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),rt(e),r&4){try{Kr(3,e,e.return),as(3,e)}catch(w){Q(e,e.return,w)}try{Kr(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:Xe(t,e),rt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(Xe(t,e),rt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var o=e.stateNode;try{Jr(o,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ff(o,i),ba(a,s);var u=ba(a,i);for(s=0;s<l.length;s+=2){var d=l[s],c=l[s+1];d==="style"?yf(o,c):d==="dangerouslySetInnerHTML"?mf(o,c):d==="children"?Jr(o,c):Fl(o,d,c,u)}switch(a){case"input":Pa(o,i);break;case"textarea":pf(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Yn(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?Yn(o,!!i.multiple,i.defaultValue,!0):Yn(o,!!i.multiple,i.multiple?[]:"",!1))}o[so]=i}catch(w){Q(e,e.return,w)}}break;case 6:if(Xe(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Q(e,e.return,w)}}break;case 3:if(Xe(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:Xe(t,e),rt(e);break;case 13:Xe(t,e),rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(vu=te())),r&4&&Zc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,Xe(t,e),xe=u):Xe(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(T=e,d=e.child;d!==null;){for(c=T=d;T!==null;){switch(p=T,v=p.child,p.tag){case 0:case 11:case 14:case 15:Kr(4,p,p.return);break;case 1:Gn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:Gn(p,p.return);break;case 22:if(p.memoizedState!==null){Yc(c);continue}}v!==null?(v.return=p,T=v):Yc(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gf("display",s))}catch(w){Q(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){Q(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Xe(t,e),rt(e),r&4&&Zc(e);break;case 21:break;default:Xe(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bp(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Jr(o,""),r.flags&=-33);var i=Gc(e);ll(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Gc(e);al(e,a,s);break;default:throw Error(N(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D1(e,t,n){T=e,Kp(e)}function Kp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Vo;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||xe;a=Vo;var u=xe;if(Vo=s,(xe=l)&&!u)for(T=o;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?Jc(o):l!==null?(l.return=s,T=l):Jc(o);for(;i!==null;)T=i,Kp(i),i=i.sibling;T=o,Vo=a,xe=u}Xc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):Xc(e)}}function Xc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||as(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&bc(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&to(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}xe||t.flags&512&&sl(t)}catch(p){Q(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Yc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Jc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{as(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Q(t,o,l)}}var i=t.return;try{sl(t)}catch(l){Q(t,i,l)}break;case 5:var s=t.return;try{sl(t)}catch(l){Q(t,s,l)}}}catch(l){Q(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var F1=Math.ceil,Ai=Pt.ReactCurrentDispatcher,gu=Pt.ReactCurrentOwner,Be=Pt.ReactCurrentBatchConfig,D=0,pe=null,oe=null,me=0,ze=0,Zn=tn(0),le=0,po=null,jn=0,ls=0,yu=0,Gr=null,je=null,vu=0,lr=1/0,gt=null,Di=!1,ul=null,Kt=null,Ko=!1,Ft=null,Fi=0,Zr=0,cl=null,si=-1,ai=0;function Ee(){return D&6?te():si!==-1?si:si=te()}function Gt(e){return e.mode&1?D&2&&me!==0?me&-me:k1.transition!==null?(ai===0&&(ai=Rf()),ai):(e=U,e!==0||(e=window.event,e=e===void 0?16:$f(e.type)),e):1}function et(e,t,n,r){if(50<Zr)throw Zr=0,cl=null,Error(N(185));So(e,n,r),(!(D&2)||e!==pe)&&(e===pe&&(!(D&2)&&(ls|=n),le===4&&At(e,me)),Oe(e,r),n===1&&D===0&&!(t.mode&1)&&(lr=te()+500,os&&nn()))}function Oe(e,t){var n=e.callbackNode;k0(e,t);var r=ki(e,e===pe?me:0);if(r===0)n!==null&&sc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sc(n),t===1)e.tag===0?S1(Qc.bind(null,e)):tp(Qc.bind(null,e)),y1(function(){!(D&6)&&nn()}),n=null;else{switch(Tf(r)){case 1:n=Hl;break;case 4:n=Pf;break;case 16:n=Si;break;case 536870912:n=Nf;break;default:n=Si}n=eh(n,Gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gp(e,t){if(si=-1,ai=0,D&6)throw Error(N(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=ki(e,e===pe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mi(e,r);else{t=r;var o=D;D|=2;var i=Xp();(pe!==e||me!==t)&&(gt=null,lr=te()+500,xn(e,t));do try{W1();break}catch(a){Zp(e,a)}while(!0);ru(),Ai.current=i,D=o,oe!==null?t=0:(pe=null,me=0,t=le)}if(t!==0){if(t===2&&(o=Aa(e),o!==0&&(r=o,t=dl(e,o))),t===1)throw n=po,xn(e,0),At(e,r),Oe(e,te()),n;if(t===6)At(e,r);else{if(o=e.current.alternate,!(r&30)&&!M1(o)&&(t=Mi(e,r),t===2&&(i=Aa(e),i!==0&&(r=i,t=dl(e,i))),t===1))throw n=po,xn(e,0),At(e,r),Oe(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:fn(e,je,gt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=vu+500-te(),10<t)){if(ki(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Va(fn.bind(null,e,je,gt),t);break}fn(e,je,gt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-qe(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*F1(r/1960))-r,10<r){e.timeoutHandle=Va(fn.bind(null,e,je,gt),r);break}fn(e,je,gt);break;case 5:fn(e,je,gt);break;default:throw Error(N(329))}}}return Oe(e,te()),e.callbackNode===n?Gp.bind(null,e):null}function dl(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=je,je=n,t!==null&&fl(t)),e}function fl(e){je===null?je=e:je.push.apply(je,e)}function M1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~yu,t&=~ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function Qc(e){if(D&6)throw Error(N(327));tr();var t=ki(e,0);if(!(t&1))return Oe(e,te()),null;var n=Mi(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=dl(e,r))}if(n===1)throw n=po,xn(e,0),At(e,t),Oe(e,te()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,je,gt),Oe(e,te()),null}function wu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(lr=te()+500,os&&nn())}}function Pn(e){Ft!==null&&Ft.tag===0&&!(D&6)&&tr();var t=D;D|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,D=t,!(D&6)&&nn()}}function xu(){ze=Zn.current,G(Zn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,g1(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pi();break;case 3:sr(),G(Re),G(Se),uu();break;case 5:lu(r);break;case 4:sr();break;case 13:G(X);break;case 19:G(X);break;case 10:ou(r.type._context);break;case 22:case 23:xu()}n=n.return}if(pe=e,oe=e=Zt(e.current,null),me=ze=t,le=0,po=null,yu=ls=jn=0,je=Gr=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}gn=null}return e}function Zp(e,t){do{var n=oe;try{if(ru(),ri.current=$i,Li){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Li=!1}if(_n=0,ce=ae=Y=null,Vr=!1,uo=0,gu.current=null,n===null||n.return===null){le=1,po=t,oe=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Fc(s);if(v!==null){v.flags&=-257,Mc(v,s,a,i,t),v.mode&1&&Dc(i,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Dc(i,u,t),Su();break e}l=Error(N(426))}}else if(Z&&a.mode&1){var S=Fc(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Mc(S,s,a,i,t),tu(ar(l,a));break e}}i=l=ar(l,a),le!==4&&(le=2),Gr===null?Gr=[i]:Gr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Op(i,l,t);Oc(i,m);break e;case 1:a=l;var h=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kt===null||!Kt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=bp(i,a,t);Oc(i,x);break e}}i=i.return}while(i!==null)}Jp(n)}catch(k){t=k,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Xp(){var e=Ai.current;return Ai.current=$i,e===null?$i:e}function Su(){(le===0||le===3||le===2)&&(le=4),pe===null||!(jn&268435455)&&!(ls&268435455)||At(pe,me)}function Mi(e,t){var n=D;D|=2;var r=Xp();(pe!==e||me!==t)&&(gt=null,xn(e,t));do try{U1();break}catch(o){Zp(e,o)}while(!0);if(ru(),D=n,Ai.current=r,oe!==null)throw Error(N(261));return pe=null,me=0,le}function U1(){for(;oe!==null;)Yp(oe)}function W1(){for(;oe!==null&&!p0();)Yp(oe)}function Yp(e){var t=qp(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Jp(e):oe=t,gu.current=null}function Jp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=L1(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=z1(n,t,ze),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function fn(e,t,n){var r=U,o=Be.transition;try{Be.transition=null,U=1,B1(e,t,n,r)}finally{Be.transition=o,U=r}return null}function B1(e,t,n,r){do tr();while(Ft!==null);if(D&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(E0(e,i),e===pe&&(oe=pe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,eh(Si,function(){return tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var s=U;U=1;var a=D;D|=4,gu.current=null,A1(e,n),Vp(n,e),u1(Ba),Ei=!!Wa,Ba=Wa=null,e.current=n,D1(n),h0(),D=a,U=s,Be.transition=i}else e.current=n;if(Ko&&(Ko=!1,Ft=e,Fi=o),i=e.pendingLanes,i===0&&(Kt=null),y0(n.stateNode),Oe(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Di)throw Di=!1,e=ul,ul=null,e;return Fi&1&&e.tag!==0&&tr(),i=e.pendingLanes,i&1?e===cl?Zr++:(Zr=0,cl=e):Zr=0,nn(),null}function tr(){if(Ft!==null){var e=Tf(Fi),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Fi=0,D&6)throw Error(N(331));var o=D;for(D|=4,T=e.current;T!==null;){var i=T,s=i.child;if(T.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Kr(8,d,i)}var c=d.child;if(c!==null)c.return=d,T=c;else for(;T!==null;){d=T;var p=d.sibling,v=d.return;if(Wp(d),d===u){T=null;break}if(p!==null){p.return=v,T=p;break}T=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}T=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,T=s;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Kr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,T=m;break e}T=i.return}}var h=e.current;for(T=h;T!==null;){s=T;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,T=g;else e:for(s=h;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:as(9,a)}}catch(k){Q(a,a.return,k)}if(a===s){T=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,T=x;break e}T=a.return}}if(D=o,nn(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(qi,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function qc(e,t,n){t=ar(n,t),t=Op(e,t,1),e=Vt(e,t,1),t=Ee(),e!==null&&(So(e,1,t),Oe(e,t))}function Q(e,t,n){if(e.tag===3)qc(e,e,n);else for(;t!==null;){if(t.tag===3){qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=ar(n,e),e=bp(t,e,1),t=Vt(t,e,1),e=Ee(),t!==null&&(So(t,1,e),Oe(t,e));break}}t=t.return}}function H1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>te()-vu?xn(e,0):yu|=n),Oe(e,t)}function Qp(e,t){t===0&&(e.mode&1?(t=$o,$o<<=1,!($o&130023424)&&($o=4194304)):t=1);var n=Ee();e=_t(e,t),e!==null&&(So(e,t,n),Oe(e,n))}function V1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qp(e,n)}function K1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Qp(e,n)}var qp;qp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,I1(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,Z&&t.flags&1048576&&np(t,Ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ii(e,t),e=t.pendingProps;var o=rr(t,Se.current);er(t,n),o=du(null,t,r,e,o,n);var i=fu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(i=!0,Ni(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,su(t),o.updater=is,t.stateNode=o,o._reactInternals=t,Qa(t,r,e,n),t=tl(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&ql(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ii(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Z1(r),e=Ye(r,e),o){case 0:t=el(null,t,r,e,n);break e;case 1:t=Bc(null,t,r,e,n);break e;case 11:t=Uc(null,t,r,e,n);break e;case 14:t=Wc(null,t,r,Ye(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),el(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),Bc(e,t,r,o,n);case 3:e:{if($p(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,sp(e,t),Ii(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ar(Error(N(423)),t),t=Hc(e,t,r,n,o);break e}else if(r!==o){o=ar(Error(N(424)),t),t=Hc(e,t,r,n,o);break e}else for(Le=Ht(t.stateNode.containerInfo.firstChild),$e=t,Z=!0,Qe=null,n=cp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===o){t=jt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return dp(t),e===null&&Xa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Ha(r,o)?s=null:i!==null&&Ha(r,i)&&(t.flags|=32),Lp(e,t),ke(e,t,s,n),t.child;case 6:return e===null&&Xa(t),null;case 13:return Ap(e,t,n);case 4:return au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),Uc(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,H(Oi,r._currentValue),r._currentValue=s,i!==null)if(nt(i.value,s)){if(i.children===o.children&&!Re.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=St(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ya(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ya(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,er(t,n),o=Ve(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=Ye(r,t.pendingProps),o=Ye(r.type,o),Wc(e,t,r,o,n);case 15:return Ip(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),ii(e,t),t.tag=1,Te(r)?(e=!0,Ni(t)):e=!1,er(t,n),lp(t,r,o),Qa(t,r,o,n),tl(null,t,r,!0,e,n);case 19:return Dp(e,t,n);case 22:return zp(e,t,n)}throw Error(N(156,t.tag))};function eh(e,t){return jf(e,t)}function G1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new G1(e,t,n,r)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z1(e){if(typeof e=="function")return ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ul)return 11;if(e===Wl)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function li(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")ku(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Dn:return Sn(n.children,o,i,t);case Ml:s=8,o|=8;break;case ka:return e=We(12,n,t,o|2),e.elementType=ka,e.lanes=i,e;case Ea:return e=We(13,n,t,o),e.elementType=Ea,e.lanes=i,e;case Ca:return e=We(19,n,t,o),e.elementType=Ca,e.lanes=i,e;case uf:return us(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case af:s=10;break e;case lf:s=9;break e;case Ul:s=11;break e;case Wl:s=14;break e;case zt:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=We(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function us(e,t,n,r){return e=We(22,e,r,t),e.elementType=uf,e.lanes=n,e.stateNode={isHidden:!1},e}function oa(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function ia(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function X1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Eu(e,t,n,r,o,i,s,a,l){return e=new X1(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=We(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(i),e}function Y1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function th(e){if(!e)return Qt;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Te(n))return ep(e,n,t)}return t}function nh(e,t,n,r,o,i,s,a,l){return e=Eu(n,r,!0,e,o,i,s,a,l),e.context=th(null),n=e.current,r=Ee(),o=Gt(n),i=St(r,o),i.callback=t??null,Vt(n,i,o),e.current.lanes=o,So(e,o,r),Oe(e,r),e}function cs(e,t,n,r){var o=t.current,i=Ee(),s=Gt(o);return n=th(n),t.context===null?t.context=n:t.pendingContext=n,t=St(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(o,t,s),e!==null&&(et(e,o,s,i),ni(e,o,s)),s}function Ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cu(e,t){ed(e,t),(e=e.alternate)&&ed(e,t)}function J1(){return null}var rh=typeof reportError=="function"?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}ds.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));cs(e,t,null,null)};ds.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){cs(null,e,null,null)}),t[Ct]=null}};function ds(e){this._internalRoot=e}ds.prototype.unstable_scheduleHydration=function(e){if(e){var t=If();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&Lf(e)}};function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function td(){}function Q1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ui(s);i.call(u)}}var s=nh(t,r,e,0,null,!1,!1,"",td);return e._reactRootContainer=s,e[Ct]=s.current,oo(e.nodeType===8?e.parentNode:e),Pn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ui(l);a.call(u)}}var l=Eu(e,0,!1,null,null,!1,!1,"",td);return e._reactRootContainer=l,e[Ct]=l.current,oo(e.nodeType===8?e.parentNode:e),Pn(function(){cs(t,l,n,r)}),l}function ps(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Ui(s);a.call(l)}}cs(t,s,e,o)}else s=Q1(n,t,e,o,r);return Ui(s)}Of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(Vl(t,n|1),Oe(t,te()),!(D&6)&&(lr=te()+500,nn()))}break;case 13:Pn(function(){var r=_t(e,1);if(r!==null){var o=Ee();et(r,e,1,o)}}),Cu(e,1)}};Kl=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Ee();et(t,e,134217728,n)}Cu(e,134217728)}};bf=function(e){if(e.tag===13){var t=Gt(e),n=_t(e,t);if(n!==null){var r=Ee();et(n,e,t,r)}Cu(e,t)}};If=function(){return U};zf=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};za=function(e,t,n){switch(t){case"input":if(Pa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rs(r);if(!o)throw Error(N(90));df(r),Pa(r,o)}}}break;case"textarea":pf(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}};xf=wu;Sf=Pn;var q1={usingClientEntryPoint:!1,Events:[Eo,Wn,rs,vf,wf,wu]},br={findFiberByHostInstance:mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eg={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cf(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||J1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{qi=Go.inject(eg),ct=Go}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(t))throw Error(N(200));return Y1(e,t,null,n)};De.createRoot=function(e,t){if(!ju(e))throw Error(N(299));var n=!1,r="",o=rh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Eu(e,1,!1,null,null,n,!1,r,o),e[Ct]=t.current,oo(e.nodeType===8?e.parentNode:e),new _u(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Cf(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Pn(e)};De.hydrate=function(e,t,n){if(!fs(t))throw Error(N(200));return ps(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!ju(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=rh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=nh(t,null,e,1,n??null,o,!1,i,s),e[Ct]=t.current,oo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ds(t)};De.render=function(e,t,n){if(!fs(t))throw Error(N(200));return ps(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!fs(e))throw Error(N(40));return e._reactRootContainer?(Pn(function(){ps(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};De.unstable_batchedUpdates=wu;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fs(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ps(e,t,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oh)}catch(e){console.error(e)}}oh(),tf.exports=De;var tg=tf.exports,nd=tg;xa.createRoot=nd.createRoot,xa.hydrateRoot=nd.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const rd="popstate";function ng(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return pl("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Wi(o)}return og(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ih(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rg(){return Math.random().toString(36).substr(2,8)}function od(e,t){return{usr:e.state,key:e.key,idx:t}}function pl(e,t,n,r){return n===void 0&&(n=null),ho({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xr(t):t,{state:n,key:t&&t.key||r||rg()})}function Wi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function og(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Mt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(ho({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function c(){a=Mt.Pop;let S=d(),m=S==null?null:S-u;u=S,l&&l({action:a,location:w.location,delta:m})}function p(S,m){a=Mt.Push;let h=pl(w.location,S,m);n&&n(h,S),u=d()+1;let g=od(h,u),x=w.createHref(h);try{s.pushState(g,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(x)}i&&l&&l({action:a,location:w.location,delta:1})}function v(S,m){a=Mt.Replace;let h=pl(w.location,S,m);n&&n(h,S),u=d();let g=od(h,u),x=w.createHref(h);s.replaceState(g,"",x),i&&l&&l({action:a,location:w.location,delta:0})}function y(S){let m=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof S=="string"?S:Wi(S);return h=h.replace(/ $/,"%20"),q(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let w={get action(){return a},get location(){return e(o,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(rd,c),l=S,()=>{o.removeEventListener(rd,c),l=null}},createHref(S){return t(o,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:v,go(S){return s.go(S)}};return w}var id;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(id||(id={}));function ig(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?xr(t):t,o=ur(r.pathname||"/",n);if(o==null)return null;let i=sh(e);sg(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let l=yg(o);s=mg(i[a],l)}return s}function sh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xt([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sh(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:pg(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of ah(i.path))o(i,s,l)}),t}function ah(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=ah(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function sg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ag=/^:[\w-]+$/,lg=3,ug=2,cg=1,dg=10,fg=-2,sd=e=>e==="*";function pg(e,t){let n=e.split("/"),r=n.length;return n.some(sd)&&(r+=fg),t&&(r+=ug),n.filter(o=>!sd(o)).reduce((o,i)=>o+(ag.test(i)?lg:i===""?cg:dg),r)}function hg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function mg(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=hl({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;i.push({params:r,pathname:Xt([o,d.pathname]),pathnameBase:Sg(Xt([o,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(o=Xt([o,d.pathnameBase]))}return i}function hl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let w=a[c]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[c];return v&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function gg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ih(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function yg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ih(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ur(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?xr(e):e;return{pathname:n?n.startsWith("/")?n:wg(n,t):t,search:kg(r),hash:Eg(o)}}function wg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lh(e,t){let n=xg(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=xr(e):(o=ho({},e),q(!o.pathname||!o.pathname.includes("?"),sa("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),sa("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),sa("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let c=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),c-=1;o.pathname=p.join("/")}a=c>=0?t[c]:"/"}let l=vg(o,a),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),Sg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Eg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Cg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ch=["post","put","patch","delete"];new Set(ch);const _g=["get",...ch];new Set(_g);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}const hs=j.createContext(null),dh=j.createContext(null),rn=j.createContext(null),ms=j.createContext(null),on=j.createContext({outlet:null,matches:[],isDataRoute:!1}),fh=j.createContext(null);function jg(e,t){let{relative:n}=t===void 0?{}:t;_o()||q(!1);let{basename:r,navigator:o}=j.useContext(rn),{hash:i,pathname:s,search:a}=gs(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Xt([r,s])),o.createHref({pathname:l,search:a,hash:i})}function _o(){return j.useContext(ms)!=null}function jo(){return _o()||q(!1),j.useContext(ms).location}function ph(e){j.useContext(rn).static||j.useLayoutEffect(e)}function Pg(){let{isDataRoute:e}=j.useContext(on);return e?Ug():Ng()}function Ng(){_o()||q(!1);let e=j.useContext(hs),{basename:t,future:n,navigator:r}=j.useContext(rn),{matches:o}=j.useContext(on),{pathname:i}=jo(),s=JSON.stringify(lh(o,n.v7_relativeSplatPath)),a=j.useRef(!1);return ph(()=>{a.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=uh(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Xt([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,s,i,e])}function Rg(){let{matches:e}=j.useContext(on),t=e[e.length-1];return t?t.params:{}}function gs(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(rn),{matches:o}=j.useContext(on),{pathname:i}=jo(),s=JSON.stringify(lh(o,r.v7_relativeSplatPath));return j.useMemo(()=>uh(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Tg(e,t){return Og(e,t)}function Og(e,t,n,r){_o()||q(!1);let{navigator:o}=j.useContext(rn),{matches:i}=j.useContext(on),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=jo(),d;if(t){var c;let S=typeof t=="string"?xr(t):t;l==="/"||(c=S.pathname)!=null&&c.startsWith(l)||q(!1),d=S}else d=u;let p=d.pathname||"/",v=p;if(l!=="/"){let S=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=ig(e,{pathname:v}),w=$g(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Xt([l,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Xt([l,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&w?j.createElement(ms.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mt.Pop}},w):w}function bg(){let e=Mg(),t=Cg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,null)}const Ig=j.createElement(bg,null);class zg extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(on.Provider,{value:this.props.routeContext},j.createElement(fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lg(e){let{routeContext:t,match:n,children:r}=e,o=j.useContext(hs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(on.Provider,{value:t},r)}function $g(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||q(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let c=s[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:p,errors:v}=n,y=c.route.loader&&p[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,c,p)=>{let v,y=!1,w=null,S=null;n&&(v=a&&c.route.id?a[c.route.id]:void 0,w=c.route.errorElement||Ig,l&&(u<0&&p===0?(Wg("route-fallback",!1),y=!0,S=null):u===p&&(y=!0,S=c.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,p+1)),h=()=>{let g;return v?g=w:y?g=S:c.route.Component?g=j.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,j.createElement(Lg,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?j.createElement(zg,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var hh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hh||{}),Bi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bi||{});function Ag(e){let t=j.useContext(hs);return t||q(!1),t}function Dg(e){let t=j.useContext(dh);return t||q(!1),t}function Fg(e){let t=j.useContext(on);return t||q(!1),t}function mh(e){let t=Fg(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function Mg(){var e;let t=j.useContext(fh),n=Dg(Bi.UseRouteError),r=mh(Bi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ug(){let{router:e}=Ag(hh.UseNavigateStable),t=mh(Bi.UseNavigateStable),n=j.useRef(!1);return ph(()=>{n.current=!0}),j.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,mo({fromRouteId:t},i)))},[e,t])}const ad={};function Wg(e,t,n){!t&&!ad[e]&&(ad[e]=!0)}function bt(e){q(!1)}function Bg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Mt.Pop,navigator:i,static:s=!1,future:a}=e;_o()&&q(!1);let l=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:l,navigator:i,static:s,future:mo({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=xr(r));let{pathname:d="/",search:c="",hash:p="",state:v=null,key:y="default"}=r,w=j.useMemo(()=>{let S=ur(d,l);return S==null?null:{location:{pathname:S,search:c,hash:p,state:v,key:y},navigationType:o}},[l,d,c,p,v,y,o]);return w==null?null:j.createElement(rn.Provider,{value:u},j.createElement(ms.Provider,{children:n,value:w}))}function Hg(e){let{children:t,location:n}=e;return Tg(ml(t),n)}new Promise(()=>{});function ml(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,o)=>{if(!j.isValidElement(r))return;let i=[...t,o];if(r.type===j.Fragment){n.push.apply(n,ml(r.props.children,i));return}r.type!==bt&&q(!1),!r.props.index||!r.props.children||q(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ml(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hi.apply(this,arguments)}function gh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Vg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kg(e,t){return e.button===0&&(!t||t==="_self")&&!Vg(e)}const Gg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Zg=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Xg="6";try{window.__reactRouterVersion=Xg}catch{}const Yg=j.createContext({isTransitioning:!1}),Jg="startTransition",ld=Vm[Jg];function Qg(e){let{basename:t,children:n,future:r,window:o}=e,i=j.useRef();i.current==null&&(i.current=ng({window:o,v5Compat:!0}));let s=i.current,[a,l]=j.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=j.useCallback(c=>{u&&ld?ld(()=>l(c)):l(c)},[l,u]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.createElement(Bg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const qg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ey=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ty=j.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=t,p=gh(t,Gg),{basename:v}=j.useContext(rn),y,w=!1;if(typeof u=="string"&&ey.test(u)&&(y=u,qg))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=ur(x.pathname,v);x.origin===g.origin&&k!=null?u=k+x.search+x.hash:w=!0}catch{}let S=jg(u,{relative:o}),m=ry(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:o,unstable_viewTransition:c});function h(g){r&&r(g),g.defaultPrevented||m(g)}return j.createElement("a",Hi({},p,{href:y||S,onClick:w||i?r:h,ref:n,target:l}))}),Pe=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:l,unstable_viewTransition:u,children:d}=t,c=gh(t,Zg),p=gs(l,{relative:c.relative}),v=jo(),y=j.useContext(dh),{navigator:w,basename:S}=j.useContext(rn),m=y!=null&&oy(p)&&u===!0,h=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,g=v.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(g=g.toLowerCase(),x=x?x.toLowerCase():null,h=h.toLowerCase()),x&&S&&(x=ur(x,S)||x);const k=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let _=g===h||!s&&g.startsWith(h)&&g.charAt(k)==="/",E=x!=null&&(x===h||!s&&x.startsWith(h)&&x.charAt(h.length)==="/"),P={isActive:_,isPending:E,isTransitioning:m},I=_?r:void 0,O;typeof i=="function"?O=i(P):O=[i,_?"active":null,E?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let ee=typeof a=="function"?a(P):a;return j.createElement(ty,Hi({},c,{"aria-current":I,className:O,ref:n,style:ee,to:l,unstable_viewTransition:u}),typeof d=="function"?d(P):d)});var gl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gl||(gl={}));var ud;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ud||(ud={}));function ny(e){let t=j.useContext(hs);return t||q(!1),t}function ry(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Pg(),u=jo(),d=gs(e,{relative:s});return j.useCallback(c=>{if(Kg(c,n)){c.preventDefault();let p=r!==void 0?r:Wi(u)===Wi(d);l(e,{replace:p,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[u,l,d,r,o,n,e,i,s,a])}function oy(e,t){t===void 0&&(t={});let n=j.useContext(Yg);n==null&&q(!1);let{basename:r}=ny(gl.useViewTransitionState),o=gs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=ur(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=ur(n.nextLocation.pathname,r)||n.nextLocation.pathname;return hl(o.pathname,s)!=null||hl(o.pathname,i)!=null}var fe=function(){return fe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fe.apply(this,arguments)};function cr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var K="-ms-",Xr="-moz-",M="-webkit-",yh="comm",ys="rule",Pu="decl",iy="@import",vh="@keyframes",sy="@layer",wh=Math.abs,Nu=String.fromCharCode,yl=Object.assign;function ay(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function xh(e){return e.trim()}function yt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function ui(e,t,n){return e.indexOf(t,n)}function de(e,t){return e.charCodeAt(t)|0}function dr(e,t,n){return e.slice(t,n)}function it(e){return e.length}function Sh(e){return e.length}function Fr(e,t){return t.push(e),e}function ly(e,t){return e.map(t).join("")}function cd(e,t){return e.filter(function(n){return!yt(n,t)})}var vs=1,fr=1,kh=0,Ge=0,re=0,Sr="";function ws(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:vs,column:fr,length:s,return:"",siblings:a}}function It(e,t){return yl(ws("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function In(e){for(;e.root;)e=It(e.root,{children:[e]});Fr(e,e.siblings)}function uy(){return re}function cy(){return re=Ge>0?de(Sr,--Ge):0,fr--,re===10&&(fr=1,vs--),re}function tt(){return re=Ge<kh?de(Sr,Ge++):0,fr++,re===10&&(fr=1,vs++),re}function kn(){return de(Sr,Ge)}function ci(){return Ge}function xs(e,t){return dr(Sr,e,t)}function vl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dy(e){return vs=fr=1,kh=it(Sr=e),Ge=0,[]}function fy(e){return Sr="",e}function aa(e){return xh(xs(Ge-1,wl(e===91?e+2:e===40?e+1:e)))}function py(e){for(;(re=kn())&&re<33;)tt();return vl(e)>2||vl(re)>3?"":" "}function hy(e,t){for(;--t&&tt()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return xs(e,ci()+(t<6&&kn()==32&&tt()==32))}function wl(e){for(;tt();)switch(re){case e:return Ge;case 34:case 39:e!==34&&e!==39&&wl(re);break;case 40:e===41&&wl(e);break;case 92:tt();break}return Ge}function my(e,t){for(;tt()&&e+re!==57;)if(e+re===84&&kn()===47)break;return"/*"+xs(t,Ge-1)+"*"+Nu(e===47?e:tt())}function gy(e){for(;!vl(kn());)tt();return xs(e,Ge)}function yy(e){return fy(di("",null,null,null,[""],e=dy(e),0,[0],e))}function di(e,t,n,r,o,i,s,a,l){for(var u=0,d=0,c=s,p=0,v=0,y=0,w=1,S=1,m=1,h=0,g="",x=o,k=i,_=r,E=g;S;)switch(y=h,h=tt()){case 40:if(y!=108&&de(E,c-1)==58){ui(E+=L(aa(h),"&","&\f"),"&\f",wh(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=aa(h);break;case 9:case 10:case 13:case 32:E+=py(y);break;case 92:E+=hy(ci()-1,7);continue;case 47:switch(kn()){case 42:case 47:Fr(vy(my(tt(),ci()),t,n,l),l);break;default:E+="/"}break;case 123*w:a[u++]=it(E)*m;case 125*w:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:m==-1&&(E=L(E,/\f/g,"")),v>0&&it(E)-c&&Fr(v>32?fd(E+";",r,n,c-1,l):fd(L(E," ","")+";",r,n,c-2,l),l);break;case 59:E+=";";default:if(Fr(_=dd(E,t,n,u,d,o,a,g,x=[],k=[],c,i),i),h===123)if(d===0)di(E,t,_,_,x,i,c,a,k);else switch(p===99&&de(E,3)===110?100:p){case 100:case 108:case 109:case 115:di(e,_,_,r&&Fr(dd(e,_,_,0,0,o,a,g,o,x=[],c,k),k),o,k,c,a,r?x:k);break;default:di(E,_,_,_,[""],k,0,a,k)}}u=d=v=0,w=m=1,g=E="",c=s;break;case 58:c=1+it(E),v=y;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&cy()==125)continue}switch(E+=Nu(h),h*w){case 38:m=d>0?1:(E+="\f",-1);break;case 44:a[u++]=(it(E)-1)*m,m=1;break;case 64:kn()===45&&(E+=aa(tt())),p=kn(),d=c=it(g=E+=gy(ci())),h++;break;case 45:y===45&&it(E)==2&&(w=0)}}return i}function dd(e,t,n,r,o,i,s,a,l,u,d,c){for(var p=o-1,v=o===0?i:[""],y=Sh(v),w=0,S=0,m=0;w<r;++w)for(var h=0,g=dr(e,p+1,p=wh(S=s[w])),x=e;h<y;++h)(x=xh(S>0?v[h]+" "+g:L(g,/&\f/g,v[h])))&&(l[m++]=x);return ws(e,t,n,o===0?ys:a,l,u,d,c)}function vy(e,t,n,r){return ws(e,t,n,yh,Nu(uy()),dr(e,2,-2),0,r)}function fd(e,t,n,r,o){return ws(e,t,n,Pu,dr(e,0,r),dr(e,r+1,-1),r,o)}function Eh(e,t,n){switch(ay(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return Xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Xr+e+K+e+e;case 5936:switch(de(e,t+11)){case 114:return M+e+K+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+K+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+K+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+K+e+e;case 6165:return M+e+K+"flex-"+e+e;case 5187:return M+e+L(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return M+e+K+"flex-item-"+L(e,/flex-|-self/g,"")+(yt(e,/flex-|baseline/)?"":K+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return M+e+K+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+K+L(e,"shrink","negative")+e;case 5292:return M+e+K+L(e,"basis","preferred-size")+e;case 6060:return M+"box-"+L(e,"-grow","")+M+e+K+L(e,"grow","positive")+e;case 4554:return M+L(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!yt(e,/flex-|baseline/))return K+"grid-column-align"+dr(e,t)+e;break;case 2592:case 3360:return K+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,yt(r.props,/grid-\w+-end/)})?~ui(e+(n=n[t].value),"span",0)?e:K+L(e,"-start","")+e+K+"grid-row-span:"+(~ui(n,"span",0)?yt(n,/\d+/):+yt(n,/\d+/)-+yt(e,/\d+/))+";":K+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return yt(r.props,/grid-\w+-start/)})?e:K+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Xr+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ui(e,"stretch",0)?Eh(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,l,u){return K+o+":"+i+u+(s?K+o+"-span:"+(a?l:+l-+i)+u:"")+e});case 4949:if(de(e,t+6)===121)return L(e,":",":"+M)+e;break;case 6444:switch(de(e,de(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(de(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+K+"$2box$3")+e;case 100:return L(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Vi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function wy(e,t,n,r){switch(e.type){case sy:if(e.children.length)break;case iy:case Pu:return e.return=e.return||e.value;case yh:return"";case vh:return e.return=e.value+"{"+Vi(e.children,r)+"}";case ys:if(!it(e.value=e.props.join(",")))return""}return it(n=Vi(e.children,r))?e.return=e.value+"{"+n+"}":""}function xy(e){var t=Sh(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function Sy(e){return function(t){t.root||(t=t.return)&&e(t)}}function ky(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pu:e.return=Eh(e.value,e.length,n);return;case vh:return Vi([It(e,{value:L(e.value,"@","@"+M)})],r);case ys:if(e.length)return ly(n=e.props,function(o){switch(yt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":In(It(e,{props:[L(o,/:(read-\w+)/,":"+Xr+"$1")]})),In(It(e,{props:[o]})),yl(e,{props:cd(n,r)});break;case"::placeholder":In(It(e,{props:[L(o,/:(plac\w+)/,":"+M+"input-$1")]})),In(It(e,{props:[L(o,/:(plac\w+)/,":"+Xr+"$1")]})),In(It(e,{props:[L(o,/:(plac\w+)/,K+"input-$1")]})),In(It(e,{props:[o]})),yl(e,{props:cd(n,r)});break}return""})}}var Ey={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ie={},pr=typeof process<"u"&&Ie!==void 0&&(Ie.REACT_APP_SC_ATTR||Ie.SC_ATTR)||"data-styled",Ch="active",_h="data-styled-version",Ss="6.1.8",Ru=`/*!sc*/
`,Tu=typeof window<"u"&&"HTMLElement"in window,Cy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==""?Ie.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ie.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.SC_DISABLE_SPEEDY!==void 0&&Ie.SC_DISABLE_SPEEDY!==""&&Ie.SC_DISABLE_SPEEDY!=="false"&&Ie.SC_DISABLE_SPEEDY),_y={},ks=Object.freeze([]),hr=Object.freeze({});function jh(e,t,n){return n===void 0&&(n=hr),e.theme!==n.theme&&e.theme||t||n.theme}var Ph=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Py=/(^-|-$)/g;function pd(e){return e.replace(jy,"-").replace(Py,"")}var Ny=/(a)(d)/gi,Zo=52,hd=function(e){return String.fromCharCode(e+(e>25?39:97))};function xl(e){var t,n="";for(t=Math.abs(e);t>Zo;t=t/Zo|0)n=hd(t%Zo)+n;return(hd(t%Zo)+n).replace(Ny,"$1-$2")}var la,Nh=5381,Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Rh=function(e){return Xn(Nh,e)};function Ou(e){return xl(Rh(e)>>>0)}function Ry(e){return e.displayName||e.name||"Component"}function ua(e){return typeof e=="string"&&!0}var Th=typeof Symbol=="function"&&Symbol.for,Oh=Th?Symbol.for("react.memo"):60115,Ty=Th?Symbol.for("react.forward_ref"):60112,Oy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},by={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Iy=((la={})[Ty]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},la[Oh]=bh,la);function md(e){return("type"in(t=e)&&t.type.$$typeof)===Oh?bh:"$$typeof"in e?Iy[e.$$typeof]:Oy;var t}var zy=Object.defineProperty,Ly=Object.getOwnPropertyNames,gd=Object.getOwnPropertySymbols,$y=Object.getOwnPropertyDescriptor,Ay=Object.getPrototypeOf,yd=Object.prototype;function Ih(e,t,n){if(typeof t!="string"){if(yd){var r=Ay(t);r&&r!==yd&&Ih(e,r,n)}var o=Ly(t);gd&&(o=o.concat(gd(t)));for(var i=md(e),s=md(t),a=0;a<o.length;++a){var l=o[a];if(!(l in by||n&&n[l]||s&&l in s||i&&l in i)){var u=$y(t,l);try{zy(e,l,u)}catch{}}}}return e}function Nn(e){return typeof e=="function"}function bu(e){return typeof e=="object"&&"styledComponentId"in e}function vn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ki(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function go(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sl(e,t,n){if(n===void 0&&(n=!1),!n&&!go(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sl(e[r],t[r]);else if(go(t))for(var r in t)e[r]=Sl(e[r],t[r]);return e}function Iu(e,t){Object.defineProperty(e,"toString",{value:t})}function Rn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Dy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Rn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Ru);return n},e}(),fi=new Map,Gi=new Map,pi=1,Xo=function(e){if(fi.has(e))return fi.get(e);for(;Gi.has(pi);)pi++;var t=pi++;return fi.set(e,t),Gi.set(t,e),t},Fy=function(e,t){pi=t+1,fi.set(e,t),Gi.set(t,e)},My="style[".concat(pr,"][").concat(_h,'="').concat(Ss,'"]'),Uy=new RegExp("^".concat(pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wy=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},By=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ru),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var l=a.match(Uy);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Fy(d,u),Wy(e,d,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function Hy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var zh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(pr,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(pr,Ch),r.setAttribute(_h,Ss);var s=Hy();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Vy=function(){function e(t){this.element=zh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Rn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ky=function(){function e(t){this.element=zh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Gy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vd=Tu,Zy={isServer:!Tu,useCSSOMInjection:!Cy},Zi=function(){function e(t,n,r){t===void 0&&(t=hr),n===void 0&&(n={});var o=this;this.options=fe(fe({},Zy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Tu&&vd&&(vd=!1,function(i){for(var s=document.querySelectorAll(My),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(pr)!==Ch&&(By(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Iu(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",u=function(c){var p=function(m){return Gi.get(m)}(c);if(p===void 0)return"continue";var v=i.names.get(p),y=s.getGroup(c);if(v===void 0||y.length===0)return"continue";var w="".concat(pr,".g").concat(c,'[id="').concat(p,'"]'),S="";v!==void 0&&v.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),l+="".concat(y).concat(w,'{content:"').concat(S,'"}').concat(Ru)},d=0;d<a;d++)u(d);return l}(o)})}return e.registerId=function(t){return Xo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(fe(fe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Gy(o):r?new Vy(o):new Ky(o)}(this.options),new Dy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Xo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Xy=/&/g,Yy=/^\s*\/\/.*$/gm;function Lh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Lh(n.children,t)),n})}function Jy(e){var t,n,r,o=e===void 0?hr:e,i=o.options,s=i===void 0?hr:i,a=o.plugins,l=a===void 0?ks:a,u=function(p,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===ys&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Xy,n).replace(r,u))}),s.prefix&&d.push(ky),d.push(wy);var c=function(p,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(Yy,""),m=yy(y||v?"".concat(y," ").concat(v," { ").concat(S," }"):S);s.namespace&&(m=Lh(m,s.namespace));var h=[];return Vi(m,xy(d.concat(Sy(function(g){return h.push(g)})))),h};return c.hash=l.length?l.reduce(function(p,v){return v.name||Rn(15),Xn(p,v.name)},Nh).toString():"",c}var Qy=new Zi,kl=Jy(),$h=ie.createContext({shouldForwardProp:void 0,styleSheet:Qy,stylis:kl});$h.Consumer;ie.createContext(void 0);function El(){return j.useContext($h)}var Ah=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=kl);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Iu(this,function(){throw Rn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=kl),this.name+t.hash},e}(),qy=function(e){return e>="A"&&e<="Z"};function wd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;qy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Dh=function(e){return e==null||e===!1||e===""},Fh=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Dh(i)&&(Array.isArray(i)&&i.isCss||Nn(i)?r.push("".concat(wd(o),":"),i,";"):go(i)?r.push.apply(r,cr(cr(["".concat(o," {")],Fh(i),!1),["}"],!1)):r.push("".concat(wd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ey||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Yt(e,t,n,r){if(Dh(e))return[];if(bu(e))return[".".concat(e.styledComponentId)];if(Nn(e)){if(!Nn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Yt(o,t,n,r)}var i;return e instanceof Ah?n?(e.inject(n,r),[e.getName(r)]):[e]:go(e)?Fh(e):Array.isArray(e)?Array.prototype.concat.apply(ks,e.map(function(s){return Yt(s,t,n,r)})):[e.toString()]}function Mh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nn(n)&&!bu(n))return!1}return!0}var ev=Rh(Ss),tv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Mh(t),this.componentId=n,this.baseHash=Xn(ev,n),this.baseStyle=r,Zi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=vn(o,this.staticRulesId);else{var i=Ki(Yt(this.rules,t,n,r)),s=xl(Xn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=vn(o,s),this.staticRulesId=s}else{for(var l=Xn(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var p=Ki(Yt(c,t,n,r));l=Xn(l,p+d),u+=p}}if(u){var v=xl(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=vn(o,v)}}return o},e}(),yo=ie.createContext(void 0);yo.Consumer;function nv(e){var t=ie.useContext(yo),n=j.useMemo(function(){return function(r,o){if(!r)throw Rn(14);if(Nn(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw Rn(8);return o?fe(fe({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?ie.createElement(yo.Provider,{value:n},e.children):null}var ca={};function rv(e,t,n){var r=bu(e),o=e,i=!ua(e),s=t.attrs,a=s===void 0?ks:s,l=t.componentId,u=l===void 0?function(x,k){var _=typeof x!="string"?"sc":pd(x);ca[_]=(ca[_]||0)+1;var E="".concat(_,"-").concat(Ou(Ss+_+ca[_]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):l,d=t.displayName,c=d===void 0?function(x){return ua(x)?"styled.".concat(x):"Styled(".concat(Ry(x),")")}(e):d,p=t.displayName&&t.componentId?"".concat(pd(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(x,k){return w(x,k)&&S(x,k)}}else y=w}var m=new tv(n,p,r?o.componentStyle:void 0);function h(x,k){return function(_,E,P){var I=_.attrs,O=_.componentStyle,ee=_.defaultProps,sn=_.foldedComponentIds,an=_.styledComponentId,Ro=_.target,bs=ie.useContext(yo),Er=El(),ln=_.shouldForwardProp||Er.shouldForwardProp,R=jh(E,bs,ee)||hr,b=function(Nt,be,ht){for(var Cr,cn=fe(fe({},be),{className:void 0,theme:ht}),Is=0;Is<Nt.length;Is+=1){var To=Nn(Cr=Nt[Is])?Cr(cn):Cr;for(var Rt in To)cn[Rt]=Rt==="className"?vn(cn[Rt],To[Rt]):Rt==="style"?fe(fe({},cn[Rt]),To[Rt]):To[Rt]}return be.className&&(cn.className=vn(cn.className,be.className)),cn}(I,E,R),z=b.as||Ro,W={};for(var B in b)b[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&b.theme===R||(B==="forwardedAs"?W.as=b.forwardedAs:ln&&!ln(B,z)||(W[B]=b[B]));var un=function(Nt,be){var ht=El(),Cr=Nt.generateAndInjectStyles(be,ht.styleSheet,ht.stylis);return Cr}(O,b),Ze=vn(sn,an);return un&&(Ze+=" "+un),b.className&&(Ze+=" "+b.className),W[ua(z)&&!Ph.has(z)?"class":"className"]=Ze,W.ref=P,j.createElement(z,W)}(g,x,k)}h.displayName=c;var g=ie.forwardRef(h);return g.attrs=v,g.componentStyle=m,g.displayName=c,g.shouldForwardProp=y,g.foldedComponentIds=r?vn(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=p,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(k){for(var _=[],E=1;E<arguments.length;E++)_[E-1]=arguments[E];for(var P=0,I=_;P<I.length;P++)Sl(k,I[P],!0);return k}({},o.defaultProps,x):x}}),Iu(g,function(){return".".concat(g.styledComponentId)}),i&&Ih(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function xd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Sd=function(e){return Object.assign(e,{isCss:!0})};function zu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Nn(e)||go(e))return Sd(Yt(xd(ks,cr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Yt(r):Sd(Yt(xd(r,t)))}function Cl(e,t,n){if(n===void 0&&(n=hr),!t)throw Rn(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,zu.apply(void 0,cr([o],i,!1)))};return r.attrs=function(o){return Cl(e,t,fe(fe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Cl(e,t,fe(fe({},n),o))},r}var Uh=function(e){return Cl(rv,e)},F=Uh;Ph.forEach(function(e){F[e]=Uh(e)});var ov=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Mh(t),Zi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ki(Yt(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Zi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function iv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zu.apply(void 0,cr([e],t,!1)),o="sc-global-".concat(Ou(JSON.stringify(r))),i=new ov(r,o),s=function(l){var u=El(),d=ie.useContext(yo),c=ie.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(c,l,u.styleSheet,d,u.stylis),ie.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,l,u.styleSheet,d,u.stylis),function(){return i.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,c,p){if(i.isStatic)i.renderStyles(l,_y,d,p);else{var v=fe(fe({},u),{theme:jh(u,c,s.defaultProps)});i.renderStyles(l,v,d,p)}}return ie.memo(s)}function mr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ki(zu.apply(void 0,cr([e],t,!1))),o=Ou(r);return new Ah(o,r)}const qt=F.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({theme:e})=>e.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`,Wh=({myData:e})=>{const{name:t,images:n}=e;return f.jsx(sv,{children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"grid grid-two-column",children:[f.jsxs("div",{className:"hero-section-data",children:[f.jsx("p",{className:"intro-data",children:"Welcome to"}),f.jsx("h1",{children:t}),f.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea officiis velit quam ipsa? Non perferendis distinctio quod repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit."}),f.jsx(Pe,{to:"/",children:f.jsx(qt,{children:"Show Now"})})]}),f.jsx("div",{className:"hero-section-image",children:f.jsx("figure",{children:f.jsx("img",{src:n,alt:"hero-section-photo",className:"img-style"})})})]})})})},sv=F.section`
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
  }

  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
  }

  figure::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .grid {
      gap: 5rem;
    }

    .grid-two-column {
      grid-template-columns: 1fr;
    }

    figure::after {
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`,av=()=>f.jsx(uv,{className:"brand-section",children:f.jsxs("div",{className:"container",children:[f.jsx("h3",{children:"Trusted By 1000+ Companies"}),f.jsxs("div",{className:"brand-section-slider",children:[f.jsx("div",{className:"slide",children:f.jsx("img",{src:"https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png",alt:"trusted-brands"})}),f.jsx("div",{className:"slide",children:f.jsx("img",{src:"https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png",alt:"trusted-brands"})}),f.jsx("div",{className:"slide",children:f.jsx("img",{src:"https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png",alt:"trusted-brands"})}),f.jsx("div",{className:"slide",children:f.jsx("img",{src:"https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png",alt:"trusted-brands"})}),f.jsx("div",{className:"slide",children:f.jsx("img",{src:"https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png",alt:"trusted-brands"})})]})]})}),lv=mr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`,uv=F.section`
  padding: 5rem 0;
  background-color: ${({theme:e})=>e.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({theme:e})=>e.colors.text};
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .brand-section-slider {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .slide {
    margin-bottom: 2rem;
    animation: ${lv} 2s infinite;
    transition: transform 0.3s ease;
    cursor: pointer;
    flex: 1 1 15rem; /* Add flex-grow to adjust size */
    display: flex; /* Center the images */
    justify-content: center;
  }

  img {
    width: 100%;
    max-width: 15rem;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    padding: 3rem 0;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    .container {
      padding: 0 1rem;
    }

    .brand-section-slider {
      flex-direction: column; /* Change direction to column */
      align-items: center; /* Center the slides */
    }

    .slide {
      margin-bottom: 1.5rem; /* Adjust spacing */
      width: 100%;
      max-width: 20rem; /* Ensure images don't overflow */
    }
  }
`;var Bh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kd=ie.createContext&&ie.createContext(Bh),cv=["attr","size","title"];function dv(e,t){if(e==null)return{};var n=fv(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}function Ed(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Yi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ed(Object(n),!0).forEach(function(r){pv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ed(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pv(e,t,n){return t=hv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hv(e){var t=mv(e,"string");return typeof t=="symbol"?t:String(t)}function mv(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hh(e){return e&&e.map((t,n)=>ie.createElement(t.tag,Yi({key:n},t.attr),Hh(t.child)))}function se(e){return t=>ie.createElement(gv,Xi({attr:Yi({},e.attr)},t),Hh(e.child))}function gv(e){var t=n=>{var{attr:r,size:o,title:i}=e,s=dv(e,cv),a=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ie.createElement("svg",Xi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Yi(Yi({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&ie.createElement("title",null,i),e.children)};return kd!==void 0?ie.createElement(kd.Consumer,null,n=>t(n)):t(Bh)}function yv(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M3 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]},{tag:"path",attr:{d:"M15 15m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]},{tag:"path",attr:{d:"M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"},child:[]},{tag:"path",attr:{d:"M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"},child:[]}]})(e)}function _l(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"},child:[]},{tag:"path",attr:{d:"M3 9l4 0"},child:[]}]})(e)}function Vh(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"},child:[]}]})(e)}function vv(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258 21.89c-.5 0-1.2 0-1.8.12-4.6.85-10.1 5.1-13.7 14.81-3.8 9.7-4.6 23.53-1.3 38.34 3.4 14.63 10.4 27.24 18.2 34.94 7.6 7.7 14.5 9.8 19.1 9 4.8-.7 10.1-5.1 13.7-14.7 3.8-9.64 4.8-23.66 1.4-38.35-3.5-14.8-10.4-27.29-18.2-34.94-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9-15.6 6.8-27.6 15.9-34.2 24.5-6.6 8.3-7.2 14.6-5.1 18.3 2.2 3.7 8.3 7.2 20 7.7 11.7.7 27.5-2.2 43-8.8 15.5-6.7 27.7-15.9 34.3-24.3 6.6-8.3 7.1-14.8 5-18.5-2.1-3.8-8.3-7.1-20-7.5-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3-11.8 3-18.6 8.4-20.8 14.9-2.5 6.5 0 14.3 7.8 22.7 8.2 8.2 21.7 16.1 38.5 20.5 16.7 4.4 32.8 4.3 44.8 1.1 12.1-3.1 18.9-8.6 21.1-15 2.3-6.5 0-14.2-8.1-22.7-7.9-8.2-21.4-16.1-38.2-20.4-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7 54.7-28.5-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6-16.1-4.4zm92.6 10.8l-70.5 37.4 14.5 18.7 74.5-44.6-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8 3.4 2.1 10.7 2.9 19.8 2.9 24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z"},child:[]}]})(e)}function wv(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"},child:[]}]})(e)}const xv=()=>f.jsx(kv,{children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"grid grid-three-column",children:[f.jsx("div",{className:"services-1",children:f.jsxs("div",{children:[f.jsx(_l,{className:"icon"}),f.jsx("h3",{children:"Super Fast and Free Delivery"})]})}),f.jsxs("div",{className:"services-2",children:[f.jsxs("div",{children:[f.jsx(Vh,{className:"icon"}),f.jsx("h3",{children:"Non-contact Shipping"})]}),f.jsxs("div",{children:[f.jsx(vv,{className:"icon"}),f.jsx("h3",{children:"Money-back Guaranteed"})]})]}),f.jsx("div",{className:"services-3",children:f.jsxs("div",{children:[f.jsx(wv,{className:"icon"}),f.jsx("h3",{children:"Super Secure Payment System"})]})})]})})}),Sv=mr`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,kv=F.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    gap: 4rem;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .services-1,
  .services-2,
  .services-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${({theme:e})=>e.colors.bg};
    text-align: center;
    border-radius: 2rem;
    padding: 3rem;
    position: relative;
    overflow: hidden;
    animation: ${Sv} 0.5s ease-in-out;
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
    color: ${({theme:e})=>e.colors.text};
  }

  .icon {
    font-size: 3.2rem;
    width: 8rem;
    height: 8rem;
    padding: 1.6rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
    margin-bottom: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .container {
      padding: 0 1rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr;
    }

    .services-1,
    .services-2,
    .services-3 {
      margin-bottom: 4rem;
    }
  }
`;function Ev(e){return se({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(e)}function Cv(e){return se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function _v(e){return se({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Kh(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function jv(e){return se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Pv(e){return se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Nv(e){return se({tag:"svg",attr:{viewBox:"0 0 536 512"},child:[{tag:"path",attr:{d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"},child:[]}]})(e)}function Rv(e){return se({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function Tv(e){return se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}const Ov=()=>f.jsx(f.Fragment,{children:f.jsxs(bv,{children:[f.jsx("section",{className:"contact-short"}),f.jsxs(Iv,{children:[f.jsxs(zv,{children:[f.jsxs("div",{className:"footer-about",children:[f.jsx("h3",{children:"RX Store"}),f.jsx("p",{children:"Your one-stop shop for all your pharmaceutical needs."})]}),f.jsxs("div",{className:"footer-subscribe",children:[f.jsx("h3",{children:"Subscribe to get important updates"}),f.jsxs("form",{action:"#",children:[f.jsx("input",{type:"email",name:"email",placeholder:"YOUR E-MAIL"}),f.jsx(qt,{type:"submit",children:"Subscribe"})]})]}),f.jsxs("div",{className:"footer-social",children:[f.jsx("h3",{children:"Follow Us"}),f.jsxs("div",{className:"footer-social--icons",children:[f.jsx(Ev,{className:"icons",size:24})," ",f.jsx(Cv,{className:"icons",size:24})," ",f.jsxs("a",{href:"",rel:"noopener noreferrer",children:[f.jsx(_v,{className:"icons",size:24})," "]})]})]}),f.jsxs("div",{className:"footer-contact",children:[f.jsx("h3",{children:"Call Us"}),f.jsx("h3",{children:"+919870683630"})]})]}),f.jsx(Lv,{children:f.jsxs("div",{className:"container",children:[f.jsxs("p",{children:["© ",new Date().getFullYear()," RX Store. All Rights Reserved"]}),f.jsxs("div",{children:[f.jsx(Pe,{to:"/",children:"PRIVACY POLICY"}),f.jsx(Pe,{to:"/",children:"TERMS & CONDITIONS"})]})]})})]})]})}),bv=F.section`
  /* Your existing styles here */
`,Iv=F.footer`
  background-color: ${({theme:e})=>e.colors.footer_bg};
  padding: 5rem 0;
`,zv=F.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 120rem;
  margin: auto;
  text-align: left;
  padding: 0 2rem;

  @media (max-width: ${({theme:e})=>e.media.tablet}) {
    grid-template-columns: 1fr;
  }

  h3 {
    color: ${({theme:e})=>e.colors.white}; /* White text color */
    margin-bottom: 1rem;
  }

  p {
    color: ${({theme:e})=>e.colors.white}; /* White text color */
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input[type="email"] {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: 5px;
      background-color: ${({theme:e})=>e.colors.bg};
      color: ${({theme:e})=>e.colors.white}; /* White text color */
    }
  }

  .footer-social--icons {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

    a {
      font-size: 2.4rem; /* Increased font size */
      color: ${({theme:e})=>e.colors.white}; /* White text color */
      transition: color 0.3s;

      &:hover {
        color: ${({theme:e})=>e.colors.primary}; /* Adjusted color */
      }
    }
  }
`,Lv=F.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 3rem;
  padding-top: 3rem;
  color: ${({theme:e})=>e.colors.white}; /* White text color */

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
    }

    a {
      color: ${({theme:e})=>e.colors.white}; /* White text color */
      text-decoration: none;
      margin-right: 1rem;
      transition: color 0.3s;

      &:hover {
        color: ${({theme:e})=>e.colors.primary}; /* Adjusted color */
      }
    }
  }
`,ft=({price:e})=>Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(e/100),Gh=({id:e,name:t,price:n,image:r,category:o})=>f.jsx(Pe,{to:`/SingleProduct/${e}`,children:f.jsxs("div",{className:"card",children:[f.jsxs("figure",{children:[f.jsx("img",{src:r,alt:t}),f.jsx("figcaption",{className:"caption",children:o})]}),f.jsx("div",{className:"card-data",children:f.jsxs("div",{className:"card-data-flex",children:[f.jsx("h3",{children:t}),f.jsx("p",{className:"card-data--price",children:f.jsx(ft,{price:n})})]})})]})});function Zh(e,t){return function(){return e.apply(t,arguments)}}const{toString:$v}=Object.prototype,{getPrototypeOf:Lu}=Object,Es=(e=>t=>{const n=$v.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pt=e=>(e=e.toLowerCase(),t=>Es(t)===e),Cs=e=>t=>typeof t===e,{isArray:kr}=Array,vo=Cs("undefined");function Av(e){return e!==null&&!vo(e)&&e.constructor!==null&&!vo(e.constructor)&&He(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Xh=pt("ArrayBuffer");function Dv(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Xh(e.buffer),t}const Fv=Cs("string"),He=Cs("function"),Yh=Cs("number"),_s=e=>e!==null&&typeof e=="object",Mv=e=>e===!0||e===!1,hi=e=>{if(Es(e)!=="object")return!1;const t=Lu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Uv=pt("Date"),Wv=pt("File"),Bv=pt("Blob"),Hv=pt("FileList"),Vv=e=>_s(e)&&He(e.pipe),Kv=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||He(e.append)&&((t=Es(e))==="formdata"||t==="object"&&He(e.toString)&&e.toString()==="[object FormData]"))},Gv=pt("URLSearchParams"),Zv=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Po(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),kr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function Jh(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qh=e=>!vo(e)&&e!==Qh;function jl(){const{caseless:e}=qh(this)&&this||{},t={},n=(r,o)=>{const i=e&&Jh(t,o)||o;hi(t[i])&&hi(r)?t[i]=jl(t[i],r):hi(r)?t[i]=jl({},r):kr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Po(arguments[r],n);return t}const Xv=(e,t,n,{allOwnKeys:r}={})=>(Po(t,(o,i)=>{n&&He(o)?e[i]=Zh(o,n):e[i]=o},{allOwnKeys:r}),e),Yv=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Jv=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qv=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Lu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},qv=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ew=e=>{if(!e)return null;if(kr(e))return e;let t=e.length;if(!Yh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},tw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Lu(Uint8Array)),nw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},rw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ow=pt("HTMLFormElement"),iw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Cd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),sw=pt("RegExp"),em=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Po(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},aw=e=>{em(e,(t,n)=>{if(He(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(He(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lw=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return kr(e)?r(e):r(String(e).split(t)),n},uw=()=>{},cw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),da="abcdefghijklmnopqrstuvwxyz",_d="0123456789",tm={DIGIT:_d,ALPHA:da,ALPHA_DIGIT:da+da.toUpperCase()+_d},dw=(e=16,t=tm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function fw(e){return!!(e&&He(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const pw=e=>{const t=new Array(10),n=(r,o)=>{if(_s(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=kr(r)?[]:{};return Po(r,(s,a)=>{const l=n(s,o+1);!vo(l)&&(i[a]=l)}),t[o]=void 0,i}}return r};return n(e,0)},hw=pt("AsyncFunction"),mw=e=>e&&(_s(e)||He(e))&&He(e.then)&&He(e.catch),C={isArray:kr,isArrayBuffer:Xh,isBuffer:Av,isFormData:Kv,isArrayBufferView:Dv,isString:Fv,isNumber:Yh,isBoolean:Mv,isObject:_s,isPlainObject:hi,isUndefined:vo,isDate:Uv,isFile:Wv,isBlob:Bv,isRegExp:sw,isFunction:He,isStream:Vv,isURLSearchParams:Gv,isTypedArray:tw,isFileList:Hv,forEach:Po,merge:jl,extend:Xv,trim:Zv,stripBOM:Yv,inherits:Jv,toFlatObject:Qv,kindOf:Es,kindOfTest:pt,endsWith:qv,toArray:ew,forEachEntry:nw,matchAll:rw,isHTMLForm:ow,hasOwnProperty:Cd,hasOwnProp:Cd,reduceDescriptors:em,freezeMethods:aw,toObjectSet:lw,toCamelCase:iw,noop:uw,toFiniteNumber:cw,findKey:Jh,global:Qh,isContextDefined:qh,ALPHABET:tm,generateString:dw,isSpecCompliantForm:fw,toJSONObject:pw,isAsyncFn:hw,isThenable:mw};function A(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}C.inherits(A,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const nm=A.prototype,rm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rm[e]={value:e}});Object.defineProperties(A,rm);Object.defineProperty(nm,"isAxiosError",{value:!0});A.from=(e,t,n,r,o,i)=>{const s=Object.create(nm);return C.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),A.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const gw=null;function Pl(e){return C.isPlainObject(e)||C.isArray(e)}function om(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function jd(e,t,n){return e?e.concat(t).map(function(o,i){return o=om(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function yw(e){return C.isArray(e)&&!e.some(Pl)}const vw=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function js(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,S){return!C.isUndefined(S[w])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(C.isDate(y))return y.toISOString();if(!l&&C.isBlob(y))throw new A("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(y)||C.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,w,S){let m=y;if(y&&!S&&typeof y=="object"){if(C.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(C.isArray(y)&&yw(y)||(C.isFileList(y)||C.endsWith(w,"[]"))&&(m=C.toArray(y)))return w=om(w),m.forEach(function(g,x){!(C.isUndefined(g)||g===null)&&t.append(s===!0?jd([w],x,i):s===null?w:w+"[]",u(g))}),!1}return Pl(y)?!0:(t.append(jd(S,w,i),u(y)),!1)}const c=[],p=Object.assign(vw,{defaultVisitor:d,convertValue:u,isVisitable:Pl});function v(y,w){if(!C.isUndefined(y)){if(c.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));c.push(y),C.forEach(y,function(m,h){(!(C.isUndefined(m)||m===null)&&o.call(t,m,C.isString(h)?h.trim():h,w,p))===!0&&v(m,w?w.concat(h):[h])}),c.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Pd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function $u(e,t){this._pairs=[],e&&js(e,this,t)}const im=$u.prototype;im.append=function(t,n){this._pairs.push([t,n])};im.toString=function(t){const n=t?function(r){return t.call(this,r,Pd)}:Pd;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function ww(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function sm(e,t,n){if(!t)return e;const r=n&&n.encode||ww,o=n&&n.serialize;let i;if(o?i=o(t,n):i=C.isURLSearchParams(t)?t.toString():new $u(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Nd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const am={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xw=typeof URLSearchParams<"u"?URLSearchParams:$u,Sw=typeof FormData<"u"?FormData:null,kw=typeof Blob<"u"?Blob:null,Ew={isBrowser:!0,classes:{URLSearchParams:xw,FormData:Sw,Blob:kw},protocols:["http","https","file","blob","url","data"]},lm=typeof window<"u"&&typeof document<"u",Cw=(e=>lm&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),_w=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",jw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lm,hasStandardBrowserEnv:Cw,hasStandardBrowserWebWorkerEnv:_w},Symbol.toStringTag,{value:"Module"})),lt={...jw,...Ew};function Pw(e,t){return js(e,new lt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return lt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Nw(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Rw(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function um(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=n.length;return s=!s&&C.isArray(o)?o.length:s,l?(C.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!C.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&C.isArray(o[s])&&(o[s]=Rw(o[s])),!a)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,o)=>{t(Nw(r),o,n,0)}),n}return null}function Tw(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Au={transitional:am,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=C.isObject(t);if(i&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return o?JSON.stringify(um(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pw(t,this.formSerializer).toString();if((a=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return js(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Tw(t)):t}],transformResponse:[function(t){const n=this.transitional||Au.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&C.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?A.from(a,A.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:lt.classes.FormData,Blob:lt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{Au.headers[e]={}});const Du=Au,Ow=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bw=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&Ow[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Rd=Symbol("internals");function Ir(e){return e&&String(e).trim().toLowerCase()}function mi(e){return e===!1||e==null?e:C.isArray(e)?e.map(mi):String(e)}function Iw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const zw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function fa(e,t,n,r,o){if(C.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function Lw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $w(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class Ps{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,l,u){const d=Ir(l);if(!d)throw new Error("header name must be a non-empty string");const c=C.findKey(o,d);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||l]=mi(a))}const s=(a,l)=>C.forEach(a,(u,d)=>i(u,d,l));return C.isPlainObject(t)||t instanceof this.constructor?s(t,n):C.isString(t)&&(t=t.trim())&&!zw(t)?s(bw(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Ir(t),t){const r=C.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Iw(o);if(C.isFunction(n))return n.call(this,o,r);if(C.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ir(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||fa(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Ir(s),s){const a=C.findKey(r,s);a&&(!n||fa(r,r[a],a,n))&&(delete r[a],o=!0)}}return C.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||fa(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return C.forEach(this,(o,i)=>{const s=C.findKey(r,i);if(s){n[s]=mi(o),delete n[i];return}const a=t?Lw(i):String(i).trim();a!==i&&delete n[i],n[a]=mi(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Rd]=this[Rd]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Ir(s);r[a]||($w(o,s),r[a]=!0)}return C.isArray(t)?t.forEach(i):i(t),this}}Ps.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(Ps.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});C.freezeMethods(Ps);const kt=Ps;function pa(e,t){const n=this||Du,r=t||n,o=kt.from(r.headers);let i=r.data;return C.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function cm(e){return!!(e&&e.__CANCEL__)}function No(e,t,n){A.call(this,e??"canceled",A.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(No,A,{__CANCEL__:!0});function Aw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new A("Request failed with status code "+n.status,[A.ERR_BAD_REQUEST,A.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Dw=lt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];C.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),C.isString(r)&&s.push("path="+r),C.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Fw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mw(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function dm(e,t){return e&&!Fw(t)?Mw(e,t):t}const Uw=lt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const a=C.isString(s)?o(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Ww(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Bw(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[i];s||(s=u),n[o]=l,r[o]=u;let c=i,p=0;for(;c!==o;)p+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const v=d&&u-d;return v?Math.round(p*1e3/v):void 0}}function Td(e,t){let n=0;const r=Bw(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,l=r(a),u=i<=s;n=i;const d={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-i)/l:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const Hw=typeof XMLHttpRequest<"u",Vw=Hw&&function(e){return new Promise(function(n,r){let o=e.data;const i=kt.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let d;if(C.isFormData(o)){if(lt.hasStandardBrowserEnv||lt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((d=i.getContentType())!==!1){const[w,...S]=d?d.split(";").map(m=>m.trim()).filter(Boolean):[];i.setContentType([w||"multipart/form-data",...S].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+S))}const p=dm(e.baseURL,e.url);c.open(e.method.toUpperCase(),sm(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const w=kt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};Aw(function(g){n(g),u()},function(g){r(g),u()},m),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new A("Request aborted",A.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new A("Network Error",A.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||am;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new A(S,m.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,e,c)),c=null},lt.hasStandardBrowserEnv&&(a&&C.isFunction(a)&&(a=a(e)),a||a!==!1&&Uw(p))){const w=e.xsrfHeaderName&&e.xsrfCookieName&&Dw.read(e.xsrfCookieName);w&&i.set(e.xsrfHeaderName,w)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&C.forEach(i.toJSON(),function(S,m){c.setRequestHeader(m,S)}),C.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Td(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Td(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{c&&(r(!w||w.type?new No(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const y=Ww(p);if(y&&lt.protocols.indexOf(y)===-1){r(new A("Unsupported protocol "+y+":",A.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Nl={http:gw,xhr:Vw};C.forEach(Nl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Od=e=>`- ${e}`,Kw=e=>C.isFunction(e)||e===null||e===!1,fm={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!Kw(n)&&(r=Nl[(s=String(n)).toLowerCase()],r===void 0))throw new A(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(Od).join(`
`):" "+Od(i[0]):"as no adapter specified";throw new A("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Nl};function ha(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new No(null,e)}function bd(e){return ha(e),e.headers=kt.from(e.headers),e.data=pa.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),fm.getAdapter(e.adapter||Du.adapter)(e).then(function(r){return ha(e),r.data=pa.call(e,e.transformResponse,r),r.headers=kt.from(r.headers),r},function(r){return cm(r)||(ha(e),r&&r.response&&(r.response.data=pa.call(e,e.transformResponse,r.response),r.response.headers=kt.from(r.response.headers))),Promise.reject(r)})}const Id=e=>e instanceof kt?{...e}:e;function gr(e,t){t=t||{};const n={};function r(u,d,c){return C.isPlainObject(u)&&C.isPlainObject(d)?C.merge.call({caseless:c},u,d):C.isPlainObject(d)?C.merge({},d):C.isArray(d)?d.slice():d}function o(u,d,c){if(C.isUndefined(d)){if(!C.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function i(u,d){if(!C.isUndefined(d))return r(void 0,d)}function s(u,d){if(C.isUndefined(d)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d)=>o(Id(u),Id(d),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=l[d]||o,p=c(e[d],t[d],d);C.isUndefined(p)&&c!==a||(n[d]=p)}),n}const pm="1.6.8",Fu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Fu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const zd={};Fu.transitional=function(t,n,r){function o(i,s){return"[Axios v"+pm+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new A(o(s," has been removed"+(n?" in "+n:"")),A.ERR_DEPRECATED);return n&&!zd[s]&&(zd[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};function Gw(e,t,n){if(typeof e!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],l=a===void 0||s(a,i,e);if(l!==!0)throw new A("option "+i+" must be "+l,A.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new A("Unknown option "+i,A.ERR_BAD_OPTION)}}const Rl={assertOptions:Gw,validators:Fu},Ot=Rl.validators;class Ji{constructor(t){this.defaults=t,this.interceptors={request:new Nd,response:new Nd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=gr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Rl.assertOptions(r,{silentJSONParsing:Ot.transitional(Ot.boolean),forcedJSONParsing:Ot.transitional(Ot.boolean),clarifyTimeoutError:Ot.transitional(Ot.boolean)},!1),o!=null&&(C.isFunction(o)?n.paramsSerializer={serialize:o}:Rl.assertOptions(o,{encode:Ot.function,serialize:Ot.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&C.merge(i.common,i[n.method]);i&&C.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=kt.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,c=0,p;if(!l){const y=[bd.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),p=y.length,d=Promise.resolve(n);c<p;)d=d.then(y[c++],y[c++]);return d}p=a.length;let v=n;for(c=0;c<p;){const y=a[c++],w=a[c++];try{v=y(v)}catch(S){w.call(this,S);break}}try{d=bd.call(this,v)}catch(y){return Promise.reject(y)}for(c=0,p=u.length;c<p;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=gr(this.defaults,t);const n=dm(t.baseURL,t.url);return sm(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){Ji.prototype[t]=function(n,r){return this.request(gr(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(gr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Ji.prototype[t]=n(),Ji.prototype[t+"Form"]=n(!0)});const gi=Ji;class Mu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new No(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Mu(function(o){t=o}),cancel:t}}}const Zw=Mu;function Xw(e){return function(n){return e.apply(null,n)}}function Yw(e){return C.isObject(e)&&e.isAxiosError===!0}const Tl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Tl).forEach(([e,t])=>{Tl[t]=e});const Jw=Tl;function hm(e){const t=new gi(e),n=Zh(gi.prototype.request,t);return C.extend(n,gi.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return hm(gr(e,o))},n}const ne=hm(Du);ne.Axios=gi;ne.CanceledError=No;ne.CancelToken=Zw;ne.isCancel=cm;ne.VERSION=pm;ne.toFormData=js;ne.AxiosError=A;ne.Cancel=ne.CanceledError;ne.all=function(t){return Promise.all(t)};ne.spread=Xw;ne.isAxiosError=Yw;ne.mergeConfig=gr;ne.AxiosHeaders=kt;ne.formToJSON=e=>um(C.isHTMLForm(e)?new FormData(e):e);ne.getAdapter=fm.getAdapter;ne.HttpStatusCode=Jw;ne.default=ne;const Qw=(e,t)=>{switch(t.type){case"SET_LOADING":return{...e,isLoading:!0};case"SET_API_DATA":const n=t.payload.filter(r=>r.featured===!0);return{...e,isLoading:!1,Product:t.payload,featureProduct:n};case"API_ERROR":return{...e,isLoading:!1,isError:!0};case"SET_SINGLE_LOADING":return{...e,isSingleLoading:!0};case"SET_SINGLE_PRODUCT":return{...e,isSingleLoading:!1,singleProduct:t.payload};case"SET_SINGLE_ERROR":return{...e,isSingleLoading:!1,isError:!0};default:return e}},mm=j.createContext(),qw="https://api.pujakaitem.com/api/products",e2={isLoading:!1,isError:!1,Product:[],featureProduct:[],isSingleLoading:!1,singleProduct:{}},t2=({children:e})=>{const[t,n]=j.useReducer(Qw,e2),r=async i=>{n({type:"SET_LOADING"});try{const a=await(await ne.get(i)).data;n({type:"SET_API_DATA",payload:a})}catch{n({type:"API_ERROR"})}},o=async i=>{n({type:"SET_SINGLE_LOADING"});try{const a=await(await ne.get(i)).data;n({type:"SET_SINGLE_PRODUCT",payload:a})}catch{n({type:"SET_SINGLE_ERROR"})}};return j.useEffect(()=>{r(qw)},[]),f.jsx(mm.Provider,{value:{...t,getSingleProduct:o},children:e})},Ns=()=>j.useContext(mm),n2=()=>{const{isLoading:e,featureProduct:t}=Ns();return e?f.jsx("div",{children:"Loading..."}):f.jsx(r2,{className:"section",children:f.jsxs("div",{className:"container",children:[f.jsx("div",{className:"intro-data",children:"Check Now!"}),f.jsx("div",{className:"common-heading",children:"Our Feature Services"}),f.jsx("div",{className:"grid-three-column",children:t.map(n=>f.jsx(o2,{children:f.jsx(Gh,{...n})},n.id))})]})})},r2=F.section`
  padding: 9rem 0;
  background-color: ${({theme:e})=>e.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .common-heading {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2rem;
    color: ${({theme:e})=>e.colors.text};
  }

  .grid-three-column {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
`,o2=F.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }

  figure {
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: auto;
      transition: transform 0.3s ease-in-out;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .caption {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: ${({theme:e})=>e.colors.bg};
      color: ${({theme:e})=>e.colors.helper};
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      border-radius: 10px;
    }
  }

  .card-data {
    padding: 1rem;

    h3 {
      color: ${({theme:e})=>e.colors.text};
      font-size: 1.2rem;
      margin: 0;
      margin-bottom: 0.5rem;
    }

    .card-data--price {
      color: ${({theme:e})=>e.colors.helper};
      font-size: 1rem;
      margin: 0;
    }
  }
`,i2=()=>{const e={name:"RX Store",images:"Images/Storelogo.png"};return f.jsxs(f.Fragment,{children:[f.jsx(Wh,{myData:e}),";",f.jsx(n2,{}),f.jsx(xv,{}),f.jsx(av,{}),f.jsx(Ov,{})]})};function s2(e){return se({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"},child:[]}]})(e)}function a2(e){return se({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"},child:[]}]})(e)}const l2=(e,t)=>{switch(t.type){case"LOAD_FILTER_PRODUCTS":let n=t.payload.map(S=>S.price),r=Math.max(...n);return{...e,Filter_products:t.payload,all_products:t.payload,filters:{...e.filters,maxPrice:r,price:r}};case"SET_GRID_VIEW":return{...e,grid_view:!0};case"SET_LIST_VIEW":return{...e,grid_view:!1};case"GET_SORT_VALUE":let o=document.getElementById("sort"),i=o.options[o.selectedIndex].value;return{...e,sorting_value:i};case"SORTING_PRODUCTS":let s=[...e.Filter_products];return e.sorting_value&&s.sort((S,m)=>{switch(e.sorting_value){case"lowest":return S.price-m.price;case"highest":return m.price-S.price;case"a-z":return S.name.localeCompare(m.name);case"z-a":return m.name.localeCompare(S.name);default:return 0}}),{...e,Filter_products:s};case"UPDATE_FILTERS_VALUE":const{name:a,value:l}=t.payload;return{...e,filters:{...e.filters,[a]:l}};case"FILTER_PRODUCTS":let{all_products:u}=e,d=[...u];const{text:c,category:p,company:v,color:y,price:w}=e.filters;return c&&(d=d.filter(S=>S.name.toLowerCase().includes(c))),p!=="all"&&(d=d.filter(S=>S.category===p)),v!=="all"&&(d=d.filter(S=>S.company.toLowerCase()===v.toLowerCase())),y!=="all"&&(d=d.filter(S=>S.colors.includes(y))),w===0?d=d.filter(S=>S.price==w):d=d.filter(S=>S.price<=w),{...e,Filter_products:d};case"CLEAR_FILTERS":return{...e,filters:{...e.filters,text:"",category:"all",company:"all",color:"all",maxPrice:0,price:e.filters.maxPrice,minPrice:e.filters.maxPrice}};default:return e}},gm=j.createContext(),u2={Filter_products:[],all_products:[],grid_view:!1,sorting_value:"lowest",filters:{text:"",catagory:"all",company:"all",color:"all",maxPrice:0,price:0,minPrice:0}},c2=({children:e})=>{const{Product:t}=Ns(),[n,r]=j.useReducer(l2,u2),o=()=>{r({type:"GET_SORT_VALUE"})},i=u=>{let d=u.target.name,c=u.target.value;return r({type:"UPDATE_FILTERS_VALUE",payload:{name:d,value:c}})},s=()=>{r({type:"CLEAR_FILTERS"})};j.useEffect(()=>{r({type:"FILTER_PRODUCTS"}),r({type:"SORTING_PRODUCTS",payload:t})},[n.sorting_value,n.filters]),j.useEffect(()=>{console.log("Products in useEffect:",t),Array.isArray(t)?r({type:"LOAD_FILTER_PRODUCTS",payload:t}):console.error("Products is not an array:",t)},[t]);const a=()=>r({type:"SET_GRID_VIEW"}),l=()=>r({type:"SET_LIST_VIEW"});return f.jsx(gm.Provider,{value:{...n,setGridView:a,setListView:l,sorting:o,updateFilterValue:i,clearFilters:s},children:e})},Rs=()=>j.useContext(gm),d2=()=>{const{Filter_products:e,grid_view:t,setGridView:n,setListView:r,sorting:o}=Rs();return f.jsxs(f2,{className:"sort-section",children:[f.jsxs("div",{className:"sorting-list--grid",children:[f.jsx("button",{className:t?"active sort-btn":"sort-btn",onClick:n,children:f.jsx(s2,{className:"icon"})}),f.jsx("button",{className:t?" sort-btn":"active sort-btn",onClick:r,children:f.jsx(a2,{className:"icon"})})]}),f.jsx("div",{className:"product-data",children:f.jsx("p",{children:`${e.length} Product Available`})}),f.jsx("div",{className:"sort-selection",children:f.jsxs("form",{action:"#",children:[f.jsx("label",{htmlFor:"sort"}),f.jsxs("select",{name:"sort",id:"sort",className:"sort-selection--style",onClick:o,children:[f.jsx("option",{value:"highest",children:"Price(highest)"}),f.jsx("option",{value:"#",disabled:!0}),f.jsx("option",{value:"lowest",children:"Price(lowest)"}),f.jsx("option",{value:"#",disabled:!0}),f.jsx("option",{value:"a-z",children:"Price(a-z)"}),f.jsx("option",{value:"#",disabled:!0}),f.jsx("option",{value:"z-a",children:"Price(z-a)"})]})]})})]})},f2=F.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({theme:e})=>e.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`,p2=()=>{const{filters:{text:e,category:t,color:n,price:r,maxPrice:o,minPrice:i},updateFilterValue:s,all_products:a,clearFilters:l}=Rs(),u=(v,y)=>{let w=v.map(S=>S[y]);return y==="colors"&&(w=w.flat()),w=["all",...new Set(w)]},d=u(a,"category"),c=u(a,"company"),p=u(a,"colors");return f.jsxs(h2,{children:[f.jsx("div",{className:"filter-search",children:f.jsx("form",{onSubmit:v=>v.preventDefault(),children:f.jsx("input",{type:"text",name:"text",placeholder:"Search",value:e,onChange:s})})}),f.jsxs("div",{className:"filter-category",children:[f.jsx("h3",{children:"Category"}),f.jsx("div",{children:d.map((v,y)=>f.jsx("button",{type:"button",name:"category",value:v,className:v===t?"active":"",onClick:s,children:v},y))})]}),f.jsxs("div",{className:"filter-company",children:[f.jsx("h3",{children:"Company"}),f.jsx("form",{action:"#",children:f.jsx("select",{name:"company",id:"company",className:"filter-company--select",onChange:s,children:c.map((v,y)=>f.jsx("option",{value:v,name:"company",children:v},y))})})]}),f.jsxs("div",{className:"filter-colors colors",children:[f.jsx("h3",{children:"Colors"}),f.jsx("div",{className:"filter-color-style",children:p.map((v,y)=>v==="all"?f.jsx("button",{type:"button",value:v,name:"color",className:"color-all--style",onClick:s,children:"all"},y):f.jsx("button",{type:"button",value:v,name:"color",style:{backgroundColor:v},className:n===v?"btnStyle active":"btnStyle",onClick:s,children:n===v?f.jsx(Kh,{className:"checkStyle"}):null},y))})]}),f.jsxs("div",{className:"filter_price",children:[f.jsx("h3",{children:"Price"}),f.jsx("p",{children:f.jsx(ft,{price:r})}),f.jsx("input",{type:"range",name:"price",min:i,max:o,value:r,onChange:s})]}),f.jsx("div",{className:"filter-shipping",children:f.jsx(qt,{type:"button",onClick:l,children:"Clear Filters"})})]})},h2=F.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h3 {
    padding: 1rem 0;
    font-size: 1.8rem;
    color: ${({theme:e})=>e.colors.primary};
  }

  .filter-search {
    input {
      padding: 0.8rem 1rem;
      width: 100%;
      border: 1px solid ${({theme:e})=>e.colors.primary};
      border-radius: 5px;
      outline: none;
      font-size: 1rem;
      color: ${({theme:e})=>e.colors.text};
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;

      button {
        border: none;
        background-color:#26D0CE;
        color:black;
        text-transform: capitalize;
        cursor: pointer;
        padding: 0.4rem 0.8rem;
        border-radius: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
          background-color:#FF5733;
        }
      }

      .active {
        background-color:#FF5733 ;
        color: ${({theme:e})=>e.colors.white};
        border: 3px solid ${({theme:e})=>e.colors.secondary};
      }
    }
  }

  .filter-company--select {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    color: ${({theme:e})=>e.colors.text};
    border: 1px solid ${({theme:e})=>e.colors.primary};
    border-radius: 5px;
    outline: none;
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    color: black;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color:#FF5733;;
      color: ${({theme:e})=>e.colors.white};
    }
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  .btnStyle.active {
    border: 2px solid ${({theme:e})=>e.colors.primary};
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .filter_price {
    p {
      margin-bottom: 0.5rem;
      font-size: 1.4rem;
      color: ${({theme:e})=>e.colors.primary};
    }

    input {
      width: 100%;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    justify-content: center;

    .btn {
      background-color: ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.white};
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${({theme:e})=>e.colors.primaryDark};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 2rem;

    .filter-category div {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .filter-color-style {
      flex-wrap: wrap;
    }
  }
`,m2=({products:e})=>f.jsx(g2,{className:"section",children:f.jsx("div",{className:"container grid grid-three-column",children:e.map(t=>f.jsx(Gh,{...t},t.id))})}),g2=F.section`
  padding: 6rem 2rem;

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .grid-three-column {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: ${({theme:e})=>e.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }

  .card {
    background-color: ${({theme:e})=>e.colors.bg};
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    figure {
      position: relative;
      overflow: hidden;
      margin: 0;

      img {
        width: 100%;
        height: 25rem;
        object-fit: cover;
        transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

        &:hover {
          transform: scale(1.1);
          filter: brightness(80%);
        }
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      &:hover::after {
        opacity: 1;
      }
    }

    .card-data {
      padding: 2rem;
      text-align: center;

      h3 {
        color: ${({theme:e})=>e.colors.text};
        text-transform: capitalize;
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
      }

      .card-data--price {
        color: ${({theme:e})=>e.colors.helper};
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }

      .btn {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.8rem 1.6rem;
        border: 0.1rem solid ${({theme:e})=>e.colors.primary};
        background-color: transparent;
        color: ${({theme:e})=>e.colors.primary};
        text-transform: uppercase;
        font-size: 1.4rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: ${({theme:e})=>e.colors.primary};
          color: #fff;
        }
      }
    }
  }
`,y2=({products:e})=>f.jsx(v2,{className:"section",children:f.jsx("div",{className:"container grid",children:e.map(t=>{const{id:n,name:r,image:o,price:i,description:s}=t;return f.jsx("div",{className:"card grid grid-two-column",children:f.jsxs(Pe,{to:`/singleproduct/${n}`,className:"product-link",children:[f.jsx("figure",{className:"product-image",children:f.jsx("img",{src:o,alt:r})}),f.jsxs("div",{className:"card-data",children:[f.jsx("h3",{children:r}),f.jsx("p",{children:f.jsx(ft,{price:i})}),f.jsxs("p",{children:[s.slice(0,90),"..."]})]})]})},n)})})}),v2=F.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  .product-link {
    display: flex;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .product-link:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .product-image {
    width: 30%;
    overflow: hidden;
    border-radius: 1rem;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .product-link:hover & img {
      transform: scale(1.1);
    }
  }

  .card-data {
    padding: 1rem;
    width: 70%;

    h3 {
      margin: 1rem 0;
      font-weight: 300;
      font-size: 2rem;
      text-transform: capitalize;
    }

    p {
      margin-bottom: 0.5rem;
    }
  }
`,w2=()=>{const{Filter_products:e,grid_view:t}=Rs();if(t===!0)return f.jsx(m2,{products:e});if(t===!1)return f.jsx(y2,{products:e})},x2=()=>{const{Filter_products:e}=Rs();return f.jsx(S2,{children:f.jsxs("div",{className:"container grid grid-filter-column",children:[f.jsx("div",{children:f.jsx(p2,{})}),f.jsxs("section",{className:"product-view--sort",children:[f.jsx("div",{className:"sort-filter",children:f.jsx(d2,{})}),f.jsx("div",{className:"main-product",children:f.jsx(w2,{products:e})})]})]})})},S2=F.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`,k2=()=>{const{myname:e}=Ns(),t={name:"RX Ecommerce",images:"Images/Ecommercelogo.png"};return f.jsxs(f.Fragment,{children:[e,f.jsx(Wh,{myData:t})]})};var Ol=function(e,t){return Ol=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Ol(e,t)};function E2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ol(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var ue=function(){return ue=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ue.apply(this,arguments)};function C2(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function zn(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(d){try{u(r.next(d))}catch(c){s(c)}}function l(d){try{u(r.throw(d))}catch(c){s(c)}}function u(d){d.done?i(d.value):o(d.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function Ln(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function st(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Wu(e,t){return e(t={exports:{}},t.exports),t.exports}var pn=Wu(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function r(){var o=this;this.locked=new Map,this.addToLocked=function(i,s){var a=o.locked.get(i);a===void 0?s===void 0?o.locked.set(i,[]):o.locked.set(i,[s]):s!==void 0&&(a.unshift(s),o.locked.set(i,a))},this.isLocked=function(i){return o.locked.has(i)},this.lock=function(i){return new Promise(function(s,a){o.isLocked(i)?o.addToLocked(i,s):(o.addToLocked(i),s())})},this.unlock=function(i){var s=o.locked.get(i);if(s!==void 0&&s.length!==0){var a=s.pop();o.locked.set(i,s),a!==void 0&&setTimeout(a,0)}else o.locked.delete(i)}}return r.getInstance=function(){return r.instance===void 0&&(r.instance=new r),r.instance},r}();t.default=function(){return n.getInstance()}});Uu(pn);var _2=Uu(Wu(function(e,t){var n=hn&&hn.__awaiter||function(d,c,p,v){return new(p||(p=Promise))(function(y,w){function S(g){try{h(v.next(g))}catch(x){w(x)}}function m(g){try{h(v.throw(g))}catch(x){w(x)}}function h(g){g.done?y(g.value):new p(function(x){x(g.value)}).then(S,m)}h((v=v.apply(d,c||[])).next())})},r=hn&&hn.__generator||function(d,c){var p,v,y,w,S={label:0,sent:function(){if(1&y[0])throw y[1];return y[1]},trys:[],ops:[]};return w={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(w[Symbol.iterator]=function(){return this}),w;function m(h){return function(g){return function(x){if(p)throw new TypeError("Generator is already executing.");for(;S;)try{if(p=1,v&&(y=2&x[0]?v.return:x[0]?v.throw||((y=v.return)&&y.call(v),0):v.next)&&!(y=y.call(v,x[1])).done)return y;switch(v=0,y&&(x=[2&x[0],y.value]),x[0]){case 0:case 1:y=x;break;case 4:return S.label++,{value:x[1],done:!1};case 5:S.label++,v=x[1],x=[0];continue;case 7:x=S.ops.pop(),S.trys.pop();continue;default:if(y=S.trys,!((y=y.length>0&&y[y.length-1])||x[0]!==6&&x[0]!==2)){S=0;continue}if(x[0]===3&&(!y||x[1]>y[0]&&x[1]<y[3])){S.label=x[1];break}if(x[0]===6&&S.label<y[1]){S.label=y[1],y=x;break}if(y&&S.label<y[2]){S.label=y[2],S.ops.push(x);break}y[2]&&S.ops.pop(),S.trys.pop();continue}x=c.call(d,S)}catch(k){x=[6,k],v=0}finally{p=y=0}if(5&x[0])throw x[1];return{value:x[0]?x[1]:void 0,done:!0}}([h,g])}}},o=hn;Object.defineProperty(t,"__esModule",{value:!0});var i="browser-tabs-lock-key",s={key:function(d){return n(o,void 0,void 0,function(){return r(this,function(c){throw new Error("Unsupported")})})},getItem:function(d){return n(o,void 0,void 0,function(){return r(this,function(c){throw new Error("Unsupported")})})},clear:function(){return n(o,void 0,void 0,function(){return r(this,function(d){return[2,window.localStorage.clear()]})})},removeItem:function(d){return n(o,void 0,void 0,function(){return r(this,function(c){throw new Error("Unsupported")})})},setItem:function(d,c){return n(o,void 0,void 0,function(){return r(this,function(p){throw new Error("Unsupported")})})},keySync:function(d){return window.localStorage.key(d)},getItemSync:function(d){return window.localStorage.getItem(d)},clearSync:function(){return window.localStorage.clear()},removeItemSync:function(d){return window.localStorage.removeItem(d)},setItemSync:function(d,c){return window.localStorage.setItem(d,c)}};function a(d){return new Promise(function(c){return setTimeout(c,d)})}function l(d){for(var c="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",p="",v=0;v<d;v++)p+=c[Math.floor(Math.random()*c.length)];return p}var u=function(){function d(c){this.acquiredIatSet=new Set,this.storageHandler=void 0,this.id=Date.now().toString()+l(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),this.storageHandler=c,d.waiters===void 0&&(d.waiters=[])}return d.prototype.acquireLock=function(c,p){return p===void 0&&(p=5e3),n(this,void 0,void 0,function(){var v,y,w,S,m,h,g;return r(this,function(x){switch(x.label){case 0:v=Date.now()+l(4),y=Date.now()+p,w=i+"-"+c,S=this.storageHandler===void 0?s:this.storageHandler,x.label=1;case 1:return Date.now()<y?[4,a(30)]:[3,8];case 2:return x.sent(),S.getItemSync(w)!==null?[3,5]:(m=this.id+"-"+c+"-"+v,[4,a(Math.floor(25*Math.random()))]);case 3:return x.sent(),S.setItemSync(w,JSON.stringify({id:this.id,iat:v,timeoutKey:m,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,a(30)];case 4:return x.sent(),(h=S.getItemSync(w))!==null&&(g=JSON.parse(h)).id===this.id&&g.iat===v?(this.acquiredIatSet.add(v),this.refreshLockWhileAcquired(w,v),[2,!0]):[3,7];case 5:return d.lockCorrector(this.storageHandler===void 0?s:this.storageHandler),[4,this.waitForSomethingToChange(y)];case 6:x.sent(),x.label=7;case 7:return v=Date.now()+l(4),[3,1];case 8:return[2,!1]}})})},d.prototype.refreshLockWhileAcquired=function(c,p){return n(this,void 0,void 0,function(){var v=this;return r(this,function(y){return setTimeout(function(){return n(v,void 0,void 0,function(){var w,S,m;return r(this,function(h){switch(h.label){case 0:return[4,pn.default().lock(p)];case 1:return h.sent(),this.acquiredIatSet.has(p)?(w=this.storageHandler===void 0?s:this.storageHandler,(S=w.getItemSync(c))===null?(pn.default().unlock(p),[2]):((m=JSON.parse(S)).timeRefreshed=Date.now(),w.setItemSync(c,JSON.stringify(m)),pn.default().unlock(p),this.refreshLockWhileAcquired(c,p),[2])):(pn.default().unlock(p),[2])}})})},1e3),[2]})})},d.prototype.waitForSomethingToChange=function(c){return n(this,void 0,void 0,function(){return r(this,function(p){switch(p.label){case 0:return[4,new Promise(function(v){var y=!1,w=Date.now(),S=!1;function m(){if(S||(window.removeEventListener("storage",m),d.removeFromWaiting(m),clearTimeout(h),S=!0),!y){y=!0;var g=50-(Date.now()-w);g>0?setTimeout(v,g):v(null)}}window.addEventListener("storage",m),d.addToWaiting(m);var h=setTimeout(m,Math.max(0,c-Date.now()))})];case 1:return p.sent(),[2]}})})},d.addToWaiting=function(c){this.removeFromWaiting(c),d.waiters!==void 0&&d.waiters.push(c)},d.removeFromWaiting=function(c){d.waiters!==void 0&&(d.waiters=d.waiters.filter(function(p){return p!==c}))},d.notifyWaiters=function(){d.waiters!==void 0&&d.waiters.slice().forEach(function(c){return c()})},d.prototype.releaseLock=function(c){return n(this,void 0,void 0,function(){return r(this,function(p){switch(p.label){case 0:return[4,this.releaseLock__private__(c)];case 1:return[2,p.sent()]}})})},d.prototype.releaseLock__private__=function(c){return n(this,void 0,void 0,function(){var p,v,y,w;return r(this,function(S){switch(S.label){case 0:return p=this.storageHandler===void 0?s:this.storageHandler,v=i+"-"+c,(y=p.getItemSync(v))===null?[2]:(w=JSON.parse(y)).id!==this.id?[3,2]:[4,pn.default().lock(w.iat)];case 1:S.sent(),this.acquiredIatSet.delete(w.iat),p.removeItemSync(v),pn.default().unlock(w.iat),d.notifyWaiters(),S.label=2;case 2:return[2]}})})},d.lockCorrector=function(c){for(var p=Date.now()-5e3,v=c,y=[],w=0;;){var S=v.keySync(w);if(S===null)break;y.push(S),w++}for(var m=!1,h=0;h<y.length;h++){var g=y[h];if(g.includes(i)){var x=v.getItemSync(g);if(x!==null){var k=JSON.parse(x);(k.timeRefreshed===void 0&&k.timeAcquired<p||k.timeRefreshed!==void 0&&k.timeRefreshed<p)&&(v.removeItemSync(g),m=!0)}}}m&&d.notifyWaiters()},d.waiters=void 0,d}();t.default=u}));const j2={timeoutInSeconds:60},ym={name:"auth0-spa-js",version:"2.1.3"},vm=()=>Date.now();class we extends Error{constructor(t,n){super(n),this.error=t,this.error_description=n,Object.setPrototypeOf(this,we.prototype)}static fromPayload({error:t,error_description:n}){return new we(t,n)}}class Bu extends we{constructor(t,n,r,o=null){super(t,n),this.state=r,this.appState=o,Object.setPrototypeOf(this,Bu.prototype)}}class wo extends we{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,wo.prototype)}}class Hu extends wo{constructor(t){super(),this.popup=t,Object.setPrototypeOf(this,Hu.prototype)}}class Vu extends we{constructor(t){super("cancelled","Popup closed"),this.popup=t,Object.setPrototypeOf(this,Vu.prototype)}}class Ku extends we{constructor(t,n,r){super(t,n),this.mfa_token=r,Object.setPrototypeOf(this,Ku.prototype)}}class Ts extends we{constructor(t,n){super("missing_refresh_token",`Missing Refresh Token (audience: '${Ld(t,["default"])}', scope: '${Ld(n)}')`),this.audience=t,this.scope=n,Object.setPrototypeOf(this,Ts.prototype)}}function Ld(e,t=[]){return e&&!t.includes(e)?e:""}const yi=()=>window.crypto,ma=()=>{const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";let t="";return Array.from(yi().getRandomValues(new Uint8Array(43))).forEach(n=>t+=e[n%e.length]),t},$d=e=>btoa(e),bl=e=>{var{clientId:t}=e,n=st(e,["clientId"]);return new URLSearchParams((r=>Object.keys(r).filter(o=>r[o]!==void 0).reduce((o,i)=>Object.assign(Object.assign({},o),{[i]:r[i]}),{}))(Object.assign({client_id:t},n))).toString()},Ad=e=>(t=>decodeURIComponent(atob(t).split("").map(n=>"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)).join("")))(e.replace(/_/g,"/").replace(/-/g,"+")),P2=async(e,t)=>{const n=await fetch(e,t);return{ok:n.ok,json:await n.json()}},N2=async(e,t,n)=>{const r=new AbortController;let o;return t.signal=r.signal,Promise.race([P2(e,t),new Promise((i,s)=>{o=setTimeout(()=>{r.abort(),s(new Error("Timeout when executing 'fetch'"))},n)})]).finally(()=>{clearTimeout(o)})},R2=async(e,t,n,r,o,i,s)=>{return a={auth:{audience:t,scope:n},timeout:o,fetchUrl:e,fetchOptions:r,useFormData:s},l=i,new Promise(function(u,d){const c=new MessageChannel;c.port1.onmessage=function(p){p.data.error?d(new Error(p.data.error)):u(p.data),c.port1.close()},l.postMessage(a,[c.port2])});var a,l},T2=async(e,t,n,r,o,i,s=1e4)=>o?R2(e,t,n,r,s,o,i):N2(e,r,s);async function O2(e,t){var{baseUrl:n,timeout:r,audience:o,scope:i,auth0Client:s,useFormData:a}=e,l=st(e,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);const u=a?bl(l):JSON.stringify(l);return await async function(d,c,p,v,y,w,S){let m,h=null;for(let P=0;P<3;P++)try{m=await T2(d,p,v,y,w,S,c),h=null;break}catch(I){h=I}if(h)throw h;const g=m.json,{error:x,error_description:k}=g,_=st(g,["error","error_description"]),{ok:E}=m;if(!E){const P=k||`HTTP error. Unable to fetch ${d}`;throw x==="mfa_required"?new Ku(x,P,_.mfa_token):x==="missing_refresh_token"?new Ts(p,v):new we(x||"request_error",P)}return _}(`${n}/oauth/token`,r,o||"default",i,{method:"POST",body:u,headers:{"Content-Type":a?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(s||ym))}},t,a)}const Yo=(...e)=>{return(t=e.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(t))).join(" ");var t};class ut{constructor(t,n="@@auth0spajs@@",r){this.prefix=n,this.suffix=r,this.clientId=t.clientId,this.scope=t.scope,this.audience=t.audience}toKey(){return[this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(t){const[n,r,o,i]=t.split("::");return new ut({clientId:r,scope:i,audience:o},n)}static fromCacheEntry(t){const{scope:n,audience:r,client_id:o}=t;return new ut({scope:n,audience:r,clientId:o})}}class b2{set(t,n){localStorage.setItem(t,JSON.stringify(n))}get(t){const n=window.localStorage.getItem(t);if(n)try{return JSON.parse(n)}catch{return}}remove(t){localStorage.removeItem(t)}allKeys(){return Object.keys(window.localStorage).filter(t=>t.startsWith("@@auth0spajs@@"))}}class wm{constructor(){this.enclosedCache=function(){let t={};return{set(n,r){t[n]=r},get(n){const r=t[n];if(r)return r},remove(n){delete t[n]},allKeys:()=>Object.keys(t)}}()}}class I2{constructor(t,n,r){this.cache=t,this.keyManifest=n,this.nowProvider=r||vm}async setIdToken(t,n,r){var o;const i=this.getIdTokenCacheKey(t);await this.cache.set(i,{id_token:n,decodedToken:r}),await((o=this.keyManifest)===null||o===void 0?void 0:o.add(i))}async getIdToken(t){const n=await this.cache.get(this.getIdTokenCacheKey(t.clientId));if(!n&&t.scope&&t.audience){const r=await this.get(t);return!r||!r.id_token||!r.decodedToken?void 0:{id_token:r.id_token,decodedToken:r.decodedToken}}if(n)return{id_token:n.id_token,decodedToken:n.decodedToken}}async get(t,n=0){var r;let o=await this.cache.get(t.toKey());if(!o){const a=await this.getCacheKeys();if(!a)return;const l=this.matchExistingCacheKey(t,a);l&&(o=await this.cache.get(l))}if(!o)return;const i=await this.nowProvider(),s=Math.floor(i/1e3);return o.expiresAt-n<s?o.body.refresh_token?(o.body={refresh_token:o.body.refresh_token},await this.cache.set(t.toKey(),o),o.body):(await this.cache.remove(t.toKey()),void await((r=this.keyManifest)===null||r===void 0?void 0:r.remove(t.toKey()))):o.body}async set(t){var n;const r=new ut({clientId:t.client_id,scope:t.scope,audience:t.audience}),o=await this.wrapCacheEntry(t);await this.cache.set(r.toKey(),o),await((n=this.keyManifest)===null||n===void 0?void 0:n.add(r.toKey()))}async clear(t){var n;const r=await this.getCacheKeys();r&&(await r.filter(o=>!t||o.includes(t)).reduce(async(o,i)=>{await o,await this.cache.remove(i)},Promise.resolve()),await((n=this.keyManifest)===null||n===void 0?void 0:n.clear()))}async wrapCacheEntry(t){const n=await this.nowProvider();return{body:t,expiresAt:Math.floor(n/1e3)+t.expires_in}}async getCacheKeys(){var t;return this.keyManifest?(t=await this.keyManifest.get())===null||t===void 0?void 0:t.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(t){return new ut({clientId:t},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(t,n){return n.filter(r=>{var o;const i=ut.fromKey(r),s=new Set(i.scope&&i.scope.split(" ")),a=((o=t.scope)===null||o===void 0?void 0:o.split(" "))||[],l=i.scope&&a.reduce((u,d)=>u&&s.has(d),!0);return i.prefix==="@@auth0spajs@@"&&i.clientId===t.clientId&&i.audience===t.audience&&l})[0]}}class z2{constructor(t,n,r){this.storage=t,this.clientId=n,this.cookieDomain=r,this.storageKey=`a0.spajs.txs.${this.clientId}`}create(t){this.storage.save(this.storageKey,t,{daysUntilExpire:1,cookieDomain:this.cookieDomain})}get(){return this.storage.get(this.storageKey)}remove(){this.storage.remove(this.storageKey,{cookieDomain:this.cookieDomain})}}const zr=e=>typeof e=="number",L2=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],$2=e=>{if(!e.id_token)throw new Error("ID token is required but missing");const t=(i=>{const s=i.split("."),[a,l,u]=s;if(s.length!==3||!a||!l||!u)throw new Error("ID token could not be decoded");const d=JSON.parse(Ad(l)),c={__raw:i},p={};return Object.keys(d).forEach(v=>{c[v]=d[v],L2.includes(v)||(p[v]=d[v])}),{encoded:{header:a,payload:l,signature:u},header:JSON.parse(Ad(a)),claims:c,user:p}})(e.id_token);if(!t.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(t.claims.iss!==e.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`);if(!t.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if(t.header.alg!=="RS256")throw new Error(`Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!t.claims.aud||typeof t.claims.aud!="string"&&!Array.isArray(t.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(t.claims.aud)){if(!t.claims.aud.includes(e.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but was not one of "${t.claims.aud.join(", ")}"`);if(t.claims.aud.length>1){if(!t.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(t.claims.azp!==e.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`)}}else if(t.claims.aud!==e.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`);if(e.nonce){if(!t.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(t.claims.nonce!==e.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`)}if(e.max_age&&!zr(t.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(t.claims.exp==null||!zr(t.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!zr(t.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");const n=e.leeway||60,r=new Date(e.now||Date.now()),o=new Date(0);if(o.setUTCSeconds(t.claims.exp+n),r>o)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${r}) is after expiration time (${o})`);if(t.claims.nbf!=null&&zr(t.claims.nbf)){const i=new Date(0);if(i.setUTCSeconds(t.claims.nbf-n),r<i)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${r}) is before ${i}`)}if(t.claims.auth_time!=null&&zr(t.claims.auth_time)){const i=new Date(0);if(i.setUTCSeconds(parseInt(t.claims.auth_time)+e.max_age+n),r>i)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${r}) is after last auth at ${i}`)}if(e.organization){const i=e.organization.trim();if(i.startsWith("org_")){const s=i;if(!t.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(s!==t.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${s}", found "${t.claims.org_id}"`)}else{const s=i.toLowerCase();if(!t.claims.org_name)throw new Error("Organization Name (org_name) claim must be a string present in the ID token");if(s!==t.claims.org_name)throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${s}", found "${t.claims.org_name}"`)}}return t};var wn=Wu(function(e,t){var n=hn&&hn.__assign||function(){return n=Object.assign||function(l){for(var u,d=1,c=arguments.length;d<c;d++)for(var p in u=arguments[d])Object.prototype.hasOwnProperty.call(u,p)&&(l[p]=u[p]);return l},n.apply(this,arguments)};function r(l,u){if(!u)return"";var d="; "+l;return u===!0?d:d+"="+u}function o(l,u,d){return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(u).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(c){if(typeof c.expires=="number"){var p=new Date;p.setMilliseconds(p.getMilliseconds()+864e5*c.expires),c.expires=p}return r("Expires",c.expires?c.expires.toUTCString():"")+r("Domain",c.domain)+r("Path",c.path)+r("Secure",c.secure)+r("SameSite",c.sameSite)}(d)}function i(l){for(var u={},d=l?l.split("; "):[],c=/(%[\dA-F]{2})+/gi,p=0;p<d.length;p++){var v=d[p].split("="),y=v.slice(1).join("=");y.charAt(0)==='"'&&(y=y.slice(1,-1));try{u[v[0].replace(c,decodeURIComponent)]=y.replace(c,decodeURIComponent)}catch{}}return u}function s(){return i(document.cookie)}function a(l,u,d){document.cookie=o(l,u,n({path:"/"},d))}t.__esModule=!0,t.encode=o,t.parse=i,t.getAll=s,t.get=function(l){return s()[l]},t.set=a,t.remove=function(l,u){a(l,"",n(n({},u),{expires:-1}))}});Uu(wn),wn.encode,wn.parse,wn.getAll;var A2=wn.get,xm=wn.set,Sm=wn.remove;const $n={get(e){const t=A2(e);if(t!==void 0)return JSON.parse(t)},save(e,t,n){let r={};window.location.protocol==="https:"&&(r={secure:!0,sameSite:"none"}),n!=null&&n.daysUntilExpire&&(r.expires=n.daysUntilExpire),n!=null&&n.cookieDomain&&(r.domain=n.cookieDomain),xm(e,JSON.stringify(t),r)},remove(e,t){let n={};t!=null&&t.cookieDomain&&(n.domain=t.cookieDomain),Sm(e,n)}},D2={get(e){return $n.get(e)||$n.get(`_legacy_${e}`)},save(e,t,n){let r={};window.location.protocol==="https:"&&(r={secure:!0}),n!=null&&n.daysUntilExpire&&(r.expires=n.daysUntilExpire),n!=null&&n.cookieDomain&&(r.domain=n.cookieDomain),xm(`_legacy_${e}`,JSON.stringify(t),r),$n.save(e,t,n)},remove(e,t){let n={};t!=null&&t.cookieDomain&&(n.domain=t.cookieDomain),Sm(e,n),$n.remove(e,t),$n.remove(`_legacy_${e}`,t)}},F2={get(e){if(typeof sessionStorage>"u")return;const t=sessionStorage.getItem(e);return t!=null?JSON.parse(t):void 0},save(e,t){sessionStorage.setItem(e,JSON.stringify(t))},remove(e){sessionStorage.removeItem(e)}};function M2(e,t,n){var r=t===void 0?null:t,o=function(l,u){var d=atob(l);if(u){for(var c=new Uint8Array(d.length),p=0,v=d.length;p<v;++p)c[p]=d.charCodeAt(p);return String.fromCharCode.apply(null,new Uint16Array(c.buffer))}return d}(e,n!==void 0&&n),i=o.indexOf(`
`,10)+1,s=o.substring(i)+(r?"//# sourceMappingURL="+r:""),a=new Blob([s],{type:"application/javascript"});return URL.createObjectURL(a)}var Dd,Fd,Md,ga,U2=(Dd="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=",Fd=null,Md=!1,function(e){return ga=ga||M2(Dd,Fd,Md),new Worker(ga,e)});const ya={};class W2{constructor(t,n){this.cache=t,this.clientId=n,this.manifestKey=this.createManifestKeyFrom(this.clientId)}async add(t){var n;const r=new Set(((n=await this.cache.get(this.manifestKey))===null||n===void 0?void 0:n.keys)||[]);r.add(t),await this.cache.set(this.manifestKey,{keys:[...r]})}async remove(t){const n=await this.cache.get(this.manifestKey);if(n){const r=new Set(n.keys);return r.delete(t),r.size>0?await this.cache.set(this.manifestKey,{keys:[...r]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(t){return`@@auth0spajs@@::${t}`}}const B2={memory:()=>new wm().enclosedCache,localstorage:()=>new b2},Ud=e=>B2[e],Wd=e=>{const{openUrl:t,onRedirect:n}=e,r=st(e,["openUrl","onRedirect"]);return Object.assign(Object.assign({},r),{openUrl:t===!1||t?t:n})},va=new _2;class H2{constructor(t){let n,r;if(this.userCache=new wm().enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await va.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),t),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),t.authorizationParams)}),typeof window<"u"&&(()=>{if(!yi())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(yi().subtle===void 0)throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)})(),t.cache&&t.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),t.cache)r=t.cache;else{if(n=t.cacheLocation||"memory",!Ud(n))throw new Error(`Invalid cache location "${n}"`);r=Ud(n)()}this.httpTimeoutMs=t.httpTimeoutInSeconds?1e3*t.httpTimeoutInSeconds:1e4,this.cookieStorage=t.legacySameSiteCookie===!1?$n:D2,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(s=>`auth0.${s}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=t.sessionCheckExpiryDays||1;const o=t.useCookiesForTransactions?this.cookieStorage:F2;var i;this.scope=Yo("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new z2(o,this.options.clientId,this.options.cookieDomain),this.nowProvider=this.options.nowProvider||vm,this.cacheManager=new I2(r,r.allKeys?void 0:new W2(r,this.options.clientId),this.nowProvider),this.domainUrl=(i=this.options.domain,/^https?:\/\//.test(i)?i:`https://${i}`),this.tokenIssuer=((s,a)=>s?s.startsWith("https://")?s:`https://${s}/`:`${a}/`)(this.options.issuer,this.domainUrl),typeof window<"u"&&window.Worker&&this.options.useRefreshTokens&&n==="memory"&&(this.options.workerUrl?this.worker=new Worker(this.options.workerUrl):this.worker=new U2)}_url(t){const n=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||ym)));return`${this.domainUrl}${t}&auth0Client=${n}`}_authorizeUrl(t){return this._url(`/authorize?${bl(t)}`)}async _verifyIdToken(t,n,r){const o=await this.nowProvider();return $2({iss:this.tokenIssuer,aud:this.options.clientId,id_token:t,nonce:n,organization:r,leeway:this.options.leeway,max_age:(i=this.options.authorizationParams.max_age,typeof i!="string"?i:parseInt(i,10)||void 0),now:o});var i}_processOrgHint(t){t?this.cookieStorage.save(this.orgHintCookieName,t,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain})}async _prepareAuthorizeUrl(t,n,r){const o=$d(ma()),i=$d(ma()),s=ma(),a=(d=>{const c=new Uint8Array(d);return(p=>{const v={"+":"-","/":"_","=":""};return p.replace(/[+/=]/g,y=>v[y])})(window.btoa(String.fromCharCode(...Array.from(c))))})(await(async d=>await yi().subtle.digest({name:"SHA-256"},new TextEncoder().encode(d)))(s)),l=((d,c,p,v,y,w,S,m)=>Object.assign(Object.assign(Object.assign({client_id:d.clientId},d.authorizationParams),p),{scope:Yo(c,p.scope),response_type:"code",response_mode:m||"query",state:v,nonce:y,redirect_uri:S||d.authorizationParams.redirect_uri,code_challenge:w,code_challenge_method:"S256"}))(this.options,this.scope,t,o,i,a,t.redirect_uri||this.options.authorizationParams.redirect_uri||r,n==null?void 0:n.response_mode),u=this._authorizeUrl(l);return{nonce:i,code_verifier:s,scope:l.scope,audience:l.audience||"default",redirect_uri:l.redirect_uri,state:o,url:u}}async loginWithPopup(t,n){var r;if(t=t||{},!(n=n||{}).popup&&(n.popup=(a=>{const l=window.screenX+(window.innerWidth-400)/2,u=window.screenY+(window.innerHeight-600)/2;return window.open(a,"auth0:authorize:popup",`left=${l},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!n.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");const o=await this._prepareAuthorizeUrl(t.authorizationParams||{},{response_mode:"web_message"},window.location.origin);n.popup.location.href=o.url;const i=await(a=>new Promise((l,u)=>{let d;const c=setInterval(()=>{a.popup&&a.popup.closed&&(clearInterval(c),clearTimeout(p),window.removeEventListener("message",d,!1),u(new Vu(a.popup)))},1e3),p=setTimeout(()=>{clearInterval(c),u(new Hu(a.popup)),window.removeEventListener("message",d,!1)},1e3*(a.timeoutInSeconds||60));d=function(v){if(v.data&&v.data.type==="authorization_response"){if(clearTimeout(p),clearInterval(c),window.removeEventListener("message",d,!1),a.popup.close(),v.data.response.error)return u(we.fromPayload(v.data.response));l(v.data.response)}},window.addEventListener("message",d)}))(Object.assign(Object.assign({},n),{timeoutInSeconds:n.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(o.state!==i.state)throw new we("state_mismatch","Invalid state");const s=((r=t.authorizationParams)===null||r===void 0?void 0:r.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:o.audience,scope:o.scope,code_verifier:o.code_verifier,grant_type:"authorization_code",code:i.code,redirect_uri:o.redirect_uri},{nonceIn:o.nonce,organization:s})}async getUser(){var t;const n=await this._getIdTokenFromCache();return(t=n==null?void 0:n.decodedToken)===null||t===void 0?void 0:t.user}async getIdTokenClaims(){var t;const n=await this._getIdTokenFromCache();return(t=n==null?void 0:n.decodedToken)===null||t===void 0?void 0:t.claims}async loginWithRedirect(t={}){var n;const r=Wd(t),{openUrl:o,fragment:i,appState:s}=r,a=st(r,["openUrl","fragment","appState"]),l=((n=a.authorizationParams)===null||n===void 0?void 0:n.organization)||this.options.authorizationParams.organization,u=await this._prepareAuthorizeUrl(a.authorizationParams||{}),{url:d}=u,c=st(u,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},c),{appState:s}),l&&{organization:l}));const p=i?`${d}#${i}`:d;o?await o(p):window.location.assign(p)}async handleRedirectCallback(t=window.location.href){const n=t.split("?").slice(1);if(n.length===0)throw new Error("There are no query params available for parsing.");const{state:r,code:o,error:i,error_description:s}=(c=>{c.indexOf("#")>-1&&(c=c.substring(0,c.indexOf("#")));const p=new URLSearchParams(c);return{state:p.get("state"),code:p.get("code")||void 0,error:p.get("error")||void 0,error_description:p.get("error_description")||void 0}})(n.join("")),a=this.transactionManager.get();if(!a)throw new we("missing_transaction","Invalid state");if(this.transactionManager.remove(),i)throw new Bu(i,s||i,r,a.appState);if(!a.code_verifier||a.state&&a.state!==r)throw new we("state_mismatch","Invalid state");const l=a.organization,u=a.nonce,d=a.redirect_uri;return await this._requestToken(Object.assign({audience:a.audience,scope:a.scope,code_verifier:a.code_verifier,grant_type:"authorization_code",code:o},d?{redirect_uri:d}:{}),{nonceIn:u,organization:l}),{appState:a.appState}}async checkSession(t){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated")}try{await this.getTokenSilently(t)}catch{}}async getTokenSilently(t={}){var n;const r=Object.assign(Object.assign({cacheMode:"on"},t),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),t.authorizationParams),{scope:Yo(this.scope,(n=t.authorizationParams)===null||n===void 0?void 0:n.scope)})}),o=await((i,s)=>{let a=ya[s];return a||(a=i().finally(()=>{delete ya[s],a=null}),ya[s]=a),a})(()=>this._getTokenSilently(r),`${this.options.clientId}::${r.authorizationParams.audience}::${r.authorizationParams.scope}`);return t.detailedResponse?o:o==null?void 0:o.access_token}async _getTokenSilently(t){const{cacheMode:n}=t,r=st(t,["cacheMode"]);if(n!=="off"){const o=await this._getEntryFromCache({scope:r.authorizationParams.scope,audience:r.authorizationParams.audience||"default",clientId:this.options.clientId});if(o)return o}if(n!=="cache-only"){if(!await(async(o,i=3)=>{for(let s=0;s<i;s++)if(await o())return!0;return!1})(()=>va.acquireLock("auth0.lock.getTokenSilently",5e3),10))throw new wo;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),n!=="off"){const u=await this._getEntryFromCache({scope:r.authorizationParams.scope,audience:r.authorizationParams.audience||"default",clientId:this.options.clientId});if(u)return u}const o=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(r):await this._getTokenFromIFrame(r),{id_token:i,access_token:s,oauthTokenScope:a,expires_in:l}=o;return Object.assign(Object.assign({id_token:i,access_token:s},a?{scope:a}:null),{expires_in:l})}finally{await va.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)}}}async getTokenWithPopup(t={},n={}){var r;const o=Object.assign(Object.assign({},t),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),t.authorizationParams),{scope:Yo(this.scope,(r=t.authorizationParams)===null||r===void 0?void 0:r.scope)})});return n=Object.assign(Object.assign({},j2),n),await this.loginWithPopup(o,n),(await this.cacheManager.get(new ut({scope:o.authorizationParams.scope,audience:o.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return!!await this.getUser()}_buildLogoutUrl(t){t.clientId!==null?t.clientId=t.clientId||this.options.clientId:delete t.clientId;const n=t.logoutParams||{},{federated:r}=n,o=st(n,["federated"]),i=r?"&federated":"";return this._url(`/v2/logout?${bl(Object.assign({clientId:t.clientId},o))}`)+i}async logout(t={}){const n=Wd(t),{openUrl:r}=n,o=st(n,["openUrl"]);t.clientId===null?await this.cacheManager.clear():await this.cacheManager.clear(t.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");const i=this._buildLogoutUrl(o);r?await r(i):r!==!1&&window.location.assign(i)}async _getTokenFromIFrame(t){const n=Object.assign(Object.assign({},t.authorizationParams),{prompt:"none"}),r=this.cookieStorage.get(this.orgHintCookieName);r&&!n.organization&&(n.organization=r);const{url:o,state:i,nonce:s,code_verifier:a,redirect_uri:l,scope:u,audience:d}=await this._prepareAuthorizeUrl(n,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new we("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");const c=t.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,p=await((y,w,S=60)=>new Promise((m,h)=>{const g=window.document.createElement("iframe");g.setAttribute("width","0"),g.setAttribute("height","0"),g.style.display="none";const x=()=>{window.document.body.contains(g)&&(window.document.body.removeChild(g),window.removeEventListener("message",k,!1))};let k;const _=setTimeout(()=>{h(new wo),x()},1e3*S);k=function(E){if(E.origin!=w||!E.data||E.data.type!=="authorization_response")return;const P=E.source;P&&P.close(),E.data.response.error?h(we.fromPayload(E.data.response)):m(E.data.response),clearTimeout(_),window.removeEventListener("message",k,!1),setTimeout(x,2e3)},window.addEventListener("message",k,!1),window.document.body.appendChild(g),g.setAttribute("src",y)}))(o,this.domainUrl,c);if(i!==p.state)throw new we("state_mismatch","Invalid state");const v=await this._requestToken(Object.assign(Object.assign({},t.authorizationParams),{code_verifier:a,code:p.code,grant_type:"authorization_code",redirect_uri:l,timeout:t.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:s,organization:n.organization});return Object.assign(Object.assign({},v),{scope:u,oauthTokenScope:v.scope,audience:d})}catch(c){throw c.error==="login_required"&&this.logout({openUrl:!1}),c}}async _getTokenUsingRefreshToken(t){const n=await this.cacheManager.get(new ut({scope:t.authorizationParams.scope,audience:t.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(n&&n.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(t);throw new Ts(t.authorizationParams.audience||"default",t.authorizationParams.scope)}const r=t.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,o=typeof t.timeoutInSeconds=="number"?1e3*t.timeoutInSeconds:null;try{const i=await this._requestToken(Object.assign(Object.assign(Object.assign({},t.authorizationParams),{grant_type:"refresh_token",refresh_token:n&&n.refresh_token,redirect_uri:r}),o&&{timeout:o}));return Object.assign(Object.assign({},i),{scope:t.authorizationParams.scope,oauthTokenScope:i.scope,audience:t.authorizationParams.audience||"default"})}catch(i){if((i.message.indexOf("Missing Refresh Token")>-1||i.message&&i.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(t);throw i}}async _saveEntryInCache(t){const{id_token:n,decodedToken:r}=t,o=st(t,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:n,decodedToken:r}),await this.cacheManager.setIdToken(this.options.clientId,t.id_token,t.decodedToken),await this.cacheManager.set(o)}async _getIdTokenFromCache(){const t=this.options.authorizationParams.audience||"default",n=await this.cacheManager.getIdToken(new ut({clientId:this.options.clientId,audience:t,scope:this.scope})),r=this.userCache.get("@@user@@");return n&&n.id_token===(r==null?void 0:r.id_token)?r:(this.userCache.set("@@user@@",n),n)}async _getEntryFromCache({scope:t,audience:n,clientId:r}){const o=await this.cacheManager.get(new ut({scope:t,audience:n,clientId:r}),60);if(o&&o.access_token){const{access_token:i,oauthTokenScope:s,expires_in:a}=o,l=await this._getIdTokenFromCache();return l&&Object.assign(Object.assign({id_token:l.id_token,access_token:i},s?{scope:s}:null),{expires_in:a})}}async _requestToken(t,n){const{nonceIn:r,organization:o}=n||{},i=await O2(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},t),this.worker),s=await this._verifyIdToken(i.id_token,r,o);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},i),{decodedToken:s,scope:t.scope,audience:t.audience||"default"}),i.scope?{oauthTokenScope:i.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgHint(o||s.claims.org_id),Object.assign(Object.assign({},i),{decodedToken:s})}}var km={isAuthenticated:!1,isLoading:!0},mt=function(){throw new Error("You forgot to wrap your component in <Auth0Provider>.")},V2=ue(ue({},km),{buildAuthorizeUrl:mt,buildLogoutUrl:mt,getAccessTokenSilently:mt,getAccessTokenWithPopup:mt,getIdTokenClaims:mt,loginWithRedirect:mt,loginWithPopup:mt,logout:mt,handleRedirectCallback:mt}),Em=j.createContext(V2),Bd=function(e){E2(t,e);function t(n,r){var o=e.call(this,r||n)||this;return o.error=n,o.error_description=r,Object.setPrototypeOf(o,t.prototype),o}return t}(Error),K2=/[?&]code=[^&]+/,G2=/[?&]state=[^&]+/,Z2=/[?&]error=[^&]+/,X2=function(e){return e===void 0&&(e=window.location.search),(K2.test(e)||Z2.test(e))&&G2.test(e)},Cm=function(e){return function(t){return t instanceof Error?t:t!==null&&typeof t=="object"&&"error"in t&&typeof t.error=="string"?"error_description"in t&&typeof t.error_description=="string"?new Bd(t.error,t.error_description):new Bd(t.error):new Error(e)}},Hd=Cm("Login failed"),wa=Cm("Get access token failed"),_m=function(e){var t;e!=null&&e.redirectUri&&(console.warn("Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"),e.authorizationParams=e.authorizationParams||{},e.authorizationParams.redirect_uri=e.redirectUri,delete e.redirectUri),!((t=e==null?void 0:e.authorizationParams)===null||t===void 0)&&t.redirectUri&&(console.warn("Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"),e.authorizationParams.redirect_uri=e.authorizationParams.redirectUri,delete e.authorizationParams.redirectUri)},Y2=function(e,t){switch(t.type){case"LOGIN_POPUP_STARTED":return ue(ue({},e),{isLoading:!0});case"LOGIN_POPUP_COMPLETE":case"INITIALISED":return ue(ue({},e),{isAuthenticated:!!t.user,user:t.user,isLoading:!1,error:void 0});case"HANDLE_REDIRECT_COMPLETE":case"GET_ACCESS_TOKEN_COMPLETE":return e.user===t.user?e:ue(ue({},e),{isAuthenticated:!!t.user,user:t.user});case"LOGOUT":return ue(ue({},e),{isAuthenticated:!1,user:void 0});case"ERROR":return ue(ue({},e),{isLoading:!1,error:t.error})}},J2=function(e){return _m(e),ue(ue({},e),{auth0Client:{name:"auth0-react",version:"2.2.4"}})},Q2=function(e){window.history.replaceState({},document.title,(e==null?void 0:e.returnTo)||window.location.pathname)},q2=function(e){var t=e.children,n=e.skipRedirectCallback,r=e.onRedirectCallback,o=r===void 0?Q2:r,i=e.context,s=i===void 0?Em:i,a=C2(e,["children","skipRedirectCallback","onRedirectCallback","context"]),l=j.useState(function(){return new H2(J2(a))})[0],u=j.useReducer(Y2,km),d=u[0],c=u[1],p=j.useRef(!1);j.useEffect(function(){p.current||(p.current=!0,function(){return zn(void 0,void 0,void 0,function(){var k,_,E;return Ln(this,function(P){switch(P.label){case 0:return P.trys.push([0,7,,8]),k=void 0,X2()&&!n?[4,l.handleRedirectCallback()]:[3,3];case 1:return _=P.sent().appState,[4,l.getUser()];case 2:return k=P.sent(),o(_,k),[3,6];case 3:return[4,l.checkSession()];case 4:return P.sent(),[4,l.getUser()];case 5:k=P.sent(),P.label=6;case 6:return c({type:"INITIALISED",user:k}),[3,8];case 7:return E=P.sent(),c({type:"ERROR",error:Hd(E)}),[3,8];case 8:return[2]}})})}())},[l,o,n]);var v=j.useCallback(function(k){return _m(k),l.loginWithRedirect(k)},[l]),y=j.useCallback(function(k,_){return zn(void 0,void 0,void 0,function(){var E,P;return Ln(this,function(I){switch(I.label){case 0:c({type:"LOGIN_POPUP_STARTED"}),I.label=1;case 1:return I.trys.push([1,3,,4]),[4,l.loginWithPopup(k,_)];case 2:return I.sent(),[3,4];case 3:return E=I.sent(),c({type:"ERROR",error:Hd(E)}),[2];case 4:return[4,l.getUser()];case 5:return P=I.sent(),c({type:"LOGIN_POPUP_COMPLETE",user:P}),[2]}})})},[l]),w=j.useCallback(function(k){return k===void 0&&(k={}),zn(void 0,void 0,void 0,function(){return Ln(this,function(_){switch(_.label){case 0:return[4,l.logout(k)];case 1:return _.sent(),(k.openUrl||k.openUrl===!1)&&c({type:"LOGOUT"}),[2]}})})},[l]),S=j.useCallback(function(k){return zn(void 0,void 0,void 0,function(){var _,E,P,I;return Ln(this,function(O){switch(O.label){case 0:return O.trys.push([0,2,3,5]),[4,l.getTokenSilently(k)];case 1:return _=O.sent(),[3,5];case 2:throw E=O.sent(),wa(E);case 3:return P=c,I={type:"GET_ACCESS_TOKEN_COMPLETE"},[4,l.getUser()];case 4:return P.apply(void 0,[(I.user=O.sent(),I)]),[7];case 5:return[2,_]}})})},[l]),m=j.useCallback(function(k,_){return zn(void 0,void 0,void 0,function(){var E,P,I,O;return Ln(this,function(ee){switch(ee.label){case 0:return ee.trys.push([0,2,3,5]),[4,l.getTokenWithPopup(k,_)];case 1:return E=ee.sent(),[3,5];case 2:throw P=ee.sent(),wa(P);case 3:return I=c,O={type:"GET_ACCESS_TOKEN_COMPLETE"},[4,l.getUser()];case 4:return I.apply(void 0,[(O.user=ee.sent(),O)]),[7];case 5:return[2,E]}})})},[l]),h=j.useCallback(function(){return l.getIdTokenClaims()},[l]),g=j.useCallback(function(k){return zn(void 0,void 0,void 0,function(){var _,E,P;return Ln(this,function(I){switch(I.label){case 0:return I.trys.push([0,2,3,5]),[4,l.handleRedirectCallback(k)];case 1:return[2,I.sent()];case 2:throw _=I.sent(),wa(_);case 3:return E=c,P={type:"HANDLE_REDIRECT_COMPLETE"},[4,l.getUser()];case 4:return E.apply(void 0,[(P.user=I.sent(),P)]),[7];case 5:return[2]}})})},[l]),x=j.useMemo(function(){return ue(ue({},d),{getAccessTokenSilently:S,getAccessTokenWithPopup:m,getIdTokenClaims:h,loginWithRedirect:v,loginWithPopup:y,logout:w,handleRedirectCallback:g})},[d,S,m,h,v,y,w,g]);return ie.createElement(s.Provider,{value:x},t)},Gu=function(e){return e===void 0&&(e=Em),j.useContext(e)};const ex=()=>{const{isAuthenticated:e,user:t}=Gu(),n=mr`
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,r=mr`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,o=F.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="text"],
          input[type="email"],
          textarea {
            padding: 1.5rem;
            border: none;
            border-radius: 2rem;
            font-size: 1.6rem;
            background-color: ${({theme:i})=>i.colors.inputBg};
            color: ${({theme:i})=>i.colors.inputText};
            transition: all 0.3s;
            animation: ${n} 1s ease-in-out forwards;

            &:focus {
              outline: none;
              box-shadow: 0 0 0 3px ${({theme:i})=>i.colors.inputFocus};
            }
          }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: ${({theme:i})=>i.colors.btn};
            color: ${({theme:i})=>i.colors.white};
            padding: 1.5rem;
            border: none;
            border-radius: 2rem;
            font-size: 1.6rem;
            animation: ${r} 1s ease-in-out forwards;

            &:hover {
              background-color: ${({theme:i})=>i.colors.btnHover};
              transform: scale(1.05);
            }
          }
        }
      }
    }

    .map-container {
      border-radius: 2rem;
      margin-top: 6rem;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  `;return f.jsxs(o,{children:[f.jsx("h2",{className:"common-heading",children:"Contact page"}),f.jsx("div",{className:"map-container",children:f.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3471.7650849869324!2d78.10787912532405!3d29.5232058251901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1shi!2sin!4v1714253641603!5m2!1shi!2sin",width:"600",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),f.jsx("div",{className:"container",children:f.jsx("div",{className:"contact-form",children:f.jsxs("form",{action:"https://formspree.io/f/xeqdgwnq",method:"POST",className:"contact-inputs",children:[f.jsx("input",{type:"text",placeholder:"Your Name",name:"name",value:e?t.name:"",required:!0,autoComplete:"off"}),f.jsx("input",{type:"email",name:"email",placeholder:"Your Email",autoComplete:"off",value:e?t.email:"",required:!0}),f.jsx("textarea",{name:"message",cols:"30",rows:"10",required:!0,autoComplete:"off",placeholder:"Your Message"}),f.jsx("input",{type:"submit",value:"Send Message"})]})})})]})},tx=({title:e})=>f.jsxs(nx,{children:[f.jsx(Pe,{to:"/",children:"Home"}),"/",e]}),nx=F.section`
  height: 10rem;
  background-color: ${({theme:e})=>e.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }
`,rx=({imgs:e=[{url:""}]})=>{const[t,n]=j.useState(e[0]);return f.jsxs(ox,{children:[f.jsx("div",{className:"grid grid-four-column",children:e.map((r,o)=>f.jsx("figure",{children:f.jsx("img",{src:r.url,alt:r.filename,className:"box-image--style",onClick:()=>n(r)})},o))}),f.jsx("div",{className:"main-screen",children:f.jsx("img",{src:t.url,alt:t.filename})})]})},ox=F.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({theme:e})=>e.colors.shadow};
      transition: transform 0.2s;
    }

    img:hover {
      transform: scale(1.05);
    }
  }

  .main-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({theme:e})=>e.colors.shadow};
      transition: transform 0.2s;
    }

    img:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    display: flex;
    flex-direction: column;

    .grid {
      flex-direction: row;
      overflow-x: scroll;
    }

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`,ix=F.div`
width:100%;
padding:0rem 12rem;
`;function sx(e){return se({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"},child:[]}]})(e)}const ax=({stars:e,reviews:t})=>{const n=Array.from({length:5},(r,o)=>{let i=o+.5;return f.jsx("span",{children:e>=o+1?f.jsx(Rv,{className:"icon"}):e>=i?f.jsx(Nv,{className:"icon"}):f.jsx(sx,{className:"icon"})},o)});return f.jsx(lx,{children:f.jsxs("div",{className:"icon-style",children:[n,f.jsxs("p",{children:["(",t," customer reviews)"]})]})})},lx=F.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`,jm=({amount:e,setDecrease:t,setIncrease:n})=>f.jsx("div",{className:"cart-button",children:f.jsxs("div",{className:"amount-toggle",children:[f.jsx("button",{onClick:()=>t(),children:f.jsx(jv,{})}),f.jsx("div",{className:"amount-style",children:e}),f.jsx("button",{onClick:()=>n(),children:f.jsx(Pv,{})})]})}),ux=(e,t)=>{if(t.type==="ADD_TO_CART"){let{id:n,color:r,amount:o,product:i}=t.payload;if(e.cart.find(a=>a.id===n+r)){let a=e.cart.map(l=>{if(l.id===n+r){let u=l.amount+o;return u>=l.max&&(u=l.max),{...l,amount:u}}else return l});return{...e,cart:a}}else{let a={id:n+r,name:i.name,color:r,amount:o,image:i.image[0].url,price:i.price,max:i.stock};return{...e,cart:[...e.cart,a]}}}if(t.type==="SET_DECREMENT"){let n=e.cart.map(r=>{if(r.id===t.payload){let o=r.amount-1;return o<=1&&(o=1),{...r,amount:o}}else return r});return{...e,cart:n}}if(t.type==="SET_INCREMENT"){let n=e.cart.map(r=>{if(r.id===t.payload){let o=r.amount+1;return o>=r.max&&(o=r.max),{...r,amount:o}}else return r});return{...e,cart:n}}if(t.type==="REMOVE_ITEM"){let n=e.cart.filter(r=>r.id!==t.payload);return{...e,cart:n}}if(t.type==="CLEAR_CART")return{...e,cart:[]};if(t.type==="CART_TOTAL_ITEM"){let n=e.cart.reduce((r,o)=>{let{amount:i}=o;return r=r+i,r},0);return{...e,total_item:n}}if(t.type==="CART_TOTAL_PRICE"){let n=e.cart.reduce((r,o)=>{let{price:i,amount:s}=o;return r=r+i*s,r},0);return{...e,total_price:n}}return e},Pm=j.createContext(),cx=()=>{let e=localStorage.getItem("RanuCart");return e===null||e.length===0?[]:JSON.parse(e)},dx={cart:cx(),total_item:"",total_price:"",shipping_fee:5e3},fx=({children:e})=>{const[t,n]=j.useReducer(ux,dx),r=(l,u,d,c)=>{n({type:"ADD_TO_CART",payload:{id:l,color:u,amount:d,product:c}})},o=l=>{n({type:"SET_DECREMENT",payload:l})},i=l=>{n({type:"SET_INCREMENT",payload:l})},s=l=>{n({type:"REMOVE_ITEM",payload:l})},a=()=>{n({type:"CLEAR_CART"})};return j.useEffect(()=>{n({type:"CART_TOTAL_PRICE"}),n({type:"CART_TOTAL_ITEM"}),localStorage.setItem("RanuCart",JSON.stringify(t.cart))},[t.cart]),f.jsx(Pm.Provider,{value:{...t,addToCart:r,removeItem:s,clearCart:a,setDecrease:o,setIncrease:i},children:e})},Os=()=>j.useContext(Pm),px=({product:e})=>{const{addToCart:t}=Os(),{id:n,colors:r,stock:o}=e,[i,s]=j.useState(r[0]),[a,l]=j.useState(1),u=()=>{a>1?l(a-1):l(1)},d=()=>{a<o?l(a+1):l(o)};return f.jsxs(hx,{children:[f.jsx("div",{className:"colors",children:f.jsxs("p",{children:["Color:",r.map((c,p)=>f.jsx("button",{style:{backgroundColor:c},className:i===c?"btnStyle active":"btnStyle",onClick:()=>s(c),children:i===c?f.jsx(Kh,{className:"checkStyle"}):null},p))]})}),f.jsx(jm,{amount:a,setDecrease:u,setIncrease:d}),f.jsx(Pe,{to:"/cart",onClick:()=>t(n,i,a,e),children:f.jsx(qt,{className:"btn",onClick:()=>{},children:"Add To Cart"})})]})},hx=F.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .colors p {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  .btnStyle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    border: 2px solid #ccc;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: scale(1.1);
    }
  }

  .active {
    border: 2px solid ${({theme:e})=>e.colors.btn};
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-size: 1.5rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: ${({theme:e})=>e.colors.btn};
        color: #fff;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }

    .amount-style {
      font-size: 2rem;
      color: ${({theme:e})=>e.colors.btn};
    }
  }

  .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: ${({theme:e})=>e.colors.btn};
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    text-align: center;
    text-decoration: none;
    outline: none;

    &:hover {
      background-color: ${({theme:e})=>e.colors.btnHover};
      transform: translateY(-2px);
    }

    &:active,
    &:focus {
      transform: translateY(0);
      outline: none;
      border: none;
    }
  }

  @media (max-width: 768px) {
    .colors p {
      flex-direction: column;
      align-items: flex-start;
    }

    .btnStyle {
      margin: 0.5rem 0;
    }

    .amount-toggle {
      flex-direction: column;
      align-items: center;
    }

    .amount-toggle button {
      margin: 0.5rem 0;
    }
  }
`,mx="https://api.pujakaitem.com/api/products",gx=()=>{const{getSingleProduct:e,isSingleLoading:t,singleProduct:n}=Ns(),{id:r}=Rg(),{id:o,name:i,company:s,price:a,description:l,category:u,stock:d,stars:c,reviews:p,image:v}=n;return j.useEffect(()=>{e(`${mx}?id=${r}`)},[r]),t?f.jsx("div",{className:"page_loading",children:"Loading....."}):f.jsxs(yx,{children:[f.jsx(tx,{title:i}),f.jsx(ix,{className:"container",children:f.jsxs("div",{className:"grid grid-two-column",children:[f.jsx("div",{className:"product_images",children:f.jsx(rx,{imgs:v})}),f.jsxs("div",{className:"product-data",children:[f.jsx("h2",{children:i}),f.jsx("div",{className:"product-rating",children:f.jsx(ax,{stars:c,reviews:p})}),f.jsxs("p",{className:"product-data-price",children:["MRP:",f.jsx("del",{children:f.jsx(ft,{price:a+25e4})})]}),f.jsxs("p",{className:"product-data-price product-data-real-price",children:["Deal of the Day: ",f.jsx(ft,{price:a})]}),f.jsx("p",{children:l}),f.jsxs("div",{className:"product-data-warranty",children:[f.jsxs("div",{className:"product-warranty-data",children:[f.jsx(_l,{className:"warranty-icon"}),f.jsx("p",{children:"Free Delivery"})]}),f.jsxs("div",{className:"product-warranty-data",children:[f.jsx(yv,{className:"warranty-icon"}),f.jsx("p",{children:"30 Days Replacement"})]}),f.jsxs("div",{className:"product-warranty-data",children:[f.jsx(_l,{className:"warranty-icon"}),f.jsx("p",{children:"RX Delivered"})]}),f.jsxs("div",{className:"product-warranty-data",children:[f.jsx(Vh,{className:"warranty-icon"}),f.jsx("p",{children:"2 Year Warranty"})]})]}),f.jsxs("div",{className:"product-data-info",children:[f.jsxs("p",{children:["Available:",f.jsxs("span",{children:[" ",d>0?"In Stock":"Not Available"]})]}),f.jsxs("p",{children:["Brand: ",f.jsx("span",{children:s})]})]}),f.jsx("hr",{}),d>0&&f.jsx(px,{product:n})]})]})})]})},yx=F.section`
  .container {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .grid-two-column {
    grid-template-columns: 1fr 1fr;
  }

  .product_images {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      font-size: 2.4rem;
      font-weight: bold;
      color: #333;
    }

    .product-rating {
      display: flex;
      gap: 0.5rem;
      font-size: 1.6rem;
    }

    .product-data-price {
      font-weight: bold;
      font-size: 1.8rem;
      color: #888;
    }

    .product-data-real-price {
      color: ${({theme:e})=>e.colors.btn};
      font-size: 2rem;
    }

    .product-data-warranty {
      display: flex;
      gap: 2rem;
      border-bottom: 1px solid #ccc;
      padding-bottom: 1rem;

      .product-warranty-data {
        display: flex;
        flex-direction: column;
        align-items: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }

        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
          text-align: center;
        }
      }
    }

    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #000;
      margin: 2rem 0;
    }
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .container {
      padding: 2rem 1.2rem;
    }

    .grid-two-column {
      grid-template-columns: 1fr;
    }

    .product-data {
      gap: 1.5rem;

      h2 {
        font-size: 2rem;
      }

      .product-rating {
        font-size: 1.4rem;
      }

      .product-data-price {
        font-size: 1.6rem;
      }

      .product-data-real-price {
        font-size: 1.8rem;
      }

      .product-data-warranty {
        flex-direction: column;
        gap: 1rem;

        .product-warranty-data {
          flex-direction: row;
          justify-content: start;
          width: 100%;

          .warranty-icon {
            width: 3rem;
            height: 3rem;
            padding: 0.4rem;
          }

          p {
            font-size: 1.2rem;
            text-align: left;
            padding-top: 0;
            padding-left: 1rem;
          }
        }
      }

      .product-data-info {
        font-size: 1.6rem;
      }
    }
  }
`,vx=({id:e,name:t,image:n,color:r,price:o,amount:i})=>{const{removeItem:s,setDecrease:a,setIncrease:l}=Os();return f.jsxs("div",{className:"cart_heading grid grid-five-column",children:[f.jsxs("div",{className:"cart-image--name",children:[f.jsx("div",{children:f.jsx("figure",{children:f.jsx("img",{src:n,alt:e})})}),f.jsxs("div",{children:[f.jsx("p",{children:t}),f.jsxs("div",{className:"color-div",children:[f.jsx("p",{children:"color:"}),f.jsx("div",{className:"color-style",style:{backgroundColor:r,color:r}})]})]})]}),f.jsx("div",{className:"cart-hide",children:f.jsx("p",{children:f.jsx(ft,{price:o})})}),f.jsx(jm,{amount:i,setDecrease:()=>a(e),setIncrease:()=>l(e)}),f.jsx("div",{className:"cart-hide",children:f.jsx("p",{children:f.jsx(ft,{price:o*i})})}),f.jsx("div",{children:f.jsx(Tv,{className:"remove_icon",onClick:()=>s(e)})})]})},wx=()=>{const{isAuthenticated:e,user:t}=Gu(),{cart:n,clearCart:r,total_price:o,shipping_fee:i}=Os();return n.length===0?f.jsx(xx,{children:f.jsx("h3",{children:"No Cart in Item "})}):f.jsxs(Sx,{children:[e&&f.jsxs("div",{className:"cart-user--profile",children:[f.jsx("img",{src:t.picture,alt:t.name}),f.jsx("h2",{className:"cart-user--name",children:t.name})]}),f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"cart_heading grid grid-five-column",children:[f.jsx("p",{children:"Item"}),f.jsx("p",{className:"cart-hide",children:"Price"}),f.jsx("p",{children:"Quantity"}),f.jsx("p",{className:"cart-hide",children:"Subtotal"}),f.jsx("p",{children:"Remove"})]}),f.jsx("hr",{}),f.jsx("div",{className:"cart-item",children:n.map(s=>f.jsx(vx,{...s},s.id))}),f.jsx("hr",{}),f.jsxs("div",{className:"cart-two-button",children:[f.jsx(Pe,{to:"/products",children:f.jsx(qt,{children:" continue Shopping "})}),f.jsx(qt,{className:"btn btn-clear",onClick:r,children:"clear cart"})]}),f.jsx("div",{className:"order-total--amount",children:f.jsxs("div",{className:"order-total--subdata",children:[f.jsxs("div",{children:[f.jsx("p",{children:"subtotal:"}),f.jsx("p",{children:f.jsx(ft,{price:o})})]}),f.jsxs("div",{children:[f.jsx("p",{children:"shipping fee:"}),f.jsx("p",{children:f.jsx(ft,{price:i})})]}),f.jsx("hr",{}),f.jsxs("div",{children:[f.jsx("p",{children:"order total:"}),f.jsx("p",{children:f.jsx(ft,{price:i+o})})]})]})})]})]})},xx=F.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`,Sx=F.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: center; /* Centering user profile on smaller screens */
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 3.2rem; /* Reduced margin for smaller screens */
    flex-wrap: wrap; /* Allowing items to wrap on smaller screens */

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
      text-align: center; /* Centering text on smaller screens */
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({theme:e})=>e.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({theme:e})=>e.colors.heading};
    }
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`,kx=mr`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`,Ex=mr`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Cx=F.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; /* Light gray background */
`,_x=F.div`
  text-align: center;
`,jx=F.h1`
  font-size: 48px;
  color: #dc3545; /* Red color for error message */
  margin-bottom: 20px;
  animation: ${kx} 0.5s ease infinite; /* Apply animation */
`,Px=F.p`
  font-size: 20px;
  color: #6c757d; /* Dark gray color for description */
`,Nx=F.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff; /* Blue color for button */
  color: #fff; /* White text color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  animation: ${Ex} 1s ease infinite; /* Apply animation */
`,Rx=()=>f.jsx(Cx,{children:f.jsxs(_x,{children:[f.jsx(jx,{children:"Error 404"}),f.jsx(Px,{children:"The page you are looking for could not be found."}),f.jsx(Nx,{onClick:()=>window.location.reload(),children:"Retry"})]})}),Tx=iv`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  color: ${({theme:e})=>e.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

 h2 {
   color: ${({theme:e})=>e.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({theme:e})=>e.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${""}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({theme:e})=>e.colors.bg};
      color: ${({theme:e})=>e.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem;
    color: ${({theme:e})=>e.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({theme:e})=>e.colors.border};
    text-transform: uppercase;
   box-shadow: ${({theme:e})=>e.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({theme:e})=>e.colors.btn};
    color: ${({theme:e})=>e.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }



.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;function Ox(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)}function bx(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"},child:[]}]})(e)}function Ix(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z",fill:"currentColor"},child:[]}]})(e)}const zx=()=>{const[e,t]=j.useState(!1),{loginWithRedirect:n,logout:r,isAuthenticated:o,user:i}=Gu(),{total_item:s}=Os(),a=F.nav`
    .navbar-lists {
      display: flex;
      gap: 2.4rem;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({theme:l})=>l.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({theme:l})=>l.colors.helper};
        }
      }

      .user-profile {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.4rem;
        color: ${({theme:l})=>l.colors.black};

        img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: ${({theme:l})=>l.colors.helper};
        color: ${({theme:l})=>l.colors.white};
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
      }
    }

    .user-button {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
      border: none;
      cursor: pointer;
      background-color: ${({theme:l})=>l.colors.btn};
      color: ${({theme:l})=>l.colors.white};
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s, border 0.3s;

      &:hover {
        background-color: ${({theme:l})=>l.colors.btn};
        color: ${({theme:l})=>l.colors.helper};
        border: 1px solid ${({theme:l})=>l.colors.helper};
      }
    }

    @media (max-width: ${({theme:l})=>l.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({theme:l})=>l.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({theme:l})=>l.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({theme:l})=>l.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 0.3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }

      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-button {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }

      .user-profile {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        text-align: center;

        img {
          width: 5rem;
          height: 5rem;
        }

        .user-info {
          align-items: center;
        }
      }
    }
  `;return f.jsx(a,{children:f.jsxs("div",{className:e?"navbar active":"navbar",children:[f.jsxs("ul",{className:"navbar-lists",children:[f.jsx("li",{children:f.jsx(Pe,{to:"/",className:"navbar-link",onClick:()=>t(!1),children:"Home"})}),f.jsx("li",{children:f.jsx(Pe,{to:"/about",className:"navbar-link",onClick:()=>t(!1),children:"About"})}),f.jsx("li",{children:f.jsx(Pe,{to:"/products",className:"navbar-link",onClick:()=>t(!1),children:"Products"})}),f.jsx("li",{children:f.jsx(Pe,{to:"/contact",className:"navbar-link",onClick:()=>t(!1),children:"Contact"})}),f.jsx("li",{children:f.jsxs(Pe,{to:"/cart",className:"navbar-link cart-trolley--link",children:[f.jsx(Ox,{className:"cart-trolley"}),f.jsxs("span",{className:"cart-total--item",children:[s," "]})]})}),o?f.jsxs("li",{className:"user-profile",children:[f.jsx("img",{src:i.picture,alt:i.name}),f.jsxs("div",{className:"user-info",children:[f.jsx("span",{children:i.name}),f.jsx("span",{children:i.email})]}),f.jsx(qt,{className:"user-button",onClick:()=>r({logoutParams:{returnTo:window.location.origin}}),children:"Log Out"})]}):f.jsx("li",{children:f.jsx(qt,{className:"user-button",onClick:()=>n(),children:"Log In"})})]}),f.jsxs("div",{className:"mobile-navbar-btn",children:[f.jsx(Ix,{name:"menu-outline",className:"mobile-nav-icon",onClick:()=>t(!0)}),f.jsx(bx,{name:"close-outline",className:"mobile-nav-icon close-outline",onClick:()=>t(!1)})]})]})})},Lx=()=>f.jsxs($x,{children:[f.jsx(Pe,{to:"/",children:f.jsx("img",{className:"logo",src:"./Images/logo.png",alt:"My logo design"})}),f.jsx(zx,{})]}),$x=F.header`

  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({theme:e})=>e.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`,Ax=()=>{const e={colors:{heading:"#1A1A1A",text:"rgba(29, 29, 29, 0.8)",white:"#fff",black:"#212529",helper:"#00FF00",bg:"linear-gradient(135deg, #8A2BE2, #4B0082)",footer_bg:"#0a1435",btn:"rgb(98, 84, 243)",border:"rgba(98, 84, 243, 0.5)",hr:"#ffffff",gradient:"linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px"},media:{mobile:"768px",tab:"998px"}};return f.jsx(nv,{theme:e,children:f.jsxs(Qg,{children:[f.jsx(Tx,{}),f.jsx(Lx,{}),f.jsxs(Hg,{children:[f.jsx(bt,{path:"/",element:f.jsx(i2,{})}),f.jsx(bt,{path:"/products",element:f.jsx(x2,{})}),f.jsx(bt,{path:"/about",element:f.jsx(k2,{})}),f.jsx(bt,{path:"/contact",element:f.jsx(ex,{})}),f.jsx(bt,{path:"/singleproduct/:id",element:f.jsx(gx,{})}),f.jsx(bt,{path:"/cart",element:f.jsx(wx,{})}),f.jsx(bt,{path:"*",element:f.jsx(Rx,{})})]})]})})},Dx="dev-mlsgd7e8x0x65cyl.us.auth0.com",Fx="BtLvIyzX32OKZq58wW192iDt0pNFWTCG";xa.createRoot(document.getElementById("root")).render(f.jsx(q2,{domain:Dx,clientId:Fx,authorizationParams:{redirect_uri:window.location.origin},children:f.jsx(t2,{children:f.jsx(c2,{children:f.jsx(fx,{children:f.jsx(Ax,{})})})})}));
