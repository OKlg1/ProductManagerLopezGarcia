class ProductManager {
    #precioBaseDeGanancia = 0.15
    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, stock) {
        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            stock
        }
        this.products.push(newProduct)
    }

	getProductById({productId}) {
        let result = this.products.find(pcts => pcts.id === productId)
        return result === 'undefined' ? 'Not found' : result
    }
}

const productManager = new ProductManager()
console.log(productManager.addProduct('Reloj', 'Reloj con diamantes', 30000, 'url', 5))
console.log(productManager.addProduct('Pulsera', 'Pulsera de plata', 15000, 'url', 25))
console.log(productManager.addProduct('Anillo', 'Anillo de oro blanco', 25000, 'url', 10))
console.log(productManager.addProduct('dije', 'Dije con Zafiro', 21000, 'url', 15))
console.log(productManager.getProducts())