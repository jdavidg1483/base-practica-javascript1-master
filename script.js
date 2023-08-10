import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll ('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function () {
         //REMOOVER la clase "active " de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // agregar la clase "active" al enlace actual
        this.classList.add('active')

        //Obtener contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML=contenido.subTitulo
        parrafoElemento.innerHTML= contenido.parrafo
       
    })



});

//Funcion para traer la informacion correcta desde ciudades.js 

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}