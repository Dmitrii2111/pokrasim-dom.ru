parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"T0VR":[function(require,module,exports) {

},{"./img/Back_Case/case6.jpg":[["case6.6bab5baf.jpg","efNv"],"efNv"],"./img/шлиф.png":[["шлиф.ea7a0955.png","vkuG"],"vkuG"],"./img/7b3d652b67aa0aec24451e98778ec63e.png":[["7b3d652b67aa0aec24451e98778ec63e.66b271ee.png","QblE"],"QblE"],"./img/шов.png":[["шов.fc86dc1e.png","Yl0k"],"Yl0k"],"./img/Back_Case/case4.jpg":[["case4.5508b1e6.jpg","BKdv"],"BKdv"],"./img/done.png":[["done.475c14fa.png","do3z"],"do3z"],"./img/chevron-down-outline.svg":[["chevron-down-outline.d229a313.svg","ggPc"],"ggPc"],"./img/pexels-eva-elijas-5940999.jpg":[["pexels-eva-elijas-5940999.4940905f.jpg","TWr1"],"TWr1"]}],"WtFD":[function(require,module,exports) {
list.onclick=function(e){if(e.preventDefault(),"DIV"==e.target.tagName){var t=e.target.nextElementSibling;console.log(e.target),t.hidden=!t.hidden,1==t.hidden?e.target.style="font-weight: 400":e.target.style="font-weight: 700"}},document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".__services_card"),t=document.querySelector("#overlay-modal"),a=document.querySelectorAll(".js-modal-close");e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var a=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+a+'"]').classList.add("active"),t.classList.add("active")})}),a.forEach(function(e){e.addEventListener("click",function(e){this.parentNode.classList.remove("active"),t.classList.remove("active")})})});
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./style.scss"),require("./JS/pure_js");
},{"./style.scss":"T0VR","./JS/pure_js":"WtFD"}]},{},["H99C"], null)
//# sourceMappingURL=src.cb4284b1.js.map