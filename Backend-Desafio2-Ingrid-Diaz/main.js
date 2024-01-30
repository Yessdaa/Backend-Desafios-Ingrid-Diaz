class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateId() {
      return Math.random().toString(36).substr(2, 9);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {
      const id = this.generateId();
      const product = { id, title, description, price, thumbnail, code, stock };
  
   
      if (this.products.some((p) => p.id === id)) {
        throw new Error("Error: ID generado repetido");
      }
  
      this.products.push(product);
      return id;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
  
      if (!product) {
        throw new Error("Error: Producto no encontrado");
      }
  
      return product;
    }
  
    updateProduct(id, updatedFields) {
      const productIndex = this.products.findIndex((p) => p.id === id);
  
      if (productIndex === -1) {
        throw new Error("Error: Producto no encontrado");
      }
  
    
      updatedFields.id = id;
  
      this.products[productIndex] = { ...this.products[productIndex], ...updatedFields };
    }
  
    deleteProduct(id) {
      const productIndex = this.products.findIndex((p) => p.id === id);
  
      if (productIndex === -1) {
        throw new Error("Error: Producto no encontrado");
      }
  
      this.products.splice(productIndex, 1);
    }
  }
  

  const productManager = new ProductManager();
  
  console.log("Productos al inicio:", productManager.getProducts());
  
  const productId = productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
  
  console.log("Producto agregado con ID:", productId);
  console.log("Productos después de agregar:", productManager.getProducts());
  
  const retrievedProduct = productManager.getProductById(productId);
  console.log("Producto recuperado por ID:", retrievedProduct);
  
  productManager.updateProduct(productId, { price: 250 });
  console.log("Producto actualizado:", productManager.getProductById(productId));
  
  productManager.deleteProduct(productId);
  console.log("Productos después de eliminar:", productManager.getProducts());
  