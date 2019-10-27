function user_name(){
    let name = prompt("Please, enter your name: ");
    while(name ==="" || name === null){
        name = prompt("Invalid Value! Please, enter your name again: ", `${name}`);
    }
    return name;
}

// console.log(user_name());

function user_age(){
    let age = +prompt("Please, enter your age: ");
    while(age ==="" || age === null || isNaN(age) || !(Number.isInteger(age)) || Math.sign(age) === -1){ // age should not be float number or negative value
        age = +prompt("Invalid Value! Please, enter your age again: ", `${age}`);
    }
    return age;
}
// console.log(user_age());

function access_website(){
    const userName = user_name();
    const userAge =  user_age();

if(userAge < 18){
        alert("You are not allowed to visit this website.");}
    else if( userAge >= 18 && userAge < 22){
         if( confirm('Are you sure you want to continue?')){
             alert(`Welcome, ${userName}`);
      }
         else
            alert("You are not allowed to visit this website.");
    }
    else{
        alert(`Welcome, ${userName}`);
    }

}

access_website();
