import type { Movie } from '../types/game'

// Para ampliar el juego: añade un objeto más a este array (y ajusta ROUNDS si quieres más rondas).
// Las descripciones son originales; no citan frases literales de las películas.
export const movies: Movie[] = [
  {
    id: 'carol',
    title: 'Carol',
    year: 2015,
    modality: 'A',
    prompt: 'SINOPSIS MISTERIOSA',
    challenge:
      'Nueva York, años cincuenta. Una joven dependienta de unos grandes almacenes, con sueños de fotógrafa, atiende por casualidad a una elegante mujer mayor que ella, en pleno y complicado divorcio. Un guante olvidado sobre el mostrador será el comienzo de un viaje en coche, de miradas que dicen más que las palabras y de un amor que la sociedad de la época quiere castigar.',
    options: ['Carol', 'Retrato de una mujer en llamas', 'Fried Green Tomatoes', 'Desert Hearts'],
    correct: 0,
    blurb:
      'Todd Haynes adapta la novela de Patricia Highsmith con Cate Blanchett y Rooney Mara. Una joya de época en la que cada plano respira deseo contenido.',
    trivia:
      'La novela original, "El precio de la sal", la publicó Highsmith en 1952 bajo seudónimo, y es famosa por tener un final esperanzador, algo rarísimo para la literatura lésbica de entonces.',
  },
  {
    id: 'cheerleader',
    title: "But I'm a Cheerleader",
    year: 1999,
    modality: 'B',
    prompt: '¿QUÉ ESTÁ PASANDO?',
    challenge:
      'Una animadora ejemplar, vegetariana y adorada por su equipo, es enviada por familia y amigos a un campamento de colores pastel donde supuestamente se "cura" lo que ellos creen un problema. Allí aprende reglas absurdas de género, hace ejercicios ridículos de "roles de género" en una casa de decorado… y se fija demasiado en una chica rebelde con chaqueta y actitud.',
    options: [
      'Imagine Me & You',
      "But I'm a Cheerleader",
      'Saving Face',
      'Bound',
    ],
    correct: 1,
    blurb:
      'Comedia satírica de Jamie Babbit con Natasha Lyonne y Clea DuVall. Un cuento camp, colorido y feliz que se burla de las terapias de conversión.',
    trivia:
      'RuPaul interpreta a uno de los monitores del campamento, y la estética rosa y azul intensa es una parodia deliberada de los años cincuenta.',
  },
  {
    id: 'handmaiden',
    title: 'La doncella (The Handmaiden)',
    year: 2016,
    modality: 'C',
    prompt: '¿QUIÉNES SON ELLAS?',
    challenge:
      'Sook-hee, una joven ladrona contratada como criada, y Lady Hideko, una heredera que vive aislada en una mansión enorme. Un timador planea un engaño que debería ser sencillo… pero entre las dos nace algo que nadie había previsto.',
    options: [
      'Elisa y Marcela',
      'La doncella (The Handmaiden)',
      'Disobedience',
      'The World to Come',
    ],
    correct: 1,
    blurb:
      'Thriller erótico de Park Chan-wook, con Kim Min-hee y Kim Tae-ri, ambientado en la Corea ocupada por Japón. Giros, engaños y un final liberador.',
    trivia:
      'Está inspirada libremente en la novela "Falsa identidad" de Sarah Waters, que transcurre en la Inglaterra victoriana. Park la trasladó a Corea de los años treinta.',
  },
  {
    id: 'portrait',
    title: 'Retrato de una mujer en llamas',
    year: 2019,
    modality: 'D',
    prompt: 'PISTAS PROGRESIVAS',
    challenge: '¿De qué película estamos hablando? Cuantas menos pistas necesites, más puntos.',
    hints: [
      'Una pintora llega a una isla bretona a finales del siglo XVIII con un encargo discreto.',
      'Debe retratar a una joven que no quiere casarse, observándola de día y pintando de memoria por la noche.',
      'Dirigida por Céline Sciamma, con Noémie Merlant y Adèle Haenel. Ganó el premio al mejor guion en Cannes.',
    ],
    options: [
      'Retrato de una mujer en llamas',
      'La vida de Adèle',
      'Carol',
      'Un amor en Kabul',
    ],
    correct: 0,
    blurb:
      'Una historia de amor y mirada mutua sin sentimentalismos. Su plano final es uno de los más recordados del cine europeo reciente.',
    trivia:
      'Casi no hay banda sonora: solo suenan dos piezas dentro de la historia, lo que hace que el silencio pese como un personaje más.',
  },
  {
    id: 'disobedience',
    title: 'Disobedience',
    year: 2017,
    modality: 'A',
    prompt: 'SINOPSIS MISTERIOSA',
    challenge:
      'La muerte de un respetado rabino hace volver a Londres a su hija, una fotógrafa que se marchó años atrás. Su regreso a la comunidad ortodoxa que la rechazó la reencuentra con su amor de juventud, hoy casada con un hombre cercano a su familia. Lo que parecía enterrado vuelve a salir a la superficie.',
    options: ['Disobedience', 'Carol', 'The World to Come', 'Fire'],
    correct: 0,
    blurb:
      'Drama de Sebastián Lelio con Rachel Weisz y Rachel McAdams, basado en la novela de Naomi Alderman. Habla de fe, deseo y libertad de elegir.',
    trivia:
      'Rachel Weisz fue también productora de la película, y Sebastián Lelio acababa de ganar el Óscar a mejor película extranjera por "Una mujer fantástica".',
  },
  {
    id: 'half',
    title: 'The Half of It',
    year: 2020,
    modality: 'D',
    prompt: 'PISTAS PROGRESIVAS',
    challenge: '¿Qué película se esconde detrás de estas pistas? Cuantas menos uses, mejor.',
    hints: [
      'Es una comedia romántica juvenil ambientada en un pequeño pueblo estadounidense.',
      'Una estudiante brillante escribe cartas de amor por encargo, y un chico le pide ayuda para conquistar a la chica que le gusta.',
      'Está inspirada libremente en "Cyrano de Bergerac" y la dirige Alice Wu para Netflix.',
    ],
    options: ['The Half of It', 'Booksmart', 'Saving Face', 'Love, Simon'],
    correct: 0,
    blurb:
      'Una historia sobre amistad, identidad y primeras veces. Su final no sigue la fórmula clásica de las comedias románticas, y por eso encanta.',
    trivia:
      'Alice Wu volvió a dirigir dieciséis años después de su debut con "Saving Face". Entre las dos películas hizo una pausa larga en el cine.',
  },
  {
    id: 'imagine',
    title: 'Imagine Me & You',
    year: 2005,
    modality: 'B',
    prompt: '¿QUÉ ESTÁ PASANDO?',
    challenge:
      'El día de su boda, una novia cruza la mirada con una de las invitadas, una florista cuyo trabajo es decorar la ceremonia. Desde ese instante, aunque el matrimonio sigue adelante, nada vuelve a estar tan claro. Y la amistad que empieza entre las dos se complica por momentos.',
    options: [
      'Imagine Me & You',
      'Elisa y Marcela',
      'Carol',
      'The Handmaiden',
    ],
    correct: 0,
    blurb:
      'Comedia romántica británica de Ol Parker con Piper Perabo y Lena Headey. Una de esas pelis cálidas para ver con una manta y un té.',
    trivia:
      'Una comedia romántica de estudio con una pareja de mujeres en el centro y final feliz, algo poco habitual en 2005.',
  },
  {
    id: 'savingface',
    title: 'Saving Face',
    year: 2004,
    modality: 'C',
    prompt: '¿QUIÉNES SON ELLAS?',
    challenge:
      'Wil, una joven cirujana china-estadounidense en Nueva York, y Vivian, una bailarina de la compañía de ballet. Mientras tanto, la madre de Wil aparece de repente en su casa, con un secreto propio, y la comunidad empieza a murmurar.',
    options: [
      'Saving Face',
      'But I\'m a Cheerleader',
      'Imagine Me & You',
      'The Half of It',
    ],
    correct: 0,
    blurb:
      'Debut de Alice Wu, con Michelle Krusiec y Lynn Chen. Una comedia romántica familiar que habla de tradición, secretos y atreverse a vivir.',
    trivia:
      'Es una de las pocas comedias románticas estadounidenses con protagonistas asiático-americanas y queer.',
  },
  {
    id: 'elisamarcela',
    title: 'Elisa y Marcela',
    year: 2019,
    modality: 'D',
    prompt: 'PISTAS PROGRESIVAS',
    challenge: 'Es una historia real. ¿De qué película se trata?',
    hints: [
      'Está filmada en blanco y negro y se basa en hechos reales ocurridos en España.',
      'Dos maestras se conocen en la escuela de magisterio en Galicia y su amistad se convierte en una historia de amor que debe ocultarse.',
      'Isabel Coixet la dirigió, y la boda real de aquellas dos mujeres, en 1901, fue noticia en toda España. Compitió por el Oso de Oro en la Berlinale.',
    ],
    options: ['Elisa y Marcela', 'Carol', 'Retrato de una mujer en llamas', 'La doncella'],
    correct: 0,
    blurb:
      'Natalia de Molina y Greta Fernández dan vida a Elisa y Marcela, dos mujeres que se casaron por la Iglesia en La Coruña en 1901, con Elisa presentándose como un hombre llamado Mario.',
    trivia:
      'La historia verdadera es poco conocida porque durante décadas se contó de forma distorsionada. Coixet recupera su memoria con mucha delicadeza.',
  },
  {
    id: 'worldtocome',
    title: 'The World to Come',
    year: 2020,
    modality: 'A',
    prompt: 'SINOPSIS MISTERIOSA',
    challenge:
      'Estados Unidos, mediados del siglo XIX. En una granja aislada, una mujer que lleva un diario para soportar el invierno y el dolor de una pérdida se hace amiga de su nueva vecina. Entre cartas, visitas y tormentas, esa amistad se transforma en algo que ninguna de las dos esperaba, mientras sus maridos están cerca.',
    options: [
      'Fried Green Tomatoes',
      'Ammonite',
      'The World to Come',
      'Disobedience',
    ],
    correct: 2,
    blurb:
      'Drama de Mona Fastvold con Katherine Waterston y Vanessa Kirby. Un romance contenido, narrado a través de un diario, entre paisajes helados.',
    trivia:
      'Está basada en un relato corto de Jim Shepard. Se suele comparar con "Ammonite", que se estrenó el mismo año y también trata de un amor entre mujeres del siglo XIX.',
  },
]

export const ROUNDS = movies.length
export const MAX_POINTS = ROUNDS * 100
