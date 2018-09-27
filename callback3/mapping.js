var listOftriangles = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = listOftriangles.map(function (triangle){
  return Math.sqrt(triangle.x*triangle.x + triangle.y* otriangle.y)
});
//result esta armazenando a array gerada pelo metodo map contendo os
//resutlados da expressao passada pela funcao

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

//o metodo map so vai criar uma array com os resultados, no caso os Z
//de uma expressao dentro da funcao que vai chamar o callback


// If you recall Pythagorean Theorem (x^2 + y^2 = z^2), then this should
// be a breeze.

// Complete the following code for the assertion to pass. The result
// should be an array of numbers corresponding to the x-y pairs provided
//in the input array (ie: calculate z given x and y).

