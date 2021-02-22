const elemCursos = document.getElementById('curso')

export function mostrarCurso(tipoCurso) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${tipoCurso.getFoto()}"/>
    <h3>${tipoCurso.getNombre()}</h3>
    <h5>Cantidad de horas: ${tipoCurso.get()}h.</h5>
    `
    // agregar como hijo de curso
    elemCursos.appendChild(card)
}