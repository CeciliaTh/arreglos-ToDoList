let inputTareas = document.querySelector('#inputTareas');
let contadorTotal = document.querySelector('#cantTareasTotal');
let contadorRealizadas = document.querySelector('#cantTareasRealizadas');
let idCheckbox = document.querySelector('#idCheckbox')
let contadorId = 0;
let totalTareas = 0;
let contadorTareasRealizadas = 0;
let tareas = [];

let btnAgregar = document.querySelector('#btnAgregar')
btnAgregar.addEventListener("click", function(){
//preguntar si inputTareas no esta vacio != ''
//Para que no agregue espacios vacios
//Condicion simple
  const nuevaTarea = inputTareas.value;
  if (nuevaTarea != "") {
  
    tareas.push({id: contadorId, nombre: nuevaTarea, completado: false});
    inputTareas.value = "";
    contadorId++;
    totalTareas = tareas.length;
    console.log(nuevaTarea);
    console.log(tareas);
    agregarTarea(tareas)
} 
else 
{
  alert('Ingresa una tarea')
}
}
);

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
      contadorRealizadas.innerHTML = contadorTareasRealizadas
  }
 //Cambiar tarea Realizada

//Tachar o marcar la tarea ya realizada
let tareaHecha = function(idTareaHecha){
  // contadorRealizadas.innerHTML = 0;

let indexTareaHecha = tareas.findIndex((elemento) => elemento.id === idTareaHecha)
let idCheckbox = document.querySelector('#idCheckbox')
if (idCheckbox.checked == true){
  console.log('Checkbox activado')
  console.log(indexTareaHecha)
} else {
        console.log('Checkbox desactivado')
        console.log(indexTareaHecha)
    }}
    
  


//Borrar una tarea que ya no se quiere
let borrarTarea = function(idTareaBorrar){
    let idBorrarTarea = tareas.findIndex((elemento) => elemento.id == idTareaBorrar)
    if (idBorrarTarea >=0){
      tareas.splice(idBorrarTarea,1)
      agregarTarea(tareas)
    }
  };
