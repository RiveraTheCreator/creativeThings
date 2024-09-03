let ecosistema = []; //Crear ecosistema

class Humano { //Humano natural (civilizado)
    constructor(nombre, edad) { 
        this.nombre = nombre;
        this.edad = edad;
    }

    tomarCafe() {
        console.log(`${this.nombre} está tomando cafecito`);
    }

    filosofar(topic) {
        console.log(`${this.nombre} está filosofando sobre ${topic} 🤔`);
    }
}

class AntiHumano { //Humano no natural ( no civilizado)
    constructor(nivelDeAmenaza, psychoPass) { 
        this.nivelDeAmenaza = nivelDeAmenaza;
        this.psychoPass = psychoPass; // Recomendacion https://en.wikipedia.org/wiki/Psycho-Pass
    }

    tomarCocaDePiña() {
        console.log(`está tomando coca de piña.`);
    }

    asesinar() {
        if (ecosistema.length > 1) { // Verificar que haya al menos 2 elementos en el array(ecosistema)
            console.log(`está asesinando a ${ecosistema[1].nombre}`);
            ecosistema.pop();
        } else {
            console.log('No hay suficientes humanos en el ecosistema.');
        }
    }
}

// Crear sociedad
let antiHumano1 = new AntiHumano(100, 95);
ecosistema.push(antiHumano1);
let humano1 = new Humano("Alex", 25);
ecosistema.push(humano1);


// Interacciones
humano1.filosofar("La naturaleza y lo humano");
antiHumano1.asesinar();
