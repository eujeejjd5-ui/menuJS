
const calcular = () => {
    const producto = document.querySelector("#producto").value;
    const img = document.querySelector("#img");
    const precio = document.querySelector("#precio");
    const cantidadInput = document.querySelector("#cantidad");

    const contado = document.querySelector("#contado");
    const credito = document.querySelector("#credito");
    const abono = document.querySelector("#abono");

    let costo = 0;

    switch (producto) {
        case "sal":costo = 50;break;
        case "azucar":costo = 35;break;
        case "sopa":costo = 15;break;
        case "volt":costo = 25;break;
        case "utiles":costo = 100;break;
    }

    img.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = `img/${producto}.jpg`;
    imagen.alt = producto;

    img.appendChild(imagen);

    imagen.onerror = () => {
        img.innerHTML = "No se encontró la imagen";
    };

    const plazoSeleccionado =
        document.querySelector('input[name="plazo"]:checked');

    const meses = Number(plazoSeleccionado.value);

    let aumento = 0;

    if (meses === 6) {
        aumento = 0.10;
    } else if (meses === 12) {
        aumento = 0.15;
    } else if (meses === 18) {
        aumento = 0.20;
    }

    let cantidad = Number(cantidadInput.value);

    if (!Number.isFinite(cantidad) || cantidad < 1) {
        cantidad = 1;
        cantidadInput.value = 1;
    }


    const totalContado = costo * cantidad;
    const totalCredito = totalContado * (1 + aumento);
    const mensualidad = totalCredito / meses;

    precio.textContent =`Precio: $${costo.toFixed(2)} MXN`;
    contado.textContent =`Precio de contado: $${totalContado.toFixed(2)} MXN`;
    credito.textContent =`Precio a crédito: $${totalCredito.toFixed(2)} MXN`;
    abono.textContent =`Abono mensual: $${mensualidad.toFixed(2)} MXN`;
};

calcular();
