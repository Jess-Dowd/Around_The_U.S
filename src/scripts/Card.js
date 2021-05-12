class Card {
  constructor({card, handleCardClick}, templateSelector, user) {
    this._link = card.link;
    this._name = card.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick
    this._user = user;
    this.likes = card.likes;
    this._creator = card.owner._id;
}

// _handleRemoveCard(e) { 
//   e.target.parentcard.remove();
//   this._card = null;
// }

// _handleToggleLike(e) { 
//   const thisLikeButton = e.target.closest('.photo-grid__heart')
//   thisLikeButton.classList.toggle("photo-grid__heart_clicked");
// }

_setEventListeners() {
  const likeButton = this._card.querySelector(".photo-grid__heart");
  const deleteButton = this._card.querySelector(".photo-grid__delete");

    
    cardImage.addEventListener("click", () => {
      this._handleCardClick({
        name: this._name,
        link: this._link,
      });
    }); 
  }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo-grid")
      .cloneNode(true);
     
    return cardTemplate;
  }

generateCard() {
  
  this._card = this._getCardTemplate()

  const cardImage = this._card.querySelector(".photo-grid__photo")
  const likeButton = this._card.querySelector(".photo-grid__heart");
  const deleteButton = this._card.querySelector(".photo-grid__delete");

  // const cardImage = this._card.querySelector(".photo-grid__photo")
  const cardTitle = this._card.querySelector(".photo-grid__title");
  const likeCount = this._card.querySelector(".photo-grid__like-count");

  if (this._creator !== this._user) {
    deleteButton.style.display = "none";
} else {
  deleteButton.name = this._id;
  likeButton.name = this._id;
}
if (this.likes.some((like) => {return (like._id === this._user);})) {
  likeButton.classList.add("photo-grid__heart_clicked");
}

  cardImage.src = this._link;
  cardTitle.alt = `Photo of ${this._name}`;
  cardTitle.textContent = this._name;
  likeCount.textContent = this.likes.length;

  this._setEventListeners();

  return this._card;
};
}

export default Card;
