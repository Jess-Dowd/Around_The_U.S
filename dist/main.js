(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.formElement=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}var n,o;return n=t,(o=[{key:"_showError",value:function(e){this._error=this.formElement.querySelector("#"+e.id+"-error"),this._error.textContent=e.validationMessage,this._error.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){this._error=this.formElement.querySelector("#"+e.id+"-error"),this._error.textContent="",this._error.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_toggleButtonState",value:function(e){var t=e.every((function(e){return e.validity.valid})),n=this.formElement.querySelector(this._submitButtonSelector);t?n.classList.remove(this._inactiveButtonClass):n.classList.add(this._inactiveButtonClass)}},{key:"enableValidation",value:function(){var e=this;this.formElement.addEventListener("submit",(function(e){e.preventDefault()}));var t=Array.from(this.formElement.querySelectorAll(this._inputSelector));t.forEach((function(n){n.addEventListener("input",(function(){e._checkInputValidity(n),e._toggleButtonState(t)}))}))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const o=function(){function e(t,n){var o=t.card,r=t.handlePreviewImage;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=o.link,this._name=o.name,this._templateSelector=n,this._handlePreviewImage=r}var t,o;return t=e,(o=[{key:"_handleRemoveCard",value:function(e){e.target.closest(".photo-grid__delete").closest(".photo-grid").remove()}},{key:"_handleToggleLike",value:function(e){e.target.closest(".photo-grid__heart").classList.toggle("photo-grid__heart_clicked")}},{key:"_setEventListeners",value:function(){var e=this._card.querySelector(".photo-grid__photo"),t=this._card.querySelector(".photo-grid__heart"),n=this._card.querySelector(".photo-grid__delete");t.addEventListener("click",this._handleToggleLike),n.addEventListener("click",this._handleRemoveCard),e.addEventListener("click",this._handlePreviewImage)}},{key:"generateCard",value:function(){var e=document.querySelector("#card-template").content.querySelector(".photo-grid");this._card=e.cloneNode(!0);var t=this._card.querySelector(".photo-grid__photo"),n=this._card.querySelector(".photo-grid__title");return t.src=this._link,n.alt="Photo of ".concat(this._name),n.textContent=this._name,this._setEventListeners(),this._card}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=document.querySelector(t),this.job=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,job:this.job.textContent}}},{key:"setUserInfo",value:function(e,t){this.name.textContent=e.value,this.job.textContent=t.value}}])&&r(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.closest("#popup-box").classList.add("popup-box_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.closest("#popup-box").classList.remove("popup-box_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.closest("#popup-box").addEventListener("click",(function(t){t.target.classList.contains("popup-box")&&e.close()})),this._popupElement.querySelector(".popup-box__exit").addEventListener("click",(function(){e.close()}))}}])&&a(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(r){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n,o=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=o,n}return t=a,(n=[{key:"open",value:function(){s(h(a.prototype),"open",this).call(this)}},{key:"_getInputValues",value:function(){return{name:this._popupElement.elements.field1.value,link:this._popupElement.elements.field2.value}}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._getInputValues()),e._popupElement.reset(),e.close()})),s(h(a.prototype),"setEventListeners",this).call(this)}}])&&l(t.prototype,n),a}(c);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(r){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){v(g(a.prototype),"open",this).call(this);var n=this._popupElement.querySelector(".popup-box__caption"),o=this._popupElement.querySelector(".popup-box__image");n.textContent=e,o.src=t}}])&&_(t.prototype,n),a}(c);function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const w=function(){function e(t,n,o){var r=n.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(o),this._renderer=r,this.items=t}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this.items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&k(t.prototype,n),e}();var S={inputSelector:".popup-box__text",submitButtonSelector:".popup-box__save",inactiveButtonClass:"popup-box__save_disabled",inputErrorClass:"popup-box__error",errorClass:"popup-box__error_visible"},x=new t(S,document.querySelector(".popup-box__container_type_profile")),C=new t(S,document.querySelector(".popup-box__container_type_card"));x.enableValidation(),C.enableValidation();var L=document.querySelector(".popup-box__text_type_name"),O=document.querySelector(".popup-box__text_about"),j=new i(".profile__name",".profile__bio"),P=new d(".popup-box__container_type_profile",{handleFormSubmit:function(){j.setUserInfo(L,O)}});P.setEventListeners(),document.querySelector(".profile__text-button").addEventListener("click",(function(){P.open();var e=j.getUserInfo();L.value=e.name,O.value=e.job}));var q=new E(".popup-box_type_photo");q.setEventListeners(),document.querySelector(".profile__photo-button").addEventListener("click",(function(){return I.open()}));var R=new w([{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],{renderer:function(e){var t=new o({card:e,handlePreviewImage:function(){q.open(e.name,e.link)}},"#card-template");R.addItem(t.generateCard())}},".grid-container");R.renderItems();var I=new d(".popup-box__container_type_card",{handleFormSubmit:function(e,t){e.preventDefault();var n={name:t.name,link:t.link},r=new o({card:n,handlePreviewImage:function(){q.open(n.name,n.link)}},"#card-template");R.addItem(r.generateCard())}},".grid-container");I.setEventListeners()})();