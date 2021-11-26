
const miArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(from, to, array) {
    const minuevoArr = [...array];

    const jugador = minuevoArr.splice(from, 1)[0];
    minuevoArr.splice(to, 0, jugador);

    return minuevoArr;
}

console.log(swap(2, 1, miArray));

