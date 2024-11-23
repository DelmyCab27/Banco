document.addEventListener('DOMContentLoaded', function () {
  // Obtener todos los botones del teclado
  const botonesTeclado = document.querySelectorAll('.teclado button');
  // Obtener el input de la tarjeta
  const inputTarjeta = document.querySelector('.numero-tarjeta input');
  // Obtener el input de NIP
  const inputNIP = document.querySelector('.nip input');

  // Recorrer todos los botones del teclado y agregar un evento click a cada uno
  /*botonesTeclado.forEach(boton => {
    boton.addEventListener('click', () => {
      // Obtener el valor del botón presionado
      const valorBoton = boton.textContent;

      // Verificar en qué input se está escribiendo
     if (inputTarjeta.style.display !== 'none') {
        // Verificar si el valor del botón es "BORRAR"
        if (valorBoton === "BORRAR") {
          // Eliminar el último carácter del input de la tarjeta
          inputTarjeta.value = inputTarjeta.value.slice(0, -1);
        } else if (inputTarjeta.value.length < 16) { // Limitar a 16 dígitos
          // Agregar el valor del botón al input de la tarjeta
          inputTarjeta.value += valorBoton;
        }
      } else { // Input de NIP
        // Verificar si el valor del botón es "BORRAR"
        if (valorBoton === "BORRAR") {
          // Eliminar el último carácter del input de NIP
          inputNIP.value = inputNIP.value.slice(0, -1);
        } else if (inputNIP.value.length < 4) { // Limitar a 4 dígitos
          // Agregar el valor del botón al input de NIP
          inputNIP.value += valorBoton;
        }
      }
    });
  });*/

  // Agregar un evento input al input de NIP
  inputNIP.addEventListener('input', () => {
    // Verificar si la longitud del NIP es mayor a 4
    if (inputNIP.value.length > 4) {
      // Establecer el valor del input de NIP a la última subcadena de 4 caracteres
      inputNIP.value = inputNIP.value.slice(0, 4); // Modificación aquí
    }
  });
});
