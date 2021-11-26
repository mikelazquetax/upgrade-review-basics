myArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(myArray, text){
  
    let posicion = myArray.indexOf(text);
    return posicion

}

var PosicionTexto = findArrayIndex(myArray, 'Salamandra');

console.log('el texto ocupa la posición ' + PosicionTexto)