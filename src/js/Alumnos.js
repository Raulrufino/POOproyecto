// crear la clase Nuevos Alumnos

export class Alumnos{
    constructor(nombre, apellidos, foto, edad){
        this.nombre = nombre
        this.apellidos = apellidos
        this.foto = foto
        this.edad = edad
        this.inscritos = []
    }
    // getters
    getNombre() { return this.nombre}
    getApellidos() { return this.apellidos}
    getFoto() { return this.foto}
    getEdad() { return this.edad}
    getInscritos() { return this.inscritos}

    // setters
    setNombre(nombre) { this.nombre = nombre}
    setApellidos(apellidos) { this.apellidos = apellidos}
    setFoto(foto) { this.foto = foto}
    setEdad(edad) { this.edad = edad}
    setInscritos(inscritos) { this.inscritos = inscritos}
}