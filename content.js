console.log("mensajes recibidos");


chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message) {
  console.log(message);

if (message=="ICD") {
      let msj_desde_icd ={
            txtID: "ICD_ID",
            txt1: document.getElementById("m77a6936f-lb").innerText,
            txt2: document.getElementById("m47009fc3-tb").value, 
            txt3: document.getElementById("me70e160a-tb").value, 
            txt4: document.getElementById("m9007726-tb").value,             
            txt5: document.getElementById("m64a2fc20-tb").value,
            txt6: document.getElementById("m96a688b2-tb").value,
            txt7: document.getElementById("m9764e285-tb").value,
            txt8: document.getElementById("m796a83a9-tb").value,
            txy9_tel_fijo: document.getElementById("me063d213-tb").value,
      }

      chrome.runtime.sendMessage(msj_desde_icd)
      console.log("enviado =>")
      console.log(msj_desde_icd)
}


if (message=="Extra_mails") { 
      let Asunto = document.getElementsByClassName("Kbqkc")[0].title
      let mail_de = document.getElementsByClassName("OZZZK")[1].textContent
      let mails_para = document.getElementsByClassName("L4zcT")[0].textContent

      let msj_desde_office_mails ={
            
            txtID: "office_ID",
            txta1:mails_para, 
            mail_de: mail_de,
            asunto:Asunto,
                           
             }
             chrome.runtime.sendMessage(msj_desde_office_mails)
      console.log("enviado =>")
      console.log(msj_desde_office_mails);      
}

             
if (message=="asunto_TTL") {
    
      let msj_desde_icd_TTL ={
            txtID: "TTL_ID",
            txt1: document.getElementById("m77a6936f-lb").innerText,
            txt2: document.getElementById("mcf5d878d-tb2").value,             
            txt3: document.getElementById("mf378a1bf-tb").value,
            txt4: document.getElementById("me69ba64-tb").value,
           
      }

      chrome.runtime.sendMessage(msj_desde_icd_TTL)
      console.log("enviado =>")
      console.log(msj_desde_icd_TTL)
}
if (message=="update_integra") {
     
      let msj_desde_icd_integra ={
            txtID: "integra_ID",
            cuit: document.getElementById("mcf5d878d-tb").value,
            rz: document.getElementById("mcf5d878d-tb2").value,             
            ref: document.getElementById("m47009fc3-tb").value,
            nombre: document.getElementById("me70e160a-tb").value,
            dispo: document.getElementById("m9007726-tb").value,
            tel: document.getElementById("m796a83a9-tb").value,
            calle: document.getElementById("m2bf8df71-tb2").value,
            ciudad: document.getElementById("me69ba64-tb").value,
            prov: document.getElementById("m70d8c6d9-tb2").value,
                 
      }

      chrome.runtime.sendMessage(msj_desde_icd_integra)
      console.log("enviado =>")
      console.log(msj_desde_icd_integra)
}


if (message=="asunto_migra") {
     
      let msj_desde_icd_migracion_asunto ={
            txtID: "migracion_ID_asunto",
            icd: document.getElementById("m77a6936f-lb").innerText,
            cuit: document.getElementById("mcf5d878d-tb").value,
            rz: document.getElementById("mcf5d878d-tb2").value,             
            linea: document.getElementById("mf378a1bf-tb").value,
            
                 
      }

      chrome.runtime.sendMessage(msj_desde_icd_migracion_asunto)
      console.log("enviado =>")
      console.log(msj_desde_icd_migracion_asunto)
}
if (message=="detalle_mail_migra") {
     
      let msj_desde_icd_detalle_mail_migra ={
            txtID: "ID_detalle_mail_migra",
            linea: document.getElementById("mf378a1bf-tb").value,
            nombre: document.getElementById("me6cc7c3d-tb").value,
            tel_fi: document.getElementById("me1a1b824-tb").value,
            tel2_mov: document.getElementById("m78a8e99e-tb").value,  
            mail: document.getElementById("m96a688b2-tb").value,
            dispo: document.getElementById("m8c21d11-tb").value,
            icd: document.getElementById("m77a6936f-lb").innerText,           
                 
      }

      chrome.runtime.sendMessage(msj_desde_icd_detalle_mail_migra)
      console.log("enviado =>")
      console.log(msj_desde_icd_detalle_mail_migra)
}

};

