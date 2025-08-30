console.log("Problem #6");

function charaCount(input){
    function isLetter(char){
        let code = char.charCodeAt(0);//check ASCII code of each character
        return(code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }
    
    let counts = {};
    let mostChar = null;
    let maxCount = 0;
    for(let i = 0; i< input.length; i++){
        let char = input[i];
        
        if(!isLetter(char)) continue;
        
        if(counts[char]){
            counts[char]++;
        }
        else{
            counts[char] = 1;
        }
         if(counts[char] > maxCount){
        mostChar = char;
        maxCount = counts[char];
       }
}
  return {character: mostChar, occurrence: maxCount};
    
}

console.log(charaCount("Hello world"));
