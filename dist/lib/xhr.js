!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCoreImageUpload=t():e.VueCoreImageUpload=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=52)}({52:function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};void 0===XMLHttpRequest.prototype.sendAsBinary&&(XMLHttpRequest.prototype.sendAsBinary=function(e){var t=Array.prototype.map.call(e,function(e){return 255&e.charCodeAt(0)});this.send(new Uint8Array(t).buffer)}),e.exports=function(e,t,o,r,s,a,i){function u(e){for(var t={},o=/([a-z\-]+):\s?(.*);?/gi,n=void 0;n=o.exec(e);)t[n[1]]=n[2];return t}var p=new XMLHttpRequest,f=a||function(){console.error("AJAX ERROR!")},c="vuecodeimageupload",l=!1;"blob"===e&&(l=e,e="GET"),console.log(r),e=e.toUpperCase(),p.onload=function(){var t=p.response;try{t=JSON.parse(p.responseText)}catch(e){401===p.status&&(t=f("access_denied",p.statusText))}var o=u(p.getAllResponseHeaders());o.statusCode=p.status,s(t||("GET"===e?f("empty_response","Could not get resource"):{}),o)},p.onerror=function(){var e=p.responseText;try{e=JSON.parse(p.responseText)}catch(e){console.error(e)}s(e||f("access_denied","Could not get resource"))};var d=void 0;if("GET"===e||"DELETE"===e)r=null;else if(i){var y=r,m=r.base64Code.replace("data:"+r.type+";base64,","");r=["--"+c,'Content-Disposition: form-data; name="'+r.filed+'"; filename="'+r.filename+'"',"Content-Type: "+r.type,"",window.atob(m),""].join("\r\n");var b=Object.keys(y);if(b.length>4){var v=!0,x=!1,C=void 0;try{for(var T,g=b[Symbol.iterator]();!(v=(T=g.next()).done);v=!0){var h=T.value;-1==["filed","filename","type","base64Code"].indexOf(h)&&(r+=["--"+c,'Content-Disposition: form-data; name="'+h+'";',"",""].join("\r\n"),r+=["object"===n(y[h])?JSON.stringify(y[h]):y[h],""].join("\r\n"))}}catch(a){x=!0,C=a}finally{try{!v&&g.return&&g.return()}finally{if(x)throw C}}}r+="--"+c+"--"}if(p.open(e,t,!0),l&&("responseType"in p?p.responseType=l:p.overrideMimeType("text/plain; charset=x-user-defined")),o){for(d in o)p.setRequestHeader(d,o[d]);i&&p.setRequestHeader("Content-Type","multipart/form-data; boundary="+c)}return i?p.sendAsBinary(r):(p.withCredentials=!0,p.send(r),p)}}})});