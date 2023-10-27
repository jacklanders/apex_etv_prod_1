//   ***************************** CODGIGO JAVASCRIPT*****************************
//
//
//
//
//
window.addEventListener("DOMContentLoaded", Mostrar);
  // Cargar función "Mostrar" cuando el contenido del documento esté listo
  // El evento "DOMContentLoaded" se dispara cuando el HTML del documento se ha cargado y parseado,
  // lo que significa que la página está lista para ser manipulada con JavaScript.

window.addEventListener("unload", alcerrar);
  // Escuchar el evento "beforeunload" para guardar los datos al cerrar la página
  // El evento "unload" se dispara justo antes de que la página se cierre. 

// ***************************** FUNCION PRINCIPAL *****************************
// Función mostrar(): Llama a varias funciones que se encargan de realizar tareas específicas, 
// como borrar clases, cargar pestañas, cargar datos en elementos de la página, 
// mostrar selecciones, ajustar la altura de un elemento y desactivar botones.
function Mostrar() {                      // CARGA LAS FUNCIONES DETALLADAS
 borradodeclasses();                      // carga la funcion borradodeclasses(); 
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
 bt_disabled()                            // carga la funcion bt_disabled()          
};  

// ***************************** SUBFUNCIONES PRINCIPALES *****************************
function borradodeclasses() {
  var botones = document.getElementsByClassName('class_opc');
  for (var i = 0; i < botones.length; i++) {
    botones[i].style.display = "none"; } 
  }; // carga la funcion borradodeclasses();  || Función para borrar los datos guardados en localStorage

function borrarmemoria() {
  localStorage.clear();
  location.reload(); 
};  // carga la funcion borrarmemoria()

