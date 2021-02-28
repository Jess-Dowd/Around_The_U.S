
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

  return cardElement;
  
}; 

//function onAddNewCard() {
  //initialCards.push({
   // name: "Miami",
    //link: "localhost"
  //});
  //placesList.append(cardElement);
//}

function renderCard(card, wrapper) {
  wrapper.append(createCardElement(card));
};

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
//formElement.addEventListener('click', handleFormSubmit);heart photo

formElement.addEventListener('click', handleFormSubmit);
//formElement.addEventListener('click', handleFormSubmit);submit photo

initialCards.forEach(card => renderCard(card, placesList));

//const deleteButton = cardElement.querySelector("photo-grid__delete");
//console.log(deleteButton);
//createCardElement(popupBox);
//function deleteCard() {
 // const listItem = deleteButton.closest("photo-grid");
 // listItem.remove();
//};
//deleteButton.addEventListener('click', deleteCard);

//deleteButton.addEventListener("click", deleteCard);
  
  //function removeCardElement(card) {

  //};

  //deleteButton.addEventListener("click", () => {
    //deleteButton.parentElement.remove
 //};

  //cardImage.addEventListener("click", () => {
    //handleevent
  //}); 

  //likeButton.addEventListener("click", () => {
    //handle event
  //};
  //};

//const onImagePreveiw = card => {
  //toggleModalWindow(photoModal);
//};

//const onLikeButtonClick = card => {
  //placesList.removeChild(card)
//};