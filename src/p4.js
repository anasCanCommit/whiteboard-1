console.log("Problem #4")

function checkIntersect(arr1,arr2){
    let result = [];
    for(let i = 0;i<arr1.length;i++){
        for(let j = 0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                let alreadyExist = false;
                for(let k = 0;k<result.length;k++){
                    if(result[k]===arr1[i]){
                        alreadyExist = true;
                        break;
                        
                    }
                }
                if(!alreadyExist){
                    result.push(arr1[i]);
                }
                
            }
        }
        
    }
    return result;
}
list1 = [4, 5, 2, 3, 1, 6];

list2 =  [8, 7, 6, 9, 4, 5];
console.log(checkIntersect(list1,list2));
