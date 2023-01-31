// botones llamados por ID --------
let botonExperiencias = document.getElementById("btnExp");
let botonHabilidades = document.getElementById("btnHab");
let botonInfo = document.getElementById("btnInfo");
let botonMenu=document.getElementById("btnMenu")
//Contenedores llamados por ID ----------
let displayExp = document.getElementById("experiencias").style.display;
let displayInfo = document.getElementById("informacion").style.display;
let displayHabi = document.getElementById("habilidades").style.display;
let displayMenu = document.getElementById("menu").style.display;
// Funciones (click) que manipulan el display del contenedor -----
botonExperiencias.addEventListener("click",()=>{
    noDisplay("menu");
    noDisplay("informacion");
    noDisplay("habilidades");
    display("experiencias");
});

botonInfo.addEventListener("click",()=>{
    display("informacion");
    noDisplay("experiencias");
    noDisplay("menu");
    noDisplay("habilidades");
});

botonHabilidades.addEventListener("click",()=>{
    display("habilidades");
    noDisplay("experiencias");
    noDisplay("informacion");
    noDisplay("menu");
})

botonMenu.addEventListener("click",()=>{
    display("menu")
    noDisplay("experiencias");
    noDisplay("informacion");
    noDisplay("habilidades");
    
})
// Funciones que modifica el display que le llega por parametro----
function noDisplay(elemento){
    let elem = document.getElementById(elemento);
    elem.style.display="none"
}

function display(elemento){
    let elem=document.getElementById(elemento)
elem.style.display="block";
    
}
