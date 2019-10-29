function add_info_calculator(){
 let arr= [];
  let  num1= +prompt("Enter new num1: ");
  let  num2= +prompt("Enter new num2: ");
    while(num1 ==="" || num1 === null || isNaN(num1) || isNaN(num2) || num2 ==="" || num2 === null ){
       num1 = +prompt("Invalid Value! Please, enter num1 again: ", `${num1}`);
       num2 = +prompt("Invalid Value! Please, enter num2 again: ", `${num2}`);
    }

    let operation= prompt("Enter mathematical operation:(+,-,*,/): ");
    while( operation != "+" && operation != "-" && operation != "*" && operation != "/" ){
        operation= prompt("Invalid Value! Please, enter new mathematical operation:(+,-,*,/): ");
    }

 arr.push(num1);
 arr.push(num2);
 arr.push(operation);
     return arr;
}

// console.log(add_info_calculator());

function calculator(num1,num2,operation){
    switch(operation){
        case "+":
           return num1+num2; break;
        case "-":
            return num1-num2; break;
        case "*":
            return num1*num2; break;
        case "/": 
        return (num2 == 0) ? "You can not divide by zero!" : (num1/num2); break;
    }
}
// console.log(calculator(3,0,"/"));
let info_arr = add_info_calculator();
// console.log(info_arr[0], info_arr[1], info_arr[2]);
console.log(calculator(info_arr[0], info_arr[1], info_arr[2]));