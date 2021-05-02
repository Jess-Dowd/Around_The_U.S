import './styles/index.css';
import FormValidator from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import UserInfo from './scripts/UserInfo.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import Section from './scripts/Section.js';


/////////////////
///validation////
/////////////////
const defaultConfig = {
  inputSelector: ".popup-box__text",
  submitButtonSelector: ".popup-box__save",
  inactiveButtonClass: "popup-box__save_disabled",
  inputErrorClass: "popup-box__error",
  errorClass: "popup-box__error_visible"
};

const editFormValidator = new FormValidator(defaultConfig, document.querySelector(".popup-box__container_type_profile"));
const addFormValidator = new FormValidator(defaultConfig, document.querySelector(".popup-box__container_type_card"));

editFormValidator.enableValidation();
addFormValidator.enableValidation();
//////////////////
//profile model///
/////////////////
const nameInput = document.querySelector(".popup-box__text_type_name")
const jobInput = document.querySelector(".popup-box__text_about")

const userInfo = new UserInfo('.profile__name', '.profile__bio' ); ///get user info

const profilePopup = new PopupWithForm(".popup-box__container_type_profile", {
  handleFormSubmit: () => { ///create profile popup and set profile data on submit 
    userInfo.setUserInfo(nameInput, jobInput)
  }
})

profilePopup.setEventListeners();  ///set event listener for exit, submit, and click outside of popup exit

document.querySelector('.profile__text-button').addEventListener('click', () => {
  profilePopup.open()
  const getValue = userInfo.getUserInfo();
  nameInput.value = getValue.name;   ///fill in the input fields with current data
  jobInput.value = getValue.job;
    ///open the popup and add listener for esc key  
})

///////////////////////
//image modal///////
//////////////////////
const imagePopup = new PopupWithImage(".popup-box_type_photo");
imagePopup.setEventListeners();

//////////////////
//card model///
/////////////////
function handleOpenModalCard() {
  cardPopup.open()
  const saveButton = document.querySelector('.popup-box__save')
  saveButton.classList.add('.popup-box__save_disabled')
}

const addCardButton = document.querySelector(".profile__photo-button");
addCardButton.addEventListener("click", () => handleOpenModalCard() );

///////////////////////
//render initial cards//
//////////////////////
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

const defaultCards = new Section (
  initialCards, {
    renderer: (item) => {
      createCard(item) 
    }
}, ".grid-container");

defaultCards.renderItems();



function createCard(item) {
  
  const card = new Card({

    card: item, handlePreviewImage: () => {  //inputvalues, handlepreview, cardtemplateselect
      imagePopup.open(card.name, card.link)}
    
    }, '#card-template')
 
    
  defaultCards.addItem(card.generateCard());
}

///////////////////////
//render new cards////
//////////////////////

const cardPopup = new PopupWithForm(".popup-box__container_type_card", {
  handleFormSubmit: (e, vals) => { ///create profile popup and set profile data on submit 
    e.preventDefault();
    const item = { name: vals.name, link: vals.link };
    createCard(item)

  }
}, ".grid-container");
  

cardPopup.setEventListeners();