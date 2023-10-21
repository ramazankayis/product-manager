import { useState } from "react";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";
import Counter from "../Counter";

const ProductItem = ({ product, setProducts, products }) => {
  const { imageUrl, productName, productPrice } = product;
  let [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(productPrice);
  // let title = productName;
  const ekleme = () => {
    //  title= "Güncellendi!"
    setTitle("Güncellendi!");
    console.log(productName, "Güncellendi");
  };

  const deleteHandler = () => {
    console.log(product);

    //products.filter((item) => item.id === product.id);
    setProducts(products.filter((item) => item.id !== product.id));
  };
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>

        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        >
          <span>{counter}₺</span>
        </Counter>
        <br />
        <button onClick={ekleme}>Güncelle</button>
        <button onClick={deleteHandler} className="btn-delete">
          sil
        </button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
