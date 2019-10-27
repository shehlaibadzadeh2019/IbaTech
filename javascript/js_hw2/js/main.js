// Dividing by 5  without any residue

function entered_number(){
    let num = +prompt("Please, enter number: ");
    while(num ==="" || num === null || isNaN(num) || !(Number.isInteger(num)) || Math.sign(num) === -1){ 
       num = +prompt("Invalid Value! Please, enter number again: ");
    }
    return num;
}

function divided_by_5(){
    const num = entered_number();
    let result=[] || "";
    for(let i = 1; i<= num; i++ ){
        if( i % 5 == 0 ){
            result.push(i);
        }
    }
    if(result.length === 0){
        result = "Sorry, no numbers" ;
    }
    return result;
}

console.log(divided_by_5());                                      //HERE



// Prime or not (optional task)

function isPrime(num){
    for(let i=2; i< num; i++){
            if(num % i == 0 ){ 
                return false;
       }  
    }
    return true;
}


function prime_in_range(m, n) {
    let min = Math.min(m, n);
    let max = Math.max(m, n);
    let prime = [] || "";
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }
    if(prime.length === 0){
        prime ="No prime number in given range!";
    }
    return prime;
}
// console.log(prime_in_range(entered_number(),entered_number()));    // HERE