function load_pestañas() {                                                            // Obtener datos guardados en el almacenamiento local. E responsable de cargar y gestionar las pestañas en una página web. 
  var array_saved = JSON.parse(localStorage.getItem("miArray"));                      // Esta línea obtiene un objeto de datos almacenados en el almacenamiento local del navegador. Los datos se almacenan con la clave "miArray" y se recuperan con localStorage.getItem.
  
  var tabcontent = document.getElementsByClassName("tab-content");                    // Esto obtiene una colección de elementos HTML con la clase "tab-content". Estos elementos generalmente representan el contenido de las pestañas.
  for (var i = 0; i < tabcontent.length; i++) {                                       // Este bucle recorre todos los elementos con la clase "tab-content" y establece su estilo de visualización en "none", lo que significa que inicialmente se ocultan todos los contenidos de las pestañas.
    tabcontent[i].style.display = "none"; } 
  
  var indicetab= array_saved.findIndex(function(objeto) {                             // Se utiliza findIndex para buscar un objeto en array_saved que tenga la propiedad "nombre" igual a "tabs". Esto se hace para determinar si ya se ha almacenado información sobre la pestaña seleccionada.
    return objeto.nombre === 'tabs'; });
  if (indicetab !== -1) {                                                             // Si se encuentra información sobre la pestaña en array_saved, se ejecuta este bloque de código.
    var tabObj = array_saved[0];                                                      // Obtener información de la pestaña guardada || Se obtiene el primer objeto de array_saved, que debería contener información sobre la pestaña seleccionada.
    var indicetabs = tabObj.indicetab - 1;                                            // Se obtiene el índice de la pestaña seleccionada restando 1 al valor de indicetab. Esto se hace porque los índices de los elementos en JavaScript generalmente comienzan en 0.
    var idcontentsss = tabObj.idcontent;                                              // Se obtiene el índice de la pestaña seleccionada restando 1 al valor de indicetab. Esto se hace porque los índices de los elementos en JavaScript generalmente comienzan en 0.
    document.getElementById(idcontentsss).style.display = "block";                    // Mostrar pestaña y agregar clase "active" || Se muestra el contenido de la pestaña seleccionada estableciendo su estilo de visualización en "block".
    document.getElementsByClassName("tab-btn")[indicetabs].classList.add("active");   // Se muestra el contenido de la pestaña seleccionada estableciendo su estilo de visualización en "block".

    var indice = array_saved.findIndex(function(objeto) {                             // Establecer la selección como activa al abrir || Se busca información de la selección en el almacenamiento local basada en el identificador de contenido de la pestaña.
      return objeto.nombre === 'selec_de_' + idcontentsss; });                        // Si se encuentra información sobre la selección y es una cadena que no es "nulo", se realiza alguna acción adicional. Sin embargo, la acción específica no está presente en el fragmento de código que proporcionaste.  
    if (indice >= 0 && typeof array_saved[indice].sel === "string" && array_saved[indice].sel !== 'nulo') {}
  } else {                                                                            // Mostrar la pestaña predeterminada y agregar clase "active"   
    document.getElementById('tab1').style.display = "block";
    document.getElementsByClassName("tab-btn")[0].classList.add("active");

    var info_de_pestaña = { nombre: "tabs", idcontent: 'tab1', indicetab: 1 };        // Guardar información de la pestaña predeterminada en el almacenamiento local
    variable_array[0] = info_de_pestaña;
    var jsonString = JSON.stringify(variable_array);
    localStorage.setItem('miArray', jsonString);
  }
  console.log(array_saved);                                                           // Mostrar información en la consola
  console.log(JSON.parse(localStorage.getItem("miArray_ysocial")));
}   // carga la funcion load_pestañas();      

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
}   // carga la funcion openTab()
    // - La función openTab es la que se llama cuando haces clic en uno de los botones de pestañas 
    // - (como se describe en el código anterior). Su objetivo principal es cambiar entre las pestañas
    // - y realizar un seguimiento de cuál pestaña está activa. Aquí está el código con explicaciones:
    // 1-Oculta todos los contenidos de pestañas al establecer el estilo display en "none" para cada elemento con la clase "tab-content". Esto asegura que solo se muestre el contenido de la pestaña seleccionada.
    // 2-Remueve la clase "active" de todos los botones de pestañas (elementos con la clase "tab-btn"). Esto asegura que ningún botón esté marcado como activo.
    // 3-Muestra el contenido de la pestaña seleccionada al establecer el estilo display en "block" para el elemento con el ID correspondiente a tabName. Esto resalta el contenido de la pestaña activa.
    // 4-Agrega la clase "active" al botón de pestaña seleccionado (evt.currentTarget). Esto marca visualmente qué pestaña está activa.
    // 5-Guarda información sobre la pestaña activa en el almacenamiento local para que la selección persista incluso si se actualiza la página. La información incluye el nombre de la pestaña (nombre), el ID del contenido de la pestaña (idcontent), y el índice de la pestaña (indicetab).

    function mostrar_select_de_pestañas() {                                        // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {                                  // Obtener el objeto de localStorage
    const miArray = JSON.parse(localStorage.getItem('miArray'));
    var de_tab1 = miArray.findIndex(function(objeto) {                             // Verificar cada propiedad del objeto
      return objeto.nombre === 'selec_de_tab1';
    });
     if (de_tab1 !== -1) {                                                         // Asignar los valores a los campos de entrada correspondientes
      document.getElementById('btdano').value = miArray[de_tab1].sel;
      document.getElementById(miArray[de_tab1].sel).style.display = "block"; } 
    var de_tab2 = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'selec_de_tab2';
    });
      if (de_tab2 !== -1) {                                                        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('opciones').value = miArray[de_tab2].sel;
        document.getElementById(miArray[de_tab2].sel).style.display = "block"; } 
    var de_tab3 = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'selec_de_tab3';
    });
      if (de_tab3 !== -1) {                                                        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('opciones_tab3').value = miArray[de_tab3].sel;
        document.getElementById(miArray[de_tab3].sel).style.display = "block"; }
  }   
}   // carga la funcion mostrar_select_de_pestañas();   
    // Si encuentra una propiedad con el nombre "selec_de_tabX" (donde X es 1, 2 o 3), significa que se guardó una selección específica para esa pestaña. En este caso, la función asigna el valor de esa selección a elementos HTML específicos y muestra el contenido asociado a esa selección. Por ejemplo:
    // Si existe "selec_de_tab1", el valor de esa selección se asigna al campo de entrada con ID "btdano", y se muestra el contenido asociado.
    // Si existe "selec_de_tab2", el valor de esa selección se asigna al campo de entrada con ID "opciones", y se muestra el contenido asociado.
    // Si existe "selec_de_tab3", el valor de esa selección se asigna al campo de entrada con ID "opciones_tab3", y se muestra el contenido asociado.
    // En resumen, esta función se utiliza para restaurar las selecciones previas realizadas en cada pestaña y mostrar el contenido relacionado con esas selecciones cuando se recarga la página o se vuelve a abrirla.


