///////////////
///Declarations 
///////////////
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 

////////////
///Modals
////////////  
const addCardModal = document.querySelector(".popup-box_type_card");
const addProfileInfo = document.querySelector(".popup-box_type_profile");
const popupBox = document.querySelector(".popup-box");
const nameInput = document.querySelector(".popup-box__text_name");
const jobInput = document.querySelector(".popup-box__text_about");
const photoModal = document.querySelector(".popup-box_type_photo");

/////////////////////////////////
///Buttons and other DOM elements 
//////////// ////////////////////
const addCardButton = document.querySelector(".profile__photo-button")
const addCardModalCloseButton = document.querySelector(".popup-box_exit_add-card")
const profileModalCloseButton = document.querySelector(".popup-box_exit_profile")
const openBox = document.querySelector('.profile__text-button');
const closeBox = document.querySelector(".popup-box__exit");
const photoPreviewCloseButton = document.querySelector(".popup-box_exit_preview");
const formElement = document.querySelector(".popup-box__save");
const cardCreate = document.querySelector(".popup-box__create");
const currentName = document.querySelector(".profile__name");
const currentBio = document.querySelector(".profile__bio");

//////////////
///wrappers 
//////////// 
const placesList = document.querySelector(".grid-container");

////////////
///Functions
//////////// 
function createCardElement(card) {
  const cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid");
  const cardElement = cardTemplate.cloneNode(true);
  
  const cardImage = cardElement.querySelector(".photo-grid__photo");
  const cardTitle = cardElement.querySelector(".photo-grid__title");
  
  const likeButton = cardElement.querySelector(".photo-grid__heart");
  const deleteButton = cardElement.querySelector(".photo-grid__delete");

  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  cardImage.addEventListener("click", () => onImagePreview(card));
  
  deleteButton.addEventListener("click", () => cardElement.remove());

  likeButton.addEventListener("click", () => likeButton.classList.toggle("photo-grid__heart_clicked")); 

  return cardElement; 
}; 

function renderCard(card, wrapper) {
  wrapper.append(createCardElement(card));
};

//addButton.addEventListener("click", function () {
 // const artist = document.querySelector(".input__text_type_artist");
 // const title = document.querySelector(".input__text_type_title");

 // addCard(artist.value, title.value);

  //artist.value = "";
 // title.value = "";
//});

//function addCard(artistValue, titleValue) {
 // const songTemplate = document.querySelector("#song-template").content;
  //const songElement = songTemplate.querySelector('.song').cloneNode(true);

 // songElement.querySelector(".song__artist").textContent = artistValue;
 // songElement.querySelector(".song__title").textContent = titleValue;
  //songElement.querySelector(".song__like").addEventListener("click", function (evt) {
   // evt.target.classList.toggle("song__like_active");
  //}); 
  //songsContainer.append(songElement);
//};

//function onAddNewCard(card) {
 // initialCards.push({
   // name: "Miami",
   /// link: "localhost"
  //});
  //placesList.append(cardElement);
//}

//function handlePlaceCardSubmit(evt) {
 // evt.preventDefault();
 // renderCard(cardElement, placesList)
//}

//function handleCardSubmit(evt) {
 // evt.preventDefault();
 // cardImage.src = card.link;
 // cardTitle.textContent = card.name;
  //togglePopupBox(addCardModal)
//};

const onImagePreview = card => {
  const popupImage = photoModal.querySelector(".popup-box__image");
  const imageCaption = photoModal.querySelector(".popup-box__caption");
  popupImage.src = card.link;
  imageCaption.textContent = card.name
  togglePopupBox(photoModal);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  currentName.textContent = nameInput.value;
  currentBio.textContent = jobInput.value;
  togglePopupBox(addProfileInfo)
};

function togglePopupBox(modalWindow) {
  if (!modalWindow.classList.contains("open")) {
    nameInput.value = currentName.textContent
    jobInput.value = currentBio.textContent
  }
  modalWindow.classList.toggle("popup-box_open");
};

//////////////////
///Event Handlers
/////////////////
addCardButton.addEventListener("click", () => togglePopupBox(addCardModal));
addCardModalCloseButton.addEventListener("click", () => togglePopupBox(addCardModal));

openBox.addEventListener("click", () => togglePopupBox(addProfileInfo));
profileModalCloseButton.addEventListener("click", () => togglePopupBox(addProfileInfo));

photoPreviewCloseButton.addEventListener("click", () => togglePopupBox(photoModal));

formElement.addEventListener('click', handleFormSubmit);

initialCards.forEach(card => renderCard(card, placesList));

//formElement.addEventListener('click', handleFormSubmit);submit photo

//cardElement.addEventListener('click', handleCardSubmit);