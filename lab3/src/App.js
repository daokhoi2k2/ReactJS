import logo from "./logo.svg";
import "./App.css";
import ListSach from "./components/ListSach";
import HienGioHang from "./components/HienGioHang";
import { useState } from "react";

function App() {
  const [sachDaChon, setSachDaChon] = useState([]);
  let [soSachDaChon, setSoSachDaChon] = useState(0);

  const chonSach = (sach) => {
    const newSachDaChon = [...sachDaChon];
    newSachDaChon.push(sach);
    setSoSachDaChon(++soSachDaChon);
    setSachDaChon(newSachDaChon);
  };

  const removeSachDaChon = (index) => {
    const newSachDaChon = [...sachDaChon];

    newSachDaChon.splice(index, 1);

    setSachDaChon(newSachDaChon);
  };

  return (
    <div className="container">
      <header>ĐỌC SÁCH CHO ĐỜI THÊM VUI</header>
      <main>
        <article>
          <ListSach chonSach={chonSach} />
        </article>
        <aside>
          <div id="divCart">
            <HienGioHang removeSachDaChon={removeSachDaChon} sach={sachDaChon} />
          </div>
          <div id="timSach">Tim sách</div>
        </aside>
      </main>
      <footer>PS18239 - Đào Đức Minh Khôi</footer>
    </div>
  );
}

export default App;
