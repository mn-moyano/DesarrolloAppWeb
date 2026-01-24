const productos =[
    {
        nombre: "Laptop",
        precio: 500,
        descripcion: "Computadora portátil marca DELL"
    },
    {
        nombre: "Teclado",
        precio: 12,
        descripcion: "Teclado inalámbrico marca Genius"
    },
    {
        nombre: "Calculadora",
        precio: 20,
        descripcion: "Calculadora marca CASIO" 
    },
    {
        nombre: "Disco duro",
        precio: 55,
        descripcion: "Disco externo de 1T marca Toshiba"
    }
];

const lista = document.getElementById("ListaProductos");

function renderizaProductos(){
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio} - ${producto.descripcion}`;
        lista.appendChild(li);
    });
}

renderizaProductos();

const boton = document.getElementById("btnAgregar");

boton.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Mouse",
        precio: 5,
        descripcion: "Mouse inalámbrico marca Logitech"
    };
    
    productos.push(nuevoProducto);

    renderizaProductos();
});
