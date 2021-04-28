class UserInfo {
    constructor(name, job) {
        this.name = document.querySelector(name),
        this.job = document.querySelector(job)
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
}

export default UserInfo;