function createNewUser(name, surname){
    let birthday = prompt(`Please, ${name}, enter your birth-date in dd.mm.yyyy: `); // dd.mm.yyyy 
    let user={
        firstname: name,
        lastname: surname,
        birth_date: birthday,
        getLogin(){
            return this.firstname.toLowerCase()[0] + this.lastname.toLowerCase();
        },
        getAge(){
            let currentTime = new Date();
            let age = currentTime.getFullYear() - this.birth_date.split(".")[2];
            if((currentTime.getMonth() + 1 ==  this.birth_date.split(".")[1] && currentTime.getDate() < this.birth_date.split(".")[0])||(currentTime.getMonth() + 1 < this.birth_date.split(".")[1]))
                age -= 1;
             return age;
        },
        getPassword(){
            return this.firstname.toUpperCase()[0] + this.lastname.toLowerCase() + this.birth_date.split(".")[2];
        }
        
    };
    
    return user;

}

let newUser = createNewUser("Mahira","Asadzade");
console.log("Login: ", newUser.getLogin());
console.log("Age: ", newUser.getAge());
console.log("Password: " , newUser.getPassword());
