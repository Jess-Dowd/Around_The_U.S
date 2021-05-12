class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popupBox = this._popupElement.closest(".popup-box")
        if (this._popupElement.querySelector(".popup-box__save")) {
            this._submitBtn = this._popupElement.querySelector(".popup-box__save")
            this._submitBtnText = this._submitBtn.textContent;
        }
    }
    
    ///open
    open() {
        this._popupBox.classList.add("popup-box_open");
        document.addEventListener("keydown", this._handleEscClose);
    }

    ///close
    close() {
        this._popupBox.classList.remove("popup-box_open");
        document.removeEventListener("keydown", this._handleEscClose);
        
    }

    changeLoadingText(isLoading) {
        if (isLoading) {
            this._submitBtn.textContent = "Saving...";
        } else {
            this._submitBtn.textContent = this._submitBtnText;
        }
    }

    //handleescclose
    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

    ///seteventlisteners
    setEventListeners() {
        this._popupElement.closest(".popup-box").addEventListener('click', (e) => {
            if (e.target.classList.contains('popup-box') ){
              this.close();
            }
        })
        const closeButton = this._popupElement.querySelector('.popup-box__exit')
        closeButton.addEventListener('click', () => {
            this.close();
        });
    }
}

export default Popup;
