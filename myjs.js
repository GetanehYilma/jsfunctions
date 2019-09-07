//Question 2
function max(num1, num2){
    if (num1 > num2)
        return num1;
    else
        return num2;
}
function maxTest(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + result;
    }
}
    console.log("Expected output of max(23, 89) is 89  " + maxTest(89, max(23, 89)));

//Question 3
function maxOfThree(num1, num2, num3){
    let temp = num1 > num2? num1: num2;
    return temp > num3? temp: num3;
}
function maxOfThreeTest(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + result;
    }
}
    console.log("Expected output of max(23, 106, 89) is 106  " + maxTest(106, maxOfThree(23, 106, 89)));
//Question 4
function isVowel(letter) {
    let vowels = [A, E, I, O, U, a, e, i, o, u];
    if(letter.length !== 1)
        return "Enter a letter, please";
    return vowels.includes(letter);
}
//Question 5 sum
function sum(arrayNumbers) {
    let temp = 0;
    if(arrayNumbers.length < 1) return "Enter arrays of numbers";

    for (let i = 0; i < arrayNumbers.length; i++){
        temp += i;
    }
    return temp;
}
//Question 5 multiply
function multiply(arrayNumbers2) {
    let temp = 0;
    if(arrayNumbers2.length < 1) return "Enter arrays of numbers";

    if(arrayNumbers2.length < 1) return "Enter arrays of numbers";

    for (let i = 0; i < arrayNumbers2.length; i++){
        temp *= i;
    }
    return temp;
}
//Question 6
function reverse2(stringToReverse) {
    let reversedString = "";
    for (let i = stringToReverse.length-1; i >= 0 ; i--){
        reversedString += stringToReverse.charAt(i);
    }
    return reversedString;
}
//Question 7
function findLongestWord(arrayOfWords) {
    if (arrayOfWords.length < 1 ) return "Enter array of words, please";

    let largest = arrayOfWords[0].length;
    for (let i = 0; i < arrayOfWords.length; i++){
        if (arrayOfWords[i].length > largest)
            largest = arrayOfWords[i].length;
    }
    return largest;
}

//Question 8
function filterLongWords(arrayWords, i) {
    let largerWords = [];
    for (let j = 0; j < arrayWords.length; j++){
        if (arrayWords[j].length > i)
            largerWords.push(arrayWords[j]);
    }
    return largerWords;
}

//Question 9
function mapFunction() {
    const a = [1,3,5,3,3];
    // const b = a.map(function(elem, i, array) {
    //     return elem * 10;
    // });
    return a.map(function(elem, i, array) {
        return elem * 10;
    });
}
function filterFunction() {
    const aa = [1,3,5,3,3];
    // const c = aa.filter(function(elem, i, array){
    //     return elem === 3;});
    return aa.filter(function(elem, i, array){
        return elem === 3;});
}
function reduceFunction() {
    const aaa = [1,3,5,3,3];
    // const d = aaa.reduce(function(prevValue, elem, i, array){
    //     return prevValue * elem;
    // });
    return aaa.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });
}

