class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    ///open
    open() {
        const popupBox = this._popupElement.closest(".popup-box")
        popupBox.classList.add("popup-box_open");
        document.addEventListener("keydown", this._handleEscClose);
    }

    ///close
    close() {
        const popupBox = this._popupElement.closest(".popup-box")
        popupBox.classList.remove("popup-box_open");
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
