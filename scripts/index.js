import FormValidator from './FormValidator.js';
import Card from './Card.js';

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

editFormValidator.enableValidation(config, profileForm);
addFormValidator.enableValidation(config, cardForm);

const card = new Card(config, cardForm);

card.generateCard();

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

initialCards.forEach(card =>{
  placesList.prepend(card);
});

//////////modals////////////
const activePopup = document.querySelector(".popup-box_open")

/////////card modal inputs//////////
const photoName = document.querySelector(".popup-box__text_type_card");
const link = document.querySelector(".popup-box__text_type_photo");

/////////profile modal inputs///////////
const nameInput = document.querySelector(".popup-box__text_type_name");
const jobInput = document.querySelector(".popup-box__text_about");


/////////////////////////////////
///Buttons  
//////////// ////////////////////
const openBox = document.querySelector('.profile__text-button');
const addCardButton = document.querySelector(".profile__photo-button");

const popupImage = document.querySelector(".popup-box__image");
const popupCaption = document.querySelector(".popup-box__caption");


const currentName = document.querySelector(".profile__name");
const currentBio = document.querySelector(".profile__bio");
const placesList = document.querySelector(".grid-container");


/////////Functions///////////////////////////

function togglePopupBox(modalWindow) {
  modalWindow.classList.toggle("popup-box_open");
  if ( modalWindow.classList.contains("popup-box_open")) { 
    document.addEventListener("keydown", handleEsc); 
  } else {
    document.removeEventListener("keydown", handleEsc); 
  }
  console.log()
};

function openCardModel(evt) {
  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(addCardModal);
  }
}

function openProfileModel() {
  if (!addProfileInfo.classList.contains("open")) {
    nameInput.value = currentName.textContent
    jobInput.value = currentBio.textContent
  }
togglePopupBox(addProfileInfo);
}


///handler///
function handleToggleLike() {
  const likeButton = cardElement.querySelector(".photo-grid__heart");

  likeButton.classList.toggle("photo-grid__heart_clicked");
}

function handleRemoveCard() {
  const deleteButton = cardElement.querySelector(".photo-grid__delete");

  deleteButton.cardElement.remove();
}

function handleCardPreview(evt) {
  const photoModal = document.querySelector(".popup-box_type_photo");
  popupImage.src = cardImage;
  popupCaption.textContent = placeName;
  popupImage.alt = `Photo of ${placeName}`;
  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(photoModal);
  }
}

function handleEsc (evt) {
  const activePopup = document.querySelector(".popup-box_open");

  if (evt.key === "Escape") {
    togglePopupBox(activePopup)
  }
};

function handleExitClick() {
  if (evt.target.classList.contains('popup-box')) {
    togglePopupBox(activePopup);
  }
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  card.generateCard();
  placesList.prepend(card);
  togglePopupBox(addCardModal)
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  currentName.textContent = nameInput.value;
  currentBio.textContent = jobInput.value;
  togglePopupBox(addProfileInfo)
};

/////////event listeners////////
openBox.addEventListener("click", openProfileModel);
addCardModal.addEventListener('click', openCardModel) ;

profileForm.addEventListener('submit', handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardSubmit);

activePopup.exitButtonSelector.addEventListener("click", () => togglePopupBox(activePopup));
modalSelector.addEventListener('click', handleExitClick);

likeButton.addEventListener("click", handleToggleLike); 
deleteButton.addEventListener("click", handleRemoveCard);
photoModal.addEventListener('click', handleCardPreview);