// Importar módulos
import { Cursos } from './Cursos.js'
import { mostrarCurso } from './mostrarCurso.js'
import { Alumnos } from './Alumnos.js'
import { mostrarAlumno } from './mostrarAlumno.js'
import { mostrarProfesor } from './mostrarProfesor.js'
import { Profesores } from './Profesores.js'



// acceder al elemento de HTML
const formulario = document.getElementById('formulario')

// Funciones

// acceder al formulario
// escuchar el envio del formulario
formulario.addEventListener('submit', evento => {
    // hacer que el formulario no se ejecute
    evento.preventDefault()
    // guardar el FORMULARIO
    // recoger el formulario entero
    const formObtenido = evento.target
    // Prueba ******
    // crear el nuevo curso
    const curso = new Cursos(formObtenido.nombreCurso.value, formObtenido.rutaImagen.value, formObtenido.cantidadHoras.value)
    // mostrar curso
    mostrarCurso(curso)
    // refrescar formulario
    formObtenido.reset()
})

//acceder al formulario de html

const formAlumnos = document.getElementById('formAlumnos')

//funcion alumnos

formAlumnos.addEventListener('submit', evento => {
    evento.preventDefault()

    const formObtenido = evento.target

    const Alumno = new Alumnos(formObtenido.nombreAlumno.value, formObtenido.fotoAlumno.value, formObtenido.edad.value )
    
    mostrarAlumno(Alumno)

    formObtenido.reset()
})


//acceder al formulario de profesores

const formProfesor = document.getElementById('formProfesor')

//escuchar el envio del formulario
formProfesor.addEventListener('submit', evento =>{
    // hacer que el formulario no se ejecute
    evento.preventDefault()
    //recoger el formulario
    const formObtenido = evento.target

    // crear el nuevo profesor
    const fichaProfesor = new Profesores(formObtenido.nombreProfesor.value, formObtenido.fotoProfesor.value, formObtenido.nombreCurso.value)
    // mostrar curso
    mostrarProfesor(fichaProfesor)
    //refrescar formulario
    formObtenido.reset()
})