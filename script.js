(function open(){ 
  let openBox = document.querySelector('.profile__text-button');
  let popupBox = document.querySelector(".popup-box")
  openBox.addEventListener("click", function () {
    popupBox.classList.add ("popup-box_open");
    popupBox.classList.remove("popup-box_closed");
  }) })();

(function close(){
    let popupBox = document.querySelector(".popup-box");
    let closeBox = document.querySelector(".popup-box__exit");
    closeBox.addEventListener("click", function () {
      popupBox.classList.add ("popup-box_closed");
      popupBox.classList.remove("popup-box_open");
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

 


function toggleHeart(id) {

  var heartButton = document.getElementById(id).innerHTML;

  if(heartButton == '<img src="./images/Vector-heart.svg" alt="heart button">')
  {
  document.getElementById(id).innerHTML = '<img src= "./images/clickedheart.png" alt="heart button">';
  }
  if(heartButton == '<img src= "./images/clickedheart.png" alt="heart button">')
  {
  document.getElementById(id).innerHTML = '<img src="./images/Vector-heart.svg" alt="heart button">';
  }
}