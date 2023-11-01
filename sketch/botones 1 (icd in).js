// - *****************************  SECCION 1 - INCIDENTES ************************* -
// -                                                                                 - 
// -                  Codigo js del boton 1, de la extension: INCIDENTES             -  
// -                                                                                 -  
// -                                                                                 -  
// - ***************************** BOTONES INPUT_TEXT  ***************************** -
document.addEventListener('DOMContentLoaded', function() {  
    // Despliega la extension. La misma es visible cuando esta lista!
document.getElementById('btnIncidentes').addEventListener('click', function(event) { openTab(event, 'tab1'); });;   
    // Despliega tab1. Funcion de los botones input_text (cuit, linea, refrencia)
// - ***************************** BOTONES INPUT_TEXT *****************************  -




// - ***************************** BLOC DE NOTAS - NOTEPAD 1 *********************** - 
const notepad1 = document.getElementById("notepad1");      
    // JavaScript para controlar la visibilidad del notepads 1 
const notepad1Container = document.querySelector('.notepad-1');
notepad1.addEventListener('input', function() {   autoAjustar(notepad1); });
function autoAjustar(textarea) {                          
    // Lógica para limpiar notepad 1 (por agregar)
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px'; 
    } 

// ******* BOTON COPIAR DATA ******* INICIO *******    
document.getElementById("botonCopiarD").addEventListener("click", function() { 
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
    });
// ******* BOTON SUBIR DATA ******* INICIO *******    
 document.getElementById("botonSubir").addEventListener("click", function() { 
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
    });
// ******* BOTON LIMPIAR NOTEPAD 1 ******* INICIO *******    
document.getElementById("botonCleanN").addEventListener("click", function() { 
    var notepad1 = document.getElementById("notepad1");
    notepad1.value = "";            // Borra el contenido de notepad1
    notepad1.style.height = 'auto'; // Restablece la altura de notepad1
    });
// ******* BOTON LIMPIAR TODO ******* INICIO *******    
document.getElementById("botonCleanA").addEventListener("click", function() { 
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
    });   
// ***************************** BLOC DE NOTAS - NOTEPAD 1 ************************** - 




// ***************************** BLOC DE NOTAS - NOTEPAD 2 *************************  -
const notepad2 = document.getElementById("notepad2");      
    // JavaScript para controlar la visibilidad del notepad 2
const notepad2Container = document.querySelector('.notepad-2');
notepad2.addEventListener('input', function() {   autoAjustar(notepad2); });
function autoAjustar(textarea) {                          
    // Lógica para limpiar notepad 1 (por agregar)
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px'; 
    }
notepad2.style.display = "block";                                           
    // Haz que notepad2 sea visible   
function cargarLibreriaSeleccionada() {
    var selectElement = document.getElementById("librerias_incidentes");    // Obtener el elemento select 
    var selectedValue = selectElement.value;                                // Obtener el valor seleccionado
    selectedValue = decodeURIComponent(selectedValue);                      // Decodificar la URL
    var url = "librerias/02.ICD.IN/" + selectedValue + ".sublime-snippet";  // Construir la URL del archivo .sublime-snippet
    fetch(url)                                                              // Realizar la carga del contenido
    .then(response => response.text())
    .then(data => {                                                         // Muestra el contenido en el textarea notepad2
    document.getElementById("notepad2").value = data; })                    // Corrección: Usamos document.getElementById("notepad2")
    .catch(error => {
    console.error("Error al cargar la librería:", error);  });
    }

// ******* BOTON EXPORTAR LIBRERIAS******* INICIO *******    
document.getElementById("botonExportar").addEventListener("click", function() { 
    // Haz que notepad2 sea visible
    notepad2.style.display = "block"; 
    // Luego, ejecuta el código para cargar la librería. Esto activará la carga de la librería y mostrará el contenido en notepad2
    cargarLibreriaSeleccionada();      
    }); 
// ******* BOTON CARGAR LIBRERIAS ******* INICIO *******    
document.getElementById("botonCargar").addEventListener("click", function() { 
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
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime:  | Reinicio CM: NO/SI\n\n\n";
        output += "TB: CM sin enlace, se solicita al cliente chequear energia en sitio y reinicio general de los equipos.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break; 
   case "02.NO.NAVEGA.HFC-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime:  | Reinicio CM: NO/SI\n\n\n";
        output += "TB: CM levanta enlance, se prueba navegacion del lado del cliente y CM esta operativo.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe_ip + " | CPE IP: " + cpe_ip + " | CPE (model): " + cpe_ip + "\n"; 
        output += "************************************";
        break; 
    case "03.NO.NAVEGA.HFC-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime:  | Reinicio CM: NO/SI\n\n\n";
        output += "TB: CM dañado, caido o con valores fuera de los parametros. Se agenda OT.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT: " + ot * "\n"; 
        output += "************************************";
        break;  
    case "04.NO.NAVEGA.HFC-sin-CORTES":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime:  | Reinicio CM: NO/SI\n\n\n";
        output += "TB: CM esta operativo., sin degradacion actual. Se solicita al cliente pruebas ping-t/tracert, donde se convalide la degradacion/microcortes/cortes en el servicio.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe_ip + " | CPE IP: " + cpe_ip + "| CPE (model): " + cpe_ip + "\n";
        output += "************************************";
        break; 
    case "05.NO.NAVEGA.HFC-con-CORTES":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "W2K: DHCP con multiples reconexiones en el dia | NXT: caidas reiteradas del CM (ultimos 7-15 dias) | Reinicio CM: SI\n\n\n";
        output += "TB: la falla persiste por degradacion del enlace/equipo. Se agenda OT para reparacion o recambio de CM.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break;   

        default:
            output = "Librería no encontrada.";
        }     
        notepad2.value = output; 
    }); 
// ******* BOTON COPIAR LIBRERIAS ******* INICIO *******    
document.getElementById("botonCopiar").addEventListener("click", function() {  
    var notepad2 = document.getElementById("notepad2");
    notepad2.select();                                                  // Selecciona todo el texto en el notepad2
    document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
    window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
    alert("Texto copiado al portapapeles");                             // Puedes mostrar un mensaje indicando que el texto se copió al portapapeles  
    });
// ******* BOTON COPIAR LIBRERIAS ******* INICIO *******    
document.getElementById("botonLimpiar").addEventListener("click", function() {
    var notepad2 = document.getElementById("notepad2");
    notepad2.value = "";                                                // Borra el contenido del notepad2
    });
});     
// - ***************************** BLOC DE NOTAS - NOTEPAD 2 *********************** -
// - *****************************  SECCION 1 - INCIDENTES ************************* -
   
   