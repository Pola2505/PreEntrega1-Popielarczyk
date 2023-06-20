function pedirDieta() {
    let pedir = confirm("Quieres pedir una dieta personalizada para mujeres?");
}
function referirAmigos() {
    let referir = confirm("Referi 3 amigos y consegui un descuento para tu plan de dieta semanal");
    if (referir) {
        for (let i = 1; i <= 3; i++) {
            let amigo = prompt("Cargar nombre de amigo");
            console.log("Amigo nr " + i + " Nombre: " + amigo);
        }
    } else {
        console.log("Se te perdio un ofertazo")
    }
    console.log("Felicitaciones tu codigo de descuento es: CAPO30");
}

function listaActividades() {
    console.log("Elegi el nivel de actividad entre 1.2 a 1.8");
    console.log("1.2 - ninguna actividad ( personas enfermas, todo el dia en la cama");
    console.log("1.4 - poca actividad ( solo paseos )");
    console.log("1.5 - actividad ligera ( solo en el trabajo, oficina)");
    console.log("1.6 - actividad moderada ( trabajo oficina + 3 entrenamientos fisicos por semana");
    console.log("1.7 - mucha actividad ( trabajo fisico + 3 entrenamientos por semana)");
    console.log("1.8 - entrenamientos todos los dias");
}


pedirDieta();
if (pedirDieta) {
    let peso = Number(prompt("Ingrese su peso"));
    if (isNaN(peso)) {
        console.log("Es necesario ingresar un numero");

    } else {
        let altura = Number(prompt("Ingrese su altura"));
        if (isNaN(altura)) {
            console.log("Es necesario ingresar un numero");
        } else {
            let edad = Number(prompt("Ingrese su edad"));
            if (isNaN(edad)) {
                console.log("Es necesario ingresar un numero");
            } else {
                listaActividades();

                let actividad = Number(prompt("Elegi el nivel de actividad diaria entre 1.2 a 1.8"));
                if (isNaN(actividad)) {
                    console.log("Es necesario ingresar un numero");
                } else {
                    let resultado = 655.1 + (9.567 * peso) + (1.85 * altura) - (4.68 * edad);
                    console.log("La cantidad de calorias que necesitas para mantener tu peso actual es " + Math.ceil(resultado * actividad) + " calorias ");
                    console.log("Para bajar de peso deberias comer alrededor de " + Math.ceil(resultado * actividad - 300) + " calorias ");
                    console.log("Para subir de peso deberias comer alrededor de " + Math.ceil(resultado * actividad + 300) + " calorias ");

                }
                referirAmigos();






            }
        }
    }

} else{
    console.log("Segui navegando");
}


