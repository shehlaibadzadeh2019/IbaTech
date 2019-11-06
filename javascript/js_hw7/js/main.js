function array_to_list(arr){
    let ul, li, sub_ul;
    ul = document.createElement("ul");
    document.body.appendChild(ul);
    arr.map((value)=>{
    if(Array.isArray(value)){
        sub_ul = document.createElement("ul");
        li.after(sub_ul);
        value.map((sub_value)=>{
            li = document.createElement("li");
            li.innerText = sub_value;
            sub_ul.appendChild(li);
        });
      }
    else{
        li = document.createElement("li");
        li.innerText = value;
        ul.appendChild(li);
      }
    });
}

array_to_list(['hello', 'world', ['Baku', 'Hi', 'how'], 'IBA Tech Academy', '2019']);

setTimeout(function(){
    let body = document.body.children;
    body[1].remove();
}, 10000);
