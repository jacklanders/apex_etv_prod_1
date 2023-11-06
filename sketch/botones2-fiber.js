// *************************************************  CODIGO SECCION 2 -  ************************************************* 
document.addEventListener('DOMContentLoaded', function() { // - Boton superior 3 de la extension:
document.getElementById('btnFiber').addEventListener('click', function(event) { openTab(event, 'tab2'); });

const mainSelector = document.getElementById("mainSelector");
const subSelector = document.getElementById("subSelector");
const notepad = document.querySelector(".notepad-3");

mainSelector.addEventListener("change", function () {
    const selectedOption = mainSelector.value;
    // You can customize the sub-options based on the selected value here
    const subOptions = getSubOptions(selectedOption);
    updateSubSelector(subOptions);
});

function getSubOptions(selectedOption) {
    // Define sub-options based on the selected value
    const subOptionsMap = {
        "RecomendadosPymess_in": ["Consulta novedades 1", "Consulta novedades 2", "Consulta novedades 3"],
        "RecomendadosPymess_out": ["Adelanta HFC - AMBA", "Adelanta FTTH - AMBA"],
        // Add more sub-options for other mainSelector values
    };

    return subOptionsMap[selectedOption] || [];
}

function updateSubSelector(subOptions) {
    subSelector.innerHTML = "";
    if (subOptions.length > 0) {
        notepad.style.display = "block";
        subOptions.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            subSelector.appendChild(optionElement);
        });
        subSelector.style.display = "block";
    } else {
        subSelector.style.display = "none";
        notepad.style.display = "none";
    }
}



// Get references to notepad2 in tab2
const notepad3 = document.getElementById("notepad3");
  if (notepad3) {
    // JavaScript for controlling the visibility of notepad 2 in tab2
    notepad3.addEventListener('input', function() {
    autoAjustar(notepad3);
    });

   function autoAjustar(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
    }
   
  notepad3.style.display = "block";
  const botonLimpiar_tab2 = document.getElementById("botonLimpiar_tab2");
   
  if (botonLimpiar_tab2) {
    botonLimpiar_tab2.addEventListener("click", function() {
    notepad3.value = ""; // Clear the content of notepad2 in tab2
    });
  }
 }
});   
