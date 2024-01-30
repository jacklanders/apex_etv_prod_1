// - *****************************  SECCION 6 - OTS **************************** -
// -                                                                             - 
// -                                                                             -
// -                                Codigo js principal                          -  
// -                                                                             -  
// -                                                                             -
// - *****************************  SECCION 6 - OTS **************************** -


// - ***************************** SELECTOR LIBRERIAS *********************** - 
document.addEventListener('DOMContentLoaded', function() {
    const libreriasButton = document.getElementById('btnlibrerias_ots_tab6');
    const selector = document.getElementById('librerias_mails_ot');

    libreriasButton.addEventListener('click', function() {
        // Obtén el valor del tipo de librería seleccionado
        const tipoLibreria = selector.value;

        // Muestra u oculta las opciones según el tipo de librería
        mostrarOpciones(selector, tipoLibreria);
    });

    function mostrarOpciones(selector, tipo) {
        const opciones = selector.querySelectorAll('option');

        opciones.forEach(opcion => {
            if (opcion.value === 'nulo') {
                opcion.style.display = 'block'; // Mostrar la opción por defecto
            } else {
                // Mostrar u ocultar según el tipo de librería
                opcion.style.display = (opcion.dataset.type === tipo || opcion.value === 'nulo') ? 'block' : 'none';
            }
        });
    }
});
// - ***************************** SELECTOR LIBRERIAS *********************** - 

// ***************************** BLOC DE NOTAS - NOTEPAD 21 *************************  -
document.addEventListener('DOMContentLoaded', function() {
    const notepad3 = document.getElementById("notepad3");
    const selectElement = document.getElementById("librerias_incidentes");

    function cargarLibreriaSeleccionada() {
        var selectedValue = selectElement.value;
        selectedValue = decodeURIComponent(selectedValue);

        // Construir la URL según la selección del usuario
        var url;
        switch(selectedValue) {
            case '01.CM.HFC.operativo':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/01.TK-IN-NO.NAVEGA.HFC.CCTV.(GC).sublime-snippet";
                break;
            case '02.CM.HFC.masivo':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/02.TK-IN-NO.NAVEGA.HFC-sin-OT.sublime-snippet";
                break;
            case '03.ONT.FTTH.operativo':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/03.TK-IN-NO.NAVEGA.HFC-con-OT.sublime-snippet";
                break;
            case '04.ONT.FTTH.masivo':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/04.TK-IN-NO.NAVEGA.HFC-sin-CORTES.sublime-snippet";
                break;
            case '05.DECO.operativo':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/05.TK-IN-NO.NAVEGA.HFC-con-CORTES.sublime-snippet";
                break;
            case '06.OT.sin.datos':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/06.TK-IN-NO.NAVEGA.HFC-reset-CM.sublime-snippet";
                break;
            case '07.OT.nuevo.tb':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/07.TK-IN-NO.NAVEGA.HFC-ToIP.sublime-snippet";
                break;
            case '08.OT.reagenda':
                url = "../librerias/03.TICKETS.IN/01.tickets.incidentes/08.TK-IN-NO.NAVEGA.HFC-sin-alertar-MASIVO.sublime-snippet";
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
document.getElementById("botonExportar_tab6").addEventListener("click", function() {
    cargarLibreriaSeleccionada();
    });            
// ******* BOTON CARGAR LIBRERIAS ******* INICIO *******    
document.getElementById("botonCargar_tab6").addEventListener("click", function() { 
    var selectedValue = document.getElementById("librerias_ots").value;  
    var cliente = document.getElementById("cliente_tab6").value;                                        
    var cuit = document.getElementById("cuit_tab6").value;                                         
    var producto = document.getElementById("producto_tab6").value;                           
    var cm = document.getElementById("cm_tab6").value;                                      

    var para = document.getElementById("para_tab6").value;                                                                  
    var cc = document.getElementById("cc_tab6").value;                                                                 
    var fecha = document.getElementById("fecha_tab6").value;                               
    var reagenda = document.getElementById("reagenda_tab6").value;                                

      
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
    default:
            output = "Librería no encontrada.";
        }     
        notepad22.value = output; 
    });     






// - ***************************** BLOC DE NOTAS - NOTEPAD 21-22 *********************** - 
document.addEventListener('DOMContentLoaded', function() {                                                    
    const notepad1 = document.getElementById("notepad21");
    const notepad2 = document.getElementById("notepad22");

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
// ******* BOTON COPIAR DATA ******* INICIO *******    
document.getElementById("botonCopiarDatos_tab6").addEventListener("click", function() {  
    var notepad1 = document.getElementById("notepad1");
    notepad1.select();                                                  // Selecciona todo el texto en el notepad2
    document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
    window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
});
// ******* BOTON LIMPIAR NOTEPAD 21 y NOTEPAD 22 ******* INICIO *******    
document.getElementById("botonBorrarDatos_tab6").addEventListener("click", function() { 
    var notepad21 = document.getElementById("notepad21");
    var notepad22 = document.getElementById("notepad22");

    notepad21.value = "";            // Borra el contenido de notepad21
    notepad22.value = "";            // Borra el contenido de notepad22

    notepad21.style.height = 'auto'; // Restablece la altura de notepad21
    notepad22.style.height = 'auto'; // Restablece la altura de notepad22
});
// ******* BOTON GUARDAR DATA ******* INICIO *******    

});   
// - ***************************** BLOC DE NOTAS - NOTEPAD 1-2 *********************** - 


