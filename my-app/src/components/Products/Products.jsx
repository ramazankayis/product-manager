import ProductItem from "./ProductItem";
import "./Products.css";

import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(productData);
  console.log("products", products);
  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products={products} />
      <h1>Products</h1>
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product}  setProducts={setProducts} products={products}/>
          ))
        ) : (
          <p> Hiç ürün yok</p>
        )} 
      </div>
    </div>
  );
};

export default Products;
