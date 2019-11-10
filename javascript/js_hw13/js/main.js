const change_button=document.createElement('button');
document.querySelector(".theme-button").appendChild(change_button);
change_button.style.backgroundColor='#136e52';
change_button.innerText='Change color theme';
let  modefromStorage = localStorage.getItem('mode'), mode;


if(modefromStorage ==  undefined || modefromStorage ==  'dark' ) {
    mode = 'dark';
    localStorage.setItem('mode', mode);
}
else {
    mode = modefromStorage;
}

// console.log("initial:", mode);

change_button.addEventListener("click",()=>{
    mode = (mode == 'dark') ? 'light' : 'dark';
    // console.log("after button: ",mode);
    localStorage.setItem('mode', mode);
     if(mode === 'light'){
        document.querySelector('.menu').classList.add('light');
        change_button.classList.add("light");
    }
    else{
        document.querySelector('.menu').classList.remove('light');
        change_button.classList.remove("light");
    }
})


if(modefromStorage === 'light'){
    document.querySelector('.menu').classList.add('light');
    change_button.classList.add("light");
}
else{
    document.querySelector('.menu').classList.remove('light');
    change_button.classList.remove("light");
}