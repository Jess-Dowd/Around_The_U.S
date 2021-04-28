class Card {
  constructor({data, handlePreviewImage}, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handlePreviewImage = handlePreviewImage;
  }

  _handleRemoveCard(e) {
    const thisDeleteButton = e.target.closest('.photo-grid__delete')
    const thisCard = thisDeleteButton.closest('.photo-grid')
    thisCard.remove();
  }

  _handleToggleLike(e) {
    const thisLikeButton = e.target.closest('.photo-grid__heart')
    thisLikeButton.classList.toggle("photo-grid__heart_clicked");
  }

  _setEventListeners() {
    const cardImage = this._card.querySelector(".photo-grid__photo")
    const likeButton = this._card.querySelector(".photo-grid__heart");
    const deleteButton = this._card.querySelector(".photo-grid__delete");

    likeButton.addEventListener("click", this._handleToggleLike);
    deleteButton.addEventListener("click", this._handleRemoveCard);
    cardImage.addEventListener("click", this._handlePreviewImage()); 
  }

  generateCard() {
    const cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid");
    this._card = cardTemplate.cloneNode(true);

    const cardImage = this._card.querySelector(".photo-grid__photo")
    const cardTitle = this._card.querySelector(".photo-grid__title");

    cardImage.src = this._link;
    cardTitle.alt = `Photo of ${this._name}`;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._card;
  };
}

export default Card;
