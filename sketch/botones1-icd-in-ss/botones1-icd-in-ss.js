// - *****************************  SECCION 1 - INCIDENTES ************************* -
// -                                                                                 - 
// -                  Codigo js del boton TICKETS, de la extension: ETV_PROD         -  
// -                                                                                 -  
// -                                                                                 -
// - *****************************  SECCION 1 - INCIDENTES ************************* -



// - ********************************** INICIO   *********************************** -
/* document.addEventListener('DOMContentLoaded', function() {                                                    
    // Obtener referencias a los elementos del DOM
    var tabGestionIn = document.getElementById("tab_gestion_in");
    var tabNotas = document.getElementById("tab_notas");
    var tabRegistros = document.getElementById("tab_tickets");
    var btnGestionIn = document.getElementById("btngestion_in_tab1");
    var btnNotas = document.getElementById("btnnotas_tab1");
    var btnRegistros= document.getElementById("btnlibrerias_tickets_tab1");
    var btnReturn = document.getElementById("btnreturn_tab1");
  
    // Función para mostrar la pestaña de "Gestión In"
    function mostrarGestionIn() {
      tabGestionIn.style.display = "block";
      tabRegistros.style.display = "none";
      tabNotas.style.display = "none";
    }
    // Función para mostrar la pestaña de "Incidentes SS"
    function mostrarRegistros() {
        tabGestionIn.style.display = "none";
        tabRegistros.style.display = "block";
        tabNotas.style.display = "none";
    }
    function mostrarNotas() {
        tabGestionIn.style.display = "none";
        tabRegistros.style.display = "none";
        tabNotas.style.display = "block";
      }
    // Función para cerrar ambas pestañas
    function cerrarPestañas() {
      tabGestionIn.style.display = "none";
      tabRegistros.style.display = "none";
      tabNotas.style.display = "none";
    }
    // Agregar oyentes de clic a los botones
    btnGestionIn.addEventListener("click", mostrarGestionIn);
    btnNotas.addEventListener("click",mostrarNotas);
    btnRegistros.addEventListener("click", mostrarRegistros);
    btnReturn.addEventListener("click", cerrarPestañas);
  
  
    // Mostrar "Gestión In" por defecto al cargar la página
    mostrarGestionIn();
  });  
  */

  document.addEventListener('DOMContentLoaded', function() {
    var tabGestionIn = document.getElementById("tab_gestion_in");
    var tabNotas = document.getElementById("tab_notas");
    var tabRegistros = document.getElementById("tab_tickets");
    var btnReturn = document.getElementById("btnreturn_tab1");
  
    var tabs = [tabGestionIn, tabRegistros, tabNotas];
    var currentTab = 0;
  
    function mostrarPestana(index) {
      tabs.forEach(tab => {
        tab.style.display = "none";
      });
      tabs[index].style.display = "block";
      currentTab = index;
    }
  
    function avanzarPestana() {
      currentTab = (currentTab + 1) % tabs.length;
      mostrarPestana(currentTab);
    }
  
    function retrocederPestana() {
      currentTab = (currentTab - 1 + tabs.length) % tabs.length;
      mostrarPestana(currentTab);
    }
    function cerrarPestañas() {
        tabGestionIn.style.display = "none";
        tabRegistros.style.display = "none";
        tabNotas.style.display = "none";
      }
  
    var btnLeftArrow = document.getElementById("btnleftarrow_tab1");
    var btnRightArrow = document.getElementById("btnrightarrow_tab1");
  
    btnLeftArrow.addEventListener("click", retrocederPestana);
    btnRightArrow.addEventListener("click", avanzarPestana);
    btnReturn.addEventListener("click", cerrarPestañas);
  
    // Mostrar la primera pestaña al cargar la página
    mostrarPestana(currentTab);
  });
// - ********************************** INICIO   *********************************** -
  


