const calcular=()=>{
let b=parseFloat(document.querySelector("#base").value);
let a=parseFloat(document.querySelector("#altura").value);
document.querySelector("#vb").innerHTML=`<b style="color:red">${b}</b>`
document.querySelector("#va").innerHTML=`<b style="color:green">${a}</b>`

let area=(b*a)/2;
document.querySelector("#area").innerHTML=`<b style="color:blue;font-size:40px">${area.toFixed(2)}</b>`

}

const reset=()=>{
document.querySelector("#base").value=1
document.querySelector("#altura").value=1
document.querySelector("#vb").innerHTML="1"
document.querySelector("#va").innerHTML="1"
document.querySelector("#area").innerHTML="0"

}