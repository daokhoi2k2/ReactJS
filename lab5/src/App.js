import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import TrangChu from "./components/Trangchu";
import LienHe from "./components/Lienhe";
import GioHang from "./components/Giohang";

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Liên hệ</Link>
          <Link to="/cart">Giỏ hàng</Link>
          <Link to="/list_sach">Sản phẩm</Link>
        </nav>
      </header>
      <main>
        <article>
          <Routes>
            <Route path="/" exact element={<TrangChu />} />
            <Route path="/about" element={<LienHe />} />
            <Route path="/cart" element={<GioHang />} />
            <Route path="/list_sach" exact element={<GioHang />} />
          </Routes>
          <input></input>
        </article>
        <aside>Thông tin bổ sung</aside>
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
