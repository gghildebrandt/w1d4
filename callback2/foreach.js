// The second argument/parameter is expected to be a function
function findWaldo(findWaldoArray, found) {
  findWaldoArray.forEach(function(element,i) {
    if (element === "Waldo"){
      found(i);   // execute callback
    }
  }) // visual reminder there was a callback - termina
  //funcao e os parametros
}

function actionWhenFound(findPosition) {
  console.log("Found Waldo at index "+ findPosition +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//Refactor the function findWaldo
//to use the forEach() method instead of a for loop.

// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });

// expected output: "a"
// expected output: "b"
// expected output: "c"



//Previous exercise:
// This code illustrates how a function can be treated as an ordinary object.
// We pass a reference to the
// function named actionWhenFound as an argument to another function
// findWaldo.



/* Modify the callback function in the previous example so that logs
 the index of the array where Waldo is found, ie.
"Found Waldo at index 2!". (You will need to modify actionWhenFound
  to receive the index.)
  */

