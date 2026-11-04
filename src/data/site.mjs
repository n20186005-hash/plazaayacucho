// Datos compartidos del sitio. Único punto de verdad para constantes de entidad,
// fuentes públicas y el registro de guías (usado por el layout, la navegación y el hub).

export const site = {
  origin: 'https://plazaayacucho.com',
  domain: 'plazaayacucho.com',
  lang: 'es-PE',

  attractionFullName: 'Plaza Mayor de Ayacucho',
  attractionAltName: 'Plaza de Armas de Ayacucho',
  attractionLocalName: 'Plaza Mayor de Huamanga',
  cityName: 'Ayacucho',
  regionName: 'Ayacucho',
  countryName: 'Perú',
  countryCode: 'PE',
  postalCode: '05003',
  latitude: -13.1603789,
  longitude: -74.2257816,

  mapsUrl: 'https://maps.app.goo.gl/LoXftb7yUhBJUgCr9',
  mapsPhone: '+51 985 928 260',
  mapsPhoneHref: '+51985928260',
  mapsRating: '4.5',
  mapsReviews: '19,804',
  mapsPlaceType: 'Parque urbano',
  mapsPlusCode: 'RQQF+RM, Ayacucho, Perú',

  minceturUrl: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=386',
  minceturCatedralUrl: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=1092',
  minceturArcoUrl: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=1118',
  minceturAcuchimayUrl: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=1114',
  minceturWariUrl: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=1125',
  minceturQuinuaCeramicaUrl: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=12950',
  minceturPampaAyacuchoUrl: 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=1947',
  promperuUrl: 'https://target2.promperu.gob.pe/destinos/ayacucho/ciudad-de-ayacucho/plaza-mayor-de-la-ciudad-de-ayacucho',
  commonsUrl: 'https://commons.wikimedia.org/wiki/Ayacucho',
  culturaSemanaSantaUrl: 'https://www.gob.pe/institucion/cultura/noticias/663446-ministerio-de-cultura-declara-patrimonio-cultural-de-la-nacion-a-la-semana-santa-de-ayacucho',
  municipalidadUrl: 'https://www.gob.pe/munihuamanga',

  // Fecha de la última revisión editorial del contenido. Se muestra en cada
  // página, tal como pide el plan de contenidos, y alimenta dateModified.
  lastReviewed: '4 de noviembre de 2026',
  lastReviewedIso: '2026-11-04'
};

