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
  baseUrl: "https://around.nomoreparties.co/group-10",
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



/////get user info/////////////
const userInfo = new UserInfo('.profile__name', '.profile__bio', '.profile__image' );

// api.getUserInfo()
// .then((res) => {
//   console.log(res, "1");
//     userInfo.setUserInfo (res.name, res.about); ///get and set user info
//     userInfo.setUserPic( res.avatar ); 
//     userInfo.setUserId(res._id) ///set uset pic
    
//     console.log(userInfo.myId, "2");
    
//     // console.log(res._id)
//     // return res._id;       
// })
// .catch((err) => {console.log(err)});


////////change profile pic popup//
document.querySelector('.profile__image-button').addEventListener('click', () => {
  profilePic.open()    
})

const profilePicInput = document.querySelector(".popup-box__text_type_user-pic")
const profilePic = new PopupWithForm(".popup-box__container_type_user-pic", {handleFormSubmit: () => {
  // e.preventDefault()
  profilePic.changeLoadingText(true);
  api.changeUserPic({avatar: profilePicInput.value})
      .then((res) => {
        console.log(res, '99')
        userInfo.setUserPic(res.avatar);
        })
      .catch((err) => console.log(err))
      
  profilePic.changeLoadingText(false);
}})

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
  profilePopup.changeLoadingText(true);  ///change save button while loading.
  api.changeUserInfo({ name: nameInput.value, about: jobInput.value }) ///set new user info.
      .then((res) => {
          console.log(res, '8')
          userInfo.setUserInfo(res.name, res.about);
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
addCardButton.addEventListener("click", () => handleOpenModalCard() );

const cardPopup = new PopupWithForm(".popup-box__container_type_card", { handleFormSubmit: () => {
  // e.preventDefault();
  cardPopup.changeLoadingText(true);
  api.addNewCard({ name: titleInput.value, link: linkInput.value})
      .then((res) => {
        console.log(res, '8');
        cardList.items.push(createCard(res))
      })
      .catch((err) => console.log(err))
      .finally(() => {
          cardPopup.changeLoadingText(false);
      });
  }});

cardPopup.setEventListeners();
///////////////////////
//render initial cards//
/////////////////////

const cardList = new Section (
  {items: []} , ".grid-container");

// myArray.find(x => x.id === '45').foo;



api.getInitialCards()
    .then((res) => {
      console.log(res, "3")
        
        console.log(cardList, "3.5")
        for (let index = 0; index < res.length; index++) {
          
          cardList.items.unshift(createCard(res[index])) 
          
          
        }
        // console.log(cardList, "3.6")
        // for (let index = 0; index < cardList.items.length; index++) {
        //   cardList.items.forEach(createCard(cardList.items[index]))
        // }
        
    })
    .catch((err) => {console.log(err)});


function createCard(cardItem) {
  const card = new Card(
    cardItem,
    {
      handleCardClick: (e) => {
        
          if (e.target.classList.contains("photo-grid__delete")) {
            const formDelete = new PopupWithForm('.popup-box__container_type_delete', { handleFormSubmit: () => {
              api.deleteCard(e.target.parentElement.id)
                  .catch((err) => console.log(err))
                  .finally(() => {
                      e.target.parentElement.remove();
                      // api.getInitialCards()
                      // .then((res) => {
                      //   for (let index = 0; index < res.length; index++) {
                      
                      //     cardList.items.unshift(createCard(res[index])) 
                      // }})
                      // .catch((err) => {console.log(err)});
                  });
            }});
            formDelete.setEventListeners();
            formDelete.open()

          }
        }},
        //   if (e.target.classList.contains("card__image")) {
        //     const name = e.target.querySelector(".photo-grid__title")
        //     const link = e.target.querySelector(".photo-grid__photo")
        //     imagePopup.open(name, link);
        //   } else if (e.target.classList.contains("photo-grid__heart_clicked")) {
        //     api.unlikeCard(cardItem)
        //     .then((res) => {
        //       console.log(res, "4");
        //       e.target.classList.remove("photo-grid__heart_clicked");

        //       e.target.parentElement.querySelector(".card__like-count").textContent = res.likes.length;
        //     })
        //     .catch((err) => {console.log(err)});
        //   } else if (e.target.classList.contains("photo-grid__delete")) {
        //     formDelete.open()  
        //   }  else if (e.target.classList.contains("photo-grid__heart") ) {
        //     api.likeCard(cardItem, userInfo._id)
        //       .then((res) => {
        //         console.log(res, "5");
        //         e.target.classList.add("photo-grid__heart_clicked");

        //         e.target.parentElement.querySelector(".card__like-count").textContent = res.likes.length;
        //       })
        //       .catch((err) => {console.log(err)});
        //   }

      
    
    "#card-template", 'dfe326a7bc47ff5776017a43')
  cardList.addItem(card.generateCard());
}

///////////////////////
//render new cards////
//////////////////////
//////////////////////
//delete card model///
/////////////////////

// const formDelete = new PopupWithForm('.popup-box__container_type_delete', { handleFormSubmit: (e) => {
//   api.deleteCard(e.target.parentElement.classList.contains('photo-grid'))
//       .catch((err) => console.log(err))
//       .finally(() => {
//           api.getInitialCards()
//           .then((res) => {
//             for (let index = 0; index < res.length; index++) {
          
//               cardList.items.unshift(createCard(res[index])) 
//           })
//           .catch((err) => {console.log(err)});
//       });
// }});
// formDelete.setEventListeners();