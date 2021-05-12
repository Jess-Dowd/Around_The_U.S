import './styles/index.css';
import FormValidator from './scripts/FormValidator.js';
import Card from './scripts/Card.js';
import UserInfo from './scripts/UserInfo.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import Section from './scripts/Section.js';
import Api from './scripts/Api.js';

/////////////////////
///Initilize Api////
////////////////////
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-10",
  headers: {
      authorization: "0ca829a7-d9ab-43f0-95f1-42176c6a1754",
      "Content-Type": "application/json"
  }
});

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

//////////////////////
//delete card model///
/////////////////////

const formDelete = new PopupWithForm('popup-box_type_delete', { handleFormSubmit: () => {
  api.deleteCard(formDelete.currentCardId)
      .catch((err) => console.log(err))
      .finally(() => {
          api.getInitialCards()
          .then((res) => {
              defaultCards._items = res;
              defaultCards.renderItems();
          })
          .catch((err) => {console.log(err)});
      });
}});
formDelete.setEventListeners();

document.querySelector('.photo-grid__delete').addEventListener('click', () => {
  formDelete.open()    
})

//////////////////
//profile model///
/////////////////
const nameInput = document.querySelector(".popup-box__text_type_name")
const jobInput = document.querySelector(".popup-box__text_about")

const userInfo = new UserInfo('.profile__name', '.profile__bio', '.profile__image' );
api.getUserInfo()
    .then((res) => {
        userInfo.setUserInfo({ name: res.name, about: res.about }); ///get and set user info
        userInfo.setUserPic({ url: res.avatar });  ///set uset pic
    })
    .catch((err) => {console.log(err)});

document.querySelector('.profile__text-button').addEventListener('click', () => {
  profilePopup.open()    ///open the popup and add listener for esc key 
  const getValue = userInfo.getUserInfo();
  nameInput.value = getValue.name;   ///fill in the input fields with current data
  jobInput.value = getValue.job;     
})

const profilePopup = new PopupWithForm("popup-box_type_profile", {  ///create popup that changes profile info
  handleFormSubmit: () => { ////set what happens when form is submitted
  // e.preventDefault();
  profilePopup.changeLoadingText(true);  ///change save button while loading.
  api.changeUserInfo({ name: vals.name, about: vals.about }) ///set new user info.
      .then((res) => {
          userInfo.setUserInfo(nameInput, jobInput);
          userInfo.setUserPic({ url: res.avatar });
          // profilePopup.close();
        })
      .catch((err) => {console.log(err)})
      .finally(() => {
          profilePopup.changeLoadingText(false);  
          // profilePopup._popup.reset();
      });

}});

profilePopup.setEventListeners();  ///set event listener for exit, submit, and click outside of popup exit

///////////////////////
//image modal///////
//////////////////////
const imagePopup = new PopupWithImage("popup-box_type_photo");
imagePopup.setEventListeners();

///////////////////////
//render initial cards//
/////////////////////

const defaultCards = new Section (
  {items: [], 
    renderer: (item) => {
      createCard(item) 
    }
}, ".grid-container");


api.getInitialCards()
    .then((res) => {
        defaultCards._items = res;
        defaultCards.renderItems();
    })
    .catch((err) => {console.log(err)});


function createCard(item) {
  const card = new Card({
    card: item, handleCardClick: (e, { name, link }) => {
      if (e.target.classList.contains("card__image")) {
        imagePopup.open({ name, link });
      } else if (e.target.classList.contains("photo-grid__heart")) {
        api.likeCard(item, myUserId)
          .then((res) => {
            if (res.likes.some((like) => { return (like._id === myUserId); })) {
              e.target.classList.add("photo-grid__heart_clicked");
            } else {
              e.target.classList.remove("photo-grid__heart_clicked");
            }
            e.target.parentElement.querySelector(".card__like-count").textContent = res.likes.length;
          });
      }
    },
  },  "#card-template", myUserId)
  defaultCards.addItem(card.generateCard());
}

///////////////////////
//render new cards////
//////////////////////
function handleOpenModalCard() {
  cardPopup.open()
  const saveButton = document.querySelector('.popup-box__save')
  saveButton.classList.add('.popup-box__save_disabled')
  document.querySelector('.popup-box__container_type_card').reset();
}

const addCardButton = document.querySelector(".profile__photo-button");
addCardButton.addEventListener("click", () => handleOpenModalCard() );

const cardPopup = new PopupWithForm("popup-box_type_card", { handleFormSubmit: (e, vals) => {
  e.preventDefault();
  cardPopup.changeLoadingText(true);
  api.addNewCard({ name: vals.name, link: vals.link})
      .then((res) => {
        createCard(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
          cardPopup.changeLoadingText(false);
      });
  }});

cardPopup.setEventListeners();


////////change profile pic popup//

const profilePic = new PopupWithForm("popup-box_type_photo", {handleFormSubmit: (e) => {
  e.preventDefault();
  profilePic.changeLoadingText(true);
  api. changeUserPic({ avatar: newUrl })
      .then((res) => {
        createCard(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
          cardPopup.changeLoadingText(false);
      });
}})

document.querySelector('.profile__image-button').addEventListener('click', () => {
  profilePic.open()    
})

profilePic.setEventListeners();




