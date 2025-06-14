// Esperamos a que la página esté completamente cargada
document.addEventListener("DOMContentLoaded", function () {
  // ================================
  // 1. FUNCIONALIDAD DE BÚSQUEDA (onclick)
  // ================================

  const inputBusqueda = document.querySelector("#inputBusqueda"); // Input donde el usuario escribe
  const tarjetas = document.querySelectorAll(".card"); // Todas las tarjetas de libros
  const botonBusqueda = document.getElementById("botonBusqueda"); // Botón "Buscar"

  // Al hacer clic en el botón de búsqueda
  botonBusqueda.addEventListener("click", function () {
    const termino = inputBusqueda.value.toLowerCase(); // Convertimos el texto a minúsculas
    let contador = 0; // Contador para los resultados

    console.clear(); // Limpiamos consola para depuración

    tarjetas.forEach((tarjeta) => {
      const contenido = tarjeta.textContent.toLowerCase(); // Texto completo de la tarjeta

      // Verificamos si el término buscado está en el contenido de la tarjeta
      if (contenido.includes(termino)) {
        tarjeta.style.display = "block"; // Mostrar si coincide
        contador++; // Contamos este libro
        console.log(`Coincidencia: "${contenido.trim().split("\n")[0]}"`);
      } else {
        tarjeta.style.display = "none"; // Ocultar si no coincide
      }
    });

    console.log(`Se encontraron ${contador} libro(s) que coinciden.`);
    alert(`Se encontraron ${contador} libro(s) que coinciden.`);
  });

  // ================================
  // 2. FILTRAR POR GÉNERO (onchange)
  // ================================

  const filtroGenero = document.getElementById("filtroGenero");

  filtroGenero.addEventListener("change", function () {
    const generoSeleccionado = filtroGenero.value.toLowerCase();
    let contador = 0;

    tarjetas.forEach((tarjeta) => {
      const contenido = tarjeta.textContent.toLowerCase();

      // Si el filtro es "todos", mostramos todas las tarjetas
      if (
        generoSeleccionado === "todos" ||
        contenido.includes(generoSeleccionado)
      ) {
        tarjeta.style.display = "block";
        contador++;
      } else {
        tarjeta.style.display = "none";
      }
    });

    console.log(
      `Libros mostrados por género "${generoSeleccionado}": ${contador}`
    );
  });

  // ================================
  // 3. VALIDACIÓN DEL FORMULARIO DE REGISTRO
  // ================================

  const formularioRegistro = document.querySelector("#registro form");

  formularioRegistro.addEventListener("submit", function (e) {
    const nombre = formularioRegistro
      .querySelector('input[name="nombre"]')
      .value.trim();
    const email = formularioRegistro
      .querySelector('input[name="email"]')
      .value.trim();
    const password = formularioRegistro
      .querySelector('input[name="password"]')
      .value.trim();

    console.log("Validando formulario...");

    if (!nombre || !email || !password) {
      e.preventDefault(); // Detenemos el envío
      alert("Por favor completa todos los campos del formulario.");
      console.warn("Formulario incompleto.");
    } else {
      console.log("Formulario válido. Datos listos para enviar.");
    }
  });
});
