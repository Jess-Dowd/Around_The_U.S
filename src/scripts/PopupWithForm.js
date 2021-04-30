import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit
    }

    open() {
        super.open();
    }

    _getInputValues() {  ///name, link
        
        return { 
                name: this._popupElement.elements['field1'].value, 
                link: this._popupElement.elements['field2'].value  
        };
        
    }

    setEventListeners() {
        
        this._popupElement.addEventListener("submit", (e) => {
            this._handleFormSubmit(e, this._getInputValues());
            this._popupElement.reset();
            this.close();
            
        })

        super.setEventListeners();

    }
    
    

}

export default PopupWithForm;
