//   ***************************** CODGIGO JAVASCRIPT*****************************
//
//
//
//
//
// *****************************************************  FUNCIONES PRINCIPALESL ***************************************************** 
window.addEventListener("DOMContentLoaded", mostrar);
  // Cargar función "Mostrar" cuando el contenido del documento esté listo
  // El evento "DOMContentLoaded" se dispara cuando el HTML del documento se ha cargado y parseado,
  // lo que significa que la página está lista para ser manipulada con JavaScript.
window.addEventListener("unload", alcerrar);
  // Escuchar el evento "beforeunload" para guardar los datos al cerrar la página
  // El evento "unload" se dispara justo antes de que la página se cierre. 
function mostrar() { 
  //borradodeclasses();                      // carga la funcion borradodeclasses(); 
  load_pestañas();                         // carga la funcion load_pestañas();
  mostrar_select_de_pestañas();            // carga la funcion mostrar_select_de_pestañas();   
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
};  // CARGA LAS FUNCIONES DETALLADAS       
function alcerrar() {  
  //saved_inputs_in();
  //save_inputs_pestaña2();
  //saved_inputs_tll();
  //save_panilla_sin_tono();
  //saved_inputs_toip();
  //saved_inputs_integra();
  //saved_migracion();

    // Función alcerrar() - Llama a varias funciones que se encargan de guardar datos. 
    // Estas funciones se utilizan para almacenar información en el almacenamiento local del navegador, 
    // antes de que la página se cierre.
};  // Función para Llamar a varias funciones que se encargan de guardar datos.     
// *****************************************************  FUNCIONES PRINCIPALES  ***************************************************** 
// *****************************************************  SUBFUNCIONES PRINCIPALES ***************************************************** 
function openTab(evt, tabName) {   
  var i, tabcontent, tabbtn;

  tabcontent = document.getElementsByClassName("tab-content"); // Ocultar todos los contenidos de pestañas
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tabbtn = document.getElementsByClassName("tab-btn");         // Remover la clase "active" de todos los botones de pestañas
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";    // Mostrar el contenido de la pestaña seleccionada
  evt.currentTarget.classList.add("active");
  var info_de_pestaña = {                                      // Guardar en memoria
    nombre: "tabs",
    idcontent: tabName,
    indicetab: parseInt(evt.currentTarget.name)
  };

  if (arrayGuardado) {
    arrayGuardado[0] = info_de_pestaña;
    var arregloObjetos = arrayGuardado;
  } else {
    variable_array[0] = info_de_pestaña;
    var arregloObjetos = variable_array;
  }

  var jsonString = JSON.stringify(arregloObjetos);
  localStorage.setItem('miArray', jsonString);
    // carga la funcion openTab()
    // - La función openTab es la que se llama cuando haces clic en uno de los botones de pestañas 
    // - (como se describe en el código anterior). Su objetivo principal es cambiar entre las pestañas
    // - y realizar un seguimiento de cuál pestaña está activa. Aquí está el código con explicaciones:
    // 1-Oculta todos los contenidos de pestañas al establecer el estilo display en "none" para cada elemento con la clase "tab-content". Esto asegura que solo se muestre el contenido de la pestaña seleccionada.
    // 2-Remueve la clase "active" de todos los botones de pestañas (elementos con la clase "tab-btn"). Esto asegura que ningún botón esté marcado como activo.
    // 3-Muestra el contenido de la pestaña seleccionada al establecer el estilo display en "block" para el elemento con el ID correspondiente a tabName. Esto resalta el contenido de la pestaña activa.
    // 4-Agrega la clase "active" al botón de pestaña seleccionado (evt.currentTarget). Esto marca visualmente qué pestaña está activa.
    // 5-Guarda información sobre la pestaña activa en el almacenamiento local para que la selección persista incluso si se actualiza la página. La información incluye el nombre de la pestaña (nombre), el ID del contenido de la pestaña (idcontent), y el índice de la pestaña (indicetab).
}   // carga la funcion openTab();  
function seleccionarCheckbox(checkboxIndex, name) {
  var checkboxes = document.getElementsByName(name);
  checkboxes.forEach(function(checkbox, index) {
    checkbox.checked = (index + 1 === checkboxIndex); });
}   // Función para seleccionar un checkbox
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

  // Guardar en memoria
  var nuevoObjeto = { nombre: 'selec_de_' + tab, id: id, sel: valorSeleccionado };
  if (arrayGuardado) {
    var indice = arrayGuardado.findIndex(function(objeto) {
      return objeto.id === id;
    });

    if (indice !== -1) {

      arrayGuardado.splice(indice, 1);
    }

    arrayGuardado.push(nuevoObjeto);
    var arregloObjetos = arrayGuardado;
  } else {
    variable_array[1].sel = valorSeleccionado;
    var arregloObjetos = variable_array;
  }

  var jsonString = JSON.stringify(arregloObjetos);
  localStorage.setItem('miArray', jsonString);
};   // Función para activar opciones de opciones
// *****************************************************  SUBFUNCIONES PRINCIPALES ***************************************************** 

