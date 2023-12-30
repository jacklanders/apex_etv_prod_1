// - *****************************  SECCION 1 - INCIDENTES ************************* -
// -                                                                                 - 
// -                                                                                 - 
// -                                  Codigo js principal                            -  
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
// - ********************************** INICIO   *********************************** -


// - ********************************** INICIO   *********************************** -
  document.addEventListener('DOMContentLoaded', function() {
    var tabGestionIn = document.getElementById("tab_gestion_in");
    var tabNotas = document.getElementById("tab_notas");
    var tabRegistros = document.getElementById("tab_librerias_incidentes");
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
  



// - ***************************** BLOC DE NOTAS - NOTEPAD 1-2 *********************** - 
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
    var mercado = document.getElementById("btmercado_tab1").value;
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
    var cm = document.getElementById("cm_tab1").value;
    var nodo = document.getElementById("nodo_tab1").value;
    var ot = document.getElementById("ot_tab1").value;
    var uptime = document.getElementById("uptime_tab1").value;
    var ip = document.getElementById("ip_tab1").value;
    var cpe = document.getElementById("cpe_tab1").value;
    var model = document.getElementById("model_tab1").value;
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


    agregarValor(cm, "CM MAC");
    agregarValor(nodo, "NODO");
    agregarValor(ot, "OT");
    agregarValor(uptime, "estado - uptime");
    agregarValor(ip, "IP");
    agregarValor(cpe, "CPE");
    agregarValor(model, "MODEL");
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
        "CM MAC",
        "NODO",
        "OT",
        "estado - uptime",
        "IP",
        "CPE",
        "MODEL",
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
                    document.getElementById("btmercado_tab1").value = fields[i].split(":")[1].trim();
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
                    document.getElementById("uptime_tab1").value = fields[i].split(":")[1].trim();
                    break;                    
                case 18:
                    document.getElementById("ip_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 19:
                    document.getElementById("cpe_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 20:
                    document.getElementById("model_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 21:
                    document.getElementById("ip_wan_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 22:
                    document.getElementById("ip_sco_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 23:
                    document.getElementById("port_sco_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 24:
                    document.getElementById("tk_cliente_tab1").value = fields[i].split(":")[1].trim();
                    break;
                case 25:
                    document.getElementById("resumen_tab1").value = fields[i].split(":")[1].trim();
                    br6ak;
                case 26:
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
// ******* BOTON SUMAR REGISTRO ******* INICIO *******    
document.getElementById("botonSumarReg").addEventListener("click", function() { 
    var notepad1 = document.getElementById("notepad1").value;
    var notepad2 = document.getElementById("notepad2");

    if (notepad2.value !== '') {
        // Si notepad2 ya tiene contenido, desplaza el texto hacia abajo y agrega un separador
        notepad2.value = '***********************************\n' + notepad1 + '\n***********************************\n' + notepad2.value + '\n***********************************\n';
    } else {
        // Si notepad2 está vacío, copia directamente el contenido de notepad1
        notepad2.value = notepad1;
    }

    // Ajusta la altura de notepad2 según el contenido
    notepad2.style.height = 'auto';
    notepad2.style.height = (notepad2.scrollHeight) + 'px';
   });
// ******* BOTON COPIAR REGISTRO ******* INICIO *******    
document.getElementById("botonCopiarReg").addEventListener("click", function() {  
    var notepad2 = document.getElementById("notepad2");
    notepad2.select();                                                  // Selecciona todo el texto en el notepad3
    document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
    window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
    
    // No se muestra ningún mensaje ni se cierra automáticamente después de copiar
    });
// ******* BOTON BORRAR REGISTRO ******* INICIO *******    
document.getElementById("botonCleanReg").addEventListener("click", function() { 
    var notepad2 = document.getElementById("notepad2");
    notepad2.value = "";            // Borra el contenido de notepad2
    notepad2.style.height = 'auto'; // Restablece la altura de notepad2 si es necesario
   });
});
// - ***************************** BLOC DE NOTAS - NOTEPAD 1-2 *********************** - 




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
    const notepad3 = document.getElementById("notepad3");
    const selectElement = document.getElementById("librerias_incidentes");

    function cargarLibreriaSeleccionada() {
        var selectedValue = selectElement.value;
        selectedValue = decodeURIComponent(selectedValue);

        // Construir la URL según la selección del usuario
        var url;
        switch(selectedValue) {
            case '01.TK-IN-NO.NAVEGA.HFC.CCTV.(GC)':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/01.TK-IN-NO.NAVEGA.HFC.CCTV.(GC).sublime-snippet";
                break;
            case '02.TK-IN-NO.NAVEGA.HFC-sin-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/02.TK-IN-NO.NAVEGA.HFC-sin-OT.sublime-snippet";
                break;
            case '03.TK-IN-NO.NAVEGA.HFC-con-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/03.TK-IN-NO.NAVEGA.HFC-con-OT.sublime-snippet";
                break;
            case '04.TK-IN-NO.NAVEGA.HFC-sin-CORTES':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/04.TK-IN-NO.NAVEGA.HFC-sin-CORTES.sublime-snippet";
                break;
            case '05.TK-IN-NO.NAVEGA.HFC-con-CORTES':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/05.TK-IN-NO.NAVEGA.HFC-con-CORTES.sublime-snippet";
                break;
            case '06.TK-IN-NO.NAVEGA.HFC-reset-CM':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/06.TK-IN-NO.NAVEGA.HFC-reset-CM.sublime-snippet";
                break;
            case '07.TK-IN-NO.NAVEGA.HFC-ToIP':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/07.TK-IN-NO.NAVEGA.HFC-ToIP.sublime-snippet";
                break;
            case '08.TK-IN-NO.NAVEGA.HFC-sin-alertar-MASIVO':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/08.TK-IN-NO.NAVEGA.HFC-sin-alertar-MASIVO.sublime-snippet";
                break;
            case '09.TK-IN-NO.NAVEGA.HFC-alertado-MASIVO':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/09.TK-IN-NO.NAVEGA.HFC-alertado-MASIVO.sublime-snippet";
                break;
            case '10.TK-IN-NO.NAVEGA.HFC-reitera-MASIVO':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/10.TK-IN-NO.NAVEGA.HFC-reitera-MASIVO.sublime-snippet";
                break;
            case '11.TK-IN-NO.NAVEGA.FTTH-CCTV-(GC)':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/11.TK-IN-NO.NAVEGA.FTTH-CCTV-(GC).sublime-snippet";
                break;
            case '12.TK-IN-.NO.NAVEGA.FTTH-sin-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/12.TK-IN-.NO.NAVEGA.FTTH-sin-OT.sublime-snippet";
                break;
            case '13.TK-IN-NO.NAVEGA.FTTH-con-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/13.TK-IN-NO.NAVEGA.FTTH-con-OT.sublime-snippet";
                break;
            case '14.TK-IN-NO.NAVEGA.FTTH-ToIP':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/14.TK-IN-NO.NAVEGA.FTTH-ToIP.sublime-snippet";
                break;
            case '15.TK-IN-NO.NAVEGA.FTTH-NOC':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/15.TK-IN-NO.NAVEGA.FTTH-NOC.sublime-snippet";
                break;
            case '16.TK-IN-CATV.FLOW.HFC-con-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/16.TK-IN-CATV.FLOW.HFC-con-OT.sublime-snippet";
                break;
            case '17.TK-IN-DECO.FLOW.HFC-sin-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/17.TK-IN-DECO.FLOW.HFC-sin-OT.sublime-snippet";
                break;
            case '18.TK-IN-DECO.FLOW.HFC-con-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/18.TK-IN-DECO.FLOW.HFC-con-OT.sublime-snippet";
                break;
            case '19.TK-IN-DECO.FLOW.HFC-NOC':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/19.TK-IN-DECO.FLOW.HFC-NOC.sublime-snippet";
                break;
            case '20.TK-IN-NO.NAVEGA.TECO-ARNET-sin-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/20.TK-IN-NO.NAVEGA.TECO-ARNET-sin-OT.sublime-snippet";
                break;
            case '21.TK-IN-NO.NAVEGA.TECO-ARNET-con-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/21.TK-IN-NO.NAVEGA.TECO-ARNET-con-OT.sublime-snippet";
                break;
             case '22.TK-IN-SIN.TONO.TECO-sin-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/22.TK-IN-SIN.TONO.TECO-sin-OT.sublime-snippet";
                break;
            case '23.TK-IN-SIN.TONO.TECO-con-OT':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/23.TK-IN-SIN.TONO.TECO-con-OT.sublime-snippet";
                break;
            case '24.TK-IN-SIN.TONO.TECO-TTL':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/24.TK-IN-SIN.TONO.TECO-TTL.sublime-snippet";
                break;
            case '25.TK-IN-ENLACE.FIBRA-Integra-Hyperway':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/25.TK-IN-ENLACE.FIBRA-Integra-Hyperway.sublime-snippet";
                break;
            case '26.TK-IN-INTERNET.DEDICADO-sin-link-SCO':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/26.TK-IN-INTERNET.DEDICADO-sin-link-SCO.sublime-snippet";
                break;
            case '27.TK-IN-INTERNET.DEDICADO-con link SCO':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/27.TK-IN-INTERNET.DEDICADO-con link SCO.sublime-snippet";
                break;
            case '28.TK-IN-CLOUD.OFFICE-registrado':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/28.TK-IN-CLOUD.OFFICE-registrado.sublime-snippet";
                break;
            case '29.TK-IN-CLOUD.OFFICE-no registrado':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/29.TK-IN-CLOUD.OFFICE-no registrado.sublime-snippet";
                break;
            case '30.TK-IN-CLOUD.OFFICE-masivo':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/30.TK-IN-CLOUD.OFFICE-masivo.sublime-snippet";
                break;
            case '31.TK-IN-OT-incumplida':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/31.TK-IN-OT-incumplida.sublime-snippet";
                break;
            case '32.TK-IN-OT.Adelanto.Agenda-sin-escalar':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/32.TK-IN-OT.Adelanto.Agenda-sin-escalar.sublime-snippet";
                break;
            case '33.TK-IN-OT.Adelanto.Agenda-escalado':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/33.TK-IN-OT.Adelanto.Agenda-escalado.sublime-snippet";
                break;
             case '34.TK-SS-Config.WIFI':
                url = "../librerias/03.TICKETS.IN/02.tickets.solicitudes/01.TK-SS-Config.WIFI.sublime-snippet";
                break;
            case '35.TK-SS-Config.NAT':
                url = "../librerias/03.TICKETS.IN/02.tickets.solicitudes/35.TK-SS-Config.NAT.sublime-snippet";
                break;
            case '01.TK-SS-Config.WIFI':
                url = "../librerias/03.TICKETS.IN/02.tickets.solicitudes/01.TK-SS-Config.WIFI.sublime-snippet";
                break;
            case '02.TK-SS-Config.NAT':
                url = "../librerias/03.TICKETS.IN/02.tickets.solicitudes/02.TK-SS-Config.NAT.sublime-snippet";
                break;
            case '03.TK-SS-Config.BRIDGE':
                url = "../librerias/03.TICKETS.IN/02.tickets.solicitudes/03.TK-SS-Config.BRIDGE.sublime-snippet";
                break;
            case '04.TK-SS-Config.IP-FIJA':
                url = "../librerias/03.TICKETS.IN/02.tickets.solicitudes/04.TK-SS-Config.IP-FIJA.sublime-snippet";
                break;
            case '05.TK-SS-Adelanto.Agenda-OT-escalado':
                url = "../librerias/03.TICKETS.IN/02.tickets.solicitudes/05.TK-SS-Adelanto.Agenda-OT-escalado.sublime-snippet";
                break;
            case '06.TK-SS-Adelanto.Agenda-OT-escalado':
                url = "../librerias/03.TICKETS.IN/02.tickets.solicitudes/06.TK-SS-Adelanto.Agenda-OT-escalado.sublime-snippet";
                break;
            default:
                console.error("Opción no válida seleccionada");
                return; // Salir de la función si no se selecciona una opción válida
        }

        // Cargar el contenido de la librería usando fetch
        fetch(url)
            .then(response => response.text())
            .then(data => {
                notepad3.value = data;
                autoAjustar(notepad3);
            })
            .catch(error => {
                console.error("Error al cargar la librería:", error);
            });
    }

    function autoAjustar(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    }

// ******* BOTON EXPORTAR LIBRERIAS******* INICIO *******    
document.getElementById("botonExportar").addEventListener("click", function() {
    cargarLibreriaSeleccionada();
    });
// ******* BOTON CARGAR LIBRERIAS ******* INICIO *******    
document.getElementById("botonCargar").addEventListener("click", function() { 
    var selectedValue = document.getElementById("librerias_incidentes").value;                       // Obtén el valor seleccionado nuevamente
    var mercado = document.getElementById("btmercado_tab1").value; 
    var cuit = document.getElementById("cuit_tab1").value;                                           // Obtener los valores de los input text
    var referencia = document.getElementById("producto_tab1").value;                               // Obtener los valores de los input text
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
    var uptime = document.getElementById("uptime_tab1").value;                                               // Obtener los valores de los input text

    var ip= document.getElementById("ip_tab1").value;                                        // Obtener los valores de los input text                                        
    var cpe= document.getElementById("cpe_tab1").value;                                      // Obtener los valores de los input text                                        
    var model= document.getElementById("model_tab1").value;                                  // Obtener los valores de los input text     

    var ip_wan= document.getElementById("ip_wan_tab1").value;                                  // Obtener los valores de los input text     
    var ip_sco= document.getElementById("ip_sco_tab1").value;                                  // Obtener los valores de los input text     
    var port_sco= document.getElementById("port_sco_tab1").value;                                  // Obtener los valores de los input text     

    var tk_cliente= document.getElementById("tk_cliente_tab1").value;                                  // Obtener los valores de los input text     
    var resumen= document.getElementById("resumen_tab1").value;                                  // Obtener los valores de los input text     
    var ot_cliente= document.getElementById("ot_cliente_tab1").value;                                  // Obtener los valores de los input text     

      
    var output = "";
    if (selectedValue === "nulo") {
        document.getElementById("notepad3").value = "Selecciona una librería primero.";
        return;
    }
    switch (selectedValue) {                                                                           // Aquí puedes manejar diferentes casos basados en el valor seleccionado
    case "01.TK-IN-NO.NAVEGA.HFC.CCTV.(GC)":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime: " + uptime + " | Reinicio CM: NO/SI\n\n\n";
        output += "TB: CM sin enlace, se solicita al cliente chequear energia en sitio y reinicio general de los equipos.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break; 
    case "02.TK-IN-NO.NAVEGA.HFC-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/CM operativo con uptime: " + uptime + " | Reinicio CM: SI\n\n\n";
        output += "TB: CM levanta enlance, se prueba navegacion del lado del cliente y CM esta operativo.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe + " | CPE IP: " + ip + " | CPE (model): " + model + "\n"; 
        output += "************************************";
        break; 
    case "03.TK-IN-NO.NAVEGA.HFC-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/operativo con uptime: " + uptime + " | Reinicio CM: SI\n\n\n";
        output += "TB: CM dañado, caido o con valores fuera de los parametros. Se agenda OT.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT: " + ot + "\n"; 
        output += "************************************";
        break;  
    case "04.TK-IN-NO.NAVEGA.HFC-sin-CORTES":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM operativo con uptime: " + uptime + " | Reinicio CM: SI\n\n\n";
        output += "TB: CM esta operativo, sin degradacion actual. Se solicita al cliente pruebas ping-t/tracert, donde se convalide la degradacion/microcortes/cortes en el servicio.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe + " | CPE IP: " + ip + " | CPE (model): " + model + "\n"; 
        output += "************************************";
        break; 
    case "05.TK-IN-NO.NAVEGA.HFC-con-CORTES":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "W2K: DHCP con multiples reconexiones en el dia | NXT: caidas reiteradas del CM (ultimos 7-15 dias) | Reinicio CM: SI\n\n\n";
        output += "TB: la falla persiste por degradacion del enlace/equipo. Se agenda OT para reparacion o recambio de CM.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break; 
   case "06.TK-IN-NO.NAVEGA.HFC-reset-CM":
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
    case "07.TK-IN-NO.NAVEGA.HFC-ToIP":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/CM operativo con uptime: " + uptime + " | Reinicio CM: SI/NO | Reset CM: SI/NO\n\n\n";
        output += "TB: Se le indica al cliente que se le remite via mail, una grilla de pruebas/chequeos a realizar por su parte. Con las mismas se iniciara el analisis del ToIP.\n";
        output += "IDProducto: " + referencia + " | CM MAC: " + cm + " | LINEA: " + linea + "\n"; 
        output += "************************************";
        break;      
    case "08.TK-IN-NO.NAVEGA.HFC-sin-alertar-MASIVO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido/degradado | Masivo sin alertar en OPEN.\n\n\n";
        output += "TB (Nodo NXT): se verifica valores fuera de parametros, en varios equipos dentro del CMTS. Se le informa al cliente, posible daño externo en zona y se manda consulta MAIL para corroborar estado del servicio.\n";
        output += "************************************";
        break;
    case "09.TK-IN-NO.NAVEGA.HFC-alertado-MASIVO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido | Masivo alertado OPEN:\n\n\n";
        output += "Se le informa al cliente daño externo en zona.\n";
        output += "************************************";
        break;
    case "10.TK-IN-NO.NAVEGA.HFC-reitera-MASIVO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "NXT: CM caido | Masivo alertado OPEN:\n\n\n";
        output += "Se le reitera la continuidad del daño, con las novedades del caso.\n";
        output += "************************************";
        break;
    case "11.TK-IN-NO.NAVEGA.FTTH-CCTV-(GC)":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP: 'sin sesion' -  - Lost-Carrier\n\n";
        output += "TB: Cliente no esta en el sitio. Se le explica y/o solicita que desde el domicilio se comunique previo a realizar reinicios y reseteos de ONT segun corresponda.\n";
        output += "ONT MAC: " + cm + "\n"; 
        output += "************************************";
        break;
    case "12.TK-IN-.NO.NAVEGA.FTTH-sin-OT":
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
    case "13.TK-IN-NO.NAVEGA.FTTH-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP: 'sin sesion' | Reset ONT: SI \n\n";
        output += "CCIP: Equipo caido o con alguna falla fisica. Se asigna OT para reparacion o recambio de equipo.\n";
        output += "ONT MAC: " + cm + " | NODO: " + nodo + " | OT: " + ot + "\n";
        output += "************************************";
        break;
    case "14.TK-IN-NO.NAVEGA.FTTH-ToIP":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP:  | Reinicio ONT: SI/NO | Reset ONT: SI/NO\n\n";
        output += "TB: Se le indica al cliente que se le remite via mail, una grilla de pruebas/chequeos a realizar por su parte. Con las mismas se iniciara el analisis del ToIP.\n";
        output += "IDProducto: " + referencia + " | ONT MAC: " + cm + " | LINEA: " + linea + " | MTA: " + "\n"; 
        output += "************************************";
        break;
    case "15.TK-IN-NO.NAVEGA.FTTH-NOC":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "CCIP: 'lost carrier' | Reset ONT: SI | CCIP: persiste la falla, error: 'lost carrier'." + "\n";
        output += "ONT MAC: " + cm + "\n\n"; 
        output += "CSOT: Estimados, escalamos el caso para solicitar feedback por el inconveniente actual de la ONT. \n";
        output += "************************************";
        break;
    case "16.TK-IN-CATV.FLOW.HFC-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "Re-conexion coaxil: SI | Canales: lluvioso/pixelado/algunos si, otros no | Se agenda OT.\n\n";
        output += "IDProducto: " + referencia + " | NODO: " + nodo + " | OT: " + ot + "\n"; 
        output += "************************************";
        break;  
    case "17.TK-IN-DECO.FLOW.HFC-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "OPEN: Deco con fallas | Pruebas recalculo: Recalculo de parametros TV / INIT CAT TV.\n\n";
        output += "TB: Deco levanta señal, se prueba con el cliente y esta operativo.\n";
        output += "IDProducto: " + referencia + " | SN DECO: " + cm + "\n"; 
        output += "************************************";
        break;
    case "18.TK-IN-DECO.FLOW.HFC-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica sin servicio. Monitoreo preventivo:\n";
        output += "OPEN: Deco con fallas | Pruebas recalculo: Recalculo de parametros TV / INIT CAT TV.\n\n";
        output += "TB: Deco no levanta señal, se asigna OT.\n";
        output += "IDProducto: " + referencia + " | SN DECO: " + cm + " | NODO: " + nodo + " | OT: " + ot + "\n";
        output += "************************************";
        break;
    case "19.TK-IN-DECO.FLOW.HFC-NOC":
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
    case "20.TK-IN-NO.NAVEGA.TECO-ARNET-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, indica falla con CM Arnet. Monitoreo preventivo:\n";
        output += "Linea: " + linea + " | Cambio equipo: SI/NO | Central: SI/NO | Actor (prueba SUR): v= (cc) - v= (sc)\n";
        output += "CCIP:  | Webni (reset port): SI/NO | Reinicio de CM: SI/NO\n\n\n";
        output += "TB: CM arnet levanta sesion nuevamente, se prueba con cliente y esta operativo. Se deja registro.\n"; 
        output += "************************************";
        break;
    case "21.TK-IN-NO.NAVEGA.TECO-ARNET-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, indica falla con CM Arnet. Monitoreo preventivo:\n";
        output += "Linea: " + linea + " | Cambio equipo: SI/NO | Central: SI/NO | Actor (prueba SUR): v= (cc) - v= (sc)\n";
        output += "CCIP:  | Webni (reset port): SI/NO | Reinicio de CM: SI/NO\n\n";
        output += "TB: CM arnet con cortes/fallas/sin servicio. Se asigna OT para revision | OT:\n"; 
        output += "************************************";
        break;
    case "22.TK-IN-SIN.TONO.TECO-sin-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, indica linea con fallas. Monitoreo preventivo:\n";
        output += "Linea: " + linea + " | Cambio equipo: SI/NO | Central: SI/NO | Actor (prueba SUR): v= (cc) - v= (sc)\n\n\n";
        output += "TB: Cliente no esta en sitio. Se le explica pruebas a realizar y remitir consulta, una vez realizadas las mismas. De persistir fallo posteriormente, asignar OT.\n";        output += "************************************";
        break;
    case "23.TK-IN-SIN.TONO.TECO-con-OT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, indica linea con fallas. Monitoreo preventivo:\n";
        output += "Linea: " + linea + " | Cambio equipo: SI/NO | Central: SI/NO | Actor (prueba SUR): v= (cc) - v= (sc)\n\n\n";
        output += "TB: Persiste fallo de linea, se asigna OT.\n";
        output += "************************************";
        break;
    case "24.TK-IN-SIN.TONO.TECO-TTL":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO AB, solicita transferencia de llamadas. Se escala mail.\n\n";
        output += "Linea (origen): " + linea + " | Linea (destino):  | Nro: EQ.:\n";
        output += "************************************";
        break;
    case "25.TK-IN-ENLACE.FIBRA-Integra-Hyperway":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente TECO REF.: " + referencia + ", indica con el enlace. Monitoreo preventivo:\n\n";
        output += "Reinicio de equipos: SI | parque sidi delta (habilitado): SI/NO | detalle config. delta (implementado): SI/NO\n";
        output += "**************\n";
        output += "WebNi:\n\n";
        output += "**************";
        break;
    case "26.TK-IN-INTERNET.DEDICADO-sin-link-SCO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente FIBER REF.: " + referencia + ", indica con el enlace. Monitoreo preventivo:\n\n";
        output += "TB: SCO sin enlace. Se agregan los datos del alta del servicio (delfos) y se le informa al cliente, del tratamiento del caso.\n";
        output += "IP WAN: " + ip_wan + " | IP SCO: " + ip_sco + " | port SCO: " + port_sco + " | MAC equipo:\n";
        output += "************************************";
        break;
    case "27.TK-IN-INTERNET.DEDICADO-con link SCO":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente FIBER REF.: " + referencia + ", indica con el enlace. Monitoreo preventivo:\n\n";
        output += "TB: SCO con enlace. Se le solicita al cliente reinicio de equipos. De persistir fallo, pruebas PING/TRACERT de manera directa, para corroborar la falta del servicio. Se indica de remitir por casilla soporte, dichas pruebas.\n";
        output += "IP WAN: " + ip_wan + " | IP SCO: " + ip_sco + " | port SCO: " + port_sco + " | MAC equipo:\n";
        output += "************************************";
        break;
    case "28.TK-IN-CLOUD.OFFICE-registrado":
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
    case "29.TK-IN-CLOUD.OFFICE-no registrado":
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
    case "30.TK-IN-CLOUD.OFFICE-masivo":
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
    case "31.TK-IN-OT-incumplida":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente indica OT incumplida | viene del Ticket: " + ticket_cliente + " | OT: " + ot_cliente + " | CM Tecnicos: " + resumen + "\n";
        output += "NXT: CM caido/operativo con uptime: " + uptime + " | Reinicio CM: SI\n\n";
        output += "TB. Se procede a consultar y validar en open, nueva agenda OT para el cliente.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT (nueva): " + ot + "\n"; 
        output += "************************************";
        break;
    case "32.TK-IN-OT.Adelanto.Agenda-sin-escalar":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente solicita adelanto de OT | viene del Ticket: " + tk_cliente + " | OT: " + ot_cliente + "\n\n";
        output += "TB: Se procede a consultar y validar en open, nueva agenda OT para el cliente.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT (nueva): " + ot + "\n"; 
        output += "************************************";
        break;
    case "33.TK-IN-OT.Adelanto.Agenda-escalado":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente solicita adelanto de OT | viene del Ticket: " + ticket + " | OT: " + ot + "\n\n";
        output += "TB: la agenda solicitada no se encuentra disponible en OPEN. Se indica al cliente, que se va escalar el caso y quedara pendiente a confirmar por la BASE correspondiente.\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | OT: " + ot + "\n"; 
        output += "************************************";
        break;
    case "01.TK-SS-Config.WIFI":
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
    case "02.TK-SS-Config.NAT":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente se comunica para cambiar config. de modo BRIDGE a NAT. Se toman datos y se procede:\n\n";
        output += "CM MAC: " + cm + " | IDProducto: " + referencia + "\n"; 
        output += "************************************";
        break;
    case "03.TK-SS-Config.BRIDGE":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente se comunica para cambiar config. de modo NAT a BRIDGE. Se toman datos y se procede:\n\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe + " | CPE IP: " + ip + " | CPE (model): " + model + "\n"; 
        output += "************************************";
        break;
    case "04.TK-SS-Config.IP-FIJA":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + " | Mail: " + mail + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "Cliente se comunica para fijar IP. Se toman datos del cpe y se procede:\n\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + " | CPE MAC: " + cpe + " | CPE IP: " + ip + " | CPE (model): " + model + "\n"; 
        output += "************************************";
        break;
    case "05.TK-SS-Adelanto.Agenda-OT-escalado":
        output += "************************************\n";
        output += "Nombre en SITE: " + nombre + " | Tel. Ct.: " + tel + "| Mail: " + mail + " | H-D: " + disponibilidad + " | Doc. Acc.: " + docAcceso + " | ToT: " + tot + " | Covid: " + covid + " | Domicilio: " + domicilio + "\n";
        output += "************************************\n";
        output += "MAD: Estimados, favor de adelantar y asegurar OT: " + ot + ". La misma se encuentra fuera del SLA establecido (48hs habiles). En OPEN no contamos con agenda previa a la asignada.\n\n";
        output += "Aguardamos respuesta, ya que el cliente se encuentra sin servicio.\n\n";
        output += "CM MAC: " + cm + " | NODO: " + nodo + "\n"; 
        output += "************************************";
        break;
    case "06.TK-SS-Adelanto.Agenda-OT-escalado":
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
        notepad3.value = output; 
    }); 
// ******* BOTON COPIAR NOTEPAD 2 ******* INICIO *******    
document.getElementById("botonCopiar").addEventListener("click", function() {  
    var notepad3 = document.getElementById("notepad3");
    notepad3.select();                                                  // Selecciona todo el texto en el notepad3
    document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
    window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
    
    // No se muestra ningún mensaje ni se cierra automáticamente después de copiar
    });
// ******* BOTON LIMPIAR NOTEPAD 3 ******* INICIO *******    
document.getElementById("botonLimpiar").addEventListener("click", function() {
    var notepad3 = document.getElementById("notepad3");
    notepad3.value = "";                                                // Borra el contenido del notepad2
    }); 
});     
// - ***************************** BLOC DE NOTAS - NOTEPAD 3 *********************** -