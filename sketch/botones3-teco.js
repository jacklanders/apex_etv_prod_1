// - *****************************  SECCION 3 - MAILS TECO  ************************ -
// -                                                                                 - 
// -                  Codigo js del boton TECP, de la extension: ETV_PROD            -  
// -                                                                                 -  
// -                                                                                 -  
// - *****************************  SECCION 3 - MAILS TECO  ************************ -




// - ********************************** INICIO   *********************************** -
document.addEventListener('DOMContentLoaded', function() {                                                    
    // Obtener referencias a los elementos del DOM
    var tabGestionTc = document.getElementById("tab_gestion_tc");
    var tabLibreriasTeco = document.getElementById("tab_librerias_teco");
    var btnGestionTc = document.getElementById("btngestion_tc_tab3");
    var btnLibreriasTeco = document.getElementById("btnlibrerias_teco_tab3");
    var btnReturn = document.getElementById("btnreturn_tab3");
  
    // Función para mostrar la pestaña de "Gestión Tc"
    function mostrarGestionTc() {
      tabGestionTc.style.display = "block";
      tabLibreriasTeco.style.display = "none";
    }
    // Función para mostrar la pestaña de "Librerías Mail"
    function mostrarLibreriasTeco() {
      tabGestionTc.style.display = "none";
      tabLibreriasTeco.style.display = "block";
    }
    // Función para cerrar ambas pestañas
    function cerrarPestañas() {
      tabGestionTc.style.display = "none";
      tabLibreriasTeco.style.display = "none";
    }
    // Agregar oyentes de clic a los botones
    btnGestionTc.addEventListener("click", mostrarGestionTc);
    btnLibreriasTeco.addEventListener("click", mostrarLibreriasTeco);
    btnReturn.addEventListener("click", cerrarPestañas);
  
  
    // Mostrar "Gestión Fb" por defecto al cargar la página
    mostrarGestionTc();
  });  
  // - ********************************** INICIO   *********************************** -
  
  