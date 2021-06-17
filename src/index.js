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
  // baseUrl: "https://around.nomoreparties.co/v1/group-10",
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

////////////render page from server/////////////////////

/////get user info/////////////
const userInfo = new UserInfo('.profile__name', '.profile__bio', '.profile__image');

api.getUserInfo()
.then((res) => {
    userInfo.setUserInfo (res.name, res.about); ///get and set user info
    userInfo.setUserPic( res.avatar ); 
       
})
.catch((err) => {console.log(err)});

///////////////////////
//render initial cards//
/////////////////////

const cardList = new Section(
  { items: [] }, ".grid-container");

// myArray.find(x => x.id === '45').foo;



api.getInitialCards()
  .then((res) => {
    for (let index = 0; index < res.length; index++) {

      cardList.items.unshift(createCard(res[index]))


    }
   
  })
  .catch((err) => { console.log(err) });

////////change profile pic popup//
document.querySelector('.profile__image-button').addEventListener('click', () => {
  profilePic.open()
})

const profilePicInput = document.querySelector(".popup-box__text_type_user-pic")
const profilePic = new PopupWithForm(".popup-box__container_type_user-pic", {
  handleFormSubmit: () => {
    // e.preventDefault()
    // changeLoadingText(true);
    api.changeUserPic({ avatar: profilePicInput.value })
      .then((res) => {
        userInfo.setUserPic(res.avatar);
      })
      .catch((err) => console.log(err))

    // changeLoadingText(false);
    // profilePic.close()
  }
})

profilePic.setEventListeners();

//////////////////
//profile model///
/////////////////
const nameInput = document.querySelector(".popup-box__text_type_name")
const jobInput = document.querySelector(".popup-box__text_about")
const getValue = userInfo.getUserInfo();

document.querySelector('.profile__text-button').addEventListener('click', () => {
  profilePopup.open()    ///open the popup and add listener for esc key 

  nameInput.value = getValue.name;   ///fill in the input fields with current data
  jobInput.value = getValue.job;
})

const profilePopup = new PopupWithForm(".popup-box__container_type_profile", {  ///create popup that changes profile info
  handleFormSubmit: () => { ////set what happens when form is submitted
    // e.preventDefault();
    // profilePopup.changeLoadingText(true);  ///change save button while loading.
    api.changeUserInfo({ name: nameInput.value, about: jobInput.value }) ///set new user info.
      .then((res) => {
        userInfo.setUserInfo(res.name, res.about);
        // profilePopup.close();
      })
      .catch((err) => { console.log(err) })
      // .finally(() => {
      //   profilePopup.changeLoadingText(false);
        // profilePopup._popup.reset();
      // });
  }
});

profilePopup.setEventListeners();  ///set event listener for exit, submit, and click outside of popup exit

///////////////////////
//image modal///////
//////////////////////
const imagePopup = new PopupWithImage(".popup-box__container_type_photo");
imagePopup.setEventListeners();

///////create card modal///////
function handleOpenModalCard() {
  cardPopup.open()
  const saveButton = document.querySelector('.popup-box__save')
  saveButton.classList.add('.popup-box__save_disabled')
  document.querySelector('.popup-box__container_type_card').reset();
}

const titleInput = document.querySelector(".popup-box__text_type_card")
const linkInput = document.querySelector(".popup-box__text_type_photo")
const addCardButton = document.querySelector(".profile__photo-button");
addCardButton.addEventListener("click", () => handleOpenModalCard());

const cardPopup = new PopupWithForm(".popup-box__container_type_card", {
  handleFormSubmit: () => {
    // e.preventDefault();
    // cardPopup.changeLoadingText(true);
    api.addNewCard({ name: titleInput.value, link: linkInput.value })
      .then((res) => {
        cardList.items.push(createCard(res))
      })
      .catch((err) => console.log(err))
      // .finally(() => {
      //   cardPopup.changeLoadingText(false);
      // });
  }
});

cardPopup.setEventListeners();



function createCard(cardItem) {
  const card = new Card(
    cardItem,
    {
      handleCardClick: (e) => {

        if (e.target.classList.contains("photo-grid__delete")) {
          const formDelete = new PopupWithForm('.popup-box__container_type_delete', {
            handleFormSubmit: () => {
              api.deleteCard(e.target.parentElement.id)
                .catch((err) => console.log(err))
                .finally(() => {
                  e.target.parentElement.remove();
 
                });
            }
          });
          formDelete.setEventListeners();
          formDelete.open()

        } else if (e.target.classList.contains("photo-grid__heart_clicked")) {
          api.unlikeCard(cardItem)
            .then((res) => {

              e.target.classList.remove("photo-grid__heart_clicked");
              e.target.parentElement.querySelector(".photo-grid__like-count").textContent = res.likes.length;

            })
            .catch((err) => { console.log(err) });
        } else if (e.target.classList.contains("photo-grid__heart")) {
          api.likeCard(cardItem, 'dfe326a7bc47ff5776017a43')
            .then((res) => {

              e.target.classList.add("photo-grid__heart_clicked");
              e.target.parentElement.querySelector(".photo-grid__like-count").textContent = res.likes.length;

            })
            .catch((err) => { console.log(err) });
        } else if (e.target.classList.contains("photo-grid__photo")) {
              imagePopup.open(e.target.parentElement.querySelector(".photo-grid__title").textContent, e.target.src);
        }
      }
    },
  

    "#card-template", 'dfe326a7bc47ff5776017a43')
  cardList.addItem(card.generateCard());
}