// Material fotográfico real y ya verificado en el proyecto (Wikimedia Commons).
export const images = {
  plaza: {
    src: '/images/plaza-mayor-huamanga-wide.jpg',
    alt: 'Plaza Mayor de Huamanga (Plaza Mayor de Ayacucho) con sus portales de piedra',
    caption: 'Plaza Mayor y portales · EduardoZambrano · CC BY-SA 2.0 · 2017-12-26. Encuadre adaptado.',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Plaza_Mayor_de_Huamanga_(25646832758).jpg',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/'
  },
  cathedral: {
    src: '/images/catedral-ayacucho.jpg',
    alt: 'Basílica Catedral de Ayacucho junto a la Plaza Mayor',
    caption: 'Catedral de Ayacucho · EduardoZambrano · CC BY-SA 2.0 · 2017-12-26. Encuadre adaptado.',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Catedral_de_Ayacucho_(25646655978).jpg',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/'
  },
  monument: {
    src: '/images/plaza-armas-monumento.jpg',
    alt: 'Monumento ecuestre a Antonio José de Sucre en la Plaza Mayor de Ayacucho',
    caption: 'Monumento a Sucre · Fer121 · CC BY-SA 4.0 · 2009-08-23. Encuadre adaptado.',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Plaza_de_Armas_-_Ayacucho.JPG',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  }
};

// Hechos usados en varias páginas. Cada dato indica su origen para poder atribuirlo.
export const facts = {
  fundacion: {
    text: '1540, año de la fundación de Huamanga como ciudad española.',
    source: 'Referencia histórica habitual; confirma en MINCETUR antes de citarla por escrito.'
  },
  arcos: {
    text: 'Alrededor de 111 arcos y columnas de piedra repartidos entre los cuatro portales.',
    source: 'MINCETUR, inventario de recursos turísticos.'
  },
  sucre: {
    text: 'Monumento ecuestre a Antonio José de Sucre en el centro de la plaza, con fecha de inauguración en 1924.',
    source: 'MINCETUR, inventario de recursos turísticos.'
  },
  portales: {
    text: 'Cuatro portales: Unión, Constitución, Independencia y Municipal.',
    source: 'Descripción recurrente del conjunto; verifica el nombre de cada arco en fuentes locales.'
  },
  entrada: {
    text: 'Ingreso libre al espacio público de la plaza.',
    source: 'MINCETUR registra el acceso como libre.'
  },
  horario: {
    text: 'Franja de visita recomendada de 06:00 a 21:00 durante todo el año.',
    source: 'MINCETUR. No implica un cierre físico del espacio público.'
  },
  aeropuerto: {
    text: 'Aeropuerto Coronel FAP Alfredo Mendívil Duarte a unos 2,8 km, con referencia de 7 minutos en taxi en condiciones favorables.',
    source: 'MINCETUR. Tiempo orientativo, no garantizado.'
  },
  terminal: {
    text: 'Terminal Terrestre Los Libertadores a unos 3,6 km, con referencia de 12 minutos en taxi.',
    source: 'MINCETUR. Tiempo orientativo, no garantizado.'
  },
  catedral: {
    text: 'Basílica Catedral de Ayacucho a unos 50 m a pie desde la plaza.',
    source: 'MINCETUR.'
  },
  santoDomingo: {
    text: 'Templo de Santo Domingo a unos 100 m a pie desde la plaza.',
    source: 'MINCETUR.'
  },
  arco: {
    text: 'Arco del Triunfo a unos 284 m a pie desde la plaza.',
    source: 'MINCETUR.'
  },
  semanaSanta: {
    text: 'La Semana Santa de Ayacucho fue declarada Patrimonio Cultural de la Nación.',
    source: 'Ministerio de Cultura del Perú.'
  }
};

export const guideGroups = [
  {
    id: 'planifica',
    label: 'Planifica tu visita',
    blurb: 'Transporte, ubicación, horarios, costo y qué ver. Los datos prácticos para decidir la visita.'
  },
  {
    id: 'patrimonio',
    label: 'Historia, arquitectura y patrimonio',
    blurb: 'Portales, monumentos, templos vecinos y el contexto histórico del centro de Huamanga.'
  },
  {
    id: 'viajero',
    label: 'Recorridos y necesidades del viajero',
    blurb: 'Rutas por duración, viaje con niños, accesibilidad, temporada de lluvias y preguntas frecuentes.'
  }
];

export const guides = [
  // ---- Grupo 1: planifica tu visita ----
  {
    slug: 'como-llegar',
    group: 'planifica',
    h1: 'Cómo llegar a la Plaza Mayor de Ayacucho',
    title: 'Cómo llegar a la Plaza de Armas de Ayacucho: guía práctica',
    description: 'Cómo llegar a la Plaza Mayor de Ayacucho desde el aeropuerto, el terminal terrestre o el centro histórico, con distancias y referencias de MINCETUR.',
    summary: 'Opciones de llegada desde el aeropuerto, el terminal terrestre y el propio centro histórico.'
  },
  {
    slug: 'ubicacion-mapa',
    group: 'planifica',
    h1: 'Ubicación y mapa de la Plaza Mayor de Ayacucho',
    title: 'Ubicación y mapa de la Plaza Mayor de Ayacucho, Perú',
    description: 'Dónde está la Plaza Mayor de Ayacucho: coordenadas, código postal, plus code, cómo leer el mapa y qué rodea el centro histórico.',
    summary: 'Coordenadas, plus code, mapa interactivo y lectura del entorno inmediato.'
  },
  {
    slug: 'horarios-visita',
    group: 'planifica',
    h1: 'Horarios y mejor momento para visitar la plaza',
    title: 'Horarios y mejor momento para visitar la Plaza Mayor de Ayacucho',
    description: 'Franja de visita recomendada por MINCETUR, cómo se comportan la luz y el ambiente a lo largo del día, y qué horarios pertenecen a otros recintos.',
    summary: 'La franja recomendada, las horas de mejor luz y la diferencia con los recintos vecinos.'
  },
  {
    slug: 'entrada-gratis',
    group: 'planifica',
    h1: '¿La Plaza Mayor de Ayacucho es gratis?',
    title: '¿La Plaza de Armas de Ayacucho es gratis? Entrada y costos',
    description: 'El acceso al espacio público de la Plaza Mayor de Ayacucho es libre. Qué puede tener costo aparte: templos, museos y visitas guiadas.',
    summary: 'Acceso libre al espacio público y qué servicios pueden cobrar por separado.'
  },
  {
    slug: 'que-ver',
    group: 'planifica',
    h1: 'Qué ver en la Plaza Mayor de Ayacucho',
    title: 'Qué ver en la Plaza de Armas de Ayacucho: portales y monumentos',
    description: 'Qué ver en la Plaza Mayor de Ayacucho: los cuatro portales, el monumento a Sucre, los jardines y la relación con la Catedral y el centro histórico.',
    summary: 'Portales, monumento a Sucre, jardines y edificios que enmarcan el conjunto.'
  },
  {
    slug: 'historia',
    group: 'planifica',
    h1: 'Historia de la Plaza Mayor de Huamanga',
    title: 'Historia de la Plaza Mayor de Huamanga (Ayacucho)',
    description: 'Historia de la Plaza Mayor de Huamanga: del trazado colonial de 1540 al centro cívico actual, con los datos que sí están documentados y las fuentes para verificarlos.',
    summary: 'Del trazado colonial al centro cívico actual, con sus nombres históricos.'
  },
  {
    slug: 'desde-aeropuerto',
    group: 'planifica',
    h1: 'Cómo llegar desde el aeropuerto de Ayacucho',
    title: 'Del aeropuerto de Ayacucho a la Plaza Mayor: cómo llegar',
    description: 'Traslado desde el Aeropuerto Coronel FAP Alfredo Mendívil Duarte hasta la Plaza Mayor de Ayacucho: distancia, referencia de tiempo y qué esperar al llegar.',
    summary: 'Traslado desde el Aeropuerto Coronel FAP Alfredo Mendívil Duarte.'
  },
  {
    slug: 'desde-terminal-terrestre',
    group: 'planifica',
    h1: 'Del terminal terrestre a la Plaza Mayor de Ayacucho',
    title: 'Del terminal terrestre a la Plaza de Armas de Ayacucho',
    description: 'Cómo llegar del Terminal Terrestre Los Libertadores a la Plaza Mayor de Ayacucho: distancia de referencia, taxi, y cómo orientarse al entrar al centro histórico.',
    summary: 'Traslado desde el Terminal Terrestre Los Libertadores al centro histórico.'
  },
  {
    slug: 'lugares-cerca',
    group: 'planifica',
    h1: 'Lugares turísticos cerca de la Plaza Mayor de Ayacucho',
    title: 'Lugares turísticos cerca de la Plaza de Armas de Ayacucho',
    description: 'Qué hay cerca de la Plaza Mayor de Ayacucho: Catedral, Templo de Santo Domingo, Arco del Triunfo y museos, con las distancias de referencia de MINCETUR.',
    summary: 'Catedral, Santo Domingo, Arco del Triunfo y museos del entorno.'
  },
  {
    slug: 'ruta-a-pie',
    group: 'planifica',
    h1: 'Ruta a pie desde la Plaza Mayor de Ayacucho',
    title: 'Ruta a pie desde la Plaza Mayor de Ayacucho: qué ver caminando',
    description: 'Un recorrido a pie por el centro histórico de Ayacucho tomando la Plaza Mayor como punto de partida, con las distancias de referencia de MINCETUR.',
    summary: 'Recorrido caminando por el centro histórico con la plaza como punto de partida.'
  },
  {
    slug: 'catedral-ayacucho',
    group: 'planifica',
    h1: 'Catedral de Ayacucho desde la Plaza Mayor',
    title: 'Catedral de Ayacucho: guía desde la Plaza Mayor',
    description: 'Cómo visitar la Basílica Catedral de Ayacucho desde la Plaza Mayor: ubicación, distancia a pie, su papel en la Semana Santa y qué confirmar antes de ir.',
    summary: 'La iglesia matriz junto a la plaza: ubicación, distancia y papel en la Semana Santa.'
  },
  {
    slug: 'plaza-de-armas-de-noche',
    group: 'planifica',
    h1: 'Plaza Mayor de Ayacucho de noche',
    title: 'Plaza de Armas de Ayacucho de noche: qué esperar',
    description: 'Cómo es la Plaza Mayor de Ayacucho al anochecer: iluminación de fachadas, ambiente local, fotografía nocturna y qué precauciones conviene tomar.',
    summary: 'Iluminación, ambiente y fotografía en la franja nocturna.'
  },

  // ---- Grupo 2: historia, arquitectura y patrimonio ----
  {
    slug: 'monumento-antonio-jose-de-sucre',
    group: 'patrimonio',
    h1: 'Monumento a Antonio José de Sucre',
    title: 'Monumento a Sucre en la Plaza Mayor de Ayacucho',
    description: 'El monumento ecuestre a Antonio José de Sucre en el centro de la Plaza Mayor de Ayacucho: qué representa, de cuándo data y cómo se lee en el conjunto.',
    summary: 'La escultura ecuestre que ordena el centro de la plaza.'
  },
  {
    slug: 'arquitectura-portales',
    group: 'patrimonio',
    h1: 'Arquitectura de los portales de la plaza',
    title: 'Arquitectura de los portales de la Plaza Mayor de Ayacucho',
    description: 'Los portales de la Plaza Mayor de Ayacucho: arcos de piedra, balcones de madera, teja de arcilla y la lectura arquitectónica del conjunto.',
    summary: 'Arcos, balcones y cubiertas: cómo se construyó y se lee el conjunto.'
  },
  {
    slug: 'portales-plaza-mayor',
    group: 'patrimonio',
    h1: 'Los cuatro portales de la Plaza Mayor',
    title: 'Portales de la Plaza Mayor de Ayacucho: recorrido por los cuatro frentes',
    description: 'Recorrido por los portales Unión, Constitución, Independencia y Municipal de la Plaza Mayor de Ayacucho, frente a frente.',
    summary: 'Unión, Constitución, Independencia y Municipal, frente a frente.'
  },
  {
    slug: 'plaza-mayor-o-plaza-de-armas',
    group: 'patrimonio',
    h1: '¿Plaza Mayor o Plaza de Armas?',
    title: '¿Plaza Mayor o Plaza de Armas en Ayacucho? Los nombres del mismo espacio',
    description: 'Por qué el mismo espacio aparece como Plaza Mayor de Ayacucho, Plaza de Armas de Ayacucho y Plaza Mayor de Huamanga, y cuál conviene usar.',
    summary: 'Los nombres históricos del mismo espacio y cuál conviene usar en cada contexto.'
  },
  {
    slug: 'centro-historico-huamanga',
    group: 'patrimonio',
    h1: 'Centro histórico de Huamanga',
    title: 'Centro histórico de Huamanga: qué es y qué incluye',
    description: 'Qué abarca el centro histórico de Huamanga alrededor de la Plaza Mayor de Ayacucho: calles, templos, casonas y edificios institucionales.',
    summary: 'El tejido urbano que rodea la plaza y le da contexto.'
  },
  {
    slug: 'casonas-coloniales',
    group: 'patrimonio',
    h1: 'Casonas coloniales del centro de Ayacucho',
    title: 'Casonas coloniales de Ayacucho: qué mirar en el centro histórico',
    description: 'Cómo reconocer las casonas coloniales del centro de Ayacucho al caminar desde la Plaza Mayor: patios, portadas, balcones y qué se puede ver y qué no.',
    summary: 'Cómo reconocer patios, portadas y balcones al caminar por el centro.'
  },
  {
    slug: 'casa-boza-y-solis',
    group: 'patrimonio',
    h1: 'Casa Boza y Solís',
    title: 'Casa Boza y Solís en Ayacucho: qué es y cómo verificarla',
    description: 'Referencia a la Casa Boza y Solís en el centro de Ayacucho: por qué aparece en los listados patrimoniales, qué se puede confirmar y qué conviene verificar.',
    summary: 'Una referencia patrimonial del centro y cómo confirmar su estado actual.'
  },
  {
    slug: 'templo-santo-domingo',
    group: 'patrimonio',
    h1: 'Templo de Santo Domingo',
    title: 'Templo de Santo Domingo de Ayacucho: guía desde la plaza',
    description: 'El Templo de Santo Domingo de Ayacucho visto desde la Plaza Mayor: ubicación, distancia a pie de referencia y su relación con el paisaje religioso del centro.',
    summary: 'El templo histórico del centro, a unos pasos de la plaza.'
  },
  {
    slug: 'templo-san-agustin',
    group: 'patrimonio',
    h1: 'Templo de San Agustín',
    title: 'Templo de San Agustín de Ayacucho: qué confirmar antes de ir',
    description: 'Referencia al Templo de San Agustín en el centro histórico de Ayacucho: cómo ubicarlo y qué datos conviene confirmar antes de la visita.',
    summary: 'Otro templo del centro histórico y qué verificar antes de la visita.'
  },
  {
    slug: 'arco-del-triunfo',
    group: 'patrimonio',
    h1: 'Arco del Triunfo de Ayacucho',
    title: 'Arco del Triunfo de Ayacucho: dónde está y cómo verlo',
    description: 'El Arco del Triunfo de Ayacucho desde la Plaza Mayor: ubicación, distancia a pie de referencia y cómo integrarlo en un recorrido por el centro.',
    summary: 'El hito urbano a unos minutos a pie de la plaza.'
  },
  {
    slug: 'museo-arte-popular-joaquin-lopez-antay',
    group: 'patrimonio',
    h1: 'Museo de Arte Popular Joaquín López Antay',
    title: 'Museo de Arte Popular Joaquín López Antay en Ayacucho',
    description: 'El Museo de Arte Popular Joaquín López Antay en el centro de Ayacucho: qué es, su relación con el arte popular y el retablo ayacuchano, y qué datos conviene confirmar antes de la visita.',
    summary: 'La referencia del arte popular ayacuchano y el retablo, dentro del centro histórico.'
  },
  {
    slug: 'complejo-arqueologico-de-wari',
    group: 'patrimonio',
    h1: 'Complejo Arqueológico Wari',
    title: 'Complejo Arqueológico Wari en Ayacucho: guía de visita',
    description: 'El Complejo Arqueológico Wari, capital prehispánica de la cultura Wari cerca de Ayacucho: qué es, cómo llegar desde la plaza, horario de referencia y qué confirmar antes de ir.',
    summary: 'La capital del primer imperio andino, a unos 22–23 km de la plaza.'
  },
  {
    slug: 'pueblo-de-quinua',
    group: 'patrimonio',
    h1: 'Pueblo de Quinua',
    title: 'Pueblo de Quinua en Ayacucho: guía de visita',
    description: 'El Pueblo de Quinua, cerca de Ayacucho: su cerámica tradicional declarada Patrimonio Cultural de la Nación, el Santuario Histórico de la Pampa de Ayacucho y qué confirmar antes de ir.',
    summary: 'El pueblo artesano y el escenario de la batalla de Ayacucho.'
  },
  {
    slug: 'semana-santa-ayacucho',
    group: 'patrimonio',
    h1: 'Semana Santa de Ayacucho',
    title: 'Semana Santa de Ayacucho: qué es y qué implica visitar la plaza',
    description: 'La Semana Santa de Ayacucho, declarada Patrimonio Cultural de la Nación: por qué se celebra en el centro histórico y qué cambia al visitar la plaza en esas fechas.',
    summary: 'La celebración declarada Patrimonio Cultural de la Nación y su efecto en el centro.'
  },
  {
    slug: 'plaza-mayor-fotografia',
    group: 'patrimonio',
    h1: 'Fotografía en la Plaza Mayor de Ayacucho',
    title: 'Fotografía en la Plaza Mayor de Ayacucho: luz y encuadres',
    description: 'Cómo fotografiar la Plaza Mayor de Ayacucho: horarios de luz, encuadres con los portales y la Catedral, y cuidados al fotografiar un espacio público en uso.',
    summary: 'Horarios de luz, encuadres con portales y cuidados al fotografiar el espacio público.'
  },

  // ---- Grupo 3: recorridos y necesidades del viajero ----
  {
    slug: 'itinerario-1-hora',
    group: 'viajero',
    h1: 'Itinerario de 1 hora desde la plaza',
    title: 'Itinerario de 1 hora en la Plaza Mayor de Ayacucho',
    description: 'Qué alcanza a ver en una hora en la Plaza Mayor de Ayacucho: recorrido corto por portales, monumento y Catedral, pensado para escalas breves.',
    summary: 'Un recorrido corto por portales, monumento y Catedral.'
  },
  {
    slug: 'itinerario-medio-dia',
    group: 'viajero',
    h1: 'Itinerario de medio día en el centro histórico',
    title: 'Medio día en el centro histórico de Huamanga desde la plaza',
    description: 'Plan de medio día desde la Plaza Mayor de Ayacucho: plaza, Catedral, Santo Domingo, Arco del Triunfo y una pausa en los portales.',
    summary: 'Plaza, templos vecinos, Arco del Triunfo y una pausa en los portales.'
  },
  {
    slug: 'itinerario-un-dia',
    group: 'viajero',
    h1: 'Itinerario de un día con base en la plaza',
    title: 'Un día en Ayacucho tomando la Plaza Mayor como base',
    description: 'Cómo organizar un día en Ayacucho desde la Plaza Mayor: centro histórico por la mañana y una salida regional por la tarde, con criterios para elegir y confirmar.',
    summary: 'Centro histórico y una salida regional, con criterios para organizarlo.'
  },
  {
    slug: 'con-ninos',
    group: 'viajero',
    h1: 'Visitar la plaza con niños',
    title: 'Visitar la Plaza Mayor de Ayacucho con niños',
    description: 'Cómo plantear la visita a la Plaza Mayor de Ayacucho con niños: espacios abiertos, tiempos cortos, qué mirar y qué precauciones tomar.',
    summary: 'Espacios abiertos, tiempos cortos y qué mirar con niños.'
  },
  {
    slug: 'adultos-mayores',
    group: 'viajero',
    h1: 'Visitar la plaza siendo adulto mayor',
    title: 'Visitar la Plaza Mayor de Ayacucho como adulto mayor',
    description: 'Consideraciones para visitar la Plaza Mayor de Ayacucho siendo adulto mayor: altitud, recorridos cortos, descanso y qué conviene confirmar.',
    summary: 'Altitud, recorridos cortos, descanso y qué conviene confirmar.'
  },
  {
    slug: 'accesibilidad',
    group: 'viajero',
    h1: 'Accesibilidad en la Plaza Mayor de Ayacucho',
    title: 'Accesibilidad en la Plaza Mayor de Ayacucho: qué se sabe y qué falta',
    description: 'Qué se puede decir con responsabilidad sobre la accesibilidad en la Plaza Mayor de Ayacucho, y qué información conviene verificar antes de viajar.',
    summary: 'Qué está confirmado, qué no, y cómo verificar antes de viajar.'
  },
  {
    slug: 'restaurantes-cerca',
    group: 'viajero',
    h1: 'Dónde comer cerca de la plaza',
    title: 'Dónde comer cerca de la Plaza Mayor de Ayacucho',
    description: 'Cómo elegir dónde comer cerca de la Plaza Mayor de Ayacucho: zonas, tipos de cocina ayacuchana y criterios prácticos, sin recomendar comercios concretos.',
    summary: 'Zonas, tipos de cocina local y criterios prácticos de elección.'
  },
  {
    slug: 'cafeterias-cerca',
    group: 'viajero',
    h1: 'Cafés y pausas cerca de la plaza',
    title: 'Cafeterías y pausas cerca de la Plaza Mayor de Ayacucho',
    description: 'Dónde hacer una pausa de café cerca de la Plaza Mayor de Ayacucho: zonas con más oferta y qué revisar antes de entrar, sin recomendar comercios concretos.',
    summary: 'Zonas con más oferta de café y cómo elegir una pausa.'
  },
  {
    slug: 'artesanias-huamanga',
    group: 'viajero',
    h1: 'Artesanía y retablos en Huamanga',
    title: 'Artesanías de Huamanga: retablos y qué buscar cerca de la plaza',
    description: 'Qué caracteriza la artesanía de Huamanga, en especial el retablo ayacuchano, y cómo acercarse a ella desde la Plaza Mayor de Ayacucho.',
    summary: 'El retablo ayacuchano y cómo acercarse a la artesanía local.'
  },
  {
    slug: 'mirador-acuchimay',
    group: 'viajero',
    h1: 'Mirador de Acuchimay',
    title: 'Mirador de Acuchimay desde la Plaza Mayor de Ayacucho',
    description: 'Cómo plantear una visita al mirador de Acuchimay, también llamado Mirador de Ayacucho, desde la Plaza Mayor: qué es, cómo llegar, acceso libre y qué confirmar antes de subir.',
    summary: 'El mirador de 360° sobre Ayacucho, a 2,5 km de la plaza y con acceso libre.'
  },
  {
    slug: 'temporada-lluvias',
    group: 'viajero',
    h1: 'Visitar la plaza en temporada de lluvias',
    title: 'Temporada de lluvias en Ayacucho: visitar la plaza con lluvia',
    description: 'Qué supone visitar la Plaza Mayor de Ayacucho en temporada de lluvias: cómo se comporta el clima andino, qué llevar y cómo reorganizar el plan.',
    summary: 'Cómo se comporta el clima andino y cómo reorganizar la visita.'
  },
  {
    slug: 'preguntas-frecuentes',
    group: 'viajero',
    h1: 'Preguntas frecuentes sobre la plaza',
    title: 'Preguntas frecuentes sobre la Plaza Mayor de Ayacucho',
    description: 'Respuestas breves a las dudas más comunes sobre la Plaza Mayor de Ayacucho: acceso, horarios, nombres, transporte, cercanía y fuentes.',
    summary: 'Respuestas breves a las dudas más comunes sobre la plaza.'
  }
];

/** @param {string} slug */
export const guideBySlug = (slug) => guides.find((guide) => guide.slug === slug) ?? null;

/** @param {string} groupId */
export const guidesInGroup = (groupId) => guides.filter((guide) => guide.group === groupId);

/** @param {{ slug: string }} guide */
export const guideHref = (guide) => `/${guide.slug}/`;
