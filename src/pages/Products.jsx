import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateItemQuantity } from "../redux/CartSlice";
import "../styles/pages/product.css";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [availability, setAvailability] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("priceAsc");
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    available: true,
  });

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const initialQuantities = cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cartItems]);
  const handleAddToCart = (product) => {
    setQuantities((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));

    const productWithQuantity = {
      ...product,
      quantity: (quantities[product.id] || 0) + 1,
    };
    dispatch(addToCart(productWithQuantity));
  };

  const handleRemoveFromCart = (product) => {
    setQuantities((prev) => {
      const updatedQuantity = (prev[product.id] || 0) - 1;

      if (updatedQuantity >= 0) {
        dispatch(
          updateItemQuantity({ id: product.id, quantity: updatedQuantity })
        );
      }

      return {
        ...prev,
        [product.id]: updatedQuantity >= 0 ? updatedQuantity : 0,
      };
    });
  };

  useEffect(() => {
    const fetchedProducts = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "image1.jpg",
        category: "electronics",
        available: true,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "image2.jpg",
        category: "clothing",
        available: true,
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "image3.jpg",
        category: "electronics",
        available: true,
      },
    ];
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) => {
      return (
        (category ? product.category === category : true) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (availability ? product.available : true) &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          searchQuery === "")
      );
    });

    if (sortOption === "priceAsc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "nameAsc") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "nameDesc") {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(filtered);
  }, [category, priceRange, availability, searchQuery, sortOption, products]);

  // Handle adding a new product
  const handleAddProduct = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitProduct = () => {
    const newProductWithId = {
      ...newProduct,
      id: products.length + 1,
      price: parseFloat(newProduct.price),
    };

    setProducts([...products, newProductWithId]);
    setFilteredProducts([...products, newProductWithId]);
    setIsModalOpen(false);
    setNewProduct({ name: "", price: "", category: "", available: true }); // Reset the form
  };

  // Handle input changes in modal form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 id="product-tittle">{t("products.title")}</h2>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder={t("products.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add Product Button */}
      <button className="add-product-btn" onClick={handleAddProduct}>
        {t("products.addProductButton")}
      </button>

      {/* Filters Section */}
      {showFilters && (
        <aside className={`filters ${showFilters ? "show" : ""}`}>
          <h3>{t("products.filters")}</h3>
          <div>
            <label>{t("products.category")}:</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">{t("products.all")}</option>
              <option value="electronics">{t("products.electronics")}</option>
              <option value="clothing">{t("products.clothing")}</option>
            </select>
          </div>
          <div>
            <label>{t("products.priceRange")}:</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
            />
            <span>
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
          <div>
            <label>{t("products.availability")}:</label>
            <input
              type="checkbox"
              checked={availability}
              onChange={() => setAvailability(!availability)}
            />
            <span>
              {availability
                ? t("products.available")
                : t("products.outOfStock")}
            </span>
          </div>
        </aside>
      )}

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <p className="no-products-message">
          {t("products.noProductsFound")}{" "}
          <a href="#filters">{t("products.tryAdjustingFilters")}</a>
        </p>
      )}

      <section className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <p>
              {product.available
                ? t("products.inStock")
                : t("products.outOfStock")}
            </p>
            <p>
              {t("products.quantityInCart")}: {quantities[product.id] || 0}
            </p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              {t("products.addToCart")}
            </button>
            <button
              className="remove-from-cart-btn"
              onClick={() => handleRemoveFromCart(product)}
            >
              {t("products.removeFromCart")}
            </button>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{t("products.modalTitle")}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitProduct();
              }}
            >
              <div>
                <label>{t("products.name")}:</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>{t("products.price")}:</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>{t("products.category")}:</label>
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">{t("products.selectCategory")}</option>
                  <option value="electronics">
                    {t("products.electronics")}
                  </option>
                  <option value="clothing">{t("products.clothing")}</option>
                </select>
              </div>
              <div>
                <label>{t("products.availability")}:</label>
                <input
                  type="checkbox"
                  name="available"
                  checked={newProduct.available}
                  onChange={(e) =>
                    setNewProduct((prevProduct) => ({
                      ...prevProduct,
                      available: e.target.checked,
                    }))
                  }
                />
                <span>
                  {newProduct.available
                    ? t("products.available")
                    : t("products.outOfStock")}
                </span>
              </div>
              <button type="submit">{t("products.submit")}</button>
              <button type="button" onClick={handleCloseModal}>
                {t("products.cancel")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
