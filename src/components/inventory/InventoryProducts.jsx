import React, { useState } from "react";
import "../../styles/components/inventory/InventoryProducts.css";

const InventoryProducts = () => {
  // Sample product data
  const initialProducts = [
    { id: 1, name: "Nike Air Max", category: "Shoes", price: 120, stock: 10 },
    { id: 2, name: "Adidas Ultraboost", category: "Shoes", price: 140, stock: 5 },
    { id: 3, name: "Apple iPhone 14", category: "Electronics", price: 999, stock: 15 },
    { id: 4, name: "Samsung Galaxy S23", category: "Electronics", price: 899, stock: 8 },
  ];

  // State for products, form inputs, and filters
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", stock: "" });

  // Handle input changes for search & new product
  const handleSearchChange = (e) => setSearch(e.target.value.toLowerCase());
  const handleInputChange = (e) =>
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });

  // Add a new product
  const addProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stock) return;
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ name: "", category: "", price: "", stock: "" });
  };

  // Delete a product
  const deleteProduct = (id) => setProducts(products.filter((product) => product.id !== id));

  return (
    <div className="inventory-products">
      <h1>📦 Manage Products</h1>
      <p>Here you can add, edit, or delete products from the store.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={handleSearchChange}
        className="search-bar"
      />

      {/* Product List */}
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) => product.name.toLowerCase().includes(search))
            .map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteProduct(product.id)}>
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Add Product Form */}
      <h2>➕ Add New Product</h2>
      <div className="add-product-form">
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} />
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
        <input type="number" name="stock" placeholder="Stock Quantity" value={newProduct.stock} onChange={handleInputChange} />
        <button onClick={addProduct}>✅ Add Product</button>
      </div>
    </div>
  );
};

export default InventoryProducts;
