import React from 'react';

const ProductDetails = () => {
  return (
    <div>
      <h1>Product Name</h1>
      <img src="product-image.jpg" alt="Product Name" />
      <p>Product Description</p>
      <p>Price: $99.99</p>
      <button>Add to Cart</button>
      
      <section className="related-products">
        <h2>Related Products</h2>
        {/* Map over related products */}
      </section>
    </div>
  );
};

export default ProductDetails;
