export class Profesores{
    constructor(nombre, apellidos, foto, curso){
        this.nombre = nombre
        this.apellidos = apellidos
        this.foto = foto
        this.curso = curso
        this.inscritos = []
    }
    // getters
    getNombre() { return this.nombre}
    getApellidos() { return this.apellidos}
    getPoster() { return this.foto}
    getClases() { return this.curso}
    getIncritos() { return this.inscritos}

    // setters
    setNombre(nombre) { this.nombre = nombre}
    setApellidos(apellidos) { this.apellidos = apellidos}
    setPoster(foto) { this.foto = foto}
    setClases(curso) { this.curso = curso}
    setIncritos(inscritos) { this.inscritos = inscritos}
}