function createNewUser(name, surname){
    let user={
        firstname: name,
        lastname: surname,
        getLogin(){
            return this.firstname.toLowerCase()[0] + this.lastname.toLowerCase();
        }
    };
    return user;

}

let newUser = createNewUser("Mahira","Asadzade");
console.log(newUser.getLogin());