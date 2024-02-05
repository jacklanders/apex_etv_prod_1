// - *****************************  SECCION 6 - OTS **************************** -
// -                                                                             - 
// -                                                                             -
// -                                Codigo js principal                          -  
// -                                                                             -  
// -                                                                             -
// - *****************************  SECCION 6 - OTS **************************** -



// - ***************************** GUARDAR COOKIES *********************** - 
// Guardar datos de entrada y salida en cookies
function guardarDatosEnCookies() {
    const camposDeEntrada = [
        'cliente_tab6', 'cuit_tab6', 'btcc_tab6', 'producto_tab6', 'cm_tab6', 'uptime_tab6',
        'direccion_tab6', 'bthora_tab6', 'fecha_tab6', 'reagenda_tab6', 'para_tab6'
    ];

    const camposDeSalida = [
        'para2_tab6', 'cc2_tab6', 'asunto_tab6', 'caso_tab6', 'notepad21', 'output_librerias_ots',
        'output_para_tab6', 'output_cc_tab6', 'output_asunto_tab6', 'output_caso_tab6'
    ];

    // Guardar campos de entrada en cookies
    camposDeEntrada.forEach(campo => {
        const valor = document.getElementById(campo).value;
        document.cookie = `${campo}=${encodeURIComponent(valor)}; path=/`;
    });

    // Guardar campos de salida en cookies
    camposDeSalida.forEach(campo => {
        const valor = document.getElementById(campo).innerText;
        document.cookie = `${campo}=${encodeURIComponent(valor)}; path=/`;
    });
}

// Escuchar la descarga de la página para guardar datos en cookies
window.addEventListener('beforeunload', guardarDatosEnCookies);
// - ***************************** GUARDAR COOKIES *********************** - 

// - ***************************** CARGAR COOKIES *********************** - 
// Restaurar datos de entrada y salida desde cookies
function restaurarDatosDesdeCookies() {
    const camposDeEntrada = [
        'cliente_tab6', 'cuit_tab6', 'btcc_tab6', 'producto_tab6', 'cm_tab6', 'uptime_tab6',
        'direccion_tab6', 'bthora_tab6', 'fecha_tab6', 'reagenda_tab6', 'para_tab6'
    ];

    const camposDeSalida = [
        'para2_tab6', 'cc2_tab6', 'asunto_tab6', 'caso_tab6', 'notepad21', 'output_librerias_ots',
        'output_para_tab6', 'output_cc_tab6', 'output_asunto_tab6', 'output_caso_tab6'
    ];

    // Restaurar campos de entrada desde cookies
    camposDeEntrada.forEach(campo => {
        const valorCookie = obtenerValorCookie(campo);
        if (valorCookie !== null) {
            document.getElementById(campo).value = decodeURIComponent(valorCookie);
        }
    });

    // Restaurar campos de salida desde cookies
    camposDeSalida.forEach(campo => {
        const valorCookie = obtenerValorCookie(campo);
        if (valorCookie !== null) {
            document.getElementById(campo).innerText = decodeURIComponent(valorCookie);
        }
    });
}

// Función auxiliar para obtener el valor de la cookie por nombre
function obtenerValorCookie(nombreCookie) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [nombre, valor] = cookie.split('=');
        if (nombre === nombreCookie) {
            return valor;
        }
    }
    return null;
}

// Escuchar la carga de la página para restaurar datos desde cookies
window.addEventListener('load', restaurarDatosDesdeCookies);
// - ***************************** CARGAR COOKIES *********************** - 




