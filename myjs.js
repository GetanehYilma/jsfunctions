//Question 2
function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;

}
//Question 3
function maxOfThree(num1, num2, num3){
    let temp = num1 > num2? num1: num2;
    return temp > num3? temp: num3;
}
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

