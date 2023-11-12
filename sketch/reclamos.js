// - *******************************  CODGIGO JAVASCRIPT *************************** -
// -                                                                                 - 
// -                                 Codigo js principal                             -  
// -                                                                                 -  
// -                                                                                 - 
// - *******************************  CODGIGO JAVASCRIPT *************************** -




// - ***************************** Funcion Principal ******************************* -
window.addEventListener("DOMContentLoaded", mostrar);              // Cargar función "Mostrar" cuando el contenido del documento esté listo
function mostrar() {                                               // El evento "DOMContentLoaded" se dispara cuando el HTML del documento se ha cargado y parseado,
};                                                                 // lo que significa que la página está lista para ser manipulada con JavaScript.
window.addEventListener("unload", alcerrar);                       // Escuchar el evento "beforeunload" para guardar los datos al cerrar la página
function alcerrar() {                                              // El evento "unload" se dispara justo antes de que la página se cierre. 
};
document.write('<script src="botones1-icd-in-ss.js"></script>');   // Importa el archivo de funcionalidad incidentes - solicitudes
document.write('<script src="botones2-fiber.js"></script>');       // Importa el archivo de funcionalidad fiber
document.write('<script src="botones3-teco.js"></script>');        // Importa el archivo de funcionalidad teco
//document.write('<script src="botones4-arcos.js"></script>');        // Importa el archivo de funcionalidad arcos dorados
//document.write('<script src="botones5-others.js"></script>');      // Importa el archivo de funcionalidad herramientas
//document.write('<script src="botones-return.js"></script>');       // Importa el archivo de funcionalidad tecO
// - ***************************** Funcion Principal ******************************* -




// - ********************************** INICIO   *********************************** -
document.addEventListener('DOMContentLoaded', function() {                                                              // Despliega la extension. La misma es visible cuando esta lista!
// ******* Funcion CheckBOX ******* INICIO *******    
function seleccionarCheckbox(checkboxIndex, name) {
  var checkboxes = document.getElementsByName(name);
  checkboxes.forEach(function(checkbox, index) {
    checkbox.checked = (index + 1 === checkboxIndex);
  });
}   
document.getElementById('btnTickets').addEventListener('click', function (event) {openTab(event, 'tab_icd-in-ss');})    // Despliega tab1. Funcion de los botones input_text (cuit, linea, refrencia)
document.getElementById('btnFiber').addEventListener('click', function(event) { openTab(event, 'tab_fiber'); });        // Despliega tab2. Funcion de los botones input_text (cuit, linea, refrencia)
document.getElementById('btnTeco').addEventListener('click', function(event) {openTab(event, 'tab_teco'); });           // Despliega tab2. Funcion de los botones input_text (cuit, linea, refrencia)
// ******* Funcion OpenTAB ******* INICIO *******    
var activeTab = '';
function openTab(evt, tabName) {
  var i, tabcontent, tabbtn;

  // Hide all tabs
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the "active" class from all buttons
  tabbtn = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].classList.remove("active");
  }

  // Show the desired tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");

  // Update the active tab variable
  activeTab = tabName; 
}
document.getElementById('btnTickets').addEventListener('click', function (event) { openTab(event, 'tab_icd-in-ss'); });
document.getElementById('btnFiber').addEventListener('click', function (event) { openTab(event, 'tab_fiber'); });
document.getElementById('btnTeco').addEventListener('click', function (event) { openTab(event, 'tab_teco'); });
document.getElementById('btnArcos').addEventListener('click', function (event) { openTab(event, 'tab_arcos'); });
document.getElementById('btnTools').addEventListener('click', function (event) { openTab(event, 'tab_tools'); });
document.getElementById('btnreturn').addEventListener('click', function (event) {
  // When the "return" button is clicked, close all tabs and reset the state
  var allTabs = ["tab_icd-in-ss", "tab_fiber", "tab_teco", "tab_arcos", "tab_tools", "tab_return"];
  for (var i = 0; i < allTabs.length; i++) {
    var tabElement = document.getElementById(allTabs[i]);
    if (tabElement) {
      tabElement.style.display = "none";
    }
  }

  // Remove the "active" class from all buttons
  var tabbtn = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < tabbtn.length; i++) {
    tabbtn[i].classList.remove("active");
  }

  // Reset the active tab variable
  activeTab = '';
});
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

}); 
// - ********************************** INICIO   *********************************** -
                                                             







 






