
  const handlePreviewImage = (data) => {
      popupImage.src = data.link;
      popupCaption.textContent = data.name;
      popupImage.alt = `Photo of ${data.name}`;
      togglePopupBox(photoModal)
  };

  function togglePopupBox(modalWindow) {
    modalWindow.classList.toggle("popup-box_open");
    if ( modalWindow.classList.contains("popup-box_open")) { 
      document.addEventListener("keydown", handleEsc); 
    } else {
      document.removeEventListener("keydown", handleEsc); 
    }
  };

  const handleEsc = (evt) => {
    evt.preventDefault();
    const activePopup = document.querySelector(".popup-box_open");
  
    if (evt.key === "Escape") {
      togglePopupBox(activePopup)
    }
  };


class Card {
  constructor(data, templateSelector) {
      this._link = data.link;
      this._name = data.name;
      this._templateSelector = templateSelector;
  }

  // _getTemplate() {
  //     const cardTemplate = this._templateSelector.querySelector("#card-template");
  //     return cardTemplate;
  // }

  _handleToggleLike() { 
    likeButton.classList.toggle("photo-grid__heart_clicked");
  }

  _handleRemoveCard() { 
    this._card.remove();
  }

  _setEventListeners() {
    const cardImage = this._card.querySelector(".photo-grid__photo")
    const likeButton = this._card.querySelector(".photo-grid__heart");
    const deleteButton = this._card.querySelector(".photo-grid__delete");

    likeButton.addEventListener("click", this._handleToggleLike); 
    deleteButton.addEventListener("click", this._handleRemoveCard); 
    cardImage.addEventListener("click", handlePreviewImage);  
  }

  generateCard() {
    
    const cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid");
    this._card  = cardTemplate.cloneNode(true);
    //const cardImage = //
    console.log('01')

    const cardTitle = this._card.querySelector(".photo-grid__title");
    const cardNameInput = document.querySelector(".popup-box__text_type_card");
    const cardLinkInput = document.querySelector(".popup-box__text_type_photo");

    this._card.querySelector(".photo-grid__photo").src = this._link;
    this._card.querySelector(".photo-grid__title").alt = `Photo of ${this._name}`;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._card;
  };
}

export default Card;