function calculator(num1, num2, operation){
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

console.log(calculator(num1, num2, operation));
