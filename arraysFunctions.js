
var arr2 = [2,7,3,5,8,10,13]
var arr3 = [1,2,3]

oddNumbers = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(oddNumbers([1,2,3]));
console.log(oddNumbers(arr2));

firstCap = (string) => string.toUpperCase()
console.log(firstCap("Hello There"));

var arr1 = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]

letterArray = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i ++){
        if (typeof array[i] === "string"){
            newArr.push(array[i])
        }
    }
    return newArr
}

//console.log(letterArray(arr1));


findMax = (array) => {
    var max = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
    }
    return max
}


//console.log(findMax([-1,-4,-2]));


findLow = (array) => {
    var min = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i]
        }
    }
    return min
}
//console.log(findLow([3,5,-2]));

sum = (array) => {
    var sum = 0
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i]
    }
    return sum
}
//console.log(sum([1,4,7]));

mean = (array) => {
    var sum = 0
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i]
    }
    return sum / array.length
}
//console.log(mean([1,4,7]));



findMaxIndex = (array) => {
    var max = 0
    var maxIndex = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
            maxIndex = i
        }
    }
    return array[maxIndex]
}


//console.log(findMaxIndex([1,4,2]));


 fillArray = (num1, num2) => {
     let newArr = []
     for (let i = 0; i < num1; i++){
         newArr.push(num2)
     }
     return newArr
 }
 //console.log(fillArray(6,0));
 // output: [0,0,0,0,0,0]

filterArray = (array) => {
    let newArr = []
    for (let i = 0; i < array.length; i++){
        if (array[i] !== null && array[i] !== 0 && array[i] !== false && array[i] !== ""){
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(filterArray([58, "", "abcd", true, null, false, 0]));

const pick = Math.floor(Math.random() * 100 + 1)

hiLowGame = (guess) => {
    if (guess < pick){
        return "Guess too low"
    }else if (guess > pick){
        return "Guess too high"
    }else {
        return "You win!"
    }
}
console.log(hiLowGame(55));
