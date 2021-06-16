import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit
    }

    close() {
        super.close();
        // document.querySelector('.popup-box__container').reset();
        document.getElementById('popup-box__save').classList.add('popup-box__save_disabled')
        
    }

    open() {
        super.open();
    }

    _getInputValues() {  ///name, link
        
        return { 
                // name: this._popupElement.elements['field1'].value, 
                // link: this._popupElement.elements['field2'].value, 
        };
        
    }

    setEventListeners() {
        
        this._popupElement.addEventListener("submit", (e) => {
            e.preventDefault()
            this._handleFormSubmit(e, this._getInputValues());
            this.close();
        })

        super.setEventListeners();

    }
    
    

}

export default PopupWithForm;
