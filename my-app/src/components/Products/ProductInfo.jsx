import React from "react";

const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">www.rAAk.com</span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
