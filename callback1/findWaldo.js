// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(findPosition) {
  console.log("Found Waldo at index "+ findPosition +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// This code illustrates how a function can be treated as an ordinary object.
// We pass a reference to the
// function named actionWhenFound as an argument to another function
// findWaldo.



/* Modify the callback function in the previous example so that logs
 the index of the array where Waldo is found, ie.
"Found Waldo at index 2!". (You will need to modify actionWhenFound
  to receive the index.)
  */

