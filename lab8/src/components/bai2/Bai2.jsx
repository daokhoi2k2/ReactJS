import React, { createContext } from "react";

export default function Bai2() {
  const MyContext = createContext();
  class LeuLeu extends React.Component {
    render() {
      return (
        <div>
          <h2>Ông hiện lên và nói</h2>
          <h4>{this.context}</h4>
        </div>
      );
    }
  }
  LeuLeu.contextType = MyContext;

  return (
    <div>
      <MyContext.Provider value={"Lêu lêu mấy đứa không có bồ :vvv"}>
        <LeuLeu />
      </MyContext.Provider>
    </div>
  );
}
