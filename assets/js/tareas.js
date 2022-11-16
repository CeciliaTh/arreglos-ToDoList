let inputTareas = document.querySelector('#inputTareas');
let contadorTotal = document.querySelector('#cantTareasTotal');
let contadorRealizadas = document.querySelector('#cantTareasRealizadas');

let contadorId = 0;
let totalTareas = 0;
let contRealizadas = 0;
let tareas = [];

let btnAgregar = document.querySelector('#btnAgregar')
btnAgregar.addEventListener("click", function () {

  const nuevaTarea = inputTareas.value;
  if (nuevaTarea != "") {

    tareas.push({ id: contadorId, nombre: nuevaTarea, completado: false });
    inputTareas.value = "";
    contadorId++;
    totalTareas = tareas.length;
    console.log(nuevaTarea);
    console.log(tareas);
    agregarTarea(tareas)
  } else {
    alert('Ingresa una tarea')
  }
}
);

//Agregar Tarea
let agregarTarea = function (tareasAux) {
  let idTareasHtml = '';
  let tareasTotales = '';
 
  tareasAux.forEach(tarea => {
    tareaTemplate = `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input type="checkbox" id="idCheckbox" ${tarea.completado && 'checked'} onchange="tareaHecha(${tarea.id})"></td>
        <td><button type="button" id="btnBorrar" class="mx-2 btn btn-danger btn-sm" onclick="borrarTarea(${tarea.id})">Borrar</button></td>
        </tr>`
// <td><button type="button" id="boton1" onclick="tareaHecha(${tarea.id})">Terminado</button></td>
//<td><input type="checkbox" id="idCheckbox" onchange="tareaHecha(${tarea.id})"></td>
    idTareasHtml += tareaTemplate
  });

  let listaFinal = document.querySelector('#tareasId')
  listaFinal.innerHTML = idTareasHtml
  tareasTotales = tareas.length
  contadorTotal.innerHTML = tareasTotales
  // contadorRealizadas.innerHTML = contadorTareasRealizadas
}


//Cambiar tarea Realizada

//Tachar o marcar la tarea ya realizada
let tareaHecha = function (idTareaHecha) {
  let tareasRealizadas = '';

  let indexTareaHecha = tareas.findIndex((ele) => ele.id === idTareaHecha)
  tareas[indexTareaHecha].completado = !tareas[indexTareaHecha].completado


  console.log(tareas)
  realizadas()
  agregarTarea(tareas)
  // contarRealizadas(tareas)
 
}

let realizadas = function(){
  const tareasContadas = tareas.filter((tarea) => tarea.completado == true)
  contRealizadas = tareasContadas.length
  contadorRealizadas.innerHTML = contRealizadas
  console.log(tareas)
  agregarTarea(tareas)
}

//Borrar una tarea que ya no se quiere
let borrarTarea = function (idTareaBorrar) {
  let idBorrarTarea = tareas.findIndex((elemento) => elemento.id == idTareaBorrar)
  if (idBorrarTarea >= 0) {
    tareas.splice(idBorrarTarea, 1)
    console.log(tareas)
    realizadas()
    agregarTarea(tareas)
  }
};
