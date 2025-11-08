// carrito-global.js
document.addEventListener("DOMContentLoaded", () => {
  const spanCarrito = document.getElementById("carrito-cantidad");
  if (!spanCarrito) return; // Si no existe, salimos

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function actualizarCantidadCarrito() {
    const total = carrito.reduce((sum, p) => sum + p.cantidad, 0);
    spanCarrito.textContent = total;
  }

  // Actualizar al cargar
  actualizarCantidadCarrito();

  // Hacer que sea accesible para otros scripts
  window.actualizarCantidadCarrito = actualizarCantidadCarrito;
});

