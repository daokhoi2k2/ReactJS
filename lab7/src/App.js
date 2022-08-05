import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoaiSach from "./components/LoaiSach";
import LoaiSachDetail from "./components/LoaiSachDetail";
import LoaiSachThem from "./components/LoaiSachThem";
import LoaiSachUpdate from "./components/LoaiSachUpdate";
import Navbar from "./components/Nav";
import Sach from "./components/Sach";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="loaiSach">
              <Route index element={<LoaiSach />} />
              <Route path="update/:id" element={<LoaiSachUpdate />} />
              <Route path=":id" element={<LoaiSachDetail />} />
              <Route path="add" element={<LoaiSachThem />} />
            </Route>
            <Route path="sach" element={<Sach />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
