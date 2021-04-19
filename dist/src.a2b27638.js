// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../.nvm/versions/node/v12.16.3/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../.nvm/versions/node/v12.16.3/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../.nvm/versions/node/v12.16.3/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./img/Back_Case/case6.jpg":[["case6.b5ffdd7d.jpg","src/img/Back_Case/case6.jpg"],"src/img/Back_Case/case6.jpg"],"./img/icon-error.svg":[["icon-error.d32343f4.svg","src/img/icon-error.svg"],"src/img/icon-error.svg"],"./img/услуги/shlif.jpg":[["shlif.539bb90b.jpg","src/img/услуги/shlif.jpg"],"src/img/услуги/shlif.jpg"],"./img/услуги/03-germetizatsiya-tortsov-03.jpg":[["03-germetizatsiya-tortsov-03.e5941f54.jpg","src/img/услуги/03-germetizatsiya-tortsov-03.jpg"],"src/img/услуги/03-germetizatsiya-tortsov-03.jpg"],"./img/услуги/Germetik-v-dereve.jpg":[["Germetik-v-dereve.9cdbadea.jpg","src/img/услуги/Germetik-v-dereve.jpg"],"src/img/услуги/Germetik-v-dereve.jpg"],"./img/Back_Case/case5.jpg":[["case5.288eebf3.jpg","src/img/Back_Case/case5.jpg"],"src/img/Back_Case/case5.jpg"],"./img/Back_Case/case4.jpg":[["case4.4162923a.jpg","src/img/Back_Case/case4.jpg"],"src/img/Back_Case/case4.jpg"],"./img/done.png":[["done.e786e7d3.png","src/img/done.png"],"src/img/done.png"],"./img/pexels-eva-elijas-5940999.jpg":[["pexels-eva-elijas-5940999.def3310b.jpg","src/img/pexels-eva-elijas-5940999.jpg"],"src/img/pexels-eva-elijas-5940999.jpg"],"_css_loader":"../../../../.nvm/versions/node/v12.16.3/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/JS/formValidate.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var formValue = {};
var btn = document.querySelector('#submit');
var email = document.querySelector('#email');
btn.addEventListener('click', validateForm);

function validateForm() {
  var arr = _toConsumableArray(document.getElementsByTagName('input'));

  console.log(arr);
  arr.forEach(function (element) {
    if (element.id != 'submit') {
      formValue[element.id] = element.value;

      if (!element.value) {
        var errrorInput = document.querySelector("#".concat(element.id));
        errrorInput.classList.add('error');
        var visibility = 'visible';
        showMessage(errrorInput, visibility);
      } else if (element.value && element.id != 'email') {
        var correctInput = document.querySelector("#".concat(element.id));
        correctInput.classList.remove('error');
        var _visibility = 'hidden';
        showMessage(correctInput, _visibility);
      } else if (element.value && element.id === 'email') {
        validateEmail(email);
      } else return;
    }
  });
}

function validateEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email.value) === false) {
    var errrorInput = document.querySelector("#".concat(email.id));
    errrorInput.classList.add('error');
  } else {
    var correctInput = document.querySelector("#".concat(email.id));
    correctInput.classList.remove('error');
    var visibility = 'hidden';
    showMessage(correctInput, visibility);
  }
}

function showMessage(input, visibility) {
  input.nextElementSibling.style = "visibility: ".concat(visibility, ";");
}
},{}],"src/JS/faq.js":[function(require,module,exports) {
// FAQ 
list.onclick = function (event) {
  event.preventDefault();

  if (event.target.tagName === 'DIV') {
    var hidenElement = event.target.nextElementSibling;
    var arrow = event.target.childNodes[1];
    hidenElement.hidden = !hidenElement.hidden;

    if (hidenElement.hidden == true) {
      arrow.style.transform = 'rotate(360deg)';
      event.target.style = "font-weight: 400";
    } else {
      arrow.style.transform = 'rotate(180deg)';
      event.target.style = "font-weight: 700";
    }
  } else if (event.target.tagName === 'IMG') {
    var _hidenElement = event.target.parentNode.nextElementSibling;
    var text = event.target.parentNode;
    _hidenElement.hidden = !_hidenElement.hidden;

    if (_hidenElement.hidden == true) {
      text.style = "font-weight: 400";
      event.target.style.transform = 'rotate(360deg)';
    } else {
      text.style = "font-weight: 700";
      event.target.style.transform = 'rotate(180deg)';
    }
  } else return;
};
},{}],"src/JS/modal.js":[function(require,module,exports) {
// Модальные окна
document.addEventListener('DOMContentLoaded', function () {
  var modalCall = document.querySelectorAll('.__services_card');
  var overlay = document.querySelector('#overlay-modal');
  var closeButtons = document.querySelectorAll('.js-modal-close');
  modalCall.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var modalId = this.getAttribute('data-modal');
      var modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
      modalElem.classList.add('active');
      overlay.classList.add('active');
    });
  });
  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      this.parentNode.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
});
},{}],"src/JS/hamburgerMenu.js":[function(require,module,exports) {
$(document).ready(function () {
  $(".menuToggle").click(function () {
    $(".logo").toggleClass("active");
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function () {
      if ($(this).css('display') === "none") {
        $(this).removeAttr('style');
      }
    });
  });
});
},{}],"src/JS/faqAnimation.js":[function(require,module,exports) {
$(document).ready(function () {
  $(".text_block").click(function () {
    $(this).next().slideToggle(300);
  });
});
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./style.scss");

require("./JS/formValidate");

require("./JS/faq");

require("./JS/modal");

require("./JS/hamburgerMenu");

require("./JS/faqAnimation");
},{"./style.scss":"src/style.scss","./JS/formValidate":"src/JS/formValidate.js","./JS/faq":"src/JS/faq.js","./JS/modal":"src/JS/modal.js","./JS/hamburgerMenu":"src/JS/hamburgerMenu.js","./JS/faqAnimation":"src/JS/faqAnimation.js"}],"../../../../.nvm/versions/node/v12.16.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49660" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.nvm/versions/node/v12.16.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)