document.addEventListener("DOMContentLoaded", () => {
  const contenedorProductos = document.getElementById("productos");

  contenedorProductos.innerHTML = "";

  let cantidades = {};
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function actualizarCantidadCarrito() {
    const spanCarrito = document.getElementById("carrito-cantidad");
    if (!spanCarrito) return;

    const totalProductos = carrito.reduce((sum, p) => sum + p.cantidad, 0);
    spanCarrito.textContent = totalProductos;
  }

  actualizarCantidadCarrito();

  // Usamos productosData traído desde data_productos.js
  productosData.forEach(producto => {
    cantidades[producto.id] = 1;

    const div = document.createElement("div");
    div.className = "carrito";
    div.innerHTML = `
      <img src="${producto.image}" alt="${producto.title}">
      <h3>${producto.title}</h3>
      <p>$${producto.price}</p>
      <div class="cantidad-container">
        <button class="restar">➖</button>
        <span id="cant-${producto.id}">1</span>
        <button class="sumar">➕</button>
      </div>
      <button class="button_primary agregar">Agregar al carrito</button>
    `;

    const spanCantidad = div.querySelector(`#cant-${producto.id}`);

    div.querySelector(".restar").addEventListener("click", () => {
      cambiarCantidad(producto.id, -1);
      spanCantidad.textContent = cantidades[producto.id];
    });

    div.querySelector(".sumar").addEventListener("click", () => {
      cambiarCantidad(producto.id, 1);
      spanCantidad.textContent = cantidades[producto.id];
    });

    div.querySelector(".agregar").addEventListener("click", () => {
      agregarAlCarrito(producto.id, producto.title, producto.price, producto.image);

      if (typeof actualizarCantidadCarrito === "function") {
        actualizarCantidadCarrito();
      }
    });

    contenedorProductos.appendChild(div);
  });

  function cambiarCantidad(id, cambio) {
    cantidades[id] = (cantidades[id] || 1) + cambio;
    if (cantidades[id] < 1) cantidades[id] = 1;
  }

  function agregarAlCarrito(id, title, price, image) {
    const cantidad = cantidades[id] || 1;

    const existente = carrito.find(p => p.id === id);
    if (existente) {
      existente.cantidad += cantidad;
    } else {
      carrito.push({ id, title, price, image, cantidad });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    if (typeof mostrarPopupCarrito === "function") {
      mostrarPopupCarrito();
    }
  }
});

