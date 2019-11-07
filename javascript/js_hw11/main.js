let key_arr = ["Enter", "KeyS", "KeyE", "KeyO", "KeyN", "KeyZ", "KeyL"];
let btn_arr = [".btn_Ent", ".btn_S", ".btn_E", ".btn_O", ".btn_N", ".btn_Z" ,".btn_L"];

for(let i=0; i < key_arr.length; i++){
    document.addEventListener('keydown',(event)=>{
        if(event.code == key_arr[i]){
            document.querySelector(btn_arr[i]).classList.add("active");
            btn_arr.forEach((val)=>{
                if(val != btn_arr[i])
                document.querySelector(val).classList.remove("active");
            })
        }
    })
}
