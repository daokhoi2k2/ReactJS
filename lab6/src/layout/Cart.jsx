export default function Cart({ checkLogin }) {
  return (
    <div>
      {checkLogin == false ? (
        <h5 className="pt-4 pb-4 text-danger">
          <span>Bạn chưa đăng nhập!</span> <br />
          <i>Vui lòng đăng nhập để tiến hành mua hàng</i>
        </h5>
      ) : (
        <div>
          <h1>Giỏ hàng</h1>
          <h5 className="pt-4 pb-4">
            <i>Chưa có sản phẩm nào trong giỏ hàng</i>
          </h5>
        </div>
      )}
    </div>
  );
}
