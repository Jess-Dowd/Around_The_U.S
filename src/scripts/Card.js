class Card {
  constructor(card, { handleCardClick }, templateSelector, user) {
    this._card = card
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick
    this._user = user;
  }

  // _handleRemoveCard(e) { 
  //   e.target.parentcard.remove();
  //   this._card = null;
  // }

  // _handleToggleLike(e) { 
  //   const thisLikeButton = e.target.closest('.photo-grid__heart')
  //   thisLikeButton.classList.toggle("photo-grid__heart_clicked");
  // }

  // _setEventListeners() {
  //   // const likeButton = this._card.querySelector(".photo-grid__heart");
  //   // const cardDeleteButton = this._card.closest(".photo-grid__delete");
  //   // const cardImage = this._card.querySelector(".photo-grid__photo")

  // this._card.addEventListener('click', (e) => {

  //   this._handleCardClick  
  // })

  //   cardImage.addEventListener("click", () => {
  //     this._handleCardClick
  //   }); 

  //   likeButton.addEventListener("click", () => {
  //   if (this.likes.some((like) => {return (like._id === this._user);})) {
  //     likeButton.classList.add("photo-grid__heart_clicked");
  //   } else {likeButton.classList.remove("photo-grid__heart_clicked")}
  // });

  // }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo-grid")
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {

    this._template = this._getCardTemplate()

    const cardImage = this._template.querySelector(".photo-grid__photo")
    const deleteButton = this._template.querySelector(".photo-grid__delete");

    // const cardImage = this._card.querySelector(".photo-grid__photo")
    const cardTitle = this._template.querySelector(".photo-grid__title");
    const likeCount = this._template.querySelector(".photo-grid__like-count");
    if (this._card.owner._id !== this._user) {
      deleteButton.style.display = 'none';
    }

    cardImage.src = this._card.link;
    cardTitle.alt = `Photo of ${this._card.name}`;
    cardTitle.textContent = this._card.name;
    likeCount.textContent = this._card.likes.length;
    this._template.id = this._card._id

    // this._setEventListeners();

    this._template.addEventListener('click', (e) => {

    this._handleCardClick(e)
    })
    return this._template;
  };
}

export default Card;