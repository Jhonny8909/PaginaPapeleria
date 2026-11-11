// ============================================================
// CATÁLOGO DE PRODUCTOS - BASE DE DATOS ACTUALIZADA
// Generada a partir del catálogo comercial del cliente
// ============================================================

const CATEGORIAS = [
  "Ropa",
  "Papelería",
  "Vasos y Termos",
  "Bolsas y Mochilas",
  "Trapos y Toallas"
];

// Íconos representativos para cada categoría
const ICONOS_CATEGORIAS = {
  "Ropa": "👗",
  "Papelería": "✏️",
  "Vasos y Termos": "🥤",
  "Bolsas y Mochilas": "🎒",
  "Trapos y Toallas": "🧼"
};

const PRODUCTOS = [
  // ==================== 1. ROPA ====================
  {
    id: 1,
    nombre: "Pantalón Pijama",
    categoria: "Ropa",
    precio: 299.00,
    destacado: true,
    imagenes: [
      "media/image1.png",
      "media/image2.png",
      "media/image3.png",
      "media/image4.png",
      "media/image5.png",
      "media/image6.png"
    ],
    descripcionCorta: "Pantalón de pijama suave, cómodo y térmico para descanso diario.",
    descripcionLarga: "Confeccionado en tela ultra suave con cintura elástica ajustable. Ideal para descansar en casa con máxima comodidad y ligereza."
  },
  {
    id: 2,
    nombre: "Conjunto Brooklyn",
    categoria: "Ropa",
    precio: 189.00,
    destacado: true,
    imagenes: [
      "media/image7.png"
    ],
    descripcionCorta: "Conjunto urbano estilo Brooklyn de dos piezas.",
    descripcionLarga: "Diseño moderno y relajado de estilo urbano. Incluye sudadera/playera y pantalón a juego con excelente corte y acabado."
  },
  {
    id: 3,
    nombre: "Malla Negra",
    categoria: "Ropa",
    precio: 79.00,
    destacado: false,
    imagenes: [
      "media/image8.png"
    ],
    descripcionCorta: "Malla negra ajustada con elástico de alta resistencia.",
    descripcionLarga: "Leggings versátiles de tono negro intenso, ideales para ejercicio o combinación casual. No se trasluce y ofrece ajuste ergonómico."
  },
  {
    id: 4,
    nombre: "Blusa Azul",
    categoria: "Ropa",
    precio: 150.00,
    destacado: false,
    imagenes: [
      "media/image9.png"
    ],
    descripcionCorta: "Blusa casual tono azul cielo de tacto ligero y fresco.",
    descripcionLarga: "Prenda ligera con caída suave, cuello cómodo y mangas con acabado estilizado. Perfecta para el día a día."
  },
  {
    id: 5,
    nombre: "Abrigo",
    categoria: "Ropa",
    precio: 319.00,
    destacado: true,
    imagenes: [
        "media/image10.png"
      ],
    descripcionCorta: "Abrigo térmico de temporada con cierre y forro confortable.",
    descripcionLarga: "Protección ideal contra climas fríos. Material resistente al viento con bolsillos funcionales y forro interno cálido."
  },
  {
    id: 6,
    nombre: "Blusa Azul Marino",
    categoria: "Ropa",
    precio: 119.00,
    destacado: false,
    imagenes: [
      "media/image11.png"
    ],
    descripcionCorta: "Blusa elegante en azul marino de corte regular.",
    descripcionLarga: "Color sobrio y combinable, confeccionada en tejido suave con costuras reforzadas para uso prolongado."
  },
  {
    id: 7,
    nombre: "Blusas Térmicas Colores",
    categoria: "Ropa",
    precio: 139.00,
    destacado: true,
    imagenes: [
      "media/image12.png"
    ],
    descripcionCorta: "Blusas térmicas de manga larga en colores olivo, índigo, rubí, cocoa y negro.",
    descripcionLarga: "Interior afelpado ultra suave que conserva el calor corporal sin perder flexibilidad. Disponibles en colores olivo, índigo, rubí, cocoa y negro."
  },

  // ==================== 2. PAPELERÍA ====================
  {
    id: 8,
    nombre: "Agenda",
    categoria: "Papelería",
    precio: 115.00,
    destacado: true,
    imagenes: [
      "media/image14.png"
    ],
    descripcionCorta: "Agenda planificadora con pasta dura y hojas fechadas.",
    descripcionLarga: "Organizador personal ideal para notas, citas y proyectos. Incluye separador de listón, calendario anual y secciones de notas."
  },
  {
    id: 9,
    nombre: "Colores 36 Lápices",
    categoria: "Papelería",
    precio: 139.00,
    destacado: true,
    imagenes: [
      "media/image15.png"
    ],
    descripcionCorta: "Caja con 36 lápices de colores de punta resistente y suave trazo.",
    descripcionLarga: "Colores vivos y gran poder cubriente. Minas gruesas de 3.3mm resistentes a caídas, ideales para dibujo artístico y escolar."
  },
  {
    id: 10,
    nombre: "Sacapuntas 100 Pzas",
    categoria: "Papelería",
    precio: 199.00,
    destacado: false,
    imagenes: [
      "media/image16.png"
    ],
    descripcionCorta: "Paquete mayoreo con 100 sacapuntas metálicos/plásticos surtidos.",
    descripcionLarga: "Cuchillas de acero afiladas de larga duración para punta uniforme. Excelente para surtir negocios, escuelas y talleres."
  },
  {
    id: 11,
    nombre: "Marca Texto 4 Pzas",
    categoria: "Papelería",
    precio: 49.50,
    destacado: false,
    imagenes: [
      "media/image17.png"
    ],
    descripcionCorta: "Blíster con 4 resaltadores fluorescentes en tonos variados.",
    descripcionLarga: "Tinta de secado rápido que no mancha ni traspasa el papel. Punta biselada para trazos delgados y gruesos."
  },
  {
    id: 12,
    nombre: "Cinta Adhesiva 36 Pzas",
    categoria: "Papelería",
    precio: 819.00,
    destacado: false,
    imagenes: [
      "media/image18.png"
    ],
    descripcionCorta: "Paquete con 36 rollos de cinta adhesiva transparente de alto agarre.",
    descripcionLarga: "Cinta canela o transparente multiusos con adhesivo acrílico extra fuerte, ideal para embalaje, oficinas y envíos."
  },
  {
    id: 13,
    nombre: "Pizarrón 25x35 (72 Pzas)",
    categoria: "Papelería",
    precio: 4680.00,
    destacado: false,
    imagenes: [
      "media/image19.png"
    ],
    descripcionCorta: "72 pizarrones individuales de 25x35 cm para plumón borrable.",
    descripcionLarga: "Pizarrones portátiles ideales para educación preescolar, primaria y dinámicas interactivas. Marco plástico resistente."
  },
  {
    id: 14,
    nombre: "Juego de Geometría (80 Pzas)",
    categoria: "Papelería",
    precio: 4800.00,
    destacado: false,
    imagenes: [
      "media/image20.png"
    ],
    descripcionCorta: "Caja mayoreo con 80 juegos de geometría completos.",
    descripcionLarga: "Cada juego incluye regla de 30cm, escuadra de 45°, escuadra de 60°, transportador y compás en estuche individual."
  },
  {
    id: 15,
    nombre: "Regla Caja 1200 Pzas",
    categoria: "Papelería",
    precio: 14400.00,
    destacado: false,
    imagenes: [
      "media/image21.png"
    ],
    descripcionCorta: "Caja máster con 1200 reglas escolares graduadas de 30 cm.",
    descripcionLarga: "Presentación por mayoreo para distribuidoras y papelerías. Material plástico flexible y números de alta visibilidad."
  },
  {
    id: 16,
    nombre: "Plumón Acrílico 48 Pzas",
    categoria: "Papelería",
    precio: 180.00,
    destacado: false,
    imagenes: [
      "media/image22.png"
    ],
    descripcionCorta: "Paquete con 48 marcadores de tinta acrílica para múltiples superficies.",
    descripcionLarga: "Pintura al agua de alto cubrimiento sobre papel, vidrio, plástico, tela y cerámica. Trazos intensos y duraderos."
  },
  {
    id: 17,
    nombre: "Corrector Líquido 48 Pzas",
    categoria: "Papelería",
    precio: 189.00,
    destacado: false,
    imagenes: [
      "media/image23.png"
    ],
    descripcionCorta: "Caja expositora con 48 piezas de corrector líquido de secado rápido.",
    descripcionLarga: "Fórmula de secado instantáneo con aplicador de punta metálica de precisión. Cobertura uniforme en una sola pasada."
  },
  {
    id: 18,
    nombre: "Colores 12 Lápices",
    categoria: "Papelería",
    precio: 40.00,
    destacado: false,
    imagenes: [
      "media/image24.png"
    ],
    descripcionCorta: "Caja de 12 lápices de colores básicos para uso escolar.",
    descripcionLarga: "Madera suave fácil de tajar con minas pigmentadas. Esencial para la lista escolar diaria."
  },
  {
    id: 19,
    nombre: "Colores 12 Lápices 4.0",
    categoria: "Papelería",
    precio: 49.00,
    destacado: false,
    imagenes: [
      "media/image25.png"
    ],
    descripcionCorta: "Caja con 12 lápices de colores con mina jumbo gruesa de 4.0 mm.",
    descripcionLarga: "Mina ultra resistente a la presión infantil. Cobertura rápida y colores intensos para primeros trazos."
  },
  {
    id: 20,
    nombre: "Colores 24 Lápices",
    categoria: "Papelería",
    precio: 99.00,
    destacado: false,
    imagenes: [
      "media/image26.png"
    ],
    descripcionCorta: "Caja con 24 lápices de colores con tonos extendidos y metálicos.",
    descripcionLarga: "Gama completa de matices para sombreados y degradados artísticos. Suaves al contacto y resistentes al desprendimiento."
  },
  {
    id: 21,
    nombre: "Llavero Sílabas",
    categoria: "Papelería",
    precio: 39.00,
    destacado: false,
    imagenes: [
      "media/image27.png"
    ],
    descripcionCorta: "Llavero interactivo con tarjetas de sílabas para aprendizaje didáctico.",
    descripcionLarga: "Herramienta educativa compacta para facilitar la lectoescritura en niños. Tarjetas plastificadas de alta resistencia con anilla metálica."
  },

  // ==================== 3. VASOS Y TERMOS ====================
  {
    id: 22,
    nombre: "Termo Digital",
    categoria: "Vasos y Termos",
    precio: 319.00,
    destacado: true,
    imagenes: [
      "media/image28.png"
    ],
    descripcionCorta: "Termo de acero inoxidable con sensor de temperatura LED en la tapa.",
    descripcionLarga: "Conserva bebidas calientes o frías hasta por 12 horas. Pantalla táctil impermeable que muestra la temperatura exacta en tiempo real."
  },
  {
    id: 23,
    nombre: "Termodiseños",
    categoria: "Vasos y Termos",
    precio: 99.00,
    destacado: true,
    imagenes: [
      "media/image29.png"
    ],
    descripcionCorta: "Termo portátil con estampados decorativos y tapa hermética.",
    descripcionLarga: "Estilo ligero y divertido con variedad de patrones modernos. Cierre hermético antiderrame ideal para oficina, escuela o gimnasio."
  },
  {
    id: 24,
    nombre: "Vasos Diseño",
    categoria: "Vasos y Termos",
    precio: 119.00,
    destacado: false,
    imagenes: [
      "media/image30.png"
    ],
    descripcionCorta: "Vaso térmico con popote y tapa antiderrame con diseños creativos.",
    descripcionLarga: "Capacidad de 500ml libre de BPA con doble pared aislante para evitar condensación exterior en bebidas frías."
  },

  // ==================== 4. BOLSAS Y MOCHILAS ====================
  {
    id: 25,
    nombre: "Mochila Dulcera",
    categoria: "Bolsas y Mochilas",
    precio: 79.00,
    destacado: true,
    imagenes: [
      "media/image31.png"
    ],
    descripcionCorta: "Mochila ligera tipo saco con jareta para dulces, eventos o paseos.",
    descripcionLarga: "Práctica mochila de tela lavable con cordones resistentes. Excelente para fiestas infantiles, dulceros o uso escolar ligero."
  },
  {
    id: 26,
    nombre: "Bolsa c/Cierre",
    categoria: "Bolsas y Mochilas",
    precio: 59.00,
    destacado: false,
    imagenes: [
      "media/image32.png"
    ],
    descripcionCorta: "Bolsa multiusos con cremallera reforzada y asas largas.",
    descripcionLarga: "Segura y espaciosa para transportar objetos personales. Cierre superior completo que resguarda tus pertenencias."
  },
  {
    id: 27,
    nombre: "Bolsa Eco",
    categoria: "Bolsas y Mochilas",
    precio: 59.00,
    destacado: false,
    imagenes: [
      "media/image33.png"
    ],
    descripcionCorta: "Bolsa ecológica de tela biodegradable de gran resistencia.",
    descripcionLarga: "Alternativa sustentable a las bolsas de plástico tradicionales. Soporta hasta 15 kg de carga y es 100% lavable."
  },
  {
    id: 28,
    nombre: "Bolsa Reutilizable",
    categoria: "Bolsas y Mochilas",
    precio: 39.00,
    destacado: false,
    imagenes: [
      "media/image34.png"
    ],
    descripcionCorta: "Bolsa compacta plegable para compras cotidianas de mandado.",
    descripcionLarga: "Se pliega en un bolsillo pequeño para llevar en cualquier lugar. Tejido de polipropileno ligero y fácil de limpiar."
  },
  {
    id: 29,
    nombre: "Bolsa Reco Animales",
    categoria: "Bolsas y Mochilas",
    precio: 45.00,
    destacado: false,
    imagenes: [
      "media/image35.png"
    ],
    descripcionCorta: "Bolsa de compras con estampados divertidos de animales.",
    descripcionLarga: "Diseño tierno y alegre con costuras perimetrales reforzadas. Asas anchas que no lastiman las manos al cargar peso."
  },
  {
    id: 30,
    nombre: "Bolsa Flores",
    categoria: "Bolsas y Mochilas",
    precio: 49.00,
    destacado: false,
    imagenes: [
      "media/image36.png"
    ],
    descripcionCorta: "Bolsa tote bag con estampado floral elegante.",
    descripcionLarga: "Estilo fresco y femenino para salidas casuales o compras del día a día. Estampado de alta definición resistente al lavado."
  },

  // ==================== 5. TRAPOS Y TOALLAS ====================
  {
    id: 31,
    nombre: "Trapo Microfibra",
    categoria: "Trapos y Toallas",
    precio: 69.00,
    destacado: true,
    imagenes: [
      "media/image37.png"
    ],
    descripcionCorta: "Trapo de microfibra de alta densidad para limpieza sin rayas.",
    descripcionLarga: "Atrapa polvo, grasa y líquidos sin dejar pelusas. Apto para pantallas, cristales, autos y superficies delicadas."
  },
  {
    id: 32,
    nombre: "Jgo Trapitos 12 Pzas",
    categoria: "Trapos y Toallas",
    precio: 30.00,
    destacado: true,
    imagenes: [
      "media/image38.png"
    ],
    descripcionCorta: "Paquete económico con 12 paños de limpieza multiusos.",
    descripcionLarga: "Excelente absorbencia y rápido secado para uso continuo en cocina y labores del hogar."
  },
  {
    id: 33,
    nombre: " JuegoTrapitos 12 Pzas con diseño de frutas",
    categoria: "Trapos y Toallas",
    precio: 25.00,
    destacado: false,
    imagenes: [
      "media/image39.png"
    ],
    descripcionCorta: "Paños de cocina decorados con figuras frutales.",
    descripcionLarga: "Aportan color a tu cocina a la vez que garantizan secado eficaz de vajillas y manos."
  },
  {
    id: 34,
    nombre: "Trapito de Manos 4 Pzas",
    categoria: "Trapos y Toallas",
    precio: 60.00,
    destacado: false,
    imagenes: [
      "media/image40.png"
    ],
    descripcionCorta: "Set de 4 toallitas absorbentes para manos con ojal para colgar.",
    descripcionLarga: "Algodón suave de secado rápido con cordel integrado para colocar en ganchos de baño o cocina."
  },
  {
    id: 35,
    nombre: "Toalla de Mano 5 Pzas",
    categoria: "Trapos y Toallas",
    precio: 75.00,
    destacado: false,
    imagenes: [
      "media/image41.png"
    ],
    descripcionCorta: "Paquete con 5 toallas de mano afelpadas de tamaño estándar.",
    descripcionLarga: "Tejido rizado 100% algodón que absorbe rápidamente la humedad con textura esponjosa y agradable."
  },
  {
    id: 36,
    nombre: "Trapitos Animales 12 Pzas",
    categoria: "Trapos y Toallas",
    precio: 65.00,
    destacado: false,
    imagenes: [
      "media/image42.png"
    ],
    descripcionCorta: "Set de 12 paños decorados con tiernos diseños de animalitos.",
    descripcionLarga: "Ideal para la rutina de limpieza diaria o para la lonchera y manos de los niños."
  },
  {
    id: 37,
    nombre: "Toalla Zigzag",
    categoria: "Trapos y Toallas",
    precio: 48.00,
    destacado: false,
    imagenes: [
      "media/image43.png"
    ],
    descripcionCorta: "Toalla con patrón geométrico en zigzag moderno.",
    descripcionLarga: "Diseño estético con cenefa tejida que complementa la decoración de cualquier baño de visitas."
  },
  {
    id: 38,
    nombre: "Trapitos de Mano Flores",
    categoria: "Trapos y Toallas",
    precio: 35.00,
    destacado: false,
    imagenes: [
      "media/image44.png"
    ],
    descripcionCorta: "Paños de mano con delicados bordados florales.",
    descripcionLarga: "Textura suave para manos y rostro, confeccionados con materiales duraderos que no pierden suavidad."
  },
  {
    id: 39,
    nombre: "Bata de Baño",
    categoria: "Trapos y Toallas",
    precio: 89.00,
    destacado: true,
    imagenes: [
      "media/image45.png"
    ],
    descripcionCorta: "Bata de baño absorbente unisex con cinturón ajustable.",
    descripcionLarga: "Sal de la ducha con total confort. Tejido afelpado de alto gramaje con bolsillos frontales y ajuste ceñido."
  },
  {
    id: 40,
    nombre: "Toalla Monarca",
    categoria: "Trapos y Toallas",
    precio: 89.00,
    destacado: false,
    imagenes: [
      "media/image46.png"
    ],
    descripcionCorta: "Toalla decorativa con motivos inspirados en mariposas monarca.",
    descripcionLarga: "Colores vivos y excelente capacidad de absorción para baño o alberca. Suavidad prolongada tras múltiples lavadas."
  },
  {
    id: 41,
    nombre: "Toalla Colores (2 Pzas)",
    categoria: "Trapos y Toallas",
    precio: 109.00,
    destacado: false,
    imagenes: [
      "media/image47.png"
    ],
    descripcionCorta: "Dúo de toallas medianas en tonos alegres combinados.",
    descripcionLarga: "Incluye dos toallas de cuerpo medio con tacto esponjoso y secado rápido para la rutina de toda la familia."
  },
  {
    id: 42,
    nombre: "Toalla de Baño",
    categoria: "Trapos y Toallas",
    precio: 87.00,
    destacado: false,
    imagenes: [
      "media/image48.png"
    ],
    descripcionCorta: "Toalla de baño de cuerpo completo 100% algodón.",
    descripcionLarga: "Dimensiones generosas para envolverse cómodamente al salir de la ducha. Excelente resistencia y absorción."
  },
  {
    id: 43,
    nombre: "Toalla Estándar",
    categoria: "Trapos y Toallas",
    precio: 105.00,
    destacado: false,
    imagenes: [
      "media/image49.png"
    ],
    descripcionCorta: "Toalla premium de algodón peinado con cenefa decorativa.",
    descripcionLarga: "Calidad hotelera de secado envolvente. Conserva su textura esponjosa y brillo después de continuas lavadas."
  },
  {
    id: 44,
    nombre: "Toalla Medio Baño (2 Pzas)",
    categoria: "Trapos y Toallas",
    precio: 99.00,
    destacado: false,
    imagenes: [
      "media/image50.png"
    ],
    descripcionCorta: "Juego de 2 toallas de medio baño prácticas y absorbentes.",
    descripcionLarga: "Tamaño práctico ideal para secado de cabello, manos o para llevar al gimnasio o viajes cortos."
  }
];

// Funciones auxiliares para obtener productos
function obtenerProductoPorId(id) {
  return PRODUCTOS.find(p => p.id === parseInt(id, 10)) || null;
}

function filtrarProductos({ termino = "", categoria = "" }) {
  let resultados = PRODUCTOS;

  if (categoria && categoria.trim() !== "" && categoria !== "Todas") {
    resultados = resultados.filter(p => 
      p.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  if (termino && termino.trim() !== "") {
    const query = termino.toLowerCase().trim();
    resultados = resultados.filter(p => 
      p.nombre.toLowerCase().includes(query) ||
      p.categoria.toLowerCase().includes(query) ||
      p.descripcionCorta.toLowerCase().includes(query)
    );
  }

  return resultados;
}

function formatearMoneda(monto) {
  return `$${monto.toFixed(2)}`;
}
