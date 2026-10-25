var numero1 = document.querySelector("#numeroA");
var numero2 = document.querySelector("#numeroB");
var operacion = document.querySelector("#operacion");

var calcular = () => {

    var valor1 = parseInt(numero1.value);
    var valor2 = parseInt(numero2.value);

    document.querySelector("#valorNumeroA").innerHTML =
        "NÚMERO 1: " + valor1;

    document.querySelector("#valorNumeroB").innerHTML =
        "NÚMERO 2: " + valor2;

    var resultado = document.querySelector("#resultado");
    var op = operacion.value;

    if (op == "suma") {
        resultado.innerHTML = valor1 + valor2;
    }

    if (op == "resta") {
        resultado.innerHTML = valor1 - valor2;
    }

    if (op == "multiplica") {
        resultado.innerHTML = valor1 * valor2;
    }

    if (op == "divide") {
        resultado.innerHTML = valor2 !== 0
            ? valor1 / valor2
            : "No se puede dividir entre cero";
    }
};

numero1.oninput = () => { calcular(); };
numero2.oninput = () => { calcular(); };
operacion.onchange = () => { calcular(); };

calcular();