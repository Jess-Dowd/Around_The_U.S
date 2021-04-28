import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit
    }

    getInputValues() {
            const values = {}
            values = { name: this._popupElement.elements['field1'].value, link: this._popupElement.elements['field2'].value };
            return values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener("submit", (e) => {
            this._handleFormSubmit(e, this.getInputValues());
            this.close();
            this._popupElement.reset();
        })
        const closeButton = this._popupElement.querySelector('.popup-box__exit')
        closeButton.addEventListener('click', () => {
            this.close();
        });

    }
    
    

}

export default PopupWithForm;
