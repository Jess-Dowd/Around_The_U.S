import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(link, caption) {
        super.open();
        
        const text = this._popupElement.querySelector(".popup-box__image")
        const image = this._popupElement.querySelector(".popup-box__caption")
        
        text.src = caption;
        image.src = link;
    }
 }

export default PopupWithImage;