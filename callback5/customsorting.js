
var words = ["ground", "control", "to", "major", "tom"];

// reformatt below
//essas funcoes sao acoes completas, que vao modificar a array
//sendo uma funcao elas precisam retornar algum resultado
//esse resultado vai ser usado la na funcao com callback
function wordLength (names){
  return names = names.length
};

function upperCase (names){
  return names = names.toUpperCase();
};

function wordsInReverse (names){
  return names = names.split('').reverse().join('');
};

//essa funcao recebe o array e passa nele com um loop a funcao
//que vai modifica-lo
//a funcao entao precisa armazenar o resultado de cada loop em um
//novo array por meio do push que eh o jeito de adicionar elementos
//ao array (se fosse string usaria +=)
//essa variavel que vai armazenar o array precisa ficar fora do loop,
//se ela ficar dentro do loop, a cada nova interacao ela substitui o valor
//resultante pelo resultado do novo loop e nao vai armazenar nada, a nao
//ser o ultimo resultado
//essa funcao precisa retornar a variavel que esta armazenando o array
//manipulado - o array comecou vazio []
function manipulateWords (wordsArray, manipulation){
  var manipulatedArray = [];
  for (var i = 0; i < wordsArray.length; i++) {
    //call the function on each of the words in the array
    manipulatedArray.push(manipulation(wordsArray[i]));
  }
  return manipulatedArray;
}

console.log(manipulateWords(words, wordLength));
console.log(manipulateWords(words, upperCase));
console.log(manipulateWords(words, wordsInReverse));
// implement .splice in our function


// Implement your own version of the built-in array map function.
// Yours will take in two arguments. The first will be an array
// to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.

// Our function should return the following

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ] // reverses the order of the letters
