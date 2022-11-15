let inputTareas = document.querySelector('#inputTareas');
let contadorTotal = document.querySelector('#cantTareasTotal');
let contadorRealizadas = document.querySelector('#cantTareasRealizadas');
let contadorId = 0;
let totalTareas = 0;
let tareas = [];

let btnAgregar = document.querySelector('#btnAgregar')
btnAgregar.addEventListener("click", function(){
//preguntar si inputTareas no esta vacio != ''
//Para que no agregue espacios vacios
//Condicion simple

  const nuevaTarea = inputTareas.value;
    tareas.push({id: contadorId, nombre: nuevaTarea, completado: false});
    inputTareas.value = "";
    contadorId++;
    totalTareas = tareas.length;
    console.log(nuevaTarea);
    console.log(tareas);
    agregarTarea(tareas)
});

//Agregar Tarea
let agregarTarea = function(tareasAux) {
    let idTareasHtml = '';
    let tareasTotales = '';
    
    tareasAux.forEach(tarea => {
        tareaTemplate = `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input type="checkbox" id="idCheckbox" onclick="tareaHecha(${tarea.id})"></td>
        <td><button type="button" id="btnBorrar" class="mx-2 btn btn-danger btn-sm" onclick="borrarTarea(${tarea.id})">Borrar</button></td>
        </tr>`
       
        idTareasHtml += tareaTemplate 
      });
    
      let listaFinal = document.querySelector('#tareasId')
      listaFinal.innerHTML = idTareasHtml
      tareasTotales = tareas.length
      contadorTotal.innerHTML = tareasTotales 
  }
 //Cambiar tarea Realizada

//Tachar o marcar la tarea ya realizada
let tareaHecha = function(idTareaHecha){
  contadorRealizadas.innerHTML = 0;
let idCheckbox = document.querySelector('#idCheckbox')
if (idCheckbox.checked == true){
  console.log('Checkbox activado')
    // let indexTareaHecha = tareas.findIndex((elemento) => elemento.id == idTareaHecha)
    // if (indexTareaHecha >=0){
    //   contadorRealizadas.innerHTML ++;
    //   elemento.completado = true
    //   console.log(elemento.completado)
    // }
} else {
  console.log('Checkbox desactivado')
  // if (contadorRealizadas < 0)
  // contadorRealizadas.innerHTML = 0;

}

};

//Borrar una tarea que ya no se quiere
let borrarTarea = function(idTareaBorrar){
    let idBorrarTarea = tareas.findIndex((elemento) => elemento.id == idTareaBorrar)
    if (idBorrarTarea >=0){
      tareas.slice(idBorrarTarea,1)
      agregarTarea()
    }
  };
