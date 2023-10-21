import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  //   const [productName, setProductName] = useState("");
  //   const [productPrice, setProductPrice] = useState(0);
  //   const [imageUrl, setImageUrl] = useState("");

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    imageUrl: "",
  });

  const titleChangeHandler = (event) => {
    // setProductName(event.target.value);
    // setProductData({ ...productData, productName: event.target.value });
    setProductData((prevState) => {
      return { ...prevState, productName: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    // setProductPrice(event.target.value);
    setProductData({ ...productData, productPrice: event.target.value });
  };
  const imageChangeHandler = (event) => {
    // setImageUrl(event.target.value);
    setProductData({ ...productData, imageUrl: event.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("çalıştı");
    const newProductData = {
      id: props.products.lenght + 1,
      productName: productData.productName,
      productPrice: productData.productPrice,
      imageUrl: productData.imageUrl,
    };

    // props.setProducts((prevState) => [...prevState, newProductData]);
    props.onSaveProduct(newProductData);
    console.log("newProductData", newProductData);
    setProductData({ productName: "", productPrice: "", imageUrl: "" });
  };

  console.log("productData", productData);
  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Ürün Adı : </label>
        <input
          type="text"
          placeholder="Ürün adı giriniz.."
          onChange={titleChangeHandler}
          value={productData.productName}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı : </label>
        <input
          type="number"
          placeholder="Ürün Fiyatı giriniz.."
          onChange={priceChangeHandler}
          value={productData.productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli : </label>
        <input
          type="text"
          placeholder="Ürün Görseli giriniz.."
          onChange={imageChangeHandler}
          value={productData.imageUrl}
        />
      </div>
      <div className="form-buttons">
      <button className="product-form-button">Ürün ekle</button>
      <button className="product-form-button cancel" type="button" onClick={()=>props.setIsOpen (false)}>Vazgeç</button>
      </div>
    </form>
  );
};

export default ProductForm;
