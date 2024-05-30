//if..else statement
// var temperature = 25;
 
// if (temperature > 30) { //condition
//     console.log("It's a hot day!"); //statement
//     // This block will be executed if the condition is true
// } else {
//     console.log("It's not too hot today."); // This block will be executed if the condition is false
// }


//switch...case ststement
var day = 3;
var dayName;
 
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
 
console.log("Today is " + dayName);
