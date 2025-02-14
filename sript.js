let contador = 1; //AUXILIAR PARA DAR UN ID UNICO A CADA TAREA
function agregar(){   
    let input = document.getElementById("tarea").value; //OBTIENE LO QUE ESTA DENTRO DEL INPUT CON ID "TAREA"
    const lista = document.getElementById("lista"); //OBTIENE EL CONTENEDOR DE LA LISTA

    if (input.trim() !== ""){ //REVISA QUE EL TEXTO NO ESTE VACIO, TRIM QUITA LOS ESPACIOS EN BLANCO
        const tarea = document.createElement("li"); //CREA UN ELEMENTO LI 
        tarea.textContent = input; //EL CONTENIDO DEL LI (TAREA) SERA EL INPUT
        tarea.setAttribute("id", `tarea${contador}`) //SE LE AGREGA UN ID A CADA TAREA

        const botonEliminar = document.createElement("button"); //SE CREA UN BOTON PARA ELIMINAR LA TAREA
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = function () {  //COMO EL BOTON ESTA CONTENIDO EN LA TAREA, ESTE ELIMINAR SU CORRESPONDIENTE TAREA
            tarea.remove();
        }

        tarea.appendChild(botonEliminar); //EL BOTON SE AGREGA SU CORRESPONDIENTE TAREA
        lista.appendChild(tarea); //LA TAREA SE INGRESA EN LA LISTA

        contador ++;
    }
}
