import {barcelona, roma, paris, londres } from "./ciudades.js"

// Obtener los elementos del DOM

let enlaces = document.querySelectorAll ('a')

let tituloElemento = document.getElementById ('titulo')
let subTituloElemento = document.getElementById ('subtitulo')
let parrafoElemento = document.getElementById ('parrafo')

//Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener( 'click', function() {

        // Remover la clase "active" de todos los enlaces

        enlaces.forEach(function(enlace){
            enlace.classList.remove ('active');
        });
        
        // agregar la clase "active" al enlace actual
        this.classList.add ('active')

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido (this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML =contenido.subtitulo
        parrafoElemento.innerHTML =contenido.parrafo    
        }) 
    
    
    //AGREGAR ACTIVE AL QUE CORRESPONDA


    //TRAER LA INFORMACION DEL OBJETO CORRESPONDIENTE A LA ELECCION


    //MOSTRAR EL CONTENIDO EN EL DOM
});





//Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {

    let contenido = {

        'Barcelona' : barcelona,
        'Roma' : roma,
        'París': paris,
        'Londres': londres

    };
    return contenido [enlace];
}
