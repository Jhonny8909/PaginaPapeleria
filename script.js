// ============================================================
// SCRIPT PRINCIPAL - E-COMMERCE CON TICKET DE WHATSAPP
// ============================================================

// ------------------------------------------------------------
// 1. GESTIÓN DEL CARRITO (LOCALSTORAGE)
// ------------------------------------------------------------
const STORAGE_KEY_CARRITO = "tienda_carrito_compras";

function obtenerCarrito() {
  try {
    const datos = localStorage.getItem(STORAGE_KEY_CARRITO);
    return datos ? JSON.parse(datos) : [];
  } catch (e) {
    console.error("Error al leer el carrito:", e);
    return [];
  }
}

function guardarCarrito(carrito) {
  try {
    localStorage.setItem(STORAGE_KEY_CARRITO, JSON.stringify(carrito));
    actualizarVistasCarrito();
  } catch (e) {
    console.error("Error al guardar el carrito:", e);
  }
}

function agregarAlCarrito(productoId, cantidad = 1) {
  const producto = obtenerProductoPorId(productoId);
  if (!producto) return;

  const carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === producto.id);

  if (index !== -1) {
    carrito[index].cantidad += cantidad;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagenes[0],
      categoria: producto.categoria,
      cantidad: cantidad
    });
  }

  guardarCarrito(carrito);
  abrirCarritoDrawer();
}

function actualizarCantidadItem(productoId, delta) {
  const carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === productoId);

  if (index !== -1) {
    carrito[index].cantidad += delta;
    if (carrito[index].cantidad <= 0) {
      carrito.splice(index, 1);
    }
    guardarCarrito(carrito);
  }
}

function eliminarDelCarrito(productoId) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(item => item.id !== productoId);
  guardarCarrito(carrito);
}

function vaciarCarrito() {
  guardarCarrito([]);
}

function calcularTotalesCarrito() {
  const carrito = obtenerCarrito();
  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  return { totalArticulos, totalPrecio, carrito };
}

// ------------------------------------------------------------
// 2. ACTUALIZACIÓN VISUAL DEL CARRITO Y CONTADORES
// ------------------------------------------------------------
function actualizarVistasCarrito() {
  const { totalArticulos, totalPrecio, carrito } = calcularTotalesCarrito();

  // Actualizar todos los contadores numéricos en el header
  const contadores = document.querySelectorAll(".badge-contador, #contador");
  contadores.forEach(el => {
    el.textContent = totalArticulos;
  });

  // Renderizar Drawer lateral si existe en el DOM
  const drawerBody = document.getElementById("drawer-lista-items");
  const drawerTotal = document.getElementById("drawer-total-precio");
  const drawerBtnComprar = document.getElementById("btn-drawer-checkout");

  if (drawerBody && drawerTotal) {
    drawerTotal.textContent = formatearMoneda(totalPrecio);

    if (carrito.length === 0) {
      drawerBody.innerHTML = `
        <div class="carrito-vacio-msg">
          <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <p>Tu carrito está vacío</p>
          <a href="tienda.html" class="btn btn-sm btn-primario" style="margin-top: 14px;">Explorar Productos</a>
        </div>
      `;
      if (drawerBtnComprar) drawerBtnComprar.disabled = true;
    } else {
      if (drawerBtnComprar) drawerBtnComprar.disabled = false;
      drawerBody.innerHTML = carrito.map(item => `
        <div class="drawer-item">
          <img src="${item.imagen}" alt="${item.nombre}" class="drawer-item-img">
          <div class="drawer-item-info">
            <h4 class="drawer-item-titulo">${item.nombre}</h4>
            <div class="drawer-item-precio">${formatearMoneda(item.precio)}</div>
            <div class="drawer-item-cantidad">
              <button class="btn-cant" onclick="actualizarCantidadItem(${item.id}, -1)">-</button>
              <span>${item.cantidad}</span>
              <button class="btn-cant" onclick="actualizarCantidadItem(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="btn-eliminar-item" onclick="eliminarDelCarrito(${item.id})" title="Eliminar">
            &times;
          </button>
        </div>
      `).join("");
    }
  }

  // Si estamos en la página carrito.html, refrescar su tabla
  renderizarPaginaCarrito();
}

