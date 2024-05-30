//sum of two numbers
// function sum(a,b){
//     return a+b;
// }
// let result=sum(5,3);
// console.log(result);

//max of two numbers
// function max(a,b){
//     return(a>b)?a:b;
// }
// let number=max(5,3);
// console.log(number);

// program to check if the string is palindrome or not
// function checkPalindrome(string) {

//     const len = string.length;
 
//     for (let i = 0; i < len / 2; i++) {
    
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
 
// const testString1 = "racecar";
// console.log(checkPalindrome(testString1)); 
 
// const testString2 = "hello";
// console.log(checkPalindrome(testString2)); 

//factorial function
function factorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
const num = 5;
const result = factorial(num);
console.log("The factorial of " + num + " is: " + result); // Output: The factorial of 5 is: 120