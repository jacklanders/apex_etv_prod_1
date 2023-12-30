// - *****************************  SECCION 2 - MAILS FIBERS ************************* -
// -                                                                                   - 
// -                                                                                 - 
// -                                  Codigo js principal                              -  
// -                                                                                   -  
// -                                                                                   -
// - *****************************  SECCION 2 - MAILS FIBERS ************************* -


// - ********************************** INICIO   *********************************** -
document.addEventListener('DOMContentLoaded', function() {
  var tabGestionIn = document.getElementById("tab_gestion_in");
  var tabNotas = document.getElementById("tab_notas");
  var tabRegistros = document.getElementById("tab_librerias_fiber");
  var btnReturn = document.getElementById("btnreturn_tab2");

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

  var btnLeftArrow = document.getElementById("btnleftarrow_tab2");
  var btnRightArrow = document.getElementById("btnrightarrow_tab2");

  btnLeftArrow.addEventListener("click", retrocederPestana);
  btnRightArrow.addEventListener("click", avanzarPestana);
  btnReturn.addEventListener("click", cerrarPestañas);

  // Mostrar la primera pestaña al cargar la página
  mostrarPestana(currentTab);
});
// - ********************************** INICIO   *********************************** -
