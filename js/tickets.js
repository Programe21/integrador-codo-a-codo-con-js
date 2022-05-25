const valorticket= 200;

function calcTotal(){
    let estudiante=document.getElementById("estudiante");
    let trainee=document.getElementById("trainee");
    let junior=document.getElementById("junior");
let cantidad=document.getElementById("Cantidad").value

let categoria=document.getElementById("categoria").value
let descuento

if (categoria==1) {
    descuento=80
    estudiante.classList.add("estudiante");
    trainee.classList.remove("estudiante");
    junior.classList.remove("estudiante");
}
else if (categoria==2){
    descuento=50
    estudiante.classList.remove("estudiante");
    junior.classList.remove("estudiante");
    trainee.classList.add("estudiante");
}
else if (categoria ==3){
    descuento=15
    estudiante.classList.remove("estudiante");
    trainee.classList.remove("estudiante");
    junior.classList.add("estudiante");
}

let total=cantidad*valorticket;
total-=total*descuento/100;

document.getElementById("total").innerHTML=total


}

function cambiocategoria(a){
    categoria=document.getElementById("categoria").value=a
    calcTotal()
    
}

// function seleccion(){

//     let estudiante=document.getElementById("estudiante");
//     let contador=0;

//     if (contador  ==0){
//         estudiante.classList.add("estudiante");
//         contador==1;

//     }
//     else {
//         estudiante.classList.remove("estudiante");
//         contador==0;
//     }
    
// }