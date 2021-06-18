class UserInfo {
    constructor(name, job, pic, id) {
        this.name = document.querySelector(name),
            this.job = document.querySelector(job)
        this.pic = document.querySelector(pic)
        this.id = id
    }

    getUserInfo() {
        return {
            name: this.name.textContent,
            job: this.job.textContent
        };
    };

    setUserInfo(nameInput, jobInput) {
        this.name.textContent = nameInput;
        this.job.textContent = jobInput
    }

    setUserPic(url) {
        this.pic.src = url;
    }

    setUserId(url) {
        this.pic.src = url;
    }
}

export default UserInfo;