function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

function calcular() {
    const operacion = prompt("Elige una operación: suma, resta, multiplicación o división");
    const num1 = parseFloat(prompt("Ingresa el primer número"));
    const num2 = parseFloat(prompt("Ingresa el segundo número"));

    let resultado;

    switch (operacion) {
        case "suma":
            resultado = suma(num1, num2);
            break;
        case "resta":
            resultado = resta(num1, num2);
            break;
        case "multiplicación":
            resultado = multiplicacion(num1, num2);
            break;
        case "división":
            try {
                resultado = division(num1, num2);
            } catch (error) {
                console.error(error.message);
                return;
            }
            break;
        default:
            console.error("Operación no válida");
            return;
    }

    console.log(`El resultado de la ${operacion} es: ${resultado}`);

    const continuar = prompt("¿Deseas realizar otra operación? (s/n)");
    if (continuar.toLowerCase() === "s") {
        calcular();
    } else {
        console.log("Hasta luego.");
    }
}

calcular();
