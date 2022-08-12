import React, { createContext } from "react";

export default function Bai1() {
  // Câu A
  const MyContext = createContext();

  // Câu B
  class Info extends React.Component {
    render() {
      let cart = this.context;
      return (
        <div>
          <h4>Số SP : {cart.SoSP}</h4>
          <h4>Tiền: {cart.ThanhTien}</h4>
        </div>
      );
    }
  }
  Info.contextType = MyContext;

  //   Câu C
  const message = "Lêu Lêu mấy đứa không có người yêu";

  const OngNoi = () => {
    return <Cha message={message} />;
  };

  const Cha = (props) => {
    return <Chau {...props} />;
  };

  const Chau = (props) => {
    return (
      <h4>
        Trời ơi ông bảo <strong>{props.message}</strong>
      </h4>
    );
  };

  return (
    <div>
      <hr />
      <h2>Ví dụ 1: Provider, Consumer</h2>
      <MyContext.Provider value={"Thứ bảy máy chảy về tim"}>
        <MyContext.Consumer>{(value) => <h4> {value}</h4>}</MyContext.Consumer>
      </MyContext.Provider>
      <hr />

      <h2>Ví dụ 2: ContextType</h2>
      <MyContext.Provider value={{ ThanhTien: 125000, SoSP: 5 }}>
        <MyContext.Consumer>{() => <Info />}</MyContext.Consumer>
      </MyContext.Provider>
      <hr />

      <h2>Ví dụ 3: Truyền giá trị không dùng context</h2>
      <OngNoi />
      <hr />
    </div>
  );
}
