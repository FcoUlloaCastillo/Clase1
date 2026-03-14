document.getElementById("registroForm").addEventListener("submit", function(e){

e.preventDefault();

if(validarFormulario()){

    alert("Registro guardado exitosamente");

    document.getElementById("mensaje").innerHTML = "Registro guardado exitosamente";

    this.reset();
}

});



function validarFormulario(){

let run = document.getElementById("run").value.trim();
let nombre = document.getElementById("nombre").value.trim();
let fecha = document.getElementById("fecha").value;
let sexo = document.getElementById("sexo").value;
let estado = document.getElementById("estado").value;
let comentario = document.getElementById("comentario").value.trim();


if(!validarRun(run)){
    alert("Debe ingresar un RUN");
    return false;
}

if(!validarNombre(nombre)){
    alert("El nombre debe tener al menos 3 caracteres");
    return false;
}

if(!validarFecha(fecha)){
    alert("Debe ingresar la fecha de nacimiento");
    return false;
}

if(!validarSexo(sexo)){
    alert("Debe seleccionar el sexo");
    return false;
}

if(!validarEstadoCivil(estado)){
    alert("Debe seleccionar el estado civil");
    return false;
}

if(!validarComentario(comentario)){
    alert("El comentario debe tener al menos 5 caracteres");
    return false;
}

return true;

}



function validarRun(run){

if(run === ""){
    return false;
}

return true;

}



function validarNombre(nombre){

if(nombre.length < 3){
    return false;
}

return true;

}



function validarFecha(fecha){

if(fecha === ""){
    return false;
}

return true;

}



function validarSexo(sexo){

if(sexo === ""){
    return false;
}

return true;

}



function validarEstadoCivil(estado){

if(estado === ""){
    return false;
}

return true;

}



function validarComentario(comentario){

if(comentario.length < 5){
    return false;
}

return true;

}