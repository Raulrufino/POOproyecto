const fichaAlumno = document.getElementById('alumno')

export function mostrarAlumno(fichaAlumno) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${fichaAlumno.getFoto()}"/>
    <h3>${fichaAlumno.getNombre()}</h3>
    <h5>Edad del alumno: ${fichaAlumno.get()}Años.</h5>
    `
    // agregar como hijo de curso
    fichaAlumno.appendChild(card)
}