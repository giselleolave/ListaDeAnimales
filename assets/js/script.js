

class Mascota {
    #nombreMascota;
    #enfermedad;

    constructor(nombreMascota, enfermedad) {
        this.#nombreMascota = nombreMascota;
        this.#enfermedad = enfermedad;
    }
    get getNombreMascota() {
        return this.#nombreMascota
    }
    get getEnfermedad() {
        return this.#enfermedad
    }
    set setNombreMascota(value){
        this.#nombreMascota = value;
    }
    set setEnfermedad(value){
        this.#enfermedad = value;
    }
}

class Animal extends Mascota {
    #tipo;

    constructor(nombreMascota, enfermedad, tipo) {
        super(nombreMascota, enfermedad)
        this.#tipo = tipo;
    }
    get getTipo() {
        return this.#tipo;
    }

}




class Propietario extends Animal{
    #nombre;
    #direccion;
    #telefono;

    constructor (nombre,direccion,telefono,nombreMascota,enfermedad,tipo){
        super(nombreMascota,enfermedad,tipo)
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#telefono = telefono;
    }
    //GET Y SET
    get getNombre(){
        return this.#nombre 
    }
    get getDireccion(){
        return this.#direccion
     }
    get getTelefono(){
        return this.#telefono
    }

}