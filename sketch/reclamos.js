// Cargar función "Mostrar" cuando el contenido del documento esté listo
window.addEventListener("DOMContentLoaded", Mostrar);

// Escuchar el evento "beforeunload" para guardar los datos al cerrar la página
window.addEventListener("unload", alcerrar);

// Función para mostrar las pestañas y selecciones guardadas
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


function alcerrar() {  
  saved_inputs_in();
  save_inputs_pestaña2();
  saved_inputs_tll();
  save_panilla_sin_tono();
  saved_inputs_toip();
  saved_inputs_integra();
  saved_migracion();
  


};



function load_pestañas() {
  // Obtener datos guardados en el almacenamiento local
  var array_saved = JSON.parse(localStorage.getItem("miArray"));

  // Establecer la pestaña como activa al abrir
  var tabcontent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  var indicetab= array_saved.findIndex(function(objeto) {
    return objeto.nombre === 'tabs';
  });
  if (indicetab !== -1) {
    // Obtener información de la pestaña guardada
    var tabObj = array_saved[0];
    var indicetabs = tabObj.indicetab - 1;
    var idcontentsss = tabObj.idcontent;

    // Mostrar pestaña y agregar clase "active"
    document.getElementById(idcontentsss).style.display = "block";
    document.getElementsByClassName("tab-btn")[indicetabs].classList.add("active");

    // Establecer la selección como activa al abrir
    var indice = array_saved.findIndex(function(objeto) {
      return objeto.nombre === 'selec_de_' + idcontentsss;
    });
 

    if (indice >= 0 && typeof array_saved[indice].sel === "string" && array_saved[indice].sel !== 'nulo') {
   
    }
  } else {
    // Mostrar la pestaña predeterminada y agregar clase "active"
    document.getElementById('tab1').style.display = "block";
    document.getElementsByClassName("tab-btn")[0].classList.add("active");

    // Guardar información de la pestaña predeterminada en el almacenamiento local
    var info_de_pestaña = { nombre: "tabs", idcontent: 'tab1', indicetab: 1 };
    variable_array[0] = info_de_pestaña;
    var jsonString = JSON.stringify(variable_array);
    localStorage.setItem('miArray', jsonString);
  }

  // Mostrar información en la consola

  console.log(array_saved);
  console.log(JSON.parse(localStorage.getItem("miArray_ysocial")));
  
}

function load_input_tab1() {

    // Verificar si el objeto está presente en el localStorage
    if (localStorage.getItem('miArray') !== null) {
      // Obtener el objeto de localStorage
      const miArray = JSON.parse(localStorage.getItem('miArray'));
    
      // Verificar cada propiedad del objeto
      var indice = miArray.findIndex(function(objeto) {
        return objeto.nombre === 'intputs_pestaña_1';
      });
      if (indice !== -1) {

          // Asignar los valores a los campos de entrada correspondientes
          document.getElementById('Referencia').value = miArray[indice].Referencia;
          document.getElementById('Ticket').value = miArray[indice].Ticket || '-';
          document.getElementById('Contacto').value = miArray[indice].Cto || '-';
          document.getElementById('Problema').value = miArray[indice].Problema || '-';
          document.getElementById('Disponibilidad').value = miArray[indice].Disp || '-';
          document.getElementById('btTerraza').value = miArray[indice].Terraza || 'NO';
          document.getElementById('mail').value = miArray[indice].E_mail || '-';
          document.getElementById('NumdeOT').value = miArray[indice].OT || '-';
          document.getElementById('Tel').value = miArray[indice].Tel || '-';
          document.getElementById('Chequeos').value = miArray[indice].Chequeos || '-';
          document.getElementById('Documentacion').value = miArray[indice].Documentación || 'Credencial';
          document.getElementById('btCOVID').value = miArray[indice].COVID || 'NO';
  
          // Romper el bucle una vez que se encuentra el objeto
          
        } }
}

function load_input_tab2() {

  // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {
    // Obtener el objeto de localStorage
    const miArray = JSON.parse(localStorage.getItem('miArray'));
  
    // Verificar cada propiedad del objeto
    var indice = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'lentitud+mails';
    });
    if (indice !== -1) {

        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('MACCM').value = miArray[indice].MACCM;
        document.getElementById('veltest').value = miArray[indice].veltest || '-';
        document.getElementById('mail_a_extraer-extencion').value = miArray[indice].txtmails || '-';

        
      } }
}

function load_inputs_toip() {

  // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {
    // Obtener el objeto de localStorage
    const miArray = JSON.parse(localStorage.getItem('miArray'));
  
    // Verificar cada propiedad del objeto
    var indice = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'inputs_toip';
    });
    if (indice !== -1) {

        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('mac_TOIP').value = miArray[indice].mac;
        document.getElementById('linea_TOIP').value = miArray[indice].linea;
        document.getElementById('IP_TOIP').value = miArray[indice].la_ip;
        document.getElementById('Contacto_TOIP').value = miArray[indice].Contacto_TOIP;
        document.getElementById('Dispo_TOIP').value = miArray[indice].Dispo_TOIP;
        
      } }
}

function load_input_tab3_sin_tono() {

  // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {
    // Obtener el objeto de localStorage
    const miArray = JSON.parse(localStorage.getItem('miArray'));
  
    // Verificar cada propiedad del objeto
    var indice = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'sin_tono';
    });
    if (indice !== -1) {

        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('problxicd').value = miArray[indice].Problema || '-';
        document.getElementById('pruebaxicd').value = miArray[indice].Prueba1 || '-';
        document.getElementById('POA-DA').value = miArray[indice].POA_DA || 'POA';
        document.getElementById('btcentralxsur').value = miArray[indice].Central || 'NO';
        document.getElementById('prue2xicd').value = miArray[indice].Prueba2 || '-';
        document.getElementById('nomrexicd').value = miArray[indice].NombreContacto || '-';
        document.getElementById('telxicd').value = miArray[indice].TelContacto || '-'; 
        document.getElementById('Dispoxicd').value = miArray[indice].Dispo || '-';
        document.getElementById('docxicd').value = miArray[indice].Documentacion || 'Credencial';

        
      } }
}

