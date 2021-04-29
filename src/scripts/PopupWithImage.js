import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        super.open();
        
        const text = this._popupElement.querySelector(".popup-box__caption")
        const image = this._popupElement.querySelector(".popup-box__image")
        
        text.src = name;
        image.src = link;
    }
 }

export default PopupWithImage;