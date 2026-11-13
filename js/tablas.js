const calcular=()=>{
let n=parseFloat(document.querySelector("#mul").value);
let res=document.getElementById("resultados");
document.querySelector("#vt").innerHTML=n

    let t1=parseFloat(n*1);
    let t2=parseFloat(n*2);
    let t3=parseFloat(n*3);
    let t4=parseFloat(n*4);
    let t5=parseFloat(n*5);
    let t6=parseFloat(n*6);
    let t7=parseFloat(n*7);
    let t8=parseFloat(n*8);
    let t9=parseFloat(n*9);
    let t10=parseFloat(n*10);

    res.innerHTML="<img src='img/spinner.gif' width='200px' height='200px'>";

   setTimeout(()=>{
        res.innerHTML=(n + " x 1 = " + t1 + "<br>" + n + " x 2 = " + t2 + "<br>" + n + " x 3 = " + t3 + "<br>" + n + " x 4 = " + t4 + "<br>" + n + " x 5 = " + t5 + "<br>" + n + " x 6 = " + t6 + "<br>" + n + " x 7 = " + t7 + "<br>" + n + " x 8 = " + t8 + "<br>" + n + " x 9 = " + t9 + "<br>" + n + " x 10 = " + t10);
    },1000);
    }
const reset=()=>{
    document.querySelector("#mul").value=1
    document.querySelector("#vt").innerHTML="1"
    document.querySelector("#resultados").innerHTML="1 x 1 = 1<br>1 x 2 = 2<br>1 x 3 = 3<br>1 x 4 = 4<br>1 x 5 = 5<br>1 x 6 = 6<br>1 x 7 = 7<br>1 x 8 = 8<br>1 x 9 = 9<br>1 x 10 = 10"
}