function load_input_tab3_integra() {

  // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {
    // Obtener el objeto de localStorage
    const miArray = JSON.parse(localStorage.getItem('miArray'));
  
    // Verificar cada propiedad del objeto
    var indice = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'inputs_integra';
    });
    if (indice !== -1) {

        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('integra_CUIT').value = miArray[indice].CUIT || '-';
        document.getElementById('integra_ref').value = miArray[indice].referencia || '-';
        document.getElementById('integra_Delta').value = miArray[indice].delta || '-';
        document.getElementById('integra_Problema').value = miArray[indice].problema || '-';
        document.getElementById('integra_Ciudad').value = miArray[indice].ciudad || '-';
        document.getElementById('integra_Contacto').value = miArray[indice].contacto || '-';
        document.getElementById('integra_dispo').value = miArray[indice].dispo || '-'; 
        document.getElementById('integra_rs').value = miArray[indice].razonSocial || '-';
        document.getElementById('integra_Servicio').value = miArray[indice].servicio || '-';
        document.getElementById('integra_Vantive').value = miArray[indice].vantive || '-';
        document.getElementById('integra_Calle').value = miArray[indice].calle || '-';
        document.getElementById('integra_Provincia').value = miArray[indice].provincia || '-';
        document.getElementById('integra_tel').value = miArray[indice].telefono || '-';
        document.getElementById('integra_doc').value = miArray[indice].documentacion || 'Credencial';

        
      } }
}


function load_input_tab3_tll() {

  // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {
    // Obtener el objeto de localStorage
    const miArray = JSON.parse(localStorage.getItem('miArray'));
  
    // Verificar cada propiedad del objeto
    var indice = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'inputs_tll';
    });
    if (indice !== -1) {

        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('LineaTLL').value = miArray[indice].Linea || '-';
        document.getElementById('DestinoTLL').value = miArray[indice].destino || '-';
        document.getElementById('NumEQ').value = miArray[indice].NumEQ || '-';

        
      } }
}

function mostrar_select_de_pestañas() {

  // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {
    // Obtener el objeto de localStorage
    const miArray = JSON.parse(localStorage.getItem('miArray'));
  
    // Verificar cada propiedad del objeto
    var de_tab1 = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'selec_de_tab1';
    });
     if (de_tab1 !== -1) {
      // Asignar los valores a los campos de entrada correspondientes
      document.getElementById('btdano').value = miArray[de_tab1].sel;
      document.getElementById(miArray[de_tab1].sel).style.display = "block";
     } 
    
    var de_tab2 = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'selec_de_tab2';
    });
      if (de_tab2 !== -1) {
          // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('opciones').value = miArray[de_tab2].sel;
        document.getElementById(miArray[de_tab2].sel).style.display = "block";
      }
    
    var de_tab3 = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'selec_de_tab3';
    });
      if (de_tab3 !== -1) {
        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('opciones_tab3').value = miArray[de_tab3].sel;
        document.getElementById(miArray[de_tab3].sel).style.display = "block";
      }

  }

       
}
function load_tab3_migraciones() {

  // Verificar si el objeto está presente en el localStorage
  if (localStorage.getItem('miArray') !== null) {
    // Obtener el objeto de localStorage
    const miArray = JSON.parse(localStorage.getItem('miArray'));
  
    // Verificar cada propiedad del objeto
    var indice = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'migraciones';
    });
    if (indice !== -1) {

        // Asignar los valores a los campos de entrada correspondientes
        document.getElementById('opciones_migraci_1').value = miArray[indice].cantidad_de_lineas || '';
        document.getElementById('opciones_migraci_2').value = miArray[indice].enlistado || '';
        document.getElementById("aca_va_el_text2").value = miArray[indice].text_area || '';
          

        
      } }
}

// Funciones al cerrar la pagina


function saved_inputs_in() {
  // Obtener el array guardado en localStorage
  var arrayGuardado = JSON.parse(localStorage.getItem("miArray"));

  // Obtener los valores de los campos de entrada
  var entradas_pest_1 = {
    nombre: "intputs_pestaña_1",
    Referencia: document.getElementById("Referencia").value,
    Ticket: document.getElementById("Ticket").value,
    OT: document.getElementById("NumdeOT").value,
    Problema: document.getElementById("Problema").value,
    Chequeos: document.getElementById("Chequeos").value,
    Cto: document.getElementById("Contacto").value,
    Tel: document.getElementById("Tel").value,
    E_mail: document.getElementById("mail").value,
    Disp: document.getElementById("Disponibilidad").value,
    Documentación: document.getElementById("Documentacion").value,
    Terraza: document.getElementById("btTerraza").value,
    COVID: document.getElementById("btCOVID").value,
  };

  if (arrayGuardado) {
    // Verificar si entradas_pest_1 ya existe en el array
    var existeEntradas = arrayGuardado.some(function(objeto) {
      return objeto.nombre === 'intputs_pestaña_1';
    });

    if (existeEntradas) {
      // Reemplazar el objeto existente en el array
      arrayGuardado = arrayGuardado.map(function(objeto) {
        if (objeto.nombre === 'intputs_pestaña_1') {
          return entradas_pest_1;
        }
        return objeto;
      });
    } else {
      // Agregar el nuevo objeto al array
      arrayGuardado.push(entradas_pest_1);
    }
  } else {
    // Si no hay un array guardado, crear uno nuevo con el objeto
    arrayGuardado = [entradas_pest_1];
  }

  // Convertir el array de objetos en una cadena JSON
  var jsonString = JSON.stringify(arrayGuardado);

  // Guardar la cadena JSON en localStorage
  localStorage.setItem("miArray", jsonString);
};


function save_inputs_pestaña2() {
  
    var codigo1 = {
      nombre: "lentitud+mails",
      MACCM: document.getElementById("MACCM").value,
      veltest: document.getElementById("veltest").value,
      txtmails: document.getElementById("mail_a_extraer-extencion").value,
  
    };
  
    // Obtener el array del localStorage
    var miArray = JSON.parse(localStorage.getItem("miArray")) || [];
  
    // Verificar si el diccionario ya se encuentra en el localStorage
    var diccionarioIndex = miArray.findIndex(function(objeto) {
      return objeto.nombre === 'lentitud+mails';
    });
  
    if (diccionarioIndex !== -1) {
      // Reemplazar el diccionario existente con el nuevo diccionario
      miArray[diccionarioIndex] = codigo1;
      localStorage.setItem("miArray", JSON.stringify(miArray));
  
    } else {
      // Agregar el nuevo diccionario al localStorage
      miArray.push(codigo1);
      localStorage.setItem("miArray", JSON.stringify(miArray));
   
    }
};