// ***************************** BOTONES DE LA EXTENSION*****************************
// - Botones superiores de la extension:
//   Botones - este código escucha el evento "click" en cada uno de los botones con los 
//   ID "btnIncidentes", "btnSolicitudes", "btnTECO" y "btnTOOLS". Cuando se hace clic en uno de
//   estos botones, se llama a la función openTab y se pasa el evento (event) y el ID de la pestaña
//   ('tab1', 'tab2', 'tab3', o 'tab4') como argumentos. Esto permite cambiar entre las pestañas 
//   o secciones de la página cuando se hace clic en los botones correspondientes. 
//   La función openTab se encargaría de realizar esta acción
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btnIncidentes').addEventListener('click', function(event) {openTab(event, 'tab1');});
  document.getElementById('btnSolicitudes').addEventListener('click', function(event) {openTab(event, 'tab2');});
  document.getElementById('btnTECO').addEventListener('click', function(event) {openTab(event, 'tab3');});; 
  document.getElementById('btnTOOLS').addEventListener('click', function(event) {openTab(event, 'tab4');});;
}); 


// ***************************** FUNCIONES ADICIONALES *****************************
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

function seleccionarCheckbox(checkboxIndex, name) {
  var checkboxes = document.getElementsByName(name);
  checkboxes.forEach(function(checkbox, index) {
    checkbox.checked = (index + 1 === checkboxIndex); });
}   // Función para seleccionar un checkbox

function copiarContenido() {                                     
  var a = " || ";
  var input1 = document.getElementById("Referencia").value;
  var input2 = document.getElementById("Ticket").value;
  var input3 = document.getElementById("NumdeOT").value;
  var input4 = document.getElementById("Problema").value;
  var input5 = document.getElementById("Chequeos").value;
  var input6 = document.getElementById("Contacto").value;
  var input7 = document.getElementById("Tel").value;
  var input8 = document.getElementById("mail").value;
  var input9 = document.getElementById("Disponibilidad").value;
  var input10 = document.getElementById("Documentacion").value;
  var input11 = document.getElementById("btTerraza").value;
  var input12 = document.getElementById("btCOVID").value;

  var contenidoUnificado = 
    "Referencia: " + input1 + a +
    "Ticket: " + input2 + a +  
    "OT: " + input3 + a +
    "Problema: " + input4 + a +
    "Pruebas/Chequeos: " + input5 + a +
    "Cto. Sitio: " + input6 + a +
    "Tel.: " + input7 + a +  
    "E-mail: " + input8 + a +
    "Disp.: " + input9 + a +
    "Documentación: " + input10 + a +
    "Acceso a Terraza: " + input11 + a +
    "Acceso COVID: " + input12;

  // Copiar el contenido al portapapeles
  navigator.clipboard.writeText(contenidoUnificado).then(function() {

  }, function() {

  });
};  // Función para copiar el contenido de la planilla de incidente         

function alcerrar() {  
  //saved_inputs_in();
  //save_inputs_pestaña2();
  //saved_inputs_tll();
  //save_panilla_sin_tono();
  //saved_inputs_toip();
  //saved_inputs_integra();
  //saved_migracion();
};  // Función alcerrar() - Llama a varias funciones que se encargan de guardar datos. 
    // Estas funciones se utilizan para almacenar información en el almacenamiento local del navegador, 
    // antes de que la página se cierre.
                 

