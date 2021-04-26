(()=>{"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const t=function(){function t(e,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=o,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}var o,n;return o=t,(n=[{key:"_showError",value:function(e){this._error=this._formElement.querySelector("#"+e.id+"-error"),this._error.textContent=e.validationMessage,this._error.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){this._error=this._formElement.querySelector("#"+e.id+"-error"),this._error.textContent="",this._error.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_toggleButtonState",value:function(e){var t=e.every((function(e){return e.validity.valid})),o=this._formElement.querySelector(this._submitButtonSelector);t?o.classList.remove(this._inactiveButtonClass):o.classList.add(this._inactiveButtonClass)}},{key:"_addEventListener",value:function(){var e=this,t=Array.from(this._formElement.querySelectorAll(this._inputSelector));t.forEach((function(o){o.addEventListener("input",(function(){e._checkInputValidity(o),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._addEventListener()}}])&&e(o.prototype,n),t}();function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(e){var t=document.querySelector(".popup-box_type_photo"),o=document.querySelector(".popup-box__image"),n=document.querySelector(".popup-box__caption"),i=e.target.closest(".photo-grid");o.src=e.target.src,n.textContent=i.querySelector(".photo-grid__title").textContent,o.alt="Photo of ".concat(e.target.src),r(t)};function r(e){e.classList.toggle("popup-box_open"),e.classList.contains("popup-box_open")?document.addEventListener("keydown",i):document.removeEventListener("keydown",i)}var i=function(e){e.preventDefault();var t=document.querySelector(".popup-box_open");"Escape"===e.key&&r(t)};const a=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._name=t.name,this._templateSelector=o}var t,r;return t=e,(r=[{key:"_handleRemoveCard",value:function(e){e.target.closest(".photo-grid__delete").closest(".photo-grid").remove()}},{key:"_handleToggleLike",value:function(e){e.target.closest(".photo-grid__heart").classList.toggle("photo-grid__heart_clicked")}},{key:"_setEventListeners",value:function(){var e=this._card.querySelector(".photo-grid__photo"),t=this._card.querySelector(".photo-grid__heart"),o=this._card.querySelector(".photo-grid__delete");t.addEventListener("click",this._handleToggleLike),o.addEventListener("click",this._handleRemoveCard),e.addEventListener("click",n)}},{key:"generateCard",value:function(){var e=document.querySelector("#card-template").content.querySelector(".photo-grid");this._card=e.cloneNode(!0);var t=this._card.querySelector(".photo-grid__photo"),o=this._card.querySelector(".photo-grid__title");return t.src=this._link,o.alt="Photo of ".concat(this._name),o.textContent=this._name,this._setEventListeners(),this._card}}])&&o(t.prototype,r),e}();var c={inputSelector:".popup-box__text",submitButtonSelector:".popup-box__save",inactiveButtonClass:"popup-box__save_disabled",inputErrorClass:"popup-box__error",errorClass:"popup-box__error_visible"},s=document.querySelector(".popup-box_type_profile"),u=document.querySelector(".popup-box_type_card"),l=u.querySelector(".popup-box__container_type_card"),p=s.querySelector(".popup-box__container_type_profile"),d=new t(c,p),_=new t(c,l);d.enableValidation(),_.enableValidation();var h=document.querySelector(".grid-container"),v=document.querySelector(".popup-box_type_photo"),y=document.querySelector(".profile__text-button"),m=document.querySelector(".profile__photo-button"),f=document.querySelector(".profile__name"),b=document.querySelector(".profile__bio"),x=document.querySelector(".popup-box__text_type_name"),g=document.querySelector(".popup-box__text_about"),k=document.querySelector(".popup-box__text_type_card"),S=document.querySelector(".popup-box__text_type_photo"),E=document.querySelector(".popup-box__exit_type_add-card"),L=document.querySelector(".popup-box__exit_type_profile"),q=document.querySelector(".popup-box__exit_preview");function C(e){e.classList.toggle("popup-box_open"),e.classList.contains("popup-box_open")?document.addEventListener("keydown",w):document.removeEventListener("keydown",w)}var w=function(e){var t=document.querySelector(".popup-box_open");"Escape"===e.key&&C(t)};function B(e){var t=new a(e,"#card-template");h.prepend(t.generateCard(e))}[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}].forEach((function(e){B(e)})),p.addEventListener("submit",(function(e){e.preventDefault(),f.textContent=x.value,b.textContent=g.value,C(s)})),p.addEventListener("click",(function(e){e.target.classList.contains("popup-box")&&C(p)})),s.addEventListener("click",(function(e){e.target.classList.contains("popup-box")&&C(s)})),v.addEventListener("click",(function(e){e.target.classList.contains("popup-box")&&C(v)})),l.addEventListener("submit",(function(e){e.preventDefault(),B({name:k.value,link:S.value}),C(u)})),y.addEventListener("click",(function(){return s.classList.contains("open")||(x.value=f.textContent,g.value=b.textContent),void C(s)})),m.addEventListener("click",(function(){return C(u)})),E.addEventListener("click",(function(){return C(u)})),L.addEventListener("click",(function(){return C(s)})),q.addEventListener("click",(function(){return C(v)}))})();