function save_panilla_sin_tono() {
  // Obtener el array guardado en localStorage
  var arrayGuardado = JSON.parse(localStorage.getItem("miArray")) || [];

  // Obtener los valores de los campos de entrada
  var sin_tono = {
    nombre: "sin_tono",
    Problema: document.getElementById("problxicd").value,
    Prueba1: document.getElementById("pruebaxicd").value,
    POA_DA: document.getElementById("POA-DA").value,
    Central: document.getElementById("btcentralxsur").value,
    Prueba2: document.getElementById("prue2xicd").value,
    NombreContacto: document.getElementById("nomrexicd").value,
    TelContacto: document.getElementById("telxicd").value,
    Dispo: document.getElementById("Dispoxicd").value,
    Documentacion: document.getElementById("docxicd").value,
  };

  // Verificar si el array ya se encuentra en localStorage
  var indice = arrayGuardado.findIndex(function(objeto) {
    return objeto.nombre === 'sin_tono';
  });

  if (indice !== -1) {
    // Reemplazar el objeto existente en el índice encontrado
    arrayGuardado[indice] = sin_tono;
  } else {
    // Agregar el nuevo objeto al final del array
    arrayGuardado.push(sin_tono);
  }

  // Convertir el array de objetos en una cadena JSON
  var jsonString = JSON.stringify(arrayGuardado);

  // Guardar la cadena JSON en localStorage
  localStorage.setItem("miArray", jsonString);
}

function saved_inputs_tll() {

    // Obtener el array guardado en localStorage
    var arrayGuardado = JSON.parse(localStorage.getItem("miArray"));
  
    // Obtener los valores de los campos de entrada
    var inputstll = {
      nombre: "inputs_tll",
      Linea: document.getElementById("LineaTLL").value,
      destino: document.getElementById("DestinoTLL").value,
      tipodelinea: getSelectedCheckboxes("Linea_checkbox"),
      NumEQ: document.getElementById("NumEQ").value,
    };
  
    if (arrayGuardado) {
      // Encontrar el índice del objeto a reemplazar
      var indice = arrayGuardado.findIndex(function(objeto) {
        return objeto.nombre === 'inputs_tll';
      });
  
      if (indice !== -1) {
        // Reemplazar el objeto existente en el índice encontrado
        arrayGuardado[indice] = inputstll;
      } else {
        // Agregar el nuevo objeto al final del array
        arrayGuardado.push(inputstll);
      }
    } else {
      // Si no hay un array guardado, crear uno nuevo con el objeto
      arrayGuardado = [inputstll];
    }
  
    // Convertir el array de objetos en una cadena JSON
    var jsonString = JSON.stringify(arrayGuardado);
  
    // Guardar la cadena JSON en localStorage
    localStorage.setItem('miArray', jsonString);
};

function saved_inputs_toip() {

  // Obtener el array guardado en localStorage
  var arrayGuardado = JSON.parse(localStorage.getItem("miArray"));

  // Obtener los valores de los campos de entrada
  var inputs_toip = {
    nombre: "inputs_toip",
    mac: document.getElementById("mac_TOIP").value,
    linea: document.getElementById("linea_TOIP").value,
    la_ip: document.getElementById("IP_TOIP").value,
    Contacto_TOIP: document.getElementById("Contacto_TOIP").value,
    Dispo_TOIP: document.getElementById("Dispo_TOIP").value,

  };

  if (arrayGuardado) {
    // Encontrar el índice del objeto a reemplazar
    var indice = arrayGuardado.findIndex(function(objeto) {
      return objeto.nombre === 'inputs_toip';
    });

    if (indice !== -1) {
      // Reemplazar el objeto existente en el índice encontrado
      arrayGuardado[indice] = inputs_toip;
    } else {
      // Agregar el nuevo objeto al final del array
      arrayGuardado.push(inputs_toip);
    }
  } else {
    // Si no hay un array guardado, crear uno nuevo con el objeto
    arrayGuardado = [inputs_toip];
  }

  // Convertir el array de objetos en una cadena JSON
  var jsonString = JSON.stringify(arrayGuardado);

  // Guardar la cadena JSON en localStorage
  localStorage.setItem('miArray', jsonString);
};

function saved_inputs_integra() {

  // Obtener el array guardado en localStorage
  var arrayGuardado = JSON.parse(localStorage.getItem("miArray"));

  // Obtener los valores de los campos de entrada
  var inputs_integra = {
    nombre: "inputs_integra",
    CUIT: document.getElementById("integra_CUIT").value,
    referencia: document.getElementById("integra_ref").value,
    delta: document.getElementById("integra_Delta").value,
    problema: document.getElementById("integra_Problema").value,
    ciudad: document.getElementById("integra_Ciudad").value,
    contacto: document.getElementById("integra_Contacto").value,
    dispo: document.getElementById("integra_dispo").value,
    razonSocial: document.getElementById("integra_rs").value,
    servicio: document.getElementById("integra_Servicio").value,
    vantive: document.getElementById("integra_Vantive").value,
    calle: document.getElementById("integra_Calle").value,
    provincia: document.getElementById("integra_Provincia").value,
    telefono: document.getElementById("integra_tel").value,
    documentacion: document.getElementById("integra_doc").value,  

  };

  if (arrayGuardado) {
    // Encontrar el índice del objeto a reemplazar
    var indice = arrayGuardado.findIndex(function(objeto) {
      return objeto.nombre === 'inputs_integra';
    });

    if (indice !== -1) {
      // Reemplazar el objeto existente en el índice encontrado
      arrayGuardado[indice] = inputs_integra;
    } else {
      // Agregar el nuevo objeto al final del array
      arrayGuardado.push(inputs_integra);
    }
  } else {
    // Si no hay un array guardado, crear uno nuevo con el objeto
    arrayGuardado = [inputs_integra];
  }

  // Convertir el array de objetos en una cadena JSON
  var jsonString = JSON.stringify(arrayGuardado);

  // Guardar la cadena JSON en localStorage
  localStorage.setItem('miArray', jsonString);
};
  
