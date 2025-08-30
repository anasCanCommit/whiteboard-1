console.log("Problem #7")
function sqrt(x){
    for(let i = 0; i<=x; i++){
        if(i * i === x){
            return i;
        }
    }
}

console.log(sqrt(25));
console.log(sqrt(36));

