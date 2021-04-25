class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    // togglePopupBox(modalWindow) {
    //     modalWindow.classList.toggle("popup-box_open");
    //     if ( modalWindow.classList.contains("popup-box_open")) { 
    //       document.addEventListener("keydown", handleEsc); 
    //     } else {
    //       document.removeEventListener("keydown", handleEsc); 
    //     }
    // }

    // handleEsc =(evt) => {
    //     const activePopup = document.querySelector(".popup-box_open");
      
    //     if (evt.key === "Escape") {
    //       togglePopupBox(activePopup)
    //     }
    // };

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
            if (e.target.classList.contains('popup-box') || e.target.classList.contains('popup-box__exit') ){
              this.close();
            }
        })
    }
}

export default Popup;

// const addProfileInfo = new PopupWithForm(".popup-box_type_profile");
// const addCardModal = new PopupWithForm(".popup-box_type_card");
// const photoModal = new Popup(".popup-box_type_photo");

// profileForm.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup-box')) {
//       togglePopupBox(profileForm);
//     }
//   });
  
//   addProfileInfo.addEventListener('click', (evt) => {
  
//     if (evt.target.classList.contains('popup-box')) {
//       togglePopupBox(addProfileInfo);
//     }
//   });
  
//   photoModal.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup-box')) {
//       togglePopupBox(photoModal);
//     }
//   });