function getSelectedCheckboxes(name) {
    var checkboxes = document.getElementsByName(name);
    var selectedCheckboxes = [];
  
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        selectedCheckboxes.push(checkbox.value);
      }
    });

    return selectedCheckboxes;
};

function saved_migracion() {

  // Obtener el array guardado en localStorage
  var arrayGuardado = JSON.parse(localStorage.getItem("miArray"));

  // Obtener los valores de los campos de entrada
  var selects_migraciones = {
    nombre: "migraciones",
    cantidad_de_lineas: document.getElementById("opciones_migraci_1").value,
    enlistado: document.getElementById("opciones_migraci_2").value,
    cobertura: getSelectedCheckboxes("cobertura_checkbox"),
    con_hfc: getSelectedCheckboxes("HFC/FTTH_checkbox"),
    text_area: document.getElementById("aca_va_el_text2").value,
  };

  if (arrayGuardado) {
    // Encontrar el índice del objeto a reemplazar
    var indice = arrayGuardado.findIndex(function(objeto) {
      return objeto.nombre === 'migraciones';
    });

    if (indice !== -1) {
      // Reemplazar el objeto existente en el índice encontrado
      arrayGuardado[indice] = selects_migraciones;
    } else {
      // Agregar el nuevo objeto al final del array
      arrayGuardado.push(selects_migraciones);
    }
  } else {
    // Si no hay un array guardado, crear uno nuevo con el objeto
    arrayGuardado = [selects_migraciones];
  }

  // Convertir el array de objetos en una cadena JSON
  var jsonString = JSON.stringify(arrayGuardado);

  // Guardar la cadena JSON en localStorage
  localStorage.setItem('miArray', jsonString);
};


//botones
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btnIncidentes').addEventListener('click', function(event) {openTab(event, 'tab1');});
  document.getElementById('btnSolicitudes').addEventListener('click', function(event) {openTab(event, 'tab2');});
  document.getElementById('btnTECO').addEventListener('click', function(event) {openTab(event, 'tab3');});;


  document.getElementById('updatos').addEventListener('click',envios);
  document.getElementById('boton1').addEventListener('click', copiarContenido);
  document.getElementById('boton2').addEventListener('click', function() {BorrarGral('tab1','Documentacion')});

  //incidente//
  document.getElementById('btdano').addEventListener('change', function() {mostrarBoton('btdano', 'btn_inc','class_opc', 'tab1' );});
  document.getElementById('rtCaido').addEventListener('click', function() {ruta('rtCaido')});
  document.getElementById('rt-serv-Caido').addEventListener('click', function() {ruta('rt-serv-Caido')});
  document.getElementById('rtCortes').addEventListener('click', function() {ruta('rtCortes')});
  document.getElementById('rt-serv-Cortes').addEventListener('click', function() {ruta('rt-serv-Cortes')});
  document.getElementById('rtmasivo').addEventListener('click', function() {ruta('rtmasivo')});
  document.getElementById('rt-serv-Masivo').addEventListener('click', function() {ruta('rt-serv-Masivo')});

  //otros
  document.getElementById('opciones').addEventListener('change', function() {mostrarBoton('opciones','otros_tab2', 'class_opc', 'tab2')});
  document.getElementById('rt-serv-adelanto').addEventListener('click', ruta);
  document.getElementById('rtadelanto').addEventListener('click', ruta);
  document.getElementById('detalleadel').addEventListener('click', ruta);
  document.getElementById('GrProAdel').addEventListener('click', ruta);

  document.getElementById('rt-serv-ErAg').addEventListener('click', ruta);
  document.getElementById('rtErAg').addEventListener('click', ruta);
  document.getElementById('detalleErAg').addEventListener('click', ruta);
  document.getElementById('GrProErAg').addEventListener('click', ruta);

  document.getElementById('rt-serv-config').addEventListener('click', ruta);
  document.getElementById('RtConfig').addEventListener('click', ruta);

  document.getElementById('rt-serv-ipfija').addEventListener('click', ruta);
  document.getElementById('Rtipfija').addEventListener('click', ruta);

  document.getElementById('bntservLentitud').addEventListener('click', ruta);
  document.getElementById('CopyLentitud').addEventListener('click', copylentitud);
  document.getElementById('bntRutaLentitud').addEventListener('click', ruta);
  document.getElementById('BorrarLentitud').addEventListener('click', function() {BorrarGral('lentitud')});

  document.getElementById('toma_IP').addEventListener('change', function() {mostrarDiv('toma_IP','diIP_TOIP')});
  document.getElementById('toip_nuvo_o_migrad').addEventListener('change', function() {mostrarDiv('toip_nuvo_o_migrad','cont_Siebel')});
  document.getElementById('cpy_toip').addEventListener('click', copy_toip);

  document.getElementById('bt-estrac-mails').addEventListener('click', function(event) {envios(event)});

  //teco
  document.getElementById('opciones_tab3').addEventListener('click', function() {mostrarBoton('opciones_tab3','teco_conten', 'class_opc', 'tab3')});
  document.getElementById('copyxicd').addEventListener('click', copy_sin_tono);
  document.getElementById('Borrarxicd').addEventListener('click', function() {BorrarGral('cobrexicd','docxicd')});
  document.getElementById('rutaxicd').addEventListener('click', ruta);

  document.getElementById('Linea_checkbox1').addEventListener('click', function() {seleccionarCheckbox(1, "Linea_checkbox")});
  document.getElementById('Linea_checkbox2').addEventListener('click', function() {seleccionarCheckbox(2, "Linea_checkbox")});
  document.getElementById('DestinoMail').addEventListener('click', ruta);
  document.getElementById('AsunoTLL').addEventListener('click', envios);
  document.getElementById('MailTLL').addEventListener('click', mail_tll);
  document.getElementById('BorrarTLL').addEventListener('click', function() {BorrarGral('btTLL')});

  document.getElementById('bt-integra-Servicio').addEventListener('click', ruta);
  document.getElementById('bt-integra-Ruta').addEventListener('click', ruta);
  document.getElementById('bt-integra-Update').addEventListener('click', function(event) {envios(event)});
  document.getElementById('bt-integra-Copiar').addEventListener('click', copy_integra);
  document.getElementById('bt-integra-Propietario').addEventListener('click', ruta);
  document.getElementById('bt-integra-borrar').addEventListener('click', function() {BorrarGral('integra', 'integra_doc')});

  document.getElementById('ID_asunto').addEventListener('click', envios);
  document.getElementById('bt_detalle_mail_migra').addEventListener('click', envios);
  document.getElementById('opciones_migraci_1').addEventListener('change', function() {bt_disabled(); text_area()});
  document.getElementById('opciones_migraci_2').addEventListener('change', function() {bt_disabled(); text_area()});
  document.getElementById('cobertura_checkbox1').addEventListener('click', function() {seleccionarCheckbox(1,"cobertura_checkbox");bt_disabled() });
  document.getElementById('cobertura_checkbox2').addEventListener('click', function() {seleccionarCheckbox(2, "cobertura_checkbox"); bt_disabled()});
  document.getElementById('HFC/FTTH_checkbox1').addEventListener('click', function() {seleccionarCheckbox(1,"HFC/FTTH_checkbox"); bt_disabled()});
  document.getElementById('HFC/FTTH_checkbox2').addEventListener('click', function() {seleccionarCheckbox(2, "HFC/FTTH_checkbox");bt_disabled()});

});
  
