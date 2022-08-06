import Product from "./Product";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const ListProduct = (props) => {
  return (
    <div className="col-9 listproduct">
      <h3 className="mt-2"> Tìm được {props.listProducts.length} sản phẩm</h3>
      <div className="row">
        {props.listProducts.map((item, index) => {
          return <Product item={item} currency={props.currency} key={index} />;
        })}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return { listProducts: state.product, currency: state.changePrice.currency };
};
export default connect(mapState, null)(ListProduct);
