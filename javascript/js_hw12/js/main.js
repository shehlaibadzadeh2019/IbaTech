let imgs = document.querySelectorAll('.image-to-show');
let stop = document.querySelector(".stop");
let resume = document.querySelector(".resume");
let order=0, pause = false;


let slider = setInterval(()=> {
    if (!pause) {
        imgs.forEach((el) => {
        el.classList.add("hidden");
     });   
        imgs[order].classList.remove("hidden");
        (order === imgs.length - 1) ? order = 0 : order++; // until it reaches the last img , 'order' increases one by one, otherwise 'order' turns to the first img
}
    }, 2000);

stop.addEventListener("click",()=>{
    pause = true;
})
resume.addEventListener("click",()=>{
    pause = false;
})