// Array guardado en localStorage
var arrayGuardado = JSON.parse(localStorage.getItem("miArray"));
let fecha = new Date();
if (fecha.getHours()<13) {turno ='Buenos días;'} else {turno ='Buenas tardes;'};
// Array de variables
var variable_array = [
  { nombre: "tabs" },
  { nombre: "selec pestaña 1", id: 'btdano' },
  { nombre: "selec pestaña 2", id: 'opciones' },
  { nombre: "selec pestaña 3", id: 'opciones_tab3' },

];

// Función para borrar los datos guardados en localStorage
function borarmemo() {
  localStorage.clear();
  location.reload();
};

function borradodeclasses() {
  var botones = document.getElementsByClassName('class_opc');
  for (var i = 0; i < botones.length; i++) {
    botones[i].style.display = "none";
  }
};



function openTab(evt, tabName) {
  var i, tabcontent, tabbtn;

  // Ocultar todos los contenidos de pestañas
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remover la clase "active" de todos los botones de pestañas
  tabbtn = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].classList.remove("active");
  }

  // Mostrar el contenido de la pestaña seleccionada
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");

  // Guardar en memoria
  var info_de_pestaña = {
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
 

};

// Función para activar opciones de opciones
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
};

// Función para seleccionar un checkbox

function seleccionarCheckbox(checkboxIndex, name) {
  var checkboxes = document.getElementsByName(name);

  checkboxes.forEach(function(checkbox, index) {
    checkbox.checked = (index + 1 === checkboxIndex);
  });
}

// Función para copiar el contenido de la planilla de incidente
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
};

//copiar contenido planilla de lentitud//
function copylentitud() {
  var a = " || ";
  var MACCM = document.getElementById("MACCM").value;
  var lent1 = document.getElementById("lent1").value;
  var lent2 = document.getElementById("lent2").value;
  var lent3 = document.getElementById("lent3").value;
  var lent4 = document.getElementById("lent4").value;
  var lent5 = document.getElementById("lent5").value;
  var lent6 = document.getElementById("lent6").value;
  var veltest = document.getElementById("veltest").value;
  var lent7 = document.getElementById("lent7").value;
  var lent8 = document.getElementById("lent8").value;

  var contenidoUnificado =
    "MAC CM: " + MACCM + a +
    "El CM fue reiniciado?: " + lent1 + a +
    "El Modem es apto?: " + lent2 + a +
    "Niveles del CM ok?: " + lent3 + a +
    "CM es docsis 3.1?: " + lent4 + a +
    "Problemas de edificio/nodo?: " + lent5 + a +
    "Prueba de descarga desde: " + lent6 + a +
    "Medición: " + veltest + a +
    "Cable ETH apto?: " + lent7 + a +
    "Config de placa de PC ok?: " + lent8;

  // Copiar el contenido al portapapeles
  navigator.clipboard.writeText(contenidoUnificado).then(function() {
  
  }, function() {
  
  });
}


/* envia mensaje*/

function envios(event) {
  console.log("mensaje enviado");
  let Name_atributo = event.target.getAttribute("name");

   let params = {
    active: true,
    currentWindow: true
    }
    if (Name_atributo== "tab_ICD") {
      chrome.tabs.query(params,tab_ICD) 
    }
    if (Name_atributo== "asunto_TTL") {
      chrome.tabs.query(params,asunto_TTL)
    }  
    if (Name_atributo== "bt-estrac-mails") {
      chrome.tabs.query(params,extr_mails)
    }
    if (Name_atributo== "bt-integra-Update") {
      chrome.tabs.query(params,update_integra)
    }
    if (Name_atributo== "bt_asunto_migra") {
      chrome.tabs.query(params,asunto_migra)
    }

    if (Name_atributo== "bt_detalle_mail_migra") {
      chrome.tabs.query(params,detalle_mail_migra)
    }
    


};
    
  function tab_ICD(tabs) {    
      let msg = "ICD"  
     chrome.tabs.sendMessage(tabs[0].id,msg);
    
  };

  function asunto_TTL(tabs) {  
      let msg2 = "asunto_TTL"  
     chrome.tabs.sendMessage(tabs[0].id,msg2);
   
  };

  function extr_mails(tabs) {  
    let msg3 = "Extra_mails"  
   chrome.tabs.sendMessage(tabs[0].id,msg3);
};
   function update_integra(tabs) {  
     let msg4 = "update_integra"  
     chrome.tabs.sendMessage(tabs[0].id,msg4);
  }; 
  function asunto_migra(tabs) {
    let msg5 = "asunto_migra"
    chrome.tabs.sendMessage(tabs[0].id,msg5);
  }

  function detalle_mail_migra(tabs) {
    let msg6 = "detalle_mail_migra"
    chrome.tabs.sendMessage(tabs[0].id,msg6);
  }



