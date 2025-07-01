// let v = 31;

// if (v < 18) {
//     console.log('insufficiente');
    
// }else if (v >= 18 && v < 21) {
//     console.log('sufficiente');
       
// }else if (v >=21 && v < 24) {
//     console.log('buono');
    
// }else if (v >= 27 && v <= 29) {
//     console.log('ottimo');   
// }else if (v == 30) {
//     console.log('ecellente');
   
// }else{
// console.log('voto non valido');

// }

let v = 16;

let risultato;
switch (true) {
    case v < 18:
        risultato = 'insufficiente'
        break;
    case v >= 18 && v < 21:
        risultato = 'sufficiente'
        break;
    case v >= 21 && v < 24:
        risultato = 'buono'
        break;
    case v >= 27 && v <= 29:
        risultato = 'ottimo'
        break;
    case v == 30:
        risultato = 'eccellente'
        break;
    default:
        risultato = 'voto non valido'
        
}


