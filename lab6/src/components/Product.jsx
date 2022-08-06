import { connect } from "react-redux";

const Product = ({ item, currency }) => {
  const { id, name, price, image } = item;

  const giaSP = (price) => {
    if (currency === "usd")
      return (
        (price / 23).toLocaleString("en-US", { maximumFractionDigits: 0 }) +
        " USD"
      );
    else return price.toLocaleString() + " VNĐ";
  };

  return (
    <a href="" className="Book col-4 mt-3 mb-3">
      <img className="img-thumbnail" src={image} alt={name} />
      <h5 className="truncate">{name}</h5>
      <strong className="gia">{giaSP(price)}</strong>
      <p className="button d-none">
        <button className="btn btn-success mx-1" type="button">
          Xóa
        </button>
        <button className="btn btn-dark" type="button">
          Chọn
        </button>
      </p>
    </a>
  );
};

export default Product;
