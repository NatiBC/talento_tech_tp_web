document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("carrito");
  const totalTexto = document.getElementById("total");
  const spanCarrito = document.getElementById("carrito-cantidad");
  const popup = document.getElementById("popup_carrito");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Actualiza el icono del carrito en el menú
  function actualizarCantidadCarrito() {
    if (!spanCarrito) return;
    const total = carrito.reduce((sum, p) => sum + p.cantidad, 0);
    spanCarrito.textContent = total;
  }

  // Muestra un popup temporal
  function mostrarPopup(mensaje, tipo = "success") {
    const popup = document.getElementById("popup_carrito");
    if (!popup) return;

    popup.textContent = mensaje;
    popup.style.background = tipo === "success" ? "#7c90b9ff" : "#2d3b54ff";
    popup.classList.add("mostrar");

    setTimeout(() => {
      popup.classList.remove("mostrar");
    }, 2000);
  }


  // Renderiza el carrito en pantalla
  function renderCarrito() {
    if (!contenedor) return;
    contenedor.innerHTML = "";

    carrito.forEach((producto, index) => {
      const div = document.createElement("div");
      div.className = "carrito";

      div.innerHTML = `
        <img src="${producto.image}" width="100">
        <h3>${producto.title}</h3>
        <p>Precio: $${producto.price * producto.cantidad}</p>
        <div style="display:flex; justify-content:center; align-items:center; gap:10px;">
          <button class="restar">➖</button>
          <span>${producto.cantidad}</span>
          <button class="sumar">➕</button>
        </div>
        <button class="button_primary eliminar">Eliminar</button>
      `;

      // Botones de cantidad
      div.querySelector(".restar").addEventListener("click", () => cambiarCantidad(index, -1));
      div.querySelector(".sumar").addEventListener("click", () => cambiarCantidad(index, 1));

      // Botón eliminar
      div.querySelector(".eliminar").addEventListener("click", () => eliminar(index));

      contenedor.appendChild(div);
    });

    actualizarTotal();
    actualizarCantidadCarrito();
  }

  // Cambiar cantidad de un producto
  function cambiarCantidad(index, cambio) {
    if (cambio === -1 && carrito[index].cantidad <= 1) return;

    carrito[index].cantidad += cambio;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();

    mostrarPopup(
      `"${carrito[index].title}" actualizada a ${carrito[index].cantidad}`,
      "success"
    );
  }

  // Eliminar un producto
  function eliminar(index) {
    const nombreProducto = carrito[index].title;
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();

    mostrarPopup(`"${nombreProducto}" eliminado del carrito`, "error");
  }

  // Actualizar total de la compra
  function actualizarTotal() {
    if (!totalTexto) return;
    const total = carrito.reduce((sum, p) => sum + p.price * p.cantidad, 0);
    totalTexto.textContent = `Total de la compra: $${total}`;
  }

  // Inicializar al cargar la página
  renderCarrito();
});
