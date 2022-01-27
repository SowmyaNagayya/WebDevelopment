//The goal of this activity is to define a group of numbers and then ask JavaScript to add all the numbers in the group together.
// var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
// console.log(testArray.length)

// var sum=0;
// testArray.push(50)
// console.log(testArray.length)

// for(var position=0; position<testArray.length; position++) {
//     sum=sum+testArray[position];
// }

// console.log(sum);

//adding prompt to user to choose the number
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var newElement = prompt("Enter your number to add");
//Since the sum of the elements in the original array was 435, we expect the result to be 455 (435 + 20). But what did we get instead?

//The sum of 17,42,311,5,9,10,28,7,6,20 is: 43520
newElement=parseInt(newElement)
testArray.push(newElement);
var sum = 0;
console.log(testArray.length)

for(var position=0; position<testArray.length;position++) {
    sum=sum+testArray[position];
}

console.log(sum)

