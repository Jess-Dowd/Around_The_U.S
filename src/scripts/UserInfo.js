class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._name = document.querySelector(nameSelector),
        this._job = document.querySelector(jobSelector)
    }

    getUserInfo(name, job) {
        
            name = this._name.textContent,
            job = this._job.textContent
        
    };

    // this._name.value = currentName.textContent    // this._job.value = currentBio.textContent
    setUserInfo(nameInput, jobInput) {  
        this._name.textContent = document.querySelector(nameInput);
        this._job.textContent = document.querySelector(jobInput); 
    }
}

export default UserInfo;

// function handleOpenProfileModel() {
//   if (!addProfileInfo.classList.contains("open")) {
//     nameInput.value = currentName.textContent
//     jobInput.value = currentBio.textContent
//   }
// togglePopupBox(addProfileInfo);
// }

// function handleProfileFormSubmit(evt) {
//     evt.preventDefault();
//     currentName.textContent = nameInput.value;
//     currentBio.textContent = jobInput.value;
//     togglePopupBox(addProfileInfo);
//   }

// const currentName = document.querySelector(".profile__name");
// const currentBio = document.querySelector(".profile__bio");