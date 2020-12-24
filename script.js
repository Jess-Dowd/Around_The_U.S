(function open(){ 
  let openBox = document.querySelector('.profile__text-button');
  let popupBox = document.querySelector(".popup-box")
  openBox.addEventListener("click", function () {
    popupBox.classList.add ("popup-box__open");
    popupBox.classList.remove("popup-box__closed");
  }) })();

(function close(){
    let popupBox = document.querySelector(".popup-box");
    let closeBox = document.querySelector(".popup-box__exit");
    closeBox.addEventListener("click", function () {
      popupBox.classList.add ("popup-box__closed");
      popupBox.classList.remove("popup-box__open");
    }) })();  



let formElement =  document.querySelector(".popup-box__container");

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let nameInput = document.querySelector(".popup-box__name").value;
    let jobInput = document.querySelector(".popup-box__about").value;


  
    let profileValue = document.querySelector(".profile__name");
    let profileBio = document.querySelector(".profile__bio");

    profileValue.textContent = nameInput;
    profileBio.textContent = jobInput;
    
};

formElement.addEventListener('submit', handleFormSubmit);
