let libros = [
    {
        id: 1,
        titulo: "Cuentos completos de Lorrie Moore",
        autor: "Lorrie Moore",
        genero: "literatura",
        precio: 2500,
        stock: 3,
    },

    {
        id: 2,
        titulo: "Las palabras justas",
        autor: "Milena Busquets",
        genero: "literatura",
        precio: 3000,
        stock: 2,
    },

    {
        id: 3,
        titulo: "La teoria de los archipiélagos",
        autor: "Alice Keller",
        genero: "literatura",
        precio: 4000,
        stock: 5,
    },

    {
        id: 4,
        titulo: "Diccionario Holandés",
        autor: "Libreía universitaria",
        genero: "idiomas",
        precio: 2000,
        stock: 1,
    },
    {
        id: 5,
        titulo: "Ready for B2 first",
        autor: "Macmillan education",
        genero: "idiomas",
        precio: 5500,
        stock: 6,
    },
    {
        id: 6,
        titulo: "Rayuela",
        autor: "Julio Cortazar",
        genero: "literatura",
        precio: 3000,
        stock: 7,
    },
]

let productos = libros.map(libros => { return new Producto(libros.id, libros.titulo, libros.autor, libros.genero, libros.precio) })

let carrito = []
let listaProductos = "Para comprar seleccione numero del libro \n Seleccione 10 para filtrar por genero \n seleccione 0 para salir\n Seleccione 11 para pagar" + productos.map(productos => productos.id + " " + productos.nombre()).join("\n")
let pago = "Como desea pagar?\n Transferencia \n Tarjeta de credito"
let listaCategoria = "Seleccione un genero \n" + ["literatura", "idiomas"].join("\n")

do {
    opcion = Number(prompt(listaProductos))
    if (opcion === 10) {
        let libroCategoria = prompt(listaCategoria).toLowerCase()
        let libroGenero = productos.filter(productos => productos.genero == libroCategoria)
        alert(JSON.stringify(libroGenero))
    } else {
        if (opcion != 10) {
            let libroSeleccionado = productos.find(productos => productos.id === opcion && productos.id != 10)
            carrito.push({
                nombre: libroSeleccionado.titulo,
                autor: libroSeleccionado.autor,
                precioUnidad: libroSeleccionado.precio,
                subtotal: libroSeleccionado.precio,
                unidades: 1
            })
            alert(JSON.stringify(carrito))
        }
    }
}
while (opcion != 0)
