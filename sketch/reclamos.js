// - *******************************  CODGIGO JAVASCRIPT *************************** -
// -                                                                                 - 
// -                                 Codigo js principal                             -  
// -                                                                                 -  
// -                                                                                 - 
// - ***************************** Funcion Principal ******************************* -
window.addEventListener("DOMContentLoaded", mostrar);
  // Cargar función "Mostrar" cuando el contenido del documento esté listo
  // El evento "DOMContentLoaded" se dispara cuando el HTML del documento se ha cargado y parseado,
  // lo que significa que la página está lista para ser manipulada con JavaScript.
window.addEventListener("unload", alcerrar);
  // Escuchar el evento "beforeunload" para guardar los datos al cerrar la página
  // El evento "unload" se dispara justo antes de que la página se cierre. 

document.write('<script src="botones1-icd-in-ss.js"></script>');
  // Importa el archivo de funcionalidad incidentes - solicitudes
document.write('<script src="botones2-fiber.js"></script>');
  // Importa el archivo de funcionalidad fiber
document.write('<script src="botones3-teco.js"></script>');
  // Importa el archivo de funcionalidad tecO
// ******* Funcion mostrar ******* INICIO *******     
function mostrar() { 
};   
// ******* Funcion alcerrar ******* INICIO *******    
function alcerrar() {  
};   
// - ***************************** Funcion Principal ******************************* -



// - *************************** Funciones Secundarios  **************************** -
// ******* Funcion OpenTAB ******* INICIO *******    
function openTab(evt, tabName) {   
  var i, tabcontent, tabbtn;

  // Ocultar todos los contenidos de pestañas
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remover la clase "active" de todos los botones de pestañas
  tabbtn = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].classList.remove("active");
  }

  // Mostrar el contenido de la pestaña seleccionada
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
  
  var info_de_pestaña = {
    nombre: "tabs",
    idcontent: tabName,
    indicetab: parseInt(evt.currentTarget.name)
  };
}  
// ******* Funcion MostrarBoton ******* INICIO *******    
function mostrarBoton(id, id_class_elimi, clase, tab) {   
  var opciones = document.getElementById(id);
  var valorSeleccionado = opciones.value;

  // Ocultar todos los botones
  var id_sec = document.getElementById(id_class_elimi);
  var botones = id_sec.getElementsByClassName(clase);
  for (var i = 0; i < botones.length; i++) {
    botones[i].style.display = "none";
  }

  // Mostrar el botón correspondiente a la opción seleccionada
  if (valorSeleccionado !== 'nulo') {
    document.getElementById(valorSeleccionado).style.display = "block";
  }
}; 
// ******* Funcion CheckBOX ******* INICIO *******    
function seleccionarCheckbox(checkboxIndex, name) {
  var checkboxes = document.getElementsByName(name);
  checkboxes.forEach(function(checkbox, index) {
  checkbox.checked = (index + 1 === checkboxIndex); });
}   
// ******* Funcion toggleSection ******* INICIO *******    
function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  var icon = section.previousElementSibling;

  if (section.style.display === 'none' || section.style.display === '') {
      section.style.display = 'block';
      icon.textContent = '▲'; // Cambia el icono a "arriba" cuando se muestra
  } else {
      section.style.display = 'none';
      icon.textContent = '▼'; // Cambia el icono a "abajo" cuando se oculta
  }
}
// - *************************** Funciones Secundarios  **************************** -                                                                    
// - *******************************  CODGIGO JAVASCRIPT *************************** -







 






