class Producto {
    constructor(id, titulo, autor, genero, precio, stock) {
        this.id = id
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.precio = precio
        this.stock = stock
    }

    descuento() {
        return (this.precio * 10) / 100
    }

    vendido() {
        return "El producto solicitado está fuera de stock"
    }

    nombre() {
        return this.titulo + ", " + this.autor
    }
}