console.log("Problem #5")

function checkSymmetric(arr1,arr2){
    let result = [];
    for(let i = 0;i<arr1.length;i++){
        let found = false;
        for(let j = 0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                found = true;
                break;
            }
        }
        if(!found){
            result.push(arr1[i]);
        }
    };
    
    for(let i = 0;i<arr2.length;i++){
        let found = false;
        for(let j = 0;j<arr1.length;j++){
            if(arr2[i] === arr1[j]){
                found = true;
                break;
            }
        }
        if(!found){
            result.push(arr2[i]);
        }
    };
    return result;  
}
list1 = [4, 5, 2, 3, 1, 6];

list2 =  [8, 7, 6, 9, 4, 5];
console.log(checkSymmetric(list1,list2));

