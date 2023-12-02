// - *****************************  SECCION 2 - MAILS FIBER ************************ -
// -                                                                                 - 
// -                  Codigo js del boton FIBER, de la extension: ETV_PROD           -  
// -                                                                                 -  
// -                                                                                 -  
// - *****************************  SECCION 2 - MAILS FIBER ************************ -



// - ********************************** INICIO   *********************************** -
document.addEventListener('DOMContentLoaded', function() {                                                    
  // Obtener referencias a los elementos del DOM
  var tabGestionFb = document.getElementById("tab_gestion_fb");
  var tabLibreriasFiber = document.getElementById("tab_librerias_fiber");
  var btnGestionFb = document.getElementById("btngestion_fb_tab2");
  var btnLibreriasFiber = document.getElementById("btnlibrerias_fiber_tab2");
  var btnReturn = document.getElementById("btnreturn_tab2");

  // Función para mostrar la pestaña de "Gestión In"
  function mostrarGestionFb() {
    tabGestionFb.style.display = "block";
    tabLibreriasFiber.style.display = "none";
  }
  // Función para mostrar la pestaña de "Librerías Mail"
  function mostrarLibreriasFiber() {
    tabGestionFb.style.display = "none";
    tabLibreriasFiber.style.display = "block";
  }
  // Función para cerrar ambas pestañas
  function cerrarPestañas() {
    tabGestionFb.style.display = "none";
    tabLibreriasFiber.style.display = "none";
  }
  // Agregar oyentes de clic a los botones
  btnGestionFb.addEventListener("click", mostrarGestionFb);
  btnLibreriasFiber.addEventListener("click", mostrarLibreriasFiber);
  btnReturn.addEventListener("click", cerrarPestañas);


  // Mostrar "Gestión Fb" por defecto al cargar la página
  mostrarGestionFb();
});  
// - ********************************** INICIO   *********************************** -




