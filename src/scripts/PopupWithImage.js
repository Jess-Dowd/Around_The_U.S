import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(link, caption) {
        this._popupElement.querySelector(".popup-box__image").src = link;
        this._popupElement.querySelector(".popup-box__caption").src = caption;
        super.open();
    }
 }

export default PopupWithImage;