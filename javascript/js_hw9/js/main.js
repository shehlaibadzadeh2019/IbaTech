let tabs = document.querySelectorAll(".tabs-title");
let content = document.querySelectorAll(".tabs-content li");

for (const item of tabs) {
    item.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
        
        for (const con_item of content) {
            if(con_item.dataset.name === document.querySelector(".active").innerHTML){
             document.querySelector(".visible").classList.remove("visible");
             con_item.classList.add("visible");
            }
        }
        
    })

}


