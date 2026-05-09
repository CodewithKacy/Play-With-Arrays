//make a function that returns only even numbers from an array//
function evenNumbers(arr) {
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
        result.push(arr[i]);
       
    }
} return result;
}

//console.log(evenNumbers([1,2,3,4,5]));//

//function that finds the biggest number in an array
function findLargest(arr) {
    let large = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large){
            large = arr[i];
        }
    }return large;
}

//console.log(findLargest([1,10,30,40,3,5,6,7]));//

//function that counts how many times a word repeats itself//
function findRepeatedWords(words, search){
let counter = 0;
for (let i = 0; i < words.length; i++){
if (search === words[i]){
counter++
}
} return counter;
}

//console.log(findRepeatedWords(["cat", "dog", "cats", "cat", "cat", "wolf"], "cat"));//