var valorDia = document.getElementById("valorDia");
var dia = document.getElementById("dia");
var mes = document.getElementById("mes");
var signo = document.getElementById("signo");
var fecha = document.getElementById("fecha");

const verSigno = () => {
    let d = parseInt(dia.value);
    let m = mes.value;

    valorDia.innerHTML = "DÍA " + d;
    fecha.textContent = d + " de " + m;

    var imgSigno = "";

    switch (m) {
        case "ENERO": imgSigno = (d >= 20) ? "acuario" : "capricornio"; break;
        case "FEBRERO": imgSigno = (d >= 19) ? "piscis" : "acuario"; break;
        case "MARZO": imgSigno = (d >= 21) ? "aries" : "piscis"; break;
        case "ABRIL": imgSigno = (d >= 20) ? "tauro" : "aries"; break;
        case "MAYO": imgSigno = (d >= 21) ? "geminis" : "tauro"; break;
        case "JUNIO": imgSigno = (d >= 21) ? "cancer" : "geminis"; break;
        case "JULIO": imgSigno = (d >= 23) ? "leo" : "cancer"; break;
        case "AGOSTO": imgSigno = (d >= 23) ? "virgo" : "leo"; break;
        case "SEPTIEMBRE": imgSigno = (d >= 23) ? "libra" : "virgo"; break;
        case "OCTUBRE": imgSigno = (d >= 23) ? "escorpion" : "libra"; break;
        case "NOVIEMBRE": imgSigno = (d >= 22) ? "sagitario" : "escorpion"; break;
        case "DICIEMBRE": imgSigno = (d >= 22) ? "capricornio" : "sagitario"; break;
    }
    signo.src = "img/signos/" + imgSigno + ".png";
};

document.getElementById("reset").onclick = () => {
    dia.value = 1;
    mes.value = "ENERO";
    signo.src = "img/signos/leo.png";
    verSigno();
};

dia.oninput = () => {
    verSigno();
};

mes.onchange = () => {
    verSigno();
};
verSigno();