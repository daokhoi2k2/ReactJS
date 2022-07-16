import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MotSach from "./components/Hien1Sach";

const arrSach = [
  {
    id: 1,
    tensach: "Sống Chậm Đợi Nắng Lên",
    gia: 89000,
    urlHinh: "./nghethuatsong/song-cham-doi-nang-len.png",
    mota: "",
  },
  {
    id: 2,
    tensach: "Sống Xanh Như Những Lá Trà",
    gia: 109000,
    urlHinh: "./nghethuatsong/song-xanh-nhu-nhung-la-tra.png",
    mota: "",
  },
  {
    id: 3,
    tensach: "Sống Như Lần Đầu, Yêu Như Lần Cuối",
    gia: 99000,
    urlHinh: "./nghethuatsong/song-nhu-lan-dau-yeu-nhu-lan-cuoi.jpg",
    mota: "",
  },
  {
    id: 4,
    tensach: "Những Ngày Đầy Nắng",
    gia: 129000,
    urlHinh: "./nghethuatsong/nhung-ngay-day-nang.png",
    mota: "",
  },
  {
    id: 5,
    tensach: "Sức Mạnh Của Sự Tử Tế",
    gia: 68000,
    urlHinh: "./nghethuatsong/suc-manh-cua-su-tu-te.png",
    mota: "",
  },
  {
    id: 6,
    tensach: "Để Có Một Tương Lai",
    gia: 155000,
    urlHinh: "./nghethuatsong/de-co-mot-tuong-lai.png",
    mota: "",
  },
];

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
console.log( document.getElementById("doitac"))
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <div className="listSach">
    <MotSach sach={arrSach[0]} />
    <MotSach sach={arrSach[1]} />
    <MotSach sach={arrSach[2]} />
  </div>,
  document.getElementById("sachBanChay")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
