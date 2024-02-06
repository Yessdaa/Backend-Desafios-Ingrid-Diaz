class ProductManager {
    constructor(filePath) {
      this.path = filePath;
    }
  
    addProduct(product) {
      const products = this.readFromFile();
      product.id = this.generateId(products);
      products.push(product);
      this.saveToFile(products);
    }
  
    getProducts(id) {
      const products = this.readFromFile();
      return products.find(product => product.id === id);
    }
  
    updateProduct(updatedProduct) {
      const products = this.readFromFile();
      const index = products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        products[index] = updatedProduct;
        this.saveToFile(products);
      }
    }
  
    deleteProduct(id) {
      const products = this.readFromFile();
      const filteredProducts = products.filter(product => product.id !== id);
      this.saveToFile(filteredProducts);
    }
  
    readFromFile() {
      try {
        const data = fs.readFileSync(this.path, 'utf8');
        return JSON.parse(data) || [];
      } catch (error) {
        return [];
      }
    }
  
    saveToFile(products) {
      fs.writeFileSync(this.path, JSON.stringify(products, null, 2), 'utf8');
    }
  
    generateId(products) {
      const maxId = products.reduce((max, product) => (product.id > max ? product.id : max), 0);
      return maxId + 1;
    }
  }
  
  // Example usage:
  const productManager = new ProductManager('products.json');
  
  const newProduct = {
    title: 'Katanas anime',
    description: 'Tenemos variedad de Katanas, y también de tu anime favorito',
    price: 499.99,
    thumbnail: 'https://images.app.goo.gl/Xfvczt3XP2D7Ub2FA',
    code: 'ABC123',
    stock: 250
  };
  
  productManager.addProduct(newProduct);
  
  const productId = 1;
  const retrievedProduct = productManager.getProducts(productId);
  console.log('Retrieved Product:', retrievedProduct);
  
  const updatedProduct = { id: productId, title: 'Updated Product', /* other updated fields */ };
  productManager.updateProduct(updatedProduct);
  
  productManager.deleteProduct(productId);