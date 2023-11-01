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

document.write('<script src="botones 1 (icd in).js"></script>');
  // Importa el archivo de funcionalidad incidentes
document.write('<script src="botones 2 (fiber).js"></script>');
  // Importa el archivo de funcionalidad fiber
document.write('<script src="botones 3 (teco).js"></script>');
  // Importa el archivo de funcionalidad tecp
// ******* Funcion mostrar ******* INICIO *******     
function mostrar() { 
  //borradodeclasses();                      // carga la funcion borradodeclasses(); 
  //load_pestañas();                         // carga la funcion load_pestañas();
  //mostrar_select_de_pestañas();            // carga la funcion mostrar_select_de_pestañas();   
  //load_input_tab1();                     // carga la funcion la funcion Borrado de clases
  //load_input_tab2();                     // carga la funcion oad_input_tab2(); 
  //load_input_tab3_sin_tono();            // carga la funcion load_input_tab3_sin_tono(); 
  //load_input_tab3_tll();                 // carga la funcion load_input_tab3_tll(); 
  //load_input_tab4();                     // carga la funcion load_input_tab4();  
  //load_inputs_toip();                    // carga la funcion Load_inputs_toip();   
  //load_input_tab3_integra();             // carga la funcion Load_input_tab3_integra();      
  //load_tab3_migraciones();               // carga la funcion load_tab3_migraciones();  
  //autoAjustar(document.getElementById("mail_a_extraer-extencion"))
  //bt_disabled()                            // carga la funcion bt_disabled()     
  openTab()     
  mostrarBoton()

  // detalle sobre la funcion:
  // - carga todas las funciones enumeradas   
};   
// ******* Funcion alcerrar ******* INICIO *******    
function alcerrar() {  
  //saved_inputs_in();
  //save_inputs_pestaña2();
  //saved_inputs_tll();
  //save_panilla_sin_tono();
  //saved_inputs_toip();
  //saved_inputs_integra();
  //saved_migracion();

  // detalle sobre la funcion:
  // - Llama a varias funciones que se encargan de guardar datos. 
  // - Estas funciones se utilizan para almacenar información en el almacenamiento 
  // - local del navegador, antes de que la página se cierre.
  // Función para Llamar a varias funciones que se encargan de guardar datos.  
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

  // detalle sobre la funcion:
  // - La función openTab es la que se llama cuando haces clic en uno de los botones de pestañas 
  // - (como se describe en el código anterior). Su objetivo principal es cambiar entre las pestañas
  // - y realizar un seguimiento de cuál pestaña está activa. Aquí está el código con explicaciones:
  // 1-Oculta todos los contenidos de pestañas al establecer el estilo display en "none" para cada elemento con la clase "tab-content". Esto asegura que solo se muestre el contenido de la pestaña seleccionada.
  // 2-Remueve la clase "active" de todos los botones de pestañas (elementos con la clase "tab-btn"). Esto asegura que ningún botón esté marcado como activo.
  // 3-Muestra el contenido de la pestaña seleccionada al establecer el estilo display en "block" para el elemento con el ID correspondiente a tabName. Esto resalta el contenido de la pestaña activa.
  // 4-Agrega la clase "active" al botón de pestaña seleccionado (evt.currentTarget). Esto marca visualmente qué pestaña está activa.
  // 5-Guarda información sobre la pestaña activa en el almacenamiento local para que la selección persista incluso si se actualiza la página. La información incluye el nombre de la pestaña (nombre), el ID del contenido de la pestaña (idcontent), y el índice de la pestaña (indicetab).
}  
// ******* Funcion Mostrar Boton ******* INICIO *******    
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
// - *************************** Funciones Secundarios  **************************** -                                                                    -  
// - *******************************  CODGIGO JAVASCRIPT *************************** -







 







