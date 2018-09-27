// The second argument/parameter is expected to be a function
function findWaldo(findWaldoArray, found) {
  findWaldoArray.forEach(function(element,indexOfelement) {
    if (element === "Waldo"){
      found(indexOfelement);   // execute callback
    }
  }) // visual reminder there was a callback - termina
  //funcao e os parametros
}
//element eh o parametro. a funcao tem que receber um argumento que
//faca sentido. ela esta recebendo uma array, quando o metodo forEach
//for passar pelo array, a funcao vai entender que o element no caso
//ser um string.
//como a funcao tb recebe um segundo elemento, na documentacao do metodo
//forEach ta explicado que esse segundo elemento pode ser um index ou tb
//um array. No caso eh o index do elemento, mas nao pq esta escrito
//indexOfelement, mas pq esse eh um parametro que o metdo aceita
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

