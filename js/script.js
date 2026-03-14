document.getElementById("registroForm").addEventListener("submit", function(e){

e.preventDefault();

if(validarFormulario()){
    
    document.getElementById("mensaje").innerHTML = "Registro enviado correctamente";
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
    alert("Ingrese un RUN válido");
    return false;
}

if(!validarNombre(nombre)){
    alert("El nombre debe tener al menos 3 caracteres");
    return false;
}

if(!validarFecha(fecha)){
    alert("Debe seleccionar una fecha válida");
    return false;
}

if(!validarSelect(sexo)){
    alert("Seleccione el sexo");
    return false;
}

if(!validarSelect(estado)){
    alert("Seleccione el estado civil");
    return false;
}

if(!validarComentario(comentario)){
    alert("El comentario debe tener mínimo 5 caracteres");
    return false;
}

return true;

}



function validarRun(run){

if(run.length < 8){
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



function validarSelect(valor){

if(valor === ""){
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