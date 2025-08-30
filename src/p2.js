console.log("Problem 2");

let output = "";
for(let i=1; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
        output += "fizzbuzz";
    }
    else if(i % 3 === 0){
        output += "fizzz";
    }
    else if(i % 5 === 0){
        output += "buzz";
    }
    else{
        output += i;
    }
    if(i<100)
    output += ", "
}

console.log(output);

