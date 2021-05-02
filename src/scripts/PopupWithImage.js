import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        super.open();
        
        const text = this._popupElement.querySelector(".popup-box__caption")
        const image = this._popupElement.querySelector(".popup-box__image")
        
        text.textContent = name;
        image.src = link;
        image.alt = name;
    }
 }

export default PopupWithImage;