/*recepcion de mensaje*/

 chrome.runtime.onMessage.addListener(function(response){
   
 let f = new Date();
 if (f.getHours()<13) {turno ='Buenos días;'} else {turno ='Buenas tardes;'};
 
  if (response.txtID == "ICD_ID") { 
    document.getElementById("Ticket").value = response.txt1;
    document.getElementById("Referencia").value = response.txt2;
    document.getElementById("Contacto").value = response.txt3;
    document.getElementById("Disponibilidad").value = response.txt4;
    document.getElementById("Tel").value = response.txt8+"  "+response.txy9_tel_fijo;
    document.getElementById("NumdeOT").value = response.txt5;
    if (response.txt6.includes("@")){ document.getElementById("mail").value = response.txt6}
    else if (response.txt7.includes("@")) {document.getElementById("mail").value = response.txt7} 
    else {document.getElementById("mail").value = 'n/d'}
   } 
  if (response.txtID == "office_ID") { 
    function extractEmails ( text ){
      return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }
    let a  = response.txta1
    let asu  = response.asunto
    let mail_de  = response.mail_de
    document.getElementById("mail_a_extraer-extencion").value = asu+'\n'+'*************************************************'+'\n'+extractEmails(mail_de)+'\n'+'*************************************************'+'\n'+extractEmails(a).join('\n')+'\n';
    autoAjustar(document.getElementById("mail_a_extraer-extencion")) 
    
   }
   if (response.txtID == "TTL_ID") { 
    let asunto = "Transferencia remota |Ticket ICD: "+response.txt1+" |  Razón Social: "+response.txt2+" | Número de Línea: "+response.txt3+" | Localidad: "+response.txt4
    navigator.clipboard.writeText(asunto)
   }
   if (response.txtID == "integra_ID") { 
    document.getElementById("integra_CUIT").value = response.cuit;
    document.getElementById("integra_rs").value = response.rz;
    document.getElementById("integra_ref").value = response.ref;
    document.getElementById("integra_Contacto").value = response.nombre;
    document.getElementById("integra_dispo").value = response.dispo;
    document.getElementById("integra_tel").value = response.tel;
    document.getElementById("integra_Calle").value = response.calle;
    document.getElementById("integra_Provincia").value = response.prov;
    document.getElementById("integra_Ciudad").value = response.ciudad;
   }
   if (response.txtID == "migracion_ID_asunto") { 
   

    x_asunto = "Migración Sin Procesar || Razón social: "+response.rz+" || CUIT: "+response.cuit+" || Línea: "+response.linea+" || ICD: "+response.icd;
    navigator.clipboard.writeText(x_asunto)
   }

   if (response.txtID == "ID_detalle_mail_migra") { 

    var opcionesMigracion1 = document.getElementById('opciones_migraci_1').value;
    var opcionesMigracion2 = document.getElementById('opciones_migraci_2').value;
     
      let f = new Date();
      if (f.getHours()<13) {turno ='Buenos días;'} else {turno ='Buenas tardes;'};

        let enlistdo = "";
        let cantidad_de_lineas = "";
        let cobertura = getSelectedCheckboxes("cobertura_checkbox");
        let con_HFC = getSelectedCheckboxes("HFC/FTTH_checkbox");
     
          
 

        if (opcionesMigracion1.includes("#b")) {cantidad_de_lineas = " es una sola línea LG + xDSL, "}
        else if (opcionesMigracion1.includes("#c")) {cantidad_de_lineas = " es una sola línea LG sin xDSL, "}
        else if (opcionesMigracion1.includes("#d")) {cantidad_de_lineas = " el cliente posee 2 líneas LG sin xDSL en la misma dirección, "}
        else if (opcionesMigracion1.includes("#e")) {cantidad_de_lineas = " el cliente posee más de 2 líneas LG sin xDSL en la misma dirección, "}
        else if (opcionesMigracion1.includes("#f")) {cantidad_de_lineas = " el cliente posee líneas LG con rotativa, "}
        else if (opcionesMigracion1.includes("#g")) {cantidad_de_lineas = " el cliente posee líneas LG Centrex, "}

        if (opcionesMigracion2 === "#1") {enlistdo = ", se encuentra en la lista de apagado de centrales, por lo que no será reparada,"}
        else if (opcionesMigracion2 === "#2") {enlistdo = ", se encuentra en la lista de vandalismo, por lo que no será reparada,"}
        else if (opcionesMigracion2 === "#3") {enlistdo = ", no se encuentra en la lista de apagado de centrales ni la de vandalismo, pero posee masivo RED-NOREPA, por lo que no será reparada,"}

        
  
       
        x_detalle= turno+ "\n" +
     "Estimados, verificamos que la línea "+response.linea+enlistdo+cantidad_de_lineas+cobertura+con_HFC+"¿podrán verificar qué servicio se le puede ofrecer al cliente para la migración de tecnología?"+ "\n" + "\n" +
     "Contacto: "+response.nombre+","+ "\n" +
     "Tel.: "+response.tel_fi+response.tel2_mov+ "\n" +
     "Mail: "+response.mail+","+ "\n" +
     "Disp.: "+response.dispo+", "+ "\n" + "\n" +
     "Quedamos atentos a sus comentarios."+ "\n" +
     "Ticket en seguimiento: "+response.icd+ "\n"
     
     navigator.clipboard.writeText(x_detalle)
    }
   
  }); 

  function bt_disabled() {
  var btn = document.getElementById("bt_detalle_mail_migra")
  
  if (document.getElementById('opciones_migraci_1').value === "" || 
  document.getElementById('opciones_migraci_2').value === ""||
  getSelectedCheckboxes("cobertura_checkbox").length == 0 ||
  getSelectedCheckboxes("HFC/FTTH_checkbox").length == 0) {
    btn.style ="background-color: #525151";
    btn.disabled = true
    btn:active = false
  }else {  btn.style =" background-color: #7c03a1"; btn.disabled = false}
    
  }
  function text_area() {
   
 
      
      var opcionesMigracion1 = document.getElementById('opciones_migraci_1').value;
      var opcionesMigracion2 = document.getElementById('opciones_migraci_2').value;
      var textarea = document.getElementById('aca_va_el_text2');

      var venta_o_migra = "";
      var mail_venta_o_migra = "";
    
      if (opcionesMigracion1.includes("ventas")) {
        venta_o_migra = "VENTAS";
        mail_venta_o_migra = "VentaPymes@teco.com.ar";
      } else if (opcionesMigracion1.includes("migra1") && !opcionesMigracion2.includes("#3")) {
        venta_o_migra = "MIGRACIONES";
        mail_venta_o_migra = "MIGRACIONESB2B@teco.com.ar";
      } else if (opcionesMigracion1.includes("migra1") && opcionesMigracion2.includes("#3")) {
        venta_o_migra = "NINGÚN LADO, NO SE DERIVA";
        
      } else if (opcionesMigracion1.includes("migra2") && opcionesMigracion2.includes("#3")) {
        venta_o_migra = "VENTAS";
        mail_venta_o_migra = "VentaPymes@teco.com.ar";
      } else if (opcionesMigracion1.includes("migra2") && !opcionesMigracion2.includes("#3")) {
        venta_o_migra = "MIGRACIONES";
        mail_venta_o_migra = "MIGRACIONESB2B@teco.com.ar";
      } 
       
     
        if (opcionesMigracion1 === "" || opcionesMigracion2 === "") {
          textarea.value = " (︡• ﹏•︠)";
         
        }else { textarea.value = 
          "LOS MAILS A SUMAR A LA CADENA DE RECO" + "\n" + "\n" +
          "ReferentesTecnicosCorporativo@teco.com.ar" + "\n" +
          "ReferentesConectividadAdminB2B@teco.com.ar" + "\n" +
          "SupervisoresVentasCanalesB2B@teco.com.ar" + "\n" + "\n" +
          "MAIL A " + venta_o_migra + "\n" + "\n" +
          mail_venta_o_migra; 
  }
    
  }




