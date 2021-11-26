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
var sonidos = [];
var UsuariosAVg = []
var i = 0;
for(usuario of users){
        
        var volumenUsuario;
        var volFire = 0;
        var volWind = 0;
        var volWaves = 0;
        var volRain = 0;
        var volShower = 0;
        var volTrain = 0;
        var avg = 0;
        var sumAvg = 0


       sonidos.push(usuario.favoritesSounds)
       
    for(key in sonidos[i]){
        if(key == 'firecamp'){
       volFire = sonidos[i].firecamp.volume
        }else if(key == 'wind'){
        volWind = sonidos[i].wind.volume
        }else if(key == 'waves'){
        volWaves = sonidos[i].waves.volume
        }else if(key == 'rain'){
        volRain = sonidos[i].rain.volume
        }else if(key == 'shower'){
        volShower = sonidos[i].shower.volume
        }else if(key == 'train'){
        volTrain = sonidos[i].train.volume
                        }


        var SumAvg = volFire + volRain + volShower + volTrain + volWaves + volWind;
        var avg = SumAvg / 3

       
    }
    if(usuario.name != undefined){
    users.push(usuario.favoritesSounds.avg = usuario.name + ' media: ' + avg)
    i = i + 1
}
}

console.log(users)


