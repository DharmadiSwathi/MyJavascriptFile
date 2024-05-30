//infinity loop
// while (true) {
//     console.log("This is an infinite loop!");
// }

//using break statement
//  var count = 0;
// while (true) {
//     console.log("Loop iteration:", count);
//    count++;
//    if (count === 10) {
//        break; // Exit the loop when count reaches 10
//    }
//  }
//for..in loop
// var person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
 
// for (var key in person) {
//     console.log(key + ": " + person[key]);
// }
//for..of loop
// var colors = ["red", "green", "blue"];
 
//  for (var color of colors) {
//     console.log(color);
// }
// //break
//  for (var i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break; // Exit the loop when i is 3
//      }
//     console.log(i);
//  }
// //continue 
 for (var i = 1; i <= 5; i++) {     
    if (i === 3) {
        continue; // Skip the current iteration when i is 3
     }
    console.log(i);
}
