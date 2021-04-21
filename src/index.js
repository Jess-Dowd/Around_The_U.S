import './styles/index.css'; 
import FormValidator from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
//////////"rm -rf dist && webpack"
///validation////
const defaultConfig = {
  inputSelector: ".popup-box__text",
  submitButtonSelector: ".popup-box__save",
  inactiveButtonClass: "popup-box__save_disabled",
  inputErrorClass: "popup-box__error",
  errorClass: "popup-box__error_visible"
};

const addProfileInfo = document.querySelector(".popup-box_type_profile");
const addCardModal = document.querySelector(".popup-box_type_card");

const cardForm = addCardModal.querySelector(".popup-box__container_type_card");
const profileForm = addProfileInfo.querySelector(".popup-box__container_type_profile");

const editFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, cardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

////initial cards////
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

//////constants////////////////////////////////

// //card wrapper///
const placesList = document.querySelector(".grid-container");
const photoModal = document.querySelector(".popup-box_type_photo");

// //open modal buttons//
const openBox = document.querySelector('.profile__text-button');
const addCardButton = document.querySelector(".profile__photo-button");

// //current profile data///
const currentName = document.querySelector(".profile__name");
const currentBio = document.querySelector(".profile__bio");

// // modal inputs//
const nameInput = document.querySelector(".popup-box__text_type_name");
const jobInput = document.querySelector(".popup-box__text_about");

const cardNameInput = document.querySelector(".popup-box__text_type_card");
const cardLinkInput = document.querySelector(".popup-box__text_type_photo");

// ///Buttons
const addCardModalCloseButton = document.querySelector(".popup-box__exit_type_add-card");
const profileModalCloseButton = document.querySelector(".popup-box__exit_type_profile");
const photoPreviewCloseButton = document.querySelector(".popup-box__exit_preview");


/////function and handlers////////////////////////////////////////////////
function handleOpenProfileModel() {
  if (!addProfileInfo.classList.contains("open")) {
    nameInput.value = currentName.textContent
    jobInput.value = currentBio.textContent
  }
togglePopupBox(addProfileInfo);
}

  function togglePopupBox(modalWindow) {
    modalWindow.classList.toggle("popup-box_open");
    if ( modalWindow.classList.contains("popup-box_open")) { 
      document.addEventListener("keydown", handleEsc); 
    } else {
      document.removeEventListener("keydown", handleEsc); 
    }
  }

  const handleEsc =(evt) => {
    const activePopup = document.querySelector(".popup-box_open");
  
    if (evt.key === "Escape") {
      togglePopupBox(activePopup)
    }
  };

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  currentName.textContent = nameInput.value;
  currentBio.textContent = jobInput.value;
  togglePopupBox(addProfileInfo);
}

function renderCard(data) {
  const card = new Card(data, '#card-template');
  placesList.prepend(card.generateCard(data));
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name : cardNameInput.value,
    link : cardLinkInput.value
  }
  
  renderCard(newCardData);
  togglePopupBox(addCardModal);
}

initialCards.forEach(card => {
  renderCard(card);
});

////event listeners//////////////////////////////////////
profileForm.addEventListener('submit', handleProfileFormSubmit);

profileForm.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(profileForm);
  }
});

addProfileInfo.addEventListener('click', (evt) => {

  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(addProfileInfo);
  }
});

photoModal.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(photoModal);
  }
});

cardForm.addEventListener("submit", handleCardSubmit);

openBox.addEventListener("click", () => handleOpenProfileModel());
addCardButton.addEventListener("click", () => togglePopupBox(addCardModal));

addCardModalCloseButton.addEventListener("click", () => togglePopupBox(addCardModal));
profileModalCloseButton.addEventListener("click", () => togglePopupBox(addProfileInfo));
photoPreviewCloseButton.addEventListener("click", () => togglePopupBox(photoModal));

