import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor({handleFormSubmit}, popupSelector) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit
    }

    _getInputValues(input) {
        // const currentInput = this._popupElement.querySelectorAll('.popup-box__text').value ;  
        // const currentInput = this._popupElement.querySelectorAll(".popup-box__text");     
        input = this._popupElement.querySelectorAll(".popup-box__text");
    };

    close() {
        this._getInputValues(input); 
        input.value = '';
        super.close()
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (e) => {
            evt.preventDefault();
            this._handleFormSubmit()

            this.close();
        });
    }
 }

export default PopupWithForm;



// close(name, job) {
//     this._popupElement.querySelector(".popup-box__text_type_name").value = name;
//     this._popupElement.querySelector(".popup-box__text_about").value = job;
//     super.open();
// }

// _getInputValues() {
//     const inputValue = {
//         this._popupElement.querySelector('.popupBox__text').value,
//         this._popupElement.querySelector(popupSelector).value,
//     },
//     return currentUserInfo;
// }

// _getInputValues() {
//     const cardImage = this._card.querySelector(".photo-grid__photo")
//     const cardTitle = this._card.querySelector(".photo-grid__title");
//     const inputValue = {
//         this._popupElement.querySelector('.popupBox__text').value,
//         this._popupElement.querySelector(popupSelector).value,
//     },
//     return currentUserInfo;
// }

// InputValue = this._popupElement.querySelector(".popup-box__text").value;
// getUserInfo() {
//     const currentUserInfo = {
//         name: this._name.textContent,
//         job: this._job.textContent,
//     },
//     return currentUserInfo;
// };
// setEventListenerse(e) {
//     evt.preventDefault();
//     this._popupElement.addEventListener('submit', this._handleFormSubmit);
//     super.setEventListeners();
//     _getInputValues()
//     this.close
// }
// profileForm.addEventListener('submit', handleProfileFormSubmit);
// cardForm.addEventListener("submit", handleCardSubmit);

// addCardModalCloseButton.addEventListener("click", () => togglePopupBox(addCardModal));
// profileModalCloseButton.addEventListener("click", () => togglePopupBox(addProfileInfo));
// photoPreviewCloseButton.addEventListener("click", () => togglePopupBox(photoModal));

// function handleProfileFormSubmit(evt) {
//     evt.preventDefault();
//     currentName.textContent = nameInput.value;
//     currentBio.textContent = jobInput.value;
//     togglePopupBox(addProfileInfo);
//   }

// function handleCardSubmit(evt) {
//     evt.preventDefault();
//     const newCardData = {
//       name : cardNameInput.value,
//       link : cardLinkInput.value
//     }
// renderCard(newCardData);
// togglePopupBox(addCardModal);
// }

// setEventListeners() {
//     this._popupElement.addEventListener('click', (evt) => {
//         if (evt.target.classList.contains('popup-box')) {
//           this.close();
//         }
//     })
// }

// const nameInput = document.querySelector(".popup-box__text_type_name");
// const jobInput = document.querySelector(".popup-box__text_about");

//  function handleOpenProfileModel() {
//     if (!addProfileInfo.classList.contains("open")) {
//       nameInput.value = currentName.textContent
//       jobInput.value = currentBio.textContent
//     }
//   togglePopupBox(addProfileInfo);
//   }

// generateCard() {
//     const cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid");
//     this._card = cardTemplate.cloneNode(true);

//     const cardImage = this._card.querySelector(".photo-grid__photo")
//     const cardTitle = this._card.querySelector(".photo-grid__title");

//     cardImage.src = this._link;
//     cardTitle.alt = `Photo of ${this._name}`;
//     cardTitle.textContent = this._name;

//     this._setEventListeners();

//     return this._card;
//   };
// }