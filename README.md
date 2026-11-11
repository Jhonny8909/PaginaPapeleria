# Plantilla E-commerce con Simulacion de Ticket por WhatsApp

Plantilla web moderna, responsiva y modular para tiendas en linea donde la compra y el contacto se formalizan a traves de WhatsApp.

## Despliegue en GitHub Pages

Para publicar tu pagina web en GitHub Pages de forma gratuita:

### Opcion A (Recomendada y mas rapida): Desde la rama `main`
1. Sube los cambios a tu repositorio en GitHub:
   ```bash
   git add .
   git commit -m "Estructurar archivos para despliegue en GitHub Pages"
   git push origin main
   ```
2. Ve a tu repositorio en GitHub: `https://github.com/Jhonny8909/PaginaPapeleria`.
3. Haz clic en la pestana **Settings** (Configuracion) arriba a la derecha.
4. En el menu lateral izquierdo, haz clic en **Pages** (en la seccion *Code and automation*).
5. En **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` y en la carpeta elige `/ (root)`.
   - Haz clic en **Save** (Guardar).
6. En un par de minutos, tu sitio web estara activo en:
  **`https://Jhonny8909.github.io/PaginaPapeleria/`**

### Opcion B: Mediante GitHub Actions
El repositorio ya incluye el flujo automatizado en `.github/workflows/deploy.yml`. Solo debes ir a **Settings** -> **Pages** -> en **Source** elegir **GitHub Actions**.

---

## Estructura del Proyecto

- **`index.html`**: Pagina principal del sitio:
  - Header con logo, enlace a la tienda, boton de carrito con contador dinamico y buscador interactivo.
  - Al hacer clic en la barra de busqueda, esta se expande suavemente y despliega un menu flotante con las categorias disponibles.
  - Carrusel interactivo automatico y manual con productos sugeridos / mas vendidos.
  - Carrusel **Otros productos** con hasta 12 productos no destacados elegidos aleatoriamente al entrar a la pagina.
- **`tienda.html`**: Catalogo de productos y resultados de busqueda:
  - Conectado con la busqueda y filtros de categoria de la pagina principal.
  - La barra de busqueda superior en esta pagina permite buscar y filtrar de forma directa sin expandir el menu de categorias.
  - Barra de botones/chips para filtrar por categoria con un solo clic y contador de resultados en vivo.
- **`producto.html`**: Ficha tecnica y detalle del producto:
  - Carga dinamica del producto por ID (`?id=X`).
  - Galeria con visor de imagen principal y miniaturas interactivas para cambiar de toma.
  - Descripcion, selector de cantidad, precio y precio de descuento.
  - **Boton "Comprar Ahora (Ticket WhatsApp)"**: Simula la compra y abre un pop-up con diseno de ticket/recibo que confirma el envio del ticket por WhatsApp.
  - Boton para agregar al carrito.
- **`carrito.html`**: Pagina completa de revision del carrito:
  - Tabla de productos agregados, ajuste de cantidades, eliminacion y resumen de totales.
  - Boton para simular la compra de toda la orden y generar el ticket para WhatsApp.
- **`productos.js`**: Base de datos centralizada y modular en JavaScript. Permite modificar facilmente los productos, categorias, imagenes, precios y descripciones para cualquier tipo de negocio.
- **`style.css`**: Hoja de estilos con variables CSS, tipografias modernas (*Anton* y *Space Grotesk*), drawer lateral offcanvas, pop-up de ticket y diseno 100% responsivo para movil, tablet y escritorio.
- **`script.js`**: Logica de interaccion (carrusel con autoplay, buscador expandible, filtrado en tiempo real, persistencia del carrito con `localStorage`, drawer lateral y generador de tickets).
- **`.nojekyll`**: Archivo que desactiva el procesamiento de Jekyll en GitHub Pages para servir los archivos HTML, CSS y JS planos sin demoras ni omisiones.

---