// *************************************************  CODIGO SECCION 4 -  ************************************************* 
// - Botones superiores de la extension:
//   Botones - este código escucha el evento "click" en cada uno de los botones con los 
//   ID "btnIncidentes", "btnSolicitudes", "btnTECO" y "btnTOOLS". Cuando se hace clic en uno de
//   estos botones, se llama a la función openTab y se pasa el evento (event) y el ID de la pestaña
//   ('tab1', 'tab2', 'tab3', o 'tab4') como argumentos. Esto permite cambiar entre las pestañas 
//   o secciones de la página cuando se hace clic en los botones correspondientes. 
//   La función openTab se encargaría de realizar esta acción
document.addEventListener('DOMContentLoaded', function() {  // - Boton superior 1 de la extension:
  document.getElementById('btnTeco').addEventListener('click', function(event) {openTab(event, 'tab4');});
}); 
// *************************************************  CODIGO SECCION 4 -  ************************************************* 
// *************************************************  CODIGO SECCION 3 -  ************************************************* 
document.addEventListener('DOMContentLoaded', function() {  // - Boton superior 2 de la extension:
  document.getElementById('btnFIBER').addEventListener('click', function(event) {openTab(event, 'tab3');});
}); 
// *************************************************  CODIGO SECCION 3 -  ************************************************* 
// *************************************************  CODIGO SECCION 2 -  ************************************************* 
document.addEventListener('DOMContentLoaded', function() { // - Boton superior 3 de la extension:
  document.getElementById('btnSolicitudes').addEventListener('click', function(event) {openTab(event, 'tab2');});; 
}); 
// *************************************************  CODIGO SECCION 2 -  ************************************************* 






