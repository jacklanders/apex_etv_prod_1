// *************************************************  CODIGO SECCION 2 -  ************************************************* 
document.addEventListener('DOMContentLoaded', function() { // - Boton superior 3 de la extension:
  document.getElementById('btnSolicitudes').addEventListener('click', function(event) {
    openTab(event, 'tab2');
  });

  // Get references to notepad2 in tab2
  const notepad2Tab2 = document.getElementById("notepad2Tab2");

  // JavaScript for controlling the visibility of notepad 2 in tab2
  notepad2Tab2.addEventListener('input', function() {
    autoAjustar(notepad2Tab2);
  });

  function autoAjustar(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }

  notepad2Tab2.style.display = "block";

  document.getElementById("botonLimpiar").addEventListener("click", function() {
    notepad2Tab2.value = ""; // Clear the content of notepad2 in tab2
  });
}); 
// *************************************************  CODIGO SECCION 2 -  ************************************************* 
  

// *************************************************  CODIGO SECCION 3 -  ************************************************* 
document.addEventListener('DOMContentLoaded', function() {  // - Boton superior 2 de la extension:
    document.getElementById('btnFiber').addEventListener('click', function(event) {openTab(event, 'tab3');});
  }); 
// *************************************************  CODIGO SECCION 3 -  ************************************************* 


// *************************************************  CODIGO SECCION 4 -  ************************************************* 
document.addEventListener('DOMContentLoaded', function() {  // - Boton superior 1 de la extension:
  document.getElementById('btnTeco').addEventListener('click', function(event) {openTab(event, 'tab4');});
}); 
// *************************************************  CODIGO SECCION 4 -  ************************************************* 


// *************************************************  CODIGO SECCION 5 -  ************************************************* 
document.addEventListener('DOMContentLoaded', function() {  // - Boton superior 2 de la extension:
  document.getElementById('btnTools').addEventListener('click', function(event) {openTab(event, 'tab5');});
}); 
// *************************************************  CODIGO SECCION 5 -  ************************************************* 