import shuffle from 'lodash.shuffle';                                                        //mpm i lodash.shuffle ==>  de esta librería voy a utilizar el método shuffle para mezclar el array
import FontAwesomeClasses from './fontAwesomeClasses';
const NUMERO_DE_CARTAS = 20;

export default ()=>{
    const fontAwesomeClasses = FontAwesomeClasses();
    
    let cartas = [];

     while(cartas.length < NUMERO_DE_CARTAS){
         const indice = Math.floor(Math.random() * fontAwesomeClasses.length);               //me da un índice aleatorio con un número que está entre 0 y la cantidad de clases que contiene el array ...
    
         const carta = {
             icono : fontAwesomeClasses.splice(indice, 1)[0],                                //Splice me retorna un array, en este caso de un solo elemento, y con [0] me lo estoy trayendo
             fueAdivinada : false
         };

         cartas.push(carta);
         cartas.push({...carta});                                                            //Debo pushear 2 veces la misma carta pero para hacerlo (Y que no se den vuelta las 2 cartas al mismo tiempo) de clonarla y lo hago usando el spread operator
     }

     return shuffle(cartas);                                                                 //Con el método shuffle mezclo / desordeno los elementos del array
};