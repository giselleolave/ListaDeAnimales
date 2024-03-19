
document.addEventListener("DOMContentLoaded", function() {
    class Mascota {
        #nombreMascota;
        #enfermedad;

        constructor(nombreMascota, enfermedad) {
            this.#nombreMascota = nombreMascota;
            this.#enfermedad = enfermedad;
        }
        get getNombreMascota() {
            return this.#nombreMascota;
        }
        get getEnfermedad() {
            return this.#enfermedad;
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
        TipoInfo(){
            return `El tipo de animal es : ${this.getTipo}, mientras que el nombre de la mascota es: ${this.getNombreMascota} y la enfermedad es : ${this.getEnfermedad}.`

        }

    }

    class Propietario extends Animal{
        #nombre;
        #direccion;
        #telefono;

        constructor (nombreMascota, enfermedad, tipo, nombre, telefono, direccion){
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
        datosPropietario(){
            return `El nombre del Dueño es : ${this.getNombre}. El domicilio es: ${this.getDireccion} y el múmero telefónico de contacto : ${this.getTelefono}.`
        }

    }


    const formulario = document.querySelector("#formulario")
    const resultado = document.querySelector("#resultado")

    //Capturar datos de formulario
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()

        const nombre = document.querySelector("#propietario").value
        const telefono = document.querySelector("#telefono").value
        const direccion = document.querySelector("#direccion").value
        const nombreMascota = document.querySelector("#nombreMascota").value
        const tipo = document.querySelector("#tipo").value
        const enfermedad = document.querySelector("#enfermedad").value

        const nuevoPropietario = new Propietario(nombreMascota, enfermedad, tipo, nombre, telefono, direccion)
        console.log(nuevoPropietario);

        resultado.innerHTML += `
        <ul>
        <li>${nuevoPropietario.datosPropietario()}</li>
        <li>${nuevoPropietario.TipoInfo()}</li>
        </ul>
        <hr>
        `
    })
});
