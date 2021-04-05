

class Card {
    constructor(data, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".photo-grid");

        return cardTemplate;
    }

    _setEventListeners() {
      const cardImage = this._card.querySelector(".photo-grid__photo")
      const likeButton = this._card.querySelector(".photo-grid__heart");
      const deleteButton = this._card.querySelector(".photo-grid__delete");

      likeButton.addEventListener("click", this._toggleLike); 
      deleteButton.addEventListener("click", this._removeCard); 
      cardImage.addEventListener("click", this._previewImage);
    }

    generateCard() {
      this._card = this._getTemplate().cloneNode(true);

      const cardImage = this._card.querySelector(".photo-grid__photo")
      const cardTitle = this._card.querySelector(".photo-grid__title");

      cardImage.src = `url(${this._link})`;
      cardImage.alt = `Photo of ${this._name}`;
      cardTitle.textContent = this._name;

      this._setEventListeners();

      return this._card;
    };

    _previewImage() {
      popupImage.src = cardImage;
      popupCaption.textContent = placeName;
      popupImage.alt = `Photo of ${placeName}`;
      togglePopupBox(photoModal)
    }

    _toggleLike() {
      likeButton.classList.toggle("photo-grid__heart_clicked");
    }
    
    _removeCard() { 
      this._card.remove
    }
}

export default Card;