// ------------------------------------------------------------
// 3. DRAWER OFFCANVAS (ABRIR / CERRAR)
// ------------------------------------------------------------
function abrirCarritoDrawer() {
  const drawer = document.getElementById("carrito-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer && backdrop) {
    drawer.classList.add("abierto");
    backdrop.classList.add("activo");
    document.body.style.overflow = "hidden";
  }
}

function cerrarCarritoDrawer() {
  const drawer = document.getElementById("carrito-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("abierto");
    backdrop.classList.remove("activo");
    document.body.style.overflow = "";
  }
}

// ------------------------------------------------------------
// 4. HEADER COMÚN, BUSCADOR EXPANDIBLE Y MENÚ MÓVIL
// ------------------------------------------------------------
function inicializarHeader() {
  // Menú móvil (hamburguesa)
  const btnMenu = document.getElementById("btn-menu");
  const menu = document.getElementById("menu");

  if (btnMenu && menu) {
    btnMenu.addEventListener("click", () => {
      const abierto = menu.classList.toggle("abierto");
      btnMenu.classList.toggle("abierto");
      btnMenu.setAttribute("aria-expanded", abierto);
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !btnMenu.contains(e.target) && menu.classList.contains("abierto")) {
        menu.classList.remove("abierto");
        btnMenu.classList.remove("abierto");
        btnMenu.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Buscador y expansión con categorías (solo en index.html)
  const buscadorWrapper = document.querySelector(".buscador-wrapper.expandible");
  const buscadorInput = document.getElementById("buscador-input");
  const formBuscador = document.getElementById("form-buscador");

  if (buscadorWrapper && buscadorInput) {
    // Renderizar categorías dinámicamente en el dropdown
    const listaChips = buscadorWrapper.querySelector(".categorias-lista-chips");
    if (listaChips && typeof CATEGORIAS !== "undefined") {
      listaChips.innerHTML = CATEGORIAS.map(cat => {
        const icono = (typeof ICONOS_CATEGORIAS !== "undefined" && ICONOS_CATEGORIAS[cat]) ? `${ICONOS_CATEGORIAS[cat]} ` : "";
        return `<a href="tienda.html?categoria=${encodeURIComponent(cat)}" class="categoria-chip">${icono}${cat}</a>`;
      }).join("");
    }

    // Al hacer clic o focus en el input, expandir y mostrar categorías
    buscadorInput.addEventListener("focus", () => {
      buscadorWrapper.classList.add("expandido", "mostrar-dropdown");
    });

    buscadorInput.addEventListener("click", () => {
      buscadorWrapper.classList.add("expandido", "mostrar-dropdown");
    });

    // Cerrar el dropdown al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!buscadorWrapper.contains(e.target)) {
        buscadorWrapper.classList.remove("mostrar-dropdown");
        if (buscadorInput.value.trim() === "") {
          buscadorWrapper.classList.remove("expandido");
        }
      }
    });

    // Envío del formulario de búsqueda desde index
    if (formBuscador) {
      formBuscador.addEventListener("submit", (e) => {
        e.preventDefault();
        const termino = buscadorInput.value.trim();
        if (termino) {
          window.location.href = `tienda.html?buscar=${encodeURIComponent(termino)}`;
        } else {
          window.location.href = `tienda.html`;
        }
      });
    }
  } else if (formBuscador && buscadorInput) {
    // En tienda.html: buscador directo sin dropdown expansivo
    formBuscador.addEventListener("submit", (e) => {
      e.preventDefault();
      const termino = buscadorInput.value.trim();
      filtrarYMostrarCatalogo(termino, "");
    });

    // Filtrado en vivo mientras escribe en tienda.html
    buscadorInput.addEventListener("input", () => {
      filtrarYMostrarCatalogo(buscadorInput.value.trim(), "");
    });
  }

  // Botón para abrir el drawer del carrito
  const btnsCarrito = document.querySelectorAll(".btn-carrito-header, [data-accion='abrir-carrito']");
  btnsCarrito.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      abrirCarritoDrawer();
    });
  });

  // Botón para cerrar drawer y backdrop
  const btnCerrarDrawer = document.getElementById("btn-cerrar-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (btnCerrarDrawer) btnCerrarDrawer.addEventListener("click", cerrarCarritoDrawer);
  if (backdrop) backdrop.addEventListener("click", cerrarCarritoDrawer);

  // Escuchar tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarCarritoDrawer();
      cerrarTicketModal();
    }
  });
}

