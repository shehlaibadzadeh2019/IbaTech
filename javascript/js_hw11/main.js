let obj ={
    "Enter":".btn_Ent",
    "KeyS": ".btn_S",
    "KeyE": ".btn_E",
    "KeyO": ".btn_O",
    "KeyN": ".btn_N",
    "KeyZ": ".btn_Z",
    "KeyL": ".btn_L"
};
for(let property in obj){
    document.addEventListener('keydown',(event)=>{
        if(event.code == property){
            document.querySelector(obj[property]).classList.add("active");
            Object.values(obj).forEach((val)=>{
                if(val != obj[property])
                document.querySelector(val).classList.remove("active");
            })
        }
    })
}