// - ***************************** BLOC DE NOTAS - NOTEPAD 1 - 2 *********************** - 
document.addEventListener('DOMContentLoaded', function() {                                                    
     const notepad1 = document.getElementById("notepad1");
    const notepad2 = document.getElementById("notepad2");

    aplicarAjustes(notepad1);
    aplicarAjustes(notepad2);

    function aplicarAjustes(textarea) {
        textarea.addEventListener('input', function() {
            autoAjustar(textarea);
            ajustarAnchoMaximo(textarea);
        });
    }

    function autoAjustar(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    }

    function ajustarAnchoMaximo(textarea) {
        textarea.style.maxWidth = '340px'; // Fijar el ancho máximo
    }
// ******* BOTON BAJAR DATA ******* INICIO *******    
document.getElementById("botonBajarDatos").addEventListener("click", function() { 
    var mercado = document.getElementById("mercado_tab1").value;
    var cliente = document.getElementById("cliente_tab1").value;
    var cuit = document.getElementById("cuit_tab1").value;
    var producto = document.getElementById("producto_tab1").value;
    var linea = document.getElementById("linea_tab1").value;
    var ticket_in = document.getElementById("ticket_in_tab1").value;
    var nombre = document.getElementById("nombre_tab1").value;
    var tel_contacto = document.getElementById("tel_contacto_tab1").value;
    var mail = document.getElementById("mail_tab1").value;
    var disponibilidad = document.getElementById("disponibilidad_tab1").value;
    var docAcceso = document.getElementById("btAcceso_tab1").value;
    var tot = document.getElementById("btTerraza_tab1").value;
    var covid = document.getElementById("btCovid_tab1").value;
    var domicilio = document.getElementById("domicilio_tab1").value;
    var uptime = document.getElementById("uptime_tab1").value;
    var cm = document.getElementById("cm_tab1").value;
    var nodo = document.getElementById("nodo_tab1").value;
    var ot = document.getElementById("ot_tab1").value;
    var cpe_mac = document.getElementById("cpe_mac_tab1").value;
    var cpe_ip = document.getElementById("cpe_ip_tab1").value;
    var cpe_model = document.getElementById("cpe_model_tab1").value;
    var ip_wan = document.getElementById("ip_wan_tab1").value;
    var ip_sco= document.getElementById("ip_sco_tab1").value;
    var port_sco = document.getElementById("port_sco_tab1").value;
    var ticket_cliente = document.getElementById("tk_cliente_tab1").value;
    var resumen = document.getElementById("resumen_tab1").value;
    var ot_cliente = document.getElementById("ot_cliente_tab1").value;

    // Crear un array para almacenar los valores válidos
    var valoresValidos = [];
    
      // Función para agregar texto personalizado al array si el campo no está vacío
      function agregarValor(valor, textoPersonalizado) {
        if (valor !== "" && valor !== "-") {
            valoresValidos.push(`${textoPersonalizado}: ${valor}`);
        }
    }

    // Agregar cada valor con su texto personalizado correspondiente
    agregarValor(mercado, "Mercado");
    agregarValor(cliente, "Cliente");
    agregarValor(cuit, "Cuit");
    agregarValor(producto, "Producto");
    agregarValor(linea, "Linea");
    agregarValor(ticket_in, "Ticket");

    agregarValor(nombre, "Nombre");
    agregarValor(tel_contacto, "Tel. Contacto");
    agregarValor(mail, "Mail");
    agregarValor(disponibilidad, "Disponibilidad");
    agregarValor(docAcceso, "Doc. acceso");
    agregarValor(tot, "ToT");
    agregarValor(covid, "Covid19");
    agregarValor(domicilio, "Domicilio");


    agregarValor(uptime, "estad/uptime");
    agregarValor(cm, "CM MAC");
    agregarValor(nodo, "NODO");
    agregarValor(ot, "OT");
    agregarValor(cpe_ip, "CPE-MAC");
    agregarValor(cpe_mac, "CPE-IP");
    agregarValor(cpe_model, "CPE");
    agregarValor(ip_wan, "IP-WAN");
    agregarValor(ip_sco, "IP-SCO");
    agregarValor(port_sco, "port-SCO");
    agregarValor(ticket_cliente, "Ticket (cliente)");
    agregarValor(resumen, "Resumen");
    agregarValor(ot_cliente, "OT (cliente)");


    // Unir los valores válidos con " || " como separador
    var clipboardText = valoresValidos.join(" || ");

    // Asignar el contenido concatenado a notepad1
    var notepad1 = document.getElementById("notepad1");
    notepad1.value = clipboardText;

    // Ajustar la altura de notepad1 después de pegar los datos
    autoAjustar(notepad1);
});
// ******* BOTON COPIAR DATA ******* INICIO *******    
document.getElementById("botonCopiarDatos").addEventListener("click", function() {  
    var notepad1 = document.getElementById("notepad1");
    notepad1.select();                                                  // Selecciona todo el texto en el notepad2
    document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
    window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
    
    // Mostrar mensaje por un corto período de tiempo y cerrarlo automáticamente
    var mensajeAlerta = "Texto copiado al portapapeles";
    alert(mensajeAlerta);

    // Cerrar el mensaje de alerta después de 2 segundos (2000 milisegundos)
    setTimeout(function() {
        // Una forma de cerrar el mensaje de alerta automáticamente
        alertContainer.style.display = 'none';
    }, 2000);
});
// ******* BOTON SUBIR DATA ******* INICIO *******    
document.getElementById("botonSubirDatos").addEventListener("click", function() { 
    var clipboardText = document.getElementById("notepad1").value; 
    var fields = clipboardText.split(" || "); 

    // Asociar los mensajes personalizados con los campos correspondientes
    var mensajesPersonalizados = [
        "Mercado",
        "Cliente",
        "Cuit",
        "Producto",
        "Linea",
        "Ticket",
        "Nombre",
        "Tel. Contacto",
        "Mail",
        "Disponibilidad",
        "Doc. acceso",
        "ToT",
        "Covid19",
        "Domicilio",
        "estad/uptime",
        "CM MAC",
        "NODO",
        "OT",
        "CPE-MAC",
        "CPE-IP",
        "CPE",
        "IP-WAN",
        "IP-SCO",
        "port-SCO",
        "Ticket (cliente)",
        "Resumen",
        "OT (cliente)"
    ];

    // Asociar los datos a los campos correspondientes según los mensajes personalizados
    for (var i = 0; i < fields.length; i++) {
        // Buscar el índice del mensaje personalizado en el array
        var index = mensajesPersonalizados.indexOf(fields[i].split(":")[0]);
        
        // Si se encuentra el mensaje, asignar el valor al campo correspondiente
        if (index !== -1) {
            switch (index) {
                case 0:
                    document.getElementById("mercado_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 1:
                    document.getElementById("cliente_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 2:
                    document.getElementById("cuit_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 3:
                    document.getElementById("producto_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 4:
                    document.getElementById("linea_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 5:
                    document.getElementById("ticket_in_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 6:
                    document.getElementById("nombre_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 7:
                    document.getElementById("tel_contacto_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 8:
                    document.getElementById("mail_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 9:
                    document.getElementById("disponibilidad_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 10:
                    document.getElementById("btAcceso_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 11:
                    document.getElementById("btTerraza_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 12:
                    document.getElementById("btCovid_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 13:
                    document.getElementById("domicilio_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 14:
                    document.getElementById("cm_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 15:
                    document.getElementById("nodo_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 16:
                    document.getElementById("ot_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 17:
                    document.getElementById("cpe_mac_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 18:
                    document.getElementById("cpe_ip_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 19:
                    document.getElementById("cpe_model_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 20:
                    document.getElementById("ip_wan_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 21:
                    document.getElementById("ip_sco_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 22:
                    document.getElementById("port_sco_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 23:
                    document.getElementById("tk_cliente_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 24:
                    document.getElementById("resumen_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 25:
                    document.getElementById("ot_cliente_tab1").value = fields[i].split(":")[1].trim();
                    break;
                default:
                    break;
            }
        }
    }
});
// ******* BOTON LIMPIAR NOTEPAD 1 ******* INICIO *******    
document.getElementById("botonBorrarDatos").addEventListener("click", function() { 
    var notepad1 = document.getElementById("notepad1");
    notepad1.value = "";            // Borra el contenido de notepad1
    notepad1.style.height = 'auto'; // Restablece la altura de notepad1
    });
});   
// - ***************************** BLOC DE NOTAS - NOTEPAD 1 - 2 *********************** - 




// - ***************************** SELECTOR LIBRERIAS *********************** - 
/*
document.addEventListener('DOMContentLoaded', function() {
    const incidentesButton = document.getElementById('botonIncidentes');
    const solicitudesButton = document.getElementById('botonSolicitudes');
    const incidentesSelect = document.getElementById('librerias_incidentes');
    const solicitudesSelect = document.getElementById('librerias_solicitudes');
  
    // Función para ocultar todos los selectores
    function hideAllSelectors() {
      incidentesSelect.style.display = 'none';
      solicitudesSelect.style.display = 'none';
    }
  
    hideAllSelectors(); // Ocultar todos los selectores inicialmente
  
    incidentesButton.addEventListener('click', function() {
      hideAllSelectors(); // Ocultar todos los selectores
      incidentesSelect.style.display = 'block'; // Mostrar el selector de Incidentes
    });
  
    solicitudesButton.addEventListener('click', function() {
      hideAllSelectors(); // Ocultar todos los selectores
      solicitudesSelect.style.display = 'block'; // Mostrar el selector de Solicitudes
    });
  });
*/
// - ***************************** SELECTOR LIBRERIAS *********************** - 


// - ***************************** SELECTOR LIBRERIAS *********************** - 
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.grid-subcontainer');

    container.addEventListener('click', function(event) {
        const incidentesButton = document.getElementById('botonIncidentes');
        const solicitudesButton = document.getElementById('botonSolicitudes');
        const selector = document.getElementById('librerias_incidentes');

        if (event.target === incidentesButton) {
            selector.dataset.type = 'incidentes';
            mostrarOpciones(selector);
        } else if (event.target === solicitudesButton) {
            selector.dataset.type = 'solicitudes';
            mostrarOpciones(selector);
        }
    });

    function mostrarOpciones(selector) {
        const opciones = selector.querySelectorAll('option');
        const tipo = selector.dataset.type;

        opciones.forEach(opcion => {
            if (opcion.value === 'nulo') {
                opcion.style.display = 'block'; // Mostrar la opción por defecto
            } else {
                // Mostrar u ocultar según el tipo de selector
                opcion.style.display = (opcion.dataset.type === tipo || opcion.value === 'nulo') ? 'block' : 'none';
            }
        });
    }
});
// - ***************************** SELECTOR LIBRERIAS *********************** - 



// ***************************** BLOC DE NOTAS - NOTEPAD 3 *************************  -
document.addEventListener('DOMContentLoaded', function() {                                                    
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
    var selectElement = document.getElementById("librerias_incidentes");       // Obtener el elemento select 
    var selectedValue = selectElement.value;                                   // Obtener el valor seleccionado
    selectedValue = decodeURIComponent(selectedValue);                         // Decodificar la URL
    var url = "../librerias/02.ICD.IN.SS/" + selectedValue + ".sublime-snippet";  // Construir la URL del archivo .sublime-snippet
    fetch(url)                                                                 // Realizar la carga del contenido
    .then(response => response.text())
    .then(data => {                                                            // Muestra el contenido en el textarea notepad2
    document.getElementById("notepad2").value = data; })                       // Corrección: Usamos document.getElementById("notepad2")
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
    var selectedValue = document.getElementById("librerias_incidentes").value;                       // Obtén el valor seleccionado nuevamente
    var cuit = document.getElementById("cuit_tab1").value;                                           // Obtener los valores de los input text
    var referencia = document.getElementById("referencia_tab1").value;                               // Obtener los valores de los input text
    var linea = document.getElementById("linea_tab1").value;                                         // Obtener los valores de los input text
    var ticket = document.getElementById("ticket_in_tab1").value;                                    // Obtener los valores de los input text
    
    var nombre = document.getElementById("nombre_tab1").value;                                       // Obtener los valores de los input text
    var tel = document.getElementById("tel_contacto_tab1").value;                                    // Obtener los valores de los input text
    var mail = document.getElementById("mail_tab1").value;                                           // Obtener los valores de los input text
    var domicilio = document.getElementById("domicilio_tab1").value;  
    var disponibilidad = document.getElementById("disponibilidad_tab1").value;                       // Obtener los valores de los input text
    var docAcceso = document.getElementById("btAcceso_tab1").value;                                  // Obtener los valores de los input text
    var tot = document.getElementById("btTerraza_tab1").value;                                       // Obtener los valores de los input text
    var covid = document.getElementById("btCovid_tab1").value;                                       // Obtener los valores de los input text
    
    var cm = document.getElementById("cm_tab1").value;                                               // Obtener los valores de los input text     
    var nodo = document.getElementById("nodo_tab1").value;                                           // Obtener los valores de los input text
    var ot = document.getElementById("ot_tab1").value;                                               // Obtener los valores de los input text

    var cpe_mac= document.getElementById("cpe_mac_tab1").value;                                      // Obtener los valores de los input text                                        
    var cpe_ip= document.getElementById("cpe_ip_tab1").value;                                        // Obtener los valores de los input text                                        
    var cpe_model= document.getElementById("cpe_model_tab1").value;                                  // Obtener los valores de los input text     

      
    var output = "";
    if (selectedValue === "nulo") {
        document.getElementById("notepad2").value = "Selecciona una librería primero.";
        return;
    }
    switch (selectedValue) {                                                                           // Aquí puedes manejar diferentes casos basados en el valor seleccionado
    case "01.ICD.IN.NO.NAVEGA.HFC-CCTV-(GC)":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime:  | Reinicio CM: NO/SI\n\n\n";
        output += "TB: CM sin enlace, se solicita al cliente chequear energia en sitio y reinicio general de los equipos.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break; 
    case "02.ICD.IN.NO.NAVEGA.HFC-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime:  | Reinicio CM: NO/SI\n\n\n";
        output += "TB: CM levanta enlance, se prueba navegacion del lado del cliente y CM esta operativo.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe_mac + " | CPE IP: " + cpe_ip + " | CPE (model): " + cpe_model + "\n"; 
        output += "************************************";
        break; 
    case "03.ICD.IN.NO.NAVEGA.HFC-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime:  | Reinicio CM: NO/SI\n\n\n";
        output += "TB: CM dañado, caido o con valores fuera de los parametros. Se agenda OT.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT: " + ot + "\n"; 
        output += "************************************";
        break;  
    case "04.ICD.IN.NO.NAVEGA.HFC-sin-CORTES":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM operativo con uptime:  | Reinicio CM: SI\n\n\n";
        output += "TB: CM esta operativo, sin degradacion actual. Se solicita al cliente pruebas ping-t/tracert, donde se convalide la degradacion/microcortes/cortes en el servicio.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe_mac + " | CPE IP: " + cpe_ip + " | CPE (model): " + cpe_model + "\n"; 
        output += "************************************";
        break; 
    case "05.ICD.IN.NO.NAVEGA.HFC-con-CORTES":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "W2K: DHCP con multiples reconexiones en el dia | NXT: caidas reiteradas del CM (ultimos 7-15 dias) | Reinicio CM: SI\n\n\n";
        output += "TB: la falla persiste por degradacion del enlace/equipo. Se agenda OT para reparacion o recambio de CM.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break; 
   case "06.ICD.IN.NO.NAVEGA.HFC-reset-CM":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: prueba ping: FALLIDA - uptime: NO - status: offline | Reset CM: SI\n\n";
        output += "- Wifi 2.4GHz:\n";
        output += "- pass 2.4GHz:\n\n";
        output += "- Wifi 5.8GHz:\n";
        output += "- pass 5.8GHz:\n\n";
        output += "TB: Se reconfigura las credenciales WIFI, posterior al reseteo. Se prueba navegacion del lado del cliente y CM esta operativo.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break;
    case "07.ICD.IN.NO.NAVEGA.HFC-ToIP":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/CM operativo con uptime:  | Reinicio CM: SI/NO | Reset CM: SI/NO\n\n\n";
        output += "TB: Se le indica al cliente que se le remite via mail, una grilla de pruebas/chequeos a realizar por su parte. Con las mismas se iniciara el analisis del ToIP.\n";
        output += "IDProducto: " + referencia + " | CM MAC: " + cm + " | LINEA: " + linea + "\n"; 
        output += "************************************";
        break;      
    case "08.ICD.IN.NO.NAVEGA.HFC-sin-alertar-MASIVO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/degradado | Masivo sin alertar en OPEN.\n\n\n";
        output += "TB (Nodo NXT): se verifica valores fuera de parametros, en varios equipos dentro del CMTS. Se le informa al cliente, posible daño externo en zona y se manda consulta MAIL para corroborar estado del servicio.\n";
        output += "************************************";
        break;
    case "09.ICD.IN.NO.NAVEGA.HFC-alertado-MASIVO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido | Masivo alertado OPEN:\n\n\n";
        output += "Se le informa al cliente daño externo en zona.\n";
        output += "************************************";
        break;
    case "10.ICD.IN.NO.NAVEGA.HFC-reitera-MASIVO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido | Masivo alertado OPEN:\n\n\n";
        output += "Se le reitera la continuidad del daño, con las novedades del caso.\n";
        output += "************************************";
        break;
    case "11.ICD.IN.NO.NAVEGA.FTTH-CCTV-(GC)":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP: 'sin sesion' -  - Lost-Carrier\n\n";
        output += "TB: Cliente no esta en el sitio. Se le explica y/o solicita que desde el domicilio se comunique previo a realizar reinicios y reseteos de ONT segun corresponda.\n";
        output += "ONT MAC: " + cm + "\n"; 
        output += "************************************";
        break;
    case "12.ICD.IN.NO.NAVEGA.FTTH-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP: 'sin sesion' | Reset ONT: SI | CCIP: Equipo levanta sesion, se le indica al cliente los datos de login:\n\n";
        output += "- GUI: http://192.168.1.1/admin.html\n";
        output += "- Usuario: admin\n";
        output += "- Password: CalVxePV1!\n\n";
        output += "TB: se prueba navegacion del lado del cliente y ONT esta operativo.\n";
        output += "ONT MAC: " + cm + "\n"; 
        output += "************************************";
        break;
    case "13.ICD.IN.NO.NAVEGA.FTTH-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP: 'sin sesion' | Reset ONT: SI \n\n";
        output += "CCIP: Equipo caido o con alguna falla fisica. Se asigna OT para reparacion o recambio de equipo.\n";
        output += "ONT MAC: " + cm + " | NODO: " + nodo + " | OT: " + ot + "\n";
        output += "************************************";
        break;
    case "14.ICD.IN.NO.NAVEGA.FTTH-ToIP":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP:  | Reinicio ONT: SI/NO | Reset ONT: SI/NO\n\n";
        output += "TB: Se le indica al cliente que se le remite via mail, una grilla de pruebas/chequeos a realizar por su parte. Con las mismas se iniciara el analisis del ToIP.\n";
        output += "IDProducto: " + referencia + " | ONT MAC: " + cm + " | LINEA: " + linea + " | MTA: " + "\n"; 
        output += "************************************";
        break;
    case "15.ICD.IN.NO.NAVEGA.FTTH-NOC":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP: 'lost carrier' | Reset ONT: SI | CCIP: persiste la falla, error: 'lost carrier'." + "\n";
        output += "ONT MAC: " + cm + "\n\n"; 
        output += "CSOT: Estimados, escalamos el caso para solicitar feedback por el inconveniente actual de la ONT. \n";
        output += "************************************";
        break;
    case "16.ICD.IN.CATV.FLOW.HFC-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "Re-conexion coaxil: SI | Canales: lluvioso/pixelado/algunos si, otros no | Se agenda OT.\n\n";
        output += "IDProducto: " + referencia + " | NODO: " + nodo + " | OT: " + ot + "\n"; 
        output += "************************************";
        break;  
    case "17.ICD.IN.DECO.FLOW.HFC-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "OPEN: Deco con fallas | Pruebas recalculo: Recalculo de parametros TV / INIT CAT TV.\n\n";
        output += "TB: Deco levanta señal, se prueba con el cliente y esta operativo.\n";
        output += "IDProducto: " + referencia + " | SN DECO: " + cm + "\n"; 
        output += "************************************";
        break;
    case "18.ICD.IN.DECO.FLOW.HFC-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "OPEN: Deco con fallas | Pruebas recalculo: Recalculo de parametros TV / INIT CAT TV.\n\n";
        output += "TB: Deco no levanta señal, se asigna OT.\n";
        output += "IDProducto: " + referencia + " | SN DECO: " + cm + "\n"; 
        output += "************************************";
        break;
    case "19.ICD.IN.DECO.FLOW.HFC-NOC":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "OPEN: Deco con fallas | Pruebas recalculo: Recalculo de parametros TV / INIT CAT TV.\n\n";
        output += "TB: Deco presenta inconvenientes con la visualizacion de la grilla/acceso/reproduccion del contenido.\n";
        output += "IDProducto: " + referencia + " | SN DECO: " + cm + "\n\n"; 
        output += "CSOT: Estimados, escalamos el caso para solicitar feedback por el inconveniente actual del deco.\n";
        output += "************************************";
        break;
    case "20.ICD.IN.NO.NAVEGA.TECO-ARNET-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, indica falla con CM Arnet. Monitoreo preventivo:\n";
        output += "Linea: " + linea + " | Cambio equipo: SI/NO | Central: SI/NO | Actor (prueba SUR): v= (cc) - v= (sc)\n";
        output += "CCIP:  | Webni (reset port): SI/NO | Reinicio de CM: SI/NO\n\n\n";
        output += "TB: CM arnet levanta sesion nuevamente, se prueba con cliente y esta operativo. Se deja registro.\n"; 
        output += "************************************";
        break;
    case "21.ICD.IN.NO.NAVEGA.TECO-ARNET-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, indica falla con CM Arnet. Monitoreo preventivo:\n";
        output += "Linea: " + linea + " | Cambio equipo: SI/NO | Central: SI/NO | Actor (prueba SUR): v= (cc) - v= (sc)\n";
        output += "CCIP:  | Webni (reset port): SI/NO | Reinicio de CM: SI/NO\n\n";
        output += "TB: CM arnet con cortes/fallas/sin servicio. Se asigna OT para revision | OT:\n"; 
        output += "************************************";
        break;
    case "22.ICD.IN.SIN.TONO.TECO-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, indica linea con fallas. Monitoreo preventivo:\n";
        output += "Linea: " + linea + " | Cambio equipo: SI/NO | Central: SI/NO | Actor (prueba SUR): v= (cc) - v= (sc)\n\n\n";
        output += "TB: Cliente no esta en sitio. Se le explica pruebas a realizar y remitir consulta, una vez realizadas las mismas. De persistir fallo posteriormente, asignar OT.\n";        output += "************************************";
        break;
    case "23.ICD.IN.SIN.TONO.TECO-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, indica linea con fallas. Monitoreo preventivo:\n";
        output += "Linea: " + linea + " | Cambio equipo: SI/NO | Central: SI/NO | Actor (prueba SUR): v= (cc) - v= (sc)\n\n\n";
        output += "TB: Persiste fallo de linea, se asigna OT.\n";
        output += "************************************";
        break;
    case "24.ICD.IN.SIN.TONO.TECO-TTL":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, solicita transferencia de llamadas. Se escala mail.\n\n";
        output += "Linea (origen): " + linea + " | Linea (destino):  | Nro: EQ.:\n";
        output += "************************************";
        break;
    case "25.ICD.IN.ENLACE.FIBRA-Integra-Hyperway":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO REF.: " + referencia + ", indica con el enlace. Monitoreo preventivo:\n\n";
        output += "Reinicio de equipos: SI | parque sidi delta (habilitado): SI/NO | detalle config. delta (implementado): SI/NO\n";
        output += "**************\n";
        output += "WebNi:\n\n";
        output += "**************";
        break;
    case "26.ICD.IN.INTERNET.DEDICADO-sin-link-SCO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente FIBER REF.: " + referencia + ", indica con el enlace. Monitoreo preventivo:\n\n";
        output += "TB: SCO sin enlace. Se agregan los datos del alta del servicio (delfos) y se le informa al cliente, del tratamiento del caso.\n";
        output += "IP WAN:  | IP SCO:  | port SCO:  | MAC equipo:\n";
        output += "************************************";
        break;
    case "27.ICD.IN.INTERNET.DEDICADO-con link SCO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente FIBER REF.: " + referencia + ", indica con el enlace. Monitoreo preventivo:\n\n";
        output += "TB: SCO con enlace. Se le solicita al cliente reinicio de equipos. De persistir fallo, pruebas PING/TRACERT de manera directa, para corroborar la falta del servicio. Se indica de remitir por casilla soporte, dichas pruebas.\n";
        output += "IP WAN:  | IP SCO:  | port SCO:  | MAC equipo:\n";
        output += "************************************";
        break;
    case "28.ICD.IN.CLOUD.OFFICE-registrado":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica falla de casilla/webmail. Monitoreo preventivo:\n";
        output += "Nick AR:  | NSLookUP:\n\n";
        output += "Dominio (reclamado): | Webmail (reclamado):\n";
        output += "Usuario (admin):\n";
        output += "contraseña:\n";
        output += "contraseña (nueva):\n\n";
        output += "TB: Se validan los datos del cliente. Se solicita en formato adjunto, via mail, el rebote/fallo suscitado.\n";
        output += "************************************";
        break;
    case "29.ICD.IN.CLOUD.OFFICE-no registrado":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica falla de casilla/webmail. Monitoreo preventivo:\n";
        output += "Nick AR:  | NSLookUP:  | Panel COF:  | BaseIN.:\n\n";
        output += "Dominio (reclamado): | Webmail (reclamado):\n";
        output += "Usuario (admin):\n";
        output += "contraseña:\n";
        output += "contraseña (nueva):\n\n";
        output += "TB: No se encuentra el dominio reclamado en nuestra base de datos. Se indica al cliente, de canalizar de forma particuar el fallo suscitado. Ya que no tiene contratado con nosotros, el servicio.\n";
        output += "************************************";
        break;
    case "30.ICD.IN.CLOUD.OFFICE-masivo":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica falla de casilla/webmail. Monitoreo preventivo:\n";
        output += "dominio: | todas las casillas afectadas (). No puede enviar/recibir mails. Se le informa masivo en curso:\n\n";
        output += "admin - \n";
        output += "cloud office  - \n";
        output += "cloud office  - \n";
        output += "************************************";
        break;
    case "31.ICD.IN.OT-incumplida":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica OT incumplida | viene del Ticket:  | OT: " + ot + " | CM Tecnicos:\n";
        output += "NXT: CM caido/operativo con uptime:  | Reinicio CM: SI\n\n";
        output += "TB. Se procede a consultar y validar en open, nueva agenda OT para el cliente.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT (nueva): " + ot + "\n"; 
        output += "************************************";
        break;
    case "32.ICD.IN.OT.Adelanto.Agenda-sin-escalar":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente solicita adelanto de OT | viene del Ticket: " + ticket + " | OT: " + ot + "\n\n";
        output += "TB: Se procede a consultar y validar en open, nueva agenda OT para el cliente.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT (nueva): " + ot + "\n"; 
        output += "************************************";
        break;
    case "33.ICD.IN.OT.Adelanto.Agenda-escalado":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente solicita adelanto de OT | viene del Ticket: " + ticket + " | OT: " + ot + "\n\n";
        output += "TB: la agenda solicitada no se encuentra disponible en OPEN. Se indica al cliente, que se va escalar el caso y quedara pendiente a confirmar por la BASE correspondiente.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT (nueva): " + ot + "\n"; 
        output += "************************************";
        break;
    case "34.ICD.SS.Config.WIFI":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente se comunica para cambiar config. wifi y contraseña\n\n";
        output += "- Wifi 2.4GHz:\n";
        output += "- pass 2.4GHz:\n\n";
        output += "- Wifi 5.8GHz:\n";
        output += "- pass 5.8GHz:\n\n";
        output += "CM MAC: " + cm + " | IDProducto: " + referencia + "\n"; 
        output += "CM: se corrobora con el cliente los cambios realizados, y CM queda operativo.\n";
        output += "************************************";
        break;
    case "35.ICD.SS.Config.NAT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente se comunica para cambiar config. de modo BRIDGE a NAT. Se toman datos y se procede:\n\n";
        output += "CM MAC: " + cm + " | IDProducto: " + referencia + "\n"; 
        output += "************************************";
        break;
    case "36.ICD.SS.Config.BRIDGE":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente se comunica para cambiar config. de modo NAT a BRIDGE. Se toman datos y se procede:\n\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe_mac + " | CPE IP: " + cpe_ip + " | CPE (model): " + cpe_model + "\n"; 
        output += "************************************";
        break;
    case "37.ICD.SS.Config.IP-FIJA":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente se comunica para fijar IP. Se toman datos del cpe y se procede:\n\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe_mac + " | CPE IP: " + cpe_ip + " | CPE (model): " + cpe_model + "\n"; 
        output += "************************************";
        break;
    case "38.ICD.SS.Adelanto.Agenda-OT-escalado":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "MAD: Estimados, favor de adelantar y asegurar OT: " + ot + ". La misma se encuentra fuera del SLA establecido (48hs habiles). En OPEN no contamos con agenda previa a la asignada.\n\n";
        output += "Aguardamos respuesta, ya que el cliente se encuentra sin servicio.\n\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break;
    case "39.ICD.SS.Adelanto.Agenda-OT-escalado":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "MAD: Estimados, favor de adelantar la siguiente OT: " + ot + ". Cliente con service cumplido en el dia de hoy, continua con degradacion del servicio.\n\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break;
        default:
            output = "Librería no encontrada.";
        }     
        notepad2.value = output; 
    }); 
// ******* BOTON COPIAR NOTEPAD 2 ******* INICIO *******    
document.getElementById("botonCopiar").addEventListener("click", function() {  
    var notepad2 = document.getElementById("notepad2");
    notepad2.select();                                                  // Selecciona todo el texto en el notepad2
    document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
    window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
    alert("Texto copiado al portapapeles");                             // Puedes mostrar un mensaje indicando que el texto se copió al portapapeles  
    });
// ******* BOTON LIMPIAR NOTEPAD 2 ******* INICIO *******    
document.getElementById("botonLimpiar").addEventListener("click", function() {
    var notepad2 = document.getElementById("notepad2");
    notepad2.value = "";                                                // Borra el contenido del notepad2
    });
// ******* BOTON LIMPIAR TODO ******* INICIO *******    
document.getElementById("botonCleanA").addEventListener("click", function() { 
    // Limpia los campos de entrada
    document.getElementById("cuit_tab1").value = "-";
    document.getElementById("referencia_tab1").value = "-";
    document.getElementById("linea_tab1").value = "-";
    document.getElementById("ticket_in_tab1").value = "-";
    document.getElementById("nombre_tab1").value = "-";
    document.getElementById("tel_contacto_tab1").value = "-";
    document.getElementById("mail_tab1").value = "-";
    document.getElementById("domicilio_tab1").value = "-";
    document.getElementById("disponibilidad_tab1").value = "08-16HS";
    document.getElementById("btAcceso_tab1").value = "NO";
    document.getElementById("btTerraza_tab1").value = "SI";
    document.getElementById("btCovid_tab1").value = "NO";
    document.getElementById("cm_tab1").value = "-";
    document.getElementById("nodo_tab1").value = "-";
    document.getElementById("ot_tab1").value = "-";
    document.getElementById("cpe_mac_tab1").value = "-";
    document.getElementById("cpe_ip_tab1").value = "-";
    document.getElementById("cpe_model_tab1").value = "-";
  
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
});     
// - ***************************** BLOC DE NOTAS - NOTEPAD 2 *********************** -
   

