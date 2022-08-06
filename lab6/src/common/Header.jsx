import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actChangePrice } from "../action/actProduct";

const Header = (props) => {
  return (
    <ul className="nav bg-info navbars">
      <li className="nav-item">
        <Link className="nav-link text-white active" to="/">
          Trang chủ
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/contact">
          Liên hệ
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/login">
          Đăng nhập
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/cart">
          Giỏ hàng
        </Link>
      </li>
      <div className="price_set text-white">
        <span onClick={() => props.changePrice("vi")}>VN</span>
        <span onClick={() => props.changePrice("usd")}>US</span>
      </div>
    </ul>
  );
};
// export default Header;

const mapDispatchToProps = (dispatch) => {
  return {
    changePrice: (currency) => {
      dispatch(actChangePrice(currency));
    },
  };
};
export default connect(null, mapDispatchToProps)(Header);
