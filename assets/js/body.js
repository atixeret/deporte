document.getElementById("estMex").innerHTML = "Estadisticas";
var titulo = document.getElementById("titMex");;
titulo.innerHTML="Goles obtenidos en el mundia por partido México ";

document.getElementById("estArg").innerHTML = "Muestra las estadisticas de los mundiales anteriores";
document.getElementById("estEsp").innerHTML = "Los mejores delanteros que cuenta España";

/**se  crean los componentes */
const tabs1 =  document.createElement("article");
// Create a "li" element:
const newNode = document.createElement("h4");
newNode.appendChild(titulo);

// Insert before existing child:
const list = document.getElementById("tabs-1");
list.insertBefore(newNode, list.children[3]);

// style boton agregar
var campo = document.getElementById('agregar');
campo.style.color="#609f99";

$(document).ready(function() {
    $('nuevo-equipo').submit(function() {
        $(this).find(':input[type=submit]').prop('disabled', true);
 
        // For this example, don't actually submit the form
        event.preventDefault();
    });
});