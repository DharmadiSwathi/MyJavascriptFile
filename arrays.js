
// Declare an array of numbers
var numbers = [1, 2, 3, 4, 5];
 
// Declare an array of strings
var colors = ["red", "green", "blue"];
 
// Declare an array of mixed data types
var mixed = [1, "hello", true, { name: "John" }];
 
console.log(numbers[0]); 
console.log(colors[1]); 
console.log(mixed[2]); 
 //access the first element 
 let firstItem= mixed[0];
 console.log("First Iteam:",firstItem);
 ////access the last element 
 let lastItem= mixed[mixed.length -1];
 console.log("First Iteam:",lastItem);
// Modifying elements of an array
numbers[2] = 10;
console.log(numbers); 
 //adding element
 numbers.push("6");
 console.log(numbers);
// Array length
console.log(colors.length); 
//removing elements
console.log("Original Array:" +colors);
let lastElement=colors.pop();
console.log("After Removing the last elements:" +colors);
///increase and decrease
//increase
numbers.length=7;
console.log("Array After Increase the length:", numbers);
//decrease
numbers.length=2;
console.log("Array After Decrease the length:", numbers);