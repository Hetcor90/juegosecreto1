//!document. es un puente que conecta html y javascript, tiene muchas opciones pero en querySelector es para seleccionar una etiqueta y en este caso poner un texto en el h1 (este es un objeto y una de las cosas que pondemos hacer es cambiar texto)
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/

let listaNumerosSortedos = [];
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {//se creo esta funciones con variables asignadas y reutilizables
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //con getElementById llamo directamente el id

    //usuario acerto
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Asertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //usuario no acerto
        if(numeroDeUsuario > numeroSecreto ){
            asignarTextoElemento('p', 'el numero sereto es menor');
        }else{
            asignarTextoElemento('p', 'el numero sereto es mayor');
        }
        intentos++//se pone el incremento en donde no acierta para que vaya contando cuando no asierte el numero
        limpiarJuego();
    }
    return;
    }

    function limpiarJuego(){// reiniciar juego
    document.querySelector('#valorUsuario').value = '';;

    }

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSortedos);

    //si ya sorteam,os todos los numeros, se reinicia el juego

    if(listaNumerosSortedos.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos lo números posibles');
    }else{
        //si el numero generado esta includio en la lista hacemos una operacion sino hacemos otras
        if(listaNumerosSortedos.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSortedos.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');//imprimiendo funcion reutilizable
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);//imprimiendo funcion reutilizable
    numeroSecreto = generarNumeroSecreto(); //se trae de nuevo para que el numero secreto se reinicie trear del incio sin el let
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarJuego();

    // indicar mensaje intervalo de numeros
    //generar el numero aleatoreo
    //innicializar el numero de intentos
    condicionesIniciales();//esta funcion hace las 3 anteriores

    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');//setAttribute espera 2 parametros coloca esto con tal valor
}

condicionesIniciales();