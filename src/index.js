import './styles/index.css'; 
import FormValidator from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import UserInfo from './scripts/UserInfo.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import Section from './scripts/Section.js';


//////////
///validation////
const defaultConfig = {
  inputSelector: ".popup-box__text",
  submitButtonSelector: ".popup-box__save",
  inactiveButtonClass: "popup-box__save_disabled",
  inputErrorClass: "popup-box__error",
  errorClass: "popup-box__error_visible"
};

const cardForm = document.querySelector(".popup-box__container_type_card");
const profileForm = document.querySelector(".popup-box__container_type_profile");

const editFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, cardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


//// render initial cards////
// const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
//   },
//   {
//     name: "Lake Louise",
//     link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
//   },
//   {
//     name: "Latemar",
//     link: "https://code.s3.yandex.net/web-code/latemar.jpg"
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://code.s3.yandex.net/web-code/lago.jpg"
//   }
// ]; 

// function handleCardSubmit(evt) {
//     evt.preventDefault();
//     const newCardData = {
//       name : cardNameInput.value,
//       link : cardLinkInput.value
//     }
// renderCard(newCardData);
// togglePopupBox(addCardModal);
// }


// const placesList = document.querySelector(".grid-container");
// const openBox = document.querySelector('.profile__text-button');
// const addCardButton = document.querySelector(".profile__photo-button");

// function renderCard(data) {
//   const card = new Card(data, '#card-template');
//   placesList.prepend(card.generateCard(data));
// }
// function handleCardSubmit(evt) {
//     evt.preventDefault();
//     const newCardData = {
//       name : cardNameInput.value,
//       link : cardLinkInput.value
//     }
// renderCard(newCardData);
// togglePopupBox(addCardModal);
// }
// initialCards.forEach(card => {
//   card = new Card(initialCards, '#card-template')
//   cardList.renderer(card.generateCard(data));
// });
// const initialCard = new Card(initialCards, '#card-template');

// ////////// card model
// const initialCard = new Card(initialCards, '#card-template');


// initialCards.forEach(card => {
//   card = new Card(initialCards,'#card-template')
//   // cardList.renderer();
//   // card.generateCard(data)
// });
// const cardNameInput = document.querySelector(".popup-box__text_type_card");
// const cardLinkInput = document.querySelector(".popup-box__text_type_photo");
// renderCard(newCardData);

const newCardData = {
  name: document.querySelector(".popup-box__text_type_card").value,
  link: document.querySelector(".popup-box__text_type_photo").value
}

const cardList = new Section(newCard, renderer, ".grid-container")
const newCard = new Card(newCardData, '#card-template');
const addCardPopup = new PopupWithForm(newCard.generateCard(), ".popup-box__container_type_card")

document.querySelector(".profile__photo-button").addEventListener('click', () => {
  addCardPopup.open()  ///open the popup and add listener for esc key
  // const card = new Card(data, '#card-template');
  addCardPopup.setEventListeners(); ///set event listener for exit, submit, and click outside of popup exit, reset inputs
}
);

///profile model
const userInfo = new UserInfo('.profile__name', '.profile__bio');
const profilePopup = new PopupWithForm(userInfo.setUserInfo(".popup-box__text_type_name", '.popup-box__text_about'), ".popup-box__container_type_profile")

document.querySelector('.profile__text-button').addEventListener('click', () => {
  profilePopup.open() ///open the popup and add listener for esc key
  userInfo.getUserInfo(document.querySelector(".popup-box__text_type_name").value, document.querySelector(".popup-box__text_about").value); ///fill in the input fields with current data
  profilePopup.setEventListeners(); ///set event listener for exit, submit, and click outside of popup exit
}
);
  // document.querySelector(".popup-box__text_type_name").value = ""; 
  // document.querySelector(".popup-box__text_about").value = "";   
///preview photo modal

// userInfo.setUserInfo();
// openBox.addEventListener("click", () => profilePopup.open());
// function addItem() {

// }
// profilePopup.setEventListeners();
// addCardPopup.setEventListeners();

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


// const placesList = document.querySelector(".grid-container");
// const openBox = document.querySelector('.profile__text-button');
// const addCardButton = document.querySelector(".profile__photo-button");

// function renderCard(data) {
//   const card = new Card(data, '#card-template');
//   placesList.prepend(card.generateCard(data));
// }


// openBox.addEventListener("click", () => handleOpenProfileModel());
// addCardButton.addEventListener("click", () => togglePopupBox(addCardModal));


//////constants////////////////////////////////

// //card wrapper///

// const photoModal = document.querySelector(".popup-box_type_photo");

// //open modal buttons//


// //current profile data///
// const currentName = document.querySelector(".profile__name");
// const currentBio = document.querySelector(".profile__bio");

// // modal inputs//
// const nameInput = document.querySelector(".popup-box__text_type_name");
// const jobInput = document.querySelector(".popup-box__text_about");

// const cardNameInput = document.querySelector(".popup-box__text_type_card");
// const cardLinkInput = document.querySelector(".popup-box__text_type_photo");

// ///Buttons
// const addCardModalCloseButton = document.querySelector(".popup-box__exit_type_add-card");
// const profileModalCloseButton = document.querySelector(".popup-box__exit_type_profile");
// const photoPreviewCloseButton = document.querySelector(".popup-box__exit_preview");


/////function and handlers////////////////////////////////////////////////
// function handleOpenProfileModel() {
//   if (!addProfileInfo.classList.contains("open")) {
//     nameInput.value = currentName.textContent
//     jobInput.value = currentBio.textContent
//   }
// togglePopupBox(addProfileInfo);
// }

  // function togglePopupBox(modalWindow) {
  //   modalWindow.classList.toggle("popup-box_open");
  //   if ( modalWindow.classList.contains("popup-box_open")) { 
  //     document.addEventListener("keydown", handleEsc); 
  //   } else {
  //     document.removeEventListener("keydown", handleEsc); 
  //   }
  // }

  // const handleEsc =(evt) => {
  //   const activePopup = document.querySelector(".popup-box_open");
  
  //   if (evt.key === "Escape") {
  //     togglePopupBox(activePopup)
  //   }
  // };

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   currentName.textContent = nameInput.value;
//   currentBio.textContent = jobInput.value;
//   togglePopupBox(addProfileInfo);
// }



// function handleCardSubmit(evt) {
//   evt.preventDefault();
//   const newCardData = {
//     name : cardNameInput.value,
//     link : cardLinkInput.value
//   }
  
//   renderCard(newCardData);
//   togglePopupBox(addCardModal);
// }



////event listeners//////////////////////////////////////


// profileForm.addEventListener('click', (evt) => {
//   if (evt.target.classList.contains('popup-box')) {
//     togglePopupBox(profileForm);
//   }
// });

// addProfileInfo.addEventListener('click', (evt) => {

//   if (evt.target.classList.contains('popup-box')) {
//     togglePopupBox(addProfileInfo);
//   }
// });

// photoModal.addEventListener('click', (evt) => {
//   if (evt.target.classList.contains('popup-box')) {
//     togglePopupBox(photoModal);
//   }
// });

// profileForm.addEventListener('submit', handleProfileFormSubmit);
// cardForm.addEventListener("submit", handleCardSubmit);



// addCardModalCloseButton.addEventListener("click", () => togglePopupBox(addCardModal));
// profileModalCloseButton.addEventListener("click", () => togglePopupBox(addProfileInfo));
// photoPreviewCloseButton.addEventListener("click", () => togglePopupBox(photoModal));

