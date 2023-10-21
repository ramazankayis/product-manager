import { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";

const NewProduct = ({ products, setProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onSaveProduct = (newProductData) => {
    setProducts([...products, newProductData]);
  };
  return (
    <div className="new-product-wrapper">
      {isOpen ? (
        <ProductForm onSaveProduct={onSaveProduct} products={products} setIsOpen={setIsOpen} />
      ) : (
        <AddProduct  setIsOpen={setIsOpen}/>
      )}
    </div>
  );
};

export default NewProduct;
