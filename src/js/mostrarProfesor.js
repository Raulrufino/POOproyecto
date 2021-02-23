const fichaProfesor = document.getElementById('gridProfesor')

export function mostrarProfesor(tipoCurso) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${tipoCurso.getPoster()}"/>
    <h3>${tipoCurso.getNombre()}</h3>
    <h5>Especialidad: ${tipoCurso.getClases()}</h5>
    `
    // agregar como hijo de gridProfesor
    fichaProfesor.appendChild(card)
}