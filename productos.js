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
    precioAnterior: 349.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Pantalón de pijama suave, cómodo y térmico para descanso diario.",
    descripcionLarga: "Confeccionado en tela ultra suave con cintura elástica ajustable. Ideal para descansar en casa con máxima comodidad y ligereza."
  },
  {
    id: 2,
    nombre: "Conjunto Brooklyn",
    categoria: "Ropa",
    precio: 189.00,
    precioAnterior: 229.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Conjunto urbano estilo Brooklyn de dos piezas.",
    descripcionLarga: "Diseño moderno y relajado de estilo urbano. Incluye sudadera/playera y pantalón a juego con excelente corte y acabado."
  },
  {
    id: 3,
    nombre: "Malla Negra",
    categoria: "Ropa",
    precio: 79.00,
    precioAnterior: 99.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Malla negra ajustada con elástico de alta resistencia.",
    descripcionLarga: "Leggings versátiles de tono negro intenso, ideales para ejercicio o combinación casual. No se trasluce y ofrece ajuste ergonómico."
  },
  {
    id: 4,
    nombre: "Blusa Azul",
    categoria: "Ropa",
    precio: 150.00,
    precioAnterior: 180.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Blusa casual tono azul cielo de tacto ligero y fresco.",
    descripcionLarga: "Prenda ligera con caída suave, cuello cómodo y mangas con acabado estilizado. Perfecta para el día a día."
  },
  {
    id: 5,
    nombre: "Abrigo",
    categoria: "Ropa",
    precio: 319.00,
    precioAnterior: 389.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Abrigo térmico de temporada con cierre y forro confortable.",
    descripcionLarga: "Protección ideal contra climas fríos. Material resistente al viento con bolsillos funcionales y forro interno cálido."
  },
  {
    id: 6,
    nombre: "Blusa Azul Marino",
    categoria: "Ropa",
    precio: 119.00,
    precioAnterior: 145.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Blusa elegante en azul marino de corte regular.",
    descripcionLarga: "Color sobrio y combinable, confeccionada en tejido suave con costuras reforzadas para uso prolongado."
  },
  {
    id: 7,
    nombre: "Blusas Térmicas Colores",
    categoria: "Ropa",
    precio: 139.00,
    precioAnterior: 169.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Blusas térmicas de manga larga en variedad de colores.",
    descripcionLarga: "Interior afelpado ultra suave que conserva el calor corporal sin perder flexibilidad. Disponibles en amplia gama de tonalidades."
  },

  // ==================== 2. PAPELERÍA ====================
  {
    id: 8,
    nombre: "Agenda",
    categoria: "Papelería",
    precio: 115.00,
    precioAnterior: 140.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Agenda planificadora con pasta dura y hojas fechadas.",
    descripcionLarga: "Organizador personal ideal para notas, citas y proyectos. Incluye separador de listón, calendario anual y secciones de notas."
  },
  {
    id: 9,
    nombre: "Colores 36 Lápices",
    categoria: "Papelería",
    precio: 139.00,
    precioAnterior: 165.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Caja con 36 lápices de colores de punta resistente y suave trazo.",
    descripcionLarga: "Colores vivos y gran poder cubriente. Minas gruesas de 3.3mm resistentes a caídas, ideales para dibujo artístico y escolar."
  },
  {
    id: 10,
    nombre: "Sacapuntas 100 Pzas",
    categoria: "Papelería",
    precio: 199.00,
    precioAnterior: 239.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1585336261026-614c81061f5f?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Paquete mayoreo con 100 sacapuntas metálicos/plásticos surtidos.",
    descripcionLarga: "Cuchillas de acero afiladas de larga duración para punta uniforme. Excelente para surtir negocios, escuelas y talleres."
  },
  {
    id: 11,
    nombre: "Marca Texto 4 Pzas",
    categoria: "Papelería",
    precio: 49.50,
    precioAnterior: 65.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1580569214296-5cf2ebe6698e?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Blíster con 4 resaltadores fluorescentes en tonos variados.",
    descripcionLarga: "Tinta de secado rápido que no mancha ni traspasa el papel. Punta biselada para trazos delgados y gruesos."
  },
  {
    id: 12,
    nombre: "Cinta Adhesiva 36 Pzas",
    categoria: "Papelería",
    precio: 819.00,
    precioAnterior: 950.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Paquete con 36 rollos de cinta adhesiva transparente de alto agarre.",
    descripcionLarga: "Cinta canela o transparente multiusos con adhesivo acrílico extra fuerte, ideal para embalaje, oficinas y envíos."
  },
  {
    id: 13,
    nombre: "Pizarrón 25x35 (72 Pzas)",
    categoria: "Papelería",
    precio: 4680.00,
    precioAnterior: 5200.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Caja con 72 pizarrones individuales de 25x35 cm para plumón borrable.",
    descripcionLarga: "Pizarrones portátiles ideales para educación preescolar, primaria y dinámicas interactivas. Marco plástico resistente."
  },
  {
    id: 14,
    nombre: "Juego de Geometría (80 Pzas)",
    categoria: "Papelería",
    precio: 4800.00,
    precioAnterior: 5400.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Caja mayoreo con 80 juegos de geometría completos.",
    descripcionLarga: "Cada juego incluye regla de 30cm, escuadra de 45°, escuadra de 60°, transportador y compás en estuche individual."
  },
  {
    id: 15,
    nombre: "Regla Caja 1200 Pzas",
    categoria: "Papelería",
    precio: 14400.00,
    precioAnterior: 16000.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Caja máster con 1200 reglas escolares graduadas de 30 cm.",
    descripcionLarga: "Presentación por mayoreo para distribuidoras y papelerías. Material plástico flexible y números de alta visibilidad."
  },
  {
    id: 16,
    nombre: "Plumón Acrílico 48 Pzas",
    categoria: "Papelería",
    precio: 180.00,
    precioAnterior: 220.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Paquete con 48 marcadores de tinta acrílica para múltiples superficies.",
    descripcionLarga: "Pintura al agua de alto cubrimiento sobre papel, vidrio, plástico, tela y cerámica. Trazos intensos y duraderos."
  },
  {
    id: 17,
    nombre: "Corrector Líquido 48 Pzas",
    categoria: "Papelería",
    precio: 189.00,
    precioAnterior: 230.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Caja expositora con 48 piezas de corrector líquido de secado rápido.",
    descripcionLarga: "Fórmula de secado instantáneo con aplicador de punta metálica de precisión. Cobertura uniforme en una sola pasada."
  },
  {
    id: 18,
    nombre: "Colores 12 Lápices",
    categoria: "Papelería",
    precio: 40.00,
    precioAnterior: 50.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Caja de 12 lápices de colores básicos para uso escolar.",
    descripcionLarga: "Madera suave fácil de tajar con minas pigmentadas. Esencial para la lista escolar diaria."
  },
  {
    id: 19,
    nombre: "Colores 12 Lápices 4.0",
    categoria: "Papelería",
    precio: 49.00,
    precioAnterior: 60.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Caja con 12 lápices de colores con mina jumbo gruesa de 4.0 mm.",
    descripcionLarga: "Mina ultra resistente a la presión infantil. Cobertura rápida y colores intensos para primeros trazos."
  },
  {
    id: 20,
    nombre: "Colores 24 Lápices",
    categoria: "Papelería",
    precio: 99.00,
    precioAnterior: 120.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Caja con 24 lápices de colores con tonos extendidos y metálicos.",
    descripcionLarga: "Gama completa de matices para sombreados y degradados artísticos. Suaves al contacto y resistentes al desprendimiento."
  },
  {
    id: 21,
    nombre: "Llavero Sílabas",
    categoria: "Papelería",
    precio: 39.00,
    precioAnterior: 49.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80"
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
    precioAnterior: 379.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Termo de acero inoxidable con sensor de temperatura LED en la tapa.",
    descripcionLarga: "Conserva bebidas calientes o frías hasta por 12 horas. Pantalla táctil impermeable que muestra la temperatura exacta en tiempo real."
  },
  {
    id: 23,
    nombre: "Termodiseños",
    categoria: "Vasos y Termos",
    precio: 99.00,
    precioAnterior: 129.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Termo portátil con estampados decorativos y tapa hermética.",
    descripcionLarga: "Estilo ligero y divertido con variedad de patrones modernos. Cierre hermético antiderrame ideal para oficina, escuela o gimnasio."
  },
  {
    id: 24,
    nombre: "Vasos Diseño",
    categoria: "Vasos y Termos",
    precio: 119.00,
    precioAnterior: 145.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
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
    precioAnterior: 99.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Mochila ligera tipo saco con jareta para dulces, eventos o paseos.",
    descripcionLarga: "Práctica mochila de tela lavable con cordones resistentes. Excelente para fiestas infantiles, dulceros o uso escolar ligero."
  },
  {
    id: 26,
    nombre: "Bolsa c/Cierre",
    categoria: "Bolsas y Mochilas",
    precio: 59.00,
    precioAnterior: 75.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Bolsa multiusos con cremallera reforzada y asas largas.",
    descripcionLarga: "Segura y espaciosa para transportar objetos personales. Cierre superior completo que resguarda tus pertenencias."
  },
  {
    id: 27,
    nombre: "Bolsa Eco",
    categoria: "Bolsas y Mochilas",
    precio: 59.00,
    precioAnterior: 75.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Bolsa ecológica de tela biodegradable de gran resistencia.",
    descripcionLarga: "Alternativa sustentable a las bolsas de plástico tradicionales. Soporta hasta 15 kg de carga y es 100% lavable."
  },
  {
    id: 28,
    nombre: "Bolsa Reutilizable",
    categoria: "Bolsas y Mochilas",
    precio: 39.00,
    precioAnterior: 49.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Bolsa compacta plegable para compras cotidianas de mandado.",
    descripcionLarga: "Se pliega en un bolsillo pequeño para llevar en cualquier lugar. Tejido de polipropileno ligero y fácil de limpiar."
  },
  {
    id: 29,
    nombre: "Bolsa Reco Animales",
    categoria: "Bolsas y Mochilas",
    precio: 45.00,
    precioAnterior: 59.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Bolsa de compras con estampados divertidos de animales.",
    descripcionLarga: "Diseño tierno y alegre con costuras perimetrales reforzadas. Asas anchas que no lastiman las manos al cargar peso."
  },
  {
    id: 30,
    nombre: "Bolsa Flores",
    categoria: "Bolsas y Mochilas",
    precio: 49.00,
    precioAnterior: 65.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
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
    precioAnterior: 85.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Trapo de microfibra de alta densidad para limpieza sin rayas.",
    descripcionLarga: "Atrapa polvo, grasa y líquidos sin dejar pelusas. Apto para pantallas, cristales, autos y superficies delicadas."
  },
  {
    id: 32,
    nombre: "Jgo Trapitos 12 Pzas",
    categoria: "Trapos y Toallas",
    precio: 30.00,
    precioAnterior: 40.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Paquete económico con 12 paños de limpieza multiusos.",
    descripcionLarga: "Excelente absorbencia y rápido secado para uso continuo en cocina y labores del hogar."
  },
  {
    id: 33,
    nombre: "Trapitos Frutas",
    categoria: "Trapos y Toallas",
    precio: 25.00,
    precioAnterior: 35.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Paños de cocina decorados con figuras frutales.",
    descripcionLarga: "Aportan color a tu cocina a la vez que garantizan secado eficaz de vajillas y manos."
  },
  {
    id: 34,
    nombre: "Trapito de Manos 4 Pzas",
    categoria: "Trapos y Toallas",
    precio: 60.00,
    precioAnterior: 75.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Set de 4 toallitas absorbentes para manos con ojal para colgar.",
    descripcionLarga: "Algodón suave de secado rápido con cordel integrado para colocar en ganchos de baño o cocina."
  },
  {
    id: 35,
    nombre: "Toalla de Mano 5 Pzas",
    categoria: "Trapos y Toallas",
    precio: 75.00,
    precioAnterior: 95.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Paquete con 5 toallas de mano afelpadas de tamaño estándar.",
    descripcionLarga: "Tejido rizado 100% algodón que absorbe rápidamente la humedad con textura esponjosa y agradable."
  },
  {
    id: 36,
    nombre: "Trapitos Animales 12 Pzas",
    categoria: "Trapos y Toallas",
    precio: 65.00,
    precioAnterior: 80.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Set de 12 paños decorados con tiernos diseños de animalitos.",
    descripcionLarga: "Ideal para la rutina de limpieza diaria o para la lonchera y manos de los niños."
  },
  {
    id: 37,
    nombre: "Toalla Zigzag",
    categoria: "Trapos y Toallas",
    precio: 48.00,
    precioAnterior: 60.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Toalla con patrón geométrico en zigzag moderno.",
    descripcionLarga: "Diseño estético con cenefa tejida que complementa la decoración de cualquier baño de visitas."
  },
  {
    id: 38,
    nombre: "Trapitos de Mano Flores",
    categoria: "Trapos y Toallas",
    precio: 35.00,
    precioAnterior: 45.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Paños de mano con delicados bordados florales.",
    descripcionLarga: "Textura suave para manos y rostro, confeccionados con materiales duraderos que no pierden suavidad."
  },
  {
    id: 39,
    nombre: "Bata de Baño",
    categoria: "Trapos y Toallas",
    precio: 89.00,
    precioAnterior: 119.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Bata de baño absorbente unisex con cinturón ajustable.",
    descripcionLarga: "Sal de la ducha con total confort. Tejido afelpado de alto gramaje con bolsillos frontales y ajuste ceñido."
  },
  {
    id: 40,
    nombre: "Toalla Monarca",
    categoria: "Trapos y Toallas",
    precio: 89.00,
    precioAnterior: 110.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Toalla decorativa con motivos inspirados en mariposas monarca.",
    descripcionLarga: "Colores vivos y excelente capacidad de absorción para baño o alberca. Suavidad prolongada tras múltiples lavadas."
  },
  {
    id: 41,
    nombre: "Toalla Colores (2 Pzas)",
    categoria: "Trapos y Toallas",
    precio: 109.00,
    precioAnterior: 139.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Dúo de toallas medianas en tonos alegres combinados.",
    descripcionLarga: "Incluye dos toallas de cuerpo medio con tacto esponjoso y secado rápido para la rutina de toda la familia."
  },
  {
    id: 42,
    nombre: "Toalla de Baño",
    categoria: "Trapos y Toallas",
    precio: 87.00,
    precioAnterior: 110.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Toalla de baño de cuerpo completo 100% algodón.",
    descripcionLarga: "Dimensiones generosas para envolverse cómodamente al salir de la ducha. Excelente resistencia y absorción."
  },
  {
    id: 43,
    nombre: "Toalla Estándar",
    categoria: "Trapos y Toallas",
    precio: 105.00,
    precioAnterior: 130.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Toalla premium de algodón peinado con cenefa decorativa.",
    descripcionLarga: "Calidad hotelera de secado envolvente. Conserva su textura esponjosa y brillo después de continuas lavadas."
  },
  {
    id: 44,
    nombre: "Toalla Medio Baño (2 Pzas)",
    categoria: "Trapos y Toallas",
    precio: 99.00,
    precioAnterior: 125.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
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