function BorrarGral(id, inp_creden){
   var id_dnd_borrar = document.getElementById(id)
    var cars = id_dnd_borrar.getElementsByTagName("input");
    var i;
    for (i = 0; i < cars.length; i++) {
      if (cars[i].type === "text") {
      cars[i].value ="-" }  }
    if (inp_creden) { document.getElementById(inp_creden).value = "Credencial"}
    if (id==='integra') { document.getElementById('integra_Servicio').value = "Integra"}
};

function ruta() {
  let x = event.target.name;
  var elementoTemporal = document.createElement("textarea");
  document.body.appendChild(elementoTemporal)
  elementoTemporal.value = x;
  elementoTemporal.select();
  document.execCommand('copy');
  elementoTemporal.remove();

}

function mostrarDiv(id, id_a_actavar) {
  var seleccion = document.getElementById(id).value;
  var divIP = document.getElementById(id_a_actavar);

  if (seleccion === "si"||seleccion === "fue migrada") {
    divIP.style.display = "block";
  }   
  else {
    divIP.style.display = "none";
  }
}

function copy_toip() {
  var mac = document.getElementById("mac_TOIP").value;
  var linea = document.getElementById("linea_TOIP").value;
  var hades = document.getElementById("estado_en_hades").value;
  var toma_ip = document.getElementById("toma_IP").value;
  var la_ip = document.getElementById("IP_TOIP").value;
  var ping_gateway = document.getElementById("gateway").value;
  var Core_IMS = document.getElementById("Core_IMS").value;
  var nuvo_o_migrad = document.getElementById("toip_nuvo_o_migrad").value;
  var estad_sieel = document.getElementById("Siebel").value;
  var reinic = document.getElementById("fue_reiniciado").value;
  var puerto = document.getElementById("puerto_correcto").value;
  var poa_toip = document.getElementById("poa_toip").value; 
  var rj11_toip = document.getElementById("rj11_toip").value; 
  var volumen = document.getElementById("volumen").value;   
  var Fiwmware_h = document.getElementById("Fiwmware_h").value;
  var fue_reset = document.getElementById("fue_reset").value;
  var Contacto_TOIP = document.getElementById("Contacto_TOIP").value;
  var Dispo_TOIP = document.getElementById("Dispo_TOIP").value;
  
if (toma_ip ==="si" && nuvo_o_migrad==="fue migrada") {
  
  var planilla = "MAC CM o SN ONT: "+mac+ "\n" +
  "Número de linea: "+linea+ "\n" +
  "Estado en Hades: "+hades+ "\n" +
  "Toma IP?: "+toma_ip+ "\n" +
  "IP TOIP: "+la_ip+ "\n" +
  "Responde icmp del gateway?: "+ping_gateway+ "\n" +
  "Estado en IMS?: "+Core_IMS+ "\n" +
  "Linea migrada o nueva?: "+nuvo_o_migrad+ "\n" +
  "Estado en Siebel: "+estad_sieel+ "\n" +
  "Fue reiniciado?: "+reinic+ "\n" +
  "Conectado en el puerto correcto?: "+puerto+ "\n" +
  "Se probó con otro aparato telefono?: "+poa_toip+ "\n" +
  "Se probó con otro cable rj11?: "+rj11_toip+ "\n" +
  "Volumen del aparato telefono: "+volumen+ "\n" +
  "Firmware homologado?: "+Fiwmware_h+ "\n" + 
  "ONT/CM fue reinicia a valores por defecto?: "+fue_reset+ "\n" +"\n"+
  "Contacto: "+Contacto_TOIP+ "\n" +
  "Disponibilidad: "+Dispo_TOIP
  navigator.clipboard.writeText(planilla)
}

var planilla
if (toma_ip ==="si" && nuvo_o_migrad==="línea mueva") {
  
  var planilla = "MAC CM o SN ONT: "+mac+ "\n" +
  "Número de linea: "+linea+ "\n" +
  "Estado en Hades: "+hades+ "\n" +
  "Toma IP?: "+toma_ip+ "\n" +
  "IP TOIP: "+la_ip+ "\n" +
  "Responde icmp del gateway?: "+ping_gateway+ "\n" +
  "Estado en IMS?: "+Core_IMS+ "\n" +
  "Linea migrada o nueva?: "+nuvo_o_migrad+ "\n" +
  "Fue reiniciado?: "+reinic+ "\n" +
  "Conectado en el puerto correcto?: "+puerto+ "\n" +
  "Se probó con otro aparato telefono?: "+poa_toip+ "\n" +
  "Se probó con otro cable rj11?: "+rj11_toip+ "\n" +
  "Volumen del aparato telefono: "+volumen+ "\n" +
  "Firmware homologado?: "+Fiwmware_h+ "\n" + 
  "ONT/CM fue reinicia a valores por defecto?: "+fue_reset+ "\n" +"\n"+
  "Contacto: "+Contacto_TOIP+ "\n" +
  "Disponibilidad: "+Dispo_TOIP
  navigator.clipboard.writeText(planilla)
}

if (toma_ip ==="no" && nuvo_o_migrad==="fue migrada") {
  
  var planilla = "MAC CM o SN ONT: "+mac+ "\n" +
  "Número de linea: "+linea+ "\n" +
  "Estado en Hades: "+hades+ "\n" +
  "Toma IP?: "+toma_ip+ "\n" +
  "Estado en IMS?: "+Core_IMS+ "\n" +
  "Linea migrada o nueva?: "+nuvo_o_migrad+ "\n" +
  "Estado en Siebel: "+estad_sieel+ "\n" +
  "Fue reiniciado?: "+reinic+ "\n" +
  "Conectado en el puerto correcto?: "+puerto+ "\n" +
  "Se probó con otro aparato telefono?: "+poa_toip+ "\n" +
  "Se probó con otro cable rj11?: "+rj11_toip+ "\n" +
  "Volumen del aparato telefono: "+volumen+ "\n" +
  "Firmware homologado?: "+Fiwmware_h+ "\n" + 
  "ONT/CM fue reinicia a valores por defecto?: "+fue_reset+ "\n" +"\n"+
  "Contacto: "+Contacto_TOIP+ "\n" +
  "Disponibilidad: "+Dispo_TOIP

  navigator.clipboard.writeText(planilla)
}

if (toma_ip ==="no" && nuvo_o_migrad==="línea mueva") {
  
  var planilla = "MAC CM o SN ONT: "+mac+ "\n" +
  "Número de linea: "+linea+ "\n" +
  "Estado en Hades: "+hades+ "\n" +
  "Toma IP?: "+toma_ip+ "\n" +
  "Estado en IMS?: "+Core_IMS+ "\n" +
  "Linea migrada o nueva?: "+nuvo_o_migrad+ "\n" +
  "Fue reiniciado?: "+reinic+ "\n" +
  "Conectado en el puerto correcto?: "+puerto+ "\n" +
  "Se probó con otro aparato telefono?: "+poa_toip+ "\n" +
  "Se probó con otro cable rj11?: "+rj11_toip+ "\n" +
  "Volumen del aparato telefono: "+volumen+ "\n" +
  "Firmware homologado?: "+Fiwmware_h+ "\n" + 
  "ONT/CM fue reinicia a valores por defecto?: "+fue_reset+ "\n" +"\n"+
  "Contacto: "+Contacto_TOIP+ "\n" +
  "Disponibilidad: "+Dispo_TOIP
  navigator.clipboard.writeText(planilla)
}


  

}

