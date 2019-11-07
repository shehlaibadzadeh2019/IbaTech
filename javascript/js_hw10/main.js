let icon = document.querySelectorAll(".icon-password");
// let input = document.querySelectorAll("input");
let button = document.querySelector("button");
let div = document.createElement("div");

icon.forEach((val)=>{
    val.addEventListener("click",(e)=>{
        e.target.classList.toggle("fa-eye");
        e.target.classList.toggle("fa-eye-slash");
        //  console.log(e.target.previousElementSibling)
        if(e.target.classList.contains("fa-eye")){
            e.target.previousElementSibling.type = "text";
        }
        else{
            e.target.previousElementSibling.type = "password";
        }
    })
});

button.addEventListener("click",(event)=>{
    if(document.querySelector(".enter_input").value === document.querySelector(".confirm_input").value){
        div.remove();
        alert("You are welcome!");
    }
    else{
        div.innerText = "You need to enter the identical values.";
        div.style.color = "red";
        document.querySelector(".confirm_input").after(div);
    }
    event.preventDefault();
})
