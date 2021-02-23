export class Profesores{
    constructor(nombre, foto, curso){
        this.nombre = nombre
        this.foto = foto
        this.curso = curso
        this.inscritos = []
    }
    // getters
    getNombre() { return this.nombre}
    getPoster() { return this.foto}
    getClases() { return this.curso}
    getIncritos() { return this.inscritos}

    // setters
    setNombre(nombre) { this.nombre = nombre}
    setPoster(foto) { this.foto = foto}
    setClases(curso) { this.curso = curso}
    setIncritos(inscritos) { this.inscritos = inscritos}
}