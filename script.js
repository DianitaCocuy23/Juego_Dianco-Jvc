var contador_preguntas = 1
const resultados = []
const preguntas = [
    {
        id: 1,
        encabezado: "¿Cual es la bandera de Santiago de Cali?",
        opciones: [
            {
                id: 1,
                respuesta: "Azul, Amarillo, Rojo",
                correcto: false
            },
            {
                id: 2,
                respuesta: "Azul, Rojo, Blanco, Rojo, Verde",
                correcto: true
            },
            {
                id: 3,
                respuesta: "Amarillo, Azul, Verde",
                correcto: false
            },
            {
                id: 4,
                respuesta: "Rojo, Verde, Azul, Blanco",
                correcto: false
            }
        ]
    },
    {
        id: 2,
        encabezado: "¿Cual es la bandera de colombia?",
        opciones: [
            {
                id: 1,
                respuesta: "Azul, Amarillo, Rojo",
                correcto: true
            },
            {
                id: 2,
                respuesta: "Azul, Rojo, Blanco, Rojo, Verde",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Rojo, Verde, Azul, Blanco",
                correcto: false
            },
            {
                id: 4,
                respuesta: "Amarillo, Azul, Verde",
                correcto: false
            }
        ]
    },
    {
        id: 3,
        encabezado: "¿Qué día se celebra el día de la independencia de Colombia?",
        opciones: [
            {
                id: 1,
                respuesta: "18 de Julio",
                correcto: false
            },
            {
                id: 2,
                respuesta: "15 de Abril",
                correcto: false
            },
            {
                id: 3,
                respuesta: "20 de Julio",
                correcto: true
            },
            {
                id: 4,
                respuesta: "15 de Septiembre",
                correcto: false
            }
        ]
    },
    {
        id: 4,
        encabezado: "Estas tres ciudades se localizan en las costas del mar Caribe:",
        opciones: [
            {
                id: 1,
                respuesta: "Tumacoí, Buenaventura y Nuquí.",
                correcto: false
            },
            {
                id: 2,
                respuesta: "San Marta, Buenaventura, Pasto. ",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Santa Marta, Barranquilla y Cartagena.",
                correcto: true
            },
            {
                id: 4,
                respuesta: "Cali, Medellín y Pasto.",
                correcto: false
            }
        ]
    },
]

function inicializar() {
    pintar_preguntas(contador_preguntas)

}

function pintar_preguntas(id_pregunta) {
    const encabezado = document.getElementById('encabezado')
    const opcion1 = document.getElementById('opcion1')
    const opcion2 = document.getElementById('opcion2')
    const opcion3 = document.getElementById('opcion3')
    const opcion4 = document.getElementById('opcion4')
    let pregunta = preguntas.filter((pregunta) => { return pregunta.id === id_pregunta })
    pregunta = pregunta[0]
    console.log(pregunta)
    encabezado.innerHTML = pregunta.encabezado
    opcion1.innerHTML = traer_respuesta(1, pregunta)
    opcion2.innerHTML = traer_respuesta(2, pregunta)
    opcion3.innerHTML = traer_respuesta(3, pregunta)
    opcion4.innerHTML = traer_respuesta(4, pregunta)

}

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
    } else  {
       resultados.push(false)
    }
    console.log (resultados)
    Array.from(opciones).forEach(element => {
        const opcion = "opcion" + id_respuesta
        if (opcion === element.id && respuesta_correcta(id_respuesta, pregunta)) {
            element.classList.add("respuesta_correcta")
        } else {
            element.classList.add("respuesta_incorrecta")
        }

    });
    


    /*
    if (respuesta_correcta(id_respuesta, pregunta)) {
        opcion.classList.add("respuesta_correcta")
    } else  {
        opcion.classList.add("respuesta_incorrecta")
    }
    */

}

function siguiente_pregunta() {
    contador_preguntas = contador_preguntas + 1
    console.log(contador_preguntas)
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

