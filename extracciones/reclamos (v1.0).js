// Cargar función "Mostrar" cuando el contenido del documento esté listo
// El evento "DOMContentLoaded" se dispara cuando el HTML del documento se ha cargado y parseado,
// lo que significa que la página está lista para ser manipulada con JavaScript.
window.addEventListener("DOMContentLoaded", Mostrar);

// Escuchar el evento "beforeunload" para guardar los datos al cerrar la página
// El evento "unload" se dispara justo antes de que la página se cierre. 
window.addEventListener("unload", alcerrar);

// Función mostrar() - Llama a varias funciones que se encargan de realizar tareas específicas, 
// como borrar clases, cargar pestañas, cargar datos en elementos de la página, 
// mostrar selecciones, ajustar la altura de un elemento y desactivar botones.
function Mostrar() { 
 borradodeclasses(); // Borrado de clases
 load_pestañas();
 load_input_tab1();
 load_input_tab2();
 load_input_tab3_sin_tono();
 load_input_tab3_tll();
 mostrar_select_de_pestañas();
 load_inputs_toip();
 load_input_tab3_integra();
 load_tab3_migraciones();
 autoAjustar(document.getElementById("mail_a_extraer-extencion"))
 bt_disabled()
};

// Función alcerrar() - Llama a varias funciones que se encargan de guardar datos. 
// Estas funciones se utilizan para almacenar información en el almacenamiento local del navegador, 
// antes de que la página se cierre.
function alcerrar() {  
  saved_inputs_in();
  save_inputs_pestaña2();
  saved_inputs_tll();
  save_panilla_sin_tono();
  saved_inputs_toip();
  saved_inputs_integra();
  saved_migracion();
};

function load_pestañas() {                                 // Obtener datos guardados en el almacenamiento local. E responsable de cargar y gestionar las pestañas en una página web. 
  var array_saved = JSON.parse(localStorage.getItem("miArray"));    //Esta línea obtiene un objeto de datos almacenados en el almacenamiento local del navegador. Los datos se almacenan con la clave "miArray" y se recuperan con localStorage.getItem.
  
  var tabcontent = document.getElementsByClassName("tab-content");  // Esto obtiene una colección de elementos HTML con la clase "tab-content". Estos elementos generalmente representan el contenido de las pestañas.
  for (var i = 0; i < tabcontent.length; i++) {           //Este bucle recorre todos los elementos con la clase "tab-content" y establece su estilo de visualización en "none", lo que significa que inicialmente se ocultan todos los contenidos de las pestañas.
    tabcontent[i].style.display = "none"; } 
  
  var indicetab= array_saved.findIndex(function(objeto) { // Se utiliza findIndex para buscar un objeto en array_saved que tenga la propiedad "nombre" igual a "tabs". Esto se hace para determinar si ya se ha almacenado información sobre la pestaña seleccionada.
    return objeto.nombre === 'tabs'; });
  if (indicetab !== -1) {                                 // Si se encuentra información sobre la pestaña en array_saved, se ejecuta este bloque de código.
    var tabObj = array_saved[0];                          // Obtener información de la pestaña guardada || Se obtiene el primer objeto de array_saved, que debería contener información sobre la pestaña seleccionada.
    var indicetabs = tabObj.indicetab - 1;                // Se obtiene el índice de la pestaña seleccionada restando 1 al valor de indicetab. Esto se hace porque los índices de los elementos en JavaScript generalmente comienzan en 0.
    var idcontentsss = tabObj.idcontent;                  // Se obtiene el índice de la pestaña seleccionada restando 1 al valor de indicetab. Esto se hace porque los índices de los elementos en JavaScript generalmente comienzan en 0.

    document.getElementById(idcontentsss).style.display = "block";  // Mostrar pestaña y agregar clase "active" || Se muestra el contenido de la pestaña seleccionada estableciendo su estilo de visualización en "block".
    document.getElementsByClassName("tab-btn")[indicetabs].classList.add("active"); // Se muestra el contenido de la pestaña seleccionada estableciendo su estilo de visualización en "block".

    var indice = array_saved.findIndex(function(objeto) { // Establecer la selección como activa al abrir || Se busca información de la selección en el almacenamiento local basada en el identificador de contenido de la pestaña.
      return objeto.nombre === 'selec_de_' + idcontentsss; });     // Si se encuentra información sobre la selección y es una cadena que no es "nulo", se realiza alguna acción adicional. Sin embargo, la acción específica no está presente en el fragmento de código que proporcionaste.  
    if (indice >= 0 && typeof array_saved[indice].sel === "string" && array_saved[indice].sel !== 'nulo') {}
  } else {                                                // Mostrar la pestaña predeterminada y agregar clase "active"   
    document.getElementById('tab1').style.display = "block";
    document.getElementsByClassName("tab-btn")[0].classList.add("active");

    var info_de_pestaña = { nombre: "tabs", idcontent: 'tab1', indicetab: 1 };   // Guardar información de la pestaña predeterminada en el almacenamiento local
    variable_array[0] = info_de_pestaña;
    var jsonString = JSON.stringify(variable_array);
    localStorage.setItem('miArray', jsonString);
  }

  console.log(array_saved);                                // Mostrar información en la consola
  console.log(JSON.parse(localStorage.getItem("miArray_ysocial")));
}

