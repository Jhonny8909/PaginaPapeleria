(function () {
  const paginas = {
    "index.html": "",
    "producto.html": "producto",
    "carrito.html": "carrito",
    "tienda.html": "tienda"
  };

  const ruta = window.location.pathname;
  const coincidencia = ruta.match(/\/(index\.html|producto\.html|carrito\.html|tienda\.html)$/i);
  if (!coincidencia) return;

  const rutaBase = ruta.slice(0, ruta.length - coincidencia[0].length);
  const pagina = paginas[coincidencia[1].toLowerCase()];
  const destino = pagina
    ? `${rutaBase}/${pagina}`.replace(/\/+/g, "/")
    : `${rutaBase}/`.replace(/\/+/g, "/");

  window.history.replaceState(
    null,
    "",
    `${destino}${window.location.search}${window.location.hash}`
  );
})();