// - ***************************** BLOC DE NOTAS - NOTEPAD 3 *********************** - 
document.addEventListener('DOMContentLoaded', function() {                                                    
const notepad3 = document.getElementById("notepad3");      
    // JavaScript para controlar la visibilidad del notepads 3 
const notepad3Container = document.querySelector('.notepad-3');
notepad3.addEventListener('input', function() {   autoAjustar(notepad3); });
function autoAjustar(textarea) {                          
    // Lógica para limpiar notepad 3 (por agregar)
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px'; 
    } 

// ******* BOTON BAJAR DATA ******* INICIO *******    
document.getElementById("botonBajarD.tab2").addEventListener("click", function() { 
    var cuit = document.getElementById("cuit_tab2").value;
    var referencia = document.getElementById("referencia_tab2").value;
    var linea = document.getElementById("linea_tab2").value;
    var ticket_in = document.getElementById("ticket_in_tab2").value;
    var nombre = document.getElementById("nombre_tab2").value;
    var tel_contacto = document.getElementById("tel_contacto_tab2").value;
    var mail = document.getElementById("mail_tab2").value;
    var domicilio = document.getElementById("domicilio_tab2").value;
    var disponibilidad = document.getElementById("disponibilidad_tab2").value;
    var docAcceso = document.getElementById("btAcceso_tab2").value;
    var tot = document.getElementById("btTerraza_tab2").value;
    var covid = document.getElementById("btCovid_tab2").value;
    var cm = document.getElementById("cm_tab2").value;
    var nodo = document.getElementById("nodo_tab2").value;
    var ot = document.getElementById("ot_tab2").value;
    var cpe_mac = document.getElementById("cpe_mac_tab2").value;
    var cpe_ip = document.getElementById("cpe_ip_tab2").value;
    var cpe_model = document.getElementById("cpe_model_tab2").value;

   
    // Concatena los valores de los campos de entrada con "||" como separador
    var clipboardText = cuit + " || " + referencia + " || " + linea + " || " + ticket_in + " || " +
       nombre + " || " + tel_contacto + " || " + mail + " || " + domicilio + " || " + disponibilidad + " || " +
       docAcceso + " || " + tot + " || " + covid + " || " + cm + " || " + nodo + " || " + ot + " || " + 
       cpe_mac + " || " + cpe_ip + " || " + cpe_model;
       
     // Asigna el contenido concatenado a notepad1
    var notepad3 = document.getElementById("notepad3");
    notepad3.value = clipboardText;
    // Ajusta la altura de notepad1 después de pegar los datos
    autoAjustar(notepad3);
    });
// ******* BOTON COPIAR DATA ******* INICIO *******    
document.getElementById("botonCopiarD.tab2").addEventListener("click", function() {  
    var notepad3 = document.getElementById("notepad3");
    notepad3.select();                                                  // Selecciona todo el texto en el notepad2
    document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
    window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
    alert("Texto copiado al portapapeles");                             // Puedes mostrar un mensaje indicando que el texto se copió al portapapeles  
    });
// ******* BOTON SUBIR DATA ******* INICIO *******    
 document.getElementById("botonSubir.tab2").addEventListener("click", function() { 
    var clipboardText = document.getElementById("notepad3").value; 
    var fields = clipboardText.split(" || "); 
    // Asigna los valores a los campos de entrada
    document.getElementById("cuit_tab2").value = fields[0] || "-";
    document.getElementById("referencia_tab2").value = fields[1] || "-";
    document.getElementById("linea_tab2").value = fields[2] || "-";
    document.getElementById("ticket_in_tab2").value = fields[3] || "-";
    document.getElementById("nombre_tab2").value = fields[4] || "-";
    document.getElementById("tel_contacto_tab2").value = fields[5] || "-";
    document.getElementById("mail_tab2").value = fields[6] || "-";
    document.getElementById("domicilio_tab2").value = fields[7] || "-";
    document.getElementById("disponibilidad_tab2").value = fields[8] || "08-16HS";
    document.getElementById("btAcceso_tab2").value = fields[9] || "NO";
    document.getElementById("btTerraza_tab2").value = fields[10] || "SI";
    document.getElementById("btCovid_tab2").value = fields[11] || "NO";
    document.getElementById("cm_tab2").value = fields[12] || "-";
    document.getElementById("nodo_tab2").value = fields[13] || "-";
    document.getElementById("ot_tab2").value = fields[14] || "-";
    document.getElementById("cpe_mac_tab2").value = fields[15] || "-";
    document.getElementById("cpe_ip_tab2").value = fields[16] || "-";
    document.getElementById("cpe_model_tab2").value = fields[17] || "-";
    });
// ******* BOTON LIMPIAR NOTEPAD 3 ******* INICIO *******    
document.getElementById("botonCleanN.tab2").addEventListener("click", function() { 
    var notepad3 = document.getElementById("notepad3");
    notepad3.value = "";            // Borra el contenido de notepad1
    notepad3.style.height = 'auto'; // Restablece la altura de notepad1
    });
});  
// ***************************** BLOC DE NOTAS - NOTEPAD 3 ************************** - 




// - ********************************* LIBRERIAS   ********************************** -
document.addEventListener('DOMContentLoaded', function() {                                                     
  // Obtener todos los botones y selectores
  const buttons = document.querySelectorAll('.tab-btn');
  const selectors = document.querySelectorAll('select');

  // Función para ocultar todos los selectores
  function hideAllSelectors() {
      selectors.forEach(selector => {
          selector.style.display = 'none';
      });
  }

  // Asignar eventos de clic a cada botón
  buttons.forEach(button => {
      button.addEventListener('click', function() {
      // Ocultar todos los selectores al hacer clic en un botón
      hideAllSelectors();

      // Obtener el ID del selector correspondiente al botón clickeado
      const selectorId = 'libreria_' + this.name;

      // Mostrar el selector correspondiente al botón clickeado
      const correspondingSelector = document.getElementById(selectorId);
      if (correspondingSelector) {
          correspondingSelector.style.display = 'block';
      }
    });
  });
});   
// - ********************************* LIBRERIAS   ********************************** -


// - *****************************  SECCION 2 - MAILS FIBER ************************* -
