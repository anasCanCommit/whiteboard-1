console.log("Problem #8");


function buildCharCount(str){
    function isLetter(char){
        let code = char.charCodeAt(0);//check ASCII code of each character
        return(code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }
    
    let counts = {};
    for(let i = 0;i< str.length;i++){
        let char = str[i].toLowerCase();
        if(!isLetter(char)) continue; 
        
        if(counts[char] === undefined){
            counts[char] = 1;
        } else{
            counts[char]++;
        }
    }
    return counts;
}

function anagrams(str1, str2){
    let count1 = buildCharCount(str1);
    let count2 = buildCharCount(str2);
    
    for(let key in count1){
        if(count1[key] !== count2[key]){
            return false;
        }
    }
    
    for(let key in count2){
        if(count2[key] !== count1[key]){
            return false;
        }
    }
    return true;
    
}

console.log(anagrams("listen", "silent"));
console.log(anagrams("hello", "bye"));
