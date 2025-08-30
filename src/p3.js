
console.log("Problem #3")
function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciSequence(count){
    let sequence = [];
    for (let i = 0; i< count; i++){
        sequence.push(fibonacci(i));
        
    }
    return sequence;
}

console.log(fibonacciSequence(8));
