document.addEventListener("DOMContentLoaded", () => {
  const contenedorProductos = document.getElementById("productos");

  // Limpiamos contenedor
  contenedorProductos.innerHTML = "";

  // Renderizamos productos desde productosData (tu JSON o arreglo)
  productosData.forEach(producto => {
    contenedorProductos.innerHTML += `
      <div class="carrito">
        <img src="${producto.image}" alt="${producto.title}">
        <h3>${producto.title}</h3>
        <p>$${producto.price}</p>

        <div class="cantidad-container">
          <button class="cant-btn" onclick="cambiarCantidad('${producto.id}', -1)">➖</button>
          <span id="cant-${producto.id}">1</span>
          <button class="cant-btn" onclick="cambiarCantidad('${producto.id}', 1)">➕</button>
        </div>

        <button class="button_primary" onclick="agregarAlCarrito('${producto.id}', '${producto.title}', ${producto.price}, '${producto.image}')">
          Agregar al carrito 🛒
        </button>
      </div>
    `;
  });
});

// Objeto para guardar cantidades temporales antes de agregar al carrito
let cantidades = {};

// Traemos carrito desde localStorage o inicializamos vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Cambiar cantidad en la página antes de agregar
function cambiarCantidad(id, cambio) {
  cantidades[id] = (cantidades[id] || 1) + cambio;
  if (cantidades[id] < 1) cantidades[id] = 1;

  const spanCantidad = document.getElementById(`cant-${id}`);
  if (spanCantidad) spanCantidad.textContent = cantidades[id];
}

// Agregar producto al carrito
function agregarAlCarrito(id, title, price, image) {
  const cantidad = cantidades[id] || 1;

  // Revisamos si ya existe en el carrito
  const existente = carrito.find(p => p.id === id);
  if (existente) {
    existente.cantidad += cantidad; // suma correctamente
  } else {
    carrito.push({ id, title, price, image, cantidad });
  }

  // Guardamos en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Mostrar popup si existe la función
  if (typeof mostrarPopupCarrito === "function") {
    mostrarPopupCarrito();
  }
}
