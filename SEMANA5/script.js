const input = document.getElementById("imageURL");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const galeria = document.getElementById("galeria");

let imagenSeleccionada = null;

function seleccionar(img) {
    if (imagenSeleccionada){
        imagenSeleccionada.classList.remove("selected");
    }
    img.classList.add("selected");
    imagenSeleccionada = img;
}

const imagenes = document.querySelectorAll("#galeria img");
imagenes.forEach(function(img){
    img.addEventListener("click", function(){
        seleccionar(img);
    });
});

addBtn.addEventListener("click", function(){
    if (input.value === "") return;
    
    const img = document.createElement("img");
    img.src = input.value;

    img.addEventListener("click", function (){
       seleccionar(img);
    });

    galeria.appendChild(img);
    input.value = "";
});

deleteBtn.addEventListener("click", function(){
    if (imagenSeleccionada) {
        imagenSeleccionada.remove();
        imagenSeleccionada = null;
    }
});

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter"){
        addBtn.click();
    }
});