// - ***************************** SELECTOR LIBRERIAS *********************** - 
document.addEventListener('DOMContentLoaded', function() {
    const libreriasButton = document.getElementById('btnlibrerias_ots_tab6');
    const selector = document.getElementById('librerias_mails_ot');
    const notepad21 = document.getElementById("notepad21");

    libreriasButton.addEventListener('click', function() {
        const tipoLibreria = selector.value;
        mostrarOpciones(selector, tipoLibreria);
    });

    function mostrarOpciones(selector, tipo) {
        const opciones = selector.querySelectorAll('option');

        opciones.forEach(opcion => {
            if (opcion.value === 'nulo') {
                opcion.style.display = 'block';
            } else {
                opcion.style.display = (opcion.dataset.type === tipo || opcion.value === 'nulo') ? 'block' : 'none';
            }
        });
    }



// ***************************** BLOC DE NOTAS - NOTEPAD 21 *************************  -
    aplicarAjustes(notepad21);

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

// ******* BOTON CARGAR LIBRERIAS******* INICIO *******    
    document.getElementById("botonCargarLibreria_tab6").addEventListener("click", function() {
        cargarLibreriaSeleccionada();
    });

    function cargarLibreriaSeleccionada() {
        var selectedValue = selector.value;
        selectedValue = decodeURIComponent(selectedValue);

        var url;

        switch(selectedValue) {
            // Agrega casos para otras opciones según sea necesario
            case '01.CM.HFC.operativo':
                url = "../librerias/09.MAILS.OT/01.CM.HFC.operativo";
                break;
            case '02.CM.HFC.masivo':
                url = "../librerias/09.MAILS.OT/02.CM.HFC.masivo";
                break;
            case '03.ONT.FTTH.operativo':
                url = "../librerias/09.MAILS.OT/03.ONT.FTTH.operativo";
                break;
            case '04.ONT.FTTH.masivo':
                url = "../librerias/09.MAILS.OT/04.ONT.FTTH.masivo";
                break;
            case '05.DECO.operativo':
                url = "../librerias/09.MAILS.OT/05.DECO.operativo";
                break;
            case '06.OT.sin.datos':
                url = "../librerias/09.MAILS.OT/06.OT.sin.datos";
                break;
            case '07.OT.nuevo.tb':
                url = "../librerias/09.MAILS.OT/07.OT.nuevo.tb";
                break;
            case '08.OT.reagenda.ot':
                url = "../librerias/09.MAILS.OT/08.OT.reagenda.ot";
                break;
            case '09.OT.reagenda.bt':
                url = "../librerias/09.MAILS.OT/09.OT.reagenda.bt";
                break;
            default:
                console.error("Opción no válida seleccionada");
                return;
        }
        fetch(url)
            .then(response => response.text())
            .then(data => {
                notepad21.value = data;
                autoAjustar(notepad21);
            })
            .catch(error => {
                console.error("Error al cargar la librería:", error);
            });
    }
// ******* BOTON COPIAR DATOS ******* INICIO *******    
    document.getElementById("botonCopiarDatos_tab6").addEventListener("click", function() {  
        notepad21.select();                                                 // Selecciona todo el texto en el notepad21
        document.execCommand("copy");                                       // Copia el texto seleccionado al portapapeles
        window.getSelection().removeAllRanges();                            // Deselecciona el texto para que no quede resaltado
        // No se muestra ningún mensaje ni se cierra automáticamente después de copiar
    });
// ******* BOTON MACROS DATOS ******* INICIO *******    
document.getElementById("botonCargarDatos_tab6").addEventListener("click", function() { 
    var selectedValue = document.getElementById("librerias_mails_ot").value;                       
    var cliente = document.getElementById("cliente_tab6").value; 
    var cuit = document.getElementById("cuit_tab6").value;                                           
    var producto = document.getElementById("producto_tab6").value;                              
    var cmmac = document.getElementById("cm_tab6").value;             
    var uptime = document.getElementById("uptime_tab6").value;                                                                     
    var direccion = document.getElementById("direccion_tab6").value;                                    
    
    var para = document.getElementById("para_tab6").value;  
    var cc = document.getElementById("btcc_tab6").value;                      
    var asunto = document.getElementById("asunto_tab6").value;                      
    var fecha = document.getElementById("fecha_tab6").value;                               
    var reagenda = document.getElementById("reagenda_tab6").value;                                       
    var hora = document.getElementById("bthora_tab6").value;                
    
    var output_para2_tab6 = "";
    var output_cc2_tab6 = "";
    var output_asunto_tab6 = "";
    var output_caso_tab6
    var output_librerias_ots = "";
      
    if (selectedValue === "nulo") {
        document.getElementById("notepad21").value = "Selecciona una librería primero.";
        return;
    }
    switch (selectedValue) {                                                                          
    case "01.CM.HFC.operativo":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Nos encontramos realizando el seguimiento sobre el servicio de internet. ¿Cómo perciben el mismo actualmente? Ya que, desde nuestros monitoreos, verificamos que el enlace bajo cm mac " + cmmac + ", se encuentra operativo y con uptime de " + uptime + ".\n\n";
        output_librerias_ots += "En base a lo informado, la orden técnica reservada para el día " + fecha + ", se encuentra de momento, anulada. Estaremos atentos y al aguardo de sus comentarios.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
    case "02.CM.HFC.masivo":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Respecto el avance del caso, les informamos que el servicio bajo producto " + producto + ", se encuentra actualmente afectado por un inconveniente de tipo general sobre nuestra red de HFC. Nuestros referentes técnicos ya se encuentran trabajando en sitio.\n\n";
        output_librerias_ots += "En base a lo informado, la orden técnica reservada para el día " + fecha + ", se encuentra de momento, anulada. Estaremos atentos y al aguardo de sus comentarios.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
    case "03.ONT.FTTH.operativo":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Nos encontramos realizando el seguimiento sobre el servicio de internet. ¿Cómo perciben el mismo actualmente? Ya que, desde nuestros monitoreos, verificamos que el enlace bajo ont mac " + cmmac + ", se encuentra operativo y con uptime de " + uptime + ".\n\n";
        output_librerias_ots += "En base a lo informado, la orden técnica reservada para el día " + fecha + ", se encuentra de momento, anulada. Estaremos atentos y al aguardo de sus comentarios.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
    case "04.ONT.FTTH.masivo":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Respecto el avance del caso, les informamos que el servicio bajo producto " + producto + ", se encuentra actualmente afectado por un inconveniente de tipo general sobre nuestra red de Fibra Optica. Nuestros referentes técnicos ya se encuentran trabajando en sitio.\n\n";
        output_librerias_ots += "En base a lo informado, la orden técnica reservada para el día " + fecha + ", se encuentra de momento, anulada. Estaremos atentos y al aguardo de sus comentarios.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
    case "05.DECO.operativo":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Nos encontramos realizando el seguimiento sobre el servicio contratado. Queríamos validar con usted, ¿Cómo percibe el funcionamiento del decodificador " + cmmac + "? En caso de existir o persistir alguna falla, favor de remitirnos por este medio.\n\n";
        output_librerias_ots += "En base a lo informado, la orden técnica reservada para el día " + fecha + ", se encuentra de momento, anulada. Estaremos atentos y al aguardo de sus comentarios.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
    case "06.OT.sin.datos":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Nos encontramos realizando el seguimiento sobre el servicio de internet. Verificamos que el equipo " + cmmac + ", cuenta con problemas de conexión, pero no contamos con los datos correspondientes para la asignación de la orden al domicilio.\n\n";
        output_librerias_ots += "Nombre de persona en sitio:\n";
        output_librerias_ots += "Tel. Contacto:\n";
        output_librerias_ots += "Mail:\n";
        output_librerias_ots += "Horarios y Días:\n";
        output_librerias_ots += "¿Doc. Acceso?:\n";
        output_librerias_ots += "¿Acceso a techo o terraza?:\n";
        output_librerias_ots += "¿Algún afectado reciente por Covid-19?:\n\n";
        output_librerias_ots += "Favor de completar la siguiente grilla, a fin de asignar nuevamente un service de reparación. En base a lo informado, la orden técnica reservada para el día " + fecha + ", se encuentra de momento, anulada. Estaremos atentos y al aguardo de sus comentarios.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
    case "07.OT.nuevo.tb":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Nos encontramos realizando el seguimiento sobre el servicio bajo producto " + producto + ". Verificamos una orden asignada, pero no contamos ni con el diagnóstico de la falla, ni con los datos correspondientes para la asignación de dicha orden.\n\n";
        output_librerias_ots += "Favor de indicarnos primeramente, cuales son los errores suscitados. Adicionalmente, favor de completar la siguiente grilla, con los datos pertinentes de la persona que se encuentre en el domicilio.\n\n";
        output_librerias_ots += "Nombre de persona en sitio:\n";
        output_librerias_ots += "Tel. Contacto:\n";
        output_librerias_ots += "Mail:\n";
        output_librerias_ots += "Horarios y Días:\n";
        output_librerias_ots += "¿Doc. Acceso?:\n";
        output_librerias_ots += "¿Acceso a techo o terraza?:\n";
        output_librerias_ots += "¿Algún afectado reciente por Covid-19?:\n\n";
        output_librerias_ots += "Nos estaremos contactando a la brevedad y avanzaremos con los chequeos correspondientes. En base a lo informado, la orden técnica reservada para el día " + fecha + ", se encuentra de momento, anulada. Estaremos atentos y al aguardo de sus comentarios.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
    case "08.OT.reagenda.ot":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Les informamos que cuenta con una nueva visita técnica en curso. La misma se encuentra reservada para el día " + reagenda + " y en la franja de 08 a 15 horas.\n\n";
        output_librerias_ots += "Favor de confirmarnos si podrá aguardar a nuestros referentes técnicos en el domicilio de " + direccion + ". En caso contrario, favor de indicarnos en que día y horarios podemos brindarle una nueva reagenda.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
    case "09.OT.reagenda.bt":
        document.getElementById("para2_tab6").value = para;
        output_para2_tab6  += para;
        document.getElementById("cc2_tab6").value = cc;
        output_cc2_tab6 += cc;
        document.getElementById("asunto_tab6").value = asunto;
        output_asunto_tab6 += "Seguimiento TELECOM | CLIENTE: " + cliente + "| CUIT: " + cuit;
        output_librerias_ots += hora + "\n\n";
        output_librerias_ots += "Les informamos que cuenta con una nueva visita técnica en curso. La misma se encuentra reservada para el día " + reagenda + " y con prioridad en la agenda de nuestros referentes. El motivo de este cambio, debido a que por cuestiones de tiempo, no hemos podido concretar la agenda previamente reservada en el día de hoy.\n\n";
        output_librerias_ots += "Favor de confirmarnos si podrá aguardar a nuestros referentes técnicos en el domicilio de " + direccion + ". En caso contrario, favor de indicarnos en que día y horarios podemos brindarle una nueva reagenda.\n\n";
        output_librerias_ots += "Quedamos a disposición.\n";
        output_librerias_ots += "Saludos cordiales.-";
        break; 
        default:
            output_librerias_ots = "Librería no encontrada.";
        }     
    // Lógica común para todos los casos
    document.getElementById("output_para_tab6").value = output_para2_tab6;
    document.getElementById("output_cc_tab6").value = output_cc_tab6;
    document.getElementById("asunto_tab6").value = output_asunto_tab6;
    document.getElementById("output_caso_tab6").value = output_caso_tab6;
    // Actualizar el contenido de notepad21
    document.getElementById("notepad21").value = output_librerias_ots;
    }); 
// ******* BOTON BORRAR DATOS ******* INICIO *******    
document.getElementById("botonBorrarDatos_tab6").addEventListener("click", function() {  
    // Eliminar cookies
    const camposDeEntrada = [
        'cliente_tab6', 'cuit_tab6', 'btcc_tab6', 'producto_tab6', 'cm_tab6', 'uptime_tab6',
        'direccion_tab6', 'bthora_tab6', 'fecha_tab6', 'reagenda_tab6', 'para_tab6'
    ];

    const camposDeSalida = [
        'para2_tab6', 'cc2_tab6', 'asunto_tab6', 'caso_tab6', 'notepad21', 'output_librerias_ots',
        'output_para_tab6', 'output_cc_tab6', 'output_asunto_tab6', 'output_caso_tab6'
    ];

    camposDeEntrada.forEach(campo => {
        document.cookie = `${campo}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.getElementById(campo).value = ''; // Limpiar el valor visualmente
    });

    camposDeSalida.forEach(campo => {
        document.cookie = `${campo}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.getElementById(campo).innerText = ''; // Limpiar el valor visualmente
    });
    }); 
});
// ***************************** BLOC DE NOTAS - NOTEPAD 21 *************************  -