// ------------------------------------------------------------
// 5. CARRUSEL INTERACTIVO (index.html)
// ------------------------------------------------------------
function inicializarCarrusel() {
  const track = document.getElementById("carrusel-track");
  const btnPrev = document.getElementById("carrusel-btn-prev");
  const btnNext = document.getElementById("carrusel-btn-next");
  const dotsContainer = document.getElementById("carrusel-dots");

  if (!track) return;

  // Filtrar productos destacados o usar los primeros 6
  const productosCarrusel = PRODUCTOS.filter(p => p.destacado);

  // Renderizar tarjetas en el track
  track.innerHTML = productosCarrusel.map(p => `
    <article class="producto-card">
      <div class="producto-card-img-wrapper">
        <span class="badge-tag">Sugerido</span>
        <img src="${p.imagenes[0]}" alt="${p.nombre}" class="producto-card-img" loading="lazy">
      </div>
      <div class="producto-card-cuerpo">
        <span class="producto-card-categoria">${p.categoria}</span>
        <h3 class="producto-card-titulo">${p.nombre}</h3>
        <div class="producto-card-precios">
          <span class="precio-actual">${formatearMoneda(p.precio)}</span>
          ${p.precioAnterior ? `<span class="precio-anterior">${formatearMoneda(p.precioAnterior)}</span>` : ""}
        </div>
        <div class="producto-card-acciones">
          <a href="producto.html?id=${p.id}" class="btn btn-primario btn-sm btn-bloque">Ver Producto</a>
          <button class="btn btn-secundario btn-sm" onclick="agregarAlCarrito(${p.id})" title="Añadir al carrito">
            🛒
          </button>
        </div>
      </div>
    </article>
  `).join("");

  let currentIndex = 0;
  let cardsVisibles = calcularCardsVisibles();

  function calcularCardsVisibles() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  const maxIndex = Math.max(0, productosCarrusel.length - cardsVisibles);

  // Crear indicadores de puntos
  function renderDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("button");
      dot.className = `carrusel-dot ${i === currentIndex ? "activo" : ""}`;
      dot.setAttribute("aria-label", `Ir a elemento ${i + 1}`);
      dot.addEventListener("click", () => irADiapositiva(i));
      dotsContainer.appendChild(dot);
    }
  }

  function actualizarPosicion() {
    const card = track.querySelector(".producto-card");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24;
    const desplazamiento = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${desplazamiento}px)`;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".carrusel-dot");
      dots.forEach((dot, idx) => {
        dot.classList.toggle("activo", idx === currentIndex);
      });
    }
  }

  function irADiapositiva(indice) {
    currentIndex = Math.max(0, Math.min(indice, maxIndex));
    actualizarPosicion();
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      actualizarPosicion();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      actualizarPosicion();
    });
  }

  // Autoplay continuo con pausa al posar el cursor
  let autoplayInterval = setInterval(() => {
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    actualizarPosicion();
  }, 4500);

  const carruselViewport = track.parentElement;
  if (carruselViewport) {
    carruselViewport.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
    carruselViewport.addEventListener("mouseleave", () => {
      autoplayInterval = setInterval(() => {
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        actualizarPosicion();
      }, 4500);
    });
  }

  window.addEventListener("resize", () => {
    cardsVisibles = calcularCardsVisibles();
    renderDots();
    actualizarPosicion();
  });

  renderDots();
  actualizarPosicion();
}

// ------------------------------------------------------------
// 6. CATÁLOGO Y BÚSQUEDA (tienda.html)
// ------------------------------------------------------------
function inicializarTienda() {
  const contenedor = document.getElementById("cuadricula-productos");
  if (!contenedor) return;

  const urlParams = new URLSearchParams(window.location.search);
  const busquedaParam = urlParams.get("buscar") || "";
  const categoriaParam = urlParams.get("categoria") || "";

  // Sincronizar input de búsqueda si vino por URL
  const inputBuscador = document.getElementById("buscador-input");
  if (inputBuscador && busquedaParam) {
    inputBuscador.value = busquedaParam;
  }

  // Renderizar botones de filtro por categoría
  const contenedorFiltros = document.getElementById("filtros-categorias-bar");
  if (contenedorFiltros) {
    const todasCategorias = ["Todas", ...CATEGORIAS];
    contenedorFiltros.innerHTML = todasCategorias.map(cat => {
      const estaActiva = (cat === "Todas" && !categoriaParam) || (cat.toLowerCase() === categoriaParam.toLowerCase());
      return `
        <button class="btn-filtro ${estaActiva ? "activo" : ""}" data-categoria="${cat}">
          ${cat}
        </button>
      `;
    }).join("");

    contenedorFiltros.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-filtro");
      if (!btn) return;

      contenedorFiltros.querySelectorAll(".btn-filtro").forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");

      const catSeleccionada = btn.getAttribute("data-categoria");
      const termino = inputBuscador ? inputBuscador.value.trim() : "";
      filtrarYMostrarCatalogo(termino, catSeleccionada === "Todas" ? "" : catSeleccionada);
    });
  }

  // Filtrado inicial
  filtrarYMostrarCatalogo(busquedaParam, categoriaParam);
}

function filtrarYMostrarCatalogo(termino, categoria) {
  const contenedor = document.getElementById("cuadricula-productos");
  const contadorEl = document.getElementById("contador-resultados");
  const tituloEstado = document.getElementById("titulo-estado-busqueda");

  if (!contenedor) return;

  const resultados = filtrarProductos({ termino, categoria });

  // Actualizar textos de estado
  if (contadorEl) {
    contadorEl.textContent = `${resultados.length} producto${resultados.length === 1 ? "" : "s"} encontrado${resultados.length === 1 ? "" : "s"}`;
  }

  if (tituloEstado) {
    if (termino && categoria) {
      tituloEstado.textContent = `Resultados para "${termino}" en ${categoria}`;
    } else if (termino) {
      tituloEstado.textContent = `Resultados para "${termino}"`;
    } else if (categoria) {
      tituloEstado.textContent = `Categoría: ${categoria}`;
    } else {
      tituloEstado.textContent = `Todos los Productos`;
    }
  }

  // Renderizar cuadrícula
  if (resultados.length === 0) {
    contenedor.innerHTML = `
      <div class="sin-resultados">
        <h3>No encontramos productos</h3>
        <p>No hay coincidencias con los términos o categoría seleccionada.</p>
        <button class="btn btn-primario" onclick="restablecerFiltros()">Ver todos los productos</button>
      </div>
    `;
  } else {
    contenedor.innerHTML = resultados.map(p => `
      <article class="producto-card">
        <div class="producto-card-img-wrapper">
          <img src="${p.imagenes[0]}" alt="${p.nombre}" class="producto-card-img" loading="lazy">
        </div>
        <div class="producto-card-cuerpo">
          <span class="producto-card-categoria">${p.categoria}</span>
          <h3 class="producto-card-titulo">${p.nombre}</h3>
          <p style="color: var(--color-texto-secundario); font-size: 0.88rem; margin-bottom: 12px; line-height: 1.4;">
            ${p.descripcionCorta}
          </p>
          <div class="producto-card-precios">
            <span class="precio-actual">${formatearMoneda(p.precio)}</span>
            ${p.precioAnterior ? `<span class="precio-anterior">${formatearMoneda(p.precioAnterior)}</span>` : ""}
          </div>
          <div class="producto-card-acciones">
            <a href="producto.html?id=${p.id}" class="btn btn-primario btn-sm btn-bloque">Detalles</a>
            <button class="btn btn-secundario btn-sm" onclick="agregarAlCarrito(${p.id})" title="Añadir al carrito">
              🛒
            </button>
          </div>
        </div>
      </article>
    `).join("");
  }
}

function restablecerFiltros() {
  const inputBuscador = document.getElementById("buscador-input");
  if (inputBuscador) inputBuscador.value = "";
  
  const contenedorFiltros = document.getElementById("filtros-categorias-bar");
  if (contenedorFiltros) {
    contenedorFiltros.querySelectorAll(".btn-filtro").forEach(b => {
      b.classList.toggle("activo", b.getAttribute("data-categoria") === "Todas");
    });
  }

  filtrarYMostrarCatalogo("", "");
}

// ------------------------------------------------------------
// 7. DETALLE DE PRODUCTO (producto.html)
// ------------------------------------------------------------
function inicializarDetalleProducto() {
  const detalleContenedor = document.getElementById("detalle-producto-container");
  if (!detalleContenedor) return;

  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get("id") || 1;
  const producto = obtenerProductoPorId(idParam) || PRODUCTOS[0];

  document.title = `${producto.nombre} | Mi Tienda`;

  // Migas de pan
  const migaNombre = document.getElementById("miga-producto-nombre");
  if (migaNombre) migaNombre.textContent = producto.nombre;

  // Galería
  const imgPrincipal = document.getElementById("detalle-img-principal");
  const miniaturasBox = document.getElementById("detalle-miniaturas");

  if (imgPrincipal) imgPrincipal.src = producto.imagenes[0];

  if (miniaturasBox) {
    miniaturasBox.innerHTML = producto.imagenes.map((img, index) => `
      <button class="miniatura-btn ${index === 0 ? "activa" : ""}" data-src="${img}">
        <img src="${img}" alt="Vista ${index + 1}">
      </button>
    `).join("");

    miniaturasBox.addEventListener("click", (e) => {
      const btn = e.target.closest(".miniatura-btn");
      if (!btn) return;
      miniaturasBox.querySelectorAll(".miniatura-btn").forEach(b => b.classList.remove("activa"));
      btn.classList.add("activa");
      if (imgPrincipal) imgPrincipal.src = btn.getAttribute("data-src");
    });
  }

  // Información
  const catEl = document.getElementById("detalle-categoria");
  const tituloEl = document.getElementById("detalle-titulo");
  const precioEl = document.getElementById("detalle-precio");
  const precioAntEl = document.getElementById("detalle-precio-anterior");
  const descEl = document.getElementById("detalle-descripcion");

  if (catEl) catEl.textContent = producto.categoria;
  if (tituloEl) tituloEl.textContent = producto.nombre;
  if (precioEl) precioEl.textContent = formatearMoneda(producto.precio);
  if (precioAntEl) {
    if (producto.precioAnterior) {
      precioAntEl.textContent = formatearMoneda(producto.precioAnterior);
      precioAntEl.style.display = "inline";
    } else {
      precioAntEl.style.display = "none";
    }
  }
  if (descEl) descEl.textContent = producto.descripcionLarga || producto.descripcionCorta;

  // Contador de cantidad para la compra
  let cantidadSeleccionada = 1;
  const cantidadValor = document.getElementById("detalle-cantidad-num");
  const btnRestar = document.getElementById("btn-cant-restar");
  const btnSumar = document.getElementById("btn-cant-sumar");

  if (btnRestar && btnSumar && cantidadValor) {
    btnRestar.addEventListener("click", () => {
      if (cantidadSeleccionada > 1) {
        cantidadSeleccionada--;
        cantidadValor.textContent = cantidadSeleccionada;
      }
    });

    btnSumar.addEventListener("click", () => {
      cantidadSeleccionada++;
      cantidadValor.textContent = cantidadSeleccionada;
    });
  }

  // Botón "Agregar al Carrito"
  const btnAgregar = document.getElementById("btn-detalle-agregar");
  if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto.id, cantidadSeleccionada);
    });
  }

  // Botón "Simular Compra con Ticket WhatsApp"
  const btnComprarAhora = document.getElementById("btn-detalle-comprar");
  if (btnComprarAhora) {
    btnComprarAhora.addEventListener("click", () => {
      const itemCompra = [{
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidadSeleccionada
      }];
      mostrarTicketModal(itemCompra);
    });
  }
}

// ------------------------------------------------------------
// 8. PÁGINA COMPLETA DE CARRITO (carrito.html)
// ------------------------------------------------------------
function renderizarPaginaCarrito() {
  const listaContainer = document.getElementById("carrito-pagina-lista");
  const resumenContainer = document.getElementById("carrito-pagina-resumen");
  if (!listaContainer || !resumenContainer) return;

  const { totalArticulos, totalPrecio, carrito } = calcularTotalesCarrito();

  if (carrito.length === 0) {
    listaContainer.innerHTML = `
      <div class="sin-resultados" style="padding: 60px 20px;">
        <h3>Tu carrito está actualmente vacío</h3>
        <p>No tienes productos agregados para comprar.</p>
        <a href="tienda.html" class="btn btn-primario">Ir a la Tienda</a>
      </div>
    `;
    resumenContainer.innerHTML = `
      <h3>Resumen del Pedido</h3>
      <p style="color: var(--color-texto-secundario); font-size: 0.9rem;">Agrega productos para calcular el total.</p>
    `;
    return;
  }

  listaContainer.innerHTML = `
    <div class="carrito-tabla-box">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3 style="font-size: 1.25rem;">Artículos seleccionados (${totalArticulos})</h3>
        <button class="btn btn-sm btn-secundario" onclick="vaciarCarrito()">Vaciar carrito</button>
      </div>
      ${carrito.map(item => `
        <div class="carrito-item-row">
          <img src="${item.imagen}" alt="${item.nombre}" class="carrito-item-row-img">
          <div>
            <h4 style="font-size: 1.05rem; margin-bottom: 4px;">${item.nombre}</h4>
            <span style="font-size: 0.85rem; color: var(--color-texto-secundario);">${item.categoria}</span>
            <div style="font-weight: 600; margin-top: 4px;">${formatearMoneda(item.precio)} c/u</div>
          </div>
          <div class="drawer-item-cantidad" style="margin-top: 0;">
            <button class="btn-cant" onclick="actualizarCantidadItem(${item.id}, -1)">-</button>
            <span>${item.cantidad}</span>
            <button class="btn-cant" onclick="actualizarCantidadItem(${item.id}, 1)">+</button>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 6px;">
              ${formatearMoneda(item.precio * item.cantidad)}
            </div>
            <button class="btn-eliminar-item" onclick="eliminarDelCarrito(${item.id})" title="Quitar">
              &times; Quitar
            </button>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  resumenContainer.innerHTML = `
    <div class="carrito-resumen-card">
      <h3>Resumen del Pedido</h3>
      <div class="resumen-linea">
        <span>Subtotal</span>
        <span>${formatearMoneda(totalPrecio)}</span>
      </div>
      <div class="resumen-linea">
        <span>Envío</span>
        <span style="color: var(--color-whatsapp-oscuro); font-weight: 600;">Gratis</span>
      </div>
      <div class="resumen-linea total">
        <span>Total a Pagar</span>
        <span>${formatearMoneda(totalPrecio)}</span>
      </div>
      <p style="font-size: 0.85rem; color: var(--color-texto-secundario); margin: 16px 0;">
        Al continuar, se generará el ticket de tu orden y se simulará el envío del chat a WhatsApp.
      </p>
      <button class="btn btn-whatsapp btn-bloque" onclick="simularCompraDesdeCarrito()">
        Simular Compra y Mandar Ticket
      </button>
    </div>
  `;
}

function simularCompraDesdeCarrito() {
  const carrito = obtenerCarrito();
  if (carrito.length === 0) return;
  mostrarTicketModal(carrito, true); // true indica vaciar carrito después si se desea
}

// ------------------------------------------------------------
// 9. MODAL POP-UP ELEGANTE DE SIMULACIÓN DE COMPRA CON TICKET
// ------------------------------------------------------------
function mostrarTicketModal(articulos, vaciarAlCerrar = false) {
  const modal = document.getElementById("ticket-modal-overlay");
  if (!modal) return;

  const total = articulos.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const ticketId = "TK-" + Math.floor(100000 + Math.random() * 900000);
  const fecha = new Date().toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const ticketNumeroEl = document.getElementById("ticket-numero");
  const ticketFechaEl = document.getElementById("ticket-fecha");
  const ticketListaEl = document.getElementById("ticket-articulos-lista");
  const ticketTotalEl = document.getElementById("ticket-total-valor");

  if (ticketNumeroEl) ticketNumeroEl.textContent = `#${ticketId}`;
  if (ticketFechaEl) ticketFechaEl.textContent = fecha;
  if (ticketTotalEl) ticketTotalEl.textContent = formatearMoneda(total);

  if (ticketListaEl) {
    ticketListaEl.innerHTML = articulos.map(item => `
      <div class="ticket-articulo-fila">
        <span>${item.cantidad}x ${item.nombre}</span>
        <span>${formatearMoneda(item.precio * item.cantidad)}</span>
      </div>
    `).join("");
  }

  // Guardar estado si se debe vaciar carrito al cerrar
  modal.setAttribute("data-vaciar-al-cerrar", vaciarAlCerrar ? "true" : "false");

  modal.classList.add("activo");
  document.body.style.overflow = "hidden";
}

function cerrarTicketModal() {
  const modal = document.getElementById("ticket-modal-overlay");
  if (modal && modal.classList.contains("activo")) {
    modal.classList.remove("activo");
    document.body.style.overflow = "";

    if (modal.getAttribute("data-vaciar-al-cerrar") === "true") {
      vaciarCarrito();
    }
  }
}

// ------------------------------------------------------------
// 10. INICIALIZACIÓN GLOBAL AL CARGAR LA PÁGINA
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  inicializarHeader();
  actualizarVistasCarrito();

  // Inicializar componentes específicos según la página actual
  inicializarCarrusel();
  inicializarTienda();
  inicializarDetalleProducto();

  // Botón checkout desde el drawer
  const btnDrawerCheckout = document.getElementById("btn-drawer-checkout");
  if (btnDrawerCheckout) {
    btnDrawerCheckout.addEventListener("click", () => {
      const carrito = obtenerCarrito();
      if (carrito.length > 0) {
        cerrarCarritoDrawer();
        mostrarTicketModal(carrito, true);
      }
    });
  }

  // Configurar cierre del modal de ticket
  const btnCerrarTicket = document.getElementById("btn-cerrar-ticket");
  const modalOverlay = document.getElementById("ticket-modal-overlay");
  if (btnCerrarTicket) {
    btnCerrarTicket.addEventListener("click", cerrarTicketModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        cerrarTicketModal();
      }
    });
  }
});
