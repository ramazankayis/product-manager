const AddProduct = ({ setIsOpen }) => {
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Yeni Ürün ekle</button>
    </div>
  );
};

export default AddProduct;
