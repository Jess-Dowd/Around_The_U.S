(function one(){ 
let openBox = document.querySelector('.profile__text-button');
let popupBox = document.querySelector(".popup-box")
console.log(openBox, popupBox);
console.log(popupBox.classList); })();


(function open(){ 
  let openBox = document.querySelector('.profile__text-button');
  let popupBox = document.querySelector(".popup-box")
  openBox.addEventListener("click", function () {
    popupBox.classList.add ("popup-box__open");
    popupBox.classList.remove("popup-box__closed");
  })
  console.log(openBox, popupBox);
  console.log(popupBox.classList); })();


function open() {
  
  console.log(popupBox.classList);
}

open()
//openBox.addEventListener("click", function () {//
  




//let container = document.querySelector(.body__container);//

//let profile = main.querySelector(".profile");//
//
//let openBox = profile.querySelector(".profile__text-button");//

//let inputName = profile.querySelector(".profile__name");//
//let inputBio =profile.querySelector(".profile__bio");//

//function open() {//
  
 
//}let container = document.querySelector('.main')//
//console.log(open)//
//openBox.addEventListener("click", open); //
//^ opens the popup-box when edit button is clicked.//
popupBox.classList.remove(".popup-box__closed");
  popupBox.classList.add('.popup-box__closed');


//let closeBox = popupBox.querySelector(".popup-box__exit")//

//function close() {
  //popupBox.classList.remove(".popup-box__open");
  //popupBox.classList.add('.popup-box__closed');
//}

//closeBox.addEventListener("click", close);
//^ closes the popup-box when x button is clicked.



