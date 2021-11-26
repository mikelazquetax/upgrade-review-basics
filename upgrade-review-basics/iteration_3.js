const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

var v_contadorWaves = 0;
var v_contadorWind = 0;
var v_contadorRain = 0;
var v_contadorFire = 0;
var v_contadorShower = 0;
var v_contadorTrain = 0;
for(sonidoUser of users){
    for(key in sonidoUser.favoritesSounds){
        if(key == 'waves'){
            v_contadorWaves = v_contadorWaves + 1
        }

        if(key == 'rain'){
            v_contadorRain = v_contadorRain + 1
        }

        if(key == 'wind'){
            v_contadorWind = v_contadorWind + 1
        }

        if(key == 'firecamp'){
            v_contadorFire = v_contadorFire + 1
        }

        if(key == 'shower'){
            v_contadorShower = v_contadorShower + 1
        }

        if(key == 'train'){
            v_contadorTrain = v_contadorTrain + 1
        }

    }
}

console.log ('Veces que se repite waves ' + v_contadorWaves);
console.log ('Veces que se repite wind ' + v_contadorWind);
console.log ('Veces que se repite rain ' + v_contadorRain);
console.log ('Veces que se repite train ' + v_contadorTrain);
console.log ('Veces que se repite firecamp ' + v_contadorFire);
console.log ('Veces que se repite Shower ' + v_contadorShower);