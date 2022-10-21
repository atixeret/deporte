var tabla = [
    { nombre: "Venezuela", puntos : "33" , ima : "./assets/images/venezuela.png"},
    { nombre: "España", puntos : "30"  , ima : "./assets/images/espana.png"},
    { nombre: "Argentina", puntos : "32", ima : "./assets/images/argentina.jpg"},
    { nombre: "México", puntos : "1" , ima : "./assets/images/mexico.png"},
];

var pendientes = [
    { id: 1, pais: "Mexico", contrincante: "España"},
    { id: 2, pais: "China", contrincante: "España"},
    { id: 3, pais: "Francia", contrincante: "España"},
    { id: 4, pais: "Japon", contrincante: "España"},
    { id: 5, pais: "Venezuela", contrincante: "España"},
    { id: 6, pais: "Brasil", contrincante: "España"}
  ];
  
  var jugados = [
    {id: 1, pais: "Mexico", contrincante: "España"},
    {id: 2, pais: "Venezuela", contrincante: "España"}  
  ];


window.onload = cargarEventos;

function cargarEventos(){
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("nuevo-equipo").addEventListener("submit", nuevoEquipo, false);
  }

function mostrarTabla(){
   
    var cuerpoTabla = document.getElementById("equipos-tabla");
    var tablaLlena = "";

    for (var i=0; i < tabla.length; i++){
        tablaLlena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].puntos + "</td><td><img src=" + tabla[i].ima +" height='40' width='60'></td></tr>";
    }
    cuerpoTabla.innerHTML = tablaLlena;
}

     
function nuevoEquipo(event){
    event.preventDefault();

    var equipoIntroducidoPorForm = document.getElementById("equipo").value;
    var puntosIntroducidoPorForm = document.getElementById("puntos").value;
    var imaIntroducidoPorForm = document.getElementById("ima").value;

    var nuevoEquipo = {nombre: equipoIntroducidoPorForm, puntos : puntosIntroducidoPorForm , ima : imaIntroducidoPorForm };
    tabla.push(nuevoEquipo);   

    var cuerpoTabla = document.getElementById("equipos-tabla");
    var tablaLlena = "";

    for (var i=0; i < tabla.length; i++){
        tablaLlena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].puntos + "</td><td><img src=" + tabla[i].ima +" height='40' width='60'></td></tr>";
    }
    cuerpoTabla.innerHTML = tablaLlena;
}

function validar()
{
    var ok = true;

    if( document.getElementById("equipo").value == "" || document.getElementById("puntos").value == "" )
    {
        alert("Introduzca todos los datos");
        ok = false;
    }
    if (document.getElementById("equipo").value === ""){
        ok = false; 
    }else{ 
        var text ="";
            //operadores ternarios
            const puntosForm = document.getElementById("puntos").value;
        var message;
        if(puntosForm <= 10){
            message ="Vas en los ulimos lugares";
        }else if (puntosForm >= 10 && puntosForm <= 60){
            message ="Estas a media Tabla";
        }else{
            message="Clasificas a la Final ";
        }
        console.log(message);

        document.getElementById("posicion").innerHTML = message;
      }

    return ok;  
    }

window.addEventListener("load", function(){
    class Herencia {
        constructor (partidos){
            this.partidos = partidos;
        }
        anuncio(){
            return "Estadistica de la Liguilla " + this.partidos;
        }
    }
    class tabla extends Herencia {
        constructor (nombre, partidos){
            super(nombre);
            this.partidos = partidos;
        }
        anuncioCompleto(){
            return this.anuncio() ;
        }
    }
    let miHerencia = new tabla ("23", "16 Ganados");
    mensaje.innerHTML = miHerencia.anuncioCompleto();
}, true);

  /**Tabla Jugados */ 

    /**map para mostrar todos los partidos de españa */

        let fullPendiete = pendientes.map(function(element){
            return `${element.pais} ${element.contrincante}`;
        })

        console.log("Partidos programados para España: ", fullPendiete);
          
          var cuerpoTabla2 = document.getElementById("filtrados_tabla");
          var tablaLlena2 = "";
      
          for (var i=0; i < jugados.length; i++){
              tablaLlena2 += "<tr><td>" + jugados[i].contrincante + "</td><td>" + jugados[i].pais + "</td></tr>";
          }
          cuerpoTabla2.innerHTML = tablaLlena2;

          let partidos_jugados = jugados.filter(
            (jugados) => {
              let ok = true;
              for (let i = 0; i > pendientes.length && ok; i++) { 
                let pendiente = pendientes[i];
                if (pendiente['id'] === jugados['id'])
                  ok = false;
              }
              return ok;
          })
          console.log("Partidos Jugados: ", partidos_jugados);
   
          /**Tabla Pendientes */ 
          var pendienteTabla = document.getElementById("por_realiza");
          var pendienteLlena = "";

          let partidosPendientes = pendientes.filter(
            (pendiente) => {
              let ok = true;
              for (let i = 0; i < jugados.length && ok; i++) {
                let jugado = jugados[i];
                if (jugado['id'] == pendiente['id'])
                  ok = false;

                  /**Falle en el Intento de mostra el filter en la tabla */
                  //return   pendienteLlena += "<tr><td>" + partidosPendientes[i].contrincante + "</td><td>" + partidosPendientes[i].pais + "</td></tr>";          
              }
              return ok;
          })

          //pendienteTabla.innerHTML = pendienteLlena;
        //  pendienteLlena(partidosPendientes).innerHTML= pendienteLlena;

      console.log("Partidos Pendientes: ", partidosPendientes);



      /**MAYUSCULAS */
      function mayus(e) {
        e.value = e.value.toUpperCase();
     }
     /** Deshabilitar botón después de realizar submit */
     function miFuncion() {
        document.getElementById("mostrar-tabla").disabled = true;

    }

