class Productos{
    constructor(){
        this.productos = [];
        this.id = 0
    }
    addProducto(producto){
        const prod = this.productos.find(prod = prod.id == id)
        return prod || {error: "No se encontro el producto"}
    }

    getProducto(){
        return this.productos;
    }

    saveProducto(prod){
        const newProd = {...prod, id: this.id++}
        this.productos.push(newProd)
        return newProd
    }

    actualizar(prod,id){
        const newProd = {id: Number (id), ...prod}
        const index = this.productos.findIndex(prod => prod.id == id)
        if(index !== -1){
            this.productos[index] = newProd
            return newProd
        } else {
            return {error: "No se encontro el producto"}
        }
    }
    delete(id){
        const index = this.productos.findIndex(prod => prod.id == id)
        if(index !== -1){
            this.productos.splice(index,1)
            return {success: "Producto eliminado"}
        } else {
            return {error: "No se encontro el producto"}
        }
    }
}

module.exports = Productos;