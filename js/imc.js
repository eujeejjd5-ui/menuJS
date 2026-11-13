const calcular=()=>{
    let p=parseFloat(document.querySelector("#peso").value);
    let a=parseFloat(document.querySelector("#altura").value);
    document.querySelector("#vp").innerHTML=p
    document.querySelector("#va").innerHTML=a

    let imc=parseFloat(p/(a*a));
    document.querySelector("#imc").innerHTML=imc.toFixed(2)

    if(imc<18.5){
        document.querySelector("#imc").style.color="blue";
        img.src="img/delgado.png"
    } else if(imc>=18.5 && imc<24.9){
        document.querySelector("#imc").style.color="green";
        img.src="img/normal.png"
    } else if(imc>=25 && imc<29.9){
        document.querySelector("#imc").style.color="yellow";
        img.src="img/sobrepeso.png"
    } else if(imc>=30 && imc<34.9){
        document.querySelector("#imc").style.color="orange";
        img.src="img/obesidad.png"
    } else if(imc>=35 && imc<39.9){
        document.querySelector("#imc").style.color="purple";
        img.src="img/obesidad2.png"
    } else if(imc>=40){
        document.querySelector("#imc").style.color="red";
        img.src="img/obesidad3.png"
    }

    for(let i=1;i<=6;i++){
    document.querySelector('#imc'+i).style.transition="transform 2s ease";
    document.querySelector('#imc'+i).style.zIndex="-1";
    document.querySelector('#imc'+i).style.transform="scale(1)";
}

let tipo=0;

if(imc<18.5){ tipo=1; }
else if(imc<25){ tipo=2; }
else if(imc<30){ tipo=3; }
else if(imc<35){ tipo=4; }
else if(imc<40){ tipo=5; }
else { tipo=6; }

document.querySelector('#imc'+tipo).style.zIndex="5";
document.querySelector('#imc'+tipo).style.transform="scale(1.1)";
}

const reset=()=>{
    document.querySelector("#peso").value=1;
    document.querySelector("#altura").value=1;
    document.querySelector("#vp").innerHTML=1;
    document.querySelector("#va").innerHTML=1;
    document.querySelector("#imc").innerHTML=0.00;
    document.querySelector("#imc").style.color="white";
    document.querySelector("#img").src="indice de masa.avif"
}