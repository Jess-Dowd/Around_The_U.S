class UserInfo {
    constructor(name, job, pic) {
        this.name = document.querySelector(name),
        this.job = document.querySelector(job)
        this.pic = document.querySelector(pic)
    }

    getUserInfo() {
        return {
            name: this.name.textContent,
            job: this.job.textContent
        };   
    };

    setUserInfo(nameInput, jobInput) {  
        this.name.textContent = nameInput.value;
        this.job.textContent = jobInput.value 
    }

    setUserPic({ url }) {
        this.pic.src = url;
    }
}

export default UserInfo;