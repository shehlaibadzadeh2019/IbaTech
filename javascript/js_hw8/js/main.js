document.addEventListener("DOMContentLoaded", () => {

    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "Price");
    document.body.appendChild(input);

    let span = document.createElement("span");
    
    let button = document.createElement("button");
    button.innerHTML = `X`;

    let phrase =  document.createElement("div");
    phrase.innerHTML = "Please enter correct price!";

    input.addEventListener("focusin", ()=>{
        input.style.border = "2px solid green";
        input.value = "";
        phrase.remove();
    });

    input.addEventListener("focusout", ()=>{
        input.style.border = "1px solid gray";
        if( input.value > 0 ){
            span.innerHTML = `Current price: ${input.value}`;
            input.before(span);
            span.after(button);
            input.style.color = "green";
     }
        else{
            input.after(phrase);
            input.style.border = "2px solid red";
            phrase.style.color= "red";
     }
    });

    button.addEventListener("click",()=>{
        span.remove();
        button.remove();
        input.value = 0;
        
    } );

  });
