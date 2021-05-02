import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(caption, link) {
        super.open();
        
        const text = this._popupElement.querySelector(".popup-box__caption")
        const image = this._popupElement.querySelector(".popup-box__image")
        
        text.textContent = caption;
        image.src = link;
        image.alt = caption;
    }
 }

export default PopupWithImage;