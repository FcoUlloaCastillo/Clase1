document.getElementById("registroForm").addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("mensaje").innerText = "Registro guardado correctamente";

this.reset();

});