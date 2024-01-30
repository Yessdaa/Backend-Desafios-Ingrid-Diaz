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
  
    addProduct({ titulo, descripcion, precio, imagen, codigo, stock }) {
      const id = this.generateId();
      const product = { id, titulo, descripcion, precio, imagen, codigo, stock };
  

      if (this.products.some((p) => p.code === code)) {
        throw new Error("Error: Código de producto repetido");
      }
  
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
  }
  

  const productManager = new ProductManager();
  
  console.log("Productos al inicio:", productManager.getProducts());
  
  const productId = productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "https://www.kourus.cl/wp-content/uploads/2023/03/icono-de-concepto-degradado-azul-prueba-producto-investigacion-profesional-analisis-datos-ilustracion-linea-delgada-idea-190698993.jpeg",
    code: "abc123",
    stock: 25,
  });
  
  console.log("Producto agregado con ID:", productId);
  console.log("Productos después de agregar:", productManager.getProducts());
  
  try {
 
    productManager.addProduct({
      title: "producto prueba",
      description: "Este es un producto prueba",
      price: 200,
      thumbnail: "https://www.kourus.cl/wp-content/uploads/2023/03/icono-de-concepto-degradado-azul-prueba-producto-investigacion-profesional-analisis-datos-ilustracion-linea-delgada-idea-190698993.jpeg",
      code: "abc123",
      stock: 25,
    });
  } catch (error) {
    console.error("Error al agregar producto duplicado:", error.message);
  }
  
  
  try {
    const nonExistingProductId = "nonExistingId";
    const retrievedProduct = productManager.getProductById(nonExistingProductId);
    console.log("Producto recuperado por ID:", retrievedProduct);
  } catch (error) {
    console.error("Error al recuperar producto por ID:", error.message);
  }
  