const caja1 = document.getElementById("caja1")
console.log(caja1)

const verdes=document.getElementsByClassName("verde")
console.log(verdes)

verdes[1].style.color= "green"

for(let i=0; i<verdes.length; i++){
    verdes[i].style.fontSize="3rem"
}

const parrafos = document.getElementsByTagName("p")
console.log(parrafos)

for(let i=0; i<parrafos.length; i++){
    parrafos[i].style.fontFamily="Arial"
}

const descripcion = document.querySelector(".descripcion")
console.log(descripcion)

const encabezado = document.querySelector("h1")
console.log(encabezado)

const todosLosVerdes = document.querySelectorAll(".verde")
console.log(todosLosVerdes)

todosLosVerdes.forEach((elemento) => {
    elemento.style.border="2px solid green"
});

const spansDentroDeDescripcion = document.querySelectorAll(".descripcion span")
console.log(spansDentroDeDescripcion)

spansDentroDeDescripcion.forEach((elemento) => {
    elemento.style.fontWeight="bold"
});

const divs = document.getElementsByTagName("div")
console.log(divs)

for(let i=0; i<divs.length; i++){
    divs[i].style.padding="1rem"
}   

cajaRojo.forEach((elemento) => {
    elemento.style.backgroundColor = "red";
});