function load_input_tab4() {                                        // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {                   // Verifica si existe un objeto en el almacenamiento local del navegador con la clave "miArray". El almacenamiento local se utiliza para guardar datos en el navegador.
    const miArray = JSON.parse(localStorage.getItem('miArray'));    // Obtener el objeto de localStorage || Si se encuentra un objeto en el almacenamiento local con la clave "miArray", se recupera ese objeto y se convierte de JSON a un objeto JavaScript.
    var indice = miArray.findIndex(function(objeto) {               // Verificar cada propiedad del objeto || Se busca en el objeto miArray un elemento con la propiedad "nombre" igual a 'intputs_pestaña_1'. Esto se hace para verificar si se han almacenado datos específicos para la pestaña 1 en el objeto.
      return objeto.nombre === 'intputs_pestaña_1'; });             // Si se encuentra un objeto con la propiedad "nombre" igual a 'intputs_pestaña_1', se ejecuta este bloque de código.
    if (indice !== -1) {                                            // Asignar los valores a los campos de entrada correspondientes
    // asigna el valor de la propiedad "Referencia" del objeto a un campo de entrada con el id "Referencia".
    // Los campos de entrada obtienen sus valores del objeto, y si una propiedad no existe en el objeto, se asigna un valor predeterminado (como '-' o 'NO').
        document.getElementById('CUIT').value = miArray[indice].cuit;  || '-';  
        document.getElementById('IDPROD.').value = miArray[indice].idprod; || '-';  
        document.getElementById('REF.').value = miArray[indice].ref; || '-';  
        document.getElementById('LINEA').value = miArray[indice].linea; || '-';  

        document.getElementById('Ticket IN').value = miArray[indice].ticketin || '-';    
        document.getElementById('Ticket MS').value = miArray[indice].ticketm || '-';    

        document.getElementById('Nombre').value = miArray[indice].Name || '-';
        document.getElementById('Tel. Contacto:').value = miArray[indice].Tel_Contacto || '-';
        document.getElementById('Mail').value = miArray[indice].Mail || '-';
        document.getElementById('H-D').value = miArray[indice].HoraDias || '08-16HS';
        document.getElementById('Doc. Acceso').value = miArray[indice].DocAcceso || '-';
        document.getElementById('ToT').value = miArray[indice].ToT || '-';
        document.getElementById('Covid').value = miArray[indice].Covid || '-';
        
        document.getElementById('CM MAC').value = miArray[indice].mac || '-';
        document.getElementById('IP MAC').value = miArray[indice].ip ||  '-';
        document.getElementById('NODO').value = miArray[indice].ot ||  '-';
        document.getElementById('OT').value = miArray[indice].ot ||  '-';
      } } // Romper el bucle una vez que se encuentra el objeto
}
