import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actAddProduct } from "../action/actProduct"; //Import các actions

const AddProduct = (props) => {
  const [content, setContent] = useState();
  const refName = useRef("");
  const refPrice = useRef("");
  const refImage = useRef("");

  const handleAddProduct = () => {
    props.Product(
      refName.current.value,
      refPrice.current.value,
      refImage.current.value
    );
    refName.current.value = "";
    refPrice.current.value = "";
    refImage.current.value = "";
  };

  return (
    <div className="col-3 addproduct">
      <form className="text-left pt-3 pb-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Tên sản phẩm
          </label>
          <input ref={refName}  type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá
          </label>
          <input ref={refPrice} type="number" className="form-control" id="price" />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Ảnh
          </label>
          <input ref={refImage} type="text" className="form-control" id="image" />
        </div>
        <button onClick={handleAddProduct} type="button" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    Product: (name, price, image) => {
      dispatch(actAddProduct(name, price, image));
    },
  };
};
export default connect(null, mapDispatch)(AddProduct);
