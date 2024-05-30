///functions
// function greet(name)
// {
// console.log('hello'+" "+name +' '+ '!');
// }
// greet('sai');

  /// Function declaration
 //performs a task
//  function greet(name) {
//       return "Hello " + name + "!";
//  }
//    // Function call
//   var message = greet("John");
//   console.log(message);

//  //calculating a value
//  function square(number){
//      return number*number;
//  }
//  console.log(square(2));

// //function expression
// const square = function(number){
//     return number*number;
// };
// const x=square(4);
//     console.log(x);


///function invocation

// Regular function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
  }
 greet('sai');
 // Method invocation
  const person = {name: "Alice",greet: function() {
  console.log("Hello, " + this.name + "!");
    }
  };
  person.greet();
   
 // Constructor invocation
  function Person(name) {
  this.name = name;
  }
   
  const john = new Person("John");
  console.log("Name:", john.name);
   
  // Indirect invocation using call
  function greet2() {
  console.log("Hello, " + this.name + "!");
  }
   
   const obj = { name: "Kate" };
   greet2.call(obj);
  