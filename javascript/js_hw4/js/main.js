function createNewUser(firstname, lastname){
    this.firstname=firstname;
    this.lastname= lastname;

    // this.getlogin= function(){
    //     return this.firstname.toLowerCase()[0] + this.lastname.toLowerCase();
    // }
    // this.setFirstName= function(fname){
    //     this.firstname = fname;
    // }
    // this.setLastName= function(lname){
    //     this.lastname = lname;
    // }
}
 
// let newUser=  new createNewUser("Maho","Asadzade");

// or
let newUser ={
    firstname: "Mahira",
    lastname: "Asadzade",
    set setFirstName(fname){
        this.firstname = fname;
    },
    set setLastName(lname){
        this.lastname = lname;
    },
    get getlogin(){
        return this.firstname.toLowerCase()[0] + this.lastname.toLowerCase();
    }
}
