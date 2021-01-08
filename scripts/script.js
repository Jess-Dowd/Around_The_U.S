 
let openBox = document.querySelector('.profile__text-button');
let closeBox = document.querySelector(".popup-box__exit");
let popupBox = document.querySelector(".popup-box");
let formElement =  document.querySelector(".popup-box__save");
let nameInput = document.querySelector(".popup-box__text_name");
let jobInput = document.querySelector(".popup-box__text_about");
let currentName = document.querySelector(".profile__name");
let currentBio = document.querySelector(".profile__bio");

function open() {
  popupBox.classList.add ("popup-box_open");
  nameInput.value = currentName.textContent
  jobInput.value = currentBio.textContent
  
}

function close() {
  popupBox.classList.remove("popup-box_open");
  
}


function handleFormSubmit (evt) {
  evt.preventDefault();

  currentName.textContent = nameInput.value;
  currentBio.textContent = jobInput.value;
  close()   
};



openBox.addEventListener("click", open);

closeBox.addEventListener("click", close);

formElement.addEventListener('click', handleFormSubmit);