// *************************************************  CODIGO SECCION 1 - INCIDENTES ************************************************* 
 document.addEventListener('DOMContentLoaded', function() {  // - Boton superior 4 de la extension:
 // ***************************** BOTONES DE LA EXTENSION ***************************** //
 //
 document.getElementById('btnIncidentes').addEventListener('click', function(event) { openTab(event, 'tab1'); });; 
 //
 // ***************************** BOTONES DE LA EXTENSION *****************************  //


 // ***************************** BLOC DE NOTAS - FUNCIONALIDAD ***************************** //
 // 
 // 
 // ***************************** BLOC DE NOTAS - NOTEPAD 1 *****************************
const notepad1 = document.getElementById("notepad1");      // JavaScript para controlar la visibilidad de los notepads 1 
notepad1.addEventListener('input', function() {   autoAjustar(notepad1); });
function autoAjustar(textarea) {                          // Lógica para limpiar notepad 1 (por agregar)
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px'; 
} 

document.getElementById("botonCopiarD").addEventListener("click", function() { // ******* BOTON COPIAR DATA ******* INICIO¨*******  
  var cuit = document.getElementById("cuit").value;
  var referencia = document.getElementById("referencia").value;
  var linea = document.getElementById("linea").value;
  var ticket_in = document.getElementById("ticket_in").value;
  var nombre = document.getElementById("nombre").value;
  var tel_contacto = document.getElementById("tel_contacto").value;
  var mail = document.getElementById("mail").value;
  var domicilio = document.getElementById("domicilio").value;
  var disponibilidad = document.getElementById("disponibilidad").value;
  var docAcceso = document.getElementById("btAcceso").value;
  var tot = document.getElementById("btTerraza").value;
  var covid = document.getElementById("btCovid").value;
  var cm = document.getElementById("cm").value;
  var cpe_ip = document.getElementById("cpe_ip").value;
  var nodo = document.getElementById("nodo").value;
  var ot = document.getElementById("ot").value;

  // Concatena los valores de los campos de entrada con "||" como separador
  var clipboardText = cuit + " || " + referencia + " || " + linea + " || " + ticket_in + " || " +
    nombre + " || " + tel_contacto + " || " + mail + " || " + domicilio + " || " + disponibilidad + " || " +
    docAcceso + " || " + tot + " || " + covid + " || " + cm + " || " + cpe_ip + " || " + nodo + " || " + ot;
    
  // Asigna el contenido concatenado a notepad1
  var notepad1 = document.getElementById("notepad1");
  notepad1.value = clipboardText;
   // Ajusta la altura de notepad1 después de pegar los datos
   autoAjustar(notepad1);
  });// ****************************** BOTON COPIAR DATA **************************************** FIN ************************************
document.getElementById("botonSubir").addEventListener("click", function() { // ******* BOTON PEGAR ******* INICIO¨*******  
  var clipboardText = document.getElementById("notepad1").value; 
  var fields = clipboardText.split(" || "); 
  // Asigna los valores a los campos de entrada
  document.getElementById("cuit").value = fields[0] || "-";
  document.getElementById("referencia").value = fields[1] || "-";
  document.getElementById("linea").value = fields[2] || "-";
  document.getElementById("ticket_in").value = fields[3] || "-";
  document.getElementById("nombre").value = fields[4] || "-";
  document.getElementById("tel_contacto").value = fields[5] || "-";
  document.getElementById("mail").value = fields[6] || "-";
  document.getElementById("domicilio").value = fields[7] || "-";
  document.getElementById("disponibilidad").value = fields[8] || "08-16HS";
  document.getElementById("btAcceso").value = fields[9] || "NO";
  document.getElementById("btTerraza").value = fields[10] || "SI";
  document.getElementById("btCovid").value = fields[11] || "NO";
  document.getElementById("cm").value = fields[12] || "-";
  document.getElementById("cpe_ip").value = fields[13] || "-";
  document.getElementById("nodo").value = fields[14] || "-";
  document.getElementById("ot").value = fields[15] || "-";
});// ****************************** BOTON SUBIR **************************************** FIN ************************************
document.getElementById("botonCleanN").addEventListener("click", function() { // ******* BOTON LIMPIAR NOTEPAD 1 ******* INICIO¨*******  
  var notepad1 = document.getElementById("notepad1");
  notepad1.value = ""; // Borra el contenido de notepad1
  notepad1.style.height = 'auto'; // Restablece la altura de notepad1
});// ****************************** BOTON LIMPIAR NOTEPAD 1 **************************************** FIN ************************************
document.getElementById("botonCleanA").addEventListener("click", function() { // ******* BOTON LIMPIAR TODO ******* INICIO¨*******  
  // Limpia los campos de entrada
  document.getElementById("cuit").value = "-";
  document.getElementById("referencia").value = "-";
  document.getElementById("linea").value = "-";
  document.getElementById("ticket_in").value = "-";
  document.getElementById("nombre").value = "-";
  document.getElementById("tel_contacto").value = "-";
  document.getElementById("mail").value = "-";
  document.getElementById("domicilio").value = "-";
  document.getElementById("disponibilidad").value = "08-16HS";
  document.getElementById("btAcceso").value = "NO";
  document.getElementById("btTerraza").value = "SI";
  document.getElementById("btCovid").value = "NO";
  document.getElementById("cm").value = "-";
  document.getElementById("cpe_ip").value = "-";
  document.getElementById("nodo").value = "-";
  document.getElementById("ot").value = "-";

  // Limpia los notepads
  var notepad1 = document.getElementById("notepad1");
  var notepad2 = document.getElementById("notepad2");
  notepad1.value = "";
  notepad2.value = "";
  // notepad1.style.height = 'auto';
  // notepad2.style.height = 'auto';
    // Oculta notepad2
  notepad2.style.display = "none";
});// ****************************** BOTON LIMPIAR TODO **************************************** FIN ************************************
// ***************************** BLOC DE NOTAS - NOTEPAD 1 *****************************
// 
// 
// ***************************** BLOC DE NOTAS - NOTEPAD 2 *****************************
 const notepad2 = document.getElementById("notepad2");      // JavaScript para controlar la visibilidad de los notepads 2
 const notepad2Container = document.querySelector('.notepad-2');
 notepad2.addEventListener('input', function() {   autoAjustar(notepad2); });
 function autoAjustar(textarea) {                          // Lógica para limpiar notepad 1 (por agregar)
   textarea.style.height = 'auto';
   textarea.style.height = (textarea.scrollHeight) + 'px'; 
  }
  // Haz que notepad2 sea visible
 notepad2.style.display = "block"; // O utiliza "inline" u otro valor apropiado según tu diseño

 function cargarLibreriaSeleccionada() {
  var selectElement = document.getElementById("librerias_incidentes");    // Obtener el elemento select 
  var selectedValue = selectElement.value;                                // Obtener el valor seleccionado
   selectedValue = decodeURIComponent(selectedValue);                        // Decodificar la URL
   var url = "librerias/02.ICD.IN/" + selectedValue + ".sublime-snippet";            // Construir la URL del archivo .sublime-snippet
   fetch(url)                                                              // Realizar la carga del contenido
    .then(response => response.text())
    .then(data => {                                                       // Muestra el contenido en el textarea notepad2
    document.getElementById("notepad2").value = data; })                // Corrección: Usamos document.getElementById("notepad2")
    .catch(error => {
    console.error("Error al cargar la librería:", error);  });
  }// ***************************** BLOC DE NOTAS - NOTEPAD 2 *****************************
// ***************************** BLOC DE NOTAS - FUNCIONALIDAD *****************************
// 
// 
// ***************************** BLOC DE NOTAS - BOTONES *****************************
 document.getElementById("botonExportar").addEventListener("click", function() { // ******* BOTON EXPORTAR ******* INICIO¨*******

  // Haz que notepad2 sea visible
  notepad2.style.display = "block"; // O utiliza "inline" u otro valor apropiado según tu diseño

  // Luego, ejecuta el código para cargar la librería
  cargarLibreriaSeleccionada(); // Esto activará la carga de la librería y mostrará el contenido en notepad2
  

});// ********************************* BOTON EXPORTAR **************************************** FIN ************************************
document.getElementById("botonCargar").addEventListener("click", function() { // ******* BOTON CARGAR ******* INICIO¨******* 
    var selectedValue = document.getElementById("librerias_incidentes").value;                  // Obtén el valor seleccionado nuevamente
    var cuit = document.getElementById("cuit").value;                                           // Obtener los valores de los input text
    var referencia = document.getElementById("referencia").value;                               // Obtener los valores de los input text
    var linea = document.getElementById("linea").value;                                         // Obtener los valores de los input text
    var ticket = document.getElementById("ticket_in").value;                                    // Obtener los valores de los input text
 
    var nombre = document.getElementById("nombre").value;                                       // Obtener los valores de los input text
    var tel = document.getElementById("tel_contacto").value;                                    // Obtener los valores de los input text
    var mail = document.getElementById("mail").value;                                           // Obtener los valores de los input text
    var domicilio = document.getElementById("domicilio").value;  
    var disponibilidad = document.getElementById("disponibilidad").value;                                 // Obtener los valores de los input text
    var docAcceso = document.getElementById("btAcceso").value;                                  // Obtener los valores de los input text
    var tot = document.getElementById("btTerraza").value;                                       // Obtener los valores de los input text
    var covid = document.getElementById("btCovid").value;                                       // Obtener los valores de los input text
 
    var cm = document.getElementById("cm").value;                                               // Obtener los valores de los input text                                      // Obtener los valores de los input text
    var cpe_ip= document.getElementById("cpe_ip").value;                                        // Obtener los valores de los input text                                         // Obtener los valores de los input text
    var nodo = document.getElementById("nodo").value;                                           // Obtener los valores de los input text
    var ot = document.getElementById("ot").value;                                               // Obtener los valores de los input text
   
    var output = "";
    if (selectedValue === "nulo") {
      document.getElementById("notepad2").value = "Selecciona una librería primero.";
      return;
    }
    switch (selectedValue) {                                                                           // Aquí puedes manejar diferentes casos basados en el valor seleccionado
       case "01.NO.NAVEGA.HFC-CCTV-(GC)":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + "\n";
        output += "Tel. Ct.: " + tel + "\n";
        output += "Mail: " + mail + "\n";
        output += "Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Se realiza monitoreo preventivo:\n\n";
        output += "Assure NXT: CM caido/operativo\n";
        output += "Reinicio CM: NO\n\n";
        output += "NXT: NO, CM SIN ENLACE, se solicita al cliente chequear energia en sitio y reinicio general de los equipos.\n";
        output += "************************************\n";
        output += "CM MAC: " + cm + "\n"; // Usas mac pero no está definido
        output += "NODO: " + nodo + "\n";
        output += "************************************";
        break; 
      case "02.NO.NAVEGA.HFC-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + "\n";
        output += "Tel. Ct.: " + tel + "\n";
        output += "Mail: " + mail + "\n";
        output += "Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Se realiza monitoreo preventivo:\n\n";
        output += "Assure NXT: CM caido/CM operativo con uptime: \n";
        output += "Reinicio CM: SI\n\n";
        output += "NXT: SI, CM levanta enlance, se prueba navegacion del lado del cliente y queda operativo.\n";
        output += "************************************\n";
        output += "CM MAC: " + cm + "\n"; // Usas mac pero no está definido
        output += "NODO: " + nodo + "\n\n";
        output += "CPE MAC:\n";
        output += "CPE IP:\n";
        output += "CPE (model):\n";
        output += "************************************";
        break;  
      case "03.NO.NAVEGA.HFC-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + "\n";
        output += "Tel. Ct.: " + tel + "\n";
        output += "Mail: " + mail + "\n";
        output += "H-D: " + disponibilidad + "\n";
        output += "Doc. Acc.: " + docAcceso + "\n";
        output += "ToT: " + tot + "\n";
        output += "Covid: " + covid + "\n";
        output += "Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Se realiza monitoreo preventivo:\n\n";
        output += "Assure NXT: CM caido/operativo\n";
        output += "Reinicio CM: SI\n\n";
        output += "NXT: NO, CM dañado, caido o con valores fuera de los parametros. Se agenda OT.\n";
        output += "************************************\n";
        output += "CM MAC: " + cm + "\n"; // Usas mac pero no está definido
        output += "NODO: " + nodo + "\n";
        output += "OT: " + ot + "\n";
        output += "************************************";
        break;  
     case "04.NO.NAVEGA.HFC-sin-CORTES":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + "\n";
        output += "Tel. Ct.: " + tel + "\n";
        output += "Mail: " + mail + "\n";
        output += "Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Se realiza monitoreo preventivo:\n\n";
        output += "CM operativo con uptime: \n";
        output += "Reinicio CM: SI\n\n";
        output += "W2K/NXT: se corrobora operatividad del CM sin degradacion actual. Se solicita al cliente pruebas ping-t/tracert, donde se pueda validar la degradacion/microcortes/cortes en el servicio.\n";
        output += "************************************\n";
        output += "CM MAC: " + cm + "\n"; // Usas mac pero no está definido
        output += "NODO: " + nodo + "\n\n";
        output += "CPE MAC:\n";
        output += "CPE IP:\n";
        output += "CPE (model):\n";
        output += "************************************";
        break;  
      case "05.NO.NAVEGA.HFC-con-CORTES":
          output += "************************************\n";
          output += "Nombre en SITE: " + nombre + "\n";
          output += "Tel. Ct.: " + tel + "\n";
          output += "Mail: " + mail + "\n";
          output += "H-D: " + disponibilidad + "\n";
          output += "Doc. Acc.: " + docAcceso + "\n";
          output += "ToT: " + tot + "\n";
          output += "Covid: " + covid + "\n";
          output += "Domicilio: " + domicilio + "\n";
          output += "************************************\n";
          output += "Cliente indica sin servicio. Se realiza monitoreo preventivo:\n\n";
          output += "W2K: DHCP con multiples reconexiones en el dia\n"; 
          output += "NXT: caidas reiteradas del CM (ultimos 7-15 dias)\n\n";
          output += "Reinicio CM: SI\n\n";
          output += "NXT: SI/NO, la falla persiste por degradacion actual del enlace. Se agenda OT para reparacion o recambio de equipo.\n";
          output += "************************************\n";
          output += "CM MAC: " + cm + "\n"; // Usas mac pero no está definido
          output += "NODO: " + nodo + "\n";
          output += "OT: " + ot + "\n";
          output += "************************************";
          break;  
      default:
        output = "Librería no encontrada.";
    }
    notepad2.value = output; 
  
}); // ****************************** BOTON CARGAR **************************************** FIN ************************************
document.getElementById("botonCopiar").addEventListener("click", function() { // ******* BOTON COPIAR ******* INICIO¨******* 
  var notepad2 = document.getElementById("notepad2");
  notepad2.select();                                                  // Selecciona todo el texto en el notepad2
  document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
  window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
  alert("Texto copiado al portapapeles");                             // Puedes mostrar un mensaje indicando que el texto se copió al portapapeles  
});// ****************************** BOTON COPIAR **************************************** FIN ************************************
document.getElementById("botonLimpiar").addEventListener("click", function() { // ******* BOTON LIMPIAR NOTEPAD 2 ******* INICIO¨*******
  var notepad2 = document.getElementById("notepad2");
  notepad2.value = "";                                                // Borra el contenido del notepad2
});// ****************************** BOTON LIMPIAR NOTEPAD 2 **************************************** FIN ************************************
// ***************************** BLOC DE NOTAS - BOTONES *****************************
// 
// 
}); // *************************************************  CODIGO SECCION 1 - INCIDENTES ************************************************* 


 