function copy_integra() {

var CUIT = document.getElementById('integra_CUIT').value;
var referencia = document.getElementById('integra_ref').value;
var delta = document.getElementById('integra_Delta').value;
var problema = document.getElementById('integra_Problema').value;
var ciudad = document.getElementById('integra_Ciudad').value;
var contacto = document.getElementById('integra_Contacto').value;
var dispo = document.getElementById('integra_dispo').value;
var razonSocial = document.getElementById('integra_rs').value;
var servicio = document.getElementById('integra_Servicio').value;
var vantive = document.getElementById('integra_Vantive').value;
var calle = document.getElementById('integra_Calle').value;
var provincia = document.getElementById('integra_Provincia').value;
var telefono = document.getElementById('integra_tel').value;
var documentacion = document.getElementById('integra_doc').value;

var planilla = 'CUIT: '+CUIT+ "\n" +
'Razón social: '+razonSocial+ "\n" +
'Referencia: '+referencia+ "\n" +
'Servicio: '+servicio+ "\n" +
'Vantive: '+vantive+ "\n" +
'Estado en delta: '+delta+ "\n" +
'Problema: '+problema+ "\n" +
'Calle: '+calle+ "\n" +
'Ciudad: '+ciudad+ "\n" +
'Provincia: '+provincia+ "\n" +"\n" +
'Contacto: '+contacto+ "\n" +
'Teléfono: '+telefono+ "\n" +
'Disponibilidad: '+dispo+ "\n" +
'Documentación: '+documentacion

navigator.clipboard.writeText(planilla)

}

function copy_sin_tono() {
  var problema = document.getElementById("problxicd").value;
  var prueba1 = document.getElementById("pruebaxicd").value;
  var poaDa = document.getElementById("POA-DA").value;
  var central = document.getElementById("btcentralxsur").value;
  var prueba2 = document.getElementById("prue2xicd").value;
  var nombreContacto = document.getElementById("nomrexicd").value;
  var telContacto = document.getElementById("telxicd").value;
  var dispo = document.getElementById("Dispoxicd").value;
  var documentacion = document.getElementById("docxicd").value;

  var concatenatedValue = "Problema: " + problema + "\n" +
    "Prueba 1: " + prueba1 + "\n" +
    "POA/DA: " + poaDa + "\n" +
    "Central?: " + central + "\n" +
    "Prueba 2: " + prueba2 + "\n" +
    "Nombre de contacto: " + nombreContacto + "\n" +
    "Tel de contacto: " + telContacto + "\n" +
    "Dispo: " + dispo + "\n" +
    "Documentación: " + documentacion;

  // Crear un elemento de textarea temporal para copiar el texto al portapapeles
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = concatenatedValue;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);

 
 
}

function mail_tll() {
  var linea = document.getElementById("LineaTLL").value;
  var destino = document.getElementById("DestinoTLL").value;
  var checkbox = getSelectedCheckboxes("Linea_checkbox") ;
  var NumEQ = document.getElementById("NumEQ").value;

  var submitButton = document.getElementById("MailTLL");
  var valorSubmit = submitButton.name;

  var turnoReemplazado = valorSubmit.replace('♪', turno);
  var lineaReemplazado = turnoReemplazado.replace('♫', linea);
  var destinoReemplazado = lineaReemplazado.replace('☼', destino);
  var checkReemplazado = destinoReemplazado.replace('→', checkbox);
  var NumEQReemplazado = checkReemplazado.replace('←', NumEQ);

  // Copiar el texto reemplazado al portapapeles
  navigator.clipboard.writeText(NumEQReemplazado)
  
}

function autoAjustar(textarea) {
  
  textarea.style.height = 'auto'; // Restablecer la altura a automático
  textarea.style.height = (textarea.scrollHeight) + 'px'; // Ajustar la altura según el contenido
}