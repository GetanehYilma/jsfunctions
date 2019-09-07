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
    console.log("Expected output of maxOfThree(23, 106, 89) is 106  " + maxOfThreeTest(106, maxOfThree(23, 106, 89)));
//Question 4
function isVowel(letter) {
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    if(letter.length !== 1)
        return "Enter a letter, please";
    return vowels.includes(letter);
}
function isVowelTest(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + result;
    }
}
    console.log("Expected output of isVowel(D) is false  " + isVowelTest(false, isVowel("D")));
//Question 5 sum
function sum(arrayNumbers) {
    let temp = 0;
    if(arrayNumbers.length < 1) return "Enter arrays of numbers";

    for (let i = 0; i < arrayNumbers.length; i++){
        temp += arrayNumbers[i];
    }
    return temp;
}
function sumTest(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + result;
    }
}
console.log("Expected output of sum([23, 27]) is 50  " + sumTest(50, sum([23, 27])));
//Question 5 multiply
function multiply(arrayNumbers2) {
    let temp = 1;
    if(arrayNumbers2.length < 1) return "Enter arrays of numbers";

    if(arrayNumbers2.length < 1) return "Enter arrays of numbers";

    for (let i = 0; i < arrayNumbers2.length; i++){
        temp *= arrayNumbers2[i];
    }
    return temp;
}
function multiplyTest(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + result;
    }
}
console.log("Expected output of multiply([23, 27]) is 621  " + multiplyTest(621, multiply([23, 27])));
//Question 6
function reverse2(stringToReverse) {
    let reversedString = "";
    for (let i = stringToReverse.length-1; i >= 0 ; i--){
        reversedString += stringToReverse.charAt(i);
    }
    return reversedString;
}
function reverse2Test(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + result;
    }
}
console.log("Expected output of reverse2(\"abebe beso\") is oseb ebeba  " + reverse2Test("oseb ebeba", reverse2("abebe beso")));
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
function findLongestWordTest(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + result;
    }
}
console.log("Expected output of findLongestWord([\"abebe\", \"beso\", \"bela\"]) is 5  " +
    findLongestWordTest(5, findLongestWord(["abebe", "beso", "bela"])));

//Question 8
function filterLongWords(wordsArray, i) {
    let largerWords = [];
    for (let j = 0; j < wordsArray.length; j++){
        if (wordsArray[j].length > i)
            largerWords.push(wordsArray[j]);
    }
    return largerWords;
}
function filterLongWordsTest(expected, result) {
    if (expected.length !== result.length)
        return "TEST FAILED. Their lengths are not equal!";
    for(let i = 0; i < expected. length; i++){
        if(expected[i] !== result[i])
            return "TEST FAILED.  Expected " + expected + " found " + result;
    }

    return "TEST SUCCEEDED";
}
console.log("Expected output of filterLongWords([\"abebe\", \"besoena\", \"bel\", 3], ) is [\"abebe\", \"besoena\"]  " +
    filterLongWordsTest(["abebe", "besoena"], filterLongWords(["abebe", "besoena", "bel"], 3)));

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
function mapFunctionTest(expected, result) {
    if (expected.length !== result.length)
        return "TEST FAILED. Their lengths are not equal!";
    for(let i = 0; i < expected. length; i++){
        if(expected[i] !== result[i])
            return "TEST FAILED.  Expected " + expected + " found " + result;
    }

    return "TEST SUCCEEDED";
}
console.log("Expected output of mapFunction() is 10,30,50,30,30 " + mapFunctionTest([10,30,50,30,30], mapFunction()));

function filterFunction() {
    const aa = [1,3,5,3,3];
    // const c = aa.filter(function(elem, i, array){
    //     return elem === 3;});
    return aa.filter(function(elem, i, array){
        return elem === 3;});
}
function filterFunctionTest(expected, result) {
    if (expected.length !== result.length)
        return "TEST FAILED. Their lengths are not equal!";
    for(let i = 0; i < expected. length; i++){
        if(expected[i] !== result[i])
            return "TEST FAILED.  Expected " + expected + " found " + result;
    }

    return "TEST SUCCEEDED";
}
console.log("Expected output of filterFunction() is 3,3,3 " + filterFunctionTest([3,3,3], filterFunction()));

function reduceFunction() {
    const aaa = [1,3,5,3,3];
    // const d = aaa.reduce(function(prevValue, elem, i, array){
    //     return prevValue * elem;
    // });
    return aaa.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });
}
function reduceFunctionTest(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + result;
    }
}
console.log("Expected output of reduceFunction() is 135 " + reduceFunctionTest(135, reduceFunction()));

