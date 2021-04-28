class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    ///open
    open() {
        this._popupElement.classList.add("popup-box_open");
        document.addEventListener("keydown", this._handleEscClose);
    }

    ///close
    close() {
        this._popupElement.classList.remove("popup-box_open");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    //handleescclose
    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

    ///seteventlisteners
    setEventListeners() {
        this._popupElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup-box') ){
              this.close();
            }
        })
    }
}

export default Popup;
