class Productmanager{
    constructor(){
        this.products = [];
    }
    
    static id = 0
    addProduct(title, description, price, image, code, stock){
        Productmanager.id++
        this.products.push({ title, description, price, image, code, stock, id:Productmanager.id});
    }

    getProduct() {
        return this.products;
        }

        getProductById(id){
            if(this.products.find((producto) => producto.id === id)){
                console.log("No disponible")
            } else{
                console.log("Disponible")
            }
        }

}

const productos = new Productmanager

productos.addProduct("Manzana", "Verde", 100, "imagen1", "abc123", 5)

console.log(productos.getProduct());
console.log(productos.getProductById(2))