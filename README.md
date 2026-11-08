# Plantilla E-commerce con SimulaciÃ³n de Ticket por WhatsApp

Plantilla web moderna, responsiva y modular para tiendas en lÃ­nea donde la compra y el contacto se formalizan a travÃ©s de WhatsApp.

## ðŸŒ Despliegue en GitHub Pages

Para publicar tu pÃ¡gina web en GitHub Pages de forma gratuita:

### OpciÃ³n A (Recomendada y mÃ¡s rÃ¡pida): Desde la rama `main`
1. Sube los cambios a tu repositorio en GitHub:
   ```bash
   git add .
   git commit -m "Estructurar archivos para despliegue en GitHub Pages"
   git push origin main
   ```
2. Ve a tu repositorio en GitHub: `https://github.com/Jhonny8909/PaginaPapeleria`.
3. Haz clic en la pestaÃ±a **Settings** (ConfiguraciÃ³n) arriba a la derecha.
4. En el menÃº lateral izquierdo, haz clic en **Pages** (en la secciÃ³n *Code and automation*).
5. En **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` y en la carpeta elige `/ (root)`.
   - Haz clic en **Save** (Guardar).
6. En un par de minutos, tu sitio web estarÃ¡ activo en:
   ðŸ‘‰ **`https://Jhonny8909.github.io/PaginaPapeleria/`**

### OpciÃ³n B: Mediante GitHub Actions
El repositorio ya incluye el flujo automatizado en `.github/workflows/deploy.yml`. Solo debes ir a **Settings** -> **Pages** -> en **Source** elegir **GitHub Actions**.

---

## ðŸ“ Estructura del Proyecto

- **`index.html`**: PÃ¡gina principal del sitio:
  - Header con logo, enlace a la tienda, botÃ³n de carrito con contador dinÃ¡mico y buscador interactivo.
  - Al hacer clic en la barra de bÃºsqueda, Ã©sta se expande suavemente y despliega un menÃº flotante con las categorÃ­as disponibles.
  - Carrusel interactivo automÃ¡tico y manual con productos sugeridos / mÃ¡s vendidos.
  - SecciÃ³n **"Â¿QuiÃ©nes somos?"** con la historia, pilares de confianza y propuesta de valor de la marca.
- **`tienda.html`**: CatÃ¡logo de productos y resultados de bÃºsqueda:
  - Conectado con la bÃºsqueda y filtros de categorÃ­a de la pÃ¡gina principal.
  - La barra de bÃºsqueda superior en esta pÃ¡gina permite buscar y filtrar de forma directa sin expandir el menÃº de categorÃ­as.
  - Barra de botones/chips para filtrar por categorÃ­a con un solo clic y contador de resultados en vivo.
- **`producto.html`**: Ficha tÃ©cnica y detalle del producto:
  - Carga dinÃ¡mica del producto por ID (`?id=X`).
  - GalerÃ­a con visor de imagen principal y miniaturas interactivas para cambiar de toma.
  - DescripciÃ³n, selector de cantidad, precio y precio de descuento.
  - **BotÃ³n "Comprar Ahora (Ticket WhatsApp)"**: Simula la compra y abre un pop-up con diseÃ±o de ticket/recibo que confirma el envÃ­o del ticket por WhatsApp.
  - BotÃ³n para agregar al carrito.
- **`carrito.html`**: PÃ¡gina completa de revisiÃ³n del carrito:
  - Tabla de productos agregados, ajuste de cantidades, eliminaciÃ³n y resumen de totales.
  - BotÃ³n para simular la compra de toda la orden y generar el ticket para WhatsApp.
- **`productos.js`**: Base de datos centralizada y modular en JavaScript. Permite modificar fÃ¡cilmente los productos, categorÃ­as, imÃ¡genes, precios y descripciones para cualquier tipo de negocio.
- **`style.css`**: Hoja de estilos con variables CSS, tipografÃ­as modernas (*Anton* y *Space Grotesk*), drawer lateral offcanvas, pop-up de ticket y diseÃ±o 100% responsivo para mÃ³vil, tablet y escritorio.
- **`script.js`**: LÃ³gica de interacciÃ³n (carrusel con autoplay, buscador expandible, filtrado en tiempo real, persistencia del carrito con `localStorage`, drawer lateral y generador de tickets).
- **`.nojekyll`**: Archivo que desactiva el procesamiento de Jekyll en GitHub Pages para servir los archivos HTML, CSS y JS planos sin demoras ni omisiones.

---

## ðŸš€ CÃ³mo utilizar y personalizar la plantilla

1. **Abrir en el navegador:**
   - Puedes abrir directamente [`index.html`](file:///c:/Users/jonat/Documents/GitHub/PaginaWeb/index.html) en cualquier navegador (Chrome, Edge, Firefox, Safari) o mediante una extensiÃ³n como *Live Server*.
2. **Modificar productos:**
   - Abre [`productos.js`](file:///c:/Users/jonat/Documents/GitHub/PaginaWeb/productos.js) y edita el arreglo `PRODUCTOS` para aÃ±adir tus propios artÃ­culos, imÃ¡genes, precios y categorÃ­as.
3. **Conectar WhatsApp real en el futuro:**
   - En [`script.js`](file:///c:/Users/jonat/Documents/GitHub/PaginaWeb/script.js), dentro de la funciÃ³n `mostrarTicketModal`, puedes reemplazar el comportamiento simulado por un enlace directo hacia la API de WhatsApp:
     ```javascript
     const mensaje = encodeURIComponent(`Hola, quiero confirmar mi pedido ${ticketId}:\n${resumen}\nTotal: $${total}`);
     window.open(`https://wa.me/TUNUMERODETELEFONO?text=${mensaje}`, '_blank');
     ```


