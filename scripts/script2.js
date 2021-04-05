import FormValidator from './FormValidator2.js';
//import Card from './Card.js';

const config = {
  modalSelector: ".popup-box",
  formSelector: ".popup-box__container",
  inputSelector: ".popup-box__text",
  submitButtonSelector: ".popup-box__save",
  exitButtonSelector: ".popup-box__exit",
  inactiveButtonClass: "popup-box__save_disabled",
  inputErrorClass: "popup-box__error",
  errorClass: "popup-box__error_visible"
};

const addCardModal = document.querySelector(".popup-box_type_card");
const addProfileInfo = document.querySelector(".popup-box_type_profile");

const cardForm = addCardModal.querySelector(".popup-box__container_type_card");
const profileForm = addProfileInfo.querySelector(".popup-box__container_type_profile");

const editFormValidator = new FormValidator(config, profileForm);
const addFormValidator = new FormValidator(config, cardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//const card = new Card(config, cardForm);

//card.generateCard();

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


const photoModal = document.querySelector(".popup-box_type_photo");

const nameInput = document.querySelector(".popup-box__text_type_name");
const jobInput = document.querySelector(".popup-box__text_about");
const link = document.querySelector(".popup-box__text_type_photo");
const photoName = document.querySelector(".popup-box__text_type_card");
const modalRoot = document.querySelector(".popup-box");
const modal = document.querySelector(".popup-box__container");

/////////////////////////////////
///Buttons and other DOM elements 
//////////// ////////////////////
const openBox = document.querySelector('.profile__text-button');
const addCardButton = document.querySelector(".profile__photo-button");
const addCardModalCloseButton = document.querySelector(".popup-box__exit_type_add-card");
const profileModalCloseButton = document.querySelector(".popup-box__exit_type_profile");
const photoPreviewCloseButton = document.querySelector(".popup-box__exit_preview");
const profileFormElement = document.querySelector(".popup-box__save_profile");
const cardCreate = document.querySelector(".popup-box__save_card");
const currentName = document.querySelector(".profile__name");
const currentBio = document.querySelector(".profile__bio");
const popupImage = document.querySelector(".popup-box__image");
const popupCaption = document.querySelector(".popup-box__caption");
//////////////
///wrappers 
//////////// 
const placesList = document.querySelector(".grid-container");

///////////////////////////
///Functions and handlers
/////////////////////////

const handleEsc =(evt) => {
  const activePopup = document.querySelector(".popup-box_open");

  if (evt.key === "Escape") {
    togglePopupBox(activePopup)
  }
};

function togglePopupBox(modalWindow) {
  modalWindow.classList.toggle("popup-box_open");
  if ( modalWindow.classList.contains("popup-box_open")) { 
    document.addEventListener("keydown", handleEsc); 
  } else {
    document.removeEventListener("keydown", handleEsc); 
  }
};

addCardButton.addEventListener("click", () => togglePopupBox(addCardModal));
addCardModalCloseButton.addEventListener("click", () => togglePopupBox(addCardModal));
profileModalCloseButton.addEventListener("click", () => togglePopupBox(addProfileInfo));
photoPreviewCloseButton.addEventListener("click", () => togglePopupBox(photoModal));

addCardModal.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(addCardModal);
  }
});

addProfileInfo.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(addProfileInfo);
    console.log("01");
  }
  console.log("02");
});

photoModal.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(photoModal);
    console.log("03");
  }
  console.log("04");
});

function openProfileModel() {
  if (!addProfileInfo.classList.contains("open")) {
    nameInput.value = currentName.textContent
    jobInput.value = currentBio.textContent
  }
togglePopupBox(addProfileInfo);
}

openBox.addEventListener("click", () => openProfileModel());

function createCard(placeLink, placeName) {
  const cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid");
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".photo-grid__photo")
  const cardTitle = cardElement.querySelector(".photo-grid__title");

  cardImage.src = placeLink;
  cardTitle.textContent = placeName;
  cardImage.alt = `Photo of ${placeName}`;

  const likeButton = cardElement.querySelector(".photo-grid__heart");
  const deleteButton = cardElement.querySelector(".photo-grid__delete");
  
  deleteButton.addEventListener("click", () => cardElement.remove());

  function toggleHeart() {
    likeButton.classList.toggle("photo-grid__heart_clicked");
  }
  likeButton.addEventListener("click", toggleHeart); 

  cardImage.addEventListener("click", () => {
    popupImage.src = placeLink;
    popupCaption.textContent = placeName;
    popupImage.alt = `Photo of ${placeName}`;
    togglePopupBox(photoModal)
  });
  return cardElement
};

function addCard(placeLink, placeName){
  const newCard = createCard(placeLink, placeName);
  placesList.prepend(newCard);
};

function handleCardSubmit(evt) {
  evt.preventDefault();
  addCard(link.value, photoName.value)
  togglePopupBox(addCardModal)
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  currentName.textContent = nameInput.value;
  currentBio.textContent = jobInput.value;
  togglePopupBox(addProfileInfo)
};

profileForm.addEventListener('submit', handleProfileFormSubmit);

cardForm.addEventListener("submit", handleCardSubmit);
initialCards.forEach(card =>{
  addCard(card.link, card.name);
});