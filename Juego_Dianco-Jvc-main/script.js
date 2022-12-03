var contador_preguntas = 1
const PUNTOS_POSITIVOS = 100
const PUNTOS_NEGATIVOS = 60
const resultados = []
const preguntas = [
    {
        id: 1,
        encabezado: "¿En qué hemisferio está situado Colombia?",
        opciones: [
            {
                id: 1,
                respuesta: "En el hemisferio sur ",
                correcto: false
            },
            {
                id: 2,
                respuesta: "En el hemisferio norte",
                correcto: false
            },
            {
                id: 3,
                respuesta: "En los dos hemisferios ",
                correcto: true
            },
            {
                id: 4,
                respuesta: "En ninguno",
                correcto: false
            }
        ]
    },
    {
        id: 2,
        encabezado: "Colombia posee costa sobre dos océanos, ¿cuáles son?",
        opciones: [
            {
                id: 1,
                respuesta: "El Atlántico y el Índico ",
                correcto: false
            },
            {
                id: 2,
                respuesta: "El Pacífico y el Caribe",
                correcto: false
            },
            {
                id: 3,
                respuesta: "El Pacífico y el Atlántico",
                correcto: true
            },
            {
                id: 4,
                respuesta: "El Caribe y el Antártico",
                correcto: false
            }
        ]
    },
    {
        id: 3,
        encabezado: "¿Cuántas regiones conforman la geografía colombiana?",
        opciones: [
            {
                id: 1,
                respuesta: "3",
                correcto: false
            },
            {
                id: 2,
                respuesta: "10",
                correcto: false
            },
            {
                id: 3,
                respuesta: "5",
                correcto: false
            },
            {
                id: 4,
                respuesta: "6",
                correcto: true
            }
        ]
    },
    {
        id: 4,
        encabezado: "¿A qué ciudad se le conoce como “La ciudad de la eterna primavera”? ",
        opciones: [
            {
                id: 1,
                respuesta: "Medellin",
                correcto: true
            },
            {
                id: 2,
                respuesta: "Bogotá",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Cartagena ",
                correcto: false
            },
            {
                id: 4,
                respuesta: "Barranquilla",
                correcto: false
            }
        ]
    },
    {
        id: 5,
        encabezado: "¿El río Amazonas y el Orinoco son las fronteras naturales de Colombia con?",
        opciones: [
            {
                id: 1,
                respuesta: "Brasil y Guyana",
                correcto: false
            },
            {
                id: 2,
                respuesta: "Perú y Brasil",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Venezuela y Argentina",
                correcto: false
            },
            {
                id: 4,
                respuesta: "Perú y Venezuela",
                correcto: true
            }
        ]
    },
    {
        id: 6,
        encabezado: "¿La ausencia de estaciones en Colombia sedebe a?",
        opciones: [
            {
                id: 1,
                respuesta: "Que tiene montañas",
                correcto: false
            },
            {
                id: 2,
                respuesta: "Que está en el trópico",
                correcto: true
            },
            {
                id: 3,
                respuesta: "Los vientos alisios",
                correcto: false
            },
            {
                id: 4,
                respuesta: "El fenómeno del Niño",
                correcto: false
            }
        ]
    },
    {
        id: 7,
        encabezado: "¿Colombia es uno de los países del planetamás rico en?",
        opciones: [
            {
                id: 1,
                respuesta: "Razas de ganado",
                correcto: false
            },
            {
                id: 2,
                respuesta: "Deciertos",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Biodiversidad",
                correcto: true
            },
            {
                id: 4,
                respuesta: "Bosque primario",
                correcto: false
            }
        ]
    },
    {
        id: 8,
        encabezado: "¿Quien escribio Mil Años De Soledad?",
        opciones: [
            {
                id: 1,
                respuesta: "Davinchi",
                correcto: false
            },
            {
                id: 2,
                respuesta: "Picasso",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Gabriel Garia Marquez",
                correcto: true
            },
            {
                id: 4,
                respuesta: "San Carlos",
                correcto: false
            }
        ]
    },
    {
        id: 9,
        encabezado: "Cali, la 3ª ciudad más grande de Colombia, ¿es considerada la capital mundial de?",
        opciones: [
            {
                id: 1,
                respuesta: "La corrida",
                correcto: false
            },
            {
                id: 2,
                respuesta: "La caña de azucar",
                correcto: false
            },
            {
                id: 3,
                respuesta: "La salsa",
                correcto: true
            },
            {
                id: 4,
                respuesta: "La cumbia ",
                correcto: false
            }
        ]
    },
    {
        id: 10,
        encabezado: "La flor de la nacion es?",
        opciones: [
            {
                id: 1,
                respuesta: "La orquidea",
                correcto: true
            },
            {
                id: 2,
                respuesta: "El girasol",
                correcto: false
            },
            {
                id: 3,
                respuesta: "La margarita",
                correcto: false
            },
            {
                id: 4,
                respuesta: "La ortencia",
                correcto: false
            }
        ]
    },
]

