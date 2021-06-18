import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit

    }

    close() {
        super.close();
    }

    open() {
        super.open();
        this._popupElement.querySelector(".popup-box__save").textContent = "Save";
    }

    setEventListeners() {

        this._popupElement.addEventListener("submit", (e) => {
            e.preventDefault()
            this._popupElement.querySelector(".popup-box__save").textContent = "Saving...";
            this._handleFormSubmit();
            this.close()
        })
        super.setEventListeners();
    }
}

export default PopupWithForm;