// let temp = -9;

// if (temp < 20) {
//     console.log(`non ci sono più le mezze stagioni`);

// }else if (temp >= 30) {
//     console.log('lu mare,lu sole, lu ientu');
       
// }else if (temp < 30) {
//     console.log('mi dia una peroni sudata');
    
// }else if (temp < 0) {
//     console.log(`non è tanto il freddo quanto l'umidità`);   
// }else if (temp < -10) {
//     console.log('copriti ancora ti raffreddi');
   
// }else{
// console.log('risultato non valido');

// }

let temp = 30;

let risultato;


switch (true) {
    case temp < 20:
        risultato = `non ci sono più le mezze stagioni`
        break;
    case temp >= 30:
        risultato = 'lu mare,lu sole, lu ientu'
        break;
    case temp < 30:
        risultato = 'mi dia una peroni sudata'
        break;
    case temp < 0:
        risultato = `non è tanto il freddo quanto l'umidità`
        break;
    case temp < -10:
        risultato = 'copriti ancora ti raffreddi'
        break;
    default:
        risultato = 'risultato non valido'
        
}