function inicializar() {
    pintar_preguntas(contador_preguntas)

}

function pintar_preguntas(id_pregunta) {
    let pregunta = preguntas.filter((pregunta) => { return pregunta.id === id_pregunta })
    pregunta = pregunta[0]
    /*condicional*/
    if (pregunta) {
        const encabezado = document.getElementById('encabezado')
        const opcion1 = document.getElementById('opcion1')
        const opcion2 = document.getElementById('opcion2')
        const opcion3 = document.getElementById('opcion3')
        const opcion4 = document.getElementById('opcion4')
        encabezado.innerHTML = pregunta.encabezado
        opcion1.innerHTML = traer_respuesta(1, pregunta)
        opcion2.innerHTML = traer_respuesta(2, pregunta)
        opcion3.innerHTML = traer_respuesta(3, pregunta)
        opcion4.innerHTML = traer_respuesta(4, pregunta)
    } else {
        calcularPuntaje()
    }
}

/*calcular el porcentaj*/
async function calcularPuntaje() {
    let puntosTotales = 0
    await resultados.map(result => {
        if (result) {
            puntosTotales = puntosTotales + PUNTOS_POSITIVOS
        } else {
            puntosTotales = puntosTotales - PUNTOS_NEGATIVOS
        }
    })
    if (puntosTotales < 0) puntosTotales = 0

    confirm(" tu puntajes es " + puntosTotales + " de 1000 " + " Deseas volver a intentarlo? ")
}

/*filtro*/
function traer_respuesta(id_respuesta, pregunta) {
    return pregunta.opciones.filter((opcion) => { return opcion.id === id_respuesta })[0].respuesta
}

function respuesta_correcta(id_respuesta, pregunta) {
    return pregunta.opciones.filter((opcion) => { return opcion.id === id_respuesta })[0].correcto
}

function validar_respuesta(id_respuesta) {
    let pregunta = preguntas.filter((pregunta) => { return pregunta.id === contador_preguntas })
    pregunta = pregunta[0]
    const opciones = document.getElementsByClassName("opcion")
    if (respuesta_correcta(id_respuesta, pregunta)) {
        resultados.push(true)
    } else {
        resultados.push(false)
    }
    console.log(resultados)
    Array.from(opciones).forEach(element => {
        const opcion = "opcion" + id_respuesta
        if (opcion === element.id && respuesta_correcta(id_respuesta, pregunta)) {
            element.classList.add("respuesta_correcta")
        } else {
            element.classList.add("respuesta_incorrecta")
        }

    });
}

/*incremente la pregunta*/
function siguiente_pregunta() {
    contador_preguntas = contador_preguntas + 1
    console.log(contador_preguntas)
    /*remueve la seleccion de la pregunta anterior*/
    document.getElementById('opcion1').classList.remove("respuesta_incorrecta");
    document.getElementById('opcion2').classList.remove("respuesta_incorrecta");
    document.getElementById('opcion3').classList.remove("respuesta_incorrecta");
    document.getElementById('opcion4').classList.remove("respuesta_incorrecta");
    document.getElementById('opcion1').classList.remove("respuesta_correcta");
    document.getElementById('opcion2').classList.remove("respuesta_correcta");
    document.getElementById('opcion3').classList.remove("respuesta_correcta");
    document.getElementById('opcion4').classList.remove("respuesta_correcta");
    pintar_preguntas(contador_preguntas)
}
inicializar()

