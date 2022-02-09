// These JavaScript comments are instructions.
// Follow them step by step.
// When asked, write code to complete the task described.

// 1. ADD TWO NUMBERS
// ==================
// Complete the following function. 
// Write code to add firstNumber and secondNumber and then return the result.

function addTwoNumbers(firstNumber, secondNumber) {
    // your code goes here
    var sum=firstNumber+secondNumber;
    return sum;
}

// Open index.html in your browser, open the JavaScript console, confirm the result.

console.log("addTwoNumbers =====");
var result = addTwoNumbers(2, 2);
console.log("2 + 2 -> expected: 4, actual: %s", result);
result = addTwoNumbers(33, 44);
console.log("33 + 44 -> expected: 77, actual: %s", result);
result = addTwoNumbers(112, 0);
console.log("112 + 0 -> expected: 112, actual: %s", result);
result = addTwoNumbers(-53, 40);
console.log("-53 + 40 -> expected: -13, actual: %s", result);

// 2. FIRST LETTER IN A PHRASE 
//   (first character in a string)
// =============================
// Complete the following function.
// You can assume text is a string with at least one character.
// Write code to return the first character in text.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access
function getFirstCharacter(text) {
    // your code goes here.
    //return (text.charAt(0));
    return text.substring(0,1);
    //return text.slice(0,1);
    //return text[0];
    //last character in string
   // return text.slice(-1)

}

console.log("getFirstCharacter =====");
console.log("'strawberry' -> expected: s, actual: %s.", getFirstCharacter("strawberry"));
console.log("'above the sea' -> expected: a, actual: %s.", getFirstCharacter("above the sea"));
console.log("'Starling' -> expected: S, actual: %s.", getFirstCharacter("Starling"));
console.log("'Olympus Mons' -> expected: O, actual: %s.", getFirstCharacter("Olympus Mons"));

// 3. MAX
// =======
// Create a function named 'max' that takes three numeric parameters.
// The function should return the maximum of the three parameters.
// Hint: use conditional statements (if/else) or Math functions inside your function to calculate
// the correct result.
// Write your code here:
function max(num1, num2, num3) {
    //one line code using math
    //return Math.max(num1, num2, num3);
    //using if statment
    if((num1>=num2) && (num1>=num3)) {
        return num1;
    } else if((num2>=num1) && (num2>=num3)) {
        return num2;
    } else return num3;
}

// Uncomment the code below to verify your function is working.
 console.log("max =====");
 console.log("max(-1, 0, 1) -> expected: 1, actual: %s", max(-1, 0, 1));
 console.log("max(11, 2, 1) -> expected: 11, actual: %s", max(11, 2, 1));
 console.log("max(-15.67, 33.293, 0.51) -> expected: 33.293, actual: %s", max(-15.67, 33.293, 0.51));
 console.log("max(4, 987654321, 0) -> expected: 987654321, actual: %s", max(4, 987654321, 0));






// /**********************************
//  * The Software Guild
//  * Copyright (C) 2019 Wiley edu LLC - All Rights Reserved
//  *********************************/

// var a = [6, 42, 11, 7, 1, 42]

// function solution(x,y,array) {
//     var n = array.length;
//     var result = -1;
//     var nx = 0;
//     var ny = 0;
//     for(var i=0;i<n;i++) {
//         if(n[i]===x) {
//             nx+=1;
//         } else {
//             if(n[i]===y) {
//                 ny+=1;
//             }
//         }
//         if((nx!==0)&&(nx===ny)) {
//             result=i;
//         }
//         if(nx===ny) {
//             result=i
//         }
//         return result;
//     }
// }

// var res = solution(7,42,a);
// console.log(res)
// var array = [11,1,8,12,14]
// function solution(A) {
//     A.sort();
//     console.log(A)
//     var i=0;
//     if(A.length<=0) {
//         return false;
//     }

//     while(i<A.length) {
//         if(A[i+1] - A[i] ===1) {
//             return true;
//         } i++;
//     }
//     return false;
// }

// var res = solution(array);
// console.log(res)