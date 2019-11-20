"use strict";
function sevenBoom(arr) {
    let results = arr.filter(function(n){
        let number = n.toString().split("");

        for(let x = 0; x < number.length; x++){
            if(number[x] === "7"){
                return n;
            }
        }
    });

    if(results.length > 0){
        return "Boom!";
    }else{
        return "there is no 7 in the array"
    }
}

console.log(sevenBoom([2, 6, 7, 9, 3]), "Boom!");
console.log(sevenBoom([33, 68, 400, 5]), "there is no 7 in the array");
console.log(sevenBoom([86, 48, 100, 66]), "there is no 7 in the array");
console.log(sevenBoom([76, 55, 44, 32]), "Boom!");
console.log(sevenBoom([35, 4, 9, 37]), "Boom!");

function uniqueSort(arr) {
    let results = arr.reduce((allNumbers, number) =>{
        allNumbers.add(number);
        return allNumbers;
    }, new Set());

    let resultsArray = [];

    results.forEach(x => resultsArray.push(x));
    return resultsArray.sort((a,b) => a - b);
}

console.log(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]), [1, 2, 3, 4, 5, 8, 10]);
console.log(uniqueSort([1, 2, 5, 4, 7, 7, 7]), [1, 2, 4, 5, 7]);
console.log(uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1]), [0, 1, 2, 3, 4, 5, 6, 7]);
console.log(uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1]), [1, 3, 4, 5, 6, 27, 100]);
console.log(uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]), [-87, -9, -4.323827, -3.1415, -3.1414, 8]);
