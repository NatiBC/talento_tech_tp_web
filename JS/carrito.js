const contenedor = document.getElementById("carrito");
const totalTexto = document.getElementById("total");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function renderCarrito() {
  contenedor.innerHTML = "";

  carrito.forEach((producto, index) => {
    contenedor.innerHTML += `
      <div class="carrito">
        <img src="${producto.image}" width="100">
        <h3>${producto.title}</h3>
        <p>Precio: $${producto.price * producto.cantidad}</p>

        <div style="display:flex; justify-content:center; align-items:center; gap:10px;">
          <button onclick="cambiarCantidad(${index}, -1)">➖</button>
          <span>${producto.cantidad}</span>
          <button onclick="cambiarCantidad(${index}, 1)">➕</button>
        </div>

        <button class="button_primary" onclick="eliminar(${index})">Eliminar</button>
      </div>
    `;
  });

  actualizarTotal();
}

function cambiarCantidad(index, cambio) {
  carrito[index].cantidad += cambio;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

function actualizarTotal() {
  const total = carrito.reduce((suma, p) => suma + p.price * p.cantidad, 0);
  totalTexto.textContent = `Total de la compra: $${total}`;
}

renderCarrito();
