document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos");

  contenedor.innerHTML = "";

  productosData.forEach(producto => {
    contenedor.innerHTML += `
      <div class="carrito">
        <div>
          <img src="${producto.image}" alt="${producto.title}">
        </div>
        <h3>${producto.title}</h3>
        <p>$${producto.price}</p>
        <button class="button_primary" onclick="agregarAlCarrito(${producto.id}, '${producto.title}', ${producto.price}, '${producto.image}')">
          Agregar al carrito 🛒
        </button>
      </div>
    `;
  });
});

function agregarAlCarrito(id, title, price, image) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const existente = carrito.find(p => p.id === id);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ id, title, price, image, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarPopupCarrito(); // ← Aquí se activa el pop-up
}


