import React, { createContext, useState } from "react";

export default function Bai3() {
  let product = [
    {
      name: "Primitives By Kathy 6 Ghost Dog Halloween Block Sign 113689",
      image:
        "https://cdn11.bigcommerce.com/s-nn06ox/images/stencil/320w/products/11685/29539/113689__44713.1658247572.jpg?c=2",
      number: 1,
      id: "1",
    },
    {
      name: "Primitives By Kathy 5 Porch Steps And Pumpkins Wooden Sign Fall Decoration 113679",
      image:
        "https://cdn11.bigcommerce.com/s-nn06ox/images/stencil/320w/products/11684/29537/113679__93665.1658246663.jpg?c=2",
      number: 1,
      id: "2",
    },
    {
      name: "Primitives By Kathy 13 Happy Halloween Wall Hanging Sign 113482",
      image:
        "https://cdn11.bigcommerce.com/s-nn06ox/images/stencil/320w/products/11683/29535/113482__73757.1658245426.jpg?c=2",
      number: 1,
      id: "3",
    },
    {
      name: "Primitives By Kathy 7 You're Creepin' Meowt Halloween Block Sign 109283",
      image:
        "https://cdn11.bigcommerce.com/s-nn06ox/images/stencil/320w/products/10484/26959/apiyybfi2__69714.1646091909.jpg?c=2",
      number: 1,
      id: "4",
    },
  ];
  const MyContext = createContext();
  const [cart, setCart] = useState([]);
  //Hiện giỏ hàng
  class HienCart extends React.Component {
    render() {
      return (
        <div>
          <h1>Sản phẩm đã chọn</h1>
          {this.context.cart.map((item, index) => (
            <p key={index}>
              {item.name} - {item.number}
            </p>
          ))}
        </div>
      );
    }
  }
  HienCart.contextType = MyContext;

  //Hiện List sản phẩm
  class ListSach extends React.Component {
    static contextType = MyContext;
    render() {
      return (
        <div className="listSach_container">
          <h4 className="pb-4 pt-4">CÁC SẢN PHẨM ĐANG CÓ</h4>
          <div className="container row">
            {this.context.product.map((item, index) => (
              <div className="col-3 mb-4" key={index}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top img_cart"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title truncate">{item.name}</h5>
                    <button
                      onClick={() => updateCart(item)}
                      type="button"
                      className="btn btn-primary"
                    >
                      Chọn
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  const updateCart = (product) => {
    const index = cart.findIndex((x) => x.id == product.id);
    console.log(index);
    if (index !== -1) {
      cart[index].number += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <MyContext.Provider
        value={{ product: product, cart: cart, updateCart: updateCart }}
      >
        <ListSach />
        <MyContext.Consumer>{() => <HienCart />}</MyContext.Consumer>
      </MyContext.Provider>
    </div>
  );
}
