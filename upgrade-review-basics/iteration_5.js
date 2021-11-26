function rollDice(numeroCarasMin, numeroCarasMax){
    numeroCarasMax = numeroCarasMax + 1
    return Math.floor(Math.random() * (numeroCarasMax - numeroCarasMin)) + numeroCarasMin

}
var numeroCarasMin = 0
var solucion = rollDice(numeroCarasMin,6);
console.log(solucion)