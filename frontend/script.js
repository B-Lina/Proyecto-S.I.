// Lista de productos disponibles
const productos = [
    { nombre: 'Collar de Plata', precio: 25000, imagen: './images/collar-plata.jpg' },
    { nombre: 'Pulsera de Oro', precio: 45000, imagen: './images/pulsera-oro.jpg' },
    { nombre: 'Anillo de Zafiro', precio: 40000, imagen: './images/anillo-zafiro.jpg' },
    { nombre: 'Pendientes de Perla', precio: 35000, imagen: './images/pendientes-perla.jpg' },
];
//Productos en inventario
function mostrarProductos(listaProductos) {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

    listaProductos.forEach(producto => {
        // Crear un div para cada producto
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        // Agregar imagen del producto
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        productoDiv.appendChild(imagen);

        // Agregar el nombre del producto
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        productoDiv.appendChild(nombre);

        // Agregar el precio del producto
        const precio = document.createElement('p');
        precio.textContent = `Precio: $ ${producto.precio}`;
        productoDiv.appendChild(precio);

        // Añadir el div del producto al contenedor principal
        productosContainer.appendChild(productoDiv);
    });
}

// Función para filtrar productos por búsqueda
function filtrarProductos() {
    const filtro = document.getElementById('search').value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(filtro));
    mostrarProductos(productosFiltrados);
}

// Mostrar todos los productos al cargar la página
window.onload = function() {
    mostrarProductos(productos);
};
